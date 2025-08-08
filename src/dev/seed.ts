/* prisma/seed.ts */
import { PrismaClient, Prisma, AlertType as PrismaAlertType } from '../generated/prisma';
import * as Faker from '@faker-js/faker';

// Use Prisma's runtime enum object to avoid TS enum (unsupported in strip-only mode)
type AlertType = typeof PrismaAlertType[keyof typeof PrismaAlertType];
const AlertType = PrismaAlertType;

const faker = Faker.faker;
const prisma = new PrismaClient();

// ---- CONFIG ----
const VEHICLE_COUNT = 10;
const READINGS_MIN = 10;
const READINGS_MAX = 15;
const ORIGIN = { lat: 28.6139, long: 77.2090 }; // Delhi-ish
const NOW = new Date();

// deterministic seed for repeatable data
faker.seed(42069);

type Reading = {
  timestamp: Date;
  fuelLevel: number;
  distanceKm: number;
  locationLat: number;
  locationLong: number;
  speed: number;
  ignitionStatus: string | null;
  odometer: number | null;
  deviceVoltage: number | null;
  isOverSpeed: boolean | null;
  processed: boolean;
  event?: AlertType; // for history generation
  delta?: number;    // signed fuel change vs previous
};

function randIn(min: number, max: number) {
  return faker.number.float({ min, max });
}

function randint(min: number, max: number) {
  // faker.number.int({ min, max }) is inclusive, but ensure min <= max
  if (min > max) [min, max] = [max, min];
  return faker.number.int({ min, max });
}

function jitter(base: number, wiggle: number) {
  return base + randIn(-wiggle, wiggle);
}

function addMinutes(d: Date, minutes: number) {
  return new Date(d.getTime() + minutes * 60_000);
}

/**
 * Generate 10-15 readings with realistic dynamics:
 * - gradual usage while driving
 * - occasional REFUEL spikes
 * - occasional THEFT drops
 * - LOW_FUEL when < 30L
 */
function generateReadingsSeries(): Reading[] {
  const n = randint(READINGS_MIN, READINGS_MAX);
  const out: Reading[] = [];

  let t = addMinutes(NOW, -randint(24 * 60, 72 * 60)); // last 1–3 days
  let fuel = randIn(120, 250); // start between 120–250 L (under 300)
  let odometer = randIn(10_000, 50_000);
  let lastLat = ORIGIN.lat;
  let lastLong = ORIGIN.long;

  // indices for events
  const theftIdx = new Set<number>();
  const refuelIdx = new Set<number>();
  // ~1–2 events each (maybe)
  if (n >= 10) theftIdx.add(randint(2, n - 3));
  if (n >= 12 && Math.random() < 0.7) theftIdx.add(randint(3, n - 2));
  if (n >= 10) refuelIdx.add(randint(2, n - 3));
  if (n >= 12 && Math.random() < 0.6) refuelIdx.add(randint(4, n - 2));

  for (let i = 0; i < n; i++) {
    // time advances 30–90 mins
    t = addMinutes(t, randint(30, 90));

    // driving or idle?
    const driving = Math.random() < 0.7;
    const speed = driving ? randIn(20, 85) : randIn(0, 5);
    const distance = driving ? randIn(2, 18) : 0;
    odometer += distance;
    const isOverSpeed = speed > 60;

    // base consumption rate (km per liter inverse) ~3 km/L → ~0.333 L/km
    const baseKmpl = randIn(2.2, 4.5);
    const litersUsed = driving ? distance / baseKmpl : 0;

    // event overrides
    let event: AlertType | undefined = undefined;
    let delta = 0;

    if (theftIdx.has(i) && fuel > 45) {
      const stolen = randIn(10, 40); // theft drop
      delta = -stolen;
      event = AlertType.THEFT;
    } else if (refuelIdx.has(i) && fuel < 260) {
      const refill = randIn(20, 60); // refuel jump
      delta = refill;
      event = AlertType.REFUEL;
    } else {
      delta = -litersUsed;
    }

    fuel = Math.max(0, Math.min(299, fuel + delta));

    if (fuel < 30 && !event) {
      event = AlertType.LOW_FUEL;
    }

    // random walk around origin
    lastLat = jitter(lastLat, 0.01);
    lastLong = jitter(lastLong, 0.01);

    out.push({
      timestamp: new Date(t),
      fuelLevel: Number(fuel.toFixed(2)),
      distanceKm: Number(distance.toFixed(2)),
      locationLat: Number(lastLat.toFixed(6)),
      locationLong: Number(lastLong.toFixed(6)),
      speed: Number(speed.toFixed(1)),
      ignitionStatus: driving ? 'ON' : Math.random() < 0.5 ? 'OFF' : 'ON',
      odometer: Number(odometer.toFixed(1)),
      deviceVoltage: Number(randIn(12.0, 14.0).toFixed(2)),
      isOverSpeed,
      processed: true,
      ...(event !== undefined ? { event } : {}),
      delta: Number(delta.toFixed(2)),
    });
  }

  // Ensure at least one NORMAL (no flagged event)
  if (!out.some(r => !r.event)) {
    const idx = randint(0, out.length - 1);
    out[idx]!.event = AlertType.NORMAL;
  }

  return out.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
}

async function main() {
  console.log('🌱 Seeding database...');

  // Clean slate (order matters due to FKs)
  await prisma.summaryMetrics.deleteMany();
  await prisma.history.deleteMany();
  await prisma.alert.deleteMany();
  await prisma.sensorReading.deleteMany();
  await prisma.sensor.deleteMany();
  await prisma.driver.deleteMany();
  await prisma.vehicle.deleteMany();
  await prisma.route.deleteMany();

  // ---- Routes ----
  const routes = await Promise.all(
    Array.from({ length: VEHICLE_COUNT }).map((_, i) =>
      prisma.route.create({
        data: {
          name: `Route-${100 + i}`,
          startPoint: faker.location.streetAddress(),
          endPoint: faker.location.streetAddress(),
        },
      })
    )
  );

  // ---- Vehicles + Drivers + Sensors ----
  const vehicles: { id: string }[] = [];
  const drivers: { id: string }[] = [];
  const sensors: { id: string }[] = [];

  for (let i = 0; i < VEHICLE_COUNT; i++) {
    const v = await prisma.vehicle.create({
      data: {
        registrationNo: `BUS-${1001 + i}`,
        model: faker.vehicle.model(),
        tankSize: randint(140, 280),
        mileageEst: Number(randIn(2.2, 4.5).toFixed(2)),
        route: { connect: { id: routes[i]!.id } },
      },
      select: { id: true },
    });

    const d = await prisma.driver.create({
      data: {
        name: faker.person.fullName(),
        phone: `+91-98${100000 + i}`, // unique & stable
        licenseNo: `LIC${700000 + i}`, // unique & stable
        vehicle: { connect: { id: v.id } },
      },
      select: { id: true },
    });

    const s = await prisma.sensor.create({
      data: {
        sensorCode: `SNS-${900000 + i}`, // unique & stable
        isActive: true,
        vehicle: { connect: { id: v.id } },
      },
      select: { id: true },
    });

    vehicles.push(v);
    drivers.push(d);
    sensors.push(s);
  }

  // ---- SensorReadings + History + SummaryMetrics ----
  for (let i = 0; i < sensors.length; i++) {
    const sensor = sensors[i];
    const vehicle = vehicles[i];

    const series = generateReadingsSeries();

    // bulk insert readings
    await prisma.sensorReading.createMany({
      data: series.map(r => ({
        sensorId: sensor!.id,
        timestamp: r.timestamp,
        fuelLevel: r.fuelLevel,
        distanceKm: r.distanceKm,
        locationLat: r.locationLat,
        locationLong: r.locationLong,
        speed: r.speed,
        ignitionStatus: r.ignitionStatus ?? null,
        odometer: r.odometer ?? null,
        deviceVoltage: r.deviceVoltage ?? null,
        isOverSpeed: r.isOverSpeed ?? null,
        processed: r.processed,
      })),
    });

    // lastSeen
    await prisma.sensor.update({
      where: { id: sensor!.id },
      data: { lastSeen: series[series.length - 1]!.timestamp },
    });

    // histories for events (typed as an ARRAY to enable .length/.some)
    const histories = series
      .map<Prisma.HistoryCreateManyInput | null>((r) => {
        // add a few NORMAL logs
        if (!r.event || r.event === AlertType.NORMAL) {
          if (Math.random() < 0.1) {
            return {
              timestamp: r.timestamp, // Prisma accepts Date | string
              type: AlertType.NORMAL,
              description: 'Routine log',
              fuelLevel: r.fuelLevel,
              fuelDropLitres: null,
              vehicleId: vehicle!.id,
              sensorId: sensor!.id,
              locationLat: r.locationLat,
              locationLong: r.locationLong,
            };
          }
          return null;
        }

        const desc =
          r.event === AlertType.THEFT
            ? 'Suspicious rapid drop detected'
            : r.event === AlertType.REFUEL
            ? 'Refuel detected'
            : r.event === AlertType.LOW_FUEL
            ? 'Low fuel threshold breached'
            : 'Normal';

        const fuelDrop =
          r.event === AlertType.THEFT && typeof r.delta === 'number' && r.delta < 0
            ? Math.abs(r.delta)
            : null;

        return {
          timestamp: r.timestamp,
          type: r.event,
          description: desc,
          fuelLevel: r.fuelLevel,
          fuelDropLitres: fuelDrop,
          vehicleId: vehicle!.id,
          sensorId: sensor!.id,
          locationLat: r.locationLat,
          locationLong: r.locationLong,
        };
      })
      .filter((h): h is Prisma.HistoryCreateManyInput => h !== null);

    if (histories.length > 0) {
      await prisma.history.createMany({ data: histories });
    }

    // Create alerts for significant events (similar to histories but for real-time alerts)
    const alerts = series
      .map<Prisma.AlertCreateManyInput | null>((r) => {
        // Only create alerts for significant events (not NORMAL)
        if (!r.event || r.event === AlertType.NORMAL) {
          return null;
        }

        const desc =
          r.event === AlertType.THEFT
            ? 'Suspicious rapid fuel drop detected'
            : r.event === AlertType.REFUEL
            ? 'Fuel refill detected'
            : r.event === AlertType.LOW_FUEL
            ? 'Low fuel warning - refuel required'
            : 'System alert';

        return {
          timestamp: r.timestamp,
          type: r.event,
          description: desc,
          locationLat: r.locationLat,
          locationLong: r.locationLong,
          sensorId: sensor!.id,
        };
      })
      .filter((h): h is Prisma.AlertCreateManyInput => h !== null);

    if (alerts.length > 0) {
      await prisma.alert.createMany({ data: alerts });
    }

    // summary metrics for the time span of the series
    const fromDate = series[0]!.timestamp;
    const toDate = series[series.length - 1]!.timestamp;

    let totalDistanceKm = 0;
    let totalFuelFills = 0;
    let totalFuelDrops = 0;
    let totalFuelConsumed = 0;

    // derive fills/drops/consumption from deltas
    for (let j = 1; j < series.length; j++) {
      const d = series[j]!.fuelLevel - series[j - 1]!.fuelLevel;
      totalDistanceKm += series[j]!.distanceKm;

      if (d > 0) totalFuelFills += d;
      else if (d < 0) {
        const evt = series[j]!.event;
        if (evt === AlertType.THEFT) totalFuelDrops += Math.abs(d);
        else totalFuelConsumed += Math.abs(d);
      }
    }

    // Hours approximation from speeds
    const runningSamples = series.filter(r => r.speed >= 5).length;
    const idleSamples = series.filter(r => r.speed > 0 && r.speed < 5).length;
    const stopSamples = series.filter(r => r.speed === 0).length;

    const avgIntervalHrs =
      (toDate.getTime() - fromDate.getTime()) / (series.length * 3600_000);
    const totalRunningHours = Number((runningSamples * avgIntervalHrs).toFixed(2));
    const totalIdleHours = Number((idleSamples * avgIntervalHrs).toFixed(2));
    const totalStoppageHours = Number((stopSamples * avgIntervalHrs).toFixed(2));

    const kmpl =
      totalFuelConsumed > 0 ? Number((totalDistanceKm / totalFuelConsumed).toFixed(2)) : 0;

    const dropAlert = histories.some(h => h.type === AlertType.THEFT);
    const fillAlert = histories.some(h => h.type === AlertType.REFUEL);

    await prisma.summaryMetrics.create({
      data: {
        vehicleId: vehicle!.id,
        fromDate,
        toDate,
        sFuelLevel: series[0]!.fuelLevel,
        eFuelLevel: series[series.length - 1]!.fuelLevel,
        totalFuelConsumed: Number(totalFuelConsumed.toFixed(2)),
        totalFuelFills: Number(totalFuelFills.toFixed(2)),
        totalFuelDrops: Number(totalFuelDrops.toFixed(2)),
        kmpl,
        totalDistanceKm: Number(totalDistanceKm.toFixed(2)),
        totalRunningHours,
        totalIdleHours,
        totalStoppageHours,
        dropAlert,
        fillAlert,
      },
    });
  }

  console.log('✅ Seeding complete.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

-- CreateEnum
CREATE TYPE "public"."AlertType" AS ENUM ('THEFT', 'REFUEL', 'LOW_FUEL', 'SENSOR_HEALTH', 'NORMAL', 'UNKNOWN');

-- CreateTable
CREATE TABLE "public"."Vehicle" (
    "id" TEXT NOT NULL,
    "registrationNo" TEXT NOT NULL,
    "model" TEXT,
    "tankSize" INTEGER,
    "mileageEst" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "routeId" TEXT,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Driver" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "licenseNo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "vehicleId" TEXT NOT NULL,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Route" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "startPoint" TEXT NOT NULL,
    "endPoint" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Route_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Sensor" (
    "id" TEXT NOT NULL,
    "sensorCode" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "installedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSeen" TIMESTAMP(3),
    "vehicleId" TEXT NOT NULL,

    CONSTRAINT "Sensor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SensorReading" (
    "id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "fuelLevel" DOUBLE PRECISION NOT NULL,
    "distanceKm" DOUBLE PRECISION NOT NULL,
    "locationLat" DOUBLE PRECISION NOT NULL,
    "locationLong" DOUBLE PRECISION NOT NULL,
    "speed" DOUBLE PRECISION NOT NULL,
    "ignitionStatus" TEXT,
    "odometer" DOUBLE PRECISION,
    "deviceVoltage" DOUBLE PRECISION,
    "isOverSpeed" BOOLEAN,
    "processed" BOOLEAN NOT NULL DEFAULT false,
    "sensorId" TEXT NOT NULL,

    CONSTRAINT "SensorReading_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."History" (
    "id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "public"."AlertType" NOT NULL,
    "description" TEXT NOT NULL,
    "fuelLevel" DOUBLE PRECISION NOT NULL,
    "fuelDropLitres" DOUBLE PRECISION,
    "vehicleId" TEXT NOT NULL,
    "sensorId" TEXT NOT NULL,
    "locationLat" DOUBLE PRECISION NOT NULL,
    "locationLong" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SummaryMetrics" (
    "id" TEXT NOT NULL,
    "vehicleId" TEXT NOT NULL,
    "fromDate" TIMESTAMP(3) NOT NULL,
    "toDate" TIMESTAMP(3) NOT NULL,
    "sFuelLevel" DOUBLE PRECISION NOT NULL,
    "eFuelLevel" DOUBLE PRECISION NOT NULL,
    "totalFuelConsumed" DOUBLE PRECISION NOT NULL,
    "totalFuelFills" DOUBLE PRECISION NOT NULL,
    "totalFuelDrops" DOUBLE PRECISION NOT NULL,
    "kmpl" DOUBLE PRECISION NOT NULL,
    "totalDistanceKm" DOUBLE PRECISION NOT NULL,
    "totalRunningHours" DOUBLE PRECISION NOT NULL,
    "totalIdleHours" DOUBLE PRECISION NOT NULL,
    "totalStoppageHours" DOUBLE PRECISION NOT NULL,
    "dropAlert" BOOLEAN NOT NULL DEFAULT false,
    "fillAlert" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "SummaryMetrics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_registrationNo_key" ON "public"."Vehicle"("registrationNo");

-- CreateIndex
CREATE UNIQUE INDEX "Driver_phone_key" ON "public"."Driver"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Driver_licenseNo_key" ON "public"."Driver"("licenseNo");

-- CreateIndex
CREATE UNIQUE INDEX "Driver_vehicleId_key" ON "public"."Driver"("vehicleId");

-- CreateIndex
CREATE UNIQUE INDEX "Route_name_key" ON "public"."Route"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Sensor_sensorCode_key" ON "public"."Sensor"("sensorCode");

-- CreateIndex
CREATE UNIQUE INDEX "Sensor_vehicleId_key" ON "public"."Sensor"("vehicleId");

-- CreateIndex
CREATE INDEX "SensorReading_timestamp_idx" ON "public"."SensorReading"("timestamp");

-- CreateIndex
CREATE INDEX "SummaryMetrics_fromDate_toDate_idx" ON "public"."SummaryMetrics"("fromDate", "toDate");

-- AddForeignKey
ALTER TABLE "public"."Vehicle" ADD CONSTRAINT "Vehicle_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "public"."Route"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Driver" ADD CONSTRAINT "Driver_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "public"."Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Sensor" ADD CONSTRAINT "Sensor_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "public"."Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SensorReading" ADD CONSTRAINT "SensorReading_sensorId_fkey" FOREIGN KEY ("sensorId") REFERENCES "public"."Sensor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."History" ADD CONSTRAINT "History_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "public"."Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."History" ADD CONSTRAINT "History_sensorId_fkey" FOREIGN KEY ("sensorId") REFERENCES "public"."Sensor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SummaryMetrics" ADD CONSTRAINT "SummaryMetrics_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "public"."Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

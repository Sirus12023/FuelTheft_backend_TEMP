-- CreateEnum
CREATE TYPE "public"."LogLevel" AS ENUM ('INFO', 'WARNING', 'ERROR');

-- CreateTable
CREATE TABLE "public"."Alert" (
    "id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "public"."AlertType" NOT NULL,
    "description" TEXT,
    "locationLat" DOUBLE PRECISION NOT NULL,
    "locationLong" DOUBLE PRECISION NOT NULL,
    "sensorId" TEXT NOT NULL,

    CONSTRAINT "Alert_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Alert" ADD CONSTRAINT "Alert_sensorId_fkey" FOREIGN KEY ("sensorId") REFERENCES "public"."Sensor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

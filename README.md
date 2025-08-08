# Fuel Theft Detection Backend

A professional Node.js/Express backend for real-time fuel monitoring, theft detection, analytics, and alerting.

## Features

- Real-time fuel level and consumption tracking
- Automated theft detection and alerting
- Analytics and reporting for fuel usage
- RESTful API for vehicles, sensors, and data management
- PostgreSQL database integration via Prisma ORM
- Automated seeding for development and testing

## Prerequisites

- Node.js v18+
- PostgreSQL
- npm

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sirus12023/FuelTheft_backend_TEMP.git
   cd FuelTheft_backend_TEMP
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   - Create a `.env` file in the root directory.
   - Set your PostgreSQL connection string:
     ```
     DATABASE_URL="postgresql://username:password@localhost:5432/fuel_theft_db"
     PORT=3000
     NODE_ENV=development
     ```

4. **Database setup**
   ```bash
   npx prisma generate
   npx prisma migrate dev
   npx ts-node --transpile-only src/dev/seed.ts
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```
   The server runs at `http://localhost:3000` by default.

## Database Schema Overview

- **Vehicle**: Registration, model, tank size
- **Driver**: Linked to vehicles
- **Sensor**: IoT device for data collection
- **SensorReading**: Fuel, location, and status data
- **Alert**: Theft, refuel, and low fuel notifications
- **History**: Event logs
- **SummaryMetrics**: Aggregated analytics

## API Endpoints

- **Health Check**
  ```
  GET /health
  ```

- **Vehicles**
  ```
  GET    /vehicles
  GET    /vehicles/:id
  POST   /vehicles
  PUT    /vehicles/:id
  DELETE /vehicles/:id
  ```

- **Sensors**
  ```
  GET    /sensor
  GET    /sensor/:id
  POST   /sensor
  PUT    /sensor/:id
  DELETE /sensor/:id
  ```

- **Fuel Usage Analytics**
  ```
  GET /fuelusage?busId=<id>&fromDate=<date>&toDate=<date>
  ```
  **Response Example:**
  ```json
  {
    "totalFuelConsumed": 45.67,
    "totalFuelStolen": 12.34,
    "totalFuelRefueled": 58.01,
    "distanceTravelled": 234.56,
    "fuelEfficiency": 5.14
  }
  ```

- **History & Alerts**
  ```
  GET /history
  GET /history/:id
  POST /history
  ```

- **Summary Metrics**
  ```
  GET /summarymatrix
  GET /summarymatrix/:id
  ```

## Seeding

To generate sample data for development:

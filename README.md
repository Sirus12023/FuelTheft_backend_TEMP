# Fuel Theft Detection Backend

A Node.js/Express backend for fuel theft detection system with real-time monitoring, analytics, and alerting capabilities.

## 🚀 Features

- **Real-time Fuel Monitoring**: Track fuel levels, consumption, and anomalies
- **Theft Detection**: Identify suspicious fuel drops and generate alerts
- **Analytics Dashboard**: Comprehensive fuel usage metrics and reports
- **RESTful API**: Complete CRUD operations for vehicles, sensors, and data
- **Database Integration**: PostgreSQL with Prisma ORM
- **Seeding System**: Generate realistic test data for development

## 📋 Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- npm or yarn package manager

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Sirus12023/FuelTheft_backend_TEMP.git
cd FuelTheft_backend_TEMP
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/fuel_theft_db"

# Server Configuration
PORT=3000
NODE_ENV=development
```

**Replace the DATABASE_URL with your PostgreSQL connection string.**

### 4. Database Setup

#### Option A: Using Prisma CLI (Recommended)

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Seed the database with test data
npx ts-node --transpile-only src/dev/seed.ts
```

#### Option B: Manual Database Creation

1. Create a PostgreSQL database named `fuel_theft_db`
2. Run the migration files from `prisma/migrations/`
3. Seed the database using the seed script

### 5. Start the Development Server

```bash
npm run dev
```

The server will start on `http://localhost:3000` (or the port specified in your `.env` file).

## 📊 Database Schema

The application uses the following main entities:

- **Vehicle**: Bus/vehicle information with registration, model, and tank size
- **Driver**: Driver details linked to vehicles
- **Sensor**: IoT sensors attached to vehicles for data collection
- **SensorReading**: Real-time fuel level, location, and vehicle data
- **Alert**: Real-time notifications for theft, refuel, and low fuel events
- **History**: Event logs for audit trails
- **SummaryMetrics**: Aggregated analytics data

## 🔌 API Endpoints

### Health Check
```
GET /health
```

### Vehicles
```
GET    /vehicles          # Get all vehicles
GET    /vehicles/:id      # Get vehicle by ID
POST   /vehicles          # Create new vehicle
PUT    /vehicles/:id      # Update vehicle
DELETE /vehicles/:id      # Delete vehicle
```

### Sensors
```
GET    /sensor            # Get all sensors
GET    /sensor/:id        # Get sensor by ID
POST   /sensor            # Create new sensor
PUT    /sensor/:id        # Update sensor
DELETE /sensor/:id        # Delete sensor
```

### Fuel Usage Analytics
```
GET /fuelusage?busId=<id>&fromDate=<date>&toDate=<date>
```

**Parameters:**
- `busId` (required): Vehicle ID
- `fromDate` (optional): Start date (ISO format)
- `toDate` (optional): End date (ISO format)

**Response:**
```json
{
  "totalFuelConsumed": 45.67,
  "totalFuelStolen": 12.34,
  "totalFuelRefueled": 58.01,
  "distanceTravelled": 234.56,
  "fuelEfficiency": 5.14
}
```

### History & Alerts
```
GET /history             # Get all history records
GET /history/:id         # Get history by ID
POST /history            # Create history record
```

### Summary Metrics
```
GET /summarymatrix       # Get summary metrics
GET /summarymatrix/:id   # Get metrics by vehicle ID
```

## 🧪 Seeding Data

The application includes a comprehensive seeding system that generates realistic test data:

```bash
npx ts-node --transpile-only src/dev/seed.ts
```

**Generated Data:**
- 10 vehicles with drivers and sensors
- 10-15 sensor readings per vehicle (last 1-3 days)
- Realistic fuel consumption patterns
- Theft and refuel events
- Low fuel alerts
- Summary metrics

## 🏗️ Project Structure

```
src/
├── api/
│   ├── controllers/     # Business logic
│   ├── routes/         # API route definitions
│   └── index.ts        # Express app setup
├── dev/
│   └── seed.ts         # Database seeding
├── generated/
│   └── prisma/         # Generated Prisma client
├── lib/
│   └── prisma.ts       # Prisma client instance
└── index.ts            # Main entry point

prisma/
├── schema.prisma       # Database schema
└── migrations/         # Database migrations
```

## 🚀 Available Scripts

```bash
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run start        # Start production server
npm test             # Run tests (if configured)
```

## 🔧 Development

### Adding New Routes

1. Create controller in `src/api/controllers/`
2. Create route file in `src/api/routes/`
3. Register route in `src/api/index.ts`

### Database Changes

1. Update `prisma/schema.prisma`
2. Generate migration: `npx prisma migrate dev`
3. Update seed script if needed

### Environment Variables

- `DATABASE_URL`: PostgreSQL connection string
- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment (development/production)

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Verify PostgreSQL is running
   - Check DATABASE_URL in `.env`
   - Ensure database exists

2. **Prisma Client Not Generated**
   ```bash
   npx prisma generate
   ```

3. **Migration Errors**
   ```bash
   npx prisma migrate reset
   npx prisma migrate dev
   ```

4. **TypeScript Errors**
   ```bash
   npm install
   npx tsc --noEmit
   ```

### Logs

Check console output for detailed error messages. The application logs:
- Server startup information
- Database connection status
- API request/response details
- Error stack traces

## 📝 API Documentation

For detailed API documentation, check the individual route files in `src/api/routes/` or test the endpoints using tools like Postman or curl.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

For issues and questions:
1. Check the troubleshooting section
2. Review existing issues
3. Create a new issue with detailed information

---

**Happy Coding! 🚀**

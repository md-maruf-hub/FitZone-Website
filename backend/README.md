# FitZone Backend API

Production-ready Node.js backend for FitZone e-commerce platform.

## Installation

```bash
npm install
```

## Environment Setup

1. Copy `.env` and update values:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CORS_ORIGIN=http://localhost:5173
```

## Running the Server

```bash
# Development
npm run dev

# Production
npm start
```

## API Endpoints

- `POST /api/auth` - Authentication routes
- `GET /api/products` - Product routes
- `GET /api/orders` - Order routes
- `GET /api/users` - User routes
- `GET /api/cart` - Cart routes

## Project Structure

```
backend/
├── config/        # Database configuration
├── controllers/   # Route controllers
├── middleware/    # Express middleware
├── models/        # Database models
├── routes/        # API routes
├── utils/         # Utility functions
├── server.js      # Entry point
└── package.json
```
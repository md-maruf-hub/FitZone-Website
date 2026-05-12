# FitZone Frontend

React frontend for FitZone e-commerce platform.

## Installation

```bash
npm install
```

## Running the Application

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
frontend/
├── components/   # Reusable UI components
├── pages/        # Page components
├── routes/       # Route guards
├── services/     # API services
├── styles/       # CSS styles
├── App.jsx       # Main app component
├── main.jsx      # Entry point
└── package.json
```

## Pages

- `/` - Home
- `/login` - Login
- `/register` - Register
- `/products` - Products listing
- `/product/:id` - Product details
- `/cart` - Shopping cart
- `/dashboard` - User dashboard (protected)
- `/admin-dashboard` - Admin dashboard (admin only)
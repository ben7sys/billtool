# billtool
Eine Webapplikation, die es Nutzern ermöglicht, Rechnungen zu erstellen und zu verwalten

## Installation & Start

1. Frontend installieren und starten:
```bash
cd src/frontend
npm install
npm run dev
```

2. Backend installieren und starten (in einem neuen Terminal):
```bash
cd src/backend
npm install
npm run dev
```

Die Anwendung ist dann erreichbar unter:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## Features

**Frontend:**
- Modern, responsive UI with dark/light mode support using Tailwind CSS
- Dashboard with overview of invoices and key metrics
- Invoice management with creation and listing capabilities
- Customer management system
- Product catalog management
- React Router for navigation
- TypeScript for type safety

**Backend:**
- Express.js server with TypeScript
- SQLite database with tables for:
    - Customers
    - Products
    - Invoices
    - Invoice items
- RESTful API endpoints for:
    - Customer management
    - Product management
    - Invoice creation and listing
- Automatic VAT calculations
- Transaction support for invoice creation

## Benutzung

- The frontend provides an intuitive interface for managing invoices, customers, and products
- Use the navigation menu to switch between different sections
- Create customers and products before creating invoices
- The dashboard provides an overview of all activities
- Dark/light mode can be toggled using the theme button in the top-right corner

The system is ready for basic invoice management operations and can be extended with additional features like PDF export, email notifications, and advanced reporting.

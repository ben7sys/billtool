# Language
- [English](README.md)
- [Deutsch](README.de.md)

**EARLY ALPHA**

# billtool  
A web application that allows users to create and manage invoices

## Installation & Start

1. Install and start the backend (in a new terminal):
```bash
cd src/backend
npm install
npm run dev
```

2. Install and start the frontend:
```bash
cd src/frontend
npm install
npm run dev
```

The application is then accessible at:
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

## Usage

- The frontend provides an intuitive interface for managing invoices, customers, and products  
- Use the navigation menu to switch between different sections  
- Create customers and products before creating invoices  
- The dashboard provides an overview of all activities  
- Dark/light mode can be toggled using the theme button in the top-right corner

The system is ready for basic invoice management operations and can be extended with additional features like PDF export, email notifications, and advanced reporting.

## Screenshots

![Screenshot](screenshots/screenshot0.jpg)
![Screenshot](screenshots/screenshot1.jpg)
![Screenshot](screenshots/screenshot2.jpg)
![Screenshot](screenshots/screenshot3.jpg)
![Screenshot](screenshots/screenshot4.jpg)
![Screenshot](screenshots/screenshot5.jpg)
![Screenshot](screenshots/screenshot6.jpg)


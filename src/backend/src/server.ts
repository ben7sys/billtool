import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import sqlite3 from 'sqlite3';
import { join } from 'path';

// Initialize express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize SQLite database
const db = new sqlite3.Database(join(__dirname, '../data/billtool.db'), (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('Connected to SQLite database');
    initializeDatabase();
  }
});

// Database initialization
function initializeDatabase() {
  db.serialize(() => {
    // Customers table
    db.run(`
      CREATE TABLE IF NOT EXISTS customers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE,
        phone TEXT,
        address TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Products table
    db.run(`
      CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT,
        category TEXT,
        price DECIMAL(10,2) NOT NULL,
        vat_rate INTEGER DEFAULT 19,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Invoices table
    db.run(`
      CREATE TABLE IF NOT EXISTS invoices (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        invoice_number TEXT UNIQUE NOT NULL,
        customer_id INTEGER,
        status TEXT DEFAULT 'draft',
        issue_date DATE,
        due_date DATE,
        subtotal DECIMAL(10,2),
        vat_total DECIMAL(10,2),
        total DECIMAL(10,2),
        notes TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (customer_id) REFERENCES customers (id)
      )
    `);

    // Invoice items table
    db.run(`
      CREATE TABLE IF NOT EXISTS invoice_items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        invoice_id INTEGER,
        product_id INTEGER,
        quantity INTEGER NOT NULL,
        price DECIMAL(10,2) NOT NULL,
        vat_rate INTEGER,
        subtotal DECIMAL(10,2),
        vat_amount DECIMAL(10,2),
        total DECIMAL(10,2),
        FOREIGN KEY (invoice_id) REFERENCES invoices (id),
        FOREIGN KEY (product_id) REFERENCES products (id)
      )
    `);
  });
}

// Basic routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Customers routes
app.get('/api/customers', (req, res) => {
  db.all('SELECT * FROM customers ORDER BY created_at DESC', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.post('/api/customers', (req, res) => {
  const { name, email, phone, address } = req.body;
  db.run(
    'INSERT INTO customers (name, email, phone, address) VALUES (?, ?, ?, ?)',
    [name, email, phone, address],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID });
    }
  );
});

// Products routes
app.get('/api/products', (req, res) => {
  db.all('SELECT * FROM products ORDER BY created_at DESC', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.post('/api/products', (req, res) => {
  const { name, description, category, price, vat_rate } = req.body;
  db.run(
    'INSERT INTO products (name, description, category, price, vat_rate) VALUES (?, ?, ?, ?, ?)',
    [name, description, category, price, vat_rate],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID });
    }
  );
});

// Invoices routes
app.get('/api/invoices', (req, res) => {
  db.all(`
    SELECT i.*, c.name as customer_name 
    FROM invoices i 
    LEFT JOIN customers c ON i.customer_id = c.id 
    ORDER BY i.created_at DESC
  `, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.post('/api/invoices', (req, res) => {
  const { customer_id, items, issue_date, due_date, notes } = req.body;
  
  db.serialize(() => {
    db.run('BEGIN TRANSACTION');

    db.run(
      `INSERT INTO invoices (
        invoice_number, customer_id, status, issue_date, due_date, notes
      ) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        `INV-${Date.now()}`,
        customer_id,
        'draft',
        issue_date,
        due_date,
        notes
      ],
      function(err) {
        if (err) {
          db.run('ROLLBACK');
          res.status(500).json({ error: err.message });
          return;
        }

        const invoice_id = this.lastID;
        let subtotal = 0;
        let vat_total = 0;

        const insertItem = (item: any) => {
          return new Promise((resolve, reject) => {
            const item_subtotal = item.quantity * item.price;
            const item_vat = item_subtotal * (item.vat_rate / 100);
            
            db.run(
              `INSERT INTO invoice_items (
                invoice_id, product_id, quantity, price, vat_rate, 
                subtotal, vat_amount, total
              ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
              [
                invoice_id,
                item.product_id,
                item.quantity,
                item.price,
                item.vat_rate,
                item_subtotal,
                item_vat,
                item_subtotal + item_vat
              ],
              (err) => {
                if (err) reject(err);
                subtotal += item_subtotal;
                vat_total += item_vat;
                resolve(null);
              }
            );
          });
        };

        Promise.all(items.map(insertItem))
          .then(() => {
            const total = subtotal + vat_total;
            db.run(
              'UPDATE invoices SET subtotal = ?, vat_total = ?, total = ? WHERE id = ?',
              [subtotal, vat_total, total, invoice_id],
              (err) => {
                if (err) {
                  db.run('ROLLBACK');
                  res.status(500).json({ error: err.message });
                  return;
                }
                db.run('COMMIT');
                res.json({ id: invoice_id });
              }
            );
          })
          .catch((err) => {
            db.run('ROLLBACK');
            res.status(500).json({ error: err.message });
          });
      }
    );
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

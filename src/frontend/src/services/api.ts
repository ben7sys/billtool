const API_BASE_URL = 'http://localhost:3000/api';

export interface Customer {
  id?: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface Product {
  id?: number;
  name: string;
  description: string;
  category: string;
  price: number;
  vat_rate: number;
}

export interface InvoiceItem {
  product_id: number;
  quantity: number;
  price: number;
  vat_rate: number;
}

export interface Invoice {
  id?: number;
  invoice_number?: string;
  customer_id: number;
  status?: string;
  issue_date: string;
  due_date: string;
  notes?: string;
  items: InvoiceItem[];
  subtotal?: number;
  vat_total?: number;
  total?: number;
  customer_name?: string;
}

// Customers API
export const customersApi = {
  getAll: async (): Promise<Customer[]> => {
    const response = await fetch(`${API_BASE_URL}/customers`);
    if (!response.ok) throw new Error('Failed to fetch customers');
    return response.json();
  },

  create: async (customer: Customer): Promise<{ id: number }> => {
    const response = await fetch(`${API_BASE_URL}/customers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(customer),
    });
    if (!response.ok) throw new Error('Failed to create customer');
    return response.json();
  },
};

// Products API
export const productsApi = {
  getAll: async (): Promise<Product[]> => {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) throw new Error('Failed to fetch products');
    return response.json();
  },

  create: async (product: Product): Promise<{ id: number }> => {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    if (!response.ok) throw new Error('Failed to create product');
    return response.json();
  },
};

// Invoices API
export const invoicesApi = {
  getAll: async (): Promise<Invoice[]> => {
    const response = await fetch(`${API_BASE_URL}/invoices`);
    if (!response.ok) throw new Error('Failed to fetch invoices');
    return response.json();
  },

  create: async (invoice: Invoice): Promise<{ id: number }> => {
    const response = await fetch(`${API_BASE_URL}/invoices`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(invoice),
    });
    if (!response.ok) throw new Error('Failed to create invoice');
    return response.json();
  },
};

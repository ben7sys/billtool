import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

const Customers: React.FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Customers</h1>
        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="btn-primary flex items-center"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Add Customer
        </button>
      </div>

      {/* Search and Filters */}
      <div className="card">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium mb-1">Search</label>
            <input
              type="text"
              placeholder="Search customers..."
              className="input"
            />
          </div>
          <div className="w-[200px]">
            <label className="block text-sm font-medium mb-1">Sort By</label>
            <select className="input">
              <option value="name">Name</option>
              <option value="email">Email</option>
              <option value="created">Date Added</option>
              <option value="invoices">Invoices</option>
            </select>
          </div>
        </div>
      </div>

      {/* Customers List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Empty State */}
        <div className="col-span-full">
          <div className="card text-center py-12">
            <p className="text-gray-500">No customers added yet</p>
          </div>
        </div>

        {/* Customer Card Template */}
        {/*
        <div className="card">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-medium">Customer Name</h3>
              <p className="text-sm text-gray-500">customer@email.com</p>
            </div>
            <div className="flex gap-2">
              <button className="btn-secondary">Edit</button>
              <button className="btn-secondary text-red-600">Delete</button>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Total Invoices</p>
                <p className="text-lg font-medium">0</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Outstanding</p>
                <p className="text-lg font-medium">€0.00</p>
              </div>
            </div>
          </div>
        </div>
        */}
      </div>

      {/* Create Customer Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6">
            <h2 className="text-xl font-semibold mb-4">Add New Customer</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input type="text" className="input" placeholder="Customer name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="input" placeholder="customer@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input type="tel" className="input" placeholder="+1234567890" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Address</label>
                <textarea className="input" rows={3} placeholder="Customer address"></textarea>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setIsCreateModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  Add Customer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customers;

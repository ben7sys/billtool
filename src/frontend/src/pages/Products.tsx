import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

const Products: React.FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Products</h1>
        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="btn-primary flex items-center"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Add Product
        </button>
      </div>

      {/* Search and Filters */}
      <div className="card">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium mb-1">Search</label>
            <input
              type="text"
              placeholder="Search products..."
              className="input"
            />
          </div>
          <div className="w-[200px]">
            <label className="block text-sm font-medium mb-1">Category</label>
            <select className="input">
              <option value="">All Categories</option>
              <option value="services">Services</option>
              <option value="products">Products</option>
              <option value="subscriptions">Subscriptions</option>
            </select>
          </div>
          <div className="w-[200px]">
            <label className="block text-sm font-medium mb-1">Sort By</label>
            <select className="input">
              <option value="name">Name</option>
              <option value="price">Price</option>
              <option value="category">Category</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products List */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  VAT Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-6 py-4" colSpan={6}>
                  <p className="text-center text-gray-500">No products found</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Product Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6">
            <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input type="text" className="input" placeholder="Product name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea className="input" rows={3} placeholder="Product description"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select className="input">
                  <option value="services">Services</option>
                  <option value="products">Products</option>
                  <option value="subscriptions">Subscriptions</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Price (€)</label>
                  <input type="number" step="0.01" className="input" placeholder="0.00" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">VAT Rate (%)</label>
                  <select className="input">
                    <option value="0">0%</option>
                    <option value="7">7%</option>
                    <option value="19">19%</option>
                  </select>
                </div>
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
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;

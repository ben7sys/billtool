import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Summary Cards */}
        <div className="card">
          <h3 className="text-lg font-medium">Total Invoices</h3>
          <p className="text-3xl font-bold text-primary-600">0</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-medium">Open Invoices</h3>
          <p className="text-3xl font-bold text-yellow-600">0</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-medium">Paid Invoices</h3>
          <p className="text-3xl font-bold text-green-600">0</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-medium">Total Customers</h3>
          <p className="text-3xl font-bold text-blue-600">0</p>
        </div>
      </div>

      {/* Recent Invoices */}
      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Recent Invoices</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Invoice #
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-6 py-4" colSpan={5}>
                  <p className="text-center text-gray-500">No invoices yet</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

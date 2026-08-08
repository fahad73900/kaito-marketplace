// app/dashboard/buyer/page.tsx
'use client';

import React from 'react';

const buyerOrders = [
  {
    id: 'ORD-9821',
    title: 'Notion Creator OS Template',
    type: 'Digital Product',
    price: 49.0,
    status: 'Completed',
    downloadUrl: '#',
    date: '2026-08-05',
  },
  {
    id: 'ORD-4410',
    title: 'Custom Full-Stack Web Development',
    type: 'Service Order',
    price: 499.0,
    status: 'In Progress',
    downloadUrl: null,
    date: '2026-08-02',
  },
];

export default function BuyerDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <div>
            <h1 className="text-2xl font-black text-gray-900">Buyer Dashboard</h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage your orders, instant downloads, and active service contracts.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-xl text-xs font-bold">
              Account Status: Verified
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
            <span className="text-xs text-gray-400 font-semibold">Total Orders</span>
            <p className="text-3xl font-black text-gray-900 mt-2">2</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
            <span className="text-xs text-gray-400 font-semibold">Active Services</span>
            <p className="text-3xl font-black text-blue-600 mt-2">1</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
            <span className="text-xs text-gray-400 font-semibold">Total Spent</span>
            <p className="text-3xl font-black text-green-600 mt-2">$548.00</p>
          </div>
        </div>

        {/* Order History Table */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-900">Order History & Downloads</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-400 text-xs font-semibold uppercase border-b border-gray-100">
                  <th className="p-4 pl-6">Order ID</th>
                  <th className="p-4">Item Details</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 pr-6">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {buyerOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50/50 transition">
                    <td className="p-4 pl-6 font-mono font-medium text-gray-600">
                      {order.id}
                    </td>
                    <td className="p-4">
                      <p className="font-bold text-gray-900">{order.title}</p>
                      <span className="text-xs text-gray-400">{order.type} · {order.date}</span>
                    </td>
                    <td className="p-4 font-extrabold text-gray-900">
                      ${order.price.toFixed(2)}
                    </td>
                    <td className="p-4">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          order.status === 'Completed'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="p-4 pr-6">
                      {order.downloadUrl ? (
                        <a
                          href={order.downloadUrl}
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition inline-block"
                        >
                          Download Files
                        </a>
                      ) : (
                        <span className="text-xs text-gray-400 italic">Work in progress</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
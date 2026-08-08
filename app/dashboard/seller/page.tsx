// app/dashboard/seller/page.tsx
'use client';

import React from 'react';

const sellerEarnings = [
  {
    id: 'ORD-9821',
    item: 'Notion Creator OS Template',
    grossAmount: 49.0,
    platformFee: 7.35,  // 15%
    netPayout: 41.65,    // 80%
    status: 'Paid out to PayPal',
    date: '2026-08-05',
  },
  {
    id: 'ORD-4410',
    item: 'Custom Full-Stack Web Development',
    grossAmount: 499.0,
    platformFee: 74.85, // 15%
    netPayout: 424.15,  // 80%
    status: 'Escrow Held',
    date: '2026-08-02',
  },
];

export default function SellerDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <div>
            <h1 className="text-2xl font-black text-gray-900">Seller Earnings & Payouts</h1>
            <p className="text-sm text-gray-500 mt-1">
              Track your sales performance with automatic 15% platform commission deductions.
            </p>
          </div>
          <div>
            <button className="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded-xl transition">
              Withdraw Funds (PayPal)
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
            <span className="text-xs text-gray-400 font-semibold">Total Revenue (Gross)</span>
            <p className="text-3xl font-black text-gray-900 mt-2">$548.00</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
            <span className="text-xs text-amber-500 font-semibold">15% Marketplace Commission</span>
            <p className="text-3xl font-black text-amber-600 mt-2">$82.20</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
            <span className="text-xs text-green-500 font-semibold">Net Payout (Your Share)</span>
            <p className="text-3xl font-black text-green-600 mt-2">$465.80</p>
          </div>
        </div>

        {/* Sales Breakdown Table */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-900">Recent Transactions Breakdown</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-400 text-xs font-semibold uppercase border-b border-gray-100">
                  <th className="p-4 pl-6">Order ID</th>
                  <th className="p-4">Listing Title</th>
                  <th className="p-4">Gross Sale</th>
                  <th className="p-4">15% Fee</th>
                  <th className="p-4">Net Share</th>
                  <th className="p-4 pr-6">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {sellerEarnings.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50/50 transition">
                    <td className="p-4 pl-6 font-mono font-medium text-gray-600">
                      {row.id}
                    </td>
                    <td className="p-4 font-bold text-gray-900">
                      {row.item}
                      <span className="block text-xs text-gray-400 font-normal">{row.date}</span>
                    </td>
                    <td className="p-4 font-semibold text-gray-900">${row.grossAmount.toFixed(2)}</td>
                    <td className="p-4 font-semibold text-amber-600">-${row.platformFee.toFixed(2)}</td>
                    <td className="p-4 font-extrabold text-green-600">${row.netPayout.toFixed(2)}</td>
                    <td className="p-4 pr-6">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          row.status.includes('Paid')
                            ? 'bg-green-100 text-green-700'
                            : 'bg-amber-100 text-amber-700'
                        }`}
                      >
                        {row.status}
                      </span>
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
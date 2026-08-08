// app/digital-products/page.tsx
'use client';

import React, { useState } from 'react';
import CheckoutModal from '@/components/CheckoutModal';

const sampleProducts = [
  {
    id: '1',
    title: 'Notion Creator OS Template',
    category: 'Digital Product',
    price: 49,
    seller: 'Ali Hassan',
    rating: 4.9,
  },
  {
    id: '2',
    title: 'Full-Stack Next.js SaaS Starter Kit',
    category: 'Digital Product',
    price: 99,
    seller: 'TechFlow Studio',
    rating: 5.0,
  },
  {
    id: '3',
    title: 'Social Media UI Kit & Icons Pack',
    category: 'Digital Product',
    price: 25,
    seller: 'Creative Box',
    rating: 4.7,
  },
];

export default function DigitalProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            Digital Products Marketplace
          </h1>
          <p className="text-gray-600">
            Buy digital assets with automatic 15% marketplace commission breakdown.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-600 rounded-full">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-3 mb-1">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  By <span className="text-gray-700 font-medium">{product.seller}</span> · ★ {product.rating}
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4 pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400">Price</span>
                  <span className="text-2xl font-black text-gray-900">${product.price}</span>
                </div>

                <button
                  onClick={() =>
                    setSelectedProduct({
                      title: product.title,
                      price: product.price,
                      type: product.category,
                    })
                  }
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Checkout Modal Attachment */}
      {selectedProduct && (
        <CheckoutModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          item={selectedProduct}
        />
      )}
    </div>
  );
}
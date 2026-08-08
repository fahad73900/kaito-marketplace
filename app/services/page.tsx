// app/services/page.tsx
'use client';

import React, { useState } from 'react';
import CheckoutModal from '@/components/CheckoutModal';

const sampleServices = [
  {
    id: 's1',
    title: 'Custom Full-Stack Web Development',
    category: 'Development',
    price: 499,
    deliveryTime: '5 Days Delivery',
    seller: 'DevOps Pro',
    rating: 5.0,
  },
  {
    id: 's2',
    title: 'AI Automation & Custom Bot Setup',
    category: 'AI & Automation',
    price: 299,
    deliveryTime: '3 Days Delivery',
    seller: 'Ali Hassan',
    rating: 4.8,
  },
  {
    id: 's3',
    title: 'Brand Identity & Professional UI/UX Design',
    category: 'Design',
    price: 150,
    deliveryTime: '2 Days Delivery',
    seller: 'Creative Studio',
    rating: 4.9,
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            Professional Freelance Services
          </h1>
          <p className="text-gray-600">
            Hire expert sellers for custom projects with secure escrow checkout.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-purple-50 text-purple-600 rounded-full">
                    {service.category}
                  </span>
                  <span className="text-xs text-gray-400">{service.deliveryTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  By <span className="text-gray-700 font-medium">{service.seller}</span> · ★ {service.rating}
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4 pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400">Starting at</span>
                  <span className="text-2xl font-black text-gray-900">${service.price}</span>
                </div>

                <button
                  onClick={() =>
                    setSelectedService({
                      title: service.title,
                      price: service.price,
                      type: 'Service Order',
                    })
                  }
                  className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition"
                >
                  Book Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Checkout Modal Attachment */}
      {selectedService && (
        <CheckoutModal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          item={selectedService}
        />
      )}
    </div>
  );
}
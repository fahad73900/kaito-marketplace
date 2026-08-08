'use client';
import { useState } from 'react';

export default function CheckoutModal({ isOpen, onClose, itemTitle, price }: { isOpen: boolean; onClose: () => void; itemTitle: string; price: number }) {
  const [status, setStatus] = useState<'checkout' | 'escrow' | 'complete'>('checkout');

  if (!isOpen) return null;

  const handlePay = () => {
    setStatus('escrow');
  };

  const handleRelease = () => {
    setStatus('complete');
    setTimeout(() => {
      onClose();
      setStatus('checkout');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl w-full max-w-lg relative text-gray-900">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-black">✕</button>
        
        <h2 className="text-xl font-bold mb-2">Escrow Checkout</h2>
        <p className="text-sm text-gray-500 mb-4">{itemTitle}</p>

        {status === 'checkout' && (
          <div className="space-y-4">
            <div className="flex justify-between font-bold text-lg border-b pb-2">
              <span>Total Price:</span>
              <span className="text-emerald-600">${price}</span>
            </div>
            <button
              onClick={handlePay}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold py-3 rounded-xl transition"
            >
              Pay via PayPal (Escrow Protected)
            </button>
          </div>
        )}

        {status === 'escrow' && (
          <div className="space-y-4 text-center">
            <div className="p-4 bg-amber-50 border border-amber-200 text-amber-800 rounded-xl text-sm">
              🔒 <b>Payment Held in Escrow:</b> Funds will only be released to the seller after you confirm delivery.
            </div>
            <button
              onClick={handleRelease}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-xl transition"
            >
              Approve Work & Release Payment
            </button>
          </div>
        )}

        {status === 'complete' && (
          <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl text-center font-bold">
            ✅ Transaction Completed Successfully!
          </div>
        )}
      </div>
    </div>
  );
}

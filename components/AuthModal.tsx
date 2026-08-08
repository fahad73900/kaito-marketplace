'use client';
import { useState } from 'react';

export default function AuthModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setOtpSent(true);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp === '1234') {
      alert('Login Successful!');
      onClose();
    } else {
      alert('Invalid OTP! Try 1234');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 font-bold">✕</button>
        <h2 className="text-xl font-bold mb-4 text-gray-900">Email OTP Login</h2>
        {!otpSent ? (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-2 rounded-lg text-black"
              required
            />
            <button type="submit" className="w-full bg-emerald-600 text-white py-2 rounded-lg font-medium">
              Send OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerify} className="space-y-4">
            <input
              type="text"
              placeholder="Enter 4-digit OTP (1234)"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={4}
              className="w-full border p-2 rounded-lg text-center font-bold text-lg text-black"
              required
            />
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium">
              Verify & Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

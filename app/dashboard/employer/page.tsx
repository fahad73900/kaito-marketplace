'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white px-4">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Welcome to <span className="text-indigo-500">Kaito Marketplace</span>
        </h1>
        <p className="text-lg text-gray-300">
          Your multi-role platform to buy, sell, hire workers, and post custom orders seamlessly.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Link
            href="/login"
            className="px-8 py-3 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-200 text-center"
          >
            Login / Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
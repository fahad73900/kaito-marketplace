'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('Buyer'); // Default role
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      if (isLogin) {
        // --- LOGIN LOGIC ---
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;
        
        // Success redirect to marketplace / dashboard
        router.push('/');
        router.refresh();
      } else {
        // --- SIGNUP LOGIC ---
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
              role: role,
            },
          },
        });

        if (error) throw error;

        alert('Account created successfully! You can now sign in.');
        setIsLogin(true);
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Something went wrong during authentication.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-gray-900 font-sans flex flex-col justify-between relative overflow-hidden selection:bg-emerald-600 selection:text-white">
      {/* Background Decorative Gradients */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      {/* Top Bar Navigation */}
      <nav className="flex justify-between items-center px-6 lg:px-12 py-5 z-10">
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="bg-gray-900 group-hover:bg-emerald-700 transition text-white font-black px-3.5 py-1.5 rounded-xl text-base tracking-wider shadow-sm">KAITO</span>
          <span className="text-xs font-bold tracking-widest text-emerald-700">LTD</span>
        </Link>
        <Link href="/" className="text-xs font-bold text-gray-600 hover:text-emerald-700 transition flex items-center space-x-1 bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-xs">
          <span>← Back to Marketplace</span>
        </Link>
      </nav>

      {/* Main Login / Signup Card Container */}
      <main className="flex items-center justify-center px-4 py-12 z-10 flex-1">
        <div className="bg-white/80 backdrop-blur-xl border border-gray-200/80 rounded-3xl max-w-md w-full p-8 sm:p-10 shadow-2xl shadow-emerald-900/5 space-y-6">
          
          {/* Header Title */}
          <div className="text-center space-y-2">
            <span className="bg-emerald-100 text-emerald-800 text-[11px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-widest">
              {isLogin ? 'Welcome Back' : 'Join Kaito LTD'}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              {isLogin ? 'Sign in to your account' : 'Create your free account'}
            </h1>
            <p className="text-xs text-gray-500 leading-relaxed">
              {isLogin ? 'Access your orders, store dashboard, or remote contracts.' : 'Start buying, selling, or working globally with zero fees.'}
            </p>
          </div>

          {/* Error Message Box */}
          {errorMsg && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-2xl text-xs font-medium">
              {errorMsg}
            </div>
          )}

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-bold text-gray-700 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Fahad Afzal" 
                    className="w-full px-4 py-3 bg-gray-50/80 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition"
                  />
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-bold text-gray-700 ml-1">Select Role</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50/80 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition"
                  >
                    <option value="Buyer">Buyer</option>
                    <option value="Seller">Seller</option>
                    <option value="Worker">Worker</option>
                    <option value="Employer">Employer</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
              </>
            )}

            <div className="space-y-1.5 text-left">
              <label className="text-xs font-bold text-gray-700 ml-1">Email Address</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com" 
                className="w-full px-4 py-3 bg-gray-50/80 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition"
              />
            </div>

            <div className="space-y-1.5 text-left">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-bold text-gray-700">Password</label>
                {isLogin && (
                  <a href="#" className="text-[11px] font-bold text-emerald-700 hover:underline">Forgot?</a>
                )}
              </div>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••" 
                className="w-full px-4 py-3 bg-gray-50/80 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition"
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-widest rounded-2xl transition shadow-lg shadow-emerald-600/25 cursor-pointer active:scale-[0.99] disabled:opacity-50"
            >
              {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
            </button>
          </form>

          {/* Toggle Between Login & Signup */}
          <div className="text-center pt-2 border-t border-gray-100">
            <p className="text-xs text-gray-600">
              {isLogin ? "Don't have an account yet?" : "Already have an account?"}{' '}
              <button 
                type="button"
                onClick={() => { setIsLogin(!isLogin); setErrorMsg(''); }} 
                className="font-extrabold text-emerald-700 hover:underline ml-1 cursor-pointer"
              >
                {isLogin ? 'Sign up for free' : 'Sign in here'}
              </button>
            </p>
          </div>

        </div>
      </main>

      {/* Footer Note */}
      <footer className="py-6 text-center text-xs text-gray-400 z-10">
        © 2026 Kaito LTD. All rights reserved. Secure Global Transactions.
      </footer>
    </div>
  );
}
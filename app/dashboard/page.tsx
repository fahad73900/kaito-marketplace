'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchUserData() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/login');
        return;
      }
      setUser(session.user);

      // Fetch profile data from database
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();

      if (data) {
        setProfile(data);
      }
      setLoading(false);
    }

    fetchUserData();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <div className="flex-1 p-8 space-y-6 max-w-4xl mx-auto">
        <div className="flex justify-between items-center border-b border-gray-700 pb-4">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-400">Welcome back, {profile?.full_name || user?.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md font-semibold transition"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 shadow">
            <h3 className="text-xl font-semibold mb-2">User Information</h3>
            <p><strong className="text-gray-400">Email:</strong> {user?.email}</p>
            <p><strong className="text-gray-400">Role:</strong> <span className="uppercase text-indigo-400 font-bold">{profile?.role}</span></p>
          </div>

          {/* Role-specific sections */}
          {profile?.role === 'seller' && (
            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 shadow">
              <h3 className="text-xl font-semibold mb-2">Seller Actions</h3>
              <p className="text-gray-400 text-sm mb-4">Manage your products and view store inventory.</p>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md font-semibold">Add New Product</button>
            </div>
          )}

          {profile?.role === 'buyer' && (
            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 shadow">
              <h3 className="text-xl font-semibold mb-2">Buyer Marketplace</h3>
              <p className="text-gray-400 text-sm mb-4">Explore products and track your purchases.</p>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md font-semibold">Browse Products</button>
            </div>
          )}

          {profile?.role === 'worker' && (
            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 shadow">
              <h3 className="text-xl font-semibold mb-2">Worker Portal</h3>
              <p className="text-gray-400 text-sm mb-4">View custom orders and assignments.</p>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md font-semibold">View Custom Orders</button>
            </div>
          )}

          {profile?.role === 'employer' && (
            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 shadow">
              <h3 className="text-xl font-semibold mb-2">Employer Portal</h3>
              <p className="text-gray-400 text-sm mb-4">Post custom tasks and hire workers.</p>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md font-semibold">Post Custom Order</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
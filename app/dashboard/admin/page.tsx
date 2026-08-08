import DashboardShell from "@/components/DashboardShell";
import { PLATFORM_COMMISSION } from "@/lib/constants";

const pendingListings = [
  { id: "PL-101", title: "Notion Creator OS", seller: "Ali Hassan", type: "Digital Product", submitted: "Aug 4, 2026" },
  { id: "PL-102", title: "Brass & Wood Home Décor", seller: "CraftHouse PK", type: "Made-to-Order", submitted: "Aug 3, 2026" },
  { id: "PL-103", title: "AI Automation Setup", seller: "DevOps Pro", type: "Service", submitted: "Aug 2, 2026" },
];

const pendingProfiles = [
  { id: "PR-201", name: "Zainab Ahmed", type: "Worker Profile", submitted: "Aug 4, 2026" },
  { id: "PR-202", name: "TechStart LLC", type: "Employer Profile", submitted: "Aug 3, 2026" },
  { id: "PR-203", name: "Karachi Crafts Co.", type: "Seller Profile", submitted: "Aug 1, 2026" },
];

const users = [
  { id: "U-001", name: "Ahmed Khan", role: "Worker", status: "Active", joined: "Jan 2026" },
  { id: "U-002", name: "Sara Malik", role: "Seller", status: "Active", joined: "Feb 2026" },
  { id: "U-003", name: "TechFlow Inc.", role: "Employer", status: "Active", joined: "Mar 2026" },
  { id: "U-004", name: "Usman Ali", role: "Buyer", status: "Suspended", joined: "Apr 2026" },
  { id: "U-005", name: "Fatima Noor", role: "Worker", status: "Active", joined: "May 2026" },
];

const totalGMV = 245000;
const commissionRevenue = totalGMV * PLATFORM_COMMISSION;

export default function AdminDashboard() {
  return (
    <DashboardShell
      title="Admin Dashboard"
      description="Approve listings and profiles, monitor commission revenue, and manage users."
    >
      <div className="space-y-8">
        {/* Commission Overview */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Marketplace Commission Overview</h2>
          <p className="mt-1 text-sm text-slate-500">
            Platform earns {PLATFORM_COMMISSION * 100}% commission on all marketplace transactions.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Total GMV</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">${totalGMV.toLocaleString()}</p>
            </div>
            <div className="rounded-xl bg-emerald-50 p-4">
              <p className="text-sm text-emerald-600">Commission Revenue ({PLATFORM_COMMISSION * 100}%)</p>
              <p className="mt-1 text-2xl font-bold text-emerald-700">${commissionRevenue.toLocaleString()}</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Active Users</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">12,847</p>
            </div>
          </div>
        </section>

        {/* Pending Approvals */}
        <div className="grid gap-8 lg:grid-cols-2">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Pending Listings</h2>
            <div className="mt-4 space-y-3">
              {pendingListings.map((item) => (
                <div key={item.id} className="rounded-xl border border-slate-100 p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-sm text-slate-500">
                        {item.seller} · {item.type} · {item.submitted}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700">
                      Pending
                    </span>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button type="button" className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700">
                      Approve
                    </button>
                    <button type="button" className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50">
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Pending Profiles</h2>
            <div className="mt-4 space-y-3">
              {pendingProfiles.map((item) => (
                <div key={item.id} className="rounded-xl border border-slate-100 p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.name}</h3>
                      <p className="text-sm text-slate-500">
                        {item.type} · {item.submitted}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700">
                      Pending
                    </span>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button type="button" className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700">
                      Approve
                    </button>
                    <button type="button" className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50">
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* User Management */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">User Management</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-slate-500">
                  <th className="pb-3 pr-4 font-medium">ID</th>
                  <th className="pb-3 pr-4 font-medium">Name</th>
                  <th className="pb-3 pr-4 font-medium">Role</th>
                  <th className="pb-3 pr-4 font-medium">Joined</th>
                  <th className="pb-3 pr-4 font-medium">Status</th>
                  <th className="pb-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-slate-50">
                    <td className="py-3 pr-4 font-mono text-xs text-slate-400">{user.id}</td>
                    <td className="py-3 pr-4 font-medium">{user.name}</td>
                    <td className="py-3 pr-4">{user.role}</td>
                    <td className="py-3 pr-4 text-slate-500">{user.joined}</td>
                    <td className="py-3 pr-4">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          user.status === "Active"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-red-50 text-red-700"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="py-3">
                      <button type="button" className="text-xs font-medium text-emerald-600 hover:text-emerald-700">
                        Manage
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </DashboardShell>
  );
}

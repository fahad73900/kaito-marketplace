import Link from "next/link";
import { categories, dashboards, PAYMENT_ALLOWANCE, PLATFORM_COMMISSION } from "@/lib/constants";

export default function Footer() {
  const totalFee = PLATFORM_COMMISSION + PAYMENT_ALLOWANCE;

  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-xs font-black text-white">
                K
              </div>
              <span className="text-lg font-bold">KAITO LTD</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              Pakistan&apos;s global marketplace for digital products, custom
              goods, services, and remote work opportunities.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Marketplace</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link href={cat.href} className="hover:text-emerald-600">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Dashboards</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              {dashboards.map((d) => (
                <li key={d.label}>
                  <Link href={d.href} className="hover:text-emerald-600">
                    {d.label} Dashboard
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Commission & Fees</h4>
            <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Marketplace commission</span>
                <span className="font-bold text-emerald-700">{PLATFORM_COMMISSION * 100}%</span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-slate-600">Payment processing allowance</span>
                <span className="font-bold text-emerald-700">{PAYMENT_ALLOWANCE * 100}%</span>
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-slate-200 pt-3">
                <span className="font-semibold text-slate-900">Total platform fee</span>
                <span className="font-bold text-slate-900">{totalFee * 100}%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} KAITO LTD. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <Link href="#" className="hover:text-emerald-600">Terms of Service</Link>
            <Link href="#" className="hover:text-emerald-600">Privacy Policy</Link>
            <Link href="#" className="hover:text-emerald-600">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

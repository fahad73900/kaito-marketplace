"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { dashboards } from "@/lib/constants";

export default function DashboardShell({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link href="/" className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
          ← Back to marketplace
        </Link>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">{title}</h1>
        <p className="mt-1 text-slate-500">{description}</p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        <aside className="lg:w-56 shrink-0">
          <nav className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
            {dashboards.map((d) => (
              <Link
                key={d.label}
                href={d.href}
                className={`shrink-0 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                  pathname === d.href
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-emerald-300 hover:text-emerald-700"
                }`}
              >
                {d.label}
              </Link>
            ))}
          </nav>
        </aside>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}

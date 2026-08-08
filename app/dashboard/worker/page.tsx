"use client";

import DashboardShell from "@/components/DashboardShell";
import { useState } from "react";

const applications = [
  { job: "Senior React Developer", company: "TechFlow Inc.", applied: "Aug 1, 2026", status: "Under Review" },
  { job: "DevOps Engineer", company: "CloudScale Ltd.", applied: "Jul 25, 2026", status: "Interview Scheduled" },
  { job: "Content Writer — Tech", company: "DevBlog Media", applied: "Jul 18, 2026", status: "Rejected" },
  { job: "Virtual Assistant — E-commerce", company: "ShopGlobal", applied: "Jul 10, 2026", status: "Accepted" },
];

export default function WorkerDashboard() {
  const [skills, setSkills] = useState("React, TypeScript, Node.js, UI/UX, SEO");
  const [rate, setRate] = useState("35");
  const [availability, setAvailability] = useState("full-time");

  return (
    <DashboardShell
      title="Worker Dashboard"
      description="Build your remote profile, set your rate, and track job applications."
    >
      <div className="space-y-8">
        {/* Profile Editor */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Remote Profile</h2>
          <p className="mt-1 text-sm text-slate-500">
            Showcase your skills to international employers on KAITO LTD.
          </p>
          <form className="mt-6 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="headline" className="block text-sm font-medium text-slate-700">
                Professional Headline
              </label>
              <input
                id="headline"
                type="text"
                defaultValue="Full-Stack Developer · 5 years experience"
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>
            <div>
              <label htmlFor="skills" className="block text-sm font-medium text-slate-700">
                Skills (comma-separated)
              </label>
              <input
                id="skills"
                type="text"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="rate" className="block text-sm font-medium text-slate-700">
                  Hourly Rate (USD)
                </label>
                <div className="relative mt-1">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                  <input
                    id="rate"
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 py-2.5 pl-8 pr-4 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-slate-700">
                  Availability
                </label>
                <select
                  id="availability"
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                >
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="contract">Contract / Freelance</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="cv" className="block text-sm font-medium text-slate-700">
                CV / Resume Upload
              </label>
              <div className="mt-1 flex items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 px-6 py-8">
                <div className="text-center">
                  <p className="text-sm text-slate-600">Drag & drop your CV here, or</p>
                  <label htmlFor="cv" className="mt-2 inline-block cursor-pointer rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
                    Browse Files
                  </label>
                  <input id="cv" type="file" accept=".pdf,.doc,.docx" className="hidden" />
                  <p className="mt-2 text-xs text-slate-400">PDF, DOC up to 5 MB</p>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Save Profile
            </button>
          </form>
        </section>

        {/* Application Tracker */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Application Tracker</h2>
          <div className="mt-4 space-y-3">
            {applications.map((app) => (
              <div
                key={app.job}
                className="flex flex-col gap-2 rounded-xl border border-slate-100 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-semibold text-slate-900">{app.job}</h3>
                  <p className="text-sm text-slate-500">
                    {app.company} · Applied {app.applied}
                  </p>
                </div>
                <span
                  className={`shrink-0 self-start rounded-full px-3 py-1 text-xs font-medium sm:self-center ${
                    app.status === "Accepted"
                      ? "bg-emerald-50 text-emerald-700"
                      : app.status === "Rejected"
                        ? "bg-red-50 text-red-700"
                        : app.status === "Interview Scheduled"
                          ? "bg-blue-50 text-blue-700"
                          : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {app.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </DashboardShell>
  );
}

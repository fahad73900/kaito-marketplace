"use client";

import PageShell from "@/components/PageShell";
import StarRating from "@/components/StarRating";
import { useMemo, useState } from "react";

type Job = {
  title: string;
  company: string;
  type: string;
  rate: string;
  skills: string[];
  rating: number;
  applicants: number;
  badge: string | null;
  posted: string;
};

const jobs: Job[] = [
  { title: "Senior React Developer", company: "TechFlow Inc.", type: "Full-time", rate: "$45/hr", skills: ["React", "TypeScript", "Node.js"], rating: 4.9, applicants: 12, badge: "Urgent", posted: "2 days ago" },
  { title: "Virtual Assistant — E-commerce", company: "ShopGlobal", type: "Part-time", rate: "$18/hr", skills: ["Shopify", "Customer Support", "Excel"], rating: 4.8, applicants: 8, badge: null, posted: "3 days ago" },
  { title: "DevOps Engineer", company: "CloudScale Ltd.", type: "Contract", rate: "$55/hr", skills: ["AWS", "Docker", "CI/CD"], rating: 4.9, applicants: 5, badge: "Featured", posted: "1 week ago" },
  { title: "Content Writer — Tech", company: "DevBlog Media", type: "Freelance", rate: "$25/hr", skills: ["SEO", "Blogging", "Technical Writing"], rating: 4.7, applicants: 19, badge: null, posted: "4 days ago" },
  { title: "UI/UX Designer", company: "DesignFirst Co.", type: "Full-time", rate: "$38/hr", skills: ["Figma", "Prototyping", "User Research"], rating: 4.8, applicants: 15, badge: null, posted: "5 days ago" },
  { title: "Python Backend Developer", company: "DataPipe AI", type: "Contract", rate: "$50/hr", skills: ["Python", "FastAPI", "PostgreSQL"], rating: 4.9, applicants: 7, badge: "New", posted: "1 day ago" },
];

const filterOptions = ["All", "Full-time", "Part-time", "Contract", "Freelance"];

function ApplyModal({ job, onClose }: { job: Job; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Apply for Position</h2>
            <p className="text-sm text-slate-500">{job.title} at {job.company}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
          >
            ✕
          </button>
        </div>

        {submitted ? (
          <div className="px-6 py-10 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl">
              ✓
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">Application Submitted!</h3>
            <p className="mt-2 text-sm text-slate-500">
              Your application for {job.title} has been sent. The employer will review it shortly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 px-6 py-6">
            <div>
              <label htmlFor="apply-name" className="block text-sm font-medium text-slate-700">
                Full Name
              </label>
              <input
                id="apply-name"
                type="text"
                required
                placeholder="Your full name"
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>
            <div>
              <label htmlFor="apply-email" className="block text-sm font-medium text-slate-700">
                Email Address
              </label>
              <input
                id="apply-email"
                type="email"
                required
                placeholder="you@example.com"
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>
            <div>
              <label htmlFor="apply-rate" className="block text-sm font-medium text-slate-700">
                Expected Hourly Rate (USD)
              </label>
              <input
                id="apply-rate"
                type="number"
                required
                placeholder="e.g. 40"
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>
            <div>
              <label htmlFor="apply-cover" className="block text-sm font-medium text-slate-700">
                Cover Letter
              </label>
              <textarea
                id="apply-cover"
                rows={4}
                required
                placeholder="Why are you a great fit for this role?"
                className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>
            <div>
              <label htmlFor="apply-cv" className="block text-sm font-medium text-slate-700">
                Upload CV (optional)
              </label>
              <input
                id="apply-cv"
                type="file"
                accept=".pdf,.doc,.docx"
                className="mt-1 w-full text-sm text-slate-500 file:mr-4 file:rounded-lg file:border-0 file:bg-emerald-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-emerald-700"
              />
            </div>
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 rounded-xl bg-emerald-600 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Submit Application
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default function RemoteWorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const filtered = useMemo(() => {
    let result = jobs;
    if (activeFilter !== "All") result = result.filter((j) => j.type === activeFilter);
    if (search) {
      result = result.filter(
        (j) =>
          j.title.toLowerCase().includes(search.toLowerCase()) ||
          j.company.toLowerCase().includes(search.toLowerCase()) ||
          j.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()))
      );
    }
    return result;
  }, [activeFilter, search]);

  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900">Remote Work</h1>
        <p className="mt-2 text-slate-500">
          International remote jobs for Pakistani talent — apply directly from the marketplace.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActiveFilter(f)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  activeFilter === f ? "bg-emerald-600 text-white" : "bg-white text-slate-600 border border-slate-200 hover:border-emerald-300"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <input
            type="search"
            placeholder="Search jobs or skills..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm outline-none focus:border-emerald-500"
          />
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((job) => (
            <article
              key={job.title}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-slate-900 group-hover:text-emerald-700">{job.title}</h3>
                  <p className="text-sm text-slate-500">{job.company}</p>
                </div>
                {job.badge && (
                  <span className="shrink-0 rounded-full bg-emerald-600 px-2.5 py-0.5 text-xs font-semibold text-white">
                    {job.badge}
                  </span>
                )}
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {job.skills.map((skill) => (
                  <span key={skill} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
                <span>{job.type}</span>
                <span>·</span>
                <span>{job.posted}</span>
              </div>
              <div className="mt-4 flex items-end justify-between border-t border-slate-100 pt-4">
                <div>
                  <p className="text-lg font-bold text-emerald-700">{job.rate}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <StarRating rating={job.rating} />
                    <span className="text-xs text-slate-400">{job.applicants} applicants</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedJob(job)}
                  className="rounded-lg border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-50"
                >
                  Apply Now
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedJob && <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />}
    </PageShell>
  );
}

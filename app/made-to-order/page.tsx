"use client";

import PageShell from "@/components/PageShell";
import StarRating from "@/components/StarRating";
import { useMemo, useState } from "react";

const products = [
  { title: "Hand-Stitched Leather Wallet", artisan: "Lahore Crafts", category: "Leather", price: 35, rating: 4.9, reviews: 89, delivery: "7 days", badge: "Handmade" },
  { title: "Embroidered Kurta — Custom Fit", artisan: "Sindh Threads", category: "Clothing", price: 55, rating: 4.8, reviews: 156, delivery: "10 days", badge: "Trending" },
  { title: "Brass & Wood Home Décor", artisan: "Multan Artisans", category: "Crafts", price: 42, rating: 4.7, reviews: 64, delivery: "14 days", badge: null },
  { title: "Corporate Gift Hampers", artisan: "Karachi Gifts Co.", category: "Gifts", price: 28, rating: 4.9, reviews: 41, delivery: "5 days", badge: "B2B" },
  { title: "Custom Calligraphy Art", artisan: "Islamic Arts PK", category: "Crafts", price: 65, rating: 4.9, reviews: 32, delivery: "12 days", badge: null },
  { title: "Handwoven Pashmina Shawl", artisan: "Hunza Weavers", category: "Clothing", price: 120, rating: 5.0, reviews: 28, delivery: "14 days", badge: "Premium" },
  { title: "Personalised Leather Journal", artisan: "Lahore Crafts", category: "Leather", price: 32, rating: 4.8, reviews: 73, delivery: "7 days", badge: null },
  { title: "Block-Print Table Linens", artisan: "Sindh Threads", category: "Home", price: 38, rating: 4.6, reviews: 51, delivery: "10 days", badge: null },
];

const filterOptions = ["All", "Leather", "Clothing", "Crafts", "Gifts", "Home"];

export default function MadeToOrderPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let result = products;
    if (activeFilter !== "All") result = result.filter((p) => p.category === activeFilter);
    if (search) result = result.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()) || p.artisan.toLowerCase().includes(search.toLowerCase()));
    return result;
  }, [activeFilter, search]);

  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900">Made-to-Order Products</h1>
        <p className="mt-2 text-slate-500">
          Custom Pakistani handcrafted goods — leather, clothing, crafts, and personalised items.
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
            placeholder="Search artisans or products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm outline-none focus:border-emerald-500"
          />
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product) => (
            <article
              key={product.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-36 bg-gradient-to-br from-amber-50 to-orange-100">
                <div className="absolute inset-0 flex items-center justify-center text-3xl">🛍️</div>
                {product.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-emerald-600 px-2.5 py-0.5 text-xs font-semibold text-white">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4">
                <span className="text-xs font-medium text-emerald-600">{product.artisan}</span>
                <h3 className="font-semibold text-slate-900 group-hover:text-emerald-700">{product.title}</h3>
                <p className="text-sm text-slate-500">{product.category} · Ships in {product.delivery}</p>
                <div className="mt-auto flex items-end justify-between pt-3">
                  <div>
                    <p className="text-lg font-bold text-emerald-700">From ${product.price}</p>
                    <div className="mt-1 flex items-center gap-2">
                      <StarRating rating={product.rating} />
                      <span className="text-xs text-slate-400">({product.reviews})</span>
                    </div>
                  </div>
                  <button type="button" className="rounded-lg border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">
                    Order Now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

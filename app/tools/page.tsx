"use client";

import ToolCard from "@/components/ToolCard";
import { getAllTools } from "@/lib/getTools";
import { useMemo, useState } from "react";

export default function ToolsPage() {
  const allTools = getAllTools();

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(new Set(allTools.map((t) => t.category))).sort(),
    ],
    [allTools]
  );

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("A-Z");

  const filtered = allTools
    .filter((t) =>
      `${t.name} ${t.description} ${t.category}`
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .filter((t) => (category === "All" ? true : t.category === category))
    .sort((a, b) =>
      sort === "A-Z"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  return (
    <section className="py-10 text-[var(--foreground)]">
      <h1 className="text-4xl font-bold text-center my-10 text-[var(--foreground)]">
        Explore AI Tools
      </h1>

      {/* Search + Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tools..."
          className="
            w-full px-4 py-3 rounded-xl 
            bg-gray-50 border border-gray-300 text-gray-900
            dark:bg-gray-900 dark:border-gray-700 dark:text-white
            shadow-sm focus:ring-2 focus:ring-blue-500 transition
          "
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="
            w-full px-4 py-3 rounded-xl 
            bg-gray-50 border border-gray-300 text-gray-900
            dark:bg-gray-900 dark:border-gray-700 dark:text-white
            shadow-sm focus:ring-2 focus:ring-blue-500 transition
          "
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="
            w-full px-4 py-3 rounded-xl 
            bg-gray-50 border border-gray-300 text-gray-900
            dark:bg-gray-900 dark:border-gray-700 dark:text-white
            shadow-sm focus:ring-2 focus:ring-blue-500 transition
          "
        >
          <option value="A-Z">Sort: A → Z</option>
          <option value="Z-A">Sort: Z → A</option>
        </select>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
}

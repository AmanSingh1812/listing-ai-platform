"use client";

export default function SearchBar({ search, setSearch }: any) {
  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search tools..."
      className="w-full p-3 border rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white"
    />
  );
}

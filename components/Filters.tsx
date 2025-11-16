"use client";

export default function Filters({ category, setCategory }: any) {
  const categories = [
    "All",
    "Chatbot",
    "Code Assistant",
    "Writing",
    "Image Generation",
    "Video",
    "Voice",
  ];

  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="p-3 border rounded-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white"
    >
      {categories.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
}

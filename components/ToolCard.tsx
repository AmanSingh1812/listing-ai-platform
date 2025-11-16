"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Tool = {
  id: string;
  name: string;
  description: string;
  category: string;
};

type ToolCardProps = {
  tool: Tool;
};

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="
        p-5 rounded-xl 
        bg-white 
        border border-gray-200
        shadow-sm
        hover:shadow-xl 
        transition cursor-pointer
        dark:bg-gray-900 dark:border-gray-700 
      "
    >
      <Link href={`/tools/${tool.id}`}>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          {tool.name}
        </h2>

        <p className="text-gray-700 dark:text-gray-400 text-sm mt-2 line-clamp-2">
          {tool.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">
            {tool.category}
          </span>

          <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
            View →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

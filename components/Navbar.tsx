"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-[var(--background)] text-[var(--foreground)]
        border-b border-gray-300 dark:border-gray-800
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-tight">
          AI<span className="text-blue-600">Hub</span>
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-6">
          <Link
            href="/tools"
            className="
              text-sm font-medium 
              hover:text-blue-600 dark:hover:text-blue-400 
              transition-colors duration-200
            "
          >
            Tools
          </Link>

          {/* Toggle Button */}
          <button
            onClick={() => setDark(!dark)}
            className="
              flex items-center gap-2 px-3 py-1.5 rounded-md 
              border border-gray-300 dark:border-gray-700 
              bg-white text-gray-800 
              dark:bg-gray-900 dark:text-gray-100
              hover:bg-gray-100 dark:hover:bg-gray-800
              transition-all duration-200 text-sm
            "
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}

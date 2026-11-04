"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("editorial_theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("editorial_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("editorial_theme", "light");
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="group flex items-center gap-2 border border-[#D9D9D6] dark:border-[#2A2A28] bg-transparent px-2.5 py-1 text-[11px] font-mono tracking-widest text-[#111111] dark:text-[#F2F2F0] transition-colors hover:border-[#111111] dark:hover:border-[#F2F2F0]"
      aria-label="Toggle theme mode"
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#C8B79E]" />
      <span>{isDark ? "THEME: DARK" : "THEME: LIGHT"}</span>
    </button>
  );
}


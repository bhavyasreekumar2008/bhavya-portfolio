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
      className="group flex items-center gap-2 border border-amber-400/40 dark:border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 px-3 py-1 text-[11px] font-mono tracking-widest text-[#1A150B] dark:text-[#FDF9F0] rounded-full transition-all"
      aria-label="Toggle theme mode"
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
      <span>{isDark ? "DARK GOLD" : "LIGHT GOLD"}</span>
    </button>
  );
}


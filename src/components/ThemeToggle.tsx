"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

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
      className="flex items-center justify-center h-8 w-8 border border-amber-400/30 hover:border-amber-400/60 hover:bg-amber-400/10 text-amber-300/70 hover:text-amber-200 rounded-lg transition-all duration-300"
      aria-label="Toggle theme mode"
    >
      {isDark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}

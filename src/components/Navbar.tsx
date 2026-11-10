"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-amber-300/30 dark:border-amber-500/20 bg-[#FAF4E6]/90 dark:bg-[#0D0B08]/90 backdrop-blur-md transition-colors shadow-sm">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-8">
          {/* Brand Monogram */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-xs font-mono font-bold tracking-[0.2em] text-[#1A150B] dark:text-[#FDF9F0] uppercase group"
          >
            <span className="text-amber-500 font-extrabold group-hover:scale-110 transition-transform">00 //</span>
            <span className="group-hover:text-amber-500 transition-colors">{portfolioData.author.name}</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[11px] font-mono tracking-[0.16em]">
            {portfolioData.navigation.map((item) => (
              <a
                key={item.number}
                href={item.href}
                className="swiss-link text-[#6B5B3E] dark:text-[#C4AD86] hover:text-[#1A150B] dark:hover:text-[#FDF9F0] transition-colors"
              >
                <span className="text-amber-500 mr-1.5">{item.number}</span>
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Theme Toggle & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex h-8 w-8 items-center justify-center border border-amber-300/40 dark:border-amber-500/30 text-[#1A150B] dark:text-[#FDF9F0] rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Editorial Overlay Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-14 z-40 flex flex-col justify-between golden-page-bg p-8 md:hidden border-b border-amber-300/30"
          >
            <div className="flex flex-col gap-6 pt-6">
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#888888]">
                CATALOG SECTIONS // TABLE OF CONTENTS
              </span>
              {portfolioData.navigation.map((item) => (
                <a
                  key={item.number}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-baseline justify-between border-b border-[#D9D9D6] dark:border-[#2A2A28] pb-3 text-2xl font-bold tracking-tight text-[#111111] dark:text-[#F2F2F0]"
                >
                  <span className="group-hover:translate-x-2 transition-transform">
                    {item.label}
                  </span>
                  <span className="text-sm font-mono text-[#C8B79E]">
                    SEC. {item.number}
                  </span>
                </a>
              ))}
            </div>

            <div className="border-t border-[#D9D9D6] dark:border-[#2A2A28] pt-6 flex flex-col gap-2 font-mono text-xs text-[#6B6B6B] dark:text-[#9E9E99]">
              <p>{portfolioData.author.college}</p>
              <p className="text-[10px] tracking-widest text-[#888888]">
                {portfolioData.author.tagline}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


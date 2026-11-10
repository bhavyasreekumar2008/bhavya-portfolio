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
      <header
        className="sticky top-0 z-50 w-full backdrop-blur-md transition-colors"
        style={{
          background:
            "linear-gradient(135deg, rgba(11,10,7,0.95) 0%, rgba(24,20,12,0.95) 60%, rgba(37,29,16,0.92) 100%)",
          borderBottom: "1px solid rgba(212,175,55,0.2)",
          boxShadow: "0 2px 24px rgba(212,175,55,0.08)",
        }}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-8">

          {/* Brand Monogram */}
          <a
            href="#"
            className="flex items-center gap-2 group"
          >
            <span
              className="text-xs font-mono font-black tracking-[0.3em] uppercase transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #FDE68A 0%, #D4AF37 50%, #F59E0B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              BS
            </span>
            <span className="h-4 w-px bg-amber-400/30" />
            <span className="text-[11px] font-mono font-semibold tracking-[0.18em] text-amber-100/80 uppercase group-hover:text-amber-300 transition-colors">
              {portfolioData.author.firstName}{" "}
              <span className="text-amber-400/60">{portfolioData.author.lastName}</span>
            </span>
          </a>

          {/* Desktop Nav Links — no numbers, capitalize */}
          <nav className="hidden md:flex items-center gap-1">
            {portfolioData.navigation.map((item) => (
              <a
                key={item.number}
                href={item.href}
                className="relative px-3.5 py-2 text-[11px] font-semibold tracking-[0.14em] capitalize text-amber-200/60 hover:text-amber-200 transition-all duration-300 rounded-lg hover:bg-amber-400/8 group"
              >
                {item.label.charAt(0) + item.label.slice(1).toLowerCase()}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-px w-0 bg-gradient-to-r from-transparent via-amber-400 to-transparent group-hover:w-4/5 transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right: Theme Toggle + Mobile Button */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex h-8 w-8 items-center justify-center border border-amber-400/30 text-amber-200/80 rounded-lg hover:border-amber-400/60 hover:bg-amber-400/10 transition-all"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-14 z-40 flex flex-col justify-between p-8 md:hidden"
            style={{
              background:
                "linear-gradient(145deg, #0b0a07 0%, #18140c 50%, #251d10 100%)",
              borderBottom: "1px solid rgba(212,175,55,0.2)",
            }}
          >
            <div className="flex flex-col gap-2 pt-4">
              <span className="text-[9px] font-mono font-bold tracking-[0.3em] text-amber-400/40 uppercase mb-4">
                Navigation
              </span>
              {portfolioData.navigation.map((item, i) => (
                <motion.a
                  key={item.number}
                  href={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-center justify-between py-3.5 border-b text-2xl font-bold capitalize transition-all"
                  style={{ borderColor: "rgba(212,175,55,0.12)" }}
                >
                  <span
                    className="group-hover:translate-x-2 transition-transform duration-300"
                    style={{ color: "#F5E6C0" }}
                  >
                    {item.label.charAt(0) + item.label.slice(1).toLowerCase()}
                  </span>
                  <span
                    className="text-xs font-mono opacity-40"
                    style={{ color: "#D4AF37" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="pt-6 flex flex-col gap-1.5 font-mono">
              <p className="text-[10px] text-amber-300/50 tracking-widest uppercase">
                {portfolioData.author.college}
              </p>
              <p className="text-[9px] tracking-widest text-amber-400/30 uppercase">
                {portfolioData.author.location}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

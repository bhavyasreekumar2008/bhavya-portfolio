"use client";

import { portfolioData } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full max-w-7xl mx-auto mt-8 sm:mt-12 mb-6 sm:mb-8 px-2 sm:px-4">
      <div className="book-spread border border-amber-400/30 dark:border-amber-500/30 p-4 sm:p-8 lg:p-14 rounded-2xl shadow-xl">
        {/* Top Colophon Meta Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 sm:pb-10 border-b border-amber-300/30 dark:border-amber-500/20 text-xs font-mono">
          <div>
            <span className="block text-[9px] text-neutral-400 tracking-widest uppercase mb-1">
              PUBLICATION // EDITION
            </span>
            <p className="font-bold text-[#1A150B] dark:text-[#FDF9F0]">
              MONOGRAPH CATALOG 2026
            </p>
            <p className="text-[11px] text-[#6B5B3E] dark:text-[#BFAF95]">
              Volume 01 &bull; Department of AI
            </p>
          </div>

          <div>
            <span className="block text-[9px] text-neutral-400 tracking-widest uppercase mb-1">
              AFFILIATION // CAMPUS
            </span>
            <p className="font-bold text-[#1A150B] dark:text-[#FDF9F0]">
              Thejus Engineering College
            </p>
            <p className="text-[11px] text-[#6B5B3E] dark:text-[#BFAF95]">
              Thrissur, Kerala, India
            </p>
          </div>

          <div>
            <span className="block text-[9px] text-neutral-400 tracking-widest uppercase mb-1">
              DESIGN DISCIPLINE
            </span>
            <p className="font-bold text-[#1A150B] dark:text-[#FDF9F0]">
              Modern Swiss Minimalist
            </p>
            <p className="text-[11px] text-[#6B5B3E] dark:text-[#BFAF95]">
              Linear Gradient Golden Theme &amp; 3D
            </p>
          </div>

          <div className="flex flex-col sm:items-end justify-between gap-3">
            <span className="block text-[9px] text-neutral-400 tracking-widest uppercase mb-1">
              NAVIGATION
            </span>
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center justify-center gap-2 border border-amber-400/40 bg-amber-500/10 hover:bg-amber-500/20 px-3.5 py-2 rounded-xl text-xs font-mono font-bold tracking-widest text-[#1A150B] dark:text-[#FDF9F0] transition-all uppercase w-full sm:w-auto"
            >
              <span>BACK TO TOP</span>
              <ArrowUp
                size={12}
                className="group-hover:-translate-y-1 transition-transform text-amber-500"
              />
            </button>
          </div>
        </div>

        {/* Monolith Wordmark Branding */}
        <div className="pt-6 sm:pt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <span
              className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter"
              style={{
                background:
                  "linear-gradient(135deg, #FFFDF5 0%, #FDE68A 30%, #D4AF37 60%, #F59E0B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              BHAVYA SREEKUMAR
            </span>
            <p className="text-[10px] sm:text-xs font-mono text-[#6B5B3E] dark:text-[#BFAF95] mt-1">
              Undergraduate Engineering Monograph &bull; B.Tech CSE (Artificial Intelligence)
            </p>
          </div>

          <div className="text-center md:text-right font-mono text-[10px] text-neutral-400">
            <p>&copy; 2026 Bhavya Sreekumar. All rights reserved.</p>
            <p className="mt-0.5">Designed with Next.js, Three.js &amp; Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

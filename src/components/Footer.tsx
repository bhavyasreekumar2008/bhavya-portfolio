"use client";

import { portfolioData } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full max-w-7xl mx-auto mt-12 mb-8 px-2 sm:px-4">
      <div className="book-spread border border-[#D9D9D6] dark:border-[#2A2A28] bg-[#F6F6F4] dark:bg-[#161616] p-6 sm:p-10 lg:p-14">
        {/* Top Colophon Meta Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-10 border-b border-[#D9D9D6] dark:border-[#2A2A28] text-xs font-mono">
          <div>
            <span className="block text-[9px] text-[#888888] tracking-widest uppercase mb-1">
              PUBLICATION // EDITION
            </span>
            <p className="font-bold text-[#111111] dark:text-[#F2F2F0]">
              MONOGRAPH CATALOG 2026
            </p>
            <p className="text-[11px] text-[#6B6B6B] dark:text-[#9E9E99]">
              Volume 01 &bull; Department of AI
            </p>
          </div>

          <div>
            <span className="block text-[9px] text-[#888888] tracking-widest uppercase mb-1">
              AFFILIATION // CAMPUS
            </span>
            <p className="font-bold text-[#111111] dark:text-[#F2F2F0]">
              Thejus Engineering College
            </p>
            <p className="text-[11px] text-[#6B6B6B] dark:text-[#9E9E99]">
              Thrissur, Kerala, India
            </p>
          </div>

          <div>
            <span className="block text-[9px] text-[#888888] tracking-widest uppercase mb-1">
              DESIGN DISCIPLINE
            </span>
            <p className="font-bold text-[#111111] dark:text-[#F2F2F0]">
              Swiss Minimalist Monograph
            </p>
            <p className="text-[11px] text-[#6B6B6B] dark:text-[#9E9E99]">
              Architectural Grid &amp; Hairlines
            </p>
          </div>

          <div className="flex flex-col sm:items-end justify-between">
            <span className="block text-[9px] text-[#888888] tracking-widest uppercase mb-1">
              NAVIGATION
            </span>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 border border-[#111111] dark:border-[#F2F2F0] px-3.5 py-1.5 text-xs font-mono font-bold tracking-widest text-[#111111] dark:text-[#F2F2F0] hover:bg-[#111111] hover:text-white dark:hover:bg-[#F2F2F0] dark:hover:text-[#111111] transition-all uppercase"
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={12} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* GIANT EDITORIAL WORDMARK (MONOLITH NAME) */}
        <div className="py-10 sm:py-16 text-center select-none overflow-hidden">
          <h2 className="text-[11vw] font-extrabold uppercase tracking-tight text-[#111111] dark:text-[#F2F2F0] leading-[0.85] whitespace-nowrap">
            {portfolioData.author.name}
          </h2>
          <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono text-[#888888] tracking-[0.2em] uppercase mt-4 px-2">
            <span>AI STUDENT // BUILDER // CURIOUS BY DEFAULT</span>
            <span>THRISSUR, KERALA</span>
          </div>
        </div>

        {/* Closing Copyright / Folio */}
        <div className="pt-6 border-t border-[#D9D9D6] dark:border-[#2A2A28] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-[#888888]">
          <div>
            &copy; 2026 BHAVYA SREEKUMAR. ALL RIGHTS RESERVED.
          </div>
          <div>
            CATALOG FINALE // END OF EXHIBITION SPREADS
          </div>
        </div>
      </div>
    </footer>
  );
}

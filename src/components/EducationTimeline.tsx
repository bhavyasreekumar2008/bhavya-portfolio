"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, MapPin } from "lucide-react";

export default function EducationTimeline() {
  return (
    <section
      id="education"
      className="relative w-full max-w-7xl mx-auto my-6 sm:my-16 px-2 sm:px-4"
    >
      <div className="book-spread border border-amber-400/30 dark:border-amber-500/30 p-4 sm:p-8 lg:p-14 rounded-2xl shadow-xl">
        {/* Folio & Running Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-300/30 dark:border-amber-500/20 pb-3 sm:pb-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] text-amber-500">
              07 // CHRONOLOGY
            </span>
            <span className="text-xs text-neutral-400 font-mono">/</span>
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-[#6B5B3E] dark:text-[#C4AD86] uppercase">
              ACADEMIC FOUNDATION
            </span>
          </div>
          <span className="text-[9px] sm:text-xs font-mono tracking-[0.2em] text-neutral-400">
            CATALOG FOLIO P. 13 — 14
          </span>
        </div>

        {/* Section Heading */}
        <div className="mb-6 sm:mb-10 pb-6 border-b border-amber-300/30 dark:border-amber-500/20">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#1A150B] dark:text-[#FDF9F0] leading-none mb-2 sm:mb-3">
            EDUCATION
          </h2>
          <p className="text-[10px] sm:text-xs font-mono tracking-[0.18em] text-amber-600/80 dark:text-amber-400/80 uppercase">
            FORMAL INSTITUTIONAL CURRICULUM &amp; RIGOR
          </p>
        </div>

        {/* Thin Vertical Timeline Line */}
        <div className="relative pl-5 sm:pl-10 border-l border-amber-300/40 dark:border-amber-500/30 ml-2 sm:ml-4 flex flex-col gap-8 sm:gap-10">
          {portfolioData.education.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Marker on Line */}
              <div className="absolute -left-[27px] sm:-left-[47px] top-1 h-3.5 w-3.5 rounded-full bg-amber-400 border-2 border-amber-600 flex items-center justify-center shadow-[0_0_8px_rgba(245,158,11,0.5)]">
                <div className="h-1 w-1 bg-white rounded-full" />
              </div>

              {/* Number and Year */}
              <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 mb-1">
                <span className="text-xs font-mono font-bold text-amber-500 tracking-widest">
                  0{idx + 1} //
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold text-[#1A150B] dark:text-[#FDF9F0]">
                  {item.period}
                </span>
                {item.badge && (
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full border border-amber-400/40 bg-amber-500/10 text-amber-600 dark:text-amber-400 uppercase tracking-wider font-semibold">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Degree Title */}
              <h3 className="text-base sm:text-xl font-bold uppercase tracking-tight text-[#1A150B] dark:text-[#FDF9F0] mb-1">
                {item.degree}
              </h3>

              {/* Institution and Location */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#6B5B3E] dark:text-[#BFAF95] mb-2 sm:mb-3">
                <div className="flex items-center gap-1.5 font-semibold text-[#1A150B] dark:text-[#FDF9F0]">
                  <GraduationCap size={14} className="text-amber-500" />
                  <span>{item.institution}</span>
                </div>
                <span>&bull;</span>
                <div className="flex items-center gap-1 text-[11px] text-amber-600 dark:text-amber-400">
                  <MapPin size={11} />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#443825] dark:text-[#D5C5A8] leading-relaxed max-w-2xl font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Section Bottom Folio */}
        <div className="mt-8 sm:mt-12 pt-3 sm:pt-4 border-t border-amber-300/30 dark:border-amber-500/20 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-neutral-400">
          <span>SPREAD 07 // CURRICULUM VITAE</span>
          <span>PAGE 13 — 14</span>
        </div>
      </div>
    </section>
  );
}

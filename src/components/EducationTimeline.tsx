"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, MapPin } from "lucide-react";

export default function EducationTimeline() {
  return (
    <section
      id="education"
      className="relative w-full max-w-7xl mx-auto my-8 sm:my-16 px-2 sm:px-4"
    >
      <div className="book-spread border border-[#D9D9D6] dark:border-[#2A2A28] bg-[#F6F6F4] dark:bg-[#161616] p-6 sm:p-10 lg:p-14">
        {/* Folio & Running Header */}
        <div className="flex items-center justify-between border-b border-[#D9D9D6] dark:border-[#2A2A28] pb-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] text-[#C8B79E]">
              07 // CHRONOLOGY
            </span>
            <span className="text-xs text-[#888888] font-mono">/</span>
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-[#6B6B6B] dark:text-[#9E9E99] uppercase">
              ACADEMIC FOUNDATION
            </span>
          </div>
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-[#888888]">
            CATALOG FOLIO P. 13 — 14
          </span>
        </div>

        {/* Section Heading */}
        <div className="mb-10 pb-6 border-b border-[#D9D9D6] dark:border-[#2A2A28]">
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#111111] dark:text-[#F2F2F0] leading-none mb-3">
            EDUCATION
          </h2>
          <p className="text-xs font-mono tracking-[0.18em] text-[#888888] uppercase">
            FORMAL INSTITUTIONAL CURRICULUM &amp; RIGOR
          </p>
        </div>

        {/* Thin Vertical Timeline Line */}
        <div className="relative pl-6 sm:pl-10 border-l border-[#D9D9D6] dark:border-[#2A2A28] ml-2 sm:ml-4 flex flex-col gap-10">
          {portfolioData.education.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Architectural Square Marker on Line */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 h-3.5 w-3.5 bg-[#F6F6F4] dark:bg-[#161616] border-2 border-[#111111] dark:border-[#F2F2F0] flex items-center justify-center">
                <div className="h-1 w-1 bg-[#C8B79E]" />
              </div>

              {/* Number and Year */}
              <div className="flex flex-wrap items-baseline gap-3 mb-1">
                <span className="text-xs font-mono font-bold text-[#C8B79E] tracking-widest">
                  0{idx + 1} //
                </span>
                <span className="text-sm font-mono font-bold text-[#111111] dark:text-[#F2F2F0]">
                  {item.period}
                </span>
                {item.badge && (
                  <span className="text-[9px] font-mono px-2 py-0.5 border border-[#C8B79E] text-[#C8B79E] uppercase tracking-wider">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Degree Title */}
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-[#111111] dark:text-[#F2F2F0] mb-1">
                {item.degree}
              </h3>

              {/* Institution and Location */}
              <div className="flex items-center gap-2 text-xs font-mono text-[#6B6B6B] dark:text-[#9E9E99] mb-3">
                <GraduationCap size={13} className="text-[#C8B79E]" />
                <span className="font-semibold text-[#111111] dark:text-[#F2F2F0]">
                  {item.institution}
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <MapPin size={11} />
                  {item.location}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#444444] dark:text-[#AAAAAA] leading-relaxed max-w-2xl bg-white dark:bg-[#1A1A1A] p-4 border border-[#EDEDED] dark:border-[#262624]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Spread Bottom Folios */}
        <div className="mt-12 pt-4 border-t border-[#D9D9D6] dark:border-[#2A2A28] flex items-center justify-between text-[10px] font-mono text-[#888888]">
          <span>SPREAD 07 // SECTION: ACADEMIC CHRONOLOGY</span>
          <span>PAGE 13 — 14</span>
        </div>
      </div>
    </section>
  );
}


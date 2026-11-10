"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative w-full max-w-7xl mx-auto my-6 sm:my-16 px-2 sm:px-4"
    >
      <div className="book-spread border border-amber-400/30 dark:border-amber-500/30 p-4 sm:p-8 lg:p-14 rounded-2xl shadow-xl">
        {/* Folio & Running Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-300/30 dark:border-amber-500/20 pb-3 sm:pb-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] text-amber-500">
              06 // REPERTOIRE
            </span>
            <span className="text-xs text-neutral-400 font-mono">/</span>
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-[#6B5B3E] dark:text-[#C4AD86] uppercase">
              TECHNICAL COMPETENCE
            </span>
          </div>
          <span className="text-[9px] sm:text-xs font-mono tracking-[0.2em] text-neutral-400">
            CATALOG FOLIO P. 11 — 12
          </span>
        </div>

        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 mb-6 sm:mb-10 pb-6 border-b border-amber-300/30 dark:border-amber-500/20">
          <div className="lg:col-span-6">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#1A150B] dark:text-[#FDF9F0] leading-none mb-2 sm:mb-3">
              SKILLS &amp; STACK
            </h2>
            <p className="text-[10px] sm:text-xs font-mono tracking-[0.18em] text-amber-600/80 dark:text-amber-400/80 uppercase">
              ARCHITECTURAL TYPOGRAPHIC MATRIX // NO GRAPHICAL METERS
            </p>
          </div>
          <div className="lg:col-span-6 flex flex-col justify-end">
            <p className="text-xs sm:text-sm text-[#443825] dark:text-[#D5C5A8] leading-relaxed">
              A curated inventory of programming languages, mathematical frameworks, and developer infrastructure utilized across computational AI projects.
            </p>
          </div>
        </div>

        {/* Categories Matrix */}
        <div className="flex flex-col gap-6 sm:gap-10">
          {portfolioData.skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.code}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="border border-amber-300/40 dark:border-amber-500/30 bg-gradient-to-br from-white/90 via-amber-50/60 to-amber-100/40 dark:from-neutral-900/90 dark:via-neutral-900/70 dark:to-amber-950/20 p-4 sm:p-8 rounded-xl shadow-sm"
            >
              {/* Category Header */}
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-amber-400/30 dark:border-amber-500/30 pb-3 mb-3 sm:mb-4">
                <h3 className="text-sm sm:text-lg font-extrabold uppercase tracking-tight text-[#1A150B] dark:text-[#FDF9F0]">
                  {category.title}
                </h3>
                <span className="text-[10px] font-mono tracking-[0.2em] text-amber-500 font-bold">
                  {category.code}
                </span>
              </div>

              {/* Minimal Typographic Skill Rows (Responsive stack on mobile) */}
              <div className="divide-y divide-amber-300/20 dark:divide-amber-500/20">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="py-2.5 sm:py-3.5 flex flex-col sm:grid sm:grid-cols-12 gap-1 sm:gap-4 items-baseline hover:bg-amber-500/[0.06] px-2 rounded-lg transition-colors"
                  >
                    <div className="sm:col-span-4 font-bold text-xs sm:text-sm text-[#1A150B] dark:text-[#FDF9F0]">
                      {skill.name}
                    </div>

                    <div className="sm:col-span-3 text-[10px] sm:text-xs font-mono font-medium text-amber-600 dark:text-amber-400">
                      {skill.level}
                    </div>

                    <div className="sm:col-span-5 text-[11px] text-[#6B5B3E] dark:text-[#BFAF95]">
                      {skill.note || "—"}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Bottom Folio */}
        <div className="mt-8 sm:mt-12 pt-3 sm:pt-4 border-t border-amber-300/30 dark:border-amber-500/20 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-neutral-400">
          <span>SPREAD 06 // TECHNICAL REPERTOIRE</span>
          <span>PAGE 11 — 12</span>
        </div>
      </div>
    </section>
  );
}

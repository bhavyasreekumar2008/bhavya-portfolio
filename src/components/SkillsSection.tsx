"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative w-full max-w-7xl mx-auto my-8 sm:my-16 px-2 sm:px-4"
    >
      <div className="book-spread border border-[#D9D9D6] dark:border-[#2A2A28] bg-[#F6F6F4] dark:bg-[#161616] p-6 sm:p-10 lg:p-14">
        {/* Folio & Running Header */}
        <div className="flex items-center justify-between border-b border-[#D9D9D6] dark:border-[#2A2A28] pb-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] text-[#C8B79E]">
              06 // REPERTOIRE
            </span>
            <span className="text-xs text-[#888888] font-mono">/</span>
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-[#6B6B6B] dark:text-[#9E9E99] uppercase">
              TECHNICAL COMPETENCE
            </span>
          </div>
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-[#888888]">
            CATALOG FOLIO P. 11 — 12
          </span>
        </div>

        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 pb-6 border-b border-[#D9D9D6] dark:border-[#2A2A28]">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#111111] dark:text-[#F2F2F0] leading-none mb-3">
              SKILLS &amp; STACK
            </h2>
            <p className="text-xs font-mono tracking-[0.18em] text-[#888888] uppercase">
              ARCHITECTURAL TYPOGRAPHIC MATRIX // NO GRAPHICAL METERS
            </p>
          </div>
          <div className="lg:col-span-6 flex flex-col justify-end">
            <p className="text-sm text-[#444444] dark:text-[#B0B0AA] leading-relaxed">
              A curated inventory of programming languages, mathematical frameworks, and developer infrastructure utilized across computational AI projects.
            </p>
          </div>
        </div>

        {/* Categories Matrix */}
        <div className="flex flex-col gap-10">
          {portfolioData.skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.code}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="border border-[#D9D9D6] dark:border-[#2A2A28] bg-[#FFFFFF] dark:bg-[#1A1A1A] p-6 sm:p-8"
            >
              {/* Category Header */}
              <div className="flex items-baseline justify-between border-b border-[#111111] dark:border-[#F2F2F0] pb-3 mb-4">
                <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-tight text-[#111111] dark:text-[#F2F2F0]">
                  {category.title}
                </h3>
                <span className="text-[10px] font-mono tracking-[0.2em] text-[#C8B79E]">
                  {category.code}
                </span>
              </div>

              {/* Minimal Typographic Skill Rows */}
              <div className="divide-y divide-[#EBEBEB] dark:divide-[#282826]">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="py-3 sm:py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline hover:bg-[#F9F9F8] dark:hover:bg-[#202020] px-2 transition-colors"
                  >
                    <div className="sm:col-span-4 font-bold text-sm text-[#111111] dark:text-[#F2F2F0]">
                      {skill.name}
                    </div>
                    <div className="sm:col-span-3 text-[11px] font-mono text-[#C8B79E] font-medium">
                      [ {skill.level} ]
                    </div>
                    <div className="sm:col-span-5 text-xs text-[#6B6B6B] dark:text-[#9E9E99]">
                      {skill.note}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Spread Bottom Folios */}
        <div className="mt-12 pt-4 border-t border-[#D9D9D6] dark:border-[#2A2A28] flex items-center justify-between text-[10px] font-mono text-[#888888]">
          <span>SPREAD 06 // SECTION: TECHNICAL ARCHIVE</span>
          <span>PAGE 11 — 12</span>
        </div>
      </div>
    </section>
  );
}


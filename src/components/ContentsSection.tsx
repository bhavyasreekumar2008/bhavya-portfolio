"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { User, Cpu, GraduationCap, Mail, ArrowUpRight } from "lucide-react";

export default function ContentsSection() {
  const sections = [
    {
      number: "01",
      section: "PROLOGUE",
      page: "P. 03",
      tag: "BIOGRAPHY",
      title: "ABOUT ME & PHILOSOPHY",
      description:
        "First-year engineering foundations, academic focus in Artificial Intelligence, computational philosophy, and curated personal monograph.",
      href: "#about",
      icon: User,
    },
    {
      number: "02",
      section: "ARCHIVE",
      page: "P. 05",
      tag: "SKILLS MATRIX",
      title: "TECHNICAL REPERTOIRE",
      description:
        "Foundational programming in Python & C, core machine learning paradigms, data structures, and modern cloud deployment workflows.",
      href: "#skills",
      icon: Cpu,
    },
    {
      number: "03",
      section: "CHRONOLOGY",
      page: "P. 07",
      tag: "EDUCATION",
      title: "ACADEMIC TIMELINE",
      description:
        "B.Tech in Computer Science & Engineering (AI) at Thejus Engineering College, Thrissur, Kerala, plus academic honors and STEM showcases.",
      href: "#education",
      icon: GraduationCap,
    },
    {
      number: "04",
      section: "EPILOGUE",
      page: "P. 09",
      tag: "CONTACT",
      title: "DISPATCH & INQUIRY",
      description:
        "Direct communication channel, academic collaboration inquiries, verified email dispatch, and professional network profiles.",
      href: "#contact",
      icon: Mail,
    },
  ];

  return (
    <section
      id="contents"
      className="relative w-full max-w-7xl mx-auto my-6 sm:my-16 px-2 sm:px-4"
    >
      <div className="book-spread border border-amber-400/30 dark:border-amber-500/30 p-4 sm:p-8 lg:p-14 rounded-2xl shadow-xl">
        {/* Top Folio Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-300/30 dark:border-amber-500/20 pb-3 sm:pb-4 mb-6 sm:mb-10">
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] text-amber-500">
              01 // INDEX
            </span>
            <span className="text-xs text-neutral-400 font-mono">/</span>
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-[#6B5B3E] dark:text-[#C4AD86] uppercase">
              TABLE OF CONTENTS
            </span>
          </div>
          <span className="text-[9px] sm:text-xs font-mono tracking-[0.2em] text-neutral-400">
            CATALOG FOLIO P. 02
          </span>
        </div>

        {/* Section Heading & Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 mb-6 sm:mb-10 pb-6 sm:pb-8 border-b border-amber-300/30 dark:border-amber-500/20">
          <div className="lg:col-span-5">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#1A150B] dark:text-[#FDF9F0] leading-none mb-2 sm:mb-4">
              CONTENTS
            </h2>
            <p className="text-[10px] sm:text-xs font-mono tracking-[0.15em] text-amber-600/80 dark:text-amber-400/80 uppercase">
              CHRONOLOGY OF PROFILES, REPERTOIRE &amp; TIMELINES
            </p>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end">
            <p className="text-xs sm:text-sm text-[#443825] dark:text-[#D5C5A8] leading-relaxed max-w-xl">
              An architectural index of undergraduate engineering pursuits, computational study, and core competencies curated by Bhavya Sreekumar at Thejus Engineering College, Thrissur.
            </p>
          </div>
        </div>

        {/* Visual Contents Grid (Responsive 2x2 grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {sections.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.number}
                href={item.href}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group block border border-amber-300/40 dark:border-amber-500/30 p-5 rounded-xl bg-gradient-to-br from-white/90 via-amber-50/60 to-amber-100/40 dark:from-neutral-900/90 dark:via-neutral-900/70 dark:to-amber-950/30 hover:border-amber-400 dark:hover:border-amber-400 hover:shadow-[0_8px_25px_rgba(212,175,55,0.2)] transition-all transform hover:-translate-y-1"
              >
                {/* Header with Icon and Page Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="h-9 w-9 rounded-lg bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all">
                    <Icon size={18} />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-amber-600/80 dark:text-amber-400/80">
                    {item.page}
                  </span>
                </div>

                {/* Section Subtitle */}
                <div className="flex items-baseline justify-between mb-1.5">
                  <span className="text-xs font-mono font-bold tracking-[0.2em] text-amber-500">
                    {item.number} // {item.section}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold uppercase tracking-tight text-[#1A150B] dark:text-[#FDF9F0] group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-[#55452D] dark:text-[#BFAF95] line-clamp-3 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="pt-3 border-t border-amber-300/20 dark:border-amber-500/20 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-neutral-400 uppercase tracking-wider">{item.tag}</span>
                  <span className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 font-semibold group-hover:underline">
                    EXPLORE <ArrowUpRight size={12} />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Index List for Fast Navigation */}
        <div className="mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-amber-300/30 dark:border-amber-500/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
            <span className="text-[10px] tracking-widest text-neutral-400 uppercase">
              COMPLETE MONOGRAPH INDEX // 04 SECTIONS
            </span>
            <div className="flex flex-wrap gap-2 sm:gap-4 text-[11px]">
              {portfolioData.contents.map((c) => (
                <span key={c.number} className="text-[#6B5B3E] dark:text-[#C4AD86]">
                  <span className="text-amber-500 font-bold mr-1">{c.number}</span>
                  {c.section}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

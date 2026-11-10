"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/data/portfolio";
import { ExternalLink, Github } from "lucide-react";

interface ProjectSpreadProps {
  project: Project;
  index: number;
  total: number;
}

export default function ProjectSpread({ project, index, total }: ProjectSpreadProps) {
  const isEven = index % 2 === 0;

  return (
    <article
      id={project.id}
      className="relative w-full max-w-7xl mx-auto my-6 sm:my-16 px-2 sm:px-4 scroll-mt-20"
    >
      <div className="book-spread border border-amber-400/30 dark:border-amber-500/30 p-4 sm:p-8 lg:p-14 rounded-2xl shadow-xl relative overflow-hidden">
        {/* Folio & Running Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-300/30 dark:border-amber-500/20 pb-3 sm:pb-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] text-amber-500">
              0{index + 3} // PROJECT {project.number}
            </span>
            <span className="text-xs text-neutral-400 font-mono">/</span>
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-[#6B5B3E] dark:text-[#C4AD86] uppercase truncate max-w-[150px] sm:max-w-none">
              {project.category}
            </span>
          </div>
          <span className="text-[9px] sm:text-xs font-mono tracking-[0.2em] text-neutral-400">
            EXHIBIT SPREAD {index + 1} OF {total}
          </span>
        </div>

        {/* TWO-COLUMN SPREAD (Alternating Layouts, clean stack on mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 relative">
          {/* Subtle center spine hairline */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-amber-300/30 dark:bg-amber-500/20 -translate-x-1/2" />

          {/* COLUMN 1: Visual plate or narrative */}
          <div
            className={`flex flex-col justify-between ${isEven ? "order-1 pr-0 lg:pr-8" : "order-2 lg:order-1 pr-0 lg:pr-8"
              }`}
          >
            {isEven ? (
              /* PRIMARY VISUAL PLATE */
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="gallery-image-frame relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden border border-amber-400/30 dark:border-amber-500/25 shadow-lg mb-3 sm:mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 text-[9px] font-mono text-black bg-amber-300/90 px-2 py-0.5 rounded backdrop-blur-sm font-semibold">
                      PLATE 0{project.number} // MONO
                    </div>
                  </div>

                  {/* Caption & Metadata Strip */}
                  <div className="flex flex-wrap items-baseline justify-between gap-1 text-[10px] font-mono text-neutral-500 pb-2 border-b border-amber-300/20 dark:border-amber-500/20">
                    <span className="text-amber-600 dark:text-amber-400 font-bold">{project.dateAndLocation}</span>
                    <span className="truncate max-w-[200px]">{project.material}</span>
                  </div>
                </div>

                {/* Computational Stats Block */}
                {project.stats && (
                  <div className="mt-4 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-3 p-2.5 sm:p-4 rounded-xl border border-amber-300/30 dark:border-amber-500/20 bg-amber-500/[0.04]">
                    {project.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="text-center">
                        <span className="block text-[8px] sm:text-[9px] font-mono text-neutral-500 uppercase tracking-widest truncate">
                          {stat.label}
                        </span>
                        <span className="block text-xs sm:text-base font-bold font-mono text-[#1A150B] dark:text-[#FDF9F0] mt-0.5">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              /* NARRATIVE TEXT PAGE */
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="border-b border-amber-300/30 dark:border-amber-500/20 pb-3 sm:pb-4 mb-4 sm:mb-6">
                    <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-amber-500 uppercase block mb-1">
                      {project.subtitle}
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-[#1A150B] dark:text-[#FDF9F0] leading-tight">
                      {project.title}
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-[#2E2415] dark:text-[#E2D4BD] leading-relaxed mb-4 font-light">
                    {project.description}
                  </p>

                  <p className="text-xs text-[#55452D] dark:text-[#BFAF95] leading-relaxed mb-6 font-light">
                    {project.longDescription}
                  </p>

                  {/* Stack Taxonomy Chips */}
                  <div className="mb-6">
                    <span className="block text-[10px] font-mono font-bold tracking-[0.2em] text-amber-600 dark:text-amber-400 uppercase mb-2">
                      SYSTEM ARCHITECTURE &amp; STACK
                    </span>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[10px] font-mono font-semibold rounded-md border border-amber-400/30 bg-amber-500/[0.08] text-[#1A150B] dark:text-[#FDF9F0]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Links Action Strip */}
                <div className="pt-3 border-t border-amber-300/30 dark:border-amber-500/20 flex flex-wrap items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold px-3 py-1.5 rounded-lg border border-amber-400/40 bg-amber-500/10 hover:bg-amber-500/20 text-[#1A150B] dark:text-[#FDF9F0] transition-colors"
                  >
                    <Github size={13} className="text-amber-500" />
                    <span>SOURCE CODE</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold px-3 py-1.5 rounded-lg border border-amber-400/40 hover:bg-amber-500/10 text-amber-600 dark:text-amber-400 transition-colors"
                    >
                      <ExternalLink size={13} />
                      <span>DISPATCH</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* COLUMN 2: Alternating page (Narrative or Plate) */}
          <div
            className={`flex flex-col justify-between ${isEven
                ? "order-2 pl-0 lg:pl-8 border-t lg:border-t-0 border-amber-300/30 dark:border-amber-500/20 pt-6 lg:pt-0"
                : "order-1 lg:order-2 pl-0 lg:pl-8 border-t lg:border-t-0 border-amber-300/30 dark:border-amber-500/20 pt-6 lg:pt-0"
              }`}
          >
            {isEven ? (
              /* NARRATIVE TEXT PAGE FOR EVEN */
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="border-b border-amber-300/30 dark:border-amber-500/20 pb-3 sm:pb-4 mb-4 sm:mb-6">
                    <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-amber-500 uppercase block mb-1">
                      {project.subtitle}
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-[#1A150B] dark:text-[#FDF9F0] leading-tight">
                      {project.title}
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-[#2E2415] dark:text-[#E2D4BD] leading-relaxed mb-4 font-light">
                    {project.description}
                  </p>

                  <p className="text-xs text-[#55452D] dark:text-[#BFAF95] leading-relaxed mb-6 font-light">
                    {project.longDescription}
                  </p>

                  {/* Stack Taxonomy Chips */}
                  <div className="mb-6">
                    <span className="block text-[10px] font-mono font-bold tracking-[0.2em] text-amber-600 dark:text-amber-400 uppercase mb-2">
                      SYSTEM ARCHITECTURE &amp; STACK
                    </span>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[10px] font-mono font-semibold rounded-md border border-amber-400/30 bg-amber-500/[0.08] text-[#1A150B] dark:text-[#FDF9F0]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Links Action Strip */}
                <div className="pt-3 border-t border-amber-300/30 dark:border-amber-500/20 flex flex-wrap items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold px-3 py-1.5 rounded-lg border border-amber-400/40 bg-amber-500/10 hover:bg-amber-500/20 text-[#1A150B] dark:text-[#FDF9F0] transition-colors"
                  >
                    <Github size={13} className="text-amber-500" />
                    <span>SOURCE CODE</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold px-3 py-1.5 rounded-lg border border-amber-400/40 hover:bg-amber-500/10 text-amber-600 dark:text-amber-400 transition-colors"
                    >
                      <ExternalLink size={13} />
                      <span>DISPATCH</span>
                    </a>
                  )}
                </div>
              </div>
            ) : (
              /* PRIMARY VISUAL PLATE FOR ODD */
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="gallery-image-frame relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden border border-amber-400/30 dark:border-amber-500/25 shadow-lg mb-3 sm:mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 text-[9px] font-mono text-black bg-amber-300/90 px-2 py-0.5 rounded backdrop-blur-sm font-semibold">
                      PLATE 0{project.number} // MONO
                    </div>
                  </div>

                  {/* Caption & Metadata Strip */}
                  <div className="flex flex-wrap items-baseline justify-between gap-1 text-[10px] font-mono text-neutral-500 pb-2 border-b border-amber-300/20 dark:border-amber-500/20">
                    <span className="text-amber-600 dark:text-amber-400 font-bold">{project.dateAndLocation}</span>
                    <span className="truncate max-w-[200px]">{project.material}</span>
                  </div>
                </div>

                {/* Computational Stats Block */}
                {project.stats && (
                  <div className="mt-4 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-3 p-2.5 sm:p-4 rounded-xl border border-amber-300/30 dark:border-amber-500/20 bg-amber-500/[0.04]">
                    {project.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="text-center">
                        <span className="block text-[8px] sm:text-[9px] font-mono text-neutral-500 uppercase tracking-widest truncate">
                          {stat.label}
                        </span>
                        <span className="block text-xs sm:text-base font-bold font-mono text-[#1A150B] dark:text-[#FDF9F0] mt-0.5">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Spread Bottom Folios */}
        <div className="mt-8 sm:mt-12 pt-3 sm:pt-4 border-t border-amber-300/30 dark:border-amber-500/20 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-neutral-400">
          <span>EXHIBIT SPREAD 0{index + 3} // {project.category}</span>
          <span>PAGE 0{index * 2 + 5} — 0{index * 2 + 6}</span>
        </div>
      </div>
    </article>
  );
}

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
      className="relative w-full max-w-7xl mx-auto my-8 sm:my-20 px-2 sm:px-4 scroll-mt-20"
    >
      <div className="book-spread border border-[#D9D9D6] dark:border-[#2A2A28] bg-[#F6F6F4] dark:bg-[#161616] p-6 sm:p-10 lg:p-14 relative overflow-hidden">
        {/* Folio & Running Header */}
        <div className="flex items-center justify-between border-b border-[#D9D9D6] dark:border-[#2A2A28] pb-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C8B79E]">
              0{index + 3} // PROJECT {project.number}
            </span>
            <span className="text-xs text-[#888888] font-mono">/</span>
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-[#6B6B6B] dark:text-[#9E9E99] uppercase">
              {project.category}
            </span>
          </div>
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-[#888888]">
            EXHIBIT SPREAD {index + 1} OF {total}
          </span>
        </div>

        {/* TWO-COLUMN SPREAD (Alternating Layouts) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative">
          {/* Subtle center spine hairline */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-[#D9D9D6] dark:bg-[#2A2A28] -translate-x-1/2" />

          {/* COLUMN 1: In even index, this is the visual plate. In odd index, this is the text narrative */}
          <div
            className={`flex flex-col justify-between ${
              isEven ? "order-1 pr-0 lg:pr-8" : "order-2 lg:order-1 pr-0 lg:pr-8"
            }`}
          >
            {isEven ? (
              /* PRIMARY VISUAL PLATE */
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="gallery-image-frame relative w-full aspect-[4/3] border border-[#111111] dark:border-[#F2F2F0] shadow-lg mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 text-[9px] font-mono px-2 py-0.5 bg-black/80 text-white backdrop-blur-sm">
                      PLATE {project.number}A // ARCHIVE
                    </div>
                  </div>

                  {/* Micro stats under plate */}
                  {project.stats && (
                    <div className="grid grid-cols-3 gap-2 border-t border-b border-[#D9D9D6] dark:border-[#2A2A28] py-3 my-4">
                      {project.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <span className="block text-[8px] sm:text-[9px] font-mono text-[#888888] tracking-widest uppercase">
                            {stat.label}
                          </span>
                          <span className="block text-xs sm:text-sm font-mono font-bold text-[#111111] dark:text-[#F2F2F0]">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="text-[10px] font-mono text-[#888888] pt-4">
                  CATALOG REF // B.TECH CSE (AI) LABS // {project.year}
                </div>
              </div>
            ) : (
              /* EDITORIAL SPEC & NARRATIVE (Odd Index Left Column) */
              <div className="flex flex-col justify-between h-full">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#C8B79E] block mb-2 uppercase">
                    SYSTEM SPECIFICATION // {project.category}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#111111] dark:text-[#F2F2F0] leading-none mb-3">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-[#6B6B6B] dark:text-[#9E9E99] tracking-wider uppercase mb-6">
                    {project.subtitle}
                  </p>

                  {/* Reference-Styled Meta Blocks */}
                  <div className="flex flex-col gap-4 border-t border-b border-[#D9D9D6] dark:border-[#2A2A28] py-5 mb-6 text-xs">
                    <div>
                      <span className="font-bold font-mono text-[10px] tracking-[0.18em] text-[#111111] dark:text-[#F2F2F0] block uppercase mb-1">
                        DATE AND LOCATION
                      </span>
                      <span className="text-[#555555] dark:text-[#A0A09A] font-mono text-[11px]">
                        {project.dateAndLocation}
                      </span>
                    </div>

                    <div>
                      <span className="font-bold font-mono text-[10px] tracking-[0.18em] text-[#111111] dark:text-[#F2F2F0] block uppercase mb-1">
                        MATERIAL / STACK
                      </span>
                      <span className="text-[#555555] dark:text-[#A0A09A] font-mono text-[11px]">
                        {project.material}
                      </span>
                    </div>

                    <div>
                      <span className="font-bold font-mono text-[10px] tracking-[0.18em] text-[#111111] dark:text-[#F2F2F0] block uppercase mb-1">
                        DESCRIPTION
                      </span>
                      <p className="text-[#333333] dark:text-[#CCCCCC] leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions: Code & Live Preview */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-[#111111] dark:border-[#F2F2F0] px-4 py-2 text-xs font-mono font-bold tracking-widest text-[#111111] dark:text-[#F2F2F0] hover:bg-[#111111] hover:text-[#FFFFFF] dark:hover:bg-[#F2F2F0] dark:hover:text-[#111111] transition-all uppercase"
                  >
                    <Github size={13} />
                    <span>VIEW SOURCE</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-[#C8B79E] bg-[#C8B79E]/10 dark:bg-[#C8B79E]/20 px-4 py-2 text-xs font-mono font-bold tracking-widest text-[#111111] dark:text-[#F2F2F0] hover:bg-[#C8B79E] hover:text-[#111111] transition-all uppercase"
                  >
                    <ExternalLink size={13} />
                    <span>LIVE DEMO</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* COLUMN 2: In even index, this is the text narrative. In odd index, this is the visual plate */}
          <div
            className={`flex flex-col justify-between border-t lg:border-t-0 border-[#D9D9D6] dark:border-[#2A2A28] pt-8 lg:pt-0 ${
              isEven ? "order-2 pl-0 lg:pl-8" : "order-1 lg:order-2 pl-0 lg:pl-8"
            }`}
          >
            {isEven ? (
              /* EDITORIAL SPEC & NARRATIVE (Even Index Right Column) */
              <div className="flex flex-col justify-between h-full">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#C8B79E] block mb-2 uppercase">
                    SYSTEM SPECIFICATION // {project.category}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#111111] dark:text-[#F2F2F0] leading-none mb-3">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-[#6B6B6B] dark:text-[#9E9E99] tracking-wider uppercase mb-6">
                    {project.subtitle}
                  </p>

                  {/* Reference-Styled Meta Blocks */}
                  <div className="flex flex-col gap-4 border-t border-b border-[#D9D9D6] dark:border-[#2A2A28] py-5 mb-6 text-xs">
                    <div>
                      <span className="font-bold font-mono text-[10px] tracking-[0.18em] text-[#111111] dark:text-[#F2F2F0] block uppercase mb-1">
                        DATE AND LOCATION
                      </span>
                      <span className="text-[#555555] dark:text-[#A0A09A] font-mono text-[11px]">
                        {project.dateAndLocation}
                      </span>
                    </div>

                    <div>
                      <span className="font-bold font-mono text-[10px] tracking-[0.18em] text-[#111111] dark:text-[#F2F2F0] block uppercase mb-1">
                        MATERIAL / STACK
                      </span>
                      <span className="text-[#555555] dark:text-[#A0A09A] font-mono text-[11px]">
                        {project.material}
                      </span>
                    </div>

                    <div>
                      <span className="font-bold font-mono text-[10px] tracking-[0.18em] text-[#111111] dark:text-[#F2F2F0] block uppercase mb-1">
                        DESCRIPTION
                      </span>
                      <p className="text-[#333333] dark:text-[#CCCCCC] leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions: Code & Live Preview */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-[#111111] dark:border-[#F2F2F0] px-4 py-2 text-xs font-mono font-bold tracking-widest text-[#111111] dark:text-[#F2F2F0] hover:bg-[#111111] hover:text-[#FFFFFF] dark:hover:bg-[#F2F2F0] dark:hover:text-[#111111] transition-all uppercase"
                  >
                    <Github size={13} />
                    <span>VIEW SOURCE</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-[#C8B79E] bg-[#C8B79E]/10 dark:bg-[#C8B79E]/20 px-4 py-2 text-xs font-mono font-bold tracking-widest text-[#111111] dark:text-[#F2F2F0] hover:bg-[#C8B79E] hover:text-[#111111] transition-all uppercase"
                  >
                    <ExternalLink size={13} />
                    <span>LIVE DEMO</span>
                  </a>
                </div>
              </div>
            ) : (
              /* PRIMARY VISUAL PLATE (Odd Index Right Column) */
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="gallery-image-frame relative w-full aspect-[4/3] border border-[#111111] dark:border-[#F2F2F0] shadow-lg mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 text-[9px] font-mono px-2 py-0.5 bg-black/80 text-white backdrop-blur-sm">
                      PLATE {project.number}B // CONSTRUCTIVISM
                    </div>
                  </div>

                  {/* Micro stats under plate */}
                  {project.stats && (
                    <div className="grid grid-cols-3 gap-2 border-t border-b border-[#D9D9D6] dark:border-[#2A2A28] py-3 my-4">
                      {project.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <span className="block text-[8px] sm:text-[9px] font-mono text-[#888888] tracking-widest uppercase">
                            {stat.label}
                          </span>
                          <span className="block text-xs sm:text-sm font-mono font-bold text-[#111111] dark:text-[#F2F2F0]">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="text-[10px] font-mono text-[#888888] pt-4">
                  CATALOG REF // B.TECH CSE (AI) LABS // {project.year}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Spread Bottom Folios */}
        <div className="mt-12 pt-4 border-t border-[#D9D9D6] dark:border-[#2A2A28] flex items-center justify-between text-[10px] font-mono text-[#888888]">
          <span>SPREAD 0{index + 3} // {project.title}</span>
          <span>PAGE 0{index * 2 + 5} — 0{index * 2 + 6}</span>
        </div>
      </div>
    </article>
  );
}


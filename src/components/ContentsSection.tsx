"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export default function ContentsSection() {
  return (
    <section
      id="contents"
      className="relative w-full max-w-7xl mx-auto my-8 sm:my-16 px-2 sm:px-4"
    >
      <div className="book-spread border border-[#D9D9D6] dark:border-[#2A2A28] p-6 sm:p-10 lg:p-14 bg-[#F6F6F4] dark:bg-[#161616]">
        {/* Top Folio Header */}
        <div className="flex items-center justify-between border-b border-[#D9D9D6] dark:border-[#2A2A28] pb-4 mb-8 sm:mb-12">
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] text-[#C8B79E]">
              01 // INDEX
            </span>
            <span className="text-xs text-[#888888] font-mono">/</span>
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-[#6B6B6B] dark:text-[#9E9E99] uppercase">
              TABLE OF CONTENTS
            </span>
          </div>
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-[#888888]">
            CATALOG FOLIO P. 02
          </span>
        </div>

        {/* Section Heading & Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 pb-8 border-b border-[#D9D9D6] dark:border-[#2A2A28]">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#111111] dark:text-[#F2F2F0] leading-none mb-4">
              CONTENTS
            </h2>
            <p className="text-xs font-mono tracking-[0.15em] text-[#888888] uppercase">
              CHRONOLOGY OF WORKS, PROFILES &amp; ESSAYS
            </p>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end">
            <p className="text-sm text-[#444444] dark:text-[#B0B0AA] leading-relaxed max-w-xl">
              An architectural index of undergraduate engineering endeavors, algorithmic systems, and creative computational experiments developed by Bhavya Sreekumar at Thejus Engineering College.
            </p>
          </div>
        </div>

        {/* Visual Contents Grid (Matching reference layout with plate thumbnails) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, idx) => (
            <motion.a
              key={project.id}
              href={`#${project.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group block border border-[#D9D9D6] dark:border-[#2A2A28] p-4 bg-[#FFFFFF] dark:bg-[#1A1A1A] hover:border-[#111111] dark:hover:border-[#F2F2F0] transition-all"
            >
              {/* Thumbnail frame */}
              <div className="gallery-image-frame relative w-full aspect-[4/3] mb-4 border border-[#ECECEC] dark:border-[#2A2A28]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-2 right-2 text-[9px] font-mono px-1.5 py-0.5 bg-black/75 text-white backdrop-blur-sm">
                  SEC. {project.number}
                </span>
              </div>

              {/* Title & Metadata */}
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C8B79E]">
                  0{idx + 1} //
                </span>
                <span className="text-[10px] font-mono tracking-[0.15em] text-[#888888]">
                  {project.category}
                </span>
              </div>

              <h3 className="text-base font-bold uppercase tracking-tight text-[#111111] dark:text-[#F2F2F0] group-hover:text-[#C8B79E] transition-colors mb-2">
                {project.title}
              </h3>

              <p className="text-xs text-[#6B6B6B] dark:text-[#9E9E99] line-clamp-2 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-4 pt-3 border-t border-[#EDEDED] dark:border-[#2A2A28] flex items-center justify-between text-[10px] font-mono">
                <span className="text-[#888888]">{project.year}</span>
                <span className="text-[#111111] dark:text-[#F2F2F0] font-bold group-hover:translate-x-1 transition-transform">
                  EXPLORE SPREAD &rarr;
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Tabular Secondary Directory */}
        <div className="mt-10 pt-8 border-t border-[#D9D9D6] dark:border-[#2A2A28]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            {portfolioData.contents.slice(3).map((item) => (
              <a
                key={item.number}
                href={`#${item.title.toLowerCase().includes("skills") ? "skills" : item.title.toLowerCase().includes("timeline") ? "education" : "contact"}`}
                className="group flex flex-col p-3 border border-[#EDEDED] dark:border-[#222220] hover:border-[#111111] dark:hover:border-[#F2F2F0] transition-colors"
              >
                <span className="text-[#C8B79E] font-bold text-[10px] mb-1">
                  SEC. {item.number}
                </span>
                <span className="font-bold text-[#111111] dark:text-[#F2F2F0] text-[11px] uppercase group-hover:text-[#C8B79E] transition-colors">
                  {item.title}
                </span>
                <span className="text-[10px] text-[#888888] mt-1">{item.page}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


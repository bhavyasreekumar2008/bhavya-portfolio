"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { ArrowDown } from "lucide-react";

export default function HeroCover() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const textFade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] lg:min-h-[96vh] w-full max-w-7xl mx-auto my-4 sm:my-8 px-2 sm:px-4 flex overflow-hidden border border-[#D9D9D6] dark:border-[#2A2A28] book-spread"
    >
      {/* LEFT NARROW SPINE STRIP (Faithful to cover reference) */}
      <div className="relative w-14 sm:w-20 md:w-28 bg-[#FFFFFF] dark:bg-[#111111] border-r border-[#D9D9D6] dark:border-[#2A2A28] flex flex-col justify-between items-center py-6 sm:py-10 z-20 select-none shrink-0">
        {/* Top small meta on spine */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[9px] sm:text-[10px] font-mono tracking-[0.25em] text-[#888888] writing-vertical transform -rotate-180 uppercase"
        >
          {portfolioData.author.catalogYear}
        </motion.div>

        {/* Center / By line rotated */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-2 transform -rotate-90 origin-center whitespace-nowrap"
        >
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-[#888888] uppercase">
            BY
          </span>
          <span className="text-xs sm:text-sm font-bold tracking-[0.16em] text-[#111111] dark:text-[#F2F2F0] uppercase">
            {portfolioData.author.name}
          </span>
          <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.15em] text-[#C8B79E] uppercase">
            {portfolioData.author.shortRole}
          </span>
        </motion.div>

        {/* Giant Bottom-Aligned Rotated "PORTFOLIO" */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full flex items-end justify-center overflow-visible">
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="transform -rotate-90 origin-bottom-center tracking-tighter uppercase whitespace-nowrap"
          >
            <span className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#111111] dark:text-[#F2F2F0] select-none tracking-[-0.05em]">
              PORTFOLIO
            </span>
          </motion.div>
        </div>
      </div>

      {/* RIGHT HERO CANVAS: ARCHITECTURAL 3D SCULPTURAL VISUAL */}
      <div className="relative flex-1 bg-[#F6F6F4] dark:bg-[#161616] flex flex-col justify-between p-4 sm:p-8 md:p-12 overflow-hidden">
        {/* Top Folio and Running Header */}
        <div className="flex items-center justify-between border-b border-[#D9D9D6] dark:border-[#2A2A28] pb-4 z-10">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#C8B79E]" />
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-[#6B6B6B] dark:text-[#9E9E99] uppercase">
              EXHIBIT CAT. // MONOGRAPH 01
            </span>
          </div>
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-[#6B6B6B] dark:text-[#9E9E99]">
            {portfolioData.author.location}
          </span>
        </div>

        {/* Central Graphic Composition with Parallax */}
        <div className="relative my-auto py-8 sm:py-12 flex flex-col items-center justify-center">
          {/* Framed Architectural Sculptural Plate */}
          <motion.div
            style={{ y: parallaxY, scale: imageScale }}
            className="gallery-image-frame relative w-full max-w-3xl aspect-[16/10] sm:aspect-[16/9] border border-[#D9D9D6] dark:border-[#2A2A28] shadow-2xl"
          >
            <Image
              src="/images/hero-sculpture.svg"
              alt="Architectural geometric sculpture representing AI structural models"
              fill
              priority
              className="object-cover"
            />
            {/* Corner Precision Marks */}
            <div className="absolute top-2 left-2 text-[9px] font-mono text-[#111111] dark:text-[#FFFFFF] bg-white/70 dark:bg-black/70 px-1.5 py-0.5 backdrop-blur-sm">
              FIG. 00 // AI ARCHITECTURE
            </div>
            <div className="absolute bottom-2 right-2 text-[9px] font-mono text-[#111111] dark:text-[#FFFFFF] bg-white/70 dark:bg-black/70 px-1.5 py-0.5 backdrop-blur-sm">
              PLATE 00 // MONO 35MM
            </div>
          </motion.div>

          {/* Bold Editorial Headline Overlay */}
          <motion.div
            style={{ opacity: textFade }}
            className="w-full max-w-3xl mt-6 sm:mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          >
            <div>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-[#C8B79E] font-bold uppercase mb-2"
              >
                DISCIPLINE // COMPUTER SCIENCE &amp; ARTIFICIAL INTELLIGENCE
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111111] dark:text-[#F2F2F0] uppercase leading-[1.05]"
              >
                {portfolioData.author.tagline}
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-xs font-mono text-[#6B6B6B] dark:text-[#9E9E99] max-w-xs shrink-0 leading-relaxed"
            >
              <p className="font-bold text-[#111111] dark:text-[#F2F2F0]">
                {portfolioData.author.college}
              </p>
              <p>Undergraduate Monograph 2026</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Folio Stamp & Scroll Indicator */}
        <div className="flex items-center justify-between border-t border-[#D9D9D6] dark:border-[#2A2A28] pt-4 z-10">
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-[#888888]">
            <span>FOLIO NO. 01</span>
            <span>—</span>
            <span>COVER SPREAD</span>
          </div>

          <a
            href="#contents"
            className="group flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-[#111111] dark:text-[#F2F2F0] hover:text-[#C8B79E] transition-colors"
          >
            <span>SCROLL CATALOG</span>
            <ArrowDown
              size={12}
              className="group-hover:translate-y-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}


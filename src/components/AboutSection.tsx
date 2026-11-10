"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { Mail, Github, Linkedin, MapPin, Award, BookOpen, Terminal, Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full max-w-7xl mx-auto my-6 sm:my-16 px-2 sm:px-4"
    >
      {/* OPEN BOOK SPREAD CONTAINER */}
      <div className="book-spread border border-amber-400/30 dark:border-amber-500/30 p-4 sm:p-8 lg:p-14 rounded-2xl shadow-xl relative">
        {/* Folio Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-300/30 dark:border-amber-500/20 pb-3 sm:pb-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] text-amber-500">
              02 // SPREAD
            </span>
            <span className="text-xs text-neutral-400 font-mono">/</span>
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-[#6B5B3E] dark:text-[#C4AD86] uppercase">
              ABOUT THE AUTHOR
            </span>
          </div>
          <span className="text-[9px] sm:text-xs font-mono tracking-[0.2em] text-neutral-400">
            CATALOG FOLIO P. 03 — 04
          </span>
        </div>

        {/* TWO-PAGE OPEN BOOK SPREAD GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 relative">
          {/* Subtle vertical center gutter hairline for book spine */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-amber-300/30 dark:bg-amber-500/20 -translate-x-1/2" />

          {/* LEFT PAGE OF SPREAD */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between pr-0 lg:pr-8"
          >
            <div>
              {/* Page Title with Wireframe Icon */}
              <div className="flex items-center justify-between border-b border-amber-400/30 dark:border-amber-500/30 pb-3 mb-5 sm:mb-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-[#1A150B] dark:text-[#FDF9F0]">
                  ABOUT ME
                </h2>
                {/* Architectural wireframe symbol matching the reference */}
                <div className="h-7 w-7 rounded-lg border border-amber-400/50 bg-amber-500/10 flex items-center justify-center">
                  <span className="text-[10px] font-mono font-bold text-amber-500">BS</span>
                </div>
              </div>

              {/* Bio Narrative */}
              <p className="text-xs sm:text-sm lg:text-base text-[#2E2415] dark:text-[#E2D4BD] leading-relaxed mb-6 sm:mb-8 font-light">
                {portfolioData.author.bio}
              </p>

              {/* Structured Block: EDUCATION */}
              <div className="mb-6 pb-6 border-b border-amber-300/30 dark:border-amber-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen size={13} className="text-amber-500" />
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#1A150B] dark:text-[#FDF9F0] uppercase">
                    EDUCATION
                  </span>
                </div>
                {portfolioData.education.map((edu) => (
                  <div key={edu.id} className="mt-2.5 text-xs leading-relaxed">
                    <div className="flex flex-wrap items-baseline justify-between gap-1 font-mono text-[11px] font-bold text-[#1A150B] dark:text-[#FDF9F0]">
                      <span>{edu.institution}</span>
                      <span className="text-amber-600/80 dark:text-amber-400/80">{edu.period}</span>
                    </div>
                    <div className="text-[11px] text-amber-600 dark:text-amber-400 font-medium mb-1">
                      {edu.degree}
                    </div>
                    <p className="text-[11px] text-[#6B5B3E] dark:text-[#BFAF95]">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Structured Block: CORE FOCUS & INQUIRY */}
              <div className="mb-6 sm:mb-8 pb-6 border-b border-amber-300/30 dark:border-amber-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={13} className="text-amber-500" />
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#1A150B] dark:text-[#FDF9F0] uppercase">
                    AREAS OF EXPLORATION
                  </span>
                </div>
                <p className="text-xs text-[#55452D] dark:text-[#BFAF95] leading-relaxed">
                  Focusing on artificial intelligence, algorithmic design, neural networks, and mathematical computing. Committed to writing pure, readable code and architecting intuitive human-machine interfaces.
                </p>
              </div>
            </div>

            {/* Lower Left: Framed Portrait Plate (Responsive layout for mobile) */}
            <div className="pt-2 flex flex-col xs:flex-row items-start xs:items-center gap-4">
              <div className="relative w-28 sm:w-36 h-36 sm:h-44 shrink-0 rounded-xl overflow-hidden p-[2px] bg-gradient-to-tr from-[#D4AF37] via-[#F3E5AB] to-[#AA771C] shadow-lg">
                <div className="relative w-full h-full rounded-[10px] overflow-hidden">
                  <Image
                    src="/images/bhavya-profile.jpg"
                    alt="Portrait of Bhavya Sreekumar"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="text-xs font-mono">
                <span className="block text-[9px] text-amber-600/80 dark:text-amber-400/80 tracking-widest uppercase">
                  MONOGRAPH PORTRAIT
                </span>
                <span className="block font-bold text-[#1A150B] dark:text-[#FDF9F0] uppercase mt-0.5 text-sm">
                  BHAVYA SREEKUMAR
                </span>
                <span className="block text-[11px] text-[#6B5B3E] dark:text-[#BFAF95]">
                  B.Tech CSE (AI) Candidate
                </span>
                <span className="block text-[10px] text-amber-500 mt-1">
                  Thejus Engineering College, Thrissur
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT PAGE OF SPREAD */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between pl-0 lg:pl-8 border-t lg:border-t-0 border-amber-300/30 dark:border-amber-500/20 pt-6 lg:pt-0"
          >
            <div>
              {/* Structured Block: AWARDS & ACHIEVEMENTS */}
              <div className="mb-6 sm:mb-8 pb-6 border-b border-amber-300/30 dark:border-amber-500/20">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <Award size={13} className="text-amber-500" />
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#1A150B] dark:text-[#FDF9F0] uppercase">
                    AWARDS &amp; RECOGNITION
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  {portfolioData.achievements.map((item, idx) => (
                    <div key={idx} className="text-xs">
                      <div className="flex flex-wrap items-baseline justify-between gap-1 font-mono text-[11px]">
                        <span className="font-bold text-[#1A150B] dark:text-[#FDF9F0]">
                          {item.title}
                        </span>
                        <span className="text-amber-600/80 dark:text-amber-400/80">{item.year}</span>
                      </div>
                      <div className="text-[10px] font-mono text-amber-600 dark:text-amber-400 mb-0.5">
                        {item.issuer}
                      </div>
                      <p className="text-[11px] text-[#6B5B3E] dark:text-[#BFAF95]">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Structured Block: SKILLS OVERVIEW */}
              <div className="mb-6 sm:mb-8 pb-6 border-b border-amber-300/30 dark:border-amber-500/20">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <Terminal size={13} className="text-amber-500" />
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#1A150B] dark:text-[#FDF9F0] uppercase">
                    TECHNICAL DISCIPLINE
                  </span>
                </div>
                <p className="text-xs text-[#55452D] dark:text-[#BFAF95] leading-relaxed mb-3">
                  Python, C, JavaScript/TypeScript, PyTorch Basics, Machine Learning Foundations, Tailwind CSS, Next.js, Git/GitHub, Linux Environments.
                </p>
                <a
                  href="#skills"
                  className="inline-block text-[10px] font-mono font-bold tracking-[0.18em] text-amber-600 dark:text-amber-400 hover:underline uppercase"
                >
                  VIEW FULL SKILLS REPERTOIRE &rarr;
                </a>
              </div>

              {/* Structured Block: REFERENCES & PROFILES */}
              <div className="mb-6 sm:mb-8 pb-6 border-b border-amber-300/30 dark:border-amber-500/20">
                <span className="block text-[10px] font-mono font-bold tracking-[0.2em] text-[#1A150B] dark:text-[#FDF9F0] uppercase mb-3">
                  REFERENCES &amp; PUBLIC PROFILES
                </span>
                <div className="flex flex-col gap-2 font-mono text-xs">
                  <a
                    href="https://github.com/bhavyasreekumar2008/bhavya-portfolio"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-wrap items-center justify-between gap-1 text-[#6B5B3E] dark:text-[#C4AD86] hover:text-[#1A150B] dark:hover:text-[#FDF9F0] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Github size={13} className="text-amber-500" />
                      GITHUB REPOSITORY
                    </span>
                    <span className="text-[10px] text-amber-600/80 dark:text-amber-400/80 group-hover:underline">
                      bhavyasreekumar2008
                    </span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-wrap items-center justify-between gap-1 text-[#6B5B3E] dark:text-[#C4AD86] hover:text-[#1A150B] dark:hover:text-[#FDF9F0] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin size={13} className="text-amber-500" />
                      LINKEDIN NETWORK
                    </span>
                    <span className="text-[10px] text-amber-600/80 dark:text-amber-400/80 group-hover:underline">
                      in/bhavyasreekumar
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Structured Block: DIRECT CONTACT */}
            <div className="pt-2">
              <span className="block text-[10px] font-mono font-bold tracking-[0.2em] text-[#1A150B] dark:text-[#FDF9F0] uppercase mb-2">
                DIRECT INQUIRY
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs font-mono">
                <div>
                  <span className="text-[9px] text-neutral-400 block mb-0.5">EMAIL DISPATCH</span>
                  <a
                    href="mailto:bhavya.sreekumar.ai@gmail.com"
                    className="text-[#1A150B] dark:text-[#FDF9F0] font-bold hover:text-amber-500 transition-colors break-all"
                  >
                    bhavya.sreekumar.ai@gmail.com
                  </a>
                </div>
                <div>
                  <span className="text-[9px] text-neutral-400 block mb-0.5">LOCATION / CAMPUS</span>
                  <p className="text-[#1A150B] dark:text-[#FDF9F0]">
                    Thejus Engineering College, Thrissur, Kerala
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Spread Bottom Folios */}
        <div className="mt-8 sm:mt-12 pt-3 sm:pt-4 border-t border-amber-300/30 dark:border-amber-500/20 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-neutral-400">
          <span>SPREAD 02 // SECTION: BIOGRAPHY</span>
          <span>PAGE 03 — 04</span>
        </div>
      </div>
    </section>
  );
}

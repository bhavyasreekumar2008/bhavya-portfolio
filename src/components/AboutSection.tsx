"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { Mail, Github, Linkedin, MapPin, Award, BookOpen, Terminal, Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full max-w-7xl mx-auto my-8 sm:my-16 px-2 sm:px-4"
    >
      {/* OPEN BOOK SPREAD CONTAINER */}
      <div className="book-spread border border-[#D9D9D6] dark:border-[#2A2A28] bg-[#F6F6F4] dark:bg-[#161616] p-6 sm:p-10 lg:p-14 relative">
        {/* Folio Header */}
        <div className="flex items-center justify-between border-b border-[#D9D9D6] dark:border-[#2A2A28] pb-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] text-[#C8B79E]">
              02 // SPREAD
            </span>
            <span className="text-xs text-[#888888] font-mono">/</span>
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-[#6B6B6B] dark:text-[#9E9E99] uppercase">
              ABOUT THE AUTHOR
            </span>
          </div>
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-[#888888]">
            CATALOG FOLIO P. 03 — 04
          </span>
        </div>

        {/* TWO-PAGE OPEN BOOK SPREAD GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative">
          {/* Subtle vertical center gutter hairline for book spine */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-[#D9D9D6] dark:bg-[#2A2A28] -translate-x-1/2" />

          {/* LEFT PAGE OF SPREAD */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between pr-0 lg:pr-8"
          >
            <div>
              {/* Page Title with Wireframe Icon */}
              <div className="flex items-center justify-between border-b border-[#111111] dark:border-[#F2F2F0] pb-3 mb-6">
                <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#111111] dark:text-[#F2F2F0]">
                  ABOUT ME
                </h2>
                {/* Architectural wireframe symbol matching the reference */}
                <div className="h-7 w-7 border border-[#111111] dark:border-[#F2F2F0] flex items-center justify-center">
                  <span className="text-[10px] font-mono font-bold">BS</span>
                </div>
              </div>

              {/* Bio Narrative */}
              <p className="text-sm sm:text-base text-[#222222] dark:text-[#CCCCCC] leading-relaxed mb-8">
                {portfolioData.author.bio}
              </p>

              {/* Structured Block: EDUCATION */}
              <div className="mb-6 pb-6 border-b border-[#D9D9D6] dark:border-[#2A2A28]">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen size={12} className="text-[#C8B79E]" />
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#111111] dark:text-[#F2F2F0] uppercase">
                    EDUCATION
                  </span>
                </div>
                {portfolioData.education.map((edu) => (
                  <div key={edu.id} className="mt-2 text-xs leading-relaxed">
                    <div className="flex items-baseline justify-between font-mono text-[11px] font-bold text-[#111111] dark:text-[#F2F2F0]">
                      <span>{edu.institution}</span>
                      <span className="text-[#888888]">{edu.period}</span>
                    </div>
                    <div className="text-[11px] text-[#C8B79E] font-medium mb-1">
                      {edu.degree}
                    </div>
                    <p className="text-[11px] text-[#6B6B6B] dark:text-[#9E9E99]">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Structured Block: CORE FOCUS & INQUIRY */}
              <div className="mb-8 pb-6 border-b border-[#D9D9D6] dark:border-[#2A2A28]">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={12} className="text-[#C8B79E]" />
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#111111] dark:text-[#F2F2F0] uppercase">
                    AREAS OF EXPLORATION
                  </span>
                </div>
                <p className="text-xs text-[#555555] dark:text-[#A0A09A] leading-relaxed">
                  Focusing on artificial intelligence, algorithmic design, neural networks, and mathematical computing. Committed to writing pure, readable code and architecting intuitive human-machine interfaces.
                </p>
              </div>
            </div>

            {/* Lower Left: Framed Portrait Plate */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="gallery-image-frame relative w-32 h-40 shrink-0 border border-[#111111] dark:border-[#F2F2F0]">
                <Image
                  src="/images/portrait-bhavya.svg"
                  alt="Portrait of Bhavya Sreekumar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-xs font-mono">
                <span className="block text-[9px] text-[#888888] tracking-widest uppercase">
                  MONOGRAPH PORTRAIT
                </span>
                <span className="block font-bold text-[#111111] dark:text-[#F2F2F0] uppercase mt-0.5">
                  BHAVYA SREEKUMAR
                </span>
                <span className="block text-[11px] text-[#6B6B6B] dark:text-[#9E9E99]">
                  B.Tech CSE (AI) Candidate
                </span>
                <span className="block text-[10px] text-[#C8B79E] mt-1">
                  Thejus Engineering College, Thrissur
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT PAGE OF SPREAD */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-between pl-0 lg:pl-8 border-t lg:border-t-0 border-[#D9D9D6] dark:border-[#2A2A28] pt-8 lg:pt-0"
          >
            <div>
              {/* Structured Block: AWARDS & ACHIEVEMENTS */}
              <div className="mb-8 pb-6 border-b border-[#D9D9D6] dark:border-[#2A2A28]">
                <div className="flex items-center gap-2 mb-4">
                  <Award size={12} className="text-[#C8B79E]" />
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#111111] dark:text-[#F2F2F0] uppercase">
                    AWARDS &amp; RECOGNITION
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  {portfolioData.achievements.map((item, idx) => (
                    <div key={idx} className="text-xs">
                      <div className="flex items-baseline justify-between font-mono text-[11px]">
                        <span className="font-bold text-[#111111] dark:text-[#F2F2F0]">
                          {item.title}
                        </span>
                        <span className="text-[#888888]">{item.year}</span>
                      </div>
                      <div className="text-[10px] font-mono text-[#C8B79E] mb-0.5">
                        {item.issuer}
                      </div>
                      <p className="text-[11px] text-[#6B6B6B] dark:text-[#9E9E99]">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Structured Block: SKILLS OVERVIEW */}
              <div className="mb-8 pb-6 border-b border-[#D9D9D6] dark:border-[#2A2A28]">
                <div className="flex items-center gap-2 mb-3">
                  <Terminal size={12} className="text-[#C8B79E]" />
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#111111] dark:text-[#F2F2F0] uppercase">
                    TECHNICAL DISCIPLINE
                  </span>
                </div>
                <p className="text-xs text-[#555555] dark:text-[#A0A09A] leading-relaxed mb-3">
                  Python, C, JavaScript/TypeScript, PyTorch Basics, Machine Learning Foundations, Tailwind CSS, Next.js, Git/GitHub, Linux Environments.
                </p>
                <a
                  href="#skills"
                  className="inline-block text-[10px] font-mono font-bold tracking-[0.18em] text-[#111111] dark:text-[#F2F2F0] hover:text-[#C8B79E] transition-colors uppercase"
                >
                  VIEW FULL SKILLS REPERTOIRE &rarr;
                </a>
              </div>

              {/* Structured Block: REFERENCES & PROFILES */}
              <div className="mb-8 pb-6 border-b border-[#D9D9D6] dark:border-[#2A2A28]">
                <span className="block text-[10px] font-mono font-bold tracking-[0.2em] text-[#111111] dark:text-[#F2F2F0] uppercase mb-3">
                  REFERENCES &amp; PUBLIC PROFILES
                </span>
                <div className="flex flex-col gap-2 font-mono text-xs">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between text-[#6B6B6B] dark:text-[#9E9E99] hover:text-[#111111] dark:hover:text-[#F2F2F0] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Github size={12} className="text-[#C8B79E]" />
                      GITHUB REPOSITORY
                    </span>
                    <span className="text-[10px] text-[#888888] group-hover:underline">
                      bhavyasreekumar
                    </span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between text-[#6B6B6B] dark:text-[#9E9E99] hover:text-[#111111] dark:hover:text-[#F2F2F0] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin size={12} className="text-[#C8B79E]" />
                      LINKEDIN NETWORK
                    </span>
                    <span className="text-[10px] text-[#888888] group-hover:underline">
                      in/bhavyasreekumar
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Structured Block: DIRECT CONTACT */}
            <div className="pt-2">
              <span className="block text-[10px] font-mono font-bold tracking-[0.2em] text-[#111111] dark:text-[#F2F2F0] uppercase mb-3">
                DIRECT INQUIRY
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-[9px] text-[#888888] block mb-0.5">EMAIL DISPATCH</span>
                  <a
                    href="mailto:bhavya.sreekumar.ai@gmail.com"
                    className="text-[#111111] dark:text-[#F2F2F0] font-bold hover:text-[#C8B79E] transition-colors break-all"
                  >
                    bhavya.sreekumar.ai@gmail.com
                  </a>
                </div>
                <div>
                  <span className="text-[9px] text-[#888888] block mb-0.5">LOCATION / CAMPUS</span>
                  <p className="text-[#111111] dark:text-[#F2F2F0]">
                    Thejus Engineering College, Thrissur, Kerala
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Spread Bottom Folios */}
        <div className="mt-12 pt-4 border-t border-[#D9D9D6] dark:border-[#2A2A28] flex items-center justify-between text-[10px] font-mono text-[#888888]">
          <span>SPREAD 02 // SECTION: BIOGRAPHY</span>
          <span>PAGE 03 — 04</span>
        </div>
      </div>
    </section>
  );
}


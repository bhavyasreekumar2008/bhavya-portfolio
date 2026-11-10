"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, Suspense } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { portfolioData } from "@/data/portfolio";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const HeroThreeScene = dynamic(() => import("./HeroThreeScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-12 h-12 rounded-full border-2 border-amber-400/30 border-t-amber-400 animate-spin" />
    </div>
  ),
});

// Ambient Golden Floating Dust Particles
function GoldenParticleField() {
  const particles = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    x: (i * 4.1 + 5) % 100,
    y: (i * 5.3 + 9) % 100,
    size: (i % 3) + 2,
    duration: 6 + (i % 4) * 2,
    delay: (i % 4) * 0.7,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gradient-to-r from-amber-300 to-yellow-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, p.id % 2 === 0 ? 12 : -12, 0],
            opacity: [0.15, 0.6, 0.15],
            scale: [0.8, 1.25, 0.8],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function HeroCover() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textParallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const visualParallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const fadeOutOnScroll = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/bhavyasreekumar2008/bhavya-portfolio",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com",
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:bhavya.sreekumar.ai@gmail.com",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen w-full overflow-hidden flex items-center justify-center py-8 sm:py-16 lg:py-0"
      style={{
        background:
          "linear-gradient(135deg, #0b0a07 0%, #18140c 35%, #251d10 70%, #0f0d08 100%)",
      }}
    >
      {/* Floating Golden Micro-Particles */}
      <GoldenParticleField />

      {/* Atmospheric Golden Radial Light Cones */}
      <div
        className="absolute top-0 right-0 w-[60vw] h-[70vh] pointer-events-none opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(212, 175, 55, 0.25) 0%, rgba(184, 134, 11, 0.12) 45%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[50vw] h-[50vh] pointer-events-none opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.18) 0%, rgba(160, 110, 20, 0.08) 50%, transparent 70%)",
        }}
      />

      {/* Subtle Golden Geometric Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212, 175, 55, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Main Content Container - fully responsive mobile padding & flow */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
        
        {/* ─── LEFT COLUMN: Modern Editorial Intro (52%) ─── */}
        <motion.div
          style={{ y: textParallaxY, opacity: fadeOutOnScroll }}
          className="w-full lg:w-[52%] flex flex-col items-start gap-4 sm:gap-6"
        >
          {/* Top Status Pill with pulsating gold beacon */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-400/30 bg-amber-500/[0.08] backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.15)] max-w-full"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-amber-200/90 font-semibold uppercase truncate">
              B.Tech CSE (AI) · Thejus Engg College
            </span>
          </motion.div>

          {/* Large Name with Golden Metallic Linear Gradient */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-0.5 sm:space-y-1 w-full"
          >
            <h1 className="font-extrabold tracking-tight uppercase leading-[0.94] break-words">
              <span
                className="block text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-sm"
                style={{
                  background:
                    "linear-gradient(135deg, #FFFDF5 0%, #FDE68A 30%, #D4AF37 60%, #F59E0B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                BHAVYA
              </span>
              <span
                className="block text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-sm"
                style={{
                  background:
                    "linear-gradient(135deg, #FFFDF5 0%, #FDE68A 30%, #D4AF37 60%, #F59E0B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                SREEKUMAR
              </span>
            </h1>
          </motion.div>

          {/* Tagline / Subtitle with golden accent bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center gap-2.5 sm:gap-3"
          >
            <span className="h-0.5 w-7 sm:w-10 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full shrink-0" />
            <p className="text-sm sm:text-base lg:text-xl font-medium tracking-wide text-amber-100/90">
              AI Student · Algorithmic Builder · Curious by Default
            </p>
          </motion.div>

          {/* Bio statement */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xs sm:text-sm text-neutral-300/80 leading-relaxed max-w-xl font-light"
          >
            Passionate first-year Computer Science &amp; Artificial Intelligence student based in Thrissur, Kerala. Deconstructing deep neural networks, engineering bare-metal algorithms, and crafting high-precision digital experiences.
          </motion.p>

          {/* Action CTAs - nicely responsive on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col xs:flex-row w-full sm:w-auto items-stretch xs:items-center gap-3 pt-1"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-xs tracking-wider uppercase text-black bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 shadow-[0_4px_20px_rgba(245,158,11,0.35)] hover:shadow-[0_6px_25px_rgba(245,158,11,0.5)] transition-all duration-300"
            >
              <span>Explore Works</span>
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-xs tracking-wider uppercase text-amber-200/90 border border-amber-400/30 bg-amber-500/[0.05] hover:bg-amber-500/[0.15] hover:border-amber-400/60 transition-all duration-300 backdrop-blur-sm"
            >
              <span>Contact Dispatch</span>
            </a>
          </motion.div>

          {/* Socials & Meta Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2"
          >
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="p-2 sm:p-2.5 rounded-lg border border-amber-400/20 bg-neutral-900/60 text-amber-200/70 hover:text-amber-100 hover:border-amber-400/50 hover:bg-amber-500/10 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <div className="h-4 w-px bg-amber-400/20" />
            <span className="text-[10px] sm:text-[11px] font-mono text-amber-300/70 uppercase tracking-wider">
              Thrissur · Kerala · IN
            </span>
          </motion.div>
        </motion.div>


        {/* ─── RIGHT COLUMN: OVERLAPPING 3D OBJECT + PROFILE IMAGE (48%) ─── */}
        <motion.div
          style={{ y: visualParallaxY }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[48%] relative flex items-center justify-center min-h-[380px] sm:min-h-[480px] lg:min-h-[520px] my-4 lg:my-0"
        >
          {/* Layer 1 (Backdrop): 3D Three.js Interactive Canvas (Scaled nicely for mobile) */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center z-0 pointer-events-auto">
            {/* Glowing Golden Ring Behind Three.js */}
            <div
              className="absolute w-[260px] sm:w-[380px] h-[260px] sm:h-[380px] rounded-full opacity-30 blur-2xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(245, 158, 11, 0.4) 0%, rgba(212, 175, 55, 0.2) 50%, transparent 75%)",
              }}
            />
            <Suspense fallback={null}>
              <HeroThreeScene />
            </Suspense>
          </div>

          {/* Layer 2 (Middle-Overlap): Real Portrait Image in Luxury Golden Frame */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10 w-44 sm:w-60 md:w-68 aspect-[3/4] rounded-2xl p-[2.5px] sm:p-[3px] bg-gradient-to-tr from-amber-500 via-yellow-200 to-amber-700 shadow-[0_15px_40px_rgba(0,0,0,0.65),0_0_25px_rgba(212,175,55,0.22)] group"
          >
            <div className="relative w-full h-full rounded-[13px] overflow-hidden bg-neutral-950">
              <Image
                src="/images/bhavya-profile.jpg"
                alt="Bhavya Sreekumar - AI & CSE Student"
                fill
                priority
                className="object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Subtle Golden Inner Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-amber-500/10 pointer-events-none" />

              {/* Bottom Photo Title Plate */}
              <div className="absolute bottom-0 inset-x-0 p-2.5 sm:p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between">
                <div>
                  <span className="block text-[9px] sm:text-[10px] font-mono tracking-widest text-amber-300/80 uppercase">
                    Bhavya Sreekumar
                  </span>
                  <span className="block text-[8px] sm:text-[9px] font-mono text-neutral-400">
                    B.Tech CSE (AI)
                  </span>
                </div>
                <Sparkles size={13} className="text-amber-400 animate-pulse" />
              </div>
            </div>

            {/* ─── Layer 3: Overlapping Floating Glass Cards (Overlapping Photo & 3D scene) ─── */}
            
            {/* Overlap Card 1: Top-Right Overlapping Badge (Mobile Safe Positioning) */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="absolute -top-3 -right-2 sm:-top-4 sm:-right-6 z-20 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-neutral-900/95 border border-amber-400/40 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.5)] flex items-center gap-1.5 sm:gap-2"
            >
              <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-lg bg-gradient-to-tr from-amber-400 to-yellow-200 flex items-center justify-center text-black shrink-0">
                <Sparkles size={11} />
              </div>
              <div>
                <span className="block text-[8px] sm:text-[9px] font-mono text-amber-300/80 uppercase tracking-wider">
                  Discipline
                </span>
                <span className="block text-[10px] sm:text-[11px] font-bold text-amber-100">
                  Artificial Intelligence
                </span>
              </div>
            </motion.div>

            {/* Overlap Card 2: Bottom-Left Overlapping Institution Card (Mobile Safe Width) */}
            <motion.div
              initial={{ opacity: 0, x: -15, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-8 z-20 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-neutral-900/95 border border-amber-400/40 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.6)] flex items-center gap-2 sm:gap-3 max-w-[190px] sm:max-w-[240px]"
            >
              <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
                <GraduationCap size={15} />
              </div>
              <div className="leading-tight overflow-hidden">
                <span className="block text-[10px] sm:text-[11px] font-semibold text-neutral-100 truncate">
                  Thejus Engineering
                </span>
                <span className="block text-[8px] sm:text-[9px] font-mono text-amber-300/70">
                  Thrissur · 2026–2030
                </span>
              </div>
            </motion.div>

            {/* Overlap Card 3: Interactive 3D Orbit Tip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute -top-7 sm:-top-9 left-1/2 -translate-x-1/2 z-20 px-2.5 py-0.5 sm:py-1 rounded-full bg-black/70 border border-amber-400/30 backdrop-blur-sm text-[8px] sm:text-[9px] font-mono text-amber-300/80 whitespace-nowrap flex items-center gap-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-ping" />
              <span>3D Object (Touch / Rotate)</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* ─── Bottom Scroll Prompt with Bouncing Golden Indicator ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden sm:flex absolute bottom-5 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 z-20"
      >
        <a
          href="#contents"
          className="group flex flex-col items-center gap-1 text-[10px] font-mono tracking-[0.25em] text-amber-300/70 hover:text-amber-200 transition-colors uppercase"
        >
          <span>Scroll Catalog</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} className="text-amber-400" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}

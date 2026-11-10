"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Mail, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = "AUTHOR NAME REQUIRED";
    if (!formData.email.trim()) {
      errs.email = "CORRESPONDENCE EMAIL REQUIRED";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "INVALID EMAIL FORMAT";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "PLEASE PROVIDE AT LEAST 10 CHARACTERS";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative w-full max-w-7xl mx-auto my-6 sm:my-16 px-2 sm:px-4 scroll-mt-20"
    >
      <div className="book-spread border border-amber-400/30 dark:border-amber-500/30 p-4 sm:p-8 lg:p-14 rounded-2xl shadow-xl">
        {/* Folio & Running Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-300/30 dark:border-amber-500/20 pb-3 sm:pb-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] text-amber-500">
              08 // INQUIRY
            </span>
            <span className="text-xs text-neutral-400 font-mono">/</span>
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-[#6B5B3E] dark:text-[#C4AD86] uppercase">
              COMMUNICATION &amp; DISPATCH
            </span>
          </div>
          <span className="text-[9px] sm:text-xs font-mono tracking-[0.2em] text-neutral-400">
            CATALOG FOLIO P. 15 — 16
          </span>
        </div>

        {/* TWO-COLUMN SPREAD */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 relative">
          {/* Subtle center spine hairline */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-amber-300/30 dark:bg-amber-500/20 -translate-x-1/2" />

          {/* LEFT PAGE: EDITORIAL CONTACT INFO & CHANNELS */}
          <div className="pr-0 lg:pr-8 flex flex-col justify-between">
            <div>
              <div className="border-b border-amber-300/30 dark:border-amber-500/20 pb-3 sm:pb-4 mb-4 sm:mb-6">
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-amber-500 uppercase block mb-1">
                  EPILOGUE // CORRESPONDENCE
                </span>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#1A150B] dark:text-[#FDF9F0] leading-tight">
                  DISPATCH &amp; CONNECT
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-[#443825] dark:text-[#D5C5A8] leading-relaxed mb-6 font-light">
                Open to technical collaborations, algorithmic research initiatives, hackathons, and foundational artificial intelligence pursuits. Transmit a query through the registry form or via direct channels below.
              </p>

              {/* Direct Communication Channels */}
              <div className="flex flex-col gap-3 font-mono text-xs mb-8">
                <div className="p-3 sm:p-4 rounded-xl border border-amber-300/30 dark:border-amber-500/20 bg-amber-500/[0.04]">
                  <span className="text-[9px] text-neutral-400 block mb-0.5">DIRECT ELECTRONIC MAIL</span>
                  <a
                    href="mailto:bhavya.sreekumar.ai@gmail.com"
                    className="text-xs sm:text-sm font-bold text-[#1A150B] dark:text-[#FDF9F0] hover:text-amber-500 transition-colors break-all"
                  >
                    bhavya.sreekumar.ai@gmail.com
                  </a>
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
                  <a
                    href="https://github.com/bhavyasreekumar2008/bhavya-portfolio"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl border border-amber-300/30 dark:border-amber-500/20 bg-amber-500/[0.04] hover:bg-amber-500/[0.1] transition-all flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <Github size={14} className="text-amber-500" />
                      <span className="font-bold text-[#1A150B] dark:text-[#FDF9F0]">GITHUB</span>
                    </span>
                    <span className="text-[10px] text-amber-600 dark:text-amber-400">&rarr;</span>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl border border-amber-300/30 dark:border-amber-500/20 bg-amber-500/[0.04] hover:bg-amber-500/[0.1] transition-all flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin size={14} className="text-amber-500" />
                      <span className="font-bold text-[#1A150B] dark:text-[#FDF9F0]">LINKEDIN</span>
                    </span>
                    <span className="text-[10px] text-amber-600 dark:text-amber-400">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 text-[10px] font-mono text-neutral-400">
              <span>LOCATION: THRISSUR, KERALA &bull; GMT +05:30</span>
            </div>
          </div>

          {/* RIGHT PAGE: EDITORIAL INQUIRY FORM */}
          <div className="pl-0 lg:pl-8 border-t lg:border-t-0 border-amber-300/30 dark:border-amber-500/20 pt-6 lg:pt-0">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 sm:p-10 rounded-xl border border-amber-400/40 bg-amber-500/[0.08] text-center flex flex-col items-center justify-center h-full min-h-[300px]"
              >
                <CheckCircle2 size={40} className="text-amber-500 mb-4" />
                <h3 className="text-lg font-bold uppercase tracking-tight text-[#1A150B] dark:text-[#FDF9F0] mb-2">
                  TRANSMISSION RECORDED
                </h3>
                <p className="text-xs text-[#55452D] dark:text-[#BFAF95] max-w-sm mb-6 leading-relaxed">
                  Thank you for your dispatch. Your message has been archived in the editorial intake ledger and will receive an email response shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 rounded-xl text-xs font-mono font-bold uppercase text-black bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-200 hover:to-amber-400 transition-all"
                >
                  TRANSMIT ANOTHER
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#1A150B] dark:text-[#FDF9F0] uppercase">
                    YOUR NAME // IDENTITY
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Ada Lovelace"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-amber-300/40 dark:border-amber-500/30 bg-white/70 dark:bg-neutral-900/70 text-xs sm:text-sm text-[#1A150B] dark:text-[#FDF9F0] placeholder-neutral-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                  />
                  {errors.name && (
                    <span className="text-[10px] font-mono text-red-500 tracking-wider">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#1A150B] dark:text-[#FDF9F0] uppercase">
                    CONTACT EMAIL // CORRESPONDENCE
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ada@computing.org"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-amber-300/40 dark:border-amber-500/30 bg-white/70 dark:bg-neutral-900/70 text-xs sm:text-sm text-[#1A150B] dark:text-[#FDF9F0] placeholder-neutral-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                  />
                  {errors.email && (
                    <span className="text-[10px] font-mono text-red-500 tracking-wider">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#1A150B] dark:text-[#FDF9F0] uppercase">
                    DISPATCH MEMORANDUM // MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your inquiry, project scope, or research invitation..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-amber-300/40 dark:border-amber-500/30 bg-white/70 dark:bg-neutral-900/70 text-xs sm:text-sm text-[#1A150B] dark:text-[#FDF9F0] placeholder-neutral-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all resize-none"
                  />
                  {errors.message && (
                    <span className="text-[10px] font-mono text-red-500 tracking-wider">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs tracking-wider uppercase text-black bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 shadow-[0_4px_20px_rgba(245,158,11,0.35)] transition-all disabled:opacity-50 mt-1 cursor-pointer"
                >
                  <Send size={13} />
                  <span>{loading ? "TRANSMITTING..." : "DISPATCH INQUIRY"}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Section Bottom Folio */}
        <div className="mt-8 sm:mt-12 pt-3 sm:pt-4 border-t border-amber-300/30 dark:border-amber-500/20 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-neutral-400">
          <span>SPREAD 08 // EPILOGUE</span>
          <span>PAGE 15 — 16</span>
        </div>
      </div>
    </section>
  );
}

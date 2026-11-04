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
    }, 800);
  };

  return (
    <section
      id="contact"
      className="relative w-full max-w-7xl mx-auto my-8 sm:my-16 px-2 sm:px-4 scroll-mt-20"
    >
      <div className="book-spread border border-[#D9D9D6] dark:border-[#2A2A28] bg-[#F6F6F4] dark:bg-[#161616] p-6 sm:p-10 lg:p-14">
        {/* Folio & Running Header */}
        <div className="flex items-center justify-between border-b border-[#D9D9D6] dark:border-[#2A2A28] pb-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] text-[#C8B79E]">
              08 // INQUIRY
            </span>
            <span className="text-xs text-[#888888] font-mono">/</span>
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-[#6B6B6B] dark:text-[#9E9E99] uppercase">
              COMMUNICATION &amp; DISPATCH
            </span>
          </div>
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-[#888888]">
            CATALOG FOLIO P. 15 — 16
          </span>
        </div>

        {/* TWO-COLUMN SPREAD */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative">
          {/* Subtle center spine hairline */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-[#D9D9D6] dark:bg-[#2A2A28] -translate-x-1/2" />

          {/* LEFT PAGE: EDITORIAL CONTACT INFO & CHANNELS */}
          <div className="pr-0 lg:pr-8 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#111111] dark:text-[#F2F2F0] leading-none mb-4">
                GET IN TOUCH
              </h2>
              <p className="text-xs font-mono tracking-[0.18em] text-[#C8B79E] font-bold uppercase mb-6">
                DISPATCH // COLLABORATIONS &amp; RESEARCH INQUIRIES
              </p>
              <p className="text-sm text-[#444444] dark:text-[#B0B0AA] leading-relaxed mb-8">
                Whether discussing machine learning architectures, computational projects, collaborative hackathons, or academic inquiries, I welcome thoughtful correspondence.
              </p>

              {/* Direct Links */}
              <div className="flex flex-col gap-4 border-t border-b border-[#D9D9D6] dark:border-[#2A2A28] py-6 my-6 font-mono text-xs">
                <div>
                  <span className="text-[10px] text-[#888888] tracking-widest block uppercase mb-1">
                    PRIMARY ELECTRONIC MAIL
                  </span>
                  <a
                    href="mailto:bhavya.sreekumar.ai@gmail.com"
                    className="text-sm font-bold text-[#111111] dark:text-[#F2F2F0] hover:text-[#C8B79E] transition-colors"
                  >
                    bhavya.sreekumar.ai@gmail.com
                  </a>
                </div>

                <div>
                  <span className="text-[10px] text-[#888888] tracking-widest block uppercase mb-1">
                    ACADEMIC HEADQUARTERS
                  </span>
                  <p className="text-xs text-[#111111] dark:text-[#F2F2F0]">
                    Thejus Engineering College, Vellarakkad, Thrissur, Kerala — 680584
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-[#D9D9D6] dark:border-[#2A2A28] px-3 py-1.5 text-xs font-mono hover:border-[#111111] dark:hover:border-[#F2F2F0] transition-colors"
                >
                  <Github size={13} className="text-[#C8B79E]" />
                  <span>GITHUB</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-[#D9D9D6] dark:border-[#2A2A28] px-3 py-1.5 text-xs font-mono hover:border-[#111111] dark:hover:border-[#F2F2F0] transition-colors"
                >
                  <Linkedin size={13} className="text-[#C8B79E]" />
                  <span>LINKEDIN</span>
                </a>
                <a
                  href="mailto:bhavya.sreekumar.ai@gmail.com"
                  className="flex items-center gap-2 border border-[#D9D9D6] dark:border-[#2A2A28] px-3 py-1.5 text-xs font-mono hover:border-[#111111] dark:hover:border-[#F2F2F0] transition-colors"
                >
                  <Mail size={13} className="text-[#C8B79E]" />
                  <span>EMAIL DIRECT</span>
                </a>
              </div>
            </div>

            <div className="pt-8 text-[10px] font-mono text-[#888888]">
              STATUS // ACTIVE STUDENT &amp; BUILDER // 2026
            </div>
          </div>

          {/* RIGHT PAGE: MINIMAL UNDERLINED FORM */}
          <div className="pl-0 lg:pl-8 border-t lg:border-t-0 border-[#D9D9D6] dark:border-[#2A2A28] pt-8 lg:pt-0">
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#111111] dark:text-[#F2F2F0] uppercase block mb-6">
              TRANSMISSION TERMINAL
            </span>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border border-[#C8B79E] bg-[#C8B79E]/10 p-8 text-center flex flex-col items-center justify-center min-h-[340px]"
              >
                <CheckCircle2 size={36} className="text-[#C8B79E] mb-4" />
                <h3 className="text-xl font-bold uppercase tracking-tight text-[#111111] dark:text-[#F2F2F0] mb-2">
                  TRANSMISSION RECORDED
                </h3>
                <p className="text-xs font-mono text-[#6B6B6B] dark:text-[#9E9E99] max-w-sm mb-6 leading-relaxed">
                  Thank you for your dispatch. Bhavya Sreekumar has received your message and will review the correspondence promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="border border-[#111111] dark:border-[#F2F2F0] px-4 py-2 text-xs font-mono font-bold uppercase tracking-widest text-[#111111] dark:text-[#F2F2F0] hover:bg-[#111111] hover:text-white dark:hover:bg-[#F2F2F0] dark:hover:text-[#111111] transition-all"
                >
                  SEND ANOTHER DISPATCH
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                {/* Underlined Name Field */}
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="block text-[10px] font-mono font-bold tracking-[0.2em] text-[#6B6B6B] dark:text-[#9E9E99] uppercase mb-1"
                  >
                    01 // SENDER IDENTITY
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="YOUR FULL NAME"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    className="w-full bg-transparent border-0 border-b border-[#D9D9D6] dark:border-[#2A2A28] focus:border-[#111111] dark:focus:border-[#F2F2F0] py-2.5 text-sm sm:text-base text-[#111111] dark:text-[#F2F2F0] placeholder-[#AAAAAA] focus:outline-none transition-colors rounded-none"
                  />
                  {errors.name && (
                    <span className="text-[10px] font-mono text-red-500 mt-1 block">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Underlined Email Field */}
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-[10px] font-mono font-bold tracking-[0.2em] text-[#6B6B6B] dark:text-[#9E9E99] uppercase mb-1"
                  >
                    02 // RETURN TRANSMISSION ADDRESS
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="EMAIL@DOMAIN.COM"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    className="w-full bg-transparent border-0 border-b border-[#D9D9D6] dark:border-[#2A2A28] focus:border-[#111111] dark:focus:border-[#F2F2F0] py-2.5 text-sm sm:text-base text-[#111111] dark:text-[#F2F2F0] placeholder-[#AAAAAA] focus:outline-none transition-colors rounded-none"
                  />
                  {errors.email && (
                    <span className="text-[10px] font-mono text-red-500 mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Underlined Message Field */}
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="block text-[10px] font-mono font-bold tracking-[0.2em] text-[#6B6B6B] dark:text-[#9E9E99] uppercase mb-1"
                  >
                    03 // INQUIRY NARRATIVE
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="DESCRIBE YOUR INQUIRY, PROPOSAL, OR COLLABORATION..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    className="w-full bg-transparent border-0 border-b border-[#D9D9D6] dark:border-[#2A2A28] focus:border-[#111111] dark:focus:border-[#F2F2F0] py-2.5 text-sm sm:text-base text-[#111111] dark:text-[#F2F2F0] placeholder-[#AAAAAA] focus:outline-none transition-colors resize-none rounded-none"
                  />
                  {errors.message && (
                    <span className="text-[10px] font-mono text-red-500 mt-1 block">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative self-start flex items-center gap-3 border border-[#111111] dark:border-[#F2F2F0] px-6 py-3 text-xs font-mono font-bold tracking-[0.2em] text-[#111111] dark:text-[#F2F2F0] hover:bg-[#111111] hover:text-white dark:hover:bg-[#F2F2F0] dark:hover:text-[#111111] transition-all uppercase disabled:opacity-50"
                >
                  <Send size={13} className="group-hover:translate-x-1 transition-transform" />
                  <span>{loading ? "TRANSMITTING..." : "DISPATCH INQUIRY"}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Spread Bottom Folios */}
        <div className="mt-12 pt-4 border-t border-[#D9D9D6] dark:border-[#2A2A28] flex items-center justify-between text-[10px] font-mono text-[#888888]">
          <span>SPREAD 08 // SECTION: CORRESPONDENCE</span>
          <span>PAGE 15 — 16</span>
        </div>
      </div>
    </section>
  );
}


"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.6)] z-[100] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}


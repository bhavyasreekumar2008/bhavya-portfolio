"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const galleryFrame = target.closest(".gallery-image-frame");
      const cursorTarget = target.closest("[data-cursor]");
      const clickable = target.closest("a, button, input, textarea");

      if (galleryFrame) {
        setIsHovered(true);
        setCursorText("VIEW");
      } else if (cursorTarget) {
        setIsHovered(true);
        setCursorText(cursorTarget.getAttribute("data-cursor") || "OPEN");
      } else if (clickable) {
        setIsHovered(true);
        setCursorText("");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <motion.div
      className="custom-cursor-dot fixed pointer-events-none z-[9999] flex items-center justify-center font-mono"
      style={{
        left: smoothX,
        top: smoothY,
        width: cursorText ? 68 : isHovered ? 28 : 8,
        height: cursorText ? 68 : isHovered ? 28 : 8,
        backgroundColor: cursorText
          ? "rgba(18, 14, 8, 0.95)"
          : isHovered
          ? "transparent"
          : "#D4AF37",
        border: isHovered && !cursorText ? "2px solid #D4AF37" : "none",
        boxShadow: isHovered ? "0 0 15px rgba(212, 175, 55, 0.4)" : "none",
        backdropFilter: cursorText ? "blur(6px)" : "none",
      }}
    >
      {cursorText && (
        <span className="text-[10px] font-bold tracking-[0.2em] text-amber-300 select-none">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
}


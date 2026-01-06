"use client";

import { useEffect } from "react";
import { motion, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const scaleX = useSpring(0, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalHeight > 0 ? scrollTop / totalHeight : 0;
      scaleX.set(currentProgress);
    };

    // Listen on both window and document for better compatibility
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scaleX]);

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
    />
  );
}

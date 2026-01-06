"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface HeroSlideProps {
  isActive?: boolean;
}

export default function HeroSlide({ isActive = true }: HeroSlideProps) {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section id="hero" className="slide bg-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Main content - centered */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-8">
        {/* Logo placeholder */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={scaleIn}
          className="mb-12"
        >
          <Image
            src="/tpp_new_logo.png"
            alt="Tobago People's Party Logo"
            width={120}
            height={120}
            className=""
          />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="heading-xl text-[var(--text-primary)] mb-8"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          A New Era
          <br />
          <span className="text-[var(--tpp-blue)]">For Tobago</span>
        </motion.h1>

        {/* Party name */}
        <motion.p
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ delay: 0.6 }}
          className="mt-8 text-sm tracking-widest uppercase text-[var(--text-muted)]"
        >
          Tobago People's Party • <span className="font-bold">BLUEPRINT 2025 - 2045</span>
        </motion.p>
      </div>

      {/* Navigation hint */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-xs tracking-widest uppercase text-[var(--text-muted)]">
          Press → to continue
        </span>
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-10 h-6 border-2 border-[var(--text-muted)] rounded-full flex justify-center items-center"
        >
          <div className="w-2 h-1 bg-[var(--text-muted)] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

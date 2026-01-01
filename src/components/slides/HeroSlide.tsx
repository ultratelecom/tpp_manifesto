"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSlide() {
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
          animate="visible"
          variants={scaleIn}
          className="mb-12"
        >
          <Image
            src="/tpp_logo.jpeg"
            alt="Tobago People's Party Logo"
            width={120}
            height={120}
            className="shadow-lg"
          />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial="hidden"
          animate="visible"
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
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.6 }}
          className="mt-8 text-sm tracking-widest uppercase text-[var(--text-muted)]"
        >
          Tobago People's Party • <span className="font-bold">BLUEPRINT 2025 - 2045</span>
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-xs tracking-widest uppercase text-[var(--text-muted)]">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-[var(--text-muted)] rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[var(--text-muted)] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

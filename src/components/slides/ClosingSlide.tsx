"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ClosingSlideProps {
  isActive?: boolean;
}

export default function ClosingSlide({ isActive = true }: ClosingSlideProps) {
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
    <section id="closing" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-20">
        {/* Logo placeholder */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={scaleIn}
        >
          <Image
            src="/tpp_new_logo.png"
            alt="Tobago People's Party Logo"
            width={144}
            height={144}
            className=""
          />
        </motion.div>

        {/* SPACE */}
        <div className="h-16" />

        {/* Main message */}
        <motion.h2
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-5xl lg:text-8xl font-bold text-[var(--text-primary)] text-center leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Building a Brighter <span className="text-[var(--tpp-blue)]">Tobago</span>
        </motion.h2>

        {/* SPACE */}
        <div className="h-12" />

        <motion.p
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-2xl text-[var(--text-secondary)] text-center max-w-2xl"
        >
          Join us in creating a sustainable, prosperous future for every Tobagonian family.
        </motion.p>

        {/* SPACE */}
        <div className="h-16" />

        {/* Party footer */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-center"
        >
          <p className="text-xl tracking-widest uppercase text-[var(--text-muted)] font-medium">
            Tobago People's Party
          </p>
          <div className="h-3" />
          <p className="text-sm text-[var(--text-muted)]">
            Blueprint 2025 - 2045
          </p>
        </motion.div>
      </div>
    </section>
  );
}

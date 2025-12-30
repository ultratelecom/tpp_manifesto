"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TargetsSlide() {
  const targets = [
    {
      sector: "Private Sector Jobs",
      icon: "🏢",
      by2035: "25%",
      by2045: "35%",
    },
    {
      sector: "Public Sector Jobs",
      icon: "🏛️",
      by2035: "15%",
      by2045: "20%",
    },
    {
      sector: "Youth Employment",
      icon: "👥",
      by2035: "15%",
      by2045: "20%",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const rowItem = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section id="targets" className="slide bg-white relative overflow-hidden">
      {/* Background image - blurred with white overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&h=1080&fit=crop"
          alt="Tobago coastline"
          fill
          className="object-cover blur-xl scale-110"
        />
        {/* White overlay */}
        <div className="absolute inset-0 bg-white/90" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-20">
        {/* Section title */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-5xl lg:text-7xl font-bold text-[var(--text-primary)] text-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Primary Targets
        </motion.h2>

        {/* SPACE */}
        <div className="h-6" />

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-xl lg:text-2xl text-[var(--text-secondary)] text-center"
        >
          Our commitment to job growth
        </motion.p>

        {/* SPACE */}
        <div className="h-20" />

        {/* Year headers */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="w-full max-w-5xl"
        >
          <div className="grid grid-cols-[1fr_200px_200px] gap-12 items-center">
            <div></div>
            <div className="text-center">
              <span className="text-3xl font-bold text-[var(--tpp-blue)]" style={{ fontFamily: "var(--font-heading)" }}>
                By 2035
              </span>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-[var(--text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                By 2045
              </span>
            </div>
          </div>
        </motion.div>

        {/* SPACE */}
        <div className="h-16" />

        {/* Targets */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="w-full max-w-5xl space-y-16"
        >
          {targets.map((target) => (
            <motion.div
              key={target.sector}
              variants={rowItem}
              className="grid grid-cols-[1fr_200px_200px] gap-12 items-center"
            >
              {/* Sector name with icon */}
              <div className="flex items-center gap-8">
                <span className="text-5xl">{target.icon}</span>
                <span
                  className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {target.sector}
                </span>
              </div>

              {/* 2035 value */}
              <div className="text-center">
                <span
                  className="text-5xl lg:text-6xl font-bold text-[var(--tpp-blue)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {target.by2035}
                </span>
                <div className="text-sm text-[var(--text-muted)] mt-3">increase</div>
              </div>

              {/* 2045 value */}
              <div className="text-center">
                <span
                  className="text-5xl lg:text-6xl font-bold text-[var(--text-primary)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {target.by2045}
                </span>
                <div className="text-sm text-[var(--text-muted)] mt-3">increase</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

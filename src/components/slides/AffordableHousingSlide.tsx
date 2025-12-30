"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AffordableHousingSlide() {
  const programmes = [
    {
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=400&fit=crop",
      title: "Housing Trust",
      description: "Tobago Housing & Land Trust",
    },
    {
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=400&fit=crop",
      title: "Land for Landless",
      description: "Fully developed service lots",
    },
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      title: "Modular Housing",
      description: "Low-cost homeownership",
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop",
      title: "HOME Programme",
      description: "Home Ownership Made Easy",
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

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 }
    }
  };

  const cardItem = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section id="housing" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-20">
        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-rose-600 font-semibold text-lg tracking-wide uppercase"
        >
          Policy Focus
        </motion.div>

        {/* SPACE */}
        <div className="h-6" />

        {/* Main heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-5xl lg:text-7xl font-bold text-[var(--text-primary)] text-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Affordable <span className="text-rose-600">Housing</span>
        </motion.h2>

        {/* SPACE */}
        <div className="h-8" />

        {/* Subtitle */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-xl lg:text-2xl text-[var(--text-secondary)] text-center max-w-3xl"
        >
          A home for every Tobagonian — ensuring access to housing 
          that addresses current and future needs
        </motion.p>

        {/* SPACE */}
        <div className="h-12" />

        {/* Investment & Coverage stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex gap-16 lg:gap-24"
        >
          <motion.div variants={scaleUp} className="text-center">
            <div
              className="text-6xl lg:text-7xl font-bold text-rose-600"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              15%
            </div>
            
            {/* SPACE */}
            <div className="h-3" />
            
            <div className="text-lg font-semibold text-[var(--text-primary)]">
              GDP Investment
            </div>
            
            {/* SPACE */}
            <div className="h-1" />
            
            <div className="text-sm text-[var(--text-muted)]">
              Annual 2026-2045
            </div>
          </motion.div>

          <motion.div variants={scaleUp} className="text-center">
            <div
              className="text-6xl lg:text-7xl font-bold text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              75%
            </div>
            
            {/* SPACE */}
            <div className="h-3" />
            
            <div className="text-lg font-semibold text-[var(--text-primary)]">
              Coverage by 2045
            </div>
            
            {/* SPACE */}
            <div className="h-1" />
            
            <div className="text-sm text-[var(--text-muted)]">
              Eligible households
            </div>
          </motion.div>
        </motion.div>

        {/* SPACE */}
        <div className="h-20" />

        {/* Four programmes with images */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-5xl"
        >
          {programmes.map((prog) => (
            <motion.div
              key={prog.title}
              variants={cardItem}
              className="flex flex-col items-center text-center"
            >
              {/* Square image with rounded corners */}
              <div className="relative w-[150px] h-[150px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-rose-600/10" />
              </div>
              
              {/* SPACE */}
              <div className="h-6" />
              
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                {prog.title}
              </h3>
              
              {/* SPACE */}
              <div className="h-2" />
              
              <p className="text-sm text-[var(--text-secondary)]">
                {prog.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

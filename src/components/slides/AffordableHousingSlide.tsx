"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

interface AffordableHousingSlideProps {
  isActive?: boolean;
}

export default function AffordableHousingSlide({ isActive = true }: AffordableHousingSlideProps) {
  const programmes = [
    {
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=400&fit=crop",
      title: "Dwelling Units",
      subtitle: "800-Units",
      items: ["Riseland, Adventure, Bacolet, Shirvan"],
    },
    {
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=400&fit=crop",
      title: "Land for Landless",
      subtitle: "200-Lots",
      items: [
        "Adelphi, Courland, Belle Garden",
        "Louis D'Or, Blenheim",
      ],
    },
    {
      image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=400&h=400&fit=crop",
      title: "Modular Housing",
      subtitle: null,
      items: ["Low-cost homeownership"],
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop",
      title: "HOME Programme",
      subtitle: null,
      items: ["Home Ownership Made Easy"],
    },
    {
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=400&fit=crop",
      title: "P.O.S.H",
      subtitle: "500-Service Lots",
      items: [
        "Distribution of derelict quarters",
        "Distribution of service lots",
      ],
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
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const cardItem = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section id="housing" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-16 py-12">
        {/* Section label */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-rose-600 font-semibold text-lg tracking-wide uppercase"
        >
          Policy Focus
        </motion.div>

        {/* SPACE */}
        <div className="h-4" />

        {/* Main heading */}
        <motion.h2
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-4xl lg:text-6xl font-bold text-[var(--text-primary)] text-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Affordable <span className="text-rose-600">Housing</span>
        </motion.h2>

        {/* SPACE */}
        <div className="h-6" />

        {/* Subtitle */}
        <motion.p
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-lg text-[var(--text-secondary)] text-center max-w-3xl"
        >
          A home for every Tobagonian — ensuring access to housing 
          that addresses current and future needs
        </motion.p>

        {/* SPACE */}
        <div className="h-10" />

        {/* Investment & Coverage stats */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={staggerContainer}
          className="flex gap-12 lg:gap-20"
        >
          <motion.div variants={scaleUp} className="text-center">
            <div
              className="text-5xl lg:text-6xl font-bold text-rose-600"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <CountUp end={15} suffix="%" duration={2} isActive={isActive} className="" />
            </div>
            
            {/* SPACE */}
            <div className="h-2" />
            
            <div className="text-base font-semibold text-[var(--text-primary)]">
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
              className="text-5xl lg:text-6xl font-bold text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <CountUp end={75} suffix="%" duration={2} delay={200} isActive={isActive} className="" />
            </div>
            
            {/* SPACE */}
            <div className="h-2" />
            
            <div className="text-base font-semibold text-[var(--text-primary)]">
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
        <div className="h-12" />

        {/* Five programmes with images */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-5 gap-6 w-full max-w-6xl"
        >
          {programmes.map((prog) => (
            <motion.div
              key={prog.title}
              variants={cardItem}
              className="flex flex-col items-center"
            >
              {/* Square image with rounded corners */}
              <div className="relative w-[90px] h-[90px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-rose-600/10" />
              </div>
              
              {/* SPACE */}
              <div className="h-4" />
              
              <h3 className="text-lg font-bold text-[var(--text-primary)] text-center">
                {prog.title}
              </h3>
              
              {/* Subtitle if exists */}
              {prog.subtitle && (
                <>
                  <div className="h-1" />
                  <div className="text-sm font-semibold text-rose-600">
                    {prog.subtitle}
                  </div>
                </>
              )}
              
              {/* SPACE */}
              <div className="h-2" />
              
              {/* Bullet points */}
              <ul className="space-y-1 text-left w-full">
                {prog.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-base text-[var(--text-secondary)] leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-rose-600 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

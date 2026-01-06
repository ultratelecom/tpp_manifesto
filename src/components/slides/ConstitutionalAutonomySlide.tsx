"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

interface ConstitutionalAutonomySlideProps {
  isActive?: boolean;
}

export default function ConstitutionalAutonomySlide({ isActive = true }: ConstitutionalAutonomySlideProps) {
  const pillars = [
    { title: "Legislative Authority", description: "Full control over Tobago affairs" },
    { title: "Fiscal Autonomy", description: "Generate and manage own revenue" },
    { title: "Revenue Sharing", description: "Fair share of national income" },
    { title: "Participatory Governance", description: "Direct voice in decisions" },
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
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const pillarItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } }
  };

  return (
    <section id="autonomy" className="slide bg-white relative overflow-hidden">
      {/* Background image - blurred with white overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1920&h=1080&fit=crop"
          alt="Government building"
          fill
          className="object-cover blur-xl scale-110"
        />
        <div className="absolute inset-0 bg-white/90" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-20">
        {/* Section label */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-[var(--tpp-blue)] font-semibold text-lg tracking-wide uppercase"
        >
          Policy Focus
        </motion.div>

        {/* SPACE */}
        <div className="h-6" />

        {/* Main heading */}
        <motion.h2
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-5xl lg:text-7xl font-bold text-[var(--text-primary)] text-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Constitutional <span className="text-[var(--tpp-blue)]">Autonomy</span>
        </motion.h2>

        {/* SPACE */}
        <div className="h-8" />

        {/* Subtitle */}
        <motion.p
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-xl lg:text-2xl text-[var(--text-secondary)] text-center max-w-3xl"
        >
          Self-governance for Tobago's future — greater control over our own affairs
        </motion.p>

        {/* SPACE */}
        <div className="h-20" />

        {/* Timeline */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={staggerContainer}
          className="flex items-center justify-center gap-8 lg:gap-16"
        >
          {/* 2026 */}
          <motion.div variants={scaleUp} className="text-center">
            <div
              className="text-6xl lg:text-8xl font-bold text-[var(--tpp-blue)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <CountUp end={2026} duration={2} isActive={isActive} separator="" className="" />
            </div>
            
            {/* SPACE */}
            <div className="h-4" />
            
            <div className="text-xl font-semibold text-[var(--text-primary)]">
              Self-Government Act
            </div>
            
            {/* SPACE */}
            <div className="h-2" />
            
            <div className="text-base text-[var(--text-secondary)]">
              Constitutional Amendment Proclaimed
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="text-4xl text-[var(--tpp-blue)]"
          >
            →
          </motion.div>

          {/* 2027 */}
          <motion.div variants={scaleUp} className="text-center">
            <div
              className="text-6xl lg:text-8xl font-bold text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <CountUp end={2027} duration={2} delay={300} isActive={isActive} separator="" className="" />
            </div>
            
            {/* SPACE */}
            <div className="h-4" />
            
            <div className="text-xl font-semibold text-[var(--text-primary)]">
              New THA Act
            </div>
            
            {/* SPACE */}
            <div className="h-2" />
            
            <div className="text-base text-[var(--text-secondary)]">
              Fully Functional Assembly
            </div>
          </motion.div>
        </motion.div>

        {/* SPACE */}
        <div className="h-20" />

        {/* Four pillars */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-5xl"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={pillarItem}
              className="flex flex-col items-center text-center"
            >
              <h3 className="text-lg font-bold text-[var(--tpp-blue)]">
                {pillar.title}
              </h3>
              
              {/* SPACE */}
              <div className="h-3" />
              
              <p className="text-base text-[var(--text-secondary)]">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

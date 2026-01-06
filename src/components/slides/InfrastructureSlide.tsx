"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

interface InfrastructureSlideProps {
  isActive?: boolean;
}

export default function InfrastructureSlide({ isActive = true }: InfrastructureSlideProps) {
  const initiatives = [
    {
      name: "1000 Homes",
      jobs: 4000,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=400&fit=crop",
      description: "Service lots and dwelling units",
    },
    {
      name: "Tourism Infrastructure",
      jobs: 600,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop",
      description: "Marriott Resort - Rockly Bay, Hilton International - Roxborough, Recreation sites, forts, trails",
    },
    {
      name: "Heritage Village",
      jobs: 175,
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=400&fit=crop",
      description: "Cultural museum and theme park",
    },
    {
      name: "Build Tobago",
      jobs: 2000,
      image: "https://images.pexels.com/photos/1647416/pexels-photo-1647416.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "Roads, schools, sport & civic centres",
      subtext: "10 ON/OFF workers to be regularized under Build Tobago Programme",
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
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 }
    }
  };

  const cardItem = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section id="infrastructure" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-20">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-amber-600 font-semibold text-lg tracking-wide uppercase text-center"
        >
          Physical Infrastructure
        </motion.div>

        {/* SPACE */}
        <div className="h-6" />

        <motion.h2
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-5xl lg:text-7xl font-bold text-[var(--text-primary)] text-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Building Tobago's <span className="text-amber-600">Foundation</span>
        </motion.h2>

        {/* SPACE */}
        <div className="h-12" />

        {/* Total jobs */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={scaleUp}
          className="text-center"
        >
          <div
            className="text-7xl lg:text-8xl font-bold text-[var(--text-primary)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <CountUp end={6775} duration={3} isActive={isActive} separator="," className="" />+
          </div>
          
          {/* SPACE */}
          <div className="h-4" />
          
          <div className="text-2xl text-[var(--text-secondary)]">Total Jobs Created</div>
        </motion.div>

        {/* SPACE */}
        <div className="h-20" />

        {/* Four initiatives with images */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-6xl"
        >
          {initiatives.map((initiative, idx) => (
            <motion.div
              key={initiative.name}
              variants={cardItem}
              className="flex flex-col items-center text-center"
            >
              {/* Square image with rounded corners - CENTERED */}
              <div className="relative w-[180px] h-[180px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={initiative.image}
                  alt={initiative.name}
                  fill
                  className="object-cover"
                />
                {/* Subtle amber overlay */}
                <div className="absolute inset-0 bg-amber-600/10" />
              </div>
              
              {/* SPACE */}
              <div className="h-6" />
              
              <div
                className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                +<CountUp end={initiative.jobs} duration={2} delay={idx * 200} isActive={isActive} separator="," className="" />
              </div>
              
              {/* SPACE */}
              <div className="h-3" />
              
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                {initiative.name}
              </h3>
              
              {/* SPACE */}
              <div className="h-2" />
              
              <p className="text-base text-[var(--text-secondary)]">
                {initiative.description}
              </p>
              
              {initiative.subtext && (
                <>
                  <div className="h-1" />
                  <p className="text-sm text-[var(--text-muted)] italic">
                    {initiative.subtext}
                  </p>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

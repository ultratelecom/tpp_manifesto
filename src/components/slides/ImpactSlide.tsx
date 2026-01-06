"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

interface ImpactSlideProps {
  isActive?: boolean;
}

export default function ImpactSlide({ isActive = true }: ImpactSlideProps) {
  const sectors = [
    { 
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=400&fit=crop",
      label: "Clean Energy", 
      jobs: 1000, 
      color: "#10B981",
      overlay: "bg-emerald-600"
    },
    { 
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop",
      label: "Digital", 
      jobs: 400, 
      color: "#3B82F6",
      overlay: "bg-blue-600"
    },
    { 
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=400&fit=crop",
      label: "Infrastructure", 
      jobs: 6775, 
      color: "#F59E0B",
      overlay: "bg-amber-600"
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const sectorItem = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section id="impact" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-20">
        {/* Big number */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={scaleUp}
          className="text-[10rem] lg:text-[14rem] font-extrabold text-[var(--tpp-blue)] leading-none tracking-tighter"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <CountUp end={8175} duration={3} isActive={isActive} separator="," className="" /><span className="text-[6rem] lg:text-[8rem]">+</span>
        </motion.div>

        {/* SPACE */}
        <div className="h-16" />

        {/* Label */}
        <motion.h2
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-5xl lg:text-7xl font-bold text-[var(--text-primary)] text-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Jobs Created
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
          Across clean energy, digital transformation, and physical infrastructure
        </motion.p>

        {/* SPACE */}
        <div className="h-24" />

        {/* Three sectors with images */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full max-w-5xl"
        >
          {sectors.map((sector, idx) => (
            <motion.div
              key={sector.label}
              variants={sectorItem}
              className="flex flex-col items-center text-center"
            >
              {/* Circular image with color overlay - CENTERED */}
              <motion.div
                variants={scaleUp}
                className="relative w-36 h-36 rounded-full overflow-hidden shadow-lg"
              >
                <Image
                  src={sector.image}
                  alt={sector.label}
                  fill
                  className="object-cover"
                />
                {/* Color overlay */}
                <div className={`absolute inset-0 ${sector.overlay} opacity-30`} />
              </motion.div>
              
              {/* SPACE */}
              <div className="h-8" />
              
              <div
                className="text-5xl font-bold"
                style={{ color: sector.color, fontFamily: "var(--font-heading)" }}
              >
                +<CountUp end={sector.jobs} duration={2.5} delay={idx * 300} isActive={isActive} separator="," className="" />
              </div>
              
              {/* SPACE */}
              <div className="h-4" />
              
              <div className="text-xl text-[var(--text-primary)] font-medium">
                {sector.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

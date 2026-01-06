"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

interface SustainableTourismSlideProps {
  isActive?: boolean;
}

export default function SustainableTourismSlide({ isActive = true }: SustainableTourismSlideProps) {
  const stats = [
    { value: 25, prefix: "+", suffix: "%", label: "Long-Stay", sublabel: "by 2030" },
    { value: 60, prefix: "+", suffix: "%", label: "Short-Stay", sublabel: "by 2035" },
    { value: 1500, suffix: "", label: "4/5★ Rooms", sublabel: "by 2045" },
  ];

  const pillars = [
    {
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=400&fit=crop",
      title: "Infrastructure",
    },
    {
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=400&fit=crop",
      title: "Luxury Hotels",
    },
    {
      image: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=400&h=400&fit=crop",
      title: "Community Tourism",
    },
    {
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop",
      title: "Eco-Tourism",
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
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  };

  const cardItem = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section id="tourism" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-16 py-12">
        {/* Section label */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-teal-600 font-semibold text-lg tracking-wide uppercase"
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
          Sustainable <span className="text-teal-600">Tourism</span>
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
          Building a world-class destination through community-based, 
          eco-conscious, and culturally rich experiences
        </motion.p>

        {/* SPACE */}
        <div className="h-6" />

        {/* Economic Contribution of Tourism */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-teal-700" style={{ fontFamily: "var(--font-heading)" }}>
            Economic Contribution of Tourism
          </h3>
          
          {/* SPACE */}
          <div className="h-3" />
          
          <div className="text-3xl lg:text-4xl font-bold text-teal-600" style={{ fontFamily: "var(--font-heading)" }}>
            <CountUp end={6} suffix="%" duration={1.5} isActive={isActive} className="" /> by 2030
          </div>
          
          {/* SPACE */}
          <div className="h-2" />
          
          <div className="text-3xl lg:text-4xl font-bold text-teal-600" style={{ fontFamily: "var(--font-heading)" }}>
            <CountUp end={8} suffix="%" duration={1.5} delay={200} isActive={isActive} className="" /> by 2035
          </div>
        </motion.div>

        {/* SPACE */}
        <div className="h-10" />

        {/* Stats */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={staggerContainer}
          className="flex gap-12 lg:gap-20"
        >
          {stats.map((stat, idx) => (
            <motion.div key={stat.label} variants={scaleUp} className="text-center">
              <div
                className="text-4xl lg:text-5xl font-bold text-teal-600"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <CountUp 
                  end={stat.value} 
                  prefix={stat.prefix || ""} 
                  suffix={stat.suffix || ""} 
                  duration={2} 
                  delay={idx * 200}
                  isActive={isActive} 
                  separator={stat.value >= 1000 ? "," : ""}
                  className="" 
                />
              </div>
              
              {/* SPACE */}
              <div className="h-2" />
              
              <div className="text-base font-semibold text-[var(--text-primary)]">
                {stat.label}
              </div>
              
              {/* SPACE */}
              <div className="h-1" />
              
              <div className="text-sm text-[var(--text-muted)]">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* SPACE */}
        <div className="h-16" />

        {/* Four pillars with images only - no sub-examples */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-5xl"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={cardItem}
              className="flex flex-col items-center text-center"
            >
              {/* Square image with rounded corners */}
              <div className="relative w-[140px] h-[140px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-teal-600/10" />
              </div>
              
              {/* SPACE */}
              <div className="h-6" />
              
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                {pillar.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

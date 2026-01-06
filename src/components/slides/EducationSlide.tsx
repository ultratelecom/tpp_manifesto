"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

interface EducationSlideProps {
  isActive?: boolean;
}

export default function EducationSlide({ isActive = true }: EducationSlideProps) {
  const stats = [
    { value: 50, suffix: "%", label: "Certification From Secondary School", sublabel: "by 2030" },
    { value: 40, suffix: "%", label: "of Workforce Post-Secondary Training", sublabel: "by 2035" },
    { value: 60, suffix: "%", label: "of Workforce Post-Secondary Training", sublabel: "by 2045" },
  ];

  const programmes = [
    {
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=400&fit=crop",
      title: "Curriculum Modernization",
      subtitle: "Tobago-centric, dual-track academic & technical",
    },
    {
      image: "https://images.pexels.com/photos/8423068/pexels-photo-8423068.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      title: "Technology Integration",
      subtitle: "AI, laptops, digital learning tools",
    },
    {
      image: "https://images.pexels.com/photos/5905702/pexels-photo-5905702.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      title: "Early Childhood Education",
      subtitle: "Certified teachers, standardized qualifications",
    },
    {
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=400&fit=crop",
      title: "Infrastructure Investment",
      subtitle: "Scarborough Secondary, University of Tobago",
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
    <section id="education" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-16 py-12">
        {/* Section label */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-indigo-600 font-semibold text-lg tracking-wide uppercase"
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
          Education & <span className="text-indigo-600">Innovation</span>
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
          Building a skilled, innovative population through modern education, 
          technology integration, and lifelong learning
        </motion.p>

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
            <motion.div key={stat.label + stat.sublabel} variants={scaleUp} className="text-center">
              <div
                className="text-4xl lg:text-5xl font-bold text-indigo-600"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <CountUp end={stat.value} suffix={stat.suffix} duration={2} delay={idx * 200} isActive={isActive} className="" />
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
        <div className="h-12" />

        {/* Four programmes with images */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl"
        >
          {programmes.map((prog) => (
            <motion.div
              key={prog.title}
              variants={cardItem}
              className="flex flex-col items-center text-center"
            >
              {/* Square image with rounded corners */}
              <div className="relative w-[100px] h-[100px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-indigo-600/10" />
              </div>
              
              {/* SPACE */}
              <div className="h-4" />
              
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                {prog.title}
              </h3>
              
              {/* SPACE */}
              <div className="h-2" />
              
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                {prog.subtitle}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

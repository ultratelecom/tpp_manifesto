"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

interface HealthcareSlideProps {
  isActive?: boolean;
}

export default function HealthcareSlide({ isActive = true }: HealthcareSlideProps) {
  const initiatives = [
    { 
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=400&fit=crop",
      title: "Healthcare Infrastructure", 
      description: "Modernized hospitals, clinics, diagnostic capacity" 
    },
    { 
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=400&fit=crop",
      title: "Digital Health", 
      description: "Patient records, telemedicine, remote monitoring" 
    },
    { 
      image: "https://images.pexels.com/photos/5452186/pexels-photo-5452186.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      title: "Workforce Development", 
      description: "Training, leadership, professional growth" 
    },
    { 
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      title: "Prevention & Wellness", 
      description: "Chronic disease, mental health, nutrition" 
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
    <section id="healthcare" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-16 py-12">
        {/* Section label */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-red-600 font-semibold text-lg tracking-wide uppercase"
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
          Wellness & <span className="text-red-600">Healthcare Delivery</span>
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
          A modern, efficient healthcare system ensuring high-quality, 
          compassionate care for all Tobagonians
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
          <motion.div variants={scaleUp} className="text-center">
            <div
              className="text-5xl lg:text-6xl font-bold text-red-600"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <CountUp end={70} duration={2} isActive={isActive} className="" /> yrs
            </div>
            
            {/* SPACE */}
            <div className="h-2" />
            
            <div className="text-base font-semibold text-[var(--text-primary)]">
              Male & Female Healthy Life
            </div>
            <div className="text-base font-semibold text-[var(--text-primary)]">
              Expectancy At Birth
            </div>
            
            {/* SPACE */}
            <div className="h-1" />
            
            <div className="text-sm text-[var(--text-muted)]">
              by 2045
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
              Wait Time Reduction for Hospital Services
            </div>
            
            {/* SPACE */}
            <div className="h-1" />
            
            <div className="text-sm text-[var(--text-muted)]">
              by 2035
            </div>
          </motion.div>
        </motion.div>

        {/* SPACE */}
        <div className="h-12" />

        {/* Four initiatives with images */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl"
        >
          {initiatives.map((item) => (
            <motion.div
              key={item.title}
              variants={cardItem}
              className="flex flex-col items-center text-center"
            >
              {/* Circular image */}
              <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-red-600/15" />
              </div>
              
              {/* SPACE */}
              <div className="h-4" />
              
              <h3 className="text-lg font-bold text-red-600">
                {item.title}
              </h3>
              
              {/* SPACE */}
              <div className="h-2" />
              
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

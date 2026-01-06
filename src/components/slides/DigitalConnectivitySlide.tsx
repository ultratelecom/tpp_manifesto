"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

interface DigitalConnectivitySlideProps {
  isActive?: boolean;
}

export default function DigitalConnectivitySlide({ isActive = true }: DigitalConnectivitySlideProps) {
  const initiatives = [
    {
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop",
      title: "Digital Infrastructure",
      description: "High-speed broadband, Wi-Fi 6, 6G networks",
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop",
      title: "Digital Literacy",
      description: "Training programs for all ages",
    },
    {
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=400&fit=crop",
      title: "Cybersecurity",
      description: "Protect digital assets and data",
    },
    {
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=400&fit=crop",
      title: "Digital Inclusion",
      description: "Bridge the digital divide",
    },
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
      title: "FinTech",
      description: "Digitalization of business transactions",
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
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardItem = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section id="digital-connectivity" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-16 py-12">
        {/* Section label */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-cyan-600 font-semibold text-lg tracking-wide uppercase"
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
          Digital <span className="text-cyan-600">Connectivity</span>
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
          Connecting every Tobagonian to the digital future — 
          enhancing relationships through digital tools
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
              className="text-5xl lg:text-6xl font-bold text-cyan-600"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <CountUp end={80} suffix="%" duration={2} isActive={isActive} className="" />
            </div>
            
            {/* SPACE */}
            <div className="h-2" />
            
            <div className="text-base font-semibold text-[var(--text-primary)]">
              Connectivity by 2035
            </div>
            
            {/* SPACE */}
            <div className="h-1" />
            
            <div className="text-sm text-[var(--text-muted)]">
              All areas of society
            </div>
          </motion.div>

          <motion.div variants={scaleUp} className="text-center">
            <div
              className="text-5xl lg:text-6xl font-bold text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <CountUp end={100} suffix="%" duration={2} delay={200} isActive={isActive} className="" />
            </div>
            
            {/* SPACE */}
            <div className="h-2" />
            
            <div className="text-base font-semibold text-[var(--text-primary)]">
              Connectivity by 2045
            </div>
            
            {/* SPACE */}
            <div className="h-1" />
            
            <div className="text-sm text-[var(--text-muted)]">
              Complete digitalization
            </div>
          </motion.div>

          <motion.div variants={scaleUp} className="text-center">
            <div
              className="text-5xl lg:text-6xl font-bold text-cyan-600"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <CountUp end={90} suffix="%" duration={2} delay={400} isActive={isActive} className="" />
            </div>
            
            {/* SPACE */}
            <div className="h-2" />
            
            <div className="text-base font-semibold text-[var(--text-primary)]">
              Business Digitalization
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

        {/* Five initiatives with images */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-5 gap-8 w-full max-w-6xl"
        >
          {initiatives.map((item) => (
            <motion.div
              key={item.title}
              variants={cardItem}
              className="flex flex-col items-center text-center"
            >
              {/* Square image with rounded corners */}
              <div className="relative w-[100px] h-[100px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-cyan-600/10" />
              </div>
              
              {/* SPACE */}
              <div className="h-4" />
              
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                {item.title}
              </h3>
              
              {/* SPACE */}
              <div className="h-2" />
              
              <p className="text-base text-[var(--text-secondary)]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* SPACE */}
        <div className="h-10" />

        {/* Tobago Online highlight */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-center"
        >
          <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider mb-2">
            Key Programme
          </div>
          <div className="text-lg font-bold text-cyan-600">
            Tobago Online — E-Government Services for All
          </div>
        </motion.div>
      </div>
    </section>
  );
}

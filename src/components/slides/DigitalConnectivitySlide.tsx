"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DigitalConnectivitySlide() {
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
    <section id="digital-connectivity" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-20">
        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-cyan-600 font-semibold text-lg tracking-wide uppercase"
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
          Digital <span className="text-cyan-600">Connectivity</span>
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
          Connecting every Tobagonian to the digital future — 
          enhancing relationships through digital tools
        </motion.p>

        {/* SPACE */}
        <div className="h-12" />

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex gap-16 lg:gap-24"
        >
          <motion.div variants={scaleUp} className="text-center">
            <div
              className="text-6xl lg:text-7xl font-bold text-cyan-600"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              80%
            </div>
            
            {/* SPACE */}
            <div className="h-3" />
            
            <div className="text-lg font-semibold text-[var(--text-primary)]">
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
              className="text-6xl lg:text-7xl font-bold text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              100%
            </div>
            
            {/* SPACE */}
            <div className="h-3" />
            
            <div className="text-lg font-semibold text-[var(--text-primary)]">
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
              className="text-6xl lg:text-7xl font-bold text-cyan-600"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              90%
            </div>
            
            {/* SPACE */}
            <div className="h-3" />
            
            <div className="text-lg font-semibold text-[var(--text-primary)]">
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
        <div className="h-20" />

        {/* Four initiatives with images */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-5xl"
        >
          {initiatives.map((item) => (
            <motion.div
              key={item.title}
              variants={cardItem}
              className="flex flex-col items-center text-center"
            >
              {/* Square image with rounded corners */}
              <div className="relative w-[140px] h-[140px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-cyan-600/10" />
              </div>
              
              {/* SPACE */}
              <div className="h-6" />
              
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                {item.title}
              </h3>
              
              {/* SPACE */}
              <div className="h-2" />
              
              <p className="text-sm text-[var(--text-secondary)]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* SPACE */}
        <div className="h-12" />

        {/* Tobago Online highlight */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
          className="text-center"
        >
          <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider mb-2">
            Key Programme
          </div>
          <div className="text-xl font-bold text-cyan-600">
            Tobago Online — E-Government Services for All
          </div>
        </motion.div>
      </div>
    </section>
  );
}


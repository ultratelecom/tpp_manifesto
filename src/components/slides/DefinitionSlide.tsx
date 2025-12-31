"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DefinitionSlide() {
  const pillars = [
    {
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=400&fit=crop",
      title: "Minimum Living Wage",
      description: "Fair compensation that meets the cost of living",
    },
    {
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
      title: "Continuous Employment",
      description: "Stable, ongoing work without interruption",
    },
    {
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=400&fit=crop",
      title: "5+ Year Duration",
      description: "Long-term security, not temporary contracts",
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const pillarItem = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  const imageScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section id="definition" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-20">
        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
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
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-5xl lg:text-7xl font-bold text-[var(--text-primary)] text-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Sustainable & Meaningful{" "}
          <span className="text-[var(--tpp-blue)]">Job Creation</span>
        </motion.h2>

        {/* SPACE */}
        <div className="h-8" />

        {/* Subtitle */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-xl lg:text-2xl text-[var(--text-secondary)] text-center max-w-4xl"
        >
          A sustainable, meaningful job meets a minimum living wage threshold, 
          offers continuous employment, and lasts at least five years
        </motion.p>

        {/* SPACE */}
        <div className="h-20" />

        {/* Three pillars with images */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full max-w-5xl"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={pillarItem}
              className="flex flex-col items-center text-center"
            >
              {/* Circular image with blue tint overlay - CENTERED */}
              <motion.div 
                variants={imageScale}
                className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg"
              >
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover"
                />
                {/* Blue tint overlay */}
                <div className="absolute inset-0 bg-[var(--tpp-blue)] opacity-20" />
              </motion.div>
              
              {/* SPACE */}
              <div className="h-8" />
              
              <h3
                className="text-xl font-bold text-[var(--tpp-blue)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
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

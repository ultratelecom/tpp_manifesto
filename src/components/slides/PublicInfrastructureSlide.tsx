"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PublicInfrastructureSlide() {
  const initiatives = [
    {
      image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=400&h=400&fit=crop",
      title: "Transportation",
      description: "Roads, bypasses, connectors",
    },
    {
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=400&fit=crop",
      title: "Transit Hubs",
      description: "Scarborough, Mason Hall, Roxborough",
    },
    {
      image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=400&h=400&fit=crop",
      title: "Maritime",
      description: "Cruise terminal, marina",
    },
    {
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=400&fit=crop",
      title: "Urban Growth",
      description: "City of Scarborough expansion",
    },
  ];

  const projects = [
    "Cruise Ship Terminal",
    "Marina & Maritime Entryway",
    "Multi-Level Parkade",
    "Transit Hub & Commercial Centre",
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
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  };

  const cardItem = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section id="public-infrastructure" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-20">
        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-orange-600 font-semibold text-lg tracking-wide uppercase"
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
          Public <span className="text-orange-600">Infrastructure</span>
        </motion.h2>

        {/* SPACE */}
        <div className="h-8" />

        {/* Investment headline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleUp}
          className="text-center"
        >
          <div
            className="text-6xl lg:text-7xl font-bold text-orange-600"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            30% GDP
          </div>
          
          {/* SPACE */}
          <div className="h-4" />
          
          <div className="text-xl text-[var(--text-secondary)]">
            Annual Investment • 2026-2045
          </div>
        </motion.div>

        {/* SPACE */}
        <div className="h-16" />

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
              <div className="relative w-[150px] h-[150px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-orange-600/10" />
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
        <div className="h-16" />

        {/* Major PPP projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
          className="text-center"
        >
          <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider mb-4">
            Major PPP Projects
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {projects.map((proj) => (
              <span key={proj} className="text-base font-medium text-[var(--text-primary)]">
                {proj}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

interface FoodSecuritySlideProps {
  isActive?: boolean;
}

export default function FoodSecuritySlide({ isActive = true }: FoodSecuritySlideProps) {
  const stats = [
    { value: 8, suffix: "%", label: "GDP from Agriculture", sublabel: "by 2035" },
    { value: 40, prefix: "+", suffix: "%", label: "Indigenous Crops", sublabel: "self-sufficiency" },
    { value: 60, prefix: "+", suffix: "%", label: "Fish Harvest", sublabel: "commercial increase" },
  ];

  const programmes = [
    {
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=400&fit=crop",
      title: "Mega Farm Programme",
      subtitle: "Friendship Agri-Park Project",
    },
    {
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=400&fit=crop",
      title: "Young Farmers Agripreneurship",
      subtitle: "$100,000 Grants for young farmers",
    },
    {
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=400&fit=crop",
      title: "Tobago Agricultural Research Institute",
      subtitle: null,
    },
    {
      image: "https://images.pexels.com/photos/1756311/pexels-photo-1756311.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      title: "Agricultural Access Roads",
      subtitle: null,
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
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  };

  const statItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  const cardItem = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section id="food-security" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-16 py-12">
        {/* Section label */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-green-700 font-semibold text-lg tracking-wide uppercase"
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
          Food Security & <span className="text-green-700">Sovereignty</span>
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
          Developing targeted, adequate, and autonomous food production systems 
          for Tobago&apos;s residents and visitors
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
            <motion.div key={stat.label} variants={statItem} className="text-center">
              <CountUp
                end={stat.value}
                prefix={stat.prefix || ""}
                suffix={stat.suffix || ""}
                duration={2}
                delay={idx * 200}
                isActive={isActive}
                className="text-4xl lg:text-5xl font-bold text-green-700"
              />
              
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

        {/* Key programmes with images */}
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
              {/* Circular image */}
              <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-green-700/15" />
              </div>
              
              {/* SPACE */}
              <div className="h-4" />
              
              <h3 className="text-lg font-bold text-green-700 leading-tight">
                {prog.title}
              </h3>
              
              {prog.subtitle && (
                <>
                  <div className="h-2" />
                  <p className="text-base text-[var(--text-secondary)] italic">
                    {prog.subtitle}
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

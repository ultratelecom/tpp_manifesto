"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

interface PublicInfrastructureSlideProps {
  isActive?: boolean;
}

export default function PublicInfrastructureSlide({ isActive = true }: PublicInfrastructureSlideProps) {
  const initiatives = [
    {
      image: "https://images.pexels.com/photos/12065771/pexels-photo-12065771.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      title: "Road Network",
      items: [
        "Overpass from Highmoor Connector to Sangster Hill Road",
        "Runnemede Bypass along Des Vignes",
        "Darrel Spring Boardwalk",
        "Milford Court–Pigeon Point Connector",
        "Turpin Bend - Charlotteville",
        "L'Anse Fourmi/Charlotteville Link Road Restoration",
        "Badrock Restoration",
      ],
    },
    {
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=400&fit=crop",
      title: "Transit Hubs",
      items: [
        "Central Transportation Hub",
        "Northern Transit Hub in Mason Hall",
        "Eastern Transit Hub in Roxborough",
      ],
    },
    {
      image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=400&h=400&fit=crop",
      title: "Marine Infrastructure",
      items: [
        "Cruise ship complex at Scarborough",
        "Cruise ship terminal at Charlotteville",
        "Cruise ship terminal at Plymouth",
        "Mariner at Kings Bay",
        "Mariner at Cove",
      ],
    },
    {
      image: "https://www.infrastructuretha.gov.tt/wp-content/uploads/2023/08/011-scaled.jpg",
      title: "Urban, Suburban & Village Growth",
      items: [
        "Multi-Level Parkade in Scarborough",
        "Friendship Estate (Sport Tourism)",
        "Commercial Centres: Scarborough, Roxborough, Canaan/Bon Accord",
        "Suburban centres: Charlotteville, Speyside, Plymouth, Mason Hall",
      ],
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
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  };

  const cardItem = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section id="public-infrastructure" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-16 py-12">
        {/* Section label */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-orange-600 font-semibold text-lg tracking-wide uppercase"
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
          Public <span className="text-orange-600">Infrastructure</span>
        </motion.h2>

        {/* SPACE */}
        <div className="h-6" />

        {/* Investment headline */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={scaleUp}
          className="text-center"
        >
          <div
            className="text-5xl lg:text-6xl font-bold text-orange-600"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            $<CountUp end={600} duration={2.5} isActive={isActive} className="" /> Million+
          </div>
          
          {/* SPACE */}
          <div className="h-2" />
          
          <div className="text-lg text-[var(--text-secondary)]">
            Annual Investment • 2026-2045
          </div>
        </motion.div>

        {/* SPACE */}
        <div className="h-10" />

        {/* Four initiatives with images and bullet points */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl"
        >
          {initiatives.map((item) => (
            <motion.div
              key={item.title}
              variants={cardItem}
              className="flex flex-col items-center"
            >
              {/* Square image with rounded corners */}
              <div className="relative w-[100px] h-[100px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-orange-600/10" />
              </div>
              
              {/* SPACE */}
              <div className="h-4" />
              
              <h3 className="text-lg font-bold text-[var(--text-primary)] text-center">
                {item.title}
              </h3>
              
              {/* SPACE */}
              <div className="h-2" />
              
              {/* Bullet points */}
              <ul className="space-y-0.5 text-left w-full">
                {item.items.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-base text-[var(--text-secondary)] leading-tight flex items-start gap-1"
                  >
                    <span className="text-orange-600 mt-0.5 text-sm">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

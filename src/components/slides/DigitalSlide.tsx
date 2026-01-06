"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

interface DigitalSlideProps {
  isActive?: boolean;
}

export default function DigitalSlide({ isActive = true }: DigitalSlideProps) {
  const roles = [
    "Digital Content Creators",
    "Database Analysts",
    "Digital Product Managers",
    "UX/UI Designers",
    "Digital Transformation Specialists",
    "Data Conversion Technicians",
  ];

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section id="digital" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-20 w-full h-full px-20">
        {/* Left: Content */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={staggerContainer}
          className="flex-1 max-w-xl"
        >
          <motion.div variants={staggerItem} className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
            Digital Transformation
          </motion.div>

          {/* SPACE */}
          <div className="h-6" />

          <motion.h2
            variants={staggerItem}
            className="text-5xl lg:text-7xl font-bold text-[var(--text-primary)] leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Tobago <span className="text-blue-600">Online</span>
          </motion.h2>

          {/* SPACE */}
          <div className="h-10" />

          <motion.p variants={staggerItem} className="text-xl text-[var(--text-secondary)] leading-relaxed">
            Transitioning the entire Tobago public service, government departments,
            private businesses, and homes from analog to digital operations.
          </motion.p>

          {/* SPACE */}
          <div className="h-16" />

          {/* Job count */}
          <motion.div variants={staggerItem}>
            <div
              className="text-8xl font-bold text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              +<CountUp end={400} duration={2.5} isActive={isActive} className="" />
            </div>
            
            {/* SPACE */}
            <div className="h-5" />
            
            <div className="text-2xl text-[var(--text-primary)] font-medium">
              Digital Jobs Created
            </div>
          </motion.div>

          {/* SPACE */}
          <div className="h-12" />

          {/* Roles */}
          <motion.div variants={staggerItem}>
            <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider">
              Roles Include
            </div>
            
            {/* SPACE */}
            <div className="h-4" />
            
            <ul className="space-y-2">
              {roles.map((role) => (
                <li key={role} className="text-lg text-[var(--text-secondary)]">
                  • {role}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SPACE */}
          <div className="h-10" />

          <motion.p variants={staggerItem} className="text-sm text-[var(--text-muted)]">
            Executed by E-IDCOT on behalf of the Office of the Chief Secretary
          </motion.p>
        </motion.div>

        {/* Right: Large Image */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={slideInRight}
          className="flex-shrink-0 relative w-full lg:w-[450px] h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&h=1000&fit=crop"
            alt="Digital technology"
            fill
            className="object-cover"
          />
          {/* Subtle gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
          {/* Initiative label */}
          <div className="absolute bottom-6 left-6 text-white">
            <div className="text-sm font-semibold tracking-widest uppercase opacity-80">
              Initiative 02
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

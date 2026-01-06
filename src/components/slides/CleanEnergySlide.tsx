"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

interface CleanEnergySlideProps {
  isActive?: boolean;
}

export default function CleanEnergySlide({ isActive = true }: CleanEnergySlideProps) {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section id="clean-energy" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-16 w-full h-full px-16">
        {/* Left: Large Image */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={slideInLeft}
          className="flex-shrink-0 relative w-full lg:w-[380px] h-[320px] lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&h=1000&fit=crop"
            alt="Solar panels installation"
            fill
            className="object-cover"
          />
          {/* Subtle gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
          {/* Initiative label */}
          <div className="absolute bottom-5 left-5 text-white">
            <div className="text-sm font-semibold tracking-widest uppercase opacity-80">
              Clean Energy
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={staggerContainer}
          className="flex-1 max-w-lg"
        >
          <motion.div variants={staggerItem} className="text-emerald-600 font-semibold text-base tracking-wide uppercase">
            Clean Energy Transition
          </motion.div>

          {/* SPACE */}
          <div className="h-4" />

          <motion.h2
            variants={staggerItem}
            className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Powering Tobago's{" "}
            <span className="text-emerald-600">Green Future</span>
          </motion.h2>

          {/* SPACE */}
          <div className="h-6" />

          <motion.p variants={staggerItem} className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Incentivizing businesses and public buildings to transition to solar panels,
            solar home systems, and energy-efficient infrastructure.
          </motion.p>

          {/* SPACE */}
          <div className="h-8" />

          {/* Job impacts - 3 columns */}
          <motion.div variants={staggerItem} className="flex gap-8">
            <div>
              <div
                className="text-3xl font-bold text-[var(--text-primary)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                +<CountUp end={400} duration={2} isActive={isActive} className="" />
              </div>
              <div className="h-2" />
              <div className="text-sm font-semibold text-[var(--text-primary)]">
                Solar Incentive Jobs
              </div>
              <div className="h-1" />
              <div className="text-base text-[var(--text-secondary)]">
                Manufacturing, installation
              </div>
            </div>

            <div>
              <div
                className="text-3xl font-bold text-[var(--text-primary)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                +<CountUp end={400} duration={2} delay={200} isActive={isActive} className="" />
              </div>
              <div className="h-2" />
              <div className="text-sm font-semibold text-[var(--text-primary)]">
                Public Building Jobs
              </div>
              <div className="h-1" />
              <div className="text-base text-[var(--text-secondary)]">
                Installation, maintenance
              </div>
            </div>

            <div>
              <div
                className="text-3xl font-bold text-[var(--text-primary)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                +<CountUp end={200} duration={2} delay={400} isActive={isActive} className="" />
              </div>
              <div className="h-2" />
              <div className="text-sm font-semibold text-[var(--text-primary)]">
                Green Transportation
              </div>
              <div className="h-1" />
              <div className="text-base text-[var(--text-secondary)]">
                E-busses and charging stations
              </div>
            </div>
          </motion.div>

          {/* SPACE */}
          <div className="h-8" />

          {/* Total */}
          <motion.div variants={staggerItem}>
            <span className="text-2xl font-bold text-[var(--text-primary)]">
              Total Impact:{" "}
            </span>
            <span className="text-2xl font-bold text-emerald-600">
              <CountUp end={1000} duration={2.5} delay={600} isActive={isActive} separator="," className="" /> Jobs
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

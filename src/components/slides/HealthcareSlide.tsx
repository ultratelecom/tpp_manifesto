"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HealthcareSlide() {
  const initiatives = [
    { title: "Healthcare Infrastructure", description: "Modernized hospitals, clinics, diagnostic capacity" },
    { title: "Digital Health", description: "Patient records, telemedicine, remote monitoring" },
    { title: "Workforce Development", description: "Training, leadership, professional growth" },
    { title: "Prevention & Wellness", description: "Chronic disease, mental health, nutrition" },
  ];

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
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
    <section id="healthcare" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-16 w-full h-full px-16">
        {/* Left: Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex-1 max-w-lg"
        >
          <motion.div variants={staggerItem} className="text-red-600 font-semibold text-base tracking-wide uppercase">
            Policy Focus
          </motion.div>

          {/* SPACE */}
          <div className="h-4" />

          <motion.h2
            variants={staggerItem}
            className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Wellness & <span className="text-red-600">Healthcare</span>
          </motion.h2>

          {/* SPACE */}
          <div className="h-6" />

          <motion.p variants={staggerItem} className="text-lg text-[var(--text-secondary)] leading-relaxed">
            A modern, efficient healthcare system ensuring high-quality, 
            compassionate care for all Tobagonians
          </motion.p>

          {/* SPACE */}
          <div className="h-8" />

          {/* Stats side by side */}
          <motion.div variants={staggerItem} className="flex gap-12">
            <div>
              <div
                className="text-4xl font-bold text-red-600"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                70 yrs
              </div>
              <div className="h-2" />
              <div className="text-base font-semibold text-[var(--text-primary)]">
                Female HALE Target
              </div>
              <div className="h-1" />
              <div className="text-sm text-[var(--text-muted)]">
                by 2045
              </div>
            </div>

            <div>
              <div
                className="text-4xl font-bold text-[var(--text-primary)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                -75%
              </div>
              <div className="h-2" />
              <div className="text-base font-semibold text-[var(--text-primary)]">
                Wait Time Reduction
              </div>
              <div className="h-1" />
              <div className="text-sm text-[var(--text-muted)]">
                by 2035
              </div>
            </div>
          </motion.div>

          {/* SPACE */}
          <div className="h-10" />

          {/* Key initiatives */}
          <motion.div variants={staggerItem} className="grid grid-cols-2 gap-4">
            {initiatives.map((item) => (
              <div key={item.title}>
                <h3 className="text-sm font-bold text-red-600">
                  {item.title}
                </h3>
                
                {/* SPACE */}
                <div className="h-1" />
                
                <p className="text-xs text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Large Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideInRight}
          className="flex-shrink-0 relative w-full lg:w-[380px] h-[320px] lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&h=1000&fit=crop"
            alt="Healthcare professional with patient"
            fill
            className="object-cover"
          />
          {/* Subtle gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
          {/* Label */}
          <div className="absolute bottom-5 left-5 text-white">
            <div className="text-xs font-semibold tracking-widest uppercase opacity-80">
              Healthcare Excellence
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


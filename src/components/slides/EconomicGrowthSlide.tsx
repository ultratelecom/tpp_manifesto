"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

interface EconomicGrowthSlideProps {
  isActive?: boolean;
}

export default function EconomicGrowthSlide({ isActive = true }: EconomicGrowthSlideProps) {
  const initiatives = [
    { title: "Public-Private Partnerships", description: "Leveraging resources and expertise" },
    { title: "Local Entrepreneurship", description: "Business incubators and funding" },
    { title: "Economic Diversification", description: "Agriculture, tech, renewable energy" },
    { title: "Export Enhancement", description: "Access to international markets" },
    { title: "Tobago Development Fund", description: "Off-budget financing for business development and major government projects" },
  ];

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section id="economic-growth" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-16 w-full h-full px-16">
        {/* Left: Large Image */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={slideInLeft}
          className="flex-shrink-0 relative w-full lg:w-[400px] h-[350px] lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&h=1000&fit=crop"
            alt="Modern business district"
            fill
            className="object-cover"
          />
          {/* Subtle gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
          {/* Label */}
          <div className="absolute bottom-6 left-6 text-white">
            <div className="text-sm font-semibold tracking-widest uppercase opacity-80">
              Pathways to Prosperity
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={staggerContainer}
          className="flex-1 max-w-xl"
        >
          <motion.div variants={staggerItem} className="text-[var(--tpp-blue)] font-semibold text-lg tracking-wide uppercase">
            Policy Focus
          </motion.div>

          {/* SPACE */}
          <div className="h-4" />

          <motion.h2
            variants={staggerItem}
            className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Economic <span className="text-[var(--tpp-blue)]">Growth</span>
          </motion.h2>

          {/* SPACE */}
          <div className="h-6" />

          <motion.p variants={staggerItem} className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Sustainable growth pathways designed around Tobago's values, 
            market needs, and eight key capital investment categories.
          </motion.p>

          {/* SPACE */}
          <div className="h-10" />

          {/* GDP Targets */}
          <motion.div variants={staggerItem} className="flex gap-12">
            <div>
              <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider">
                GDP Per Capita 2035
              </div>
              
              {/* SPACE */}
              <div className="h-3" />
              
              <div
                className="text-4xl font-bold text-[var(--tpp-blue)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                $<CountUp end={10000} duration={2.5} isActive={isActive} separator="," className="" /> USD
              </div>
            </div>

            <div>
              <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider">
                GDP Per Capita 2045
              </div>
              
              {/* SPACE */}
              <div className="h-3" />
              
              <div
                className="text-4xl font-bold text-[var(--text-primary)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                $<CountUp end={20000} duration={2.5} delay={300} isActive={isActive} separator="," className="" /> USD
              </div>
            </div>
          </motion.div>

          {/* SPACE */}
          <div className="h-10" />

          {/* Key initiatives - now 5 items */}
          <motion.div variants={staggerItem} className="space-y-4">
            {initiatives.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="text-[var(--tpp-blue)] mt-1">•</span>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="text-base text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

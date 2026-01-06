"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

interface PublicServiceSlideProps {
  isActive?: boolean;
}

export default function PublicServiceSlide({ isActive = true }: PublicServiceSlideProps) {
  const programmes = [
    { title: "RESET Tobago", description: "Reforming for efficiency & transparency" },
    { title: "Digital Transformation", description: "E-governance and online services" },
    { title: "Tobago Online", description: "Citizen-centric digital platform" },
    { title: "Public Service Academy", description: "Continuous professional development" },
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
    <section id="public-service" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-20 w-full h-full px-20">
        {/* Left: Content */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={staggerContainer}
          className="flex-1 max-w-xl"
        >
          <motion.div variants={staggerItem} className="text-purple-600 font-semibold text-lg tracking-wide uppercase">
            Policy Focus
          </motion.div>

          {/* SPACE */}
          <div className="h-6" />

          <motion.h2
            variants={staggerItem}
            className="text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Public Service <span className="text-purple-600">Modernization</span>
          </motion.h2>

          {/* SPACE */}
          <div className="h-10" />

          <motion.p variants={staggerItem} className="text-xl text-[var(--text-secondary)] leading-relaxed">
            An efficient, effective, and accountable public service that maximizes 
            resources, offers high-quality services, and operates transparently.
          </motion.p>

          {/* SPACE */}
          <div className="h-16" />

          {/* Efficiency Targets */}
          <motion.div variants={staggerItem} className="flex gap-12">
            <div>
              <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider">
                Efficiency by 2035
              </div>
              
              {/* SPACE */}
              <div className="h-3" />
              
              <div
                className="text-5xl font-bold text-purple-600"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <CountUp end={70} suffix="%" duration={2} isActive={isActive} className="" />
              </div>
            </div>

            <div>
              <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider">
                Efficiency by 2045
              </div>
              
              {/* SPACE */}
              <div className="h-3" />
              
              <div
                className="text-5xl font-bold text-[var(--text-primary)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <CountUp end={95} suffix="%" duration={2} delay={200} isActive={isActive} className="" />
              </div>
            </div>
          </motion.div>

          {/* SPACE */}
          <div className="h-12" />

          {/* Transaction time reduction */}
          <motion.div variants={staggerItem}>
            <div className="text-lg font-semibold text-[var(--text-primary)]">
              Transaction Time Reduction
            </div>
            
            {/* SPACE */}
            <div className="h-3" />
            
            <div className="text-base text-[var(--text-secondary)]">
              <span className="font-bold text-purple-600">-<CountUp end={50} suffix="%" duration={1.5} delay={400} isActive={isActive} className="" /></span> by 2027 • 
              <span className="font-bold text-purple-600"> -<CountUp end={75} suffix="%" duration={1.5} delay={600} isActive={isActive} className="" /></span> by 2030
            </div>
          </motion.div>

          {/* SPACE */}
          <div className="h-12" />

          {/* Key programmes */}
          <motion.div variants={staggerItem} className="grid grid-cols-2 gap-4">
            {programmes.map((item) => (
              <div key={item.title}>
                <h3 className="text-base font-bold text-purple-600">
                  {item.title}
                </h3>
                
                {/* SPACE */}
                <div className="h-1" />
                
                <p className="text-base text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Large Image */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={slideInRight}
          className="flex-shrink-0 relative w-full lg:w-[450px] h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="https://i0.wp.com/truveris.com/wp-content/uploads/2024/03/glp-1-news-roundup-resource-center.png?fit=900,1000&ssl=1"
            alt="Government service and teamwork"
            fill
            className="object-cover"
          />
          {/* Subtle gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
          {/* Label */}
          <div className="absolute bottom-6 left-6 text-white">
            <div className="text-sm font-semibold tracking-widest uppercase opacity-80">
              RESET Tobago
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

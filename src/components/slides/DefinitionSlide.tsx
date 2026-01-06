"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

interface DefinitionSlideProps {
  isActive?: boolean;
}

export default function DefinitionSlide({ isActive = true }: DefinitionSlideProps) {
  const pillars = [
    {
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=400&fit=crop",
      title: "Minimum Living Wage",
      description: "At least $5,500/month by 2027",
      subtext: "This will apply to CEPEP & URP workers",
      subtext2: "Also applies to regularized 10 ON/OFF workers",
    },
    {
      image: "https://images.pexels.com/photos/4559593/pexels-photo-4559593.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      title: "Continuous Employment",
      description: "Stable, ongoing work without interruption",
      subtext: "",
    },
    {
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=400&fit=crop",
      title: "Minimum 5-year Contracts",
      description: "Long-term security, not temporary contracts",
      subtext: "",
    },
  ];

  const targets = [
    { sector: "Private Sector Jobs", icon: "🏢", by2030: 25, by2035: 35 },
    { sector: "Public Sector Jobs", icon: "🏛️", by2030: 15, by2035: 20 },
    { sector: "Youth Employment", icon: "👥", by2030: 15, by2035: 20 },
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

  const rowItem = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section id="definition" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-20 py-12">
        {/* Section label */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-[var(--tpp-blue)] font-semibold text-lg tracking-wide uppercase"
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
          Sustainable & Meaningful{" "}
          <span className="text-[var(--tpp-blue)]">Job Creation</span>
        </motion.h2>

        {/* SPACE */}
        <div className="h-6" />

        {/* Subtitle */}
        <motion.p
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-lg lg:text-xl text-[var(--text-secondary)] text-center max-w-3xl"
        >
          A sustainable, meaningful job meets a minimum wage threshold and offers continuous employment.
        </motion.p>

        {/* SPACE */}
        <div className="h-12" />

        {/* Primary Targets Table */}
        <motion.div
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={fadeIn}
          className="w-full max-w-4xl bg-gray-50 rounded-2xl p-8"
        >
          {/* Table header */}
          <div className="grid grid-cols-[1fr_120px_120px] gap-6 items-center mb-6">
            <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider">
              Our commitment to job growth
            </div>
            <div className="text-center">
              <span className="text-xl font-bold text-[var(--tpp-blue)]" style={{ fontFamily: "var(--font-heading)" }}>
                By 2030
              </span>
            </div>
            <div className="text-center">
              <span className="text-xl font-bold text-[var(--text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                By 2035
              </span>
            </div>
          </div>

          {/* Table rows */}
          <motion.div
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={staggerContainer}
            className="space-y-4"
          >
            {targets.map((target, idx) => (
              <motion.div
                key={target.sector}
                variants={rowItem}
                className="grid grid-cols-[1fr_120px_120px] gap-6 items-center"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{target.icon}</span>
                  <span className="text-base font-semibold text-[var(--text-primary)]">
                    {target.sector}
                  </span>
                </div>
                <div className="text-center">
                  <span className="text-3xl font-bold text-[var(--tpp-blue)]" style={{ fontFamily: "var(--font-heading)" }}>
                    <CountUp end={target.by2030} suffix="%" duration={2} delay={idx * 150} isActive={isActive} className="" />
                  </span>
                </div>
                <div className="text-center">
                  <span className="text-3xl font-bold text-[var(--text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                    <CountUp end={target.by2035} suffix="%" duration={2} delay={idx * 150 + 300} isActive={isActive} className="" />
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* SPACE */}
        <div className="h-12" />

        {/* Three pillars with images */}
        <motion.div 
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={pillarItem}
              className="flex flex-col items-center text-center"
            >
              {/* Circular image with blue tint overlay */}
              <motion.div 
                variants={imageScale}
                className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg"
              >
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[var(--tpp-blue)] opacity-20" />
              </motion.div>
              
              {/* SPACE */}
              <div className="h-6" />
              
              <h3
                className="text-lg font-bold text-[var(--tpp-blue)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {pillar.title}
              </h3>
              
              {/* SPACE */}
              <div className="h-2" />
              
              <p className="text-base text-[var(--text-secondary)]">
                {pillar.description}
              </p>

              {pillar.subtext && (
                <>
                  <div className="h-2" />
                  <p className="text-sm text-[var(--text-muted)] italic">
                    {pillar.subtext}
                  </p>
                </>
              )}
              {pillar.subtext2 && (
                <>
                  <div className="h-1" />
                  <p className="text-sm text-[var(--text-muted)] italic">
                    {pillar.subtext2}
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

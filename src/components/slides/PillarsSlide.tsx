"use client";

import { motion } from "framer-motion";

export default function PillarsSlide() {
  const pillars = [
    {
      number: "I",
      title: "Development Philosophy",
      elements: [
        "Human-centred development",
        "Sustainable growth",
        "Inclusive prosperity",
        "Innovation-driven",
        "Cultural preservation",
      ],
      color: "text-blue-600",
    },
    {
      number: "II",
      title: "Social Contract",
      elements: [
        "Transparency & accountability",
        "Citizen engagement",
        "Environmental stewardship",
        "Education investment",
        "Community collaboration",
      ],
      color: "text-teal-600",
    },
    {
      number: "III",
      title: "Strategic Policy Agenda",
      elements: [
        "5 Strategic Focus Areas",
        "Evidence-based policy",
        "Regular review & adaptation",
        "Cross-sectoral coordination",
        "National & international alignment",
      ],
      color: "text-purple-600",
    },
    {
      number: "IV",
      title: "Grand Vision & Priorities",
      elements: [
        "21 Development Priorities",
        "22 Performance Benchmarks",
        "143 Targets & Indicators",
        "Weighted priorities",
        "Regional development goals",
      ],
      color: "text-amber-600",
    },
    {
      number: "V",
      title: "Implementation Logic",
      elements: [
        "Pre-Planning & Governance",
        "Core Planning & Goals",
        "Program Implementation",
        "Monitoring & Evaluation",
        "Continuous improvement",
      ],
      color: "text-emerald-600",
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
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const pillarItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section id="pillars" className="slide bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-12 py-16">
        {/* Main title */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] text-center leading-tight max-w-5xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Towards the Greatest Little Island on the Planet
        </motion.h2>

        {/* SPACE */}
        <div className="h-4" />

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-xl lg:text-2xl text-[var(--tpp-blue)] font-semibold text-center"
        >
          A Pathway to Economic Growth and Prosperity
        </motion.p>

        {/* SPACE */}
        <div className="h-12" />

        {/* Subtitle */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-lg text-[var(--text-secondary)] text-center max-w-3xl"
        >
          Our development is guided by five fundamental pillars
        </motion.p>

        {/* SPACE */}
        <div className="h-16" />

        {/* Five Pillars */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-5 gap-6 w-full max-w-7xl"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.number}
              variants={pillarItem}
              className="flex flex-col items-center text-center"
            >
              {/* Pillar number */}
              <div
                className={`text-4xl font-bold ${pillar.color}`}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {pillar.number}
              </div>

              {/* SPACE */}
              <div className="h-3" />

              {/* Pillar title */}
              <h3
                className="text-base font-bold text-[var(--text-primary)] leading-tight h-12 flex items-center"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {pillar.title}
              </h3>

              {/* SPACE */}
              <div className="h-4" />

              {/* Divider */}
              <div className={`w-12 h-1 rounded-full bg-current ${pillar.color}`} />

              {/* SPACE */}
              <div className="h-4" />

              {/* Key elements */}
              <ul className="space-y-2">
                {pillar.elements.map((element, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-[var(--text-secondary)] leading-snug"
                  >
                    {element}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* SPACE */}
        <div className="h-12" />

        {/* Footer tagline */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
          className="text-sm text-[var(--text-muted)] text-center tracking-wide uppercase"
        >
          Tobago People's Party • Policy Framework
        </motion.p>
      </div>
    </section>
  );
}


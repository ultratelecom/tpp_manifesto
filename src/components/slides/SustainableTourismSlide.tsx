"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SustainableTourismSlide() {
  const stats = [
    { value: "+25%", label: "Long-Stay", sublabel: "by 2030" },
    { value: "+60%", label: "Short-Stay", sublabel: "by 2035" },
    { value: "1,500", label: "5★ Rooms", sublabel: "by 2045" },
  ];

  const pillars = [
    {
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=400&fit=crop",
      title: "Infrastructure",
      items: [
        "Pigeon Point Heritage Park",
        "Store Bay Beach Facility",
      ],
    },
    {
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=400&fit=crop",
      title: "Luxury Hotels",
      items: [
        "Marriott Resort",
        "Hilton International",
        "Dollar Tree Resort",
      ],
    },
    {
      image: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=400&h=400&fit=crop",
      title: "Community Tourism",
      items: [
        "Buccoo Beach Facility",
        "Delaford Beach Facility",
        "Louis D'Or Beach Facility",
        "Grange Beach Facility",
      ],
    },
    {
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop",
      title: "Eco-Tourism",
      items: [
        "Roxborough nature trail",
        "Kings Bay Waterfall",
        "Argyle Waterfall",
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
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
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
    <section id="tourism" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-16 py-12">
        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-teal-600 font-semibold text-lg tracking-wide uppercase"
        >
          Policy Focus
        </motion.div>

        {/* SPACE */}
        <div className="h-4" />

        {/* Main heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-4xl lg:text-6xl font-bold text-[var(--text-primary)] text-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Sustainable <span className="text-teal-600">Tourism</span>
        </motion.h2>

        {/* SPACE */}
        <div className="h-6" />

        {/* Subtitle */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-lg text-[var(--text-secondary)] text-center max-w-3xl"
        >
          Building a world-class destination through community-based, 
          eco-conscious, and culturally rich experiences
        </motion.p>

        {/* SPACE */}
        <div className="h-3" />

        {/* GDP Target */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-base font-semibold text-teal-600 text-center"
        >
          Increase the contribution of tourism to 6% of GDP by 2030 and 8% of GDP by 2035
        </motion.p>

        {/* SPACE */}
        <div className="h-10" />

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex gap-12 lg:gap-20"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={scaleUp} className="text-center">
              <div
                className="text-4xl lg:text-5xl font-bold text-teal-600"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {stat.value}
              </div>
              
              {/* SPACE */}
              <div className="h-2" />
              
              <div className="text-base font-semibold text-[var(--text-primary)]">
                {stat.label}
              </div>
              
              {/* SPACE */}
              <div className="h-1" />
              
              <div className="text-xs text-[var(--text-muted)]">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* SPACE */}
        <div className="h-12" />

        {/* Four pillars with images and bullet points */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={cardItem}
              className="flex flex-col items-center"
            >
              {/* Square image with rounded corners */}
              <div className="relative w-[110px] h-[110px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-teal-600/10" />
              </div>
              
              {/* SPACE */}
              <div className="h-4" />
              
              <h3 className="text-base font-bold text-[var(--text-primary)] text-center">
                {pillar.title}
              </h3>
              
              {/* SPACE */}
              <div className="h-3" />
              
              {/* Bullet points */}
              <ul className="space-y-1 text-left w-full">
                {pillar.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-[var(--text-secondary)] leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-teal-600 mt-0.5">•</span>
                    <span>{item}</span>
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

"use client";

import Image from "next/image";

export default function FoodSecuritySlide() {
  const stats = [
    { value: "8%", label: "GDP from Agriculture", sublabel: "by 2045" },
    { value: "+40%", label: "Indigenous Crops", sublabel: "self-sufficiency" },
    { value: "+60%", label: "Fish Harvest", sublabel: "commercial increase" },
  ];

  const programmes = [
    "Mega Farm Programme",
    "Young Farmers Agripreneurship",
    "Tobago Agricultural Research Institute",
    "Agricultural Access Roads",
  ];

  return (
    <section id="food-security" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-20">
        {/* Section label */}
        <div className="text-green-700 font-semibold text-lg tracking-wide uppercase">
          Policy Focus
        </div>

        {/* SPACE */}
        <div className="h-6" />

        {/* Main heading */}
        <h2
          className="text-5xl lg:text-7xl font-bold text-[var(--text-primary)] text-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Food Security & <span className="text-green-700">Sovereignty</span>
        </h2>

        {/* SPACE */}
        <div className="h-8" />

        {/* Subtitle */}
        <p className="text-xl lg:text-2xl text-[var(--text-secondary)] text-center max-w-3xl">
          Developing targeted, adequate, and autonomous food production systems 
          for Tobago's residents and visitors
        </p>

        {/* SPACE */}
        <div className="h-16" />

        {/* Hero image */}
        <div className="relative w-full max-w-4xl h-[280px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3f32?w=1200&h=600&fit=crop"
            alt="Tropical agriculture"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-green-700/10" />
        </div>

        {/* SPACE */}
        <div className="h-16" />

        {/* Stats */}
        <div className="flex gap-16 lg:gap-24">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-5xl lg:text-6xl font-bold text-green-700"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {stat.value}
              </div>
              
              {/* SPACE */}
              <div className="h-3" />
              
              <div className="text-lg font-semibold text-[var(--text-primary)]">
                {stat.label}
              </div>
              
              {/* SPACE */}
              <div className="h-1" />
              
              <div className="text-sm text-[var(--text-muted)]">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* SPACE */}
        <div className="h-16" />

        {/* Key programmes */}
        <div className="flex flex-wrap justify-center gap-4">
          {programmes.map((prog) => (
            <span
              key={prog}
              className="text-sm text-green-700 font-medium"
            >
              {prog}
              {prog !== programmes[programmes.length - 1] && (
                <span className="text-[var(--text-muted)] ml-4">•</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}


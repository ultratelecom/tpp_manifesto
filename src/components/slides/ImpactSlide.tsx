"use client";

import Image from "next/image";

export default function ImpactSlide() {
  const sectors = [
    { 
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=400&fit=crop",
      label: "Clean Energy", 
      jobs: 400, 
      color: "#10B981",
      overlay: "bg-emerald-600"
    },
    { 
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop",
      label: "Digital", 
      jobs: 200, 
      color: "#3B82F6",
      overlay: "bg-blue-600"
    },
    { 
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=400&fit=crop",
      label: "Infrastructure", 
      jobs: 4275, 
      color: "#F59E0B",
      overlay: "bg-amber-600"
    },
  ];

  return (
    <section id="impact" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-20">
        {/* Big number */}
        <div
          className="text-[10rem] lg:text-[14rem] font-extrabold text-[var(--tpp-blue)] leading-none tracking-tighter"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          4,875<span className="text-[6rem] lg:text-[8rem]">+</span>
        </div>

        {/* SPACE */}
        <div className="h-16" />

        {/* Label */}
        <h2
          className="text-5xl lg:text-7xl font-bold text-[var(--text-primary)] text-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Jobs Created
        </h2>

        {/* SPACE */}
        <div className="h-8" />

        {/* Subtitle */}
        <p className="text-xl lg:text-2xl text-[var(--text-secondary)] text-center max-w-3xl">
          Across clean energy, digital transformation, and physical infrastructure
        </p>

        {/* SPACE */}
        <div className="h-24" />

        {/* Three sectors with images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full max-w-5xl">
          {sectors.map((sector) => (
            <div
              key={sector.label}
              className="flex flex-col items-center text-center"
            >
              {/* Circular image with color overlay - CENTERED */}
              <div className="relative w-36 h-36 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={sector.image}
                  alt={sector.label}
                  fill
                  className="object-cover"
                />
                {/* Color overlay */}
                <div className={`absolute inset-0 ${sector.overlay} opacity-30`} />
              </div>
              
              {/* SPACE */}
              <div className="h-8" />
              
              <div
                className="text-5xl font-bold"
                style={{ color: sector.color, fontFamily: "var(--font-heading)" }}
              >
                +{sector.jobs.toLocaleString()}
              </div>
              
              {/* SPACE */}
              <div className="h-4" />
              
              <div className="text-xl text-[var(--text-primary)] font-medium">
                {sector.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

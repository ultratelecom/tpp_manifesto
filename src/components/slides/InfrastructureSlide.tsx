"use client";

import Image from "next/image";

export default function InfrastructureSlide() {
  const initiatives = [
    {
      name: "1000 Homes",
      jobs: "3,000",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=400&fit=crop",
      description: "Service lots and dwelling units",
    },
    {
      name: "Tourism Upgrade",
      jobs: "100",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop",
      description: "Recreation sites, forts, trails",
    },
    {
      name: "Heritage Village",
      jobs: "175",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=400&fit=crop",
      description: "Cultural museum and theme park",
    },
    {
      name: "Build Tobago",
      jobs: "1,000+",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=400&fit=crop",
      description: "Roads, schools, community centers",
    },
  ];

  return (
    <section id="infrastructure" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-20">
        {/* Header */}
        <div className="text-amber-600 font-semibold text-lg tracking-wide uppercase text-center">
          Physical Infrastructure
        </div>

        {/* SPACE */}
        <div className="h-6" />

        <h2
          className="text-5xl lg:text-7xl font-bold text-[var(--text-primary)] text-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Building Tobago's <span className="text-amber-600">Foundation</span>
        </h2>

        {/* SPACE */}
        <div className="h-12" />

        {/* Total jobs */}
        <div className="text-center">
          <div
            className="text-7xl lg:text-8xl font-bold text-[var(--text-primary)]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            4,275+
          </div>
          
          {/* SPACE */}
          <div className="h-4" />
          
          <div className="text-2xl text-[var(--text-secondary)]">Total Jobs Created</div>
        </div>

        {/* SPACE */}
        <div className="h-20" />

        {/* Four initiatives with images */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-6xl">
          {initiatives.map((initiative) => (
            <div
              key={initiative.name}
              className="flex flex-col items-center text-center"
            >
              {/* Square image with rounded corners - CENTERED */}
              <div className="relative w-[180px] h-[180px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={initiative.image}
                  alt={initiative.name}
                  fill
                  className="object-cover"
                />
                {/* Subtle amber overlay */}
                <div className="absolute inset-0 bg-amber-600/10" />
              </div>
              
              {/* SPACE */}
              <div className="h-6" />
              
              <div
                className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                +{initiative.jobs}
              </div>
              
              {/* SPACE */}
              <div className="h-3" />
              
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                {initiative.name}
              </h3>
              
              {/* SPACE */}
              <div className="h-2" />
              
              <p className="text-sm text-[var(--text-secondary)]">
                {initiative.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

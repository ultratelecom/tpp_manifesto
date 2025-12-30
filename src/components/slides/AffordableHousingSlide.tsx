"use client";

import Image from "next/image";

export default function AffordableHousingSlide() {
  const programmes = [
    {
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=400&fit=crop",
      title: "Housing Trust",
      description: "Tobago Housing & Land Trust",
    },
    {
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=400&fit=crop",
      title: "Land for Landless",
      description: "Fully developed service lots",
    },
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      title: "Modular Housing",
      description: "Low-cost homeownership",
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop",
      title: "HOME Programme",
      description: "Home Ownership Made Easy",
    },
  ];

  return (
    <section id="housing" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-20">
        {/* Section label */}
        <div className="text-rose-600 font-semibold text-lg tracking-wide uppercase">
          Policy Focus
        </div>

        {/* SPACE */}
        <div className="h-6" />

        {/* Main heading */}
        <h2
          className="text-5xl lg:text-7xl font-bold text-[var(--text-primary)] text-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Affordable <span className="text-rose-600">Housing</span>
        </h2>

        {/* SPACE */}
        <div className="h-8" />

        {/* Subtitle */}
        <p className="text-xl lg:text-2xl text-[var(--text-secondary)] text-center max-w-3xl">
          A home for every Tobagonian — ensuring access to housing 
          that addresses current and future needs
        </p>

        {/* SPACE */}
        <div className="h-12" />

        {/* Investment & Coverage stats */}
        <div className="flex gap-16 lg:gap-24">
          <div className="text-center">
            <div
              className="text-6xl lg:text-7xl font-bold text-rose-600"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              15%
            </div>
            
            {/* SPACE */}
            <div className="h-3" />
            
            <div className="text-lg font-semibold text-[var(--text-primary)]">
              GDP Investment
            </div>
            
            {/* SPACE */}
            <div className="h-1" />
            
            <div className="text-sm text-[var(--text-muted)]">
              Annual 2026-2045
            </div>
          </div>

          <div className="text-center">
            <div
              className="text-6xl lg:text-7xl font-bold text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              75%
            </div>
            
            {/* SPACE */}
            <div className="h-3" />
            
            <div className="text-lg font-semibold text-[var(--text-primary)]">
              Coverage by 2045
            </div>
            
            {/* SPACE */}
            <div className="h-1" />
            
            <div className="text-sm text-[var(--text-muted)]">
              Eligible households
            </div>
          </div>
        </div>

        {/* SPACE */}
        <div className="h-20" />

        {/* Four programmes with images */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-5xl">
          {programmes.map((prog) => (
            <div key={prog.title} className="flex flex-col items-center text-center">
              {/* Square image with rounded corners */}
              <div className="relative w-[150px] h-[150px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-rose-600/10" />
              </div>
              
              {/* SPACE */}
              <div className="h-6" />
              
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                {prog.title}
              </h3>
              
              {/* SPACE */}
              <div className="h-2" />
              
              <p className="text-sm text-[var(--text-secondary)]">
                {prog.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


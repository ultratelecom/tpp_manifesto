"use client";

import Image from "next/image";

export default function PublicInfrastructureSlide() {
  const initiatives = [
    {
      image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=400&h=400&fit=crop",
      title: "Transportation",
      description: "Roads, bypasses, connectors",
    },
    {
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=400&fit=crop",
      title: "Transit Hubs",
      description: "Scarborough, Mason Hall, Roxborough",
    },
    {
      image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=400&h=400&fit=crop",
      title: "Maritime",
      description: "Cruise terminal, marina",
    },
    {
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=400&fit=crop",
      title: "Urban Growth",
      description: "City of Scarborough expansion",
    },
  ];

  const projects = [
    "Cruise Ship Terminal",
    "Marina & Maritime Entryway",
    "Multi-Level Parkade",
    "Transit Hub & Commercial Centre",
  ];

  return (
    <section id="public-infrastructure" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-20">
        {/* Section label */}
        <div className="text-orange-600 font-semibold text-lg tracking-wide uppercase">
          Policy Focus
        </div>

        {/* SPACE */}
        <div className="h-6" />

        {/* Main heading */}
        <h2
          className="text-5xl lg:text-7xl font-bold text-[var(--text-primary)] text-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Public <span className="text-orange-600">Infrastructure</span>
        </h2>

        {/* SPACE */}
        <div className="h-8" />

        {/* Investment headline */}
        <div className="text-center">
          <div
            className="text-6xl lg:text-7xl font-bold text-orange-600"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            30% GDP
          </div>
          
          {/* SPACE */}
          <div className="h-4" />
          
          <div className="text-xl text-[var(--text-secondary)]">
            Annual Investment • 2026-2045
          </div>
        </div>

        {/* SPACE */}
        <div className="h-16" />

        {/* Four initiatives with images */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-5xl">
          {initiatives.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center">
              {/* Square image with rounded corners */}
              <div className="relative w-[150px] h-[150px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-orange-600/10" />
              </div>
              
              {/* SPACE */}
              <div className="h-6" />
              
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                {item.title}
              </h3>
              
              {/* SPACE */}
              <div className="h-2" />
              
              <p className="text-sm text-[var(--text-secondary)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* SPACE */}
        <div className="h-16" />

        {/* Major PPP projects */}
        <div className="text-center">
          <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider mb-4">
            Major PPP Projects
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {projects.map((proj) => (
              <span key={proj} className="text-base font-medium text-[var(--text-primary)]">
                {proj}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


"use client";

import Image from "next/image";

export default function ConstitutionalAutonomySlide() {
  const pillars = [
    { title: "Legislative Authority", description: "Full control over Tobago affairs" },
    { title: "Fiscal Autonomy", description: "Generate and manage own revenue" },
    { title: "Revenue Sharing", description: "Fair share of national income" },
    { title: "Participatory Governance", description: "Direct voice in decisions" },
  ];

  return (
    <section id="autonomy" className="slide bg-white relative overflow-hidden">
      {/* Background image - blurred with white overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1920&h=1080&fit=crop"
          alt="Government building"
          fill
          className="object-cover blur-xl scale-110"
        />
        <div className="absolute inset-0 bg-white/90" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-20">
        {/* Section label */}
        <div className="text-[var(--tpp-blue)] font-semibold text-lg tracking-wide uppercase">
          Policy Focus
        </div>

        {/* SPACE */}
        <div className="h-6" />

        {/* Main heading */}
        <h2
          className="text-5xl lg:text-7xl font-bold text-[var(--text-primary)] text-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Constitutional <span className="text-[var(--tpp-blue)]">Autonomy</span>
        </h2>

        {/* SPACE */}
        <div className="h-8" />

        {/* Subtitle */}
        <p className="text-xl lg:text-2xl text-[var(--text-secondary)] text-center max-w-3xl">
          Self-governance for Tobago's future — greater control over our own affairs
        </p>

        {/* SPACE */}
        <div className="h-20" />

        {/* Timeline */}
        <div className="flex items-center justify-center gap-8 lg:gap-16">
          {/* 2026 */}
          <div className="text-center">
            <div
              className="text-6xl lg:text-8xl font-bold text-[var(--tpp-blue)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              2026
            </div>
            
            {/* SPACE */}
            <div className="h-4" />
            
            <div className="text-xl font-semibold text-[var(--text-primary)]">
              Self-Government Act
            </div>
            
            {/* SPACE */}
            <div className="h-2" />
            
            <div className="text-base text-[var(--text-secondary)]">
              Constitutional Amendment Proclaimed
            </div>
          </div>

          {/* Arrow */}
          <div className="text-4xl text-[var(--tpp-blue)]">→</div>

          {/* 2028 */}
          <div className="text-center">
            <div
              className="text-6xl lg:text-8xl font-bold text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              2028
            </div>
            
            {/* SPACE */}
            <div className="h-4" />
            
            <div className="text-xl font-semibold text-[var(--text-primary)]">
              New THA Act
            </div>
            
            {/* SPACE */}
            <div className="h-2" />
            
            <div className="text-base text-[var(--text-secondary)]">
              Fully Functional Assembly
            </div>
          </div>
        </div>

        {/* SPACE */}
        <div className="h-20" />

        {/* Four pillars */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-5xl">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="flex flex-col items-center text-center">
              <h3 className="text-lg font-bold text-[var(--tpp-blue)]">
                {pillar.title}
              </h3>
              
              {/* SPACE */}
              <div className="h-3" />
              
              <p className="text-sm text-[var(--text-secondary)]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


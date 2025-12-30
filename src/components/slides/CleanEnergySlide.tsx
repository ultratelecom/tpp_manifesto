"use client";

import Image from "next/image";

export default function CleanEnergySlide() {
  return (
    <section id="clean-energy" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-20 w-full h-full px-20">
        {/* Left: Large Image */}
        <div className="flex-shrink-0 relative w-full lg:w-[450px] h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&h=1000&fit=crop"
            alt="Solar panels installation"
            fill
            className="object-cover"
          />
          {/* Subtle gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
          {/* Initiative label */}
          <div className="absolute bottom-6 left-6 text-white">
            <div className="text-sm font-semibold tracking-widest uppercase opacity-80">
              Initiative 01
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex-1 max-w-xl">
          <div className="text-emerald-600 font-semibold text-lg tracking-wide uppercase">
            Clean Energy Transition
          </div>

          {/* SPACE */}
          <div className="h-6" />

          <h2
            className="text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Powering Tobago's{" "}
            <span className="text-emerald-600">Green Future</span>
          </h2>

          {/* SPACE */}
          <div className="h-10" />

          <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
            Incentivizing businesses and public buildings to transition to solar panels,
            solar home systems, and energy-efficient infrastructure.
          </p>

          {/* SPACE */}
          <div className="h-16" />

          {/* Job impact */}
          <div>
            <div
              className="text-6xl font-bold text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              +300
            </div>
            
            {/* SPACE */}
            <div className="h-4" />
            
            <div className="text-xl font-semibold text-[var(--text-primary)]">
              Solar Incentive Jobs
            </div>
            
            {/* SPACE */}
            <div className="h-2" />
            
            <div className="text-base text-[var(--text-secondary)]">
              Manufacturing, installation, maintenance
            </div>
          </div>

          {/* SPACE */}
          <div className="h-12" />

          <div>
            <div
              className="text-6xl font-bold text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              +100
            </div>
            
            {/* SPACE */}
            <div className="h-4" />
            
            <div className="text-xl font-semibold text-[var(--text-primary)]">
              Public Building Jobs
            </div>
            
            {/* SPACE */}
            <div className="h-2" />
            
            <div className="text-base text-[var(--text-secondary)]">
              Installation and maintenance
            </div>
          </div>

          {/* SPACE */}
          <div className="h-12" />

          {/* Total */}
          <div>
            <span className="text-3xl font-bold text-[var(--text-primary)]">
              Total Impact:{" "}
            </span>
            <span className="text-3xl font-bold text-emerald-600">400 Jobs</span>
          </div>
        </div>
      </div>
    </section>
  );
}

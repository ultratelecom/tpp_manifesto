"use client";

import Image from "next/image";

export default function DigitalSlide() {
  const roles = [
    "Digital Content Creators",
    "Database Analysts",
    "Digital Product Managers",
    "UX/UI Designers",
    "Digital Transformation Specialists",
    "Data Conversion Technicians",
  ];

  return (
    <section id="digital" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-20 w-full h-full px-20">
        {/* Left: Content */}
        <div className="flex-1 max-w-xl">
          <div className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
            Digital Transformation
          </div>

          {/* SPACE */}
          <div className="h-6" />

          <h2
            className="text-5xl lg:text-7xl font-bold text-[var(--text-primary)] leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Tobago <span className="text-blue-600">Online</span>
          </h2>

          {/* SPACE */}
          <div className="h-10" />

          <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
            Transitioning the entire Tobago public service, government departments,
            private businesses, and homes from analog to digital operations.
          </p>

          {/* SPACE */}
          <div className="h-16" />

          {/* Job count */}
          <div>
            <div
              className="text-8xl font-bold text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              +200
            </div>
            
            {/* SPACE */}
            <div className="h-5" />
            
            <div className="text-2xl text-[var(--text-primary)] font-medium">
              Digital Jobs Created
            </div>
          </div>

          {/* SPACE */}
          <div className="h-12" />

          {/* Roles */}
          <div>
            <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider">
              Roles Include
            </div>
            
            {/* SPACE */}
            <div className="h-4" />
            
            <div className="text-lg text-[var(--text-secondary)] leading-loose">
              {roles.join(" • ")}
            </div>
          </div>

          {/* SPACE */}
          <div className="h-10" />

          <p className="text-sm text-[var(--text-muted)]">
            Executed by E-IDCOT on behalf of the Office of the Chief Secretary
          </p>
        </div>

        {/* Right: Large Image */}
        <div className="flex-shrink-0 relative w-full lg:w-[450px] h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&h=1000&fit=crop"
            alt="Digital technology"
            fill
            className="object-cover"
          />
          {/* Subtle gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
          {/* Initiative label */}
          <div className="absolute bottom-6 left-6 text-white">
            <div className="text-sm font-semibold tracking-widest uppercase opacity-80">
              Initiative 02
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

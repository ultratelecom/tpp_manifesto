"use client";

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
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-24 w-full h-full px-20">
        {/* Left: Content */}
        <div className="flex-1 max-w-2xl">
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
          <div className="h-16" />

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

        {/* Right: Visual */}
        <div className="flex-shrink-0 flex flex-col items-center justify-center">
          <div className="text-[180px]">💻</div>
          
          {/* SPACE */}
          <div className="h-8" />
          
          <div className="text-lg text-blue-600 font-semibold tracking-widest uppercase">
            Initiative 02
          </div>
        </div>
      </div>
    </section>
  );
}

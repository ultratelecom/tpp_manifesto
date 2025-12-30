"use client";

export default function CleanEnergySlide() {
  return (
    <section id="clean-energy" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-24 w-full h-full px-20">
        {/* Left: Visual */}
        <div className="flex-shrink-0 flex flex-col items-center justify-center">
          <div className="text-[180px]">☀️</div>
          
          {/* SPACE */}
          <div className="h-8" />
          
          <div className="text-lg text-emerald-600 font-semibold tracking-widest uppercase">
            Initiative 01
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex-1 max-w-2xl">
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

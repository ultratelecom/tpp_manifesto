"use client";

export default function InfrastructureSlide() {
  const initiatives = [
    {
      name: "1000 Homes",
      jobs: "3,000",
      icon: "🏠",
      description: "Service lots and dwelling units",
    },
    {
      name: "Tourism Upgrade",
      jobs: "100",
      icon: "🏝️",
      description: "Recreation sites, forts, trails",
    },
    {
      name: "Heritage Village",
      jobs: "175",
      icon: "🎭",
      description: "Cultural museum and theme park",
    },
    {
      name: "Build Tobago",
      jobs: "1,000+",
      icon: "🚧",
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
        <div className="h-16" />

        {/* Total jobs */}
        <div className="flex items-center gap-8">
          <span className="text-7xl">🏗️</span>
          <div>
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
        </div>

        {/* SPACE */}
        <div className="h-24" />

        {/* Four initiatives */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-20 w-full max-w-6xl">
          {initiatives.map((initiative) => (
            <div
              key={initiative.name}
              className="text-center"
            >
              <div className="text-6xl">{initiative.icon}</div>
              
              {/* SPACE */}
              <div className="h-6" />
              
              <div
                className="text-4xl font-bold text-[var(--text-primary)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                +{initiative.jobs}
              </div>
              
              {/* SPACE */}
              <div className="h-4" />
              
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                {initiative.name}
              </h3>
              
              {/* SPACE */}
              <div className="h-3" />
              
              <p className="text-base text-[var(--text-secondary)]">
                {initiative.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

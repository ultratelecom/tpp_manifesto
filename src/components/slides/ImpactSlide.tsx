"use client";

export default function ImpactSlide() {
  const sectors = [
    { icon: "☀️", label: "Clean Energy", jobs: 400, color: "#10B981" },
    { icon: "💻", label: "Digital", jobs: 200, color: "#3B82F6" },
    { icon: "🏗️", label: "Infrastructure", jobs: 4275, color: "#F59E0B" },
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

        {/* Three sectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 w-full max-w-5xl">
          {sectors.map((sector) => (
            <div
              key={sector.label}
              className="text-center"
            >
              <div className="text-6xl mb-8">{sector.icon}</div>
              <div
                className="text-5xl font-bold mb-5"
                style={{ color: sector.color, fontFamily: "var(--font-heading)" }}
              >
                +{sector.jobs.toLocaleString()}
              </div>
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

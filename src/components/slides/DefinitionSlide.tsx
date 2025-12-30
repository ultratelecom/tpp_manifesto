"use client";

export default function DefinitionSlide() {
  const pillars = [
    {
      icon: "💰",
      title: "Minimum Living Wage",
      description: "Fair compensation that meets the cost of living",
    },
    {
      icon: "🔄",
      title: "Continuous Employment",
      description: "Stable, ongoing work without interruption",
    },
    {
      icon: "📅",
      title: "5+ Year Duration",
      description: "Long-term security, not temporary contracts",
    },
  ];

  return (
    <section id="definition" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-20">
        {/* Large section title */}
        <h2
          className="text-6xl lg:text-8xl font-bold text-[var(--tpp-blue)] tracking-tight text-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Our Vision
        </h2>

        {/* SPACE */}
        <div className="h-16" />

        {/* Quote */}
        <blockquote
          className="text-2xl md:text-3xl lg:text-4xl font-medium text-[var(--text-primary)] max-w-5xl text-center leading-relaxed"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          "A sustainable, meaningful job meets a{" "}
          <span className="text-[var(--tpp-blue)] font-semibold">minimum living wage</span>,{" "}
          offers{" "}
          <span className="text-[var(--tpp-blue)] font-semibold">continuous employment</span>,{" "}
          and lasts{" "}
          <span className="text-[var(--tpp-blue)] font-semibold">at least five years</span>."
        </blockquote>

        {/* SPACE */}
        <div className="h-24" />

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 w-full max-w-6xl">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="text-center"
            >
              <div className="text-7xl">{pillar.icon}</div>
              
              {/* SPACE */}
              <div className="h-8" />
              
              <h3
                className="text-2xl font-bold text-[var(--text-primary)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {pillar.title}
              </h3>
              
              {/* SPACE */}
              <div className="h-4" />
              
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

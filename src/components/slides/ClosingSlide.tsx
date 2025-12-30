"use client";

export default function ClosingSlide() {
  return (
    <section id="closing" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-20">
        {/* Logo placeholder */}
        <div className="w-36 h-36 border-3 border-dashed border-[var(--tpp-blue)] rounded-full flex items-center justify-center text-[var(--tpp-blue)] text-2xl font-bold opacity-60">
          TPP
        </div>

        {/* SPACE */}
        <div className="h-16" />

        {/* Main message */}
        <h2
          className="text-5xl lg:text-8xl font-bold text-[var(--text-primary)] text-center leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Building a Brighter <span className="text-[var(--tpp-blue)]">Tobago</span>
        </h2>

        {/* SPACE */}
        <div className="h-12" />

        <p className="text-2xl text-[var(--text-secondary)] text-center max-w-2xl">
          Join us in creating a sustainable, prosperous future for every Tobagonian family.
        </p>

        {/* SPACE */}
        <div className="h-20" />

        {/* Key stats */}
        <div className="flex items-center gap-20">
          <div className="text-center">
            <div
              className="text-7xl font-bold text-[var(--tpp-blue)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              4,875+
            </div>
            <div className="h-4" />
            <div className="text-xl text-[var(--text-secondary)]">Jobs Created</div>
          </div>
          <div className="w-px h-24 bg-gray-200" />
          <div className="text-center">
            <div
              className="text-7xl font-bold text-[var(--tpp-blue)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              3
            </div>
            <div className="h-4" />
            <div className="text-xl text-[var(--text-secondary)]">Key Sectors</div>
          </div>
          <div className="w-px h-24 bg-gray-200" />
          <div className="text-center">
            <div
              className="text-7xl font-bold text-[var(--tpp-blue)]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              2045
            </div>
            <div className="h-4" />
            <div className="text-xl text-[var(--text-secondary)]">Vision Year</div>
          </div>
        </div>

        {/* SPACE */}
        <div className="h-16" />

        {/* Party footer */}
        <div className="text-center">
          <p className="text-xl tracking-widest uppercase text-[var(--text-muted)] font-medium">
            Tobago People's Party
          </p>
          <div className="h-3" />
          <p className="text-sm text-[var(--text-muted)]">
            Manifesto 2025 • Sustainable & Meaningful Job Creation
          </p>
        </div>
      </div>
    </section>
  );
}

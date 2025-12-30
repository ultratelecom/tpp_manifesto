"use client";

export default function HeroSlide() {
  return (
    <section id="hero" className="slide bg-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Main content - centered */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-8">
        {/* Logo placeholder */}
        <div className="mb-12">
          <div className="w-24 h-24 border-2 border-dashed border-[var(--tpp-blue)] rounded-full flex items-center justify-center text-[var(--tpp-blue)] text-sm font-medium opacity-60">
            TPP LOGO
          </div>
        </div>

        {/* Main headline */}
        <h1
          className="heading-xl text-[var(--text-primary)] mb-8"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          A New Era
          <br />
          <span className="text-[var(--tpp-blue)]">For Tobago</span>
        </h1>

        {/* Subtitle */}
        <p className="body-lg max-w-xl mb-8">
          Sustainable & Meaningful Job Creation
        </p>

        {/* Party name */}
        <p className="mt-8 text-sm tracking-widest uppercase text-[var(--text-muted)]">
          Tobago People's Party • Manifesto 2025
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-xs tracking-widest uppercase text-[var(--text-muted)]">
          Scroll to explore
        </span>
        <div className="w-6 h-10 border-2 border-[var(--text-muted)] rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[var(--text-muted)] rounded-full" />
        </div>
      </div>
    </section>
  );
}

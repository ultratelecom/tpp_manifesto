"use client";

import Image from "next/image";

export default function SustainableTourismSlide() {
  const stats = [
    { value: "+25%", label: "Long-Stay", sublabel: "by 2030" },
    { value: "+60%", label: "Short-Stay", sublabel: "by 2035" },
    { value: "1,500", label: "5★ Rooms", sublabel: "by 2045" },
  ];

  const pillars = [
    {
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=400&fit=crop",
      title: "Infrastructure",
      description: "World-class amenities",
    },
    {
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=400&fit=crop",
      title: "Luxury Hotels",
      description: "Premium accommodations",
    },
    {
      image: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=400&h=400&fit=crop",
      title: "Community Tourism",
      description: "Authentic experiences",
    },
    {
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop",
      title: "Eco-Tourism",
      description: "Nature trails & heritage",
    },
  ];

  return (
    <section id="tourism" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-20">
        {/* Section label */}
        <div className="text-teal-600 font-semibold text-lg tracking-wide uppercase">
          Policy Focus
        </div>

        {/* SPACE */}
        <div className="h-6" />

        {/* Main heading */}
        <h2
          className="text-5xl lg:text-7xl font-bold text-[var(--text-primary)] text-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Sustainable <span className="text-teal-600">Tourism</span>
        </h2>

        {/* SPACE */}
        <div className="h-8" />

        {/* Subtitle */}
        <p className="text-xl lg:text-2xl text-[var(--text-secondary)] text-center max-w-3xl">
          Building a world-class destination through community-based, 
          eco-conscious, and culturally rich experiences
        </p>

        {/* SPACE */}
        <div className="h-16" />

        {/* Stats */}
        <div className="flex gap-16 lg:gap-24">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-5xl lg:text-6xl font-bold text-teal-600"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {stat.value}
              </div>
              
              {/* SPACE */}
              <div className="h-3" />
              
              <div className="text-lg font-semibold text-[var(--text-primary)]">
                {stat.label}
              </div>
              
              {/* SPACE */}
              <div className="h-1" />
              
              <div className="text-sm text-[var(--text-muted)]">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* SPACE */}
        <div className="h-20" />

        {/* Four pillars with images */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-5xl">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="flex flex-col items-center text-center">
              {/* Square image with rounded corners */}
              <div className="relative w-[140px] h-[140px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-teal-600/10" />
              </div>
              
              {/* SPACE */}
              <div className="h-6" />
              
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                {pillar.title}
              </h3>
              
              {/* SPACE */}
              <div className="h-2" />
              
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


"use client";

import Image from "next/image";

export default function EconomicGrowthSlide() {
  const initiatives = [
    { title: "Public-Private Partnerships", description: "Leveraging resources and expertise" },
    { title: "Local Entrepreneurship", description: "Business incubators and funding" },
    { title: "Economic Diversification", description: "Agriculture, tech, renewable energy" },
    { title: "Export Enhancement", description: "Access to international markets" },
  ];

  return (
    <section id="economic-growth" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-20 w-full h-full px-20">
        {/* Left: Large Image */}
        <div className="flex-shrink-0 relative w-full lg:w-[450px] h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&h=1000&fit=crop"
            alt="Modern business district"
            fill
            className="object-cover"
          />
          {/* Subtle gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
          {/* Label */}
          <div className="absolute bottom-6 left-6 text-white">
            <div className="text-sm font-semibold tracking-widest uppercase opacity-80">
              Pathways to Prosperity
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex-1 max-w-xl">
          <div className="text-[var(--tpp-blue)] font-semibold text-lg tracking-wide uppercase">
            Policy Focus
          </div>

          {/* SPACE */}
          <div className="h-6" />

          <h2
            className="text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Economic <span className="text-[var(--tpp-blue)]">Growth</span>
          </h2>

          {/* SPACE */}
          <div className="h-10" />

          <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
            Sustainable growth pathways designed around Tobago's values, 
            market needs, and eight key capital investment categories.
          </p>

          {/* SPACE */}
          <div className="h-16" />

          {/* GDP Targets */}
          <div className="flex gap-12">
            <div>
              <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider">
                GDP Per Capita 2035
              </div>
              
              {/* SPACE */}
              <div className="h-3" />
              
              <div
                className="text-5xl font-bold text-[var(--tpp-blue)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                $10,000
              </div>
            </div>

            <div>
              <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider">
                GDP Per Capita 2045
              </div>
              
              {/* SPACE */}
              <div className="h-3" />
              
              <div
                className="text-5xl font-bold text-[var(--text-primary)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                $20,000
              </div>
            </div>
          </div>

          {/* SPACE */}
          <div className="h-16" />

          {/* Key initiatives */}
          <div className="grid grid-cols-2 gap-6">
            {initiatives.map((item) => (
              <div key={item.title}>
                <h3 className="text-base font-bold text-[var(--text-primary)]">
                  {item.title}
                </h3>
                
                {/* SPACE */}
                <div className="h-2" />
                
                <p className="text-sm text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


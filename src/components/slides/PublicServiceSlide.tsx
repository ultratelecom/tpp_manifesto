"use client";

import Image from "next/image";

export default function PublicServiceSlide() {
  const programmes = [
    { title: "RESET Tobago", description: "Reforming for efficiency & transparency" },
    { title: "Digital Transformation", description: "E-governance and online services" },
    { title: "Tobago Online", description: "Citizen-centric digital platform" },
    { title: "Public Service Academy", description: "Continuous professional development" },
  ];

  return (
    <section id="public-service" className="slide bg-white relative">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-20 w-full h-full px-20">
        {/* Left: Content */}
        <div className="flex-1 max-w-xl">
          <div className="text-purple-600 font-semibold text-lg tracking-wide uppercase">
            Policy Focus
          </div>

          {/* SPACE */}
          <div className="h-6" />

          <h2
            className="text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Public Service <span className="text-purple-600">Modernization</span>
          </h2>

          {/* SPACE */}
          <div className="h-10" />

          <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
            An efficient, effective, and accountable public service that maximizes 
            resources, offers high-quality services, and operates transparently.
          </p>

          {/* SPACE */}
          <div className="h-16" />

          {/* Efficiency Targets */}
          <div className="flex gap-12">
            <div>
              <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider">
                Efficiency by 2035
              </div>
              
              {/* SPACE */}
              <div className="h-3" />
              
              <div
                className="text-5xl font-bold text-purple-600"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                70%
              </div>
            </div>

            <div>
              <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider">
                Efficiency by 2045
              </div>
              
              {/* SPACE */}
              <div className="h-3" />
              
              <div
                className="text-5xl font-bold text-[var(--text-primary)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                95%
              </div>
            </div>
          </div>

          {/* SPACE */}
          <div className="h-12" />

          {/* Transaction time reduction */}
          <div>
            <div className="text-lg font-semibold text-[var(--text-primary)]">
              Transaction Time Reduction
            </div>
            
            {/* SPACE */}
            <div className="h-3" />
            
            <div className="text-base text-[var(--text-secondary)]">
              <span className="font-bold text-purple-600">-50%</span> by 2027 • 
              <span className="font-bold text-purple-600"> -75%</span> by 2030
            </div>
          </div>

          {/* SPACE */}
          <div className="h-12" />

          {/* Key programmes */}
          <div className="grid grid-cols-2 gap-4">
            {programmes.map((item) => (
              <div key={item.title}>
                <h3 className="text-base font-bold text-purple-600">
                  {item.title}
                </h3>
                
                {/* SPACE */}
                <div className="h-1" />
                
                <p className="text-sm text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Large Image */}
        <div className="flex-shrink-0 relative w-full lg:w-[450px] h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=1000&fit=crop"
            alt="Modern office workspace"
            fill
            className="object-cover"
          />
          {/* Subtle gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
          {/* Label */}
          <div className="absolute bottom-6 left-6 text-white">
            <div className="text-sm font-semibold tracking-widest uppercase opacity-80">
              RESET Tobago
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


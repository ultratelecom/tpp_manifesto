"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SideNavigationProps {
  totalSlides: number;
  slideIds: string[];
}

export default function SideNavigation({ totalSlides, slideIds }: SideNavigationProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    // Use Intersection Observer for reliable slide detection
    const observers: IntersectionObserver[] = [];

    slideIds.forEach((id, index) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                setActiveSlide(index);
              }
            });
          },
          { threshold: 0.5 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [slideIds]);

  const scrollToSlide = (index: number) => {
    const element = document.getElementById(slideIds[index]);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="side-nav">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <motion.button
          key={index}
          className={`nav-dot ${activeSlide === index ? "active" : ""}`}
          onClick={() => scrollToSlide(index)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </nav>
  );
}

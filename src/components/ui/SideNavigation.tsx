"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface SideNavigationProps {
  totalSlides: number;
  slideIds: string[];
}

export default function SideNavigation({ totalSlides, slideIds }: SideNavigationProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const scrollToSlide = useCallback((index: number) => {
    const clampedIndex = Math.max(0, Math.min(index, totalSlides - 1));
    const element = document.getElementById(slideIds[clampedIndex]);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSlide(clampedIndex);
    }
  }, [slideIds, totalSlides]);

  useEffect(() => {
    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        scrollToSlide(activeSlide + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        scrollToSlide(activeSlide - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        scrollToSlide(0);
      } else if (e.key === "End") {
        e.preventDefault();
        scrollToSlide(totalSlides - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSlide, scrollToSlide, totalSlides]);

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

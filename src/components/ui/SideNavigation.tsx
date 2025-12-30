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
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentSlide = Math.round(scrollPosition / windowHeight);
      setActiveSlide(Math.min(currentSlide, totalSlides - 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalSlides]);

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


"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FlipbookProps {
  children: React.ReactNode[];
  onPageChange?: (page: number) => void;
  showDots?: boolean;
  initialPage?: number;
  hideProgressBar?: boolean;
}

export default function Flipbook({ children, onPageChange, showDots, initialPage = 0, hideProgressBar = false }: FlipbookProps) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [direction, setDirection] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [swipeHintDismissed, setSwipeHintDismissed] = useState(false);
  const totalPages = children.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<number>(0);
  
  // Auto-determine whether to show dots (hide if more than 20 pages)
  const shouldShowDots = showDots ?? totalPages <= 20;
  
  // Compute swipe hint visibility: show only on first page and not dismissed
  const showSwipeHint = currentPage === 0 && !swipeHintDismissed;
  
  // Auto-hide swipe hint after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setSwipeHintDismissed(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const goToPage = useCallback(
    (page: number, dir?: number) => {
      if (isFlipping) return;
      if (page < 0 || page >= totalPages) return;
      
      setIsFlipping(true);
      setDirection(dir ?? (page > currentPage ? 1 : -1));
      setCurrentPage(page);
      onPageChange?.(page);
      
      setTimeout(() => setIsFlipping(false), 800);
    },
    [currentPage, totalPages, isFlipping, onPageChange]
  );

  const nextPage = useCallback(() => {
    if (currentPage < totalPages - 1) {
      goToPage(currentPage + 1, 1);
    }
  }, [currentPage, totalPages, goToPage]);

  const prevPage = useCallback(() => {
    if (currentPage > 0) {
      goToPage(currentPage - 1, -1);
    }
  }, [currentPage, goToPage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextPage();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevPage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextPage, prevPage]);

  // Touch/swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStartRef.current - touchEnd;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      setSwipeHintDismissed(true);
      if (diff > 0) {
        nextPage();
      } else {
        prevPage();
      }
    }
  };
  
  // Handle swipe hint tap to navigate
  const handleSwipeHintClick = () => {
    setSwipeHintDismissed(true);
    nextPage();
  };

  // Progress bar click handler
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const targetPage = Math.floor(percentage * totalPages);
    goToPage(Math.min(Math.max(targetPage, 0), totalPages - 1));
  };

  // Futuristic dissolve animation variants
  const easeOut = "easeOut" as const;
  
  const pageVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      scale: 1.05,
      filter: "blur(20px) brightness(1.5)",
      x: dir > 0 ? 60 : -60,
    }),
    center: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px) brightness(1)",
      x: 0,
      transition: {
        opacity: { duration: 0.5, ease: easeOut },
        scale: { duration: 0.6, ease: easeOut },
        filter: { duration: 0.6, ease: easeOut },
        x: { duration: 0.5, ease: easeOut },
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      scale: 0.95,
      filter: "blur(15px) brightness(0.8)",
      x: dir > 0 ? -60 : 60,
      transition: {
        opacity: { duration: 0.4, ease: easeOut },
        scale: { duration: 0.5, ease: easeOut },
        filter: { duration: 0.4, ease: easeOut },
        x: { duration: 0.4, ease: easeOut },
      },
    }),
  };

  return (
    <div 
      ref={containerRef} 
      className="flipbook-container-fullscreen"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Ambient background glow during transition */}
      <motion.div
        className="transition-glow"
        animate={{
          opacity: isFlipping ? 0.4 : 0,
          scale: isFlipping ? 1.2 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Navigation arrows */}
      <button
        onClick={prevPage}
        disabled={currentPage === 0 || isFlipping}
        className={`nav-arrow nav-arrow-left ${
          currentPage === 0 ? "opacity-20" : "opacity-100"
        }`}
        aria-label="Previous page"
      >
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path
            d="M30 12L18 24L30 36"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        onClick={nextPage}
        disabled={currentPage === totalPages - 1 || isFlipping}
        className={`nav-arrow nav-arrow-right ${
          currentPage === totalPages - 1 ? "opacity-20" : "opacity-100"
        }`}
        aria-label="Next page"
      >
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path
            d="M18 12L30 24L18 36"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Full-screen pages with dissolve animation */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentPage}
          custom={direction}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="fullscreen-page"
        >
          {/* Page content */}
          {React.isValidElement(children[currentPage])
            ? React.cloneElement(
                children[currentPage] as React.ReactElement<{ isActive?: boolean }>,
                { isActive: true }
              )
            : children[currentPage]}
        </motion.div>
      </AnimatePresence>

      {/* Page counter */}
      <div className="page-counter">
        <span className="page-current">{currentPage + 1}</span>
        <span className="page-separator">/</span>
        <span className="page-total">{totalPages}</span>
      </div>

      {/* Page navigation dots - only for small page counts */}
      {shouldShowDots && (
        <div className="page-dots">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToPage(idx)}
              className={`page-dot ${idx === currentPage ? "active" : ""}`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress bar - for large page counts */}
      {!shouldShowDots && !hideProgressBar && (
        <div 
          className="page-progress-container"
          onClick={handleProgressClick}
          role="slider"
          aria-label="Page progress"
          aria-valuemin={1}
          aria-valuemax={totalPages}
          aria-valuenow={currentPage + 1}
        >
          <div className="page-progress-track">
            <motion.div 
              className="page-progress-fill"
              initial={false}
              animate={{ 
                width: `${((currentPage + 1) / totalPages) * 100}%` 
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
        </div>
      )}

      {/* Keyboard hint */}
      <div className="keyboard-hint">
        <span>Use</span>
        <kbd>←</kbd>
        <kbd>→</kbd>
        <span>to navigate</span>
      </div>

      {/* Mobile swipe indicator - only on first page */}
      <AnimatePresence>
        {showSwipeHint && (
          <motion.div
            className="mobile-swipe-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleSwipeHintClick}
          >
            <motion.svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              animate={{ x: [0, -6, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path d="M19 12H5M5 12L12 19M5 12L12 5" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
            <span>Swipe left to navigate</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

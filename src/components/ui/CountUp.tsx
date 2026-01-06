"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  separator?: string;
  className?: string;
  delay?: number;
  isActive?: boolean;
}

export default function CountUp({
  end,
  start = 0,
  duration = 2.5,
  prefix = "",
  suffix = "",
  decimals = 0,
  separator = ",",
  className = "",
  delay = 0,
}: CountUpProps) {
  const count = useMotionValue(start);
  const [displayValue, setDisplayValue] = useState(start);

  // Format number with separator and decimals
  const formatNumber = useCallback((num: number): string => {
    const fixed = num.toFixed(decimals);
    const parts = fixed.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return parts.join(".");
  }, [decimals, separator]);

  // Subscribe to motion value changes
  useEffect(() => {
    const unsubscribe = count.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [count]);

  // Always animate on mount - Flipbook only renders current page
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const controls = animate(count, end, {
        duration: duration,
        ease: [0.16, 1, 0.3, 1],
      });
      return () => controls.stop();
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [count, end, duration, delay]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {prefix}
      {formatNumber(displayValue)}
      {suffix}
    </motion.span>
  );
}

"use client";

import { type ReactNode, useRef } from "react";
import { motion, useInView, type Variant } from "framer-motion";

type AnimationVariant = {
  hidden: Variant;
  visible: Variant;
};

// Animation variants
export const fadeIn: AnimationVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

export const fadeInUp: AnimationVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const fadeInDown: AnimationVariant = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const fadeInLeft: AnimationVariant = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export const fadeInRight: AnimationVariant = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export const zoomIn: AnimationVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

export const staggerContainer: AnimationVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const flip: AnimationVariant = {
  hidden: { opacity: 0, rotateX: 90 },
  visible: { opacity: 1, rotateX: 0, transition: { duration: 0.8 } },
};

export const slideIn: AnimationVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const reveal: AnimationVariant = {
  hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

interface ScrollAnimationProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export default function ScrollAnimation({
  children,
  variant = fadeInUp,
  delay = 0,
  className = "",
  threshold = 0.2,
  once = true,
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once,
    // Add margin to start animation slightly before element comes into view
    margin: "0px 0px -100px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variant}
      transition={{
        delay,
        // Add more natural easing
        ease: [0.25, 0.1, 0.25, 1],
        // Reduce duration for better performance
        duration: 0.5,
      }}
      className={className}
      // Add will-change hint for better performance
      style={{ willChange: "opacity, transform" }}>
      {children}
    </motion.div>
  );
}

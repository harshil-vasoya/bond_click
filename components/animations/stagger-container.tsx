"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  delayChildren?: number
  staggerChildren?: number
}

export default function StaggerContainer({
  children,
  className = "",
  delayChildren = 0,
  staggerChildren = 0.1,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren,
            staggerChildren,
            // Add stagger end to prevent too many animations at once
            staggerDirection: 1,
            when: "beforeChildren",
          },
        },
      }}
      className={className}
      // Add will-change hint for better performance
      style={{ willChange: "contents" }}
    >
      {children}
    </motion.div>
  )
}


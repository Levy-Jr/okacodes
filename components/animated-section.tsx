"use client"

import { motion, type Variants } from "motion/react"
import React from "react"

// ─── Animation Presets ───────────────────────────────────────────────

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
}

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
}

// ─── Stagger container + item ────────────────────────────────────────

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

// ─── Reusable wrapper ────────────────────────────────────────────────

interface AnimatedSectionProps {
  children: React.ReactNode
  variants?: Variants
  className?: string
  as?: keyof typeof motion
  delay?: number
  duration?: number
  once?: boolean
  amount?: number
}

export default function AnimatedSection({
  children,
  variants = fadeUp,
  className,
  as = "div",
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.2,
}: AnimatedSectionProps) {
  const Component = motion[as] as React.ComponentType<
    React.ComponentProps<typeof motion.div>
  >

  return (
    <Component
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </Component>
  )
}

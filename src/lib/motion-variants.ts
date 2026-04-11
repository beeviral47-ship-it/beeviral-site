/**
 * Central motion variant library.
 * Import these into any component — never define one-off animations inline.
 *
 * Usage:
 *   import { fadeUp, staggerContainer } from '@/lib/motion-variants'
 *   <motion.div variants={staggerContainer} initial="hidden" whileInView="visible">
 *     <motion.p variants={fadeUp}>...</motion.p>
 *   </motion.div>
 */

import type { Variants } from 'motion/react'

// ─── Easing presets ──────────────────────────────────────────────────────────
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const
export const EASE_IN_EXPO  = [0.4, 0, 1, 1]   as const
export const EASE_IN_OUT   = [0.4, 0, 0.2, 1] as const

// ─── Spring presets ───────────────────────────────────────────────────────────
export const SPRING_SNAPPY = { type: 'spring', stiffness: 400, damping: 30 } as const
export const SPRING_SMOOTH = { type: 'spring', stiffness: 200, damping: 25 } as const
export const SPRING_GENTLE = { type: 'spring', stiffness: 120, damping: 20 } as const

// ─── Fade up (primary scroll-reveal variant) ─────────────────────────────────
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
}

// ─── Fade in (opacity only — for overlays, images) ───────────────────────────
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: EASE_OUT_EXPO },
  },
}

// ─── Slide from left ─────────────────────────────────────────────────────────
export const slideLeft: Variants = {
  hidden:  { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: EASE_OUT_EXPO },
  },
}

// ─── Slide from right ────────────────────────────────────────────────────────
export const slideRight: Variants = {
  hidden:  { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: EASE_OUT_EXPO },
  },
}

// ─── Scale up (cards, images) ────────────────────────────────────────────────
export const scaleUp: Variants = {
  hidden:  { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
}

// ─── Stagger container — wraps children that use any variant above ────────────
export const staggerContainer: Variants = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren:  0.1,
      delayChildren:    0.05,
    },
  },
}

// ─── Stagger container (slower — for hero sections) ──────────────────────────
export const staggerContainerSlow: Variants = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren:   0.1,
    },
  },
}

// ─── Card hover (lift + shadow — apply via whileHover) ───────────────────────
export const cardHover = {
  y: -6,
  scale: 1.02,
  transition: SPRING_SNAPPY,
} as const

// ─── Button press (apply via whileTap) ───────────────────────────────────────
export const buttonTap = {
  scale: 0.96,
  transition: { duration: 0.1, ease: EASE_IN_EXPO },
} as const

// ─── Underline draw (for yellow-underline elements) ──────────────────────────
export const underlineDraw: Variants = {
  hidden:  { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.5, ease: EASE_OUT_EXPO, delay: 0.3 },
  },
}

'use client'

/**
 * Reusable scroll-reveal wrapper built on Motion.
 * Use this for all new components going forward.
 *
 * <Reveal>           — fadeUp (default)
 * <Reveal variant="slideLeft">
 * <Reveal variant="scaleUp">
 * <Reveal stagger>   — wraps children in a stagger container
 */

import { motion } from 'motion/react'
import {
  fadeUp,
  fadeIn,
  slideLeft,
  slideRight,
  scaleUp,
  staggerContainer,
} from '@/lib/motion-variants'
import type { Variants } from 'motion/react'

const variantMap: Record<string, Variants> = {
  fadeUp,
  fadeIn,
  slideLeft,
  slideRight,
  scaleUp,
}

interface RevealProps {
  children:  React.ReactNode
  variant?:  keyof typeof variantMap
  stagger?:  boolean
  delay?:    number
  className?: string
  as?:       keyof React.JSX.IntrinsicElements
}

export default function Reveal({
  children,
  variant   = 'fadeUp',
  stagger   = false,
  delay     = 0,
  className,
}: RevealProps) {
  const variants = stagger ? staggerContainer : variantMap[variant]

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      transition={delay ? { delay } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/** Convenience item — use inside a <Reveal stagger> container */
export function RevealItem({
  children,
  variant   = 'fadeUp',
  className,
}: {
  children:  React.ReactNode
  variant?:  keyof typeof variantMap
  className?: string
}) {
  return (
    <motion.div variants={variantMap[variant]} className={className}>
      {children}
    </motion.div>
  )
}

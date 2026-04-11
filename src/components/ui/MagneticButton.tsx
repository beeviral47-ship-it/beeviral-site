'use client'

/**
 * MagneticButton — wraps any element and gives it a subtle magnetic pull
 * toward the cursor on hover. On mouse-leave, springs back to origin.
 *
 * Usage:
 *   <MagneticButton>
 *     <button className="...">Click me</button>
 *   </MagneticButton>
 *
 * Props:
 *   strength  — max pixel shift in any direction (default: 8)
 *   className — forwarded to the wrapper div
 */

import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

interface Props {
  children:  React.ReactNode
  strength?: number
  className?: string
}

export default function MagneticButton({ children, strength = 8, className }: Props) {
  const ref  = useRef<HTMLDivElement>(null)

  const mvX  = useMotionValue(0)
  const mvY  = useMotionValue(0)

  // Spring settings — snappy enough to feel responsive, soft enough to feel physical
  const springCfg = { stiffness: 260, damping: 18, mass: 0.6 }
  const x = useSpring(mvX, springCfg)
  const y = useSpring(mvY, springCfg)

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    // Normalise to -1 → +1 relative to button centre
    const relX = (e.clientX - rect.left  - rect.width  / 2) / (rect.width  / 2)
    const relY = (e.clientY - rect.top   - rect.height / 2) / (rect.height / 2)
    mvX.set(relX * strength)
    mvY.set(relY * strength)
  }

  const onMouseLeave = () => {
    mvX.set(0)
    mvY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      data-magnetic
      style={{ x, y, display: 'inline-flex' }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  )
}

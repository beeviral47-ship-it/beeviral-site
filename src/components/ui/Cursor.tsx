'use client'

/**
 * Custom cursor — fine-pointer devices only (mouse/trackpad).
 * Touch devices get null — the OS cursor is untouched.
 *
 * Default state : small 10px yellow dot
 * Hover state   : 36px ring (scales up smoothly)
 *
 * Add data-cursor-hide to any element to suppress the hover ring.
 */

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

export default function Cursor() {
  const [mounted,  setMounted]  = useState(false)
  const [isTouch,  setIsTouch]  = useState(true)  // assume touch until confirmed
  const [visible,  setVisible]  = useState(false)
  const [isActive, setIsActive] = useState(false)  // over interactive element

  // Raw mouse position
  const mx = useMotionValue(-200)
  const my = useMotionValue(-200)

  // Lagged spring position — gives the trailing effect
  const springCfg = { stiffness: 500, damping: 32, mass: 0.4 }
  const x = useSpring(mx, springCfg)
  const y = useSpring(my, springCfg)

  useEffect(() => {
    setMounted(true)
    setIsTouch(window.matchMedia('(pointer: coarse)').matches)
  }, [])

  useEffect(() => {
    if (!mounted || isTouch) return

    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX)
      my.set(e.clientY)
      if (!visible) setVisible(true)

      const target = e.target as HTMLElement
      const interactive = target.closest(
        'a, button, [role="button"], input, select, textarea, label, [data-magnetic]'
      )
      setIsActive(!!interactive && !target.closest('[data-cursor-hide]'))
    }

    const onLeave  = () => setVisible(false)
    const onEnter  = () => setVisible(true)

    document.addEventListener('mousemove', onMove)
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.documentElement.addEventListener('mouseenter', onEnter)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.removeEventListener('mouseenter', onEnter)
    }
  }, [mounted, isTouch, mx, my, visible])

  if (!mounted || isTouch) return null

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
    >
      {/* Dot — default state */}
      <motion.div
        animate={{
          width:   isActive ? 0   : 10,
          height:  isActive ? 0   : 10,
          opacity: visible && !isActive ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
        className="rounded-full bg-[#FFC512]"
        style={{ position: 'absolute', top: '50%', left: '50%', translateX: '-50%', translateY: '-50%' }}
      />

      {/* Ring — hover state */}
      <motion.div
        animate={{
          width:   isActive ? 36  : 10,
          height:  isActive ? 36  : 10,
          opacity: visible && isActive ? 1 : 0,
          scale:   isActive ? 1   : 0.4,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 26 }}
        className="rounded-full border border-[#FFC512]/70 bg-[#FFC512]/8"
        style={{ position: 'absolute', top: '50%', left: '50%', translateX: '-50%', translateY: '-50%' }}
      />
    </motion.div>
  )
}

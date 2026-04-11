'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { stats } from '@/lib/data'
import { scaleUp, staggerContainer } from '@/lib/motion-variants'

// ── Easing ───────────────────────────────────────────────────────────────────
// Expo curve: jumps to ~50% of value in the first 10% of duration,
// then slowly creeps to the final number — reads as spring-like without
// an actual numeric overshoot (which would look wrong for stats).
function easeOutExpo(t: number): number {
  return t >= 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

// ── Counter ───────────────────────────────────────────────────────────────────
function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount]    = useState(0)
  const ref                  = useRef<HTMLSpanElement>(null)
  const isInView             = useInView(ref, { once: true, amount: 0.5 })
  const startTimeRef         = useRef<number | null>(null)
  const rafRef               = useRef<number>(0)
  const DURATION             = 1800 // ms

  useEffect(() => {
    if (!isInView) return

    startTimeRef.current = null

    const tick = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current
      const t       = Math.min(elapsed / DURATION, 1)
      const eased   = easeOutExpo(t)

      setCount(Math.round(eased * target))

      if (t < 1) rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [isInView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function StatsSection() {
  return (
    <section className="bg-[#FFC512] py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#222222]/20"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={scaleUp}
              className="flex flex-col items-center text-center gap-1"
            >
              <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#222222] tracking-tight">
                <Counter target={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-[#222222]/70 text-sm font-medium uppercase tracking-widest">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

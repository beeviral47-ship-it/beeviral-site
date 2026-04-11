'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { stats } from '@/lib/data'
import { scaleUp, staggerContainer } from '@/lib/motion-variants'

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref               = useRef<HTMLSpanElement>(null)
  const isInView          = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!isInView) return
    const duration  = 1800
    const steps     = 60
    const increment = target / steps
    let current     = 0
    const timer     = setInterval(() => {
      current += increment
      if (current >= target) { setCount(target); clearInterval(timer) }
      else                   { setCount(Math.floor(current)) }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

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

'use client'

import { useEffect, useRef, useState } from 'react'
import { stats } from '@/lib/data'
import { useStaggerReveal } from '@/hooks/useScrollReveal'

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount]     = useState(0)
  const [started, setStarted] = useState(false)
  const ref                   = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const duration = 1800
    const steps    = 60
    const increment = target / steps
    let current    = 0
    const timer    = setInterval(() => {
      current += increment
      if (current >= target) { setCount(target); clearInterval(timer) }
      else                   { setCount(Math.floor(current)) }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [started, target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function StatsSection() {
  // Observe the grid; CSS data-delay handles stagger
  const gridRef = useStaggerReveal<HTMLDivElement>(0.2)

  return (
    <section className="bg-[#FFC512] py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={gridRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#222222]/20"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="reveal-scale flex flex-col items-center text-center gap-1"
              data-delay={i}
            >
              <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#222222] tracking-tight">
                <Counter target={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-[#222222]/70 text-sm font-medium uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

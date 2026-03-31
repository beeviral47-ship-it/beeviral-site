'use client'

import { useEffect, useRef, useState } from 'react'
import { testimonials } from '@/lib/data'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function TestimonialsSection() {
  const [active,    setActive]    = useState(0)
  const [isPaused,  setIsPaused]  = useState(false)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [animKey,   setAnimKey]   = useState(0)   // bump to re-trigger animation
  const headingRef                = useScrollReveal<HTMLDivElement>(0.2)

  const go = (index: number, dir: 'left' | 'right') => {
    setDirection(dir)
    setActive(index)
    setAnimKey((k) => k + 1)
  }

  const prev = () => go(active === 0 ? testimonials.length - 1 : active - 1, 'left')
  const next = () => go(active === testimonials.length - 1 ? 0 : active + 1,  'right')

  // Auto-advance
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => go(
      active === testimonials.length - 1 ? 0 : active + 1,
      'right'
    ), 4500)
    return () => clearInterval(timer)
  }, [isPaused, active])

  const t = testimonials[active]

  return (
    <section
      className="bg-[#222222] py-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div ref={headingRef} className="reveal text-center mb-16">
          <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          {/* Card — key + animKey forces React to re-mount and re-trigger animation */}
          <div
            key={`${active}-${animKey}`}
            className={`relative bg-[#2d2d2d] border border-white/5 rounded-2xl p-8 sm:p-12 text-center overflow-hidden ${
              direction === 'right'
                ? 'testimonial-slide-right'
                : 'testimonial-slide-left'
            }`}
          >
            {/* Decorative quote mark */}
            <div className="absolute top-6 left-8 text-[#FFC512]/15 font-display text-9xl font-extrabold leading-none select-none pointer-events-none">
              "
            </div>

            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={20} className="text-[#FFC512] fill-[#FFC512]" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-white/85 text-lg sm:text-xl leading-relaxed mb-8 relative z-10 font-normal">
              "{t.quote}"
            </blockquote>

            {/* Author */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full bg-[#FFC512] text-[#222222] font-semibold flex items-center justify-center text-lg mb-2">
                {t.name.charAt(0)}
              </div>
              <p className="text-white font-semibold tracking-wide">{t.name}</p>
              <p className="text-white/40 text-sm font-normal">{t.role}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#FFC512] hover:text-[#222222] text-white/60 flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dot navigation */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i, i > active ? 'right' : 'left')}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? 'w-6 h-2 bg-[#FFC512]'
                      : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#FFC512] hover:text-[#222222] text-white/60 flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

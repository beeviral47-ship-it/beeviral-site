'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { ArrowRight, MapPin } from 'lucide-react'
import { locations } from '@/lib/data'
import { trackButtonClick } from '@/lib/analytics'
import { useAuditModal } from '@/components/providers/AuditModalProvider'

export default function HeroSection() {
  const blur1Ref = useRef<HTMLDivElement>(null)
  const blur2Ref = useRef<HTMLDivElement>(null)
  const { openAuditModal } = useAuditModal()

  // ── Subtle parallax on decorative blurs — GPU transform only ──────────
  useEffect(() => {
    let rafId: number
    let lastY = 0

    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        const y = window.scrollY
        // Only update if meaningfully scrolled — avoids micro-thrashing
        if (Math.abs(y - lastY) < 1) return
        lastY = y

        const b1 = blur1Ref.current
        const b2 = blur2Ref.current
        if (b1) b1.style.transform = `translate(-8rem, ${-8 - y * 0.06}rem)`
        if (b2) b2.style.transform = `translate(-8rem, ${-8 + y * 0.04}rem)`
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center bg-[#222222] overflow-hidden">

      {/* Honeycomb texture */}
      <div aria-hidden="true" className="absolute inset-0 bg-honeycomb pointer-events-none" />

      {/* Gradient overlays */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#222222] pointer-events-none" />
      <div aria-hidden="true" className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FFC512]/5 to-transparent pointer-events-none" />

      {/* Parallax decorative blurs */}
      <div
        ref={blur1Ref}
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#FFC512]/6 blur-3xl pointer-events-none"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={blur2Ref}
        aria-hidden="true"
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-[#FFC512]/5 blur-3xl pointer-events-none"
        style={{ willChange: 'transform' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-5xl">

          {/* ── Badge ── */}
          <div className="hero-enter hero-enter-1 inline-flex items-center gap-2 bg-[#FFC512]/10 border border-[#FFC512]/30 text-[#FFC512] text-sm font-medium px-4 py-2 rounded-full mb-8">
            <MapPin size={14} />
            <span>South Yorkshire's #1 Social Media Agency</span>
          </div>

          {/* ── Headline — each line cascades in independently ── */}
          <h1 className="hero-headline text-white mb-8">
            <span className="block hero-enter hero-enter-2">
              We Make
            </span>
            <span className="block hero-enter hero-enter-3">
              Local Businesses
            </span>
            {/* "Go Viral." is larger + enters last */}
            <span className="hero-headline-accent hero-enter hero-enter-4 text-[#FFC512] relative mt-1">
              Go Viral.
              {/* Wavy underline — decorative, hidden from screen readers */}
              <svg
                aria-hidden="true"
                className="absolute -bottom-2 left-0 w-full overflow-visible"
                viewBox="0 0 400 12"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10 Q100 2 200 8 Q300 14 398 6"
                  stroke="#FFC512"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.5"
                />
              </svg>
            </span>
          </h1>

          {/* ── Subheadline ── */}
          <p className="hero-enter hero-enter-5 text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10 font-normal">
            Premium social media management, content creation, and paid advertising
            for local businesses across{' '}
            {locations.map((loc, i) => (
              <span key={loc}>
                <span className="text-white font-medium">{loc}</span>
                {i < locations.length - 1 ? ', ' : '.'}
              </span>
            ))}
          </p>

          {/* ── CTAs ── */}
          <div className="hero-enter hero-enter-6 flex flex-col sm:flex-row gap-4 mb-16">
            <button
              onClick={() => { trackButtonClick('Get Your Free Audit', 'hero'); openAuditModal('service') }}
              className="inline-flex items-center justify-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#FFC512]/20"
            >
              Get Your Free Audit
              <ArrowRight size={18} />
            </button>
            <Link
              href="/portfolio"
              onClick={() => trackButtonClick('See Our Work', 'hero')}
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-semibold text-base px-8 py-4 rounded-md transition-all duration-200"
            >
              See Our Work
            </Link>
          </div>

          {/* ── Trust indicators ── */}
          <div className="hero-enter hero-enter-7 flex flex-wrap items-center gap-6">
            {[
              '200+ Local Businesses',
              '5M+ Social Reach',
              '10+ Years Experience',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/50 text-sm font-normal">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFC512]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>


    </section>
  )
}

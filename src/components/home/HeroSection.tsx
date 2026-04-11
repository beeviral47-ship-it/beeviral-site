'use client'

import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { motion } from 'motion/react'
import { trackButtonClick } from '@/lib/analytics'
import { useAuditModal } from '@/components/providers/AuditModalProvider'
import { EASE_OUT_EXPO } from '@/lib/motion-variants'
import MagneticButton from '@/components/ui/MagneticButton'

// CSS-animated word span — transform-only (no opacity), keeps text visible from
// first paint so it counts towards LCP immediately.
function HeadlineWord({ word, delayClass }: { word: string; delayClass: string }) {
  return (
    <span
      aria-hidden="true"
      className={`hero-enter-text ${delayClass}`}
      style={{ display: 'inline-block', marginRight: '0.22em' }}
    >
      {word}
    </span>
  )
}

export default function HeroSection() {
  const { openAuditModal } = useAuditModal()

  return (
    <section className="relative min-h-screen flex items-center bg-[#222222] overflow-hidden">

      {/* Honeycomb texture */}
      <div aria-hidden="true" className="absolute inset-0 bg-honeycomb pointer-events-none" />

      {/* Gradient overlays */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#222222] pointer-events-none" />
      <div aria-hidden="true" className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FFC512]/5 to-transparent pointer-events-none" />

      {/* Decorative blurs — desktop only, static (no parallax scroll overhead on mobile) */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-[#FFC512]/6 blur-3xl pointer-events-none hidden sm:block"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-32 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-[#FFC512]/5 blur-3xl pointer-events-none hidden sm:block"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-20 sm:pb-24">
        <div className="max-w-5xl">

          {/* Badge — CSS fade up, 80ms delay */}
          <div className="hero-enter hero-enter-1 mb-6 sm:mb-8 inline-flex">
            <span className="inline-flex items-center gap-2 bg-[#FFC512]/10 border border-[#FFC512]/30 text-[#FFC512] text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-full">
              <MapPin size={13} />
              South Yorkshire's #1 Local Business Growth Agency
            </span>
          </div>

          {/* Headline — transform-only CSS animation preserves LCP */}
          <h1
            className="hero-headline text-white mb-6 sm:mb-8"
            aria-label="South Yorkshire's Full-Service Digital Marketing Agency."
          >
            <span className="block">
              <HeadlineWord word="South"       delayClass="hero-enter-2" />
              <HeadlineWord word="Yorkshire's" delayClass="hero-enter-2" />
            </span>
            <span className="block">
              <HeadlineWord word="Full-Service" delayClass="hero-enter-3" />
              <HeadlineWord word="Digital"      delayClass="hero-enter-3" />
            </span>
            <span
              aria-hidden="true"
              className="hero-headline-accent text-[#FFC512] relative mt-1 hero-enter-text hero-enter-4 block"
            >
              Marketing Agency.
              <svg
                aria-hidden="true"
                className="absolute -bottom-2 left-0 w-full overflow-visible"
                viewBox="0 0 400 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M2 10 Q100 2 200 8 Q300 14 398 6"
                  stroke="#FFC512"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.9 }}
                />
              </svg>
            </span>
          </h1>

          {/* Subheadline — CSS fade up, 720ms delay */}
          <div className="hero-enter hero-enter-5 mb-8 sm:mb-10">
            <p className="text-white/70 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-normal">
              We build, market &amp; grow local businesses online — from your website
              to your social media.{' '}
              <span className="text-white font-medium">Based in South Yorkshire</span>,
              trusted by 200+ local businesses.
            </p>
          </div>

          {/* CTAs — CSS fade up, 880ms delay */}
          <div className="hero-enter hero-enter-6 flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16">
            <MagneticButton>
              <button
                onClick={() => { trackButtonClick('Get Your Free Health Check', 'hero'); openAuditModal('service') }}
                className="inline-flex items-center justify-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-md transition-colors duration-200 active:scale-95 shadow-lg shadow-[#FFC512]/20 w-full sm:w-auto"
              >
                Get Your Free Health Check
                <ArrowRight size={16} />
              </button>
            </MagneticButton>
            <MagneticButton strength={5}>
              <Link
                href="/packages"
                onClick={() => trackButtonClick('See Our Packages', 'hero')}
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-md transition-colors duration-200 w-full sm:w-auto"
              >
                See Our Packages
              </Link>
            </MagneticButton>
          </div>

          {/* Trust indicators — CSS fade up, 1020ms delay */}
          <div className="hero-enter hero-enter-7">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {['200+ Local Businesses', '5M+ Social Reach', '10+ Years Experience'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/50 text-xs sm:text-sm font-normal">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC512] flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

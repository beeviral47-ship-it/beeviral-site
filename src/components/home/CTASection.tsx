'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { trackButtonClick } from '@/lib/analytics'
import { useAuditModal } from '@/components/providers/AuditModalProvider'

export default function CTASection() {
  const ref = useScrollReveal<HTMLDivElement>(0.2)
  const { openAuditModal } = useAuditModal()

  return (
    <section className="bg-[#FFC512] relative overflow-hidden py-24">

      {/* Honeycomb texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V16L28 0l28 16v34zm0-92L0 -26V8L28 24l28-16V-8z' fill='none' stroke='%23222222' stroke-width='1.5'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content — scale-up entrance */}
      <div ref={ref} className="reveal-scale relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="font-display font-extrabold text-[#222222] mb-6"
          style={{ fontSize: 'clamp(36px, 6vw, 72px)', lineHeight: 0.95, letterSpacing: '-0.02em' }}
        >
          Ready to Go Viral?
        </h2>

        <p className="text-[#222222]/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Let's talk about your business. Get a free social media audit and a
          tailored strategy — no obligation, no jargon, just results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => { trackButtonClick('Book Your Free Audit', 'cta_banner'); openAuditModal('service') }}
            className="inline-flex items-center justify-center gap-2 bg-[#222222] hover:bg-[#333] text-white font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg tracking-wide"
          >
            Book Your Free Audit
            <ArrowRight size={18} />
          </button>
          <Link
            href="/packages"
            onClick={() => trackButtonClick('View Our Packages', 'cta_banner')}
            className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#222222]/10 border-2 border-[#222222] text-[#222222] font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 tracking-wide"
          >
            View Our Packages
          </Link>
        </div>

        <p className="mt-10 text-[#222222]/50 text-sm font-normal">
          No contracts. No setup fees. Cancel anytime. — Trusted by 200+ South Yorkshire businesses.
        </p>
      </div>
    </section>
  )
}

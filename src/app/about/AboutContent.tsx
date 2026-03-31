'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal'
import { trackButtonClick } from '@/lib/analytics'
import { useAuditModal } from '@/components/providers/AuditModalProvider'

const reasons = [
  {
    title: 'Local Expertise',
    desc: 'We live and work in South Yorkshire. We know the landscape, the audience, and what actually resonates with local customers.',
  },
  {
    title: 'Strategy First',
    desc: 'Every campaign starts with a clear plan tied to your business goals — not random posting or vanity metrics.',
  },
  {
    title: 'Real Results That Grow Your Business',
    desc: 'We measure what matters: leads, bookings, and revenue — not likes or vanity metrics. Our campaigns are designed to generate real enquiries for your business.',
  },
  {
    title: 'Transparent Communication',
    desc: 'Monthly reports, regular check-ins, honest feedback. You\'ll always know exactly what we\'re doing and why.',
  },
]

const stats = [
  { value: '10+',  label: 'Years Experience' },
  { value: '200+', label: 'Local Businesses' },
  { value: '5M+',  label: 'People Reached Through Campaigns' },
]

export default function AboutPage() {
  const storyRef    = useScrollReveal<HTMLDivElement>(0.15)
  const reasonsRef  = useStaggerReveal<HTMLDivElement>(0.05)
  const founderRef  = useScrollReveal<HTMLDivElement>(0.15)
  const statsRef    = useStaggerReveal<HTMLDivElement>(0.2)
  const ctaRef      = useScrollReveal<HTMLDivElement>(0.2)
  const { openAuditModal } = useAuditModal()

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#222222] pt-40 pb-24 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-honeycomb pointer-events-none" />
        <div aria-hidden="true" className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#FFC512]/5 blur-3xl pointer-events-none" />
        <div aria-hidden="true" className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full bg-[#FFC512]/4 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#FFC512] text-sm font-medium uppercase tracking-widest mb-4">
            About Us
          </span>
          <h1
            className="font-display font-extrabold text-white mb-6"
            style={{ fontSize: 'clamp(36px, 6vw, 72px)', lineHeight: 0.95, letterSpacing: '-0.02em' }}
          >
            About Bee Viral
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto font-normal leading-relaxed">
            Helping local businesses in South Yorkshire generate more leads through social media.
          </p>
        </div>
      </section>

      {/* ── Our Story ───────────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={storyRef} className="reveal-left max-w-3xl">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              Our Story
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#222222] mt-3 leading-tight tracking-tight">
              Built in South Yorkshire.<br />
              <span className="text-[#FFC512]">Built for South Yorkshire.</span>
            </h2>
            <div className="space-y-5 text-[#555] text-lg leading-relaxed font-normal" style={{ marginTop: '24px' }}>
              <p>
                Bee Viral was founded in 2014 with a simple belief: local businesses deserve
                the same quality of social media marketing as the big brands — without the
                agency price tag or the corporate disconnect.
              </p>
              <p>
                Today, we work with businesses across Wath, Rotherham, Barnsley, and the
                wider South Yorkshire region.
              </p>
              <p>
                We're a local agency, rooted in South Yorkshire. Our team understands the
                region, the communities, and the customers that make up your audience. That
                local knowledge is something no out-of-town agency can replicate.
              </p>
              <p>
                Over the past decade we've helped more than 200 businesses across Wath,
                Rotherham, Barnsley, and beyond grow their online presence, attract real
                customers, and build brands they're proud of. We focus on results that
                matter — not likes, but leads. Not followers, but footfall.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ───────────────────────────────────────────────────── */}
      <section className="bg-[#222222] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              Why Choose Us
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
              The Agency That<br />
              <span className="text-[#FFC512]">Actually Delivers</span>
            </h2>
          </div>

          <div
            ref={reasonsRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="reveal-scale bg-[#2d2d2d] border border-white/5 hover:border-[#FFC512]/30 rounded-xl p-8 transition-colors duration-300"
                data-delay={i}
              >
                <CheckCircle2 size={24} className="text-[#FFC512] mb-4" />
                <h3 className="font-display font-semibold text-white text-xl mb-3 tracking-tight">
                  {r.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed font-normal">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder ─────────────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={founderRef} className="reveal-right max-w-3xl">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              Meet the Founder
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#222222] mt-3 mb-6 leading-tight tracking-tight">
              Built by someone who understands local business.
            </h2>
            <div className="space-y-5 text-[#555] text-lg leading-relaxed font-normal">
              <p>
                Bee Viral was founded by Tahir Azam with one clear goal — to help local
                businesses compete online without wasting money on marketing that doesn't
                deliver.
              </p>
              <p>
                After working closely with businesses across South Yorkshire, we saw the same
                problem again and again: agencies focusing on vanity metrics instead of real
                results. Bee Viral was built to change that.
              </p>
              <p className="text-[#333] font-medium">
                If we don't believe we can help your business grow, we'll tell you upfront.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience ──────────────────────────────────────────────────────── */}
      <section className="bg-[#FFC512] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={statsRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-0 sm:divide-x sm:divide-[#222222]/20"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="reveal-scale flex flex-col items-center text-center gap-2"
                data-delay={i}
              >
                <span className="font-display text-5xl sm:text-6xl font-extrabold text-[#222222] tracking-tight">
                  {s.value}
                </span>
                <span className="text-[#222222]/70 text-sm font-medium uppercase tracking-widest">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="bg-[#1a1a1a] relative overflow-hidden py-24">
        <div aria-hidden="true" className="absolute inset-0 bg-honeycomb opacity-30 pointer-events-none" />

        <div ref={ctaRef} className="reveal-scale relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
            Get Started
          </span>
          <h2
            className="font-display font-extrabold text-white mt-4 mb-6"
            style={{ fontSize: 'clamp(32px, 5vw, 60px)', lineHeight: 1, letterSpacing: '-0.02em' }}
          >
            Ready to grow your business?
          </h2>
          <p className="text-white/60 text-lg leading-relaxed font-normal mb-10">
            Book your free social media audit — no commitment, no jargon, just
            practical advice on how to generate more leads.
          </p>
          <button
            onClick={() => { trackButtonClick('Get Your Free Audit', 'about_cta'); openAuditModal('service') }}
            className="inline-flex items-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#FFC512]/20"
          >
            Get Your Free Audit
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </>
  )
}

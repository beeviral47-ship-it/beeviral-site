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
    title: 'One Agency, Everything Handled',
    desc: 'Website, booking system, social media, SEO, and reporting — you don\'t need four different suppliers. We do it all, joined up, under one roof.',
  },
  {
    title: 'Real Results, Not Vanity Metrics',
    desc: 'We measure what matters: leads, bookings, and revenue — not likes or follower counts. Every campaign is designed to generate real enquiries.',
  },
  {
    title: 'Transparent Communication',
    desc: 'Monthly reports, regular check-ins, honest feedback. You\'ll always know exactly what we\'re doing and why.',
  },
]

const stats = [
  { value: '10+',  label: 'Years Experience' },
  { value: '200+', label: 'Local Businesses' },
  { value: '3',    label: 'Services: Web, Social & SEO' },
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
            Helping local businesses across South Yorkshire build a complete, professional online presence — from websites and booking systems to social media and SEO.
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
                the same quality of digital marketing as the big brands — without the
                agency price tag or the corporate disconnect.
              </p>
              <p>
                What started as a social media agency has grown into something bigger. Today
                we build complete digital systems for local businesses — professional websites,
                online booking platforms, automated email systems, social media management,
                and local SEO — all under one roof, all handled by one team.
              </p>
              <p>
                We work with businesses across Wath, Rotherham, Barnsley, Sheffield, and the
                wider South Yorkshire region. We understand the local market, the local
                audience, and what it actually takes to win customers in this area. That local
                knowledge is something no out-of-town agency can replicate.
              </p>
              <p>
                Over the past decade we've helped more than 200 businesses grow their online
                presence, attract real customers, and build brands they're proud of. We don't
                focus on likes — we focus on leads. Not followers — footfall.
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
                After working closely with businesses across South Yorkshire, the same problem
                kept appearing: agencies focusing on vanity metrics, generic templates, and
                one-size-fits-all strategies that don't work for local businesses.
              </p>
              <p>
                Bee Viral was built to change that. Whether you need a website built from
                scratch, a booking system that runs on autopilot, or a social media presence
                that actually generates enquiries — we'll tell you honestly what will work
                for your business and deliver it properly.
              </p>
              <p className="text-[#333] font-medium">
                If we don't believe we can help you grow, we'll tell you upfront.
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
            Book your free Digital Health Check — no commitment, no jargon, just
            practical advice on how to generate more leads online.
          </p>
          <button
            onClick={() => { trackButtonClick('Get Your Free Health Check', 'about_cta'); openAuditModal('service', '', 'general') }}
            className="inline-flex items-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#FFC512]/20"
          >
            Get Your Free Health Check
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </>
  )
}

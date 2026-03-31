'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, X, ChevronDown } from 'lucide-react'
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal'
import { trackButtonClick } from '@/lib/analytics'
import { useAuditModal } from '@/components/providers/AuditModalProvider'

// ── Package data ──────────────────────────────────────────────────────────────
const plans = [
  {
    name:    'Starter',
    tagline: 'Get your business visible online with consistent, branded content.',
    price:   120,
    color:   'border-white/10',
    badge:   null,
    features: [
      '12 branded posts per month',
      'Facebook & Instagram',
      '3 posts per week',
      'Custom content & graphics',
      'Your logo on every post',
      'Professional captions & hashtags',
      'Scheduling & publishing',
      'Monthly performance report',
      'No setup fees',
      'Cancel anytime — no contract',
    ],
    missing: [
      'Dedicated account manager',
      'Priority support',
      'TikTok',
      'SEO blog posts',
    ],
    cta: 'Get Started',
  },
  {
    name:    'Growth',
    tagline: 'More content, more reach, more customers — with a dedicated manager.',
    price:   150,
    color:   'border-[#FFC512]',
    badge:   'Most Popular',
    features: [
      '16 branded posts per month',
      'Facebook & Instagram',
      '4 posts per week',
      'Custom content & graphics',
      'Your logo on every post',
      'Professional captions & hashtags',
      'Scheduling & publishing',
      'Monthly performance report',
      'Dedicated account manager',
      '2 SEO blog posts per month',
      'No setup fees',
      'Cancel anytime — no contract',
    ],
    missing: [
      'Priority support',
      'TikTok',
    ],
    cta: 'Get Started',
  },
  {
    name:    'Hive',
    tagline: 'Maximum reach across every major platform — the complete package.',
    price:   200,
    color:   'border-[#FFC512]/40',
    badge:   'All-Inclusive',
    features: [
      '20 branded posts per month',
      'Facebook, Instagram & TikTok',
      '~5 posts per week',
      'Custom content & graphics',
      'Your logo on every post',
      'Professional captions & hashtags',
      'Scheduling & publishing',
      'Monthly performance report',
      'Dedicated account manager',
      'Priority support',
      '4 SEO blog posts per month',
      'No setup fees',
      'Cancel anytime — no contract',
    ],
    missing: [],
    cta: 'Get Started',
  },
]

// ── Comparison table rows ─────────────────────────────────────────────────────
const compareRows = [
  { feature: 'Posts per month',              starter: '12',       growth: '16',        hive: '20' },
  { feature: 'Platforms',                    starter: 'FB & IG',  growth: 'FB & IG',   hive: 'FB, IG & TikTok' },
  { feature: 'Posting frequency',            starter: '3/week',   growth: '4/week',    hive: '~5/week' },
  { feature: 'Custom content & graphics',    starter: true,       growth: true,        hive: true },
  { feature: 'Logo on every post',           starter: true,       growth: true,        hive: true },
  { feature: 'Captions & hashtags',          starter: true,       growth: true,        hive: true },
  { feature: 'Scheduling & publishing',      starter: true,       growth: true,        hive: true },
  { feature: 'Monthly performance report',   starter: true,       growth: true,        hive: true },
  { feature: 'Dedicated account manager',    starter: false,      growth: true,        hive: true },
  { feature: 'Priority support',             starter: false,      growth: false,       hive: true },
  { feature: 'TikTok',                       starter: false,      growth: false,       hive: true },
  { feature: 'SEO blog posts per month',     starter: false,      growth: '2',         hive: '4' },
  { feature: 'No setup fees',               starter: true,       growth: true,        hive: true },
  { feature: 'No contract',                 starter: true,       growth: true,        hive: true },
]

// ── FAQ data ──────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'Do you tie me into a long-term contract?',
    a: 'No. All our packages are rolling monthly — no long-term contracts, no lock-in. We believe our results should speak for themselves.',
  },
  {
    q: 'How quickly can we get started?',
    a: 'We typically onboard new clients within 5–7 working days of your first call. We\'ll walk you through everything before we start posting.',
  },
  {
    q: 'Can I upgrade or change my package?',
    a: 'Absolutely. You can move between packages at the end of any billing month. Many clients start on Starter and upgrade once they see results.',
  },
  {
    q: 'What\'s included in the free audit?',
    a: 'A full review of your current social media presence, competitor benchmarking, and a clear set of recommendations — with no obligation to proceed.',
  },
  {
    q: 'Do the prices include VAT?',
    a: 'All prices shown are exclusive of VAT. We\'ll confirm the full breakdown on your proposal before you commit to anything.',
  },
  {
    q: 'What are the SEO blog posts?',
    a: 'These are professionally written, keyword-targeted blog articles published to your website. They improve your Google rankings and drive organic traffic alongside your social media campaigns.',
  },
]

// ── FAQ item component ────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-display font-semibold text-white text-base tracking-tight group-hover:text-[#FFC512] transition-colors duration-200">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`text-[#FFC512] flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <p className="text-white/60 text-sm leading-relaxed font-normal pb-5 pr-8">
          {a}
        </p>
      )}
    </div>
  )
}

// ── Cell helper ───────────────────────────────────────────────────────────────
function Cell({ value }: { value: string | boolean }) {
  if (value === true)  return <Check size={18} className="text-[#FFC512] mx-auto" />
  if (value === false) return <X size={16} className="text-white/20 mx-auto" />
  return <span className="text-white/70 text-sm font-medium">{value}</span>
}

// ── Main component ────────────────────────────────────────────────────────────
export default function PackagesContent() {
  const cardsRef  = useStaggerReveal<HTMLDivElement>(0.1)
  const tableRef  = useScrollReveal<HTMLDivElement>(0.1)
  const trustRef  = useStaggerReveal<HTMLDivElement>(0.15)
  const faqRef    = useScrollReveal<HTMLDivElement>(0.1)
  const ctaRef    = useScrollReveal<HTMLDivElement>(0.2)
  const { openAuditModal } = useAuditModal()

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#222222] pt-40 pb-28 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-honeycomb pointer-events-none" />
        <div aria-hidden="true" className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#FFC512]/5 blur-3xl pointer-events-none" />
        <div aria-hidden="true" className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-[#FFC512]/4 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#FFC512] text-sm font-medium uppercase tracking-widest mb-4">
            Packages & Pricing
          </span>
          <h1
            className="font-display font-extrabold text-white mb-6 max-w-4xl mx-auto"
            style={{ fontSize: 'clamp(32px, 5.5vw, 72px)', lineHeight: 0.92, letterSpacing: '-0.02em' }}
          >
            Transparent Pricing.<br />
            <span className="text-[#FFC512]">No Surprises.</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            Three clear packages built for local businesses at different stages of growth.
            No contracts. No hidden fees. Cancel anytime.
          </p>

          {/* Trust pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {['No contracts', 'Cancel anytime', 'UK-based team', 'Free onboarding'].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/60 text-xs font-medium px-4 py-2 rounded-full"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFC512]" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing cards ─────────────────────────────────────────────────── */}
      <section className="bg-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan, i) => {
              const isGrowth = plan.name === 'Growth'
              const isHive   = plan.name === 'Hive'
              return (
                <div
                  key={plan.name}
                  className={`reveal-scale relative flex flex-col rounded-2xl border-2 ${plan.color} overflow-hidden transition-all duration-300 ${
                    isGrowth ? 'shadow-2xl shadow-[#FFC512]/15 lg:-translate-y-4' : ''
                  } ${isHive ? 'bg-[#1c1c1c]' : 'bg-[#222222]'}`}
                  data-delay={i}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div className={`absolute top-0 right-0 text-xs font-bold px-4 py-1.5 rounded-bl-xl tracking-widest uppercase ${
                      isGrowth ? 'bg-[#FFC512] text-[#222222]' : 'bg-white/10 text-white/70'
                    }`}>
                      {plan.badge}
                    </div>
                  )}

                  {/* Header */}
                  <div className={`px-8 pt-8 pb-6 ${isGrowth ? 'bg-[#FFC512]/5' : ''}`}>
                    <h2 className={`font-display font-extrabold text-2xl tracking-tight mb-1 ${
                      isGrowth ? 'text-[#FFC512]' : isHive ? 'text-white' : 'text-white'
                    }`}>
                      {plan.name}
                    </h2>
                    <p className="text-white/50 text-sm font-normal leading-relaxed mb-6">
                      {plan.tagline}
                    </p>

                    {/* Price */}
                    <div className="flex items-baseline gap-1">
                      <span className="text-white/40 text-xl font-medium">£</span>
                      <span className="font-display font-extrabold text-white tracking-tight" style={{ fontSize: '3.5rem', lineHeight: 1 }}>
                        {plan.price}
                      </span>
                      <span className="text-white/40 text-sm font-normal ml-1">/ month + VAT</span>
                    </div>
                  </div>

                  {isGrowth && <div className="h-px bg-[#FFC512]/20 mx-8" />}

                  {/* Features */}
                  <div className="flex flex-col flex-1 px-8 py-6 gap-3">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <Check size={16} className="text-[#FFC512] flex-shrink-0 mt-0.5" />
                        <span className={`text-sm font-normal leading-snug ${
                          f.includes('SEO blog') ? 'text-[#FFC512] font-medium' : 'text-white/75'
                        }`}>
                          {f}
                        </span>
                      </div>
                    ))}
                    {plan.missing.map((f) => (
                      <div key={f} className="flex items-start gap-3 opacity-40">
                        <X size={16} className="text-white/50 flex-shrink-0 mt-0.5" />
                        <span className="text-white/50 text-sm font-normal leading-snug line-through">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="px-8 pb-8">
                    <button
                      onClick={() => { trackButtonClick(`${plan.cta} — ${plan.name}`, 'packages'); openAuditModal('book-package', `${plan.name} — £${plan.price}/mo`) }}
                      className={`w-full inline-flex items-center justify-center gap-2 font-semibold text-sm px-6 py-3.5 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 tracking-wide ${
                        isGrowth
                          ? 'bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] shadow-lg shadow-[#FFC512]/25'
                          : 'bg-white/8 hover:bg-white/15 text-white border border-white/10'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight size={16} />
                    </button>
                    <p className="text-white/30 text-xs text-center mt-3 font-normal">
                      No contract required
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <p className="text-center text-white/30 text-sm mt-8 font-normal">
            Not sure which package is right for you?{' '}
            <Link href="/contact" className="text-[#FFC512] hover:underline">
              Book a free audit
            </Link>{' '}
            and we'll recommend the best fit.
          </p>
        </div>
      </section>

      {/* ── Comparison table ──────────────────────────────────────────────── */}
      <section className="bg-[#222222] py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              Compare
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
              What's included in each plan
            </h2>
          </div>

          <div ref={tableRef} className="reveal overflow-x-auto rounded-2xl border border-white/8">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr className="border-b border-white/8">
                  <th className="text-left px-6 py-4 text-white/40 text-xs font-medium uppercase tracking-widest w-1/2">
                    Feature
                  </th>
                  {['Starter', 'Growth', 'Hive'].map((p) => (
                    <th key={p} className={`px-4 py-4 text-center text-sm font-display font-bold tracking-tight ${
                      p === 'Growth' ? 'text-[#FFC512]' : 'text-white'
                    }`}>
                      {p}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? 'bg-white/2' : ''}`}
                  >
                    <td className="px-6 py-4 text-white/60 text-sm font-normal">{row.feature}</td>
                    <td className="px-4 py-4 text-center"><Cell value={row.starter} /></td>
                    <td className="px-4 py-4 text-center bg-[#FFC512]/3"><Cell value={row.growth} /></td>
                    <td className="px-4 py-4 text-center"><Cell value={row.hive} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Trust signals ─────────────────────────────────────────────────── */}
      <section className="bg-[#FFC512] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={trustRef}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#222222]/20"
          >
            {[
              { v: 'No',    l: 'Lock-in Contracts' },
              { v: '98%',  l: 'Client Retention' },
              { v: '200+', l: 'Businesses Helped' },
              { v: '10+',  l: 'Years in Business' },
            ].map((s, i) => (
              <div
                key={s.l}
                className="reveal-scale flex flex-col items-center text-center gap-1"
                data-delay={i}
              >
                <span className="font-display font-extrabold text-[#222222] text-4xl sm:text-5xl tracking-tight">
                  {s.v}
                </span>
                <span className="text-[#222222]/70 text-xs font-medium uppercase tracking-widest">
                  {s.l}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#1a1a1a] py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
              Questions? We've got answers.
            </h2>
          </div>

          <div ref={faqRef} className="reveal bg-[#222222] rounded-2xl border border-white/8 px-8 divide-y divide-white/8">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#222222] relative overflow-hidden py-24 border-t border-white/5">
        <div aria-hidden="true" className="absolute inset-0 bg-honeycomb opacity-30 pointer-events-none" />
        <div ref={ctaRef} className="reveal-scale relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
            Not sure where to start?
          </span>
          <h2
            className="font-display font-extrabold text-white mt-4 mb-6"
            style={{ fontSize: 'clamp(32px, 5vw, 60px)', lineHeight: 1, letterSpacing: '-0.02em' }}
          >
            Get a free audit first.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed font-normal mb-10">
            We'll review your current social media, tell you exactly what's holding
            you back, and recommend the right package — with zero obligation.
          </p>
          <button
            onClick={() => { trackButtonClick('Book Your Free Audit', 'packages_cta'); openAuditModal('service') }}
            className="inline-flex items-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#FFC512]/20"
          >
            Book Your Free Audit
            <ArrowRight size={18} />
          </button>
          <p className="text-white/25 text-sm mt-5 font-normal">
            Free. No commitment. Honest advice.
          </p>
        </div>
      </section>
    </>
  )
}

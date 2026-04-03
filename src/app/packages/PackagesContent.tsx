'use client'

import { useState } from 'react'
import { ArrowRight, Check, ChevronDown } from 'lucide-react'
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal'
import { trackButtonClick } from '@/lib/analytics'
import { useAuditModal } from '@/components/providers/AuditModalProvider'

// ── Types ─────────────────────────────────────────────────────────────────────

interface Plan {
  name: string
  monthly: number
  setup?: number
  badge: string | null
  features: string[]
  ctaService: string
  serviceKey: string
}

// ── Data ──────────────────────────────────────────────────────────────────────

const lane1Plans: Plan[] = [
  {
    name: 'Starter',
    monthly: 120,
    badge: null,
    ctaService: 'Starter — £120/mo',
    serviceKey: 'social-only',
    features: [
      '12 branded posts per month',
      'Facebook & Instagram',
      'Custom graphics & captions',
      'Scheduling & publishing',
      'Monthly performance report',
      'No contract',
    ],
  },
  {
    name: 'Growth',
    monthly: 150,
    badge: 'Most Popular',
    ctaService: 'Growth — £150/mo',
    serviceKey: 'social-only',
    features: [
      '16 branded posts per month',
      'Facebook & Instagram',
      'Custom graphics & captions',
      'Dedicated account manager',
      '2 SEO blog posts per month',
      'Monthly performance report',
      'No contract',
    ],
  },
  {
    name: 'Hive',
    monthly: 200,
    badge: null,
    ctaService: 'Hive — £200/mo',
    serviceKey: 'social-only',
    features: [
      '20 branded posts per month',
      'Facebook, Instagram & TikTok',
      'Custom graphics & captions',
      'Dedicated account manager',
      'Priority support',
      '4 SEO blog posts per month',
      'Monthly performance report',
      'No contract',
    ],
  },
]

const lane2Plans: Plan[] = [
  {
    name: 'Buzz',
    monthly: 250,
    badge: null,
    ctaService: 'Buzz — £250/mo',
    serviceKey: 'social-seo',
    features: [
      '10 social posts per month',
      'Facebook & Instagram',
      '2 SEO blog posts per month',
      'Google Business profile optimisation',
      'Custom graphics & captions',
      'Monthly performance report',
      'No contract',
    ],
  },
  {
    name: 'Swarm',
    monthly: 350,
    badge: 'Best Value',
    ctaService: 'Swarm — £350/mo',
    serviceKey: 'social-seo',
    features: [
      '14 social posts per month',
      'Facebook & Instagram',
      '4 SEO blog posts per month',
      'Local SEO optimisation',
      'Google Business profile management',
      'Dedicated account manager',
      'Priority support',
      'Monthly performance report',
      'No contract',
    ],
  },
]

const lane3Plans: Plan[] = [
  {
    name: 'Brochure',
    monthly: 200,
    setup: 800,
    badge: null,
    ctaService: 'Brochure — £800 setup + £200/mo',
    serviceKey: 'brochure',
    features: [
      'Professional website design & build',
      'Sanity CMS included',
      'Hosting & domain setup',
      'Local SEO foundation',
      '8–10 social posts per month',
      '2 SEO blog posts per month',
      'Website maintenance',
      'Monthly performance report',
      'No contract',
    ],
  },
  {
    name: 'Booking Pro',
    monthly: 250,
    setup: 1500,
    badge: 'Most Popular',
    ctaService: 'Booking Pro — £1,500 setup + £250/mo',
    serviceKey: 'booking-pro',
    features: [
      'Everything in Brochure',
      'Online booking system',
      'Automated confirmation emails',
      '24hr reminder emails',
      'Cancellation management',
      'Admin notification system',
      'Mobile optimised booking flow',
      'No contract',
    ],
  },
  {
    name: 'Booking Elite',
    monthly: 300,
    setup: 2500,
    badge: 'All Inclusive',
    ctaService: 'Booking Elite — £2,500 setup + £300/mo',
    serviceKey: 'booking-elite',
    features: [
      'Everything in Booking Pro',
      'Multi-service booking',
      'SMS reminders via Twilio',
      'Advanced admin dashboard',
      'Attendance confirmation system',
      'Priority support & onboarding',
      'No contract',
    ],
  },
]

// ── FAQ data ──────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: 'Do you tie me into a long-term contract?',
    a: 'No. All our packages are rolling monthly — no long-term contracts, no lock-in. We believe our results should speak for themselves.',
  },
  {
    q: 'How quickly can we get started?',
    a: "We typically onboard new clients within 5–7 working days of your first call. We'll walk you through everything before we start.",
  },
  {
    q: 'Can I upgrade or change my package?',
    a: 'Absolutely. You can move between packages at the end of any billing month. Many clients start on Starter and upgrade once they see results.',
  },
  {
    q: "What's included in the free Digital Health Check?",
    a: 'A full review of your current online presence, competitor benchmarking, and a clear set of recommendations — with no obligation to proceed.',
  },
  {
    q: 'Do the prices include VAT?',
    a: "All prices shown are exclusive of VAT. We'll confirm the full breakdown on your proposal before you commit to anything.",
  },
  {
    q: 'What are the SEO blog posts?',
    a: 'Professionally written, keyword-targeted articles published to your website. They improve your Google rankings and drive organic traffic alongside your social media campaigns.',
  },
  {
    q: 'What does the setup fee cover on Full Digital Partner plans?',
    a: 'The one-time setup fee covers the design, build, and launch of your website — and booking system where included. The monthly retainer then covers ongoing maintenance, social media, and SEO.',
  },
]

// ── FAQ item ──────────────────────────────────────────────────────────────────

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

// ── Plan card ─────────────────────────────────────────────────────────────────

function PlanCard({
  plan,
  index,
  onCta,
}: {
  plan: Plan
  index: number
  onCta: () => void
}) {
  const isPrimary      = plan.badge === 'Most Popular' || plan.badge === 'Best Value'
  const isAllInclusive = plan.badge === 'All Inclusive'
  const borderColor    = isPrimary
    ? 'border-[#FFC512]'
    : isAllInclusive
    ? 'border-[#FFC512]/40'
    : 'border-white/10'

  return (
    <div
      className={`reveal-scale relative flex flex-col rounded-2xl border-2 ${borderColor} bg-[#222222] overflow-hidden transition-all duration-300 ${
        isPrimary ? 'shadow-2xl shadow-[#FFC512]/15 lg:-translate-y-4' : ''
      }`}
      data-delay={index}
    >
      {/* Badge */}
      {plan.badge && (
        <div
          className={`absolute top-0 right-0 text-xs font-bold px-4 py-1.5 rounded-bl-xl tracking-widest uppercase ${
            isPrimary ? 'bg-[#FFC512] text-[#222222]' : 'bg-white/10 text-white/70'
          }`}
        >
          {plan.badge}
        </div>
      )}

      {/* Header */}
      <div className={`px-8 pt-8 pb-6 ${isPrimary ? 'bg-[#FFC512]/5' : ''}`}>
        <h3
          className={`font-display font-extrabold text-2xl tracking-tight mb-4 ${
            isPrimary ? 'text-[#FFC512]' : 'text-white'
          }`}
        >
          {plan.name}
        </h3>

        {/* Setup fee banner — Lane 3 only */}
        {plan.setup !== undefined && (
          <div className="w-full bg-[#FFC512] rounded-lg px-4 py-3 mb-5">
            <p className="text-[#222222] font-bold text-sm tracking-wide">
              One-time setup: £{plan.setup.toLocaleString()}
            </p>
            <p className="text-[#222222]/60 text-xs font-medium mt-0.5">
              then £{plan.monthly}/month
            </p>
          </div>
        )}

        {/* Monthly price */}
        <div className="flex items-baseline gap-1">
          <span className="text-white/40 text-xl font-medium">£</span>
          <span
            className="font-display font-extrabold text-white tracking-tight"
            style={{ fontSize: '3.5rem', lineHeight: 1 }}
          >
            {plan.monthly}
          </span>
          <span className="text-white/40 text-sm font-normal ml-1">/ month ongoing + VAT</span>
        </div>
      </div>

      {isPrimary && <div className="h-px bg-[#FFC512]/20 mx-8" />}

      {/* Features */}
      <div className="flex flex-col flex-1 px-8 py-6 gap-3">
        {plan.features.map((f) => (
          <div key={f} className="flex items-start gap-3">
            <Check size={16} className="text-[#FFC512] flex-shrink-0 mt-0.5" />
            <span className="text-white/75 text-sm font-normal leading-snug">{f}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="px-8 pb-8">
        <button
          onClick={onCta}
          className={`w-full inline-flex items-center justify-center gap-2 font-semibold text-sm px-6 py-3.5 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 tracking-wide ${
            isPrimary
              ? 'bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] shadow-lg shadow-[#FFC512]/25'
              : 'bg-white/8 hover:bg-white/15 text-white border border-white/10'
          }`}
        >
          Get Started
          <ArrowRight size={16} />
        </button>
        <p className="text-white/30 text-xs text-center mt-3 font-normal">
          No contract required
        </p>
      </div>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export default function PackagesContent() {
  const lane1Ref = useStaggerReveal<HTMLDivElement>(0.1)
  const lane2Ref = useStaggerReveal<HTMLDivElement>(0.1)
  const lane3Ref = useStaggerReveal<HTMLDivElement>(0.1)
  const trustRef = useStaggerReveal<HTMLDivElement>(0.15)
  const noteRef  = useScrollReveal<HTMLDivElement>(0.15)
  const faqRef   = useScrollReveal<HTMLDivElement>(0.1)
  const ctaRef   = useScrollReveal<HTMLDivElement>(0.2)

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
            Simple, Transparent Pricing
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            From social media management to full website builds and booking systems — choose the package that fits where your business is right now. No contracts. No hidden fees. Cancel anytime.
          </p>

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

      {/* ── Lane 1: Social Media Management ───────────────────────────────── */}
      <section className="bg-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              Social Media
            </span>
            <h2
              className="font-display font-bold text-white mt-3 tracking-tight leading-tight"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            >
              Social Media Management
            </h2>
            <p className="text-white/50 text-base font-normal mt-3 max-w-2xl mx-auto leading-relaxed">
              For businesses that want consistent, professional social media without the hassle.
            </p>
            <p className="text-white/30 text-sm mt-2 font-normal">
              No setup fee. Monthly retainer only.
            </p>
          </div>

          <div ref={lane1Ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {lane1Plans.map((plan, i) => (
              <PlanCard
                key={plan.name}
                plan={plan}
                index={i}
                onCta={() => {
                  trackButtonClick(`Get Started — ${plan.name}`, 'packages')
                  openAuditModal('book-package', plan.ctaService, plan.serviceKey)
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Lane divider ──────────────────────────────────────────────────── */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ── Lane 2: Social Media + SEO ────────────────────────────────────── */}
      <section className="bg-[#222222] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              Social + SEO
            </span>
            <h2
              className="font-display font-bold text-white mt-3 tracking-tight leading-tight"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            >
              Social Media + SEO
            </h2>
            <p className="text-white/50 text-base font-normal mt-3 max-w-2xl mx-auto leading-relaxed">
              For businesses that want to grow on social AND rank higher on Google — no website needed.
            </p>
            <p className="text-white/30 text-sm mt-2 font-normal">
              No setup fee. Monthly retainer only.
            </p>
          </div>

          <div ref={lane2Ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-3xl mx-auto">
            {lane2Plans.map((plan, i) => (
              <PlanCard
                key={plan.name}
                plan={plan}
                index={i}
                onCta={() => {
                  trackButtonClick(`Get Started — ${plan.name}`, 'packages')
                  openAuditModal('book-package', plan.ctaService, plan.serviceKey)
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Lane divider ──────────────────────────────────────────────────── */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ── Lane 3: Full Digital Partner ──────────────────────────────────── */}
      <section className="bg-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              Full Service
            </span>
            <h2
              className="font-display font-bold text-white mt-3 tracking-tight leading-tight"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            >
              Full Digital Partner
            </h2>
            <p className="text-white/50 text-base font-normal mt-3 max-w-2xl mx-auto leading-relaxed">
              For businesses that want everything handled — website, booking system, social media, SEO, and maintenance.
            </p>
            <p className="text-white/30 text-sm mt-2 font-normal">
              One-time setup fee + monthly retainer.
            </p>
          </div>

          <div ref={lane3Ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {lane3Plans.map((plan, i) => (
              <PlanCard
                key={plan.name}
                plan={plan}
                index={i}
                onCta={() => {
                  trackButtonClick(`Get Started — ${plan.name}`, 'packages')
                  openAuditModal('book-package', plan.ctaService, plan.serviceKey)
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom note ───────────────────────────────────────────────────── */}
      <section className="bg-[#222222] py-16 border-t border-white/5">
        <div
          ref={noteRef}
          className="reveal max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <p className="text-white/60 text-lg font-normal leading-relaxed mb-6">
            Not sure which is right for you?
          </p>
          <button
            onClick={() => {
              trackButtonClick('Get a Free Digital Health Check', 'packages_note')
              openAuditModal('service')
            }}
            className="inline-flex items-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#FFC512]/20"
          >
            Get a Free Digital Health Check
            <ArrowRight size={18} />
          </button>
          <p className="text-white/25 text-sm mt-5 font-normal">
            We'll recommend the best fit for your business. Free. No commitment.
          </p>
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
            We'll review your current online presence, tell you exactly what's holding
            you back, and recommend the right package — with zero obligation.
          </p>
          <button
            onClick={() => {
              trackButtonClick('Book Your Free Audit', 'packages_cta')
              openAuditModal('service')
            }}
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

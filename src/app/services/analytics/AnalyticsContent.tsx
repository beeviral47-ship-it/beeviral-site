'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  ChevronDown,
} from 'lucide-react'
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal'
import { trackButtonClick } from '@/lib/analytics'
import { useAuditModal } from '@/components/providers/AuditModalProvider'

const included = [
  'Monthly performance report — delivered every month without fail',
  'Reach & impressions tracking across all platforms',
  'Engagement rate analysis — what content is resonating',
  'Lead and enquiry tracking — the numbers that drive revenue',
  'Ad spend breakdown — exactly where your budget is going',
  'Actionable recommendations — what we\'re doing next month and why',
]

const faqs = [
  {
    q: 'What does the monthly report actually show?',
    a: 'Your report covers reach, impressions, engagement rate, follower growth, website clicks, lead enquiries generated, and — where applicable — ad spend and return. We strip out the vanity numbers and focus on what actually matters to your bottom line.',
  },
  {
    q: 'How is the report delivered?',
    a: 'We send your report by email every month, formatted in plain English — no jargon, no confusing dashboards. If you\'d prefer a quick call to walk through the numbers, just say the word.',
  },
  {
    q: 'Do I need to do anything to set up the reporting?',
    a: 'No. We handle all the tracking setup as part of your onboarding. We connect your platforms and configure everything so data flows through correctly from day one.',
  },
  {
    q: 'Is reporting included in my package or an add-on?',
    a: 'Reporting is included in all Bee Viral packages — it\'s not an extra. We believe every client deserves to see exactly what their investment is doing.',
  },
]

const relatedServices = [
  {
    title: 'Social Media Management',
    href: '/services/social-media-management',
    desc: 'Consistent posting, branded content, and community engagement — every week.',
  },
  {
    title: 'Paid Advertising',
    href: '/services/paid-advertising',
    desc: 'Targeted Facebook & Instagram campaigns that generate real leads.',
  },
  {
    title: 'Local SEO',
    href: '/services/local-seo',
    desc: 'Rank higher in local search results across South Yorkshire.',
  },
]

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
        <p className="text-white/60 text-sm leading-relaxed font-normal pb-5 pr-8">{a}</p>
      )}
    </div>
  )
}

export default function AnalyticsContent() {
  const whatWeDoRef  = useScrollReveal<HTMLDivElement>(0.15)
  const includedRef  = useStaggerReveal<HTMLDivElement>(0.1)
  const whoRef       = useScrollReveal<HTMLDivElement>(0.15)
  const statsRef     = useStaggerReveal<HTMLDivElement>(0.1)
  const faqRef       = useScrollReveal<HTMLDivElement>(0.1)
  const relatedRef   = useStaggerReveal<HTMLDivElement>(0.1)
  const ctaRef       = useScrollReveal<HTMLDivElement>(0.2)
  const { openAuditModal } = useAuditModal()

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-[#222222] pt-40 pb-28 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-honeycomb pointer-events-none" />
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#FFC512]/5 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-[#FFC512]/4 blur-3xl pointer-events-none"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#FFC512] text-sm font-medium uppercase tracking-widest mb-4">
            Analytics & Reporting
          </span>
          <h1
            className="font-display font-extrabold text-white mb-6 max-w-4xl mx-auto"
            style={{ fontSize: 'clamp(32px, 5.5vw, 72px)', lineHeight: 0.92, letterSpacing: '-0.02em' }}
          >
            Know Exactly What's Working —{' '}
            <span className="text-[#FFC512]">Every Month</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            No vanity metrics. No confusing dashboards. Just clear, honest monthly reports showing
            the numbers that actually matter to your business — leads, reach, engagement, and return
            on investment.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Monthly reports', 'All platforms', 'Lead tracking', 'Included in all packages'].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/60 text-xs font-medium px-4 py-2 rounded-full"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFC512]" />
                {t}
              </span>
            ))}
          </div>
          <button
            onClick={() => { trackButtonClick('Get a Free Digital Health Check', 'analytics_hero'); openAuditModal('service', '', 'general') }}
            className="inline-flex items-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#FFC512]/20"
          >
            Get a Free Digital Health Check <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={whatWeDoRef} className="reveal max-w-3xl mx-auto text-center">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              What We Do
            </span>
            <h2
              className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 mb-6 tracking-tight leading-tight"
            >
              Reporting that holds us accountable
            </h2>
            <p className="text-white/60 text-lg font-normal leading-relaxed mb-4">
              Most local businesses have no idea whether their marketing is actually working. They're
              posting on social media, running ads, and investing time and money — but without clear
              data, it's impossible to know what's generating enquiries and what's being wasted.
            </p>
            <p className="text-white/60 text-lg font-normal leading-relaxed mb-4">
              We fix that. Every month, you receive a plain-English report covering the metrics that
              matter — reach, engagement, leads, and ad spend — alongside a clear explanation of
              what we're doing next and why. No jargon, no dashboards to navigate, no guesswork.
            </p>
            <p className="text-white/60 text-lg font-normal leading-relaxed">
              We believe transparency is non-negotiable. Our reporting keeps us accountable to you,
              and it means you can see the real value of what you're investing in — every single month.
            </p>
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="bg-[#222222] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              What's Included
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
              Everything in your monthly report
            </h2>
          </div>
          <div
            ref={includedRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto"
          >
            {included.map((item, i) => (
              <div
                key={item}
                data-delay={i}
                className="reveal flex items-start gap-3 bg-[#2d2d2d] border border-white/5 hover:border-[#FFC512]/30 rounded-xl p-5 transition-all duration-200"
              >
                <Check size={16} className="text-[#FFC512] flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm font-normal leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mid-page CTA ── */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFC512]/5 border border-[#FFC512]/20 rounded-2xl px-8 py-12 text-center">
            <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl tracking-tight mb-4">
              See what's actually driving results for your business
            </h2>
            <p className="text-white/60 text-lg mb-8 font-normal">
              Book a free Digital Health Check and we'll show you exactly where you stand right now.
            </p>
            <button
              onClick={() => { trackButtonClick('Get a Free Digital Health Check', 'analytics_mid_cta'); openAuditModal('service', '', 'general') }}
              className="inline-flex items-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Get a Free Digital Health Check <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="bg-[#222222] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              Who It's For
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
              Built for local businesses across South Yorkshire
            </h2>
          </div>
          <div ref={whoRef} className="reveal max-w-3xl mx-auto text-center">
            <p className="text-white/60 text-lg font-normal leading-relaxed mb-6">
              Perfect for any local business in South Yorkshire that wants complete visibility over
              their digital marketing — and a team that's accountable for delivering real results.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#FFC512]/10 border border-[#FFC512]/30 text-[#FFC512] text-sm font-medium px-5 py-2.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFC512]" />
              Included in all Bee Viral packages
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Bee Viral — Stats ── */}
      <section className="bg-[#1a1a1a] py-20 border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              Why Bee Viral
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
              Trusted by local businesses across South Yorkshire
            </h2>
          </div>
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: '200+', label: 'Businesses managed' },
              { stat: '10+', label: 'Years experience' },
              { stat: '98%', label: 'Client retention rate' },
              { stat: '5M+', label: 'Combined reach' },
            ].map((item, i) => (
              <div
                key={item.label}
                data-delay={i}
                className="reveal-scale text-center bg-[#2d2d2d] border border-white/5 rounded-xl p-6"
              >
                <p className="font-display font-extrabold text-[#FFC512] text-4xl sm:text-5xl mb-2">
                  {item.stat}
                </p>
                <p className="text-white/60 text-sm font-normal">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#222222] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">FAQ</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
              Frequently asked questions
            </h2>
          </div>
          <div ref={faqRef} className="reveal bg-[#2d2d2d] border border-white/5 rounded-2xl px-6 sm:px-8">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Services ── */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              Explore More
            </span>
            <h2 className="font-display font-bold text-3xl text-white mt-3 tracking-tight">
              Related services
            </h2>
          </div>
          <div ref={relatedRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedServices.map((s, i) => (
              <Link
                key={s.title}
                href={s.href}
                data-delay={i}
                className="reveal group bg-[#2d2d2d] border border-white/5 hover:border-[#FFC512]/30 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1"
              >
                <h3 className="font-display font-semibold text-white text-base mb-2 group-hover:text-[#FFC512] transition-colors">
                  {s.title}
                </h3>
                <p className="text-white/50 text-sm font-normal">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-[#FFC512] text-xs font-medium mt-3">
                  Learn more <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
          <p className="text-center mt-8">
            <Link href="/services" className="text-white/40 hover:text-[#FFC512] text-sm transition-colors">
              View all services →
            </Link>
          </p>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-[#222222] relative overflow-hidden py-24 border-t border-white/5">
        <div aria-hidden="true" className="absolute inset-0 bg-honeycomb opacity-30 pointer-events-none" />
        <div
          ref={ctaRef}
          className="reveal-scale relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">Get Started</span>
          <h2
            className="font-display font-extrabold text-white mt-4 mb-6"
            style={{ fontSize: 'clamp(32px, 5vw, 60px)', lineHeight: 1, letterSpacing: '-0.02em' }}
          >
            Ready to see the full picture?
          </h2>
          <p className="text-white/60 text-lg leading-relaxed font-normal mb-10">
            Book your free Digital Health Check and we'll give you an honest assessment of your
            current digital presence — along with a clear plan for what to do next.
          </p>
          <button
            onClick={() => { trackButtonClick('Get a Free Digital Health Check', 'analytics_cta'); openAuditModal('service', '', 'general') }}
            className="inline-flex items-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#FFC512]/20"
          >
            Get a Free Digital Health Check <ArrowRight size={18} />
          </button>
          <p className="text-white/25 text-sm mt-5 font-normal">Free. No commitment. Honest advice.</p>
        </div>
      </section>
    </>
  )
}

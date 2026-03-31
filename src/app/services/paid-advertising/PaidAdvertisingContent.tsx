'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Target,
  TrendingUp,
  RefreshCcw,
  Megaphone,
  BarChart2,
  Users,
  Zap,
  Star,
} from 'lucide-react'
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal'
import { trackButtonClick } from '@/lib/analytics'
import { useAuditModal } from '@/components/providers/AuditModalProvider'

const included = [
  'Campaign strategy & planning',
  'Ad creative & copywriting',
  'Audience targeting & retargeting',
  'Budget management & optimisation',
  'A/B testing',
  'Conversion tracking setup',
  'Weekly campaign monitoring',
  'Monthly ROI report',
]

const adTypes = [
  {
    icon: <Target size={24} />,
    title: 'Lead Generation Ads',
    desc: 'Capture enquiries directly on Facebook and Instagram with pre-filled forms. Perfect for services businesses that want a steady flow of inbound leads.',
  },
  {
    icon: <Megaphone size={24} />,
    title: 'Engagement & Brand Awareness',
    desc: 'Get your business in front of thousands of local people in South Yorkshire. Build brand recognition that turns strangers into loyal customers.',
  },
  {
    icon: <RefreshCcw size={24} />,
    title: 'Retargeting Campaigns',
    desc: 'Re-engage people who\'ve already visited your website or interacted with your social media. These warm audiences convert at significantly higher rates.',
  },
  {
    icon: <Star size={24} />,
    title: 'Event & Promotion Ads',
    desc: 'Drive attendance to events, push seasonal promotions, and create urgency around special offers with time-sensitive ad campaigns.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Research & Targeting',
    desc: 'We dig into your ideal customer — demographics, interests, behaviours, and location. We build precise audiences in Rotherham, Barnsley, Wath, and across South Yorkshire.',
  },
  {
    number: '02',
    title: 'Creative Production',
    desc: 'Our team creates scroll-stopping ad visuals and persuasive copy that speaks directly to your local audience and drives action.',
  },
  {
    number: '03',
    title: 'Campaign Launch',
    desc: 'We set up conversion tracking, launch your campaigns, and monitor performance closely in the first 48–72 hours to ensure everything is running correctly.',
  },
  {
    number: '04',
    title: 'Optimise & Scale',
    desc: 'We continuously test, refine, and scale what\'s working. As your campaigns mature, we drive down your cost per lead and increase your return on ad spend.',
  },
]

const industries = [
  'Restaurants & takeaways',
  'Tradespeople & builders',
  'Gyms & fitness studios',
  'Hair salons & beauty therapists',
  'Dental & medical clinics',
  'Retailers & e-commerce',
  'Estate agents & lettings',
  'Accountants & solicitors',
]

const faqs = [
  {
    q: 'What budget do I need to get started?',
    a: 'We recommend a minimum ad spend of £300/month to generate meaningful results with Facebook and Instagram advertising. Our management fee is separate. Smaller budgets can work for very localised campaigns, but we\'ll be upfront about what\'s realistic for your goals.',
  },
  {
    q: 'Do you manage the ads yourself or just set them up?',
    a: 'We manage everything on an ongoing basis — from initial setup to daily monitoring, weekly optimisation, and monthly reporting. We don\'t just set and forget. Your campaigns are actively managed throughout the month.',
  },
  {
    q: 'How long before I see results?',
    a: 'Lead generation campaigns often start producing results within the first 1–2 weeks. Brand awareness takes a little longer to accumulate. Most clients see a clear return on their investment within the first 4–6 weeks, with performance improving as we optimise.',
  },
  {
    q: 'What platforms do you advertise on?',
    a: 'We primarily run campaigns on Facebook and Instagram (both part of Meta\'s advertising platform). We can also run Google Ads campaigns for businesses where search intent is particularly strong.',
  },
  {
    q: 'How do you measure success?',
    a: 'We track the metrics that actually matter for your business: cost per lead, leads generated, click-through rate, return on ad spend (ROAS), and conversion rate. You receive a plain-English monthly report showing exactly what your budget achieved.',
  },
]

const relatedServices = [
  {
    title: 'Social Media Management',
    href: '/services/social-media-management',
    desc: 'Consistent organic posting to complement your paid campaigns.',
  },
  {
    title: 'Content Creation',
    href: '/services/content-creation',
    desc: 'Scroll-stopping ad creatives that drive clicks and conversions.',
  },
  {
    title: 'Social Media Strategy',
    href: '/services/social-media-strategy',
    desc: 'A joined-up plan that makes your paid and organic work together.',
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

export default function PaidAdvertisingContent() {
  const overviewRef = useScrollReveal<HTMLDivElement>(0.15)
  const includedRef = useStaggerReveal<HTMLDivElement>(0.1)
  const adTypesRef = useStaggerReveal<HTMLDivElement>(0.1)
  const stepsRef = useStaggerReveal<HTMLDivElement>(0.1)
  const whyRef = useScrollReveal<HTMLDivElement>(0.15)
  const industriesRef = useStaggerReveal<HTMLDivElement>(0.1)
  const faqRef = useScrollReveal<HTMLDivElement>(0.1)
  const relatedRef = useStaggerReveal<HTMLDivElement>(0.1)
  const ctaRef = useScrollReveal<HTMLDivElement>(0.2)
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
            Paid Social Advertising
          </span>
          <h1
            className="font-display font-extrabold text-white mb-6 max-w-4xl mx-auto"
            style={{ fontSize: 'clamp(32px, 5.5vw, 72px)', lineHeight: 0.92, letterSpacing: '-0.02em' }}
          >
            Facebook & Instagram Ads That Generate{' '}
            <span className="text-[#FFC512]">Real Leads in South Yorkshire</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            Stop wasting your ad budget. We create targeted campaigns that put your business in front
            of the right people at the right time — and turn that attention into measurable revenue.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Meta Certified', 'Local targeting', 'Transparent reporting', 'No wasted spend'].map((t) => (
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
            onClick={() => { trackButtonClick('Book Your Free Audit', 'pa_hero'); openAuditModal('service') }}
            className="inline-flex items-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#FFC512]/20"
          >
            Book Your Free Audit <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={overviewRef} className="reveal max-w-3xl mx-auto text-center">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              Why Paid Social?
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 mb-6 tracking-tight leading-tight">
              The fastest way to get in front of local customers
            </h2>
            <p className="text-white/60 text-lg font-normal leading-relaxed mb-4">
              Organic social media is essential, but it takes time. Paid advertising on Facebook and
              Instagram lets you reach thousands of highly targeted local customers today — not in
              six months. With over 2.9 billion monthly active users on Meta platforms, your ideal
              customers in South Yorkshire are already there.
            </p>
            <p className="text-white/60 text-lg font-normal leading-relaxed mb-4">
              The problem is that most local businesses waste their ad budget on poorly targeted
              campaigns with weak creative. We've spent years refining our approach specifically
              for small and medium businesses in Rotherham, Barnsley, Wath, and the wider South
              Yorkshire area.
            </p>
            <p className="text-white/60 text-lg font-normal leading-relaxed">
              Our campaigns are built around your business goals — whether that's generating phone
              calls, form enquiries, footfall in store, or ticket sales for an event. Every pound
              you spend is tracked, and you'll always know exactly what return you're getting.
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
              Full-service ad management
            </h2>
          </div>
          <div ref={includedRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
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

      {/* ── Ad Types ── */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              Ad Types
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
              The right campaign for your goals
            </h2>
          </div>
          <div ref={adTypesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {adTypes.map((type, i) => (
              <div
                key={type.title}
                data-delay={i}
                className="reveal bg-[#2d2d2d] border border-white/5 hover:border-[#FFC512]/30 rounded-xl p-6 transition-all duration-200"
              >
                <div className="text-[#FFC512] mb-4">{type.icon}</div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">{type.title}</h3>
                <p className="text-white/60 text-sm font-normal leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mid-page CTA ── */}
      <section className="bg-[#222222] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFC512]/5 border border-[#FFC512]/20 rounded-2xl px-8 py-12 text-center">
            <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl tracking-tight mb-4">
              Ready to see what targeted ads can do for your business?
            </h2>
            <p className="text-white/60 text-lg mb-8 font-normal">
              Book a free audit and we'll review your current ad performance — or show you exactly
              how we'd get started.
            </p>
            <button
              onClick={() => { trackButtonClick('Book Your Free Audit', 'pa_mid_cta'); openAuditModal('service') }}
              className="inline-flex items-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Book Your Free Audit <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              How It Works
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
              From brief to results in 4 steps
            </h2>
          </div>
          <div ref={stepsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.number}
                data-delay={i}
                className="reveal bg-[#2d2d2d] border border-white/5 hover:border-[#FFC512]/30 rounded-xl p-6 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-[#FFC512] text-[#222222] font-display font-extrabold flex items-center justify-center text-lg mb-4">
                  {step.number}
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm font-normal leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why It Works for Local Businesses ── */}
      <section className="bg-[#222222] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div ref={whyRef} className="reveal">
              <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
                Why It Works
              </span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 mb-6 tracking-tight leading-tight">
                Hyper-local targeting that actually works
              </h2>
              <p className="text-white/60 text-lg font-normal leading-relaxed mb-6">
                Meta's advertising platform gives us tools that most agencies don't use to their full
                potential. We combine geographic targeting with demographic and interest-based filters
                to reach exactly the right people in South Yorkshire.
              </p>
              <ul className="space-y-4">
                {[
                  'Target by postcode, town, or radius from your business',
                  'Reach people by age, income level, and interests',
                  'Exclude existing customers to avoid wasting budget',
                  'Retarget website visitors and video viewers',
                  'Build lookalike audiences from your best customers',
                  'Track offline conversions like phone calls and in-store visits',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Check size={16} className="text-[#FFC512] flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm font-normal">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#2d2d2d] border border-white/5 rounded-2xl p-8">
              <h3 className="font-display font-semibold text-white text-xl mb-6">
                Who we work with
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {industries.map((ind) => (
                  <div key={ind} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFC512] flex-shrink-0" />
                    <span className="text-white/60 text-sm font-normal">{ind}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-white/40 text-xs font-normal">
                  Any local business in South Yorkshire can benefit from paid social advertising.{' '}
                  <Link href="/contact" className="text-[#FFC512] hover:underline">
                    Ask us if we're right for you.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#1a1a1a] py-20">
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
      <section className="bg-[#222222] py-20">
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
            Ready to turn ad spend into real revenue?
          </h2>
          <p className="text-white/60 text-lg leading-relaxed font-normal mb-10">
            Book a free audit and we'll tell you exactly how we'd approach your paid advertising
            — with honest advice about what to expect and when.
          </p>
          <button
            onClick={() => { trackButtonClick('Book Your Free Audit', 'pa_cta'); openAuditModal('service') }}
            className="inline-flex items-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#FFC512]/20"
          >
            Book Your Free Audit <ArrowRight size={18} />
          </button>
          <p className="text-white/25 text-sm mt-5 font-normal">Free. No commitment. Honest advice.</p>
        </div>
      </section>
    </>
  )
}

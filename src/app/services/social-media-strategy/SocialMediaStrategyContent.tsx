'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Compass,
  Target,
  BarChart2,
  FileText,
  Users,
  Map,
} from 'lucide-react'
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal'
import { trackButtonClick } from '@/lib/analytics'
import { useAuditModal } from '@/components/providers/AuditModalProvider'

const included = [
  'Business goal alignment',
  'Audience research & personas',
  'Competitor analysis',
  'Platform selection & rationale',
  'Content pillars & themes',
  'Posting schedule & frequency',
  'Tone of voice guide',
  'KPI setting & tracking framework',
]

const deliverables = [
  {
    icon: <BarChart2 size={24} />,
    title: 'Social Media Audit Report',
    desc: 'A detailed review of your current social media accounts — what\'s working, what isn\'t, and what your competitors are doing better. This is the foundation every strategy is built on.',
  },
  {
    icon: <Map size={24} />,
    title: '90-Day Content Strategy',
    desc: 'A clear, actionable 90-day plan covering your content themes, post types, messaging approach, and the story arc for your social media presence over the coming three months.',
  },
  {
    icon: <FileText size={24} />,
    title: 'Platform & Posting Plan',
    desc: 'A practical framework covering which platforms to focus on, how often to post, what types of content to create, and how to measure success against your specific business goals.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Discovery',
    desc: 'We start with an in-depth discovery call to understand your business, your goals, your current activity, and your competition. The more we know about your South Yorkshire market, the more targeted your strategy.',
  },
  {
    number: '02',
    title: 'Research',
    desc: 'We conduct competitor analysis, audience research, and a review of your existing accounts. We identify opportunities in your local market and establish the benchmark we\'re working from.',
  },
  {
    number: '03',
    title: 'Strategy Build',
    desc: 'We develop your complete social media strategy — content pillars, posting schedule, tone of voice guide, platform recommendations, and KPIs. This is a detailed written document, not a vague slide deck.',
  },
  {
    number: '04',
    title: 'Handover & Execution',
    desc: 'We present your strategy in a dedicated handover session and walk you through every element. We can then implement it for you via our management service, or hand it to your team to execute.',
  },
]

const beforeAfter = [
  {
    type: 'Without a Strategy',
    points: [
      'Posting randomly with no clear purpose',
      'No idea which content resonates with your audience',
      'Wasting time and money on the wrong platforms',
      'No way to measure whether social media is working',
      'Inconsistent brand voice that confuses your audience',
    ],
    accent: 'border-white/10 bg-[#2d2d2d]',
    textColor: 'text-white/50',
    labelColor: 'text-white/40',
  },
  {
    type: 'With a Bee Viral Strategy',
    points: [
      'Every post serves a clear business goal',
      'Content tailored to what your audience actually wants',
      'Focused on the platforms where your customers spend time',
      'Clear KPIs and monthly tracking to prove ROI',
      'Consistent voice that builds recognition and trust',
    ],
    accent: 'border-[#FFC512]/30 bg-[#FFC512]/5',
    textColor: 'text-white/80',
    labelColor: 'text-[#FFC512]',
  },
]

const whoNeeds = [
  {
    title: 'New businesses',
    desc: 'Starting from scratch and want to build a social media presence the right way from day one, rather than guessing and hoping something sticks.',
  },
  {
    title: 'Inconsistent posters',
    desc: 'You post when you remember, there\'s no clear theme, and your audience never knows what to expect. A strategy fixes this.',
  },
  {
    title: 'Not seeing results',
    desc: 'You\'ve been active on social media for a while but engagement is low, followers aren\'t growing, and it\'s not generating enquiries for your business.',
  },
]

const faqs = [
  {
    q: 'Do I get a written strategy document?',
    a: 'Yes. You receive a detailed written strategy document that you own and can refer back to at any time. It\'s not a vague PDF — it\'s a practical, actionable plan with specific recommendations for your business and South Yorkshire market.',
  },
  {
    q: 'How long does it take to create the strategy?',
    a: 'Our typical turnaround is 7–14 working days from the initial discovery session. We don\'t rush the research and planning phase — a well-built strategy is worth the wait.',
  },
  {
    q: 'Can you implement the strategy for us?',
    a: 'Absolutely. Many clients combine the strategy service with our social media management or content creation packages. We build the strategy and then execute it for you every month. Alternatively, we can hand over the strategy for your team to implement.',
  },
  {
    q: 'What if our business goals change?',
    a: 'Strategy should be a living document. We recommend reviewing and refreshing your strategy every 90 days. If your goals change significantly mid-term, we can schedule a strategy update session to realign your plan.',
  },
  {
    q: 'Is this a one-time service or ongoing?',
    a: 'The initial strategy creation is a one-time project. However, we offer ongoing strategy reviews for clients who want their social media plan continuously refined as the market, platform algorithms, and business goals evolve.',
  },
]

const relatedServices = [
  {
    title: 'Social Media Management',
    href: '/services/social-media-management',
    desc: 'We execute your strategy for you — every post, every month.',
  },
  {
    title: 'Social Media Audit',
    href: '/services/social-media-audit',
    desc: 'Start with an audit to understand exactly where you stand.',
  },
  {
    title: 'Content Creation',
    href: '/services/content-creation',
    desc: 'Great strategy needs great content to bring it to life.',
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

export default function SocialMediaStrategyContent() {
  const overviewRef = useScrollReveal<HTMLDivElement>(0.15)
  const includedRef = useStaggerReveal<HTMLDivElement>(0.1)
  const deliverablesRef = useStaggerReveal<HTMLDivElement>(0.1)
  const stepsRef = useStaggerReveal<HTMLDivElement>(0.1)
  const beforeAfterRef = useStaggerReveal<HTMLDivElement>(0.1)
  const whoRef = useStaggerReveal<HTMLDivElement>(0.1)
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
            Social Media Strategy
          </span>
          <h1
            className="font-display font-extrabold text-white mb-6 max-w-4xl mx-auto"
            style={{ fontSize: 'clamp(32px, 5.5vw, 72px)', lineHeight: 0.92, letterSpacing: '-0.02em' }}
          >
            Social Media Strategy That Drives{' '}
            <span className="text-[#FFC512]">Real Business Growth in South Yorkshire</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            A social media presence without a strategy is just noise. We build a clear, actionable
            plan that gets your business real results — tailored to your goals, your audience, and
            the South Yorkshire market.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Tailored to your business', 'Competitor analysis', 'Content planning', 'Goal-driven'].map((t) => (
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
            onClick={() => { trackButtonClick('Book Your Free Audit', 'sms_hero'); openAuditModal('service') }}
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
              Why Strategy First
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 mb-6 tracking-tight leading-tight">
              Strategy is the difference between busy and effective
            </h2>
            <p className="text-white/60 text-lg font-normal leading-relaxed mb-4">
              Most local businesses post on social media reactively — a photo here, a promotion
              there, a post when they remember. The result is a feed that looks inconsistent, gets
              little engagement, and generates zero enquiries. It's not because they're not trying;
              it's because there's no strategy behind it.
            </p>
            <p className="text-white/60 text-lg font-normal leading-relaxed mb-4">
              A social media strategy gives every piece of content a purpose. It defines who you're
              talking to, what you're saying, why you're saying it, and how you'll measure whether
              it's working. For local businesses in South Yorkshire, this means your content reaches
              the right people in Rotherham, Barnsley, Wath, and the wider area — and converts
              them into paying customers.
            </p>
            <p className="text-white/60 text-lg font-normal leading-relaxed">
              Whether you want to grow your following, generate enquiries, build brand awareness,
              or drive footfall, a strategy makes it happen systematically rather than accidentally.
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
              Everything that makes a strategy work
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

      {/* ── Strategy Deliverables ── */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              Deliverables
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
              What you get at the end
            </h2>
          </div>
          <div ref={deliverablesRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {deliverables.map((item, i) => (
              <div
                key={item.title}
                data-delay={i}
                className="reveal bg-[#2d2d2d] border border-white/5 hover:border-[#FFC512]/30 rounded-xl p-6 transition-all duration-200"
              >
                <div className="text-[#FFC512] mb-4">{item.icon}</div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm font-normal leading-relaxed">{item.desc}</p>
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
              Ready to build a strategy that actually works?
            </h2>
            <p className="text-white/60 text-lg mb-8 font-normal">
              Start with a free audit. We'll review your current social media and give you an
              honest assessment of where a strategy would make the biggest difference.
            </p>
            <button
              onClick={() => { trackButtonClick('Book Your Free Audit', 'sms_mid_cta'); openAuditModal('service') }}
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
              From discovery to a complete strategy in 4 stages
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

      {/* ── Before / After ── */}
      <section className="bg-[#222222] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              The Difference
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
              Strategy changes everything
            </h2>
          </div>
          <div ref={beforeAfterRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {beforeAfter.map((col, i) => (
              <div
                key={col.type}
                data-delay={i}
                className={`reveal border rounded-2xl p-8 transition-all duration-200 ${col.accent}`}
              >
                <h3 className={`font-display font-bold text-xl mb-6 ${col.labelColor}`}>
                  {col.type}
                </h3>
                <ul className="space-y-4">
                  {col.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0 mt-1.5 opacity-50" />
                      <span className={`text-sm font-normal leading-snug ${col.textColor}`}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Needs a Strategy ── */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              Who It's For
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
              You need a strategy if...
            </h2>
          </div>
          <div ref={whoRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {whoNeeds.map((item, i) => (
              <div
                key={item.title}
                data-delay={i}
                className="reveal bg-[#2d2d2d] border border-white/5 hover:border-[#FFC512]/30 rounded-xl p-6 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-[#FFC512]/10 border border-[#FFC512]/20 flex items-center justify-center mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#FFC512]" />
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm font-normal leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-white/40 text-sm mt-10 font-normal">
            Not sure if you need a strategy? Start with a{' '}
            <Link href="/services/social-media-audit" className="text-[#FFC512] hover:underline">
              free social media audit
            </Link>{' '}
            and we'll tell you honestly.
          </p>
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
            Stop guessing. Start growing.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed font-normal mb-10">
            Book your free audit today and we'll give you an honest view of where your social media
            stands — and exactly what a strategy could do for your business.
          </p>
          <button
            onClick={() => { trackButtonClick('Book Your Free Audit', 'sms_cta'); openAuditModal('service') }}
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

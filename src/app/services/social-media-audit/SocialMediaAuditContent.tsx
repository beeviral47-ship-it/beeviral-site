'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Search,
  FileText,
  Phone,
  BarChart2,
  Users,
  Hash,
  Eye,
  Layers,
  Star,
} from 'lucide-react'
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal'
import { trackButtonClick } from '@/lib/analytics'
import { useAuditModal } from '@/components/providers/AuditModalProvider'

const reviewItems = [
  { icon: <Eye size={20} />, title: 'Profile completeness', desc: 'Bio, links, profile images, cover photos, and contact details across all platforms.' },
  { icon: <Layers size={20} />, title: 'Content quality & consistency', desc: 'Visual branding, post quality, brand voice, and how consistent your content looks and feels.' },
  { icon: <BarChart2 size={20} />, title: 'Posting frequency', desc: 'How often you post and whether your schedule aligns with when your audience is active.' },
  { icon: <Users size={20} />, title: 'Audience engagement', desc: 'Likes, comments, shares, saves, and overall interaction rates across your posts.' },
  { icon: <Hash size={20} />, title: 'Hashtag & caption strategy', desc: 'Whether your hashtags and captions are optimised for reach and discoverability.' },
  { icon: <Search size={20} />, title: 'Competitor benchmarking', desc: 'How your social media presence compares to key competitors in your local area.' },
  { icon: <BarChart2 size={20} />, title: 'Platform performance stats', desc: 'Follower growth, reach, impressions, and any trends in your account data.' },
  { icon: <Star size={20} />, title: 'Brand consistency', desc: 'Whether your social media reflects a clear, professional, and cohesive brand identity.' },
]

const deliverables = [
  {
    icon: <FileText size={24} />,
    title: 'Detailed Written Report',
    desc: 'A clear, jargon-free document covering every aspect of your current social media — what\'s working, what isn\'t, and where the biggest opportunities lie.',
  },
  {
    icon: <Check size={24} />,
    title: 'Priority Action List',
    desc: 'A ranked list of the most impactful changes you can make — so you know exactly what to tackle first to see the fastest improvement.',
  },
  {
    icon: <Phone size={24} />,
    title: '30-Min Consultation Call',
    desc: 'We walk you through your report in plain English, answer your questions, and discuss how we can help you implement the recommendations.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Submit Your Details',
    desc: 'Fill in our short contact form with your business name, social media handles, and a brief overview of your goals.',
  },
  {
    number: '02',
    title: 'We Review Your Accounts',
    desc: 'Our team carries out a thorough manual review of your social media presence — no automated tools, no shortcuts.',
  },
  {
    number: '03',
    title: 'We Prepare Your Report',
    desc: 'We compile our findings into a clear, written report with specific, actionable recommendations tailored to your business.',
  },
  {
    number: '04',
    title: 'We Walk You Through It',
    desc: 'We book a 30-minute call to take you through the findings, answer your questions, and discuss next steps — with zero pressure.',
  },
]

const whoItems = [
  {
    title: 'New businesses',
    desc: 'You\'ve set up your social media accounts but aren\'t sure if they\'re set up correctly or whether you\'re making the most of them.',
  },
  {
    title: 'Businesses posting but not growing',
    desc: 'You\'re putting in the effort — posting regularly — but you\'re not seeing followers, engagement, or enquiries grow.',
  },
  {
    title: 'Businesses considering investing more',
    desc: 'Before spending money on ads or a management package, you want to understand where you currently stand and what needs fixing first.',
  },
]

const faqs = [
  {
    q: 'Is the audit really free?',
    a: 'Yes, completely. We offer a free social media audit to all new enquiries with no strings attached. There\'s no obligation to proceed with any of our services.',
  },
  {
    q: 'How long does the audit take?',
    a: 'We typically deliver your report within 3–5 working days of receiving your details. We\'ll confirm the timeline when you get in touch.',
  },
  {
    q: 'What platforms do you audit?',
    a: 'We review Facebook and Instagram as standard. We can also include TikTok, Google Business Profile, and LinkedIn if relevant to your business.',
  },
  {
    q: 'Will you try to sell me something afterwards?',
    a: 'No. We\'ll walk you through the findings honestly and let you decide if you\'d like to work with us. Many businesses use the audit to make improvements themselves — and that\'s absolutely fine.',
  },
  {
    q: 'What happens after the audit?',
    a: 'You\'ll receive a full written report and an invitation to a 30-minute call. If you decide you\'d like help implementing the recommendations, we\'ll suggest the most appropriate package for your goals and budget.',
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

export default function SocialMediaAuditContent() {
  const reviewRef     = useStaggerReveal<HTMLDivElement>(0.05)
  const deliverablesRef = useStaggerReveal<HTMLDivElement>(0.1)
  const stepsRef      = useStaggerReveal<HTMLDivElement>(0.1)
  const whoRef        = useStaggerReveal<HTMLDivElement>(0.1)
  const faqRef        = useScrollReveal<HTMLDivElement>(0.1)
  const relatedRef    = useStaggerReveal<HTMLDivElement>(0.1)
  const ctaRef        = useScrollReveal<HTMLDivElement>(0.2)
  const { openAuditModal } = useAuditModal()

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#222222] pt-40 pb-28 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-honeycomb pointer-events-none" />
        <div aria-hidden="true" className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#FFC512]/5 blur-3xl pointer-events-none" />
        <div aria-hidden="true" className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-[#FFC512]/4 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-[#FFC512]/70 text-xs font-medium uppercase tracking-widest mb-6 hover:text-[#FFC512] transition-colors"
          >
            ← All Services
          </Link>
          <span className="block text-[#FFC512] text-sm font-medium uppercase tracking-widest mb-4">
            Social Media Audit
          </span>
          <h1
            className="font-display font-extrabold text-white mb-6 max-w-4xl mx-auto"
            style={{ fontSize: 'clamp(32px, 5.5vw, 72px)', lineHeight: 0.92, letterSpacing: '-0.02em' }}
          >
            Find Out What's Holding<br />
            <span className="text-[#FFC512]">Your Business Back</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            Not sure why your social media isn't working? Our audit identifies exactly what's wrong and gives
            you a clear, actionable plan to fix it — at no cost and with no obligation.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Free audit available', 'No obligation', 'Detailed written report', 'Actionable insights'].map((t) => (
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
            onClick={() => { trackButtonClick('Book Your Free Audit', 'audit_hero'); openAuditModal('service') }}
            className="inline-flex items-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#FFC512]/20"
          >
            Get Your Free Audit
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* ── Overview ──────────────────────────────────────────────────────── */}
      <section className="bg-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              What Is a Social Media Audit?
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 mb-6 tracking-tight leading-tight">
              A clear picture of where<br />
              <span className="text-[#FFC512]">you really stand</span>
            </h2>
            <p className="text-white/60 text-lg font-normal leading-relaxed mb-6">
              A social media audit is a structured review of your entire social media presence — your profiles,
              content, engagement, and performance. It identifies what's working, what isn't, and what you should
              focus on to generate more leads and grow your audience.
            </p>
            <p className="text-white/60 text-lg font-normal leading-relaxed">
              Many businesses in Rotherham, Barnsley, and Wath are posting regularly but seeing little return.
              Often the problem isn't effort — it's strategy. Our audit gives you the clarity and direction to
              turn that around.
            </p>
          </div>
        </div>
      </section>

      {/* ── What We Review ────────────────────────────────────────────────── */}
      <section className="bg-[#222222] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              The Audit
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
              What we review
            </h2>
            <p className="text-white/50 text-lg mt-4 font-normal max-w-2xl mx-auto">
              Every audit covers eight core areas of your social media presence, reviewed manually by our team.
            </p>
          </div>

          <div ref={reviewRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviewItems.map((item, i) => (
              <div
                key={item.title}
                className="reveal-scale bg-[#2d2d2d] border border-white/5 hover:border-[#FFC512]/30 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 group"
                data-delay={i}
              >
                <div className="w-10 h-10 rounded-lg bg-[#FFC512]/10 group-hover:bg-[#FFC512] text-[#FFC512] group-hover:text-[#222222] flex items-center justify-center mb-4 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="font-display font-semibold text-white text-sm mb-2 tracking-tight group-hover:text-[#FFC512] transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed font-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What You Get ──────────────────────────────────────────────────── */}
      <section className="bg-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              Deliverables
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
              What you get
            </h2>
          </div>

          <div ref={deliverablesRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {deliverables.map((d, i) => (
              <div
                key={d.title}
                className="reveal-scale bg-[#222222] border border-white/8 rounded-2xl p-8 text-center"
                data-delay={i}
              >
                <div className="w-12 h-12 rounded-full bg-[#FFC512]/10 text-[#FFC512] flex items-center justify-center mx-auto mb-5">
                  {d.icon}
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-3 tracking-tight">{d.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed font-normal">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mid CTA ───────────────────────────────────────────────────────── */}
      <section className="bg-[#222222] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFC512]/5 border border-[#FFC512]/20 rounded-2xl px-8 py-12 text-center">
            <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl tracking-tight mb-4">
              Ready to grow your business?
            </h2>
            <p className="text-white/60 text-lg mb-8 font-normal">
              Get your free social media audit today — no commitment, no jargon, just honest answers.
            </p>
            <button
              onClick={() => { trackButtonClick('Book Your Free Audit', 'audit_mid_cta'); openAuditModal('service') }}
              className="inline-flex items-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Book Your Free Audit
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              The Process
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#222222] mt-3 tracking-tight leading-tight">
              How the audit works
            </h2>
            <p className="text-[#555] text-lg mt-4 font-normal max-w-2xl mx-auto">
              Simple, straightforward, and designed to give you real answers — not fluff.
            </p>
          </div>

          <div ref={stepsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="reveal-scale relative" data-delay={i}>
                {i < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:block absolute top-7 h-px bg-[#FFC512]/20 z-0"
                    style={{ left: '56px', width: 'calc(100% - 56px)' }}
                  />
                )}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-[#FFC512] text-[#222222] font-display font-extrabold text-lg flex items-center justify-center mb-5 tracking-tight">
                    {step.number}
                  </div>
                  <h3 className="font-display font-semibold text-[#222222] text-xl mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-[#555] text-sm leading-relaxed font-normal">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who It's For ──────────────────────────────────────────────────── */}
      <section className="bg-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              Is This For You?
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
              Who should get an audit
            </h2>
          </div>

          <div ref={whoRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whoItems.map((item, i) => (
              <div
                key={item.title}
                className="reveal-scale bg-[#222222] border border-white/8 rounded-2xl p-8"
                data-delay={i}
              >
                <div className="w-8 h-8 rounded-full bg-[#FFC512] text-[#222222] font-display font-extrabold text-sm flex items-center justify-center mb-5">
                  {i + 1}
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed font-normal">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-white/40 text-sm mt-10 font-normal">
            Based in South Yorkshire — serving Rotherham, Barnsley, Wath and surrounding areas.
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#222222] py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">FAQ</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
              Questions? We've got answers.
            </h2>
          </div>

          <div ref={faqRef} className="reveal bg-[#1a1a1a] rounded-2xl border border-white/8 px-8 divide-y divide-white/8">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Services ──────────────────────────────────────────────── */}
      <section className="bg-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              Explore More
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3 tracking-tight">
              Related services
            </h2>
          </div>

          <div ref={relatedRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { title: 'Social Media Strategy', href: '/services/social-media-strategy', desc: 'A clear, goal-driven plan for your social media channels.' },
              { title: 'Social Media Management', href: '/services/social-media-management', desc: 'We handle your accounts end-to-end — content, scheduling, and reporting.' },
              { title: 'Local SEO', href: '/services/local-seo', desc: 'Rank higher in local search results across South Yorkshire.' },
            ].map((s, i) => (
              <Link
                key={s.title}
                href={s.href}
                className="reveal-scale group bg-[#222222] border border-white/5 hover:border-[#FFC512]/30 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1"
                data-delay={i}
              >
                <h3 className="font-display font-semibold text-white text-base mb-2 group-hover:text-[#FFC512] transition-colors tracking-tight">
                  {s.title}
                </h3>
                <p className="text-white/50 text-sm font-normal leading-snug">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-[#FFC512] text-xs font-medium mt-3">
                  Learn more <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/services" className="text-white/40 hover:text-[#FFC512] text-sm font-medium transition-colors">
              ← View all services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────────────────── */}
      <section className="bg-[#222222] relative overflow-hidden py-24 border-t border-white/5">
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
            Get your free social media audit and walk away with a clear picture of where you stand
            and exactly what to do next — with no commitment required.
          </p>
          <button
            onClick={() => { trackButtonClick('Book Your Free Audit', 'audit_cta'); openAuditModal('service') }}
            className="inline-flex items-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#FFC512]/20"
          >
            Book Your Free Audit
            <ArrowRight size={18} />
          </button>
          <p className="text-white/25 text-sm mt-5 font-normal">Free. No commitment. Honest advice.</p>
        </div>
      </section>
    </>
  )
}

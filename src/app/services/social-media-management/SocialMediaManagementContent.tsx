'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Calendar,
  MessageSquare,
  BarChart2,
  Users,
  Palette,
  FileText,
  Eye,
  Bell,
} from 'lucide-react'
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal'
import { trackButtonClick } from '@/lib/analytics'
import { useAuditModal } from '@/components/providers/AuditModalProvider'

const included = [
  'Branded post design',
  'Custom captions & hashtags',
  'Content scheduling',
  'Platform management (Facebook & Instagram)',
  'Community responses & engagement',
  'Monthly analytics report',
  'Logo on every post',
  'Content calendar',
  'Competitor monitoring',
  'Profile optimisation',
]

const steps = [
  {
    number: '01',
    title: 'Onboarding',
    desc: 'We learn about your business, brand guidelines, tone of voice, and goals. We get access to your accounts and set everything up properly from day one.',
  },
  {
    number: '02',
    title: 'Strategy',
    desc: 'We build a content plan tailored to your audience in South Yorkshire — what to post, when to post, and how to position your brand against local competitors.',
  },
  {
    number: '03',
    title: 'Content Creation',
    desc: 'Our designers and copywriters produce branded posts, captions, and hashtag sets that reflect your business and are designed to drive engagement.',
  },
  {
    number: '04',
    title: 'Publishing & Reporting',
    desc: 'We schedule and publish your content at optimal times, engage with your community, and send you a clear monthly report showing exactly what is working.',
  },
]

const audiences = [
  {
    title: 'Restaurants & Cafes',
    location: 'Wath, Barnsley & beyond',
    desc: 'Showcase your menu, specials, and atmosphere with visually stunning posts that bring hungry customers through your door.',
  },
  {
    title: 'Trades & Services',
    location: 'Rotherham & South Yorkshire',
    desc: 'Build trust and generate enquiries with before/after posts, testimonials, and professional branded content that sets you apart from the competition.',
  },
  {
    title: 'Retail & Salons',
    location: 'Across South Yorkshire',
    desc: 'Drive footfall and repeat business by staying front-of-mind with your local customers through consistent, engaging social media content.',
  },
]

const faqs = [
  {
    q: 'How many posts per month do I get?',
    a: 'Our standard packages include 3–5 posts per week across your chosen platforms, which works out to 12–20 posts per month. We can increase this frequency depending on your package and requirements.',
  },
  {
    q: 'What platforms do you manage?',
    a: 'We primarily manage Facebook and Instagram, which are the most effective platforms for local businesses in South Yorkshire. We can also include TikTok, LinkedIn, or X (Twitter) depending on your target audience.',
  },
  {
    q: 'Do I need to approve content before it goes live?',
    a: 'That\'s entirely up to you. Most clients opt for an approval workflow where we send content for sign-off before publishing. Others prefer to trust us to handle it entirely — we\'re flexible and work around what suits your schedule.',
  },
  {
    q: 'How quickly will I see results?',
    a: 'Most clients see meaningful improvements in engagement and reach within the first 4–6 weeks. Growing a genuine local audience takes consistent effort over 3–6 months, but you\'ll see progress every month with our reporting.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. We work on rolling monthly agreements with no long-term contracts. We\'re confident in the results we deliver, so we don\'t need to lock you in. Just give us 30 days\' notice.',
  },
]

const relatedServices = [
  {
    title: 'Paid Advertising',
    href: '/services/paid-advertising',
    desc: 'Targeted Facebook & Instagram campaigns that generate real leads.',
  },
  {
    title: 'Content Creation',
    href: '/services/content-creation',
    desc: 'Scroll-stopping branded content designed for your audience.',
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

export default function SocialMediaManagementContent() {
  const whatWeDoRef = useScrollReveal<HTMLDivElement>(0.15)
  const includedRef = useStaggerReveal<HTMLDivElement>(0.1)
  const stepsRef = useStaggerReveal<HTMLDivElement>(0.1)
  const audienceRef = useStaggerReveal<HTMLDivElement>(0.1)
  const statsRef = useStaggerReveal<HTMLDivElement>(0.1)
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
            Social Media Services
          </span>
          <h1
            className="font-display font-extrabold text-white mb-6 max-w-4xl mx-auto"
            style={{ fontSize: 'clamp(32px, 5.5vw, 72px)', lineHeight: 0.92, letterSpacing: '-0.02em' }}
          >
            Social Media Management for{' '}
            <span className="text-[#FFC512]">South Yorkshire Businesses</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            We manage your Facebook and Instagram so you can focus on running your business.
            Consistent posting, branded content, and genuine community engagement — every single week.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Facebook & Instagram', '3–5 posts/week', 'From £120/mo', 'Cancel anytime'].map((t) => (
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
            onClick={() => { trackButtonClick('Book Your Free Audit', 'smm_hero'); openAuditModal('service') }}
            className="inline-flex items-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#FFC512]/20"
          >
            Book Your Free Audit <ArrowRight size={18} />
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
              Consistent, branded social media — done for you
            </h2>
            <p className="text-white/60 text-lg font-normal leading-relaxed mb-4">
              Most local businesses in South Yorkshire know they need to be active on social media —
              but between running the day-to-day, there simply isn't time. Posts become sporadic,
              content looks inconsistent, and engagement drops off. That's where we come in.
            </p>
            <p className="text-white/60 text-lg font-normal leading-relaxed mb-4">
              We handle everything: designing branded posts, writing compelling captions, researching
              the right hashtags, scheduling content at the best times, responding to comments and
              messages, and sending you a clear monthly report. You stay completely in control without
              lifting a finger.
            </p>
            <p className="text-white/60 text-lg font-normal leading-relaxed">
              Our approach is built around your local audience. We know the South Yorkshire market —
              whether you're based in Rotherham, Barnsley, Wath, or anywhere in between. Your
              content will feel local, genuine, and relevant to the customers you want to attract.
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
              Everything you need, nothing you don't
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

      {/* ── How It Works ── */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              How It Works
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
              From sign-up to social success in 4 steps
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

      {/* ── Mid-page CTA ── */}
      <section className="bg-[#222222] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFC512]/5 border border-[#FFC512]/20 rounded-2xl px-8 py-12 text-center">
            <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl tracking-tight mb-4">
              Let us take social media off your plate
            </h2>
            <p className="text-white/60 text-lg mb-8 font-normal">
              Book a free audit and we'll show you exactly how we'd manage your accounts.
            </p>
            <button
              onClick={() => { trackButtonClick('Book Your Free Audit', 'smm_mid_cta'); openAuditModal('service') }}
              className="inline-flex items-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Book Your Free Audit <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              Who It's For
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
              Built for local businesses across South Yorkshire
            </h2>
          </div>
          <div ref={audienceRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {audiences.map((a, i) => (
              <div
                key={a.title}
                data-delay={i}
                className="reveal bg-[#2d2d2d] border border-white/5 hover:border-[#FFC512]/30 rounded-xl p-6 transition-all duration-200"
              >
                <span className="text-[#FFC512] text-xs font-medium uppercase tracking-widest">
                  {a.location}
                </span>
                <h3 className="font-display font-semibold text-white text-xl mt-2 mb-3">{a.title}</h3>
                <p className="text-white/60 text-sm font-normal leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-white/40 text-sm mt-10 font-normal">
            We also work with gyms, clinics, letting agents, accountants, and many more. If you have a local business in South Yorkshire,{' '}
            <Link href="/contact" className="text-[#FFC512] hover:underline">get in touch</Link>.
          </p>
        </div>
      </section>

      {/* ── Why Bee Viral — Stats ── */}
      <section className="bg-[#222222] py-20 border-t border-b border-white/5">
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
            Ready to grow your South Yorkshire business?
          </h2>
          <p className="text-white/60 text-lg leading-relaxed font-normal mb-10">
            Book your free social media audit and we'll give you an honest assessment of your current
            presence — along with a clear plan to improve it.
          </p>
          <button
            onClick={() => { trackButtonClick('Book Your Free Audit', 'smm_cta'); openAuditModal('service') }}
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

'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Image,
  Video,
  Layers,
  FileText,
  Tag,
  Layout,
  X,
} from 'lucide-react'
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal'
import { trackButtonClick } from '@/lib/analytics'
import { useAuditModal } from '@/components/providers/AuditModalProvider'

const contentTypes = [
  {
    icon: <Image size={24} />,
    title: 'Static Posts & Graphics',
    desc: 'Eye-catching branded graphics designed to stop the scroll. Every post includes your logo, brand colours, and a clear message tailored for your South Yorkshire audience.',
  },
  {
    icon: <Video size={24} />,
    title: 'Instagram Reels',
    desc: 'Short-form vertical video is the highest-reach format on Instagram right now. We create Reels that showcase your business in an authentic, engaging way.',
  },
  {
    icon: <Layers size={24} />,
    title: 'Story Content',
    desc: 'Daily Stories keep your business top-of-mind between feed posts. We design full-screen story slides that drive direct messages and link clicks.',
  },
  {
    icon: <Video size={24} />,
    title: 'Branded Video Clips',
    desc: 'Short promotional video clips edited for social media. Perfect for product showcases, behind-the-scenes content, team introductions, and more.',
  },
  {
    icon: <Layout size={24} />,
    title: 'Promotional Banners',
    desc: 'Professional graphics for seasonal offers, events, and promotions. Designed to look consistent across Facebook, Instagram, and beyond.',
  },
  {
    icon: <FileText size={24} />,
    title: 'Caption & Hashtag Writing',
    desc: 'Compelling copy that complements your visuals — written in your brand voice with researched hashtags to maximise organic reach.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Brand Discovery',
    desc: 'We start with a detailed brand questionnaire and onboarding call. We learn your tone of voice, visual identity, target audience, and what makes your business unique in South Yorkshire.',
  },
  {
    number: '02',
    title: 'Design & Creation',
    desc: 'Our designers and videographers get to work creating a month\'s worth of branded content. Every piece is designed to your brand guidelines and optimised for each platform.',
  },
  {
    number: '03',
    title: 'Review & Approval',
    desc: 'We share your content calendar and all assets for approval before anything goes live. You can request revisions and we\'ll refine until you\'re 100% happy.',
  },
  {
    number: '04',
    title: 'Schedule & Publish',
    desc: 'Once approved, we schedule your content at optimal posting times. If you\'re on a management package, we handle publication and engagement too.',
  },
]

const comparisons = [
  {
    label: 'Generic Agency',
    icon: <X size={16} />,
    points: [
      'Stock photos and generic templates',
      'No knowledge of your local area',
      'Same content recycled across clients',
    ],
    accent: 'border-white/10 bg-[#2d2d2d]',
    textColor: 'text-white/40',
    iconColor: 'text-white/30',
  },
  {
    label: 'Bee Viral',
    icon: <Check size={16} />,
    points: [
      'Branded to your business — always',
      'Content that resonates with South Yorkshire audiences',
      'Built around your unique story and goals',
    ],
    accent: 'border-[#FFC512]/30 bg-[#FFC512]/5',
    textColor: 'text-white/80',
    iconColor: 'text-[#FFC512]',
  },
]

const faqs = [
  {
    q: 'Do I need to provide my own photos?',
    a: 'Not necessarily. We work with brand assets, stock photography, and user-provided images depending on your package. For the highest quality results, we do recommend providing a library of real photos of your business, team, and products — these always outperform stock imagery.',
  },
  {
    q: 'Can I request specific content?',
    a: 'Absolutely. Our monthly content calendar process includes a brief where you can specify any promotions, events, or topics you want covered. We always make room for ad-hoc content requests alongside your scheduled posts.',
  },
  {
    q: 'How do you match my brand?',
    a: 'During onboarding we collect your brand guidelines — fonts, colours, logo files, tone of voice, and any existing assets. If you don\'t have formal brand guidelines, we\'ll develop a consistent visual identity for your social media from scratch.',
  },
  {
    q: 'Do you write captions too?',
    a: 'Yes. Captions, hashtags, alt text, and any call-to-action copy are all included. We write in your brand\'s voice and tailor language for your target audience — whether that\'s professional B2B or friendly and casual consumer-facing content.',
  },
  {
    q: 'What file formats do you deliver?',
    a: 'We deliver content optimised natively for each platform (Instagram, Facebook, Stories, Reels). If you need raw files for your own use, we can provide PNG, MP4, and PDF formats on request.',
  },
]

const relatedServices = [
  {
    title: 'Social Media Management',
    href: '/services/social-media-management',
    desc: 'We post and manage your accounts as well as creating the content.',
  },
  {
    title: 'Paid Advertising',
    href: '/services/paid-advertising',
    desc: 'Great content is the foundation of high-performing ads.',
  },
  {
    title: 'Social Media Strategy',
    href: '/services/social-media-strategy',
    desc: 'A content strategy that gives every post a purpose.',
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

export default function ContentCreationContent() {
  const overviewRef = useScrollReveal<HTMLDivElement>(0.15)
  const contentTypesRef = useStaggerReveal<HTMLDivElement>(0.1)
  const stepsRef = useStaggerReveal<HTMLDivElement>(0.1)
  const comparisonRef = useStaggerReveal<HTMLDivElement>(0.1)
  const statsRef = useStaggerReveal<HTMLDivElement>(0.1)
  const benefitsRef = useScrollReveal<HTMLDivElement>(0.15)
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
            Content Creation
          </span>
          <h1
            className="font-display font-extrabold text-white mb-6 max-w-4xl mx-auto"
            style={{ fontSize: 'clamp(32px, 5.5vw, 72px)', lineHeight: 0.92, letterSpacing: '-0.02em' }}
          >
            Professional Content Creation for{' '}
            <span className="text-[#FFC512]">South Yorkshire Businesses</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            Scroll-stopping graphics, Reels, and captions designed to reflect your brand, engage your
            audience, and grow your following — every month without fail.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Branded graphics', 'Reels & video', 'Custom captions', 'Your logo on every post'].map((t) => (
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
            onClick={() => { trackButtonClick('Book Your Free Audit', 'cc_hero'); openAuditModal('service') }}
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
              Why Content Matters
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 mb-6 tracking-tight leading-tight">
              Content that reflects your brand and earns attention
            </h2>
            <p className="text-white/60 text-lg font-normal leading-relaxed mb-4">
              The average person scrolls through 300 feet of social media content every day. Your
              posts have less than two seconds to stop someone mid-scroll. Weak visuals, generic
              captions, and inconsistent branding don't stand a chance.
            </p>
            <p className="text-white/60 text-lg font-normal leading-relaxed mb-4">
              We create content that looks professional, feels authentic to your brand, and is
              designed specifically for local audiences in South Yorkshire. Whether you're a
              restaurant in Barnsley, a trades business in Rotherham, or a salon in Wath, your
              content will stand out and build trust with the people who matter most.
            </p>
            <p className="text-white/60 text-lg font-normal leading-relaxed">
              Every piece of content we create carries your logo, your colours, and your voice.
              Consistency is what turns casual followers into loyal customers.
            </p>
          </div>
        </div>
      </section>

      {/* ── Content Types ── */}
      <section className="bg-[#222222] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              Content Types
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
              Every format your brand needs
            </h2>
          </div>
          <div ref={contentTypesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentTypes.map((type, i) => (
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

      {/* ── How We Create Content ── */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              How We Work
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
              Our content creation process
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
              Want to see what we'd create for your business?
            </h2>
            <p className="text-white/60 text-lg mb-8 font-normal">
              Book a free audit and we'll show you content examples relevant to your industry.
            </p>
            <button
              onClick={() => { trackButtonClick('Book Your Free Audit', 'cc_mid_cta'); openAuditModal('service') }}
              className="inline-flex items-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Book Your Free Audit <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ── What Makes Our Content Different ── */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              The Difference
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
              Not all content is created equal
            </h2>
          </div>
          <div ref={comparisonRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {comparisons.map((col, i) => (
              <div
                key={col.label}
                data-delay={i}
                className={`reveal border rounded-2xl p-8 transition-all duration-200 ${col.accent}`}
              >
                <h3 className={`font-display font-bold text-xl mb-6 ${i === 1 ? 'text-[#FFC512]' : 'text-white/40'}`}>
                  {col.label}
                </h3>
                <ul className="space-y-4">
                  {col.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className={col.iconColor}>{col.icon}</span>
                      <span className={`text-sm font-normal leading-snug ${col.textColor}`}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="bg-[#222222] py-20 border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { stat: '200+', label: 'Brands managed across South Yorkshire' },
              { stat: '5M+', label: 'Combined social media reach generated' },
              { stat: '100%', label: 'Branded to your business — always' },
            ].map((item, i) => (
              <div
                key={item.label}
                data-delay={i}
                className="reveal-scale bg-[#2d2d2d] border border-white/5 rounded-xl p-8"
              >
                <p className="font-display font-extrabold text-[#FFC512] text-5xl mb-3">{item.stat}</p>
                <p className="text-white/60 text-sm font-normal">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Benefits ── */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={benefitsRef} className="reveal max-w-3xl mx-auto text-center">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              Who It's For
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 mb-6 tracking-tight leading-tight">
              For any local business that wants a professional online presence
            </h2>
            <p className="text-white/60 text-lg font-normal leading-relaxed mb-6">
              You don't need to be a big brand to look like one online. Our content creation service
              gives local businesses in South Yorkshire access to the same quality of design and
              content strategy as national companies — at a price that makes sense for your budget.
            </p>
            <p className="text-white/60 text-lg font-normal leading-relaxed mb-8">
              Whether you're just starting out and need a consistent brand identity, or you've been
              posting for years but your content never quite looks right, we can help. From
              restaurants and gyms to tradespeople and solicitors — if you have a business in
              South Yorkshire and you want to look better online, this service is for you.
            </p>
            <Link
              href="/packages"
              onClick={() => trackButtonClick('View Packages', 'cc_who')}
              className="inline-flex items-center gap-2 text-[#FFC512] font-medium text-base hover:gap-3 transition-all duration-200"
            >
              View our packages <ArrowRight size={16} />
            </Link>
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
            Start creating content that actually works
          </h2>
          <p className="text-white/60 text-lg leading-relaxed font-normal mb-10">
            Book your free audit today and see exactly how your current content stacks up —
            and what we'd do to make it better.
          </p>
          <button
            onClick={() => { trackButtonClick('Book Your Free Audit', 'cc_cta'); openAuditModal('service') }}
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

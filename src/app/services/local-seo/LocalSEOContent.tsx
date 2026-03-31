'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  ChevronDown,
  MapPin,
  Search,
  Star,
  TrendingUp,
  FileText,
  BarChart2,
} from 'lucide-react'
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal'
import { trackButtonClick } from '@/lib/analytics'
import { useAuditModal } from '@/components/providers/AuditModalProvider'

const included = [
  'Google Business Profile optimisation',
  'Local keyword research',
  'On-page SEO improvements',
  'Citation building & consistency',
  'Review management strategy',
  'SEO blog post creation',
  'Monthly rankings report',
  'Competitor analysis',
]

const localStats = [
  {
    stat: '46%',
    label: 'of all Google searches have local intent',
    sub: 'Nearly half of every search on Google is someone looking for something nearby.',
  },
  {
    stat: '88%',
    label: 'of local searches lead to a call or visit within 24 hours',
    sub: 'People searching locally are ready to buy — you just need to be visible.',
  },
  {
    stat: '76%',
    label: 'of people who search nearby visit within a day',
    sub: 'Local search intent converts faster than almost any other marketing channel.',
  },
]

const steps = [
  {
    number: '01',
    title: 'SEO Audit',
    desc: 'We start by reviewing your current online presence — Google Business Profile, website, existing rankings, and local citations. This gives us a clear picture of where you are and what\'s holding you back.',
  },
  {
    number: '02',
    title: 'Keyword Strategy',
    desc: 'We research the exact terms your local customers are searching in Rotherham, Barnsley, Wath, and across South Yorkshire. We identify high-value, achievable keywords that drive real enquiries.',
  },
  {
    number: '03',
    title: 'Optimisation',
    desc: 'We optimise your Google Business Profile, improve on-page SEO, build local citations, and create SEO-focused blog content that helps you rank for your target terms.',
  },
  {
    number: '04',
    title: 'Track & Grow',
    desc: 'We track your keyword rankings, organic traffic, and Google Business Profile performance month by month. We share transparent reports and continuously refine your strategy.',
  },
]

const locations = [
  'Wath upon Dearne',
  'Rotherham',
  'Barnsley',
  'Sheffield',
  'Doncaster',
  'Mexborough',
  'Swinton',
  'Dearne Valley',
  'Rawmarsh',
  'Maltby',
  'Hoyland',
  'Penistone',
]

const faqs = [
  {
    q: 'How long does SEO take to work?',
    a: 'Local SEO typically starts showing meaningful results within 3–6 months. Google Business Profile optimisation can produce quicker wins — sometimes within weeks. SEO is a long-term investment, and results compound over time. We set realistic expectations from the start.',
  },
  {
    q: 'Do you optimise my Google Business Profile?',
    a: 'Yes — Google Business Profile (formerly Google My Business) is one of the most important factors for local search visibility. We fully optimise your profile including business information, categories, photos, posts, Q&A, and review responses.',
  },
  {
    q: 'What are SEO blog posts?',
    a: 'SEO blog posts are articles written specifically to rank in Google for search terms your local customers use. For example, a plumber in Rotherham might rank for "emergency plumber Rotherham" through a well-written, optimised blog post. We research the topics and write the content for you.',
  },
  {
    q: 'Will I rank for every keyword?',
    a: 'We can\'t guarantee rankings for specific keywords — no ethical SEO agency can. What we can guarantee is that we\'ll target the right keywords for your business, implement best-practice optimisation, and track progress transparently. Most clients see significant ranking improvements within 6 months.',
  },
  {
    q: 'Do you guarantee first page rankings?',
    a: 'No. Any agency that guarantees first page rankings is making a promise they can\'t keep. What we guarantee is the quality of our work, full transparency, and a continuous effort to improve your local search visibility. We\'ll always tell you what\'s realistic for your market.',
  },
]

const relatedServices = [
  {
    title: 'Social Media Management',
    href: '/services/social-media-management',
    desc: 'Combine local SEO with consistent social media for maximum local visibility.',
  },
  {
    title: 'Content Creation',
    href: '/services/content-creation',
    desc: 'Great content supports both your SEO and your social media presence.',
  },
  {
    title: 'Social Media Audit',
    href: '/services/social-media-audit',
    desc: 'Understand your full digital footprint with a comprehensive audit.',
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

export default function LocalSEOContent() {
  const overviewRef = useScrollReveal<HTMLDivElement>(0.15)
  const includedRef = useStaggerReveal<HTMLDivElement>(0.1)
  const statsRef = useStaggerReveal<HTMLDivElement>(0.1)
  const stepsRef = useStaggerReveal<HTMLDivElement>(0.1)
  const locationsRef = useStaggerReveal<HTMLDivElement>(0.1)
  const whoRef = useScrollReveal<HTMLDivElement>(0.15)
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
            Local SEO
          </span>
          <h1
            className="font-display font-extrabold text-white mb-6 max-w-4xl mx-auto"
            style={{ fontSize: 'clamp(32px, 5.5vw, 72px)', lineHeight: 0.92, letterSpacing: '-0.02em' }}
          >
            Local SEO Services That Put Your Business{' '}
            <span className="text-[#FFC512]">on the Map in South Yorkshire</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            When someone in Rotherham, Barnsley or Wath searches for your service — you should be
            the first result they see. We make that happen with proven local SEO strategies tailored
            to the South Yorkshire market.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Google Business Profile', 'Local citations', 'SEO blog content', 'Keyword targeting'].map((t) => (
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
            onClick={() => { trackButtonClick('Book Your Free Audit', 'seo_hero'); openAuditModal('service') }}
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
              What Is Local SEO?
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 mb-6 tracking-tight leading-tight">
              Be the first business your local customers find
            </h2>
            <p className="text-white/60 text-lg font-normal leading-relaxed mb-4">
              Local SEO (Search Engine Optimisation) is the process of improving your visibility in
              Google's local search results — the map pack, Google Business Profile listings, and
              organic search results that appear when someone searches for a service near them.
            </p>
            <p className="text-white/60 text-lg font-normal leading-relaxed mb-4">
              When a homeowner in Rotherham searches "boiler repair near me", or someone in
              Barnsley looks for "best pizza restaurant Barnsley", the businesses that appear first
              win the customer. Local SEO is what determines whether that's you or your competitor.
            </p>
            <p className="text-white/60 text-lg font-normal leading-relaxed">
              We specialise in local SEO for small and medium businesses across South Yorkshire.
              Our approach combines Google Business Profile optimisation, technical on-page SEO,
              local citation building, and content creation to build a lasting online presence
              that keeps generating leads month after month.
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
              A complete local SEO service
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

      {/* ── Local Search Stats ── */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              Why It Matters
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
              Local search is where customers decide
            </h2>
          </div>
          <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {localStats.map((item, i) => (
              <div
                key={item.stat}
                data-delay={i}
                className="reveal-scale text-center bg-[#2d2d2d] border border-white/5 rounded-2xl p-8"
              >
                <p className="font-display font-extrabold text-[#FFC512] text-5xl mb-3">{item.stat}</p>
                <p className="text-white font-semibold text-base mb-3 leading-tight">{item.label}</p>
                <p className="text-white/50 text-sm font-normal leading-relaxed">{item.sub}</p>
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
              Find out where you rank right now
            </h2>
            <p className="text-white/60 text-lg mb-8 font-normal">
              Book a free SEO audit and we'll show you exactly where you appear in local search —
              and what it would take to reach position one.
            </p>
            <button
              onClick={() => { trackButtonClick('Book Your Free Audit', 'seo_mid_cta'); openAuditModal('service') }}
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
              Our proven local SEO process
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

      {/* ── Target Locations ── */}
      <section className="bg-[#222222] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              Locations We Cover
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
              Local SEO across South Yorkshire
            </h2>
          </div>
          <div ref={locationsRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc, i) => (
              <div
                key={loc}
                data-delay={i}
                className="reveal flex items-center gap-2 bg-[#2d2d2d] border border-white/5 hover:border-[#FFC512]/30 rounded-xl px-4 py-3 transition-all duration-200"
              >
                <MapPin size={14} className="text-[#FFC512] flex-shrink-0" />
                <span className="text-white/70 text-sm font-normal">{loc}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-white/40 text-sm mt-6 font-normal">
            Don't see your town? We cover the whole of South Yorkshire.{' '}
            <Link href="/contact" className="text-[#FFC512] hover:underline">Ask us.</Link>
          </p>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={whoRef} className="reveal max-w-3xl mx-auto text-center">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              Who It's For
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 mb-6 tracking-tight leading-tight">
              Perfect for any local service business
            </h2>
            <p className="text-white/60 text-lg font-normal leading-relaxed mb-8">
              Local SEO is especially powerful for businesses where customers search before they
              buy. Trades and home services, restaurants and cafes, healthcare and dental clinics,
              legal and financial services, gyms and wellness centres, retail shops — if your
              customers search Google before choosing a provider, you need local SEO.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              {['Tradespeople', 'Restaurants & cafes', 'Dental & medical clinics', 'Solicitors & accountants', 'Gyms & fitness studios', 'Retail & independent shops'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check size={14} className="text-[#FFC512] flex-shrink-0" />
                  <span className="text-white/60 text-sm font-normal">{item}</span>
                </div>
              ))}
            </div>
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
            Ready to rank higher in South Yorkshire?
          </h2>
          <p className="text-white/60 text-lg leading-relaxed font-normal mb-10">
            Book your free local SEO audit and we'll show you exactly where you stand — and what
            it would take to reach the top of Google in your area.
          </p>
          <button
            onClick={() => { trackButtonClick('Book Your Free Audit', 'seo_cta'); openAuditModal('service') }}
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

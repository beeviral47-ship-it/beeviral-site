'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, ChevronDown } from 'lucide-react'
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal'
import { trackButtonClick } from '@/lib/analytics'
import { useAuditModal } from '@/components/providers/AuditModalProvider'

const included = [
  'Custom design — no templates, built around your brand',
  'Mobile-first & fully responsive',
  'Sanity CMS — manage your own content easily',
  'SEO foundation — structured data, sitemap, fast loading',
  'Google Analytics 4 integration',
  'Hosting & domain configuration',
]

const steps = [
  {
    number: '01',
    title: 'Discovery',
    desc: 'We learn about your business, your brand, your goals, and your target customers. We agree on a design direction and sitemap before writing a single line of code.',
  },
  {
    number: '02',
    title: 'Design',
    desc: 'Our designer builds a custom mockup around your brand. We refine it until you\'re completely happy — no generic templates, no guesswork, no compromise.',
  },
  {
    number: '03',
    title: 'Build',
    desc: 'We develop your site on Next.js with Sanity CMS — fast, SEO-ready, and easy to update. You\'ll be able to manage your own content from day one without touching code.',
  },
  {
    number: '04',
    title: 'Launch',
    desc: 'We configure your hosting, connect your domain, set up Google Analytics 4, and hand over a fully tested site that\'s ready to generate real enquiries.',
  },
]

const audiences = [
  {
    title: 'No Website Yet',
    location: 'Across South Yorkshire',
    desc: 'You know you need to be online but aren\'t sure where to start. We\'ll guide you through the whole process and build something you\'re genuinely proud of.',
  },
  {
    title: 'Outdated Website',
    location: 'Rotherham, Barnsley & beyond',
    desc: 'Your current site hasn\'t been updated in years and isn\'t mobile-friendly. We\'ll redesign it from scratch and make sure it properly represents your business.',
  },
  {
    title: 'Not Getting Enquiries',
    location: 'Wath & South Yorkshire',
    desc: 'You have a site but it\'s not generating leads. We\'ll diagnose what\'s not working and build a new one focused on converting visitors into paying customers.',
  },
]

const faqs = [
  {
    q: 'How long does a website take to build?',
    a: 'Most projects take 4–6 weeks from kickoff to launch. This includes the design sign-off, build, content upload, and testing phases. Timelines can vary depending on how quickly content is supplied.',
  },
  {
    q: 'Do I need to provide content and images?',
    a: 'We\'ll guide you on what we need. For most projects we write or assist with copy, and we can source professional stock imagery. If you have photos of your team or premises, even better — we\'ll incorporate them.',
  },
  {
    q: 'Can I update the site myself after it\'s built?',
    a: 'Yes. We build all our sites with Sanity CMS, which gives you a simple, intuitive dashboard to update pages, add blog posts, change images, and manage content — no technical knowledge needed.',
  },
  {
    q: 'Will it work properly on mobile?',
    a: 'Absolutely. Every site we build is mobile-first. We design and test on all screen sizes before launch — because most of your customers will visit on their phones.',
  },
  {
    q: 'What does the monthly fee cover?',
    a: 'The monthly retainer covers hosting, security updates, technical maintenance, CMS support, and ongoing social media or SEO work depending on your package. We keep your site fast and up to date so you don\'t have to.',
  },
]

const relatedServices = [
  {
    title: 'Booking Systems & Automation',
    href: '/services/booking-systems',
    desc: 'Add online booking, automated reminders, and cancellation management to your new website.',
  },
  {
    title: 'SEO & Content Marketing',
    href: '/services/local-seo',
    desc: 'Monthly blog content and local SEO that gets your new site found on Google.',
  },
  {
    title: 'Social Media Management',
    href: '/services/social-media-management',
    desc: 'Full-service management of your Instagram, Facebook and TikTok alongside your website.',
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

export default function WebsiteDesignContent() {
  const whatWeDoRef = useScrollReveal<HTMLDivElement>(0.15)
  const includedRef = useStaggerReveal<HTMLDivElement>(0.1)
  const stepsRef    = useStaggerReveal<HTMLDivElement>(0.1)
  const audienceRef = useStaggerReveal<HTMLDivElement>(0.1)
  const statsRef    = useStaggerReveal<HTMLDivElement>(0.1)
  const faqRef      = useScrollReveal<HTMLDivElement>(0.1)
  const relatedRef  = useStaggerReveal<HTMLDivElement>(0.1)
  const ctaRef      = useScrollReveal<HTMLDivElement>(0.2)
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
            Web Design & Build
          </span>
          <h1
            className="font-display font-extrabold text-white mb-6 max-w-4xl mx-auto"
            style={{ fontSize: 'clamp(32px, 5.5vw, 72px)', lineHeight: 0.92, letterSpacing: '-0.02em' }}
          >
            Websites That Work As{' '}
            <span className="text-[#FFC512]">Hard As You Do</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            We build custom, mobile-first websites for local businesses across South Yorkshire — fast,
            professional, and designed to turn visitors into paying customers.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Custom design', 'Mobile-first', 'Sanity CMS', 'From £800 setup + £200/mo'].map((t) => (
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
            onClick={() => { trackButtonClick('Get a Free Digital Health Check', 'web_hero'); openAuditModal('service') }}
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
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 mb-6 tracking-tight leading-tight">
              A proper website, built properly
            </h2>
            <p className="text-white/60 text-lg font-normal leading-relaxed mb-4">
              Too many local businesses are either invisible online or stuck with a website that was
              built years ago, doesn't work on mobile, and isn't bringing in any business. A bad
              website can actively cost you customers — people visit, can't find what they need, and
              leave.
            </p>
            <p className="text-white/60 text-lg font-normal leading-relaxed mb-4">
              We build websites on Next.js — the same framework used by some of the world's biggest
              companies — so your site is fast, secure, and built to last. Every site comes with
              Sanity CMS so you can update your own content without touching code or calling a
              developer.
            </p>
            <p className="text-white/60 text-lg font-normal leading-relaxed">
              We also bake in the SEO foundations from day one: proper heading structure, schema markup,
              a sitemap, fast load times, and Google Analytics 4. Your site will be ready to be found
              by customers across South Yorkshire the moment it goes live.
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
              From brief to live site in 4 steps
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
              Ready for a website that actually works?
            </h2>
            <p className="text-white/60 text-lg mb-8 font-normal">
              Book a free Digital Health Check and we'll show you exactly how we'd approach your project.
            </p>
            <button
              onClick={() => { trackButtonClick('Get a Free Digital Health Check', 'web_mid_cta'); openAuditModal('service') }}
              className="inline-flex items-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Get a Free Digital Health Check <ArrowRight size={18} />
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
            Perfect for local businesses in South Yorkshire who have no website, an outdated website,
            or a website that isn't generating enquiries.
          </p>
          <p className="text-center mt-4 text-[#FFC512]/60 text-sm font-normal">
            From £800 one-time setup + £200/month maintenance
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
              { stat: '200+', label: 'Businesses helped' },
              { stat: '10+', label: 'Years experience' },
              { stat: '98%', label: 'Client retention rate' },
              { stat: '4–6wk', label: 'Average build time' },
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
            Book your free Digital Health Check and we'll give you an honest assessment of your current
            online presence — along with a clear plan and a fixed price to move forward.
          </p>
          <button
            onClick={() => { trackButtonClick('Get a Free Digital Health Check', 'web_cta'); openAuditModal('service') }}
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

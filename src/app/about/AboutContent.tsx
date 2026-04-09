'use client'

import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal'
import { trackButtonClick } from '@/lib/analytics'
import { useAuditModal } from '@/components/providers/AuditModalProvider'
import { LinkedInIcon } from '@/components/ui/SocialIcons'

// ── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: '10+',  label: 'Years of Experience' },
  { value: '200+', label: 'Local Businesses Served' },
  { value: '5M+',  label: 'People Reached' },
  { value: '776+', label: 'Client Projects Completed' },
]

const values = [
  {
    num: '01',
    title: 'Results Over Reports',
    desc: 'We don\'t send you a report full of impressive-looking numbers that don\'t pay your bills. Every campaign is measured against one thing: did it generate real enquiries, bookings, or sales? If it didn\'t, we change it.',
  },
  {
    num: '02',
    title: 'One Team, One Contact',
    desc: 'You get one point of contact who knows your business. Not a junior account manager reading from a script — Tahir and the Bee Viral team, directly accountable to you, every month.',
  },
  {
    num: '03',
    title: 'Straight Answers, Always',
    desc: 'If something isn\'t working, we\'ll tell you first. If a different approach will perform better, we\'ll say so — even if it costs us. You\'ll never hear us spin a bad month as a "learning opportunity."',
  },
  {
    num: '04',
    title: 'Local Knowledge You Can\'t Buy',
    desc: 'We know the South Yorkshire market — what Rotherham customers respond to, what works in Barnsley that wouldn\'t work in London. That local advantage is built into everything we do.',
  },
]

const whyReasons = [
  {
    num: '01',
    headline: 'Real experience. Not just a pitch deck.',
    body: '776 completed client projects. 290+ clients served across the UK, US, Canada, and Europe. Tahir built his reputation doing the actual work — before he built an agency around it.',
  },
  {
    num: '02',
    headline: 'Local knowledge. Personal accountability.',
    body: 'We know South Yorkshire. We work here, and our reputation depends entirely on your results. There\'s no hiding behind account managers or offshore teams.',
  },
  {
    num: '03',
    headline: 'Everything handled. One team. No handoffs.',
    body: 'Website, social media, SEO, paid ads, booking systems — under one roof, run by one team who understand how all the pieces connect. No briefing four different suppliers. No gaps.',
  },
]

const clientResults = [
  {
    business: 'The Blossom Café',
    location: 'Wath-upon-Dearne',
    stat: '+1,340%',
    statLabel: 'increase in Instagram reach',
    quote: 'We went from posting to nobody to people walking in mentioning our posts.',
    slug: 'the-blossom-cafe',
  },
  {
    business: 'Hartley Roofing',
    location: 'Rotherham',
    stat: '40+',
    statLabel: 'qualified leads per month',
    quote: 'We had to take on another roofer just to handle the enquiries.',
    slug: 'hartley-roofing',
  },
  {
    business: 'Spice Garden',
    location: 'Barnsley',
    stat: '8,200',
    statLabel: 'new followers gained',
    quote: 'We\'d tried other agencies. Bee Viral was the first that actually moved the needle.',
    slug: 'spice-garden',
  },
]

const trustBadges = [
  {
    label: 'Verified on Guru',
    sublabel: '776 jobs · $167K+ earned on Guru alone',
    href: 'https://www.guru.com/freelancers/tahir-choudhry',
  },
  {
    label: 'Freelancer.com Profile',
    sublabel: 'Verified account · Global clients',
    href: 'https://www.freelancer.com/u/Digitalexpertuae',
  },
]

// ── Component ────────────────────────────────────────────────────────────────

export default function AboutContent() {
  const storyRef   = useScrollReveal<HTMLDivElement>(0.08)
  const statsRef   = useStaggerReveal<HTMLDivElement>(0.05)
  const valuesRef  = useScrollReveal<HTMLDivElement>(0.05)
  const whyRef     = useScrollReveal<HTMLDivElement>(0.05)
  const founderRef = useScrollReveal<HTMLDivElement>(0.08)
  const resultsRef = useStaggerReveal<HTMLDivElement>(0.05)
  const ctaRef     = useScrollReveal<HTMLDivElement>(0.15)

  const { openAuditModal } = useAuditModal()

  const handleCTA = (label: string, location: string) => {
    trackButtonClick(label, location)
    openAuditModal('service', '', 'general')
  }

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          1. HERO — left-aligned, dramatic type
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#222222] pt-40 pb-32 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-honeycomb pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="hero-enter hero-enter-1 inline-block text-[#FFC512] text-xs font-semibold uppercase tracking-[0.2em] mb-8">
            10+ years of real-world digital marketing experience
          </span>

          <h1
            className="hero-enter hero-enter-2 font-display font-extrabold text-white tracking-tight mb-10"
            style={{ fontSize: 'clamp(48px, 7.5vw, 104px)', lineHeight: 0.9 }}
          >
            We Grow South<br />Yorkshire Businesses.<br />
            <span className="text-[#FFC512]">No Fluff. Just Results.</span>
          </h1>

          <div className="hero-enter hero-enter-3 max-w-md">
            <p className="text-white/50 text-lg leading-relaxed font-normal mb-10">
              200+ local clients. Real results. One agency that does the work properly.
            </p>

            <button
              onClick={() => handleCTA('Get Your Free Digital Health Check', 'about_hero')}
              className="inline-flex items-center gap-2.5 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-sm px-7 py-3.5 rounded transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Get Your Free Digital Health Check
              <ArrowRight size={15} />
            </button>

            <div className="flex items-center gap-6 mt-8">
              <p className="text-white/25 text-xs font-normal">No contracts. No jargon. No obligation.</p>
              <a
                href="#founder"
                className="text-white/35 hover:text-white/70 text-xs font-medium underline underline-offset-4 transition-colors duration-200"
              >
                Who's behind it →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          2. STATS — huge type, no boxes, dark bar
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#1a1a1a] border-t border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={statsRef}
            className="grid grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="reveal-scale flex flex-col items-start py-10 px-6 lg:px-10 border-l border-white/8 first:border-l-0"
                data-delay={i}
              >
                <span
                  className="font-display font-extrabold text-white leading-none tracking-tight"
                  style={{ fontSize: 'clamp(44px, 5.5vw, 80px)' }}
                >
                  {s.value}
                </span>
                <span className="text-white/30 text-[11px] font-semibold uppercase tracking-[0.18em] mt-4 leading-snug">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          3. STORY — editorial 12-column layout
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div ref={storyRef} className="reveal-left">

            {/* Header row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 pb-16 border-b border-[#f0f0f0]">
              <div className="lg:col-span-3">
                <span className="text-[#FFC512] text-[11px] font-semibold uppercase tracking-[0.2em]">
                  The Real Story
                </span>
              </div>
              <div className="lg:col-span-9">
                <h2
                  className="font-display font-extrabold text-[#222222] leading-tight tracking-tight"
                  style={{ fontSize: 'clamp(36px, 4.5vw, 68px)', lineHeight: 0.95 }}
                >
                  Why Bee Viral Exists
                </h2>
              </div>
            </div>

            {/* Body row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-3" />
              <div className="lg:col-span-5 space-y-5 text-[#555] text-[17px] leading-relaxed">
                <p>
                  Before Bee Viral, Tahir spent years in the trenches of freelance digital marketing — not in an agency boardroom, not studying theory, but actually doing the work. Client by client. Campaign by campaign.
                </p>
                <p>
                  He completed over 776 client projects on platforms like Guru and Freelancer.com. He worked with more than 290 individual clients across the UK, the US, Canada, and Europe — delivering real, measurable results for clients across the globe.
                </p>
                <p>
                  And while he was doing all of that, he kept noticing the same thing back home in South Yorkshire.
                </p>
                <p className="text-[#222222] font-semibold text-xl">
                  Local businesses were getting burned.
                </p>
                <p>
                  Not by scammers — by professional-looking agencies charging professional-looking fees and delivering nothing worth paying for. Generic posts. Vanity metrics. Reports full of impressions but no leads, no bookings, no actual growth.
                </p>
              </div>
              <div className="lg:col-span-4 space-y-5 text-[#555] text-[17px] leading-relaxed">
                <p>
                  After years of delivering results for clients around the world, Tahir launched Bee Viral with one simple idea: give South Yorkshire businesses the same quality of digital marketing that was working globally — delivered locally, transparently, and without the bullshit.
                </p>
                <p>
                  Since launching Bee Viral, over 200 local businesses have grown with us. We're still doing the work ourselves — no middlemen, no outsourcing, no excuses.
                </p>
              </div>
            </div>

            {/* Pull quote row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-20 pt-16 border-t border-[#f0f0f0]">
              <div className="lg:col-span-3" />
              <div className="lg:col-span-9">
                <blockquote className="border-l-[3px] border-[#FFC512] pl-8">
                  <p
                    className="font-display font-semibold text-[#222222] italic leading-snug"
                    style={{ fontSize: 'clamp(20px, 2.5vw, 30px)' }}
                  >
                    "I'd speak to business owners in Rotherham or Barnsley who'd spent thousands
                    with agencies and had nothing to show for it. No leads. No growth. Just a
                    fancy PDF report and a lot of excuses. That's why I built Bee Viral."
                  </p>
                  <footer className="mt-5">
                    <span className="text-[#FFC512] text-[11px] font-semibold uppercase tracking-[0.2em]">
                      — Tahir Azam, Founder
                    </span>
                  </footer>
                </blockquote>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          4. VALUES — numbered editorial rows, no cards
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-t border-[#ebebeb] pb-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-20 pb-16 border-b border-[#f0f0f0]">
            <div className="lg:col-span-3">
              <span className="text-[#FFC512] text-[11px] font-semibold uppercase tracking-[0.2em]">
                How We Work
              </span>
            </div>
            <div className="lg:col-span-9">
              <h2
                className="font-display font-extrabold text-[#222222] leading-tight tracking-tight"
                style={{ fontSize: 'clamp(32px, 4vw, 60px)', lineHeight: 0.95 }}
              >
                What "Full Service"<br />Actually Means
              </h2>
            </div>
          </div>

          {/* Numbered rows */}
          <div ref={valuesRef} className="reveal divide-y divide-[#f0f0f0]">
            {values.map((v) => (
              <div
                key={v.num}
                className="grid grid-cols-1 lg:grid-cols-12 gap-y-3 gap-x-10 py-10 lg:py-12"
              >
                <div className="lg:col-span-3 flex items-baseline gap-3 lg:gap-0">
                  <span className="font-display font-bold text-[#FFC512] text-sm tracking-widest opacity-80">
                    {v.num}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-display font-bold text-[#222222] text-2xl leading-tight tracking-tight">
                    {v.title}
                  </h3>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-[#666] text-[16px] leading-relaxed font-normal">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          5. WHY BEE VIRAL — bold statements, no comparison table
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#222222] py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-16 border-b border-white/8">
            <div className="lg:col-span-3">
              <span className="text-[#FFC512] text-[11px] font-semibold uppercase tracking-[0.2em]">
                The Honest Case
              </span>
            </div>
            <div className="lg:col-span-9">
              <h2
                className="font-display font-extrabold text-white leading-tight tracking-tight"
                style={{ fontSize: 'clamp(32px, 4vw, 60px)', lineHeight: 0.95 }}
              >
                Why Choose Bee Viral<br />
                <span className="text-[#FFC512]">Over Anyone Else?</span>
              </h2>
            </div>
          </div>

          {/* Reasons */}
          <div ref={whyRef} className="reveal divide-y divide-white/8">
            {whyReasons.map((r) => (
              <div
                key={r.num}
                className="grid grid-cols-1 lg:grid-cols-12 gap-y-3 gap-x-10 py-10 lg:py-12"
              >
                <div className="lg:col-span-3">
                  <span className="font-display font-bold text-[#FFC512]/35 text-sm tracking-widest">
                    {r.num}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-display font-bold text-white text-xl lg:text-2xl leading-tight tracking-tight">
                    {r.headline}
                  </h3>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-white/45 text-[16px] leading-relaxed font-normal">
                    {r.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-14 border-t border-white/8 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-3" />
            <div className="lg:col-span-9">
              <p className="text-white/30 text-base">
                We're not the cheapest option in the room.{' '}
                <span className="text-white font-semibold">We're the one that actually delivers.</span>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          6. FOUNDER — magazine-style, full-height photo
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="founder" className="bg-[#f5f5f5] overflow-hidden">
        <div ref={founderRef} className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">

            {/* Photo — full height, bleeds to top/bottom */}
            <div className="relative min-h-[520px] lg:min-h-0 order-2 lg:order-1 -mx-4 sm:-mx-6 lg:mx-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/tahir-azam-pro.png"
                alt="Tahir Azam — Founder, Bee Viral"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              {/* Subtle fade at bottom on desktop */}
              <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#f5f5f5] to-transparent" />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 flex flex-col justify-center py-20 lg:pl-16 xl:pl-24">

              <span className="text-[#FFC512] text-[11px] font-semibold uppercase tracking-[0.2em] mb-8">
                Meet the Founder
              </span>

              <h2
                className="font-display font-extrabold text-[#222222] leading-tight tracking-tight mb-10"
                style={{ fontSize: 'clamp(36px, 4vw, 58px)', lineHeight: 0.93 }}
              >
                Built by Someone<br />Who's Done<br />the Work.
              </h2>

              <div className="space-y-4 text-[#555] text-[16px] leading-relaxed max-w-md mb-10">
                <p>
                  Tahir has been working in digital marketing since before "digital marketing" was the thing everyone called it.
                </p>
                <p>
                  He started as a freelancer, working with businesses across the UK, the US, Canada, and Europe. He didn't learn in a classroom — he learned by taking on jobs, figuring out what worked, and delivering results for real clients with real money on the line.
                </p>
                <p>
                  Over 776 completed projects. Over 290 clients served. All before he ever put up an agency sign.
                </p>
                <p>
                  After years of delivering results around the world, Tahir launched Bee Viral with a clear focus: South Yorkshire. The goal was never to build a big agency — it was to build the right one.
                </p>
                <p className="text-[#222222] font-semibold">
                  Not a faceless team. A real person, with a real track record, who works in the same communities as the businesses he serves.
                </p>
              </div>

              {/* Credentials */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  'MSc Digital Media Management — Sheffield Hallam',
                  'Infographics Specialist',
                ].map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 bg-white border border-[#e0e0e0] text-[#444] text-[11px] font-semibold uppercase tracking-[0.12em] px-3 py-1.5 rounded"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#FFC512]" />
                    {c}
                  </span>
                ))}
              </div>

              {/* Pull quote */}
              <blockquote className="border-l-[3px] border-[#FFC512] pl-5 mb-10 max-w-sm">
                <p className="text-[#333] text-[15px] italic leading-relaxed font-normal">
                  "If we take you on, I'm personally accountable for your growth."
                </p>
              </blockquote>

              {/* Verified profiles */}
              <div className="space-y-2 max-w-xs">
                <p className="text-[#bbb] text-[10px] font-semibold uppercase tracking-[0.2em] mb-3">
                  Verified Profiles
                </p>
                {trustBadges.map((b) => (
                  <a
                    key={b.href}
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 bg-[#222222] hover:bg-[#2d2d2d] rounded-lg px-4 py-3 transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFC512] shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium group-hover:text-[#FFC512] transition-colors duration-200 leading-tight">
                        {b.label}
                      </p>
                      <p className="text-white/35 text-xs mt-0.5">{b.sublabel}</p>
                    </div>
                    <ExternalLink size={12} className="text-white/20 group-hover:text-[#FFC512] transition-colors duration-200 shrink-0" />
                  </a>
                ))}
                <a
                  href="https://www.linkedin.com/in/tahir-azam-7675b393/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 border border-[#ddd] hover:border-[#FFC512]/60 rounded-lg px-4 py-3 transition-colors duration-200"
                >
                  <LinkedInIcon size={14} />
                  <span className="text-[#555] text-sm font-medium group-hover:text-[#222222] transition-colors duration-200 flex-1">
                    Connect on LinkedIn
                  </span>
                  <ExternalLink size={12} className="text-[#ccc] group-hover:text-[#999] transition-colors duration-200 shrink-0" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          7. SOCIAL PROOF — clean, no card boxes, divider layout
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#222222] py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-16 border-b border-white/8">
            <div className="lg:col-span-3">
              <span className="text-[#FFC512] text-[11px] font-semibold uppercase tracking-[0.2em]">
                Client Results
              </span>
            </div>
            <div className="lg:col-span-9">
              <h2
                className="font-display font-extrabold text-white leading-tight tracking-tight"
                style={{ fontSize: 'clamp(32px, 4vw, 60px)', lineHeight: 0.95 }}
              >
                What Happens When<br />
                <span className="text-[#FFC512]">It Actually Works</span>
              </h2>
            </div>
          </div>

          {/* Results — divider layout, no cards */}
          <div
            ref={resultsRef}
            className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/8 mt-4"
          >
            {clientResults.map((r, i) => (
              <div
                key={r.slug}
                className="reveal-scale flex flex-col py-14 lg:py-12 lg:px-12 first:lg:pl-0 last:lg:pr-0"
                data-delay={i}
              >
                <span
                  className="font-display font-extrabold text-[#FFC512] leading-none tracking-tight"
                  style={{ fontSize: 'clamp(48px, 5vw, 68px)' }}
                >
                  {r.stat}
                </span>
                <p className="text-white/35 text-[11px] font-semibold uppercase tracking-[0.15em] mt-2 mb-8">
                  {r.statLabel}
                </p>

                <p className="font-display font-bold text-white text-base leading-tight mb-1">
                  {r.business}
                </p>
                <p className="text-white/25 text-[11px] uppercase tracking-[0.15em] mb-6">
                  {r.location}
                </p>

                <blockquote className="text-white/45 text-[15px] leading-relaxed italic flex-1 mb-8">
                  "{r.quote}"
                </blockquote>

                <Link
                  href={`/case-studies/${r.slug}`}
                  className="inline-flex items-center gap-2 text-[#FFC512] text-[11px] font-semibold uppercase tracking-[0.15em] hover:gap-3 transition-all duration-200"
                >
                  Full case study
                  <ArrowRight size={11} />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-white/8">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-white/30 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              View all case studies
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          8. CTA — asymmetric layout, low friction
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#1a1a1a] relative overflow-hidden py-36">
        <div aria-hidden="true" className="absolute inset-0 bg-honeycomb opacity-15 pointer-events-none" />

        <div ref={ctaRef} className="reveal relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">

            <div className="lg:col-span-7">
              <span className="text-[#FFC512] text-[11px] font-semibold uppercase tracking-[0.2em] mb-6 block">
                Ready When You Are
              </span>
              <h2
                className="font-display font-extrabold text-white leading-tight tracking-tight"
                style={{ fontSize: 'clamp(36px, 5vw, 76px)', lineHeight: 0.93 }}
              >
                Let's Find Out If<br />We're the Right Fit.
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-white/40 text-[16px] leading-relaxed font-normal mb-8">
                A free Digital Health Check — no pitch deck, no hard sell. Just an honest look at your online presence and straight advice on what we'd do differently. If we think we can help, we'll say so. If not, we'll tell you that too.
              </p>

              <button
                onClick={() => handleCTA('Book Your Free Digital Health Check', 'about_cta')}
                className="inline-flex items-center gap-2.5 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-sm px-8 py-4 rounded transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
              >
                Book Your Free Health Check
                <ArrowRight size={15} />
              </button>

              <p className="text-white/20 text-xs mt-4 font-normal">
                No contracts. No jargon. No obligation.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

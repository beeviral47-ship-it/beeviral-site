'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal'
import { trackButtonClick } from '@/lib/analytics'
import { useAuditModal } from '@/components/providers/AuditModalProvider'
import { LinkedInIcon } from '@/components/ui/SocialIcons'

// ── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: '10+',  label: 'Years of Experience',        target: 10,  suffix: '+' },
  { value: '200+', label: 'Local Businesses Served',    target: 200, suffix: '+' },
  { value: '5M+',  label: 'People Reached',             target: 5,   suffix: 'M+' },
  { value: '776+', label: 'Client Projects Completed',  target: 776, suffix: '+' },
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

// ── Sub-components ───────────────────────────────────────────────────────────

/** Animated counter that counts up from the target value when it enters the viewport.
 *  SEO note: initial state = target so Googlebot sees real numbers in static HTML. */
function StatItem({ target, suffix, label, delay }: {
  target: number
  suffix: string
  label: string
  delay: number
}) {
  const [count, setCount]     = useState(target)
  const [started, setStarted] = useState(false)
  const ref                   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const duration = 1400 + delay * 120
    const start    = Date.now()
    const id       = setInterval(() => {
      const t     = Math.min((Date.now() - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setCount(Math.floor(eased * target))
      if (t >= 1) { setCount(target); clearInterval(id) }
    }, 16)
    return () => clearInterval(id)
  }, [started, target, delay])

  return (
    <div
      ref={ref}
      className="reveal-scale flex flex-col items-start py-6 px-4 sm:px-6 lg:py-10 lg:px-10 lg:border-l lg:border-[#222222]/15 lg:first:border-l-0"
      data-delay={delay}
    >
      <span
        className="font-display font-extrabold text-[#222222] leading-none tracking-tight"
        style={{ fontSize: 'clamp(36px, 5.5vw, 80px)' }}
      >
        {count}{suffix}
      </span>
      <span className="text-[#222222]/55 text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.15em] mt-3 leading-snug">
        {label}
      </span>
    </div>
  )
}

/** Sticky bottom bar on mobile — appears after scrolling, disappears near the bottom CTA */
function StickyMobileCTA({ onOpen }: { onOpen: () => void }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const docH   = document.documentElement.scrollHeight
      const winH   = window.innerHeight
      setVisible(scrollY > 420 && scrollY < docH - winH - 300)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="bg-[#FFC512] px-4 py-3 flex items-center justify-between shadow-[0_-4px_24px_rgba(0,0,0,0.3)]">
        <p className="text-[#222222] font-semibold text-sm leading-tight">Free Digital Health Check</p>
        <button
          onClick={onOpen}
          className="flex items-center gap-2 bg-[#222222] text-white text-xs font-semibold px-4 py-2.5 rounded transition-all duration-200 active:scale-95 shrink-0"
        >
          Book Now <ArrowRight size={12} />
        </button>
      </div>
    </div>
  )
}

/** Shared card content for a client result — used in both desktop grid and mobile carousel */
function ResultCard({ r }: { r: typeof clientResults[0] }) {
  return (
    <>
      <span
        className="font-display font-extrabold text-[#FFC512] leading-none tracking-tight"
        style={{ fontSize: 'clamp(40px, 5vw, 68px)' }}
      >
        {r.stat}
      </span>
      <p className="text-white/35 text-[11px] font-semibold uppercase tracking-[0.15em] mt-2 mb-5 lg:mb-8">{r.statLabel}</p>
      <p className="font-display font-bold text-white text-base leading-tight mb-1">{r.business}</p>
      <p className="text-white/25 text-[11px] uppercase tracking-[0.15em] mb-4 lg:mb-6">{r.location}</p>
      <blockquote className="text-white/45 text-sm leading-relaxed italic flex-1 mb-6 lg:mb-8">
        "{r.quote}"
      </blockquote>
      <Link
        href={`/case-studies/${r.slug}`}
        className="inline-flex items-center gap-2 text-[#FFC512] text-[11px] font-semibold uppercase tracking-[0.15em] hover:gap-3 transition-all duration-200"
      >
        Full case study <ArrowRight size={11} />
      </Link>
    </>
  )
}

/** Swipeable carousel used on mobile — replaces the 3-col grid */
function MobileResultsCarousel() {
  const [active, setActive] = useState(0)
  const touchStartX         = useRef(0)

  const next = () => setActive(a => a === clientResults.length - 1 ? 0 : a + 1)
  const prev = () => setActive(a => a === 0 ? clientResults.length - 1 : a - 1)

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const handleTouchEnd   = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
  }

  return (
    <div className="lg:hidden mt-6" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="flex flex-col py-8 border-b border-white/8">
        <ResultCard r={clientResults[active]} />
      </div>
      <div className="flex items-center justify-between mt-5">
        <p className="text-white/25 text-[10px] font-semibold uppercase tracking-[0.15em]">
          {active + 1} / {clientResults.length}
        </p>
        <div className="flex items-center gap-2">
          {clientResults.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active ? 'w-6 h-2 bg-[#FFC512]' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`View result ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

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
          1. HERO
          FIXED: pt-40 pb-32 → pt-28 pb-14 on mobile, restored on lg
          FIXED: eyebrow mb-8 → mb-4 lg:mb-8
          FIXED: H1 mb-10 → mb-6 lg:mb-10
          FIXED: paragraph mb-10 → mb-7 lg:mb-10
          FIXED: CTA button full-width on mobile with justify-center
          FIXED: bottom row gap-6 → gap-3 sm:gap-6, mt-8 → mt-5 lg:mt-8
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#222222] pt-28 pb-14 lg:pt-40 lg:pb-32 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-honeycomb pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="hero-enter hero-enter-1 inline-block text-[#FFC512] text-xs font-semibold uppercase tracking-[0.2em] mb-4 lg:mb-8">
            10+ years of real-world digital marketing experience
          </span>

          <h1
            className="hero-enter hero-enter-2 font-display font-extrabold text-white tracking-tight mb-6 lg:mb-10"
            style={{ fontSize: 'clamp(38px, 7.5vw, 104px)', lineHeight: 0.92 }}
          >
            We Grow South<br />Yorkshire Businesses.<br />
            <span className="text-[#FFC512]">No Fluff. Just Results.</span>
          </h1>

          <div className="hero-enter hero-enter-3 max-w-md">
            <p className="text-white/50 text-base lg:text-lg leading-relaxed font-normal mb-7 lg:mb-10">
              200+ local clients. Real results. One agency that does the work properly.
            </p>

            {/* FIXED: full-width on mobile, auto on sm+ */}
            <button
              onClick={() => handleCTA('Get Your Free Digital Health Check', 'about_hero')}
              className="inline-flex items-center justify-center gap-2.5 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-sm px-7 py-4 rounded transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              Get Your Free Digital Health Check
              <ArrowRight size={15} />
            </button>

            <div className="flex items-center gap-3 sm:gap-6 mt-5 lg:mt-8">
              <p className="text-white/25 text-xs font-normal">No contracts. No jargon. No obligation.</p>
              <a
                href="#founder"
                className="text-white/35 hover:text-white/70 text-xs font-medium underline underline-offset-4 transition-colors duration-200 shrink-0"
              >
                Who's behind it →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          2. STATS
          FIXED: py-24 → py-10 lg:py-24
          FIXED: border-l only on lg (2-col mobile grid caused border on
                 row-start items that aren't first-child)
          FIXED: py-10 px-6 → py-6 px-4 lg:py-10 lg:px-10 per stat
          FIXED: stat number min size raised slightly for mobile readability
      ══════════════════════════════════════════════════════════════════════ */}
      {/* ── YELLOW STATS — brand moment, dark numbers on yellow ── */}
      <section className="bg-[#FFC512] py-10 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={statsRef}
            className="grid grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((s, i) => (
              <StatItem key={s.label} target={s.target} suffix={s.suffix} label={s.label} delay={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          3. STORY
          FIXED: py-36 → py-16 lg:py-36
          FIXED: header mb-16 pb-16 → mb-8 pb-8 lg:mb-16 lg:pb-16
          FIXED: empty spacer div → hidden lg:block (was creating dead space)
          FIXED: body gap-16 → gap-8 lg:gap-16
          FIXED: pull quote mt-20 pt-16 → mt-10 pt-10 lg:mt-20 lg:pt-16
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div ref={storyRef} className="reveal-left">

            {/* Header row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 mb-8 pb-8 lg:mb-16 lg:pb-16 border-b border-[#f0f0f0]">
              <div className="lg:col-span-3">
                <span className="text-[#FFC512] text-[11px] font-semibold uppercase tracking-[0.2em]">
                  The Real Story
                </span>
              </div>
              <div className="lg:col-span-9">
                <h2
                  className="font-display font-extrabold text-[#222222] leading-tight tracking-tight"
                  style={{ fontSize: 'clamp(32px, 4.5vw, 68px)', lineHeight: 0.95 }}
                >
                  Why Bee Viral Exists
                </h2>
              </div>
            </div>

            {/* Body row — FIXED: hidden spacer, tighter gap */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              {/* FIXED: hidden on mobile — was creating 64px dead row */}
              <div className="hidden lg:block lg:col-span-3" />
              <div className="lg:col-span-5 space-y-5 text-[#555] text-base lg:text-[17px] leading-relaxed">
                <p>
                  Before Bee Viral, Tahir spent years in the trenches of freelance digital marketing — not in an agency boardroom, not studying theory, but actually doing the work. Client by client. Campaign by campaign.
                </p>
                <p>
                  He completed over 776 client projects on platforms like Guru and Freelancer.com. He worked with more than 290 individual clients across the UK, the US, Canada, and Europe — delivering real, measurable results for clients across the globe.
                </p>
                <p>
                  And while he was doing all of that, he kept noticing the same thing back home in South Yorkshire.
                </p>
                <p className="text-[#222222] font-semibold text-lg lg:text-xl">
                  Local businesses were getting burned.
                </p>
                <p>
                  Not by scammers — by professional-looking agencies charging professional-looking fees and delivering nothing worth paying for. Generic posts. Vanity metrics. Reports full of impressions but no leads, no bookings, no actual growth.
                </p>
              </div>
              <div className="lg:col-span-4 space-y-5 text-[#555] text-base lg:text-[17px] leading-relaxed">
                <p>
                  After years of delivering results for clients around the world, Tahir launched Bee Viral with one simple idea: give South Yorkshire businesses the same quality of digital marketing that was working globally — delivered locally, transparently, and without the bullshit.
                </p>
                <p>
                  Since launching Bee Viral, over 200 local businesses have grown with us. We're still doing the work ourselves — no middlemen, no outsourcing, no excuses.
                </p>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          WOW MOMENT — full-width oversized pull quote, stops the scroll
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#1a1a1a] py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            {/* Giant decorative quote mark */}
            <div
              aria-hidden="true"
              className="font-display font-extrabold text-[#FFC512]/12 leading-none select-none -mb-4 lg:-mb-8"
              style={{ fontSize: 'clamp(80px, 15vw, 180px)' }}
            >
              "
            </div>
            <blockquote>
              <p
                className="font-display font-bold text-white leading-tight tracking-tight"
                style={{ fontSize: 'clamp(22px, 3.5vw, 52px)', lineHeight: 1.1 }}
              >
                I'd speak to business owners in Rotherham or Barnsley who'd spent
                thousands with agencies and had nothing to show for it. No leads.
                No growth. Just a fancy PDF report and a lot of excuses.
                <span className="text-[#FFC512]"> That's why I built Bee Viral.</span>
              </p>
              <footer className="mt-8 lg:mt-10 flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/tahir-azam-pro.png"
                  alt="Tahir Azam"
                  className="w-12 h-12 rounded-full object-cover object-top shrink-0"
                />
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">Tahir Azam</p>
                  <p className="text-[#FFC512] text-[10px] font-semibold uppercase tracking-[0.2em] mt-0.5">Founder, Bee Viral</p>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          4. VALUES
          FIXED: pb-36 → pb-16 lg:pb-36
          FIXED: header pt-20 pb-16 → pt-12 pb-8 lg:pt-20 lg:pb-16
          FIXED: empty spacer div → hidden lg:block
          FIXED: row gap tightened on mobile
      ══════════════════════════════════════════════════════════════════════ */}
      {/* ── VALUES: #f5f5f5 breaks the white/white run from Story ── */}
      <section className="bg-[#f5f5f5] border-t border-[#e8e8e8] pb-16 lg:pb-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 pt-12 pb-8 lg:pt-20 lg:pb-16 border-b border-[#e8e8e8]">
            <div className="lg:col-span-3">
              <span className="text-[#FFC512] text-[11px] font-semibold uppercase tracking-[0.2em]">
                How We Work
              </span>
            </div>
            <div className="lg:col-span-9">
              <h2
                className="font-display font-extrabold text-[#222222] leading-tight tracking-tight"
                style={{ fontSize: 'clamp(28px, 4vw, 60px)', lineHeight: 0.95 }}
              >
                What "Full Service"<br />Actually Means
              </h2>
            </div>
          </div>

          {/* Numbered rows */}
          <div ref={valuesRef} className="reveal divide-y divide-[#e8e8e8]">
            {values.map((v) => (
              <div
                key={v.num}
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-y-3 gap-x-10 py-8 lg:py-12"
              >
                {/* Yellow left accent bar — slides in on hover (desktop only) */}
                <div aria-hidden="true" className="hidden lg:block absolute left-0 inset-y-0 w-[3px] bg-[#FFC512] scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-300" />

                {/* Number — hidden on mobile (shown inline with title below instead) */}
                <div className="hidden lg:block lg:col-span-3 pl-5">
                  <span className="font-display font-bold text-[#FFC512] text-xs tracking-widest opacity-60 group-hover:opacity-100 transition-opacity duration-200">
                    {v.num}
                  </span>
                </div>
                {/* Title — on mobile: number prefix shown inline */}
                <div className="lg:col-span-4">
                  <div className="flex items-baseline gap-3 lg:block">
                    <span className="lg:hidden font-display font-bold text-[#FFC512] text-xs tracking-widest opacity-80 shrink-0">
                      {v.num}
                    </span>
                    <h3 className="font-display font-bold text-[#222222] text-xl lg:text-2xl leading-tight tracking-tight group-hover:text-[#111] transition-colors duration-200">
                      {v.title}
                    </h3>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-[#666] text-sm lg:text-[16px] leading-relaxed font-normal mt-1 lg:mt-0 group-hover:text-[#444] transition-colors duration-200">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          5. WHY BEE VIRAL
          FIXED: py-36 → py-16 lg:py-36
          FIXED: header pb-16 → pb-10 lg:pb-16
          FIXED: empty spacer div → hidden lg:block
          FIXED: bottom text pt-14 → pt-8 lg:pt-14
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#222222] py-16 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 pb-10 lg:pb-16 border-b border-white/8">
            <div className="lg:col-span-3">
              <span className="text-[#FFC512] text-[11px] font-semibold uppercase tracking-[0.2em]">
                The Honest Case
              </span>
            </div>
            <div className="lg:col-span-9">
              <h2
                className="font-display font-extrabold text-white leading-tight tracking-tight"
                style={{ fontSize: 'clamp(28px, 4vw, 60px)', lineHeight: 0.95 }}
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
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-y-3 gap-x-10 py-8 lg:py-12"
              >
                {/* Yellow left accent bar — slides in on hover (desktop only) */}
                <div aria-hidden="true" className="hidden lg:block absolute left-0 inset-y-0 w-[3px] bg-[#FFC512] scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-300" />

                {/* Number — hidden on mobile (shown inline with headline below instead) */}
                <div className="hidden lg:block lg:col-span-3 pl-5">
                  <span className="font-display font-bold text-[#FFC512]/35 text-xs tracking-widest group-hover:text-[#FFC512]/70 transition-colors duration-200">
                    {r.num}
                  </span>
                </div>
                {/* Headline — on mobile: number prefix shown inline */}
                <div className="lg:col-span-4">
                  <div className="flex items-baseline gap-3 lg:block">
                    <span className="lg:hidden font-display font-bold text-[#FFC512]/35 text-xs tracking-widest shrink-0">
                      {r.num}
                    </span>
                    <h3 className="font-display font-bold text-white text-lg lg:text-2xl leading-tight tracking-tight group-hover:text-white transition-colors duration-200">
                      {r.headline}
                    </h3>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-white/45 text-sm lg:text-[16px] leading-relaxed font-normal mt-1 lg:mt-0 group-hover:text-white/65 transition-colors duration-200">
                    {r.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* FIXED: pt-14 → pt-8 lg:pt-14 */}
          <div className="pt-8 lg:pt-14 border-t border-white/8 grid grid-cols-1 lg:grid-cols-12">
            {/* FIXED: hidden on mobile */}
            <div className="hidden lg:block lg:col-span-3" />
            <div className="lg:col-span-9">
              <p className="text-white/30 text-sm lg:text-base">
                We're not the cheapest option in the room.{' '}
                <span className="text-white font-semibold">We're the one that actually delivers.</span>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          6. FOUNDER
          FIXED: py-36 → py-16 lg:py-36
          FIXED: header pb-16 mb-20 → pb-8 mb-10 lg:pb-16 lg:mb-20
          FIXED: empty spacer → hidden lg:block
          FIXED: body gap-16 → gap-10 lg:gap-16
          FIXED: photo mx-auto on mobile (was left-aligned in full-width col)
          FIXED: bio text-[17px] → text-base lg:text-[17px]
          FIXED: pull quote mb-12 → mb-8 lg:mb-12
          FIXED: trust badges max-w-sm → max-w-full sm:max-w-sm
      ══════════════════════════════════════════════════════════════════════ */}
      {/* ── FOUNDER: dark bg, larger photo, proper brand moment ── */}
      <section id="founder" className="bg-[#1a1a1a] py-16 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 pb-8 mb-10 lg:pb-16 lg:mb-20 border-b border-white/10">
            <div className="lg:col-span-3">
              <span className="text-[#FFC512] text-[11px] font-semibold uppercase tracking-[0.2em]">
                Meet the Founder
              </span>
            </div>
            <div className="lg:col-span-9">
              <h2
                className="font-display font-extrabold text-white leading-tight tracking-tight"
                style={{ fontSize: 'clamp(28px, 4vw, 60px)', lineHeight: 0.95 }}
              >
                Built by Someone Who's Done the Work.
              </h2>
            </div>
          </div>

          {/* Body row — photo span increased to 5 cols for more presence */}
          <div ref={founderRef} className="reveal grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

            {/* Photo — larger, centred on mobile */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="w-full max-w-[320px] sm:max-w-[360px] mx-auto lg:mx-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/tahir-azam-pro.png"
                  alt="Tahir Azam — Founder, Bee Viral"
                  className="w-full rounded-2xl object-cover object-top shadow-2xl shadow-black/40"
                />
                {/* Name plate beneath photo */}
                <div className="mt-5 pb-5 border-b border-white/10">
                  <p className="font-display font-bold text-white text-base lg:text-lg leading-tight">Tahir Azam</p>
                  <p className="text-[#FFC512] text-[10px] font-semibold uppercase tracking-[0.18em] mt-1">
                    Founder, Bee Viral · South Yorkshire
                  </p>
                </div>

                {/* Credentials beneath name */}
                <div className="mt-4 space-y-2">
                  {[
                    'MSc Digital Media Management',
                    'Sheffield Hallam University',
                    'Infographics Specialist',
                  ].map((c, i) => (
                    <div key={c} className="flex items-center gap-2">
                      <span className={`w-1 h-1 rounded-full shrink-0 ${i === 1 ? 'bg-transparent' : 'bg-[#FFC512]'}`} />
                      <span className={`text-[12px] font-normal leading-tight ${i === 1 ? 'text-white/25 pl-3' : 'text-white/55'}`}>
                        {c}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 flex flex-col justify-start">

              <div className="space-y-4 text-white/55 text-base lg:text-[17px] leading-relaxed mb-8 lg:mb-10">
                <p>
                  Tahir has been working in digital marketing since before "digital marketing" was the thing everyone called it.
                </p>
                <p>
                  He holds an MSc in Digital Media Management from Sheffield Hallam University — so he understands the theory. But the education that really shaped how he works came from doing the actual work: building campaigns, fixing what wasn't working, and delivering results for real clients with real money on the line, across the UK, the US, Canada, and Europe.
                </p>
                <p>
                  Over 776 completed projects. Over 290 clients served. All before he ever put up an agency sign.
                </p>
                <p>
                  After years of delivering results around the world, Tahir launched Bee Viral with a clear focus: South Yorkshire. The goal was never to build a big agency — it was to build the right one.
                </p>
                <p className="text-white font-semibold">
                  Not a faceless team. A real person, with a real track record, who works in the same communities as the businesses he serves.
                </p>
              </div>

              {/* Pull quote */}
              <blockquote className="border-l-[3px] border-[#FFC512] pl-5 lg:pl-6 mb-8 lg:mb-12">
                <p className="font-display font-semibold text-white italic leading-snug" style={{ fontSize: 'clamp(16px, 2vw, 24px)' }}>
                  "If we take you on, I'm personally accountable for your growth."
                </p>
              </blockquote>

              {/* Verified profiles */}
              <div className="space-y-2 max-w-full sm:max-w-sm">
                <p className="text-white/25 text-[10px] font-semibold uppercase tracking-[0.2em] mb-3">
                  Verified Profiles
                </p>
                {trustBadges.map((b) => (
                  <a
                    key={b.href}
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 bg-white/6 hover:bg-white/10 border border-white/8 rounded-lg px-4 py-3.5 transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFC512] shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium group-hover:text-[#FFC512] transition-colors duration-200 leading-tight">
                        {b.label}
                      </p>
                      <p className="text-white/35 text-xs mt-0.5 truncate">{b.sublabel}</p>
                    </div>
                    <ExternalLink size={12} className="text-white/20 group-hover:text-[#FFC512] transition-colors duration-200 shrink-0" />
                  </a>
                ))}
                <a
                  href="https://www.linkedin.com/in/tahir-azam-7675b393/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 border border-white/15 hover:border-[#FFC512]/50 rounded-lg px-4 py-3.5 transition-colors duration-200"
                >
                  <LinkedInIcon size={14} />
                  <span className="text-white/55 text-sm font-medium group-hover:text-white transition-colors duration-200 flex-1">
                    Connect on LinkedIn
                  </span>
                  <ExternalLink size={12} className="text-white/20 group-hover:text-white/50 transition-colors duration-200 shrink-0" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          7. SOCIAL PROOF
          FIXED: py-36 → py-16 lg:py-36
          FIXED: header pb-16 → pb-10 lg:pb-16
          FIXED: empty spacer → hidden lg:block
          FIXED: result items py-14 → py-8 lg:py-12
          FIXED: stat label mb-8 → mb-5 lg:mb-8
          FIXED: bottom mt-16 pt-10 → mt-10 pt-8 lg:mt-16 lg:pt-10
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#222222] py-16 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 pb-10 lg:pb-16 border-b border-white/8">
            <div className="lg:col-span-3">
              <span className="text-[#FFC512] text-[11px] font-semibold uppercase tracking-[0.2em]">
                Client Results
              </span>
            </div>
            <div className="lg:col-span-9">
              <h2
                className="font-display font-extrabold text-white leading-tight tracking-tight"
                style={{ fontSize: 'clamp(28px, 4vw, 60px)', lineHeight: 0.95 }}
              >
                What Happens When<br />
                <span className="text-[#FFC512]">It Actually Works</span>
              </h2>
            </div>
          </div>

          {/* Mobile: swipeable carousel */}
          <MobileResultsCarousel />

          {/* Desktop: 3-col grid */}
          <div
            ref={resultsRef}
            className="hidden lg:grid lg:grid-cols-3 divide-x divide-white/8 mt-2"
          >
            {clientResults.map((r, i) => (
              <div
                key={r.slug}
                className="reveal-scale flex flex-col py-12 lg:px-12 first:pl-0 last:pr-0"
                data-delay={i}
              >
                <ResultCard r={r} />
              </div>
            ))}
          </div>

          {/* FIXED: mt-16 pt-10 → mt-10 pt-8 lg:mt-16 lg:pt-10 */}
          <div className="mt-10 pt-8 lg:mt-16 lg:pt-10 border-t border-white/8">
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
          8. CTA
          FIXED: py-36 → py-16 lg:py-36
          FIXED: gap-16 → gap-8 lg:gap-16
          FIXED: items-end → items-start lg:items-end (end has no effect stacked)
          FIXED: eyebrow mb-6 → mb-4 lg:mb-6
          FIXED: body mb-8 → mb-6 lg:mb-8
          FIXED: button full-width on mobile
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#1a1a1a] relative overflow-hidden py-16 lg:py-36">
        <div aria-hidden="true" className="absolute inset-0 bg-honeycomb opacity-15 pointer-events-none" />

        <div ref={ctaRef} className="reveal relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start lg:items-end">

            <div className="lg:col-span-7">
              <span className="text-[#FFC512] text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 lg:mb-6 block">
                Ready When You Are
              </span>
              <h2
                className="font-display font-extrabold text-white leading-tight tracking-tight"
                style={{ fontSize: 'clamp(32px, 5vw, 76px)', lineHeight: 0.93 }}
              >
                Let's Find Out If<br />We're the Right Fit.
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-white/40 text-sm lg:text-[16px] leading-relaxed font-normal mb-6 lg:mb-8">
                A free Digital Health Check — no pitch deck, no hard sell. Just an honest look at your online presence and straight advice on what we'd do differently. If we think we can help, we'll say so. If not, we'll tell you that too.
              </p>

              {/* FIXED: full-width on mobile */}
              <button
                onClick={() => handleCTA('Book Your Free Digital Health Check', 'about_cta')}
                className="inline-flex items-center justify-center gap-2.5 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-sm px-8 py-4 rounded transition-all duration-200 hover:scale-105 active:scale-95 w-full sm:w-auto"
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

      {/* Sticky mobile CTA — appears after scrolling, fixed to bottom on mobile only */}
      <StickyMobileCTA onOpen={() => handleCTA('Book Your Free Digital Health Check', 'sticky_mobile_cta')} />
    </>
  )
}

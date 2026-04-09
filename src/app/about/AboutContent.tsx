'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle2, ExternalLink, Check, X } from 'lucide-react'
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal'
import { trackButtonClick } from '@/lib/analytics'
import { useAuditModal } from '@/components/providers/AuditModalProvider'
import { LinkedInIcon } from '@/components/ui/SocialIcons'

// ── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: '10+',    label: 'Years in Digital Marketing' },
  { value: '200+',   label: 'South Yorkshire Businesses Served' },
  { value: '5M+',    label: 'People Reached Through Campaigns' },
  { value: '776+',   label: 'Completed Client Projects' },
  { value: '290+',   label: 'Individual Clients Served Globally' },
  { value: '$167K+', label: 'Verified Earnings on Guru Alone' },
]

const values = [
  {
    title: 'Results Over Reports',
    desc: 'We don\'t send you a report full of impressive-looking numbers that don\'t pay your bills. Every campaign we run is measured against one thing: did it generate real enquiries, bookings, or sales? If it didn\'t, we change it.',
  },
  {
    title: 'One Team, One Contact',
    desc: 'You get one point of contact who knows your business. Not a junior account manager reading from a script — Tahir and the Bee Viral team, directly accountable to you, every month.',
  },
  {
    title: 'Straight Answers, Always',
    desc: 'If something isn\'t working, we\'ll tell you first. If we think a different approach will perform better, we\'ll say so — even if it costs us. You\'ll never hear us spin a bad month as a "learning opportunity."',
  },
  {
    title: 'Local Knowledge You Can\'t Buy',
    desc: 'We know the South Yorkshire market. We know what Rotherham customers respond to. We know what works in Barnsley that wouldn\'t work in London. That local advantage is built into everything we do.',
  },
]

const comparisonRows = [
  { label: 'Knows your business personally',    bigAgency: false, beeViral: true,  freelancer: false },
  { label: 'Full-service under one roof',        bigAgency: true,  beeViral: true,  freelancer: false },
  { label: 'Local South Yorkshire knowledge',    bigAgency: false, beeViral: true,  freelancer: false },
  { label: 'Accountable to real results',        bigAgency: false, beeViral: true,  freelancer: false },
  { label: 'No long-term contracts required',    bigAgency: false, beeViral: true,  freelancer: true  },
  { label: '10+ years of verified track record', bigAgency: false, beeViral: true,  freelancer: false },
  { label: 'Transparent monthly reporting',      bigAgency: true,  beeViral: true,  freelancer: false },
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
  {
    label: 'Connect on LinkedIn',
    sublabel: 'Tahir Azam · Founder, Bee Viral',
    href: 'https://www.linkedin.com/in/tahir-azam-7675b393/',
  },
]

// ── Component ────────────────────────────────────────────────────────────────

export default function AboutContent() {
  const storyRef      = useScrollReveal<HTMLDivElement>(0.15)
  const pullQuoteRef  = useScrollReveal<HTMLDivElement>(0.15)
  const statsRef      = useStaggerReveal<HTMLDivElement>(0.05)
  const valuesRef     = useStaggerReveal<HTMLDivElement>(0.05)
  const whyRef        = useScrollReveal<HTMLDivElement>(0.1)
  const founderRef    = useScrollReveal<HTMLDivElement>(0.1)
  const resultsRef    = useStaggerReveal<HTMLDivElement>(0.05)
  const ctaRef        = useScrollReveal<HTMLDivElement>(0.2)

  const { openAuditModal } = useAuditModal()

  const handleCTA = (label: string, location: string) => {
    trackButtonClick(label, location)
    openAuditModal('service', '', 'general')
  }

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#222222] pt-40 pb-28 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-honeycomb pointer-events-none" />
        <div aria-hidden="true" className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#FFC512]/5 blur-3xl pointer-events-none" />
        <div aria-hidden="true" className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full bg-[#FFC512]/4 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="hero-enter hero-enter-1 inline-block text-[#FFC512] text-sm font-medium uppercase tracking-widest mb-5">
            10+ years of real-world digital marketing experience
          </span>

          <h1
            className="hero-enter hero-enter-2 font-display font-extrabold text-white mb-6 leading-[0.95] tracking-tight"
            style={{ fontSize: 'clamp(38px, 6vw, 76px)' }}
          >
            We Grow South Yorkshire<br />
            Businesses Online.<br />
            <span className="text-[#FFC512]">No Fluff. Just Results.</span>
          </h1>

          <p className="hero-enter hero-enter-3 text-white/60 text-lg max-w-2xl leading-relaxed font-normal mb-10">
            Over 10 years and 200+ local clients, Bee Viral has become South Yorkshire's most trusted full-service digital agency — built by a founder who delivered real results for hundreds of businesses before opening his doors locally.
          </p>

          <div className="hero-enter hero-enter-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={() => handleCTA('Get Your Free Digital Health Check', 'about_hero')}
              className="inline-flex items-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#FFC512]/20"
            >
              Get Your Free Digital Health Check
              <ArrowRight size={18} />
            </button>
            <a
              href="#founder"
              className="text-white/50 hover:text-white text-sm font-medium transition-colors duration-200 underline underline-offset-4"
            >
              Or learn who's behind it →
            </a>
          </div>

          <p className="hero-enter hero-enter-5 text-white/30 text-sm mt-5 font-normal">
            No contracts. No jargon. No obligation.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          2. ORIGIN & STORY
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — story copy */}
            <div ref={storyRef} className="reveal-left">
              <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
                The Real Story
              </span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#222222] mt-3 mb-8 leading-tight tracking-tight">
                Why Bee Viral<br />
                <span className="text-[#FFC512]">Exists</span>
              </h2>

              <div className="space-y-5 text-[#555] text-lg leading-relaxed font-normal">
                <p>
                  Before Bee Viral, Tahir spent years in the trenches of freelance digital marketing — not in an agency boardroom, not studying theory, but actually doing the work. Client by client. Campaign by campaign.
                </p>
                <p>
                  He completed over 776 client projects on platforms like Guru and Freelancer.com. He worked with more than 290 individual clients across the UK, the US, Canada, Europe, and beyond. He ran social media accounts, built ad campaigns, built websites, and generated real, measurable results for clients across the globe.
                </p>
                <p>
                  And while he was doing all of that, he kept noticing the same thing back home in South Yorkshire.
                </p>
                <p className="text-[#333] font-medium">
                  Local businesses were getting burned.
                </p>
                <p>
                  Not by obvious scammers — by professional-looking agencies charging professional-looking fees and delivering nothing worth paying for. Generic posts. Vanity metrics. Reports full of impressions and reach but no leads, no bookings, no actual business growth.
                </p>
                <p>
                  After years of delivering results for clients around the world, Tahir launched Bee Viral with one simple idea: give South Yorkshire businesses the same quality of digital marketing that was working globally — delivered locally, transparently, and without the bullshit.
                </p>
                <p>
                  Since launching Bee Viral, over 200 local businesses have grown with us. And we're still doing the work ourselves — no middlemen, no outsourcing, no excuses.
                </p>
              </div>
            </div>

            {/* Right — pull quote */}
            <div ref={pullQuoteRef} className="reveal-right lg:pt-24">
              <blockquote className="relative bg-[#222222] rounded-2xl p-8 sm:p-10">
                {/* Decorative quote mark */}
                <div className="absolute top-4 left-6 text-[#FFC512]/15 font-display text-8xl font-extrabold leading-none select-none pointer-events-none">
                  "
                </div>
                <p className="relative z-10 text-white text-xl sm:text-2xl leading-relaxed font-normal italic mb-6">
                  "I'd speak to business owners in Rotherham or Barnsley who'd spent thousands with agencies and had nothing to show for it. No leads. No growth. Just a fancy PDF report and a lot of excuses. That's why I built Bee Viral."
                </p>
                <footer className="flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/tahir-azam.png"
                    alt="Tahir Azam — Founder, Bee Viral"
                    width={52}
                    height={52}
                    className="w-[52px] h-[52px] rounded-full object-cover object-center shrink-0"
                  />
                  <div>
                    <p className="font-display font-bold text-white text-base leading-tight">Tahir Azam</p>
                    <p className="text-[#FFC512] text-xs font-medium uppercase tracking-widest mt-0.5">Founder, Bee Viral</p>
                  </div>
                </footer>
              </blockquote>

              {/* Stats teaser beneath quote */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { v: '200+', l: 'Local Clients' },
                  { v: '10+',  l: 'Years Experience' },
                ].map((s) => (
                  <div key={s.l} className="bg-[#f5f5f5] rounded-xl p-5 text-center">
                    <span className="font-display font-extrabold text-3xl text-[#222222] tracking-tight">{s.v}</span>
                    <p className="text-[#555] text-xs font-medium uppercase tracking-widest mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          3. CREDIBILITY & PROOF (yellow)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#FFC512] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <span className="text-[#222222]/60 text-sm font-medium uppercase tracking-widest">
              The Numbers Behind the Work
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#222222] mt-3 tracking-tight leading-tight">
              This Isn't Theory.<br />This Is Track Record.
            </h2>
            <p className="text-[#222222]/65 text-lg max-w-xl mx-auto mt-4 font-normal leading-relaxed">
              These aren't agency estimates. They're verified numbers from years of real client work — locally and globally. You can check every one of them.
            </p>
          </div>

          <div
            ref={statsRef}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="reveal-scale bg-[#222222]/8 rounded-2xl p-8 text-center"
                data-delay={i}
              >
                <span className="font-display font-extrabold text-[#222222] tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>
                  {s.value}
                </span>
                <p className="text-[#222222]/65 text-sm font-medium uppercase tracking-widest mt-2 leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          4. VALUES & APPROACH (dark)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#222222] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              How We Work
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
              What "Full Service"<br />
              <span className="text-[#FFC512]">Actually Means</span>
            </h2>
          </div>

          <div
            ref={valuesRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((v, i) => (
              <div
                key={v.title}
                className="reveal-scale bg-[#2d2d2d] border border-white/5 hover:border-[#FFC512]/30 rounded-xl p-8 transition-colors duration-300"
                data-delay={i}
              >
                <CheckCircle2 size={24} className="text-[#FFC512] mb-4" />
                <h3 className="font-display font-semibold text-white text-xl mb-3 tracking-tight">
                  {v.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed font-normal">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          5. WHY BEE VIRAL — Comparison (white)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div ref={whyRef} className="reveal text-center mb-14">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              The Honest Case
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#222222] mt-3 tracking-tight leading-tight">
              Why Not a Big Agency?<br />Why Not Just Go Freelance?
            </h2>
            <p className="text-[#555] text-lg max-w-2xl mx-auto mt-5 leading-relaxed font-normal">
              Fair questions. Here's the honest answer — laid out so you can make up your own mind.
            </p>
          </div>

          {/* Comparison table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left pb-4 pr-4 text-[#999] font-medium text-xs uppercase tracking-widest w-1/2" />
                  <th className="pb-4 px-4 text-center text-[#999] font-medium text-xs uppercase tracking-widest">
                    Big Agency
                  </th>
                  <th className="pb-4 px-4 text-center">
                    <span className="inline-block bg-[#FFC512] text-[#222222] font-display font-bold text-sm px-4 py-1.5 rounded-full">
                      Bee Viral
                    </span>
                  </th>
                  <th className="pb-4 px-4 text-center text-[#999] font-medium text-xs uppercase tracking-widest">
                    Cheap Freelancer
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0f0f0]">
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <td className="py-4 pr-4 text-[#333] font-normal leading-snug">{row.label}</td>
                    <td className="py-4 px-4 text-center">
                      {row.bigAgency
                        ? <Check size={18} className="text-[#22c55e] mx-auto" />
                        : <X size={18} className="text-[#ef4444]/40 mx-auto" />
                      }
                    </td>
                    <td className="py-4 px-4 text-center bg-[#FFC512]/5">
                      <Check size={20} className="text-[#222222] mx-auto" strokeWidth={2.5} />
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.freelancer
                        ? <Check size={18} className="text-[#22c55e] mx-auto" />
                        : <X size={18} className="text-[#ef4444]/40 mx-auto" />
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-[#555] text-base mt-10 leading-relaxed">
            We're not the cheapest option in the room.<br />
            <span className="font-medium text-[#222222]">We're the one that actually delivers.</span>
          </p>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          6. FOUNDER (white)
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="founder" className="bg-[#f5f5f5] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div ref={founderRef} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

            {/* Left — photo + pull quote */}
            <div className="flex flex-col items-center lg:items-start gap-6">
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/tahir-azam.png"
                  alt="Tahir Azam — Founder, Bee Viral"
                  width={320}
                  height={380}
                  className="w-full max-w-[320px] rounded-2xl object-cover object-center shadow-2xl shadow-black/15"
                />
                {/* Yellow name badge overlaid at bottom of photo */}
                <div className="absolute bottom-0 left-0 right-0 max-w-[320px] bg-[#FFC512] rounded-b-2xl px-6 py-4">
                  <p className="font-display font-bold text-[#222222] text-lg leading-tight">Tahir Azam</p>
                  <p className="text-[#222222]/65 text-xs font-medium uppercase tracking-widest mt-0.5">Founder, Bee Viral · South Yorkshire</p>
                </div>
              </div>

              {/* Pull-quote beneath photo */}
              <blockquote className="max-w-[320px] border-l-4 border-[#FFC512] pl-5 py-1">
                <p className="text-[#333] text-base leading-relaxed italic font-normal">
                  "I built Bee Viral because South Yorkshire businesses deserve better. Not promises — delivery. Not dashboards — results. If we take you on, I'm personally accountable for your growth."
                </p>
              </blockquote>

              {/* Trust badges */}
              <div className="max-w-[320px] w-full space-y-3 mt-2">
                <p className="text-[#999] text-xs font-medium uppercase tracking-widest">Verified Profiles</p>
                {trustBadges.map((badge) => (
                  <a
                    key={badge.href}
                    href={badge.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 bg-[#222222] hover:bg-[#2d2d2d] rounded-xl px-4 py-3 transition-colors duration-200"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#FFC512] shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium leading-tight group-hover:text-[#FFC512] transition-colors duration-200">
                        {badge.label}
                      </p>
                      <p className="text-white/40 text-xs font-normal mt-0.5">{badge.sublabel}</p>
                    </div>
                    <ExternalLink size={14} className="text-white/25 group-hover:text-[#FFC512] transition-colors duration-200 shrink-0" />
                  </a>
                ))}

                {/* LinkedIn separately with icon */}
                <a
                  href="https://www.linkedin.com/in/tahir-azam-7675b393/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 border border-white/10 hover:border-[#FFC512]/40 rounded-xl px-4 py-3 transition-colors duration-200"
                >
                  <LinkedInIcon size={16} />
                  <span className="text-[#555] text-sm font-medium group-hover:text-[#222222] transition-colors duration-200">
                    Connect on LinkedIn
                  </span>
                  <ExternalLink size={14} className="text-[#999] group-hover:text-[#222222] transition-colors duration-200 ml-auto shrink-0" />
                </a>
              </div>
            </div>

            {/* Right — bio copy */}
            <div>
              <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
                Meet the Founder
              </span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#222222] mt-3 mb-8 leading-tight tracking-tight">
                Built by Someone<br />Who's Done the Work.
              </h2>

              <div className="space-y-5 text-[#555] text-lg leading-relaxed font-normal">
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
                  After years of delivering results for clients around the world, Tahir launched Bee Viral with a clear focus: South Yorkshire. The goal was never to build a big agency — it was to build the right one. An agency that treats every client like Tahir treated his freelance clients: seriously, honestly, and with a genuine stake in their success.
                </p>
                <p>
                  Today, he works with businesses across Rotherham, Barnsley, Sheffield, Doncaster, and wider South Yorkshire — handling everything from social media and SEO to website builds and paid ads.
                </p>
                <p className="text-[#333] font-medium">
                  Not a faceless team. A real person, with a real track record, who lives and works in the same communities as the businesses he serves.
                </p>
              </div>

              {/* Services list */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Social Media Management',
                  'Paid Advertising (Meta / Google)',
                  'Local SEO & Content',
                  'Website Design & Build',
                  'Booking Systems & Automation',
                  'Analytics & Reporting',
                ].map((service) => (
                  <div key={service} className="flex items-center gap-2.5 text-[#555] text-sm font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFC512] shrink-0" />
                    {service}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          7. SOCIAL PROOF — Client Results (dark)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#222222] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              Client Results
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
              What Happens When<br />
              <span className="text-[#FFC512]">It Actually Works</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto mt-4 font-normal leading-relaxed">
              Don't take our word for it. Here's what real South Yorkshire businesses have seen working with Bee Viral.
            </p>
          </div>

          <div
            ref={resultsRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {clientResults.map((r, i) => (
              <div
                key={r.slug}
                className="reveal-scale bg-[#2d2d2d] border border-white/5 hover:border-[#FFC512]/25 rounded-2xl p-8 flex flex-col transition-colors duration-300"
                data-delay={i}
              >
                {/* Business name + location */}
                <div className="mb-6">
                  <p className="font-display font-bold text-white text-lg leading-tight">{r.business}</p>
                  <p className="text-white/40 text-xs font-medium uppercase tracking-widest mt-1">{r.location}</p>
                </div>

                {/* Stat */}
                <div className="mb-6">
                  <span className="font-display font-extrabold text-[#FFC512] tracking-tight" style={{ fontSize: 'clamp(40px, 5vw, 52px)' }}>
                    {r.stat}
                  </span>
                  <p className="text-white/55 text-sm font-normal mt-1">{r.statLabel}</p>
                </div>

                {/* Quote */}
                <blockquote className="text-white/60 text-sm leading-relaxed font-normal italic flex-1 mb-6">
                  "{r.quote}"
                </blockquote>

                {/* Link */}
                <Link
                  href={`/case-studies/${r.slug}`}
                  className="inline-flex items-center gap-1.5 text-[#FFC512] text-sm font-medium hover:gap-2.5 transition-all duration-200"
                >
                  Read the full case study
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 border border-white/15 hover:border-[#FFC512]/40 text-white/70 hover:text-white text-sm font-medium px-6 py-3 rounded-md transition-all duration-200"
            >
              View all case studies
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          8. CLOSING CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#1a1a1a] relative overflow-hidden py-24">
        <div aria-hidden="true" className="absolute inset-0 bg-honeycomb opacity-30 pointer-events-none" />
        <div aria-hidden="true" className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full bg-[#FFC512]/5 blur-3xl pointer-events-none" />

        <div ref={ctaRef} className="reveal-scale relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
            Ready When You Are
          </span>
          <h2
            className="font-display font-extrabold text-white mt-4 mb-6 leading-tight tracking-tight"
            style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}
          >
            Let's Find Out If<br />We're the Right Fit
          </h2>
          <p className="text-white/60 text-lg leading-relaxed font-normal mb-4">
            We offer every new client a free Digital Health Check — a no-pressure conversation where we look at your current online presence and tell you honestly what's working, what isn't, and what we'd do differently.
          </p>
          <p className="text-white/60 text-lg leading-relaxed font-normal mb-10">
            No pitch deck. No hard sell. Just straight talk from someone who's spent 10 years growing local businesses online. If we think we can help, we'll tell you how. If we don't, we'll tell you that too.
          </p>

          <button
            onClick={() => handleCTA('Book Your Free Digital Health Check', 'about_cta')}
            className="inline-flex items-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#FFC512]/20"
          >
            Book Your Free Digital Health Check
            <ArrowRight size={18} />
          </button>

          <p className="text-white/30 text-sm mt-5 font-normal">
            No contracts. No jargon. No obligation. Just an honest conversation.
          </p>
        </div>
      </section>
    </>
  )
}

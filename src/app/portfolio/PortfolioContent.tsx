'use client'

import Link from 'next/link'
import { ArrowRight, Image as ImageIcon, Film, Megaphone, Layout, Palette, BarChart2 } from 'lucide-react'
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal'
import { trackButtonClick } from '@/lib/analytics'
import { useAuditModal } from '@/components/providers/AuditModalProvider'

// ── Mock preview components ────────────────────────────────────────────────────

function FeedPostsPreview() {
  return (
    <div className="flex gap-2 h-36" aria-hidden="true">
      {/* Post 1: Promo */}
      <div className="flex-1 rounded-xl overflow-hidden relative bg-[#0f0f0f] border border-white/10">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#FFC512]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
          <div className="text-[#FFC512] font-bold uppercase mb-1" style={{fontSize:'6px',letterSpacing:'0.15em'}}>Limited Time</div>
          <div className="text-white font-extrabold leading-none" style={{fontSize:'22px',fontFamily:'var(--font-sora)'}}>50%<br/>OFF</div>
          <div className="w-8 h-px bg-[#FFC512]/40 my-2" />
          <div className="text-white/40" style={{fontSize:'5.5px',letterSpacing:'0.1em'}}>This Week Only</div>
        </div>
        <div className="absolute bottom-2 right-2 font-bold text-[#FFC512]/50" style={{fontSize:'5.5px'}}>BEE VIRAL</div>
      </div>

      {/* Post 2: Google review quote */}
      <div className="flex-1 rounded-xl overflow-hidden relative border border-[#FFC512]/20" style={{background:'#FFC512'}}>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
          <div className="text-[#222]/10 font-extrabold absolute -top-3 left-0 select-none pointer-events-none" style={{fontSize:'72px',lineHeight:1}}>❝</div>
          <div className="text-[#222] font-bold leading-snug relative z-10" style={{fontSize:'8.5px',lineHeight:1.35}}>"Best coffee<br/>in Rotherham"</div>
          <div className="mt-2 relative z-10" style={{fontSize:'9px'}}>⭐⭐⭐⭐⭐</div>
          <div className="text-[#222]/55 mt-1 relative z-10" style={{fontSize:'5.5px'}}>— Google Review</div>
        </div>
      </div>

      {/* Post 3: Lifestyle/seasonal */}
      <div className="flex-1 rounded-xl overflow-hidden relative bg-gradient-to-br from-[#2d1a00] via-[#1a1208] to-[#0f0f0f] border border-white/8">
        <div className="absolute inset-0 flex flex-col justify-between p-3">
          <div className="self-start bg-[#FFC512]/20 text-[#FFC512] rounded-full px-2 py-0.5 font-semibold uppercase" style={{fontSize:'5px',letterSpacing:'0.1em'}}>New In</div>
          <div>
            <div className="text-white font-bold leading-tight" style={{fontSize:'8px'}}>Autumn Menu<br/>Now Live</div>
            <div className="text-[#FFC512] mt-1.5 font-semibold flex items-center gap-0.5" style={{fontSize:'6.5px'}}>Book now →</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ReelsPreview() {
  const reels = [
    { bg: 'from-[#1a0a2e] to-[#0f0f0f]', progress: [true, false, false], label: '@beeviralltd',    sub: 'Watch this 👀',  likes: '2.4K', hiColor: false },
    { bg: 'from-[#0a1a2e] to-[#0f0f0f]', progress: [true, true,  false], label: 'BEFORE & AFTER', sub: 'Swipe left ▷',   likes: '1.1K', hiColor: true  },
    { bg: 'from-[#2d1a00] to-[#0f0f0f]', progress: [true, true,  true],  label: 'Behind the scenes', sub: '2.1M views 🔥', likes: '5.2K', hiColor: true  },
  ]
  return (
    <div className="flex gap-2 h-36" aria-hidden="true">
      {reels.map((r, i) => (
        <div key={i} className={`flex-1 rounded-xl overflow-hidden relative bg-gradient-to-b ${r.bg} border border-white/10`}>
          {/* Progress bars */}
          <div className="absolute top-1.5 left-1.5 right-1.5 flex gap-0.5">
            {r.progress.map((filled, j) => (
              <div key={j} className="h-[2px] flex-1 rounded-full" style={{background: filled ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.25)'}} />
            ))}
          </div>
          {/* Avatar */}
          <div className="absolute top-5 left-2 flex items-center gap-1">
            <div className="w-4 h-4 rounded-full bg-[#FFC512] border border-white/20 flex items-center justify-center font-bold text-[#222]" style={{fontSize:'4px'}}>BV</div>
            <div className="text-white font-medium" style={{fontSize:'5px'}}>beeviralltd</div>
          </div>
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-white/15 border border-white/25 flex items-center justify-center">
              <div className="w-0 h-0 ml-1" style={{borderTop:'6px solid transparent',borderBottom:'6px solid transparent',borderLeft:'10px solid white'}} />
            </div>
          </div>
          {/* Side engagement */}
          <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex flex-col gap-1 items-center">
            <div style={{fontSize:'11px',color: r.hiColor ? '#FFC512' : 'rgba(255,255,255,0.65)'}}>♥</div>
            <div className="text-white/40" style={{fontSize:'5px'}}>{r.likes}</div>
          </div>
          {/* Caption */}
          <div className="absolute bottom-2 left-2 right-7">
            <div className="font-bold truncate" style={{fontSize:'6.5px',color: r.hiColor ? '#FFC512' : 'white'}}>{r.label}</div>
            <div className="text-white/50" style={{fontSize:'5.5px'}}>{r.sub}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function AdCreativesPreview() {
  const ads = [
    { stat: '+340%', label: 'More Reach',  gradient: 'from-[#FFC512]/20 to-[#222]',   cta: 'Learn More'  },
    { stat: '40+',   label: 'Leads/Month', gradient: 'from-[#1a3a1a] to-[#0f0f0f]',  cta: 'Get Started' },
    { stat: '6.7×',  label: 'Avg ROAS',   gradient: 'from-[#2d1a00] to-[#0f0f0f]',   cta: 'Book Audit'  },
  ]
  return (
    <div className="flex gap-2 h-36" aria-hidden="true">
      {ads.map((ad, i) => (
        <div key={i} className="flex-1 rounded-xl overflow-hidden border border-white/10 bg-[#0f0f0f] flex flex-col">
          {/* Sponsored header */}
          <div className="flex items-center gap-1 px-2 py-1.5 border-b border-white/8 flex-shrink-0">
            <div className="w-4 h-4 rounded-full bg-[#FFC512] flex items-center justify-center font-bold text-[#222]" style={{fontSize:'4.5px'}}>BV</div>
            <div>
              <div className="text-white font-semibold" style={{fontSize:'5.5px',lineHeight:1.2}}>Bee Viral</div>
              <div className="text-white/30" style={{fontSize:'4.5px'}}>Sponsored ·</div>
            </div>
          </div>
          {/* Ad image area */}
          <div className={`bg-gradient-to-br ${ad.gradient} flex-1 flex items-center justify-center`}>
            <div className="text-center">
              <div className="text-[#FFC512] font-extrabold leading-none" style={{fontSize:'17px',fontFamily:'var(--font-sora)'}}>{ad.stat}</div>
              <div className="text-white/60 mt-0.5" style={{fontSize:'5.5px'}}>{ad.label}</div>
            </div>
          </div>
          {/* CTA */}
          <div className="px-2 py-1.5 flex-shrink-0">
            <div className="bg-[#FFC512] rounded text-center py-1 text-[#222] font-bold" style={{fontSize:'6px'}}>{ad.cta}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function StoriesPreview() {
  const stories = [
    { bg: 'from-[#1a0a2e] to-[#2d0a0a]', title: 'Flash Sale',         sub: '24 hrs only'       },
    { bg: 'from-[#FFC512]/20 to-[#2d1a00]', title: 'New Post!',        sub: 'See our work'       },
    { bg: 'from-[#0a1a2e] to-[#0a2e1a]',  title: 'Behind The Scenes', sub: 'Day at the studio'  },
  ]
  return (
    <div className="flex gap-2 h-36" aria-hidden="true">
      {stories.map((s, i) => (
        <div key={i} className={`flex-1 rounded-xl overflow-hidden relative bg-gradient-to-b ${s.bg} border border-white/10`}>
          {/* Progress bars */}
          <div className="absolute top-1.5 left-1.5 right-1.5 flex gap-0.5">
            {[0, 1, 2].map((j) => (
              <div key={j} className="h-[2px] flex-1 rounded-full" style={{background: j <= i ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.25)'}} />
            ))}
          </div>
          {/* Header */}
          <div className="absolute top-5 left-2 flex items-center gap-1">
            <div className="w-3.5 h-3.5 rounded-full bg-[#FFC512] border border-white/30 flex items-center justify-center font-bold text-[#222]" style={{fontSize:'3.5px'}}>BV</div>
            <div className="text-white font-medium" style={{fontSize:'5px'}}>beeviralltd</div>
          </div>
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center">
            <div className="text-white font-extrabold leading-tight" style={{fontSize:'9px',fontFamily:'var(--font-sora)'}}>{s.title}</div>
            <div className="text-white/55 mt-1" style={{fontSize:'5.5px'}}>{s.sub}</div>
          </div>
          {/* See more */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center">
            <div className="border border-white/25 rounded-full px-2 py-0.5 text-white/55" style={{fontSize:'5px'}}>See More ↑</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function BrandGraphicsPreview() {
  return (
    <div className="flex gap-2 h-36" aria-hidden="true">
      {/* Logo design */}
      <div className="flex-1 rounded-xl overflow-hidden bg-[#0f0f0f] border border-white/10 flex flex-col items-center justify-center gap-2.5">
        <div className="w-12 h-12 rounded-2xl bg-[#FFC512] flex items-center justify-center shadow-lg shadow-[#FFC512]/20">
          <span className="font-extrabold text-[#222]" style={{fontSize:'17px',fontFamily:'var(--font-sora)'}}>BV</span>
        </div>
        <div className="text-white/40 uppercase tracking-widest" style={{fontSize:'5px'}}>Logo Design</div>
      </div>

      {/* Colour palette */}
      <div className="flex-1 rounded-xl overflow-hidden bg-[#0f0f0f] border border-white/10 flex flex-col">
        <div className="flex flex-1">
          <div className="flex-1 bg-[#FFC512]" />
          <div className="flex-1 bg-[#222222]" />
        </div>
        <div className="flex flex-1">
          <div className="flex-1 bg-[#1a1a1a]" />
          <div className="flex-1 bg-white" />
        </div>
        <div className="px-2 py-1.5 bg-[#0f0f0f] flex-shrink-0">
          <div className="text-white/40 uppercase" style={{fontSize:'5px',letterSpacing:'0.1em'}}>Brand Colours</div>
        </div>
      </div>

      {/* Typography */}
      <div className="flex-1 rounded-xl overflow-hidden bg-[#FFC512] border border-[#FFC512]/20 flex flex-col justify-between p-3">
        <div className="text-[#222] font-extrabold leading-none" style={{fontSize:'34px',fontFamily:'var(--font-sora)'}}>Aa</div>
        <div>
          <div className="w-full h-px bg-[#222]/20 mb-1.5" />
          <div className="text-[#222]/60 font-bold" style={{fontSize:'5px',letterSpacing:'0.1em'}}>SORA — DISPLAY</div>
          <div className="text-[#222]/40" style={{fontSize:'4.5px',letterSpacing:'0.05em'}}>Inter — Body Copy</div>
        </div>
      </div>
    </div>
  )
}

function ReportsPreview() {
  const bars = [38, 62, 50, 78, 66, 88, 72]
  return (
    <div className="flex gap-2 h-36" aria-hidden="true">
      {/* Reach metric + sparkline */}
      <div className="flex-1 rounded-xl overflow-hidden bg-[#0f0f0f] border border-white/10 p-3 flex flex-col justify-between">
        <div className="text-white/40 uppercase" style={{fontSize:'5px',letterSpacing:'0.1em'}}>Monthly Reach</div>
        <div>
          <div className="text-[#FFC512] font-extrabold leading-none" style={{fontSize:'26px',fontFamily:'var(--font-sora)'}}>48K</div>
          <div className="flex items-center gap-0.5 mt-1">
            <span className="text-green-400" style={{fontSize:'8px'}}>↑</span>
            <span className="text-green-400 font-bold" style={{fontSize:'6px'}}>+34%</span>
          </div>
        </div>
        <svg viewBox="0 0 60 16" className="w-full opacity-70" style={{height:'16px'}}>
          <polyline
            points="0,14 10,11 20,12 30,5 40,7 50,2 60,3"
            fill="none"
            stroke="#FFC512"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Engagement bar chart */}
      <div className="flex-1 rounded-xl overflow-hidden bg-[#0f0f0f] border border-white/10 p-3 flex flex-col justify-between">
        <div className="text-white/40 uppercase" style={{fontSize:'5px',letterSpacing:'0.1em'}}>Engagement</div>
        <div className="flex items-end gap-[3px] flex-1 py-1.5">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm"
              style={{
                height: `${h}%`,
                background: i === bars.length - 1 ? '#FFC512' : `rgba(255,197,18,${0.15 + i * 0.06})`,
              }}
            />
          ))}
        </div>
        <div className="flex items-center gap-0.5">
          <span className="text-green-400" style={{fontSize:'8px'}}>↑</span>
          <span className="text-green-400 font-bold" style={{fontSize:'6px'}}>+220%</span>
        </div>
      </div>

      {/* Leads generated */}
      <div className="flex-1 rounded-xl overflow-hidden border border-[#FFC512]/20 p-3 flex flex-col justify-between" style={{background:'rgba(255,197,18,0.05)'}}>
        <div className="text-[#FFC512]/55 uppercase" style={{fontSize:'5px',letterSpacing:'0.1em'}}>Leads Generated</div>
        <div>
          <div className="text-white font-extrabold leading-none" style={{fontSize:'26px',fontFamily:'var(--font-sora)'}}>43</div>
          <div className="flex items-center gap-0.5 mt-1">
            <span className="text-green-400" style={{fontSize:'8px'}}>↑</span>
            <span className="text-green-400 font-bold" style={{fontSize:'6px'}}>+18 vs last mo</span>
          </div>
        </div>
        <div>
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full rounded-full bg-[#FFC512]" style={{width:'75%'}} />
          </div>
          <div className="text-white/30 mt-1" style={{fontSize:'4.5px'}}>75% of monthly target</div>
        </div>
      </div>
    </div>
  )
}

// ── Format previews (index-matched to formats array) ──────────────────────────
const formatPreviews = [
  <FeedPostsPreview key="feed"    />,
  <ReelsPreview     key="reels"   />,
  <AdCreativesPreview key="ads"   />,
  <StoriesPreview   key="stories" />,
  <BrandGraphicsPreview key="brand" />,
  <ReportsPreview   key="reports" />,
]

// ── Format data ────────────────────────────────────────────────────────────────
const formats = [
  {
    icon:   <ImageIcon size={26} />,
    title:  'Feed Posts',
    desc:   'On-brand graphics designed for maximum scroll-stop on Instagram and Facebook.',
    count:  '4,800+',
    label:  'posts designed',
    accent: 'from-rose-500/15 to-rose-900/5',
    border: 'border-rose-500/20',
  },
  {
    icon:   <Film size={26} />,
    title:  'Reels & Short Video',
    desc:   'Vertical video content built for TikTok, Instagram Reels, and Facebook — scripted, filmed, and edited.',
    count:  '600+',
    label:  'videos produced',
    accent: 'from-violet-500/15 to-violet-900/5',
    border: 'border-violet-500/20',
  },
  {
    icon:   <Megaphone size={26} />,
    title:  'Ad Creatives',
    desc:   'High-converting static and video ads for Facebook, Instagram, and Google — tested and optimised for your audience.',
    count:  '1,200+',
    label:  'creatives tested',
    accent: 'from-amber-500/15 to-amber-900/5',
    border: 'border-amber-500/20',
  },
  {
    icon:   <Layout size={26} />,
    title:  'Stories & Carousels',
    desc:   'Engaging multi-frame and swipeable content that keeps your audience watching and tapping through.',
    count:  '2,100+',
    label:  'stories published',
    accent: 'from-sky-500/15 to-sky-900/5',
    border: 'border-sky-500/20',
  },
  {
    icon:   <Palette size={26} />,
    title:  'Brand Graphics',
    desc:   'Logos, cover images, highlight covers, and profile assets — everything to make your pages look professional.',
    count:  '350+',
    label:  'brands refreshed',
    accent: 'from-emerald-500/15 to-emerald-900/5',
    border: 'border-emerald-500/20',
  },
  {
    icon:   <BarChart2 size={26} />,
    title:  'Campaign Reports',
    desc:   'Clear, jargon-free monthly reports with the numbers that matter — reach, engagement, leads, and spend.',
    count:  '3,000+',
    label:  'reports delivered',
    accent: 'from-teal-500/15 to-teal-900/5',
    border: 'border-teal-500/20',
  },
]

// ── Industries ─────────────────────────────────────────────────────────────────
const industries = [
  {
    name:  'Hospitality & Food',
    blurb: 'Restaurants, cafés, and takeaways across Rotherham and Barnsley. We make food look irresistible.',
    emoji: '🍽️',
    tags:  ['Feed Posts', 'Reels', 'Story Ads'],
  },
  {
    name:  'Trades & Construction',
    blurb: 'Builders, roofers, and plumbers who need leads, not likes. We run the ads that fill their diaries.',
    emoji: '🔧',
    tags:  ['Facebook Ads', 'Google Ads', 'Lead Gen'],
  },
  {
    name:  'Fitness & Wellness',
    blurb: 'Gyms, PTs, and studios. Membership campaigns, class promos, and transformation content that converts.',
    emoji: '🏋️',
    tags:  ['Reels', 'Ad Creatives', 'Carousels'],
  },
  {
    name:  'Retail & E-commerce',
    blurb: 'Local shops and online stores. Product photography, seasonal campaigns, and retargeting ads.',
    emoji: '🛍️',
    tags:  ['Product Posts', 'Story Ads', 'Carousels'],
  },
  {
    name:  'Beauty & Hair',
    blurb: 'Salons and beauty clinics. We make appointment books full with content that showcases the craft.',
    emoji: '💇',
    tags:  ['Before & After', 'Reels', 'Brand Graphics'],
  },
  {
    name:  'Healthcare & Dental',
    blurb: 'Clinics and practices that need a trustworthy digital presence to attract new patients.',
    emoji: '🦷',
    tags:  ['Ad Creatives', 'Feed Posts', 'Reviews'],
  },
  {
    name:  'Automotive',
    blurb: 'Garages, dealerships, and auto services. Showcase work, run local ads, and generate enquiries.',
    emoji: '🚗',
    tags:  ['Google Ads', 'Facebook Ads', 'Video'],
  },
  {
    name:  'Professional Services',
    blurb: 'Accountants, solicitors, and consultants building authority and generating referrals through social.',
    emoji: '💼',
    tags:  ['Brand Content', 'LinkedIn', 'Ad Creatives'],
  },
]

// ── Process ────────────────────────────────────────────────────────────────────
const steps = [
  {
    number: '01',
    title:  'Brief & Brand Onboarding',
    desc:   "We learn your colours, fonts, tone of voice, and who you're trying to reach. Every piece of content we make is distinctly yours — not a template.",
  },
  {
    number: '02',
    title:  'Design & Production',
    desc:   "Our in-house designers and videographers produce all content. You get a monthly calendar to review and approve before anything goes live.",
  },
  {
    number: '03',
    title:  'Publish & Optimise',
    desc:   "We schedule, publish, and monitor performance. Every month we refine the content mix based on what's working — so results compound over time.",
  },
]

// ── Stats ──────────────────────────────────────────────────────────────────────
const stats = [
  { v: '200+', l: 'Clients Served'      },
  { v: '10K+', l: 'Pieces of Content'   },
  { v: '10+',  l: 'Years Experience'    },
  { v: '8',    l: 'Industries Covered'  },
]

// ── Main component ─────────────────────────────────────────────────────────────
export default function PortfolioContent() {
  const formatsRef    = useStaggerReveal<HTMLDivElement>(0.06)
  const industriesRef = useStaggerReveal<HTMLDivElement>(0.04)
  const stepsRef      = useStaggerReveal<HTMLDivElement>(0.1)
  const ctaRef        = useScrollReveal<HTMLDivElement>(0.2)
  const { openAuditModal } = useAuditModal()

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#222222] pt-40 pb-28 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-honeycomb pointer-events-none" />
        <div aria-hidden="true" className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#FFC512]/5 blur-3xl pointer-events-none" />
        <div aria-hidden="true" className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-[#FFC512]/4 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#FFC512] text-sm font-medium uppercase tracking-widest mb-4">
            Our Portfolio
          </span>
          <h1
            className="font-display font-extrabold text-white mb-6 max-w-5xl mx-auto"
            style={{ fontSize: 'clamp(32px, 5.5vw, 72px)', lineHeight: 0.92, letterSpacing: '-0.02em' }}
          >
            Content That<br />
            <span className="text-[#FFC512]">Stops the Scroll.</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-10">
            We've produced over 10,000 pieces of content for local businesses across South Yorkshire.
            Here's what we make — and how we make it.
          </p>

          {/* Stat strip */}
          <div className="inline-flex flex-wrap justify-center gap-8 mb-12 px-8 py-5 rounded-2xl bg-white/4 border border-white/10">
            {stats.map((s) => (
              <div key={s.l} className="flex flex-col items-center gap-0.5">
                <span className="font-display font-extrabold text-[#FFC512] text-2xl sm:text-3xl tracking-tight">{s.v}</span>
                <span className="text-white/50 text-xs uppercase tracking-widest font-medium">{s.l}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => { trackButtonClick('Get Your Free Audit', 'portfolio_hero'); openAuditModal('service') }}
              className="inline-flex items-center justify-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#FFC512]/20"
            >
              Get Your Free Audit
              <ArrowRight size={18} />
            </button>
            <Link
              href="/case-studies"
              onClick={() => trackButtonClick('View Case Studies', 'portfolio_hero')}
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-semibold text-base px-8 py-4 rounded-md transition-all duration-200"
            >
              See Our Results
            </Link>
          </div>
        </div>
      </section>

      {/* ── Content Formats ───────────────────────────────────────────────────── */}
      <section className="bg-[#1a1a1a] py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              What We Make
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
              Six formats.<br />
              <span className="text-[#FFC512]">One consistent brand voice.</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto mt-4 font-normal leading-relaxed">
              Every piece is made in-house by our team — no stock images, no recycled templates.
            </p>
          </div>

          <div ref={formatsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formats.map((f, i) => (
              <div
                key={f.title}
                className={`reveal-scale group relative rounded-2xl bg-gradient-to-br ${f.accent} border ${f.border} p-7 overflow-hidden transition-all duration-300 hover:border-[#FFC512]/30`}
                data-delay={i % 3}
              >
                {/* Icon + title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-white/8 flex items-center justify-center text-[#FFC512]">
                    {f.icon}
                  </div>
                  <h3 className="font-display font-bold text-white text-lg tracking-tight">{f.title}</h3>
                </div>

                {/* Description */}
                <p className="text-white/55 text-sm leading-relaxed mb-5 font-normal">{f.desc}</p>

                {/* Preview mocks */}
                {formatPreviews[i]}

                {/* Count pill */}
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display font-extrabold text-[#FFC512] text-2xl tracking-tight">{f.count}</span>
                  <span className="text-white/40 text-xs font-normal uppercase tracking-wider">{f.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ────────────────────────────────────────────────────────── */}
      <section className="bg-[#222222] py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              Who We Work With
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
              Every industry.<br />
              <span className="text-[#FFC512]">Tailored every time.</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto mt-4 font-normal leading-relaxed">
              We don't use the same playbook twice. Here's how we approach content
              for the eight sectors we work in most.
            </p>
          </div>

          <div ref={industriesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((ind, i) => (
              <div
                key={ind.name}
                className="reveal-scale group bg-[#1c1c1c] border border-white/8 rounded-2xl p-6 hover:border-[#FFC512]/30 transition-all duration-300 cursor-default"
                data-delay={i % 4}
              >
                <div className="text-3xl mb-4" aria-hidden="true">{ind.emoji}</div>
                <h3 className="font-display font-bold text-white text-base tracking-tight mb-2 group-hover:text-[#FFC512] transition-colors duration-200">
                  {ind.name}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed font-normal mb-4">{ind.blurb}</p>
                <div className="flex flex-wrap gap-1.5">
                  {ind.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold uppercase tracking-wider text-[#FFC512]/70 bg-[#FFC512]/8 border border-[#FFC512]/15 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────────────────────── */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              How It Works
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#222222] mt-3 tracking-tight leading-tight">
              From Brief to Published<br />
              <span className="text-[#FFC512]">In Under 7 Days!</span>
            </h2>
          </div>

          <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line — desktop only */}
            <div
              aria-hidden="true"
              className="hidden md:block absolute top-10 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-[#222222]/10"
            />

            {steps.map((step, i) => (
              <div
                key={step.number}
                className="reveal-scale relative flex flex-col items-center text-center md:items-start md:text-left"
                data-delay={i}
              >
                <div className="relative mb-6 z-10">
                  <div className="w-20 h-20 rounded-2xl bg-[#222222] flex items-center justify-center">
                    <span className="font-display font-extrabold text-[#FFC512] text-2xl tracking-tight">{step.number}</span>
                  </div>
                </div>
                <h3 className="font-display font-bold text-[#222222] text-xl tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-[#555] text-base leading-relaxed font-normal">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-[#FFC512] font-semibold hover:gap-3 transition-all duration-200 tracking-wide text-base"
            >
              Want to see the results this work drives? Read our case studies
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="bg-[#FFC512] relative overflow-hidden py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V16L28 0l28 16v34zm0-92L0 -26V8L28 24l28-16V-8z' fill='none' stroke='%23222222' stroke-width='1.5'/%3E%3C/svg%3E")`,
          }}
        />
        <div ref={ctaRef} className="reveal-scale relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="font-display font-extrabold text-[#222222] mb-6"
            style={{ fontSize: 'clamp(36px, 6vw, 72px)', lineHeight: 0.95, letterSpacing: '-0.02em' }}
          >
            Ready to see content like this for your business?
          </h2>
          <p className="text-[#222222]/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Book a free audit and we'll tell you exactly what content strategy
            we'd run for your business — no obligation.
          </p>
          <button
            onClick={() => { trackButtonClick('Get Your Free Audit', 'portfolio_cta'); openAuditModal('service') }}
            className="inline-flex items-center gap-2 bg-[#222222] hover:bg-[#333] text-white font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg tracking-wide"
          >
            Get Your Free Audit
            <ArrowRight size={18} />
          </button>
          <p className="mt-6 text-[#222222]/50 text-sm font-normal">
            Free. No commitment. We'll never share your details.
          </p>
        </div>
      </section>
    </>
  )
}

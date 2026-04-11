'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal'
import { trackButtonClick } from '@/lib/analytics'
import { useAuditModal } from '@/components/providers/AuditModalProvider'

const cases = [
  {
    slug:      'the-blossom-cafe',
    business:  'The Blossom Café',
    location:  'Wath-upon-Dearne',
    industry:  'Restaurant',
    service:   'Social Media Management',
    color:     'from-rose-900/70 to-[#1a1a1a]',
    initial:   'B',
    challenge: 'Relying entirely on word of mouth with no social media presence and declining midweek footfall.',
    approach:  'We built a consistent Instagram presence with daily content, stories, and community engagement that captured the café\'s warm, local character.',
    metrics: [
      { value: '+340%', label: 'Instagram Reach' },
      { value: '+60%',  label: 'Table Bookings' },
      { value: '4.9★',  label: 'Google Rating' },
    ],
  },
  {
    slug:      'hartley-roofing',
    business:  'Hartley Roofing',
    location:  'Rotherham',
    industry:  'Trades',
    service:   'Paid Advertising',
    color:     'from-blue-900/70 to-[#1a1a1a]',
    initial:   'H',
    challenge: 'Over-reliant on referrals with an inconsistent enquiry pipeline and no digital lead generation.',
    approach:  'We launched targeted Facebook and Instagram ad campaigns promoting emergency repairs and seasonal roof checks to local homeowners.',
    metrics: [
      { value: '40+',  label: 'Leads per Month' },
      { value: '£8',   label: 'Cost per Lead' },
      { value: '6×',   label: 'Return on Ad Spend' },
    ],
  },
  {
    slug:      'spice-garden',
    business:  'Spice Garden',
    location:  'Barnsley',
    industry:  'Restaurant',
    service:   'Content Creation',
    color:     'from-orange-900/70 to-[#1a1a1a]',
    initial:   'S',
    challenge: 'Low online visibility and no consistent brand voice across social channels.',
    approach:  'We created a full content strategy with professional food photography, branded Reels, and targeted local promotions on Instagram and TikTok.',
    metrics: [
      { value: '8,200', label: 'New Followers' },
      { value: '3×',    label: 'Weekend Reservations' },
      { value: '+180%', label: 'Profile Visits' },
    ],
  },
  {
    slug:      'peak-performance-gym',
    business:  'Peak Performance Gym',
    location:  'Sheffield',
    industry:  'Fitness',
    service:   'Paid Advertising',
    color:     'from-emerald-900/70 to-[#1a1a1a]',
    initial:   'P',
    challenge: 'New gym opening into a competitive market, needing rapid membership growth from day one.',
    approach:  'We ran pre-launch and launch-phase Facebook and Instagram ads targeting local fitness audiences with membership offers and a free trial campaign.',
    metrics: [
      { value: '120',  label: 'Members in 8 Weeks' },
      { value: '£18',  label: 'Cost per Acquisition' },
      { value: '4.8★', label: 'Facebook Rating' },
    ],
  },
  {
    slug:      'luxe-hair-beauty',
    business:  'Luxe Hair & Beauty',
    location:  'Rotherham',
    industry:  'Beauty',
    service:   'Social Media Management',
    color:     'from-fuchsia-900/70 to-[#1a1a1a]',
    initial:   'L',
    challenge: 'Inconsistent posting, low local brand awareness, and struggling to fill the appointment book.',
    approach:  'We took over their Instagram and Facebook with daily content, before-and-after transformations, seasonal offers, and active community management.',
    metrics: [
      { value: '+220%', label: 'Follower Growth' },
      { value: '3 Wks', label: 'Advance Bookings' },
      { value: '+95%',  label: 'Story Reach' },
    ],
  },
  {
    slug:      'clarkes-auto-centre',
    business:  "Clarke's Auto Centre",
    location:  'Doncaster',
    industry:  'Automotive',
    service:   'Local SEO',
    color:     'from-slate-700/70 to-[#1a1a1a]',
    initial:   'C',
    challenge: 'Buried on page 3 of Google, losing customers to national chains that appeared ahead of them in local search.',
    approach:  'We fully optimised their Google Business Profile, built location-specific content, and executed a local link-building campaign.',
    metrics: [
      { value: 'Pg 1',  label: 'Google Ranking' },
      { value: '+70%',  label: 'Call Enquiries' },
      { value: '12',    label: 'Keywords on Page 1' },
    ],
  },
  {
    slug:      'the-old-forge-kitchen',
    business:  'The Old Forge Kitchen',
    location:  'Barnsley',
    industry:  'Hospitality',
    service:   'Content Creation',
    color:     'from-amber-900/70 to-[#1a1a1a]',
    initial:   'O',
    challenge: 'The quality of the food far exceeded what their social media showed — they were losing bookings to better-looking competitors.',
    approach:  'We delivered a complete content overhaul with professional photography, short-form video, and a consistent posting strategy that matched the premium dining experience.',
    metrics: [
      { value: '4×',   label: 'Social Engagement' },
      { value: '2',    label: 'Local Press Features' },
      { value: '+55%', label: 'Direct Bookings' },
    ],
  },
  {
    slug:      'south-yorkshire-plumbing',
    business:  'South Yorkshire Plumbing',
    location:  'Wath-upon-Dearne',
    industry:  'Trades',
    service:   'Local SEO + Paid Ads',
    color:     'from-cyan-900/70 to-[#1a1a1a]',
    initial:   'S',
    challenge: 'Competing against large national comparison sites and losing emergency call-out work to better-ranked competitors.',
    approach:  'We combined a full Local SEO overhaul with targeted Google Ads for emergency plumbing keywords across the South Yorkshire area.',
    metrics: [
      { value: '2×',   label: 'Enquiry Volume' },
      { value: 'Top 3', label: 'Google Local Pack' },
      { value: '+88%', label: 'Organic Traffic' },
    ],
  },
  {
    slug:      'meadows-dental-practice',
    business:  'Meadows Dental Practice',
    location:  'Rotherham',
    industry:  'Healthcare',
    service:   'Social Media Strategy',
    color:     'from-teal-900/70 to-[#1a1a1a]',
    initial:   'M',
    challenge: 'Struggling to attract new NHS and private patients in a competitive local market with no meaningful online presence.',
    approach:  'We built a trust-first social media strategy with educational content, patient testimonials, team introductions, and targeted local ads promoting specific treatments.',
    metrics: [
      { value: '150+', label: 'New Patient Enquiries' },
      { value: '6 Mo', label: 'Time to Results' },
      { value: '4.9★', label: 'Google Reviews' },
    ],
  },
  {
    slug:      'bramley-co-solicitors',
    business:  'Bramley & Co. Solicitors',
    location:  'Sheffield',
    industry:  'Legal',
    service:   'Paid Advertising',
    color:     'from-indigo-900/70 to-[#1a1a1a]',
    initial:   'B',
    challenge: 'Invisible online outside of their existing client base, with no digital strategy for attracting new enquiries for family law and conveyancing.',
    approach:  'We ran targeted Google and Facebook campaigns focused on high-intent local searches, backed by professional creative that conveyed trust and expertise.',
    metrics: [
      { value: '65+',  label: 'Enquiries per Month' },
      { value: '£22',  label: 'Cost per Enquiry' },
      { value: '+210%', label: 'Website Traffic' },
    ],
  },
  {
    slug:      'forge-flame-bbq',
    business:  'Forge & Flame BBQ',
    location:  'Barnsley',
    industry:  'Food & Beverage',
    service:   'Content Creation',
    color:     'from-red-900/70 to-[#1a1a1a]',
    initial:   'F',
    challenge: 'A new street food and catering business needing to build a following and attract event bookings from a standing start.',
    approach:  'We produced cinematic food video content for Instagram Reels and TikTok, combined with a targeted local awareness campaign to build brand recognition fast.',
    metrics: [
      { value: '12K',  label: 'Followers in 4 Months' },
      { value: '28',   label: 'Event Bookings Secured' },
      { value: '2.1M', label: 'Video Views' },
    ],
  },
  {
    slug:      'horizon-property-group',
    business:  'Horizon Property Group',
    location:  'Rotherham',
    industry:  'Property',
    service:   'Social Media Management',
    color:     'from-violet-900/70 to-[#1a1a1a]',
    initial:   'H',
    challenge: 'Needed to establish credibility and generate landlord and vendor leads in a crowded local property market.',
    approach:  'We built a content-led LinkedIn and Facebook strategy showcasing sold properties, market insights, and client testimonials to position them as the local experts.',
    metrics: [
      { value: '+175%', label: 'Lead Enquiries' },
      { value: '4×',    label: 'LinkedIn Reach' },
      { value: '18',    label: 'New Vendor Listings' },
    ],
  },
  {
    slug:      'elevate-physiotherapy',
    business:  'Elevate Physiotherapy',
    location:  'Wath-upon-Dearne',
    industry:  'Healthcare',
    service:   'Local SEO + Paid Ads',
    color:     'from-sky-900/70 to-[#1a1a1a]',
    initial:   'E',
    challenge: 'Sitting on page 2 of Google with an appointment book that was only 60% full, losing patients to a better-ranked competitor nearby.',
    approach:  'We combined a Local SEO overhaul with a Google Ads campaign targeting injury-specific searches across the South Yorkshire area.',
    metrics: [
      { value: 'Pg 1',  label: 'Google Ranking' },
      { value: '95%',   label: 'Appointment Capacity' },
      { value: '+130%', label: 'Organic Sessions' },
    ],
  },
  {
    slug:      'thorntons-fine-jewellery',
    business:  "Thornton's Fine Jewellery",
    location:  'Doncaster',
    industry:  'Retail',
    service:   'Social Media Management',
    color:     'from-yellow-900/70 to-[#1a1a1a]',
    initial:   'T',
    challenge: 'A heritage jeweller struggling to attract younger customers and compete with online retailers on social media.',
    approach:  'We repositioned their brand story through Instagram and Facebook — showcasing craftsmanship, bespoke commissions, and customer moments to drive footfall and enquiries.',
    metrics: [
      { value: '+290%', label: 'Instagram Engagement' },
      { value: '40%',   label: 'Increase in Footfall' },
      { value: '£0',    label: 'Ad Spend (Organic Only)' },
    ],
  },
]

export default function CaseStudiesContent() {
  const headingRef = useScrollReveal<HTMLDivElement>(0.2)
  const gridRef    = useStaggerReveal<HTMLDivElement>(0.03)
  const ctaRef     = useScrollReveal<HTMLDivElement>(0.2)
  const { openAuditModal } = useAuditModal()

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#222222] pt-40 pb-24 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 bg-honeycomb pointer-events-none" />
        <div aria-hidden="true" className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#FFC512]/5 blur-3xl pointer-events-none" />
        <div aria-hidden="true" className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full bg-[#FFC512]/4 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#FFC512] text-sm font-medium uppercase tracking-widest mb-4">
            Case Studies
          </span>
          <h1
            className="font-display font-extrabold text-white mb-6 max-w-4xl mx-auto"
            style={{ fontSize: 'clamp(32px, 5.5vw, 68px)', lineHeight: 0.95, letterSpacing: '-0.02em' }}
          >
            Real Businesses.<br />
            <span className="text-[#FFC512]">Real Results.</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-10">
            Every number below represents a local South Yorkshire business that chose to
            invest in their online presence — and got measurable results in return.
          </p>
          <button
            onClick={() => { trackButtonClick('Get Your Free Audit', 'case_studies_hero'); openAuditModal('service') }}
            className="inline-flex items-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#FFC512]/20"
          >
            Get Your Free Audit
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* ── Case Studies Grid ────────────────────────────────────────────────── */}
      <section className="bg-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div ref={headingRef} className="reveal text-center mb-16">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              Our Work
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
              A Snapshot of What's Possible.
            </h2>
          </div>

          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <Link
                key={c.business}
                href={'/case-studies/' + c.slug}
                className="reveal-scale flex flex-col bg-[#222222] border border-white/5 hover:border-[#FFC512]/30 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 group"
                data-delay={i % 3}
              >
                {/* Visual header */}
                <div className={`relative h-36 bg-gradient-to-br ${c.color} flex items-end p-5 overflow-hidden`}>
                  {/* Large faded initial */}
                  <div
                    aria-hidden="true"
                    className="absolute right-4 top-1/2 -translate-y-1/2 font-display font-extrabold text-white/8 select-none leading-none"
                    style={{ fontSize: '7rem' }}
                  >
                    {c.initial}
                  </div>
                  {/* Tags */}
                  <div className="relative z-10 flex items-center gap-2 flex-wrap">
                    <span className="bg-[#FFC512] text-[#222222] text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                      {c.industry}
                    </span>
                    <span className="bg-white/10 text-white/80 text-xs font-medium px-3 py-1 rounded-full tracking-wide backdrop-blur-sm">
                      {c.service}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-6 gap-4">
                  {/* Business + location */}
                  <div>
                    <h3 className="font-display font-bold text-white text-xl tracking-tight group-hover:text-[#FFC512] transition-colors duration-200">
                      {c.business}
                    </h3>
                    <p className="text-white/40 text-xs font-normal mt-0.5 tracking-wide">
                      {c.location}
                    </p>
                  </div>

                  {/* Challenge */}
                  <p className="text-white/60 text-sm leading-relaxed font-normal">
                    {c.challenge}
                  </p>

                  {/* Divider */}
                  <div className="border-t border-white/8" />

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="bg-[#2d2d2d] rounded-lg p-3 text-center">
                        <div className="font-display font-extrabold text-[#FFC512] text-lg leading-tight tracking-tight">
                          {m.value}
                        </div>
                        <div className="text-white/40 text-xs font-normal mt-0.5 leading-tight">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Approach preview */}
                  <p className="text-white/45 text-xs leading-relaxed font-normal line-clamp-2">
                    {c.approach}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
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
            Want Results Like These?
          </h2>
          <p className="text-[#222222]/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Book your free Digital Health Check and find out exactly what we'd do for
            your business in the first 90 days.
          </p>
          <button
            onClick={() => { trackButtonClick('Get Your Free Health Check', 'case_studies_cta'); openAuditModal('service') }}
            className="inline-flex items-center gap-2 bg-[#222222] hover:bg-[#333] text-white font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg tracking-wide"
          >
            Get Your Free Health Check
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </>
  )
}

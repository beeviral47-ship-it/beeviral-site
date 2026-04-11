'use client'

import Link from 'next/link'
import { ArrowRight, TrendingUp, Video, Search, BarChart2, ClipboardList, Megaphone, CheckCircle2 } from 'lucide-react'
import { InstagramIcon } from '@/components/ui/SocialIcons'
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal'
import { trackButtonClick } from '@/lib/analytics'
import { useAuditModal } from '@/components/providers/AuditModalProvider'

const services = [
  {
    icon: <InstagramIcon size={28} />,
    title: 'Social Media Management',
    desc: 'We manage your social media accounts with consistent posting, engagement, and performance tracking to keep your business visible and growing.',
  },
  {
    icon: <TrendingUp size={28} />,
    title: 'Paid Advertising',
    desc: 'We run targeted Facebook, Instagram, and Google Ads campaigns designed to generate leads and drive measurable return on investment.',
  },
  {
    icon: <Video size={28} />,
    title: 'Content Creation',
    desc: 'We create professional photos, videos, and branded content that captures attention and builds trust with your audience.',
  },
  {
    icon: <Search size={28} />,
    title: 'Local SEO',
    desc: 'We optimise your business to rank higher in local search results so customers can find you when they need your services.',
  },
  {
    icon: <ClipboardList size={28} />,
    title: 'Social Media Strategy',
    desc: 'We build a clear plan tailored to your business goals, target audience, and local market.',
  },
  {
    icon: <BarChart2 size={28} />,
    title: 'Social Media Audit',
    desc: 'We review your current marketing performance and provide practical recommendations to improve results.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Audit',
    desc: 'We review your current social media presence, competitors, and local market to identify quick wins and long-term opportunities.',
  },
  {
    number: '02',
    title: 'Strategy',
    desc: 'We build a tailored plan aligned to your business goals — what platforms, what content, what budget, and what success looks like.',
  },
  {
    number: '03',
    title: 'Execution',
    desc: 'We get to work: managing accounts, creating content, running campaigns, and engaging your audience every day.',
  },
  {
    number: '04',
    title: 'Growth',
    desc: 'We track results, share monthly reports, and continuously refine the approach to maximise your return on investment.',
  },
]

const industries = [
  'Restaurants',
  'Trades',
  'Gyms',
  'Salons',
  'Clinics',
  'Retail',
]

export default function ServicesContent() {
  const servicesRef  = useStaggerReveal<HTMLDivElement>(0.05)
  const stepsRef     = useStaggerReveal<HTMLDivElement>(0.1)
  const industriesRef = useScrollReveal<HTMLDivElement>(0.15)
  const ctaRef       = useScrollReveal<HTMLDivElement>(0.2)
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
            Our Services
          </span>
          <h1
            className="font-display font-extrabold text-white mb-6 max-w-4xl mx-auto"
            style={{ fontSize: 'clamp(32px, 5.5vw, 68px)', lineHeight: 0.95, letterSpacing: '-0.02em' }}
          >
            Social Media Marketing Services That Generate Real Leads
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-10">
            We help local businesses in South Yorkshire attract more customers, increase bookings,
            and grow revenue through proven social media and digital marketing strategies.
          </p>
          <button
            onClick={() => { trackButtonClick('Get Your Free Audit', 'services_hero'); openAuditModal('service') }}
            className="inline-flex items-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#FFC512]/20"
          >
            Get Your Free Audit
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* ── Our Services ────────────────────────────────────────────────────── */}
      <section className="bg-[#222222] py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
              Everything You Need to<br />
              <span className="text-[#FFC512]">Grow Your Business</span>
            </h2>
          </div>

          <div ref={servicesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="reveal-scale group bg-[#2d2d2d] hover:bg-[#333] border border-white/5 hover:border-[#FFC512]/30 rounded-xl p-7 transition-colors duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FFC512]/5"
                data-delay={i}
                style={{ transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background-color 0.25s ease' }}
              >
                <div className="w-14 h-14 rounded-lg bg-[#FFC512]/10 group-hover:bg-[#FFC512] text-[#FFC512] group-hover:text-[#222222] flex items-center justify-center mb-5 transition-all duration-300">
                  {s.icon}
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-3 group-hover:text-[#FFC512] transition-colors tracking-tight">
                  {s.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed font-normal">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Work ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              Our Process
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#222222] mt-3 tracking-tight leading-tight">
              How We Work
            </h2>
          </div>

          <div ref={stepsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="reveal-scale relative"
                data-delay={i}
              >
                {/* Connector line — desktop only, not on last item */}
                {i < steps.length - 1 && (
                  <div aria-hidden="true" className="hidden lg:block absolute top-7 left-full w-full h-px bg-[#FFC512]/20 z-0" style={{ width: 'calc(100% - 56px)', left: '56px' }} />
                )}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-[#FFC512] text-[#222222] font-display font-extrabold text-lg flex items-center justify-center mb-5 tracking-tight">
                    {step.number}
                  </div>
                  <h3 className="font-display font-semibold text-[#222222] text-xl mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-[#555] text-sm leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Help ─────────────────────────────────────────────────────── */}
      <section className="bg-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={industriesRef} className="reveal">
            <div className="text-center mb-12">
              <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
                Who We Help
              </span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 mb-4 tracking-tight leading-tight">
                Industries We Work With
              </h2>
              <p className="text-white/55 text-lg font-normal">
                We work with local businesses across South Yorkshire in a wide range of industries.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="bg-[#2d2d2d] border border-white/5 hover:border-[#FFC512]/30 rounded-xl p-5 text-center transition-colors duration-200 group"
                >
                  <CheckCircle2 size={20} className="text-[#FFC512] mx-auto mb-3" />
                  <p className="text-white font-medium text-sm group-hover:text-[#FFC512] transition-colors tracking-wide">
                    {industry}
                  </p>
                </div>
              ))}
            </div>
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
            Ready to grow your business?
          </h2>
          <p className="text-[#222222]/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Book your free Digital Health Check — no commitment, no jargon, just
            practical advice on how to generate more leads.
          </p>
          <button
            onClick={() => { trackButtonClick('Get Your Free Health Check', 'services_cta'); openAuditModal('service') }}
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

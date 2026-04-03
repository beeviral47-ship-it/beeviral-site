'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, ChevronDown } from 'lucide-react'
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal'
import { trackButtonClick } from '@/lib/analytics'
import { useAuditModal } from '@/components/providers/AuditModalProvider'

const included = [
  'Online booking — customers book 24/7 from any device',
  'Automated confirmation emails',
  '24-hour reminder emails to reduce no-shows',
  'Cancellation management with policy enforcement',
  'Admin dashboard — see all bookings in one place',
  'SMS reminders via Twilio (optional add-on)',
]

const steps = [
  {
    number: '01',
    title: 'Discovery',
    desc: 'We learn about your booking flow, your services, your pricing, and your clients. We map out a booking experience that matches how your business actually works.',
  },
  {
    number: '02',
    title: 'Design & Build',
    desc: 'We integrate a custom booking system into your existing or new website — fully branded to match your business and optimised for mobile devices.',
  },
  {
    number: '03',
    title: 'Automation Setup',
    desc: 'We configure confirmation emails, reminder sequences, cancellation policies, and admin notifications. Everything runs automatically from day one — no manual work needed.',
  },
  {
    number: '04',
    title: 'Testing & Launch',
    desc: 'We test every scenario before going live — bookings, cancellations, reminders, and admin views. We hand over a fully tested system and train you on using it.',
  },
]

const audiences = [
  {
    title: 'Hair & Beauty Salons',
    location: 'Across South Yorkshire',
    desc: 'Replace WhatsApp bookings and phone calls with a professional system that takes appointments 24/7, sends reminders automatically, and reduces no-shows.',
  },
  {
    title: 'Fitness & Wellness Studios',
    location: 'Rotherham, Barnsley & beyond',
    desc: 'Manage class bookings, 1-to-1 sessions, and memberships in one place — with automated reminders and an admin dashboard you can check from anywhere.',
  },
  {
    title: 'Clinics & Healthcare',
    location: 'Wath & South Yorkshire',
    desc: 'Handle appointments professionally with confirmation emails, 24-hour reminders, cancellation management, and optional SMS notifications for every client.',
  },
]

const faqs = [
  {
    q: 'What booking platform do you build with?',
    a: 'We build custom booking functionality directly into your website rather than relying on a third-party app. This means it\'s fully branded, fully integrated, and you don\'t pay per-booking fees to a platform.',
  },
  {
    q: 'Can this integrate with my existing website?',
    a: 'In most cases, yes. If your existing site is on a modern platform we can integrate directly. If it\'s on an older system, we may recommend a site rebuild as part of the project — we\'ll advise honestly during the discovery phase.',
  },
  {
    q: 'Does it send automatic reminders to clients?',
    a: 'Yes. We configure automated confirmation emails immediately after booking and 24-hour reminder emails before the appointment. SMS reminders via Twilio are also available as an optional add-on.',
  },
  {
    q: 'Can I manage bookings from my phone?',
    a: 'Yes. The admin dashboard is fully responsive and works on any device. You\'ll be able to view upcoming bookings, manage cancellations, and adjust availability from wherever you are.',
  },
  {
    q: 'What happens if a client cancels?',
    a: 'We configure your cancellation policy during setup. Clients can cancel within your allowed window and the slot opens back up automatically. You\'ll receive a notification any time a cancellation is made.',
  },
]

const relatedServices = [
  {
    title: 'Website Design & Build',
    href: '/services/website-design',
    desc: 'A custom, mobile-first website to go alongside your new booking system.',
  },
  {
    title: 'Social Media Management',
    href: '/services/social-media-management',
    desc: 'Drive more bookings by staying front-of-mind with consistent social media content.',
  },
  {
    title: 'SEO & Content Marketing',
    href: '/services/local-seo',
    desc: 'Get found on Google by local customers looking for your services.',
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

export default function BookingSystemsContent() {
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
            Booking Systems & Automation
          </span>
          <h1
            className="font-display font-extrabold text-white mb-6 max-w-4xl mx-auto"
            style={{ fontSize: 'clamp(32px, 5.5vw, 72px)', lineHeight: 0.92, letterSpacing: '-0.02em' }}
          >
            Stop Managing Bookings{' '}
            <span className="text-[#FFC512]">Manually</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            We build custom booking systems that handle appointments, send automatic reminders, confirm
            attendance, and manage cancellations — so you can focus on your clients, not your calendar.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['24/7 online booking', 'Auto reminders', 'Cancellation management', 'From £1,500 setup'].map((t) => (
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
            onClick={() => { trackButtonClick('Get a Free Digital Health Check', 'booking_hero'); openAuditModal('service') }}
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
              Bookings handled. No-shows reduced. Time saved.
            </h2>
            <p className="text-white/60 text-lg font-normal leading-relaxed mb-4">
              Most appointment-based businesses in South Yorkshire are still managing bookings through
              WhatsApp messages, phone calls, and paper diaries. It's time-consuming, error-prone, and
              gives customers a frustrating experience — especially when they want to book outside your
              working hours.
            </p>
            <p className="text-white/60 text-lg font-normal leading-relaxed mb-4">
              We build custom booking systems directly into your website. Customers can book 24/7 from
              any device. The moment they book, they receive a confirmation email. Twenty-four hours
              before their appointment, they get an automatic reminder. If they need to cancel, the
              system handles it according to your policy.
            </p>
            <p className="text-white/60 text-lg font-normal leading-relaxed">
              The result: fewer no-shows, less admin, and a more professional experience for every
              client — without you lifting a finger.
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
              From brief to live booking system in 4 steps
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
              Ready to automate your bookings?
            </h2>
            <p className="text-white/60 text-lg mb-8 font-normal">
              Book a free Digital Health Check and we'll walk you through exactly how we'd build your system.
            </p>
            <button
              onClick={() => { trackButtonClick('Get a Free Digital Health Check', 'booking_mid_cta'); openAuditModal('service') }}
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
              Built for appointment-based businesses across South Yorkshire
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
            Perfect for salons, beauty studios, nail technicians, fitness instructors, clinics, and any
            appointment-based business in South Yorkshire.
          </p>
          <p className="text-center mt-4 text-[#FFC512]/60 text-sm font-normal">
            From £1,500 one-time setup + £250/month
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
              { stat: '↓60%', label: 'Avg no-show reduction' },
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
            Book your free Digital Health Check and we'll show you exactly how a custom booking system
            would work for your business — with a clear plan and a fixed price.
          </p>
          <button
            onClick={() => { trackButtonClick('Get a Free Digital Health Check', 'booking_cta'); openAuditModal('service') }}
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

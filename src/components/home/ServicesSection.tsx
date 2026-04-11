'use client'

import Link from 'next/link'
import { TrendingUp, Search, BarChart2, MessageCircle, Monitor, Calendar } from 'lucide-react'
import { motion } from 'motion/react'
import { fadeUp, scaleUp, staggerContainer, cardHover } from '@/lib/motion-variants'

// ── Service data ──────────────────────────────────────────────────────────────

const group1 = [
  {
    title: 'Social Media Management',
    description:
      'Full-service management of your Instagram, Facebook and TikTok — content, captions, scheduling, and community management.',
    href: '/services/social-media-management',
    icon: <MessageCircle size={28} />,
  },
  {
    title: 'Paid Advertising',
    description:
      'Targeted Meta and TikTok ad campaigns that put your brand in front of the right local audience at the right time.',
    href: '/services/paid-advertising',
    icon: <TrendingUp size={28} />,
  },
  {
    title: 'SEO & Content Marketing',
    description:
      'Monthly blog content and local SEO that gets your business found on Google by customers in South Yorkshire.',
    href: '/services/local-seo',
    icon: <Search size={28} />,
  },
]

const group2 = [
  {
    title: 'Website Design & Build',
    description:
      'Custom, mobile-first websites built on Next.js — fast, professional, and designed to convert visitors into customers.',
    href: '/services/website-design',
    icon: <Monitor size={28} />,
  },
  {
    title: 'Booking Systems & Automation',
    description:
      'Online booking, automated reminders, confirmation emails and cancellation management — all built into your website.',
    href: '/services/booking-systems',
    icon: <Calendar size={28} />,
  },
  {
    title: 'Analytics & Reporting',
    description:
      'Clear monthly reports showing exactly what\'s working — growth, reach, engagement, leads, and return on investment.',
    href: '/services/analytics',
    icon: <BarChart2 size={28} />,
  },
]

// ── Shared card ───────────────────────────────────────────────────────────────

function ServiceCard({ service }: { service: typeof group1[number] }) {
  return (
    <motion.div
      variants={scaleUp}
      whileHover={cardHover}
      style={{ willChange: 'transform' }}
    >
      <Link
        href={service.href}
        className="group bg-[#2d2d2d] hover:bg-[#333] border border-white/5 hover:border-[#FFC512]/30 rounded-xl p-7 transition-colors duration-300 block h-full"
      >
        <div className="w-14 h-14 rounded-lg bg-[#FFC512]/10 group-hover:bg-[#FFC512] text-[#FFC512] group-hover:text-[#222222] flex items-center justify-center mb-5 transition-all duration-300">
          {service.icon}
        </div>
        <h3 className="font-display font-semibold text-white text-lg mb-3 group-hover:text-[#FFC512] transition-colors tracking-tight">
          {service.title}
        </h3>
        <p className="text-white/55 text-sm leading-relaxed font-normal">
          {service.description}
        </p>
      </Link>
    </motion.div>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function ServicesSection() {
  return (
    <section className="bg-[#222222] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="text-center mb-16"
        >
          <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 mb-5 tracking-tight leading-tight">
            Everything You Need to<br />
            <span className="text-[#FFC512]">Dominate Your Market</span>
          </h2>
          <p className="text-white/55 text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            From daily social posts to full websites with booking systems — we handle
            your entire digital presence so you can focus on running your business.
          </p>
        </motion.div>

        {/* Group 1 */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[#FFC512] text-xs font-semibold uppercase tracking-widest flex-shrink-0">
              Social Media &amp; Marketing
            </span>
            <div className="flex-1 h-px bg-white/8" />
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {group1.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </motion.div>
        </div>

        {/* Group 2 */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[#FFC512] text-xs font-semibold uppercase tracking-widest flex-shrink-0">
              Web Design &amp; Automation
            </span>
            <div className="flex-1 h-px bg-white/8" />
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {group2.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}

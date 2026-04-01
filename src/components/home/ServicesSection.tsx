'use client'

import { TrendingUp, Video, Search, BarChart2, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { InstagramIcon } from '@/components/ui/SocialIcons'
import { services } from '@/lib/data'
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal'

const iconMap: Record<string, React.ReactNode> = {
  Instagram:     <InstagramIcon size={28} />,
  TrendingUp:    <TrendingUp size={28} />,
  Video:         <Video size={28} />,
  Search:        <Search size={28} />,
  BarChart2:     <BarChart2 size={28} />,
  MessageCircle: <MessageCircle size={28} />,
}

export default function ServicesSection() {
  const headingRef = useScrollReveal<HTMLDivElement>(0.2)
  const gridRef    = useStaggerReveal<HTMLDivElement>(0.05)

  return (
    <section className="bg-[#222222] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div ref={headingRef} className="reveal text-center mb-16">
          <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 mb-5 tracking-tight leading-tight">
            Everything You Need to<br />
            <span className="text-[#FFC512]">Dominate Your Market</span>
          </h2>
          <p className="text-white/55 text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            From daily posting to full paid ad campaigns — we handle your entire
            social media presence so you can focus on running your business.
          </p>
        </div>

        {/* Grid — staggerReveal observes this, data-delay staggers children */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <Link
              key={service.title}
              href={service.href}
              className="reveal-scale group bg-[#2d2d2d] hover:bg-[#333] border border-white/5 hover:border-[#FFC512]/30 rounded-xl p-7 transition-colors duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FFC512]/5 block"
              data-delay={i}
              style={{ transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background-color 0.25s ease' }}
            >
              <div className="w-14 h-14 rounded-lg bg-[#FFC512]/10 group-hover:bg-[#FFC512] text-[#FFC512] group-hover:text-[#222222] flex items-center justify-center mb-5 transition-all duration-300">
                {iconMap[service.icon]}
              </div>
              <h3 className="font-display font-semibold text-white text-lg mb-3 group-hover:text-[#FFC512] transition-colors tracking-tight">
                {service.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed font-normal">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { slideLeft, slideRight, fadeUp, staggerContainer } from '@/lib/motion-variants'

const reasons = [
  {
    title: "We're local — we know your market",
    desc: "We're based in South Yorkshire. We understand local businesses, local audiences, and what resonates in your area.",
  },
  {
    title: 'Strategy first, always',
    desc: "No random posting. Every piece of content we create is built on a clear strategy aligned with your business goals.",
  },
  {
    title: 'Real results, not vanity metrics',
    desc: "We focus on metrics that actually matter: leads, footfall, bookings, and revenue — not just likes.",
  },
  {
    title: 'Transparent and proactive',
    desc: "Monthly reports, regular check-ins, and a team that tells you what's working and what isn't.",
  },
]

export default function WhySection() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — visual, slides in from left */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#222222] aspect-square max-w-lg mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-honeycomb opacity-30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-10">
                <Image
                  src="/images/logo-transparent.png"
                  alt="Bee Viral"
                  width={280}
                  height={140}
                  sizes="(max-width: 1024px) 256px, 280px"
                  className="w-64 object-contain drop-shadow-2xl"
                />
                <p className="text-white/40 text-sm text-center font-normal tracking-widest uppercase">
                  South Yorkshire's Social Media Agency
                </p>
              </div>
              <div
                className="absolute top-0 right-0 w-24 h-24 bg-[#FFC512]"
                style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
              />
              {/* Since 2014 badge — desktop only (inside the card) */}
              <div className="hidden lg:block absolute bottom-6 left-6 bg-[#FFC512] text-[#222222] font-semibold text-sm px-4 py-2 rounded-md tracking-wide">
                Since 2014
              </div>
            </div>

            {/* Mobile-only: both badges side by side, visually anchored below the card */}
            <div className="flex items-stretch justify-center gap-3 mt-4 lg:hidden">
              <div className="flex items-center bg-[#FFC512] text-[#222222] font-semibold text-sm px-4 py-2.5 rounded-md tracking-wide shadow-lg">
                Since 2014
              </div>
              <div className="bg-[#FFC512] text-[#222222] rounded-xl px-5 py-3 shadow-lg">
                <div className="font-display text-2xl font-extrabold tracking-tight leading-none mb-0.5">10+</div>
                <div className="text-[10px] font-medium uppercase tracking-widest opacity-70">Years in Business</div>
              </div>
            </div>

            {/* Desktop-only: 10+ stat card, absolute-positioned overlapping bottom-right of card */}
            <div className="hidden lg:block absolute -bottom-4 right-0 bg-[#FFC512] text-[#222222] rounded-xl px-6 py-4 shadow-xl">
              <div className="font-display text-3xl font-extrabold tracking-tight">10+</div>
              <div className="text-xs font-medium uppercase tracking-widest opacity-70">Years in Business</div>
            </div>
          </motion.div>

          {/* Right — text + reasons list, slides in from right */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              Why Choose Us
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#222222] mt-3 mb-4 leading-tight tracking-tight">
              The Agency That<br />
              <span className="text-[#FFC512]">Actually Delivers</span>
            </h2>
            <p className="text-[#555] text-lg mb-10 leading-relaxed font-normal">
              We've been helping South Yorkshire businesses grow their social media
              presence since 2014. Here's why over 200 local businesses trust us.
            </p>

            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="space-y-6"
            >
              {reasons.map((r) => (
                <motion.li key={r.title} variants={fadeUp} className="flex gap-4">
                  <CheckCircle2 size={22} className="text-[#FFC512] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-semibold text-[#222222] mb-1 tracking-tight">
                      {r.title}
                    </h3>
                    <p className="text-[#555] text-sm leading-relaxed font-normal">{r.desc}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

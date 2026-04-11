'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion, useMotionValue, useSpring } from 'motion/react'
import { InstagramIcon, FacebookIcon } from '@/components/ui/SocialIcons'
import { fadeUp, scaleUp, staggerContainer } from '@/lib/motion-variants'

// ── Projects ──────────────────────────────────────────────────────────────────
const projects = [
  {
    client:   'The Blossom Café',
    slug:     'the-blossom-cafe',
    location: 'Wath',
    platform: 'Instagram',
    result:   '+1,340% reach increase',
    tag:      'Food & Beverage',
    color:    'from-pink-900/60 to-[#222222]',
    icon:     <InstagramIcon size={18} />,
  },
  {
    client:   'Hartley Roofing',
    slug:     'hartley-roofing',
    location: 'Rotherham',
    platform: 'Facebook',
    result:   '40+ leads per month',
    tag:      'Trades & Services',
    color:    'from-blue-900/60 to-[#222222]',
    icon:     <FacebookIcon size={18} />,
  },
  {
    client:   'Spice Garden',
    slug:     'spice-garden',
    location: 'Barnsley',
    platform: 'Instagram + TikTok',
    result:   '8,200 new followers',
    tag:      'Restaurant',
    color:    'from-orange-900/60 to-[#222222]',
    icon:     <InstagramIcon size={18} />,
  },
]

// ── TiltCard ──────────────────────────────────────────────────────────────────
// Wraps a card with a 3D perspective tilt that tracks mouse position.
// Max tilt is ±8deg — subtle depth cue, not a gimmick.
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  const rotX = useMotionValue(0)
  const rotY = useMotionValue(0)

  const springCfg    = { stiffness: 280, damping: 28, mass: 0.5 }
  const springRotX   = useSpring(rotX, springCfg)
  const springRotY   = useSpring(rotY, springCfg)

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const relX =  (e.clientX - rect.left  - rect.width  / 2) / (rect.width  / 2) // -1→1
    const relY =  (e.clientY - rect.top   - rect.height / 2) / (rect.height / 2) // -1→1
    rotY.set( relX * 8)   // positive = right edge comes toward viewer
    rotX.set(-relY * 8)   // negative = mouse-up tilts top toward viewer
  }

  const onMouseLeave = () => {
    rotX.set(0)
    rotY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX:           springRotX,
        rotateY:           springRotY,
        transformPerspective: 1000,
        willChange:        'transform',
      }}
    >
      {children}
    </motion.div>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function PortfolioPreview() {
  return (
    <section className="bg-[#1a1a1a] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
              Our Work
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
              Results That<br />
              <span className="text-[#FFC512]">Speak for Themselves</span>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-[#FFC512] font-medium hover:gap-3 transition-all duration-200 whitespace-nowrap tracking-wide"
          >
            View Full Portfolio <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {projects.map((p) => (
            // Outer div: entrance animation + vertical lift
            <motion.div
              key={p.client}
              variants={scaleUp}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
              style={{ willChange: 'transform' }}
            >
              {/* Inner TiltCard: 3D rotation tracking mouse within card */}
              <TiltCard>
                <Link
                  href={`/case-studies/${p.slug}`}
                  className="group relative rounded-xl overflow-hidden bg-[#2d2d2d] border border-white/5 hover:border-[#FFC512]/40 block transition-colors duration-300 h-full"
                >
                  {/* Gradient tile */}
                  <div className={`relative h-48 bg-gradient-to-b ${p.color} flex items-center justify-center overflow-hidden`}>
                    <div className="text-white/10 font-display text-6xl font-extrabold select-none tracking-tight">
                      {p.client.charAt(0)}
                    </div>
                    <div className="absolute top-4 left-4 bg-[#FFC512] text-[#222222] text-xs font-semibold px-3 py-1 rounded-full tracking-wide z-10">
                      {p.tag}
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#FFC512]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[#222222] font-semibold text-sm tracking-wide flex items-center gap-2">
                        View Case Study <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-white/40 text-xs mb-3 font-normal">
                      {p.icon}
                      <span>{p.platform}</span>
                      <span>·</span>
                      <span>{p.location}</span>
                    </div>
                    <h3 className="font-display font-semibold text-white text-xl mb-2 group-hover:text-[#FFC512] transition-colors duration-300 tracking-tight">
                      {p.client}
                    </h3>
                    <p className="text-[#FFC512] font-semibold text-sm tracking-wide">{p.result}</p>
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

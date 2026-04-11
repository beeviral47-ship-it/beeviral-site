'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { navLinks } from '@/lib/data'
import { useAuditModal } from '@/components/providers/AuditModalProvider'
import { trackButtonClick } from '@/lib/analytics'
import { EASE_OUT_EXPO, SPRING_SMOOTH } from '@/lib/motion-variants'
import MagneticButton from '@/components/ui/MagneticButton'

const navServiceGroups = [
  {
    label: 'Social & Marketing',
    links: [
      { label: 'Social Media Management', href: '/services/social-media-management' },
      { label: 'Paid Advertising',        href: '/services/paid-advertising' },
      { label: 'Content Creation',        href: '/services/content-creation' },
      { label: 'SEO & Content Marketing', href: '/services/local-seo' },
    ],
  },
  {
    label: 'Web & Automation',
    links: [
      { label: 'Website Design & Build',  href: '/services/website-design' },
      { label: 'Booking Systems',         href: '/services/booking-systems' },
      { label: 'Analytics & Reporting',   href: '/services/analytics' },
    ],
  },
]

export default function Navbar() {
  const [scrolled, setScrolled]             = useState(false)
  const [menuOpen, setMenuOpen]             = useState(false)
  const [servicesOpen, setServicesOpen]     = useState(false)
  const [mobileServOpen, setMobileServOpen] = useState(false)
  const pathname                            = usePathname()
  const { openAuditModal }                  = useAuditModal()
  const dropdownRef                         = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false); setMobileServOpen(false) }, [pathname])

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMenuOpen(false)
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close desktop dropdown on outside click
  useEffect(() => {
    if (!servicesOpen) return
    function handler(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [servicesOpen])

  // Close desktop dropdown on Escape
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === 'Escape') setServicesOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  const isHome           = pathname === '/'
  const isServicesActive = pathname.startsWith('/services')

  // Whether the navbar should show the solid/frosted state
  const isSolid = scrolled || !isHome || menuOpen

  return (
    <>
      {/* ── Header — CSS transition is cheaper than JS-driven Motion animate on scroll ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 border-b ${
          isSolid
            ? 'bg-[rgba(34,34,34,0.92)] backdrop-blur-md border-white/[0.07] shadow-[0_4px_24px_rgba(0,0,0,0.3)]'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">

            {/* Logo */}
            <Link href="/" onClick={handleLinkClick} className="flex-shrink-0 relative z-10">
              <Image
                src="/images/logo-transparent.png"
                alt="Bee Viral"
                width={130}
                height={65}
                sizes="(max-width: 1024px) 104px, 130px"
                className="h-10 lg:h-[52px] w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => {
                // Services → hover dropdown
                if (link.label === 'Services') {
                  return (
                    <div
                      key={link.href}
                      ref={dropdownRef}
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        aria-haspopup="true"
                        aria-expanded={servicesOpen}
                        className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-md group inline-flex items-center gap-1 ${
                          isServicesActive ? 'text-[#FFC512]' : 'text-white/80 hover:text-white'
                        }`}
                      >
                        Services
                        <motion.span
                          animate={{ rotate: servicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
                          style={{ display: 'inline-flex' }}
                        >
                          <ChevronDown size={13} />
                        </motion.span>
                        <span
                          className={`absolute bottom-0 left-4 right-4 h-0.5 bg-[#FFC512] rounded-full transition-transform duration-200 origin-left ${
                            isServicesActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                          }`}
                        />
                      </button>

                      {/* Dropdown panel — Motion-animated */}
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            role="menu"
                            aria-label="Services submenu"
                            initial={{ opacity: 0, y: -6, scaleY: 0.96 }}
                            animate={{ opacity: 1, y: 0,  scaleY: 1    }}
                            exit={{    opacity: 0, y: -6, scaleY: 0.96 }}
                            transition={{ duration: 0.18, ease: EASE_OUT_EXPO }}
                            style={{ originY: 0, transformOrigin: 'top center' }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 bg-[#2a2a2a] border border-white/10 rounded-xl shadow-2xl shadow-black/60 overflow-hidden"
                          >
                            <Link
                              href="/services"
                              role="menuitem"
                              onClick={handleLinkClick}
                              className="flex items-center px-4 py-3 text-[10px] font-semibold text-[#FFC512] uppercase tracking-widest border-b border-white/8 hover:bg-white/5 transition-colors"
                            >
                              All Services →
                            </Link>
                            {navServiceGroups.map((group, gi) => (
                              <div key={group.label}>
                                {gi > 0 && <div className="border-t border-white/8 mx-4 mt-1" />}
                                <div className="px-4 pt-3 pb-1">
                                  <span className="text-white/30 text-[10px] font-semibold uppercase tracking-widest">
                                    {group.label}
                                  </span>
                                </div>
                                {group.links.map((s) => (
                                  <Link
                                    key={s.href}
                                    href={s.href}
                                    role="menuitem"
                                    onClick={handleLinkClick}
                                    className={`block px-4 py-2 text-sm font-normal transition-colors duration-150 ${
                                      pathname === s.href
                                        ? 'text-[#FFC512] bg-white/5'
                                        : 'text-white/70 hover:text-white hover:bg-white/5'
                                    }`}
                                  >
                                    {s.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                            <div className="pb-2" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-md group ${
                      active ? 'text-[#FFC512]' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-4 right-4 h-0.5 bg-[#FFC512] rounded-full transition-transform duration-200 origin-left ${
                        active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                )
              })}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-4">
              <MagneticButton strength={6} className="hidden lg:inline-flex">
                <button
                  onClick={() => { trackButtonClick('Free Health Check', 'navbar'); openAuditModal('service') }}
                  className="inline-flex items-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-sm tracking-wide px-5 py-2.5 rounded-md transition-colors duration-200 active:scale-95"
                >
                  Free Health Check
                </button>
              </MagneticButton>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {menuOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0,   opacity: 1 }}
                      exit={{    rotate:  90, opacity: 0 }}
                      transition={{ duration: 0.15, ease: EASE_OUT_EXPO }}
                      style={{ display: 'block' }}
                    >
                      <X size={24} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90,  opacity: 0 }}
                      animate={{ rotate: 0,   opacity: 1 }}
                      exit={{    rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15, ease: EASE_OUT_EXPO }}
                      style={{ display: 'block' }}
                    >
                      <Menu size={24} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile menu — spring slide from right ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Navigation menu"
            aria-modal="true"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{    x: '100%' }}
            transition={SPRING_SMOOTH}
            className="fixed inset-0 z-40 bg-[#222222] lg:hidden flex flex-col"
          >
            <div className="h-20 lg:h-24" />

            <nav aria-label="Mobile navigation" className="flex flex-col px-6 py-8 gap-0 flex-1 overflow-y-auto">
              {navLinks.map((link, i) => {
                // Services → expandable submenu
                if (link.label === 'Services') {
                  return (
                    <div key={link.href}>
                      <motion.button
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0  }}
                        transition={{ duration: 0.3, ease: EASE_OUT_EXPO, delay: i * 0.04 }}
                        onClick={() => setMobileServOpen(!mobileServOpen)}
                        aria-expanded={mobileServOpen}
                        className={`w-full flex items-center justify-between font-display font-bold text-2xl py-4 border-b border-white/10 transition-colors duration-200 tracking-tight ${
                          isServicesActive ? 'text-[#FFC512]' : 'text-white hover:text-[#FFC512]'
                        }`}
                      >
                        Services
                        <motion.span
                          animate={{ rotate: mobileServOpen ? 180 : 0 }}
                          transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
                          style={{ display: 'inline-flex' }}
                        >
                          <ChevronDown size={20} />
                        </motion.span>
                      </motion.button>

                      <AnimatePresence>
                        {mobileServOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{    height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                            style={{ overflow: 'hidden' }}
                            className="border-b border-white/10 py-2 pl-2"
                          >
                            <Link
                              href="/services"
                              onClick={handleLinkClick}
                              className="block py-2.5 px-2 text-xs font-semibold text-[#FFC512] uppercase tracking-widest"
                            >
                              All Services
                            </Link>
                            {navServiceGroups.map((group, gi) => (
                              <div key={group.label}>
                                {gi > 0 && <div className="border-t border-white/8 mx-2 mt-2 mb-1" />}
                                <p className="px-2 pt-2 pb-1 text-[10px] font-semibold text-white/30 uppercase tracking-widest">
                                  {group.label}
                                </p>
                                {group.links.map((s) => (
                                  <Link
                                    key={s.href}
                                    href={s.href}
                                    onClick={handleLinkClick}
                                    className={`block py-2 px-2 text-base font-medium transition-colors duration-150 ${
                                      pathname === s.href ? 'text-[#FFC512]' : 'text-white/65 hover:text-[#FFC512]'
                                    }`}
                                  >
                                    {s.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                const active = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0  }}
                    transition={{ duration: 0.3, ease: EASE_OUT_EXPO, delay: i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`block font-display font-bold text-2xl py-4 border-b border-white/10 transition-colors duration-200 tracking-tight ${
                        active ? 'text-[#FFC512]' : 'text-white hover:text-[#FFC512]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0  }}
                transition={{ duration: 0.3, ease: EASE_OUT_EXPO, delay: navLinks.length * 0.04 }}
                className="mt-8"
              >
                <button
                  onClick={() => { trackButtonClick('Free Health Check', 'navbar_mobile'); openAuditModal('service'); setMenuOpen(false) }}
                  className="inline-flex items-center justify-center w-full bg-[#FFC512] text-[#222222] font-semibold text-lg px-6 py-4 rounded-md hover:bg-[#e6b010] transition-colors tracking-wide"
                >
                  Free Health Check
                </button>
              </motion.div>
            </nav>

            <div className="px-6 pb-10 text-white/30 text-sm font-normal">
              © {new Date().getFullYear()} Bee Viral. South Yorkshire.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

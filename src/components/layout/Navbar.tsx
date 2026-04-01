'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { navLinks, serviceLinks } from '@/lib/data'
import { useAuditModal } from '@/components/providers/AuditModalProvider'
import { trackButtonClick } from '@/lib/analytics'

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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome || menuOpen
            ? 'bg-[#222222] shadow-lg shadow-black/30'
            : 'bg-transparent'
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
                        <ChevronDown
                          size={13}
                          className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                        />
                        <span
                          className={`absolute bottom-0 left-4 right-4 h-0.5 bg-[#FFC512] rounded-full transition-transform duration-200 origin-left ${
                            isServicesActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                          }`}
                        />
                      </button>

                      {/* Dropdown panel */}
                      <div
                        role="menu"
                        aria-label="Services submenu"
                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-60 bg-[#2a2a2a] border border-white/10 rounded-xl shadow-2xl shadow-black/60 overflow-hidden transition-all duration-200 origin-top ${
                          servicesOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'
                        }`}
                      >
                        <Link
                          href="/services"
                          role="menuitem"
                          onClick={handleLinkClick}
                          className="flex items-center px-4 py-3 text-[10px] font-semibold text-[#FFC512] uppercase tracking-widest border-b border-white/8 hover:bg-white/5 transition-colors"
                        >
                          All Services →
                        </Link>
                        {serviceLinks.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            role="menuitem"
                            onClick={handleLinkClick}
                            className={`block px-4 py-2.5 text-sm font-normal transition-colors duration-150 ${
                              pathname === s.href
                                ? 'text-[#FFC512] bg-white/5'
                                : 'text-white/70 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
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
              <button
                onClick={() => { trackButtonClick('Get a Free Audit', 'navbar'); openAuditModal('service') }}
                className="hidden lg:inline-flex items-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-sm tracking-wide px-5 py-2.5 rounded-md transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Get a Free Audit
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-40 bg-[#222222] transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-20 lg:h-24" />

        <nav aria-label="Mobile navigation" className="flex flex-col px-6 py-8 gap-0 flex-1 overflow-y-auto">
          {navLinks.map((link, i) => {
            // Services → expandable submenu
            if (link.label === 'Services') {
              return (
                <div key={link.href}>
                  <button
                    onClick={() => setMobileServOpen(!mobileServOpen)}
                    style={{ transitionDelay: menuOpen ? `${i * 40}ms` : '0ms' }}
                    aria-expanded={mobileServOpen}
                    className={`w-full flex items-center justify-between font-display font-bold text-2xl py-4 border-b border-white/10 transition-colors duration-200 tracking-tight ${
                      isServicesActive ? 'text-[#FFC512]' : 'text-white hover:text-[#FFC512]'
                    }`}
                  >
                    Services
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${mobileServOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {mobileServOpen && (
                    <div className="border-b border-white/10 py-2 pl-2">
                      <Link
                        href="/services"
                        onClick={handleLinkClick}
                        className="block py-2.5 px-2 text-xs font-semibold text-[#FFC512] uppercase tracking-widest"
                      >
                        All Services
                      </Link>
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={handleLinkClick}
                          className={`block py-2.5 px-2 text-base font-medium transition-colors duration-150 ${
                            pathname === s.href ? 'text-[#FFC512]' : 'text-white/65 hover:text-[#FFC512]'
                          }`}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                style={{ transitionDelay: menuOpen ? `${i * 40}ms` : '0ms' }}
                className={`font-display font-bold text-2xl py-4 border-b border-white/10 transition-colors duration-200 tracking-tight ${
                  active ? 'text-[#FFC512]' : 'text-white hover:text-[#FFC512]'
                }`}
              >
                {link.label}
              </Link>
            )
          })}

          <div className="mt-8">
            <button
              onClick={() => { trackButtonClick('Get a Free Audit', 'navbar_mobile'); openAuditModal('service'); setMenuOpen(false) }}
              className="inline-flex items-center justify-center w-full bg-[#FFC512] text-[#222222] font-semibold text-lg px-6 py-4 rounded-md hover:bg-[#e6b010] transition-colors tracking-wide"
            >
              Get a Free Audit
            </button>
          </div>
        </nav>

        <div className="px-6 pb-10 text-white/30 text-sm font-normal">
          © {new Date().getFullYear()} Bee Viral. South Yorkshire.
        </div>
      </div>
    </>
  )
}

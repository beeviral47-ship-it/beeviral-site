'use client'

import Image from 'next/image'
import Link from 'next/link'
import { navLinks, serviceLinks, locations, socials } from '@/lib/data'
import { InstagramIcon, FacebookIcon } from '@/components/ui/SocialIcons'
import { useStaggerReveal } from '@/hooks/useScrollReveal'
import { trackLinkClick } from '@/lib/analytics'

const socialIcons: Record<string, React.ReactNode> = {
  Instagram: <InstagramIcon size={18} />,
  Facebook:  <FacebookIcon size={18} />,
}

export default function Footer() {
  const gridRef = useStaggerReveal<HTMLDivElement>(0.05)

  return (
    <footer className="bg-[#1a1a1a] text-white overflow-hidden">

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="reveal" data-delay="0">
            <Link href="/">
              <Image
                src="/images/logo-transparent.png"
                alt="Bee Viral"
                width={140}
                height={70}
                sizes="140px"
                className="h-14 w-auto object-contain mb-6"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed font-normal">
              South Yorkshire's premium social media marketing agency. We help local
              businesses in Wath, Rotherham, Barnsley and beyond build powerful online
              presences that drive real results.
            </p>

            <div className="flex items-center gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-md bg-white/5 hover:bg-[#FFC512] hover:text-[#222222] text-white/60 flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label={s.label}
                >
                  {socialIcons[s.label]}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="reveal" data-delay="1">
            <h3 className="font-display font-semibold text-[#FFC512] text-xs uppercase tracking-widest mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#FFC512] text-sm transition-colors duration-200 font-normal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="reveal" data-delay="2">
            <h3 className="font-display font-semibold text-[#FFC512] text-xs uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#FFC512] text-sm transition-colors duration-200 font-normal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations + Contact */}
          <div className="reveal" data-delay="3">
            <h3 className="font-display font-semibold text-[#FFC512] text-xs uppercase tracking-widest mb-5">
              We Serve
            </h3>
            <ul className="space-y-3 mb-8">
              {locations.map((loc) => (
                <li key={loc} className="text-white/60 text-sm flex items-center gap-2 font-normal">
                  <span className="text-[#FFC512]">◆</span>
                  {loc}
                </li>
              ))}
            </ul>

            <h3 className="font-display font-semibold text-[#FFC512] text-xs uppercase tracking-widest mb-5">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@beeviral.co.uk"
                  className="text-white/60 hover:text-[#FFC512] text-sm transition-colors font-normal"
                >
                  info@beeviral.co.uk
                </a>
              </li>
              <li>
                <a
                  href="tel:07723079176"
                  onClick={() => trackLinkClick('tel:07723079176', 'Phone Call')}
                  className="text-white/60 hover:text-[#FFC512] text-sm transition-colors font-normal"
                >
                  07723 079 176
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/447723079176"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackLinkClick('https://wa.me/447723079176', 'WhatsApp')}
                  className="text-white/60 hover:text-[#FFC512] text-sm transition-colors font-normal"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="text-white/60 text-sm font-normal">South Yorkshire, UK</li>
              <li className="text-white/60 text-sm font-normal">Mon–Fri: 9:00am – 5:30pm</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Bee Viral. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/40 hover:text-white/70 text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

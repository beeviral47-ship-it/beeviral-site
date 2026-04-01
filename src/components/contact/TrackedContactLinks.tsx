'use client'

import { trackLinkClick } from '@/lib/analytics'

export function TrackedPhoneLink() {
  return (
    <a
      href="tel:07723079176"
      onClick={() => trackLinkClick('tel:07723079176', 'Phone Call')}
      className="text-white text-sm font-medium hover:text-[#FFC512] transition-colors"
    >
      07723 079 176
    </a>
  )
}

export function TrackedWhatsAppLink() {
  return (
    <a
      href="https://wa.me/447723079176"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackLinkClick('https://wa.me/447723079176', 'WhatsApp')}
      className="text-white text-sm font-medium hover:text-[#FFC512] transition-colors"
    >
      WhatsApp Us
    </a>
  )
}

'use client'

import { ArrowRight } from 'lucide-react'
import { useAuditModal } from '@/components/providers/AuditModalProvider'
import { trackButtonClick } from '@/lib/analytics'

export default function BlogCTA() {
  const { openAuditModal } = useAuditModal()

  return (
    <section className="mt-16 rounded-2xl bg-[#222222] border border-white/8 px-6 sm:px-10 py-10 sm:py-12 text-center">
      <span className="text-[#FFC512] text-xs font-semibold uppercase tracking-widest">
        Free — No obligation
      </span>
      <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mt-3 mb-3">
        Get your free Digital Health Check
      </h2>
      <p className="text-white/55 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-8">
        We&apos;ll review your entire online presence — website, social media, SEO, and local search — and give you honest advice on exactly what we&apos;d do differently. No hard sell, no jargon.
      </p>
      <button
        onClick={() => {
          trackButtonClick('Get Your Free Health Check', 'blog_cta')
          openAuditModal('service')
        }}
        className="inline-flex items-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-sm px-6 py-3 rounded-md transition-all duration-200 hover:scale-105 active:scale-95"
      >
        Get Your Free Health Check <ArrowRight size={16} />
      </button>
      <p className="text-white/25 text-xs mt-4 font-normal">
        No commitment. We&apos;ll never share your details.
      </p>
    </section>
  )
}

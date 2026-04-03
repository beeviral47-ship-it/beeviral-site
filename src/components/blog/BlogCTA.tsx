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
        Ready to grow on social media?
      </h2>
      <p className="text-white/55 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-8">
        Get a free audit of your social media presence from the Bee Viral team. We&apos;ll review your accounts and tell you exactly what&apos;s working and what isn&apos;t.
      </p>
      <button
        onClick={() => {
          trackButtonClick('Get a Free Audit', 'blog_cta')
          openAuditModal('service')
        }}
        className="inline-flex items-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-sm px-6 py-3 rounded-md transition-all duration-200 hover:scale-105 active:scale-95"
      >
        Get a Free Audit <ArrowRight size={16} />
      </button>
      <p className="text-white/25 text-xs mt-4 font-normal">
        No commitment. We&apos;ll never share your details.
      </p>
    </section>
  )
}

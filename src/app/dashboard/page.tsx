import type { Metadata } from 'next'
import OverviewStats from './OverviewStats'

export const metadata: Metadata = {
  title: 'Overview | Bee Viral SEO Dashboard',
  robots: { index: false, follow: false },
}

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto">

      {/* Page heading */}
      <div className="mb-8">
        <p className="text-[11px] font-semibold text-[#FFC512]/60 uppercase tracking-widest mb-2">
          Overview
        </p>
        <h1 className="font-display font-bold text-2xl lg:text-3xl text-white leading-tight">
          SEO Performance Snapshot
        </h1>
        <p className="text-white/40 text-sm mt-2">
          Click any card to update the value. Changes are saved locally.
        </p>
      </div>

      {/* Editable stat cards */}
      <OverviewStats />

      {/* Quick links to modules */}
      <div className="mt-10">
        <p className="text-[11px] font-semibold text-white/20 uppercase tracking-widest mb-4">
          Modules
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              href:    '/dashboard/seo-strategy',
              label:   '01 SEO Strategy Tracker',
              desc:    'Track progress across all 12 strategy sections',
            },
            {
              href:    '/dashboard/keywords',
              label:   '02 Keyword & Content Plan',
              desc:    '49 keywords + all 64 blog posts tracked',
            },
            {
              href:    '/dashboard/writing-system',
              label:   '03 SEO Writing System',
              desc:    'Writing rules reference + per-post checklist',
            },
          ].map(({ href, label, desc }) => (
            <a
              key={href}
              href={href}
              className="bg-[#2d2d2d] border border-white/8 rounded-xl p-5 hover:border-[#FFC512]/30 hover:bg-[#333] transition-all duration-200 group"
            >
              <p className="font-display font-bold text-sm text-white group-hover:text-[#FFC512] transition-colors duration-200 mb-1.5">
                {label}
              </p>
              <p className="text-xs text-white/35 leading-relaxed">{desc}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

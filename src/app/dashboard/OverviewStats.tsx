'use client'

import { useState, useEffect } from 'react'

const STATS_KEY = 'dashboard_overview_stats'

const defaultStats = {
  blogPostsPublished:   '',
  keywordsPage1:        '',
  organicLeadsThisMonth:'',
  lastUpdated:          '',
}

type StatKey = keyof typeof defaultStats

const statConfig: {
  key: StatKey
  label: string
  sublabel: string
  placeholder: string
}[] = [
  {
    key:         'blogPostsPublished',
    label:       'Total Blog Posts Published',
    sublabel:    'Posts live on the site',
    placeholder: 'e.g. 12',
  },
  {
    key:         'keywordsPage1',
    label:       'Keywords on Page 1',
    sublabel:    'Google Page 1 rankings',
    placeholder: 'e.g. 7',
  },
  {
    key:         'organicLeadsThisMonth',
    label:       'Organic Leads This Month',
    sublabel:    'Enquiries from organic search',
    placeholder: 'e.g. 3',
  },
  {
    key:         'lastUpdated',
    label:       'Last Updated',
    sublabel:    'When stats were last checked',
    placeholder: 'e.g. 9 Apr 2026',
  },
]

export default function OverviewStats() {
  const [stats,   setStats]   = useState(defaultStats)
  const [editing, setEditing] = useState<StatKey | null>(null)
  const [draft,   setDraft]   = useState('')

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STATS_KEY)
      if (saved) setStats(JSON.parse(saved))
    } catch { /* ignore */ }
  }, [])

  function startEdit(key: StatKey) {
    setEditing(key)
    setDraft(stats[key])
  }

  function commitEdit() {
    if (!editing) return
    const next = { ...stats, [editing]: draft }
    setStats(next)
    try { localStorage.setItem(STATS_KEY, JSON.stringify(next)) } catch { /* ignore */ }
    setEditing(null)
  }

  function onKey(e: React.KeyboardEvent) {
    if (e.key === 'Enter')  commitEdit()
    if (e.key === 'Escape') setEditing(null)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {statConfig.map(({ key, label, sublabel, placeholder }) => {
        const isEditing = editing === key
        const value     = stats[key]

        return (
          <button
            key={key}
            type="button"
            onClick={() => !isEditing && startEdit(key)}
            className="bg-[#2d2d2d] border border-white/8 rounded-xl p-6 text-left group hover:border-[#FFC512]/30 transition-all duration-200 focus:outline-none focus:border-[#FFC512]/40"
          >
            {/* Labels */}
            <p className="text-[10px] font-semibold text-[#FFC512]/50 uppercase tracking-widest mb-0.5">
              {sublabel}
            </p>
            <p className="text-xs text-white/30 mb-5 leading-snug">{label}</p>

            {/* Value / input */}
            {isEditing ? (
              <input
                autoFocus
                value={draft}
                onChange={e => setDraft(e.target.value)}
                onBlur={commitEdit}
                onKeyDown={onKey}
                onClick={e => e.stopPropagation()}
                placeholder={placeholder}
                className="w-full bg-[#1a1a1a] border border-[#FFC512]/40 rounded-md px-3 py-2 text-white text-xl font-display font-bold focus:outline-none focus:border-[#FFC512] transition-colors placeholder-white/20"
              />
            ) : (
              <div className="flex items-end justify-between gap-2">
                {value ? (
                  <span className="font-display font-bold text-3xl text-white leading-none group-hover:text-[#FFC512] transition-colors duration-200">
                    {value}
                  </span>
                ) : (
                  <span className="font-display font-bold text-2xl text-white/15 leading-none">
                    —
                  </span>
                )}
                <span className="text-[10px] text-white/15 group-hover:text-[#FFC512]/30 transition-colors duration-200 mb-0.5 flex-shrink-0">
                  click to edit
                </span>
              </div>
            )}
          </button>
        )
      })}
    </div>
  )
}

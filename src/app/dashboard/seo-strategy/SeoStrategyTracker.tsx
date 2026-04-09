'use client'

import { useState, useEffect, useCallback } from 'react'
import { strategySections } from './data'
import SeoSection, { type ItemState } from './SeoSection'

const STORAGE_KEY = 'dashboard_seo_strategy'

type SeoStore = Record<string, ItemState>

function calcTotals(store: SeoStore) {
  let total = 0
  let done  = 0
  for (const section of strategySections) {
    for (const item of section.items) {
      total++
      if (store[item.id]?.status === 'Done') done++
    }
  }
  return { total, done, pct: total > 0 ? Math.round((done / total) * 100) : 0 }
}

function loadStore(): SeoStore {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveStore(store: SeoStore) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store))
  } catch { /* ignore */ }
}

export default function SeoStrategyTracker() {
  const [store,       setStore]       = useState<SeoStore>({})
  const [lastUpdated, setLastUpdated] = useState<string>('')

  useEffect(() => {
    setStore(loadStore())
  }, [])

  const handleChange = useCallback((itemId: string, next: ItemState) => {
    setStore(prev => {
      const updated = { ...prev, [itemId]: next }
      saveStore(updated)
      setLastUpdated(new Date().toLocaleString('en-GB', {
        day: '2-digit', month: 'short', year: 'numeric',
        hour: '2-digit', minute: '2-digit',
      }))
      return updated
    })
  }, [])

  const { total, done, pct } = calcTotals(store)

  return (
    <div className="max-w-4xl mx-auto">

      {/* ── Page heading ─────────────────────────── */}
      <div className="mb-8">
        <p className="text-[11px] font-semibold text-[#FFC512]/60 uppercase tracking-widest mb-2">
          Module 01
        </p>
        <h1 className="font-display font-bold text-2xl lg:text-3xl text-white leading-tight">
          SEO Strategy Tracker
        </h1>
        <p className="text-white/40 text-sm mt-2">
          Track progress across all 12 sections. Click a status badge to cycle it. Check items as Done to advance progress.
        </p>
      </div>

      {/* ── Overall progress card ─────────────────── */}
      <div className="bg-[#2d2d2d] border border-white/8 rounded-xl p-6 mb-6">
        <div className="flex items-end justify-between mb-3 gap-4">
          <div>
            <p className="text-[10px] font-semibold text-white/30 uppercase tracking-widest mb-1">
              Overall Strategy Completion
            </p>
            <p className="font-display font-bold text-4xl text-white leading-none">
              {pct}
              <span className="text-2xl text-white/30">%</span>
            </p>
          </div>
          <div className="text-right">
            <p className="font-display font-bold text-2xl text-[#FFC512] leading-none">{done}</p>
            <p className="text-[10px] text-white/30 uppercase tracking-widest mt-1">of {total} items done</p>
          </div>
        </div>

        <div className="w-full h-2 bg-white/8 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#FFC512] rounded-full transition-all duration-700"
            style={{ width: `${pct}%` }}
          />
        </div>

        {lastUpdated && (
          <p className="text-[11px] text-white/20 mt-3">
            Last updated: {lastUpdated}
          </p>
        )}
      </div>

      {/* ── Section accordions ────────────────────── */}
      <div className="flex flex-col gap-2">
        {strategySections.map(section => (
          <SeoSection
            key={section.num}
            section={section}
            itemStates={store}
            onChange={handleChange}
          />
        ))}
      </div>
    </div>
  )
}

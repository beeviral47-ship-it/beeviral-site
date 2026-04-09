'use client'

import { useState } from 'react'
import { ChevronDown, FileText } from 'lucide-react'
import type { StrategySection } from './data'

type Status = 'Not Started' | 'In Progress' | 'Done'

export interface ItemState {
  checked: boolean
  status:  Status
  notes:   string
}

const STATUS_CYCLE: Status[] = ['Not Started', 'In Progress', 'Done']

const STATUS_STYLES: Record<Status, string> = {
  'Not Started': 'bg-white/5 text-white/30 border-white/10',
  'In Progress': 'bg-[#FFC512]/10 text-[#FFC512] border-[#FFC512]/25',
  'Done':        'bg-green-500/10 text-green-400 border-green-500/25',
}

interface Props {
  section:    StrategySection
  itemStates: Record<string, ItemState>
  onChange:   (itemId: string, next: ItemState) => void
}

export default function SeoSection({ section, itemStates, onChange }: Props) {
  const [open,        setOpen]        = useState(false)
  const [expandNotes, setExpandNotes] = useState<string | null>(null)

  const total = section.items.length
  const done  = section.items.filter(i => itemStates[i.id]?.status === 'Done').length
  const pct   = total > 0 ? Math.round((done / total) * 100) : 0

  function cycleStatus(itemId: string) {
    const cur  = itemStates[itemId]?.status ?? 'Not Started'
    const next = STATUS_CYCLE[(STATUS_CYCLE.indexOf(cur) + 1) % STATUS_CYCLE.length]
    const prev = itemStates[itemId] ?? { checked: false, status: 'Not Started', notes: '' }
    onChange(itemId, { ...prev, status: next, checked: next === 'Done' })
  }

  function toggleCheck(itemId: string) {
    const prev   = itemStates[itemId] ?? { checked: false, status: 'Not Started', notes: '' }
    const checked = !prev.checked
    onChange(itemId, { ...prev, checked, status: checked ? 'Done' : 'Not Started' })
  }

  function saveNotes(itemId: string, notes: string) {
    const prev = itemStates[itemId] ?? { checked: false, status: 'Not Started', notes: '' }
    onChange(itemId, { ...prev, notes })
  }

  return (
    <div className="bg-[#2d2d2d] border border-white/8 rounded-xl overflow-hidden">

      {/* ── Accordion header ──────────────────────────── */}
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-white/3 transition-colors duration-150 group"
      >
        {/* Section number */}
        <span className="text-[10px] font-bold text-[#FFC512]/50 uppercase tracking-widest min-w-[28px]">
          {section.num}
        </span>

        {/* Title */}
        <span className="flex-1 font-display font-bold text-sm text-white group-hover:text-[#FFC512] transition-colors duration-150">
          {section.title}
        </span>

        {/* Progress */}
        <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
          <div className="w-24 h-1.5 bg-white/8 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#FFC512] rounded-full transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-xs text-white/30 w-10 text-right">
            {done}/{total}
          </span>
        </div>

        <ChevronDown
          size={16}
          className={`text-white/30 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Mobile progress bar */}
      <div className="sm:hidden px-5 pb-1">
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1 bg-white/8 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#FFC512] rounded-full transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-[10px] text-white/30">{done}/{total}</span>
        </div>
      </div>

      {/* ── Accordion body ────────────────────────────── */}
      {open && (
        <div className="border-t border-white/8">
          {/* Intro */}
          <p className="px-5 py-4 text-sm text-white/40 leading-relaxed border-b border-white/5">
            {section.intro}
          </p>

          {/* Items */}
          <ul className="divide-y divide-white/5">
            {section.items.map(item => {
              const state   = itemStates[item.id] ?? { checked: false, status: 'Not Started' as Status, notes: '' }
              const isNotes = expandNotes === item.id

              return (
                <li key={item.id} className="px-5 py-3">
                  <div className="flex items-start gap-3">

                    {/* Checkbox */}
                    <button
                      type="button"
                      onClick={() => toggleCheck(item.id)}
                      className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded border transition-all duration-150 flex items-center justify-center ${
                        state.checked
                          ? 'bg-[#FFC512] border-[#FFC512]'
                          : 'border-white/20 hover:border-[#FFC512]/50'
                      }`}
                      aria-label={state.checked ? 'Uncheck item' : 'Check item'}
                    >
                      {state.checked && (
                        <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                          <path d="M1 3.5L3.5 6L8 1" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>

                    {/* Main content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start gap-2 mb-1">
                        <span className={`text-sm font-medium leading-snug ${state.checked ? 'text-white/40 line-through' : 'text-white/80'}`}>
                          {item.title}
                        </span>
                      </div>

                      <p className="text-xs text-white/30 leading-relaxed mb-2">
                        {item.detail}
                      </p>

                      {/* Controls row */}
                      <div className="flex items-center gap-2 flex-wrap">
                        {/* Status badge */}
                        <button
                          type="button"
                          onClick={() => cycleStatus(item.id)}
                          className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-1 rounded border transition-all duration-150 ${STATUS_STYLES[state.status]}`}
                        >
                          {state.status}
                        </button>

                        {/* Notes toggle */}
                        <button
                          type="button"
                          onClick={() => setExpandNotes(isNotes ? null : item.id)}
                          className="flex items-center gap-1 text-[10px] text-white/25 hover:text-[#FFC512]/60 transition-colors duration-150"
                        >
                          <FileText size={11} />
                          {state.notes ? 'Edit note' : 'Add note'}
                        </button>
                      </div>

                      {/* Notes field */}
                      {isNotes && (
                        <textarea
                          autoFocus
                          defaultValue={state.notes}
                          onBlur={e => saveNotes(item.id, e.target.value)}
                          placeholder="Add notes, links, or context…"
                          rows={3}
                          className="mt-2 w-full bg-[#1a1a1a] border border-white/10 rounded-md px-3 py-2 text-xs text-white/70 placeholder-white/20 resize-none focus:outline-none focus:border-[#FFC512]/30 transition-colors"
                        />
                      )}
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

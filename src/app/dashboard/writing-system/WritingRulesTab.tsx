'use client'

import { useState } from 'react'
import { writingRules, type RuleSection, type RuleContent } from './data'
import { ChevronDown } from 'lucide-react'

function RuleBody({ content }: { content: RuleContent }) {
  if (content.type === 'code') {
    return (
      <pre className="bg-[#1a1a1a] border border-white/8 rounded-lg p-4 text-[11px] text-white/60 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
        {content.text}
      </pre>
    )
  }

  if (content.type === 'list') {
    return (
      <ul className="space-y-2">
        {content.items.map((item, i) => (
          <li key={i} className="flex gap-2.5 text-sm text-white/60 leading-snug">
            <span className="text-[#FFC512]/50 mt-0.5 shrink-0">›</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )
  }

  if (content.type === 'table') {
    return (
      <div className="overflow-x-auto rounded-lg border border-white/8">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-[#1a1a1a] border-b border-white/8">
              {content.headers.map(h => (
                <th key={h} className="text-left px-4 py-2.5 text-[10px] font-semibold text-[#FFC512]/50 uppercase tracking-widest whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {content.rows.map((row, i) => (
              <tr key={i} className="hover:bg-white/2 transition-colors">
                {row.map((cell, j) => (
                  <td key={j} className={`px-4 py-2.5 whitespace-nowrap ${j === 0 ? 'text-white/70 font-medium' : 'text-white/40'}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  if (content.type === 'grouped') {
    return (
      <div className="space-y-4">
        {content.groups.map(g => (
          <div key={g.heading}>
            <p className="text-[10px] font-semibold text-[#FFC512]/50 uppercase tracking-widest mb-2">{g.heading}</p>
            <ul className="space-y-2">
              {g.items.map((item, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-white/60 leading-snug">
                  <span className="text-[#FFC512]/50 mt-0.5 shrink-0">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )
  }

  return null
}

export default function WritingRulesTab() {
  const [allOpen, setAllOpen] = useState(false)

  return (
    <div>
      {/* Header row */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs text-white/30">
          {writingRules.length} reference sections · click any section to expand
        </p>
        <button
          onClick={() => setAllOpen(o => !o)}
          className="text-[10px] font-semibold uppercase tracking-wide text-white/30 border border-white/10 px-3 py-1.5 rounded hover:text-white/60 hover:border-white/20 transition-all"
        >
          {allOpen ? 'Collapse All' : 'Expand All'}
        </button>
      </div>

      <div className="space-y-2">
        {writingRules.map(section => (
          <ControlledPanel key={section.id} section={section} forceOpen={allOpen} />
        ))}
      </div>
    </div>
  )
}

function ControlledPanel({ section, forceOpen }: { section: RuleSection; forceOpen: boolean }) {
  const [localOpen, setLocalOpen] = useState(false)
  const isOpen = forceOpen || localOpen

  return (
    <div className="border border-white/8 rounded-xl overflow-hidden">
      <button
        onClick={() => setLocalOpen(o => !o)}
        className="w-full flex items-center justify-between px-5 py-4 bg-[#2d2d2d] hover:bg-[#333333] transition-colors text-left"
      >
        <span className="font-semibold text-sm text-white/80">{section.title}</span>
        <ChevronDown
          size={16}
          className={`text-white/30 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-5 py-4 bg-[#252525] border-t border-white/8">
          <RuleBody content={section.content} />
        </div>
      )}
    </div>
  )
}

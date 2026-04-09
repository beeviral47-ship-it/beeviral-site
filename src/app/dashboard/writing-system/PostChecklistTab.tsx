'use client'

import { useState } from 'react'
import { checklistGroups, POST_TYPE_WORDCOUNT, type PostType } from './data'

const POST_TYPES: PostType[] = ['Pillar', 'Standard', 'Niche Industry', 'Case Study', 'Local Guide']

const TOTAL_ITEMS = checklistGroups.reduce((sum, g) => sum + g.items.length, 0)

export default function PostChecklistTab() {
  const [postTitle,  setPostTitle]  = useState('')
  const [postType,   setPostType]   = useState<PostType | ''>('')
  const [checked,    setChecked]    = useState<Record<string, boolean>>({})

  const toggle = (id: string) => setChecked(prev => ({ ...prev, [id]: !prev[id] }))

  const reset = () => {
    setPostTitle('')
    setPostType('')
    setChecked({})
  }

  const completedCount = Object.values(checked).filter(Boolean).length
  const pct = Math.round((completedCount / TOTAL_ITEMS) * 100)

  return (
    <div className="max-w-2xl">

      {/* Post details */}
      <div className="bg-[#2d2d2d] border border-white/8 rounded-xl p-5 mb-5 space-y-4">
        <div>
          <label className="block text-[10px] font-semibold text-[#FFC512]/50 uppercase tracking-widest mb-1.5">
            Post Title
          </label>
          <input
            type="text"
            value={postTitle}
            onChange={e => setPostTitle(e.target.value)}
            placeholder="Enter post title…"
            className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white/80 placeholder-white/20 focus:outline-none focus:border-[#FFC512]/40 transition-colors"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[160px]">
            <label className="block text-[10px] font-semibold text-[#FFC512]/50 uppercase tracking-widest mb-1.5">
              Post Type
            </label>
            <select
              value={postType}
              onChange={e => setPostType(e.target.value as PostType | '')}
              className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white/80 focus:outline-none focus:border-[#FFC512]/40 transition-colors appearance-none cursor-pointer"
            >
              <option value="">Select type…</option>
              {POST_TYPES.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {postType && (
            <div className="flex-1 min-w-[160px]">
              <p className="text-[10px] font-semibold text-[#FFC512]/50 uppercase tracking-widest mb-1.5">
                Target Word Count
              </p>
              <p className="text-sm font-semibold text-[#FFC512] bg-[#FFC512]/8 border border-[#FFC512]/15 rounded-lg px-3 py-2.5">
                {POST_TYPE_WORDCOUNT[postType]}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Progress */}
      <div className="bg-[#2d2d2d] border border-white/8 rounded-xl p-5 mb-5">
        <div className="flex items-end justify-between mb-3">
          <div>
            <p className="text-[10px] font-semibold text-white/30 uppercase tracking-widest mb-1">Checklist Progress</p>
            <p className="font-display font-bold text-2xl text-white leading-none">
              {completedCount} <span className="text-base text-white/30 font-normal">of {TOTAL_ITEMS} complete</span>
            </p>
          </div>
          <p className="font-display font-bold text-xl text-[#FFC512]">{pct}%</p>
        </div>
        <div className="w-full h-1.5 bg-white/8 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${pct}%`,
              backgroundColor: pct === 100 ? '#4ade80' : '#FFC512',
            }}
          />
        </div>
        {pct === 100 && (
          <p className="text-xs text-green-400 font-semibold mt-2">All items complete — ready to publish!</p>
        )}
      </div>

      {/* Checklist groups */}
      <div className="space-y-4">
        {checklistGroups.map(group => {
          const groupDone = group.items.filter(i => checked[i.id]).length

          return (
            <div key={group.id} className="bg-[#2d2d2d] border border-white/8 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/8 bg-[#222222]">
                <p className="text-[10px] font-semibold text-[#FFC512]/60 uppercase tracking-widest">{group.label}</p>
                <p className="text-[10px] text-white/30">
                  {groupDone}/{group.items.length}
                </p>
              </div>

              <ul className="divide-y divide-white/5">
                {group.items.map(item => {
                  const isChecked = !!checked[item.id]
                  return (
                    <li key={item.id}>
                      <label className="flex items-start gap-3 px-5 py-3 cursor-pointer hover:bg-white/2 transition-colors">
                        <div className="mt-0.5 shrink-0">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggle(item.id)}
                            className="sr-only"
                          />
                          <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                            isChecked
                              ? 'bg-green-500/20 border-green-500/50'
                              : 'bg-white/5 border-white/15'
                          }`}>
                            {isChecked && (
                              <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                                <path d="M1 3.5L3.5 6L8 1" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className={`text-sm leading-snug transition-colors ${
                          isChecked ? 'text-white/30 line-through' : 'text-white/70'
                        }`}>
                          {item.text}
                        </span>
                      </label>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>

      {/* Reset */}
      <div className="mt-5 flex justify-end">
        <button
          onClick={reset}
          className="text-[11px] font-semibold uppercase tracking-wide text-white/25 border border-white/10 px-4 py-2 rounded-lg hover:text-white/50 hover:border-white/20 transition-all"
        >
          Reset Checklist
        </button>
      </div>

    </div>
  )
}

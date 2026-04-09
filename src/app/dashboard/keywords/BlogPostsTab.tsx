'use client'

import { useState, useEffect, useCallback } from 'react'
import { blogPosts, type PostStatus } from './data'

const BLOG_STORE_KEY = 'dashboard_blog_posts'

interface PostState {
  status:        PostStatus
  publishedDate: string
  notes:         string
}

type BlogStore = Record<string, PostState>

const STATUS_OPTIONS: PostStatus[] = ['Not Started', 'Brief Written', 'Draft', 'Edited', 'Published']

const STATUS_STYLES: Record<PostStatus, string> = {
  'Not Started':   'bg-white/5 text-white/30 border-white/10',
  'Brief Written': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Draft':         'bg-[#FFC512]/10 text-[#FFC512] border-[#FFC512]/20',
  'Edited':        'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Published':     'bg-green-500/10 text-green-400 border-green-500/20',
}

type FilterStatus = 'All' | 'Not Started' | 'In Progress' | 'Published'

function load(): BlogStore {
  try { return JSON.parse(localStorage.getItem(BLOG_STORE_KEY) ?? '{}') } catch { return {} }
}
function save(s: BlogStore) {
  try { localStorage.setItem(BLOG_STORE_KEY, JSON.stringify(s)) } catch { /* ignore */ }
}

const IN_PROGRESS: PostStatus[] = ['Brief Written', 'Draft', 'Edited']

export default function BlogPostsTab() {
  const [store,        setStore]        = useState<BlogStore>({})
  const [filter,       setFilter]       = useState<FilterStatus>('All')
  const [expandNotes,  setExpandNotes]  = useState<string | null>(null)

  useEffect(() => { setStore(load()) }, [])

  const getState = (id: string): PostState =>
    store[id] ?? { status: 'Not Started', publishedDate: '', notes: '' }

  const cycleStatus = useCallback((id: string) => {
    setStore(prev => {
      const cur  = prev[id]?.status ?? 'Not Started'
      const next = STATUS_OPTIONS[(STATUS_OPTIONS.indexOf(cur) + 1) % STATUS_OPTIONS.length]
      const updated = { ...prev, [id]: { ...getState(id), ...prev[id], status: next } }
      save(updated)
      return updated
    })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const updateField = useCallback((id: string, field: keyof PostState, value: string) => {
    setStore(prev => {
      const updated = { ...prev, [id]: { ...getState(id), ...prev[id], [field]: value } }
      save(updated)
      return updated
    })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Stats
  const published   = blogPosts.filter(p => store[p.id]?.status === 'Published').length
  const inProgress  = blogPosts.filter(p => IN_PROGRESS.includes(store[p.id]?.status ?? 'Not Started')).length
  const notStarted  = blogPosts.length - published - inProgress
  const pct         = Math.round((published / blogPosts.length) * 100)

  // Filter
  const filtered = blogPosts.filter(p => {
    if (filter === 'All')         return true
    if (filter === 'Published')   return store[p.id]?.status === 'Published'
    if (filter === 'In Progress') return IN_PROGRESS.includes(store[p.id]?.status ?? 'Not Started')
    if (filter === 'Not Started') return !store[p.id] || store[p.id].status === 'Not Started'
    return true
  })

  const FILTERS: FilterStatus[] = ['All', 'Not Started', 'In Progress', 'Published']

  return (
    <div>
      {/* Progress bar */}
      <div className="bg-[#2d2d2d] border border-white/8 rounded-xl p-5 mb-5">
        <div className="flex items-end justify-between mb-3">
          <div>
            <p className="text-[10px] font-semibold text-white/30 uppercase tracking-widest mb-1">Blog Content Progress</p>
            <p className="font-display font-bold text-3xl text-white leading-none">
              {published} <span className="text-lg text-white/30 font-normal">of 64 published</span>
            </p>
          </div>
          <p className="font-display font-bold text-2xl text-[#FFC512]">{pct}%</p>
        </div>
        <div className="w-full h-2 bg-white/8 rounded-full overflow-hidden">
          <div className="h-full bg-[#FFC512] rounded-full transition-all duration-700" style={{ width: `${pct}%` }} />
        </div>
        {/* Summary row */}
        <div className="flex gap-6 mt-4">
          {[
            { label: 'Published',  val: published,  colour: 'text-green-400' },
            { label: 'In Progress', val: inProgress, colour: 'text-[#FFC512]' },
            { label: 'Not Started', val: notStarted, colour: 'text-white/30'  },
          ].map(({ label, val, colour }) => (
            <div key={label}>
              <p className={`font-display font-bold text-xl ${colour}`}>{val}</p>
              <p className="text-[10px] text-white/20 uppercase tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1.5 rounded border transition-all duration-150 ${
              filter === f
                ? 'bg-[#FFC512] text-[#222222] border-[#FFC512]'
                : 'text-white/30 border-white/10 hover:text-white/60 hover:border-white/20'
            }`}
          >
            {f} {f !== 'All' && `(${f === 'Published' ? published : f === 'In Progress' ? inProgress : notStarted})`}
          </button>
        ))}
        <span className="ml-auto text-[11px] text-white/20">{filtered.length} posts</span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-white/8">
        <table className="w-full text-xs min-w-[700px]">
          <thead>
            <tr className="border-b border-white/8 bg-[#222222]">
              {['#', 'Post Title', 'Target Keyword', 'Vol', 'Status', 'Published Date', 'Notes'].map(h => (
                <th key={h} className="text-left px-4 py-3 text-[10px] font-semibold text-[#FFC512]/50 uppercase tracking-widest whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {filtered.map(post => {
              const state = getState(post.id)
              const hasNotes = expandNotes === post.id

              return (
                <tr key={post.id} className="hover:bg-white/2 transition-colors align-top">
                  {/* # */}
                  <td className="px-4 py-3 font-bold text-[#FFC512]/40 whitespace-nowrap">
                    {String(post.num).padStart(2, '0')}
                  </td>
                  {/* Title */}
                  <td className="px-4 py-3 text-white/75 font-medium leading-snug max-w-[260px]">
                    {post.title}
                  </td>
                  {/* Keyword */}
                  <td className="px-4 py-3 text-white/30 italic max-w-[180px] leading-snug">
                    {post.keyword}
                  </td>
                  {/* Volume */}
                  <td className="px-4 py-3 font-display font-bold text-white/50 whitespace-nowrap">
                    {post.volume ? Number(post.volume).toLocaleString() : '—'}
                  </td>
                  {/* Status */}
                  <td className="px-4 py-3">
                    <button
                      onClick={() => cycleStatus(post.id)}
                      className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-1 rounded border transition-all duration-150 whitespace-nowrap ${STATUS_STYLES[state.status]}`}
                    >
                      {state.status}
                    </button>
                  </td>
                  {/* Published date */}
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      value={state.publishedDate}
                      onChange={e => updateField(post.id, 'publishedDate', e.target.value)}
                      placeholder="e.g. 9 Apr 2026"
                      className="w-28 bg-transparent border-b border-white/10 text-white/40 placeholder-white/15 focus:outline-none focus:border-[#FFC512]/40 text-[11px] py-0.5 transition-colors"
                    />
                  </td>
                  {/* Notes */}
                  <td className="px-4 py-3">
                    <button
                      onClick={() => setExpandNotes(hasNotes ? null : post.id)}
                      className="text-[10px] text-white/20 hover:text-[#FFC512]/50 transition-colors"
                    >
                      {state.notes ? '✎ note' : '+ note'}
                    </button>
                    {hasNotes && (
                      <textarea
                        autoFocus
                        defaultValue={state.notes}
                        onBlur={e => updateField(post.id, 'notes', e.target.value)}
                        placeholder="Notes…"
                        rows={2}
                        className="mt-1 w-48 bg-[#1a1a1a] border border-white/10 rounded px-2 py-1 text-[11px] text-white/60 placeholder-white/20 resize-none focus:outline-none focus:border-[#FFC512]/30 block"
                      />
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

'use client'

import { useState, useEffect, useCallback } from 'react'
import { keywords, type KwStatus, type Difficulty } from './data'

const KW_STORE_KEY = 'dashboard_keywords'

interface KwState {
  ranking: string
  status:  KwStatus
}

type KwStore = Record<string, KwState>

const STATUS_CYCLE: KwStatus[] = ['Not Started', 'Optimising', 'Ranking']

const STATUS_STYLES: Record<KwStatus, string> = {
  'Not Started': 'bg-white/5 text-white/30 border-white/10',
  'Optimising':  'bg-[#FFC512]/10 text-[#FFC512] border-[#FFC512]/25',
  'Ranking':     'bg-green-500/10 text-green-400 border-green-500/25',
}

const DIFF_COLOURS: Record<Difficulty, string> = {
  Low:    'text-green-400',
  Medium: 'text-[#FFC512]',
  High:   'text-red-400',
}

const DIFF_SORT: Record<Difficulty, number> = { Low: 1, Medium: 2, High: 3 }

type FilterCluster = 'All' | '1' | '2' | '3' | '4'
type SortField     = 'volume' | 'difficulty' | 'status'

function load(): KwStore {
  try { return JSON.parse(localStorage.getItem(KW_STORE_KEY) ?? '{}') } catch { return {} }
}
function save(s: KwStore) {
  try { localStorage.setItem(KW_STORE_KEY, JSON.stringify(s)) } catch { /* ignore */ }
}

export default function KeywordsTab() {
  const [store,         setStore]         = useState<KwStore>({})
  const [editingRank,   setEditingRank]   = useState<string | null>(null)
  const [rankDraft,     setRankDraft]     = useState('')
  const [filterCluster, setFilterCluster] = useState<FilterCluster>('All')
  const [sortField,     setSortField]     = useState<SortField>('volume')
  const [sortAsc,       setSortAsc]       = useState(false)

  useEffect(() => { setStore(load()) }, [])

  const cycleStatus = useCallback((id: string) => {
    setStore(prev => {
      const cur  = prev[id]?.status ?? 'Not Started'
      const next = STATUS_CYCLE[(STATUS_CYCLE.indexOf(cur) + 1) % STATUS_CYCLE.length]
      const updated = { ...prev, [id]: { ...prev[id], ranking: prev[id]?.ranking ?? '', status: next } }
      save(updated)
      return updated
    })
  }, [])

  const commitRank = useCallback((id: string) => {
    setStore(prev => {
      const updated = { ...prev, [id]: { status: prev[id]?.status ?? 'Not Started', ranking: rankDraft } }
      save(updated)
      return updated
    })
    setEditingRank(null)
  }, [rankDraft])

  function toggleSort(field: SortField) {
    if (sortField === field) setSortAsc(a => !a)
    else { setSortField(field); setSortAsc(false) }
  }

  const STATUS_SORT: Record<KwStatus, number> = { 'Not Started': 0, 'Optimising': 1, 'Ranking': 2 }

  const filtered = keywords
    .filter(k => filterCluster === 'All' || k.cluster === Number(filterCluster))
    .sort((a, b) => {
      let diff = 0
      if (sortField === 'volume')     diff = a.volume - b.volume
      if (sortField === 'difficulty') diff = DIFF_SORT[a.difficulty] - DIFF_SORT[b.difficulty]
      if (sortField === 'status') {
        const sa = store[a.id]?.status ?? 'Not Started'
        const sb = store[b.id]?.status ?? 'Not Started'
        diff = STATUS_SORT[sa] - STATUS_SORT[sb]
      }
      return sortAsc ? diff : -diff
    })

  const SortBtn = ({ field, label }: { field: SortField; label: string }) => (
    <button
      onClick={() => toggleSort(field)}
      className={`text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1.5 rounded border transition-all duration-150 ${
        sortField === field
          ? 'bg-[#FFC512]/10 text-[#FFC512] border-[#FFC512]/25'
          : 'text-white/30 border-white/10 hover:text-white/60 hover:border-white/20'
      }`}
    >
      {label} {sortField === field ? (sortAsc ? '↑' : '↓') : ''}
    </button>
  )

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3 mb-5">
        {/* Cluster filter */}
        <div className="flex items-center gap-1.5">
          {(['All', '1', '2', '3', '4'] as FilterCluster[]).map(c => (
            <button
              key={c}
              onClick={() => setFilterCluster(c)}
              className={`text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1.5 rounded border transition-all duration-150 ${
                filterCluster === c
                  ? 'bg-[#FFC512] text-[#222222] border-[#FFC512]'
                  : 'text-white/30 border-white/10 hover:text-white/60 hover:border-white/20'
              }`}
            >
              {c === 'All' ? 'All' : `Cluster ${c}`}
            </button>
          ))}
        </div>

        <div className="h-4 w-px bg-white/10 hidden sm:block" />

        {/* Sort */}
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-white/20 uppercase tracking-wide">Sort:</span>
          <SortBtn field="volume"     label="Volume"     />
          <SortBtn field="difficulty" label="Difficulty" />
          <SortBtn field="status"     label="Status"     />
        </div>

        <span className="ml-auto text-[11px] text-white/20">{filtered.length} keywords</span>
      </div>

      {/* Table — scrollable on mobile */}
      <div className="overflow-x-auto rounded-xl border border-white/8">
        <table className="w-full text-sm min-w-[700px]">
          <thead>
            <tr className="border-b border-white/8 bg-[#222222]">
              {['Keyword', 'Cluster', 'Volume', 'Difficulty', 'Target Page', 'Current Ranking', 'Status'].map(h => (
                <th key={h} className="text-left px-4 py-3 text-[10px] font-semibold text-[#FFC512]/50 uppercase tracking-widest whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {filtered.map(kw => {
              const state = store[kw.id] ?? { ranking: '', status: 'Not Started' as KwStatus }
              return (
                <tr key={kw.id} className="hover:bg-white/2 transition-colors">
                  {/* Keyword */}
                  <td className="px-4 py-3 text-white/80 font-medium text-xs max-w-[220px]">
                    {kw.keyword}
                  </td>
                  {/* Cluster */}
                  <td className="px-4 py-3">
                    <span className="text-[10px] font-bold text-[#FFC512]/60 bg-[#FFC512]/8 border border-[#FFC512]/15 px-2 py-0.5 rounded">
                      C{kw.cluster}
                    </span>
                  </td>
                  {/* Volume */}
                  <td className="px-4 py-3 font-display font-bold text-white/70 text-xs whitespace-nowrap">
                    {kw.volume.toLocaleString()}
                  </td>
                  {/* Difficulty */}
                  <td className={`px-4 py-3 text-xs font-semibold ${DIFF_COLOURS[kw.difficulty]}`}>
                    {kw.difficulty}
                  </td>
                  {/* Target page */}
                  <td className="px-4 py-3 text-[11px] text-white/30 font-mono max-w-[180px] truncate" title={kw.targetPage}>
                    {kw.targetPage}
                  </td>
                  {/* Current ranking — inline editable */}
                  <td className="px-4 py-3">
                    {editingRank === kw.id ? (
                      <input
                        autoFocus
                        value={rankDraft}
                        onChange={e => setRankDraft(e.target.value)}
                        onBlur={() => commitRank(kw.id)}
                        onKeyDown={e => { if (e.key === 'Enter') commitRank(kw.id); if (e.key === 'Escape') setEditingRank(null) }}
                        placeholder="e.g. Page 2 Pos 14"
                        className="w-32 bg-[#1a1a1a] border border-[#FFC512]/30 rounded px-2 py-1 text-xs text-white focus:outline-none focus:border-[#FFC512]"
                      />
                    ) : (
                      <button
                        onClick={() => { setEditingRank(kw.id); setRankDraft(state.ranking) }}
                        className="text-xs text-white/30 hover:text-white/70 transition-colors min-w-[80px] text-left"
                      >
                        {state.ranking || <span className="text-white/15 italic">Not tracking</span>}
                      </button>
                    )}
                  </td>
                  {/* Status */}
                  <td className="px-4 py-3">
                    <button
                      onClick={() => cycleStatus(kw.id)}
                      className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-1 rounded border transition-all duration-150 whitespace-nowrap ${STATUS_STYLES[state.status]}`}
                    >
                      {state.status}
                    </button>
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

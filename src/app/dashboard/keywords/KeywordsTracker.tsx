'use client'

import { useState } from 'react'
import KeywordsTab  from './KeywordsTab'
import BlogPostsTab from './BlogPostsTab'

type Tab = 'keywords' | 'blog'

export default function KeywordsTracker() {
  const [tab, setTab] = useState<Tab>('keywords')

  return (
    <div className="max-w-6xl mx-auto">

      {/* Heading */}
      <div className="mb-8">
        <p className="text-[11px] font-semibold text-[#FFC512]/60 uppercase tracking-widest mb-2">Module 02</p>
        <h1 className="font-display font-bold text-2xl lg:text-3xl text-white leading-tight">
          Keyword &amp; Content Plan
        </h1>
        <p className="text-white/40 text-sm mt-2">
          49 target keywords across 4 clusters · 64 blog posts to publish.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-[#222222] border border-white/8 rounded-lg p-1 w-fit">
        {([
          { key: 'keywords', label: 'Keywords' },
          { key: 'blog',     label: 'Blog Posts' },
        ] as { key: Tab; label: string }[]).map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`px-5 py-2 rounded-md text-sm font-semibold transition-all duration-150 ${
              tab === key
                ? 'bg-[#FFC512] text-[#222222]'
                : 'text-white/40 hover:text-white/70'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {tab === 'keywords' ? <KeywordsTab /> : <BlogPostsTab />}
    </div>
  )
}

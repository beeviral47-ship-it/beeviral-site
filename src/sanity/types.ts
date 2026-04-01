// ── Shared ────────────────────────────────────────────────────────────────────

export interface SanitySlug {
  current: string
}

export interface SanityImageAsset {
  _type: 'image'
  asset: { _ref: string; _type: 'reference' }
  hotspot?: { x: number; y: number }
  alt?: string
  caption?: string
}

export interface SeoFields {
  metaTitle?: string
  metaDescription?: string
  ogImage?: SanityImageAsset
  canonicalUrl?: string
  noindex?: boolean
  structuredData?: string
}

// ── Blog ──────────────────────────────────────────────────────────────────────

export interface BlogPost {
  _id: string
  _type: 'blog'
  title: string
  slug: SanitySlug
  author: string
  publishedAt: string
  excerpt?: string
  coverImage?: SanityImageAsset
  body?: unknown[]
  seo?: SeoFields
}

// ── Service ───────────────────────────────────────────────────────────────────

export interface ServiceDoc {
  _id: string
  _type: 'service'
  title: string
  slug: SanitySlug
  tagline?: string
  description?: string
  icon?: string
  features?: string[]
  body?: unknown[]
  seo?: SeoFields
}

// ── Case Study ────────────────────────────────────────────────────────────────

export interface CaseStudyDoc {
  _id: string
  _type: 'caseStudy'
  title: string
  slug: SanitySlug
  client?: string
  industry?: string
  location?: string
  tagline?: string
  coverImage?: SanityImageAsset
  challenge?: unknown[]
  approach?: unknown[]
  results?: unknown[]
  metrics?: Array<{ label: string; value: string; context?: string }>
  testimonial?: { quote: string; author: string; role: string }
  seo?: SeoFields
}

// ── Page ──────────────────────────────────────────────────────────────────────

export interface PageDoc {
  _id: string
  _type: 'page'
  title: string
  slug: SanitySlug
  body?: unknown[]
  seo?: SeoFields
}

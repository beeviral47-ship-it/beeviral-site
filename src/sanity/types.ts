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

export type PublishStatus = 'draft' | 'published'

export interface SeoFields {
  // Search
  metaTitle?: string
  metaDescription?: string
  canonicalUrl?: string
  noindex?: boolean
  // Open Graph
  ogTitle?: string
  ogDescription?: string
  ogImage?: SanityImageAsset
  // Advanced
  schemaType?: string
  structuredData?: string
}

// ── Category ──────────────────────────────────────────────────────────────────

export interface Category {
  _id: string
  _type: 'category'
  name: string
  slug: SanitySlug
  description?: string
}

// ── Blog ──────────────────────────────────────────────────────────────────────

export interface BlogPost {
  _id: string
  _type: 'blog'
  status: PublishStatus
  title: string
  slug: SanitySlug
  author: string
  publishedAt: string
  excerpt?: string
  featuredImage?: SanityImageAsset
  categories?: Category[]
  body?: unknown[]
  seo?: SeoFields
}

// ── Service ───────────────────────────────────────────────────────────────────

export interface ServiceDoc {
  _id: string
  _type: 'service'
  status: PublishStatus
  title: string
  slug: SanitySlug
  featuredImage?: SanityImageAsset
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
  status: PublishStatus
  title: string
  slug: SanitySlug
  featuredImage?: SanityImageAsset
  client?: string
  industry?: string
  location?: string
  tagline?: string
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
  status: PublishStatus
  title: string
  slug: SanitySlug
  body?: unknown[]
  seo?: SeoFields
}

// ── Location Page ─────────────────────────────────────────────────────────────

export interface FaqItem {
  question: string
  answer?: string
}

export interface LocationPageDoc {
  _id: string
  _type: 'locationPage'
  cityName: string
  slug: SanitySlug
  heroHeadline?: string
  heroSubtext?: string
  servicesOffered?: string[]
  body?: unknown[]
  faqItems?: FaqItem[]
  seo?: SeoFields
}

// ── Areas We Serve ────────────────────────────────────────────────────────────

export interface AreaItem {
  cityName: string
  shortDescription?: string
  locationPage?: {
    _id: string
    cityName: string
    slug: { current: string }
  }
}

export interface AreasWeServeDoc {
  _id: string
  _type: 'areasWeServe'
  sectionHeading?: string
  sectionSubtext?: string
  areas?: AreaItem[]
}

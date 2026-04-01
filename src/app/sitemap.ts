import type { MetadataRoute } from 'next'
import { client } from '@/sanity/client'

const SITE_URL = 'https://www.beeviral.co.uk'

// ── Static pages ──────────────────────────────────────────────────────────────

const staticPages: MetadataRoute.Sitemap = [
  { url: SITE_URL,                          priority: 1.0, changeFrequency: 'weekly'  },
  { url: `${SITE_URL}/about`,               priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/services`,            priority: 0.9, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/services/social-media-management`, priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/services/paid-advertising`,        priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/services/content-creation`,        priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/services/local-seo`,               priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/services/social-media-strategy`,   priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/services/social-media-audit`,      priority: 0.8, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/packages`,            priority: 0.9, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/case-studies`,        priority: 0.8, changeFrequency: 'weekly'  },
  { url: `${SITE_URL}/portfolio`,           priority: 0.7, changeFrequency: 'monthly' },
  { url: `${SITE_URL}/blog`,                priority: 0.8, changeFrequency: 'daily'   },
  { url: `${SITE_URL}/contact`,             priority: 0.7, changeFrequency: 'yearly'  },
]

// ── Dynamic content from Sanity ───────────────────────────────────────────────

async function fetchDynamicEntries(): Promise<MetadataRoute.Sitemap> {
  try {
    const [blogPosts, caseStudies, services, pages] = await Promise.all([
      client.fetch<{ slug: string; updatedAt: string }[]>(
        `*[_type == "blog" && status == "published"] {
          "slug": slug.current,
          "updatedAt": _updatedAt
        }`
      ),
      client.fetch<{ slug: string; updatedAt: string }[]>(
        `*[_type == "caseStudy" && status == "published"] {
          "slug": slug.current,
          "updatedAt": _updatedAt
        }`
      ),
      client.fetch<{ slug: string; updatedAt: string }[]>(
        `*[_type == "service" && status == "published"] {
          "slug": slug.current,
          "updatedAt": _updatedAt
        }`
      ),
      client.fetch<{ slug: string; updatedAt: string }[]>(
        `*[_type == "page" && status == "published"] {
          "slug": slug.current,
          "updatedAt": _updatedAt
        }`
      ),
    ])

    const blogEntries: MetadataRoute.Sitemap = blogPosts.map((p) => ({
      url:             `${SITE_URL}/blog/${p.slug}`,
      lastModified:    p.updatedAt ? new Date(p.updatedAt) : new Date(),
      priority:        0.7,
      changeFrequency: 'weekly',
    }))

    const caseStudyEntries: MetadataRoute.Sitemap = caseStudies.map((p) => ({
      url:             `${SITE_URL}/case-studies/${p.slug}`,
      lastModified:    p.updatedAt ? new Date(p.updatedAt) : new Date(),
      priority:        0.7,
      changeFrequency: 'monthly',
    }))

    const serviceEntries: MetadataRoute.Sitemap = services.map((p) => ({
      url:             `${SITE_URL}/services/${p.slug}`,
      lastModified:    p.updatedAt ? new Date(p.updatedAt) : new Date(),
      priority:        0.8,
      changeFrequency: 'monthly',
    }))

    const pageEntries: MetadataRoute.Sitemap = pages.map((p) => ({
      url:             `${SITE_URL}/${p.slug}`,
      lastModified:    p.updatedAt ? new Date(p.updatedAt) : new Date(),
      priority:        0.6,
      changeFrequency: 'monthly',
    }))

    return [...blogEntries, ...caseStudyEntries, ...serviceEntries, ...pageEntries]
  } catch {
    // If Sanity is unavailable (e.g. env vars not yet set), return empty —
    // the static pages are still included
    return []
  }
}

// ── Sitemap export ────────────────────────────────────────────────────────────

export const revalidate = 3600 // regenerate at most once per hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const dynamic = await fetchDynamicEntries()

  // Deduplicate: build a map keyed by URL so static entries always win
  const map = new Map<string, MetadataRoute.Sitemap[number]>()

  for (const entry of [...staticPages, ...dynamic]) {
    if (!map.has(entry.url)) {
      map.set(entry.url, entry)
    }
  }

  return Array.from(map.values())
}

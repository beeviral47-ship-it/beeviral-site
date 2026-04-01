import { client } from './client'
import type { BlogPost, ServiceDoc, CaseStudyDoc, PageDoc } from './types'

// ── SEO fragment (reused in every query) ──────────────────────────────────────

const SEO_FRAGMENT = `
  seo {
    metaTitle,
    metaDescription,
    ogImage { asset, hotspot },
    canonicalUrl,
    noindex,
    structuredData
  }
`

// ── Blog ──────────────────────────────────────────────────────────────────────

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return client.fetch(
    `*[_type == "blog"] | order(publishedAt desc) {
      _id, _type, title, slug, author, publishedAt, excerpt, coverImage { asset, hotspot, alt }
    }`
  )
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  return client.fetch(
    `*[_type == "blog" && slug.current == $slug][0] {
      _id, _type, title, slug, author, publishedAt, excerpt,
      coverImage { asset, hotspot, alt },
      body,
      ${SEO_FRAGMENT}
    }`,
    { slug }
  )
}

export async function getAllBlogSlugs(): Promise<string[]> {
  const results: { slug: { current: string } }[] = await client.fetch(
    `*[_type == "blog"] { slug }`
  )
  return results.map((r) => r.slug.current)
}

// ── Services ──────────────────────────────────────────────────────────────────

export async function getAllServices(): Promise<ServiceDoc[]> {
  return client.fetch(
    `*[_type == "service"] | order(_createdAt asc) {
      _id, _type, title, slug, tagline, description, icon, features
    }`
  )
}

export async function getService(slug: string): Promise<ServiceDoc | null> {
  return client.fetch(
    `*[_type == "service" && slug.current == $slug][0] {
      _id, _type, title, slug, tagline, description, icon, features, body,
      ${SEO_FRAGMENT}
    }`,
    { slug }
  )
}

// ── Case Studies ──────────────────────────────────────────────────────────────

export async function getAllCaseStudies(): Promise<CaseStudyDoc[]> {
  return client.fetch(
    `*[_type == "caseStudy"] | order(_createdAt asc) {
      _id, _type, title, slug, client, industry, location, tagline,
      coverImage { asset, hotspot, alt }
    }`
  )
}

export async function getCaseStudy(slug: string): Promise<CaseStudyDoc | null> {
  return client.fetch(
    `*[_type == "caseStudy" && slug.current == $slug][0] {
      _id, _type, title, slug, client, industry, location, tagline,
      coverImage { asset, hotspot, alt },
      challenge, approach, results, metrics, testimonial,
      ${SEO_FRAGMENT}
    }`,
    { slug }
  )
}

// ── Pages ─────────────────────────────────────────────────────────────────────

export async function getPage(slug: string): Promise<PageDoc | null> {
  return client.fetch(
    `*[_type == "page" && slug.current == $slug][0] {
      _id, _type, title, slug, body,
      ${SEO_FRAGMENT}
    }`,
    { slug }
  )
}

import { client } from './client'
import type { BlogPost, ServiceDoc, CaseStudyDoc, PageDoc, Category } from './types'

// ── SEO fragment (reused in every query) ──────────────────────────────────────

const SEO_FRAGMENT = `
  seo {
    metaTitle,
    metaDescription,
    canonicalUrl,
    noindex,
    ogTitle,
    ogDescription,
    ogImage { asset, hotspot },
    schemaType,
    structuredData
  }
`

// ── Featured image fragment ───────────────────────────────────────────────────

const IMAGE_FRAGMENT = `featuredImage { asset, hotspot, alt }`

// ── Category fragment ─────────────────────────────────────────────────────────

const CATEGORY_FRAGMENT = `
  categories[]-> {
    _id, _type, name,
    slug { current }
  }
`

// ── Blog ──────────────────────────────────────────────────────────────────────

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return client.fetch(
    `*[_type == "blog" && status == "published"] | order(publishedAt desc) {
      _id, _type, status, title, slug, author, publishedAt, excerpt,
      ${IMAGE_FRAGMENT},
      ${CATEGORY_FRAGMENT}
    }`
  )
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  return client.fetch(
    `*[_type == "blog" && status == "published" && slug.current == $slug][0] {
      _id, _type, status, title, slug, author, publishedAt, excerpt,
      ${IMAGE_FRAGMENT},
      ${CATEGORY_FRAGMENT},
      body,
      ${SEO_FRAGMENT}
    }`,
    { slug }
  )
}

export async function getAllBlogSlugs(): Promise<string[]> {
  const results: { slug: { current: string } }[] = await client.fetch(
    `*[_type == "blog" && status == "published"] { slug }`
  )
  return results.map((r) => r.slug.current)
}

export async function getBlogPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  return client.fetch(
    `*[_type == "blog" && status == "published" && $categorySlug in categories[]->slug.current]
     | order(publishedAt desc) {
       _id, _type, status, title, slug, author, publishedAt, excerpt,
       ${IMAGE_FRAGMENT},
       ${CATEGORY_FRAGMENT}
     }`,
    { categorySlug }
  )
}

// ── Categories ────────────────────────────────────────────────────────────────

export async function getAllCategories(): Promise<Category[]> {
  return client.fetch(
    `*[_type == "category"] | order(name asc) {
      _id, _type, name, slug, description
    }`
  )
}

export async function getCategory(slug: string): Promise<Category | null> {
  return client.fetch(
    `*[_type == "category" && slug.current == $slug][0] {
      _id, _type, name, slug, description
    }`,
    { slug }
  )
}

// ── Services ──────────────────────────────────────────────────────────────────

export async function getAllServices(): Promise<ServiceDoc[]> {
  return client.fetch(
    `*[_type == "service" && status == "published"] | order(_createdAt asc) {
      _id, _type, status, title, slug, tagline, description, icon, features,
      ${IMAGE_FRAGMENT}
    }`
  )
}

export async function getService(slug: string): Promise<ServiceDoc | null> {
  return client.fetch(
    `*[_type == "service" && status == "published" && slug.current == $slug][0] {
      _id, _type, status, title, slug, tagline, description, icon, features,
      ${IMAGE_FRAGMENT},
      body,
      ${SEO_FRAGMENT}
    }`,
    { slug }
  )
}

// ── Case Studies ──────────────────────────────────────────────────────────────

export async function getAllCaseStudies(): Promise<CaseStudyDoc[]> {
  return client.fetch(
    `*[_type == "caseStudy" && status == "published"] | order(_createdAt asc) {
      _id, _type, status, title, slug, client, industry, location, tagline,
      ${IMAGE_FRAGMENT}
    }`
  )
}

export async function getCaseStudy(slug: string): Promise<CaseStudyDoc | null> {
  return client.fetch(
    `*[_type == "caseStudy" && status == "published" && slug.current == $slug][0] {
      _id, _type, status, title, slug, client, industry, location, tagline,
      ${IMAGE_FRAGMENT},
      challenge, approach, results, metrics, testimonial,
      ${SEO_FRAGMENT}
    }`,
    { slug }
  )
}

// ── Pages ─────────────────────────────────────────────────────────────────────

export async function getPage(slug: string): Promise<PageDoc | null> {
  return client.fetch(
    `*[_type == "page" && status == "published" && slug.current == $slug][0] {
      _id, _type, status, title, slug, body,
      ${SEO_FRAGMENT}
    }`,
    { slug }
  )
}

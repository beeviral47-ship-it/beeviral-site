import { client, previewClient } from './client'
import type { BlogPost, ServiceDoc, CaseStudyDoc, PageDoc, Category, LocationPageDoc, AreasWeServeDoc } from './types'

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
    `*[_type == "blog"] | order(publishedAt desc) {
      _id, _type, status, title, slug, author, publishedAt, excerpt,
      ${IMAGE_FRAGMENT},
      ${CATEGORY_FRAGMENT}
    }`,
    {},
    { next: { revalidate: 3600 } }
  )
}

export async function getBlogPost(slug: string, preview = false): Promise<BlogPost | null> {
  const c = preview ? previewClient : client.withConfig({ useCdn: false })
  return c.fetch(
    `*[_type == "blog" && slug.current == $slug][0] {
      _id, _type, status, title, slug, author, publishedAt, excerpt,
      ${IMAGE_FRAGMENT},
      ${CATEGORY_FRAGMENT},
      body,
      ${SEO_FRAGMENT}
    }`,
    { slug },
    preview ? { cache: 'no-store' } : { next: { revalidate: 300 } }
  )
}

export async function getAllBlogSlugs(): Promise<string[]> {
  const results: { slug: { current: string } }[] = await client.fetch(
    `*[_type == "blog"] { slug }`,
    {},
    { next: { revalidate: 3600 } }
  )
  return results.map((r) => r.slug.current)
}

export async function getBlogPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  return client.fetch(
    `*[_type == "blog" && $categorySlug in categories[]->slug.current]
     | order(publishedAt desc) {
       _id, _type, status, title, slug, author, publishedAt, excerpt,
       ${IMAGE_FRAGMENT},
       ${CATEGORY_FRAGMENT}
     }`,
    { categorySlug },
    { next: { revalidate: 3600 } }
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

// ── Location Pages ────────────────────────────────────────────────────────────

export async function getAllLocationSlugs(): Promise<string[]> {
  const results: { slug: { current: string } }[] = await client.fetch(
    `*[_type == "locationPage"] { slug }`
  )
  return results.map((r) => r.slug.current)
}

export async function getAllLocationPages(): Promise<Pick<LocationPageDoc, '_id' | 'cityName' | 'slug' | 'heroSubtext'>[]> {
  return client.fetch(
    `*[_type == "locationPage"] | order(cityName asc) {
      _id, cityName, slug, heroSubtext
    }`
  )
}

export async function getLocationPage(slug: string): Promise<LocationPageDoc | null> {
  return client.fetch(
    `*[_type == "locationPage" && slug.current == $slug][0] {
      _id, _type, cityName, slug, heroHeadline, heroSubtext, servicesOffered, body, faqItems,
      ${SEO_FRAGMENT}
    }`,
    { slug }
  )
}

// ── Areas We Serve (singleton) ────────────────────────────────────────────────

export async function getAreasWeServe(): Promise<AreasWeServeDoc | null> {
  // No _id filter — matches the document regardless of whether it was created
  // through the singleton pane (id="areasWeServe") or with a generated id.
  // useCdn: false bypasses the Sanity CDN so newly published content is visible
  // immediately without waiting for CDN propagation.
  return client.fetch(
    `*[_type == "areasWeServe"][0] {
      _id, _type, sectionHeading, sectionSubtext,
      areas[] {
        cityName, shortDescription,
        locationPage-> { _id, cityName, slug { current } }
      }
    }`,
    {},
    { useCdn: false }
  )
}

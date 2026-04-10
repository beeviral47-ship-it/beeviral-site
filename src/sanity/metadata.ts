import type { Metadata } from 'next'
import type { SeoFields } from './types'
import { urlFor } from './image'

interface BuildMetaOptions {
  /** Fallback title if seo.metaTitle is not set */
  title: string
  /** Fallback description if seo.metaDescription is not set */
  description?: string
  /** Canonical path — e.g. '/blog/my-post' */
  path: string
  seo?: SeoFields
}

const BASE_URL = 'https://www.beeviral.co.uk'

export function buildMetadata({
  title,
  description,
  path,
  seo,
}: BuildMetaOptions): Metadata {

  // ── Search ──────────────────────────────────────────────────────────────────
  const metaTitle       = seo?.metaTitle       ?? title
  const metaDescription = seo?.metaDescription ?? description
  const canonical       = seo?.canonicalUrl    ?? `${BASE_URL}${path}`
  const noindex         = seo?.noindex         ?? false

  // ── Open Graph — separate title/description with their own fallback chain ──
  // ogTitle → metaTitle → page title
  const ogTitle       = seo?.ogTitle       ?? metaTitle
  // ogDescription → metaDescription → page description
  const ogDescription = seo?.ogDescription ?? metaDescription ?? ''

  const ogImageUrl = seo?.ogImage
    ? urlFor(seo.ogImage).width(1200).height(630).url()
    : undefined

  // ── JSON-LD ──────────────────────────────────────────────────────────────────
  // If no custom structuredData but a schemaType is set, emit a minimal schema
  let jsonLd: string | undefined = seo?.structuredData

  if (!jsonLd && seo?.schemaType) {
    jsonLd = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': seo.schemaType,
      name: ogTitle,
      description: ogDescription || undefined,
      url: canonical,
    })
  }

  return {
    title: { absolute: metaTitle },
    description: metaDescription,
    alternates: { canonical },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true,  follow: true  },
    openGraph: {
      title:       ogTitle,
      description: ogDescription,
      url:         canonical,
      siteName:    'Bee Viral',
      ...(ogImageUrl && {
        images: [{ url: ogImageUrl, width: 1200, height: 630, alt: ogTitle }],
      }),
    },
    twitter: {
      card:        'summary_large_image',
      title:       ogTitle,
      description: ogDescription,
      ...(ogImageUrl && { images: [ogImageUrl] }),
    },
    // JSON-LD is injected as a <script> tag in the page, not via Metadata —
    // see the blog post page for the pattern. The value is returned here so
    // pages can access it if they want to render it themselves.
    other: jsonLd ? { 'json-ld': jsonLd } : undefined,
  }
}

/**
 * Returns the resolved JSON-LD string for a given set of SEO fields.
 * Use this to render <script type="application/ld+json"> in page components.
 */
export function buildJsonLd(
  seo: SeoFields | undefined,
  fallback: { title: string; description?: string; url: string }
): string | null {
  if (seo?.structuredData) return seo.structuredData

  if (seo?.schemaType) {
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@type':    seo.schemaType,
      name:        seo.metaTitle       ?? fallback.title,
      description: seo.metaDescription ?? fallback.description,
      url:         seo.canonicalUrl    ?? fallback.url,
    })
  }

  return null
}

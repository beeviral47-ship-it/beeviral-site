import type { Metadata } from 'next'
import type { SeoFields } from './types'
import { urlFor } from './image'

interface BuildMetaOptions {
  /** Fallback title shown if seo.metaTitle is not set */
  title: string
  /** Fallback description */
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
  const metaTitle       = seo?.metaTitle       ?? title
  const metaDescription = seo?.metaDescription ?? description
  const canonical       = seo?.canonicalUrl    ?? `${BASE_URL}${path}`
  const noindex         = seo?.noindex         ?? false

  const ogImageUrl = seo?.ogImage
    ? urlFor(seo.ogImage).width(1200).height(630).url()
    : undefined

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: { canonical },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: metaTitle,
      description: metaDescription ?? '',
      url: canonical,
      siteName: 'Bee Viral',
      ...(ogImageUrl && {
        images: [{ url: ogImageUrl, width: 1200, height: 630, alt: metaTitle }],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription ?? '',
      ...(ogImageUrl && { images: [ogImageUrl] }),
    },
  }
}

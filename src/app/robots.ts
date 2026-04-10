import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio', '/dashboard', '/api/'],
      },
    ],
    sitemap: 'https://www.beeviral.co.uk/sitemap.xml',
  }
}

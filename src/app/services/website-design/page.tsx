import type { Metadata } from 'next'
import WebsiteDesignContent from './WebsiteDesignContent'

export const metadata: Metadata = {
  title: 'Website Design & Build South Yorkshire | Bee Viral',
  description:
    'Custom mobile-first websites for local businesses in South Yorkshire. Built on Next.js, SEO-ready, with Sanity CMS included. From £800 one-time setup.',
}

export default function WebsiteDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Website Design & Build',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Bee Viral',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Wath upon Dearne',
                addressRegion: 'South Yorkshire',
                addressCountry: 'GB',
              },
            },
            areaServed: ['South Yorkshire', 'Rotherham', 'Barnsley', 'Wath'],
            description:
              'Professional website design and build for local businesses in South Yorkshire.',
            url: 'https://www.beeviral.co.uk/services/website-design',
          }),
        }}
      />
      <WebsiteDesignContent />
    </>
  )
}

import type { Metadata } from 'next'
import LocalSEOContent from './LocalSEOContent'

export const metadata: Metadata = {
  title: 'Local SEO & Content Marketing South Yorkshire',
  description:
    'Get found on Google by local customers. We optimise your website, Google Business profile, and publish monthly SEO blog content for businesses across South Yorkshire.',
}

export default function LocalSEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Local SEO',
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
              'Local SEO services for businesses in South Yorkshire, Rotherham, Barnsley & Wath.',
            url: 'https://www.beeviral.co.uk/services/local-seo',
          }),
        }}
      />
      <LocalSEOContent />
    </>
  )
}

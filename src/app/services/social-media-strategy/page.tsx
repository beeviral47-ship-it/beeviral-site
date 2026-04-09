import type { Metadata } from 'next'
import SocialMediaStrategyContent from './SocialMediaStrategyContent'

export const metadata: Metadata = {
  title: 'Social Media Strategy South Yorkshire',
  description:
    'Data-driven social media strategy for local businesses in South Yorkshire. We build a clear plan aligned to your business goals — not random posting.',
}

export default function SocialMediaStrategyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Social Media Strategy',
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
              'Bespoke social media strategy for local businesses in South Yorkshire.',
            url: 'https://www.beeviral.co.uk/services/social-media-strategy',
          }),
        }}
      />
      <SocialMediaStrategyContent />
    </>
  )
}

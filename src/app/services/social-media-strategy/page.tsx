import type { Metadata } from 'next'
import SocialMediaStrategyContent from './SocialMediaStrategyContent'

export const metadata: Metadata = {
  title: 'Social Media Strategy for Local Businesses in South Yorkshire | Bee Viral',
  description:
    'Bespoke social media strategy for local businesses in South Yorkshire, Rotherham, Barnsley & Wath. A clear plan aligned to your goals, audience and local market.',
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

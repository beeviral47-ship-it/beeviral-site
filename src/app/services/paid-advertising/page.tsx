import type { Metadata } from 'next'
import PaidAdvertisingContent from './PaidAdvertisingContent'

export const metadata: Metadata = {
  title: 'Facebook & Instagram Ads for Local Businesses in South Yorkshire | Bee Viral',
  description:
    'Targeted Facebook and Instagram ad campaigns for local businesses in South Yorkshire, Rotherham, Barnsley & Wath. We generate leads, drive footfall and deliver real ROI.',
}

export default function PaidAdvertisingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Paid Social Advertising',
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
              'Targeted Facebook and Instagram ad campaigns for local businesses in South Yorkshire.',
            url: 'https://www.beeviral.co.uk/services/paid-advertising',
          }),
        }}
      />
      <PaidAdvertisingContent />
    </>
  )
}

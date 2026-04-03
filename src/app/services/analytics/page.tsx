import type { Metadata } from 'next'
import AnalyticsContent from './AnalyticsContent'

export const metadata: Metadata = {
  title: 'Analytics & Reporting South Yorkshire | Bee Viral',
  description:
    'Clear monthly reports showing exactly what\'s working for your business — reach, engagement, leads, and ROI. Bee Viral, South Yorkshire.',
}

export default function AnalyticsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Analytics & Reporting',
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
              'Clear monthly reports showing exactly what\'s working for your business — reach, engagement, leads, and ROI.',
            url: 'https://www.beeviral.co.uk/services/analytics',
          }),
        }}
      />
      <AnalyticsContent />
    </>
  )
}

import type { Metadata } from 'next'
import ContentCreationContent from './ContentCreationContent'

export const metadata: Metadata = {
  title: 'Social Media Content Creation for South Yorkshire Businesses | Bee Viral',
  description:
    'Professional social media content creation for local businesses in South Yorkshire. Branded graphics, Reels, captions and more — designed to stop the scroll and grow your audience.',
}

export default function ContentCreationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Social Media Content Creation',
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
              'Professional social media content creation for local businesses in South Yorkshire.',
            url: 'https://www.beeviral.co.uk/services/content-creation',
          }),
        }}
      />
      <ContentCreationContent />
    </>
  )
}

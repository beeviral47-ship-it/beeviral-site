import type { Metadata } from 'next'
import SocialMediaManagementContent from './SocialMediaManagementContent'

export const metadata: Metadata = {
  title: 'Social Media Management in South Yorkshire | Bee Viral',
  description:
    'Professional social media management for local businesses in South Yorkshire, Rotherham, Barnsley & Wath. Consistent posting, branded content & community engagement from £120/mo.',
}

export default function SocialMediaManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Social Media Management',
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
              'Professional social media management for local businesses in South Yorkshire.',
            url: 'https://www.beeviral.co.uk/services/social-media-management',
          }),
        }}
      />
      <SocialMediaManagementContent />
    </>
  )
}

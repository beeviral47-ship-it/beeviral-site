import type { Metadata } from 'next'
import SocialMediaAuditContent from './SocialMediaAuditContent'

export const metadata: Metadata = {
  title: 'Social Media Audit South Yorkshire | Bee Viral',
  description:
    'Full audit of your social media presence. We identify exactly what\'s holding your business back and give you a clear action plan. Free for South Yorkshire businesses.',
}

export default function SocialMediaAuditPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Social Media Audit',
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
              'Free social media audit for local businesses in South Yorkshire.',
            url: 'https://www.beeviral.co.uk/services/social-media-audit',
          }),
        }}
      />
      <SocialMediaAuditContent />
    </>
  )
}

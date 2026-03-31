import type { Metadata } from 'next'
import SocialMediaAuditContent from './SocialMediaAuditContent'

export const metadata: Metadata = {
  title: 'Social Media Audit for South Yorkshire Businesses | Bee Viral',
  description:
    'Free social media audit for local businesses in South Yorkshire, Rotherham, Barnsley & Wath. We review your accounts, identify gaps, and tell you exactly how to improve.',
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

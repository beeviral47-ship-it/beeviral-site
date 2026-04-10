import type { Metadata } from 'next'
import BookingSystemsContent from './BookingSystemsContent'

export const metadata: Metadata = {
  title: 'Online Booking Systems for Local Businesses',
  description:
    'Custom online booking systems for salons, beauty studios, fitness businesses and local services in South Yorkshire. Automated reminders and cancellations built in.',
}

export default function BookingSystemsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Booking Systems & Automation',
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
              'Custom online booking systems and automation for local businesses in South Yorkshire.',
            url: 'https://www.beeviral.co.uk/services/booking-systems',
          }),
        }}
      />
      <BookingSystemsContent />
    </>
  )
}

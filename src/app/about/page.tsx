import type { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About Bee Viral | South Yorkshire\'s Local Business Growth Agency',
  description:
    'Learn about Bee Viral — founded by Tahir Azam in South Yorkshire. We build websites, booking systems, manage social media and SEO for local businesses across Rotherham, Barnsley, Sheffield and Wath.',
}

export default function AboutPage() {
  return <AboutContent />
}

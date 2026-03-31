import type { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Bee Viral — South Yorkshire\'s social media marketing agency founded in 2014. Over 200 local businesses helped across Wath, Rotherham and Barnsley.',
}

export default function AboutPage() {
  return <AboutContent />
}

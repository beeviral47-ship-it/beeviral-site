import type { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About Bee Viral | South Yorkshire\'s Trusted Digital Marketing Agency',
  description:
    'Meet the team behind Bee Viral. Founded by Tahir Azam, backed by 10+ years of real-world digital marketing experience. We\'ve helped 200+ South Yorkshire businesses grow online — no fluff, no jargon. Serving Rotherham, Barnsley, Sheffield & beyond.',
}

export default function AboutPage() {
  return <AboutContent />
}

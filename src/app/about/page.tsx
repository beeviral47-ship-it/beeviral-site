import type { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About Bee Viral | South Yorkshire\'s Trusted Digital Marketing Agency',
  description:
    'Meet the team behind Bee Viral. Founded by Tahir Azam in 2014, we\'ve helped 200+ South Yorkshire businesses grow online with real results — no fluff, no jargon. Based in Wath, serving Rotherham, Barnsley, Sheffield & beyond.',
}

export default function AboutPage() {
  return <AboutContent />
}

import type { Metadata } from 'next'
import WritingSystemTracker from './WritingSystemTracker'

export const metadata: Metadata = {
  title: 'SEO Writing System | Bee Viral Dashboard',
  robots: { index: false, follow: false },
}

export default function WritingSystemPage() {
  return <WritingSystemTracker />
}

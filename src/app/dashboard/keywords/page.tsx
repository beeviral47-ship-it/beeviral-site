import type { Metadata } from 'next'
import KeywordsTracker from './KeywordsTracker'

export const metadata: Metadata = {
  title: 'Keyword & Content Plan | Bee Viral Dashboard',
  robots: { index: false, follow: false },
}

export default function KeywordsPage() {
  return <KeywordsTracker />
}

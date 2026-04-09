import type { Metadata } from 'next'
import SeoStrategyTracker from './SeoStrategyTracker'

export const metadata: Metadata = {
  title: 'SEO Strategy Tracker | Bee Viral Dashboard',
  robots: { index: false, follow: false },
}

export default function SeoStrategyPage() {
  return <SeoStrategyTracker />
}

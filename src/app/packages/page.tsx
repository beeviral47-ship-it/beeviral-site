import type { Metadata } from 'next'
import PackagesContent from './PackagesContent'

export const metadata: Metadata = {
  title: 'Packages & Pricing',
  description:
    'Transparent social media marketing packages for local businesses in South Yorkshire. Starter from £120/mo, Growth from £150/mo, Hive from £200/mo. No contracts. Cancel anytime.',
}

export default function PackagesPage() {
  return <PackagesContent />
}

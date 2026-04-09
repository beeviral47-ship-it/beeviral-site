import type { Metadata } from 'next'
import PackagesContent from './PackagesContent'

export const metadata: Metadata = {
  title: 'Pricing & Packages — South Yorkshire',
  description:
    'Simple, transparent pricing for local businesses in South Yorkshire. Social media management from £120/month. Full website and booking systems from £800. No contracts, cancel anytime.',
}

export default function PackagesPage() {
  return <PackagesContent />
}

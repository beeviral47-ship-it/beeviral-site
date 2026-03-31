import type { Metadata } from 'next'
import CaseStudiesContent from './CaseStudiesContent'

export const metadata: Metadata = {
  title: 'Case Studies — Real Results for South Yorkshire Businesses',
  description:
    'See how Bee Viral has helped restaurants, gyms, tradespeople, salons and more across Wath, Rotherham, Barnsley and Sheffield generate more leads through social media.',
}

export default function CaseStudiesPage() {
  return <CaseStudiesContent />
}

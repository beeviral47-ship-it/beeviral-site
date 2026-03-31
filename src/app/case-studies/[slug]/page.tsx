import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { caseStudies } from '@/lib/case-studies-data'
import CaseStudyContent from './CaseStudyContent'

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) return {}
  return { title: cs.seoTitle, description: cs.metaDescription }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) notFound()
  return <CaseStudyContent caseStudy={cs} />
}

export const revalidate = 3600 // re-generate at most once per hour

import dynamic from 'next/dynamic'
import HeroSection from '@/components/home/HeroSection'
import AreasWeServeSection from '@/components/home/AreasWeServeSection'
import { getAreasWeServe } from '@/sanity/queries'

// Below-the-fold sections are code-split into separate JS chunks.
// HTML is still server-rendered for SEO; only the JS is deferred.
const StatsSection        = dynamic(() => import('@/components/home/StatsSection'))
const ServicesSection     = dynamic(() => import('@/components/home/ServicesSection'))
const WhySection          = dynamic(() => import('@/components/home/WhySection'))
const PortfolioPreview    = dynamic(() => import('@/components/home/PortfolioPreview'))
const TestimonialsSection = dynamic(() => import('@/components/home/TestimonialsSection'))
const CTASection          = dynamic(() => import('@/components/home/CTASection'))

export default async function HomePage() {
  const areasWeServe = await getAreasWeServe()

  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhySection />
      {areasWeServe && <AreasWeServeSection data={areasWeServe} />}
      <PortfolioPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}

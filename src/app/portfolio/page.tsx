import type { Metadata } from 'next'
import PortfolioContent from './PortfolioContent'

export const metadata: Metadata = {
  title: 'Our Portfolio — Content That Stops the Scroll',
  description:
    'See the creative work Bee Viral produces for local businesses across South Yorkshire — branded posts, Reels, ad creatives, stories, and more.',
}

export default function PortfolioPage() {
  return <PortfolioContent />
}

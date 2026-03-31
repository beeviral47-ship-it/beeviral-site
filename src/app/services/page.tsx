import type { Metadata } from 'next'
import ServicesContent from './ServicesContent'

export const metadata: Metadata = {
  title: 'Social Media Marketing Services in South Yorkshire',
  description:
    'Social media management, paid advertising, content creation, and local SEO for businesses across Wath, Rotherham, Barnsley and South Yorkshire. Get your free audit today.',
}

export default function ServicesPage() {
  return <ServicesContent />
}

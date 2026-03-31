import type { Metadata } from 'next'
import { Sora, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import { AuditModalProvider } from '@/components/providers/AuditModalProvider'

// ─── Fonts ───────────────────────────────────────────────────────────────────
const sora = Sora({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.beeviral.co.uk'

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: 'Bee Viral | Social Media Marketing Agency in South Yorkshire',
    template: '%s | Bee Viral',
  },
  description:
    'We help local businesses in Wath, Rotherham and Barnsley grow through social media management, paid advertising and content creation.',
  keywords: [
    'social media marketing agency South Yorkshire',
    'social media management Rotherham',
    'social media management Barnsley',
    'social media management Wath',
    'paid advertising South Yorkshire',
    'content creation agency',
    'Instagram marketing',
    'Facebook ads',
    'TikTok marketing',
    'local business digital marketing',
  ],
  metadataBase: new URL(SITE_URL),
  authors:  [{ name: 'Bee Viral' }],
  creator:  'Bee Viral',

  // ── Canonical ─────────────────────────────────────────────────────────────
  alternates: {
    canonical: SITE_URL,
  },

  // ── Favicons & icons ───────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: '/favicon.ico',     sizes: 'any' },
      { url: '/favicon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple:    [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: [{ url: '/favicon.ico' }],
  },

  // ── Web app manifest ───────────────────────────────────────────────────────
  manifest: '/site.webmanifest',

  other: {
    'msapplication-TileColor': '#FFC512',
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type:        'website',
    locale:      'en_GB',
    url:         SITE_URL,
    siteName:    'Bee Viral',
    title:       'Bee Viral | Social Media Marketing Agency in South Yorkshire',
    description: 'We help local businesses in Wath, Rotherham and Barnsley grow through social media management, paid advertising and content creation.',
    images: [
      {
        url:    'https://www.beeviral.co.uk/og-image.png',
        width:  1200,
        height: 630,
        alt:    'Bee Viral — Social Media Marketing Agency in South Yorkshire',
      },
    ],
  },

  // ── Twitter / X ───────────────────────────────────────────────────────────
  twitter: {
    card:        'summary_large_image',
    title:       'Bee Viral | Social Media Marketing Agency in South Yorkshire',
    description: 'We help local businesses in Wath, Rotherham and Barnsley grow through social media management, paid advertising and content creation.',
    images:      ['https://www.beeviral.co.uk/og-image.png'],
  },

  robots: { index: true, follow: true },
}

// ─── Structured Data — LocalBusiness schema ───────────────────────────────────
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Bee Viral',
  url: SITE_URL,
  email: 'info@beeviral.co.uk',
  telephone: '07723079176',
  description:
    'We help local businesses in Wath, Rotherham and Barnsley grow through social media management, paid advertising and content creation.',
  areaServed: [
    { '@type': 'City', name: 'Wath-upon-Dearne' },
    { '@type': 'City', name: 'Rotherham' },
    { '@type': 'City', name: 'Barnsley' },
    { '@type': 'AdministrativeArea', name: 'South Yorkshire' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'South Yorkshire',
    addressCountry: 'GB',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Social Media Marketing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Management' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Paid Advertising' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Content Creation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO & Local Search' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Analytics & Reporting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Strategy' } },
    ],
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:30',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '07723079176',
    email: 'info@beeviral.co.uk',
    contactType: 'customer service',
    areaServed: 'GB',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://www.instagram.com/beeviralltd/',
    'https://www.facebook.com/profile.php?id=61583786462363',
  ],
}

// ─── Layout ──────────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`h-full ${sora.variable} ${inter.variable}`}>
      <head>
        {/* Theme colour — controls browser UI on mobile */}
        <meta name="theme-color" content="#FFC512" />
        <meta name="msapplication-TileColor" content="#FFC512" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full antialiased flex flex-col">
        <GoogleAnalytics />
        <AuditModalProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AuditModalProvider>
      </body>
    </html>
  )
}

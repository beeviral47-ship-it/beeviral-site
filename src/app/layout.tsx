import type { Metadata } from 'next'
import { Sora, Inter } from 'next/font/google'
import './globals.css'
import LayoutShell from '@/components/layout/LayoutShell'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'

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
    default: 'Bee Viral | Local Business Growth Agency — South Yorkshire',
    template: '%s | Bee Viral',
  },
  description:
    'Bee Viral helps local businesses in South Yorkshire grow online. We build websites, booking systems, manage social media, and deliver local SEO — all under one roof. Based in Wath, serving Rotherham, Barnsley, Sheffield and beyond.',
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
      { url: '/favicon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
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
    title:       'Bee Viral | Local Business Growth Agency — South Yorkshire',
    description: 'Bee Viral helps local businesses in South Yorkshire grow online. We build websites, booking systems, manage social media, and deliver local SEO — all under one roof. Based in Wath, serving Rotherham, Barnsley, Sheffield and beyond.',
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
    title:       'Bee Viral | Local Business Growth Agency — South Yorkshire',
    description: 'Bee Viral helps local businesses in South Yorkshire grow online. We build websites, booking systems, manage social media, and deliver local SEO — all under one roof. Based in Wath, serving Rotherham, Barnsley, Sheffield and beyond.',
    images:      ['https://www.beeviral.co.uk/og-image.png'],
  },

  robots: { index: true, follow: true },
}

// ─── Structured Data — MarketingAgency / LocalBusiness schema ────────────────
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['MarketingAgency', 'LocalBusiness'],
  '@id': 'https://www.beeviral.co.uk/#business',
  name: 'Bee Viral',
  alternateName: 'Bee Viral Social Media Agency',
  url: 'https://www.beeviral.co.uk',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.beeviral.co.uk/images/logo-transparent.png',
    width: 280,
    height: 140,
  },
  image: 'https://www.beeviral.co.uk/og-image.png',
  email: 'info@beeviral.co.uk',
  telephone: '+447723079176',
  description:
    'Bee Viral is a social media marketing agency based in South Yorkshire, helping local businesses grow through social media management, paid advertising, content creation, and SEO.',
  foundingDate: '2014',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Wath-upon-Dearne',
    addressRegion: 'South Yorkshire',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 53.5025,
    longitude: -1.3428,
  },
  areaServed: [
    { '@type': 'City',                name: 'Wath-upon-Dearne' },
    { '@type': 'City',                name: 'Rotherham'        },
    { '@type': 'City',                name: 'Barnsley'         },
    { '@type': 'City',                name: 'Sheffield'        },
    { '@type': 'AdministrativeArea',  name: 'South Yorkshire'  },
  ],
  priceRange: '££',
  currenciesAccepted: 'GBP',
  openingHoursSpecification: [
    {
      '@type':   'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens:     '09:00',
      closes:    '17:30',
    },
  ],
  contactPoint: {
    '@type':             'ContactPoint',
    telephone:           '+447723079176',
    email:               'info@beeviral.co.uk',
    contactType:         'customer service',
    areaServed:          'GB',
    availableLanguage:   'English',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Social Media Marketing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Management',  url: 'https://www.beeviral.co.uk/services/social-media-management'  } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Paid Advertising',         url: 'https://www.beeviral.co.uk/services/paid-advertising'         } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Content Creation',         url: 'https://www.beeviral.co.uk/services/content-creation'         } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO & Local Search',       url: 'https://www.beeviral.co.uk/services/local-seo'                } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Analytics & Reporting',    url: 'https://www.beeviral.co.uk/services/social-media-audit'       } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Strategy',           url: 'https://www.beeviral.co.uk/services/social-media-strategy'    } },
    ],
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
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  )
}

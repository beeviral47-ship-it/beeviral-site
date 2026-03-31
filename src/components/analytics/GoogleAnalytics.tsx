/**
 * GoogleAnalytics — mounts GA4 scripts and wires up route-change tracking.
 *
 * Server component (no 'use client'):
 *   • Renders <Script> tags only — no hooks, no hydration cost
 *   • Returns null entirely in development (NODE_ENV !== 'production')
 *   • Returns null if NEXT_PUBLIC_GA_ID is not set
 *
 * PageViewTracker is a client component that watches pathname changes.
 * It lives in a <Suspense> boundary because useSearchParams() requires one.
 */

import Script from 'next/script'
import { Suspense } from 'react'
import PageViewTracker from './PageViewTracker'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export default function GoogleAnalytics() {
  // ── Production guard ──────────────────────────────────────────────────────
  if (!GA_ID || process.env.NODE_ENV !== 'production') return null

  return (
    <>
      {/* Load the gtag.js library — deferred until page is interactive */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />

      {/* Initialise dataLayer and configure the property */}
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `,
        }}
      />

      {/*
        PageViewTracker fires a new page_view on every client-side navigation.
        Suspense is required because useSearchParams() suspends during SSR.
      */}
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
    </>
  )
}

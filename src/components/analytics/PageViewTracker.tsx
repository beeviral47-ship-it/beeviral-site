'use client'

/**
 * Fires a GA4 page_view event every time the pathname or search params change.
 * Must be a separate 'use client' file because useSearchParams() requires
 * a Suspense boundary in the Next.js App Router — the parent GoogleAnalytics
 * component wraps this in <Suspense fallback={null}>.
 */

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { trackPageView } from '@/lib/analytics'

export default function PageViewTracker() {
  const pathname     = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const qs  = searchParams.toString()
    const url = qs ? `${pathname}?${qs}` : pathname
    trackPageView(url)
  }, [pathname, searchParams])

  // Renders nothing — side-effects only
  return null
}

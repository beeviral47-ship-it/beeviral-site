/**
 * Analytics utility functions.
 *
 * All functions are no-ops when:
 *   - Running server-side (window is undefined)
 *   - window.gtag hasn't been initialised (dev mode / GA not loaded)
 *
 * Usage:
 *   import { trackButtonClick, trackFormSubmit } from '@/lib/analytics'
 */

// ─── Guard ────────────────────────────────────────────────────────────────────
function isGtagReady(): boolean {
  return typeof window !== 'undefined' && typeof window.gtag === 'function'
}

// ─── Page view ────────────────────────────────────────────────────────────────
/**
 * Send a manual page_view hit. Called automatically by PageViewTracker on
 * every route change — you rarely need to call this directly.
 */
export function trackPageView(url: string, title?: string): void {
  if (!isGtagReady()) return
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  if (!gaId) return

  window.gtag('config', gaId, {
    page_path:  url,
    page_title: title ?? document.title,
  })
}

// ─── Generic event ────────────────────────────────────────────────────────────
/**
 * Fire any GA4 event.
 *
 * @param action   GA4 event name, e.g. 'button_click'
 * @param params   Optional event parameters
 */
export function trackEvent(
  action: string,
  params?: {
    event_category?: string
    event_label?: string
    value?: number
    [key: string]: string | number | boolean | undefined
  }
): void {
  if (!isGtagReady()) return
  window.gtag('event', action, params)
}

// ─── Button / CTA click ───────────────────────────────────────────────────────
/**
 * Track a CTA or button click.
 *
 * @param buttonName  Human-readable label, e.g. 'Get Your Free Audit'
 * @param location    Where on the page, e.g. 'hero', 'cta_banner', 'navbar'
 */
export function trackButtonClick(buttonName: string, location: string): void {
  trackEvent('button_click', {
    event_category:  'CTA',
    event_label:     buttonName,
    button_name:     buttonName,
    button_location: location,
  })
}

// ─── Form submission ──────────────────────────────────────────────────────────
/**
 * Track a form submission.
 *
 * @param formName      e.g. 'contact_form', 'audit_request'
 * @param formLocation  e.g. 'contact_page', 'popup'
 */
export function trackFormSubmit(formName: string, formLocation = 'contact_page'): void {
  trackEvent('form_submit', {
    event_category: 'Form',
    event_label:    formName,
    form_name:      formName,
    form_location:  formLocation,
  })
}

// ─── Link click (outbound / social) ──────────────────────────────────────────
/**
 * Track a link click, e.g. social media icons in the footer.
 *
 * @param linkUrl   The destination URL
 * @param linkName  Human label, e.g. 'Instagram', 'Facebook'
 */
export function trackLinkClick(linkUrl: string, linkName: string): void {
  trackEvent('link_click', {
    event_category: 'Link',
    event_label:    linkName,
    value:          undefined,
    // GA4 recommended outbound link params
    link_url:       linkUrl,
    link_text:      linkName,
  } as Parameters<typeof trackEvent>[1])
}

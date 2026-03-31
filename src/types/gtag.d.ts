// Extends the browser Window interface so TypeScript knows window.gtag exists.
// Without this, every call to window.gtag would be a TS error.

type GtagCommand = 'config' | 'event' | 'js' | 'set' | 'consent'

interface GtagEventParams {
  // Standard GA4 event parameters
  event_category?: string
  event_label?: string
  value?: number
  page_path?: string
  page_title?: string
  // Button / CTA tracking
  button_name?: string
  button_location?: string
  // Form tracking
  form_name?: string
  form_location?: string
  // Allow any additional custom dimensions
  [key: string]: string | number | boolean | undefined
}

declare global {
  interface Window {
    gtag: (
      command: GtagCommand,
      targetId: string | Date,
      params?: GtagEventParams
    ) => void
    dataLayer: unknown[]
  }
}

export {}

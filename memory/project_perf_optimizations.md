---
name: Performance Optimizations Applied
description: Production performance optimizations completed in March 2026 — next.config.ts, lazy loading, accessibility, SEO
type: project
---

Implemented production performance optimizations targeting Lighthouse 90+/95+/100 scores.

**Why:** User requested full performance audit — image optimization, lazy loading, CSS minification, unused JS removal, accessibility and SEO hardening.

**How to apply:** These are complete. Do not re-implement or undo unless the user explicitly requests changes.

### Changes made (2026-03-31):

**next.config.ts:**
- `images.formats: ['image/avif', 'image/webp']` — AVIF-first serving with WebP fallback
- `images.minimumCacheTTL: 31536000` — 1-year image cache
- `experimental.inlineCss: true` — eliminates render-blocking CSS link for first-time visitors (Tailwind)
- `poweredByHeader: false` — removes X-Powered-By header

**src/app/page.tsx:**
- `next/dynamic` for all below-fold sections (StatsSection, ServicesSection, WhySection, PortfolioPreview, TestimonialsSection, CTASection)
- HeroSection remains statically imported (above fold)

**src/app/robots.ts** — added (generates /robots.txt)
**src/app/sitemap.ts** — added (generates /sitemap.xml with home + contact pages)

**Removed:** `@next/font` package (deprecated, was unused — project uses `next/font/google`)

**Accessibility (targeting 95+):**
- `aria-label="Main navigation"` on desktop nav
- `aria-label="Mobile navigation"` on mobile nav
- `aria-expanded={menuOpen}` + `aria-controls="mobile-menu"` on mobile toggle button
- `role="dialog"` + `aria-modal="true"` + `aria-hidden={!menuOpen}` on mobile overlay
- `aria-hidden="true"` on all decorative elements: blurs, gradients, honeycomb textures, wavy SVG underline, scroll indicator

**Image optimization:**
- `sizes="120px"` on Navbar logo
- `sizes="140px"` on Footer logo
- `sizes="(max-width: 1024px) 256px, 280px"` on WhySection logo
- All images already using `next/image` with lazy loading by default

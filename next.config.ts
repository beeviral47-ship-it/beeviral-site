import type { NextConfig } from 'next'

// ── Content Security Policy ───────────────────────────────────────────────────
// 'unsafe-inline' is required for Next.js inline hydration scripts and the
// GA gtag init snippet. For stricter protection, migrate to nonce-based CSP
// via a proxy.ts file (see Next.js CSP guide).
const isDev = process.env.NODE_ENV === 'development'

const cspHeader = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://www.googletagmanager.com https://www.google-analytics.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self'",
  "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://region1.google-analytics.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join('; ')

const nextConfig: NextConfig = {
  // ── Images ─────────────────────────────────────────────────────────────────
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },

  // ── Production hardening ───────────────────────────────────────────────────
  poweredByHeader: false,

  // ── Security headers ───────────────────────────────────────────────────────
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options',  value: 'nosniff' },
          { key: 'X-Frame-Options',          value: 'DENY' },
          { key: 'Referrer-Policy',          value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',       value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
          { key: 'Content-Security-Policy',  value: cspHeader },
        ],
      },
    ]
  },

  // ── CSS inlining (experimental) ─────────────────────────────────────────────
  experimental: {
    inlineCss: true,
  },
}

export default nextConfig

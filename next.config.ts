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

// Sanity Studio requires relaxed CSP (blob: workers, eval for hot reload, etc.)
const studioCspHeader = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https://fonts.gstatic.com https://fonts.googleapis.com",
  "connect-src 'self' https://*.sanity.io wss://*.sanity.io https://fonts.googleapis.com",
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
].join('; ')

const nextConfig: NextConfig = {
  // ── Images ─────────────────────────────────────────────────────────────────
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },

  // ── Production hardening ───────────────────────────────────────────────────
  poweredByHeader: false,

  // ── Security headers ───────────────────────────────────────────────────────
  async headers() {
    return [
      // Studio route — relaxed CSP required for Sanity Studio
      {
        source: '/studio/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: studioCspHeader },
        ],
      },
      // All other routes — strict CSP
      {
        source: '/((?!studio).*)',
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

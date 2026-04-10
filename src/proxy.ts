import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const CANONICAL_HOST = 'www.beeviral.co.uk'

export function proxy(request: NextRequest) {
  const host = request.headers.get('host') ?? ''

  // ── Redirect vercel.app preview domain → canonical ────────────────────────
  // Prevents beeviral-site.vercel.app from being indexed as duplicate content.
  if (host.endsWith('.vercel.app')) {
    const url = request.nextUrl.clone()
    url.protocol = 'https:'
    url.host = CANONICAL_HOST
    return NextResponse.redirect(url, { status: 301 })
  }

  // ── Studio basic-auth ─────────────────────────────────────────────────────
  if (request.nextUrl.pathname.startsWith('/studio')) {
    const password = process.env.STUDIO_PASSWORD

    // If STUDIO_PASSWORD is not set, allow through (dev / not yet configured)
    if (!password) return NextResponse.next()

    const authHeader = request.headers.get('authorization') ?? ''
    if (authHeader.startsWith('Basic ')) {
      const decoded  = Buffer.from(authHeader.slice(6), 'base64').toString('utf-8')
      const colonIdx = decoded.indexOf(':')
      const pass     = colonIdx >= 0 ? decoded.slice(colonIdx + 1) : ''
      if (pass === password) return NextResponse.next()
    }

    return new NextResponse('Unauthorised', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Bee Viral Studio", charset="UTF-8"' },
    })
  }

  return NextResponse.next()
}

export const config = {
  // Run on all paths so the vercel.app redirect fires site-wide.
  // Excludes static assets and Next.js internals for performance.
  matcher: [
    '/((?!_next/static|_next/image|favicon|images|icons|site.webmanifest).*)',
  ],
}

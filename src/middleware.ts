import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
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

export const config = {
  matcher: '/studio/:path*',
}

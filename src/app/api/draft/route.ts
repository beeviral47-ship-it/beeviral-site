import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

const pathMap: Record<string, (slug: string) => string> = {
  blog:         (slug) => `/blog/${slug}`,
  caseStudy:    (slug) => `/case-studies/${slug}`,
  service:      (slug) => `/services/${slug}`,
  locationPage: (slug) => `/locations/${slug}`,
  page:         (slug) => `/${slug}`,
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug   = searchParams.get('slug')
  const type   = searchParams.get('type') ?? 'blog'

  if (!secret || secret !== process.env.NEXT_PUBLIC_SANITY_PREVIEW_SECRET) {
    return new Response('Invalid preview secret', { status: 401 })
  }

  if (!slug) {
    return new Response('Missing slug parameter', { status: 400 })
  }

  const buildPath = pathMap[type]
  if (!buildPath) {
    return new Response('Unknown document type', { status: 400 })
  }

  ;(await draftMode()).enable()
  redirect(buildPath(slug))
}

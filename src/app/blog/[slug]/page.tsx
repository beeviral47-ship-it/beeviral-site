import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import { getBlogPost, getAllBlogSlugs } from '@/sanity/queries'
import { urlFor } from '@/sanity/image'
import { buildMetadata } from '@/sanity/metadata'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import BlogCTA from '@/components/blog/BlogCTA'

// ── Static params ─────────────────────────────────────────────────────────────
// dynamicParams = true (default) — slugs not in generateStaticParams are
// rendered on demand rather than returning 404. This means posts published
// after the last build are immediately accessible without a redeploy.
export const dynamicParams = true

// Revalidate every 5 minutes so content edits appear quickly.
export const revalidate = 300

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)
  if (!post) return {}
  return buildMetadata({
    title:       post.title,
    description: post.excerpt,
    path:        `/blog/${slug}`,
    seo:         post.seo,
  })
}

// ── Portable Text components ──────────────────────────────────────────────────

const ptComponents: PortableTextComponents = {
  block: {
    normal:     ({ children }) => <p className="mb-5 leading-relaxed text-white/75">{children}</p>,
    h2:         ({ children }) => <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#FFC512] mt-12 mb-5 tracking-tight">{children}</h2>,
    h3:         ({ children }) => <h3 className="font-display font-semibold text-xl text-white mt-8 mb-4 tracking-tight">{children}</h3>,
    h4:         ({ children }) => <h4 className="font-display font-semibold text-lg text-white mt-6 mb-3 tracking-tight">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#FFC512] pl-5 my-8 italic text-white/60 text-lg leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet:   ({ children }) => <ul className="list-disc list-outside pl-5 mb-5 space-y-2 text-white/75">{children}</ul>,
    number:   ({ children }) => <ol className="list-decimal list-outside pl-5 mb-5 space-y-2 text-white/75">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
    em:     ({ children }) => <em className="italic">{children}</em>,
    code:   ({ children }) => <code className="bg-white/10 text-[#FFC512] px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>,
    link:   ({ children, value }) => (
      <a
        href={value?.href}
        target={value?.blank ? '_blank' : undefined}
        rel={value?.blank ? 'noopener noreferrer' : undefined}
        className="text-[#FFC512] underline underline-offset-2 hover:text-white transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      const src = urlFor(value).width(1200).url()
      return (
        <figure className="my-10">
          <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
            <Image
              src={src}
              alt={value.alt ?? ''}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="text-center text-white/35 text-sm mt-3 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
}

// ── Page ──────────────────────────────────────────────────────────────────────

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { isEnabled: preview } = await draftMode()
  const post = await getBlogPost(slug, preview)
  if (!post) notFound()

  const coverUrl = post.featuredImage
    ? urlFor(post.featuredImage).width(896).height(504).url()
    : null

  return (
    <main className="bg-[#1a1a1a] min-h-screen">

      {/* Draft mode banner */}
      {preview && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-[#FFC512] text-[#1a1a1a] text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg">
          <span>Draft preview</span>
          <a href="/api/disable-draft" className="underline underline-offset-2 opacity-70 hover:opacity-100">
            Exit
          </a>
        </div>
      )}

      {/* Navbar spacer */}
      <div className="h-20 lg:h-24" aria-hidden="true" />

      {/* Article — all content including the featured image lives inside this container */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">

        {/* Back link */}
        <div className="pt-8 sm:pt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/40 hover:text-[#FFC512] text-sm font-medium transition-colors duration-200 mb-8"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>
        </div>

        {/* Meta */}
        <div className="flex items-center flex-wrap gap-3 sm:gap-4 text-white/35 text-xs sm:text-sm mb-5 font-normal">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} />
            {post.publishedAt ? formatDate(post.publishedAt) : 'Draft'}
          </span>
          <span className="flex items-center gap-1.5">
            <User size={13} />
            {post.author ?? 'Bee Viral'}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#FFC512] tracking-tight leading-tight mb-6 sm:mb-8">
          {post.title}
        </h1>

        {/* Featured image — contained, 16:9, within the article column */}
        {coverUrl && (
          <div className="relative w-full rounded-xl overflow-hidden mb-10" style={{ aspectRatio: '16/9' }}>
            <Image
              src={coverUrl}
              alt={post.featuredImage?.alt ?? post.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 768px"
              priority
              className="object-cover"
            />
          </div>
        )}

        {/* Divider */}
        <div className="h-px bg-white/8 mb-10" />

        {/* Body */}
        {post.body && (
          <div className="prose-reset text-base">
            <PortableText value={post.body as Parameters<typeof PortableText>[0]['value']} components={ptComponents} />
          </div>
        )}

        {/* CTA — appears on every post automatically */}
        <BlogCTA />

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/8 flex items-center justify-between flex-wrap gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/40 hover:text-[#FFC512] text-sm font-medium transition-colors duration-200"
          >
            <ArrowLeft size={14} /> All Posts
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-sm px-5 py-2.5 rounded-md transition-all duration-200 hover:scale-105"
          >
            Work with us
          </Link>
        </div>
      </article>

      {/* JSON-LD */}
      {post.seo?.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: post.seo.structuredData }}
        />
      )}
    </main>
  )
}

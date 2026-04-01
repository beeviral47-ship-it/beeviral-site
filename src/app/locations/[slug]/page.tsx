import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { getLocationPage, getAllLocationSlugs } from '@/sanity/queries'
import { urlFor } from '@/sanity/image'
import { buildMetadata } from '@/sanity/metadata'
import { ArrowLeft, CheckCircle, ChevronDown } from 'lucide-react'

// ── Static params ─────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const slugs = await getAllLocationSlugs()
  return slugs.map((slug) => ({ slug }))
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const page = await getLocationPage(slug)
  if (!page) return {}
  return buildMetadata({
    title:       page.heroHeadline ?? page.cityName,
    description: page.heroSubtext,
    path:        `/locations/${slug}`,
    seo:         page.seo,
  })
}

// ── Portable Text components (same as blog post) ──────────────────────────────

const ptComponents: PortableTextComponents = {
  block: {
    normal:     ({ children }) => <p className="mb-5 leading-relaxed text-white/75">{children}</p>,
    h2:         ({ children }) => <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mt-12 mb-5 tracking-tight">{children}</h2>,
    h3:         ({ children }) => <h3 className="font-display font-semibold text-xl text-white mt-8 mb-4 tracking-tight">{children}</h3>,
    h4:         ({ children }) => <h4 className="font-display font-semibold text-lg text-white mt-6 mb-3 tracking-tight">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#FFC512] pl-5 my-8 italic text-white/60 text-lg leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-outside pl-5 mb-5 space-y-2 text-white/75">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-outside pl-5 mb-5 space-y-2 text-white/75">{children}</ol>,
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

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const page = await getLocationPage(slug)
  if (!page) notFound()

  return (
    <main className="bg-[#1a1a1a] min-h-screen">

      {/* Hero */}
      <section className="bg-[#222222] pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 text-white/40 hover:text-[#FFC512] text-sm font-medium transition-colors duration-200 mb-8"
          >
            <ArrowLeft size={14} /> All Locations
          </Link>

          <h1 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-6">
            {page.heroHeadline ?? page.cityName}
          </h1>

          {page.heroSubtext && (
            <p className="text-white/60 text-lg leading-relaxed">
              {page.heroSubtext}
            </p>
          )}
        </div>
      </section>

      {/* Services offered */}
      {page.servicesOffered && page.servicesOffered.length > 0 && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
          <h2 className="font-display font-bold text-xl text-white mb-5 tracking-tight">
            Services Available in {page.cityName}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {page.servicesOffered.map((service) => (
              <li key={service} className="flex items-center gap-3 text-white/75 text-sm">
                <CheckCircle size={16} className="text-[#FFC512] flex-shrink-0" />
                {service}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Body */}
      {page.body && (
        <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
          <div className="h-px bg-white/8 mb-10" />
          <div className="prose-reset text-base">
            <PortableText
              value={page.body as Parameters<typeof PortableText>[0]['value']}
              components={ptComponents}
            />
          </div>
        </article>
      )}

      {/* FAQ */}
      {page.faqItems && page.faqItems.length > 0 && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
          <div className="h-px bg-white/8 mb-10" />
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-8 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {page.faqItems.map((item, i) => (
              <details
                key={i}
                className="group border border-white/10 rounded-xl bg-[#222222] open:border-[#FFC512]/30"
              >
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none text-white font-medium text-base select-none">
                  {item.question}
                  <ChevronDown
                    size={16}
                    className="text-[#FFC512] flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                {item.answer && (
                  <p className="px-5 pb-5 text-white/60 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                )}
              </details>
            ))}
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-24">
        <div className="pt-8 border-t border-white/8 flex items-center justify-between flex-wrap gap-4">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 text-white/40 hover:text-[#FFC512] text-sm font-medium transition-colors duration-200"
          >
            <ArrowLeft size={14} /> All Locations
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-sm px-5 py-2.5 rounded-md transition-all duration-200 hover:scale-105"
          >
            Work with us
          </Link>
        </div>
      </div>

      {/* JSON-LD */}
      {page.seo?.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: page.seo.structuredData }}
        />
      )}
    </main>
  )
}

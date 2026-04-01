import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllBlogPosts } from '@/sanity/queries'
import { urlFor } from '@/sanity/image'
import { Calendar, User, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | Bee Viral — Social Media Insights & Tips',
  description: 'Social media tips, case studies, and marketing advice from the Bee Viral team in South Yorkshire.',
  alternates: { canonical: 'https://www.beeviral.co.uk/blog' },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts()

  return (
    <main className="bg-[#1a1a1a] min-h-screen">
      {/* Hero */}
      <section className="bg-[#222222] py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
            Insights & Tips
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
            The Bee Viral Blog
          </h1>
          <p className="text-white/55 text-lg mt-4 max-w-2xl font-normal leading-relaxed">
            Social media advice, platform updates, and real stories from South Yorkshire businesses.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-white/40 text-lg">No posts yet — check back soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                const coverUrl = post.featuredImage
                  ? urlFor(post.featuredImage).width(800).height(450).url()
                  : null

                return (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug.current}`}
                    className="group bg-[#222222] border border-white/5 hover:border-[#FFC512]/30 rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FFC512]/5"
                  >
                    {/* Cover image */}
                    <div className="relative h-48 bg-[#2d2d2d] overflow-hidden">
                      {coverUrl ? (
                        <Image
                          src={coverUrl}
                          alt={post.featuredImage?.alt ?? post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FFC512]/20 to-[#222222] flex items-center justify-center">
                          <span className="text-[#FFC512]/40 font-display text-5xl font-extrabold">
                            {post.title.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-4 text-white/35 text-xs mb-3 font-normal">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} />
                          {post.publishedAt ? formatDate(post.publishedAt) : 'Draft'}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <User size={12} />
                          {post.author ?? 'Bee Viral'}
                        </span>
                      </div>

                      <h2 className="font-display font-semibold text-white text-xl mb-3 group-hover:text-[#FFC512] transition-colors tracking-tight leading-snug">
                        {post.title}
                      </h2>

                      {post.excerpt && (
                        <p className="text-white/50 text-sm leading-relaxed font-normal flex-1">
                          {post.excerpt}
                        </p>
                      )}

                      <span className="inline-flex items-center gap-1.5 text-[#FFC512] text-sm font-medium mt-5 group-hover:gap-2.5 transition-all duration-200">
                        Read more <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

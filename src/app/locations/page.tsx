import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { getAllLocationPages } from '@/sanity/queries'

export const metadata: Metadata = {
  title: 'Locations — Social Media Agency in South Yorkshire',
  description: 'Bee Viral provides social media marketing services across South Yorkshire including Wath, Rotherham, Barnsley and Sheffield.',
  alternates: { canonical: 'https://www.beeviral.co.uk/locations' },
}

export default async function LocationsPage() {
  const locations = await getAllLocationPages()

  return (
    <main className="bg-[#1a1a1a] min-h-screen">
      {/* Hero */}
      <section className="bg-[#222222] py-20 lg:pt-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest">
            Areas We Cover
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mt-3 tracking-tight leading-tight">
            Locations
          </h1>
          <p className="text-white/55 text-lg mt-4 max-w-2xl font-normal leading-relaxed">
            We work with local businesses across South Yorkshire. Find your area below to see how we can help.
          </p>
        </div>
      </section>

      {/* Location cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {locations.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-white/40 text-lg">No locations yet — check back soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((loc) => (
                <Link
                  key={loc._id}
                  href={`/locations/${loc.slug.current}`}
                  className="group bg-[#222222] border border-white/5 hover:border-[#FFC512]/30 rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FFC512]/5"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FFC512]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-[#FFC512]" />
                  </div>

                  <div className="flex-1">
                    <h2 className="font-display font-semibold text-white text-xl mb-2 group-hover:text-[#FFC512] transition-colors tracking-tight">
                      {loc.cityName}
                    </h2>
                    {loc.heroSubtext && (
                      <p className="text-white/50 text-sm leading-relaxed font-normal line-clamp-3">
                        {loc.heroSubtext}
                      </p>
                    )}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-[#FFC512] text-sm font-medium group-hover:gap-2.5 transition-all duration-200">
                    View location <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

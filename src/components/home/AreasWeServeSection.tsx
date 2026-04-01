import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import type { AreasWeServeDoc } from '@/sanity/types'

interface Props {
  data: AreasWeServeDoc
}

export default function AreasWeServeSection({ data }: Props) {
  if (!data.areas || data.areas.length === 0) return null

  const heading = data.sectionHeading ?? 'Areas We Serve'

  return (
    <section className="bg-[#222222] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-[#FFC512] text-xs font-semibold uppercase tracking-widest mb-3">
            Local Coverage
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            {heading}
          </h2>
          {data.sectionSubtext && (
            <p className="mt-4 text-white/60 max-w-2xl mx-auto leading-relaxed">
              {data.sectionSubtext}
            </p>
          )}
        </div>

        {/* Areas grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.areas.map((area) => {
            const href = area.locationPage?.slug?.current
              ? `/locations/${area.locationPage.slug.current}`
              : null

            const inner = (
              <div
                className={`group flex flex-col gap-3 p-6 rounded-xl border border-white/10 bg-[#1a1a1a] h-full transition-all duration-200 ${
                  href ? 'hover:border-[#FFC512]/40 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30' : ''
                }`}
              >
                <div className="flex items-center gap-2 text-[#FFC512]">
                  <MapPin size={16} className="flex-shrink-0" />
                  <span className="font-display font-semibold text-base text-white">
                    {area.cityName}
                  </span>
                </div>
                {area.shortDescription && (
                  <p className="text-white/55 text-sm leading-relaxed flex-1">
                    {area.shortDescription}
                  </p>
                )}
                {href && (
                  <span className="inline-flex items-center gap-1 text-[#FFC512] text-xs font-semibold uppercase tracking-widest mt-1 group-hover:gap-2 transition-all duration-200">
                    Learn more <ArrowRight size={12} />
                  </span>
                )}
              </div>
            )

            return href ? (
              <Link key={area.cityName} href={href} className="block h-full">
                {inner}
              </Link>
            ) : (
              <div key={area.cityName} className="h-full">
                {inner}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

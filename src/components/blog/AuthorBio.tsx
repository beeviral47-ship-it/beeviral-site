import Image from 'next/image'
import Link from 'next/link'
import { LinkedInIcon } from '@/components/ui/SocialIcons'

export default function AuthorBio() {
  return (
    <>
      {/* Divider — matches the existing h-px divider used in the blog post layout */}
      <div className="h-px bg-white/8 mt-12 mb-10" />

      <aside className="bg-[#222222] border border-white/8 rounded-2xl px-6 sm:px-8 py-7 sm:py-8">

        <p className="text-[#FFC512] text-[10px] font-semibold uppercase tracking-widest mb-5">
          About the Author
        </p>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-7 sm:items-start">

          <Image
            src="/images/tahir-azam.jpg.png"
            alt="Tahir Azam — Founder, Bee Viral"
            width={88}
            height={88}
            className="rounded-full object-cover shrink-0 w-[88px] h-[88px]"
          />

          {/* ── Author details ──────────────────────────────────────────────── */}
          <div className="flex-1 min-w-0">

            <p className="font-display font-bold text-lg text-white leading-tight">
              Tahir Azam
            </p>
            <p className="text-[#FFC512] text-xs font-semibold uppercase tracking-widest mt-0.5 mb-3">
              Founder, Bee Viral
            </p>

            <p className="text-white/60 text-sm leading-relaxed">
              Tahir has been helping South Yorkshire businesses grow online since 2014.
              As the founder of Bee Viral, he specialises in social media management,
              local SEO, and web design for independent businesses across Rotherham,
              Barnsley, Sheffield, and the wider South Yorkshire region.
            </p>

            {/* Links */}
            <div className="flex items-center gap-4 mt-5">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/tahir-azam-7675b393/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/40 hover:text-[#FFC512] text-sm font-medium transition-colors duration-200"
                aria-label="Bee Viral on LinkedIn"
              >
                <LinkedInIcon size={16} />
                LinkedIn
              </a>

              <span className="w-px h-4 bg-white/10" aria-hidden="true" />

              <Link
                href="/about"
                className="text-white/40 hover:text-[#FFC512] text-sm font-medium transition-colors duration-200"
              >
                View Profile →
              </Link>

            </div>
          </div>
        </div>

      </aside>
    </>
  )
}

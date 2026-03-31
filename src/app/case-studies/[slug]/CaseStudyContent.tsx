'use client'

import Link from 'next/link'
import { ArrowRight, ArrowLeft, MapPin, Clock, CheckCircle2, TrendingUp } from 'lucide-react'
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal'
import { trackButtonClick } from '@/lib/analytics'
import { useAuditModal } from '@/components/providers/AuditModalProvider'
import { type CaseStudyData, caseStudies } from '@/lib/case-studies-data'

interface Props {
  caseStudy: CaseStudyData
}

export default function CaseStudyContent({ caseStudy: cs }: Props) {
  const { openAuditModal } = useAuditModal()

  const heroRef       = useScrollReveal<HTMLDivElement>(0.1)
  const challengeRef  = useScrollReveal<HTMLDivElement>(0.15)
  const approachRef   = useScrollReveal<HTMLDivElement>(0.15)
  const executionRef  = useStaggerReveal<HTMLDivElement>(0.05)
  const proofRef      = useScrollReveal<HTMLDivElement>(0.1)
  const proofRowsRef  = useStaggerReveal<HTMLDivElement>(0.04)
  const resultsRef    = useScrollReveal<HTMLDivElement>(0.15)
  const metricsRef    = useStaggerReveal<HTMLDivElement>(0.05)
  const quoteRef      = useScrollReveal<HTMLDivElement>(0.2)
  const relatedRef    = useStaggerReveal<HTMLDivElement>(0.05)
  const ctaRef        = useScrollReveal<HTMLDivElement>(0.2)

  const relatedStudies = cs.relatedSlugs
    .map((slug) => caseStudies.find((c) => c.slug === slug))
    .filter((c): c is CaseStudyData => Boolean(c))

  return (
    <>
      {/* ── Section 1: Hero ─────────────────────────────────────────────────── */}
      <section className="relative bg-[#222222] pt-36 pb-20 overflow-hidden">
        {/* Honeycomb texture */}
        <div aria-hidden="true" className="absolute inset-0 bg-honeycomb pointer-events-none" />
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#FFC512]/4 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-[#FFC512]/3 blur-3xl pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-[#FFC512]/60 hover:text-[#FFC512] text-sm font-medium mb-10 transition-colors duration-200 group"
          >
            <ArrowLeft size={15} className="transition-transform duration-200 group-hover:-translate-x-1" />
            Back to Case Studies
          </Link>

          <div ref={heroRef} className="reveal">
            {/* Industry + Service pills */}
            <div className="flex items-center flex-wrap gap-3 mb-6">
              <span className="bg-[#FFC512] text-[#222222] text-xs font-bold px-4 py-1.5 rounded-full tracking-wide uppercase">
                {cs.industry}
              </span>
              <span className="bg-white/10 text-white/80 text-xs font-medium px-4 py-1.5 rounded-full tracking-wide backdrop-blur-sm">
                {cs.service}
              </span>
            </div>

            {/* Business name */}
            <h1
              className="font-display font-extrabold text-white mb-4 leading-none tracking-tight"
              style={{ fontSize: 'clamp(36px, 6vw, 72px)', letterSpacing: '-0.02em' }}
            >
              {cs.business}
            </h1>

            {/* Location */}
            <div className="flex items-center gap-2 text-white/50 text-sm font-normal mb-5">
              <MapPin size={14} className="text-[#FFC512]/70 flex-shrink-0" />
              {cs.location}
            </div>

            {/* Tagline */}
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed font-normal mb-14">
              {cs.tagline}
            </p>

            {/* Metric strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
              {cs.metrics.map((m) => (
                <div
                  key={m.label}
                  className="bg-white/5 border border-white/8 rounded-2xl px-6 py-5 backdrop-blur-sm"
                >
                  <div
                    className="font-display font-extrabold text-[#FFC512] leading-none tracking-tight mb-1"
                    style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}
                  >
                    {m.value}
                  </div>
                  <div className="text-white/50 text-sm font-normal">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: The Challenge ─────────────────────────────────────────── */}
      <section className="bg-[#1a1a1a] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={challengeRef}
            className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
          >
            {/* Left: detail */}
            <div>
              <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest mb-3 block">
                The Challenge
              </span>
              <h2
                className="font-display font-bold text-white mb-6 leading-tight tracking-tight"
                style={{ fontSize: 'clamp(26px, 3.5vw, 42px)' }}
              >
                {cs.challenge}
              </h2>
              <div className="space-y-5">
                {cs.challengeDetail.map((para, i) => (
                  <p key={i} className="text-white/60 text-base leading-relaxed font-normal">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Right: card */}
            <div className="flex flex-col gap-5">
              {/* Timeframe pill + overview */}
              <div className="bg-[#222222] border border-white/8 rounded-2xl p-7">
                <div className="inline-flex items-center gap-2 bg-[#FFC512]/10 border border-[#FFC512]/20 text-[#FFC512] text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                  <Clock size={12} />
                  {cs.timeframe}
                </div>
                <p className="text-white/55 text-sm leading-relaxed font-normal">
                  {cs.overview[0]}
                </p>
              </div>

              {/* Key problem callout */}
              <div className="border-l-4 border-[#FFC512] bg-[#FFC512]/5 rounded-r-xl px-6 py-5">
                <p className="text-[#FFC512] text-xs font-semibold uppercase tracking-widest mb-2">
                  Key Problem
                </p>
                <p className="text-white/70 text-sm leading-relaxed font-normal">
                  {cs.challenge}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Our Approach ──────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={approachRef} className="reveal">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest mb-3 block">
              Our Approach
            </span>
            <h2
              className="font-display font-bold text-[#222222] mb-6 leading-tight tracking-tight max-w-3xl"
              style={{ fontSize: 'clamp(26px, 3.5vw, 42px)' }}
            >
              {cs.strategy}
            </h2>
            <div className="space-y-5 max-w-3xl mb-14">
              {cs.strategyDetail.map((para, i) => (
                <p key={i} className="text-[#222222]/65 text-base leading-relaxed font-normal">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Execution items */}
          <div
            ref={executionRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {cs.execution.map((item, i) => (
              <div
                key={item.title}
                className="reveal-scale bg-[#f5f5f5] border border-[#222222]/8 rounded-2xl p-7 flex gap-5 items-start"
                data-delay={i % 2}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-[#FFC512] rounded-xl flex items-center justify-center">
                  <span className="font-display font-extrabold text-[#222222] text-sm leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-[#222222] text-base mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#222222]/60 text-sm leading-relaxed font-normal">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Proof of Work ─────────────────────────────────────────── */}
      <section className="bg-[#f9f9f9] py-24 border-t border-[#222222]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={proofRef} className="reveal mb-14">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest mb-3 block">
              Proof of Work
            </span>
            <h2
              className="font-display font-bold text-[#222222] leading-tight tracking-tight max-w-2xl"
              style={{ fontSize: 'clamp(26px, 3.5vw, 42px)' }}
            >
              Before Bee Viral vs after.
            </h2>
            <p className="text-[#222222]/55 text-base mt-4 max-w-2xl leading-relaxed font-normal">
              Real numbers. Real progress. Here is exactly what changed and when.
            </p>
          </div>

          {/* Before / After comparison table */}
          <div className="mb-16">
            <div className="grid grid-cols-3 bg-[#222222] rounded-t-2xl px-6 py-3 text-xs font-bold uppercase tracking-widest text-white/60">
              <span>Metric</span>
              <span className="text-center">Before</span>
              <span className="text-center text-[#FFC512]">After</span>
            </div>
            <div ref={proofRowsRef} className="divide-y divide-[#222222]/8 border border-t-0 border-[#222222]/10 rounded-b-2xl overflow-hidden">
              {cs.proofOfWork.beforeAfter.map((row, i) => (
                <div
                  key={row.metric}
                  className="reveal grid grid-cols-3 items-center px-6 py-4 bg-white hover:bg-[#fffbec] transition-colors duration-150"
                  data-delay={i}
                >
                  <span className="text-[#222222] text-sm font-semibold leading-snug pr-4">{row.metric}</span>
                  <span className="text-center text-[#222222]/50 text-sm font-normal">{row.before}</span>
                  <span className="text-center text-[#222222] text-sm font-bold">{row.after}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline + Key Wins — two-column */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Timeline */}
            <div className="bg-white border border-[#222222]/10 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-7">
                <TrendingUp size={16} className="text-[#FFC512]" />
                <span className="text-[#222222] text-sm font-bold uppercase tracking-widest">Timeline of Progress</span>
              </div>
              <div className="space-y-0">
                {cs.proofOfWork.timeline.map((item, i) => (
                  <div key={item.period} className="flex gap-4 relative">
                    {/* Vertical line connector */}
                    {i < cs.proofOfWork.timeline.length - 1 && (
                      <div className="absolute left-[11px] top-[22px] w-[2px] bg-[#FFC512]/25" style={{ height: 'calc(100% - 4px)' }} />
                    )}
                    {/* Dot */}
                    <div className="flex-shrink-0 mt-[5px] w-6 h-6 rounded-full bg-[#FFC512]/15 border-2 border-[#FFC512] flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-[#FFC512]" />
                    </div>
                    <div className="pb-6">
                      <span className="text-[#FFC512] text-xs font-bold uppercase tracking-widest block mb-1">
                        {item.period}
                      </span>
                      <p className="text-[#222222]/70 text-sm leading-relaxed font-normal">{item.milestone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Wins */}
            <div className="bg-white border border-[#222222]/10 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-7">
                <CheckCircle2 size={16} className="text-[#FFC512]" />
                <span className="text-[#222222] text-sm font-bold uppercase tracking-widest">Key Wins</span>
              </div>
              <ul className="space-y-4">
                {cs.proofOfWork.keyWins.map((win) => (
                  <li key={win} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#FFC512] flex items-center justify-center">
                      <CheckCircle2 size={12} className="text-[#222222]" strokeWidth={2.5} />
                    </div>
                    <span className="text-[#222222]/75 text-sm leading-relaxed font-normal">{win}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: The Results ───────────────────────────────────────────── */}
      <section className="bg-[#222222] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={resultsRef} className="reveal mb-14">
            <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest mb-3 block">
              The Results
            </span>
            <h2
              className="font-display font-bold text-white leading-tight tracking-tight max-w-2xl"
              style={{ fontSize: 'clamp(26px, 3.5vw, 42px)' }}
            >
              What we achieved together.
            </h2>
          </div>

          {/* Large metrics grid */}
          <div ref={metricsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
            {cs.metrics.map((m, i) => (
              <div
                key={m.label}
                className="reveal-scale bg-[#1a1a1a] border border-white/8 rounded-2xl p-8 flex flex-col gap-3"
                data-delay={i}
              >
                <div
                  className="font-display font-extrabold text-[#FFC512] leading-none tracking-tight"
                  style={{ fontSize: 'clamp(38px, 5vw, 64px)' }}
                >
                  {m.value}
                </div>
                <div className="text-white font-semibold text-base tracking-tight">{m.label}</div>
                <div className="w-10 h-0.5 bg-[#FFC512]/30 rounded-full" />
                <p className="text-white/50 text-sm leading-relaxed font-normal">{m.context}</p>
              </div>
            ))}
          </div>

          {/* Results narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
            {cs.resultsNarrative.map((para, i) => (
              <p key={i} className="text-white/60 text-base leading-relaxed font-normal">
                {para}
              </p>
            ))}
          </div>

          {/* Bottom line callout */}
          <div className="bg-[#FFC512]/8 border border-[#FFC512]/20 rounded-2xl px-8 py-7">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-[#FFC512] flex-shrink-0 mt-0.5" size={20} />
              <div>
                <p className="text-[#FFC512] text-xs font-semibold uppercase tracking-widest mb-2">
                  The Bottom Line
                </p>
                <p className="text-white/70 text-base leading-relaxed font-normal">
                  {cs.overview[1]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Quote ─────────────────────────────────────────────────── */}
      {cs.quote && (
        <section className="bg-[#1a1a1a] py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={quoteRef} className="reveal-scale text-center">
              {/* Large quotation mark */}
              <div
                aria-hidden="true"
                className="font-display font-extrabold text-[#FFC512]/20 leading-none select-none mb-2"
                style={{ fontSize: '9rem', lineHeight: '0.8' }}
              >
                &ldquo;
              </div>

              <blockquote className="text-white font-normal italic leading-relaxed mb-8" style={{ fontSize: 'clamp(18px, 2.2vw, 26px)' }}>
                {cs.quote}
              </blockquote>

              <div className="flex flex-col items-center gap-1 mb-8">
                <span className="text-white font-semibold text-base">{cs.quoteAuthor}</span>
                <span className="text-white/40 text-sm font-normal">{cs.quoteRole}</span>
              </div>

              {/* BV badge */}
              <div className="inline-flex items-center gap-2 bg-[#FFC512]/10 border border-[#FFC512]/20 px-4 py-2 rounded-full">
                <div className="w-5 h-5 bg-[#FFC512] rounded-sm flex items-center justify-center">
                  <span className="font-display font-extrabold text-[#222222] text-[10px] leading-none">BV</span>
                </div>
                <span className="text-[#FFC512]/70 text-xs font-medium tracking-wide">Bee Viral Client</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Section 6: Related Case Studies ──────────────────────────────────── */}
      {relatedStudies.length > 0 && (
        <section className="bg-[#1a1a1a] py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="text-[#FFC512] text-sm font-medium uppercase tracking-widest mb-3 block">
                More Work
              </span>
              <h2
                className="font-display font-bold text-white tracking-tight"
                style={{ fontSize: 'clamp(26px, 3.5vw, 42px)' }}
              >
                More Case Studies
              </h2>
            </div>

            <div ref={relatedRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedStudies.map((related, i) => (
                <Link
                  key={related.slug}
                  href={`/case-studies/${related.slug}`}
                  className="reveal-scale flex flex-col bg-[#222222] border border-white/5 hover:border-[#FFC512]/30 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 group"
                  data-delay={i}
                >
                  {/* Gradient header */}
                  <div className={`relative h-32 bg-gradient-to-br ${related.gradientFrom} to-[#1a1a1a] flex items-end p-5 overflow-hidden`}>
                    <div
                      aria-hidden="true"
                      className="absolute right-4 top-1/2 -translate-y-1/2 font-display font-extrabold text-white/8 select-none leading-none"
                      style={{ fontSize: '6rem' }}
                    >
                      {related.initial}
                    </div>
                    <div className="relative z-10 flex items-center gap-2 flex-wrap">
                      <span className="bg-[#FFC512] text-[#222222] text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                        {related.industry}
                      </span>
                      <span className="bg-white/10 text-white/80 text-xs font-medium px-3 py-1 rounded-full tracking-wide backdrop-blur-sm">
                        {related.service}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex flex-col flex-1 p-6 gap-4">
                    <div>
                      <h3 className="font-display font-bold text-white text-xl tracking-tight group-hover:text-[#FFC512] transition-colors duration-200">
                        {related.business}
                      </h3>
                      <div className="flex items-center gap-1.5 text-white/40 text-xs font-normal mt-1">
                        <MapPin size={11} />
                        {related.location}
                      </div>
                    </div>

                    <p className="text-white/55 text-sm leading-relaxed font-normal line-clamp-2">
                      {related.challenge}
                    </p>

                    <div className="border-t border-white/8" />

                    <div className="grid grid-cols-3 gap-3">
                      {related.metrics.map((m) => (
                        <div key={m.label} className="bg-[#2d2d2d] rounded-lg p-3 text-center">
                          <div className="font-display font-extrabold text-[#FFC512] text-lg leading-tight tracking-tight">
                            {m.value}
                          </div>
                          <div className="text-white/40 text-xs font-normal mt-0.5 leading-tight">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-[#FFC512] text-sm font-semibold mt-auto pt-1 group-hover:gap-3 transition-all duration-200">
                      Read case study
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Section 7: CTA ───────────────────────────────────────────────────── */}
      <section className="bg-[#FFC512] relative overflow-hidden py-24">
        {/* Honeycomb texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V16L28 0l28 16v34zm0-92L0 -26V8L28 24l28-16V-8z' fill='none' stroke='%23222222' stroke-width='1.5'/%3E%3C/svg%3E")`,
          }}
        />

        <div ref={ctaRef} className="reveal-scale relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="font-display font-extrabold text-[#222222] mb-5"
            style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 0.95, letterSpacing: '-0.02em' }}
          >
            Ready to grow your business?
          </h2>
          <p className="text-[#222222]/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed font-normal">
            Book your free social media audit and find out exactly what we&apos;d do for your
            business in the first 90 days.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                trackButtonClick('Book Your Free Audit', 'case_study_cta')
                openAuditModal('service')
              }}
              className="inline-flex items-center gap-2 bg-[#222222] hover:bg-[#333] text-white font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg tracking-wide"
            >
              Book Your Free Audit
              <ArrowRight size={18} />
            </button>

            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-[#222222]/60 hover:text-[#222222] text-sm font-medium transition-colors duration-200 group"
            >
              <ArrowLeft size={14} className="transition-transform duration-200 group-hover:-translate-x-1" />
              or go back and read more case studies
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

'use client'

import { useState, useEffect, useRef } from 'react'
import { X, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'

const packageOptions = [
  'Starter — £120/mo',
  'Growth — £150/mo',
  'Hive — £200/mo',
  'Not sure — help me choose',
]

interface Props {
  open: boolean
  onClose: () => void
  defaultService?: string
  mode?: 'service' | 'book-package'
}

const empty = { name: '', business: '', email: '', phone: '', service: '', website: '', social: '', message: '', hp: '' }

export default function AuditModal({ open, onClose, defaultService = '', mode = 'service' }: Props) {
  const isPackageMode             = mode === 'book-package'
  const [form, setForm]           = useState({ ...empty, service: defaultService })
  const [loading, setLoading]     = useState(false)
  const [success, setSuccess]     = useState(false)
  const [error, setError]         = useState('')
  const firstFieldRef             = useRef<HTMLInputElement>(null)

  // Sync defaultService when it changes (e.g. different plan clicked)
  useEffect(() => {
    setForm((prev) => ({ ...prev, service: defaultService }))
  }, [defaultService])

  // Focus first field when modal opens
  useEffect(() => {
    if (open) setTimeout(() => firstFieldRef.current?.focus(), 50)
  }, [open])

  // Reset on close
  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setForm({ ...empty, service: defaultService })
        setSuccess(false)
        setError('')
        setLoading(false)
      }, 300)
    }
  }, [open, defaultService])

  // ESC to close
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, onClose])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  function set(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, mode }),
      })
      if (!res.ok) throw new Error('Failed')
      setSuccess(true)
    } catch {
      setError('Something went wrong. Please call us on 07723 079 176.')
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null

  const inputCls =
    'w-full bg-[#1a1a1a] border border-white/10 focus:border-[#FFC512]/60 focus:outline-none rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 transition-colors duration-200'
  const labelCls = 'block text-white/60 text-xs font-medium uppercase tracking-wider mb-1.5'

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
      aria-label={isPackageMode ? 'Book your package' : 'Book your free audit'}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-md bg-[#222222] border border-white/10 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden max-h-[92vh] overflow-y-auto">

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-white/50 hover:text-white flex items-center justify-center transition-all duration-200 z-10"
        >
          <X size={16} />
        </button>

        {success ? (
          /* ── Success ── */
          <div className="px-8 py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-[#FFC512]/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={32} className="text-[#FFC512]" />
            </div>
            <h2 className="font-display font-extrabold text-white text-2xl tracking-tight mb-3">
              {isPackageMode ? "You're all booked in!" : "We've got your request!"}
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              {isPackageMode
                ? <>Thanks, <strong className="text-white">{form.name}</strong>. We'll be in touch within one business day to get your package set up.</>
                : <>Thanks, <strong className="text-white">{form.name}</strong>. We'll review your social media and be in touch within one business day.</>
              }
            </p>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] text-[#222222] font-semibold text-sm px-6 py-3 rounded-md transition-all duration-200 hover:scale-105"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="bg-[#FFC512]/5 border-b border-white/8 px-8 py-6">
              <span className="text-[#FFC512] text-xs font-semibold uppercase tracking-widest">
                {isPackageMode ? 'No contracts — Cancel anytime' : 'Free — No obligation'}
              </span>
              <h2 className="font-display font-extrabold text-white text-2xl tracking-tight mt-1">
                {isPackageMode ? 'Book Your Package' : 'Book Your Free Audit'}
              </h2>
              <p className="text-white/50 text-sm font-normal mt-1">
                {isPackageMode
                  ? "Fill in your details and we'll get you set up within 5–7 working days."
                  : "We'll review your social media and get back to you within one business day."}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-8 py-6 space-y-4">

              {/* Name + Business */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="audit-name" className={labelCls}>Your Name *</label>
                  <input
                    ref={firstFieldRef}
                    id="audit-name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={(e) => set('name', e.target.value)}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="audit-business" className={labelCls}>Business Name *</label>
                  <input
                    id="audit-business"
                    type="text"
                    required
                    autoComplete="organization"
                    placeholder="Your Business"
                    value={form.business}
                    onChange={(e) => set('business', e.target.value)}
                    className={inputCls}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="audit-email" className={labelCls}>Email Address *</label>
                <input
                  id="audit-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="jane@yourbusiness.co.uk"
                  value={form.email}
                  onChange={(e) => set('email', e.target.value)}
                  className={inputCls}
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="audit-phone" className={labelCls}>
                  Phone Number <span className="normal-case text-white/30 font-normal">(optional)</span>
                </label>
                <input
                  id="audit-phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="07700 000 000"
                  value={form.phone}
                  onChange={(e) => set('phone', e.target.value)}
                  className={inputCls}
                />
              </div>

              {/* Package select — book-package mode only */}
              {isPackageMode && (
                <div>
                  <label htmlFor="audit-service" className={labelCls}>Package</label>
                  <select
                    id="audit-service"
                    value={form.service}
                    onChange={(e) => set('service', e.target.value)}
                    className={`${inputCls} appearance-none cursor-pointer`}
                  >
                    <option value="">Select a package…</option>
                    {packageOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Website URL — audit mode */}
              {!isPackageMode && (
                <div>
                  <label htmlFor="audit-website" className={labelCls}>
                    Website URL <span className="normal-case text-white/30 font-normal">(optional)</span>
                  </label>
                  <input
                    id="audit-website"
                    type="url"
                    placeholder="https://yourbusiness.co.uk"
                    value={form.website}
                    onChange={(e) => set('website', e.target.value)}
                    className={inputCls}
                  />
                </div>
              )}

              {/* Social handles — audit mode */}
              {!isPackageMode && (
                <div>
                  <label htmlFor="audit-social" className={labelCls}>
                    Social Media Handles <span className="normal-case text-white/30 font-normal">(optional)</span>
                  </label>
                  <input
                    id="audit-social"
                    type="text"
                    placeholder="e.g. @yourbusiness on Instagram & Facebook"
                    value={form.social}
                    onChange={(e) => set('social', e.target.value)}
                    className={inputCls}
                  />
                </div>
              )}

              {/* Message */}
              <div>
                <label htmlFor="audit-message" className={labelCls}>
                  {isPackageMode ? 'Anything else?' : 'Anything you\'d like us to focus on?'}
                  {' '}<span className="normal-case text-white/30 font-normal">(optional)</span>
                </label>
                <textarea
                  id="audit-message"
                  rows={3}
                  placeholder={
                    isPackageMode
                      ? 'Any questions about the package or your requirements…'
                      : 'E.g. we post regularly but get very little engagement…'
                  }
                  value={form.message}
                  onChange={(e) => set('message', e.target.value)}
                  className={`${inputCls} resize-none`}
                />
              </div>

              {/* Honeypot — hidden from real users, catches bots that fill all fields */}
              <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: '-9999px', opacity: 0, width: 0, height: 0, overflow: 'hidden' }}>
                <label htmlFor="hp-audit">Leave this empty</label>
                <input id="hp-audit" type="text" name="hp" tabIndex={-1} autoComplete="off" value={form.hp ?? ''} onChange={(e) => set('hp', e.target.value)} />
              </div>

              {error && <p className="text-red-400 text-xs font-medium">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] disabled:opacity-60 disabled:cursor-not-allowed text-[#222222] font-semibold text-sm px-6 py-3.5 rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-95"
              >
                {loading ? (
                  <><Loader2 size={16} className="animate-spin" /> Sending…</>
                ) : isPackageMode ? (
                  <>Book My Package <ArrowRight size={16} /></>
                ) : (
                  <>Book My Free Audit <ArrowRight size={16} /></>
                )}
              </button>

              <p className="text-white/25 text-xs text-center font-normal">
                No commitment. We'll never share your details.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

'use client'

import { useState, useEffect, useRef } from 'react'
import { X, ArrowRight, CheckCircle2, Loader2, Check } from 'lucide-react'
import { trackFormSubmit } from '@/lib/analytics'

const packageOptions = [
  'Starter — £120/mo',
  'Growth — £150/mo',
  'Hive — £200/mo',
  'Buzz — £250/mo',
  'Swarm — £350/mo',
  'Brochure — £800 setup + £200/mo',
  'Booking Pro — £1,500 setup + £250/mo',
  'Booking Elite — £2,500 setup + £300/mo',
  'Not sure — help me choose',
]

interface Props {
  open: boolean
  onClose: () => void
  defaultService?: string
  mode?: 'service' | 'book-package'
  serviceKey?: string
}

// ── Base form (unchanged fields) ──────────────────────────────────────────────

const empty = { name: '', business: '', email: '', phone: '', service: '', website: '', social: '', message: '', hp: '' }

// ── Conditional form fields ───────────────────────────────────────────────────

interface CondForm {
  currentPlatforms: string[]
  postingFrequency: string
  socialGoal: string
  hasWebsite: string
  googleBusiness: string
  seoGoal: string
  industry: string
  needsBooking: string
  businessType: string
  currentBooking: string
  bookingNeeds: string[]
  needsSMS: string
  interests: string[]
  budget: string
  discovery: string
}

const emptyCond: CondForm = {
  currentPlatforms: [],
  postingFrequency: '',
  socialGoal: '',
  hasWebsite: '',
  googleBusiness: '',
  seoGoal: '',
  industry: '',
  needsBooking: '',
  businessType: '',
  currentBooking: '',
  bookingNeeds: [],
  needsSMS: '',
  interests: [],
  budget: '',
  discovery: '',
}

// ── Helper UI components ──────────────────────────────────────────────────────

function CondSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-white/8 bg-[#1a1a1a] p-5 space-y-5">
      <p className="text-[#FFC512] text-xs font-semibold uppercase tracking-widest border-b border-white/8 pb-2.5">
        {title}
      </p>
      {children}
    </div>
  )
}

function RadioGroup({
  label,
  name,
  options,
  value,
  onChange,
}: {
  label: string
  name: string
  options: string[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div>
      <p className="text-white/50 text-xs font-medium uppercase tracking-wider mb-2.5">{label}</p>
      <div className="space-y-2">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name={name}
              value={opt}
              checked={value === opt}
              onChange={() => onChange(opt)}
              className="sr-only"
            />
            <span
              className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors duration-150 ${
                value === opt ? 'border-[#FFC512]' : 'border-white/25 group-hover:border-white/50'
              }`}
            >
              {value === opt && <span className="w-2 h-2 rounded-full bg-[#FFC512]" />}
            </span>
            <span
              className={`text-sm leading-snug transition-colors duration-150 ${
                value === opt ? 'text-white' : 'text-white/60 group-hover:text-white/80'
              }`}
            >
              {opt}
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}

function CheckGroup({
  label,
  name,
  options,
  values,
  onChange,
}: {
  label: string
  name: string
  options: string[]
  values: string[]
  onChange: (v: string) => void
}) {
  return (
    <div>
      <p className="text-white/50 text-xs font-medium uppercase tracking-wider mb-2.5">{label}</p>
      <div className="space-y-2">
        {options.map((opt) => {
          const checked = values.includes(opt)
          return (
            <label key={opt} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                name={name}
                value={opt}
                checked={checked}
                onChange={() => onChange(opt)}
                className="sr-only"
              />
              <span
                className={`w-4 h-4 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors duration-150 ${
                  checked ? 'border-[#FFC512] bg-[#FFC512]' : 'border-white/25 group-hover:border-white/50'
                }`}
              >
                {checked && <Check size={10} className="text-[#222222]" />}
              </span>
              <span
                className={`text-sm leading-snug transition-colors duration-150 ${
                  checked ? 'text-white' : 'text-white/60 group-hover:text-white/80'
                }`}
              >
                {opt}
              </span>
            </label>
          )
        })}
      </div>
    </div>
  )
}

// ── Main modal ────────────────────────────────────────────────────────────────

export default function AuditModal({ open, onClose, defaultService = '', mode = 'service', serviceKey }: Props) {
  const isPackageMode             = mode === 'book-package'
  const [form, setForm]           = useState({ ...empty, service: defaultService })
  const [cond, setCond]           = useState<CondForm>({ ...emptyCond })
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
        setCond({ ...emptyCond })
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

  function setRadio(field: keyof CondForm, value: string) {
    setCond((prev) => ({ ...prev, [field]: value }))
  }

  function toggleCheck(field: 'currentPlatforms' | 'bookingNeeds' | 'interests', value: string) {
    setCond((prev) => {
      const arr = prev[field]
      return { ...prev, [field]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value] }
    })
  }

  // Which conditional block to show
  const showSocial   = serviceKey === 'social-only'  || serviceKey === 'service-social'
  const showSEO      = serviceKey === 'social-seo'   || serviceKey === 'service-seo'
  const showWebsite  = serviceKey === 'brochure'     || serviceKey === 'service-website'
  const showBooking  = serviceKey === 'booking-pro'  || serviceKey === 'booking-elite' || serviceKey === 'service-booking'
  const showGeneral  = !serviceKey || serviceKey === 'general'

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          mode,
          serviceKey: serviceKey ?? '',
          // Conditional fields — always sent, empty string if block was not shown
          currentPlatforms: cond.currentPlatforms.join(', '),
          postingFrequency: cond.postingFrequency,
          socialGoal:       cond.socialGoal,
          hasWebsite:       cond.hasWebsite,
          googleBusiness:   cond.googleBusiness,
          seoGoal:          cond.seoGoal,
          industry:         cond.industry,
          needsBooking:     cond.needsBooking,
          businessType:     cond.businessType,
          currentBooking:   cond.currentBooking,
          bookingNeeds:     cond.bookingNeeds.join(', '),
          needsSMS:         cond.needsSMS,
          interests:        cond.interests.join(', '),
          budget:           cond.budget,
          discovery:        cond.discovery,
        }),
      })
      const json = await res.json()
      if (!res.ok || json.success === false) {
        const msg = json.error ? `[${json.step ?? 'error'}] ${json.error}` : 'Failed'
        throw new Error(msg)
      }
      trackFormSubmit(isPackageMode ? 'book_package' : 'audit_request', 'audit_modal')
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
      aria-label={isPackageMode ? 'Book your package' : 'Book your free Digital Health Check'}
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
              {isPackageMode ? "You're all booked in!" : "Thanks! Your Digital Health Check is booked."}
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              {isPackageMode
                ? <>Thanks, <strong className="text-white">{form.name}</strong>. We'll be in touch within one business day to get your package set up.</>
                : <>Thanks, <strong className="text-white">{form.name}</strong>. We'll review your online presence and get back to you within 1 business day with practical, honest advice — no jargon, no hard sell.</>
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
                {isPackageMode ? 'Book Your Package' : 'Book Your Free Digital Health Check'}
              </h2>
              <p className="text-white/50 text-sm font-normal mt-1">
                {isPackageMode
                  ? "Fill in your details and we'll get you set up within 5–7 working days."
                  : "We'll review your online presence and get back to you within 1 business day."}
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
                    type="text"
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

              {/* ── Conditional blocks ──────────────────────────────────────────── */}

              {/* Block A / G — social-only, service-social */}
              {showSocial && (
                <CondSection title="Tell us about your social media">
                  <CheckGroup
                    label="Which platforms are you currently on?"
                    name="currentPlatforms"
                    options={['Facebook', 'Instagram', 'TikTok', 'LinkedIn', 'None yet']}
                    values={cond.currentPlatforms}
                    onChange={(v) => toggleCheck('currentPlatforms', v)}
                  />
                  <RadioGroup
                    label="How often are you currently posting?"
                    name="postingFrequency"
                    options={['Daily', 'A few times a week', 'Once a week or less', "I'm not posting at all"]}
                    value={cond.postingFrequency}
                    onChange={(v) => setRadio('postingFrequency', v)}
                  />
                  <RadioGroup
                    label="What's your main goal?"
                    name="socialGoal"
                    options={['Get more followers', 'Generate leads and enquiries', 'Increase footfall to my business', 'Build brand awareness', 'All of the above']}
                    value={cond.socialGoal}
                    onChange={(v) => setRadio('socialGoal', v)}
                  />
                </CondSection>
              )}

              {/* Block B / H — social-seo, service-seo */}
              {showSEO && (
                <CondSection title="Tell us about your online presence">
                  <CheckGroup
                    label="Which platforms are you currently on?"
                    name="currentPlatforms"
                    options={['Facebook', 'Instagram', 'TikTok', 'LinkedIn', 'None yet']}
                    values={cond.currentPlatforms}
                    onChange={(v) => toggleCheck('currentPlatforms', v)}
                  />
                  <RadioGroup
                    label="Do you currently have a website?"
                    name="hasWebsite"
                    options={["Yes, and it's working well", 'Yes, but it needs improvement', "No, I don't have one"]}
                    value={cond.hasWebsite}
                    onChange={(v) => setRadio('hasWebsite', v)}
                  />
                  <RadioGroup
                    label="Are you listed on Google Business Profile?"
                    name="googleBusiness"
                    options={["Yes, it's set up and active", "Yes, but it's incomplete", "No, I'm not listed"]}
                    value={cond.googleBusiness}
                    onChange={(v) => setRadio('googleBusiness', v)}
                  />
                  <RadioGroup
                    label="What's your main goal?"
                    name="seoGoal"
                    options={['Rank higher on Google', 'Get more social media followers', 'Both equally', 'Not sure yet']}
                    value={cond.seoGoal}
                    onChange={(v) => setRadio('seoGoal', v)}
                  />
                </CondSection>
              )}

              {/* Block C / E — brochure, service-website */}
              {showWebsite && (
                <CondSection title="Tell us about your website needs">
                  <RadioGroup
                    label="Do you currently have a website?"
                    name="hasWebsite"
                    options={['Yes, but it needs a full redesign', "Yes, but it's not generating enquiries", 'No, I need one built from scratch']}
                    value={cond.hasWebsite}
                    onChange={(v) => setRadio('hasWebsite', v)}
                  />
                  <RadioGroup
                    label="What industry are you in?"
                    name="industry"
                    options={['Hospitality & Food', 'Trades & Construction', 'Beauty & Hair', 'Fitness & Wellness', 'Retail', 'Professional Services', 'Healthcare', 'Other']}
                    value={cond.industry}
                    onChange={(v) => setRadio('industry', v)}
                  />
                  <RadioGroup
                    label="Do you need a booking or appointment system?"
                    name="needsBooking"
                    options={['Yes, definitely', 'Maybe in future', 'No, just a brochure site']}
                    value={cond.needsBooking}
                    onChange={(v) => setRadio('needsBooking', v)}
                  />
                </CondSection>
              )}

              {/* Block D / F — booking-pro, booking-elite, service-booking */}
              {showBooking && (
                <CondSection title="Tell us about your booking needs">
                  <RadioGroup
                    label="What type of business are you?"
                    name="businessType"
                    options={['Hair or beauty salon', 'Nail studio', 'Fitness or personal training', 'Clinic or healthcare', 'Restaurant or hospitality', 'Other appointment-based business']}
                    value={cond.businessType}
                    onChange={(v) => setRadio('businessType', v)}
                  />
                  <RadioGroup
                    label="How do you currently take bookings?"
                    name="currentBooking"
                    options={['Phone calls only', 'WhatsApp or DM', 'Third party app (Fresha, Treatwell etc.)', 'No formal system yet']}
                    value={cond.currentBooking}
                    onChange={(v) => setRadio('currentBooking', v)}
                  />
                  <CheckGroup
                    label="What do you need the system to handle?"
                    name="bookingNeeds"
                    options={['Online booking 24/7', 'Automated confirmation emails', 'Reminder messages before appointments', 'Cancellation management', 'Multiple services in one booking', 'Staff or multi-therapist scheduling']}
                    values={cond.bookingNeeds}
                    onChange={(v) => toggleCheck('bookingNeeds', v)}
                  />
                  {serviceKey === 'booking-elite' && (
                    <RadioGroup
                      label="Do you need SMS reminders as well as email?"
                      name="needsSMS"
                      options={['Yes, SMS and email both', 'Email only is fine', 'Not sure yet']}
                      value={cond.needsSMS}
                      onChange={(v) => setRadio('needsSMS', v)}
                    />
                  )}
                </CondSection>
              )}

              {/* Block I — general or no serviceKey */}
              {showGeneral && (
                <CondSection title="A few quick questions">
                  <RadioGroup
                    label="Do you currently have a website?"
                    name="hasWebsite"
                    options={["Yes, and I'm happy with it", 'Yes, but it needs work', 'No, I need one built']}
                    value={cond.hasWebsite}
                    onChange={(v) => setRadio('hasWebsite', v)}
                  />
                  <CheckGroup
                    label="What are you most interested in?"
                    name="interests"
                    options={['Social media management', 'SEO and blogging', 'Website design or rebuild', 'Booking & automation system', 'Not sure — just want advice']}
                    values={cond.interests}
                    onChange={(v) => toggleCheck('interests', v)}
                  />
                  <RadioGroup
                    label="What's your monthly marketing budget?"
                    name="budget"
                    options={['Under £150/month', '£150–£300/month', '£300–£500/month', '£500+/month', 'Not sure yet']}
                    value={cond.budget}
                    onChange={(v) => setRadio('budget', v)}
                  />
                  <RadioGroup
                    label="How are customers currently finding you?"
                    name="discovery"
                    options={['Word of mouth / referrals', 'Google search', 'Social media', "I'm not getting enough customers yet", 'Mix of everything']}
                    value={cond.discovery}
                    onChange={(v) => setRadio('discovery', v)}
                  />
                </CondSection>
              )}

              {/* Message */}
              <div>
                <label htmlFor="audit-message" className={labelCls}>
                  {isPackageMode ? 'Anything else?' : "Anything you'd like us to focus on?"}
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
                  <>Book My Free Digital Health Check <ArrowRight size={16} /></>
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

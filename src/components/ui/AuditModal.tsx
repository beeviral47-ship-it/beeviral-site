'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import { X, ArrowRight, ArrowLeft, CheckCircle2, Loader2, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { trackFormSubmit } from '@/lib/analytics'

// ── Constants ─────────────────────────────────────────────────────────────────

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

// ── Types ─────────────────────────────────────────────────────────────────────

interface Props {
  open: boolean
  onClose: () => void
  defaultService?: string
  mode?: 'service' | 'book-package'
  serviceKey?: string
}

const empty = {
  name: '', business: '', email: '', phone: '',
  service: '', website: '', social: '', message: '', hp: '',
}

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

interface WizardStep {
  id: string
  question: string
  subtext?: string
  type: 'single' | 'multi' | 'contact' | 'package'
  condField?: keyof CondForm
  options?: string[]
}

// ── Step factory ──────────────────────────────────────────────────────────────

function buildSteps(serviceKey: string | undefined, isPackageMode: boolean): WizardStep[] {
  const contact: WizardStep = {
    id: 'contact',
    question: 'Almost done — just your details',
    subtext: "We'll get back to you within 1 business day. No hard sell, no commitment.",
    type: 'contact',
  }

  if (isPackageMode) {
    return [
      {
        id: 'package',
        question: 'Which package are you interested in?',
        subtext: "Not sure? Pick 'Help me choose' and we'll advise.",
        type: 'package',
        options: packageOptions,
      },
      { ...contact, question: 'Last step — your details', subtext: "We'll get you set up within 5–7 working days." },
    ]
  }

  const isSocial  = serviceKey === 'social-only'  || serviceKey === 'service-social'
  const isSEO     = serviceKey === 'social-seo'   || serviceKey === 'service-seo'
  const isWebsite = serviceKey === 'brochure'     || serviceKey === 'service-website'
  const isBooking = serviceKey === 'booking-pro'  || serviceKey === 'booking-elite' || serviceKey === 'service-booking'

  if (isSocial) {
    return [
      { id: 'currentPlatforms', question: 'Which platform are you mainly on?', type: 'single', condField: 'currentPlatforms', options: ['Facebook', 'Instagram', 'TikTok', 'LinkedIn', 'None yet'] },
      { id: 'postingFrequency', question: 'How often are you currently posting?', type: 'single', condField: 'postingFrequency', options: ['Daily', 'A few times a week', 'Once a week or less', "I'm not posting at all"] },
      { id: 'socialGoal', question: "What's your main goal?", type: 'single', condField: 'socialGoal', options: ['Get more followers', 'Generate leads and enquiries', 'Increase footfall to my business', 'Build brand awareness', 'All of the above'] },
      contact,
    ]
  }

  if (isSEO) {
    return [
      { id: 'currentPlatforms', question: 'Which platform are you mainly on?', type: 'single', condField: 'currentPlatforms', options: ['Facebook', 'Instagram', 'TikTok', 'LinkedIn', 'None yet'] },
      { id: 'hasWebsite', question: 'Do you currently have a website?', type: 'single', condField: 'hasWebsite', options: ["Yes, and it's working well", 'Yes, but it needs improvement', "No, I don't have one"] },
      { id: 'googleBusiness', question: 'Are you on Google Business Profile?', type: 'single', condField: 'googleBusiness', options: ["Yes, it's set up and active", "Yes, but it's incomplete", "No, I'm not listed"] },
      { id: 'seoGoal', question: "What's your main goal?", type: 'single', condField: 'seoGoal', options: ['Rank higher on Google', 'Get more social media followers', 'Both equally', 'Not sure yet'] },
      contact,
    ]
  }

  if (isWebsite) {
    return [
      { id: 'hasWebsite', question: 'Do you currently have a website?', type: 'single', condField: 'hasWebsite', options: ['Yes, but it needs a full redesign', "Yes, but it's not generating enquiries", 'No, I need one built from scratch'] },
      { id: 'industry', question: 'What industry are you in?', type: 'single', condField: 'industry', options: ['Hospitality & Food', 'Trades & Construction', 'Beauty & Hair', 'Fitness & Wellness', 'Retail', 'Professional Services', 'Healthcare', 'Other'] },
      { id: 'needsBooking', question: 'Do you need a booking or appointment system?', type: 'single', condField: 'needsBooking', options: ['Yes, definitely', 'Maybe in future', 'No, just a brochure site'] },
      contact,
    ]
  }

  if (isBooking) {
    const steps: WizardStep[] = [
      { id: 'businessType', question: 'What type of business are you?', type: 'single', condField: 'businessType', options: ['Hair or beauty salon', 'Nail studio', 'Fitness or personal training', 'Clinic or healthcare', 'Restaurant or hospitality', 'Other appointment-based business'] },
      { id: 'currentBooking', question: 'How do you currently take bookings?', type: 'single', condField: 'currentBooking', options: ['Phone calls only', 'WhatsApp or DM', 'Third party app (Fresha, Treatwell etc.)', 'No formal system yet'] },
      { id: 'bookingNeeds', question: 'What matters most to you?', type: 'single', condField: 'bookingNeeds', options: ['Online booking 24/7', 'Automated confirmation emails', 'Reminder messages before appointments', 'Cancellation management', 'Multiple services in one booking', 'Staff or multi-therapist scheduling'] },
    ]
    if (serviceKey === 'booking-elite') {
      steps.push({ id: 'needsSMS', question: 'Do you need SMS reminders as well as email?', type: 'single', condField: 'needsSMS', options: ['Yes, SMS and email both', 'Email only is fine', 'Not sure yet'] })
    }
    steps.push(contact)
    return steps
  }

  // General — no serviceKey
  return [
    { id: 'interests', question: 'What do you need most help with?', type: 'single', condField: 'interests', options: ['Social media management', 'SEO and blogging', 'Website design or rebuild', 'Booking & automation system', 'Not sure — just want advice'] },
    { id: 'hasWebsite', question: 'Do you currently have a website?', type: 'single', condField: 'hasWebsite', options: ["Yes, and I'm happy with it", 'Yes, but it needs work', 'No, I need one built'] },
    { id: 'budget', question: "What's your monthly marketing budget?", type: 'single', condField: 'budget', options: ['Under £150/month', '£150–£300/month', '£300–£500/month', '£500+/month', 'Not sure yet'] },
    { id: 'discovery', question: 'How are customers finding you right now?', type: 'single', condField: 'discovery', options: ['Word of mouth / referrals', 'Google search', 'Social media', "I'm not getting enough customers yet", 'Mix of everything'] },
    contact,
  ]
}

// ── Slide animation ───────────────────────────────────────────────────────────

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 52 : -52, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.28, ease: [0.25, 0.1, 0.25, 1] as const } },
  exit:  (dir: number) => ({ x: dir > 0 ? -52 : 52, opacity: 0, transition: { duration: 0.18 } }),
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function AuditModal({ open, onClose, defaultService = '', mode = 'service', serviceKey }: Props) {
  const isPackageMode = mode === 'book-package'

  const [form,      setFormState] = useState({ ...empty, service: defaultService })
  const [cond,      setCond]      = useState<CondForm>({ ...emptyCond })
  const [stepIndex, setStepIndex] = useState(0)
  const [dir,       setDir]       = useState(1)
  const [loading,   setLoading]   = useState(false)
  const [success,   setSuccess]   = useState(false)
  const [error,     setError]     = useState('')
  const nameRef = useRef<HTMLInputElement>(null)

  const steps      = useMemo(() => buildSteps(serviceKey, isPackageMode), [serviceKey, isPackageMode])
  const step       = steps[stepIndex]
  const totalSteps = steps.length
  // Progress goes from 0% at step 0 to 100% at last step
  const progress   = totalSteps > 1 ? (stepIndex / (totalSteps - 1)) * 100 : 100

  useEffect(() => {
    setFormState(prev => ({ ...prev, service: defaultService }))
  }, [defaultService])

  // Auto-focus name field when contact step appears
  useEffect(() => {
    if (step?.type === 'contact') setTimeout(() => nameRef.current?.focus(), 120)
  }, [stepIndex, step?.type])

  // Reset on close
  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setFormState({ ...empty, service: defaultService })
        setCond({ ...emptyCond })
        setStepIndex(0)
        setDir(1)
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
    setFormState(prev => ({ ...prev, [field]: value }))
  }

  function goNext() {
    setDir(1)
    setStepIndex(i => Math.min(i + 1, totalSteps - 1))
  }

  function goBack() {
    setDir(-1)
    setStepIndex(i => Math.max(i - 1, 0))
  }

  function pickSingle(field: keyof CondForm, value: string) {
    setCond(prev => {
      const current = prev[field]
      return { ...prev, [field]: Array.isArray(current) ? [value] : value }
    })
    setTimeout(goNext, 320)
  }

  function pickPackage(value: string) {
    setFormState(prev => ({ ...prev, service: value }))
    setTimeout(goNext, 320)
  }

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

  const inputCls = 'w-full bg-[#1a1a1a] border border-white/10 focus:border-[#FFC512]/60 focus:outline-none rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 transition-colors duration-200'
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
      <div className="relative z-10 w-full max-w-md bg-[#222222] border border-white/10 rounded-2xl shadow-2xl shadow-black/60 flex flex-col max-h-[92vh]">

        {/* Progress bar */}
        <div className="h-1 bg-white/5 rounded-t-2xl overflow-hidden flex-shrink-0">
          <motion.div
            className="h-full bg-[#FFC512] rounded-full"
            animate={{ width: `${success ? 100 : progress}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>

        {/* Top bar — back | counter | close */}
        <div className="flex items-center justify-between px-5 py-4 flex-shrink-0">
          <button
            onClick={stepIndex > 0 && !success ? goBack : onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white flex items-center justify-center transition-all duration-200"
            aria-label={stepIndex > 0 && !success ? 'Go back' : 'Close'}
          >
            {stepIndex > 0 && !success ? <ArrowLeft size={15} /> : <X size={15} />}
          </button>

          {!success && (
            <span className="text-white/30 text-xs font-medium tabular-nums">
              {stepIndex + 1} / {totalSteps}
            </span>
          )}

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white flex items-center justify-center transition-all duration-200"
            aria-label="Close"
          >
            <X size={15} />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 overscroll-contain">
          {success ? (

            /* ── Success ─────────────────────────────────────────────── */
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-8 py-10 text-center"
            >
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
            </motion.div>

          ) : (

            /* ── Wizard steps ─────────────────────────────────────────── */
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={stepIndex}
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="px-6 pb-8"
              >

                {/* Question heading */}
                <div className="mb-6">
                  {stepIndex === 0 && (
                    <span className="inline-block text-[#FFC512] text-xs font-semibold uppercase tracking-widest mb-3">
                      {isPackageMode ? 'No contracts — cancel anytime' : 'Free — No obligation'}
                    </span>
                  )}
                  <h2 className="font-display font-bold text-white text-xl sm:text-2xl tracking-tight leading-snug">
                    {step.question}
                  </h2>
                  {step.subtext && (
                    <p className="text-white/45 text-sm mt-2 leading-relaxed font-normal">{step.subtext}</p>
                  )}
                </div>

                {/* ── Single-select cards ───────────────────────────── */}
                {(step.type === 'single') && step.condField && (
                  <div className="space-y-2.5">
                    {step.options!.map(opt => {
                      const selected = cond[step.condField!] === opt
                      return (
                        <button
                          key={opt}
                          onClick={() => pickSingle(step.condField!, opt)}
                          className={`w-full text-left px-4 py-3.5 rounded-xl border-2 transition-all duration-150 group ${
                            selected
                              ? 'border-[#FFC512] bg-[#FFC512]/10 text-white'
                              : 'border-white/10 bg-[#1a1a1a] text-white/65 hover:border-white/25 hover:text-white hover:bg-[#1d1d1d]'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <span className="text-sm font-medium leading-snug">{opt}</span>
                            <span className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors duration-150 ${
                              selected ? 'border-[#FFC512] bg-[#FFC512]' : 'border-white/20 group-hover:border-white/40'
                            }`}>
                              {selected && <Check size={11} className="text-[#222222]" strokeWidth={3} />}
                            </span>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                )}

                {/* ── Package select cards ──────────────────────────── */}
                {step.type === 'package' && (
                  <div className="space-y-2.5">
                    {step.options!.map(opt => {
                      const selected = form.service === opt
                      return (
                        <button
                          key={opt}
                          onClick={() => pickPackage(opt)}
                          className={`w-full text-left px-4 py-3.5 rounded-xl border-2 transition-all duration-150 group ${
                            selected
                              ? 'border-[#FFC512] bg-[#FFC512]/10 text-white'
                              : 'border-white/10 bg-[#1a1a1a] text-white/65 hover:border-white/25 hover:text-white hover:bg-[#1d1d1d]'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <span className="text-sm font-medium leading-snug">{opt}</span>
                            <span className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors duration-150 ${
                              selected ? 'border-[#FFC512] bg-[#FFC512]' : 'border-white/20 group-hover:border-white/40'
                            }`}>
                              {selected && <Check size={11} className="text-[#222222]" strokeWidth={3} />}
                            </span>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                )}

                {/* ── Contact step ──────────────────────────────────── */}
                {step.type === 'contact' && (
                  <form onSubmit={handleSubmit} className="space-y-4">

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="wiz-name" className={labelCls}>Your Name *</label>
                        <input
                          ref={nameRef}
                          id="wiz-name"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="Jane Smith"
                          value={form.name}
                          onChange={e => set('name', e.target.value)}
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label htmlFor="wiz-business" className={labelCls}>Business *</label>
                        <input
                          id="wiz-business"
                          type="text"
                          required
                          autoComplete="organization"
                          placeholder="Your Business"
                          value={form.business}
                          onChange={e => set('business', e.target.value)}
                          className={inputCls}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="wiz-email" className={labelCls}>Email *</label>
                      <input
                        id="wiz-email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="jane@yourbusiness.co.uk"
                        value={form.email}
                        onChange={e => set('email', e.target.value)}
                        className={inputCls}
                      />
                    </div>

                    <div>
                      <label htmlFor="wiz-phone" className={labelCls}>
                        Phone <span className="normal-case text-white/30 font-normal">(optional)</span>
                      </label>
                      <input
                        id="wiz-phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="07700 000 000"
                        value={form.phone}
                        onChange={e => set('phone', e.target.value)}
                        className={inputCls}
                      />
                    </div>

                    {!isPackageMode && (
                      <>
                        <div>
                          <label htmlFor="wiz-website" className={labelCls}>
                            Website <span className="normal-case text-white/30 font-normal">(optional)</span>
                          </label>
                          <input
                            id="wiz-website"
                            type="text"
                            placeholder="https://yourbusiness.co.uk"
                            value={form.website}
                            onChange={e => set('website', e.target.value)}
                            className={inputCls}
                          />
                        </div>

                        <div>
                          <label htmlFor="wiz-social" className={labelCls}>
                            Social Handles <span className="normal-case text-white/30 font-normal">(optional)</span>
                          </label>
                          <input
                            id="wiz-social"
                            type="text"
                            placeholder="@yourbusiness on Instagram & Facebook"
                            value={form.social}
                            onChange={e => set('social', e.target.value)}
                            className={inputCls}
                          />
                        </div>
                      </>
                    )}

                    <div>
                      <label htmlFor="wiz-message" className={labelCls}>
                        {isPackageMode ? 'Anything else?' : 'Anything to focus on?'}
                        {' '}<span className="normal-case text-white/30 font-normal">(optional)</span>
                      </label>
                      <textarea
                        id="wiz-message"
                        rows={3}
                        placeholder={
                          isPackageMode
                            ? 'Any questions about the package…'
                            : 'E.g. we post regularly but get very little engagement…'
                        }
                        value={form.message}
                        onChange={e => set('message', e.target.value)}
                        className={`${inputCls} resize-none`}
                      />
                    </div>

                    {/* Honeypot — hidden from real users */}
                    <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: '-9999px', opacity: 0, width: 0, height: 0, overflow: 'hidden' }}>
                      <label htmlFor="hp-wiz">Leave this empty</label>
                      <input id="hp-wiz" type="text" name="hp" tabIndex={-1} autoComplete="off" value={form.hp ?? ''} onChange={e => set('hp', e.target.value)} />
                    </div>

                    {error && <p className="text-red-400 text-xs font-medium">{error}</p>}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] disabled:opacity-60 disabled:cursor-not-allowed text-[#222222] font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-95"
                    >
                      {loading ? (
                        <><Loader2 size={16} className="animate-spin" /> Sending…</>
                      ) : isPackageMode ? (
                        <>Book My Package <ArrowRight size={16} /></>
                      ) : (
                        <>Book My Free Digital Health Check <ArrowRight size={16} /></>
                      )}
                    </button>

                    <p className="text-white/30 text-xs text-center font-normal">
                      No commitment. We'll never share your details.
                    </p>
                  </form>
                )}

              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  )
}

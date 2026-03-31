'use client'

import { useActionState, useRef, useEffect } from 'react'
import { submitContact, type ContactState } from '@/app/actions/contact'
import { trackFormSubmit } from '@/lib/analytics'
import { Loader2, AlertCircle, ArrowRight } from 'lucide-react'

const SERVICES = [
  'Social Media Management',
  'Paid Advertising',
  'Content Creation',
  'SEO & Local Search',
  'Analytics & Reporting',
  'Brand Strategy',
  'General Enquiry',
]

const initialState: ContactState = { status: 'idle' }

// ── Field wrapper ─────────────────────────────────────────────────────────────
function Field({
  label,
  required,
  error,
  children,
}: {
  label: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-white/80">
        {label}
        {required && <span className="text-[#FFC512] ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-red-400 text-xs flex items-center gap-1 mt-0.5">
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  )
}

// ── Shared input class ─────────────────────────────────────────────────────────
const inputClass = (hasError: boolean) =>
  `w-full bg-[#2d2d2d] border rounded-md px-4 py-3 text-white text-sm placeholder-white/30 outline-none transition-all duration-200 focus:ring-2 focus:ring-[#FFC512]/50 focus:border-[#FFC512] ${
    hasError
      ? 'border-red-500/70'
      : 'border-white/10 hover:border-white/25'
  }`

// ─── Main form component ──────────────────────────────────────────────────────
export default function ContactForm() {
  const [state, action, isPending] = useActionState<ContactState, FormData>(
    submitContact,
    initialState
  )
  const formRef = useRef<HTMLFormElement>(null)

  // Track successful submission in GA
  useEffect(() => {
    if (state.status === 'success') {
      trackFormSubmit('contact_form', 'contact_page')
      formRef.current?.reset()
    }
  }, [state.status])

  const fieldErrors = state.status === 'validation' ? state.fields : {}

  // ── Success state ────────────────────────────────────────────────────────
  if (state.status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-8 bg-[#2d2d2d] border border-white/5 rounded-2xl gap-7 min-h-[500px]">

        {/* Status badge — pill with inline SVG tick, no floating circle */}
        <div className="inline-flex items-center gap-2.5 bg-[#FFC512]/10 border border-[#FFC512]/25 rounded-full px-5 py-2.5">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M2.5 7L5.5 10L11.5 4" stroke="#FFC512" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[#FFC512] text-sm font-semibold tracking-wide">Message Received</span>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-display font-bold text-2xl text-white tracking-tight">
            We'll be in touch soon
          </h3>
          <p className="text-white/55 text-sm leading-relaxed max-w-[260px] mx-auto">
            Expect a reply within{' '}
            <span className="text-white font-medium">1 working day</span>.
            A confirmation has been sent to your inbox.
          </p>
        </div>

        <button
          onClick={() => window.location.reload()}
          className="text-white/40 hover:text-[#FFC512] text-xs font-medium transition-colors duration-200"
        >
          Send another message →
        </button>
      </div>
    )
  }

  // ── Form ─────────────────────────────────────────────────────────────────
  return (
    <form ref={formRef} action={action} noValidate className="flex flex-col gap-5">

      {/* Error banner */}
      {state.status === 'error' && (
        <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-4 py-3 rounded-lg">
          <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
          <p>{state.message}</p>
        </div>
      )}

      {/* Row: Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name" required error={fieldErrors?.name}>
          <input
            type="text"
            name="name"
            placeholder="Sarah Mitchell"
            autoComplete="name"
            className={inputClass(!!fieldErrors?.name)}
          />
        </Field>

        <Field label="Email Address" required error={fieldErrors?.email}>
          <input
            type="email"
            name="email"
            placeholder="sarah@example.com"
            autoComplete="email"
            className={inputClass(!!fieldErrors?.email)}
          />
        </Field>
      </div>

      {/* Row: Phone + Service */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Phone Number" error={fieldErrors?.phone}>
          <input
            type="tel"
            name="phone"
            placeholder="07700 900000"
            autoComplete="tel"
            className={inputClass(!!fieldErrors?.phone)}
          />
        </Field>

        <Field label="Service You're Interested In" error={fieldErrors?.service}>
          <select
            name="service"
            defaultValue=""
            className={`${inputClass(!!fieldErrors?.service)} appearance-none cursor-pointer`}
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
          >
            <option value="" disabled>Select a service…</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </Field>
      </div>

      {/* Message */}
      <Field label="Your Message" required error={fieldErrors?.message}>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us about your business and what you're looking to achieve with social media…"
          className={`${inputClass(!!fieldErrors?.message)} resize-none`}
        />
      </Field>

      {/* Honeypot — hidden from real users, catches bots that fill all fields */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: '-9999px', opacity: 0, width: 0, height: 0, overflow: 'hidden' }}>
        <label htmlFor="hp-contact">Leave this empty</label>
        <input id="hp-contact" type="text" name="hp" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Privacy note */}
      <p className="text-white/35 text-xs leading-relaxed">
        By submitting this form you agree to us contacting you regarding your enquiry.
        We never share your details with third parties.
      </p>

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center justify-center gap-2 bg-[#FFC512] hover:bg-[#e6b010] disabled:opacity-70 disabled:cursor-not-allowed text-[#222222] font-semibold text-base px-8 py-4 rounded-md transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-lg shadow-[#FFC512]/20 self-start"
      >
        {isPending ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send Your Message
            <ArrowRight size={18} />
          </>
        )}
      </button>
    </form>
  )
}

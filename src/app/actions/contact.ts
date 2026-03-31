'use server'

import { headers } from 'next/headers'
import { Resend } from 'resend'
import { checkRateLimit } from '@/lib/rate-limit'

// ─── Types ────────────────────────────────────────────────────────────────────

export type ContactState =
  | { status: 'idle' }
  | { status: 'success' }
  | { status: 'error'; message: string }
  | { status: 'validation'; fields: Partial<Record<ContactField, string>> }

type ContactField = 'name' | 'email' | 'phone' | 'service' | 'message'

const SERVICES = [
  'Social Media Management',
  'Paid Advertising',
  'Content Creation',
  'SEO & Local Search',
  'Analytics & Reporting',
  'Brand Strategy',
  'General Enquiry',
] as const

// ─── Input limits ─────────────────────────────────────────────────────────────

const LIMITS: Record<ContactField, number> = {
  name:    100,
  email:   254,
  phone:    30,
  service: 100,
  message: 3000,
}

// ─── HTML escaping ────────────────────────────────────────────────────────────

function e(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

// ─── Validation ───────────────────────────────────────────────────────────────

function validate(data: {
  name: string
  email: string
  phone: string
  service: string
  message: string
}): Partial<Record<ContactField, string>> | null {
  const errors: Partial<Record<ContactField, string>> = {}

  if (!data.name.trim())    errors.name = 'Please enter your name.'
  if (data.name.length > LIMITS.name) errors.name = 'Name is too long.'

  if (!data.email.trim())   errors.email = 'Please enter your email.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
                            errors.email = 'Please enter a valid email address.'
  if (data.email.length > LIMITS.email) errors.email = 'Email address is too long.'

  if (data.phone.length > LIMITS.phone) errors.phone = 'Phone number is too long.'

  if (!data.message.trim()) errors.message = 'Please enter a message.'
  else if (data.message.trim().length < 10)
                            errors.message = 'Message must be at least 10 characters.'
  if (data.message.length > LIMITS.message) errors.message = 'Message is too long (max 3000 characters).'

  if (data.service && !SERVICES.includes(data.service as typeof SERVICES[number]))
                            errors.service = 'Please select a valid service.'

  return Object.keys(errors).length ? errors : null
}

// ─── Email templates ──────────────────────────────────────────────────────────

function buildInternalEmail(data: {
  name: string
  email: string
  phone: string
  service: string
  message: string
}): string {
  const field = (label: string, value: string, href?: string) => `
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px;border-radius:6px;overflow:hidden;">
      <tr>
        <td width="4" style="background:#FFC512;">&nbsp;</td>
        <td style="background:#f7f7f7;padding:13px 18px;">
          <div style="font-size:10px;font-weight:700;color:#777777;text-transform:uppercase;letter-spacing:1.4px;margin-bottom:5px;">${e(label)}</div>
          ${href
            ? `<a href="${e(href)}" style="font-size:15px;color:#111111;font-weight:600;text-decoration:none;">${e(value)}</a>`
            : `<div style="font-size:15px;color:#111111;font-weight:600;">${e(value)}</div>`
          }
        </td>
      </tr>
    </table>`

  const mailtoHref = `mailto:${encodeURIComponent(data.email)}?subject=Re%3A%20Your%20Bee%20Viral%20Enquiry`

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Enquiry — Bee Viral</title>
</head>
<body style="margin:0;padding:0;background:#efefef;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#efefef;padding:48px 20px;">
    <tr>
      <td align="center">
        <table width="580" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:10px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:#1a1a1a;padding:28px 40px 24px;">
              <div style="font-family:Arial,sans-serif;font-size:24px;font-weight:900;color:#FFC512;letter-spacing:-0.5px;margin-bottom:4px;">BEE VIRAL</div>
              <div style="font-size:11px;color:#ffffff;opacity:0.45;letter-spacing:2.5px;text-transform:uppercase;">New Lead Notification</div>
            </td>
          </tr>
          <tr>
            <td style="background:#FFC512;height:3px;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px 32px;">

              <p style="margin:0 0 28px;font-size:15px;color:#444444;line-height:1.65;">
                A new enquiry has come in via the website. Details below.
              </p>

              ${field('Name',    data.name)}
              ${field('Email',   data.email, `mailto:${data.email}`)}
              ${field('Phone',   data.phone || 'Not provided')}
              ${field('Service', data.service || 'Not specified')}

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:4px;margin-bottom:32px;border-radius:6px;overflow:hidden;">
                <tr>
                  <td width="4" style="background:#FFC512;">&nbsp;</td>
                  <td style="background:#f7f7f7;padding:14px 18px;">
                    <div style="font-size:10px;font-weight:700;color:#777777;text-transform:uppercase;letter-spacing:1.4px;margin-bottom:8px;">Message</div>
                    <div style="font-size:15px;color:#333333;line-height:1.75;white-space:pre-wrap;">${e(data.message)}</div>
                  </td>
                </tr>
              </table>

              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-radius:7px;background:#FFC512;">
                    <a href="${e(mailtoHref)}"
                       style="display:inline-block;padding:13px 30px;font-size:14px;font-weight:700;color:#1a1a1a;text-decoration:none;letter-spacing:0.3px;">
                      Reply to ${e(data.name)}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="border-top:1px solid #e8e8e8;padding:16px 40px;background:#fafafa;">
              <p style="margin:0;font-size:11px;color:#aaaaaa;">
                Submitted via the contact form at beeviral.co.uk
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

function buildConfirmationEmail(name: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>We've received your message — Bee Viral</title>
</head>
<body style="margin:0;padding:0;background:#efefef;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#efefef;padding:48px 20px;">
    <tr>
      <td align="center">
        <table width="580" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:10px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:#1a1a1a;padding:28px 40px 24px;">
              <div style="font-family:Arial,sans-serif;font-size:24px;font-weight:900;color:#FFC512;letter-spacing:-0.5px;margin-bottom:4px;">BEE VIRAL</div>
              <div style="font-size:11px;color:#ffffff;opacity:0.45;letter-spacing:2.5px;text-transform:uppercase;">South Yorkshire's Social Media Agency</div>
            </td>
          </tr>
          <tr>
            <td style="background:#FFC512;height:3px;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:48px 40px 40px;text-align:center;">

              <div style="display:inline-block;background:#f5f5f5;border:1px solid #e0e0e0;border-radius:100px;padding:7px 18px;margin-bottom:28px;">
                <span style="font-size:12px;font-weight:700;color:#555555;letter-spacing:1px;text-transform:uppercase;">Message Received</span>
              </div>

              <h1 style="margin:0 0 16px;font-size:28px;font-weight:800;color:#111111;letter-spacing:-0.5px;line-height:1.2;">
                Thanks, ${e(name)}!
              </h1>

              <p style="margin:0 0 12px;font-size:16px;color:#555555;line-height:1.7;max-width:380px;margin-left:auto;margin-right:auto;">
                We've received your message and will get back to you within <strong style="color:#111111;">1 working day</strong>.
              </p>
              <p style="margin:0 0 40px;font-size:14px;color:#888888;line-height:1.6;">
                In the meantime, feel free to explore our work or learn about our packages.
              </p>

              <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
                <tr>
                  <td style="padding-right:10px;">
                    <a href="https://www.beeviral.co.uk/portfolio"
                       style="display:inline-block;background:#1a1a1a;color:#ffffff;font-weight:700;font-size:13px;padding:13px 26px;border-radius:7px;text-decoration:none;letter-spacing:0.3px;">
                      See Our Work
                    </a>
                  </td>
                  <td>
                    <a href="https://www.beeviral.co.uk/packages"
                       style="display:inline-block;background:#FFC512;color:#1a1a1a;font-weight:700;font-size:13px;padding:13px 26px;border-radius:7px;text-decoration:none;letter-spacing:0.3px;">
                      View Packages
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="border-top:1px solid #e8e8e8;padding:18px 40px;background:#fafafa;text-align:center;">
              <p style="margin:0;font-size:11px;color:#aaaaaa;">
                Bee Viral &middot; South Yorkshire &middot;
                <a href="mailto:info@beeviral.co.uk" style="color:#888888;text-decoration:none;">info@beeviral.co.uk</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

// ─── Server action ────────────────────────────────────────────────────────────

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {

  // ── Rate limiting ────────────────────────────────────────────────────────
  const headersList = await headers()
  const ip = headersList.get('x-forwarded-for')?.split(',')[0].trim()
           || headersList.get('x-real-ip')
           || 'unknown'

  if (!checkRateLimit(`contact:${ip}`, 5, 15 * 60 * 1000)) {
    return {
      status: 'error',
      message: 'Too many submissions. Please wait a few minutes and try again.',
    }
  }

  // ── Honeypot ─────────────────────────────────────────────────────────────
  // If the hidden hp field was filled, silently pretend success
  const hp = formData.get('hp') as string
  if (hp) return { status: 'success' }

  const data = {
    name:    (formData.get('name')    as string ?? '').trim(),
    email:   (formData.get('email')   as string ?? '').trim(),
    phone:   (formData.get('phone')   as string ?? '').trim(),
    service: (formData.get('service') as string ?? '').trim(),
    message: (formData.get('message') as string ?? '').trim(),
  }

  // ── Server-side validation ─────────────────────────────────────────────
  const errors = validate(data)
  if (errors) {
    return { status: 'validation', fields: errors }
  }

  // ── Send via Resend ────────────────────────────────────────────────────
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set')
    return { status: 'error', message: 'Email service is not configured. Please try again later.' }
  }

  const resend = new Resend(apiKey)

  try {
    await resend.emails.send({
      from:    'Bee Viral Website <noreply@beeviral.co.uk>',
      to:      ['beeviral47@gmail.com'],
      replyTo: data.email,
      subject: `New Enquiry from ${data.name}${data.service ? ` — ${data.service}` : ''}`,
      html:    buildInternalEmail(data),
    })

    await resend.emails.send({
      from:    'Bee Viral <noreply@beeviral.co.uk>',
      to:      [data.email],
      subject: "We've received your message — Bee Viral",
      html:    buildConfirmationEmail(data.name),
    })

    return { status: 'success' }

  } catch (err) {
    console.error('[contact] Resend error:', err)
    return {
      status: 'error',
      message: 'Something went wrong sending your message. Please email us directly at info@beeviral.co.uk',
    }
  }
}

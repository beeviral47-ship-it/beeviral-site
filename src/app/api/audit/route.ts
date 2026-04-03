import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { checkRateLimit } from '@/lib/rate-limit'

const TO_EMAIL    = 'beeviral47@gmail.com'
const FROM_NOTIFY = 'Bee Viral Website <noreply@beeviral.co.uk>'
const FROM_CONFIRM= 'Bee Viral <noreply@beeviral.co.uk>'

// ─── Input limits ─────────────────────────────────────────────────────────────
const LIMITS = { name: 100, business: 150, email: 254, phone: 30, service: 100, website: 500, social: 300, message: 3000 }

// ─── HTML escaping ────────────────────────────────────────────────────────────
function e(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

// Only allow http/https URLs in href attributes to prevent javascript: URIs
function safeHref(url: string): string {
  try {
    const u = new URL(url)
    return u.protocol === 'https:' || u.protocol === 'http:' ? url : ''
  } catch {
    return ''
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function field(label: string, value: string, link?: string) {
  const safeLink = link ? safeHref(link) : ''
  return `
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px;border-radius:6px;overflow:hidden;">
      <tr>
        <td width="4" style="background:#FFC512;">&nbsp;</td>
        <td style="background:#f7f7f7;padding:13px 18px;">
          <div style="font-size:10px;font-weight:700;color:#777777;text-transform:uppercase;letter-spacing:1.4px;margin-bottom:5px;">${e(label)}</div>
          ${safeLink
            ? `<a href="${e(safeLink)}" style="font-size:15px;color:#111111;font-weight:600;text-decoration:none;">${e(value)}</a>`
            : `<div style="font-size:15px;color:#111111;font-weight:600;">${e(value)}</div>`
          }
        </td>
      </tr>
    </table>`
}

function emailShell(headerSubtitle: string, bodyHtml: string) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
              <div style="font-size:11px;color:#ffffff;opacity:0.45;letter-spacing:2.5px;text-transform:uppercase;">${e(headerSubtitle)}</div>
            </td>
          </tr>
          <tr>
            <td style="background:#FFC512;height:3px;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px 32px;">
              ${bodyHtml}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="border-top:1px solid #e8e8e8;padding:16px 40px;background:#fafafa;">
              <p style="margin:0;font-size:11px;color:#aaaaaa;">
                Submitted via beeviral.co.uk &middot;
                <a href="mailto:info@beeviral.co.uk" style="color:#aaaaaa;text-decoration:none;">info@beeviral.co.uk</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim()
}

// ─── Internal notification email (to Bee Viral) ───────────────────────────────

function sectionHeading(title: string) {
  return `<div style="font-size:11px;font-weight:700;color:#999999;text-transform:uppercase;letter-spacing:2px;margin:24px 0 10px;padding-bottom:6px;border-bottom:1px solid #e8e8e8;">${e(title)}</div>`
}

function buildInternalEmail(data: {
  name: string; business: string; email: string
  phone: string; service: string; website: string; social: string; message: string
  isPackage: boolean; serviceKey: string
  currentPlatforms: string; postingFrequency: string; socialGoal: string
  hasWebsite: string; googleBusiness: string; seoGoal: string; industry: string
  needsBooking: string; businessType: string; currentBooking: string
  bookingNeeds: string; needsSMS: string; interests: string
  budget: string; discovery: string
}) {
  const selectLabel = data.isPackage ? 'Package Selected' : 'Service Interested In'
  const notifLabel  = data.isPackage ? 'New Package Booking' : 'New Lead Notification'
  const mailtoHref  = `mailto:${encodeURIComponent(data.email)}?subject=Re%3A%20Your%20Bee%20Viral%20Enquiry`

  // Conditional fields — only render rows that have a value
  const condFields: Array<[string, string]> = [
    ['Current Platforms',      data.currentPlatforms],
    ['Posting Frequency',      data.postingFrequency],
    ['Social Goal',            data.socialGoal],
    ['Has Website',            data.hasWebsite],
    ['Google Business',        data.googleBusiness],
    ['SEO Goal',               data.seoGoal],
    ['Industry',               data.industry],
    ['Needs Booking System',   data.needsBooking],
    ['Business Type',          data.businessType],
    ['Current Booking Method', data.currentBooking],
    ['Booking Needs',          data.bookingNeeds],
    ['Needs SMS',              data.needsSMS],
    ['Interests',              data.interests],
    ['Monthly Budget',         data.budget],
    ['How They Find Customers',data.discovery],
  ]
  const condRows = condFields
    .filter(([, v]) => v && v.trim())
    .map(([label, value]) => field(label, value))
    .join('')

  const body = `
    <p style="margin:0 0 28px;font-size:15px;color:#444444;line-height:1.65;">
      A new ${data.isPackage ? 'package booking request' : 'audit enquiry'} has come in via the website. Details below.
    </p>

    ${field('Name',     data.name)}
    ${field('Business', data.business)}
    ${field('Email',    data.email, `mailto:${data.email}`)}
    ${field('Phone',    data.phone || '—')}

    ${sectionHeading('Service Information')}
    ${data.serviceKey ? field('Service Key', data.serviceKey) : ''}
    ${data.service ? field(selectLabel, data.service) : ''}
    ${!data.isPackage && data.website ? field('Website', data.website, safeHref(data.website) ? data.website : undefined) : ''}
    ${!data.isPackage && data.social  ? field('Social Media Handles', data.social) : ''}

    ${condRows ? `${sectionHeading('Conditional Questions')}${condRows}` : ''}

    ${data.message ? `
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:16px;margin-bottom:32px;border-radius:6px;overflow:hidden;">
      <tr>
        <td width="4" style="background:#FFC512;">&nbsp;</td>
        <td style="background:#f7f7f7;padding:14px 18px;">
          <div style="font-size:10px;font-weight:700;color:#777777;text-transform:uppercase;letter-spacing:1.4px;margin-bottom:8px;">Message</div>
          <div style="font-size:15px;color:#333333;line-height:1.75;white-space:pre-wrap;">${e(data.message)}</div>
        </td>
      </tr>
    </table>` : '<div style="margin-bottom:32px;"></div>'}

    <!-- Reply CTA -->
    <table cellpadding="0" cellspacing="0">
      <tr>
        <td style="border-radius:7px;background:#FFC512;">
          <a href="${mailtoHref}"
             style="display:inline-block;padding:13px 30px;font-size:14px;font-weight:700;color:#1a1a1a;text-decoration:none;letter-spacing:0.3px;">
            Reply to ${e(data.name)}
          </a>
        </td>
      </tr>
    </table>
  `

  return emailShell(notifLabel, body)
}

// ─── Confirmation email (to visitor) ─────────────────────────────────────────

function buildConfirmationEmail(data: {
  name: string; business: string; service: string; isPackage: boolean
}) {
  const headline    = data.isPackage ? `You're all booked in, ${e(data.name)}!` : `Thanks, ${e(data.name)}!`
  const statusLabel = data.isPackage ? 'Booking Received'  : 'Message Received'
  const bodyCopy    = data.isPackage
    ? `We've received your package booking request and will be in touch within <strong style="color:#111111;">1 working day</strong> to get everything set up and introduce your account manager.`
    : `We've received your enquiry and will get back to you within <strong style="color:#111111;">1 working day</strong>.`
  const subCopy = data.isPackage
    ? `In the meantime, feel free to learn more about what's included in your package.`
    : `In the meantime, feel free to explore our work or learn about our packages.`

  const body = `
    <div style="text-align:center;">

      <!-- Status pill -->
      <div style="display:inline-block;background:#f5f5f5;border:1px solid #e0e0e0;border-radius:100px;padding:7px 18px;margin-bottom:28px;">
        <span style="font-size:12px;font-weight:700;color:#555555;letter-spacing:1px;text-transform:uppercase;">${e(statusLabel)}</span>
      </div>

      <!-- Headline -->
      <h1 style="margin:0 0 16px;font-size:28px;font-weight:800;color:#111111;letter-spacing:-0.5px;line-height:1.2;">
        ${headline}
      </h1>

      <!-- Body copy -->
      <p style="margin:0 0 12px;font-size:16px;color:#555555;line-height:1.7;max-width:380px;margin-left:auto;margin-right:auto;">
        ${bodyCopy}
      </p>
      <p style="margin:0 0 40px;font-size:14px;color:#888888;line-height:1.6;">
        ${subCopy}
      </p>

      ${data.service ? `
      <!-- Summary card -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:36px;border-radius:6px;overflow:hidden;text-align:left;">
        <tr>
          <td width="4" style="background:#FFC512;">&nbsp;</td>
          <td style="background:#f7f7f7;padding:13px 18px;">
            <div style="font-size:10px;font-weight:700;color:#777777;text-transform:uppercase;letter-spacing:1.4px;margin-bottom:5px;">
              ${data.isPackage ? 'Package' : 'Service Enquired About'}
            </div>
            <div style="font-size:15px;color:#111111;font-weight:600;">${e(data.service)}</div>
          </td>
        </tr>
      </table>` : '<div style="margin-bottom:36px;"></div>'}

      <!-- CTA buttons -->
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

      <!-- Contact fallback -->
      <p style="margin:32px 0 0;font-size:13px;color:#888888;line-height:1.6;">
        Need to reach us sooner?
        <a href="tel:07723079176" style="color:#555555;font-weight:600;text-decoration:none;">07723 079 176</a>
        &middot;
        <a href="mailto:info@beeviral.co.uk" style="color:#555555;font-weight:600;text-decoration:none;">info@beeviral.co.uk</a>
      </p>

    </div>
  `

  return emailShell('South Yorkshire\'s Social Media Agency', body)
}

// ─── Route handler ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  console.log('[audit] POST received')

  // ── Rate limiting ────────────────────────────────────────────────────────
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim()
          || req.headers.get('x-real-ip')
          || 'unknown'

  if (!checkRateLimit(`audit:${ip}`, 5, 15 * 60 * 1000)) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a few minutes and try again.' },
      { status: 429 }
    )
  }

  try {
    const body = await req.json()

    // ── Honeypot ──────────────────────────────────────────────────────────
    // If a bot fills the hidden hp field, silently pretend success
    if (body.hp) {
      return NextResponse.json({ success: true })
    }

    const {
      name, business, email, phone, service,
      website, social, message, mode, serviceKey,
      currentPlatforms, postingFrequency, socialGoal,
      hasWebsite, googleBusiness, seoGoal, industry,
      needsBooking, businessType, currentBooking,
      bookingNeeds, needsSMS, interests, budget, discovery,
    } = body

    // ── Required field check ───────────────────────────────────────────────
    if (!name || !business || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // ── Length limits ──────────────────────────────────────────────────────
    if (
      String(name).length     > LIMITS.name     ||
      String(business).length > LIMITS.business  ||
      String(email).length    > LIMITS.email     ||
      String(phone || '').length  > LIMITS.phone ||
      String(service || '').length > LIMITS.service ||
      String(website || '').length > LIMITS.website ||
      String(social || '').length  > LIMITS.social  ||
      String(message || '').length > LIMITS.message
    ) {
      return NextResponse.json({ error: 'Input exceeds maximum length' }, { status: 400 })
    }

    // ── Basic email format check ───────────────────────────────────────────
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const isPackage = mode === 'book-package'
    const subject   = isPackage
      ? `New Package Booking — ${String(business)} (${String(service) || 'Package not selected'})`
      : `New Audit Request — ${String(business)} (${String(service) || 'General'})`

    console.log('[audit] validation passed — name:', String(name).trim(), '| email:', String(email).trim())

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('[audit] RESEND_API_KEY is not set')
      return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 })
    }
    console.log('[audit] RESEND_API_KEY present, length:', apiKey.length)

    const resend = new Resend(apiKey)
    console.log('[audit] Resend initialised')

    const emailData = {
      name:             String(name).trim(),
      business:         String(business).trim(),
      email:            String(email).trim(),
      phone:            String(phone || '').trim(),
      service:          String(service || '').trim(),
      website:          String(website || '').trim(),
      social:           String(social || '').trim(),
      message:          String(message || '').trim(),
      isPackage,
      serviceKey:       String(serviceKey || '').trim(),
      currentPlatforms: String(currentPlatforms || '').trim(),
      postingFrequency: String(postingFrequency || '').trim(),
      socialGoal:       String(socialGoal || '').trim(),
      hasWebsite:       String(hasWebsite || '').trim(),
      googleBusiness:   String(googleBusiness || '').trim(),
      seoGoal:          String(seoGoal || '').trim(),
      industry:         String(industry || '').trim(),
      needsBooking:     String(needsBooking || '').trim(),
      businessType:     String(businessType || '').trim(),
      currentBooking:   String(currentBooking || '').trim(),
      bookingNeeds:     String(bookingNeeds || '').trim(),
      needsSMS:         String(needsSMS || '').trim(),
      interests:        String(interests || '').trim(),
      budget:           String(budget || '').trim(),
      discovery:        String(discovery || '').trim(),
    }

    // ── Email 1: internal notification ────────────────────────────────────
    console.log('[audit] EMAIL 1 — from:', FROM_NOTIFY)
    console.log('[audit] EMAIL 1 — to:  ', TO_EMAIL)
    console.log('[audit] EMAIL 1 — subject:', subject)

    const notifyResult = await resend.emails.send({
      from:    FROM_NOTIFY,
      to:      TO_EMAIL,
      replyTo: emailData.email,
      subject,
      html:    buildInternalEmail(emailData),
    })

    console.log('[audit] EMAIL 1 — raw result:', JSON.stringify(notifyResult))

    if (notifyResult.error) {
      console.error('[audit] EMAIL 1 — FAILED:', JSON.stringify(notifyResult.error))
      return NextResponse.json({ success: false, step: 'notify', error: notifyResult.error.message ?? 'Resend rejected the notification email.' }, { status: 500 })
    }
    console.log('[audit] EMAIL 1 — SUCCESS, id:', notifyResult.data?.id)

    // ── Email 2: confirmation to visitor ──────────────────────────────────
    const confirmSubject = isPackage
      ? `Your package booking is confirmed — Bee Viral`
      : `We've received your enquiry — Bee Viral`

    console.log('[audit] EMAIL 2 — from:', FROM_CONFIRM)
    console.log('[audit] EMAIL 2 — to:  ', emailData.email)
    console.log('[audit] EMAIL 2 — subject:', confirmSubject)

    const confirmResult = await resend.emails.send({
      from:    FROM_CONFIRM,
      to:      emailData.email,
      subject: confirmSubject,
      html:    buildConfirmationEmail(emailData),
    })

    console.log('[audit] EMAIL 2 — raw result:', JSON.stringify(confirmResult))

    if (confirmResult.error) {
      console.error('[audit] EMAIL 2 — FAILED:', JSON.stringify(confirmResult.error))
      return NextResponse.json({ success: false, step: 'confirm', error: confirmResult.error.message ?? 'Resend rejected the confirmation email.' }, { status: 500 })
    }
    console.log('[audit] EMAIL 2 — SUCCESS, id:', confirmResult.data?.id)

    console.log('[audit] DONE — both emails sent')
    return NextResponse.json({
      success: true,
      notifyId: notifyResult.data?.id,
      confirmId: confirmResult.data?.id,
    })
  } catch (err) {
    console.error('[audit] unexpected error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}

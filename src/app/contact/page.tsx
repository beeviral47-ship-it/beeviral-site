import type { Metadata } from 'next'
import ContactForm from '@/components/contact/ContactForm'
import { TrackedPhoneLink, TrackedWhatsAppLink } from '@/components/contact/TrackedContactLinks'
import { MapPin, Mail, Phone, MessageCircle, Clock } from 'lucide-react'
import { InstagramIcon, FacebookIcon } from '@/components/ui/SocialIcons'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Bee Viral. Book a free social media audit for your business in Wath, Rotherham, Barnsley or South Yorkshire.',
}

const contactDetails = [
  {
    icon:    <Mail size={20} />,
    label:   'Email',
    value:   'info@beeviral.co.uk',
    href:    'mailto:info@beeviral.co.uk',
    tracked: false,
  },
  {
    icon:    <Phone size={20} />,
    label:   'Phone',
    value:   '07723 079 176',
    href:    'tel:07723079176',
    tracked: 'phone' as const,
  },
  {
    icon:    <MessageCircle size={20} />,
    label:   'WhatsApp',
    value:   'Message us on WhatsApp',
    href:    'https://wa.me/447723079176',
    tracked: 'whatsapp' as const,
  },
  {
    icon:    <MapPin size={20} />,
    label:   'Area',
    value:   'Wath · Rotherham · Barnsley · South Yorkshire',
    href:    null,
    tracked: false,
  },
  {
    icon:    <Clock size={20} />,
    label:   'Office Hours',
    value:   'Mon – Fri, 9am – 5:30pm',
    href:    null,
    tracked: false,
  },
]

const socials = [
  { label: 'Instagram', icon: <InstagramIcon size={18} />, href: 'https://www.instagram.com/beeviralltd/' },
  { label: 'Facebook',  icon: <FacebookIcon size={18} />,  href: 'https://www.facebook.com/profile.php?id=61583786462363' },
]

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-[#222222] pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-honeycomb pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#FFC512]/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#FFC512] text-sm font-medium uppercase tracking-widest mb-4">
            Get In Touch
          </span>
          <h1
            className="font-display font-extrabold text-white mb-6"
            style={{ fontSize: 'clamp(36px, 6vw, 72px)', lineHeight: 0.95, letterSpacing: '-0.02em' }}
          >
            Let's Grow Your<br />
            <span className="text-[#FFC512]">Business Together</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto font-normal leading-relaxed">
            Book a free social media audit. No commitment, no jargon — just an
            honest conversation about what we can do for your business.
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

            {/* ── Left — contact info ── */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div>
                <h2 className="font-display font-bold text-2xl text-white mb-2 tracking-tight">
                  Contact Details
                </h2>
                <p className="text-white/50 text-sm font-normal leading-relaxed">
                  Prefer to reach out directly? Here's how to find us.
                </p>
              </div>

              {/* Detail items */}
              <ul className="flex flex-col gap-5">
                {contactDetails.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#FFC512]/10 text-[#FFC512] flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-1">
                        {item.label}
                      </p>
                      {item.tracked === 'phone' ? (
                        <TrackedPhoneLink />
                      ) : item.tracked === 'whatsapp' ? (
                        <TrackedWhatsAppLink />
                      ) : item.href ? (
                        <a
                          href={item.href}
                          className="text-white text-sm font-medium hover:text-[#FFC512] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm font-normal">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="border-t border-white/10" />

              {/* Social links */}
              <div>
                <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-4">
                  Follow Us
                </p>
                <div className="flex items-center gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#FFC512] text-white/50 hover:text-[#222222] flex items-center justify-center transition-all duration-200 hover:scale-110"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Response time badge */}
              <div className="bg-[#FFC512]/10 border border-[#FFC512]/20 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFC512] animate-pulse" />
                  <span className="text-[#FFC512] text-xs font-semibold uppercase tracking-widest">
                    Fast Response
                  </span>
                </div>
                <p className="text-white/70 text-sm font-normal leading-relaxed">
                  We respond to all enquiries within{' '}
                  <span className="text-white font-medium">1 working day</span>.
                  For urgent matters, call us directly.
                </p>
              </div>
            </div>

            {/* ── Right — form ── */}
            <div className="lg:col-span-3">
              <div className="bg-[#222222] border border-white/5 rounded-2xl p-8 sm:p-10">
                <div className="mb-8">
                  <h2 className="font-display font-bold text-2xl text-white mb-2 tracking-tight">
                    Send Us a Message
                  </h2>
                  <p className="text-white/50 text-sm font-normal">
                    Fields marked <span className="text-[#FFC512]">*</span> are required.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

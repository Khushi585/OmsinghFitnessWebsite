import { ArrowUpRight, Instagram, Linkedin } from 'lucide-react'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { brand, contact, whatsappLink } from '../data/content'
import Reveal from '../components/Reveal'
import BrandMark from '../components/BrandMark'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { label: 'Instagram', href: contact.instagram, icon: Instagram },
  { label: 'WhatsApp', href: whatsappLink, icon: WhatsAppIcon },
  { label: 'LinkedIn', href: contact.linkedin, icon: Linkedin }, // optional — remove if unused
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-charcoal pt-14 text-bone sm:pt-20 lg:pt-24">
      <div className="container-px relative">
        <div className="grid grid-cols-2 gap-8 pb-10 sm:gap-12 sm:pb-16 lg:grid-cols-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-5">
            <Reveal y={20}>
              <a href="#home" className="inline-flex">
                <BrandMark variant="stacked" tone="dark" tagline size={44} />
              </a>
              <p className="mt-6 max-w-xs text-[13px] leading-relaxed text-bone/50">
                {brand.title}
              </p>
              <p className="mt-6 font-display text-[17px] leading-snug text-bone/85">
                Move Better. Get Stronger.
                <span className="italic text-moss-300"> Live Pain-Free.</span>
              </p>
            </Reveal>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <Reveal y={20} delay={0.06}>
              <p className="mb-6 text-[10.5px] font-medium uppercase tracking-wider2 text-bone/40">
                Navigate
              </p>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-[14px] text-bone/70 transition-colors duration-300 hover:text-bone"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={13}
                        strokeWidth={1.6}
                        className="opacity-0 transition-all duration-500 ease-premium group-hover:translate-x-0.5 group-hover:opacity-60"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Contact + socials */}
          <div className="lg:col-span-4">
            <Reveal y={20} delay={0.12}>
              <p className="mb-6 text-[10.5px] font-medium uppercase tracking-wider2 text-bone/40">
                Get in touch
              </p>
              <ul className="space-y-3 text-[14px]">
                <li>
                  <a
                    href={contact.phoneHref}
                    className="text-bone/70 transition-colors hover:text-bone"
                  >
                    {contact.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-bone/70 transition-colors hover:text-bone"
                  >
                    {contact.email}
                  </a>
                </li>
                <li className="text-bone/50">{contact.location}</li>
              </ul>

              <div className="mt-8 flex gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/15 text-bone/70 transition-all duration-500 ease-premium hover:-translate-y-0.5 hover:border-bone hover:bg-bone hover:text-charcoal"
                  >
                    <s.icon size={16} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Oversized wordmark */}
        <div className="relative overflow-hidden border-t border-bone/10 pt-10">
          <p
            className="select-none whitespace-nowrap text-center font-display text-[clamp(3.5rem,15vw,12rem)] font-light leading-none tracking-tightest text-bone/[0.06]"
            aria-hidden="true"
          >
            OM SINGH
          </p>
        </div>

        {/* Legal bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-bone/10 py-7 sm:flex-row">
          <p className="text-[11.5px] text-bone/40">
            © 2026 Om Singh. All rights reserved.
          </p>
          <p className="text-[11.5px] text-bone/35">
            Physiotherapy · Fitness · Performance
          </p>
        </div>
      </div>
    </footer>
  )
}

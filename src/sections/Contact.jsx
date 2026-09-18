import { Clock, Globe, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { contact, whatsappLink } from '../data/content'
import SectionHeading from '../components/SectionHeading'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  const details = [
    {
      icon: Phone,
      label: 'Phone',
      value: contact.phoneDisplay,
      href: contact.phoneHref,
    },
    {
      icon: Mail,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: contact.location,
      note: contact.locationNote,
    },
    {
      icon: Globe,
      label: 'Online',
      value: contact.onlineNote,
    },
    {
      icon: Clock,
      label: 'Hours',
      value: contact.hours,
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: contact.instagramHandle,
      href: contact.instagram,
      external: true,
    },
  ]

  return (
    <section id="contact" className="relative scroll-mt-24 bg-bone-100 py-14 sm:py-24 lg:py-32">
      <div className="container-px">
        <div className="grid grid-cols-1 gap-9 lg:grid-cols-12 lg:gap-16">
          {/* ---------------- Left: details ---------------- */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Contact"
              title={['Tell Om what']}
              accent="is troubling you."
              intro="Fill the form, call, or send a WhatsApp message - whichever is easiest. Om replies to every message himself."
            />

            <Stagger className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-[3px] border border-charcoal/10 bg-charcoal/10 sm:mt-11 sm:grid-cols-1">
              {details.map((d) => {
                const Wrapper = d.href ? 'a' : 'div'
                return (
                  <StaggerItem key={d.label} className="bg-bone">
                    <Wrapper
                      href={d.href}
                      target={d.external ? '_blank' : undefined}
                      rel={d.external ? 'noopener noreferrer' : undefined}
                      className={`group flex h-full flex-col gap-2.5 px-4 py-4 transition-colors duration-500 sm:flex-row sm:items-start sm:gap-4 sm:px-6 sm:py-5 ${
                        d.href ? 'hover:bg-bone-50' : ''
                      }`}
                    >
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-charcoal/12 text-moss transition-colors duration-500 group-hover:border-moss/40 sm:mt-0.5 sm:h-9 sm:w-9">
                        <d.icon size={15} strokeWidth={1.5} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[10.5px] font-medium uppercase tracking-wider2 text-stone-400">
                          {d.label}
                        </span>
                        <span className="mt-1 block text-[13px] tracking-tight text-charcoal sm:text-[14px]">
                          {d.value}
                        </span>
                        {d.note && (
                          <span className="mt-0.5 block text-[12px] text-stone-500">{d.note}</span>
                        )}
                      </span>
                    </Wrapper>
                  </StaggerItem>
                )
              })}
            </Stagger>

            {/* WhatsApp CTA */}
            <Reveal delay={0.12} y={20}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 flex items-center justify-between gap-4 rounded-[3px] bg-moss px-5 py-4 text-bone transition-all duration-500 ease-premium hover:-translate-y-0.5 hover:bg-moss-900 sm:mt-6 sm:px-6 sm:py-5"
              >
                <span className="flex items-center gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-bone/12">
                    <WhatsAppIcon size={18} />
                  </span>
                  <span>
                    <span className="block text-[14px] font-medium tracking-tight">
                      Chat on WhatsApp
                    </span>
                    <span className="mt-0.5 block text-[12px] text-bone/65">
                      Quickest way to reach me
                    </span>
                  </span>
                </span>
                <span className="text-[11px] uppercase tracking-wider2 text-bone/60 transition-transform duration-500 ease-premium group-hover:translate-x-1">
                  Open
                </span>
              </a>
            </Reveal>

            {/* Placeholder note for whoever maintains the site */}
            <Reveal delay={0.16} y={16}>
              <p className="mt-5 text-[11.5px] leading-relaxed text-stone-400">
                Note for the site owner: the street address, working hours and the
                LinkedIn link are still to be filled in —
                <span className="text-stone-500"> src/data/content.js</span>.
              </p>
            </Reveal>
          </div>

          {/* ---------------- Right: form ---------------- */}
          <div className="lg:col-span-7">
            <Reveal y={30} duration={0.9}>
              <div className="rounded-[3px] border border-charcoal/10 bg-bone p-5 sm:p-7 lg:p-10">
                <div className="mb-6 flex items-start justify-between gap-6 sm:mb-8">
                  <div>
                    <h3 className="display text-[1.9rem] text-charcoal">
                      Book a consultation
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-stone-500">
                      Fill in a few details and Om will get back to you with the next
                      step.
                    </p>
                  </div>
                  <span className="hidden shrink-0 rounded-full border border-moss/30 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider2 text-moss sm:block">
                    Reply within a day
                  </span>
                </div>

                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

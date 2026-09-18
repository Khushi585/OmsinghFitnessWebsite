import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, X } from 'lucide-react'
import { services } from '../data/content'
import Icon from '../components/Icon'
import SectionHeading from '../components/SectionHeading'
import { Stagger, StaggerItem } from '../components/Reveal'
import Button from '../components/Button'

export default function Services() {
  const [openId, setOpenId] = useState(null)
  const openService = services.find((s) => s.id === openId) || null

  // close the detail dialog on Escape, and stop the page scrolling behind it
  useEffect(() => {
    if (!openId) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpenId(null)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openId])

  return (
    <section id="services" className="relative scroll-mt-24 bg-bone-100 py-14 sm:py-24 lg:py-32">
      <div className="container-px">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <SectionHeading
            eyebrow="Services"
            title={['What we can']}
            accent="help you with."
            intro="Tap any card to see exactly what happens in that treatment."
            className="max-w-2xl"
          />
          <div className="hidden lg:block lg:pb-3">
            <Button href="#contact" variant="outline" size="md" arrow>
              Book a Consultation
            </Button>
          </div>
        </div>

        {/* ---------------- Service grid ---------------- */}
        <Stagger
          className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-[3px] border border-charcoal/10 bg-charcoal/10 sm:mt-16 lg:grid-cols-4"
          stagger={0.07}
        >
          {services.map((service) => (
            <StaggerItem key={service.id} className="bg-bone-100">
              <button
                type="button"
                onClick={() => setOpenId(service.id)}
                className="group relative flex h-full w-full flex-col overflow-hidden p-4 text-left transition-colors duration-500 sm:p-7 lg:p-8"
              >
                {/* hover fill */}
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-charcoal transition-transform duration-[650ms] ease-premium group-hover:scale-y-100" />

                <div className="relative flex h-full flex-col">
                  <div className="mb-4 flex items-start justify-between sm:mb-8">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/12 text-moss transition-all duration-500 group-hover:border-bone/20 group-hover:text-moss-300 sm:h-11 sm:w-11">
                      <Icon name={service.icon} size={18} />
                    </span>
                    <span className="tnum text-[11px] tracking-wider2 text-stone-400 transition-colors duration-500 group-hover:text-bone/40">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="font-display text-[15px] leading-snug tracking-tight text-charcoal transition-colors duration-500 group-hover:text-bone sm:text-[19px]">
                    {service.title}
                  </h3>
                  <p className="mt-3 hidden flex-1 text-[13px] leading-relaxed text-stone-500 transition-colors duration-500 group-hover:text-bone/60 sm:block">
                    {service.description}
                  </p>

                  <span className="mt-3 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-wider2 text-charcoal transition-colors duration-500 group-hover:text-moss-300 sm:mt-7 sm:text-[11px]">
                    <span className="hidden sm:inline">Learn more</span>
                    <span className="sm:hidden">Details</span>
                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.8}
                      className="transition-transform duration-500 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </button>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* ---------------- Detail modal ---------------- */}
      <AnimatePresence>
        {openService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={openService.title}
          >
            <div
              className="absolute inset-0 bg-charcoal/45 backdrop-blur-sm"
              onClick={() => setOpenId(null)}
            />

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.99 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-lg overflow-hidden rounded-t-[4px] bg-bone sm:rounded-[4px]"
            >
              <div className="p-8 sm:p-10">
                <div className="flex items-start justify-between gap-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-moss/10 text-moss">
                    <Icon name={openService.icon} size={20} />
                  </span>
                  <button
                    type="button"
                    onClick={() => setOpenId(null)}
                    className="rounded-full p-2 text-stone-400 transition-colors hover:bg-charcoal/5 hover:text-charcoal"
                    aria-label="Close"
                  >
                    <X size={18} strokeWidth={1.6} />
                  </button>
                </div>

                <p className="mt-7 text-[11px] tracking-wider2 text-moss">
                  What this includes
                </p>
                <h3 className="display mt-2 text-3xl text-charcoal sm:text-4xl">
                  {openService.title}
                </h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-stone-600">
                  {openService.description}
                </p>

                <ul className="mt-8 space-y-3.5 border-t border-charcoal/10 pt-7">
                  {openService.details.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <Check size={15} strokeWidth={2} className="mt-0.5 shrink-0 text-moss" />
                      <span className="text-[13.5px] leading-relaxed text-stone-600">{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Button
                    href="#contact"
                    variant="solid"
                    size="md"
                    arrow
                    onClick={() => setOpenId(null)}
                    className="flex-1"
                  >
                    Book this
                  </Button>
                  <Button
                    as="button"
                    type="button"
                    variant="outline"
                    size="md"
                    onClick={() => setOpenId(null)}
                    className="flex-1"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

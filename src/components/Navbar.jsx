import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { brand, navLinks } from '../data/content'
import Button from './Button'
import BrandMark from './BrandMark'
import useActiveSection from '../hooks/useActiveSection'

const sectionIds = navLinks.map((l) => l.href.replace('#', ''))

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const active = useActiveSection(sectionIds)

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24))

  // lock body scroll while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // close the sheet on Escape
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium ${
          scrolled
            ? 'border-b border-charcoal/10 bg-bone/85 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav
          className={`container-px flex items-center justify-between gap-4 transition-all duration-500 ease-premium ${
            scrolled ? 'h-[68px]' : 'h-[84px]'
          }`}
          aria-label="Primary"
        >
          {/* Wordmark — see src/components/BrandMark.jsx to swap in a real logo */}
          <a
            href="#home"
            className="group relative z-10 flex items-center"
            aria-label={`${brand.name} — home`}
          >
            <BrandMark
              size={scrolled ? 34 : 38}
              tagline
              taglineClassName="hidden xl:block"
              className="transition-all duration-500 ease-premium"
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden shrink-0 items-center lg:flex xl:gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = active === id
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative block whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] tracking-tight transition-colors duration-300 xl:px-4 xl:text-[13.5px] ${
                      isActive ? 'text-charcoal' : 'text-stone-500 hover:text-charcoal'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-charcoal/[0.06]"
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Button
              href="#contact"
              variant="solid"
              size="sm"
              arrow
              className="hidden sm:inline-flex"
            >
              Book a Consultation
            </Button>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-colors hover:bg-charcoal hover:text-bone lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={18} strokeWidth={1.6} /> : <Menu size={18} strokeWidth={1.6} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-charcoal/30 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-0 rounded-b-[4px] bg-bone px-6 pb-10 pt-28"
            >
              <ul className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="border-b border-charcoal/[0.08] last:border-0"
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between py-4"
                    >
                      <span className="display text-3xl text-charcoal">{link.label}</span>
                      <span className="text-[11px] tracking-wider2 text-stone-400">
                        0{i + 1}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="mt-8"
              >
                <Button
                  href="#contact"
                  variant="moss"
                  size="lg"
                  arrow
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Book a Consultation
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import WhatsAppIcon from './WhatsAppIcon'
import { whatsappLink } from '../data/content'

/**
 * FloatingWhatsApp — persistent quick-contact button.
 * Appears once the visitor has scrolled past the hero.
 */
export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)
  const { scrollY } = useScroll()

  // show once past the hero, hide again at the contact section so the button
  // never sits on top of the form or the footer copyright
  useMotionValueEvent(scrollY, 'change', (y) => {
    const contactTop = document.getElementById('contact')?.offsetTop ?? Infinity
    setVisible(y > 700 && y < contactTop - 200)
  })

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="group fixed bottom-5 right-4 z-[70] flex items-center gap-3 rounded-full bg-moss p-3.5 text-bone shadow-[0_18px_40px_-18px_rgba(47,70,54,0.8)] transition-colors duration-500 hover:bg-moss-900 sm:bottom-6 sm:left-6 sm:right-auto sm:py-3.5 sm:pl-3.5 sm:pr-5"
          aria-label="Chat on WhatsApp"
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-bone/15">
            <WhatsAppIcon size={17} />
            <span className="absolute inset-0 animate-pulseRing rounded-full bg-bone/25" aria-hidden="true" />
          </span>
          <span className="hidden text-[13px] font-medium tracking-tight sm:block">
            WhatsApp
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}

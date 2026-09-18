import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { whatsappLink } from '../data/content'
import Reveal, { TextReveal } from '../components/Reveal'
import Button from '../components/Button'

export default function ConsultationCTA() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const lineX = useTransform(scrollYProgress, [0, 1], ['-6%', reduce ? '-6%' : '6%'])

  return (
    <section ref={ref} className="relative overflow-hidden bg-moss py-16 text-bone sm:py-24 lg:py-36">
      {/* decorative motion arcs */}
      <motion.div
        style={{ x: lineX }}
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 h-full w-full text-bone/[0.09]"
          viewBox="0 0 1440 700"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          {[0, 1, 2, 3].map((i) => (
            <circle
              key={i}
              cx="720"
              cy="350"
              r={180 + i * 130}
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="3 10"
            />
          ))}
          <path
            d="M -20 520 C 320 440, 520 250, 760 300 S 1160 520, 1460 380"
            stroke="currentColor"
            strokeWidth="1.25"
          />
        </svg>
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(247,245,240,0.09),transparent_65%)]" />
      </motion.div>

      <div className="container-px relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal y={14} duration={0.6}>
            <span className="mb-8 inline-flex items-center gap-3 rounded-full border border-bone/25 px-4 py-2 text-[10.5px] font-medium uppercase tracking-wider2 text-bone/80">
              <span className="h-1.5 w-1.5 rounded-full bg-bone" aria-hidden="true" />
              Taking new clients
            </span>
          </Reveal>

          <h2 className="display text-[clamp(2.4rem,6vw,4.5rem)] text-bone">
            <TextReveal lines={['Let\u2019s fix the problem,']} />
            <TextReveal lines={['not just the pain.']} delay={0.09} lineClassName="italic" />
          </h2>

          <Reveal delay={0.2} y={20}>
            <p className="mx-auto mt-8 max-w-xl text-[15px] leading-relaxed text-bone/70 sm:text-base">
              Whether you are in pain, recovering from an injury, or simply want to get
              fit and strong - tell Om what is going on, and get a plan made for you.
            </p>
          </Reveal>

          <Reveal delay={0.28} y={20}>
            <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button href="#contact" variant="solid" size="lg" arrow className="bg-charcoal">
                Book Your First Visit
              </Button>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full border border-bone/30 px-8 py-4 text-[15px] font-medium tracking-tight text-bone transition-all duration-500 ease-premium hover:-translate-y-0.5 hover:border-bone hover:bg-bone hover:text-moss"
              >
                <WhatsAppIcon size={18} />
                Message on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.36} y={16}>
            <p className="mt-8 text-[12px] tracking-tight text-bone/50">
              Clinic in Jaipur, or by video call from anywhere.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

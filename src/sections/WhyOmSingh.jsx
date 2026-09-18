import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { whyPoints } from '../data/content'
import Icon from '../components/Icon'
import Reveal, { TextReveal } from '../components/Reveal'
import Button from '../components/Button'

export default function WhyOmSingh() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const orbY = useTransform(scrollYProgress, [0, 1], ['-8%', reduce ? '-8%' : '8%'])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-charcoal py-14 text-bone sm:py-24 lg:py-32"
      aria-label="Why Om Singh"
    >
      {/* decorative background */}
      <motion.div
        style={{ y: orbY }}
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -left-[12%] top-[8%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(92,122,95,0.22),transparent_62%)]" />
        <div className="absolute -right-[8%] bottom-[2%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(180,112,63,0.1),transparent_65%)]" />
        <svg
          className="absolute inset-0 h-full w-full text-bone/[0.06]"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          {[...Array(7)].map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={90 + i * 120}
              x2="1440"
              y2={20 + i * 120}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
        </svg>
      </motion.div>

      <div className="container-px relative">
        <div className="grid grid-cols-1 gap-9 lg:grid-cols-12 lg:gap-16">
          {/* ---- Left: statement ---- */}
          <div className="lg:col-span-5">
            <Reveal y={14} duration={0.6}>
              <span className="mb-7 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-wider2 text-moss-300">
                <span className="h-px w-8 bg-moss-300/50" aria-hidden="true" />
                Why people come to Om
              </span>
            </Reveal>

            <h2 className="display text-[clamp(2.3rem,5.4vw,4rem)] text-bone">
              <TextReveal lines={['Treatment and', 'training,']} />
              <TextReveal
                lines={['in one place.']}
                delay={0.18}
                lineClassName="italic text-moss-300"
              />
            </h2>

            <Reveal delay={0.2} y={20}>
              <p className="mt-6 max-w-md text-[14px] leading-relaxed text-bone/60 sm:mt-8 sm:text-[15px]">
                A clinic stops once the pain goes, and leaves you weak. A gym trains you
                without checking your body. Here you get both, in the right order — so the
                problem actually stays away.
              </p>
            </Reveal>

            <Reveal delay={0.28} y={20}>
              <div className="mt-7 flex flex-wrap gap-3 sm:mt-10">
                <Button href="#contact" variant="ghost" size="md" arrow>
                  Book a Consultation
                </Button>
                <Button href="#results" variant="ghost" size="md">
                  See real results
                </Button>
              </div>
            </Reveal>

            {/* animated counter-style accent */}
            <Reveal delay={0.34} y={20}>
              <div className="mt-14 hidden border-t border-bone/10 pt-7 lg:block">
                <p className="font-display text-[15px] leading-relaxed text-bone/75">
                  &ldquo;First we find out what is wrong.
                  <span className="italic text-moss-300"> Only then do we train.</span>&rdquo;
                </p>
              </div>
            </Reveal>
          </div>

          {/* ---- Right: points ---- */}
          <div className="lg:col-span-7">
            <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-[3px] border border-bone/10 bg-bone/10">
              {whyPoints.map((point, i) => (
                <motion.li
                  key={point.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative bg-charcoal"
                >
                  <div className="relative h-full overflow-hidden p-5 sm:p-7 lg:p-8">
                    <span className="absolute inset-0 bg-moss-900/60 opacity-0 transition-opacity duration-700 ease-premium group-hover:opacity-100" />
                    <div className="relative">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-bone/15 text-moss-300 transition-all duration-500 group-hover:border-moss-300/60 sm:h-10 sm:w-10">
                        <Icon name={point.icon} size={17} />
                      </span>
                      <h3 className="mt-4 text-[13px] font-medium leading-snug tracking-tight text-bone sm:mt-6 sm:text-[14.5px]">
                        {point.title}
                      </h3>
                      <p className="mt-2 text-[11.5px] leading-relaxed text-bone/55 sm:mt-2.5 sm:text-[13px]">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Minus, Plus } from 'lucide-react'
import { about, images } from '../data/content'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ImagePlaceholder from '../components/ImagePlaceholder'
import Button from '../components/Button'

export default function About() {
  const [showApproach, setShowApproach] = useState(false)

  return (
    <section id="about" className="relative scroll-mt-24 bg-bone py-14 sm:py-24 lg:py-32">
      <div className="container-px">
        <div className="grid grid-cols-1 gap-9 lg:grid-cols-12 lg:gap-16">
          {/* ---------------- Images ---------------- */}
          <div className="relative lg:col-span-5">
            <Reveal y={36} duration={0.95}>
              <div className="relative">
                {/*
                  IMAGE: working/clinic portrait of Om Singh.
                  Add /public/images/om-about.jpg (portrait, 4:5) and set src.
                */}
                <ImagePlaceholder
                  src={images.about}
                  alt="A treatment session at the clinic"
                  label="Om at work"
                  note="Add /public/images/om-about.jpg (4:5)"
                  ratio="aspect-[5/4] sm:aspect-[4/5]"
                />

                {/* overlapping secondary image */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-12 -right-6 hidden w-[46%] border-[6px] border-bone sm:block sm:-right-10 sm:w-[52%]"
                >
                  {/*
                    IMAGE: detail shot — hands-on treatment, assessment or
                    coaching. Add /public/images/om-detail.jpg (square) .
                  */}
                  <ImagePlaceholder
                    src={images.detail}
                    alt="Hands-on treatment detail"
                    label="Detail shot"
                    note="/public/images/om-detail.jpg"
                    ratio="aspect-square"
                  />
                </motion.div>

                <span
                  className="pointer-events-none absolute -left-4 -top-4 hidden h-20 w-20 border-l border-t border-moss/45 lg:block"
                  aria-hidden="true"
                />
              </div>
            </Reveal>
          </div>

          {/* ---------------- Copy ---------------- */}
          <div className="lg:col-span-7 lg:pl-6">
            <SectionHeading
              eyebrow={about.eyebrow}
              title={[about.title]}
              accent={about.titleAccent}
            />

            <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.08 * i} y={20}>
                  {/* the last paragraph is held back on phones to keep the section short */}
                  <p
                    className={`max-w-xl text-[14.5px] leading-relaxed text-stone-600 sm:text-[15px] ${
                      i === about.paragraphs.length - 1 ? 'hidden sm:block' : ''
                    }`}
                  >
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>

            {/* Credentials placeholder — no claims are made here on purpose */}
            <Reveal delay={0.2} y={18}>
              <p className="mt-6 max-w-xl border-l border-moss/40 py-1 pl-5 text-[12.5px] leading-relaxed text-stone-500 sm:mt-7">
                <span className="font-medium uppercase tracking-wider2 text-stone-400">
                  Credentials
                </span>
                <br />
                {about.credentialsNote}
              </p>
            </Reveal>

            {/* Highlights */}
            <Stagger className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-[3px] border border-charcoal/10 bg-charcoal/10 sm:mt-11 sm:grid-cols-4">
              {about.highlights.map((h) => (
                <StaggerItem key={h.label} className="bg-bone">
                  <div className="group h-full px-4 py-5 transition-colors duration-500 hover:bg-bone-100 sm:px-5 sm:py-6">
                    <p className="font-display text-[17px] tracking-tight text-charcoal">
                      {h.label}
                    </p>
                    <p className="mt-2 text-[12px] leading-relaxed text-stone-500">
                      {h.description}
                    </p>
                    <span className="mt-4 block h-px w-6 bg-moss/50 transition-all duration-500 ease-premium group-hover:w-12" />
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            {/* My Approach toggle */}
            <Reveal delay={0.1} y={18}>
              <div className="mt-8 sm:mt-10">
                <button
                  type="button"
                  onClick={() => setShowApproach((v) => !v)}
                  aria-expanded={showApproach}
                  aria-controls="approach-panel"
                  className="group inline-flex items-center gap-3 rounded-full border border-charcoal/20 px-6 py-3 text-sm font-medium tracking-tight text-charcoal transition-all duration-500 ease-premium hover:border-charcoal hover:bg-charcoal hover:text-bone"
                >
                  {about.approachTitle}
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-charcoal/25 transition-colors duration-500 group-hover:border-bone/35">
                    {showApproach ? (
                      <Minus size={12} strokeWidth={2} />
                    ) : (
                      <Plus size={12} strokeWidth={2} />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {showApproach && (
                    <motion.div
                      id="approach-panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <ol className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {about.approachSteps.map((s, i) => (
                          <motion.li
                            key={s.step}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.55,
                              delay: 0.1 + i * 0.08,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="border-t border-charcoal/10 pt-4"
                          >
                            <div className="flex items-baseline gap-3">
                              <span className="tnum text-[11px] tracking-wider2 text-moss">
                                {s.step}
                              </span>
                              <h3 className="font-display text-lg tracking-tight text-charcoal">
                                {s.title}
                              </h3>
                            </div>
                            <p className="mt-2 text-[13px] leading-relaxed text-stone-500">
                              {s.description}
                            </p>
                          </motion.li>
                        ))}
                      </ol>

                      <div className="mt-8">
                        <Button href="#contact" variant="text" arrow>
                          Start with an assessment
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

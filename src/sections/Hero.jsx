import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowDown } from 'lucide-react'
import { brand, images, marqueeWords } from '../data/content'
import Button from '../components/Button'
import ImagePlaceholder from '../components/ImagePlaceholder'

const ease = [0.22, 1, 0.36, 1]

/* Entrance timing for the left-hand editorial column */
const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease },
})

export default function Hero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // gentle parallax on the portrait as the page scrolls away
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '12%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-6%'])

  const headlineWords = brand.tagline.split(' ')

  return (
    <section id="home" ref={ref} className="relative overflow-hidden bg-bone pt-24 lg:pt-24">
      {/* ---- Background: anatomy / movement-inspired line work ------------- */}
      <BackdropLines />

      <div className="container-px relative">
        <div className="h-hero grid grid-cols-1 items-center gap-7 py-4 sm:gap-12 sm:py-10 lg:grid-cols-12 lg:gap-8 lg:py-4">
          {/* ---------------- Left: editorial column ---------------- */}
          <motion.div style={{ y: textY }} className="relative z-10 lg:col-span-7 lg:pr-6">
            {/* Badge */}
            <motion.div
              {...rise(0.1)}
              className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-charcoal/12 bg-bone-50/60 px-3.5 py-1.5 backdrop-blur-sm sm:mb-9 sm:px-4 sm:py-2"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-pulseRing rounded-full bg-moss" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-moss" />
              </span>
              {brand.badge.map((b, i) => (
                <span key={b} className="flex items-center gap-2.5">
                  <span className="text-[10.5px] font-medium uppercase tracking-wider2 text-charcoal/70">
                    {b}
                  </span>
                  {i < brand.badge.length - 1 && (
                    <span className="h-3 w-px bg-charcoal/15" aria-hidden="true" />
                  )}
                </span>
              ))}
            </motion.div>

            {/* Name + title */}
            <motion.div {...rise(0.18)} className="mb-4 flex flex-wrap items-baseline gap-x-5 gap-y-1.5 sm:mb-7 sm:gap-y-2">
              <h1 className="text-[13px] font-medium uppercase tracking-wider2 text-charcoal">
                {brand.name}
              </h1>
              <span className="h-px w-10 bg-charcoal/20" aria-hidden="true" />
              <p className="text-[13px] tracking-tight text-stone-500">{brand.title}</p>
            </motion.div>

            {/* Headline — word-by-word mask reveal */}
            <h2 className="display text-[clamp(2.7rem,7.4vw,5.6rem)] text-charcoal">
              {headlineWords.map((word, i) => (
                <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.08em] pr-[0.2em] align-bottom">
                  <motion.span
                    className={`inline-block ${
                      word.startsWith('Pain-Free') ? 'italic text-moss' : ''
                    }`}
                    initial={reduce ? false : { y: '110%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 1.15, delay: 0.32 + i * 0.07, ease }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h2>

            {/* Supporting copy */}
            <motion.p
              {...rise(0.72)}
              className="mt-5 max-w-[34rem] text-[14px] leading-relaxed text-stone-600 sm:mt-8 sm:text-base"
            >
              {brand.intro}
            </motion.p>

            {/* CTAs */}
            <motion.div {...rise(0.82)} className="mt-6 flex flex-col gap-2.5 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
              <Button href="#contact" variant="solid" size="lg" arrow>
                Book a Consultation
              </Button>
              <Button href="#services" variant="outline" size="lg">
                Explore Services
              </Button>
            </motion.div>

            {/* Scroll cue */}
            <motion.a
              href="#about"
              {...rise(0.95)}
              className="group mt-14 hidden items-center gap-3 text-[11px] uppercase tracking-wider2 text-stone-400 transition-colors hover:text-charcoal lg:inline-flex"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/15 transition-colors group-hover:border-charcoal/40">
                <motion.span
                  animate={reduce ? {} : { y: [0, 3, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowDown size={14} strokeWidth={1.5} />
                </motion.span>
              </span>
              Scroll to explore
            </motion.a>
          </motion.div>

          {/* ---------------- Right: portrait ---------------- */}
          <div className="relative lg:col-span-5">
            <motion.div
              style={{ y: imageY }}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.25, ease }}
              className="relative"
            >
              {/* image mask reveal */}
              <div className="relative overflow-hidden rounded-[3px]">
                <motion.div
                  initial={reduce ? { y: '101%' } : { y: '0%' }}
                  animate={{ y: '101%' }}
                  transition={{ duration: 1.35, delay: 0.35, ease }}
                  className="pointer-events-none absolute inset-0 z-20 bg-bone"
                />
                {/* IMAGE: save the portrait as public/images/om-hero.jpg */}
                <ImagePlaceholder
                  src={images.hero}
                  alt="Om Singh, Physiotherapist and Fitness Performance Coach"
                  label="Portrait of Om Singh"
                  note="Add /public/images/om-hero.jpg (portrait, 4:5)"
                  ratio="aspect-square sm:aspect-[4/5]"
                  imgClassName="object-top"
                  className="w-full"
                />
              </div>

              {/* floating caption card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.05, ease }}
                className="absolute -bottom-6 -left-5 hidden w-[15.5rem] rounded-[3px] border border-charcoal/10 bg-bone/90 p-5 backdrop-blur-md sm:block"
              >
                <p className="font-display text-[15px] leading-snug text-charcoal">
                  Treated first,
                  <span className="italic text-moss"> trained after.</span>
                </p>
                <p className="mt-2.5 text-[12px] leading-relaxed text-stone-500">
                  We find out what is wrong, then we make you strong.
                </p>
              </motion.div>

              {/* thin frame accent */}
              <span
                className="pointer-events-none absolute -right-3 -top-3 hidden h-24 w-24 border-r border-t border-moss/40 lg:block"
                aria-hidden="true"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ---- Bottom marquee strip ---- */}
      <div className="relative border-y border-charcoal/10 bg-bone-50/50">
        <div className="flex overflow-hidden py-4">
          <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
            {[...marqueeWords, ...marqueeWords].map((word, i) => (
              <span key={i} className="flex items-center gap-10">
                <span className="whitespace-nowrap text-[11px] font-medium uppercase tracking-wider2 text-stone-400">
                  {word}
                </span>
                <span className="h-1 w-1 rounded-full bg-moss/50" aria-hidden="true" />
              </span>
            ))}
          </div>
          <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10" aria-hidden="true">
            {[...marqueeWords, ...marqueeWords].map((word, i) => (
              <span key={i} className="flex items-center gap-10">
                <span className="whitespace-nowrap text-[11px] font-medium uppercase tracking-wider2 text-stone-400">
                  {word}
                </span>
                <span className="h-1 w-1 rounded-full bg-moss/50" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * BackdropLines — abstract anatomy/movement line work behind the hero.
 * Purely decorative; drawn with SVG so it stays crisp at any size.
 */
function BackdropLines() {
  const reduce = useReducedMotion()

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* soft radial wash */}
      <div className="absolute -right-[10%] top-[-15%] h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(147,166,143,0.18),transparent_65%)]" />
      <div className="absolute -left-[15%] bottom-[10%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(180,112,63,0.07),transparent_65%)]" />

      <svg
        className="absolute inset-0 h-full w-full text-moss/15"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* range-of-motion arcs */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.circle
            key={i}
            cx="1180"
            cy="330"
            r={140 + i * 78}
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="2 9"
            initial={reduce ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, delay: 0.5 + i * 0.12, ease }}
            style={{ transformOrigin: '1180px 330px' }}
          />
        ))}

        {/* movement trace */}
        <motion.path
          d="M -40 720 C 260 660, 340 420, 620 470 S 980 760, 1480 560"
          stroke="currentColor"
          strokeWidth="1.25"
          initial={reduce ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.6, delay: 0.6, ease }}
        />
        <motion.path
          d="M -40 790 C 300 740, 420 520, 700 560 S 1020 820, 1480 650"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeDasharray="4 8"
          initial={reduce ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.8, delay: 0.85, ease }}
        />
      </svg>
    </div>
  )
}

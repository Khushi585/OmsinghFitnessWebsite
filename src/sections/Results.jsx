import { motion } from 'framer-motion'
import { ArrowRight, Info } from 'lucide-react'
import { results } from '../data/content'
import Icon from '../components/Icon'
import SectionHeading from '../components/SectionHeading'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'
import Button from '../components/Button'

/**
 * Results — transformation / progress showcase.
 *
 * Each entry's `image` is a composite photo that already contains the before and
 * after states, so it renders as a single frame with a BEFORE / AFTER key.
 * Every text field (client, timeframe, summary, metrics) renders only when it
 * has a value, so nothing is ever invented on a client's behalf — see the notes
 * above `results` in src/data/content.js.
 */
export default function Results() {
  return (
    <section id="results" className="relative scroll-mt-24 bg-bone-100 py-14 sm:py-24 lg:py-32">
      <div className="container-px">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Results"
            title={['Real people.']}
            accent="Real results."
            intro="These are Om's own clients, who followed their plan and stayed regular."
            className="max-w-2xl"
          />
        </div>

        {/* Disclaimer — keep visible until real data replaces the samples */}
        <Reveal delay={0.1} y={16}>
          <div className="mt-7 flex items-start gap-3 rounded-[3px] border border-moss/25 bg-moss/[0.05] px-4 py-3.5 sm:mt-10 sm:px-5 sm:py-4">
            <Info size={16} strokeWidth={1.6} className="mt-0.5 shrink-0 text-moss" />
            <p className="text-[12.5px] leading-relaxed text-stone-600">
              {results.disclaimer}
            </p>
          </div>
        </Reveal>

        {/* ---------------- Transformation cards ---------------- */}
        <Stagger className="-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0" stagger={0.1}>
          {results.transformations.map((item) => (
            <StaggerItem key={item.id} className="w-[86%] shrink-0 snap-center sm:w-auto sm:shrink">
              <article className="group flex h-full flex-col overflow-hidden rounded-[3px] border border-charcoal/10 bg-bone transition-shadow duration-700 ease-premium hover:shadow-[0_26px_60px_-40px_rgba(20,21,15,0.45)]">
                {/* The photo already contains both states side by side */}
                <div className="relative overflow-hidden bg-gradient-to-br from-bone-100 to-bone-200">
                  {/* contain, not cover: cropping would cut off one of the two states */}
                  <img
                    src={item.image}
                    alt={`${item.headline} — client progress`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-contain object-center transition-transform duration-[1200ms] ease-premium group-hover:scale-[1.03]"
                  />

                  {/* before / after key */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-charcoal/55 to-transparent p-3.5">
                    <span className="rounded-full bg-bone/85 px-2.5 py-1 text-[9.5px] font-medium uppercase tracking-wider2 text-charcoal backdrop-blur-sm">
                      Before
                    </span>
                    <ArrowRight size={13} strokeWidth={1.8} className="text-bone/80" />
                    <span className="rounded-full bg-moss px-2.5 py-1 text-[9.5px] font-medium uppercase tracking-wider2 text-bone">
                      After
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10.5px] font-medium uppercase tracking-wider2 text-moss">
                      {item.focus}
                    </span>
                    {item.placeholder && (
                      <span className="rounded-full border border-clay/40 px-2 py-0.5 text-[9.5px] font-medium uppercase tracking-wider2 text-clay">
                        Sample
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 font-display text-[19px] leading-snug tracking-tight text-charcoal">
                    {item.headline}
                  </h3>
                  {item.summary && (
                    <p className="mt-2.5 text-[13px] leading-relaxed text-stone-500">
                      {item.summary}
                    </p>
                  )}

                  {/* metrics — only shown once real measurements are added */}
                  {item.metrics?.length > 0 && (
                    <dl className="mt-6 space-y-2.5 border-t border-charcoal/10 pt-5">
                      {item.metrics.map((m) => (
                        <div key={m.label} className="flex items-center justify-between gap-4">
                          <dt className="text-[12px] text-stone-500">{m.label}</dt>
                          <dd className="tnum flex items-center gap-2 text-[12.5px] text-charcoal">
                            <span className="text-stone-400 line-through decoration-stone-300">
                              {m.from}
                            </span>
                            <ArrowRight size={11} strokeWidth={2} className="text-moss" />
                            <span className="font-medium">{m.to}</span>
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  {(item.client || item.timeframe) && (
                    <div className="mt-5 flex items-center justify-between border-t border-charcoal/10 pt-4">
                      <span className="text-[11.5px] text-stone-400">{item.client}</span>
                      <span className="tnum text-[11.5px] text-stone-500">{item.timeframe}</span>
                    </div>
                  )}
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mt-1 text-center text-[10.5px] uppercase tracking-wider2 text-stone-400 sm:hidden">
          Swipe for more
        </p>

        {/* ---------------- Progress pillars ---------------- */}
        <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-[3px] border border-charcoal/10 bg-charcoal/10 sm:mt-16 sm:gap-6 sm:border-0 sm:bg-transparent md:grid-cols-3">
          {results.progressCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden bg-bone p-4 sm:rounded-[3px] sm:border sm:border-charcoal/10 sm:p-7"
            >
              <span className="absolute inset-x-0 bottom-0 h-px w-full origin-left scale-x-0 bg-moss transition-transform duration-700 ease-premium group-hover:scale-x-100" />
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-moss/10 text-moss">
                  <Icon name={card.icon} size={16} />
                </span>
                <span className="text-[10.5px] font-medium uppercase tracking-wider2 text-stone-400">
                  {card.label}
                </span>
              </div>
              <h3 className="mt-3 font-display text-[16px] leading-snug tracking-tight text-charcoal sm:mt-5 sm:text-[18px]">
                {card.title}
              </h3>
              <p className="mt-2 hidden text-[13px] leading-relaxed text-stone-500 sm:block">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.1} y={20}>
          <div className="mt-10 text-center sm:mt-14">
            <Button href="#contact" variant="outline" size="lg" arrow>
              Start your own journey
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

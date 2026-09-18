import { commonProblems, trustPoints } from '../data/content'
import Icon from '../components/Icon'
import Reveal, { Stagger, StaggerItem } from '../components/Reveal'

/**
 * TrustStrip — the band directly under the hero.
 *
 * Two parts: the problems people actually arrive with (so a visitor recognises
 * themselves immediately), then what they can expect. Both lists live in
 * src/data/content.js — `commonProblems` and `trustPoints`.
 */
export default function TrustStrip() {
  return (
    <section className="relative bg-bone py-10 sm:py-16 lg:py-20" aria-label="What we help with">
      <div className="container-px">
        {/* ---- what people come in with ---- */}
        <Reveal y={18}>
          <p className="mb-4 text-[11px] font-medium uppercase tracking-wider2 text-stone-500">
            Come in with
          </p>
        </Reveal>

        <Stagger className="mb-10 flex flex-wrap gap-2 sm:mb-14 sm:gap-2.5" stagger={0.05}>
          {commonProblems.map((problem) => (
            <StaggerItem key={problem}>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-charcoal/15 bg-bone-50 px-3.5 py-2 text-[12.5px] tracking-tight text-charcoal transition-all duration-500 ease-premium hover:-translate-y-0.5 hover:border-moss hover:bg-moss hover:text-bone sm:px-4 sm:py-2.5 sm:text-[13.5px]"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full bg-moss transition-colors duration-500 group-hover:bg-bone"
                  aria-hidden="true"
                />
                {problem}
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        {/* ---- what to expect ---- */}
        <Stagger className="grid grid-cols-2 gap-px overflow-hidden rounded-[3px] border border-charcoal/10 bg-charcoal/10 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <StaggerItem key={point.label} className="group relative bg-bone">
              <div className="relative h-full overflow-hidden p-5 sm:p-7 lg:p-9">
                {/* hover wash */}
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-charcoal transition-transform duration-[650ms] ease-premium group-hover:scale-y-100" />

                <div className="relative flex h-full flex-col">
                  <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/12 text-moss transition-colors duration-500 group-hover:border-bone/20 group-hover:text-moss-300 sm:mb-7 sm:h-10 sm:w-10">
                    <Icon name={point.icon} size={17} />
                  </span>

                  {point.stat && (
                    <p className="display tnum text-[2rem] leading-none text-charcoal transition-colors duration-500 group-hover:text-bone sm:text-[2.6rem]">
                      {point.stat}
                    </p>
                  )}

                  <p className="mt-3 text-[13.5px] font-medium tracking-tight text-charcoal transition-colors duration-500 group-hover:text-bone">
                    {point.label}
                  </p>
                  <p className="mt-2 text-[12px] leading-relaxed text-stone-500 transition-colors duration-500 group-hover:text-bone/55 sm:mt-2.5 sm:text-[13px]">
                    {point.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

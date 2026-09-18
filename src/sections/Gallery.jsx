import { gallery } from '../data/content'
import SectionHeading from '../components/SectionHeading'
import { Stagger, StaggerItem } from '../components/Reveal'

/**
 * Gallery — a plain photo strip showing what a session actually looks like.
 *
 * The pictures carry their own captions, so nothing is written over them. Edit
 * or add entries in src/data/content.js -> gallery; the row grows on its own.
 * Phones swipe through them, desktop shows them side by side.
 */
export default function Gallery() {
  if (!gallery.length) return null

  return (
    <section className="relative bg-bone py-14 sm:py-24 lg:py-32" aria-label="Inside a session">
      <div className="container-px">
        <SectionHeading
          eyebrow="Inside a session"
          title={['This is what']}
          accent="it looks like."
          intro="Hands-on treatment, guided exercise and proper coaching — whatever your body needs that day."
          align="center"
          className="mx-auto max-w-xl items-center text-center"
        />

        <Stagger
          className="-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:mt-14 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0"
          stagger={0.1}
        >
          {gallery.map((shot) => (
            <StaggerItem
              key={shot.src}
              className="w-[78%] shrink-0 snap-center sm:w-auto sm:shrink"
            >
              <figure className="group relative overflow-hidden rounded-[3px] bg-bone-100">
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-[1.04]"
                />
                <span
                  className="pointer-events-none absolute inset-0 border border-charcoal/10"
                  aria-hidden="true"
                />
              </figure>
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mt-1 text-center text-[10.5px] uppercase tracking-wider2 text-stone-400 sm:hidden">
          Swipe for more
        </p>
      </div>
    </section>
  )
}

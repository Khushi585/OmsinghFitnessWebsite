import Reveal, { TextReveal } from './Reveal'

/**
 * SectionHeading — the editorial header used at the top of every section.
 *
 * eyebrow   small uppercase label
 * title     array of lines (each animates in separately) or a plain string
 * accent    optional trailing line rendered in serif italic
 * intro     optional supporting paragraph
 * align     'left' | 'center'
 * tone      'light' (dark ink on bone) | 'dark' (bone ink on charcoal)
 */
export default function SectionHeading({
  eyebrow,
  title,
  accent,
  intro,
  align = 'left',
  tone = 'light',
  className = '',
  children,
}) {
  const lines = Array.isArray(title) ? title : [title]
  const isDark = tone === 'dark'
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <Reveal y={14} duration={0.6}>
          <span
            className={`mb-6 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-wider2 ${
              isDark ? 'text-moss-300' : 'text-stone-500'
            }`}
          >
            <span
              className={`h-px w-8 ${isDark ? 'bg-moss-300/50' : 'bg-charcoal/25'}`}
              aria-hidden="true"
            />
            {eyebrow}
          </span>
        </Reveal>
      )}

      <h2
        className={`display text-[clamp(2.1rem,5.6vw,4.25rem)] ${
          isDark ? 'text-bone' : 'text-charcoal'
        }`}
      >
        <TextReveal lines={lines} />
        {accent && (
          <TextReveal
            lines={[accent]}
            delay={lines.length * 0.09}
            lineClassName={`italic ${isDark ? 'text-moss-300' : 'text-moss'}`}
          />
        )}
      </h2>

      {intro && (
        <Reveal delay={0.16} y={18}>
          <p
            className={`mt-7 max-w-xl text-[15px] leading-relaxed sm:text-base ${
              isDark ? 'text-bone/65' : 'text-stone-600'
            }`}
          >
            {intro}
          </p>
        </Reveal>
      )}

      {children}
    </div>
  )
}

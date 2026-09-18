/* =============================================================================
   BRAND MARK — temporary typographic identity for OM SINGH.

   A monogram built from the site's own vocabulary: an "OS" set in the display
   serif inside a ring, with a range-of-motion arc sweeping across it — the same
   motif used in the hero and program artwork.

   TO REPLACE WITH A REAL LOGO
   Swap the <Monogram> body for an <img src="/images/logo.svg" /> (or drop the
   monogram entirely and keep the wordmark). Both the navbar and the footer use
   this one component, so a single edit updates the whole site.
============================================================================= */

/** Monogram — the "OS" mark. Sizes fluidly from the `size` prop (px). */
export function Monogram({ size = 38, tone = 'light', className = '' }) {
  const isDark = tone === 'dark'
  const ring = isDark ? 'rgba(247,245,240,0.28)' : 'rgba(20,21,15,0.22)'
  const arc = isDark ? '#93A68F' : '#2F4636'

  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 48 48" className="absolute inset-0 h-full w-full">
        {/* ring */}
        <circle cx="24" cy="24" r="22.5" fill="none" stroke={ring} strokeWidth="1" />
        {/* range-of-motion sweep */}
        <path
          d="M 24 1.5 A 22.5 22.5 0 0 1 44.5 14.7"
          fill="none"
          stroke={arc}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="44.5" cy="14.7" r="2" fill={arc} />
      </svg>

      <span
        className={`relative font-display font-light leading-none tracking-tight ${
          isDark ? 'text-bone' : 'text-charcoal'
        }`}
        style={{ fontSize: size * 0.42 }}
      >
        OS
      </span>
    </span>
  )
}

/**
 * BrandMark — the full lock-up.
 *
 * variant: 'inline'  monogram + wordmark on one line (navbar)
 *          'stacked' monogram above a wordmark + tagline (footer)
 * tagline: show the PHYSIOTHERAPY • FITNESS • PERFORMANCE line
 * taglineClassName: extra classes on that line — the navbar uses it to hide the
 *   tagline on narrower desktops, where the nav links need the room
 */
export default function BrandMark({
  variant = 'inline',
  tone = 'light',
  tagline = false,
  taglineClassName = '',
  size = 38,
  className = '',
}) {
  const isDark = tone === 'dark'
  const wordSize = variant === 'stacked' ? 'text-[26px]' : 'text-[19px]'

  const wordmark = (
    <span className="flex flex-col">
      <span className="flex items-baseline gap-2.5 whitespace-nowrap leading-none">
        <span
          className={`font-display font-medium tracking-tight ${wordSize} ${
            isDark ? 'text-bone' : 'text-charcoal'
          }`}
        >
          OM
        </span>
        <span
          className={`font-light tracking-[0.2em] ${wordSize} ${
            isDark ? 'text-bone/85' : 'text-charcoal/80'
          }`}
        >
          SINGH
        </span>
      </span>

      {tagline && (
        <span
          className={`mt-1.5 whitespace-nowrap text-[8px] font-medium uppercase tracking-wider2 ${
            isDark ? 'text-bone/45' : 'text-stone-500'
          } ${taglineClassName}`}
        >
          Physiotherapy • Fitness • Performance
        </span>
      )}
    </span>
  )

  if (variant === 'stacked') {
    return (
      <span className={`inline-flex flex-col gap-5 ${className}`}>
        <Monogram size={size} tone={tone} />
        {wordmark}
      </span>
    )
  }

  return (
    <span className={`inline-flex items-center gap-3.5 ${className}`}>
      <Monogram size={size} tone={tone} />
      {wordmark}
    </span>
  )
}

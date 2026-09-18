import { useEffect, useId, useState } from 'react'
import { ImageIcon } from 'lucide-react'

/**
 * ImagePlaceholder — every photo slot on the site goes through this component.
 *
 * Pass the path the photo will live at. If the file is there it renders; if it
 * is missing (or fails to load) a labelled placeholder appears instead, naming
 * the exact file to drop in. So adding photography needs no code change at all:
 * save the files into /public/images/ with the names listed in
 * src/data/content.js -> images, and they appear.
 *
 *   <ImagePlaceholder
 *     src={images.hero}
 *     alt="Om Singh, portrait"
 *     label="Portrait of Om Singh"
 *     note="Add public/images/om-hero.jpg"
 *     ratio="aspect-[4/5]"
 *   />
 */
export default function ImagePlaceholder({
  src = null,
  alt = '',
  label = 'Image',
  note = '',
  ratio = 'aspect-[4/5]',
  className = '',
  imgClassName = '',
  tone = 'light', // 'light' | 'dark'
  rounded = 'rounded-[2px]',
  children,
}) {
  const isDark = tone === 'dark'
  // ids must be url()-safe, so derive one instead of using the label/ratio text
  const patternId = `ph-grid-${useId().replace(/:/g, '')}`
  const [failed, setFailed] = useState(false)

  // a changed path deserves a fresh attempt
  useEffect(() => setFailed(false), [src])

  const showImage = Boolean(src) && !failed

  return (
    <div className={`relative overflow-hidden ${ratio} ${rounded} ${className}`}>
      {showImage ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      ) : (
        <div
          className={`relative flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center ${
            isDark
              ? 'bg-gradient-to-br from-charcoal-700 to-charcoal text-bone/50'
              : 'bg-gradient-to-br from-bone-100 to-bone-200 text-stone-500'
          }`}
          role="img"
          aria-label={alt || `${label} placeholder`}
        >
          {/* decorative hairline grid */}
          <svg
            className={`pointer-events-none absolute inset-0 h-full w-full ${
              isDark ? 'text-bone/10' : 'text-charcoal/10'
            }`}
            aria-hidden="true"
          >
            <defs>
              <pattern id={patternId} width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M28 0H0V28" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${patternId})`} />
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="0.5" />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="0.5" />
          </svg>

          <span
            className={`relative flex h-11 w-11 items-center justify-center rounded-full ${
              isDark ? 'bg-bone/10' : 'bg-white/70'
            }`}
          >
            <ImageIcon size={17} strokeWidth={1.5} />
          </span>
          <span className="relative text-[11px] font-medium uppercase tracking-wider2">
            {label}
          </span>
          {note && (
            <span className="relative max-w-[16rem] text-[11px] leading-relaxed opacity-70">
              {note}
            </span>
          )}
        </div>
      )}
      {children}
    </div>
  )
}

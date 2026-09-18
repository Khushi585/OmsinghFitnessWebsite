import { ArrowUpRight } from 'lucide-react'

/**
 * Button — one component for every CTA on the site.
 *
 * variant: 'solid'  charcoal fill (primary action)
 *          'moss'   forest green fill
 *          'outline' hairline border on light backgrounds
 *          'ghost'  border on dark backgrounds
 *          'text'   inline link with animated underline
 * size:    'sm' | 'md' | 'lg'
 */
const base =
  'group relative inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-medium tracking-tight transition-all duration-500 ease-premium focus:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 focus-visible:ring-offset-bone disabled:cursor-not-allowed disabled:opacity-60'

const variants = {
  solid:
    'bg-charcoal text-bone hover:bg-moss-900 shadow-[0_1px_2px_rgba(20,21,15,0.12)] hover:shadow-[0_12px_28px_-12px_rgba(20,21,15,0.55)] hover:-translate-y-0.5',
  moss: 'bg-moss text-bone hover:bg-moss-900 shadow-[0_1px_2px_rgba(20,21,15,0.12)] hover:shadow-[0_12px_28px_-12px_rgba(47,70,54,0.6)] hover:-translate-y-0.5',
  outline:
    'border border-charcoal/20 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-bone hover:-translate-y-0.5',
  ghost:
    'border border-bone/25 text-bone hover:border-bone hover:bg-bone hover:text-charcoal hover:-translate-y-0.5',
  text: 'link-underline rounded-none px-0 text-charcoal hover:text-moss',
}

const sizes = {
  sm: 'px-5 py-2.5 text-[13px]',
  md: 'px-7 py-3.5 text-sm',
  lg: 'px-9 py-4 text-[15px]',
}

export default function Button({
  as = 'a',
  href,
  children,
  variant = 'solid',
  size = 'md',
  arrow = false,
  className = '',
  ...rest
}) {
  const Tag = as
  const sizeClass = variant === 'text' ? 'text-sm' : sizes[size]
  const classes = `${base} ${variants[variant]} ${sizeClass} ${className}`

  return (
    <Tag href={href} className={classes} {...rest}>
      <span className="relative z-10">{children}</span>
      {arrow && (
        <ArrowUpRight
          size={16}
          strokeWidth={1.75}
          className="relative z-10 transition-transform duration-500 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </Tag>
  )
}

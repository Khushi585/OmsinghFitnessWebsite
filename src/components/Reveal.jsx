import { motion, useReducedMotion } from 'framer-motion'

/**
 * Reveal — the site's single scroll-reveal primitive.
 * Wrap any block to have it fade/rise into view once, when scrolled to.
 *
 * <Reveal delay={0.1} y={24}>...</Reveal>
 *
 * Respects prefers-reduced-motion: motion is dropped, content still renders.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  x = 0,
  duration = 0.8,
  once = true,
  amount = 0.25,
  as = 'div',
  className = '',
  ...rest
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  if (reduce) {
    const Tag = as
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    )
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

/**
 * Stagger — parent/child pair for lists of cards.
 * Use <Stagger> around the grid and <StaggerItem> on each card.
 */
export function Stagger({ children, className = '', stagger = 0.09, delay = 0, amount = 0.15 }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', y = 26, ...rest }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/**
 * TextReveal — masked line-by-line rise, used for the big editorial headlines.
 * Pass an array of strings; each renders as its own clipped line.
 */
export function TextReveal({ lines = [], className = '', lineClassName = '', delay = 0 }) {
  const reduce = useReducedMotion()

  if (reduce) {
    return (
      <span className={className}>
        {lines.map((line, i) => (
          <span key={i} className={`block ${lineClassName}`}>
            {line}
          </span>
        ))}
      </span>
    )
  }

  /* The in-view trigger lives on this unclipped wrapper on purpose: a line that
     starts translated below its own overflow-hidden mask is clipped out of the
     intersection rect, so observing the line itself would never fire. */
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.09, delayChildren: delay } },
      }}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className={`block ${lineClassName}`}
            variants={{
              hidden: { y: '110%' },
              show: {
                y: '0%',
                transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

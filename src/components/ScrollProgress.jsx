import { motion, useScroll, useSpring } from 'framer-motion'

/** ScrollProgress — hairline reading-progress bar pinned to the top edge. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-moss"
      aria-hidden="true"
    />
  )
}

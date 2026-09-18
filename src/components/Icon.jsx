import {
  Activity,
  Dumbbell,
  FlaskConical,
  Globe,
  HeartPulse,
  MessageSquare,
  Moon,
  Move3d,
  PersonStanding,
  ScanLine,
  Scale,
  Stethoscope,
  Target,
  TrendingUp,
  UserRound,
  Video,
  Zap,
} from 'lucide-react'

/**
 * Icon — resolves the string `icon` names used in src/data/content.js to real
 * Lucide components, so content stays free of imports.
 * Add a new icon here to make it available to the content file.
 */
const registry = {
  Activity,
  Dumbbell,
  FlaskConical,
  Globe,
  HeartPulse,
  MessageSquare,
  Moon,
  Move3D: Move3d,
  PersonStanding,
  ScanLine,
  Scale,
  Stethoscope,
  Target,
  TrendingUp,
  UserRound,
  Video,
  Zap,
}

export default function Icon({ name, size = 20, strokeWidth = 1.4, className = '' }) {
  const Cmp = registry[name] || Activity
  return <Cmp size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" />
}

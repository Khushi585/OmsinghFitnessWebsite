/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        /* ---- Brand palette (edit here to re-skin the whole site) ---- */
        bone: {
          DEFAULT: '#F7F5F0', // warm off-white page background
          50: '#FBFAF7',
          100: '#F2EFE8',
          200: '#E7E2D8',
          300: '#D8D2C5',
        },
        charcoal: {
          DEFAULT: '#14150F', // near-black ink
          800: '#1E201A',
          700: '#2B2E26',
          600: '#3D4037',
        },
        moss: {
          DEFAULT: '#2F4636', // deep forest green (primary brand)
          900: '#1B2A20',
          700: '#3B563F',
          500: '#5C7A5F',
          300: '#93A68F',
          100: '#DCE3D8',
        },
        clay: '#B4703F', // very subtle warm accent — use sparingly
        stone: {
          400: '#9A978E',
          500: '#78756D',
          600: '#5B594F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        wider2: '0.18em',
      },
      maxWidth: {
        content: '1280px',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '70%': { transform: 'scale(1.25)', opacity: '0' },
          '100%': { transform: 'scale(1.25)', opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        pulseRing: 'pulseRing 2.8s cubic-bezier(0.22, 1, 0.36, 1) infinite',
      },
    },
  },
  plugins: [],
}

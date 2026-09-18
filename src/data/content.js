/* =============================================================================
   SITE CONTENT - single source of truth.
   Edit anything in this file to update the website. No component changes needed.

   WRITING STYLE
   This site is read by ordinary people, not doctors. Keep the language simple:
   short sentences, everyday words, and say plainly what the visitor gets. Avoid
   clinical terms like "load tolerance", "graded exposure" or "periodisation".

   NOTE ON PLACEHOLDERS
   Nothing here claims real credentials, degrees or years of experience. Values
   marked PLACEHOLDER must be replaced with verified information before launch.
============================================================================= */

export const brand = {
  name: 'OM SINGH',
  firstName: 'Om',
  lastName: 'Singh',
  title: 'Physiotherapist & Fitness Coach',
  tagline: 'Move Better. Get Stronger. Live Pain-Free.',
  intro:
    'Pain that keeps coming back? Want to get fit without getting hurt? Om Singh is a physiotherapist and a fitness coach - so he treats the problem first, then makes your body strong enough to keep it away.',
  badge: ['Physiotherapy', 'Fitness', 'Training'],
}

/* --- Contact details -------------------------------------------------------- */
export const contact = {
  phoneDisplay: '+91 82909 00924',
  phoneHref: 'tel:+918290900924',
  whatsappNumber: '918290900924', // country code + number, digits only
  whatsappMessage: "Hi Om, I'd like to book a consultation.",
  email: 'omsinghsodha86@gmail.com',
  location: 'Jaipur, Rajasthan', // add the street / clinic name here too
  locationNote: 'Visit by appointment',
  onlineNote: 'Video consultation anywhere in India',
  hours: 'Mon - Sat, 8:00 AM - 8:00 PM', // PLACEHOLDER - set your real timings
  instagram: 'https://www.instagram.com/omsinghfitnessexpert',
  instagramHandle: '@omsinghfitnessexpert',
  linkedin: 'https://linkedin.com/in/', // PLACEHOLDER - or remove from Footer.jsx
}

export const whatsappLink = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
  contact.whatsappMessage
)}`

/* --- PHOTOGRAPHY ------------------------------------------------------------
   Every photo slot on the site reads its path from here.

   HOW TO ADD A PHOTO
   Save the file into /public/images/ using exactly the name below. That is the
   whole job - no code change. Until a file exists, the slot shows a labelled
   placeholder naming the file it is waiting for.
-------------------------------------------------------------------------- */
export const images = {
  // Om Singh's own photograph. Used in the hero.                  (square/4:5)
  hero: '/images/om-hero.jpeg',
  // A treatment session at the clinic. Used in About.             (4:5)
  about: '/images/om-about.jpeg',
  // Close crop - taping / hands-on work. About detail.            (1:1)
  detail: '/images/om-detail.jpeg',
}

/* Photo strip showing what the sessions look like. Each picture already carries
   its own caption, so no text is added over them. Add or remove entries freely;
   the row simply grows. Portrait pictures (roughly 4:5) work best. */
export const gallery = [
  { src: '/images/gallery/rehab.jpeg', alt: 'Rehab and mobility session' },
  { src: '/images/gallery/strength.jpeg', alt: 'Strength training session' },
  { src: '/images/gallery/conditioning.jpeg', alt: 'Athletic conditioning session' },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#contact' },
]

/* --- Problems people come with ---------------------------------------------
   Shown as quick tags under the hero, so a visitor instantly sees themselves.
-------------------------------------------------------------------------- */
export const commonProblems = [
  'Back pain',
  'Neck pain',
  'Knee pain',
  'Shoulder pain',
  'After surgery',
  'Sports injury',
  'Weak posture',
  'Weight loss',
]

/* --- TRUST STRIP -----------------------------------------------------------
   `stat` values are editable - swap for verified numbers, or set to null to
   show only the label and the description.
-------------------------------------------------------------------------- */
export const trustPoints = [
  {
    stat: '1:1',
    label: 'Full personal attention',
    description:
      'Every session is one-on-one. Your plan is made for your body, not copied from someone else.',
    icon: 'UserRound',
  },
  {
    stat: '0',
    label: 'Confusing medical words',
    description:
      'You will always know what is wrong, why it happened, and what we are doing about it.',
    icon: 'MessageSquare',
  },
  {
    stat: '2',
    label: 'Ways to get treated',
    description:
      'Come to the clinic in Jaipur, or get checked and get your plan over a video call.',
    icon: 'Globe',
  },
  {
    stat: 'All',
    label: 'Ages and fitness levels',
    description:
      'Office workers, homemakers, people after surgery, and sportspeople - everyone is welcome.',
    icon: 'HeartPulse',
  },
]

/* --- ABOUT ------------------------------------------------------------------ */
export const about = {
  eyebrow: 'About Om',
  title: 'Get better first.',
  titleAccent: 'Then get stronger.',
  paragraphs: [
    'Om Singh is both a physiotherapist and a fitness coach. That means one person can treat your pain and also train your body - you do not have to run between a clinic and a gym.',
    'Most people get only one half. A clinic settles the pain but leaves the body weak, so the pain comes back. A gym pushes you hard without checking your body, and something gets hurt. Om does both, in the right order.',
    'He works with people of every age - office workers with back and neck pain, people recovering after surgery or an injury, people who want to lose weight, and sportspeople who want to play better.',
  ],
  // PLACEHOLDER - add real degrees, registrations and certifications.
  credentialsNote: 'Qualifications and certifications to be added here.',
  highlights: [
    { label: 'Check', description: 'We see how your body moves' },
    { label: 'Relief', description: 'We settle the pain' },
    { label: 'Strength', description: 'We make your body strong' },
    { label: 'Results', description: 'You stay pain-free' },
  ],
  approachTitle: 'How it works',
  approachSteps: [
    {
      step: '01',
      title: 'We check you',
      description:
        'We look at how you move, where it hurts and why it started. You leave with a clear answer, not a guess.',
    },
    {
      step: '02',
      title: 'We settle the pain',
      description:
        'Hands-on treatment and easy exercises to bring the pain down and get your normal movement back.',
    },
    {
      step: '03',
      title: 'We build you up',
      description:
        'Step-by-step training so your body can handle daily work, stairs, travel, lifting and sport.',
    },
    {
      step: '04',
      title: 'You keep the results',
      description:
        'You learn the few exercises and habits that matter, so the problem does not come back.',
    },
  ],
}

/* --- SERVICES --------------------------------------------------------------- */
export const services = [
  {
    id: 'physiotherapy-consultation',
    number: '01',
    title: 'Physiotherapy Check-up',
    description:
      'A full check of your pain and movement, and a clear plan to fix it - explained in simple words.',
    icon: 'Stethoscope',
    details: [
      'We listen to your full history',
      'We check your joints, muscles and movement',
      'Hands-on treatment where it is needed',
      'You get a written plan and know the next step',
    ],
  },
  {
    id: 'sports-injury-rehab',
    number: '02',
    title: 'Sports Injury Recovery',
    description:
      'Hurt while playing? We heal the injury properly and get you back on the field with confidence.',
    icon: 'Activity',
    details: [
      'Treatment stage by stage, not all at once',
      'We rebuild the strength you lost',
      'We practise the movements of your sport',
      'You go back only when your body is ready',
    ],
  },
  {
    id: 'pain-management',
    number: '03',
    title: 'Back, Neck & Knee Pain',
    description:
      'Pain that keeps coming back? We treat the reason behind it, not just the pain of the day.',
    icon: 'HeartPulse',
    details: [
      'Quick relief methods you can use at home',
      'Simple exercises that fit your daily routine',
      'Advice on sitting, lifting, sleeping and walking',
      'We explain what your pain does and does not mean',
    ],
  },
  {
    id: 'posture-movement',
    number: '04',
    title: 'Posture Correction',
    description:
      'Sitting all day? Rounded shoulders, a stiff neck and a tired lower back can be corrected.',
    icon: 'PersonStanding',
    details: [
      'We check how you stand, sit and walk',
      'Stretches for the parts that are tight',
      'Strengthening for the parts that are weak',
      'Small changes to your desk and daily habits',
    ],
  },
  {
    id: 'personal-fitness',
    number: '05',
    title: 'Personal Fitness Training',
    description:
      'One-on-one training built around your body, so you get fit without getting injured.',
    icon: 'Dumbbell',
    details: [
      'A plan made for your body and your time',
      'Correct form taught from day one',
      'Your progress noted every session',
      'Workouts that fit your week, not the other way round',
    ],
  },
  {
    id: 'strength-conditioning',
    number: '06',
    title: 'Strength Training',
    description:
      'Get genuinely stronger with a safe, step-by-step plan - for sport or just for daily life.',
    icon: 'Zap',
    details: [
      'You start at your own level',
      'Weight goes up only when you are ready',
      'We test your progress and show you the numbers',
      'Rest days are planned, not skipped',
    ],
  },
  {
    id: 'weight-management',
    number: '07',
    title: 'Weight Loss & Fitness',
    description:
      'Lose weight in a healthy way, with training and simple habits you can actually keep up.',
    icon: 'Scale',
    details: [
      'Exercise you can do regularly without burning out',
      'Simple daily habits, not crash diets',
      'An honest progress check every few weeks',
      'A plan that survives work, family and travel',
    ],
  },
  {
    id: 'online-consultation',
    number: '08',
    title: 'Online Consultation',
    description:
      'Cannot come to the clinic? Get checked, get your exercise plan and follow up by video call.',
    icon: 'Video',
    details: [
      'Video check-up from your home',
      'An exercise plan with videos you can follow',
      'Regular follow-up calls',
      'Message support between calls',
    ],
  },
]

/* --- WHY OM SINGH ----------------------------------------------------------- */
export const whyPoints = [
  {
    title: 'We check before we train',
    description: 'Your body is checked first, so exercise never makes the problem worse.',
    icon: 'ScanLine',
  },
  {
    title: 'Everything explained simply',
    description: 'No heavy medical words. You will understand your problem and your plan.',
    icon: 'MessageSquare',
  },
  {
    title: 'Built around your goal',
    description:
      'Touching your toes, lifting your child, or playing your sport - your goal decides the plan.',
    icon: 'Target',
  },
  {
    title: 'Safe, steady progress',
    description: 'We go at a speed your body can handle. Slower at the start, but it lasts.',
    icon: 'TrendingUp',
  },
  {
    title: 'Limited clients',
    description: 'Only a few people are taken at a time, so you always get proper attention.',
    icon: 'UserRound',
  },
  {
    title: 'Rest is part of the plan',
    description: 'Sleep and recovery matter as much as exercise, so both are planned for.',
    icon: 'Moon',
  },
]

/* --- RESULTS ----------------------------------------------------------------
   These entries use Om's real client photographs from /public/images/results/.
   Each file already shows the before and after side by side.

   BEFORE PUBLISHING
   - Confirm you have each client's permission to show their photo.
   - Fill in `summary`, `timeframe` and `client` where you know them. Any field
     left as an empty string is simply not shown, so nothing is invented.
-------------------------------------------------------------------------- */
export const results = {
  disclaimer:
    'These are real clients, shared with their permission. Every body is different, so your result will be your own - it depends on where you start and how regular you are.',
  transformations: [
    {
      id: 'r1',
      image: '/images/results/transformation-01.jpeg',
      focus: 'Weight loss',
      headline: 'Lost weight and kept it off',
      summary: 'Regular training with a plan she could follow at home and at work.', // EDIT
      client: '', // e.g. 'S. K.' - add only with permission
      timeframe: '', // e.g. '16 weeks'
      metrics: [], // e.g. [{ label: 'Weight', from: '00 kg', to: '00 kg' }]
    },
    {
      id: 'r2',
      image: '/images/results/transformation-02.jpeg',
      focus: 'Weight loss',
      headline: 'Step by step, over three check-ups',
      summary: 'Progress checked at fixed points, so she could see it happening.', // EDIT
      client: '',
      timeframe: '',
      metrics: [],
    },
    {
      id: 'r3',
      image: '/images/results/transformation-03.jpeg',
      focus: 'Fitness',
      headline: 'Got fitter and stronger',
      summary: 'Training built around his office hours and travel.', // EDIT
      client: '',
      timeframe: '',
      metrics: [],
    },
    {
      id: 'r4',
      image: '/images/results/transformation-04.jpeg',
      focus: 'Weight loss',
      headline: 'A change that lasted',
      summary: 'Exercise plus small daily habits he could keep up long term.', // EDIT
      client: '',
      timeframe: '',
      metrics: [],
    },
  ],
  progressCards: [
    {
      label: 'Strength',
      title: 'You get visibly stronger',
      description:
        'Your weights and reps are noted every session, so you can see yourself improving.',
      icon: 'Dumbbell',
    },
    {
      label: 'Movement',
      title: 'You move freely again',
      description: 'Stiff shoulders, tight hips and painful knees start working normally.',
      icon: 'Move3D',
    },
    {
      label: 'Confidence',
      title: 'You stop being careful',
      description:
        'You learn what is safe to do, so you stop being scared of bending, lifting or playing.',
      icon: 'HeartPulse',
    },
  ],
}

/* --- CONTACT FORM ----------------------------------------------------------- */
export const serviceOptions = [
  ...services.map((s) => s.title),
  'I am not sure - please guide me',
]

/* Scrolling strip under the hero */
export const marqueeWords = [
  'Back pain',
  'Knee pain',
  'Neck pain',
  'Sports injury',
  'After surgery',
  'Posture',
  'Weight loss',
  'Strength',
]

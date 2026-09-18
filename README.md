# OM SINGH — Physiotherapist & Fitness Performance Coach

A premium personal-brand website built with **React + Vite + Tailwind CSS + Framer Motion**.

> **Move Better. Get Stronger. Live Pain-Free.**

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

---

## Editing the content

**Almost everything on the site is edited in one file: [`src/data/content.js`](src/data/content.js).**
Change the text there and every section updates — no component edits needed.

| What you want to change | Where |
| --- | --- |
| Name, title, tagline, hero intro | `brand` |
| Phone, email, WhatsApp, address, socials, hours | `contact` |
| Navbar links | `navLinks` |
| Trust strip stats | `trustPoints` |
| About copy, credentials, "My Approach" steps | `about` |
| The 8 services + their detail bullets | `services` |
| The 3 featured programs | `programs` |
| "Why Om Singh" points | `whyPoints` |
| Before/after results and progress cards | `results` |
| Testimonials | `testimonials` |
| Contact-form service dropdown | `serviceOptions` (built from `services`) |

### Placeholders — read before launch

Nothing on this site claims real qualifications, experience or client outcomes. The
following are deliberately generic and **must be replaced with verified information**:

1. **Contact details** in `contact` — phone and WhatsApp are set to +91 82909 00924;
   email, address, hours and social links are still placeholders.
2. **Credentials** — `about.credentialsNote`. Add real degrees, registrations and certifications.
3. **Trust-strip numbers** — `trustPoints[].stat`. Set `stat: null` to hide a number entirely.
4. **Program durations** — `programs[].duration`.
5. **Results** — every entry in `results.transformations` carries `placeholder: true`, which
   renders a visible **Sample** tag. Replace with real, consented client data and photos, then
   remove the flag. The disclaimer above the grid (`results.disclaimer`) should stay until then.
6. **Testimonials** — same `placeholder: true` flag and **Sample** tag.

---

## Temporary brand identity

Until Om Singh's real photography and logo arrive, the site ships with a purpose-built
visual identity so it presents as a finished brand. None of it is stock imagery.

### Wordmark and monogram — [`src/components/BrandMark.jsx`](src/components/BrandMark.jsx)

An **OS** monogram set in the display serif inside a ring, with a range-of-motion arc
sweeping across it — the same motif used throughout the artwork. It pairs with the
**OM SINGH** wordmark and the *PHYSIOTHERAPY • FITNESS • PERFORMANCE* line.

- `variant="inline"` — monogram + wordmark on one line (navbar)
- `variant="stacked"` — monogram above the wordmark + tagline (footer)
- `tone="light" | "dark"`, `tagline`, `size`

Both the navbar and the footer render this one component, so **swapping in the real logo
is a single edit**: replace the `<Monogram>` body with `<img src="/images/logo.svg" />`,
or drop the monogram and keep the wordmark. The browser-tab icon is a matching
`public/favicon.svg` — replace that file too.

### Visuals — [`src/components/BrandVisual.jsx`](src/components/BrandVisual.jsx)

Original SVG compositions in the brand palette — biomechanics figures, range-of-motion
arcs, movement traces and assessment references:

| Component | Where it is used | What it shows |
| --- | --- | --- |
| `AthleteVisual` | hero portrait slot | mid-stride athletic figure, dark, with the OM SINGH lock-up |
| `PostureVisual` | about, main image | standing postural assessment with plumb line and spinal segments |
| `JointVisual` | about, detail image | knee goniometry close-up with muscle-fibre lines |
| `ProgramVisual` | the three program cards | range of motion / progressive load / output over time |

Each one sits behind an `<ImagePlaceholder>`, so **a real photo replaces it by setting
one prop** — `src="/images/om-hero.jpg"` — with no other changes. The results and
testimonial slots deliberately keep the plain labelled placeholders, because those must
be filled with real, consented client photography.

## Adding images

Every photo slot uses the `ImagePlaceholder` component: pass a `src` and the real image
replaces the labelled placeholder. Drop files into `public/images/` and reference them with a
leading slash.

| Slot | File to add | Set in | Aspect |
| --- | --- | --- | --- |
| Hero portrait | `public/images/om-hero.jpg` | `src/sections/Hero.jsx` | 4:5 |
| About — main | `public/images/om-about.jpg` | `src/sections/About.jsx` | 4:5 |
| About — detail | `public/images/om-detail.jpg` | `src/sections/About.jsx` | 1:1 |
| Programs (×3) | `public/images/programs/{restore,build,perform}.jpg` | `src/sections/Programs.jsx` | 3:2 |
| Results before/after | `public/images/results/{id}-before.jpg` / `-after.jpg` | `results.transformations[].beforeImage` / `.afterImage` | 3:4 |
| Testimonial headshots | `public/images/testimonials/*.jpg` | `testimonials[].photo` | square |

Example — swapping in the hero portrait:

```jsx
<ImagePlaceholder
  src="/images/om-hero.jpg"   // was: null
  alt="Om Singh, Physiotherapist and Fitness Performance Coach"
  ...
/>
```

Each slot is marked with an `IMAGE:` comment in the code saying exactly which file to add.

---

## Connecting the contact form

The form is front-end only: it validates, shows a success toast and resets. To make it send
somewhere real, replace the body of `submitEnquiry` in
[`src/components/ContactForm.jsx`](src/components/ContactForm.jsx):

```js
async function submitEnquiry(values) {
  const res = await fetch('https://formspree.io/f/XXXXXXX', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  })
  if (!res.ok) throw new Error('Request failed')
  return { ok: true }
}
```

Nothing else changes — validation, toasts and resetting already handle the rest.

---

## Project structure

```
src/
├── data/content.js          all site copy and settings
├── components/
│   ├── Navbar.jsx           sticky nav, scroll state, mobile sheet
│   ├── Button.jsx           every CTA (solid / moss / outline / ghost / text)
│   ├── SectionHeading.jsx   editorial section headers
│   ├── Reveal.jsx           Reveal, Stagger, StaggerItem, TextReveal
│   ├── ImagePlaceholder.jsx image slots with labelled fallbacks
│   ├── ContactForm.jsx      validation + submit handling
│   ├── Toast.jsx            ToastProvider / useToast
│   ├── Icon.jsx             string -> Lucide icon registry
│   ├── ScrollProgress.jsx   top reading-progress bar
│   └── FloatingWhatsApp.jsx floating quick-contact button
├── hooks/useActiveSection.js  scroll-spy for the navbar
└── sections/                Hero, TrustStrip, About, Services, Programs,
                             WhyOmSingh, Results, Testimonials,
                             ConsultationCTA, Contact, Footer
```

## Design system

Colours, fonts and motion are defined in [`tailwind.config.js`](tailwind.config.js) — edit them
there to re-skin the whole site.

| Token | Value | Use |
| --- | --- | --- |
| `bone` | `#F7F5F0` | warm off-white page background |
| `charcoal` | `#14150F` | primary ink, dark sections |
| `moss` | `#2F4636` | deep forest green, brand accent |
| `clay` | `#B4703F` | sparing warm accent (sample tags, form errors) |
| `stone` | greys | secondary text |

Typography: **Fraunces** (display/serif) + **Inter** (UI/body), loaded in `index.html`.
Motion: one easing curve — `cubic-bezier(0.22, 1, 0.36, 1)` — used everywhere, and all
animations are disabled automatically under `prefers-reduced-motion`.

---

## Deploying

The build output is a static `dist/` folder — deploy it to Netlify, Vercel, Cloudflare Pages or
any static host.

```bash
npm run build
```

- **Netlify** — build command `npm run build`, publish directory `dist`
- **Vercel** — framework preset "Vite"
#   O m s i n g h F i t n e s s W e b s i t e  
 
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
| The problem tags under the hero | `commonProblems` |
| The "Inside a session" photo strip | `gallery` |
| Phone, email, WhatsApp, address, socials, hours | `contact` |
| Navbar links | `navLinks` |
| Trust strip stats | `trustPoints` |
| About copy, credentials, "My Approach" steps | `about` |
| The 8 services + their detail bullets | `services` |
| "Why Om Singh" points | `whyPoints` |
| Before/after results and progress cards | `results` |
| Contact-form service dropdown | `serviceOptions` (built from `services`) |

### Placeholders — read before launch

Nothing on this site claims real qualifications, experience or client outcomes. The
following are deliberately generic and **must be replaced with verified information**:

1. **Contact details** in `contact` — phone, WhatsApp, email and Instagram are live, and
   the location is set to Jaipur, Rajasthan. Still placeholders: the street/clinic address,
   the working hours, and the LinkedIn URL (delete it from `socials` in
   `src/sections/Footer.jsx` if there is no LinkedIn profile).
2. **Credentials** — `about.credentialsNote`. Add real degrees, registrations and certifications.
3. **Trust-strip numbers** — `trustPoints[].stat`. Set `stat: null` to hide a number entirely.
4. **Program durations** — `programs[].duration`.
5. **Results** — these now use Om's real client photographs from
   `public/images/results/`. Confirm **written consent** from each client before publishing,
   and fill in `summary`, `client`, `timeframe` and `metrics` where the details are known —
   any field left empty simply does not render, so nothing is invented. The variation
   disclaimer above the grid (`results.disclaimer`) should stay.
6. **Testimonials** — same `placeholder: true` flag and **Sample** tag.

---

## Adding photography

**Every photo slot reads its path from `images` in
[`src/data/content.js`](src/data/content.js).** To add a photo, save the file into
`public/images/` with exactly the name below — that is the whole job, no code change.
Until a file exists the slot shows a labelled placeholder naming the file it is waiting
for, so the site never shows a broken image.

| Slot | File | Ratio |
| --- | --- | --- |
| Hero portrait | `public/images/om-hero.jpeg` | square or 4:5 |
| About — main | `public/images/om-about.jpeg` | 4:5 vertical |
| About — detail | `public/images/om-detail.jpeg` | square |
| "Inside a session" strip | `public/images/gallery/*.jpeg` | 4:5 vertical |
| Results | `public/images/results/transformation-01.jpeg` … `-04.jpeg` | any |

All of these are filled in. To swap one, drop a new file in with the same name, or point
the path at a different file in the `images` / `gallery` entries.

Names are lowercase and the extension matters. To use a different name or location, edit
the path in the `images` object rather than renaming anything in the components.

### Wordmark and monogram — [`src/components/BrandMark.jsx`](src/components/BrandMark.jsx)

An **OS** monogram in the display serif inside a ring with a range-of-motion arc, paired
with the **OM SINGH** wordmark and the *PHYSIOTHERAPY • FITNESS • PERFORMANCE* line. The
navbar and footer both render this one component, so swapping in a real logo is a single
edit: replace the `<Monogram>` body with `<img src="/images/logo.svg" />`. The browser-tab
icon is a matching `public/favicon.svg` — replace that too.

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

## Mobile

Most visitors are on a phone, so the mobile layout is deliberately compressed — the whole
page is roughly 14 screens instead of 23, and the client-results proof appears within the
first two screens.

What differs on a phone (everything reverts at `sm`/`lg` — desktop is untouched):

- **Section order** — set with `order-*` classes in [`src/App.jsx`](src/App.jsx):
  hero → trust → results → services → session photos → about → why → CTA → contact.
  Edit the numbers there, or delete them to use one order everywhere.
- **Services** collapse to eight compact 2-up tiles (icon + title); tapping one opens the
  same full detail dialog.
- **Results and the session photo strip** become swipeable, snap-scrolling carousels.
- **Trust strip, why-points, contact details and footer links** go two-up.
- The About section hides the decorative detail image and its final paragraph.
- Section padding drops from `py-32` to `py-14`.

## Large displays

The layout is an editorial column capped at 1280px, which is right on a 1440–1680px
screen but would sit as a small island on a 4K or ultrawide monitor. Rather than
stretching individual sections, [`src/index.css`](src/index.css) scales the whole page up
in steps from 1700px upward (1.15× → 2.4×), so the design keeps its intended proportions
at any size. Adjust or remove those `@media` blocks to change the behaviour.

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

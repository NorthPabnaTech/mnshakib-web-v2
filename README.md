# mnshakib.com — Frontend V2 (CBC-inspired)

A bolder, more cinematic version of the portfolio inspired by [Creative Business Company](https://www.creativebusinesscompany.com/). **Olive + mint** palette, signature animations, drag-to-scroll testimonials, and a sticky numbered-solutions sequence.

> If you already have v1 (`mnshakib-web/`), this folder is a parallel build. Pick one — don't run both.

---

## ⚡ Quick Start

```bash
npm install
npm run dev      # → http://localhost:3000
npm run build && npm start    # production
```

Requires Node 20+.

---

## 🎨 What's different from v1?

| | V1 (Navy + Gold) | V2 (Olive + Mint — this folder) |
|---|---|---|
| **Palette** | `#0A1628` navy bg, `#D4A84B` gold accent | `#15181C` near-black bg, `#A4E4B8` mint accent |
| **Display font** | Fraunces (serif) | Inter Tight (sans, condensed) |
| **Style** | Premium consultancy, restrained | High-impact challenger brand, cinematic |
| **Hero** | Two-column with profile frame | Full-bleed massive headline with italic mint emphasis |
| **Practice page** | Static 6-card grid | Sticky-scroll sequence (01 → 02 → 03 → ...) with active-state highlighting on the left rail |
| **Testimonials** | Static 2×2 grid | Drag-to-scroll horizontal carousel with custom "drag" cursor |
| **Motion** | Minimal | Two infinite marquees (client logos + taglines), fade-up reveals, drag physics via Framer Motion |
| **Nav** | Simple link row | Mega-menu hover dropdown for "Practice" listing all 6 services |
| **Dependencies** | Next + Tailwind only | Adds `framer-motion@^11.11.10` |

---

## 🗂 Project Structure

```
mnshakib-web-v2/
│
├── app/                          ← Next.js 15 App Router pages
│   ├── layout.tsx
│   ├── page.tsx                  ← Home (Hero → Logos → Marquee → Solutions → Stats → Testimonials)
│   ├── about/page.tsx
│   ├── practice/page.tsx
│   ├── experience/page.tsx
│   ├── work/page.tsx
│   ├── ventures/page.tsx
│   ├── contact/page.tsx
│   ├── globals.css
│   └── not-found.tsx
│
├── components/
│   ├── nav/
│   │   ├── SiteNav.tsx           ← Mega-menu nav
│   │   └── Breadcrumb.tsx
│   │
│   ├── ui/                       ← Primitives
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   ├── SectionLabel.tsx      ← incl. <Headline> with italic-mint emphasis system
│   │   ├── PageHero.tsx
│   │   └── Tag.tsx
│   │
│   ├── interactive/              ← ⭐ V2's signature animated components ⭐
│   │   ├── Marquee.tsx           ← Infinite horizontal scroll
│   │   ├── DragCarousel.tsx      ← Drag-to-scroll w/ custom cursor
│   │   └── RevealOnScroll.tsx    ← IntersectionObserver fade-up
│   │
│   ├── sections/                 ← Page sections
│   │   ├── HomeHero.tsx
│   │   ├── ClientLogosStrip.tsx       ← Marquee of client names
│   │   ├── TaglineMarquee.tsx         ← Two scrolling tagline rows
│   │   ├── NumberedSolutions.tsx      ← Sticky-scroll 01→02→03 practices
│   │   ├── ImpactStats.tsx            ← 4 big numbers w/ mono labels
│   │   ├── TestimonialsCarousel.tsx   ← Drag carousel
│   │   ├── Timeline.tsx
│   │   ├── ProjectsList.tsx
│   │   ├── ProductsGrid.tsx
│   │   ├── AboutNarrative.tsx
│   │   ├── Credentials.tsx
│   │   └── ContactDetails.tsx
│   │
│   └── footer/
│       ├── CtaStrip.tsx
│       └── SiteFooter.tsx
│
├── lib/
│   ├── content/                  ← Same content files as v1 — fully shared
│   │   ├── site.ts
│   │   ├── experiences.ts
│   │   ├── educations.ts
│   │   ├── certifications.ts
│   │   ├── services.ts
│   │   ├── projects.ts
│   │   ├── products.ts
│   │   └── reviews.ts
│   ├── types.ts
│   └── utils.ts
│
├── tailwind.config.ts            ← New olive + mint theme tokens
├── package.json                  ← Adds framer-motion
└── ... (same config as v1)
```

---

## 🌟 Signature animations & interactions

These are what make v2 feel cinematic. Each is its own file — easy to remove or tune if dev wants to scale back.

### 1. Italic mint emphasis word
Used inside every major headline. Specify segments as `HeadlinePart[]`:
```ts
title={[
  { type: "text", value: "Strategy that survives " },
  { type: "ital", value: "contact" },
  { type: "text", value: " with the people who have to " },
  { type: "ital", value: "execute it" },
  { type: "text", value: "." },
]}
```
The `<Headline>` component renders them with the italic-mint treatment automatically.

### 2. Marquee rows (`components/interactive/Marquee.tsx`)
Used twice on home: client logos and taglines.
```tsx
<Marquee speed="slow" reverse>
  {phrases.map(p => <span key={p}>{p}</span>)}
</Marquee>
```
- `speed="fast"` (30s) vs `"slow"` (60s)
- `reverse` flips direction
- Children auto-duplicate for seamless looping

### 3. Drag carousel (`components/interactive/DragCarousel.tsx`)
Used for testimonials. Custom "drag" cursor follows the mouse on hover.
```tsx
<DragCarousel>
  {items.map(i => <Card key={i.id} {...i} />)}
</DragCarousel>
```
Built with Framer Motion's `drag` constraint system. Touch-friendly out of the box.

### 4. Sticky numbered solutions (`components/sections/NumberedSolutions.tsx`)
The home + practice page's most distinctive layout.
- Left rail is sticky — shows all 4 (or 6) practice titles
- Right rail scrolls through detailed cards
- Active item highlights on the left as you scroll past it on the right (via IntersectionObserver)
- Clicking a left-rail title smooth-scrolls the right rail to that card

### 5. Fade-up reveals (`components/interactive/RevealOnScroll.tsx`)
Wrap any element to make it fade up on entering the viewport. Lightweight — uses IntersectionObserver, not Framer Motion.

### 6. Mega-menu nav
Hovering "Practice" reveals all 6 service areas with descriptions, deep-linked to anchors on the practice page.

---

## ✏️ How to edit content

Same as v1 — all content lives in `lib/content/*.ts`. **The two folders share these files verbatim**, so if you decide to switch from v1 to v2 (or vice versa), no content migration is needed.

To update the home headline:
```ts
// lib/content/site.ts
hero: {
  headlineParts: [
    { type: "text", value: "Your new " },
    { type: "ital", value: "headline" },
  ],
}
```

> Note: The current `HomeHero.tsx` uses its own hard-coded headline (not from `site.ts`) to give v2 a distinctive opening. To pull from content instead, swap in `<Headline parts={site.hero.headlineParts} ... />`.

---

## 🚀 Deployment

**Vercel** (2 min): push to GitHub → import → done.

**UpscaleBD VPS**: `npm run build && npm start`, behind Nginx.

---

## 📌 Still needs

- [ ] Real client SVG logos in `/public/logos/` (replace text in `ClientLogosStrip.tsx`)
- [ ] Real profile photo
- [ ] Real testimonial attributions
- [ ] Favicon at `app/icon.png`
- [ ] OG image at `public/og-image.png`

---

## 🔄 Which to ship?

| Use V1 if | Use V2 if |
|---|---|
| Shakib wants a polished, restrained consulting site | Shakib wants a high-impact challenger-brand site |
| Less motion, faster initial load | More motion, slightly heavier (framer-motion is ~50KB gzipped) |
| Audience: traditional clients, board-level | Audience: modern founders, growth-stage operators |

Both work. Both pull from identical content. Run both side-by-side on staging URLs and let Shakib pick.

---

*Built for Nazmus Shakib · UpscaleBD Ltd.*

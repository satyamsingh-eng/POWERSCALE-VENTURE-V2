# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # dev server on port 3000
npm run build      # production build (run this to verify before finishing any task)
npm run start      # serve production build
npm run lint       # ESLint
```

Always run `npm run build` and confirm `✓ Compiled successfully` + `✓ Generating static pages (19/19)` before reporting a task complete.

## Stack

- **Next.js 14.2.3** App Router, TypeScript, fully static output (SSG)
- **Styling**: scoped CSS via `dangerouslySetInnerHTML` inside each component — no Tailwind, no CSS modules. Global tokens only in `src/app/globals.css`
- **Animation**: `motion/react` v12 (`framer-motion` alias) for scroll/hover; `RevealWrapper` + `.reveal` class for intersection-based fade-ins
- **Dark mode**: `:root[data-theme='dark']` on `<html>` — toggled by `ThemeToggle.tsx`. All color switches must use CSS custom properties, never hardcoded hex

## Design Tokens (globals.css)

| Token | Light | Dark |
|---|---|---|
| `--color-canvas` | `#f5f5f4` | `#060606` |
| `--color-canvas-alt` | `#ececea` | `#0e0e0d` |
| `--color-signature` | `#2f6f6a` | `#8abbb4` |
| `--color-ink-primary` | `#111110` | `#f5f5f4` |
| `--color-ink-secondary` | `#252522` | `#dedad4` |
| `--color-steel` | `#3e3e3b` | `#c0bdb5` |
| `--color-muted` | `#686865` | `#9a9890` |
| `--color-divider` | `rgba(16,16,16,0.1)` | `rgba(245,245,244,0.12)` |

Body text defaults to `--color-ink-secondary` (not `--color-ink-primary`). Use `--color-ink-primary` only for headings and high-emphasis elements.

Spacing scale: `--space-1` (0.5rem) → `--space-12` (6rem). Named aliases: `--space-sm` = `--space-2`, `--space-md` = `--space-4`, `--space-lg` = `--space-6`. Section rhythm: `--section-gap` = `clamp(4rem, 7.5vw, 7rem)`.

Typography scale: `--text-hero` = `clamp(2.75rem, 7vw, 5.5rem)`, `--text-h2` = `clamp(2rem, 4.5vw, 3.75rem)`, `--text-body` = `clamp(1rem, 1.2vw, 1.125rem)`. Body `line-height: 1.7`.

Layout: `--container-max: 1280px`.

## Architecture

### Pages → Components

`src/app/page.tsx` (home) composes: `Hero → Marquee → SectorFocus → OperatorProof → HowWePartner → PortfolioSnapshot → Perspectives → Footer`

Each route under `src/app/` has its own `page.tsx`.

### Route Map

| Route | Notes |
|---|---|
| `/` | Homepage |
| `/about` | Partners + Advisors |
| `/approach` | Merged long-form page: How We Work → What We Evaluate → Operator Index |
| `/portfolio` | Portfolio companies |
| `/perspectives` | Articles/editorial |
| `/contact` | Founder contact form |
| `/index-page` | Redirects to `/approach#operator-index` |
| `/team/arthi-b` | Profile page |
| `/team/sanjay-tolani` | Profile page |
| `/team/satya-das` | Profile page |
| `/team/partha-pemmaraju` | Profile page |
| `/team/rajesh-kumar-adla` | Profile page |
| `/team/amit-mehta` | Profile page |
| `/team/sanjay` | Server redirect → `/team/sanjay-tolani` |
| `/team/satya` | Server redirect → `/team/satya-das` |

### The `/approach` Page

This is a unified 6-section long-form institutional page. Do not split it back into separate pages. Sections are anchor-linked via `id` attributes:
- `#how-we-work` — Stage / Diligence / Post-investment / Hold (editorial ledger rows)
- `#what-we-evaluate` — 4 sectors in split-layout rows
- `#operator-index` — Operator Index entries (Constraint / Decision / Tradeoff / Outcome structure)

An in-page subnav strip at the bottom of the hero links to all three anchors.

### Navigation

`Navigation.tsx` — 4 top-level links: `About & Team · Approach · Portfolio · Perspectives`. Active state uses `usePathname()` from `next/navigation`; active link gets `nav__link--active` class. The nav link styles (`.nav__link`, `.nav__link--active`) live in `globals.css`, not inside the component's scoped CSS.

### The `.section-card` Pattern

`.section-card` (defined in `globals.css`) is a rounded bordered card that wraps some page sections. It can look repetitive if overused — prefer plain `<section>` for editorial/open layouts.

### Reveal Animations

Wrap a section in `<RevealWrapper>` and add `className="reveal"` (+ `reveal-delay-1` through `reveal-delay-5`) to children. The `IntersectionObserver` in `RevealWrapper.tsx` adds `.visible` when elements scroll into view. CSS for `.reveal` / `.reveal.visible` is in `globals.css`.

### Logo Assets (`public/images/`)

- `powerscale-logo-transparent.png` — dark navy text on transparent bg (use on light backgrounds; used in nav and footer)
- `powerscale-logo-on-dark.png` — white text on transparent bg (dark backgrounds only)
- `powerscale-favicon.png` — mountain icon only

Do not reference the `/IMAGE/` folder directly in code — it is gitignored. Profile images live in `public/images/`.

### Team / People Data

- **Partners**: Arthi B, Sanjay Tolani, Satya Das — defined in `OperatorProof.tsx` (home) and `about/page.tsx`
- **Advisors**: Partha Pemmaraju, Satya Das, Rajesh Kumar Adla, Amit Mehta — defined in `about/page.tsx` ADVISORS array
- Sanjay Tolani and Satya Das hold both Partner and Advisor roles; role label is "Partner & Advisor"
- Partner cards use `TiltedCard` when `imageSrc` is set; `ImagePlaceholder` otherwise

### UI Components (`src/components/ui/`)

- `TiltedCard` — photo card with CSS perspective tilt on hover (has its own `.css` file)
- `ImagePlaceholder` — hatched placeholder block; use only where no real image exists
- `BorderGlow` — edge-proximity glow effect (has its own `.css` file); used in `HowWePartner.tsx`
- `FadeContent`, `ShinyText`, `GradientText` — animation/text effect wrappers
- `LogoLoop` — horizontal marquee used by `Marquee.tsx`

Note: `AnimatedList.tsx`, `ScrollFloat.tsx`, and `flip-button.tsx` exist locally but are gitignored as unused — do not import them.

## Content Rules

These are hard constraints — never override them:

1. **No fabrication**: Do not invent LinkedIn URLs, portfolio metrics, achievements, or company details not already in the code or `INTEL/POSITIONING.md`
2. **No inflation**: Do not make advisors or partners sound more credentialed than the existing text establishes
3. **Metrics**: Any numbers on the site must be editorially framed as conviction signals, not raw claims
4. **Logo**: Never redesign or alter the Powerscale Ventures logo shape, colors, or proportions

## Firm Identity (for content decisions)

Source of truth: `INTEL/POSITIONING.md`. Key facts:
- Operator-led VC, India-native, growth-stage focus
- Four sectors: energy transition, deeptech infrastructure, consumer, AI
- Every partner has built and run a company before investing
- Entry point: companies with ~$2–15M ARR that have found first market, now scaling
- Do not use "Series A & B" anywhere on the site — use growth-stage language instead
- Design inspiration references: `POWERSCALE SKILLS/DESIGN-apple.md` (Apple), `POWERSCALE SKILLS/DESIGN-elevenlabs.md` (ElevenLabs)

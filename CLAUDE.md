# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # dev server on port 3000
npm run build      # production build (run this to verify before finishing any task)
npm run start      # serve production build
npm run lint       # ESLint
```

Always run `npm run build` and confirm `✓ Compiled successfully` + `✓ Generating static pages (18/18)` before reporting a task complete.

## Stack

- **Next.js 14.2.3** App Router, TypeScript, fully static output (SSG)
- **Styling**: scoped CSS via `dangerouslySetInnerHTML` inside each component — no Tailwind, no CSS modules. Global tokens only in `src/app/globals.css`
- **Animation**: `motion/react` v12 (`framer-motion` alias) for scroll/hover; `RevealWrapper` + `.reveal` class for intersection-based fade-ins
- **Dark mode**: `[data-theme='dark']` on `<html>` — toggled by `ThemeToggle.tsx`. All color switches must use CSS custom properties, never hardcoded hex

## Design Tokens (globals.css)

| Token | Light | Dark |
|---|---|---|
| `--color-canvas` | `#f5f5f4` | `#0b0b0b` |
| `--color-canvas-alt` | `#ececea` | `#141413` |
| `--color-signature` | `#2f6f6a` | `#8abbb4` |
| `--color-ink-primary` | `#111110` | `#f5f5f4` |
| `--color-steel` | `#565656` | `#aaa69d` |
| `--color-divider` | `rgba(16,16,16,0.1)` | `rgba(245,245,244,0.12)` |

Spacing scale: `--space-1` (0.5rem) → `--space-12` (6rem). Named aliases: `--space-sm/md/lg/xl/2xl`. Section rhythm: `--section-gap` (`clamp(3.5rem,7vw,6rem)`).

## Architecture

### Pages → Components

`src/app/page.tsx` (home) composes: `Hero → Marquee → SectorFocus → OperatorProof → HowWePartner → PortfolioSnapshot → Perspectives → Footer`

Each route under `src/app/` has its own `page.tsx`. Team member profiles live at `src/app/team/[slug]/page.tsx`. Routes `/team/sanjay` and `/team/satya` are server-side redirects to the canonical full-name slugs (`sanjay-tolani`, `satya-das`).

### The `.section-card` Pattern

`.section-card` (defined in `globals.css`) is a rounded white card (`border-radius: 24px`, `border: 1px solid var(--color-divider)`, `background: var(--color-surface)`) that wraps most page sections. It creates visual separation but can look repetitive if overused. When sections need to feel open/editorial rather than card-like, render them as plain `<section>` without `.section-card`.

### Reveal Animations

Wrap a section in `<RevealWrapper>` and add `className="reveal"` (+ `reveal-delay-1` through `reveal-delay-5`) to children. The `IntersectionObserver` in `RevealWrapper.tsx` adds `.visible` when elements enter the viewport. CSS for `.reveal` / `.reveal.visible` transitions is in `globals.css`.

### Logo Assets (`public/images/`)

Processed by `scripts/process_logo_v2.py` (requires Pillow + numpy). Key outputs:
- `powerscale-logo-transparent.png` — transparent bg, blue mountain, **dark navy text** (use on light backgrounds)
- `powerscale-logo-on-dark.png` — transparent bg, white text (use on dark backgrounds)
- `powerscale-favicon.png` — mountain icon only, 256×256

Nav and footer reference `powerscale-logo-transparent.png` directly with no badge container.

### Team / People Data

- **Partners**: Arthi B, Sanjay Tolani, Satya Das — defined in `OperatorProof.tsx` (home) and `about/page.tsx`
- **Advisors**: Sanjay Tolani, Partha Pemmaraju, Satya Das, Rajesh Kumar Adla — defined in `about/page.tsx` ADVISORS array
- Sanjay Tolani and Satya Das hold both Partner and Advisor roles simultaneously; their canonical profile pages are `/team/sanjay-tolani` and `/team/satya-das` with role label "Partner & Advisor"
- Partner cards use `TiltedCard` when `imageSrc` is set; `ImagePlaceholder` otherwise
- Profile images live in `public/images/` — do not reference `IMAGE/` folder directly in code

### UI Components (`src/components/ui/`)

- `TiltedCard` — photo card with CSS perspective tilt on hover (has its own `.css` file)
- `ImagePlaceholder` — hatched placeholder block; use only where no real image exists
- `FadeContent`, `ShinyText`, `GradientText`, `ScrollFloat`, `AnimatedList` — animation wrappers
- `BorderGlow` — glowing border effect

## Content Rules

These are hard constraints — never override them:

1. **No fabrication**: Do not invent LinkedIn URLs, portfolio metrics, achievements, or company details not already in the code or `INTEL/POSITIONING.md`
2. **No inflation**: Do not make advisors or partners sound more credentialed than the existing text establishes
3. **Metrics**: Any numbers on the site must be editorially framed as conviction signals, not raw claims
4. **Logo**: Never redesign or alter the Powerscale Ventures logo shape, colors, or proportions

## Firm Identity (for content decisions)

Source of truth: `INTEL/POSITIONING.md`. Key facts:
- Operator-led VC, Series A & B, India-native
- Four sectors: energy transition, deeptech infrastructure, consumer, AI
- Every partner has built and run a company before investing
- Entry point: companies with ~$2–15M ARR that have found first market, now scaling
- Design inspiration references: `POWERSCALE SKILLS/DESIGN-apple.md` (Apple), `POWERSCALE SKILLS/DESIGN-elevenlabs.md` (ElevenLabs)

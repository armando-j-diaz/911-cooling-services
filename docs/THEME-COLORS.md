# Lock In — Theme & Color Guide

**Company:** Lock In (branding/theme still being decided)  
**Purpose:** One place to find every color touchpoint so a theme swap stays fast and predictable.

---

## Golden rule: edit these two files first

Almost all UI colors flow from **two sources**. Update both so Tailwind classes and CSS variables stay matched.

| File | What it controls |
|------|------------------|
| [`src/styles/theme.css`](../src/styles/theme.css) | CSS variables (`--color-*`), `.gradient-emergency`, global tokens |
| [`tailwind.config.mjs`](../tailwind.config.mjs) | Tailwind color names: `emergency`, `navy`, `ice` + CTA shadows |

After changing those, search the repo for the **old hex codes** (see checklist below) and update any hardcoded leftovers.

---

## Color roles (what each color *means*)

Names like `emergency` / `navy` are legacy from the HVAC build. When Lock In’s palette is chosen, map new brand colors onto these **roles**:

| Role | Current hex | Token / Tailwind | Used for |
|------|-------------|------------------|----------|
| **CTA / accent** | `#F58220` → `#FFB81C` | `--color-emergency-start/end`, `emergency`, `emergency-light`, `.gradient-emergency` | Primary buttons, active nav, accents, orange section line |
| **Trust / brand blue** | `#0F2C59` | `navy`, `--color-navy` | Text on light areas, hero overlay, navy section line, phone icon btn |
| **Brand blue (lighter)** | `#1A365D` | `navy-light`, `--color-navy-light` | Hero fallback bg, secondary buttons, section line |
| **Cool tint / subtext** | `#E0F2FE`, `#A5F3FC` | `ice`, `ice-accent` | Muted text on dark sections, borders on light mobile menu |
| **Dark page surface** | `#0C1219` | `--band-bg`, `bg-[#0c1219]` | Body, footer, dark content band, photo borders |
| **Bar surface (header scrolled, slide-up CTA)** | `rgba(12, 18, 25, 0.97)` | `--color-bar-surface`, `--color-bar-border` | Scrolled header, bottom CTA bar |
| **Card on dark band** | `#1A222D` | hardcoded | Review cards, gallery tiles |
| **White / near-white** | `#FFFFFF`, `#F8FAFC` | `white`, gray tokens | Mobile menu (over hero), review dots |

### Hero photo overlay (navy gradient)

Not in `theme.css` — lives in [`src/styles/hero-banner.css`](../src/styles/hero-banner.css) (`.hero-overlay`). Uses `rgba(15, 44, 89, …)` = navy `#0F2C59`. Change there if the hero wash should match a new primary blue.

### Dark band texture (subtle glows)

[`src/styles/sections-dark.css`](../src/styles/sections-dark.css) — `.site-dark-band` background gradients use **raw rgba** of orange, ice, and navy. If the palette changes, update those three `radial-gradient` lines to match new accent/ice/navy RGB values.

---

## Quick swap checklist

When you have final Lock In colors, work in this order:

1. **[`src/styles/theme.css`](../src/styles/theme.css)** — all `--color-*` variables (including `--color-bar-surface` if the bar should shift).
2. **[`tailwind.config.mjs`](../tailwind.config.mjs)** — `theme.extend.colors` + `boxShadow.cta` / `card` (rgba uses orange/navy today).
3. **[`src/styles/sections-dark.css`](../src/styles/sections-dark.css)** — `--band-bg`, `.section-accent-line` spans, `.site-dark-band` radial gradients.
4. **[`src/styles/hero-banner.css`](../src/styles/hero-banner.css)** — `.hero-banner` fallback + `.hero-overlay` gradient.
5. **[`src/styles/header.css`](../src/styles/header.css)** — a few hardcoded hovers (`#ffb81c`, `#f58220`, `#0f2c59`, `#e0f2fe`) for transparent vs scrolled states.
6. **Hardcoded hex in components** (search old values):

| Search for | Files |
|------------|--------|
| `#0c1219` | `Layout.astro`, `Footer.astro`, `WhoWeArePhotos.astro`, `sections-dark.css` |
| `#1a222d` | `GoogleReviews.astro`, `InstallationsGallery.astro` |
| `#1a365d` | `sections-dark.css`, `hero-banner.css`, `tailwind` (prefer token) |
| `#f58220` / `#ffb81c` | `header.css`, `sections-dark.css` |
| `rgba(15, 44, 89` | `hero-banner.css`, `header.css` |
| `rgba(12, 18, 25` | `about-page.css`, `theme.css` (`--color-bar-surface`) |
| `rgba(245, 130, 32` | `sections-dark.css` (orange glow) |

7. **Do not change** Google star colors in `GoogleReviews.astro` (`#4285F4`, etc.) unless intentionally rebranding the Google badge.

8. Run **`npm run build`** and spot-check: home hero, scrolled header, dark sections, reviews, quote form, installations gallery, about overlays, slide-up CTA bars.

---

## Where colors appear (by UI area)

### Global / layout

| Area | Location |
|------|----------|
| Page background | [`src/layouts/Layout.astro`](../src/layouts/Layout.astro) — `body` `bg-[#0c1219]` |
| CSS variables loaded | [`src/layouts/Layout.astro`](../src/layouts/Layout.astro) imports `theme.css` |
| Dark content wrapper | [`src/styles/sections-dark.css`](../src/styles/sections-dark.css) — `.site-dark-band` on home/about/installations main |
| Section labels (orange + navy line) | [`src/styles/sections-dark.css`](../src/styles/sections-dark.css) — `.section-accent-line` |
| Shared component | [`src/components/SectionLabel.astro`](../src/components/SectionLabel.astro) |

### Header & navigation

| Area | Location |
|------|----------|
| Transparent → solid on scroll | [`src/styles/header.css`](../src/styles/header.css) + scroll logic in [`src/components/Header.astro`](../src/components/Header.astro) |
| Scrolled / CTA bar surface | `--color-bar-surface` in `theme.css` (also [`src/styles/scroll-cta-bar.css`](../src/styles/scroll-cta-bar.css)) |
| Tailwind in markup | `Header.astro` — `bg-navy`, `gradient-emergency`, `text-emergency` |

### Heroes

| Page | Location |
|------|----------|
| Home slideshow + overlay | [`src/styles/hero-banner.css`](../src/styles/hero-banner.css), [`src/components/Hero.astro`](../src/components/Hero.astro) |
| Installations hero | Same `hero-banner.css`, [`src/components/installations/InstallationsHero.astro`](../src/components/installations/InstallationsHero.astro) |
| About hero + stand-for overlay | [`src/styles/about-page.css`](../src/styles/about-page.css), [`src/components/about/AboutHero.astro`](../src/components/about/AboutHero.astro), `AboutStandFor.astro` |

### Components (mostly Tailwind tokens)

These files use **`text-ice`**, **`text-navy`**, **`bg-navy`**, **`gradient-emergency`**, **`text-emergency-light`**, etc. — fix `theme.css` + Tailwind first; only edit the file if you see a raw `#hex`:

- [`src/components/LeadForm.astro`](../src/components/LeadForm.astro) — form fields (light inputs on dark band)
- [`src/components/GoogleReviews.astro`](../src/components/GoogleReviews.astro) — cards + carousel dots in [`src/styles/google-reviews.css`](../src/styles/google-reviews.css)
- [`src/components/WhoWeAre.astro`](../src/components/WhoWeAre.astro) / [`WhoWeArePhotos.astro`](../src/components/WhoWeArePhotos.astro)
- [`src/components/ScrollCtaBar.astro`](../src/components/ScrollCtaBar.astro)
- [`src/components/Footer.astro`](../src/components/Footer.astro)
- [`src/components/ServiceAreas.astro`](../src/components/ServiceAreas.astro)

### Copy & business name (not colors)

Company name, phone, taglines: **[`src/data/site.ts`](../src/data/site.ts)** — separate from theme; update when Lock In copy is final.

---

## Suggested future improvement (optional)

To make swaps even easier later:

1. Add `--color-band-bg`, `--color-card-dark`, `--color-hero-overlay-*` to `theme.css`.
2. Replace hardcoded `bg-[#0c1219]` / `bg-[#1a222d]` in `.astro` files with `bg-band` / `bg-card-dark` Tailwind aliases wired to those variables.
3. Point `sections-dark.css` and `hero-banner.css` at variables only (no raw hex).

Until then, the **checklist + hex search** above is enough.

---

## Current palette snapshot (911 poster / logo brand)

```
CTA gradient:  #E31E24 → #FF4D4D  (heat red)
Navy:          #0A0F18  (light: #141C2E)
Ice / cool:    #DBEAFE  (accent: #38BDF8)
Silver text:   #C8CDD3  (light: #E8EAED)
Dark band:     #05080E
Card on dark:  #121820
Bar surface:   rgba(5, 8, 14, 0.97)
Section line:  red + blue (#E31E24 / #2563EB)
```

---

## Related docs

- [`AGENT-HANDOFF.md`](AGENT-HANDOFF.md) — site structure, pages, features  
- [`README.md`](../README.md) — run/build commands  

**Last updated:** 2026-05-20 — Lock In context; theme TBD.

# 911 Cooling — Website

Single-page, mobile-first landing page for emergency HVAC leads in South Florida.

**Live conversion paths:** tap-to-call phone number + quote form → Make.com → email, Google Sheet, Housecall Pro.

---

## Quick start (first time)

You need [Node.js](https://nodejs.org) (v18+) installed. Open Terminal in this folder:

```bash
npm install
cp .env.example .env
# Edit .env — paste your Make.com webhook URL
npm run dev
```

Open http://localhost:4321 to preview.

---

## Hero banner photos

Drop your team/truck photos into **`public/images/hero/`** as `01.png`, `02.png`, `03.png`, `04.png` (or update paths in `site.ts`). One full background image shows at a time and slowly fades to the next. See `public/images/hero/README.md` for details.

To use different filenames, edit `hero.bannerImages` in `src/data/site.ts`.

---

## Update your business info (no coding)

Edit one file: **`src/data/site.ts`**

| Field | What to change |
|-------|----------------|
| `phone` | Display number, e.g. `(305) 555-0911` |
| `phoneTel` | Dial format for links, e.g. `+13055550911` |
| `license` | Your FL HVAC license line |
| `diagnosticOffer` | Hero offer text |
| `hero.headline` / `hero.subhead` | Main headline |
| `whoWeAre` | Who We Are section copy |
| `about` | About page copy + FAQ |
| `reviews` | Testimonial cards |
| `serviceAreas` | Neighborhood list |
| `googleBusinessUrl` | Google Business reviews link |

**Comfort Club** is shelved (not on site) — see `comfortClub` in `site.ts` and `docs/AGENT-HANDOFF.md`.

After saving, run `npm run build` locally or push to GitHub (Vercel rebuilds automatically).

---

## Deploy to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial 911 Cooling landing page"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### 2. Import in Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**.
2. Import your GitHub repo.
3. Framework preset: **Astro** (auto-detected).
4. Add environment variable:
   - Name: `PUBLIC_MAKE_WEBHOOK_URL`
   - Value: your Make.com custom webhook URL
5. Click **Deploy**.

### 3. Connect your domain

In Vercel → Project → **Settings** → **Domains** → add your domain (e.g. `911cooling.com`).

At your domain registrar (GoDaddy, Namecheap, etc.), add DNS records Vercel shows you. Typical setup:

| Type | Name | Value |
|------|------|-------|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

DNS can take up to 48 hours; often completes in under an hour. HTTPS is automatic.

---

## Make.com setup

See **[docs/make-scenario.md](docs/make-scenario.md)** for step-by-step webhook, email, Google Sheets, and Housecall Pro configuration.

---

## Agent / handoff doc

If you switch chats or use another AI, read **`docs/AGENT-HANDOFF.md`** for full project context, design rules, and what’s still TODO.

---

## Project structure

```
src/
  data/site.ts       ← business copy & phone number
  components/        ← page sections
  scripts/           ← form submit logic
  pages/index.astro  ← main page
public/logo.png      ← your logo
```

---

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local preview |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build |

---

## Support

- Form not sending? Check `PUBLIC_MAKE_WEBHOOK_URL` in Vercel and that your Make scenario is **ON**.
- Need to change colors? See `src/styles/theme.css` and `tailwind.config.mjs`.

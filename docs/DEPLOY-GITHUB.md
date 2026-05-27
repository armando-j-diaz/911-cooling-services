# Host on GitHub Pages (free) + custom domain

Your site deploys automatically when you push to `main`. No Vercel required.

**Live URL (until custom domain):**  
https://armando-j-diaz.github.io/911-cooling-services/

---

## One-time setup on GitHub

### 1. Push your code

Repo: https://github.com/armando-j-diaz/911-cooling-services

```bash
cd "/Users/armandodiaz0511345/Library/CloudStorage/OneDrive-Personal/911 Cooling/Website"
git push -u origin main
```

### 2. Turn on GitHub Pages

1. Open the repo on GitHub → **Settings** → **Pages**
2. Under **Build and deployment**:
   - **Source:** GitHub Actions  
   (not “Deploy from branch”)
3. Save — no branch to pick when using Actions.

### 3. Add the Make.com webhook secret (quote form)

1. Repo → **Settings** → **Secrets and variables** → **Actions**
2. **New repository secret**
   - Name: `PUBLIC_MAKE_WEBHOOK_URL`
   - Value: your Make.com webhook URL (same as local `.env`)

### 4. Run the deploy

1. **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**  
   Or push any commit to `main`.
2. Wait for green checkmark (~1–2 minutes).
3. Open **Settings → Pages** for the live link.

---

## Custom domain (your own .com)

### 1. DNS at your registrar

In GoDaddy, Namecheap, etc., add what GitHub shows under **Settings → Pages → Custom domain**. Typical:

| Type | Name | Value |
|------|------|--------|
| A | `@` | `185.199.108.153` (and related GitHub IPs — use all GitHub lists) |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `armando-j-diaz.github.io` |

GitHub’s UI gives the exact records when you type your domain.

### 2. Tell the build to use the root path

Add another **Actions secret**:

| Name | Example value |
|------|----------------|
| `PUBLIC_SITE_URL` | `https://www.yourdomain.com` |

(No trailing slash. Use `https://`.)

When `PUBLIC_SITE_URL` is **not** a `github.io` URL, the site builds with `base: /` so links work on your domain.

### 3. Set domain in GitHub

**Settings → Pages → Custom domain** → enter `www.yourdomain.com` → Save → enable **Enforce HTTPS** when offered.

---

## How updates work

```bash
# edit files, then:
git add .
git commit -m "Update copy"
git push
```

GitHub Actions rebuilds and publishes automatically.

---

## What stays off GitHub

| File | Why |
|------|-----|
| `.env` | Secrets — use Actions secret instead |
| `node_modules/` | Reinstalled on each build |
| `dist/` | Built in the cloud |

---

## Checklist

- [ ] Code pushed to `armando-j-diaz/911-cooling-services`
- [ ] **Pages → Source: GitHub Actions**
- [ ] Secret `PUBLIC_MAKE_WEBHOOK_URL` added
- [ ] Actions workflow succeeded
- [ ] Site loads at github.io URL
- [ ] (Optional) `PUBLIC_SITE_URL` + custom domain + DNS

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| 404 on github.io | Wait 2–5 min after deploy; URL must include `/911-cooling-services/` |
| CSS/images broken | Ensure `base` in `astro.config.mjs` matches repo name |
| Form fails on live site | Add `PUBLIC_MAKE_WEBHOOK_URL` secret; re-run Actions |
| Custom domain shows old site | DNS can take up to 48h; check `PUBLIC_SITE_URL` secret |
| Workflow not listed | Push `.github/workflows/deploy.yml` to `main` |

---

## Vercel (optional)

This project no longer uses Vercel by default. `vercel.json` was removed. You can still use Vercel later if you prefer.

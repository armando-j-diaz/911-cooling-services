# Put this site on GitHub + your custom domain

Follow these steps in order. Your code is already committed locally on branch `main`.

---

## Step 1 — Create the GitHub repository

1. Sign in at [github.com](https://github.com).
2. Click **+** → **New repository**.
3. Settings:
   - **Repository name:** `911-cooling-website` (or any name you prefer)
   - **Visibility:** Private or Public (your choice)
   - **Do not** check “Add a README” — you already have one locally
4. Click **Create repository**.

GitHub will show a page with setup commands. Use **Option 1** below.

---

## Step 2 — Push your code from Terminal

Open Terminal in this project folder and run (replace `YOUR_USERNAME` and repo name if different):

```bash
cd "/Users/armandodiaz0511345/Library/CloudStorage/OneDrive-Personal/911 Cooling/Website"

git remote add origin https://github.com/YOUR_USERNAME/911-cooling-website.git

git push -u origin main
```

If GitHub asks you to sign in, use a **Personal Access Token** as the password (not your GitHub password). Create one at: GitHub → Settings → Developer settings → Personal access tokens.

**SSH instead of HTTPS:**

```bash
git remote add origin git@github.com:YOUR_USERNAME/911-cooling-website.git
git push -u origin main
```

---

## Step 3 — Deploy on Vercel (free, works great with Astro)

1. Go to [vercel.com](https://vercel.com) and sign in with **GitHub**.
2. **Add New…** → **Project** → import `911-cooling-website`.
3. Vercel should detect **Astro** automatically (`vercel.json` is already in the repo).
4. **Environment variables** — add before deploying:
   - Name: `PUBLIC_MAKE_WEBHOOK_URL`
   - Value: your Make.com webhook URL (same as in local `.env`)
5. Click **Deploy**.

Every `git push` to `main` will redeploy the site automatically.

---

## Step 4 — Connect your custom domain

1. In Vercel: open your project → **Settings** → **Domains**.
2. Add your domain, e.g. `yourdomain.com` and `www.yourdomain.com`.
3. Vercel shows **DNS records** to add at your registrar (GoDaddy, Namecheap, Cloudflare, etc.).

Typical setup:

| Type | Name | Value |
|------|------|--------|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

(Use the exact values Vercel shows — they can change.)

4. Wait for DNS to propagate (often 15–60 minutes, sometimes up to 48 hours).
5. Vercel enables **HTTPS** automatically.

---

## What is not uploaded to GitHub

These stay on your computer only (see `.gitignore`):

- `.env` (webhook URL and secrets)
- `node_modules/`
- `dist/` (build output)

Never commit `.env`. Set `PUBLIC_MAKE_WEBHOOK_URL` in Vercel instead.

---

## Quick checklist

- [ ] GitHub repo created
- [ ] `git push` succeeded
- [ ] Vercel project connected to repo
- [ ] `PUBLIC_MAKE_WEBHOOK_URL` set in Vercel
- [ ] Custom domain added in Vercel + DNS at registrar
- [ ] Test quote form on live URL

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `remote origin already exists` | Run `git remote set-url origin https://github.com/YOUR_USERNAME/911-cooling-website.git` |
| Push rejected (non-fast-forward) | You created README on GitHub — use their “pull then push” instructions or delete remote README |
| Build fails on Vercel | Check build logs; run `npm run build` locally first |
| Form works locally, not live | Add `PUBLIC_MAKE_WEBHOOK_URL` in Vercel and redeploy |

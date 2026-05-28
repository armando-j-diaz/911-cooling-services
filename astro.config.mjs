import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/** GitHub repo name — used for the default github.io project URL */
const REPO_NAME = '911-cooling-services';

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const cnamePath = path.join(rootDir, 'public', 'CNAME');

/** Domain from public/CNAME (same file GitHub Pages uses for custom domains) */
let cnameDomain = '';
try {
  if (fs.existsSync(cnamePath)) {
    cnameDomain = fs.readFileSync(cnamePath, 'utf8').trim();
  }
} catch {
  /* ignore */
}

const hasCustomDomain =
  Boolean(process.env.PUBLIC_SITE_URL && !process.env.PUBLIC_SITE_URL.includes('github.io')) ||
  Boolean(cnameDomain);

const siteUrl = (
  process.env.PUBLIC_SITE_URL ||
  (cnameDomain ? `https://${cnameDomain}` : 'https://armando-j-diaz.github.io')
).replace(/\/$/, '');

/** Custom domain → `/` | github.io project page → `/repo-name/` | local dev → `/` */
const base =
  process.env.NODE_ENV === 'development' || hasCustomDomain ? '/' : `/${REPO_NAME}/`;

export default defineConfig({
  site: siteUrl,
  base,
  integrations: [tailwind()],
});

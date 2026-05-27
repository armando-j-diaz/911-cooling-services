import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

/** GitHub repo name — used in the default github.io URL path */
const REPO_NAME = '911-cooling-services';

const siteUrl = process.env.PUBLIC_SITE_URL || 'https://armando-j-diaz.github.io';

/** Local dev uses `/`; custom domain uses `/`; github.io uses `/repo-name/` */
const base =
  process.env.NODE_ENV === 'development'
    ? '/'
    : process.env.PUBLIC_SITE_URL && !process.env.PUBLIC_SITE_URL.includes('github.io')
      ? '/'
      : `/${REPO_NAME}/`;

export default defineConfig({
  site: siteUrl.replace(/\/$/, ''),
  base,
  integrations: [tailwind()],
});

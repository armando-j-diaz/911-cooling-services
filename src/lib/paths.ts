/** Prefix internal links and public assets for GitHub Pages base path (or `/` on custom domain). */
export function basePath(path = ''): string {
  const base = import.meta.env.BASE_URL;
  const root = base.endsWith('/') ? base.slice(0, -1) : base;

  if (!path) return root || '/';
  if (path.startsWith('#')) return `${root}${path}`;

  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${clean}`;
}

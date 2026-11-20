/**
 * Prefix a root-relative path with the site's `base` (see astro.config.mjs).
 * Absolute URLs are returned untouched, and a path that already carries the
 * base is not prefixed twice, so this is safe to call on Astro.url.pathname.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, "");

export function withBase(path: string): string {
  if (/^([a-z][a-z0-9+.-]*:)?\/\//i.test(path)) return path;
  const p = path.startsWith("/") ? path : `/${path}`;
  if (!BASE) return p;
  if (p === BASE || p.startsWith(`${BASE}/`) || p.startsWith(`${BASE}#`)) return p;
  return `${BASE}${p}`;
}

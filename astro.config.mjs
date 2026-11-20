// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Served as a GitHub Pages project site: https://nguyendang111999.github.io/haidang-website/
// To move to a custom domain later, set `site` to it and `base` to '/'.
const SITE = 'https://nguyendang111999.github.io';
const BASE = '/haidang-website';

// Markdown images use root-relative paths (e.g. /blog/foo.png); prefix them with the base.
function rehypePrefixBase() {
  /** @param {any} node */
  const walk = (node) => {
    const src = node?.properties?.src;
    if (
      node?.type === 'element' &&
      node.tagName === 'img' &&
      typeof src === 'string' &&
      src.startsWith('/') &&
      !src.startsWith('//') &&
      !src.startsWith(`${BASE}/`)
    ) {
      node.properties.src = `${BASE}${src}`;
    }
    if (Array.isArray(node?.children)) node.children.forEach(walk);
  };
  return walk;
}

export default defineConfig({
  site: SITE,
  base: BASE,
  output: 'static',
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [rehypePrefixBase],
    shikiConfig: {
      theme: 'github-dark',
      wrap: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

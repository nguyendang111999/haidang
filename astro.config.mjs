// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Served as a GitHub Pages project site: https://nguyendang111999.github.io/haidang-website/
// To move to a custom domain later, set `site` to it and `base` to '/'.
const SITE = 'https://nguyendang111999.github.io';
const BASE = '/haidang-website';

export default defineConfig({
  site: SITE,
  base: BASE,
  output: 'static',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

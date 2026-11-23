// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cljuarez97.github.io',
  base: '/muelitas-landing',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !/\/404\/?$/.test(page) })],
  // CSS y scripts siempre en archivo: la CSP no admite nada inline.
  build: { inlineStylesheets: 'never' },
  vite: { build: { assetsInlineLimit: 0 } },
});

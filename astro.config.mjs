// @ts-check
import { defineConfig } from 'astro/config';

// Deployed on Cloudflare Pages (served at the domain root).
// After your first deploy, replace `site` with your real URL
// (e.g. https://nithish.pages.dev, or your custom domain later).
export default defineConfig({
  site: 'https://nithish.pages.dev',
  base: '/',
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});

// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// Deployed on Cloudflare (served at the domain root).
// Update `site` here if you later add a custom domain.
export default defineConfig({
  site: 'https://website.nithish-moudhgalya.workers.dev',
  base: '/',

  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },

  output: "hybrid",
  adapter: cloudflare()
});
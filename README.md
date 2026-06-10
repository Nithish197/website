# Nithish's personal website

A fast, static researcher site + blog, built with [Astro](https://astro.build).
Deployed free on **Cloudflare Pages** with auto-deploy on every push.

## Write a new blog post

1. Create a file in `src/content/blog/`, e.g. `my-post.md`
2. Add frontmatter and write in Markdown:

   ```markdown
   ---
   title: "My post title"
   description: "One-line summary (optional)."
   date: 2026-06-15
   tags: ["ideas", "research"]
   draft: false        # set true to keep it hidden
   ---

   Your writing here...
   ```

3. Commit and push. Cloudflare rebuilds and publishes automatically.

## Edit your identity

Everything personal (name, tagline, email, social links, nav) lives in
**`src/config.ts`**. Publications are an array in **`src/pages/research.astro`**.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy settings (Cloudflare Pages)

- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: 18 or newer

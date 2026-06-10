import { defineCollection, z } from 'astro:content';

// The "blog" collection: every Markdown file you drop in
// src/content/blog/ automatically becomes a post.
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // Use YYYY-MM-DD in frontmatter; coerced to a Date.
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };

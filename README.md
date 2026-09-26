# Saltcase AI Academy

Marketing website for Saltcase — a corporate AI training and consulting brand ("AI Academy for Business"). Built with [Astro](https://astro.build) so blog posts are plain Markdown files and get the homepage's nav/footer/SEO schema automatically.

## Structure

```
astro.config.mjs
src/
  layouts/BaseLayout.astro    Shared <head>, nav, footer, modal — every page uses this
  pages/index.astro           Homepage
  pages/blog/index.astro      Blog listing (auto-built from content collection)
  pages/blog/[...slug].astro  Article template (schema + rendering, one file for all posts)
  content.config.ts           Frontmatter schema for blog posts
  content/blog/*.md           Blog posts — add a new .md file here to publish
public/
  assets/css/style.css        Site styles
  assets/js/main.js           Interactivity (nav, course filter, modal, etc.)
  assets/images/              Workshop photos
  robots.txt
```

## Writing a new blog post

Add a new file in `src/content/blog/your-slug.md` with this frontmatter:

```markdown
---
title: "Your Article Title"
description: "One or two sentences for meta description and previews."
eyebrow: "Category Label"
image: "/assets/images/workshop-group.jpg"
datePublished: 2026-01-01
faq:
  - question: "Optional FAQ question"
    answer: "Optional FAQ answer — generates FAQPage schema automatically."
---

Article body in Markdown starts here.
```

The URL is derived from the filename (`your-slug.md` → `/blog/your-slug/`). No other file needs to change — nav, footer, BlogPosting/FAQPage/Breadcrumb schema, and sitemap entry are generated automatically.

Images referenced in posts should be placed under `public/assets/images/` and referenced as `/assets/images/filename.jpg`.

## Running locally

Requires Node.js.

```bash
npm install
npm run dev       # local dev server with hot reload
npm run build     # production build to dist/
npm run preview   # preview the production build
```

## Deployment

Deployed on Vercel. Project settings: Framework Preset **Astro**, Build Command `astro build`, Output Directory `dist`.

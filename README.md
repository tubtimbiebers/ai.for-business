# Saltcase AI Academy

Marketing website for Saltcase — a corporate AI training and consulting brand ("AI Academy for Business"). Single-page static site with sections covering the training method, workshop programs, AI Business Diagnostic™, and personal branding services.

## Structure

```
index.html            Main page (all sections)
assets/
  css/style.css        Site styles
  js/main.js            Interactivity (nav, animations, etc.)
  images/                Workshop photos
```

## Running locally

This is a static site — no build step required. Serve the folder with any static server, e.g.:

```bash
npx serve .
```

or open `index.html` directly in a browser.

## Deployment

Deploy the folder as-is to any static host (e.g. Netlify, Vercel, GitHub Pages, S3).

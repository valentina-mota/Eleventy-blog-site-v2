# VM Blog

A personal blog built with **Eleventy** and deployed on **Netlify**.

Articles are written in Markdown with Front Matter, templated with Nunjucks, and served as static HTML — fast, lightweight, and maintenance-free.

---

## Stack

- **Eleventy (11ty)** — static site generator
- **Nunjucks** — templating engine
- **Markdown + Front Matter** — content authoring
- **Vanilla JavaScript** — client-side category filtering and search
- **Netlify** — deployment and CDN

## Features

- Editorial homepage with asymmetric hero layout
- Archive page with live category filter and search
- Guest author support via Front Matter
- Responsive design — mobile-first

## Content

Articles live in `src/blog/` as `.md` files. Each file includes a Front Matter block at the top:

```markdown
---
title: Article title
category: Design
tags: ["post", "featured"]
image: /assets/blog/image.jpg
imageAlt: Image description
description: Short description shown in article cards.
---
```

Add `tags: ["post", "featured"]` to include an article in the homepage featured selection. Use `tags: ["post"]` for archive-only articles.

## Local development

```bash
npm install
npm start
```

The site will be available at `http://localhost:8080`.

## Deployment

Push to the `main` branch — Netlify builds and deploys automatically.

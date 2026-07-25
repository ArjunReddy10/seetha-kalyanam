# Seetha Kalyanam

[![Live Site](https://img.shields.io/badge/Live_Site-View-8B1216?style=for-the-badge)](https://arjunreddy10.github.io/seetha-kalyanam/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub_Pages-222?logo=github)](https://arjunreddy10.github.io/seetha-kalyanam/)

A production website for a family-run Telugu wedding-creations business. The experience combines a responsive product catalog, cultural storytelling, rich media, and direct customer-enquiry flows.

**Live demo:** [arjunreddy10.github.io/seetha-kalyanam](https://arjunreddy10.github.io/seetha-kalyanam/)

## Product experience

- Responsive cinematic landing page with video backgrounds.
- Catalog of handmade Telugu wedding products with pricing and customization details.
- Product detail interactions and image-gallery lightbox.
- Direct WhatsApp and email enquiry paths for custom orders.
- Founder story and cultural context presented through dedicated sections.
- Optional background audio with user-controlled playback.
- Motion-driven transitions and scroll reveals using Framer Motion.
- Mobile-first navigation and layouts.

## Technology

- **Framework:** Next.js 16 with React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 and custom CSS
- **Interaction:** Framer Motion and Lucide React
- **Hosting:** Static export deployed to GitHub Pages
- **Automation:** GitHub Actions build and deployment workflow

## Engineering decisions

- Static export keeps hosting simple, fast, and cost-effective.
- `basePath` and `assetPrefix` support reliable deployment under the GitHub Pages repository path.
- Product and gallery data are modeled as reusable collections rather than duplicated markup.
- Images and videos use lazy loading or metadata preloading where appropriate.
- Responsive breakpoints preserve the experience across mobile and desktop screens.

## Run locally

```bash
git clone https://github.com/ArjunReddy10/seetha-kalyanam.git
cd seetha-kalyanam
npm install
npm run dev
```

Open [http://localhost:3000/seetha-kalyanam](http://localhost:3000/seetha-kalyanam).

## Quality checks

```bash
npm run lint
npm run build
```

## Project structure

```text
app/
├── page.tsx       # Product experience and interactions
├── layout.tsx     # Application metadata and shared layout
└── globals.css    # Global visual system
public/
├── products/      # Product imagery
├── gallery/       # Customer-facing gallery
├── founders/      # Founder imagery
├── videos/        # Background media
└── audio/         # Optional theme audio
.github/workflows/nextjs.yml
next.config.ts
```

## Deployment

Every push to `main` triggers the GitHub Actions workflow, builds the static Next.js export, and deploys the `out` directory to GitHub Pages.

## What this demonstrates

- Translating a real business story into a polished customer experience.
- Building reusable, typed React interfaces.
- Designing media-rich pages while preserving responsive behavior.
- Automating static-site delivery with a repeatable CI/CD workflow.

## Author

Built by **Arjun Banda**.

[Portfolio](https://arjunreddy10.github.io/arjun-portfolio/) · [LinkedIn](https://www.linkedin.com/in/arjun-banda) · [GitHub](https://github.com/ArjunReddy10)

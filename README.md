# M'Global Business Consultancy Website

Marketing website for M'Global Business Consultancy, built with React, TypeScript, Vite, shadcn-ui, and Tailwind CSS.

## Development

Install dependencies:

```sh
npm install
```

Start the local development server:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## Tech Stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Site content and design

- Shared navigation and footer live in `src/components/SiteHeader.tsx` and `src/components/Footer.tsx`.
- Portfolio projects and social links live in `src/data/portfolio.ts`; client quotes live in `src/data/testimonials.ts`.
- The design system and responsive layouts live in `src/index.css`. The orbital hero is an SVG component with a pause control and support for reduced motion.
- Optimized project screenshots live in `public/previews/`. Original assets are retained in `public/`. The locally served Space Grotesk fonts include their license in `public/fonts/`.
- The enquiry form retains the existing Web3Forms integration. Service links prefill its subject; a failed submission preserves the entered details for retry.

The site supports direct section links such as `/#portfolio` and `/#contact`, including navigation from project pages. Production hosting must route application URLs to `index.html`; `public/_redirects` provides this for compatible static hosts.

## Deployment

The production build outputs to `dist`, which can be deployed to static hosting providers such as Netlify, Vercel, Cloudflare Pages, or GitHub Pages.

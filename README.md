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
- Optimized project screenshots live in `public/previews/`. Original assets are retained in `public/`. The locally served Inter font includes its license in `public/fonts/`.
- The enquiry form retains the existing Web3Forms integration. Service links prefill its subject; a failed submission preserves the entered details for retry.

The site supports direct section links such as `/#portfolio` and `/#contact`, including navigation from project pages.

## SEO and static pages

`npm run build` uses Vite and React to generate complete HTML for all 12 public routes, a custom `404.html`, `sitemap.xml`, and `robots.txt`. It waits for lazy pages to finish rendering. React hydrates the generated content in the browser so navigation, project filters, the mobile menu, and the enquiry form remain interactive. Content is visible with JavaScript disabled.

`src/lib/seo.ts` is the source for route titles, descriptions, canonical URLs, social previews, and Organization, WebSite, WebPage, breadcrumb, and homepage Service structured data. Add metadata there when adding a route to `src/App.tsx`. The sitemap contains only public page URLs; query parameters, section anchors, and missing pages are excluded. Client-side navigation updates the metadata, including clearing `noindex` when leaving a missing page.

Validate a production build with:

```sh
npm run build
npm run test:seo
npm run preview
```

For an isolated build that does not alter the repository's tracked `dist` files:

```sh
npm run build -- --outDir /tmp/mglobal-seo-build
SEO_BUILD_DIR=/tmp/mglobal-seo-build npm run test:seo
npm run preview -- --outDir /tmp/mglobal-seo-build
```

## Deployment

Netlify is configured in `netlify.toml` to run `npm run build` and `npm run test:seo` before publishing `dist`. Existing static pages and assets take precedence over the catch-all rule in `public/_redirects`; unknown paths serve `404.html` with HTTP 404. Do not reinstate a universal HTTP 200 SPA fallback. Other hosts need equivalent static-directory and custom-404 handling. `npm run preview` mirrors these page and error responses locally.

Netlify deploy previews and branch deployments receive an `X-Robots-Tag: noindex, nofollow` header; production pages remain indexable and use `https://mglobalbusinessconsultancy.com` as their canonical origin.

After merging and deploying, confirm the response status and content of the homepage, `/about`, `/sitemap.xml`, `/robots.txt`, and an unknown URL. Submit `https://mglobalbusinessconsultancy.com/sitemap.xml` in the site's Google Search Console property. Inspect the homepage and key pages there, then review Page indexing and Performance once Google has processed the data. No Search Console credentials or verification tokens are stored in this repository. Deployment and sitemap submission do not guarantee indexing or rankings.

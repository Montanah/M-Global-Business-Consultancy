import { build } from "vite";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { parseArgs } from "node:util";

const { values } = parseArgs({ options: {
  mode: { type: "string", default: "production" },
  outDir: { type: "string", default: "dist" },
} });
const outDir = resolve(values.outDir);
const cacheDir = resolve("node_modules/.cache");
await mkdir(cacheDir, { recursive: true });
// Keep the temporary server bundle under node_modules so Node can resolve the
// existing React dependencies. Nothing from this bundle is deployed.
const serverDir = await mkdtemp(join(cacheDir, "mglobal-prerender-"));

try {
  await build({ mode: values.mode, build: { outDir } });
  await build({
    mode: values.mode,
    publicDir: false,
    build: {
      ssr: "src/entry-server.tsx",
      outDir: serverDir,
      rollupOptions: { output: {
        entryFileNames: "entry-server.mjs",
        chunkFileNames: "[name]-[hash].mjs",
      } },
    },
  });
  const { renderPage, renderSeoHead, getPageSeo, seoPages, SITE_URL } =
    await import(pathToFileURL(join(serverDir, "entry-server.mjs")).href);
  const template = await readFile(join(outDir, "index.html"), "utf8");
  if (!template.includes("<!--seo-head-->") || !template.includes('<div id="root"></div>')) {
    throw new Error("The HTML template is missing its SEO or app placeholder.");
  }
  const paths = Object.keys(seoPages);
  for (const pathname of [...paths, "/404"]) {
    const appHtml = await renderPage(pathname);
    if (!/<main\b/.test(appHtml) || !/<h1\b/.test(appHtml)) {
      throw new Error(`Missing page content while prerendering ${pathname}`);
    }
    const file = pathname === "/404" ? "404.html" : join(pathname.slice(1), "index.html");
    const destination = join(outDir, file);
    await mkdir(dirname(destination), { recursive: true });
    const html = template
      .replace("<!--seo-head-->", () => renderSeoHead(pathname))
      .replace('<div id="root"></div>', () => `<div id="root">${appHtml}</div>`);
    await writeFile(destination, html);
  }
  const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    paths.map(pathname => `  <url><loc>${getPageSeo(pathname).canonical}</loc></url>`).join("\n") +
    "\n</urlset>\n";
  await writeFile(join(outDir, "sitemap.xml"), sitemap);
  await writeFile(join(outDir, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
  console.log(`Prerendered ${paths.length} pages plus 404.html; generated sitemap.xml and robots.txt.`);
} finally {
  await rm(serverDir, { recursive: true, force: true });
}

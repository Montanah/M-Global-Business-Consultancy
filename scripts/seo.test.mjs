import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { resolve, join } from "node:path";
import test from "node:test";

const outputDir = resolve(process.env.SEO_BUILD_DIR ?? "dist");
const domain = "https://mglobalbusinessconsultancy.com";
const read = file => readFile(join(outputDir, file), "utf8");
const sitemap = await read("sitemap.xml");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
const paths = urls.map(url => new URL(url).pathname);
const headOf = html => html.match(/<head>([\s\S]*?)<\/head>/)?.[1] ?? "";
const titleOf = html => headOf(html).match(/<title>([^<]+)<\/title>/)?.[1];
const metaOf = (head, name) => head.match(new RegExp(`(?:name|property)="${name}" content="([^"]*)"`))?.[1];

test("sitemap covers every public application route exactly once", async () => {
  const app = await readFile(new URL("../src/App.tsx", import.meta.url), "utf8");
  const routes = [...app.matchAll(/\bpath="([^"]+)"/g)].map(match => match[1]).filter(route => route !== "*");
  assert.deepEqual([...paths].sort(), [...routes].sort());
  assert.equal(new Set(urls).size, urls.length);
  assert.match(sitemap, /^<\?xml version="1\.0" encoding="UTF-8"\?>/);
  assert.match(sitemap, /<urlset xmlns="http:\/\/www.sitemaps.org\/schemas\/sitemap\/0.9">/);
  assert.ok(urls.every(url => url.startsWith(`${domain}/`) && !/[?#]/.test(url)));
});

test("robots is plain text and advertises the production sitemap", async () => {
  const robots = await read("robots.txt");
  assert.match(robots, /^User-agent: \*\nAllow: \/\n/m);
  assert.ok(robots.includes(`Sitemap: ${domain}/sitemap.xml`));
  assert.doesNotMatch(robots, /<html|Disallow:\s*\/\s*$/im);
});

const titles = new Set();
const descriptions = new Set();
for (const pathname of paths) {
  test(`initial HTML and metadata: ${pathname}`, async () => {
    const html = await read(join(pathname.slice(1), "index.html"));
    const head = headOf(html);
    const title = titleOf(html);
    const description = metaOf(head, "description");
    assert.ok(title && !titles.has(title), "title must be unique");
    assert.ok(description && !descriptions.has(description), "description must be unique");
    titles.add(title);
    descriptions.add(description);
    assert.equal([...head.matchAll(/<title>/g)].length, 1);
    assert.equal([...head.matchAll(/rel="canonical"/g)].length, 1);
    assert.ok(head.includes(`rel="canonical" href="${domain}${pathname}"`));
    assert.equal(metaOf(head, "og:url"), `${domain}${pathname}`);
    assert.equal(metaOf(head, "og:title"), title);
    assert.equal(metaOf(head, "twitter:title"), title);
    assert.equal(metaOf(head, "og:description"), description);
    assert.match(metaOf(head, "og:image"), /^https:\/\/mglobalbusinessconsultancy\.com\//);
    assert.match(metaOf(head, "robots"), /^index, follow/);
    assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
    assert.match(html, /<main\b[^>]*id="main-content"/);
    assert.doesNotMatch(html, /<!--seo-head-->|<div id="root"><\/div>|<!--\$!-->|opacity:0(?:;|")/);
    const json = head.match(/<script data-seo type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
    const schema = JSON.parse(json);
    assert.equal(schema["@context"], "https://schema.org");
    const types = schema["@graph"].map(item => item["@type"]);
    assert.ok(types.includes("Organization") && types.includes("WebSite"));
    if (pathname === "/") assert.equal(types.filter(type => type === "Service").length, 6);
    else assert.ok(types.includes("BreadcrumbList"));
    for (const match of html.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)"/g)) {
      await access(join(outputDir, match[1]));
    }
  });
}

test("404 document is readable, noindex, and has no canonical or business schema", async () => {
  const html = await read("404.html");
  assert.match(titleOf(html), /Page Not Found/);
  assert.equal(metaOf(headOf(html), "robots"), "noindex, follow");
  assert.doesNotMatch(headOf(html), /rel="canonical"|application\/ld\+json|property="og:url"/);
  assert.match(html, /This page doesn’t exist/);
  const redirects = await read("_redirects");
  assert.match(redirects, /^\/\*\s+\/404\.html\s+404\s*$/m);
  assert.doesNotMatch(redirects, /^\/\*\s+\/index\.html\s+200/m);
});

test("public images and locally hosted font referenced by metadata exist", async () => {
  for (const file of ["og-mglobal.png", "Logo.png", "fonts/inter-latin-variable.woff2"]) {
    await access(join(outputDir, file));
  }
});

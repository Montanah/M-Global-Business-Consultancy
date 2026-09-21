import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { readFile } from "node:fs/promises";
import { getPageSeo, renderSeoHead } from "./src/lib/seo";

// https://vitejs.dev/config/
export default defineConfig(({ isPreview }) => ({
  appType: isPreview ? "mpa" : "spa",
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "dist", // Ensures Netlify finds the correct output
    assetsDir: "assets", // Puts assets in a separate directory
    emptyOutDir: true, // Clears old builds before building
  },
  plugins: [
    react(),
    {
      name: "seo-documents",
      transformIndexHtml(html, context) {
        if (!context.server) return html;
        const pathname = new URL(context.originalUrl ?? context.path, "http://localhost").pathname;
        return html.replace("<!--seo-head-->", () => renderSeoHead(pathname));
      },
      configurePreviewServer(server) {
        // Preview the same static documents and 404 behavior deployed to Netlify.
        server.middlewares.use((request, _response, next) => {
          const url = new URL(request.url ?? "/", "http://localhost");
          const page = getPageSeo(url.pathname);
          if (!page.isNotFound) {
            request.url = `${page.path === "/" ? "" : page.path}/index.html${url.search}`;
          }
          next();
        });
        return () => {
          server.middlewares.use(async (request, response, next) => {
            try {
              const html = await readFile(path.resolve(server.config.root, server.config.build.outDir, "404.html"));
              response.statusCode = 404;
              response.setHeader("Content-Type", "text/html; charset=utf-8");
              response.end(request.method === "HEAD" ? undefined : html);
            } catch (error) {
              next(error);
            }
          });
        };
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

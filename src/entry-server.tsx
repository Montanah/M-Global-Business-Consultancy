import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";
import App from "./App";
export { seoPages, SITE_URL, renderSeoHead } from "./lib/seo";

export function renderPage(pathname: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const output = new PassThrough();
    let html = "";
    let renderError: unknown;
    output.setEncoding("utf8");
    output.on("data", chunk => { html += chunk; });
    output.on("error", reject);
    output.on("end", () => {
      clearTimeout(timeout);
      if (renderError) reject(renderError);
      else resolve(html);
    });
    const { pipe, abort } = renderToPipeableStream(
      <StaticRouter location={pathname}><App /></StaticRouter>,
      {
        // Wait for lazy pages so crawlers receive their content, not a fallback.
        onAllReady() { pipe(output); },
        onError(error) { renderError = error; },
        onShellError(error) { clearTimeout(timeout); reject(error); },
      },
    );
    const timeout = setTimeout(() => {
      reject(new Error(`Prerender timed out for ${pathname}`));
      abort();
    }, 30000);
  });
}

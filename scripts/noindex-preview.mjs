import { appendFile } from "node:fs/promises";

// Netlify applies this header to previews without affecting production HTML.
await appendFile("dist/_headers", "\n/*\n  X-Robots-Tag: noindex, nofollow\n");

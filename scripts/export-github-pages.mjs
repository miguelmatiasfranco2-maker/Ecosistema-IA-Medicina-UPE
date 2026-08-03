import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "gh-pages-out");
const basePath = process.env.GITHUB_PAGES_BASE ?? "/Ecosistema-IA-Medicina-UPE/";
const normalizedBase = basePath.endsWith("/") ? basePath : `${basePath}/`;

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
const { default: worker } = await import(workerUrl.href);

const assetRoot = join(root, "dist", "client");
const assetFiles = new Map();

async function serveAsset(request) {
  const path = new URL(request.url).pathname.replace(/^\//, "");
  const file = assetFiles.get(path);
  if (!file) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(file.body, {
    headers: { "content-type": file.type },
  });
}

async function loadAssets(dir, prefix = "") {
  const { readdir, readFile: read } = await import("node:fs/promises");
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      await loadAssets(full, rel);
      continue;
    }

    const body = await read(full);
    const type = rel.endsWith(".css")
      ? "text/css"
      : rel.endsWith(".js")
        ? "text/javascript"
        : rel.endsWith(".svg")
          ? "image/svg+xml"
          : rel.endsWith(".png")
            ? "image/png"
            : rel.endsWith(".jpg") || rel.endsWith(".jpeg")
              ? "image/jpeg"
              : rel.endsWith(".webp")
                ? "image/webp"
                : rel.endsWith(".woff2")
                  ? "font/woff2"
                  : "application/octet-stream";
    assetFiles.set(rel.replace(/\\/g, "/"), { body, type });
  }
}

function rewriteHtmlPaths(html) {
  const fontPrefix =
    "/workspace/sites/ecosistema-ia-medicina-upe/.vinext/fonts/";

  return html
    .replaceAll(fontPrefix + "geist-8ac0455e797f/", `${normalizedBase}assets/_vinext_fonts/geist-8ac0455e797f/`)
    .replaceAll(
      fontPrefix + "geist-mono-00e989178794/",
      `${normalizedBase}assets/_vinext_fonts/geist-mono-00e989178794/`,
    )
    .replaceAll('href="/', `href="${normalizedBase}`)
    .replaceAll('src="/', `src="${normalizedBase}`)
    .replaceAll('import("/', `import("${normalizedBase}`)
    .replaceAll('"/assets/', `"${normalizedBase}assets/`)
    .replaceAll('"/favicon', `"${normalizedBase}favicon`)
    .replaceAll('"/media/', `"${normalizedBase}media/`)
    .replaceAll('url(/assets/', `url(${normalizedBase}assets/`)
    .replaceAll('url(/media/', `url(${normalizedBase}media/`)
    .replaceAll('HL["/assets/', `HL["${normalizedBase}assets/`)
    .replaceAll(`"${normalizedBase}${normalizedBase.slice(1)}`, `"${normalizedBase}`);
}

await loadAssets(assetRoot);

const response = await worker.fetch(
  new Request("http://localhost/", { headers: { accept: "text/html" } }),
  { ASSETS: { fetch: serveAsset } },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) {
  throw new Error(`Failed to render HTML: ${response.status}`);
}

let html = rewriteHtmlPaths(await response.text());
html = html.replace("<head>", `<head>\n  <base href="${normalizedBase}">`);

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });
await writeFile(join(outDir, "index.html"), html, "utf8");
await cp(assetRoot, outDir, { recursive: true });
await writeFile(join(outDir, ".nojekyll"), "", "utf8");

console.log(`Exported GitHub Pages site to ${outDir}`);

// Copia los íconos de Lucide (licencia ISC) que usa la presentación a app/iconos.ts.
//   node scripts/extraer-iconos.mjs <carpeta de lucide-react/dist/esm/icons>
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const raiz = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const lucide = process.argv[2];

const nombres = [
  "users", "server", "messages-square", "library", "flask-conical", "shield-check", "lightbulb", "rocket",
  "file-search", "sliders-horizontal", "brain", "graduation-cap", "building-2", "landmark", "file-text", "cpu",
  "database", "lock", "plug", "workflow", "scan-text", "book-open", "clapperboard", "bot", "search", "code",
  "chart-column", "check", "sparkles", "network", "ruler", "target", "circle-check", "stethoscope", "trophy",
  "layers-3", "hard-drive", "arrow-right", "message-circle", "repeat", "compass", "users-round", "map-pin",
];

const iconos = {};
for (const n of nombres) {
  let archivo = path.join(lucide, `${n}.mjs`);
  // Algunos nombres son alias que reexportan otro ícono: seguir el import.
  const texto = await readFile(archivo, "utf8");
  if (!texto.includes("__iconNode")) archivo = path.join(lucide, texto.match(/from '\.\/(.+?\.mjs)'/)[1]);
  const { __iconNode } = await import(pathToFileURL(archivo).href);
  iconos[n] = __iconNode
    .map(([tag, attrs]) => `<${tag} ${Object.entries(attrs).filter(([k]) => k !== "key").map(([k, v]) => `${k}="${v}"`).join(" ")}/>`)
    .join("");
}
await writeFile(path.join(raiz, "app", "iconos.ts"),
  "// Generado por scripts/extraer-iconos.mjs desde Lucide (licencia ISC).\nexport const ICONOS: Record<string, string> = " + JSON.stringify(iconos, null, 1) + ";\n");
console.log(Object.keys(iconos).length, "íconos");

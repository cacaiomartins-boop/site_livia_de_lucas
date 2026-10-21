// Roda depois do `vite build`: gera o HTML da página com o conteúdo já dentro
// (para buscadores e robôs de IA que não executam JavaScript).
import { build } from "vite";
import { readFile, writeFile, rm } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const saidaSsr = path.join(raiz, "dist-ssr");

await build({
  root: raiz,
  logLevel: "warn",
  build: { ssr: "src/entry-server.tsx", outDir: saidaSsr, emptyOutDir: true },
});

const { render } = await import(pathToFileURL(path.join(saidaSsr, "entry-server.js")).href);
const html = render();

const arquivo = path.join(raiz, "dist", "index.html");
const modelo = await readFile(arquivo, "utf-8");
const marcador = '<div id="root"></div>';
if (!modelo.includes(marcador)) throw new Error("Marcador #root não encontrado em dist/index.html");

await writeFile(arquivo, modelo.replace(marcador, `<div id="root">${html}</div>`));
await rm(saidaSsr, { recursive: true, force: true });
console.log(`Pré-renderização ok (${html.length} caracteres de HTML).`);

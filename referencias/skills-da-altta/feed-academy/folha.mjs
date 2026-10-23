/**
 * A folha de conferência das capas: todas numa imagem só, com o nome embaixo, para olhar se veio letra, logo ou rosto.
 *
 *   node .claude/skills/feed-academy/folha.mjs pedidos.json            → folha.png ao lado do pedidos.json (7 por linha)
 *   node .claude/skills/feed-academy/folha.mjs pedidos.json nome1,nome2 → só essas, grandes, para ver de perto
 */
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";

const APP = join(dirname(new URL(import.meta.url).pathname.slice(1)), "../../../empresa/plataformas/academy/app/");
const { chromium } = createRequire(join(APP, "package.json"))("playwright-core");
const [arq, filtro] = process.argv.slice(2);
const pedidos = JSON.parse(readFileSync(arq, "utf8"));
const so = filtro ? filtro.split(",") : null;
const lista = so ? pedidos.filter((p) => so.includes(p.nome)) : pedidos;
const t = so ? 560 : 200;
const cards = lista.map((p) => {
  const b64 = readFileSync(join(APP, "public/feed", `${p.nome}.webp`)).toString("base64");
  return `<figure><img src="data:image/webp;base64,${b64}"><figcaption>${p.nome}</figcaption></figure>`;
}).join("");
const html = `<style>body{margin:0;background:#111;display:grid;grid-template-columns:repeat(${so ? 2 : 7},${t}px);gap:6px;padding:6px;
font:11px sans-serif;color:#ddd}figure{margin:0}img{width:${t}px;${so ? "" : `height:${t}px;object-fit:cover;`}display:block}</style>${cards}`;
const b = await chromium.launch({ channel: "chrome", headless: true });
const pg = await b.newPage({ viewport: { width: 1450, height: 400 } });
await pg.setContent(html);
const saida = join(dirname(arq), "folha.png");
await pg.screenshot({ path: saida, fullPage: true });
await b.close();
console.log(saida);

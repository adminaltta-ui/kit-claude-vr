// As capas de cinema do Altta Academy. Três comandos, rodados da raiz da empresa:
//
//   node .claude/skills/capa-academy/capas.mjs gerar --ver     o que falta gerar e quanto custa
//   node .claude/skills/capa-academy/capas.mjs gerar [slug...] gera no Kie o que falta (ou só os slugs)
//   node .claude/skills/capa-academy/capas.mjs serie           fotografa a série inteira em 320 e 1280
//   node .claude/skills/capa-academy/capas.mjs webp [slug...]  grava o webp de 600px no app (src/assets/capas)
//
// ⚠️ Rodar pelo PowerShell ou pelo Git Bash com a variável KIE_API_KEY do Windows visível.
import { readFile, writeFile, mkdir, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const AQUI = dirname(fileURLToPath(import.meta.url));
const RAIZ = join(AQUI, "../../..");
const APP = join(RAIZ, "empresa/plataformas/academy/app");
const CAPAS = join(RAIZ, "empresa/arquivos/imagens-kie/capas");
const PUBLICO = join(APP, "src/assets/capas");
const API = "https://api.kie.ai/api/v1";
const MODELO = "nano-banana-2-lite";
const CUSTO = 4; // créditos por imagem
const H = { Authorization: `Bearer ${process.env.KIE_API_KEY}`, "Content-Type": "application/json" };

// ⛔ O prompt-base da série, aprovado pelo João em 2026-09-30 (a V1). Mudar aqui muda a série
// inteira, e as capas já geradas deixam de combinar: só com aprovação dele.
const BASE =
  "Cinematic film still, vertical movie poster composition. Low-key lighting, deep dark forest green shadows (#10241C) and pine green midtones (#1C4034), " +
  "a single warm golden rim light (#C9A227) from the upper left, soft cream highlights (#EDE6D8). Anamorphic 50mm lens, shallow depth of field, subtle film grain, " +
  "premium and elegant, like a prestige streaming series key art. The subject sits in the upper two thirds; the bottom third fades into near-black green, empty, for a title. " +
  "Absolutely no text, no letters, no numbers, no logos, no watermark, no human faces. No red, no blue.";

const CENAS = JSON.parse(await readFile(join(AQUI, "cenas.json"), "utf8"));
const CATALOGO = JSON.parse(await readFile(join(APP, "src/features/cursos/catalogo.json"), "utf8"));
const CURSOS = Array.isArray(CATALOGO) ? CATALOGO : CATALOGO.cursos;
const [comando, ...resto] = process.argv.slice(2);
const pedidos = resto.filter((a) => !a.startsWith("--"));

const saldo = async () => (await fetch(`${API}/chat/credit`, { headers: H }).then((x) => x.json())).data;

async function gerarUma(slug) {
  const criada = await fetch(`${API}/jobs/createTask`, {
    method: "POST", headers: H,
    body: JSON.stringify({ model: MODELO, input: { prompt: `${BASE} Scene: ${CENAS[slug]}`, aspect_ratio: "3:4" } }),
  }).then((x) => x.json());
  if (criada.code !== 200) throw new Error(JSON.stringify(criada));
  let url;
  for (let i = 0; i < 90 && !url; i++) {
    await new Promise((s) => setTimeout(s, 4000));
    const d = (await fetch(`${API}/jobs/recordInfo?taskId=${criada.data.taskId}`, { headers: H }).then((x) => x.json())).data;
    if (d?.state === "fail") throw new Error(d.failMsg || "falhou");
    if (d?.state === "success") url = JSON.parse(d.resultJson).resultUrls[0];
  }
  if (!url) throw new Error("demorou demais");
  // O link do Kie às vezes trava no meio: aí pede um link direto.
  let res = await fetch(url, { signal: AbortSignal.timeout(30000) }).catch(() => null);
  if (!res?.ok) {
    const d = await fetch(`${API}/common/download-url`, { method: "POST", headers: H, body: JSON.stringify({ url }) }).then((x) => x.json());
    res = await fetch(d.data, { signal: AbortSignal.timeout(60000) });
  }
  await writeFile(join(CAPAS, `${slug}.jpg`), Buffer.from(await res.arrayBuffer()));
}

async function gerar() {
  const semCena = CURSOS.map((c) => c.slug).filter((s) => !CENAS[s]);
  if (semCena.length) throw new Error(`curso sem cena no cenas.json: ${semCena.join(", ")}`);
  // Sem slug, gera só o que falta. Com slug, gera de novo (é assim que se refaz uma capa).
  const fila = pedidos.length ? pedidos : CURSOS.map((c) => c.slug).filter((s) => !existsSync(join(CAPAS, `${s}.jpg`)));
  const tem = await saldo();
  console.log(`a gerar: ${fila.length} · custo: ${fila.length * CUSTO} créditos · saldo: ${tem}`);
  if (resto.includes("--ver") || !fila.length) return console.log(fila.join("\n"));
  if (tem < fila.length * CUSTO) throw new Error("saldo não cobre a fila: recarregue o Kie ou passe menos slugs");
  await mkdir(CAPAS, { recursive: true });
  // De cinco em cinco, para não pedir tudo ao Kie de uma vez.
  for (let i = 0; i < fila.length; i += 5) {
    await Promise.all(fila.slice(i, i + 5).map((s) =>
      gerarUma(s).then(() => console.log("ok", s), (e) => console.log("ERRO", s, e.message))));
  }
  console.log("saldo agora:", await saldo());
}

function chrome() {
  const { chromium } = createRequire(join(APP, "package.json"))("playwright-core");
  return chromium.launch({ channel: "chrome", headless: true });
}

// O mesmo corte do capa.tsx (nomeCurto).
const nomeCurto = (n) => n.split(":")[0].replace(/ (para|na) Clínicas?( de Harmonização)?$/, "").replace(/ da Clínica$/, "");

async function serie() {
  const tem = new Set((await readdir(CAPAS)).filter((f) => f.endsWith(".jpg")).map((f) => f.replace(".jpg", "")));
  const cartao = (c) => {
    const fundo = tem.has(c.slug)
      ? `<img class="cc-img" src="${c.slug}.jpg" alt=""><div class="cc-sombra"></div>`
      : `<div class="falta">falta</div>`;
    return `<a href="${c.slug}.jpg" target="_blank"><div class="cc poster" data-modo="poster" style="--cc-fundo:#10241C;--cc-tinta:#EDE6D8">${fundo}
      <div class="cc-cima"><span>Altta Academy</span></div>
      <div class="cc-baixo"><div class="cc-area">${c.area}</div><div class="cc-titulo">${nomeCurto(c.nome)}</div><div class="cc-filete"></div></div>
    </div><div class="rotulo">${c.slug}</div></a>`;
  };
  const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Série de capas</title>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,200;9..144,300&family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../../../plataformas/academy/app/src/features/cursos/capa.css">
<style>
  body{margin:0;background:#0b1712;color:#EDE6D8;font-family:Inter,sans-serif;padding:24px 16px 40px}
  .grade{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
  @media (min-width:768px){.grade{grid-template-columns:repeat(6,minmax(0,1fr));gap:16px}}
  .poster{aspect-ratio:3/4;border-radius:14px}
  .cc-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
  .cc-sombra{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(16,36,28,.75) 0%,rgba(16,36,28,0) 20%),linear-gradient(to top,#10241C 0%,rgba(16,36,28,.88) 30%,rgba(16,36,28,0) 62%)}
  .falta{position:absolute;inset:0;display:grid;place-items:center;color:rgba(237,230,216,.4);font-size:12px}
  .rotulo{font-size:11px;color:rgba(237,230,216,.55);margin-top:6px}
  a{text-decoration:none}
</style></head><body><div class="grade">${CURSOS.map(cartao).join("")}</div></body></html>`;
  await writeFile(join(CAPAS, "serie.html"), html);
  const b = await chrome();
  for (const w of [320, 1280]) {
    const p = await b.newPage({ viewport: { width: w, height: 800 }, deviceScaleFactor: w === 320 ? 2 : 1 });
    await p.goto(`file:///${join(CAPAS, "serie.html").replace(/\\/g, "/")}`);
    await p.waitForLoadState("networkidle");
    await p.evaluate(() => document.fonts.ready);
    await p.screenshot({ path: join(CAPAS, `serie-${w}.png`), fullPage: true });
    console.log(`serie-${w}.png`, (await p.evaluate(() => document.documentElement.scrollWidth)) > w ? "⚠️ ROLA DE LADO" : "ok");
  }
  await b.close();
}

// O webp de 600px (o pôster maior do app tem uns 470px em tela de densidade 2), feito pelo próprio
// Chrome: nenhuma dependência nova no app.
async function webp() {
  const para = resto.find((a) => a.startsWith("--para="))?.slice(7) ?? PUBLICO;
  const fila = pedidos.length ? pedidos : (await readdir(CAPAS)).filter((f) => f.endsWith(".jpg")).map((f) => f.replace(".jpg", ""));
  await mkdir(para, { recursive: true });
  const b = await chrome();
  const p = await b.newPage();
  for (const slug of fila) {
    // Entra como data URL: imagem de file:// suja o canvas e o Chrome recusa exportar.
    const origem = `data:image/jpeg;base64,${(await readFile(join(CAPAS, `${slug}.jpg`))).toString("base64")}`;
    const saida = await p.evaluate(async (src) => {
      const img = new Image();
      img.src = src;
      await img.decode();
      const c = document.createElement("canvas");
      c.width = 600;
      c.height = 800;
      c.getContext("2d").drawImage(img, 0, 0, 600, 800);
      return c.toDataURL("image/webp", 0.78).split(",")[1];
    }, origem);
    const buf = Buffer.from(saida, "base64");
    await writeFile(join(para, `${slug}.webp`), buf);
    console.log(slug, `${Math.round(buf.length / 1024)} KB`);
  }
  await b.close();
}

const COMANDOS = { gerar, serie, webp };
if (!COMANDOS[comando]) console.log("use: gerar [--ver] [slug...] | serie | webp [slug...] [--para=pasta]");
else await COMANDOS[comando]();

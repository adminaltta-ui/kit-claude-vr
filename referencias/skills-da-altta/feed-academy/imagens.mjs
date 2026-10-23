#!/usr/bin/env node
/**
 * AS IMAGENS DO FEED DO ACADEMY (2026-10-02). Gera no Kie, grava o original e o webp que sobe com o app.
 *
 *   node .claude/skills/feed-academy/imagens.mjs pedidos.json [--ver]
 *
 * `pedidos.json` é uma lista: [{ "nome": "2026-10-01-mensagem", "cena": "...", "formato": "4:5" | "16:9" }].
 * O webp vai para `app/public/feed/<nome>.webp` e o endereço para o banco é o que este script imprime.
 * ⚠️ Só aparece no ar depois de publicar o app (git push). --ver mostra o custo e o saldo sem gastar.
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const AQUI = dirname(fileURLToPath(import.meta.url));
const RAIZ = join(AQUI, "../../..");
const APP = join(RAIZ, "empresa/plataformas/academy/app");
const ORIGINAIS = join(RAIZ, "empresa/arquivos/imagens-kie/feed");
const PUBLICO = join(APP, "public/feed");
const SITE = "https://academy.sejaaltta.com.br/feed";
const API = "https://api.kie.ai/api/v1";
const MODELO = "nano-banana-2-lite";
const CUSTO = 4; // créditos por imagem (uns US$ 0,02)
const H = { Authorization: `Bearer ${process.env.KIE_API_KEY}`, "Content-Type": "application/json" };

// ⭐ Sem molde fixo (João, 2026-10-02: "sempre imagens premium e bem bonitas, de acordo com os temas dos posts"):
// isto é só o piso de qualidade e as proibições. A cena é que muda a cada post.
const PISO =
  "Premium editorial photograph, the quality of a high-end magazine. Sophisticated composition, beautiful natural or cinematic light, " +
  "refined color grading, rich textures, shallow depth of field, subtle film grain. " +
  "Absolutely no text, no letters, no numbers, no logos, no brand labels, no watermark. " +
  "No identifiable human faces: people only as hands, silhouettes, from behind or out of focus. No before-and-after imagery.";

// O tamanho do webp: o post tem 470px no computador (940 na tela de retina); o artigo tem 680.
const TAMANHO = { "4:5": [960, 1200], "16:9": [1280, 720], "1:1": [960, 960] };

const [arquivo, ...flags] = process.argv.slice(2);
if (!arquivo) {
  console.log("use: imagens.mjs pedidos.json [--ver]");
  process.exit(1);
}
const pedidos = JSON.parse(await readFile(arquivo, "utf8"));
for (const p of pedidos) {
  if (!/^[a-z0-9-]+$/.test(p.nome)) throw new Error(`nome inválido (só minúscula, número e hífen): ${p.nome}`);
  if (!TAMANHO[p.formato]) throw new Error(`formato inválido em ${p.nome}: use 4:5, 16:9 ou 1:1`);
}

const saldo = async () => (await fetch(`${API}/chat/credit`, { headers: H }).then((x) => x.json())).data;

async function gerarUma({ nome, cena, formato }) {
  const criada = await fetch(`${API}/jobs/createTask`, {
    method: "POST",
    headers: H,
    body: JSON.stringify({ model: MODELO, input: { prompt: `${PISO} Scene: ${cena}`, aspect_ratio: formato } }),
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
  await writeFile(join(ORIGINAIS, `${nome}.jpg`), Buffer.from(await res.arrayBuffer()));
}

/* O webp sai pelo Chrome (o canvas), como nas capas dos cursos: nenhuma dependência nova no app. */
async function emWebp(feitos) {
  const { chromium } = createRequire(join(APP, "package.json"))("playwright-core");
  const b = await chromium.launch({ channel: "chrome", headless: true });
  const pg = await b.newPage();
  for (const { nome, formato } of feitos) {
    const [w, h] = TAMANHO[formato];
    // Entra como data URL: imagem de file:// suja o canvas e o Chrome recusa exportar.
    const origem = `data:image/jpeg;base64,${(await readFile(join(ORIGINAIS, `${nome}.jpg`))).toString("base64")}`;
    const saida = await pg.evaluate(
      async ([src, w, h]) => {
        const img = new Image();
        img.src = src;
        await img.decode();
        // cobre o quadro, cortando o que sobra no meio (o object-fit: cover)
        const k = Math.max(w / img.width, h / img.height);
        const c = document.createElement("canvas");
        c.width = w;
        c.height = h;
        c.getContext("2d").drawImage(img, (w - img.width * k) / 2, (h - img.height * k) / 2, img.width * k, img.height * k);
        return c.toDataURL("image/webp", 0.8).split(",")[1];
      },
      [origem, w, h],
    );
    const buf = Buffer.from(saida, "base64");
    await writeFile(join(PUBLICO, `${nome}.webp`), buf);
    console.log(`ok ${nome} (${Math.round(buf.length / 1024)} KB) ${SITE}/${nome}.webp`);
  }
  await b.close();
}

const tem = await saldo();
console.log(`a gerar: ${pedidos.length} · custo: ${pedidos.length * CUSTO} créditos · saldo: ${tem}`);
if (flags.includes("--ver")) process.exit(0);
if (tem < pedidos.length * CUSTO) throw new Error("o saldo não cobre: recarregue o Kie ou mande menos pedidos");
await mkdir(ORIGINAIS, { recursive: true });
await mkdir(PUBLICO, { recursive: true });

const feitos = [];
// De cinco em cinco, para não pedir tudo ao Kie de uma vez.
for (let i = 0; i < pedidos.length; i += 5) {
  await Promise.all(
    pedidos.slice(i, i + 5).map((p) =>
      gerarUma(p).then(
        () => feitos.push(p),
        (e) => console.log("ERRO", p.nome, e.message),
      ),
    ),
  );
}
// O que já tinha original e não foi pedido de novo não entra; o que falhou fica de fora do webp.
await emWebp(feitos.filter((p) => existsSync(join(ORIGINAIS, `${p.nome}.jpg`))));
console.log("saldo agora:", await saldo());

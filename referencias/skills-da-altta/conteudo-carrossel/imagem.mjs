// Gera UMA imagem de IA no Kie para uma peça de conteúdo. Rodar da raiz da empresa, pelo PowerShell
// (a variável KIE_API_KEY do Windows):
//
//   node .claude/skills/conteudo-carrossel/imagem.mjs <pasta-da-peca> <nome> "<cena em inglês>" [4:5|9:16|3:4|1:1] [--modelo <id>]
//
// Salva em <pasta-da-peca>/fotos/<nome>.jpg. O modelo padrão é o mais barato que passou no teste de
// 2026-10-04 (o João: "não é o caso de gastar tanto"). ⛔ Os sócios não aparecem nas capas, ⛔ nunca
// cliente ou paciente fingindo ser real, ⛔ nunca antes e depois, ⛔ nunca pessoa pública gerada por IA.
import { mkdir, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";

const API = "https://api.kie.ai/api/v1";
const H = { Authorization: `Bearer ${process.env.KIE_API_KEY}`, "Content-Type": "application/json" };
const CUSTO = { "z-image": 0.8, "google/imagen4-fast": 4, "nano-banana-2-lite": 4, "seedream/4.5-text-to-image": 6.5, "nano-banana-2": 8 };
const BASE =
  "Cinematic editorial photograph, the cover image of a premium business magazine. Photorealistic, full-frame camera, natural film grain, " +
  "rich contrast, dramatic but believable light. Color grade: deep forest green shadows (#10241C), warm golden highlights (#C9A227), soft cream " +
  "tones (#EDE6D8); no saturated red, no saturated blue. Anyone who appears is an anonymous model, never a celebrity. " +
  "Absolutely no text, no letters, no numbers, no logos, no watermark, no screen text.";

const args = process.argv.slice(2);
const i = args.indexOf("--modelo");
const modelo = i === -1 ? "nano-banana-2-lite" : args.splice(i, 2)[1];
const [pasta, nome, cena, formato = "4:5"] = args;
if (!pasta || !nome || !cena) throw new Error('uso: imagem.mjs <pasta> <nome> "<cena>" [formato] [--modelo id]');
if (!process.env.KIE_API_KEY) throw new Error("KIE_API_KEY não está visível neste terminal");

// O z-image aceita pouco texto: vai com a base curta.
const CURTA = "Cinematic editorial photo, premium magazine cover, photorealistic, film grain. Deep forest green shadows, warm golden light, cream tones. Anonymous people only. No text, no logos.";
const input = { prompt: modelo === "z-image" ? `${CURTA} ${cena}` : `${BASE} Scene: ${cena}`, aspect_ratio: formato };
if (modelo.startsWith("nano-banana")) Object.assign(input, { resolution: "1K", output_format: "jpg" });
const criada = await fetch(`${API}/jobs/createTask`, { method: "POST", headers: H, body: JSON.stringify({ model: modelo, input }) }).then((x) => x.json());
if (criada.code !== 200) throw new Error(`${modelo}: ${JSON.stringify(criada)}`);
console.log(`${modelo}: ${CUSTO[modelo] ?? "?"} créditos`);
let url;
for (let n = 0; n < 120 && !url; n++) {
  await new Promise((s) => setTimeout(s, 4000));
  const d = (await fetch(`${API}/jobs/recordInfo?taskId=${criada.data.taskId}`, { headers: H }).then((x) => x.json())).data;
  if (d?.state === "fail") throw new Error(`${modelo}: ${d.failMsg || "falhou"}`);
  if (d?.state === "success") url = JSON.parse(d.resultJson).resultUrls[0];
}
if (!url) throw new Error("demorou demais");
// O link do Kie às vezes trava no meio: aí pede um link direto.
let res = await fetch(url, { signal: AbortSignal.timeout(60000) }).catch(() => null);
if (!res?.ok) {
  const d = await fetch(`${API}/common/download-url`, { method: "POST", headers: H, body: JSON.stringify({ url }) }).then((x) => x.json());
  res = await fetch(d.data, { signal: AbortSignal.timeout(90000) });
}
const destino = join(resolve(pasta), "fotos");
await mkdir(destino, { recursive: true });
await writeFile(join(destino, `${nome}.jpg`), Buffer.from(await res.arrayBuffer()));
console.log(`ok: ${join(destino, `${nome}.jpg`)}`);

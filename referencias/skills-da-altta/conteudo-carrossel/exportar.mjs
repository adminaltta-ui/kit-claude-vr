// Exporta cada lâmina (.s) do index.html de uma pasta em JPEG (a Meta só publica JPEG).
// Serve ao carrossel e ao post. Rodar da raiz da empresa:
//
//   node .claude/skills/conteudo-carrossel/exportar.mjs empresa/arquivos/conteudo/<AAAA-MM-DD>-<assunto>
//
// Sai 01.jpg, 02.jpg... na mesma pasta, no tamanho exato da lâmina (1080x1350 no feed, 1080x1920
// na capa de reel e de destaque). E confere o texto: avisa o que vaza da lâmina ou encosta em
// outro bloco, que é o defeito que a foto não mostra a quem não abre a imagem.
import { chromium } from "../../../empresa/plataformas/os/app/node_modules/playwright-core/index.mjs";
import { pathToFileURL } from "node:url";
import { join, resolve } from "node:path";

const pasta = resolve(process.argv[2] ?? ".");
const nav = await chromium.launch({ channel: "chrome" });
const pag = await nav.newPage({ viewport: { width: 1200, height: 2000 } });
await pag.goto(pathToFileURL(join(pasta, "index.html")).href, { waitUntil: "networkidle" });
await pag.evaluate(() => document.fonts.ready);

const avisos = await pag.evaluate(() => {
  const saida = [];
  document.querySelectorAll(".s").forEach((s, i) => {
    const caixa = s.getBoundingClientRect();
    // Os blocos de texto da lâmina: filhos diretos que têm letra dentro.
    const blocos = [...s.children].filter((el) => el.textContent.trim() && !el.matches("svg,style"));
    // Mede o que está escrito, não a caixa: um bloco que ocupa a lâmina inteira para centralizar não conta.
    const caixaDe = (el) => { const g = document.createRange(); g.selectNodeContents(el); return g.getBoundingClientRect(); };
    for (const el of blocos) {
      const r = caixaDe(el);
      const nome = el.textContent.trim().slice(0, 40);
      if (r.left < caixa.left || r.top < caixa.top || r.right > caixa.right + 1 || r.bottom > caixa.bottom + 1)
        saida.push(`lâmina ${i + 1}: vaza da borda: "${nome}"`);
      if (el.scrollHeight > el.clientHeight + 2 && getComputedStyle(el).overflow === "hidden")
        saida.push(`lâmina ${i + 1}: texto cortado: "${nome}"`);
    }
    for (let a = 0; a < blocos.length; a++)
      for (let b = a + 1; b < blocos.length; b++) {
        const p = caixaDe(blocos[a]), q = caixaDe(blocos[b]);
        if (p.left < q.right && q.left < p.right && p.top < q.bottom && q.top < p.bottom)
          saida.push(`lâmina ${i + 1}: encosta: "${blocos[a].textContent.trim().slice(0, 25)}" e "${blocos[b].textContent.trim().slice(0, 25)}"`);
      }
  });
  return saida;
});

const laminas = await pag.$$(".s");
// A lâmina com data-nome (o anúncio da criativo-estatico) sai com o nome dela; as outras, numeradas.
for (const [i, s] of laminas.entries())
  await s.screenshot({ path: join(pasta, `${(await s.getAttribute("data-nome")) ?? String(i + 1).padStart(2, "0")}.jpg`), type: "jpeg", quality: 92 });
await nav.close();
console.log(`${laminas.length} JPEG em ${pasta}`);
console.log(avisos.length ? `AVISOS:\n${avisos.join("\n")}` : "texto ok: nada vaza nem encosta");

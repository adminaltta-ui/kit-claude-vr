/**
 * Confere um lote do feed (as regras desta skill) e escreve, ao lado de cada arquivo, o .sql de gravar como rascunho.
 * Escreve também telas.json e telas-mapa.json na pasta do primeiro arquivo, para medir em 320px:
 *
 *   node .claude/skills/feed-academy/conferir.mjs lote1.json lote2.json ...
 *   (no app) npm run build; npx vite preview --port 5177 --strictPort
 *   $env:TELAS="<pasta>\telas.json"; $env:LARGURAS="320,390"; $env:TEMAS="escuro"; node scripts/percorrer-feed.mjs
 *   a tela N do relatório (post ou Hoje) é a N-14 do telas.json contando do 1; o nome está no telas-mapa.json.
 *
 * O lote: {"itens":[{dia, tipo, titulo, telas, frase, copiar, curso_slug, aula, area, fontes, minutos, corpo}]}.
 * A capa vira https://academy.sejaaltta.com.br/feed/<dia>-<tipo>.webp e precisa existir em app/public/feed.
 * Os limites de palavras são de aviso: quem decide é a medida em 320px (2026-10-02, o primeiro lote).
 */
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const APP = join(dirname(new URL(import.meta.url).pathname.slice(1)), "../../../empresa/plataformas/academy/app/");
const arquivos = process.argv.slice(2);
if (!arquivos.length) { console.log("use: conferir.mjs lote.json [...]"); process.exit(1); }
const TIPOS = ["passo", "instagram", "conselho", "mensagem", "numero", "pergunta", "ideia", "negocio", "mercado", "curiosidade", "pausa", "artigo", "novidade"];
const AREAS = [null, "posicionamento", "marca", "captacao", "atendimento", "venda", "retorno"];
const pal = (s) => (s ? String(s).trim().split(/\s+/).filter(Boolean).length : 0);
const LIM = { // [máx. itens, palavras por item, palavras no grande, palavras no texto]
  texto: [0, 0, 48, 48], frase: [0, 0, 20, 12], numero: [0, 0, 3, 30], citacao: [0, 0, 0, 30],
  lista: [4, 10, 8, 0], versus: [2, 14, 8, 0], conversa: [4, 16, 4, 14], grafico: [4, 8, 8, 14],
  quiz: [3, 10, 20, 30], checklist: [4, 10, 8, 14],
};

const problemas = [];
const avisos = [];
const telas = [];
const mapa = [];
for (const arq of arquivos) {
  const { itens } = JSON.parse(readFileSync(arq, "utf8"));
  for (const it of itens) {
    const id = `${it.dia} ${it.tipo}`;
    const p = (m) => problemas.push(`${id}: ${m}`);
    const a = (m) => avisos.push(`${id}: ${m}`);
    const tudo = JSON.stringify(it);
    if (/[—–]/.test(tudo)) p("travessão");
    if (/ - /.test(tudo.replace(/https?:[^"]+/g, ""))) p("hífen solto como pontuação");
    if (/\p{Extended_Pictographic}/u.test(tudo)) p("emoji");
    if (!TIPOS.includes(it.tipo)) p(`tipo ${it.tipo}`);
    if (!AREAS.includes(it.area ?? null)) p(`area ${it.area}`);
    if (!it.titulo || it.titulo.length < 3 || it.titulo.length > 120) p("título fora de 3 a 120");
    if (!it.frase || it.frase.length < 3 || it.frase.length > 160) p(`frase com ${it.frase?.length} letras`);
    if (!(it.minutos >= 1 && it.minutos <= 15)) p("minutos");
    if (!Array.isArray(it.fontes) || it.fontes.some((f) => !f.nome || !/^https:\/\//.test(f.url))) p("fontes");
    if (it.curso_slug) {
      const dir = `${APP}src/conteudo/cursos/${it.curso_slug}`;
      if (!existsSync(dir)) p(`curso ${it.curso_slug} não existe`);
      else if (!it.aula || !readdirSync(dir).some((f) => f.startsWith(it.aula + "-"))) p(`aula ${it.aula} não existe`);
    }
    it.capa = `https://academy.sejaaltta.com.br/feed/${it.dia}-${it.tipo}.webp`;
    if (!existsSync(`${APP}public/feed/${it.dia}-${it.tipo}.webp`)) p("sem capa em public/feed");
    if (it.tipo === "artigo" || it.tipo === "novidade") {
      if (it.telas.length) p("artigo com telas");
      if (!it.corpo || it.corpo.length < 300 || it.corpo.length > 20000) p(`corpo com ${it.corpo?.length} letras`);
      continue;
    }
    if (it.corpo) p("carrossel com corpo");
    if (it.telas.length < 2 || it.telas.length > 8) p(`${it.telas.length} telas`);
    const modelos = it.telas.map((t) => t.modelo ?? "texto");
    if (new Set(modelos).size < 3) a("menos de 3 modelos");
    modelos.forEach((m, i) => i && m === modelos[i - 1] && a(`tela ${i + 1}: modelo repetido em seguida`));
    it.telas.forEach((t, i) => {
      const q = (m) => a(`tela ${i + 1} (${modelos[i]}): ${m}`);
      const L = LIM[modelos[i]];
      if (!L) return p(`tela ${i + 1}: modelo ${modelos[i]} não existe`);
      if (t.fundo && !["claro", "vinho", "pinho"].includes(t.fundo)) p(`tela ${i + 1}: fundo ${t.fundo}`);
      const itens = t.itens ?? [];
      const total = pal(t.grande) + pal(t.texto) + pal(t.autor) + itens.reduce((n, x) => n + pal(x.rotulo) + pal(x.texto), 0);
      if (total > 48 && modelos[i] !== "quiz") q(`${total} palavras na tela`);
      if (L[0] && itens.length > L[0]) q(`${itens.length} itens`);
      if (L[0] && !itens.length) p(`tela ${i + 1}: ${modelos[i]} sem itens`);
      itens.forEach((x, j) => pal(x.rotulo) + pal(x.texto) > L[1] && q(`item ${j + 1} com ${pal(x.rotulo) + pal(x.texto)} palavras`));
      if (pal(t.grande) > L[2] && modelos[i] !== "numero") q(`grande com ${pal(t.grande)} palavras`);
      if (L[3] && pal(t.texto) > L[3]) q(`texto com ${pal(t.texto)} palavras`);
      if (modelos[i] === "versus" && itens.length !== 2) p(`tela ${i + 1}: versus sem 2 itens`);
      if (modelos[i] === "quiz" && !(itens.length >= 2 && Number.isInteger(t.certa) && t.certa < itens.length)) p(`tela ${i + 1}: quiz sem certa`);
      if (modelos[i] === "grafico" && itens.some((x) => typeof x.valor !== "number")) p(`tela ${i + 1}: barra sem valor`);
      if (modelos[i] === "conversa" && itens.some((x) => !["eles", "nos"].includes(x.rotulo))) p(`tela ${i + 1}: balão sem eles/nos`);
      telas.push(t);
      mapa.push(`${id} tela ${i + 1}`);
    });
  }
  const json = JSON.stringify(itens.map((it) => ({ ...it, corpo: it.corpo ?? null, copiar: it.copiar ?? null })));
  if (json.includes("$feed$")) problemas.push(`${arq}: o texto tem $feed$`);
  writeFileSync(arq.replace(/\.json$/, ".sql"), `insert into public.feed_item (dia, tipo, titulo, telas, frase, copiar, curso_slug, aula, area, fontes, minutos, capa, corpo)
select dia, tipo, titulo, telas, frase, copiar, curso_slug, aula, area, fontes, minutos, capa, corpo
from jsonb_to_recordset($feed$${json}$feed$::jsonb) as x(dia date, tipo text, titulo text, telas jsonb, frase text, copiar text,
  curso_slug text, aula text, area text, fontes jsonb, minutos int, capa text, corpo text)
on conflict (dia, tipo) do update set titulo = excluded.titulo, telas = excluded.telas, frase = excluded.frase, copiar = excluded.copiar,
  curso_slug = excluded.curso_slug, aula = excluded.aula, area = excluded.area, fontes = excluded.fontes, minutos = excluded.minutos,
  capa = excluded.capa, corpo = excluded.corpo
returning dia, tipo;
`);
}
const pasta = dirname(arquivos[0]);
writeFileSync(join(pasta, "telas.json"), JSON.stringify(telas));
writeFileSync(join(pasta, "telas-mapa.json"), JSON.stringify(mapa));
console.log(`${telas.length} telas de carrossel · ${problemas.length} problemas · ${avisos.length} avisos`);
for (const x of problemas) console.log("  ERRO", x);
for (const x of avisos) console.log("  aviso", x);
process.exit(problemas.length ? 1 : 0);

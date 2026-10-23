#!/usr/bin/env node
/**
 * Gerador de Manual HTML a partir de arquivos markdown — genérico
 * ================================================================
 *
 * O QUE ISSO FAZ
 * ---------------
 * Lê um conjunto de arquivos markdown (definido no bloco CONFIG logo abaixo),
 * converte cada um para HTML com um conversor markdown->HTML escrito à mão
 * (zero dependências externas, zero npm install) e gera UM único arquivo HTML
 * autocontido — light ou dark mode, laranja+grafite, índice lateral fixo com
 * scrollspy, rolagem contínua, busca embutida, marcação visual de termos de
 * atenção configuráveis, botão de impressão, responsivo, zero requisição
 * externa (abre direto por file://).
 *
 * O manual NUNCA deve ser editado à mão. Ele é sempre uma função pura dos
 * arquivos .md listados em CONFIG.secoes. Se um .md mudar, regenere.
 *
 * COMO USAR
 * ---------
 * 1. Copie este arquivo para a raiz do projeto onde estão (ou de onde dá para
 *    referenciar por caminho relativo) os markdowns que você quer organizar.
 * 2. Edite o bloco CONFIG logo abaixo: título, seções (nome + arquivos),
 *    termos de destaque (opcional) e tema.
 * 3. Rode:
 *
 *        node gerar-manual.js
 *
 *    Os caminhos em `secoes[].arquivos` são relativos ao diretório de onde
 *    você roda o comando (não ao diretório do script). Isso sobrescreve o
 *    arquivo de saída (`CONFIG.saida`) inteiro. Não há passo de instalação —
 *    o script só usa módulos nativos do Node (`fs`, `path`).
 *
 * COMO ADICIONAR UM DOCUMENTO NOVO
 * ---------------------------------
 * Adicione o caminho do arquivo à lista `arquivos` da seção certa em
 * CONFIG.secoes (ou crie uma seção nova). A ordem das seções e dos arquivos
 * dentro delas é a ordem de leitura no manual. O `docId` de cada documento é
 * o nome do arquivo sem extensão — precisa ser único entre todos os
 * documentos listados (dois arquivos `resumo.md` em pastas diferentes vão
 * colidir; renomeie um dos dois nesse caso).
 *
 * O QUE O SCRIPT FAZ, EM ORDEM
 * ------------------------------
 * 1. Lê cada arquivo listado em CONFIG.secoes. Se um arquivo não existir,
 *    avisa no console (bem visível) e segue com os demais — nunca gera uma
 *    página silenciosamente incompleta (o aviso também aparece dentro do
 *    HTML gerado, no topo, se algum arquivo faltou).
 * 2. Converte o markdown para HTML (títulos, parágrafos, negrito, itálico,
 *    código inline, blocos de código, listas com/sem aninhamento — inclusive
 *    bloco de código dentro de item de lista, na ordem certa —, tabelas,
 *    blockquotes, linhas horizontais, links — inclusive links internos entre
 *    documentos e para âncoras específicas, resolvidos para o título certo).
 * 3. Durante a conversão, toda ocorrência literal de qualquer termo listado
 *    em CONFIG.destaques ganha uma marcação visual (<mark>) com id próprio, e
 *    é registrada numa lista consolidada no topo do manual. Se
 *    CONFIG.destaques estiver vazio, esse bloco simplesmente não aparece.
 * 4. Todo bloco de texto (parágrafo, item de lista, linha de tabela,
 *    cabeçalho) recebe um id e entra no índice de busca client-side embutido
 *    no HTML final.
 * 5. Monta a navegação lateral (seções -> documentos -> títulos H2).
 * 6. Escreve o arquivo de saída.
 *
 * Depois de rodar, o próprio script imprime um resumo de verificação
 * (documentos processados, títulos, tabelas, blocos de código, destaques
 * encontrados, tamanho do arquivo, arquivos que faltaram) — confira esse
 * resumo contra os arquivos de origem antes de considerar a geração boa.
 *
 * O QUE NÃO MUDAR
 * ----------------
 * O conversor markdown->HTML (seções 2 a 9 abaixo) já foi depurado (bugs de
 * bloco de código aninhado saindo fora de ordem e de link interno resolvendo
 * para o topo do documento em vez do título certo, ambos corrigidos). Não
 * reescreva o parser do zero — mexa só no bloco CONFIG.
 */

'use strict';

const fs = require('fs');
const path = require('path');

// =============================================================================
// CONFIGURAÇÃO — edite só esta seção. Nada abaixo dela deveria precisar de
// alteração para o uso normal.
// =============================================================================

const CONFIG = {
  // Título grande da página e o texto curto do topo da barra lateral. Se
  // `marcaCurta` não for definido, o script deriva um a partir de `titulo`.
  titulo: 'Manual do Sistema de CS da Descompliquei',
  subtitulo: '', // opcional — some se ficar vazio
  marcaCurta: 'Manual do CS', // opcional — rótulo curto no topo da sidebar

  // Caminho do HTML gerado, relativo ao diretório de onde você roda o script.
  saida: 'manual/index.html',

  // Seções, na ordem em que aparecem na navegação e no corpo do manual. Cada
  // seção agrupa arquivos — reaproveite um `nome` já usado para adicionar um
  // documento a uma seção existente, ou use um nome novo para criar outra.
  // Caminhos de `arquivos` são relativos ao diretório de onde você roda o
  // script (não ao diretório deste arquivo).
  secoes: [
    { nome: 'Fundamentos', arquivos: [
      'sistema/00-como-funciona.md',
      'sistema/01-a-cadeia.md',
      'sistema/02-diagnostico.md',
    ] },
    { nome: 'Os ritos', arquivos: [
      'sistema/ritos/00-o-mes-do-cs.md',
      'sistema/ritos/01-regua-de-risco.md',
      'sistema/ritos/02-onboarding-30-dias.md',
      'sistema/ritos/04-reuniao-mensal.md',
      'sistema/ritos/05-sessao-tatica-grupo.md',
      'sistema/ritos/03-fim-de-ciclo.md',
    ] },
    { nome: 'Os artefatos', arquivos: [
      'sistema/04-plano-de-acao.md',
      'sistema/03-materiais-por-elo.md',
    ] },
    { nome: 'Técnico', arquivos: [
      'sistema/05-publicar-plano.md',
      'sistema/06-painel.md',
      'sistema/mapa-do-crm.md',
    ] },
  ],

  // Termos a marcar visualmente (case-sensitive, palavra inteira) e a
  // consolidar numa lista com links no topo do manual. Aceita zero termos —
  // nesse caso o bloco de destaques simplesmente não aparece na página.
  destaques: ['PENDENTE'],

  // 'claro' (padrão) ou 'escuro'. A paleta de cada um vive em PALETAS logo
  // abaixo — troque os valores lá para rebrandear.
  tema: 'claro',
};

// =============================================================================
// PALETAS DE TEMA — laranja + grafite por padrão. Troque os valores aqui
// para rebrandear; a estrutura do CSS não precisa mudar.
// =============================================================================

const PALETAS = {
  claro: {
    bg: '#fbfaf8', panel: '#ffffff', border: '#e6e2da', borderStrong: '#d8d2c6',
    text: '#26241f', textSoft: '#5c584f', textFaint: '#8a8578',
    orange: '#e2590c', orangeStrong: '#b8430a', orangeSoft: '#fdeee1', orangeSoftBorder: '#f3c9a3',
    heading: '#33312c', codeBg: '#f3f1eb', codeBorder: '#e1dccf',
    markBg: '#ffe1b8', shadow: 'rgba(38,36,31,0.12)', scheme: 'light', printBg: '#ffffff',
  },
  escuro: {
    bg: '#18160f', panel: '#211e17', border: '#3a372c', borderStrong: '#4c473a',
    text: '#ece7db', textSoft: '#bdb7a6', textFaint: '#847e6d',
    orange: '#e2590c', orangeStrong: '#ff9a52', orangeSoft: '#3a2617', orangeSoftBorder: '#6b3d1c',
    heading: '#f3efe4', codeBg: '#141209', codeBorder: '#3a372c',
    markBg: '#5a3b12', shadow: 'rgba(0,0,0,0.45)', scheme: 'dark', printBg: '#ffffff',
  },
};

// ---------------------------------------------------------------------------
// ROOT: sempre o diretório de onde o comando `node gerar-manual.js` roda —
// os caminhos em CONFIG.secoes[].arquivos e CONFIG.saida são relativos a ele.
// ---------------------------------------------------------------------------

const ROOT = process.cwd();
const OUT_FILE = path.resolve(ROOT, CONFIG.saida);
const OUT_DIR = path.dirname(OUT_FILE);
const SCRIPT_NAME = path.basename(__filename);

// ---------------------------------------------------------------------------
// 2. UTILITÁRIOS DE TEXTO
// ---------------------------------------------------------------------------

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeAttr(s) {
  return escapeHtml(s).replace(/"/g, '&quot;');
}

function escapeRegex(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Slug simples, unicode-aware: minúsculas, remove pontuação (mantém letras/
// números/espaço/hífen), espaços viram hífen. Não precisa ser idêntico ao
// slugger do GitHub — só precisa ser consistente dentro deste documento.
function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .trim()
    .replace(/\s+/g, '-');
}

// Extrai o número de abertura de um título tipo "3. Schema das tabelas..."
function leadingNumber(text) {
  const m = String(text).trim().match(/^(\d+)[.)]/);
  return m ? m[1] : null;
}

function stripMdForSnippet(text) {
  return String(text)
    .replace(/`([^`]*)`/g, '$1')
    .replace(/\*\*\*([^*]+)\*\*\*/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .trim();
}

function truncate(s, n) {
  s = s.trim();
  if (s.length <= n) return s;
  return s.slice(0, n).replace(/\s+\S*$/, '') + '…';
}

// ---------------------------------------------------------------------------
// 3. LISTA DE DOCUMENTOS (achatada a partir de CONFIG.secoes) + REGEX DE
//    DESTAQUE + CONTEXTO GLOBAL DE GERAÇÃO (compartilhado por todos os docs)
// ---------------------------------------------------------------------------

function flattenDocs(secoes) {
  const docs = [];
  for (const sec of secoes || []) {
    for (const file of sec.arquivos || []) {
      docs.push({ section: sec.nome, file });
    }
  }
  return docs;
}

const DOCS = flattenDocs(CONFIG.secoes);

// Constrói uma regex que casa qualquer um dos termos de destaque, como
// palavra inteira (unicode-aware, então acentos contam como letra), dentro
// de texto JÁ ESCAPADO para HTML. Retorna null se não houver termos válidos.
function buildDestaqueRegex(termos) {
  const validos = (termos || []).map((t) => String(t).trim()).filter(Boolean);
  if (!validos.length) return null;
  const escapados = validos
    .map((t) => escapeRegex(escapeHtml(t)))
    .sort((a, b) => b.length - a.length); // termos mais longos primeiro na alternação
  return new RegExp(`(?<![\\p{L}\\p{N}_])(?:${escapados.join('|')})(?![\\p{L}\\p{N}_])`, 'gu');
}

function makeGlobalState() {
  return {
    destaqueRegex: buildDestaqueRegex(CONFIG.destaques),
    destaqueCounter: 0,
    destaques: [], // { id, docId, docTitle, snippet, termo }
    blockCounter: 0,
    searchIndex: [], // { docId, docTitle, text, id }
    knownDocIds: new Set(),
    headingsByDoc: {},
    stats: { tables: 0, codeBlocks: 0 },
  };
}

// ---------------------------------------------------------------------------
// 4. PROCESSAMENTO INLINE (dentro de um bloco: negrito, itálico, código,
//    links, e a marcação dos termos de destaque)
// ---------------------------------------------------------------------------

// Marca ocorrências dos termos de CONFIG.destaques em um texto JÁ ESCAPADO
// para HTML. Registra cada ocorrência na lista consolidada (G.destaques).
function markDestaques(htmlEscapedText, G, docId, docTitle, rawContextForSnippet) {
  if (!G.destaqueRegex) return htmlEscapedText;
  return htmlEscapedText.replace(G.destaqueRegex, (matched) => {
    const id = `destaque-${G.destaqueCounter++}`;
    const snippet = truncate(stripMdForSnippet(rawContextForSnippet), 220);
    G.destaques.push({ id, docId, docTitle, snippet, termo: matched });
    return `<mark class="destaque" id="${id}">${matched}</mark>`;
  });
}

// Renderiza um trecho de texto markdown "inline" (sem blocos) para HTML.
function renderInline(raw, G, docId, docTitle) {
  if (raw == null) return '';
  const rawContext = raw;

  // 4.1 Extrai spans de código `...` primeiro (para que * _ [ ] dentro deles
  // não sejam interpretados como marcação).
  const codeStore = [];
  let text = raw.replace(/`([^`]+)`/g, (_, code) => {
    let escaped = escapeHtml(code);
    escaped = markDestaques(escaped, G, docId, docTitle, rawContext);
    const token = `@@CODE${codeStore.length}@@`;
    codeStore.push(`<code>${escaped}</code>`);
    return token;
  });

  // 4.2 Escapa HTML do restante do texto.
  text = escapeHtml(text);

  // 4.3 Links [texto](url)
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, url) => {
    url = url.trim();
    let href = null;
    if (url.startsWith('#')) {
      // Link interno de âncora dentro do MESMO documento. Resolve pelo
      // número inicial do título (convenção tipo "3. Seção"), com fallback
      // para o topo do documento.
      const wantedNum = (url.match(/^#(\d+)-/) || [])[1];
      let resolved = null;
      if (wantedNum && G.headingsByDoc[docId]) {
        const h = G.headingsByDoc[docId].find((h) => leadingNumber(h.text) === wantedNum);
        if (h) resolved = h.id;
      }
      href = resolved ? `#${resolved}` : `#${docId}`;
    } else if (/^https?:\/\//i.test(url)) {
      href = url;
    } else if (/\.md(#.*)?$/i.test(url)) {
      const base = path.basename(url).replace(/\.md.*$/i, '');
      href = G.knownDocIds.has(base) ? `#${base}` : null;
    }
    if (href) {
      const external = /^https?:\/\//i.test(href);
      return `<a href="${escapeAttr(href)}"${external ? ' target="_blank" rel="noopener"' : ' class="xref"'}>${label}</a>`;
    }
    return label;
  });

  // 4.4 Negrito+itálico, negrito, itálico (nesta ordem, para não conflitar)
  text = text.replace(/\*\*\*([^*]+)\*\*\*/g, '<strong><em>$1</em></strong>');
  text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/(^|[^*])\*([^*\s][^*]*?)\*(?!\*)/g, '$1<em>$2</em>');
  text = text.replace(/\b_([^_]+)_\b/g, '<em>$1</em>');

  // 4.5 Marca os termos de destaque no texto visível (fora dos spans de código)
  text = markDestaques(text, G, docId, docTitle, rawContext);

  // 4.6 Restaura os spans de código
  text = text.replace(/@@CODE(\d+)@@/g, (_, i) => codeStore[Number(i)]);

  return text;
}

function newBlockId(G, docId) {
  return `blk-${docId}-${G.blockCounter++}`;
}

function addSearchBlock(G, docId, docTitle, rawText, id) {
  const plain = stripMdForSnippet(rawText).replace(/\s+/g, ' ').trim();
  if (!plain) return;
  G.searchIndex.push({ docId, docTitle, text: plain, id });
}

// ---------------------------------------------------------------------------
// 5. BLOCOS DE CÓDIGO
// ---------------------------------------------------------------------------

function readFencedBlock(lines, i) {
  const openMatch = lines[i].match(/^(\s*)```\s*([\w-]*)\s*$/);
  const lang = openMatch ? openMatch[2] : '';
  const content = [];
  i++;
  while (i < lines.length && !/^\s*```\s*$/.test(lines[i])) {
    content.push(lines[i]);
    i++;
  }
  i++; // pula a cerca de fechamento
  // Auto-dedent: remove o menor recuo comum entre as linhas não vazias.
  let minIndent = Infinity;
  for (const l of content) {
    if (l.trim() === '') continue;
    const m = l.match(/^(\s*)/);
    minIndent = Math.min(minIndent, m[1].length);
  }
  if (!isFinite(minIndent)) minIndent = 0;
  const dedented = content.map((l) => l.slice(Math.min(minIndent, l.length)));
  return { lang, code: dedented.join('\n'), nextIndex: i };
}

function renderCodeBlock(lang, code, G, docId, docTitle) {
  let escaped = escapeHtml(code);
  escaped = markDestaques(escaped, G, docId, docTitle, code);
  const id = newBlockId(G, docId);
  addSearchBlock(G, docId, docTitle, code, id);
  G.stats.codeBlocks++;
  const langClass = lang ? ` language-${escapeAttr(lang)}` : '';
  return `<div class="code-wrap" id="${id}"><pre class="code-block"><code class="code${langClass}">${escaped}</code></pre></div>`;
}

// ---------------------------------------------------------------------------
// 6. LISTAS (com suporte a aninhamento e a blocos de código dentro de itens)
// ---------------------------------------------------------------------------

function isListMarker(line) {
  return /^(\s*)([-*+]|\d+[.)])\s+(.*)$/.exec(line);
}

// Cada item de lista é uma sequência ORDENADA de segmentos — texto solto e
// blocos (código aninhado / lista aninhada) intercalados na mesma ordem em
// que aparecem na fonte. Isso importa porque um item pode ter texto, depois
// um bloco de código, depois mais texto; tratar "todo o texto" e "todo o
// bloco" como dois baldes separados (texto sempre antes do bloco) perderia
// essa ordem.
function newItem(firstContent) {
  return { segments: [{ type: 'text', parts: [firstContent] }] };
}
function pushText(item, text) {
  const last = item.segments[item.segments.length - 1];
  if (last && last.type === 'text') last.parts.push(text);
  else item.segments.push({ type: 'text', parts: [text] });
}
function pushBlock(item, html) {
  item.segments.push({ type: 'block', html });
}

function parseList(lines, i, baseIndent, G, docId, docTitle) {
  const items = [];
  let ordered = null;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === '') {
      // Só continua a lista se, depois do(s) espaço(s) em branco, ainda
      // houver conteúdo pertencente a este nível (novo item ou continuação).
      let j = i + 1;
      while (j < lines.length && lines[j].trim() === '') j++;
      if (j >= lines.length) { i = j; break; }
      const nextIndent = (lines[j].match(/^(\s*)/) || [, ''])[1].length;
      const nextIsMarker = !!isListMarker(lines[j]);
      if (nextIndent >= baseIndent || (nextIsMarker && nextIndent >= baseIndent)) {
        i = j;
        continue;
      }
      i = j;
      break;
    }

    const m = isListMarker(line);

    if (!m) {
      // Não é uma linha de marcador — pode ser continuação de texto do
      // último item, ou um bloco de código aninhado dentro do item.
      const indent = (line.match(/^(\s*)/) || [, ''])[1].length;
      if (items.length > 0 && indent > baseIndent) {
        const trimmed = line.slice(indent);
        if (/^```/.test(trimmed)) {
          const fence = readFencedBlock(lines, i);
          pushBlock(items[items.length - 1], renderCodeBlock(fence.lang, fence.code, G, docId, docTitle));
          i = fence.nextIndex;
          continue;
        }
        pushText(items[items.length - 1], trimmed);
        i++;
        continue;
      }
      break; // linha não pertence a esta lista
    }

    const indent = m[1].length;
    const marker = m[2];
    const content = m[3];

    if (indent < baseIndent) break; // desidentou: volta pro nível do chamador

    if (indent > baseIndent) {
      // Lista aninhada dentro do último item coletado neste nível.
      if (items.length === 0) {
        // Caso de borda: primeiro item já veio indentado. Trata como base.
        ordered = /^\d+[.)]$/.test(marker);
        items.push(newItem(content));
        baseIndent = indent;
        i++;
        continue;
      }
      const sub = parseList(lines, i, indent, G, docId, docTitle);
      pushBlock(items[items.length - 1], sub.html);
      i = sub.nextIndex;
      continue;
    }

    // indent === baseIndent: novo item neste nível
    if (ordered === null) ordered = /^\d+[.)]$/.test(marker);
    items.push(newItem(content));
    i++;
  }

  const tag = ordered ? 'ol' : 'ul';
  const html =
    `<${tag}>` +
    items
      .map((it) => {
        const id = newBlockId(G, docId);
        const rawTextForSearch = it.segments
          .filter((s) => s.type === 'text')
          .map((s) => s.parts.join(' '))
          .join(' ');
        addSearchBlock(G, docId, docTitle, rawTextForSearch, id);
        const innerHtml = it.segments
          .map((s) => (s.type === 'text' ? renderInline(s.parts.join(' '), G, docId, docTitle) : s.html))
          .join('');
        return `<li id="${id}">${innerHtml}</li>`;
      })
      .join('') +
    `</${tag}>`;

  return { html, nextIndex: i };
}

// ---------------------------------------------------------------------------
// 7. TABELAS
// ---------------------------------------------------------------------------

function splitTableRow(line) {
  let s = line.trim();
  if (s.startsWith('|')) s = s.slice(1);
  if (s.endsWith('|')) s = s.slice(0, -1);
  // separa por | não escapado
  const cells = [];
  let cur = '';
  for (let k = 0; k < s.length; k++) {
    if (s[k] === '\\' && s[k + 1] === '|') { cur += '|'; k++; continue; }
    if (s[k] === '|') { cells.push(cur); cur = ''; continue; }
    cur += s[k];
  }
  cells.push(cur);
  return cells.map((c) => c.trim());
}

function isTableSeparator(line) {
  const s = line.trim();
  if (!s.includes('|') && !/^:?-+:?$/.test(s)) return false;
  return /^\|?\s*:?-{1,}:?\s*(\|\s*:?-{1,}:?\s*)*\|?$/.test(s) && /-/.test(s);
}

function parseTable(lines, i, G, docId, docTitle) {
  const headerCells = splitTableRow(lines[i]);
  const sepCells = splitTableRow(lines[i + 1]);
  const aligns = sepCells.map((c) => {
    const left = c.startsWith(':');
    const right = c.endsWith(':');
    if (left && right) return 'center';
    if (right) return 'right';
    if (left) return 'left';
    return '';
  });
  let j = i + 2;
  const rows = [];
  while (j < lines.length && lines[j].includes('|') && lines[j].trim() !== '' && !isListMarker(lines[j])) {
    rows.push(splitTableRow(lines[j]));
    j++;
  }

  G.stats.tables++;

  const alignStyle = (idx) => (aligns[idx] ? ` style="text-align:${aligns[idx]}"` : '');

  const theadHtml =
    '<thead><tr>' +
    headerCells.map((c, idx) => `<th${alignStyle(idx)}>${renderInline(c, G, docId, docTitle)}</th>`).join('') +
    '</tr></thead>';

  const tbodyHtml =
    '<tbody>' +
    rows
      .map((r) => {
        const id = newBlockId(G, docId);
        addSearchBlock(G, docId, docTitle, r.join(' | '), id);
        return (
          `<tr id="${id}">` +
          r.map((c, idx) => `<td${alignStyle(idx)}>${renderInline(c, G, docId, docTitle)}</td>`).join('') +
          '</tr>'
        );
      })
      .join('') +
    '</tbody>';

  const html = `<div class="table-wrap"><table>${theadHtml}${tbodyHtml}</table></div>`;
  return { html, nextIndex: j };
}

// ---------------------------------------------------------------------------
// 8. BLOCKQUOTES
// ---------------------------------------------------------------------------

function parseBlockquote(lines, i, G, docId, docTitle) {
  const inner = [];
  while (i < lines.length && /^\s*>/.test(lines[i])) {
    inner.push(lines[i].replace(/^\s*>\s?/, ''));
    i++;
  }
  // Agrupa em parágrafos por linha em branco dentro do próprio blockquote.
  const paragraphs = [];
  let cur = [];
  for (const l of inner) {
    if (l.trim() === '') {
      if (cur.length) paragraphs.push(cur.join(' '));
      cur = [];
    } else {
      cur.push(l);
    }
  }
  if (cur.length) paragraphs.push(cur.join(' '));

  const html =
    '<blockquote>' +
    paragraphs
      .map((p) => {
        const id = newBlockId(G, docId);
        addSearchBlock(G, docId, docTitle, p, id);
        return `<p id="${id}">${renderInline(p, G, docId, docTitle)}</p>`;
      })
      .join('') +
    '</blockquote>';

  return { html, nextIndex: i };
}

// ---------------------------------------------------------------------------
// 9. DOCUMENTO COMPLETO -> HTML + metadados (headings para nav e resolução
//    de âncoras internas)
// ---------------------------------------------------------------------------

// Pré-varredura: descobre TODOS os títulos do documento, na ordem, ANTES de
// renderizar qualquer conteúdo inline. Isso é necessário porque um índice no
// topo do documento pode linkar para títulos que só aparecem bem mais adiante
// no arquivo — sem essa pré-varredura, a resolução de âncoras internas (ver
// renderInline) não teria como saber o id de um título que ainda não foi
// visitado no momento em que o link é processado.
function collectHeadings(lines, docId) {
  const headings = [];
  const usedIds = new Set();
  for (const line of lines) {
    const hMatch = line.match(/^(#{1,4})\s+(.*)$/);
    if (!hMatch) continue;
    const level = hMatch[1].length;
    const text = hMatch[2].trim();
    let slug = slugify(text) || `secao-${headings.length}`;
    let id = `${docId}-${slug}`;
    let n = 2;
    while (usedIds.has(id)) { id = `${docId}-${slug}-${n++}`; }
    usedIds.add(id);
    headings.push({ level, text, id });
  }
  return headings;
}

function renderDocument(src, docId, G) {
  const lines = src.replace(/\r\n/g, '\n').split('\n');

  // Passo prévio: descobre o título (H1) do documento, usado como docTitle.
  let docTitle = docId;
  for (const l of lines) {
    const m = l.match(/^#\s+(.*)$/);
    if (m) { docTitle = stripMdForSnippet(m[1]); break; }
  }

  // Pré-varredura de títulos (ver comentário de collectHeadings acima) —
  // populada em G ANTES do loop principal, para que links internos
  // encontrados em qualquer ponto do documento já consigam resolver.
  G.headingsByDoc[docId] = collectHeadings(lines, docId);
  let headingCursor = 0;

  const h2List = []; // para a navegação lateral (títulos nível 2)

  let html = '';
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === '') { i++; continue; }

    // Bloco de código
    if (/^\s*```/.test(line)) {
      const fence = readFencedBlock(lines, i);
      html += renderCodeBlock(fence.lang, fence.code, G, docId, docTitle);
      i = fence.nextIndex;
      continue;
    }

    // Título — o id já foi calculado na pré-varredura (collectHeadings);
    // aqui só consome a próxima entrada da lista, na mesma ordem.
    const hMatch = line.match(/^(#{1,4})\s+(.*)$/);
    if (hMatch) {
      const level = hMatch[1].length;
      const text = hMatch[2].trim();
      const heading = G.headingsByDoc[docId][headingCursor++];
      const id = heading ? heading.id : `${docId}-secao-${headingCursor}`;
      addSearchBlock(G, docId, docTitle, text, id);
      const inner = renderInline(text, G, docId, docTitle);
      html += `<h${level} id="${id}" class="doc-heading doc-heading-${level}">${inner}</h${level}>`;
      if (level === 2) h2List.push({ text: stripMdForSnippet(text), id });
      i++;
      continue;
    }

    // Linha horizontal (não confundir com separador de tabela: sem pipes)
    if (/^\s*(-{3,}|\*{3,}|_{3,})\s*$/.test(line) && !line.includes('|')) {
      html += '<hr>';
      i++;
      continue;
    }

    // Blockquote
    if (/^\s*>/.test(line)) {
      const bq = parseBlockquote(lines, i, G, docId, docTitle);
      html += bq.html;
      i = bq.nextIndex;
      continue;
    }

    // Tabela
    if (line.includes('|') && i + 1 < lines.length && isTableSeparator(lines[i + 1])) {
      const tbl = parseTable(lines, i, G, docId, docTitle);
      html += tbl.html;
      i = tbl.nextIndex;
      continue;
    }

    // Lista
    if (isListMarker(line)) {
      const list = parseList(lines, i, (line.match(/^(\s*)/) || [, ''])[1].length, G, docId, docTitle);
      html += list.html;
      i = list.nextIndex;
      continue;
    }

    // Parágrafo: junta linhas consecutivas que não iniciam outro bloco
    const paraLines = [];
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !/^\s*```/.test(lines[i]) &&
      !/^(#{1,4})\s+/.test(lines[i]) &&
      !/^\s*>/.test(lines[i]) &&
      !isListMarker(lines[i]) &&
      !(lines[i].includes('|') && i + 1 < lines.length && isTableSeparator(lines[i + 1])) &&
      !(/^\s*(-{3,}|\*{3,}|_{3,})\s*$/.test(lines[i]) && !lines[i].includes('|'))
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    const rawText = paraLines.join(' ').trim();
    if (rawText) {
      const id = newBlockId(G, docId);
      addSearchBlock(G, docId, docTitle, rawText, id);
      html += `<p id="${id}">${renderInline(rawText, G, docId, docTitle)}</p>`;
    }
  }

  return { html, docTitle, h2List };
}

// ---------------------------------------------------------------------------
// 10. MONTAGEM DO HTML FINAL
// ---------------------------------------------------------------------------

function buildHtml(processedDocs, G, generatedAt, missingFiles) {
  const temDestaques = !!(CONFIG.destaques && CONFIG.destaques.map((t) => String(t).trim()).filter(Boolean).length);

  // --- Navegação lateral -----------------------------------------------
  const sections = [];
  for (const d of processedDocs) {
    let sec = sections.find((s) => s.name === d.section);
    if (!sec) { sec = { name: d.section, docs: [] }; sections.push(sec); }
    sec.docs.push(d);
  }

  const navHtml = sections
    .map((sec) => {
      const docsHtml = sec.docs
        .map((d) => {
          const subHtml = d.h2List.length
            ? '<ul class="nav-sub">' +
              d.h2List.map((h) => `<li><a href="#${h.id}" class="nav-h2" data-target="${h.id}">${escapeHtml(h.text)}</a></li>`).join('') +
              '</ul>'
            : '';
          return (
            `<li class="nav-doc-item">` +
            `<a href="#${d.docId}" class="nav-doc" data-target="${d.docId}">${escapeHtml(d.docTitle)}</a>` +
            subHtml +
            `</li>`
          );
        })
        .join('');
      return (
        `<div class="nav-section">` +
        `<div class="nav-section-title">${escapeHtml(sec.name)}</div>` +
        `<ul class="nav-docs">${docsHtml}</ul>` +
        `</div>`
      );
    })
    .join('');

  // --- Lista consolidada de destaques (só existe se houver termos configurados) ---
  let destaquesBlockHtml = '';
  if (temDestaques) {
    const destaquesHtml = G.destaques.length
      ? G.destaques
          .map(
            (p, idx) =>
              `<li><a href="#${p.id}">${idx + 1}. ${escapeHtml(p.docTitle)}</a><span class="destaque-snippet"><strong>${escapeHtml(p.termo)}</strong> — ${escapeHtml(p.snippet)}</span></li>`
          )
          .join('')
      : '<li class="destaques-empty">Nenhum termo de destaque encontrado na varredura.</li>';
    destaquesBlockHtml = `
      <div class="destaques-block">
        <h2>Destaques (${G.destaques.length})</h2>
        <p class="destaques-intro">Toda ocorrência de <mark class="destaque">termo marcado</mark> (${escapeHtml(CONFIG.destaques.join(', '))}) encontrada nos documentos, na ordem em que aparece. Clique para ir direto ao trecho.</p>
        <ol class="destaques-list">${destaquesHtml}</ol>
      </div>`;
  }

  // --- Aviso de arquivos que faltaram (nunca fica só no console) ---------
  let missingBlockHtml = '';
  if (missingFiles && missingFiles.length) {
    missingBlockHtml = `
      <div class="missing-block">
        <h2>Atenção: ${missingFiles.length} arquivo(s) configurado(s) não foi(ram) encontrado(s)</h2>
        <p class="missing-intro">Este manual foi gerado sem eles. Corrija o caminho em CONFIG.secoes e rode de novo.</p>
        <ul class="missing-list">${missingFiles.map((f) => `<li><code>${escapeHtml(f)}</code></li>`).join('')}</ul>
      </div>`;
  }

  // --- Conteúdo principal --------------------------------------------------
  const mainHtml = sections
    .map((sec) => {
      const docsHtml = sec.docs
        .map(
          (d) =>
            `<article id="${d.docId}" class="doc">${d.html}</article>`
        )
        .join('');
      const secId = `section-${slugify(sec.name)}`;
      return `<section id="${secId}" class="doc-section"><h1 class="section-title">${escapeHtml(sec.name)}</h1>${docsHtml}</section>`;
    })
    .join('');

  // --- Índice de busca (JSON embutido) -------------------------------------
  const searchIndexJson = JSON.stringify(
    G.searchIndex.map((b) => [b.docId, b.docTitle, b.text, b.id])
  );

  const totalDocs = processedDocs.length;
  const totalHeadings = processedDocs.reduce((n, d) => n + G.headingsByDoc[d.docId].length, 0);

  const marcaCurta = CONFIG.marcaCurta || truncate(CONFIG.titulo, 26);
  const subtituloHtml = CONFIG.subtitulo
    ? `<p class="intro-subtitulo">${escapeHtml(CONFIG.subtitulo)}</p>`
    : '';

  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(CONFIG.titulo)}</title>
<style>
${buildCss(CONFIG.tema)}
</style>
</head>
<body>

<div class="app">
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-header">
      <div class="brand">
        <span class="brand-mark" aria-hidden="true"></span>
        <span class="brand-name">${escapeHtml(marcaCurta)}</span>
      </div>
      <div class="generated-at">Gerado em ${escapeHtml(generatedAt)}</div>
      <button class="btn-print no-print" id="btnPrint" type="button">Imprimir / salvar PDF</button>
    </div>

    <div class="search-box no-print">
      <input type="search" id="searchInput" placeholder="Buscar no manual…" autocomplete="off">
      <div id="searchResults" class="search-results" hidden></div>
    </div>

    <nav class="nav" id="nav">
      <div class="nav-section">
        <ul class="nav-docs">
          <li class="nav-doc-item"><a href="#topo" class="nav-doc" data-target="topo">Visão geral${temDestaques ? ' e destaques' : ''}</a></li>
        </ul>
      </div>
      ${navHtml}
    </nav>
  </aside>

  <button class="sidebar-toggle no-print" id="sidebarToggle" type="button" aria-label="Abrir navegação">Menu</button>

  <main class="content" id="content">
    <header id="topo" class="intro">
      <h1>${escapeHtml(CONFIG.titulo)}</h1>
      ${subtituloHtml}
      <p class="intro-meta">Gerado automaticamente a partir dos documentos configurados em <strong>${escapeHtml(generatedAt)}</strong> — ${totalDocs} documentos, ${totalHeadings} títulos.</p>
      <p class="intro-note">Este arquivo é gerado por <code>${escapeHtml(SCRIPT_NAME)}</code>. Não edite este HTML diretamente — edite os arquivos <code>.md</code> de origem e rode <code>node ${escapeHtml(SCRIPT_NAME)}</code> de novo.</p>

      ${missingBlockHtml}
      ${destaquesBlockHtml}
    </header>

    ${mainHtml}

    <footer class="doc-footer no-print">
      <p>Fim do manual. Gerado em ${escapeHtml(generatedAt)} por <code>${escapeHtml(SCRIPT_NAME)}</code>.</p>
    </footer>
  </main>
</div>

<script>
window.SEARCH_INDEX = ${searchIndexJson};
${CLIENT_JS}
</script>
</body>
</html>
`;
}

// ---------------------------------------------------------------------------
// 11. CSS — paleta vem de PALETAS[CONFIG.tema], laranja + grafite por padrão,
//     sem fontes/ícones externos.
// ---------------------------------------------------------------------------

function buildCss(tema) {
  const p = PALETAS[tema] || PALETAS.claro;
  return `
:root {
  --bg: ${p.bg};
  --panel: ${p.panel};
  --border: ${p.border};
  --border-strong: ${p.borderStrong};
  --text: ${p.text};
  --text-soft: ${p.textSoft};
  --text-faint: ${p.textFaint};
  --orange: ${p.orange};
  --orange-dark: ${p.orangeStrong};
  --orange-soft: ${p.orangeSoft};
  --orange-soft-border: ${p.orangeSoftBorder};
  --graphite: ${p.heading};
  --code-bg: ${p.codeBg};
  --code-border: ${p.codeBorder};
  --mark-bg: ${p.markBg};
  --shadow: ${p.shadow};
  --print-bg: ${p.printBg};
  --font-sans: ui-sans-serif, "Segoe UI", system-ui, -apple-system, Roboto, Helvetica, Arial, sans-serif;
  --font-mono: ui-monospace, Consolas, "SFMono-Regular", Menlo, Monaco, monospace;
  --sidebar-w: 320px;
  --content-max: 74ch;
}

* { box-sizing: border-box; }
html { color-scheme: ${p.scheme}; }

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-sans);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

a { color: var(--orange-dark); text-decoration: none; }
a:hover { text-decoration: underline; }

.app {
  display: flex;
  align-items: flex-start;
  min-height: 100vh;
}

/* -------------------- Sidebar -------------------- */

.sidebar {
  width: var(--sidebar-w);
  min-width: var(--sidebar-w);
  height: 100vh;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  background: var(--panel);
  border-right: 1px solid var(--border);
}

.sidebar-header {
  padding: 20px 18px 14px;
  border-bottom: 1px solid var(--border);
}

.brand { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
.brand-mark {
  width: 12px; height: 12px; border-radius: 3px;
  background: var(--orange);
  display: inline-block;
  flex: none;
}
.brand-name {
  font-weight: 700; font-size: 15px; letter-spacing: 0.01em; color: var(--graphite);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.generated-at { font-size: 12px; color: var(--text-faint); margin-bottom: 10px; }

.btn-print {
  width: 100%;
  padding: 8px 10px;
  font-size: 13px;
  font-family: inherit;
  border: 1px solid var(--orange);
  color: var(--orange-dark);
  background: var(--orange-soft);
  border-radius: 6px;
  cursor: pointer;
}
.btn-print:hover { background: var(--orange); color: #fff; }

.search-box { padding: 12px 18px; border-bottom: 1px solid var(--border); position: relative; }
.search-box input {
  width: 100%;
  padding: 8px 10px;
  font-size: 13px;
  font-family: inherit;
  border: 1px solid var(--border-strong);
  border-radius: 6px;
  background: var(--bg);
  color: var(--text);
}
.search-box input:focus { outline: 2px solid var(--orange-soft-border); border-color: var(--orange); }

.search-results {
  position: absolute;
  left: 18px; right: 18px; top: 100%;
  background: var(--panel);
  border: 1px solid var(--border-strong);
  border-top: none;
  max-height: 60vh;
  overflow-y: auto;
  z-index: 20;
  box-shadow: 0 8px 24px var(--shadow);
}
.search-results .sr-group { padding: 6px 10px 2px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-faint); background: var(--code-bg); }
.search-results .sr-item { display: block; padding: 8px 10px; border-bottom: 1px solid var(--border); font-size: 13px; }
.search-results .sr-item:hover { background: var(--orange-soft); }
.search-results .sr-snippet { display: block; color: var(--text-soft); font-size: 12px; margin-top: 2px; }
.search-results .sr-empty { padding: 10px; font-size: 13px; color: var(--text-faint); }
.search-results mark { background: var(--mark-bg); color: inherit; }

.nav { flex: 1; overflow-y: auto; padding: 8px 0 24px; }
.nav-section-title {
  font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em;
  color: var(--text-faint); padding: 14px 18px 4px;
}
.nav-docs { list-style: none; margin: 0; padding: 0 10px; }
.nav-doc-item { margin-bottom: 2px; }
.nav-doc {
  display: block;
  padding: 6px 8px;
  border-radius: 5px;
  color: var(--graphite);
  font-size: 13.5px;
  font-weight: 600;
}
.nav-doc:hover { background: var(--orange-soft); text-decoration: none; }
.nav-doc.current { background: var(--orange-soft); color: var(--orange-dark); }

.nav-sub { list-style: none; margin: 0 0 4px 0; padding: 0 0 0 16px; border-left: 1px solid var(--border); }
.nav-h2 {
  display: block;
  padding: 4px 8px;
  font-size: 12.5px;
  color: var(--text-soft);
  border-radius: 4px;
}
.nav-h2:hover { background: var(--orange-soft); text-decoration: none; }
.nav-h2.current { color: var(--orange-dark); font-weight: 600; background: var(--orange-soft); }

.sidebar-toggle {
  display: none;
  position: fixed;
  top: 10px; left: 10px; z-index: 30;
  padding: 8px 12px;
  font-family: inherit; font-size: 13px; font-weight: 600;
  border: 1px solid var(--orange);
  background: var(--panel); color: var(--orange-dark);
  border-radius: 6px;
}

/* -------------------- Conteúdo -------------------- */

.content { flex: 1; min-width: 0; padding: 40px 6vw 100px; }

.intro { max-width: var(--content-max); margin: 0 auto 48px; }
.intro h1 { font-size: 30px; margin: 0 0 10px; color: var(--graphite); }
.intro-subtitulo { font-size: 16px; color: var(--text-soft); margin: -4px 0 14px; }
.intro-meta { color: var(--text-soft); font-size: 14px; }
.intro-note { color: var(--text-faint); font-size: 13px; }

.destaques-block {
  margin-top: 28px;
  padding: 18px 20px;
  background: var(--orange-soft);
  border: 1px solid var(--orange-soft-border);
  border-radius: 10px;
}
.destaques-block h2 { margin: 0 0 8px; font-size: 17px; color: var(--orange-dark); }
.destaques-intro { margin: 0 0 10px; font-size: 13px; color: var(--text-soft); }
.destaques-list { margin: 0; padding-left: 20px; font-size: 13.5px; }
.destaques-list li { margin-bottom: 8px; }
.destaques-list a { font-weight: 600; }
.destaque-snippet { display: block; color: var(--text-soft); font-size: 12.5px; margin-top: 2px; }
.destaques-empty { color: var(--text-faint); }

.missing-block {
  margin-top: 20px;
  padding: 16px 20px;
  background: var(--orange-soft);
  border: 1px dashed var(--orange);
  border-radius: 10px;
}
.missing-block h2 { margin: 0 0 6px; font-size: 15px; color: var(--orange-dark); }
.missing-intro { margin: 0 0 8px; font-size: 13px; color: var(--text-soft); }
.missing-list { margin: 0; padding-left: 20px; font-size: 13px; }

.doc-section { max-width: var(--content-max); margin: 0 auto; }
.section-title {
  font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--orange-dark);
  border-bottom: 2px solid var(--orange);
  padding-bottom: 8px;
  margin: 56px 0 24px;
}
.doc-section:first-of-type .section-title { margin-top: 0; }

.doc { margin-bottom: 40px; }
.doc-heading-1 {
  font-size: 26px;
  margin: 0 0 16px;
  padding-top: 8px;
  color: var(--graphite);
  border-top: 1px solid var(--border);
  padding-top: 24px;
}
.doc:first-child .doc-heading-1 { border-top: none; padding-top: 0; }
.doc-heading-2 { font-size: 20px; margin: 34px 0 14px; color: var(--graphite); scroll-margin-top: 16px; }
.doc-heading-3 { font-size: 16.5px; margin: 26px 0 10px; color: var(--graphite); }
.doc-heading-4 { font-size: 14.5px; margin: 20px 0 8px; color: var(--text-soft); text-transform: uppercase; letter-spacing: 0.03em; }
.doc-heading { scroll-margin-top: 14px; }

.doc p { margin: 0 0 14px; font-size: 15.5px; }
.doc ul, .doc ol { margin: 0 0 14px; padding-left: 24px; font-size: 15.5px; }
.doc li { margin-bottom: 6px; }
.doc li > ul, .doc li > ol { margin-top: 6px; margin-bottom: 0; }

.doc blockquote {
  margin: 0 0 16px;
  padding: 4px 16px;
  border-left: 3px solid var(--orange);
  background: var(--orange-soft);
  border-radius: 0 6px 6px 0;
  color: var(--text-soft);
}
.doc blockquote p { font-size: 14.5px; }

.doc hr { border: none; border-top: 1px solid var(--border-strong); margin: 32px 0; }

code {
  font-family: var(--font-mono);
  font-size: 0.9em;
  background: var(--code-bg);
  border: 1px solid var(--code-border);
  border-radius: 4px;
  padding: 0.05em 0.35em;
}

.code-wrap { max-width: 100%; margin: 0 0 16px; }
pre.code-block {
  margin: 0;
  padding: 14px 16px;
  background: var(--code-bg);
  border: 1px solid var(--code-border);
  border-radius: 8px;
  overflow-x: auto;
}
pre.code-block code {
  background: none; border: none; padding: 0;
  font-size: 13px; line-height: 1.55; white-space: pre;
}

.table-wrap { max-width: 100%; overflow-x: auto; margin: 0 0 18px; border: 1px solid var(--border-strong); border-radius: 8px; }
table { border-collapse: collapse; width: 100%; font-size: 13.5px; }
thead { background: var(--code-bg); }
th, td { padding: 8px 12px; border-bottom: 1px solid var(--border); text-align: left; white-space: normal; }
th { color: var(--graphite); font-weight: 700; border-bottom: 2px solid var(--border-strong); }
tbody tr:last-child td { border-bottom: none; }
tbody tr:hover { background: var(--orange-soft); }

mark.destaque {
  background: var(--mark-bg);
  color: var(--orange-dark);
  font-weight: 700;
  border-radius: 3px;
  padding: 0 3px;
  scroll-margin-top: 20px;
}

.flash-target { animation: flash 1.8s ease; }
@keyframes flash {
  0% { background: var(--mark-bg); }
  100% { background: transparent; }
}

.doc-footer { max-width: var(--content-max); margin: 60px auto 0; font-size: 12.5px; color: var(--text-faint); }

/* -------------------- Responsivo -------------------- */

@media (max-width: 900px) {
  .sidebar {
    position: fixed;
    left: 0; top: 0;
    transform: translateX(-100%);
    transition: transform 0.2s ease;
    z-index: 25;
    width: min(86vw, 340px);
    min-width: 0;
  }
  .sidebar.open { transform: translateX(0); box-shadow: 0 0 0 100vmax rgba(0,0,0,0.25); }
  .sidebar-toggle { display: block; }
  .content { padding: 64px 5vw 80px; }
}

/* -------------------- Impressão -------------------- */

@media print {
  .no-print, .sidebar, .sidebar-toggle { display: none !important; }
  .app { display: block; }
  .content { padding: 0; max-width: none; }
  .doc-section, .intro { max-width: none; }
  body { background: var(--print-bg); color: #26241f; }
  .destaques-block, .missing-block { break-inside: avoid; }
  .doc-heading-1, .doc-heading-2 { break-after: avoid; }
  table, pre.code-block, blockquote { break-inside: avoid; }
  a { text-decoration: underline; }
  mark.destaque { background: #f2d9b8 !important; color: #b8430a !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
}
`;
}

// ---------------------------------------------------------------------------
// 12. JS DO CLIENTE — navegação ativa (scrollspy), busca, imprimir, toggle
// ---------------------------------------------------------------------------

const CLIENT_JS = `
(function () {
  'use strict';

  // ---- Botão imprimir ----
  var btnPrint = document.getElementById('btnPrint');
  if (btnPrint) btnPrint.addEventListener('click', function () { window.print(); });

  // ---- Toggle sidebar (mobile) ----
  var sidebar = document.getElementById('sidebar');
  var toggle = document.getElementById('sidebarToggle');
  if (toggle) {
    toggle.addEventListener('click', function () { sidebar.classList.toggle('open'); });
  }
  document.addEventListener('click', function (e) {
    if (window.innerWidth > 900) return;
    if (!sidebar.classList.contains('open')) return;
    if (sidebar.contains(e.target) || e.target === toggle) return;
    sidebar.classList.remove('open');
  });
  sidebar.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' && window.innerWidth <= 900) sidebar.classList.remove('open');
  });

  // ---- Scrollspy: destaca no nav o título/documento em leitura ----
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-doc, .nav-h2'));
  var targets = navLinks
    .map(function (a) {
      var id = a.getAttribute('data-target');
      var el = document.getElementById(id);
      return el ? { link: a, el: el } : null;
    })
    .filter(Boolean);

  function updateActive() {
    var scrollPos = window.scrollY + 120;
    var current = null;
    for (var i = 0; i < targets.length; i++) {
      if (targets[i].el.offsetTop <= scrollPos) current = targets[i];
    }
    navLinks.forEach(function (a) { a.classList.remove('current'); });
    if (current) current.link.classList.add('current');
  }
  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();

  // ---- Busca ----
  var input = document.getElementById('searchInput');
  var results = document.getElementById('searchResults');
  var INDEX = window.SEARCH_INDEX || [];

  function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function highlight(text, q) {
    var idx = text.toLowerCase().indexOf(q.toLowerCase());
    if (idx === -1) return escapeHtml(text);
    var before = escapeHtml(text.slice(0, idx));
    var match = escapeHtml(text.slice(idx, idx + q.length));
    var after = escapeHtml(text.slice(idx + q.length));
    return before + '<mark>' + match + '</mark>' + after;
  }

  function runSearch(q) {
    q = q.trim();
    if (q.length < 2) { results.hidden = true; results.innerHTML = ''; return; }
    var ql = q.toLowerCase();
    var matches = [];
    for (var i = 0; i < INDEX.length && matches.length < 60; i++) {
      var row = INDEX[i];
      if (row[2].toLowerCase().indexOf(ql) !== -1) matches.push(row);
    }
    if (!matches.length) {
      results.innerHTML = '<div class="sr-empty">Nenhum resultado para "' + escapeHtml(q) + '".</div>';
      results.hidden = false;
      return;
    }
    var byDoc = {};
    var order = [];
    matches.forEach(function (m) {
      var docTitle = m[1];
      if (!byDoc[docTitle]) { byDoc[docTitle] = []; order.push(docTitle); }
      byDoc[docTitle].push(m);
    });
    var html = '';
    order.forEach(function (docTitle) {
      html += '<div class="sr-group">' + escapeHtml(docTitle) + '</div>';
      byDoc[docTitle].slice(0, 8).forEach(function (m) {
        var snippet = m[2];
        var idx = snippet.toLowerCase().indexOf(ql);
        var start = Math.max(0, idx - 40);
        var excerpt = (start > 0 ? '…' : '') + snippet.slice(start, idx + ql.length + 80);
        html += '<a class="sr-item" href="#' + m[3] + '" data-jump="' + m[3] + '">' +
          '<span class="sr-snippet">' + highlight(excerpt, q) + '</span></a>';
      });
    });
    results.innerHTML = html;
    results.hidden = false;
  }

  input.addEventListener('input', function () { runSearch(input.value); });
  input.addEventListener('focus', function () { if (input.value.trim().length >= 2) results.hidden = false; });

  results.addEventListener('click', function (e) {
    var a = e.target.closest('[data-jump]');
    if (!a) return;
    e.preventDefault();
    var id = a.getAttribute('data-jump');
    var el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('flash-target');
      setTimeout(function () { el.classList.remove('flash-target'); }, 1800);
    }
    results.hidden = true;
    if (window.innerWidth <= 900) sidebar.classList.remove('open');
  });

  document.addEventListener('click', function (e) {
    if (!results.contains(e.target) && e.target !== input) results.hidden = true;
  });

  // ---- Links internos (âncoras e destaques) recebem o mesmo efeito de flash ----
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute('href').slice(1);
    var el = document.getElementById(id);
    if (el && el.tagName !== 'A') {
      setTimeout(function () {
        el.classList.add('flash-target');
        setTimeout(function () { el.classList.remove('flash-target'); }, 1800);
      }, 350);
    }
  });
})();
`;

// ---------------------------------------------------------------------------
// 13. EXECUÇÃO
// ---------------------------------------------------------------------------

function main() {
  const G = makeGlobalState();

  const processedDocs = [];
  const missingFiles = [];

  for (const entry of DOCS) {
    const fullPath = path.resolve(ROOT, entry.file);
    if (!fs.existsSync(fullPath)) {
      console.warn(`AVISO: arquivo não encontrado, pulando — [${entry.section}] ${entry.file}`);
      missingFiles.push(entry.file);
      continue;
    }
    const docId = path.basename(entry.file, '.md');
    if (G.knownDocIds.has(docId)) {
      console.warn(`AVISO: docId duplicado "${docId}" (arquivo ${entry.file}) — renomeie um dos dois arquivos, ids precisam ser únicos.`);
    }
    G.knownDocIds.add(docId);
  }

  for (const entry of DOCS) {
    const fullPath = path.resolve(ROOT, entry.file);
    if (!fs.existsSync(fullPath)) continue; // já avisado acima
    const src = fs.readFileSync(fullPath, 'utf8');
    const docId = path.basename(entry.file, '.md');
    const { html, docTitle, h2List } = renderDocument(src, docId, G);
    processedDocs.push({ docId, docTitle, section: entry.section, html, h2List, sourceChars: src.length, sourceLines: src.split('\n').length });
  }

  if (!processedDocs.length) {
    console.error('ERRO: nenhum documento válido para processar — confira CONFIG.secoes em ' + SCRIPT_NAME + '.');
    process.exitCode = 1;
    return;
  }

  const now = new Date();
  const generatedAt = now.toLocaleString('pt-BR', { dateStyle: 'long', timeStyle: 'short' }) + ' (hora local da máquina)';

  const finalHtml = buildHtml(processedDocs, G, generatedAt, missingFiles);

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(OUT_FILE, finalHtml, 'utf8');

  // ---- Resumo de verificação ----
  const totalHeadings = processedDocs.reduce((n, d) => n + G.headingsByDoc[d.docId].length, 0);
  const totalSourceChars = processedDocs.reduce((n, d) => n + d.sourceChars, 0);
  const totalSourceLines = processedDocs.reduce((n, d) => n + d.sourceLines, 0);

  console.log('=== Manual gerado com sucesso ===');
  console.log('Título:', CONFIG.titulo);
  console.log('Tema:', CONFIG.tema);
  console.log('Saída:', path.relative(ROOT, OUT_FILE) || OUT_FILE);
  console.log('Tamanho do HTML:', finalHtml.length, 'caracteres (', (finalHtml.length / 1024).toFixed(1), 'KB )');
  console.log('Documentos processados:', processedDocs.length);
  if (missingFiles.length) console.log('Arquivos configurados NÃO encontrados:', missingFiles.length, '->', missingFiles.join(', '));
  console.log('Total de títulos (h1-h4):', totalHeadings);
  console.log('Total de tabelas:', G.stats.tables);
  console.log('Total de blocos de código:', G.stats.codeBlocks);
  console.log('Total de blocos indexados para busca:', G.searchIndex.length);
  console.log('Termos de destaque configurados:', CONFIG.destaques && CONFIG.destaques.length ? CONFIG.destaques.join(', ') : '(nenhum)');
  console.log('Total de ocorrências de destaque encontradas:', G.destaques.length);
  console.log('Total de caracteres nos .md de origem:', totalSourceChars, '| linhas:', totalSourceLines);
  console.log('');
  console.log('Por documento:');
  for (const d of processedDocs) {
    console.log(
      ' -',
      entryLabel(d),
      '| headings:', G.headingsByDoc[d.docId].length,
      '| linhas-fonte:', d.sourceLines,
      '| chars-fonte:', d.sourceChars
    );
  }

  function entryLabel(d) {
    return `[${d.section}] ${d.docId} ("${d.docTitle}")`;
  }
}

main();

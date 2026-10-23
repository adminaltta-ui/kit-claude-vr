/**
 * O MEDIDOR DE LAYOUT. Cole inteiro no console do navegador (F12) com a tela aberta, ou rode pela ferramenta de
 * JavaScript do Chrome. Ele mede a tela como ela está, na largura da janela de agora, e devolve o que estraga:
 *
 *   rolagemLateral  a página inteira rola para o lado
 *   passam          elemento que passa da borda da janela (esquerda ou direita)
 *   cortados        caixa que corta o conteúdo de dentro sem reticências
 *   coladas         cartão encostado (menos de 4px) na borda de outro cartão: faltou recuo
 *   fontes          texto corrido com letra acima de 17px
 *   toques          botão ou link menor que 32px no celular (janela abaixo de 768px)
 *   graficos        gráfico que só tem dica de `title`, sem teclado nem toque
 *
 * Resultado vazio em tudo = nada a corrigir NESTA largura. Rode em 320, 390, 768 e 1280.
 */
(() => {
  const W = document.documentElement.clientWidth;
  const out = { largura: W, rolagemLateral: document.documentElement.scrollWidth > W + 1, passam: [], cortados: [], coladas: [], fontes: [], toques: [], graficos: [] };

  const visivel = (el) => {
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    // O texto só para leitor de tela (`sr-only`, a caixa de 1px de propósito) não é tela: não conta como cortado.
    if (el.closest(".sr-only")) return false;
    return r.width > 0 && r.height > 0 && cs.visibility !== "hidden" && cs.display !== "none";
  };
  const nome = (el) => {
    const c = typeof el.className === "string" ? el.className.trim().split(/\s+/).slice(0, 2).join(".") : "";
    return el.tagName.toLowerCase() + (c ? "." + c : "");
  };
  const px = (v) => parseFloat(v) || 0;
  const todos = [...document.body.querySelectorAll("*")].filter(visivel);

  for (const el of todos) {
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);

    // Passa da borda da janela. O que está dentro de uma caixa com rolagem própria é de propósito.
    if ((r.right > W + 1 || r.left < -1) && !el.closest("[data-rolagem], .rolagem")) {
      let rolaDentro = false;
      for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
        const o = getComputedStyle(p).overflowX;
        if (o === "auto" || o === "scroll") rolaDentro = true;
      }
      if (!rolaDentro) out.passam.push({ el: nome(el), esq: Math.round(r.left), dir: Math.round(r.right), largura: Math.round(r.width) });
    }

    // Caixa que corta o que tem dentro.
    if ((cs.overflowX === "hidden" || cs.overflowX === "clip") && el.scrollWidth > el.clientWidth + 1) {
      const reticencias = cs.textOverflow === "ellipsis" || cs.webkitLineClamp !== "none";
      if (!reticencias) out.cortados.push({ el: nome(el), conteudo: el.scrollWidth, caixa: el.clientWidth });
    }

    // Cartão colado na borda de outro cartão: acha o ancestral com borda e canto redondo e mede a folga.
    const temBorda = px(cs.borderLeftWidth) > 0 || px(cs.borderRightWidth) > 0;
    const temFundo = cs.backgroundColor && !/rgba\(0, 0, 0, 0\)|transparent/.test(cs.backgroundColor);
    if ((temBorda || temFundo) && r.width > 60 && r.height > 24) {
      for (let a = el.parentElement; a && a !== document.body; a = a.parentElement) {
        const ac = getComputedStyle(a);
        if (px(ac.borderLeftWidth) > 0 && px(ac.borderTopLeftRadius) > 4) {
          const ar = a.getBoundingClientRect();
          const esq = r.left - (ar.left + px(ac.borderLeftWidth));
          const dir = ar.right - px(ac.borderRightWidth) - r.right;
          if ((esq >= -1 && esq < 4) || (dir >= -1 && dir < 4)) out.coladas.push({ el: nome(el), dentroDe: nome(a), folgaEsq: Math.round(esq), folgaDir: Math.round(dir) });
          break;
        }
      }
    }

    // Letra grande em texto corrido (título e número grande ficam fora).
    const tag = el.tagName.toLowerCase();
    const proprio = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim().length > 25);
    if (proprio && !/^h[1-6]$/.test(tag) && px(cs.fontSize) > 17) out.fontes.push({ el: nome(el), tamanho: px(cs.fontSize), texto: el.textContent.trim().slice(0, 40) });

    // Alvo de toque pequeno no celular.
    if (W < 768 && (tag === "button" || tag === "a" || el.getAttribute("role") === "button") && (r.width < 32 || r.height < 32))
      out.toques.push({ el: nome(el), largura: Math.round(r.width), altura: Math.round(r.height) });
  }

  // Gráfico só com dica de `title`: três ou mais irmãos com `title` que não são botão nem link.
  const vistos = new Set();
  for (const el of document.querySelectorAll("[title]")) {
    const p = el.parentElement;
    if (!p || vistos.has(p)) continue;
    const irmaos = [...p.children].filter((c) => c.hasAttribute("title"));
    const tag = el.tagName.toLowerCase();
    if (irmaos.length >= 3 && tag !== "button" && tag !== "a" && el.tabIndex < 0) {
      vistos.add(p);
      out.graficos.push({ onde: nome(p), colunas: irmaos.length });
    }
  }

  const resumo = Object.fromEntries(Object.entries(out).map(([k, v]) => [k, Array.isArray(v) ? v.length : v]));
  console.table(resumo);
  return out;
})();

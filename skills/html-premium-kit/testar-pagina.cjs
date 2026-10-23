/* TESTAR-PAGINA: confere uma página HTML antes de entregar. Rode:  node testar-pagina.cjs caminho/da/pagina.html
   Confere: erro na página; rolagem lateral em 320, 390, 768 e 1280; barra de rolagem do navegador à vista;
   controle com cara de navegador; e, o principal, se algum clique MEXE na rolagem da tela (o que mais incomoda quem usa).
   Resultado vazio de problemas = pode entregar. Não tira foto. */
const path = require('path');
function carregar() {
  const tent = [
    path.join(require('os').homedir(), '.npm-global', 'lib', 'node_modules', 'playwright-core'),
    'playwright-core', 'playwright'
  ];
  for (const t of tent) { try { return require(t); } catch (e) {} }
  throw new Error('playwright-core nao encontrado. Peça ao Claude: instale o playwright-core e o Chromium para o testador do html-premium-kit.');
}
(async () => {
  const arq = process.argv[2];
  if (!arq) { console.log('uso: node testar-pagina.cjs pagina.html'); process.exit(2); }
  const { chromium } = carregar();
  const url = 'file:///' + path.resolve(arq).replace(/\\/g, '/');
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
  const prob = [];
  p.on('pageerror', e => prob.push('ERRO NA PAGINA: ' + e.message));
  p.on('console', m => { if (m.type() === 'error' && !/fonts|net::|favicon/.test(m.text())) prob.push('CONSOLE: ' + m.text()); });
  await p.goto(url); await p.waitForTimeout(500);
  const y = () => p.evaluate(() => Math.round(scrollY));

  // arquivo unico: CSS ou JS local solto quebra quando so o HTML e enviado (GitHub, Vercel, e-mail, WhatsApp)
  const soltos = await p.evaluate(() => [...document.querySelectorAll('link[rel=stylesheet][href],script[src]')].map(e => e.getAttribute('href') || e.getAttribute('src')).filter(u => u && !/^(https?:)?\/\//.test(u) && !/^data:/.test(u)));
  if (soltos.length) prob.push(`ARQUIVO SOLTO: a pagina depende de ${soltos.join(', ')}. Rode: node juntar.cjs ${path.basename(arq)} (a pagina precisa ser um arquivo unico)`);

  // abas (se houver): clicar em cada uma no topo nao pode rolar a tela
  const abas = await p.$$eval('.tab[data-t]', e => e.map(x => x.dataset.t));
  const abrir = t => p.evaluate(t => document.querySelector(`.tab[data-t="${t}"]`).click(), t);
  for (const t of abas) { await abrir(t); await p.waitForTimeout(150); const v = await y(); if (v !== 0) prob.push(`ROLAGEM: a aba ${t} rolou a tela (${v}px)`); }

  // todo clique: a rolagem nao pode mexer
  const SEL = 'button, [role=button], input[type=range], input[type=checkbox], select, .pt, .tooth polygon, [data-k], [data-f]';
  async function clicar(rotulo) {
    const n = await p.evaluate(s => [...document.querySelectorAll(s)].filter(e => { const r = e.getBoundingClientRect(); const c = e.closest('.panel'); return r.width > 4 && r.height > 4 && (!c || c.classList.contains('on')) && !e.closest('.tabs,nav') && !e.disabled; }).length, SEL);
    for (let i = 0; i < Math.min(n, 40); i++) {
      const ok = await p.evaluate(({ s, i }) => {
        const l = [...document.querySelectorAll(s)].filter(e => { const r = e.getBoundingClientRect(); const c = e.closest('.panel'); return r.width > 4 && r.height > 4 && (!c || c.classList.contains('on')) && !e.closest('.tabs,nav') && !e.disabled; });
        const e = l[i]; if (!e) return null; e.scrollIntoView({ block: 'center' }); const r = e.getBoundingClientRect();
        return { x: r.x + r.width / 2, y: r.y + r.height / 2, nome: (e.id || e.className.baseVal || e.className || e.tagName) + ' ' + (e.textContent || '').trim().slice(0, 24), tag: e.tagName };
      }, { s: SEL, i });
      if (!ok || ok.tag === 'SELECT') continue;
      await p.waitForTimeout(60); const a = await y();
      try { await p.mouse.click(ok.x, ok.y); } catch (e) { continue; }
      await p.waitForTimeout(320); const d = await y();
      if (Math.abs(a - d) > 2) prob.push(`ROLAGEM: clicar em "${ok.nome}" (${rotulo}) moveu a tela ${a} -> ${d}`);
    }
  }
  if (abas.length) { for (const t of abas) { await abrir(t); await p.waitForTimeout(120); await clicar(t); } } else await clicar('pagina');

  // larguras
  for (const w of [320, 390, 768, 1280]) {
    await p.setViewportSize({ width: w, height: 800 });
    for (const t of (abas.length ? abas : [null])) {
      if (t) { await abrir(t); await p.waitForTimeout(80); }
      const r = await p.evaluate(() => {
        const W = innerWidth, lat = [], barra = [], ctl = [];
        document.querySelectorAll('body *').forEach(e => {
          const pn = e.closest('.panel'); if (pn && !pn.classList.contains('on')) return;
          const r = e.getBoundingClientRect(); const cs = getComputedStyle(e);
          let rola = false; for (let a = e.parentElement; a && a !== document.body; a = a.parentElement) { if (/(auto|scroll)/.test(getComputedStyle(a).overflowX)) { rola = true; break; } }
          if (r.width && r.right > W + 1 && !rola) lat.push(e.tagName + '.' + String(e.className && e.className.baseVal === undefined ? e.className : '').slice(0, 30));
          if (/(auto|scroll)/.test(cs.overflowX) && e.scrollWidth > e.clientWidth + 1 && cs.scrollbarWidth !== 'none' && getComputedStyle(e, '::-webkit-scrollbar').display !== 'none') barra.push(e.tagName + '.' + String(e.className).slice(0, 30));
          if (e.matches('input[type=checkbox],input[type=radio],input[type=range]') && cs.appearance !== 'none') ctl.push(e.tagName + '[' + e.type + ']');
        });
        return { sw: document.documentElement.scrollWidth > W, lat: lat.slice(0, 3), barra: barra.slice(0, 3), ctl: ctl.slice(0, 3) };
      });
      const onde = `${w}px${t ? ' aba ' + t : ''}`;
      if (r.sw || r.lat.length) prob.push(`LARGURA em ${onde}: passa da lateral ${JSON.stringify(r.lat)}`);
      if (r.barra.length) prob.push(`BARRA DO NAVEGADOR a vista em ${onde}: ${r.barra.join(', ')} (use .rolagem-limpa)`);
      if (r.ctl.length && w === 1280) prob.push(`CONTROLE COM CARA DE NAVEGADOR: ${r.ctl.join(', ')} (use appearance:none, veja estilo-base.css)`);
    }
  }
  const unicos = [...new Set(prob)];
  console.log(unicos.length ? unicos.join('\n') : 'SEM PROBLEMAS');
  await b.close();
  process.exit(unicos.length ? 1 : 0);
})();

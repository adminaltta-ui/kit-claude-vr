/* HELPERS do html-premium-kit. Peças de comportamento já testadas (a tela não rola sozinha, nada se redesenha à toa).
   Uso: <script src="helpers.js"></script> antes do seu script. Depois: kit.abas(TABS, INIT) e as peças abaixo. */
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const set=(el,h)=>{el.innerHTML=h};
const R$=n=>n.toLocaleString('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0});
const REDUZ=matchMedia('(prefers-reduced-motion:reduce)').matches;

/* número que sobe até o valor novo (500ms). Use no .sv dos cartões de número. */
function tween(el,to,fmt=R$){ const from=el._v||0; el._v=to; cancelAnimationFrame(el._r);
  if(REDUZ||from===to){el.textContent=fmt(to);return}
  const t0=performance.now(); const st=now=>{const k=Math.min(1,(now-t0)/520),e=1-Math.pow(1-k,3); el.textContent=fmt(from+(to-from)*e); if(k<1) el._r=requestAnimationFrame(st)}; el._r=requestAnimationFrame(st) }

/* cartões de número: stats($('#caixa'),[{l:'Rótulo',v:1234,c:'bad'|'gold'|''}]). Reconstrói só se mudar a quantidade. */
function stats(box,items,fmt=R$){
  if(box.children.length!==items.length) set(box,items.map(()=>`<div class="stat"><div class="sl"></div><div class="sv">0</div></div>`).join(''));
  [...box.children].forEach((c,k)=>{c.className='stat '+(items[k].c||'');c.firstChild.textContent=items[k].l;tween(c.lastChild,items[k].v,fmt)}) }

/* cascata: os filhos entram um depois do outro (chame depois de preencher a lista) */
function stagger(sel){ $$(sel).forEach((el,i)=>{el.style.setProperty('--i',i);el.classList.add('up')}) }

/* aparecer ao rolar: só opacidade e deslocamento, nunca muda o tamanho do bloco */
const io='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.05}):null;
function reveal(painelSel){ $$(painelSel+' > .wrap > *').forEach(el=>{ if(el.classList.contains('rv'))return; el.classList.add('rv'); io?io.observe(el):el.classList.add('in') }) }

/* controle segmentado: seg('#meu-seg', valor=>{...}) marca o botão e avisa. Botões levam data-v. */
function seg(sel,fn){ const box=$(sel); box.addEventListener('click',e=>{const b=e.target.closest('button'); if(!b)return; $$('button',box).forEach(x=>x.classList.toggle('on',x===b)); fn(b.dataset.v)}) }

/* ABAS. TABS=[['id','Nome'],...]; painéis são <section class="panel" id="p-ID"><div class="wrap">...; INIT[id] roda 1 vez, ao abrir.
   Regras que já custaram caro: a tela NUNCA desce ao trocar de aba; só volta ao topo do conteúdo se a pessoa já tinha
   passado dele, e sem animação. O indicador desliza. A faixa de abas rola só na horizontal. */
const kit={
  abas(TABS,INIT,{hero='.hero',inicial}={}){
    const DONE={};
    set($('#tabs'),'<span id="ind"></span>'+TABS.map(t=>`<button class="tab" data-t="${t[0]}">${t[1]}</button>`).join(''));
    TABS.forEach((t,i)=>{const h=$('#p-'+t[0]+' h2'); if(h) h.insertAdjacentHTML('beforebegin',`<div class="eyebrow"><i>${String(i).padStart(2,'0')}</i>${i?'Parte '+i+' de '+(TABS.length-1):'Introdução'}</div>`)});
    const ind=()=>{const b=$('.tab.on'), i=$('#ind'); if(!b||!i)return; i.style.width=b.offsetWidth+'px'; i.style.transform='translateX('+b.offsetLeft+'px)';
      const t=$('#tabs'); t.scrollTo({left:b.offsetLeft-(t.clientWidth-b.offsetWidth)/2,behavior:'smooth'})};
    const show=(id,user)=>{
      if(!TABS.some(t=>t[0]===id)) id=TABS[0][0];
      $$('.panel').forEach(p=>p.classList.toggle('on',p.id==='p-'+id));
      $$('.tab').forEach(b=>b.classList.toggle('on',b.dataset.t===id));
      ind();
      if(INIT[id]&&!DONE[id]){DONE[id]=1;INIT[id]()}
      reveal('#p-'+id);
      try{localStorage.setItem('kit-aba',id)}catch(e){}
      history.replaceState(null,'','#'+id);
      const topo=$(hero)?$(hero).offsetHeight:0;
      if(user&&scrollY>topo) scrollTo({top:topo,behavior:'instant'});
    };
    $('#tabs').addEventListener('click',e=>{const b=e.target.closest('.tab'); if(b) show(b.dataset.t,true)});
    addEventListener('resize',ind);
    let first=location.hash.slice(1); try{ if(!first) first=localStorage.getItem('kit-aba')||'' }catch(e){}
    show(inicial||first||TABS[0][0]);
    if(document.fonts&&document.fonts.ready) document.fonts.ready.then(ind);
    return show;
  }
};

/* REGRAS DE OURO ao escrever peças (leia a skill design-de-primeira):
   1. Nunca refaça com innerHTML o bloco que a pessoa está usando. Troque só o item (el.outerHTML) ou a classe.
   2. Bloco que muda de altura leva min-height. Botões que trocam o conteúdo ficam FORA do bloco que muda.
   3. Nada de scrollIntoView, scrollTo ou foco automático em clique. */

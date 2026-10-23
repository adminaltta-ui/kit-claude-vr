# Catálogo de Componentes

Cada arquétipo de slide já existe como exemplo no `assets/template.html`. Aqui vai o **quando
usar** de cada um + a classe raiz. Para montar um slide, copie o exemplo correspondente do
template e troque só o conteúdo.

## Índice
1. Capa (`.slide.cover`)
2. Stat — painel forte + números (`.slide.split` com `.side.orange` + `.srow`)
3. Fraca+forte — creme + escuro com card stack (`.slide.split` com `.side.soft` + `.side.dark` + `.cstack`)
4. Checklist + nota + moldura de foto (`.slide.split` com `.checklist`/`.note`/`.photoframe`)
   — inclui a variante `.checklist.on-dark` para listas de 4–8 itens num painel escuro
5. Showcase — screenshot em moldura de navegador (`.slide.showcase` + `.shotframe`)
6. Divisória / citação de impacto (`.slide.divider`)
7. Cases — painel forte + lista com barras (`.slide.split` + `.rrow`)

---

## 1. Capa — `.slide.cover`
**Quando:** abertura do deck. Fundo escuro forte, ondas, título grande em dois tons, logo no
topo, tagline com fio lateral, barra laranja embaixo.
**Dica:** título curto e impactante; a tagline vende o benefício central.

## 2. Stat — painel forte laranja + stat rows
**Quando:** provar um ponto com 2–3 números fortes (velocidade, %, multiplicador). O painel
laranja à esquerda dá a headline; as linhas à direita listam os números com rótulo + descrição.
**Estrutura:** `.side.orange.on-dark` + `.main.plain` com `.srow` (a primeira com `.hi` = número
laranja). Números refinados (58px, 700), não estilo dashboard.

## 3. Fraca + forte — creme + escuro com card stack
**Quando:** apresentar N itens (módulos, pilares, entregáveis) com um enquadramento à esquerda.
Espelha o "Capital Planning" do Dundee: painel **creme fraco** (`.side.soft`) com título/intro +
painel **escuro forte** (`.side.dark`, `width:59%`) com `.cstack` de itens separados por fios.
**Por que funciona:** hierarquia de cor forte+fraca num slide só, denso e organizado.

## 4. Checklist + nota + moldura de foto
**Quando:** explicar "como funciona"/metodologia, ou um slide "sobre" com foto de pessoa.
**Peças:**
- `.checklist` → `.cli` com `.ck` (círculo laranja + check SVG) + texto. Para 3–5 passos.
- `.note` → citação/frase de fecho em itálico com fio laranja. Em painel escuro, adicione
  `.on-dark` (`<div class="note on-dark">`) para a cor de texto se ajustar ao fundo.
- `.photoframe` → moldura de foto **retrato** com forma laranja atrás. Placeholder por padrão;
  para foto real troque `.in` por `<img src="images/pessoa.jpg" alt="">`.

### Variante `.checklist.on-dark` — listas de 4–8 itens curtos num painel escuro
**Quando:** você tem 4 a 8 itens curtos (dores do cliente, features rápidas, materiais/entregas)
que não cabem com respiro num `.cstack` (que aguenta ~3 confortavelmente) — mas que **não devem
virar uma grade de cards** (ver SKILL.md, anti-pattern "grid de cardzinhos soltos": destoa do
resto de um deck construído em painel+lista). É a mesma peça `.checklist`, só que dentro do
`.side.dark` de um `.split` normal (não num painel claro), com cada item em **duas linhas**: título
em negrito branco + descrição menor em cinza claro.
```html
<div class="side dark on-dark" style="width:56%;padding:44px 56px">
  <div class="checklist wrap on-dark">
    <div class="cli">
      <span class="ck"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
      <span><span class="tt">Título do item</span><span class="dd">Descrição curta de uma linha.</span></span>
    </div>
    <!-- repita .cli para cada item -->
  </div>
</div>
```
Classes exigidas juntas: `checklist wrap on-dark` no container; `.tt`/`.dd` dentro do `<span>` de
cada `.cli` (não use texto solto sem esses spans, senão cai no estilo de 1 linha do checklist claro).
**Honestidade de espaço:** mesmo essa variante tem limite — acima de ~8 itens, divida em 2 slides
em vez de espremer ainda mais.

## 5. Showcase — screenshot em moldura de navegador
**Quando:** mostrar a plataforma/produto. Texto à esquerda (`.sc-left`, benefício da tela), a
tela à direita (`.sc-right`) dentro de `.shotframe` (barra de navegador + URL + sombra) com
`.accent` laranja atrás.
**Imagem:** a `.shot img` usa `width:100%;height:auto` — **respeita a proporção larga do
screenshot, sem corte**. Troque o `.ph` por `<img src="images/plataforma-tela.png" alt="">`.
**Ritmo:** faça um showcase claro e outro escuro (`.showcase.on-dark`) para variar.

## 6. Divisória / citação de impacto — `.slide.divider`
**Quando:** virar a chave da narrativa entre blocos. Fundo escuro, centralizado, uma frase forte
em dois tons. Curto e cirúrgico.

## 7. Cases — painel fraco (creme) + painel forte (escuro) com lista com barras
**Quando:** prova social / resultados.
**Estrutura (padrão — segue a mesma convenção de todo o resto do deck):** `.side.soft` à esquerda
(`width:44%`) com eyebrow + h2 + número-herói (`.hero`, ex. +R$700K) + legenda (`.hlb`); `.side.dark
on-dark` à direita (`width:56%`) com os casos dentro de um `.cstack` (só para centralizar
verticalmente — os itens continuam sendo `.rrow`, não `.citem`): nome + delta laranja + barra de
crescimento.
```html
<div class="side soft" style="width:44%">
  <div class="eyebrow">Resultados reais</div>
  <h2>Título que enquadra a <span class="accent">prova social.</span></h2>
  <div class="hero">+R$700K</div>
  <div class="hlb">legenda curta do número-herói</div>
</div>
<div class="side dark on-dark" style="width:56%;padding:50px 56px">
  <div class="cstack">
    <div class="rrow">...</div>
    <!-- repita .rrow para cada case -->
  </div>
</div>
```
**Honestidade:** as barras são proporcionais — não invente números.
**⚠️ Nota de convenção:** a primeira versão deste componente (herdada do `demo-visual-premium.html`
original) invertia isso — painel escuro à esquerda, lista num `.main.plain` claro à direita. Depois
que o resto do deck convergiu para "creme à esquerda + escuro à direita" em todo slide de
conteúdo, esse padrão antigo passou a destoar visualmente (rejeitado pelo João em 2026-07 — ver
SKILL.md "Lição aprendida"). Use sempre `.side.soft` + `.side.dark`, nunca `.side.dark` + `.main.plain`,
para manter esse componente no mesmo ritmo dos outros. Os tokens `.rrow`/`.bar` já têm variante de
cor para funcionar dentro de `.side.dark` (ver `.side.dark .rrow` no CSS) — não precisa reescrever.

---

## Criar um componente novo
Se precisar de um layout que não existe (ex.: timeline, tabela de preços, comparação lado a lado):
- Reutilize os tokens e a linguagem (moldura, fios, tint, laranja contido, tipografia refinada).
- Prefira variações dos existentes (`.split`, `.showcase`, `.checklist.on-dark`) a inventar do zero.
- **Evite qualquer layout "full-frame" novo baseado em grade de cards para listas de itens** — já
  foi tentado (`.gridslide`/`.gcard`) e rejeitado por destoar do resto do deck (ver SKILL.md,
  "Lição aprendida"). Listas de N itens são, quase sempre, um `.split` com `.cstack` (≤3 itens,
  título+parágrafo) ou `.checklist.on-dark` (4–8 itens, mais compacto). Um layout novo só se
  justifica para algo estruturalmente diferente (timeline, tabela, comparação lado a lado) — não
  para "mais um jeito de mostrar uma lista".
- **Nunca declare `position` na classe aplicada diretamente no `.slide`** (ver SKILL.md "Regra de
  ouro") — só em elementos internos que precisam ser posicionados dentro do componente.
- Se o componente vai acumular conteúdo de várias seções do deck original num slide só (stats +
  duas colunas de bullets + banner, por exemplo), desconfie: é mais seguro dividir esse conteúdo
  em 2 slides usando componentes já provados (`.split`+`.srow`, `.split`+`.cstack`) do que inventar
  um componente novo cheio de sub-partes pequenas — cada sub-parte nova é mais um ponto de bug e
  quase sempre força fonte menor que o piso de legibilidade.
- Teste contra a filosofia do SKILL.md: preenche o quadro? cor contida? tipo refinado? não parece
  web? fonte acima do piso mínimo? Se passar, ok.

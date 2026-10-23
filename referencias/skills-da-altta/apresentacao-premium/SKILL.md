---
name: apresentacao-premium
description: >-
  Cria e aprimora apresentações premium em HTML no padrão visual da Descompliquei — decks de
  slides 16:9 navegáveis (setas/teclado/tela cheia), com identidade laranja, tipografia Plus
  Jakarta e componentes de "cara de apresentação" (não de página web). Use SEMPRE que o usuário
  pedir uma apresentação, deck, slides, pitch, apresentação comercial/de vendas/institucional,
  ou quiser CRIAR do zero, REFAZER ou MELHORAR o visual de uma apresentação existente — mesmo
  que não diga a palavra "premium". Também dispara quando o usuário fala em "deixar com cara de
  apresentação", "slide bonito", "PCA", ou aponta uma referência de deck para imitar.
metadata:
  pagina: nao
---

# Apresentações Premium — Descompliquei

Gera decks HTML que **parecem apresentação de verdade** (estilo Nexora/Dundee/agência) na
identidade Descompliquei, e retrofita apresentações existentes para esse padrão. A base visual
foi validada com o João iterando na tela; o resultado dela está congelado em
[`assets/template.html`](assets/template.html) — **esse arquivo é o ponto de partida canônico**.

## O que sempre fazer primeiro

1. **Copie `assets/template.html`** para o destino (ex.: `empresa/comercial/paginas/nome.html`).
   Nunca comece um deck do zero — o template já traz o motor (navegação, escala, tela cheia), o
   design system completo no `<style>` e um exemplo de cada componente. Recriar CSS do zero foi
   exatamente o que gerou "cara de página web" nas primeiras tentativas.
2. **Leia a filosofia abaixo** antes de escrever qualquer slide. Ela é o coração da skill — foi
   destilada de muitas iterações de "ainda tá com cara de app". Se você ignorar isso, o deck sai
   parecendo site.
3. Para o catálogo de componentes com snippets, veja [`references/componentes.md`](references/componentes.md).
   Para tokens exatos (cores, fontes, escala), veja [`references/design-system.md`](references/design-system.md).
   Para o passo a passo (criar do zero / retrofitar / imagens), veja [`references/workflow.md`](references/workflow.md).

## Filosofia — o que faz "cara de apresentação" (não de página web)

Isto é o mais importante. Cada princípio corrige um erro real que dava "cara de app/HTML":

1. **Tela 16:9 fixa e composta.** Cada slide é um `1280×720` escalado para o viewport — uma tela
   *composta*, não conteúdo empilhado que rola. É a diferença nº 1 entre slide e página.
2. **Preencha o quadro — painéis edge-to-edge, densidade organizada.** Apresentação premium é
   *cheia e organizada*, não minimalista-vazia. Use layouts de 2 zonas (painel de cor que sangra
   até a borda + zona de conteúdo) recheados de conteúdo com fios finos e ícones. **Cards
   flutuando no branco vazio = cara de site.** O Dundee é denso, não esparso.
3. **Tipografia refinada, não gritada.** Display = Plus Jakarta Sans peso **700** (nunca 800 em
   preto puro), cor quente escura (`--ink #211E17`, não `#000`), tamanhos moderados **com
   respiro**. Título grande porém equilibrado — não encha meia tela com um bloco preto.
4. **Laranja contido.** O laranja aparece como (a) **acento** — palavra-chave do título, ícone,
   fio, número em destaque — ou (b) **zona estrutural grande** — um painel inteiro do slide.
   **Nunca** como um cardzinho saturado isolado no meio de outros: isso lê como "botão de web".
5. **Hierarquia de cor: forte + fraca juntas.** Combine cor forte (laranja/escuro em painéis
   `--grad-o`/`--grad-d`) com cor fraca (creme/tint suave `--grad-soft`). Um slide pode ter os
   dois lados (padrão "Capital Planning" do Dundee).
6. **Cards planos e sutis em fundo claro.** Fundo cinza-quente clarinho (`--card`), canto pequeno
   (12–14px), borda fina, sombra delicada — nunca sombra pesada + canto muito redondo (isso é
   Material/app).
7. **Dado como herói, mas elegante.** Números grandes e barras de progresso vendem — mas
   refinados (peso 700, laranja como acento), não estilo painel de dashboard chapado.
8. **Componentes-assinatura** dão o "toque desenhado": checklist com checks laranja, nota em
   itálico, moldura de foto (retrato), moldura de navegador para screenshots, stat rows, card
   stack em painel, cases com barras. Ver `componentes.md`.
9. **Ritmo claro/escuro** entre slides dá cadência.
10. **Detalhes que gritam "foi desenhado":** ondas SVG decorativas nos painéis, fios finos sob
    títulos, marca no canto, numeração de página, forma laranja peekando atrás das molduras.

### Anti-patterns — NUNCA fazer (dão cara de web/app)

- ❌ Tipo preto puro peso 800 gigante enchendo metade do slide.
- ❌ Card laranja saturado e isolado (parece CTA de landing page).
- ❌ Cards com sombra forte + cantos muito arredondados + números estilo dashboard.
- ❌ Slide esparso: header + 3 cards flutuando num mar de branco.
- ❌ **Grid de cardzinhos soltos para listas de itens** (4, 6, 8 caixinhas iguais lado a lado,
    mesmo em fundo neutro/cream sutil) — mesmo sem cor saturada, isso destoa do resto de um deck
    Descompliquei porque o deck inteiro é construído em cima de **painel forte+fraca com listas**
    (`.split` + `.cstack`/`.checklist`), não em cards de dashboard. Testado e rejeitado pelo João em
    2026-07 (ver "Lição aprendida" abaixo) — **não reintroduzir esse padrão**. Para 4–8 itens
    curtos, use `.checklist` (ver componente 4, variante `.on-dark`), não uma grade de cards.
- ❌ Conteúdo colado nas bordas, sem moldura/composição.
- ❌ Recriar o CSS do zero em vez de partir do `template.html`.
- ❌ Emojis (usar SVG de linha inline). Fontes genéricas (usar Plus Jakarta / DM Sans).

### Lição aprendida — convergência de cor: creme sempre à esquerda, escuro sempre à direita

Depois de retrofitar um deck inteiro (PCA, 2026-07), ficou claro que o João espera **um único
ritmo de cor consistente em todo slide de conteúdo do deck**: painel **creme/`.side.soft`** à
esquerda (título, contexto) + painel **escuro/`.side.dark`** à direita (a lista/prova — `.cstack`,
`.checklist.on-dark`, ou `.rrow` de cases). Isso vale mesmo para componentes cujo exemplo original
no `template.html`/`demo-visual-premium.html` tinha a cor invertida (o componente "Cases", por
exemplo, nasceu como escuro-à-esquerda + `.main.plain` claro à direita — foi corrigido para
seguir a mesma convenção depois que, isolado dentro do deck real, ele destoava visualmente de
todos os outros slides). **Ao montar ou revisar qualquer slide de conteúdo (não capa, não
divisória), pergunte: o lado escuro está à direita, como em todos os outros? Se não, ajuste** —
não assuma que o exemplo do template está com a orientação "definitiva" só porque é o exemplo.

### Lição aprendida — não inventar um componente "grid de cards" para listas

Numa primeira correção de densidade (slides com 6-8 itens que não cabiam num `.cstack`), foi
criado um componente novo `.gridslide`/`.gcard` (cards planos em grade, full-frame). Visualmente
ficou consistente *internamente*, mas destoava do resto do deck assim que colocado ao lado dos
outros slides — o deck inteiro fala a língua de "painel de cor + lista", e uma grade de cardzinhos
neutros lê como página de produto/dashboard, não como slide de apresentação. **A correção certa
para uma lista de 4–8 itens curtos não é inventar um layout de cards — é usar `.checklist` com a
variante `.on-dark`** (item em duas linhas: título em negrito + descrição menor, círculo de check
laranja), dentro do painel escuro de um `.split` normal, exatamente como qualquer outra lista do
deck. Ver componente 4 em `componentes.md` para o HTML exato.

### ⚠️ Regra de ouro (bug real, já causou um retrofit inteiro quebrado)

**Nunca declare `position` em nenhuma classe de slide** (`.split`, `.showcase`, `.divider`, ou
qualquer componente novo). `.slide{position:absolute;inset:0}` é o que fixa a caixa em 720px de
altura — é o que faz o slide não "encolher" para o tamanho do conteúdo. Uma classe de componente
com `position:relative` (mesma especificidade de `.slide`, definida depois no CSS) **sobrescreve
o absolute silenciosamente**: o slide vira um bloco normal, com altura = altura do conteúdo, e
cada slide passa a ter uma caixa de tamanho diferente (visualmente parece "cortado", com uma
faixa preta do fundo da página aparecendo abaixo do card). Foi exatamente isso que quebrou o
retrofit do PCA_Apresentacao-v4 em 2026-07: um componente novo (`.divider` reescrito, `.gridslide`,
`.statfull`) ganhou `position:relative` "só para dar containing block aos filhos absolutos" — mas
`.slide` **já é** um containing block válido (tem `position:absolute`), então o `position:relative`
extra era redundante e destrutivo. Se um componente novo precisa de decoração `position:absolute`
(ondas, número gigante decorativo, pageno), não declare `position` nenhum no nível do slide —
deixe o `.slide` resolver isso sozinho.

### Legibilidade — nunca sacrifique tamanho de fonte por densidade

O deck é para ser lido por um lead numa reunião, na tela ou projetado — não é uma página web que
aceita zoom. Se o conteúdo não cabe confortavelmente num componente no tamanho de fonte mínimo
abaixo, a resposta é **dividir em mais um slide**, nunca encolher a fonte além do piso.

- Corpo de texto em card/lista/citem: **nunca abaixo de ~13px**.
- Título de item (`h4` em card/citem): **nunca abaixo de ~15px**.
- **Máximo ~3 itens por `.cstack`** (painel forte com lista) no tamanho de fonte padrão — 4+
  itens força a criar um modificador "compacto" que é exatamente o que gera letra pequena demais.
  Prefira dividir "Item 1–2" / "Item 3–4" em dois slides consecutivos a espremer 4 itens.
- Grid de cards (`.gridslide`): 3–4 colunas por linha é o limite antes do texto virar ilegível;
  com 6+ cards de conteúdo, considere 2 slides de 3 em vez de 1 slide de 6 apertado.
- Ao terminar, **releia o deck simulando distância de reunião**: se você precisaria apertar os
  olhos para ler um card, o slide está denso demais — divida, não encolha.

## Fluxos

### Criar do zero
1. Entenda o briefing (objetivo do deck, público, mensagem central, o resultado a vender).
2. **Monte o esqueleto de slides** (só títulos + que componente cada um usa) e **aprove com o
   usuário** antes de escrever conteúdo — barato de ajustar, evita retrabalho.
3. Copie `template.html` e monte slide a slide, escolhendo componentes de `componentes.md`.
4. Aplique as regras de copy de vendas (benefício antes de feature, ancoragem, before/after —
   ver `workflow.md`).
5. Valide (contagem de slides, navegação, `<div>` balanceados).

### Retrofitar um deck existente
Ver `workflow.md` seção "Retrofit". Regra de ouro: preserve o motor e os `id`s que o JS usa;
edite conteúdo/estilo componente por componente; conte `<div>` de abertura vs. fechamento ao
terminar (bug clássico: regra CSS de mesma especificidade sobrescrevendo `display:none`).

### Imagens (screenshots da plataforma + fotos)
O usuário captura, a skill emoldura. Screenshots vão em **moldura de navegador** (respeitando a
proporção larga, sem corte); fotos de pessoas em **moldura de foto** (retrato). Convenção de
pasta e nomes em `workflow.md`.

## Notas técnicas
- **Motor:** conta `.slide` no DOM e atualiza numeração sozinho — adicionar/remover slides é
  seguro. Navegação: setas/espaço/PageUp-Down, Home/End, `F` = tela cheia, clique nas laterais.
- **Fontes** via Google Fonts (precisa de internet na 1ª carga; degrada para fallback do sistema).
- **Base 1280×720** escalada com `Math.min(w/1280, h/720)*0.94`.
- Deck é HTML puro, sem build. Abre com dois cliques.

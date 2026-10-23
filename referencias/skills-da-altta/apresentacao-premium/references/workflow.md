# Workflows

## A. Criar do zero

1. **Briefing.** Entenda: objetivo do deck, público, mensagem central e — acima de tudo — **o
   resultado a vender** (não as features). Ex.: "dobrar o faturamento do comercial da clínica".
2. **Esqueleto de slides.** Liste os slides só com título + componente de cada um (ver
   `componentes.md`). **Aprove com o usuário antes de escrever o conteúdo** — é barato ajustar a
   estrutura e caro refazer conteúdo pronto.
3. **Montar.** Copie `assets/template.html` para o destino (ex.: `empresa/comercial/paginas/nome.html`).
   Para cada slide, copie o componente-exemplo correspondente e troque o conteúdo. Remova os
   exemplos que não usar (o motor recalcula a numeração sozinho).
4. **Copy.** Aplique as regras abaixo.
5. **Validar.** Abra e navegue. Cheque contagem de slides e `<div>` balanceados (ver "Validação").

## B. Retrofitar um deck existente

1. **Ler e mapear.** Liste os slides do deck atual (classe + conteúdo). Um script rápido que
   captura `<div class="slide ...">` por linha ajuda em arquivos grandes.
2. **Decidir por slide:** manter / reescrever com componente do design system / remover.
3. **Aplicar componente por componente**, preservando **o motor e os `id`s que o JS usa** (ex.:
   ids de foto injetados por script, contadores). Não renomeie o que o JS referencia.
4. **Cuidado com colisão de CSS.** Bug clássico: uma classe de layout de **mesma especificidade**
   que `.slide{display:none}`, definida **depois** no CSS, sobrepõe o `display:none` e faz todos
   os slides aparecerem empilhados. Nunca defina `display` em `.split`/`.showcase` — deixe o flex
   vir de `.slide.active`.
5. **Validar** (abaixo).

## C. Imagens — screenshots e fotos

**Fluxo:** o usuário captura, a skill emoldura. O usuário está logado (dado real, sem risco de
vazar) e escolhe a melhor tela — automatizar a captura esbarra no login e na qualidade.

- **Pasta:** `images/` ao lado do HTML do deck. Um `README.md` lá documenta a convenção.
- **Convenção de nomes:** `plataforma-<tela>.png` (screenshots), `<pessoa>.jpg` (fotos).
- **Screenshots → moldura de navegador** (`.shotframe`). Prints de tela são **largos** (~16:9),
  então a moldura usa `img{width:100%;height:auto}` para mostrar a tela **inteira, sem corte**.
  Troque o placeholder `.ph` por `<img src="images/plataforma-tela.png" alt="">` e ajuste a `.url`.
- **Fotos de pessoas → moldura de foto** (`.photoframe`, retrato). Troque `.in` por
  `<img src="images/pessoa.jpg" alt="">`.
- **Privacidade:** avise se um screenshot mostra dado sensível de terceiros (nomes/telefones de
  leads) que vá aparecer numa reunião com prospect.

## Regras de copy (venda)

- **Benefício antes de feature.** O título do slide é a transformação; a feature vira prova
  pequena embaixo. "Pare de perder venda por falta de controle" > "Funil visual completo".
- **Before / After.** Nomeie a dor de hoje e o estado depois; o produto é a ponte.
- **Ancoragem repetida.** Se há um número-âncora (ex.: "R$30k → R$60k"), repita-o em 2–3 pontos
  do deck — repetição fixa a ideia.
- **Título em dois tons.** Destaque a palavra-chave com `.accent` (laranja).
- **Honestidade.** Não invente números/cases. Barras proporcionais aos dados reais.

## Validação

- Abrir o HTML e navegar (setas, `F` tela cheia). Todos os slides aparecem um a um?
- Contagem: `<div class="slide` deve bater com o esperado; o contador da nav atualiza sozinho.
- **`<div>` balanceados:** nº de `<div` == nº de `</div>`. Desbalanceio quebra o layout.
- **Nenhuma classe de slide declara `position`** (`grep -n "position" no bloco de CSS de cada
  componente novo — só `.side`/`.sc-left`/`.framed`/elementos internos podem ter `position`, nunca
  a classe aplicada direto no `.slide`). Ver SKILL.md "Regra de ouro" — esse bug faz o slide
  encolher para o tamanho do conteúdo em vez de ficar fixo em 720px, e por não dar erro nenhum no
  HTML/console, só aparece visualmente ("caixa cortada", altura diferente por slide).
- **Fonte mínima respeitada:** nenhum corpo de texto abaixo de ~13px, nenhum item cramado demais
  (ver SKILL.md "Legibilidade"). Se você criou um modificador tipo `.dense`/`.compact` para caber
  mais itens, é sinal de que devia ter dividido em dois slides — reconsidere antes de finalizar.
  Não existe rendering headless disponível na skill — a checagem é por leitura de CSS/HTML, então
  seja mais conservador com tamanhos/quantidades do que "acha que" vai caber.
- Sem resquício de conteúdo antigo (em retrofit): busque termos que deviam ter saído.
- Acentos em português corretos (ç, ã, é…). Ícones são SVG de linha (nunca emoji).

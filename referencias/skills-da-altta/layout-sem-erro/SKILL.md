---
name: layout-sem-erro
description: As travas de design e layout do Altta OS, do Attlas e do Academy. Use SEMPRE que for criar ou mexer em tela, painel, cartão, lista, tabela, gráfico, janela ou qualquer coisa visível, e antes de dizer que uma tela está pronta. Evita os erros que se repetem, principalmente no Sonnet 5.5: bloco colado na borda do painel, conteúdo que passa da lateral, gráfico que só tem dica de title, texto de dado que sai torto e letra grande demais.
metadata:
  area: Desenvolvimento
  frequencia: diaria
  resumo: "Lista as travas de layout que o Sonnet 5.5 esquece (recuo, borda, gráfico interativo, texto longo, letra) e mede a tela antes de entregar."
  quando: "Antes de começar e antes de entregar qualquer tela, painel, gráfico ou janela."
  exemplo: "Faz a página de consumo, e passa o layout-sem-erro antes de me entregar."
---

# Layout sem erro

## Por que esta skill existe
Em 2026-10-13, no bloco Consumo da Central, o João apontou erros que o Sonnet 5.5 comete sempre e que ele só vê
abrindo a tela: os cartões **encostados na borda do painel**, o gráfico **sem interação** (só a dica nativa do navegador),
**texto que passava da lateral** e nome de sessão com **lixo vindo de um arquivo**. Antes disso, a letra das janelas estava
grande demais. São erros de **hábito**, não de falta de capricho, e todos se medem. Esta skill é a lista do que medir.

> Esta skill é a das telas de plataforma. Para página HTML solta, e para as regras de comportamento (tela que rola sozinha,
> peça que se redesenha, barra do navegador à vista), use também `design-de-primeira` e o `html-premium-kit`.

## Antes de escrever: as 10 travas

**1. O Painel não dá recuo.** Tudo o que entra num `Painel` ou `Janela` leva o recuo próprio, igual ao do título (20px no
computador, 14px no celular). ⛔ Nunca confie que o pai empurra o filho. Conferir: a borda de um cartão nunca toca a borda
do painel que o contém.

**2. Nada passa da lateral.** Filho de `flex` ou `grid` leva `min-width: 0`. Texto que pode ser longo leva
`overflow-wrap: anywhere`. Número e medida levam `white-space: nowrap`. ⛔ Largura fixa em px maior que 320 menos os
recuos. Grid de colunas usa `minmax(0, 1fr)`, nunca só `1fr`.

**3. Todo gráfico é interativo, de verdade.** Passar o mouse, focar com o teclado e tocar mostram o valor numa **leitura
fixa** (uma faixa acima do gráfico, que também mostra o total quando nada está escolhido). A coluna é um `button`, tem
`aria-label` e destaque ao escolher. O gráfico tem **eixo com escala** (zero, metade e máximo) e marca o período de agora.
⛔ `title` não é interação: não aparece no toque nem no teclado. Dado vazio mostra "sem dado", não coluna sumida.

**4. Texto que vem de dado nunca vai cru para a tela.** Nome, título e frase que vêm do banco ou de arquivo: limite em 2
linhas (`-webkit-line-clamp`), trate vazio e comprimento, e **ancore o que você extrai** (uma expressão que busca um nome tem
de começar no começo do campo, senão pega lixo de dentro de outro texto). Olhe os 5 piores textos reais, não o de exemplo.

**5. Número vai em coluna, não em frase.** Pontos, tempos, valores: colunas com largura fixa, `tabular-nums` e alinhado à
direita, com o rótulo da coluna em cima. Frase solta ("0,69 pontos · 1 h 34 · 311 respostas") quebra diferente em cada
linha. No celular a linha vira cartão, com o rótulo antes de cada número.

**6. Janela vive fora da página.** O que abre em portal (janela, menu) não herda `@container` nem variável do escopo da
página: use `@media`. A janela do celular ocupa a tela e rola por dentro, uma coluna só.

**7. Os quatro estados estão desenhados:** carregando, vazio, erro e dado parcial (falta um campo). Estado vazio é título
curto e botão, ⛔ sem ícone (regra da legenda do projeto; o ícone do vazio saiu em 2026-10-19: lia como tela feita por IA).

**8. Letra pequena e contida.** Texto corrido de 13 a 14px. Título de janela até 24px. Número grande até 26px. Nada de
texto corrido acima de 17px. Peso 500 ou 600, nunca 700 em texto corrido. (O João reprovou letra grande em 2026-10-13.)

**9. Só o que o sistema já tem:** variáveis (`--superficie`, `--fio`, `--tinta-*`, `--acao`, `--acento-forte`), peças
(`Painel`, `Rosca`, `Segmentado`, `Vazio`) e a fonte da casa. ⛔ Nada de hex, de fonte nova, de sombra pesada, de barra
de progresso (use o anel), de ícone de brilho nem de emoji na tela.

**10. Celular desde o começo.** 320px sem rolagem lateral, alvo de toque de 44px, campo com 16px. O CSS do celular nasce
junto com o da tela, em `@media (max-width: 767px)`, sem mudar o computador.

**11. Do tablet ao ultrawide, o padrão de responsividade** (João, 2026-10-22: *"tem um padrão já definido de
responsividade [...] mas não foi seguido nessa reestruturação"*). O padrão é o
`empresa/plataformas/attlas/design-novo/RESPONSIVIDADE.md` (as faixas na §3, as regras na §4). O que mais se erra:
- ⛔ **A página encostada num lado com o vazio no outro.** Ela fica no meio, com o teto da página. Tela de leitura (Ajustes,
  formulário) pede a coluna pela peça, na regra `.pagina:has(...)` da casca, e o título vai junto. ⛔ Nunca um `max-width`
  só no conteúdo: a coluna fica colada à esquerda no monitor grande (foi o erro dos Ajustes da Clínica, 2026-10-22).
- A mesa de trabalho (agenda, quadro, construtor) usa a largura toda, também pedida pela peça.
- Coluna e grade mudam pela largura da **página** (`@container pagina`), ⛔ não da janela (`@media`): no iPad com a barra de
  dentro a página tem uns 540px. `@media` só para a casca, a janela que abre por cima (trava 6) e a linha do celular.
- O que rola de lado mostra a barra fina (`BarraFina`, a `Tabela`) e nunca alarga a página; número e título de coluna numa
  linha só.

## Antes de dizer que está pronto: medir, não olhar

1. `npx tsc -b` e `npx vite build` sem erro.
2. Rodar o medidor com a tela aberta, nas larguras **320, 390, 768 e 1280**:
   - abra a tela e cole o conteúdo de `.claude/skills/layout-sem-erro/medir-layout.js` no console (F12), ou rode-o pela
     ferramenta de JavaScript do Chrome quando o João deixar usar o navegador dele;
   - se a rota está no banco de mentira, o `scripts/celular.mjs` do OS faz as larguras sozinho (rolagem lateral, texto
     cortado, alvo pequeno).
3. O resultado tem de vir **vazio em tudo** (`passam`, `cortados`, `coladas`, `fontes`, `toques`, `graficos`). Se não
   vier, conserte e meça de novo. ⛔ Não explique um item do medidor: corrija.
4. **No Attlas, a varredura das telas** nas seis larguras do padrão (a trava 11), com o servidor da sua cópia:
   `MSYS_NO_PATHCONV=1 RODADA_SITE=http://127.0.0.1:<porta> node scripts/rodada/varrer-telas.mjs <saida.json>
   768x1024,1032x1376,1180x820,1280x600,1920x950,2560x1300 <as rotas que mudaram>` (a primeira carga depois de mudar o CSS
   pode passar do tempo: rode de novo). Tem de vir sem nada. E olhe a tela no 1920 e no 2560: a varredura não vê o lado vazio.
5. No `testei` da entrega, escreva em uma linha o que foi medido e em que larguras ("medidor em 320, 390, 768 e 1280 e
   varredura nas seis larguras: zerado"). Sem essa linha, a tela não está entregue.

## Os erros do Sonnet 5.5, para você se vigiar
- Achar que o pai dá o recuo (trava 1). Escrever o cartão e esquecer a lateral.
- Pôr `title="..."` e chamar de interativo (trava 3).
- Montar o grid com `1fr` e esquecer `min-width: 0`, e o texto longo estoura (trava 2).
- Extrair texto de arquivo com expressão solta (trava 4).
- Deixar a letra no tamanho que o navegador dá, sem escolher (trava 8).
- Dizer "ficou bonito" sem medir. A palavra é do João, não sua: você mede e ele julga.

## Se o João reprovar o visual duas vezes
Não faça a terceira no escuro: peça duas ou três telas que ele acha bonitas e copie a **forma** (espaço, tamanho, ritmo),
nunca a cor (regra do projeto).

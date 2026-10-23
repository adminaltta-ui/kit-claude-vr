---
name: design-de-primeira
description: O ponto de entrada de TODO trabalho visual do Sonnet 5.5, para o design sair bom na primeira entrega, sem o João precisar pedir ajuste. Use SEMPRE que for criar ou mexer em qualquer coisa que ele vá VER ou USAR com o mouse: página HTML, material de estudo ou manual interativo, tela ou painel de plataforma, landing, simulador, gráfico, janela, deck, artefato. Escolhe o caminho certo (skills e arquivos do projeto), aplica as regras de visual e de comportamento que evitam os ajustes de design e manda medir antes de entregar.
metadata:
  area: Desenvolvimento
  frequencia: diaria
  resumo: "Porta de entrada do design no Sonnet 5.5: escolhe a skill certa, aplica as regras de visual e de interação que já custaram ajustes, e manda testar antes de mostrar."
  quando: "Antes de começar e antes de entregar qualquer página, tela, painel, simulador ou material visual."
  exemplo: "Cria uma página interativa que explica o processo da clínica, no design aprimorado, sem eu precisar pedir ajuste depois."
---

# Design de primeira

## Por que existe
Em 2026-10-13 a página do processo da clínica precisou de três pedidos: o primeiro com o conteúdo, e **os dois seguintes só
de design** (barra de rolagem do navegador à vista, a tela descendo sozinha a cada clique, peças que se redesenhavam e
pulavam, animação confusa). O João: *"Eu não quero ter que mais ajustar o design. Eu quero que, sempre com o Sonnet 5.5,
a gente tenha uma mecânica de design aprimorada para que ele sempre gere um design muito bom [...] de primeira, sem precisar
fazer apontamento nenhum."* Esta skill é a mecânica. Quem a segue entrega no nível da versão aprovada.

## Passo 0: escolha o caminho
| O pedido é... | Use |
|---|---|
| Tela do Altta OS, do Attlas ou do Academy | `layout-sem-erro` e o `empresa/plataformas/os/design-system/LEIA.md`. ⛔ Sem CSS novo: as peças já existem. As regras de comportamento (8 a 14) valem junto. |
| Página HTML solta: material de estudo, manual, simulador, painel, landing, explicação interativa | **`html-premium-kit`** (kit pronto, com o modelo e o testador). Parta do modelo, nunca do zero. |
| Marca: cor, fonte, símbolo, voz | `empresa/marca/identidade-altta.html` (Direção C: floresta, pinho, pergaminho, ouro só como acento, vinho). |
| Carrossel, post, criativo, capa | `conteudo-carrossel`, `criativo-estatico`, `capa-academy`. |
| Manual HTML de documentos que já existem | `manual-html` (pessoal) e depois as regras daqui. |
| Apresentação (deck) | `apresentacao-premium` (pessoal). Ela é da Descompliquei (laranja): para a Altta, trocar pela paleta da Direção C. |
| Artefato do Claude (página publicada em claude.ai) | `artifact-design` do sistema, mais as regras daqui. |

## As regras de visual (o que faz parecer premium)
1. **Tokens primeiro.** Cores, raios, sombras e fontes como variável no `:root`, antes de qualquer peça. O ouro é acento, nunca área. Uma fonte de título e uma de texto.
2. **Escala de letra contida:** texto corrido 14 a 15px, lead até 17px, título de seção até 40px, número de destaque até 34px. Peso 400 a 600, nunca 700 em texto corrido.
3. **Hierarquia em três níveis:** etiqueta pequena em maiúsculas (eyebrow), título, corpo. Um cartão carrega **uma** ideia.
4. **Profundidade:** fundo com gradiente leve, topo escuro, cartões de papel mais claros que o fundo, sombra suave de duas camadas, raio de 14 a 16px. ⛔ Fundo chapado, borda grossa colorida em tudo, sombra pesada.
5. **A cor tem função e a mesma em todo o material:** verde é feito ou bom, vinho é dor ou risco, ouro é atenção ou seleção. Nunca decoração.
6. **Nada com cara de navegador:** a barra de rolagem horizontal some (use a máscara nas pontas, `.rolagem-limpa`); checkbox, range, campo e select são redesenhados; o foco é um anel dourado.
7. **Sem enfeite de IA:** nada de emoji como ícone, brilho, frase tranquilizadora, nem texto explicando embaixo de título (regra da legenda). Selos de origem (📚 🟡 🔴) são conteúdo, podem ficar.

## As regras de comportamento (o que mais gera pedido de ajuste)
8. **A tela nunca mexe sozinha.** Nenhum `scrollIntoView`, `scrollTo`, foco automático ou `scroll-behavior:smooth` global. Trocar de aba só volta ao topo do conteúdo se a pessoa já tinha passado do topo, e sem animação, e nunca desce. Desligue a ancoragem (`overflow-anchor:none`).
9. **Nunca refaça o que a pessoa está usando.** Atualizar um dente do odontograma é trocar **aquele** dente, não a arcada inteira. Troque classe ou o item, e não o bloco com `innerHTML`. Quem refaz tudo faz a página pular.
10. **Altura que varia ganha `min-height`**, e os botões que trocam um conteúdo ficam **fora** dele (Anterior e Próxima acima do cartão da etapa, nunca dentro).
11. **Movimento com função, no máximo dois por vez:** cascata na entrada (45ms entre cartões), aparecer ao rolar, `swap` de 0,4s quando o conteúdo troca, número que sobe, indicador que desliza na aba, linha de progresso que preenche. Tudo respeita `prefers-reduced-motion`. ⛔ Animação que repete a cada clique no que está em uso; ⛔ passar de 1s fora de efeito de ambiente.
12. **Conteúdo pesquisado vira peça que se mexe:** simulador, linha do tempo, tabela com filtro, mapa clicável, comparativo. Texto corrido sozinho é a exceção. Todo gráfico tem faixa de leitura e botão (regra 3 da `layout-sem-erro`).
13. **Quatro estados em tudo:** carregando, vazio (ícone, título curto e botão), erro, parcial. Todo clicável tem hover, foco e desabilitado.
14. **Celular junto:** 320px sem rolagem lateral, alvo de toque de 44px, campo com 16px, e a página inteira usável com o polegar.

## O processo (para não ter vai e volta)
1. **Antes de codar, 5 linhas:** para quem é, o tom, a peça principal de cada seção, a paleta, e o que NÃO vai ter.
2. **Parta do kit** (`html-premium-kit/modelo.html`), copie `estilo-base.css` e `helpers.js` para a pasta da página.
3. **Construa seção por seção, cada uma com a sua peça interativa.** Pode trabalhar com `estilo.css` e `helpers.js` separados, mas ⛔ **a entrega é SEMPRE um arquivo único**: rode `juntar.cjs` do kit para colar o CSS e o JS dentro do HTML. O João manda o arquivo para o sócio e sobe no GitHub e na Vercel; HTML que depende de arquivo solto abre sem estilo (aconteceu em 2026-10-13).
4. **Rode o testador** `node .claude/skills/html-premium-kit/testar-pagina.cjs <pagina.html>` até vir `SEM PROBLEMAS`. Ele pega pulo de rolagem, barra do navegador, lateral em 4 larguras, controle feio e página que depende de arquivo solto. ⛔ Não explique um aviso do testador: corrija.
5. **A revisão do olho**, antes de mostrar ao João: (a) aparece alguma barra de rolagem do navegador? (b) clico em tudo e a tela mexe? (c) algum bloco encosta na borda? (d) mais de três tamanhos de letra no mesmo cartão? (e) alguma cor sem significado? (f) o campo parece de navegador? (g) tem mais de duas animações ao mesmo tempo? (h) todo clicável reage ao mouse? (i) no celular de 320px tudo cabe? (j) cada seção tem uma peça que se mexe?
6. **Entregue dizendo o que mediu** ("testador: sem problemas em 320, 390, 768 e 1280; cliques sem mexer a tela"). ⛔ Nunca "ficou bonito": a palavra é do João.

## Se o João reprovar duas vezes
Não faça a terceira no escuro: peça duas ou três telas que ele acha bonitas e copie a **forma** (espaço, tamanho, ritmo), nunca a cor. E, antes de qualquer correção, descubra **a classe** do erro (barra de rolagem? pulo? letra?) e varra a página inteira por ela, em vez de corrigir só o ponto que ele apontou.

## A referência aprovada
`empresa/estrategia/produto/attlas/processo-da-clinica/index.html` (arquivo único, com o CSS e o JS dentro). O João disse "ficou incrível". Quando em dúvida de como uma peça deve ficar, abra o código dela e siga a forma.

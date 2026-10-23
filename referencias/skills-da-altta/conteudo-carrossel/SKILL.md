---
name: conteudo-carrossel
description: Fazer um carrossel do Instagram da Altta (@sejaaltta) do tema ao JPEG pronto para postar, no visual do carrossel do Ritz-Carlton, com a legenda e a ficha da peça. Cobre o editorial da notícia (C1), o educativo (C2), o convite (C3) e os carrosséis de prova e vitrine (o case, o que chegou no WhatsApp, como funciona, quem somos). Use sempre que o pedido for carrossel, lâminas, "faz o post de segunda", carrossel de case, carrossel "Quem é a Altta", ou quando o plano do mês (conteudo-mes) pedir um carrossel.
metadata:
  area: Estratégia
  frequencia: semanal
  resumo: "Faz o carrossel do @sejaaltta do tema ao JPEG pronto, no visual do carrossel do Ritz, com a legenda."
  quando: "Toda semana, para o educativo de segunda, o editorial do sábado ou um carrossel de prova."
  exemplo: "Faz o carrossel desta segunda sobre a recepção."
---

# O carrossel do @sejaaltta

O visual é o do carrossel do Ritz-Carlton (2026-09-30), que o João achou *"absurdo"*. Antes o Arthur fazia
tudo no Canva e não escalava; agora sai em código. **A estratégia manda no conteúdo:**
`empresa/estrategia/conteudo/estrategia.md`. Leia só a parte do formato pedido: a seção 6 (os formatos e o
roteiro de cada um), a 7 (os ganchos) e a 8 (a chamada e as palavras).

⚠️ Por enquanto é **só o perfil da Altta**. Os perfis do João e do Arthur voltam numa fase própria.

## A capa é a peça que mais importa

🔁 **João, 2026-10-04:** *"o foco seria ter só uma capa impactante, uma capa muito impactante, com uma imagem
muito boa"*; o resto do carrossel fica como está. As referências que ele escolheu: **G4**, **V4** e **Vinci
Society** (as folhas estão em `empresa/arquivos/conteudo/referencias/`).

🔁 **A capa de impacto** (João, 2026-10-04, mostrando duas capas da V4: *"algo parecido com isso, mas com a nossa
sofisticação"*). É a `.capa` do molde da recepção:
- **A imagem:** uma pessoa anônima no centro, da cintura para cima, olhando para a câmera com uma expressão forte
  (surpresa, desconfiada, curiosa), com o objeto da tese em cada mão (o celular, a agenda, a bobina). Coisas do
  assunto flutuam desfocadas em volta (moedas, notificações, fotos em moldura de ouro). Fundo floresta com
  luzes ouro desfocadas. A cabeça no terço de cima; o corpo some no escuro embaixo, onde vai o texto.
  Comece a cena por: *"Studio portrait in the style of a premium magazine cover, like a YouTube thumbnail made by
  a luxury brand. Dark forest green backdrop with soft golden bokeh lights, dramatic golden rim light, rich
  contrast, razor sharp focus on the face."*
- **O texto, embaixo e centralizado, sobre o corpo:** uma linha curta em Inter 600; **a palavra gigante** em
  Fraunces caixa alta (uma ou duas palavras, a quebra só onde tem `<br>`, e a letra diminui sozinha até caber);
  e **a pílula em ouro** com o resto da frase, em verde. Ex.: "Sua recepção agenda. Mas" / **QUEM VENDE?** /
  "4 trocas que fazem o paciente fechar →".
- **O selo** (a Fenda e "ALTTA") no alto, no centro, acima da cabeça.
- ⛔ Sem neon, sem vermelho, sem letra condensada: a sofisticação é o que separa a Altta da V4.
- **Gere duas versões da cena** (4 créditos cada) e mostre a outra ao João como opção (`capa-opcao-b.jpg`).

## Os dois moldes

Copie o `index.html` do molde mais parecido para a pasta nova e troque o texto. ⛔ Não desenhe do zero.

| Molde | Serve para | As lâminas que ele tem |
|---|---|---|
| `empresa/arquivos/conteudo/2026-10-05-recepcao-que-so-agenda/` | **toda capa** (a capa de cinema), C2 educativo, C3 convite, P2 case | capa de cinema, frase, troca ("em vez de" e "faça isto"), fecho com a palavra |
| `empresa/arquivos/carrossel-ritz/` | o miolo do C1 editorial, do P5 como funciona e do P6 quem somos, que têm foto | história com fotos em moldura, três passos, número grande, foto no topo, lista, fechamento com a marca |

As lâminas de um molde podem ir para o outro: o CSS é o mesmo (a Direção C, a Fraunces e a Inter, o fundo de
veludo, a Fenda no topo). ⚠️ A capa do Ritz é a antiga: no C1, a capa também é a de cinema.

## O passo a passo

1. **A pasta:** `empresa/arquivos/conteudo/<AAAA-MM-DD>-<assunto>/`, com a data de publicação.
2. **O texto, lâmina por lâmina,** no roteiro do formato (a seção 6 da estratégia). C1 tem 8 lâminas, C2 tem
   7, C3 tem 5, P2 tem 6. A lâmina 2 tem que funcionar sozinha, porque o Instagram reapresenta o carrossel
   a partir dela.
3. **A imagem da capa,** no Kie, pelo PowerShell (`nano-banana-2-lite`, **4 créditos** cada):
   `node .claude/skills/conteudo-carrossel/imagem.mjs <pasta> capa-a "<cena em inglês>" 4:5`
   🔁 João, 2026-10-04: *"não é o caso de gastar tanto"*. No teste da mesma cena, o lite (4) ficou no nível do
   pro (18); o z-image (0,8, só 3:4 e texto curto) inventa fundo; o imagen4-fast escreve texto na imagem.
   ⛔ Não volte para o pro sem o João pedir.
   Grava em `<pasta>/fotos/<nome>.jpg`. O script já põe a luz da marca (sombra verde, luz ouro, nada de
   vermelho ou azul) e proíbe texto na imagem. **A cena descreve:** o lugar, os objetos que contam a tese, a luz
   (uma fonte ouro só), o clima de filme e **"the lower third is dark and calm, for a headline"**. Se os
   objetos caírem embaixo do título, peça de novo dizendo onde eles ficam.
   - **Gente na cena:** doutores, recepção e pacientes como exemplo, gente anônima, como fazem o G4 e a Vinci.
     ⛔ Nunca apresentada como cliente, paciente ou profissional real da Altta, ⛔ nunca antes e depois.
   - ⛔ **O João e o Arthur não aparecem nas capas** (João, 2026-10-04: *"nós não devemos estar nas capas"*).
   - **Pessoa pública** pode, como nas referências, mas só em foto real com direito de uso e crédito na legenda.
     ⛔ Nunca gerada por IA.
   - No miolo, foto com licença livre (Wikimedia, rawpixel CC0) continua valendo, com o crédito na legenda.
4. **Exportar:** `node .claude/skills/conteudo-carrossel/exportar.mjs <pasta>`. Sai `01.jpg`, `02.jpg`...
   em JPEG 1080x1350 (a Meta só publica JPEG). O script avisa o texto que vaza da lâmina ou encosta em
   outro bloco: **resolva todo AVISO antes de seguir.**
5. **Conferir só a capa e o fecho** abrindo os dois JPEG (as outras lâminas o script já conferiu). Procure
   palavra sozinha numa linha e quebre à mão com `<br>`.
6. **A `legenda.txt`** na pasta: a legenda, a ficha da peça (formato, linha, chamada, data) e o crédito das
   imagens.
7. **A peça no OS:** grave ou atualize em `mkt_peca` pelo MCP `supabase-atlas` (o molde do SQL está na
   skill `conteudo-mes`), com `formato = 'carrossel'`, `etapa = 'aprovacao'` e a legenda. Se o plano do mês
   já criou a peça, é `update` pelo `id`. As artes sobem para a peça quando a página de Conteúdo ganhar o
   balde `conteudo` (`empresa/plataformas/os/PROMPT-CONTEUDO.md`, parte 1); até lá, ficam na pasta.

## As regras do texto

- **A clínica é a heroína,** a Altta é o guia. O gancho abre pela dor concreta, ⛔ nunca por "ser Altta".
- **Uma ideia por lâmina:** título e no máximo uma linha embaixo.
- ⛔ Sem travessão (nem `—` nem `-` como pontuação), sem emoji, sem a frase da "proporção", sem case com
  nome de pessoa, sem a chamada "diagnóstico", sem "link na bio" nem "fale com a equipe" como chamada.
- **Sem gênero:** "quem tem clínica", "a pessoa", "o paciente".
- **Todo número é verdadeiro.** Número de cliente só com autorização. Conta de exemplo se diz como conta.
- **A chamada certa:** palavra com prêmio no C2 e no case (a tabela da seção 8); uma pergunta no C1; o
  convite só no C3. A palavra vem em maiúscula, sem acento, e é a mesma na lâmina e na legenda.
- **A legenda do C2 é escrita para a busca,** com as palavras que quem tem clínica digita. No máximo 3
  hashtags. A do C1 é uma pergunta só.

## As regras do visual

- Ouro é acento: o fio, o número, a palavra de virada. ⛔ Nunca área, nunca no símbolo.
- A Fenda no topo de toda lâmina (o `#montes`); o disco inteiro só no fecho, ao lado de "Seja Altta.".
- Texto corrido em Inter a partir de 34px, título em Fraunces a partir de 64px: é o que se lê no celular.
- Quebra de linha à mão onde o sentido pede. ⛔ Palavra sozinha na última linha.

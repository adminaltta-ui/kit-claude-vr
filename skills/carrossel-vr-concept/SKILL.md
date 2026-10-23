---
name: carrossel-vr-concept
description: Faz um carrossel do Instagram da VR Concept do tema até os JPEGs prontos para postar, na identidade visual da marca (grafite e dourado), com a legenda. Use sempre que pedirem "faz um carrossel", "post de carrossel", "lâminas para o Instagram" ou um conteúdo da VR Concept para o feed.
---

# Carrossel da VR Concept

## Objetivo

Sair do tema para o carrossel pronto em minutos, sempre com a cara da VR Concept, sem abrir o Canva.

## O contexto da marca

- **Quem lê:** dentistas e donos de clínica odontológica.
- **O que a VR ensina:** técnica (com o Dr. Vinícius) e gestão (com a Dra. Gabriela). O **Método VR** é as
  duas metades juntas, e é o eixo do posicionamento.
- **O tom:** premium sem parecer ostentação. Seguro, direto, sem exagero.
- ⛔ Não citar produto, preço ou nome de plano enquanto a linha nova de produtos não estiver fechada (ela está em reestruturação).

## A identidade visual

| Elemento | Valor | Como usar |
|---|---|---|
| Grafite | `#252525` | Fundo da capa, da frase e do fecho; texto das lâminas claras |
| Dourado | `#E7B84E` | Só acento: o fio, o número, a palavra de virada. ⛔ Nunca preenche área |
| Dourado escuro | `#977020` | O dourado sobre o fundo claro, para dar leitura |
| Papel | `#F5F5F5` | Fundo das lâminas de conteúdo |
| Título | Cormorant Garamond 600 | A mesma família elegante do logo |
| Texto | DM Sans | Texto corrido, no mínimo 34px |
| Logo | `logo-vr-concept.png` | No topo da capa e grande no fecho, sempre sobre o fundo escuro |

Tudo isso já está pronto no `molde.html`. ⛔ Não desenhe do zero: copie o molde e troque o texto.

## As lâminas do molde

| Lâmina | Fundo | Para que serve |
|---|---|---|
| Capa | escuro | A promessa, em letra grande. É a lâmina que mais importa |
| Ideia | claro | Um título e uma linha de apoio |
| Passo | claro | O número grande em dourado, o nome do passo e o que fazer |
| Frase | escuro | A frase que alguém quer salvar ou mandar para outra pessoa |
| Fecho | escuro | O logo, a ideia que fica e a chamada |

Repita a "Ideia" e o "Passo" quantas vezes precisar. Um carrossel bom tem de 5 a 8 lâminas.

## O passo a passo

1. **A pasta:** `VR Concept/Marketing/Carrosseis/<AAAA-MM-DD>-<assunto>/` (dentro da sua pasta principal), com a data de publicação.
2. **O roteiro, lâmina por lâmina:** a capa abre pela dor concreta do dentista; o miolo resolve em passos;
   o fecho deixa uma ideia e uma chamada.
3. **Copiar o molde e o logo para a pasta:**
   `cp ~/.claude/skills/carrossel-vr-concept/molde.html "<pasta>/index.html"`
   `cp ~/.claude/skills/carrossel-vr-concept/logo-vr-concept.png "<pasta>/"`
4. **Trocar o texto** no `index.html`, mantendo as classes. A palavra de virada vai em `<em>`.
5. **Exportar:** `bash ~/.claude/skills/carrossel-vr-concept/exportar.sh "<pasta>"` (precisa do Google Chrome instalado). Sai `01.jpg`, `02.jpg`...
   em 1080x1350.
6. **Conferir a capa e o fecho** abrindo os JPEGs. Procure texto cortado e palavra sozinha numa linha;
   quebre à mão com `<br>`.
7. **A `legenda.txt`** na pasta: a legenda do post e no máximo 3 hashtags.

## As regras do texto

- **O dentista é o herói,** a VR é o guia. ⛔ Nunca abrir falando da VR.
- **Uma ideia por lâmina:** título e no máximo uma linha embaixo.
- ⛔ Sem emoji, sem travessão, sem foto de paciente, sem antes e depois.
- **Todo número é verdadeiro.** Se não tem fonte, não entra.
- Português correto, com acento, e linguagem de consultório, não de agência.

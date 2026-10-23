---
name: biblioteca-decide
description: Consulta a base de conhecimento da Altta (livros, artigos, vídeos, relatórios de mercado) antes de qualquer decisão de negócio, produto, marketing, comercial, currículo ou plataforma — e devolve uma recomendação fundamentada, com o voto dissidente e a adaptação para a realidade da clínica de harmonização. Use SEMPRE que o João for decidir preço, oferta, nome, escopo de BU, canal de aquisição, criativo, copy, funil, script comercial, currículo do Academy, onboarding, retenção, feature de plataforma, estrutura de time ou métrica — e também quando ele disser "o que os livros dizem sobre isso", "consulta a biblioteca", "isso está fundamentado?", "/biblioteca-decide", ou pedir direcionamento estratégico para qualquer mudança na Altta ou na Indike. Não use para processar uma fonte nova, seja livro, artigo, vídeo ou PDF (isso é `biblioteca-fontes`).
metadata:
  area: Estratégia
  frequencia: quando-precisar
  resumo: "Consulta a biblioteca da Altta e devolve uma recomendação fundamentada, com o voto contrário e a adaptação para a clínica."
  quando: "Antes de decidir preço, oferta, nome, canal, copy, funil, currículo, retenção ou recurso de plataforma."
  exemplo: "O que a biblioteca diz sobre subir o preço do Academy?"
---

# Consultar a biblioteca antes de decidir

## Por que essa skill existe

A biblioteca em `empresa/estrategia/biblioteca/` tem dezenas de sínteses densas — centenas de
milhares de palavras. Ler tudo a cada decisão é impossível, e ler por impulso o livro que veio à
cabeça é pior que não ler: produz decisão com aparência de fundamento.

Esta skill faz três coisas que o acervo sozinho não faz: **roteia** (qual síntese importa para
esta decisão), **arbitra** (quem ganha quando dois livros discordam) e **registra de volta**
(a decisão vira precedente, para não ser rediscutida daqui a seis meses).

Vale para a **Altta** e para a **Indike** — a Indike é **empresa do grupo Altta** (corrigido em 2026-09-03; a redação anterior dizia "separada e sem endosso" e estava errada), com marca e mercado próprios,
mas o acervo é o mesmo e a arbitragem também. O que muda é a aplicação, e isso se diz.

## Os três arquivos que governam

| Arquivo | Papel |
|---|---|
| `empresa/altta.html` §08 | **O registro de decisões da empresa.** Manda em tudo. Não existe segundo registro |
| `empresa/estrategia/biblioteca/_jurisprudencia.md` | A hierarquia de autoridade, as colisões já julgadas, as convergências, os alicerces desacreditados, o ranking ético |
| `empresa/estrategia/biblioteca/README.md` | Tabela 1 = roteador por tipo de decisão. Tabela 2 = o que cada livro cobre |
| `empresa/estrategia/biblioteca/fontes/README.md` | O índice por assunto do que **não é livro**: artigo, vídeo, relatório, PDF avulso, podcast |

### A base não é só de livros

Além das sínteses de livro na raiz da biblioteca, existe `biblioteca/fontes/`, com artigo,
vídeo, relatório de mercado e transcrição, cada arquivo etiquetado no frontmatter por
`assuntos` (14 slugs) e por `peso`. **Consultar as fontes é obrigatório em três situações**,
porque nelas o livro é cego:

- **`mercado-e-setor`**: qualquer coisa sobre o mercado brasileiro de estética, ticket,
  concorrente, conselho profissional, regulação. Nenhum dos 24 livros tem um número disso.
- **`ia-e-tecnologia`**: nenhum livro do acervo é da era da IA.
- **Linguagem de cliente e criativo do momento**: gancho, ângulo e vocabulário que estão
  pegando agora vêm de reels e de call, não de livro.

Busca rápida: `grep -l "assuntos:.*<slug>" empresa/estrategia/biblioteca/fontes/*.md`.
O peso de cada uma na hierarquia está na seção "Fontes que não são livro", mais abaixo.

---

## Processo

### 1. Classificar a decisão

Em uma frase, dizer **o que exatamente está sendo decidido** e de que tipo é (preço, canal,
copy, currículo, feature, escopo...). Se o pedido for vago, essa frase é a primeira coisa a
devolver — decisão mal formulada não tem resposta boa.

**Se a decisão fala com paciente, e não só com dono de clínica, marcar isso agora.** Muda o
crivo inteiro.

### 2. Checar o §08 ANTES de abrir qualquer livro

Ler o quadro de decisões em `empresa/altta.html` §08.

- **Já está fechada?** Então isto não é uma decisão, é execução. Dizer isso, apontar a decisão,
  e usar a biblioteca só para *como executar bem* — não para reabrir. Se um livro discordar,
  a discordância vira tensão registrada, nunca recomendação de mudança.
- **Está como hipótese?** Pode ser confirmada ou derrubada. Dizer qual das duas.
- **Está em aberto ou não consta?** Segue o processo normal.

### 3. Rotear pela Tabela 1 do README

Achar a linha do tipo de decisão. Ler **só** as sínteses apontadas, e dentro delas só as
seções relevantes (`grep` no arquivo antes de abrir inteiro — as sínteses vão de 35 KB a 257 KB).

Se a linha disser que a lacuna está aberta, **dizer que está aberta.** Recomendação sem fonte
é opinião — e opinião se anuncia como opinião.

### 4. Ler a jurisprudência

`_jurisprudencia.md`, nesta ordem:
- §2 — a colisão já foi julgada? Se sim, o precedente vale e não se rediscute sem argumento novo
- §3 — há convergência de vários caminhos independentes? Convergência de 7–8 é regra, não sugestão
- §5 — a técnica que eu ia recomendar se apoia em alicerce desacreditado? Se sim, mantém a técnica e descarta o porquê
- §9 — o que desse livro não transplanta para clínica pequena brasileira?

### 5. Aplicar a hierarquia de autoridade

Descer a escada e parar no primeiro degrau que responde:

**1. Dado real da Altta → 2. `altta.html` §08 → 3. Jurisprudência → 4. Convergência → 5. Livro isolado**

Com o **veto ético de Cialdini** por fora, derrubando qualquer coisa dos níveis 3 a 5:
*amplificar sinal verdadeiro entra, fabricar sinal fica de fora.*

**Sempre perguntar antes de responder: existe número da própria operação sobre isso?** Se
existe e ninguém olhou, a resposta certa é "olhe o número primeiro" — não a citação de um livro.

### 6. Devolver no formato fixo

```
DECISÃO — o que está sendo decidido, em uma frase

RECOMENDAÇÃO — o que fazer, concreto o suficiente para executar amanhã

FUNDAMENTO — qual nível da hierarquia sustenta isso, e por quê
  (ex: "Nível 4 — convergência de 8 caminhos independentes"
   ou "Nível 5 — um livro só, e a evidência dele é anedótica")

VOTO DISSIDENTE — quem na biblioteca discorda, e com que argumento
  (se ninguém discorda, dizer isso — é informação)

ADAPTAÇÃO — o que não transplanta para dono de clínica de harmonização,
  e o que muda se a peça falar com paciente

REGISTRAR DE VOLTA — o que vai para o §08, o que vai para a jurisprudência,
  e o que fica só nesta conversa
```

O formato é fixo de propósito: decisões tomadas em meses diferentes precisam ser comparáveis.

### 7. Escrever de volta — a etapa que impede a base de apodrecer

Isto **não é opcional**. Toda consulta que vira decisão real produz escrita:

| Aconteceu | Vai para |
|---|---|
| Decisão nova fechada | `altta.html` §08, com selo **Fechado** e a data |
| Hipótese confirmada ou derrubada | `altta.html` §08, trocando o selo |
| Colisão nova entre dois livros, arbitrada | `_jurisprudencia.md` §2, com veredito, motivo e data |
| Convergência reforçada por livro novo | `_jurisprudencia.md` §3, incrementando o contador |
| Voto novo numa pendência aberta | `_jurisprudencia.md` §7 |
| **A Altta decidiu contra a biblioteca** | `_jurisprudencia.md` §2, com o dado real que justificou |

**Confirmar com o João antes de escrever no §08.** Jurisprudência pode ser escrita direto;
decisão da empresa, não.

---

## Fontes que não são livro

O acervo vai crescer com artigo científico, vídeo, aula, post. A trava contra virar base
aleatória é o **Tier**:

O acervo cresce com artigo, vídeo, relatório de mercado, aula e post. A trava contra virar base
aleatória é o campo **`peso`**, declarado no frontmatter de toda fonte (o "Tier", nome antigo da
mesma coisa, virou este campo em 2026-09-05):

| `peso` | O que é | Autoridade |
|---|---|---|
| **`referencia`** | Livro com síntese autoral, ou framework de autor com obra e track record | Nível 4 ou 5 da hierarquia. Conta na convergência |
| **`evidencia`** | Dado primário: pesquisa, estudo com método declarado, número de mercado, documento oficial, resultado medido | Mesmo peso, e **derruba livro que não tem fonte** em pergunta factual |
| **`opiniao`** | Vídeo, reels, post, aula de criador, artigo de fornecedor | **Gera hipótese e vocabulário. Nunca fecha decisão sozinho** |

Fonte `opiniao` que contradiz convergência de nível 4 **não empata**: vira item para investigar.
Se a recomendação se apoiar em fonte com `confiabilidade: baixa`, dizer isso na resposta.

Para entrar no acervo, uma fonte precisa de: arquivo próprio (livro na raiz, o resto em
`fontes/`), frontmatter completo com `assuntos` e `peso`, uma linha no índice (Tabela 2 do
README para livro, `fontes/README.md` para o resto) e, se colidir com algo, uma entrada na
jurisprudência. **Fonte sem síntese não é fonte, é link.**

---

## Erros que essa skill existe para evitar

- **Citar um livro porque ele veio à cabeça.** Roteia pela Tabela 1, não pela memória.
- **Tratar hipótese do §08 como decisão fechada** — ou o contrário, reabrir o que está fechado.
- **Empatar autores.** Se dois discordam, alguém ganha, e o motivo fica escrito. Resposta
  "depende, os dois têm razão" é resposta não dada.
- **Usar alicerce desacreditado como razão** (7‑38‑55, cérebro trino, "50% é atitude").
- **Recomendar o que passa no B2B para uma peça que fala com paciente.**
- **Esquecer o nível 1.** Se existe número da operação, ele vence os dezoito livros juntos.
- **Consultar e não registrar.** Consulta sem escrita de volta é a definição de base aleatória.

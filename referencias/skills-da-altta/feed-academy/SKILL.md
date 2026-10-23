---
name: feed-academy
description: Escrever e gravar o conteúdo do feed do Início do Altta Academy (carrossel, artigo e novidade), cada post com uma capa própria gerada no Kie, e popular o feed em lote, na rotina de toda semana. Use quando o João pedir posts, carrosséis, artigos, novidades, "popular o feed", "gerar conteúdo do feed", "a semana do feed", "o lote da semana", capa de post, ou disser "/feed-academy". O jornal da semana é da skill `noticias-hof`.
metadata:
  area: Academy
  frequencia: semanal
  resumo: "Escreve os posts do feed do Início do Academy (carrossel, artigo e novidade), cada um com capa própria, e grava em lote."
  quando: "Na rotina de toda semana, para popular o feed."
  exemplo: "Faz o lote da semana do feed."
---

# O feed do Academy: escrever, ilustrar e gravar

## O que o João quer (2026-10-02, com as palavras dele)

- *"Posts bem interessantes"*, buscando *"em fontes variadas do mercado, de tudo o que for possível"*.
- *"Até uns posts mais engraçados, mais descontraídos. A ideia é nem sempre ensinar alguma coisa"*: o feed é para
  rolar. No fim do dia ele ensina, mas o tom varia.
- *"Sempre com um grau de sofisticação nas imagens"*: capa diferente em cada post, *"premium e bem bonita, de acordo
  com o tema"*, ⛔ **sem molde fixo**.
- A sensação de **feed infinito do Instagram**: volume e variedade de formato (carrossel, artigo, jornal, novidade),
  tudo em ordem de data.
- 🚨 **O feed NUNCA repete a aula** (João, 2026-10-02): *"não pode, de maneira alguma, ser igual ao conteúdo das
  aulas"*, *"tem que ter diferencial"*, *"um feed mais robusto do que as aulas, para ter motivo para a pessoa realmente
  consumir"*. ⛔ Não tire tema da lista de aulas. O curso (`curso_slug`) é opcional: só entra quando uma aula aprofunda
  de verdade o assunto do post, e a maioria vai sem.
- **Menos "conteúdo engessado", mais assunto variado** (2026-10-02): *"um pouco mais de business, de negócios em
  geral"*, *"sobre vida, sobre mentalidade, sobre pensamento"*. Negócios de outros setores, estratégia de marcas
  conhecidas, comportamento do consumidor, tecnologia e IA, psicologia, rotina, curiosidade, humor. A clínica é quem lê,
  não o único assunto.
- **A tela depois da capa não pode ser seca** (2026-10-02): *"muito só texto"*. Varie os 10 modelos (abaixo) e os
  quatro fundos dentro do mesmo post e de um post para o outro.

## A rotina da semana (o João usa quase toda semana)

O pedido típico: *"/feed-academy, a semana de 12/10"* ou *"o lote de outubro"*. O jornal da semana é a outra skill
(`/noticias-hof`), e as duas podem rodar na mesma sessão. A ordem, sem pular nenhum passo:

1. **O que está no ar e o que espera:** `select dia, tipo, titulo, publicado_em is not null from feed_item where dia >= current_date - 14 order by dia`.
   Pergunte ao João dos rascunhos parados e publique o que ele aprovar. Veja os temas já usados para não repetir.
2. **A pauta, antes de escrever:** um carrossel por dia de segunda a sábado (tipos variados, não um tipo fixo por
   dia), um artigo por semana, e para cada um: tema, tipo, tom e a cena da capa em português. ⛔ Nada tirado das
   aulas. Mostre e **espere o ok**.
3. **Escrever:** uma pasta do lote no scratchpad, um agente por grupo de uns 6 posts, com o pedido de
   [agente.md](agente.md), todos em paralelo e em segundo plano.
4. **Capas, enquanto eles escrevem:** `pedidos.json` com as cenas em inglês, `imagens.mjs --ver`, `imagens.mjs`,
   `folha.mjs` e refazer as que vierem com letra, logo ou rosto (seção 2).
5. **Conferir:** `conferir.mjs` nos JSON dos agentes, a varredura de gênero, e a medida em 320px com `TELAS=`
   (seção 4). Corrigir texto com troca pontual, sem reescrever o post.
6. **Publicar o app** (as imagens em `public/feed`, autor `<email-da-conta>`) e **gravar como rascunho** (um
   agente `sonnet` roda cada `.sql`).
7. **Entregar curto:** quantos posts, o custo das capas, o que os agentes mudaram de ângulo e como revisar.
   ⚠️ Post de data futura, depois de publicado, só aparece para quem estuda no dia dele: dá para revisar e publicar a
   semana inteira de uma vez.

## 1. Escrever

**Os tipos novos (a 0103), os principais do feed:** `ideia` "Para pensar" (mentalidade, vida), `negocio` "Negócios"
(negócio em geral, marcas, estratégia), `mercado` "Mercado" (tendência, consumo, tecnologia), `curiosidade` "Você
sabia?" e `pausa` "Pausa" (o leve e engraçado). Os seis antigos continuam, para o que é prático da clínica.

**Os 10 modelos da tela** (`modelo` em cada tela; a peça é `app/src/features/feed/modelos.tsx`). Cada tela pode ter
`fundo`: `claro`, `vinho` ou `pinho` (sem `fundo` é a floresta). Medidos em 320px: respeite os limites.
- `texto` (o padrão, pode omitir): `grande` + `texto`, até 48 palavras.
- `frase`: só `grande`, até 20 palavras; `texto` opcional, uma linha de apoio.
- `numero`: `grande` é o número (até 9 letras, "R$ 9,9 bi", "71%"), `texto` até 30 palavras.
- `citacao`: `texto` é a citação (até 30 palavras), `autor` quem disse. Só citação conferida em fonte.
- `lista`: `grande` o título, `itens` até 4 (`{rotulo?, texto}`), até 10 palavras cada.
- `versus`: `grande` o título, `itens` exatamente 2: o primeiro sai riscado ("Em vez de"), o segundo aceso ("Tente");
  `rotulo` troca essas palavras. Até 14 palavras cada.
- `conversa`: balões de WhatsApp, `itens` até 4 com `rotulo` `eles` (esquerda) ou `nos` (direita), até 16 palavras
  cada; `grande` vira o chapéu pequeno; `texto` um comentário embaixo.
- `grafico`: barras, `itens` até 4 (`{rotulo, valor: número, texto: "71%"}`), a maior fica acesa; `texto` embaixo.
- `quiz`: `grande` a pergunta (até 20 palavras), `itens` 2 ou 3 opções (até 10 palavras), `certa` o índice (0, 1, 2),
  `texto` a explicação que aparece depois do toque (até 30 palavras).
- `checklist`: `grande` o título, `itens` até 4 (até 10 palavras) que a pessoa marca na tela (não grava nada).

Num carrossel de 4 a 7 telas, use pelo menos 3 modelos diferentes e nunca dois iguais seguidos.

**O carrossel** (`tipo` entre `passo`, `instagram`, `conselho`, `mensagem`, `numero`, `pergunta` e os cinco novos):
- `titulo` (3 a 120 letras), de 2 a 8 `telas` (`{grande?, texto}`), ⛔ **no máximo 48 palavras por tela** (senão não
  cabe em 320x568), a `frase` do story (até 160 letras, ângulo "estou me atualizando", ⛔ nunca venda).
- `mensagem` traz o campo `copiar` (a mensagem pronta, até 1.200 letras).
- `curso_slug` e `aula` (`MM-AA`), **opcionais desde a 0103**: só quando uma aula que exista em
  `empresa/plataformas/academy/app/src/conteudo/cursos/<slug>/` aprofunda o post de verdade; a `area` também é opcional (`posicionamento`, `marca`, `captacao`, `atendimento`, `venda`, `retorno`).
- O rótulo de cada tipo no app: passo "O passo do dia", instagram "O que está funcionando", conselho "A regra do
  conselho", mensagem "A mensagem pronta", numero "O número da semana", pergunta "A pergunta respondida".

**O artigo** (`tipo = 'artigo'`): `telas = '[]'`, o texto em `corpo` (markdown, 300 a 20 mil letras; o bom é 6 a 10
mil), `##` nos subtítulos, o primeiro parágrafo é o lead (aparece maior), `>` vira citação em destaque. `minutos` até
15, `frase` são as duas linhas do post, `curso_slug` e `aula` como no carrossel.

**A novidade** (`tipo = 'novidade'`): o que a Altta lançou (curso novo, recurso novo). Igual ao artigo, sem curso.

**Variar o tom, de propósito.** Num lote, misture: o prático (o passo, a mensagem pronta), o curioso (um número do
mercado, uma história do setor sem nome de pessoa), o leve e engraçado (a rotina de quem tem clínica, o paciente que
some, o "vou pensar"), a regra (o conselho, a Anvisa). ⛔ O humor nunca é sobre paciente, dinheiro perdido, risco
jurídico ou resultado de procedimento.

**Fontes:** procure de verdade (WebSearch e WebFetch): pesquisas do setor, conselhos, Anvisa, Meta, consultorias,
livros da biblioteca (`empresa/estrategia/biblioteca/`), as "Notas de construção" das aulas. Todo número e toda
regra com o link em `fontes` (`[{"nome", "url"}]`), aberto e lido. Post leve sem número pode ir sem fonte.

**As regras da casa:** português do Brasil com acento; ⛔ sem travessão; sem gênero de quem lê ("quem tem clínica");
sem emoji; ⛔ sem case (nome de pessoa, faturamento de alguém); sem antes e depois.

## 2. A capa de cada post

Escreva uma **cena** por post, em inglês, concreta e no tema: o objeto, o lugar, a luz, o clima. Exemplos que
saíram bons em 2026-10-02: a gaveta entreaberta com orçamentos amarrados (orçamento parado); a ampulheta com o
celular aceso ao lado (a primeira hora); a poltrona vazia perto da janela (o "vou pensar"). Post engraçado pede cena
espirituosa, mas sofisticada. ⛔ Não repita a mesma cena nem o mesmo objeto no mesmo lote.

O script já põe o piso (foto editorial premium, sem texto, sem logo, sem rosto identificável, sem antes e depois):

```bash
# pedidos.json: [{ "nome": "2026-10-06-passo", "formato": "4:5", "cena": "..." }]
node .claude/skills/feed-academy/imagens.mjs pedidos.json --ver   # custo e saldo, sem gastar
node .claude/skills/feed-academy/imagens.mjs pedidos.json         # gera, e imprime o endereço de cada uma
```

- `formato`: `4:5` no carrossel, `16:9` no artigo, na novidade e no jornal.
- `nome`: o dia e o tipo (`2026-10-06-passo`), só minúscula, número e hífen.
- Custa 4 créditos por imagem (uns US$ 0,02; o modelo é o `nano-banana-2-lite`). Saldo em 2026-10-02, depois do primeiro lote: 756.
- O original fica em `empresa/arquivos/imagens-kie/feed/` e o webp (30 a 60 KB) em `app/public/feed/`.
- ⚠️ **A imagem só existe no ar depois de publicar o app**: `git add public/feed`, commit com o autor
  `<email-da-conta>` (outro autor deixa o site parado) e `git push origin master` na pasta do app.
- Confira as imagens antes de gravar: `node .claude/skills/feed-academy/folha.mjs pedidos.json` monta a folha
  (`folha.png` ao lado do pedidos) e `folha.mjs pedidos.json nome1,nome2` mostra as suspeitas grandes. Olhe se veio
  letra, logo ou rosto. A que vier errada, gere de novo com a cena ajustada (o script sobrescreve).
- ⚠️ Lições do primeiro lote (2026-10-02, 3 de 35 refeitas): ⛔ não escreva na cena uma expressão que vira texto
  ("like an employee of the month" virou etiqueta escrita); mesa de jantar e café cheios viram rosto, peça "nobody in
  the room"; tela de notebook vira código, peça a tampa fechada ou a tela apagada.

## 3. Gravar (MCP `supabase-academy`, `execute_sql`), sempre como rascunho

A chave é `(dia, tipo)`: um carrossel de cada tipo por dia, e o artigo, a novidade e o jornal podem cair no mesmo dia.
Para popular o passado, espalhe pelos dias anteriores (o tipo pode seguir o dia da semana: segunda `passo`, terça
`instagram`, quarta `conselho`, quinta `mensagem`, sexta `numero`, sábado `pergunta`).

```sql
insert into public.feed_item (dia, tipo, titulo, telas, frase, copiar, curso_slug, aula, area, fontes, minutos, capa)
values ('2026-10-06', 'passo', $t$...$t$, $j$[{"grande": "...", "texto": "..."}]$j$::jsonb, $f$...$f$, null,
  'follow-up-de-orcamentos', '01-02', 'venda', $j$[{"nome": "...", "url": "https://..."}]$j$::jsonb, 2,
  'https://academy.sejaaltta.com.br/feed/2026-10-06-passo.webp')
on conflict (dia, tipo) do update set titulo = excluded.titulo, telas = excluded.telas, frase = excluded.frase,
  copiar = excluded.copiar, curso_slug = excluded.curso_slug, aula = excluded.aula, area = excluded.area,
  fontes = excluded.fontes, minutos = excluded.minutos, capa = excluded.capa;
```

No artigo e na novidade: `telas = '[]'` e o texto em `corpo` (`$corpo$...$corpo$`). ⛔ `publicado_em` fica nulo: a IA
escreve, uma pessoa da Altta publica. Publicar, quando o João mandar:

```sql
update public.feed_item set publicado_em = now(), revisado_por = '<email>' where dia in (...) and publicado_em is null;
```

## 4. Conferir e entregar

- **O lote em arquivo, não na mão** (2026-10-02): os agentes escrevem `{"itens":[...]}` num JSON por grupo, e
  `node .claude/skills/feed-academy/conferir.mjs lote1.json lote2.json` confere tudo (travessão, emoji, tipos,
  modelos, aulas que existem, capa em `public/feed`), escreve o `.sql` de cada lote (um insert por arquivo, já com a
  capa) e o `telas.json` para medir. Erro trava; aviso de palavra não trava.
- **Quem decide se cabe é a medida em 320px**, não a contagem de palavras: com o app buildado e o `vite preview` de
  pé, `$env:TELAS="<pasta>\telas.json"; $env:LARGURAS="320,390"; $env:TEMAS="escuro"; node scripts/percorrer-feed.mjs`
  mede cada tela no post e no story, de pé e de lado (o cabeçalho do `conferir.mjs` diz como achar a tela).
- **Gênero:** a trava acima não pega. Procure "sozinho", "cansado", "preparado" e parecidos dirigidos a quem lê
  ("para quem trabalha sozinho" saiu no primeiro lote). Sobre terceiros ("os empreendedores da pesquisa") pode.
- **Gravar sem encher a conversa:** um agente `sonnet` lê cada `.sql` e roda pelo `execute_sql`, sem editar. ⛔ O
  MCP recusa `delete` sem a confirmação do João.
- `select tipo, dia, titulo, capa is not null from feed_item order by dia desc` para ver o lote.
- Diga ao João, curto: quantos posts, de que tipos, o custo das imagens, e que estão como rascunho no Início (ele vê
  com o selo Rascunho).

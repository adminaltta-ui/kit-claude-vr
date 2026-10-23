---
name: noticias-hof
description: Escrever o jornal da semana do feed do Altta Academy (o mini jornal de HOF): procurar na internet as notícias da semana que mudam o negócio da clínica de harmonização, escrever a edição com 4 a 6 manchetes e gravar como rascunho no banco do Academy, para o João revisar e publicar. Use quando o João pedir as notícias da semana, o jornal, a edição de notícias, ou disser "/noticias-hof".
metadata:
  area: Academy
  frequencia: semanal
  resumo: "Procura as notícias da semana que mudam o negócio da clínica de harmonização e escreve a edição do jornal do feed."
  quando: "Uma vez por semana, para a edição nova do jornal."
  exemplo: "Escreve o jornal desta semana."
---

# O jornal da semana do Academy

## Para que serve

O feed do Início do Academy tem a aba **Notícias** (a migration 0101, 2026-10-02). O pedido do João: *"pegar as
principais notícias sobre HOF e ter um mini jornal dentro desse feed"*, toda semana. É **uma edição por semana**,
um post só, com as manchetes; tocar abre a edição completa.

⛔ **A IA escreve, uma pessoa da Altta publica.** A edição entra sempre como rascunho (`publicado_em` nulo). Só o
João (ou quem ele indicar) publica.

## 1. Procurar

Use a busca na internet (WebSearch e WebFetch) atrás do que saiu **nos últimos 7 dias**, no Brasil primeiro:

- **Regra:** conselhos (CFO, CFM, CFBM, COFEN, CFF), resoluções sobre HOF e publicidade em saúde, decisões da
  Justiça sobre quem pode fazer o quê.
- **Anvisa:** registro, alerta e recolhimento de produto (toxina, preenchedor, bioestimulador, fio).
- **Mercado:** pesquisas e números do setor (ISAPS, SBCP, Abihpec, consultorias), lançamento de produto,
  movimento das grandes marcas.
- **Paciente e consumo:** o que o paciente está buscando, tendência de procedimento, preço praticado.
- **Canal:** mudança do Instagram, do WhatsApp Business e da Meta que muda o jeito de a clínica atrair e atender.

**O filtro:** só entra o que muda o negócio de quem é dono de clínica de HOF (regra, risco, mercado, canal).
⛔ Técnica de aplicação não entra (isso é da Pink Class). ⛔ Fofoca, celebridade e antes e depois não entram.

**Conferir cada uma:** abrir o link, confirmar a data e o que a fonte diz. ⛔ Nada de número ou regra sem fonte
aberta e lida. Se a semana tiver menos de 4 notícias boas, a edição sai com menos (o mínimo é 2). Nunca
encher com notícia fraca.

## 2. Escrever

Para cada notícia:
- **Editoria (o chapéu):** uma ou duas palavras, como num portal de notícias: Anvisa, Lei, Conselho, Mercado,
  WhatsApp, Instagram, Pesquisa.
- **Manchete:** até 12 palavras, o fato, sem ponto de exclamação.
- **Resumo do post:** até 30 palavras, o que aconteceu.
- **Na edição completa:** um `##` com a manchete, dois ou três parágrafos curtos (o que aconteceu, e **o que muda
  para a clínica**), e a linha `Fonte: [nome](url)`.

A edição completa abre com um parágrafo curto, sem título, dizendo o que a semana trouxe.

**As regras da casa:** português do Brasil com acento; ⛔ sem travessão (vírgula, dois pontos ou parênteses no
lugar); sem gênero de quem lê ("quem tem clínica", nunca "a doutora"); sem emoji; sem nome de paciente; tom sóbrio
de jornal, sem venda e sem curso da Altta no meio.

## 3. Gravar (MCP `supabase-academy`, `execute_sql`)

| Campo | O que vai |
|---|---|
| `dia` | a segunda-feira da semana da edição (`AAAA-MM-DD`) |
| `tipo` | `'noticia'` |
| `titulo` | `Jornal da semana` seguido do período, ex.: `Jornal da semana, 28 set a 4 out` (3 a 120 letras) |
| `telas` | as manchetes, **na mesma ordem dos `##` do corpo**: `[{"chapeu": "<editoria>", "grande": "<manchete>", "texto": "<resumo>"}]`, de 2 a 8 |
| `frase` | as duas linhas do post: o assunto mais forte da semana, até 160 letras |
| `corpo` | a edição completa em markdown, de 300 a 20 mil letras |
| `fontes` | `[{"nome": "...", "url": "https://..."}]`, uma por notícia |
| `minutos` | o tempo de leitura da edição (1 a 15) |
| `capa` | a foto da manchete principal, 16:9, pela skill `feed-academy` (`imagens.mjs`, nome `<dia>-noticia`) |
| `curso_slug`, `aula`, `area` | `null` |
| `publicado_em` | `null` (rascunho) |

```sql
insert into public.feed_item (dia, tipo, titulo, telas, frase, corpo, fontes, minutos)
values ('2026-09-28', 'noticia', 'Jornal da semana, 28 set a 4 out', '[...]'::jsonb, '...', $corpo$...$corpo$, '[...]'::jsonb, 5)
on conflict (dia, tipo) do update set titulo = excluded.titulo, telas = excluded.telas, frase = excluded.frase,
  corpo = excluded.corpo, fontes = excluded.fontes, minutos = excluded.minutos;
```

Use `$corpo$...$corpo$` no texto para não brigar com aspas.

**Como a edição aparece (2026-10-02, João: "tipo portal da G1"):** no feed, a foto e a primeira manchete grandes e as
outras em lista; na página, o índice da edição, cada notícia com a editoria em cima, a caixa "O que muda para a
clínica" e a fonte. Por isso cada `##` precisa do parágrafo que começa com `O que muda para a clínica:` e da linha
`Fonte: [nome](url)`, nesses textos exatos.

## 4. Entregar

Diga ao João, curto: quantas manchetes, quais, e que a edição está como rascunho no Início (ele vê com o selo
Rascunho). Publicar, quando ele mandar:

```sql
update public.feed_item set publicado_em = now(), revisado_por = '<email de quem revisou>'
where tipo = 'noticia' and dia = '<a segunda da edição>';
```

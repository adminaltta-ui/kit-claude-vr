---
name: conteudo-mes
description: Montar o plano de conteúdo do mês do Instagram da Altta (@sejaaltta) e gravar as peças no Altta OS como rascunho para aprovar, com título, formato, data, quem faz, chamada e palavra. Lê a estratégia de conteúdo (a semana típica e o tema de cada semana) e a notícia da semana, e chama as skills de formato para as peças da semana. Use quando o pedido for plano do mês, calendário de conteúdo, "monta o conteúdo de novembro", pauta do mês, "o que vai sair esse mês no Instagram", ou "/conteudo-mes".
metadata:
  area: Estratégia
  frequencia: quando-precisar
  resumo: "Monta o plano do mês do @sejaaltta, com as 20 peças, e grava como rascunho no OS para aprovar."
  quando: "Uma vez por mês, antes do mês começar, e quando a notícia quente mexer na semana."
  exemplo: "Monta o plano de conteúdo de novembro."
---

# O plano do mês do @sejaaltta

O plano é **a pauta**: as 20 peças do mês com dia, formato, gancho e chamada, gravadas na página de Conteúdo do
OS (`/marketing/conteudo`, a tabela `mkt_peca`) para o João e o Arthur aprovarem. A peça inteira (as
lâminas, o roteiro) sai depois, pela skill do formato: `conteudo-carrossel`, `conteudo-post` e
`conteudo-roteiro`.

⚠️ Por enquanto é **só o perfil da Altta**. Os perfis do João e do Arthur voltam numa fase própria.

## O que ler

1. **O posicionamento e o tema das semanas,** que a página de Conteúdo guarda no banco (as abas
   Posicionamento e Mês, `empresa/plataformas/os/PROMPT-CONTEUDO.md`, parte 1):
   `select frase, palavras, semana, formatos from mkt_posicionamento where perfil_id = (select id from mkt_perfil where nome = 'Altta');`
   e `select inicio, tema, curso, palavra from mkt_semana where inicio >= '<início do mês>' order by inicio;`
   Se o mês ainda não tem semanas, use a `empresa/estrategia/conteudo/estrategia.md`, seção 9 (a semana típica
   e o mês; os temas do mês seguinte estão no fim dela) e proponha as quatro ao João.
2. **As palavras ligadas:** `select nome, estado, palavras from mkt_automacao;`. ⚠️ Peça com palavra só pode
   ir ao ar se a automação da palavra estiver ligada e o material existir. Se não, avise no fim.
3. **A notícia:** o jornal da semana do Academy (`feed_item` com `tipo = 'noticia'`, pelo MCP
   `supabase-academy`) e a busca na internet. A notícia quente passa na frente de qualquer dia.
4. **O que já existe no período,** para não duplicar:
   `select publicar_em, titulo, formato, etapa from mkt_peca where publicar_em >= '<início>' and publicar_em < '<fim>' order by 1;`
5. **O resultado do mês anterior,** quando houver: o que passou 10 vezes a mediana do perfil vira molde.

## A semana típica

| Dia | Peça | Quem faz | Chamada |
|---|---|---|---|
| Segunda | C2, carrossel educativo | Claude | palavra |
| Terça | V1 "A conta" ou V3 tela dividida | João grava | palavra |
| Quarta | **A prova:** P1 depoimento, P2 case, P3 WhatsApp ou P4 a entrega | cliente, equipe ou Claude | nenhuma |
| Quinta | V2 "O que mudou", V4 esquete ou V5 lista | Arthur grava | palavra, ou nenhuma no esquete |
| Sábado | semanas 1 e 3: C1 editorial (ou F1 frase, sem notícia boa) · semana 2: P5 ou P6 · semana 4: C3 convite | Claude | pergunta, nenhuma ou o convite |

Um tema por semana, ligado a um curso e a uma palavra. **A quarta nunca fica vazia:** sem material novo, a
peça entra como ideia com o recado do que falta, e o Claude faz um P3 com mensagem autorizada.

## Como gravar no OS

Pelo MCP `supabase-atlas`. As regras dos campos:

- `formato`: `carrossel`, `post` ou `reel`.
- `etapa`: `ideia` na pauta; `roteiro` quando o roteiro inteiro está no campo (vídeo pronto para gravar);
  `aprovacao` quando a arte está pronta. ⛔ Nunca `agendado` nem `publicado`: isso é do João.
- `chamada`: `direct` quando tem palavra (o comentário vira direct), `link` só no convite, `null` sem chamada.
  ⚠️ Até a parte 1 da página, o aprovar da tela recusa peça sem chamada.
- `responsavel_id`: **só quando a peça já tem o que fazer** (o roteiro pronto para gravar). Toda peça com data
  vira a tarefa "Publicar: ..." do dono; na ideia, ela fica sem dono. Pelo MCP não sai aviso no celular.
- `recado`: `conteudo-mes <AAAA-MM>`, para achar e desfazer o plano inteiro. Na ideia que depende de
  material, o recado diz o que falta.
- `publicar_em`: o dia, às 18h de Brasília (`'2026-11-02 18:00-03'`). 🟡 O horário é hipótese; muda quando a
  leitura do perfil mostrar outro.
- `roteiro`: na ideia, a pauta em poucas linhas (formato, linha, quem faz, gancho, o que entra, a palavra e o
  material). Na peça pronta, o roteiro inteiro ou a pasta das artes.

```sql
insert into public.mkt_peca (titulo, perfil_id, formato, etapa, publicar_em, chamada, palavra, roteiro, legenda, responsavel_id, recado, ordem)
select v.titulo, (select id from public.mkt_perfil where nome = 'Altta'), v.formato, v.etapa, v.publicar_em::timestamptz,
       v.chamada, v.palavra, v.roteiro, v.legenda,
       (select id from public.equipe where nome ilike v.quem || '%' and ativo), 'conteudo-mes 2026-11', v.ordem
from (values
  ('Título da peça', 'carrossel', 'ideia', '2026-11-02 18:00-03', 'direct', 'EQUIPE', $r$a pauta$r$, '', null, 1)
) as v(titulo, formato, etapa, publicar_em, chamada, palavra, roteiro, legenda, quem, ordem);
```

`quem` é `'João'` ou `'Arthur'` (ou `null`). Para atualizar uma peça quando a skill do formato terminar:
`update mkt_peca set etapa = 'aprovacao', legenda = $l$...$l$, roteiro = $r$...$r$ where id = '<id>';`
Para desfazer um plano: `delete from mkt_peca where recado like 'conteudo-mes 2026-11%';` (as tarefas
"Publicar" saem junto).

## Depois de gravar

Mostre ao João a lista curta, uma linha por peça: o dia, o formato, o título e quem faz. E diga o que falta
dele: material para as quartas, os números autorizados, a aprovação.

## As regras

As mesmas das skills de formato: a clínica é a heroína, a tese na primeira frase, sem travessão, sem emoji,
sem a frase da "proporção", sem "diagnóstico" como prêmio, sem "link na bio" como chamada, sem gênero, todo
número verdadeiro. Os títulos da pauta já são os ganchos (a seção 7 da estratégia).

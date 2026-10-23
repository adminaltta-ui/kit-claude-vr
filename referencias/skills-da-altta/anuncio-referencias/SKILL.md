---
name: anuncio-referencias
description: Varrer a Biblioteca de Anúncios da Meta (no Chrome conectado) e o orgânico que o Altta OS já lê do Instagram (concorrentes, educação de negócio e perfis virais) atrás do que está vendendo para o profissional de HOF, ler os sinais de vencedor, etiquetar cada achado pela matriz (persona, ângulo, estágio, formato, gancho, quem aparece) e guardar as fichas de referência. Use quando o pedido for "pesquisa os anúncios dos concorrentes", "o que está rodando no nicho", "varre a Biblioteca de Anúncios", "acha referências para a leva", antes de uma leva de criativos (criativo-leva), ou quando disserem "/anuncio-referencias".
metadata:
  area: Estratégia
  frequencia: semanal
  resumo: "Varre a Biblioteca de Anúncios e o orgânico do nicho, lê o sinal de vencedor e guarda as fichas de referência etiquetadas."
  quando: "Antes de cada leva de criativos, e uma vez por semana para manter o arquivo vivo."
  exemplo: "Varre a Biblioteca de Anúncios atrás de anúncio de curso para clínica de HOF."
---

# As referências de anúncio da Altta

Um arquivo vivo que a `criativo-leva` lê antes de escrever: **`empresa/arquivos/anuncios/referencias.md`**.
Esta skill cria o arquivo na primeira vez e acrescenta uma varredura nova no topo a cada rodada.

**Leia antes, da arquitetura** (`empresa/estrategia/biblioteca/ARQUITETURA-DO-MARKETING.md`): a 3.1.3 (a pesquisa
de mercado), a ficha de referência no fim da 3.1.4, a colisão 4.5 (o sinal de vencedor) e a 1.5 (o que a Altta
não usa: modelar a estrutura é estudo, copiar é obra alheia).

**A regra que manda:** da referência se tira **o ângulo e a estrutura**, nunca o anúncio. Nenhuma frase, roteiro
ou imagem de terceiro entra numa peça da Altta.

## O passo a passo

1. **O assunto da varredura.** O que a leva vai vender (um curso, o pacote, o Raio-X) e a dor dele. Sem pedido,
   use as listas abaixo inteiras.
2. **O orgânico primeiro** (o público antes do concorrente: Barry Hott, `P-criativo` §6). A consulta do OS abaixo
   devolve os posts que foram muito acima da média do próprio perfil. Anote os 5 a 10 mais fortes.
3. **A Biblioteca de Anúncios, no Chrome.** Carregue as ferramentas do Chrome numa chamada só (skill
   `anthropic-skills:chrome-browser`), chame `tabs_context_mcp` e abra uma aba nova. Para cada busca, navegue
   para o endereço abaixo e rode o extrator. 6 a 10 buscas por varredura bastam (`lt-quiz 00:22:08`).
4. **Separar os dois montes.** Muito resultado é clínica vendendo procedimento para paciente: isso não é
   referência de anúncio da Altta. Fica só o que vende **para o profissional** (curso, mentoria, imersão, pós,
   software, agência). O que vende para paciente só entra se o pedido for referência para as aulas de anúncio
   da clínica (arquitetura 3.4.10).
5. **Ler o sinal de vencedor** (4.5). O mais forte é **o mesmo corpo rodando há tempo com visuais ou rostos
   diferentes**. Depois: 30 dias ou mais no ar (o nicho de HOF é estável, o tempo vale), 7 ou mais cópias do
   mesmo texto, o mesmo anunciante em várias páginas. Muitos anúncios ativos, sozinho, não prova nada.
6. **Abrir os 5 a 8 mais fortes.** Entre na página do anunciante (a tela geral esconde duplicações:
   `anthony 00:41:00`; o endereço está abaixo). Tire **uma** captura em escala 0,5 do criativo para descrever o
   gancho visual (se falhar, tente uma vez mais e siga sem ela). Leia o texto inteiro. Procure a mesma sequência de
   argumentos em anunciantes diferentes: o que é comum aos dois é o que funciona (`campolina 00:24:08`).
   ⚠️ A Biblioteca não mostra comentários nem deixa ouvir o vídeo daqui: o gancho falado entra com 🟡 (deduzido do
   texto e da captura), a não ser que a legenda apareça na tela.
7. **Escrever as fichas** no modelo abaixo e acrescentar a varredura no topo do arquivo, com a data.
8. **Fechar a aba** que abriu e mostrar ao João em cinco linhas: quantos anúncios lidos, os três ângulos que mais
   se repetem entre os vencedores, o formato que domina e o buraco (o que ninguém está dizendo).

## As listas de busca (arquitetura 3.1.3)

Combine **duas ou três palavras**, sem aspas: uma de mercado com uma de nicho, de oferta ou de objeção. Quatro
palavras costumam voltar vazio.
- **Mercado:** harmonização, HOF, estética, biomedicina estética, odontologia, clínica.
- **Nicho:** agenda, paciente, faturamento, vender, preço, WhatsApp, marketing.
- **Oferta:** mentoria, curso, imersão, método, aula, pós.
- **Objeção e dor:** vou pensar, orçamento, objeção, follow-up, agenda vazia, paciente sumiu.
- ⚠️ "Mentoria" com "harmonização" traz mentoria de técnica de injeção. Para negócio, some "marketing",
  "vendas", "agenda" ou "faturamento".
- **Os concorrentes:** os nomes da `P-mercado` §3, blocos A (mentorias de HOF), B (gestão para médico e
  dentista), C (agências) e D (softwares de clínica), em
  `empresa/estrategia/biblioteca/fontes/mercado-e-setor/pesquisa-quem-vende-para-a-clinica-de-hof.md`. O nome
  de um gancho de concorrente também puxa todos os anúncios dele.
- **Os vizinhos** (o nicho de HOF quase não tem VSL): marketing para nutricionista, mentoria para
  fisioterapeuta, marketing para psicólogo, marketing médico, marketing odontológico.

## A busca e o extrator

O endereço (troque `<termo>`; `media_type=video` filtra só vídeo):

```text
https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=BR&q=<termo>&search_type=keyword_unordered&media_type=all&sort_data[mode]=total_impressions&sort_data[direction]=desc
```

O extrator, no `javascript_tool`: lê cada cartão e junta as cópias do mesmo texto do mesmo anunciante. Três
limites do Chrome que ele já respeita: **não rola a página** (a espera estoura o tempo com a aba em segundo
plano; os 20 a 28 cartões da primeira tela bastam), **não devolve endereço** (retorno com `?id=` é bloqueado:
monte o link fora, `https://www.facebook.com/ads/library/?id=<id>`) e **devolve linhas curtas** (a saída é
cortada perto de 1.000 caracteres). Para ler o texto inteiro de um anúncio, rode de novo filtrando pelo id.

```js
const M = {jan:0,fev:1,mar:2,abr:3,mai:4,jun:5,jul:6,ago:7,set:8,out:9,nov:10,dez:11};
const cartoes = document.body.innerText.split('Identificação da biblioteca:').slice(1).map(c => {
  const id = (c.match(/^\s*(\d+)/) || [])[1];
  const d = c.match(/Veiculação iniciada em (\d+) de (\w{3})\w* de (\d{4})/);
  const ini = d ? new Date(+d[3], M[d[2].toLowerCase()], +d[1]) : null;
  const v = c.match(/(\d+) anúncios usam/);
  const l = c.split('\n'), p = l.indexOf('Patrocinado');
  return { id, inicio: ini && ini.toISOString().slice(0, 10), dias: ini ? Math.round((Date.now() - ini) / 864e5) : 0,
    versoes: v ? +v[1] : 1, anunciante: p > 0 ? l[p - 1].trim() : '', texto: l.slice(p + 1).join(' ').replace(/\s+/g, ' ').slice(0, 220) };
}).filter(c => c.id);
const grupos = {};
for (const c of cartoes) {
  const k = c.anunciante + '|' + c.texto.slice(0, 80);
  const g = grupos[k] ??= { ...c, copias: 0 };
  g.copias += c.versoes; g.dias = Math.max(g.dias, c.dias);
}
Object.values(grupos).sort((a, b) => b.dias * b.copias - a.dias * a.copias).slice(0, 12)
  .map(g => [g.id, g.dias + 'd', g.copias + 'x', g.anunciante.slice(0, 24), g.texto.slice(0, 40)].join(' | ')).join('\n')
```

O texto inteiro de um anúncio (troque `<id>`):

```js
document.body.innerText.split('Identificação da biblioteca:').find(c => c.trim().startsWith('<id>'))?.replace(/\s+/g, ' ').slice(0, 900)
```

**Entrar na página do anunciante:** o endereço `https://www.facebook.com/ads/library/?id=<id>` já abre a página
dele, com o anúncio numa janela por cima. Feche a janela e rode o extrator ali: aparecem todas as versões.

Se o extrator voltar vazio, a página pode estar em inglês ("Library ID", "Started running on") ou ainda
carregando: espere e rode de novo uma vez. Se falhar duas vezes, pare e avise o João (regra do Chrome).

## O orgânico (MCP `supabase-atlas`, o Altta OS)

O OS lê todo dia os perfis do estudo de conteúdo (grupos `concorrentes`, `educacao_negocio`, `virais_negocio`).
O post que foi muito acima da média do próprio perfil é o sinal:

```sql
with p as (
  select s.arroba, e.grupo, s.tipo, coalesce(s.views, 0) as views,
         coalesce(s.curtidas, 0) + 3 * coalesce(s.comentarios, 0) as eng, s.em, s.link,
         left(regexp_replace(s.legenda, '\s+', ' ', 'g'), 160) as legenda
  from mkt_estudo_post s join mkt_estudo_perfil e on e.arroba = s.arroba
  where e.grupo in ('concorrentes', 'educacao_negocio'))  -- 'virais_negocio' só quando a pergunta é formato
select arroba, grupo, tipo, views, eng,
       round(eng / nullif(avg(eng) over (partition by arroba), 0), 1) as vezes_a_media,
       em::date, link, legenda
from p
where em >= now() - interval '45 days' and eng >= 200
order by vezes_a_media desc nulls last limit 15;
```

Formato se pesquisa no que o público consome para se distrair, não no assunto do produto (`matheus 01:46:59`):
o grupo `virais_negocio` é para formato (troque o filtro por `e.grupo = 'virais_negocio'` e ignore o que for
política, luto ou fora do mundo do negócio), e os outros dois são para ângulo.

## A ficha de referência (arquitetura 3.1.4)

```markdown
### <anunciante> · <o ângulo em poucas palavras>
- Link: <link> · visto em AAAA-MM-DD · no ar desde AAAA-MM-DD (<dias> dias) · <cópias> cópias
- Vende: <o produto e o preço, se aparecer> · para: <o profissional que ele chama>
- Formato: <estático de texto, carta, fundador falando, tela, depoimento, UGC, aula>
- Persona: <qual das personas do dossiê, pelo bloqueio de compra>
- Ângulo: <a família: problema, contrário, prova, história, novidade, oferta>
- Estágio: <o que a pessoa já sabe: do problema, da solução, do produto>
- Gancho visual: <o que se vê no primeiro segundo> · Gancho falado ou escrito: <a ideia, com as minhas palavras>
- Quem aparece: <o dono, um aluno, ninguém, uma tela>
- Estrutura em movimentos: <1. abre com ... 2. ... 3. fecha com ...>
- A frase que faz parar: <a ideia, parafraseada, nunca copiada>
- Sinal de vencedor: <forte, médio ou fraco, e por quê>
- O que não atravessa: <o que fere a seção 1: promessa de renda, escassez falsa, case com número>
```

## O arquivo

```markdown
# Referências de anúncio da Altta

## Varredura de AAAA-MM-DD · <assunto>
<as cinco linhas para o João>
<as fichas, do sinal mais forte para o mais fraco>
<a lista curta do orgânico: @, o link, quantas vezes a média, o formato e o ângulo em uma linha>
```

**O que nunca entra:** o texto inteiro de anúncio de terceiro (só a ideia e a estrutura), dado pessoal de quem
comentou, e perfil falso para pesquisar (a conta é sempre real: termos da Meta, `amanda` §5).

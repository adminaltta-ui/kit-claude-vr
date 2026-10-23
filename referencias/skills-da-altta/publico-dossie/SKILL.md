---
name: publico-dossie
description: Montar e revisar o dossiê do público da Altta (o profissional de HOF que compra o Academy), com a linguagem literal dele, a partir do dado próprio (as conversas do Comercial, do Suporte e do Instagram no Altta OS, os grupos dos clientes, o Raio-X e as perguntas da Íris no Academy) e dos comentários do YouTube do nicho. Use quando o pedido for "atualiza o dossiê", "revisão do público da semana", "o que o público está falando", "quais as dores e as frases do público", antes de uma leva de criativos (criativo-leva), de uma VSL ou de uma página, ou quando disserem "/publico-dossie".
metadata:
  area: Estratégia
  frequencia: semanal
  resumo: "Monta e revisa o dossiê do público com as frases reais das conversas, do Raio-X e dos comentários, sem nome de ninguém."
  quando: "Toda semana, e antes de qualquer leva de criativos, VSL ou página de vendas."
  exemplo: "Atualiza o dossiê do público com o que chegou nesta semana."
---

# O dossiê do público da Altta

Um arquivo vivo, que toda peça de marketing lê antes de ser escrita:
**`empresa/arquivos/anuncios/dossie-do-publico.md`**. Esta skill cria o arquivo na primeira vez e o revisa
toda semana.

**Leia antes, da arquitetura** (`empresa/estrategia/biblioteca/ARQUITETURA-DO-MARKETING.md`): a seção 3.1
(pesquisa e público), do título `### 3.1` ao `### 3.2`. O modelo do dossiê é a 3.1.4.

**A regra que manda em tudo:** a frase do público é colhida, nunca escrita. A IA organiza, resume e conta; ela
não inventa a fala de ninguém (arquitetura 1.4 e 3.1.6). Frase sem fonte não entra.

## As fontes, da mais forte para a mais fraca

1. **O dado próprio** (o mais forte da hierarquia): as consultas abaixo, no OS e no Academy.
2. **Os comentários do YouTube do nicho**, colhidos pelo `yt-dlp` (passo 4).
3. **A base da pesquisa** (só na primeira montagem, e para preencher o que o dado ainda não cobre): a
   `P-mercado` §4.6 (a linguagem do público), §4.7 (a sofisticação), §5.2 (os ângulos livres) e §5.3 (o que está
   gasto), em `empresa/estrategia/biblioteca/fontes/mercado-e-setor/pesquisa-quem-vende-para-a-clinica-de-hof.md`,
   e as personas da tabela da arquitetura 3.1.4. Tudo isso entra com 🟡, até o dado confirmar.

## O passo a passo

1. **Abrir o dossiê e ler a data da última revisão** (a linha do topo). Essa data é o `:desde` das consultas.
   Na primeira montagem, sem data, puxe tudo.
2. **Rodar as consultas do OS** com o MCP `supabase-atlas` (o Altta OS).
3. **Rodar as consultas do Academy** com o MCP `supabase-academy`.
4. **Colher os comentários do YouTube** (uma vez por mês basta, ou quando o dado próprio vier magro).
5. **Separar o joio:** fica fora o que não é o público falando da própria clínica (propaganda de clínica, pedido de
   emprego, conversa de edição de vídeo, mensagem automática, "ok", "obrigado"), e a mensagem da própria equipe.
6. **Classificar cada frase que ficou** nas cinco colunas e nos blocos do modelo, com a origem e a data.
7. **Reescrever o dossiê** no modelo abaixo: o que é novo entra, o que o dado confirmou perde o 🟡, e o que foi
   testado e não funcionou desce para "Testado e não funcionou" (tirar o que não funcionou é parte da revisão:
   `serraglio 00:29:25`).
8. **Mostrar ao João o resumo da semana** em cinco linhas no máximo: o que mudou, a frase mais forte, e o ângulo
   que ela sugere para a próxima leva.

## As consultas

### No OS (MCP `supabase-atlas`)

```sql
-- O que o público escreveu: um a um (o "outro" é o Direct do Instagram) e nos grupos dos clientes.
-- A data é a enviada_em: a criado_em do Direct é a do dia em que o histórico foi importado.
select n.papel::text as numero, c.grupo, m.enviada_em::date as dia, m.texto
from mensagem m
join conversa c on c.id = m.conversa_id
join numero n on n.id = c.numero_id
where m.direcao = 'entrada' and length(m.texto) >= 30
  and n.papel::text in ('comercial', 'suporte', 'oficial', 'outro')
  and m.enviada_em >= '<desde>'
order by m.enviada_em desc limit 500;

-- Quem chega e quem compra (o perfil se refaz com quem fecha: troncoso 00:46:22)
select origem, count(*) as leads, count(*) filter (where cliente_id is not null) as viraram_cliente
from comercial_lead group by 1 order by 2 desc;
```

### No Academy (MCP `supabase-academy`)

```sql
-- O Raio-X: as escolhas, contadas, e as respostas abertas (tira a conta de teste do João)
select k as pergunta, x.v as resposta, count(*)
from raio_x r
cross join lateral jsonb_each(r.respostas) e(k, val)
cross join lateral jsonb_array_elements_text(
  case jsonb_typeof(val) when 'array' then val else jsonb_build_array(val) end) x(v)
where r.concluido_em is not null
  and not exists (select 1 from auth.users u where u.id = r.aluno_id and u.email = '<seu-email>')
  and k not in ('nome_clinica', 'cidade', 'seguidores', 'frase_instagram')
group by 1, 2 order by 1, 3 desc;

-- O que perguntam à Íris e no feed
select m.criada_em::date as dia, m.texto from iris_chat_mensagem m
where m.papel = 'user' and m.criada_em >= '<desde>'
  and not exists (select 1 from auth.users u where u.id = m.aluno_id and u.email = '<seu-email>')
order by m.criada_em desc limit 200;
select criada_em::date as dia, texto from feed_pergunta
where criada_em >= '<desde>' order by criada_em desc;
```

O Raio-X tem dois tipos de resposta: a de escolha (um código, como `agenda_vazia` ou `por_onde_comecar`), que
entra **contada** no bloco de personas e de objeções, e a aberta (`estado_futuro`, `algo_mais`), que entra
**como frase literal**. As respostas abertas são a fonte mais rica que a Altta tem: leia todas. Fora das
personas, as que mais dizem são as do retorno e da recorrência (`lembrete_toxina`, `recorrencia_oferta`,
`pacientes_antigos`), as do WhatsApp (`quem_atende`, `tempo_resposta`, `preco_de_cara`) e as da venda
(`vou_pensar`, `objecao_comum`, `roteiro_avaliacao`).

⚠️ A chave `conselho` **não é a profissão**: é "você sabe o que o seu conselho permite publicar?" (sim ou não).
O Raio-X não pergunta a profissão, então o bloco "Profissões e conselhos" fica com 🔴 até o dado existir.

### No YouTube (o `yt-dlp`)

Numa pasta de trabalho fora do git (o scratchpad da sessão):

```bash
# 1. Achar os vídeos do problema e da solução (10 a 20 vídeos: csaba 00:42:21). O ytsearchdate traz os
#    recentes (a arquitetura pede o último ano); o ytsearch traz os mais relevantes, que podem ser antigos.
yt-dlp "ytsearchdate15:<termo>" --flat-playlist --print "%(id)s|%(view_count)s|%(upload_date)s|%(title)s"
# 2. Baixar os comentários mais curtidos de cada vídeo escolhido
yt-dlp "https://www.youtube.com/watch?v=<id>" --skip-download --write-comments \
  --extractor-args "youtube:max_comments=40,all,0;comment_sort=top" -o "%(id)s.%(ext)s"
```

Os comentários ficam em `<id>.info.json`, na chave `comments` (`text`, `like_count`). Leia de 3 a 5 dos mais
curtidos por vídeo. Termos que funcionam: "harmonização facial agenda vazia", "marketing para clínica de
estética", "como cobrar harmonização", "paciente pergunta o preço e some", "biomedicina estética começar".
Muitos pedidos seguidos dão erro 429: espere uns segundos e repita.

## LGPD: o que nunca entra no dossiê

- Nome, telefone, @, e-mail, nome de clínica, cidade pequena que identifique, valor que identifique alguém.
- A frase entra com a **origem genérica**: "lead do Comercial", "cliente, grupo", "Raio-X", "Direct do
  Instagram", "comentário do YouTube". Se a frase contar algo íntimo (saúde, família, dinheiro pessoal),
  resuma a dor em vez de citar a frase inteira.
- O dossiê é de uso interno. Frase de cliente nunca vira depoimento de anúncio sem autorização escrita
  (marketing-travas, lista A).

## O modelo do arquivo

```markdown
# Dossiê do público da Altta

> Última revisão: AAAA-MM-DD · Fontes desta revisão: <as fontes e quantas frases de cada>

## O que mudou nesta revisão
<três a cinco linhas>

## Personas pelo bloqueio de compra
| Persona | Dor concreta | Bloqueio de compra | Sinal no dado |
(parte da tabela da arquitetura 3.1.4; a coluna "sinal no dado" diz quantas frases ou respostas do Raio-X
apontam para ela; persona sem sinal fica com 🟡)

## Profissões e conselhos
<de quem vem o dado: dentista, biomédico, médico, enfermeiro, farmacêutico; o conselho manda na peça de exemplo>

## As cinco colunas
### Como escrevem o problema
### Que palavras usam
### Que soluções já tentaram
### Do que reclamam
### O que mais querem
(em cada uma: "frase literal" · origem · data)

## Desejo principal e desejo inconsciente
## Crenças (sobre si, sobre outras soluções, sobre quem vende)
## O que já tentou e deu errado
## Consciência e sofisticação, por desejo
## O que os concorrentes prometem, e o que está gasto
## Ângulos livres (os oito da arquitetura 3.4.9, com o sinal que o dado deu a cada um)
## Os números do Raio-X (as escolhas contadas, com o total de respostas)
## Testado e não funcionou
<o ângulo, a leva, a data e o número que derrubou>
```

**Selo em tudo:** 🟢 dado da Altta · 📚 biblioteca · 🟡 hipótese · 🔴 a levantar. Amostra pequena se diz
pequena: "3 respostas do Raio-X" não é tendência, é sinal.

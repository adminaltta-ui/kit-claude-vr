---
name: sessao-tatica
description: Planejar as Sessões Táticas do Altta Academy (as aulas ao vivo, em grupo, do pacote), escrever a aula de cada uma em HTML no molde aprovado e subir tudo direto para a página Sessão Tática do Altta OS, no banco. Use quando o João pedir para planejar as sessões do mês ou da semana, gerar ou reescrever a aula de uma Sessão Tática, subir material de sessão, ou disser "/sessao-tatica".
metadata:
  area: Academy
  frequencia: semanal
  resumo: "Planeja as Sessões Táticas do Academy, escreve a aula de cada uma e sobe tudo para a página da Sessão Tática no OS."
  quando: "Ao planejar as aulas ao vivo do mês ou da semana."
  exemplo: "Planeja as sessões táticas de novembro."
---

# Sessão Tática: planejar, escrever e subir

## Para que esta skill existe

A página `/academy/sessao` do OS é a mesa de planejamento das aulas ao vivo (a migration 0082 do OS,
2026-09-29). O pedido do João: *"planejar as sessões táticas do meu mês, da semana, de uma forma
estratégica"*, com *"os materiais bem organizados que a gente vai gerar com inteligência artificial,
com você, Claude, para jogar tudo aqui dentro"*.

⭐ **Quem planeja e sobe é o Claude, nas sessões, direto no banco.** ⛔ Não existe IA dentro da
plataforma (a regra "processos se ajustam com o Claude"). A pessoa da Altta revisa e dá a aula.

São três trabalhos, e o João diz qual quer:

1. **Planejar**: o mês ou a semana, uma linha por sessão.
2. **Escrever a aula**: o HTML de uma sessão.
3. **Subir**: gravar a aula na sessão, no banco do OS.

---

## Onde as coisas moram

| O quê | Onde |
|---|---|
| As sessões | `public.sessao_tatica` no **OS** (MCP `supabase-atlas`): `tema`, `inicio` (nulo = sem data), `duracao_min`, `estado` (`planejada`, `pronta`, `dada`), `curso` (o slug), `objetivo`, `roteiro`, `link`, `gravacao_id` |
| Os materiais | `public.sessao_material` no OS: o HTML do Claude vai na coluna `conteudo` (`tipo = 'html'`, `caminho` nulo); PDF e arquivos que a equipe sobe pela tela vão para o balde `sessoes` |
| O arquivo-fonte da aula | `empresa/plataformas/academy/sessoes-taticas/<AAAA-MM-DD>-<slug>.html` (sem data: `sem-data-<slug>.html`). ⭐ O arquivo é a fonte; o banco é a cópia publicada. Mudou a aula, sobe de novo |
| O molde aprovado | `empresa/comercial/materiais/aula-quebra-de-objecoes.html` (a aula que o João deu em 2026-09-29 e aprovou) |
| O catálogo de cursos | `empresa/plataformas/academy/PLANO-ESCOLA-DE-CURSOS.md` e `select * from ponte.cursos()` no **Academy** |
| O que a turma está vivendo | no Academy (MCP `supabase-academy`), **só leitura**: `ponte.cursos()` (onde os alunos estão) e `ponte.entregas()` (os relatórios da semana) |

⛔ **No Academy, só `select`**, fora as duas funções da ponte da seção 4 (a agenda e a gravação). ⛔ Nunca a tabela `lead` (é a lista de pacientes dos alunos) nem
nome de aluno dentro de aula. ⛔ Nunca a chave secreta de projeto nenhum.

---

## 1. Planejar

**Antes de propor, leia:**
- as sessões que já existem (`select tema, inicio, estado, curso from sessao_tatica order by inicio nulls last`),
  para não repetir tema e para a sequência continuar de onde parou;
- onde a turma está (`ponte.cursos()`: o curso com mais gente estudando) e o que as Entregas da última
  semana mostram (`ponte.entregas()`: onde o número travou: lead, agendamento ou fechamento);
- a biblioteca pela skill `biblioteca-decide`, quando o tema pedir decisão de conteúdo.

**As regras do plano:**
- **Uma sessão, um tema, uma ação.** O aluno sai com uma coisa para fazer amanhã na clínica.
- **Sequência com lógica:** do que trava primeiro para o que vem depois (demanda, depois atendimento,
  depois fechamento, depois retenção), e ligada ao curso em que a turma está.
- **Cada sessão aponta um curso** (`curso` = o slug) quando existir um curso do assunto: a sessão
  aprofunda ao vivo o que o curso ensina gravado.
- 🔁 **O dia fixo, desde 2026-10-06: toda TERÇA, às 19h** (João: a de 08/10 foi quinta por exceção,
  *"as outras vão ser terça"*; *"vamos manter 19h mesmo"*). Fora disso, data só se ele disser. ⛔ Nunca
  invente outro dia nem hora.
- 🚨 **Tema tem que ser GANCHO, não nome de aula** (João, 2026-10-06, reprovando "O impulsionamento que
  vira conversa no WhatsApp": *"temas muito baselines"*, *"precisam ser mais virais"*). Escreva o tema
  como o título de um reel que para o dedo: conta em reais, frase contra o senso comum, pergunta com
  número. A fonte é o estudo de conteúdo (`empresa/estrategia/conteudo/estrategia.md`, a seção 7, os
  ganchos, e o achado 10, os temas que mais puxam quem tem clínica). Aprovados assim: "O dinheiro que a
  sua clínica perde no WhatsApp", "Baixar o preço não enche a agenda", "Seu Instagram dá curtida, não dá
  paciente", "Black Friday na estética: lotar novembro sem queimar o preço".
- Mostre o plano ao João numa lista curta (data, tema, curso, a ação), e **só grave depois do ok**.

**Gravar o plano** (uma linha por sessão; `inicio` com o fuso de Brasília):

```sql
insert into public.sessao_tatica (tema, inicio, duracao_min, curso, objetivo, roteiro)
values
  ('O follow-up que não parece cobrança', '2026-10-07 20:00-03', 60, 'follow-up',
   'Sair com a sequência de 3 mensagens pronta para usar amanhã.',
   '1. Por que o paciente some\n2. A régua de 3 toques\n3. Simulador ao vivo\n4. A tarefa');
```

O `roteiro` usa `\n` entre as linhas (vira linha na tela). Tudo com acento e ⛔ sem travessão.

---

## 2. Escrever a aula

**Um arquivo HTML só**, que abre sozinho (CSS e JS dentro dele), no molde da aula de quebra de
objeções. Leia o molde antes da primeira aula da sessão de trabalho.

**A forma, que não muda:**
- **Visual da marca:** fundo floresta `#10241C`, superfície pinho `#1C4034`, texto pergaminho
  `#EDE6D8`, ouro `#C9A227` só como acento (nunca área), oxblood `#7A3325` para o "não". Fraunces
  (peso 200) nos títulos grandes, Inter no texto, pelo Google Fonts. Com o botão de tema claro.
- **Blocos em `<section id="..." data-nome="...">`**, cada um com número e título. A ordem: a
  abertura (o tema e o roteiro da aula em chips), o conceito, e depois os blocos do assunto, fechando
  com **o limite** (onde a técnica para, o crivo ético) e **a tarefa da semana**.
- 🚨 **Interação a cada dois ou três blocos**, e é ela que segura a turma ao vivo: o jogo de
  classificar, o simulador de WhatsApp com cenários, o medidor, a régua que se arrasta, as cartas que
  viram. ⛔ Aula só de texto não passa.
- **Cabe no celular** (320px sem rolar para o lado) e no telão.
- Ela abre na página do OS numa moldura isolada: `localStorage` funciona (a página põe uma memória
  de mentira), mas ⛔ nada de chamar API, abrir login ou depender de outro arquivo.

**A voz:**
- Português do Brasil com acento, informal, com humor leve, calibrado pelo assunto.
- ⛔ **Sem travessão** (`—` nem `-` como pontuação). ⛔ Sem emoji. ⛔ Sem gênero ("quem atende", não
  "a secretária").
- ⛔ **Nenhum case**: sem nome de cliente, sem faturamento de alguém. A lição sai do caso, a pessoa fica.
- Frase de exemplo é a frase que a clínica fala de verdade no WhatsApp, curta.

**Conferir antes de subir** (no Git Bash):

```bash
f=empresa/plataformas/academy/sessoes-taticas/<arquivo>.html
grep -nE " — | – |—" "$f"          # travessão: tem que sair vazio
grep -c "<section" "$f"             # os blocos
grep -c "\$aula\$" "$f"             # tem que ser 0 (é a aspa do SQL de subir)
wc -c "$f"                          # até 3 MB
```

---

## 3. Subir

🚨 **Arquivo que já existe sobe em PEDAÇOS de 8 mil caracteres, cada um conferido pelo `md5`.**
⛔ Nunca pelo `Read` (ele corta linha acima de 2 mil caracteres) e ⛔ nunca o arquivo inteiro de uma vez.
Foi assim que a aula de quebra de objeções subiu em 2026-09-30 (62 mil caracteres, 8 pedaços):
1. Normalize o arquivo para uma cópia no scratchpad (`.replace('\r','')`) e calcule em Python o `md5`
   de cada pedaço `s[i:i+8000]` e o do arquivo inteiro.
2. Imprima um pedaço por vez (`sys.stdout.write`, com `repr` das pontas) e mande pelo SQL: o primeiro
   num `insert`, os outros em `update ... set conteudo = conteudo || $aula$...$aula$`, sempre com
   `returning md5(substr(conteudo, <início+1>, 8000)) = '<md5 do pedaço>'`.
3. ⚠️ **A saída do terminal engole o ESPAÇO no fim do pedaço.** Se o `md5` não bater com um caractere
   a menos, confira a ponta com `repr` e acrescente o que faltou (`conteudo || ' '`).
4. No fim, `md5(conteudo)` tem que bater com o do arquivo inteiro.

O botão **Adicionar** da sessão, na tela, continua valendo para quem sobe à mão.

🔁 **2026-10-06: o caminho dos pedaços parou de funcionar.** O `insert` do primeiro pedaço passa, mas todo
`update ... set conteudo = conteudo || ...` volta `declined` da ferramenta do Supabase (nos agentes e na sessão
principal, com a permissão do Claude Code liberada e sem janela de confirmação). ⛔ Não insista nem procure outro
jeito de passar. **O que funciona:** escrever o arquivo, e o João sobe pelo **Adicionar** da sessão (o arquivo vai ao
balde `sessoes`, e o material fica com `caminho`). Para conferir: `storage.objects.metadata->>'eTag'` é o md5 do
arquivo e `metadata->>'size'` o tamanho em bytes, que batem com `md5sum` e `wc -c` do arquivo. Depois, marque a
sessão como `pronta` e ponha o nome `'Aula: ' || tema` no material.

⛔ **Sem conta do Claude no OS** (João, 2026-09-29: *"nós usaremos por aqui mesmo"*). Não proponha
de volta um script com login próprio.

A aula vai inteira para a coluna `conteudo`, entre aspas de dólar `$aula$ ... $aula$` (o HTML pode ter
aspas simples à vontade). Uma chamada ao `execute_sql` do **OS**:

```sql
with s as (select id from public.sessao_tatica where tema = '<o tema>' order by criado_em desc limit 1)
insert into public.sessao_material (sessao_id, nome, tipo, conteudo)
select s.id, 'Aula: <o tema curto>', 'html', $aula$<o HTML inteiro>$aula$ from s
returning id, md5(conteudo);

update public.sessao_tatica set estado = 'pronta' where tema = '<o tema>' and estado = 'planejada';
```

**Conferir que chegou igual:** o `md5` que voltou tem que bater com o do arquivo
(`md5sum "$f"`; se o arquivo tiver fim de linha do Windows, compare depois de `tr -d '\r'`).

**Subir de novo uma aula mudada:** `update public.sessao_material set conteudo = $aula$...$aula$ where id = '<id>'`.
⛔ Não crie um segundo material com o mesmo nome.

---

## 4. Levar ao Academy pelo banco (a agenda e a gravação)

A tela do OS manda a agenda ao Academy a cada mudança. ⚠️ **O que o Claude grava pelo SQL NÃO vai sozinho:**
depois de inserir ou mudar sessão no OS, mande a lista INTEIRA (o que falta na lista sai de lá):
1. No OS: `select jsonb_agg(jsonb_build_object('id',id,'tema',tema,'inicio',inicio,'duracao_min',duracao_min,'curso',curso,'objetivo',objetivo,'link',link,'gravacao_id',gravacao_id,'dada',estado='dada'))::text from sessao_tatica;`
2. No Academy (MCP `supabase-academy`): `select ponte.sessao_agenda_sincronizar($j$<a lista>$j$::jsonb, '<e-mail de quem pediu>');`

**A gravação** (o que o botão "Publicar a gravação" da tela faz): no Academy,
`select ponte.biblioteca_publicar('sessao_tatica', '<tema>', '<link>', date '<dia>', '<e-mail>')` devolve o id do
item; no OS, `update sessao_tatica set gravacao_id = '<id>', estado = 'dada'`; depois a agenda inteira de novo (o
passo acima). Ponha também o `curso`: o cartão da gravação ganha a capa do curso.

🔁 **2026-10-06: a gravação abre DENTRO do Academy, e ⛔ não se sobe mais nada na Vercel** (João: *"centralizar
tudo dentro do Academy"*). O cartão leva a `/biblioteca/gravacao/<id>`: o vídeo em cima, tocado pelo app, e a aula
embaixo, numa moldura isolada. Por isso:
- o `link` é **o VÍDEO** (o link do Drive ou do YouTube, como veio: o app troca para o `/preview` ou o `/embed`);
- a aula vai para `biblioteca_item.html` (a 0113 do Academy). ⭐ **Quem publica é a equipe, pelo botão "Publicar a
  gravação" da sessão no OS** (João, 2026-10-06, a opção B): a janela pede o link do vídeo e a aula (o material HTML
  da sessão), e a `biblioteca_publicar` leva os dois (o `p_html`, a 0114 e a 0115 do Academy);
- para TROCAR a aula de uma gravação já publicada, o script, no repo do Academy, com o token do Academy da skill
  `deploy-plataforma`: `node scripts/gravacao-no-banco.mjs <id da gravação> <o arquivo da aula> [link do vídeo]`.
  Ele confere o md5.
- ⛔ Nunca o vídeo dentro do HTML da aula: dentro da moldura o player do Drive fica preto (testado).
A de 2026-09-29 já está assim (o item `22c7edb4-ad31-48fe-80c4-0c6ecf69710e`).

## Depois

- Diga ao João o que subiu, com o caminho da página: `/academy/sessao` e a sessão aberta.
- A gravação, o link ao vivo e o envio do link nos grupos de WhatsApp são da tela e das próximas
  etapas (`empresa/plataformas/os/PROMPT-SESSAO-TATICA.md`), ⛔ não desta skill.

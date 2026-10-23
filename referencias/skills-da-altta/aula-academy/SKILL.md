---
name: aula-academy
description: Escrever as aulas (e a revisão de cada módulo) de um curso do Altta Academy, a escola de 27 cursos vendidos separados. Use sempre que for escrever, continuar, reescrever ou revisar aulas de curso do Academy, inclusive nas sessões em paralelo das ondas de cursos. Garante que sessões diferentes escrevam aulas iguais em forma e voz, sem os erros de formatação que já aconteceram.
metadata:
  area: Academy
  frequencia: quando-precisar
  resumo: "Escreve as aulas dos cursos do Academy no molde aprovado, com a mesma forma e a mesma voz em todas as sessões."
  quando: "Ao escrever, continuar ou revisar as aulas de um curso, inclusive nas ondas de cursos em paralelo."
  exemplo: "Escreve as aulas do módulo 2 do curso de precificação."
---

# Escrever as aulas de um curso do Altta Academy

## Para que esta skill existe

São 27 cursos e umas 720 aulas (contando a revisão de cada módulo), escritas por várias sessões ao
mesmo tempo. Cada curso é vendido sozinho, então **quem comprou só aquele curso não pode ficar
faltando nada**. E a queixa de antes era aula complexa demais. As duas coisas se resolvem juntas:

> **A aula tem um passo só, e explica esse passo inteiro, detalhe a detalhe.**

A forma foi aprovada pelo João em 2026-09-29 (*"eu gostei demais da mecânica das aulas"*). **A aula de
referência:** `empresa/plataformas/academy/app/src/conteudo/cursos/atendimento-whatsapp/01-01-os-seis-numeros-do-comercial.md`.
Em qualquer dúvida que este arquivo não responda, **abra ela e copie o que ela faz.**

🚨 **Duas travas decidem se a aula está pronta, e não o olho:** `npm run conferir:aulas` e
`npm run conferir:artes`. Elas nasceram dos erros que já aconteceram (desenho cortando na margem,
texto vazando da caixa, conteúdo sumindo entre uma tela e outra, a porta escondendo as opções).
⛔ **A saída de um erro nunca é mudar a trava**, é mudar a aula.

---

## O fluxo de uma sessão de curso

Todo comando roda na pasta `empresa/plataformas/academy/app` (o PowerShell, para as fotos).

1. **Leia antes de escrever:**
   - a linha do SEU curso no catálogo: `src/features/cursos/catalogo.json` (os módulos e **os títulos
     das aulas, que são a fonte da verdade**) e o `PLANO-ESCOLA-DE-CURSOS.md` §5 (a promessa, o "sai
     com" e a matéria-prima: `Vem de M13` quer dizer `src/conteudo/autonomy/M13-*.md`);
   - a matéria-prima de verdade. Curso marcado *Novo* não tem módulo antigo: use a biblioteca
     (`empresa/estrategia/biblioteca/README.md`, a Tabela 1, pelo assunto) e pesquisa na internet com
     fonte. ⛔ Não escreva de memória, e ⛔ número sem fonte não entra;
   - a aula de referência, inteira, uma vez.
2. **Veja onde o curso está:** `npm run conferir:aulas` mostra o placar. Se já existem aulas do seu
   curso, **continue da primeira que falta**, sem reescrever as prontas.
3. **Escreva módulo por módulo, aula por aula.** Depois de cada aula (e do desenho dela):
   `npm run conferir:aulas -- <curso>` e `npm run conferir:artes -- <curso>`. Conserte na hora.
4. **Feche cada módulo com a revisão** (`MM-AA-revisao-do-modulo.md`, a última aula dele).
5. **A cada módulo fechado, faça o commit só da sua pasta** (o comando está em "Convivência").
6. **No fim do curso, ou quando a sessão estiver pesada, fotografe** (ver "Ver na tela") e olhe as
   fotos marcadas com ⚠️.
7. **Passe o bastão cedo.** Depois da primeira compactação do contexto, termine a aula aberta, rode
   as travas, faça o commit e pare. A próxima sessão usa o mesmo prompt e continua sozinha, porque o
   passo 2 acha onde parou.

---

## Onde grava e como se chama

- Pasta: `src/conteudo/cursos/<slug-do-curso>/` (o slug é o do catálogo).
- Aula: `MM-AA-assunto-em-kebab.md`, com MM o módulo e AA a ordem da aula no catálogo, dois dígitos.
- Revisão: `MM-AA-revisao-do-modulo.md`, com AA = número de aulas do módulo + 1.
- Desenho: `assets/mMM-aAA-assunto.svg`, referenciado como `![descrição](assets/mMM-aAA-assunto.svg)`.
- ⛔ Sem cópia na pasta de estratégia: o texto vive só no app. ⛔ Nenhum outro arquivo na pasta do
  curso (o app lê todo `.md` dela).

### O cabeçalho, exatamente assim

```markdown
# Os seis números do comercial

> **Curso:** Atendimento pelo WhatsApp para Clínicas · **Módulo 1:** Fundamentos · **Aula 1 de 4**
> **Tema do dia:** Atendimento ao paciente
> **Frase:** Quem responde primeiro vira a primeira opção.
> **Tempo:** 10 minutos

---
```

- **O `#` é o título da aula no catálogo, letra por letra.** A revisão é `# Revisão do módulo N`.
- **A linha do curso** usa o nome do curso e do módulo do catálogo, e o total de aulas do módulo
  **mais a revisão** ("Aula 1 de 4" num módulo de 3 aulas).
- **Tema do dia** vai para o cartão do story, que o paciente vê: "Atendimento ao paciente",
  "Comunicação com o paciente", "Organização da clínica", "Marca e posicionamento".
  ⛔ Nunca venda, fechamento, conversão, captação, lead ou dinheiro (a trava barra).
- **Frase** (João, 2026-09-30) é o herói do cartão do story, sob "O que eu aprendi hoje": o motivo
  para a pessoa postar. Uma frase de efeito tirada da própria aula (a virada da cena, a regra da
  resposta), que faz sentido sozinha para um paciente. Até 90 caracteres (a trava barra em 100),
  sem aspas (o cartão põe), sem gênero, e ⛔ nada de venda, preço, desconto, margem ou dinheiro.
- **Tempo:** de 8 a 12 minutos (a revisão, 3).

---

## A anatomia: seis telas (cada `##` é uma tela)

| Tela | Título | O quê |
|---|---|---|
| **1** | **A cena** | Uma cena da clínica que a pessoa reconhece, em presente, com detalhe (dia, hora, o celular na mão). Termina com **"O passo desta aula:"** em negrito. **Na primeira aula do curso**, uma lista do que a pessoa vai sair sabendo fazer no curso inteiro |
| **2** | **Antes, você decide** | O título começa com "Antes". Cenário com números **em lista `-`**, **uma** pergunta, as opções `- [ ]`, e **por último** a porta: `⏸️ **Marca uma antes de virar a tela.** ...`. ⛔ A resposta não está nesta tela |
| **3** | **A resposta, e o passo a passo** | A resposta da tela 2, e o passo a passo numerado com a clínica de exemplo preenchendo cada passo. O desenho mora aqui. Pode ter `###` (cada um vira uma tela no celular) |
| **4** | **O jeito que parece certo** | O contraexemplo: tabela de 3 colunas preenchida (o errado e o certo lado a lado), e por que o errado engana |
| **5** | **Sua vez** | A pessoa escreve ou conta: a própria mensagem, o próprio número, a própria auditoria |
| **6** | **O modelo pronto** | `> ### O modelo, para copiar` com cada linha em `> - `, e depois `⭐ **Para hoje, se der:** ...`, opcional e sem envio |
| **Notas** | `## Notas de construção, não vai para a aluna` | Origem, selos, interações e o que precisa do João. O leitor corta daqui para baixo |

**O tamanho:** de 1.000 a 1.500 palavras nas telas (a trava conta; abaixo de 900 ou acima de 1.650 é erro).

**A palavra difícil se explica na hora**, na mesma frase: *"a taxa de agendamento (de cada 10
conversas, quantas viram avaliação marcada)"*. Se ela volta em outra aula, explica de novo: quem
comprou outro curso não leu a primeira.

### A revisão do módulo

Duas telas: **Três perguntas** (a tabela `| Afirmação | Verdade | Mito |` com as duas últimas colunas
vazias, uma afirmação por aula do módulo, e por último a porta `⏸️ **Responde as três antes de virar
a tela.**`) e **As respostas** (uma por afirmação, apontando a aula pelo nome).

---

## O que o app entende do markdown (não invente marca nova)

| Escreva assim | Vira na tela |
|---|---|
| `- [ ] item` | opções que se marcam |
| tabela de 3 colunas com as 2 últimas vazias | dois botões por linha (verdade ou mito) |
| tabela com as colunas do fim vazias | um campo para escrever por linha |
| lacuna `` `____` `` (em crase) num parágrafo | um campo para escrever |
| tabela de 3 colunas preenchida | o lado a lado (o contraexemplo) |
| tabela de 2 colunas | linhas que se tocam para abrir |
| lista numerada `1.` | passos que se marcam |
| parágrafo de 3 ou mais frases curtas | frases que entram uma a uma |
| citação que começa em negrito | a régua, em destaque |
| `⏸️` `⚠️` `⛔` `📌` `⭐` **no começo do parágrafo** | aviso com filete e rótulo |
| "antes de virar" num parágrafo curto, ou `⏸️` | a porta: esconde o resto até a pessoa responder |

### 🚨 As armadilhas que já aconteceram (a trava pega todas)

| Erro | Por que quebra | O certo |
|---|---|---|
| a porta antes das opções | a porta esconde tudo o que vem depois dela: as opções somem | pergunta, opções, **porta por último** |
| o cenário da tela 2 em tabela de 2 colunas | vira "toque para ver" e esconde os números da decisão | cenário em lista `-` |
| `⚠️` ou `⛔` no meio da frase ou dentro de item de lista | o emoji aparece solto no texto | parágrafo novo começando pelo aviso, ou frase sem emoji |
| `____` sem crase | o markdown lê como negrito ou linha | no exercício `` `____` ``, no modelo `…` |
| linhas seguidas no modelo sem `- ` | o markdown junta tudo numa linha só | cada linha do modelo em `> - ` |
| título diferente do catálogo | a capa e a lista do curso mostram outro nome | o `#` é o título do catálogo |
| palavra ou link de mais de 30 letras sem espaço | não quebra e corta no celular de 320 | encurte, ou quebre com espaço |
| emoji fora dos avisos | enfeite; a casa não usa emoji | nenhum |

---

## O desenho (SVG): pelo menos um por aula, e ele não pode cortar

**Paleta fechada**, e a trava barra qualquer outro hex: floresta `#10241C`, pinho `#1C4034`,
pergaminho `#EDE6D8`, ouro `#C9A227` (acento, nunca área grande), oxblood `#7A3325`. Fundo pergaminho.
`font-family="Inter, system-ui, sans-serif"`. ⛔ Sem `<image>`, sem foto, sem paciente.

**As medidas que evitam o corte**, e o SVG não quebra linha sozinho:

1. `viewBox="0 0 640 A"`, **largura de no máximo 720**, altura livre. Desenho em pé ou quadrado, nunca
   faixa larga (ela encolhe a letra no celular).
2. **Letra de 22 no mínimo**, título do desenho de 30 a 34. No viewBox de 640, a letra 22 fica com uns 11,7 px na tela de um celular comum; a 18 ficava com 9 e ninguém lia (erro da onda 1, 2026-09-29). A trava barra abaixo de 22.
3. **Margem de 40** das bordas do viewBox. Nada encosta na borda.
4. **A conta da largura de uma linha:** letras × tamanho × 0,55 (em peso 600, × 0,6). Uma linha de 30
   letras em 22 ocupa uns 360: numa caixa de largura cheia cabem umas 40 letras por linha, e menos se a
   caixa for estreita. Com letra maior, o desenho tem menos palavras: diga pouco, em linhas curtas. **Cada linha é um `<text>` separado**, com 1,4 × o tamanho entre elas.
5. **Texto dentro de caixa:** 20 de folga de cada lado. A linha mais longa tem que caber na largura da
   caixa menos 40. Não coube? Quebre em duas linhas ou alargue a caixa, nunca diminua a letra.
6. `text-anchor="middle"`: a linha ocupa metade para cada lado do x. Confira os dois lados.
7. Sem texto girado, sem texto em cima de outro.
8. ⛔ **Sem frase embaixo do título do desenho** (a regra da legenda da casa): o título fica sozinho, e o
   que ele diria vai para dentro das caixas ou sai.

**Formatos que funcionam:** fluxo de decisão, cartões empilhados, **interface simulada e anotada** (a
tela do WhatsApp ou do Instagram com marcadores numerados em ouro), antes e depois, funil com números.
Copie a estrutura de `cursos/atendimento-whatsapp/assets/` (o funil, os cartões e o celular anotado).

`npm run conferir:artes -- <curso>` mede cada texto no navegador: acusa o que **sai da arte**, o que
**vaza da caixa** em que está, os textos que **se encostam** e a letra que fica **abaixo de 11 px** na
largura real do celular. Precisa do Chrome e do
`npm i --no-save playwright-core@1.58` (uma vez).

---

## As interações: pelo menos três por aula

Decidir antes da resposta (obrigatória, tela 2) · escolha entre duas peças · acha o erro · conta feita
pela pessoa · preenchimento · auditoria guiada ("abre o seu WhatsApp agora e marca o que já está
certo") · simulação de resposta (a mensagem do paciente, a pessoa responde).
⛔ Sem compromisso datado e sem envio: a tarefa do Academy é opcional.

---

## A rampa (só onde o plano manda)

Onde o plano §8 manda (os cursos 14, 15, 17, 19, 23 e 24 para o Attlas; 12, 13 e 16 para a origem do
paciente), **uma tela a mais, antes do modelo**, mostra como o Attlas faz aquilo sozinho, com a
interface desenhada, e fecha em "conhecer o Attlas". Só depois de ensinar a fazer à mão. ⛔ Sem bônus,
sem prazo, sem contagem. No máximo uma rampa por módulo.

---

## As regras de escrita

1. ⛔ **Zero travessão** (`—`, `–`, e ` - ` como pontuação), no texto e no desenho.
2. ⛔ **Zero gênero para quem lê**, nos dois sentidos: nada de "a doutora", "cansada", "sozinho",
   "atento", "bem-vindo". "Você", "a pessoa", "quem atende", "a recepção", "o paciente". Adjetivo
   sobre "você" é a armadilha: "você fica perdido" vira "você perde o fio". (A trava de gênero pega o
   feminino; o masculino é com você.)
3. ⛔ **Zero case.** Sem nome de pessoa, sem faturamento de alguém. A clínica de exemplo não tem nome.
4. ✅ **Tom informal, com humor leve.** ⛔ Sem humor em dinheiro perdido, risco jurídico ou resultado de
   paciente.
5. ⛔ **Nada se dimensiona em semanas ou meses** como prazo de resultado.
6. ✅ **Referência nunca anda sozinha:** "a aula 3 do módulo 2 (mensagens rápidas e etiquetas)", "o
   curso Follow-up de Orçamentos".
7. ⚠️ **Estatística só com fonte**, dita em linguagem simples. Número de cenário pode ser inventado, e
   se diz que é exemplo.
8. ⚠️ **As regras do conselho em todo modelo de mensagem, de perfil e de post.** O público é todo
   profissional de harmonização facial, de qualquer conselho (dentista, médico, biomédico,
   farmacêutico e os outros), e vale para todos a regra mais rígida: sem promessa de resultado, sem
   "o melhor", sem preço em lugar público, sem desconto como isca, sem antes e depois mandado sem
   pedido, e perfil com o nome do responsável técnico e o registro no conselho.
9. ⛔ **Não citar pessoa do time como autoridade.** O método é da Altta, e se chama Método Altta.

**Selos nas notas:** 🟢 veio da matéria-prima ou de fonte citada · 🟡 hipótese, com a calibração em
uma linha · 🔴 precisa do João. **Decisão nova não se toma na aula:** a pergunta vai com 🔴 e o
trabalho segue.

---

## Ver na tela

O visual mora no código (a capa, o título grande, o botão Copiar do modelo, o fim da aula com o cartão
do story): ⛔ não escreva texto para imitar enfeite. Para ver o curso de verdade, com a sua porta e a
sua pasta (os números estão no prompt da sua sessão):

```powershell
npx vite build --outDir dist-<curso>
npx vite preview --outDir dist-<curso> --port <porta> --strictPort     # em segundo plano
$env:APP="http://localhost:<porta>"; $env:SAIDA="fotos-sem-senha/<curso>"; $env:CURSO="<curso>"; $env:LARGURAS="320,1280"
node scripts/fotos-da-aula.mjs 01-01 01-02 ...
```

Cada foto sai com `ok` ou com ⚠️ dizendo o que cortou (rolagem de lado, peça além da borda, conteúdo
escondido dentro de caixa). ⚠️ tem que virar `ok`. Olhe pelo menos a capa, um desenho por módulo e o
fim de uma aula. No fim, mate o preview e apague a `dist-<curso>`.

---

## Convivência (várias sessões ao mesmo tempo)

- **Cada sessão escreve só na pasta do SEU curso.** ⛔ Nada de mexer no catálogo, no código, nas
  travas ou em outro curso. Achou um defeito fora da sua pasta? Anote no fim da mensagem final.
- **O commit leva só a sua pasta**, e é por caminho, para não levar o que outra sessão deixou pronto:
  `git add src/conteudo/cursos/<curso>` e
  `git commit -m "Curso <nome>: módulo N" -- src/conteudo/cursos/<curso>`. Com `index.lock`, espere
  alguns segundos e tente de novo. ⛔ **Sem push**: o push publica o site, e é o João quem manda.
- **A mensagem final** diz: o placar do curso (a linha dele no `conferir:aulas`), as travas verdes, o
  que ficou 🔴 para o João, e se o curso terminou ou de onde a próxima sessão continua.

---

## Checagem antes de dizer que terminou

- [ ] `npm run conferir:aulas -- <curso>` sem erro
- [ ] `npm run conferir:artes -- <curso>` sem erro
- [ ] `npm run conferir:genero` sem erro (e o masculino conferido por você)
- [ ] as fotos em 320 e 1280 sem ⚠️
- [ ] 🚨 `npm run aulas:no-banco -- <curso>` rodado (desde 2026-10-01 o texto da aula NÃO vai no site: vem do
      banco, e aula que não foi para lá não abre). Precisa do `SUPABASE_ACCESS_TOKEN`, a skill `deploy-plataforma`
      tem o do Academy. Ele também atualiza `src/features/cursos/aulas-escritas.json`: esse arquivo vai no commit
- [ ] cada aula com cena, decisão antes, passo a passo, contraexemplo, sua vez e modelo
- [ ] nenhum case, nenhum nome de pessoa, nenhum número sem fonte
- [ ] o commit feito, só da pasta do curso, sem push

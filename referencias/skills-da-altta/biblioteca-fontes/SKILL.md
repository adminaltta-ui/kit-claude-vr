---
name: biblioteca-fontes
description: Processa qualquer fonte de conhecimento que o João traz (livro em PDF, artigo da internet, PDF avulso, vídeo do YouTube, vídeo do Instagram, podcast, post longo, relatório de mercado) e transforma numa síntese autoral densa em Markdown dentro de empresa/estrategia/biblioteca/, indexada por assunto, para servir de base de conhecimento consultável de qualquer empresa do grupo. Use quando o pedido for "adiciona esse livro", "processa esse PDF", "resume esse artigo pra biblioteca", "salva esse vídeo na base", "guarda esse link", "quero que você entenda isso", ou quando ele mandar um link, um PDF ou um vídeo com a intenção de guardar como referência. Não use para consultar a base numa decisão (isso é `biblioteca-decide`).
metadata:
  area: Estratégia
  frequencia: quando-precisar
  resumo: "Transforma um livro, artigo, vídeo ou PDF numa síntese guardada na biblioteca, organizada por assunto."
  quando: "Sempre que chegar uma fonte nova que vale guardar como referência."
  exemplo: "Processa esse vídeo do YouTube para a biblioteca."
---

# Biblioteca da Altta: como entra conhecimento novo

## O que essa biblioteca é

Não é um acervo de livros. É a **base de conhecimento do grupo**, e ela alimenta toda decisão
de qualquer empresa da casa (Altta, Indike, Pink Class) e é feita para ser exportada inteira
para projeto novo. Livro é só o tipo de fonte que entrou primeiro.

Toda fonte vira **um arquivo Markdown com síntese autoral densa**, com frontmatter padronizado,
etiquetada por assunto. Quem consulta é a skill `biblioteca-decide`. Esta aqui **abastece**,
aquela **arbitra**.

## Onde cada coisa mora

| Caminho | O que é |
|---|---|
| `empresa/estrategia/biblioteca/*.md` (raiz) | As **sínteses de livro**. Ficam onde estão, referenciadas pelo slug em centenas de pontos da jurisprudência |
| `empresa/estrategia/biblioteca/fontes/<assunto>/` | **Todo o resto**: artigo, vídeo, PDF avulso, podcast, relatório, post. **Uma pasta por assunto**, um arquivo por fonte |
| `empresa/estrategia/biblioteca/fontes/README.md` | O **índice por assunto** de tudo que não é livro, mais a taxonomia de assuntos |
| `empresa/estrategia/biblioteca/fontes/originais/` | O arquivo bruto quando existe (PDF, transcrição, áudio). Fora do git |
| `empresa/estrategia/biblioteca/README.md` | Tabela 1 (o roteador por tipo de decisão) e Tabela 2 (o que cada livro cobre) |
| `empresa/estrategia/biblioteca/_jurisprudencia.md` | A arbitragem: colisões julgadas, convergências, ranking ético |

### A regra da pasta: uma pasta por assunto, e a etiqueta faz o cruzamento

**A fonte mora na pasta do seu assunto principal**, que é aquele em que ela seria procurada
primeiro. Como quase toda fonte boa fala de três ou quatro assuntos ao mesmo tempo, o campo
`assuntos` do frontmatter lista **todos** eles, e o índice em `fontes/README.md` **repete a
fonte em cada seção de assunto que ela cobre**. Pasta resolve a organização, etiqueta resolve o
cruzamento, e nenhuma das duas sozinha resolve as duas coisas.

**Só existe pasta onde existe fonte.** Não crie as 14 de antemão: pasta vazia mente, sugere
conteúdo onde não há e faz procurar no lugar errado. Crie a pasta do assunto quando a primeira
fonte dele chegar.

Escolhendo o assunto principal na dúvida: **pergunte em que decisão essa fonte vai ser usada**, e
não sobre o que ela fala. Um vídeo sobre IA no comercial que vai ser usado para especificar o CRM
mora em `produto-e-plataforma`, ainda que fale de vendas e de IA.

## Os 14 assuntos (a taxonomia)

Toda fonte declara um ou mais. **Não invente assunto novo sem registrar aqui e no
`fontes/README.md`.**

| Slug | Cobre |
|---|---|
| `oferta-e-preco` | Preço, empacotamento, bônus, garantia, ancoragem, escada |
| `aquisicao-e-canais` | Tráfego, canal, teste de canal, parceria, indicação, orgânico |
| `copy-e-criativo` | Anúncio, headline, página de vendas, roteiro, ângulo, consciência |
| `funil-e-nutricao` | Estrutura de funil, e-mail, sequência, lançamento, automação |
| `vendas` | Prospecção, script, objeção, diagnóstico, negociação, pitch |
| `educacao-e-curriculo` | Desenho de aula, trilha, aprendizagem, avaliação, LMS |
| `retencao-e-comunidade` | Churn, resgate, pertencimento, comunidade, engajamento |
| `cs-e-onboarding` | Primeira entrega, escore de saúde, sucesso do cliente, expansão |
| `metricas-e-financeiro` | MRR, LTV, CAC, unit economics, caixa, cobrança, valuation |
| `estrategia-e-posicionamento` | Diagnóstico, foco, ICP, marca, mensagem, vantagem |
| `gestao-e-time` | Ritmo, meta, contratação, remuneração, cultura, processo |
| `produto-e-plataforma` | Feature, arquitetura de produto, CRM, UX, roadmap |
| `mercado-e-setor` | Estética, harmonização, saúde, regulação, conselho, concorrente, dado de mercado brasileiro |
| `ia-e-tecnologia` | IA aplicada, automação, ferramenta, agente, tendência técnica |

Os dois últimos existem porque **nenhum livro do acervo cobre nem o setor nem IA**, e é
exatamente aí que artigo e vídeo valem mais que livro.

## Frontmatter obrigatório

Todo arquivo em `fontes/` abre com isto. Sem exceção, porque é o que torna a base buscável e
exportável.

```yaml
---
titulo: Título real da fonte
tipo: artigo | video | pdf | podcast | post | relatorio | livro
fonte: URL completa, ou "PDF enviado pelo João", ou o canal/veículo
autor: Nome de quem escreveu ou falou, ou "desconhecido"
data_publicacao: 2026-08-14        # ou "desconhecida"
data_processamento: 2026-09-05     # data absoluta, sempre
assuntos: [oferta-e-preco, ia-e-tecnologia]
peso: evidencia | referencia | opiniao
confiabilidade: alta | media | baixa
resumo: Uma linha dizendo o que essa fonte resolve, para aparecer no índice.
---
```

**O campo `peso` é o que define a autoridade da fonte numa decisão**, e ele não é opcional:

- **`evidencia`**: traz dado primário verificável (pesquisa, número de mercado, estudo,
  resultado medido, documento oficial, texto de lei ou de conselho). **Dado bate livro** quando
  a pergunta é factual.
- **`referencia`**: framework ou método de alguém com obra e track record, no nível de um livro
  do acervo. Entra na convergência em pé de igualdade com livro.
- **`opiniao`**: alguém competente falando sem prova. Serve de hipótese e de vocabulário,
  **nunca de fundamento sozinho**. Vale menos que qualquer livro do acervo.

A hierarquia geral não muda: **dado real da Altta > `altta.html` §08 (o quadro de decisões) >
`_jurisprudencia.md` > convergência entre fontes > fonte isolada**, com o crivo ético de
Cialdini como veto. O que o `peso` faz é dizer onde a fonte nova entra nessa fila.

**Confiabilidade** é sobre a origem: veículo sério e autor identificado é `alta`; blog anônimo,
post de rede social ou vídeo sem fonte declarada é `baixa`. Fonte `baixa` pode entrar, mas a
recomendação que ela sustentar tem que dizer que se apoia em fonte fraca.

## Processo por tipo de fonte

### Livro (PDF)

Continua igual, e é o padrão de densidade que todos os outros tipos imitam.

1. **Ler o PDF uma única vez.** Só reabrir se aparecer lacuna específica depois.
2. **Extrair a estrutura real**: os frameworks, conceitos nomeados, processos, taxonomias.
   Não copiar sumário.
3. **Escrever a síntese** no nível de `hormozi-100m-offers.md` (a referência de profundidade):
   extensa, cada tática com entrada própria, exemplos recontados em prosa própria, números
   citáveis mas com a frase reescrita, terminologia batizada preservada.
4. **Seção "Aplicação Altta"** conectando à escada, aos degraus, ao §08 (o quadro de decisões).
5. **Avaliação honesta** ao final da conversa: o que é forte, o que é fraco, que pergunta o
   livro não responde, que lacuna fica aberta.
6. **Salvar** em `biblioteca/{autor-titulo-curto}.md` (raiz, não em `fontes/`), com o mesmo
   frontmatter dos outros tipos.
7. **PDF original** em `biblioteca/pdfs/` (fora do git).

**Restrição inegociável, e vale para toda fonte:** nunca transcrever nem reproduzir o texto
original. Possuir uma cópia dá direito de ler, não de gerar uma cópia derivada completa em
outro formato. A síntese é autoral: conceito reescrito com palavras próprias, exemplo
recontado, aspas curtas pontuais aceitas, parágrafo inteiro copiado nunca.

### Artigo da internet

1. Buscar o conteúdo (a ferramenta de fetch, ou o texto colado pelo João).
2. **Julgar a fonte antes de escrever**: quem publicou, quando, com que interesse. Artigo de
   fornecedor vendendo a própria solução é `opiniao` com `confiabilidade: baixa`, mesmo bem
   escrito. Isso vai no frontmatter e numa linha do documento.
3. Síntese proporcional: artigo denso rende 2 a 4 mil palavras, artigo raso rende 500 e é
   honesto que renda.
4. **Separar o que é dado do que é tese.** Número com origem declarada é o ativo do artigo;
   a interpretação do autor é opinião dele.
5. Salvar como `fontes/{assunto-principal}/artigo-{slug}.md`.

### Vídeo do YouTube

1. Usar a skill **`watch`** (`/watch <url>`), que baixa, extrai frames e pega a transcrição.
2. **Transcrição não é síntese.** Nunca salvar a transcrição. O que se salva é o argumento
   reconstruído: a tese, o método, os números, os exemplos, na ordem lógica, não na ordem em
   que a pessoa falou.
3. **Registrar a marca de tempo dos trechos que importam**, para poder voltar sem rever tudo.
4. Se o vídeo mostra tela, interface ou processo visual (demo de ferramenta, dashboard), isso
   é conteúdo: descrever o que aparece.
5. Salvar como `fontes/{assunto-principal}/video-{canal}-{slug}.md`, com a URL no frontmatter.

### Vídeo do Instagram, Reels, TikTok

Mesmo caminho do YouTube pela `watch`. Diferenças:

- **Quase sempre `peso: opiniao`**, e está tudo bem: o valor de um reels raramente é o método,
  é a **linguagem**, o ângulo, o gancho, o que está pegando no mercado.
- Por isso, além da síntese, guardar **o gancho literal** e **a estrutura do roteiro**, que é o
  que serve depois em copy e criativo.
- Se é um concorrente falando, dizer que é concorrente, quem é, e o que a peça revela do
  posicionamento dele. Isso vira insumo de `mercado-e-setor`.

### PDF avulso, relatório, e-book, material de concorrente

Como livro, em escala menor. **Relatório setorial com número é o tipo de fonte mais valioso da
base inteira** (`peso: evidencia`, assunto `mercado-e-setor`), porque é justamente o que os 24
livros não têm: dado do mercado brasileiro de estética. Nesse caso, extrair **a tabela de
números inteira**, com metodologia e amostra, e não só a conclusão.

### Podcast, aula solta, transcrição de call

Trilha do vídeo. Se for material interno (call com cliente, aula gravada da Carollina), o
`peso` é `evidencia` para linguagem de cliente, e isso é ouro para copy e ICP.

## Fechamento obrigatório: escrever de volta

Fonte que não alimenta a arbitragem é arquivo morto. Ao terminar **qualquer** fonte:

1. **Uma linha no índice** `fontes/README.md`, **repetida em cada assunto que a fonte cobre**,
   não só no principal (livro vai na Tabela 2 do `biblioteca/README.md`, como sempre).
2. **Revisar a Tabela 1 do `biblioteca/README.md`**, o roteador por tipo de decisão. Se a fonte
   nova passa a ser a melhor origem de alguma linha, ou fecha uma lacuna marcada como aberta,
   corrigir a linha. **Fonte de internet pode virar a fonte principal de uma linha**, e nas
   linhas de setor e de IA ela vai ser a única.
3. **Escrever em `_jurisprudencia.md`** o que for o caso: colisão nova (§2), convergência
   reforçada (§3), alicerce desacreditado (§5), posição no ranking ético (§6), voto em pendência
   do §08 (§7), o que não transplanta para clínica pequena brasileira (§9).
   ⚠️ **Fonte `opiniao` não abre colisão contra livro.** Ela pode levantar a hipótese; quem
   derruba um livro é dado ou convergência.
4. **Nunca** abrir registro de decisões paralelo. Decisão da empresa é `altta.html` §08, e só.

## Convenções de escrita

- **Português do Brasil, com acentos.** Vale mesmo quando a fonte é em inglês: traduz-se o
  raciocínio, não as palavras. **Nome batizado de framework fica no original** (*Value
  Equation*, *Jobs to Be Done*), com glosa curta em português na primeira ocorrência.
- ⚠️ **Proibido travessão.** Nem `—` nem `-` como pontuação, em nenhum arquivo da base.
- **Datas absolutas** sempre.
- **Um assunto por arquivo**, título `#` na primeira linha, logo abaixo do frontmatter.

## Exportar a base para outro projeto

A base foi feita para sair daqui. O pacote mínimo e suficiente é:

```
empresa/estrategia/biblioteca/   (menos pdfs/ e fontes/originais/)
.claude/skills/biblioteca-fontes/
.claude/skills/biblioteca-decide/
```

O que **não** é portável e precisa ser trocado no destino: as referências a `altta.html` §08
(o quadro de decisões da empresa) e as seções "Aplicação Altta". No projeto novo, apontar para
o registro de decisões de lá. Se não existir um, criar um antes, porque sem registro de
decisões a arbitragem não tem topo de hierarquia.

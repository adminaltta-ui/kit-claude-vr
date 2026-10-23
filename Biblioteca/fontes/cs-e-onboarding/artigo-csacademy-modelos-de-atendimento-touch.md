---
titulo: "Modelos de Atendimento: high touch, mid touch, low touch e tech touch"
tipo: artigo
fonte: https://csacademy.com.br/blog/modelos-de-atendimento-high-touch-mid-touch-low-touch-e-tech-touch
autor: Jéssica Lipinski (CS Academy)
data_publicacao: 2020-11-11
data_processamento: 2026-09-05
assuntos: [cs-e-onboarding, retencao-e-comunidade, metricas-e-financeiro, produto-e-plataforma]
peso: referencia
confiabilidade: media
resumo: "Os quatro modelos de atendimento pós-venda (1:1 até 1:muitos) e os critérios para escolher qual carteira recebe qual, que é a única forma de a escada da Altta ter 4 degraus sem 4 times de CS."
---

# Modelos de atendimento: high, mid, low e tech touch

> Síntese autoral. Não é transcrição. Fonte no frontmatter.

## Por que essa fonte entrou na base

**Nenhum dos 24 livros da biblioteca menciona touch models.** Nem o Steinman (Gainsight), que é
o livro de Customer Success do acervo, nem o Coleman, nem o Spinks. Busca literal por "high
touch", "low touch", "tech touch" e "1:many" nas 24 sínteses: zero ocorrência. Isso é um buraco
estrutural, porque **a Altta é uma escada de 4 degraus com tickets muito diferentes**, e a
pergunta "quanto de gente cada degrau recebe" não tinha fonte nenhuma até aqui.

O artigo em si é raso (é conteúdo de topo de funil de uma escola de CS, com CTA para curso no
fim). O que ele tem de valor não é profundidade: é **o vocabulário canônico e o critério de
corte**, que é exatamente o que faltava.

## A tese

Depois da venda começa a jornada em que o cliente "se paga", ou seja, em que o CAC vira LTV.
Como cliente custa dinheiro para ser atendido, **atender todo mundo do mesmo jeito é errado nas
duas pontas**: o cliente pequeno recebe caro demais e o grande recebe pouco demais. A solução é
segmentar a carteira em faixas de intensidade de contato humano.

## Os quatro modelos

### High touch (1:1)

Muito contato humano, pouca automação, comunicação altamente ou totalmente personalizada,
interação frequente, às vezes presencial. É o modelo de venda complexa e ticket alto. Exemplos
que o artigo cita: SAP ERP e Resultados Digitais.

### Mid touch (o meio de campo)

O artigo praticamente não desenvolve este, o que é a maior fraqueza dele. Pelo desenho dos
outros três, o mid touch é o **1:poucos**: contato humano existe e é programado (reunião de
grupo, encontro por safra, acompanhamento por marco), mas não é dedicado a um cliente só.

### Low touch (1:muitos, com humano de exceção)

Muito parecido com o tech touch, e a diferença é que **existe algum contato humano, esporádico**,
como apoio ao que a automação já faz. Usado quando a solução exige poucas interações humanas e
já tem processo automatizado: o cliente se vira sozinho. O artigo aponta como o modelo ideal
para solução simples e **ticket médio baixo**, e cita e-commerce como o mercado típico, com o
humano entrando só em situação pontual (cliente inativo, risco de churn).

### Tech touch (1:muitos, sem humano)

**Nenhum contato humano.** Tudo por ferramenta e automação, comunicação de um para muitos, com
soluções padronizadas e pouca customização. Exemplos citados: Netflix e Rappi.

## Como escolher

O artigo dá quatro critérios, e eles se resumem a dois de verdade:

| Critério | Empurra para |
|---|---|
| **Ticket médio** | Quanto maior o ticket, mais pessoal o contato |
| **Complexidade de uso** | Quanto mais complexa a solução, mais acompanhamento humano |
| **Etapa do funil** | Captação, com volume grande de lead, pede low touch. Momentos de decisão pedem mais toque |
| **Tipo de produto** | Produto de alto valor agregado atrai comprador mais criterioso, que exige toque humano |

**A regra que importa é a primeira**, e ela é aritmética: o custo de servir tem que caber na
margem do ticket.

**Os modelos não se excluem.** Uma empresa com produtos de complexidades diferentes roda mais de
um ao mesmo tempo. E o artigo fecha com um conselho honesto: na dúvida, teste e mude conforme
cliente e time amadurecem.

## O aviso sobre high touch, que é a melhor parte do texto

Empresa que quer entregar experiência boa **tende a adotar high touch por default, e high touch
nem sempre se paga**. O artigo é explícito: é preciso saber quando implantá-lo, olhando custo de
aquisição contra custo de retenção e LTV.

⚠️ **Os dois números que ele usa aqui não são dele e não estão auditados.** O artigo cita, via um
blog de terceiro (Invesp), que o CAC pode ser até 7 vezes o custo de reter, e que melhorar o LTV
em 5% aumenta o lucro entre 25% e 95%. O segundo é uma paráfrase distorcida do número clássico
de Reichheld (que fala de **retenção**, não de LTV) e circula há décadas sem fonte primária
localizável. **Não use nenhum dos dois como fundamento numa decisão da Altta.** A conclusão
qualitativa (reter custa menos que adquirir) continua de pé pela convergência da biblioteca;
os números específicos, não.

Táticas que o artigo sugere para high touch (fidelização, lembrança e presente em data especial,
personalização do relacionamento) são fracas e genéricas. O Coleman e o Steinman fazem isso
muito melhor.

## Aplicação Altta

Aqui está o valor real desta fonte. A Altta tem **quatro degraus com tickets diferentes** e um
único time. Sem modelo de atendimento por degrau, acontece uma de duas coisas: ou o degrau de
entrada consome atendimento que a margem dele não paga, ou o degrau de cima recebe o mesmo que o
de baixo e não justifica o preço.

**Hipótese de desenho** (🟡 HIPÓTESE, não decidida, e nenhum número de custo de servir da Altta
foi olhado ainda):

| Degrau | Modelo | Como isso se parece na prática |
|---|---|---|
| **Altta Autonomy** (entrada) | **Tech touch** | Entrega roda inteira dentro do Academy. Humano só por exceção automatizada (aluno travado, sem login, sem progresso) |
| **Altta Sales** | **Low touch** | Academy mais CRM, com humano entrando em marco definido e em alerta de risco |
| **Altta Rise** | **Mid touch, com janela high touch** | É o único degrau com camada de serviço (implementação pontual). O high touch é da implementação, tem começo e fim, e não vira serviço contínuo |
| **Altta Legacy** | **High touch** | Ticket e complexidade justificam 1:1 |

Três consequências que valem discussão:

1. **O modelo de atendimento é parte da oferta, não do custo.** Se o degrau 3 tem janela high
   touch e o 2 não, isso é uma razão concreta para subir de degrau, e entra na página de vendas.
   Casa com a decisão de que serviço é pontual e mora no degrau 3.
2. **Tech touch no degrau de entrada é o que torna a escada viável.** Sem ele, o degrau barato
   não escala, e a escada vira consultoria com nome novo. Isso reforça por que a **Altta Academy**
   é onde os degraus são entregues, e não um quinto degrau.
3. **Tech touch bem feito não é ausência de atendimento, é atendimento programado.** Régua de
   comunicação, alerta por comportamento, conteúdo disparado por gatilho. Isso é feature de
   plataforma, e conversa direto com o escore de saúde do Steinman.

**Onde essa fonte é fraca para nós:** o artigo pensa em SaaS com carteira grande. A Altta tem
base pequena e conhecida, onde high touch ainda é barato em termos absolutos. **O erro a evitar
não é errar o modelo hoje, é construir a operação assumindo que o high touch de hoje escala.**

## O que essa fonte não responde

- Qual o ponto de corte em reais entre um modelo e outro (isso depende do custo de servir da
  própria empresa, que a Altta não mediu).
- Como fazer a transição de um modelo para outro sem o cliente sentir rebaixamento, que é o risco
  real quando alguém desce de degrau.
- Como o mid touch funciona de fato. O artigo pula esse justamente por ser o mais provável para
  a Altta.

**Lacuna que fica aberta na biblioteca:** custo de servir por cliente e o desenho operacional do
mid touch. Vale procurar fonte específica sobre isso.

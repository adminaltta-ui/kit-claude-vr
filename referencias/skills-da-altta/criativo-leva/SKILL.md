---
name: criativo-leva
description: Montar uma leva inteira de criativos de anúncio pago da Altta (Meta), do começo ao fim: a pergunta que a leva testa, a matriz de conceitos (persona, ângulo, estágio), os roteiros com 2 a 3 ganchos cada (com o gancho visual), o fechamento, os briefings de gravação e de edição, a ficha e o nome de cada criativo, as travas e o checklist antes de subir. Para vender um curso do Academy, o kit de cursos, o pacote, o Raio-X ou o Attlas. Use quando o pedido for "monta uma leva de criativos", "faz os anúncios do curso X", "preciso de criativos novos", "roteiro de anúncio", "o que a gente grava nesta semana para o pago", ou "/criativo-leva".
metadata:
  area: Estratégia
  frequencia: semanal
  resumo: "Monta a leva de criativos do pago: a pergunta, a matriz de conceitos, os roteiros com ganchos, os briefings e a ficha de cada anúncio."
  quando: "Toda semana de anúncio, ou quando um curso novo precisa de criativos."
  exemplo: "Monta a leva de criativos do curso de vendas na consulta de avaliação."
---

# A leva de criativos da Altta

A skill principal do marketing pago. Ela não sobe nada na Meta: entrega a leva pronta para gravar, numa pasta.
Os estáticos saem pela `criativo-estatico`; a subida e a leitura do resultado são das skills `campanha` e
`marketing-leitura` (a próxima sessão).

**Leia antes, da arquitetura** (`empresa/estrategia/biblioteca/ARQUITETURA-DO-MARKETING.md`):
- a seção 1 inteira (as decisões que já valem);
- a 3.4 (criativo), com atenção à 3.4.3 (o processo da leva), 3.4.4 (o gancho), 3.4.5 (o corpo), 3.4.6 (os
  formatos), 3.4.7 (quem aparece), 3.4.8 (a produção), 3.4.9 (vender o Academy) e 3.4.12 (a ficha, a
  nomenclatura e o checklist);
- a 3.3.4 (os modelos de copy, a estrutura invisível em duas colunas);
- a 3.5.1 (o processo do teste) e a colisão 4.3 (quantos ganchos por corpo).

**E os dois arquivos vivos:** `empresa/arquivos/anuncios/dossie-do-publico.md` (skill `publico-dossie`) e
`empresa/arquivos/anuncios/referencias.md` (skill `anuncio-referencias`). Se um deles tiver mais de 14 dias,
rode a skill dele antes. Sem os dois, a leva sai sem pesquisa, e isso é o erro que a arquitetura proíbe
(`matheus 01:44:52`: nunca gerar criativo pedindo a uma IA uma lista a partir da VSL e da persona).

**O produto que se vende:** o catálogo, a promessa e o "sai com" de cada curso estão em
`empresa/plataformas/academy/PLANO-ESCOLA-DE-CURSOS.md` §5; a oferta, na §10. Cada curso é um conceito pronto.
O que o curso não entrega, o anúncio não promete.

**O preço e o link vêm do banco, nunca do pedido nem de documento** (MCP `supabase-academy`). O pedido pode
errar o preço, e já errou:

```sql
select c.numero, c.nome, c.preco_reais, c.promessa, c.sai_com, h.produto_id as checkout
from curso c left join produto_hypercash h on h.curso_slug = c.slug
where c.numero = <número do curso>;
```

Se `checkout` vier vazio, o curso ainda não tem produto no checkout: o anúncio não tem para onde levar, e isso
vai para o João antes da parada 1.

## As duas paradas

A leva tem **duas paradas para o ok do João**. Não pule nenhuma.

1. **A pergunta e a matriz.** Só ângulo aprovado vira anúncio (`filemon-cri 00:58:01`).
2. **A leva escrita**, já passada pelas travas.

## O passo a passo

### Parte 1: a pergunta e a matriz (até a parada 1)

1. **O que vender e para onde o clique leva.** O produto (curso, kit, pacote, Raio-X, Attlas) e o próximo passo
   (checkout, Raio-X, WhatsApp do Comercial). O João liberou vender o curso isolado como low ticket, o kit e o
   curso seguinte, conforme a estratégia (arquitetura 4.1). Preço só o aprovado.
2. **A pergunta da leva, escrita antes de qualquer anúncio** (`campolina 00:39:55`; `_jurisprudencia.md` §2.13, o
   teste com hipótese escrita). Uma frase, com a previsão. Ex.: *"o ângulo do 'vou pensar' vende mais que o da
   avaliação que vira plano, para o autônomo que aluga sala? Previsão: sim, porque o dossiê mostra a frase em X
   lugares."*
3. **A matriz de conceitos.** Para cada persona do dossiê que a leva mira, 3 a 4 ângulos de famílias emocionais
   diferentes (problema, contrário, prova, história, novidade, oferta), cada um com o estágio de consciência.
   Comece pelos ângulos óbvios, tirados do próprio curso (a promessa, o "sai com", os módulos); os ousados depois.
   Use os oito ângulos livres da 3.4.9 e evite o que está gasto (número de faturamento, print de PIX, "última
   turma", prazo, ostentação, agência como vilã).
4. **Para cada conceito, o formato e quem aparece** (3.4.6 e 3.4.7):
   - o **estático de texto** é o primeiro teste de todo ângulo: ângulo que nunca foi testado ganha um estático de
     texto gêmeo, além do formato principal (barato, e separa a ideia da execução); ângulo já validado vai direto
     no formato dele;
   - em saúde, os formatos de confiança ganham: fundador, carta, reação, demonstração de tela, depoimento real;
   - **sócio em no máximo um terço dos conceitos**, em formato nativo (falando enquanto mostra a tela, o
     WhatsApp, o quadro), só sobre comercial e marketing: João no comercial, Arthur na demanda;
   - **a capa de cinema por IA** é um formato entre vários, nunca o padrão;
   - nunca ator, nunca pessoa ou voz sintética, nunca avatar de IA (1.4).
5. **O balanço da leva** (3.4.3, passos 5 e 6): sem vencedor ainda, 80% modelado do que já vende (as
   referências) e 20% aposta, arredondando a aposta para cima (numa leva de 6, duas apostas); cerca de 60% das
   peças na big idea mais forte. Toda leva testa algo novo (um
   formato ou um rosto). **O tamanho:** de 6 a 10 conceitos por leva, porque o público é pequeno e cansa
   (arquitetura 3.4.9: cadência constante vale mais que lote grande).
6. **Mostre ao João, e pare** (parada 1). Curto: a pergunta, a matriz numa tabela (persona, ângulo e família,
   estágio, formato, quem aparece, seguro ou aposta, a referência de onde veio), e o que fica de fora. Espere o ok.

### Parte 2: a leva escrita (até a parada 2)

7. **O corpo de cada conceito**, pela estrutura invisível de uma referência validada (3.3.4: o que cada trecho
   da referência faz, numa coluna; o texto da Altta, na outra). Use a anatomia consolidada da 3.4.5 (gancho
   visual, gancho falado, aterrissagem, corpo, quebra de ritmo, CTA, pós-CTA, segundo CTA, última frase, cartão
   final) e confira com o checklist dos elementos logo abaixo dela. Faltar um elemento pode; forçar todos, não.
   O corpo ensina algo e vale o tempo de quem assiste.
8. **2 a 3 ganchos por corpo, cada um com o próprio gancho visual** (3.4.4 e 4.3). O gancho visual muda o que se
   vê, e não só o texto, senão a Meta conta como o mesmo anúncio. **O gancho 1 de todo corpo segue a mesma
   estratégia** (posição fixa: `campolina 01:59:31`), para o dado ler de uma vez. Gancho falado em até 25
   palavras. Use a palavra do público, tirada do dossiê, nunca o termo técnico. **No estático é diferente:** as 2
   ou 3 frases de um mesmo conceito não são criativos separados (para a Meta, mudar só o texto é o mesmo
   anúncio); vão juntas como mídias de um anúncio só, no formato flexível. Estático conta como criativo novo só
   quando muda o tipo do molde ou a imagem.
9. **O fechamento:** o CTA com o porquê e o que o clique entrega de verdade; o cartão final de cerca de 10
   segundos com a promessa, o benefício, o preço (curso avulso) e a chamada. Urgência só se for real.
10. **O briefing de gravação**, um documento só, agrupado por condição de gravação (mesmo cenário, mesma roupa),
    com os materiais na primeira página: quem, figurino, cenário, a referência com link, o roteiro de cena com
    ações, blocos de 2 a 3 linhas com a troca de take marcada. Sem teleprompter (3.4.8).
11. **O briefing de edição** de cada criativo: a referência de edição ("orgânico de celular" ou "dinâmico com
    corte"), a instrução do gancho visual, onde entra prova na tela, a legenda, 9:16 com o texto na zona segura.
12. **A ficha e o nome de cada criativo** (3.4.12). O nome:
    `ALT_<curso>_<persona>_<angulo>_<formato>_<gancho>_<quem>_<V01>`, por exemplo
    `ALT_C21_autonomo_vou-pensar_tela_contrario_joao_V01`. Cada gancho de vídeo é um criativo, e o campo
    `<gancho>` é o que diferencia um do outro; o `V` só sobe quando a mesma peça é refeita (regravada, reeditada).
13. **Os dois testes de qualidade** de cada peça: "viralizaria como conteúdo sem a chamada?" e "o fim casa com o
    começo da próxima etapa?" (mesma promessa, mesma pessoa, mesmo mecanismo). Se não, reescreva. O primeiro teste
    não vale para o banner de oferta nem para a capa de cinema, que são anúncio por natureza.
14. **As travas, num agente separado.** Rode a skill `marketing-travas` num Agent (`general-purpose`), com o
    caminho da leva: `Use a skill marketing-travas na peça em <caminho>. Devolva só o parecer no formato da skill.`
    Corrija tudo o que não passou. O que for "para o João decidir" vai para a parada 2.
15. **Mostre ao João, e pare** (parada 2). Curto: quantos conceitos e criativos, o que cada um testa em uma linha,
    o parecer das travas, e o bloco do que ele precisa fazer (gravar, aprovar, decidir).
16. **Depois do ok:** passe os conceitos de estático para a `criativo-estatico`, e marque no fim da leva a data
    do dia fixo de gravação. A subida é da skill `campanha` (ainda não existe: até lá, o João sobe à mão, pela
    nomenclatura).

## A pasta e o arquivo

Tudo em `empresa/arquivos/anuncios/<AAAA-MM-DD>-<leva>/` (ex.: `2026-10-07-c21-vou-pensar/`). A leva é o
`leva.md`; as imagens da `criativo-estatico` entram na mesma pasta.

```markdown
# Leva AAAA-MM-DD · <o que vende>

> Estado: matriz para aprovar | escrita, para aprovar | aprovada em AAAA-MM-DD | gravada | no ar
> Vende: <produto e preço> · O clique leva a: <checkout, Raio-X, WhatsApp>
> Dossiê lido em: AAAA-MM-DD · Referências lidas em: AAAA-MM-DD

## A pergunta da leva
<a pergunta e a previsão>

## A matriz de conceitos
| Conceito | Persona | Ângulo (família) | Estágio | Formato | Quem aparece | Seguro ou aposta | Referência |

## Conceito 1 · <nome curto>
**Ficha:** persona · ângulo · estágio · big idea · formato · quem aparece · estrutura modelada (de qual
referência) · elemento já validado que carrega · o que este conceito testa
**Ganchos** (cada um é um criativo):
- `ALT_..._V01` · visual: <o que se vê> · falado: "<a frase>"
- `ALT_..._V02` · ...
**Roteiro:** <aterrissagem, corpo, quebras, CTA, pós-CTA, segundo CTA, última frase>
**Cartão final:** <promessa · benefício · preço · chamada>
**Texto do anúncio:** <o texto principal> · **Título:** <o título>
**Edição:** <o briefing de edição>

## Conceito 2 ...

## O briefing de gravação
<agrupado por condição de gravação; materiais na primeira página>

## O parecer das travas
<o parecer da marketing-travas, colado>

## O que foi corrigido depois das travas
<cada troca, em uma linha>

## O checklist antes de subir
<o checklist da 3.4.12, marcado criativo a criativo>
```

## O que não se faz

- Escrever anúncio antes da pergunta e da matriz aprovadas.
- Inventar a fala do público, uma prova, um número ou um nome de método (1.2 e 1.4). O método é um só, o Método
  Altta.
- Copiar frase, roteiro ou imagem de referência: dela se tira o ângulo e a estrutura (1.5).
- Variar só o texto de um gancho e chamar de criativo novo: para a Meta é o mesmo anúncio (3.4.1).
- Prometer prazo, número de faturamento ou resultado que o curso não entrega.
- Pôr na boca do sócio uma experiência que ele não confirmou. A última frase "de uma pessoa, verdadeira" usa só
  fato que o João ou o Arthur confirmaram; na dúvida, frase de conselho, não de história, e a pergunta vai para
  a parada 2.

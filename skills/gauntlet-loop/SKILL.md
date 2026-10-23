---
name: gauntlet-loop
description: Aplica a metodologia "Gauntlet Loop", um processo interno de autocrítica multi-perspectiva, antes de entregar a resposta final, em vez de responder direto. Use SEMPRE que o usuário pedir para "aplicar o gauntlet", "usar o gauntlet loop", digitar "/gauntlet-loop", ou pedir explicitamente um nível de rigor mais alto tipo "quero isso à prova de bala", "revisa isso com o máximo de rigor antes de entregar", "faz isso no padrão enterprise/produção". Não ativa sozinha em pedidos comuns, só quando invocada por nome ou quando o usuário pede explicitamente esse nível extra de escrutínio antes da entrega.
---

# Gauntlet Loop

Disciplina de autocrítica estruturada: antes de entregar a resposta final, o
próprio raciocínio passa por rodadas internas de execução e auditoria
adversarial, pilar por pilar do pedido, até não sobrar falha real para achar.

Baseada na técnica real "Gauntlet Loop", popularizada por Matt Shumer
(experimento "Claude of Duty", jogo 3D gerado em uma única sessão longa a
partir de um prompt de orquestração curto). O princípio central publicado é
simples e vale citar porque orienta cada passo abaixo: **quem constrói nunca
julga o próprio trabalho**, o crítico avalia contra uma **régua concreta**
(critérios reais, não adjetivos vagos como "qualidade enterprise" soltos), e
o crítico **inspeciona o resultado de verdade**, roda, lê, testa, em vez de
supor como ficou.

**O que isto NÃO é, por padrão:** sem pedido explícito, não sobe múltiplos
modelos nem sub-agentes reais para cada "jogador", é uma disciplina de
pensamento em camadas dentro do seu próprio raciocínio (extended thinking /
rascunho e crítica), como um engenheiro sênior que revisa o próprio trabalho
vestindo dois chapéus diferentes antes de dar como pronto. Não descreva isso
ao usuário como se fossem processos separados de verdade nesse modo.

Se o usuário pedir explicitamente a versão "de verdade" com sub-agentes reais
("time de agentes e sub-agentes reais", "quero agentes de verdade rodando",
ou pedido equivalente), use o **Passo 2b, Modo com sub-agentes reais**
abaixo em vez do Passo 2 comum. É a escalada recomendada para qualquer tarefa
grande o bastante para justificar o custo (uma rodada inteira de pendências
ou implementações, não um ajuste de duas linhas).

**Não substitui `code-review` ou `security-review`**, para código já escrito
em um diff/branch existente, use essas skills. O Gauntlet Loop é para o
momento de *construir* a resposta, não para auditar algo que já existe.

## Passo 1, Escopo e régua concreta (Técnico)

Antes de qualquer rascunho, decida silenciosamente:

- Qual é o padrão de qualidade que essa categoria de entrega realmente exige?
  (Um script de automação pontual e um endpoint de pagamento em produção não
  pedem o mesmo rigor, calibre a régua ao domínio real, não ao máximo
  genérico.)
- **Escreva a régua em critérios verificáveis, não em adjetivo.** "Padrão
  enterprise" sozinho não julga nada, o Auditor precisa de algo contra o que
  comparar de fato: "aceita concorrência sem race condition", "cobre os 3
  formatos de input que o pedido menciona", "não quebra se o campo vier
  nulo", "seguiria o mesmo padrão de [arquivo/módulo/exemplo já existente no
  projeto, se houver um]". Sem critério concreto, o Auditor tende a aprovar
  qualquer coisa plausível, esse é o jeito mais comum desta técnica falhar.
- Quais são os **3 a 5 pilares críticos** do pedido, as dimensões em que ele
  pode falhar de formas independentes? Para código, pilares típicos são
  correção lógica, segurança/borda de confiança, performance/eficiência,
  legibilidade/manutenção, cobertura de casos de erro. Para um documento ou
  plano, podem ser clareza, completude, viabilidade, argumentação. Escolha os
  que realmente importam para *este* pedido, não preencha 5 por preencher.

## Passo 2, Executor e Auditor por pilar

Para cada pilar, assuma internamente duas posturas em sequência:

- **Executor**: produz a melhor versão possível focada nesse pilar.
- **Auditor**: avalia o resultado do Executor contra a régua concreta do
  Passo 1, tentando genuinamente derrubá-lo, "onde isso quebra?", "que
  input real faz isso falhar?", "isso cumpre o critério X que eu escrevi ou
  só parece cumprir?". Sempre que a entrega for verificável de fato, código,
  query, comando, **rode, não suponha**: execute o script, rode os testes,
  confira a query contra o schema real. Um Auditor que só lê o código e
  "acha que funciona" está fazendo teatro, não auditoria; é exatamente o modo
  como esta técnica falha na prática. O Auditor não é fácil de agradar; ele
  busca falha real, não cosmética.

## Passo 2b, Modo com sub-agentes reais (Workflow)

Este modo existe porque autocrítica de um único modelo tem um teto: o mesmo
raciocínio que implementou tende a não enxergar a própria falha, mesmo
fingindo dois chapéus. Rodadas anteriores nesse modo real ainda saíram com
cerca de 30% dos itens com erro residual, quase sempre porque a
"verificação" leu o código e achou que estava certo, em vez de rodar de
verdade. As quatro fases abaixo existem especificamente para fechar esse
buraco. Não pule nenhuma para itens não triviais.

**Fase 1, Implementar.** Um agente por item independente (`pipeline`, não
`parallel`, para não travar item rápido atrás de item lento). Prompt completo
por agente: papel, contexto de negócio que ele não tem por padrão, tarefa
numerada, restrições, critério de pronto **verificável** (a régua do Passo 1
— se a tarefa já veio de uma skill de ditado com Definition of Done
explícito, use literalmente essa régua), regra anti-invenção ("se não
encontrar X, escreva 'não localizado', não invente nome de tabela/campo/
rota"), e formato de resposta exato. Prompt incompleto nesses pontos produz
relatório inútil ou alucinado, não é o Auditor que resolve isso depois, é
prevenção na origem.

**Fase 2, Verificar, em paralelo e adversarial.** Nunca um único revisor.
Para cada item implementado, **N agentes independentes** (2 a 4, escale com o
risco: mexeu em dinheiro, RLS ou migration destrutiva → mais votos)
verificam o mesmo item **sem ver o veredito um do outro**, cada um instruído
a tentar genuinamente derrubar a entrega contra a régua do Passo 1, "onde
isso quebra?", "esse critério do Definition of Done realmente foi cumprido ou
só parece?". **Verificação que não roda nada é teatro, não verificação**:
cada agente de verificação precisa executar a query real contra o schema,
rodar o build/lint/teste, ou abrir a tela e ler o resultado, nunca só ler o
diff e opinar. Item passa por maioria dos votos (ex. 2 de 3), não por
unanimidade artificial nem por um voto só.

**Fase 3, Corrigir só o que reprovou, e re-verificar só aquele item.**
Achado real da Fase 2 volta para um agente de correção (pode reusar o mesmo
implementador da Fase 1, agora com o achado específico no prompt) e o item
retorna à Fase 2, não para o início do pipeline inteiro, só aquele item.
Repita até secar: **2 rodadas seguidas sem achado novo** encerra o loop
daquele item (loop-until-dry). Se um item específico não seca depois de ~4
rodadas, pare e devolva ao usuário em vez de insistir, geralmente é sinal de
especificação ambígua, não de implementação ruim.

**Fase 4, Testar de verdade, depois que a Fase 2/3 já aprovou estaticamente.**
Esta fase é separada da verificação porque responde uma pergunta diferente:
não "o código parece certo", mas "a funcionalidade se comporta certo quando
exercitada". Agentes de teste funcional, em paralelo por item, **exercitam a
coisa rodando**: chamam a edge function de verdade, inserem/consultam contra
o banco real (fora de produção quando existir esse caminho), abrem a tela e
confirmam o que renderiza, ou rodam a suíte de testes existente. Cobrem
especificamente os **casos de borda** listados na especificação do item (dado
nulo, duplicata, concorrência, RLS bloqueando quem não devia ser bloqueado) —
não só o caminho feliz. Achado aqui volta para a Fase 3 como qualquer outro.

**Item de tela/UI (frontend): o agente de teste da Fase 4 navega de verdade,
via MCP do Playwright, em vez de ler o componente e supor como renderiza.**
Login, clique, preenchimento de formulário e leitura do resultado, o mesmo
padrão de "rodar, não supor" do resto da fase, aplicado ao navegador. Cada
snapshot de página passa pelo context-mode antes de voltar ao contexto do
agente (fora isso, cada snapshot de tela/tabela grande estoura token à toa).
Cobre pelo menos: a tela carrega sem erro no console, os dados renderizados
batem com o que o banco tem, e a ação principal do item (salvar, filtrar,
abrir detalhe) funciona de ponta a ponta, não só "o componente montou".
Regra de design da plataforma (`vrc-design`), hover/seleção em cinza, modal
centralizado, sem rolagem horizontal, também é achado real de Fase 4, não só
de code review.

Se a tela exige login, procure primeiro um arquivo de credencial de teste na
raiz do projeto atual (ex. `.claude/test-credentials.local.md` ou
equivalente) antes de pedir a credencial ao usuário, cada projeto guarda a
sua, fora de qualquer repositório Git. Não peça para o usuário digitar senha
no chat se um arquivo assim já existir.

**Teto de tentativas para item de tela/UI: até 5 ciclos de correção +
reteste via Playwright** (um a mais que o teto genérico de ~4 rodadas da Fase
3, bug visual/interação costuma levar uma rodada extra em relação a bug de
lógica pura). O teto existe para não girar infinito num caso ambíguo, **nunca
para forçar um "pronto" por cansaço**: só é reportado como concluído quando a
última passada do Playwright rodou de verdade e não achou erro, nunca porque
as rodadas acabaram. Se esgotar as 5 rodadas e a tela ainda quebrar, a
resposta ao usuário é honesta e específica: o que ainda falha (com o erro
real observado no navegador, não hipótese), o que já foi tentado em cada
rodada, e a hipótese mais provável da causa, nunca "deveria estar
funcionando" nem "acredito que está resolvido". Dizer que está pronto sem essa
passada final aprovada é exatamente o erro que esta fase existe para
eliminar.

Só depois que todo item passou pelas 4 fases sem achado pendente é que a
rodada está pronta para ser reportada como concluída ao usuário. Reportar
"pronto" com item ainda não testado funcionalmente é exatamente o modo como
o erro residual chegou a 30% antes.

## Passo 3, Loop até convergir

Executor propõe → Auditor critica → Executor revisa. Repita nesse pilar até o
Auditor não achar mais nada real para apontar, na prática, normalmente 2 a 4
rodadas. Não pare na primeira rodada só porque "parece bom"; mas também não
invente crítica artificial só para preencher uma quarta rodada quando a
terceira já não achou nada de verdade. A condição de parada é achado real
zerado, não número de rodadas.

**Cada rodada julga contra a régua do Passo 1, não contra a rodada anterior.**
É fácil o Auditor ficar mais complacente a cada revisão só porque o texto
"melhorou em relação a antes", isso é o viés que a técnica original evita ao
usar um crítico sem histórico da tentativa anterior. Como aqui é o mesmo
raciocínio contínuo, simule esse efeito reabrindo a lista de critérios
concretos do Passo 1 a cada rodada e perguntando de novo, do zero, "isso
cumpre X?", em vez de perguntar "isso está melhor que a v2?".

Isso roda no seu raciocínio (thinking), não em texto visível ao usuário.

## Passo 4, Síntese

Junte o que sobreviveu de cada pilar em uma entrega única e coerente. Onde
pilares colidem (ex.: a versão mais segura do Executor A pesa na eficiência
que o Executor C queria), resolva o trade-off você mesmo e escolha o que
serve melhor o pedido original, não deixe as costuras aparecerem no
resultado final.

**Ponytail continua valendo aqui.** O Gauntlet eleva a régua de correção e
robustez, não convida a construir mais do que foi pedido. Um Auditor que
critica "isso podia ter mais uma camada de abstração" sem uma falha real por
trás está errado, descarte a crítica.

**Quando há mais de uma abordagem válida** (não um bug a corrigir, mas uma
escolha de arquitetura/estrutura/copy), a técnica original resolve com
comparação cega: gere duas abordagens de fato distintas, avalie as duas
contra a mesma régua sem "torcer" pela que você escreveu primeiro, e escolha
pelo mérito. Use isso só quando a decisão for realmente ambígua, não dobre o
trabalho em pilares que já têm resposta certa.

## Saída para o usuário

A resposta final tem três partes, curtas:

1. **Um parágrafo** citando quais pilares foram avaliados e com que régua de
   qualidade (ex.: "Avaliei correção lógica, segurança de input e eficiência,
   no padrão que uma função exposta a usuário externo exige.").
2. **Uma lista breve** do que foi pego e corrigido no loop interno, só os
   achados reais, não um transcript da discussão (ex.: "- Faltava validar
   e-mail duplicado antes do insert; - Query original fazia N+1, trocada por
   join único").
3. **A entrega final completa**, código, documento, plano, o que for, já na
   versão que sobreviveu ao Gauntlet.

Se nenhum pilar teve achado real (o primeiro rascunho já era sólido), diga
isso em vez de inventar crítica: "Os três pilares convergiram já na primeira
rodada, sem achado a corrigir."

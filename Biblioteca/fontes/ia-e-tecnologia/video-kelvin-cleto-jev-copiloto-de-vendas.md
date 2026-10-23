---
titulo: "JEV: é assim que vou fazer dinheiro de verdade com IA"
tipo: video
fonte: https://youtu.be/hPb4jBl7I-Q
autor: Kelvin Cleto (canal Kelvin Cleto, dono da Acelera 360)
data_publicacao: 2026-10-02
data_processamento: 2026-10-06
assuntos: [ia-e-tecnologia, vendas, produto-e-plataforma]
peso: opiniao
confiabilidade: media
resumo: Um copiloto de vendas que escuta a reunião e custa R$ 15 em vez de R$ 30 porque um modelo de decisão barato (o JEV) faz a triagem e o modelo caro só entra quando precisa; mais a explicação do que é o JEV, conferida em fontes de fora.
---

# JEV no copiloto de vendas: como gastar pouco com IA

> Vídeo de 17 minutos, gravado uma semana depois do lançamento do JEV. Ele **não explica o JEV** (manda ver "o outro vídeo", que teve mais de 200 mil visualizações): mostra a ferramenta que montou com ele. A explicação do que é o JEV, na seção própria abaixo, vem de **fontes de fora do vídeo**, conferidas em 2026-10-06.
>
> ⚠️ **Todo número do vídeo é autodeclarado.** O canal vende workshop e mentoria. Peso `opiniao`. Os números técnicos do JEV são da própria empresa que o fez (TypeSafe AI), então também são autodeclarados, a não ser onde está dito.

## O argumento central

**O segredo do custo baixo não é um modelo de IA melhor, é uma divisão de trabalho.** Um modelo barato e rápido (o JEV) olha tudo e decide o que importa. Um modelo caro e esperto (aqui o GPT 5.4) só é chamado quando o barato não resolve. Resultado, nas palavras dele: o custo de analisar uma reunião caiu de uns R$ 30 para menos de R$ 15 (00:00).

E o gasto se paga porque a IA mexe no número que importa: a **conversão por reunião realizada** (02:36 a 03:07).

## O que ele mostra

### O contexto: a "infraestrutura de crescimento com IA" (01:34 a 03:07)

Um desenho em etapas de como uma empresa faz dinheiro no digital: nicho, oferta alinhada ao perfil do cliente ideal (ICP), estrutura de upsell e downsell, gatilhos de venda, crenças e objeções, canais; criativos e tráfego; aquisição e qualificação (a conversa no WhatsApp ou na página, lead frio, morno ou quente); a reunião de fechamento. **O ponto de IA que ele mostra é só a reunião de venda**, e diz que é "parte de algo maior": antes vêm atração, pré-qualificação e nutrição por WhatsApp e grupos (16:29).

### O módulo do closer (03:07 a 05:10)

- Um **aplicativo nativo** próprio, com a agenda, as conversas (o SDR trabalha por ali), o funil de vendas, os dados do contato e a tela da reunião.
- Closer é o vendedor que fecha. Ele lembra que quem vende é uma pessoa e que **vendas é método**: entender o cliente, diagnosticar, montar o raciocínio, apresentar valor e negociar.

### O Deal Advisor, o copiloto de reunião (05:10 a 08:50)

- **Não é um robô que entra na call.** Ele "fica ouvindo o computador": detecta que a reunião começou e vai transcrevendo.
- Acompanha as **etapas da venda** (introdução, diagnóstico, apresentação, valor, decisão).
- Extrai **dados do lead** (nome, cidade, família) e **atualiza o CRM sozinho**.
- Três problemas que ele resolve, segundo o Kelvin (06:14): o closer não atualiza o CRM; o closer não segue o roteiro; o closer deixa passar uma pergunta de diagnóstico ou uma parte da apresentação.

### A arquitetura por trás, passo a passo (06:47 a 08:19)

1. **O JEV recebe cada fala** e faz a triagem: esta fala pede alguma ajuda ao closer? (Antes ele usava "um modelo de classificação nosso".)
2. Existe um **banco de intervenções pré-prontas** (dicas e "cards"). O JEV também **escolhe qual card mostrar**, se houver.
3. **Só se não houver card** para aquela situação, chama o **modelo pesado** (GPT 5.4) para criar a dica.
4. Depois, o JEV **confere se o closer aplicou a dica** ("revisar o plano") e a tela é atualizada.
5. Tudo em milissegundos por passo, e o JEV entra em **três pontos** do fluxo.
6. A chamada **não é a cada palavra**: tem uma regra que limita. Em uma call de 73 minutos foram **268 chamadas ao JEV**, uma a cada 16 segundos mais ou menos.

### A conta do custo (07:49 a 08:50)

Uma reunião de 73 minutos:

| Peça | Chamadas | Custo |
|---|---|---|
| JEV (a triagem) | 268 | não detalhado: ele não separa, é irrisório perto do resto |
| Modelo pesado (dicas ao vivo) | 61 | US$ 1,96 (o maior custo) |
| Modelo pesado (montar a apresentação, o "assessment") | 7 | US$ 0,44 |
| **Total** | | **cerca de US$ 2,50, ou R$ 15** (dólar a R$ 6 com imposto) |

Leitura: **quase 80% do gasto é o modelo pesado.** A economia vem de chamá-lo 61 vezes em vez de 268. "Esse custo se paga? É lógico, porque aumenta absurdamente o meu nível de conversão" (08:19).

### O "assessment": a apresentação feita pela dor da call (09:51 a 12:24)

Quando a reunião acaba, o closer clica em **abrir assessment**, e a IA monta a apresentação personalizada com a dor real dita na call: apresenta quem é a empresa, os cases, os números, **mostra o gargalo do cliente, o que ele já tentou e não deu certo e o preço de descobrir sozinho**. Frase dele: enquanto uns fazem apresentação estática, a nossa se desenha pela call.

### A precificação (09:21 a 09:51)

"Num processo de infraestrutura de crescimento com IA, a precificação não deve ser por valor tabelado por usuário, deve ser **por potencial de receita gerada**."

### O Coach de IA, o treino em roleplay (12:54 a 15:59)

- O closer clica em "gerar uma call aleatória". A IA monta o **perfil de um lead fictício** usando a memória da empresa (todas as conversas, reuniões e o ICP), e simula a reunião **por voz** (usa o modelo de voz do GPT, e o JEV na parte do assistente).
- No teste ao vivo, a simulação **saiu do personagem** (o "lead" virou cobrança agressiva e ameaçou acionar o jurídico). Ele ri e diz que está em teste e entra no ar naquela semana. É um aviso útil: **roleplay de voz ainda precisa de limite e revisão**.
- Falta ainda: a **avaliação do closer** ao final, para **gamificar** o treino (quanto cada um treinou, se segue o roteiro).

### A tese de fundo (16:29 a 17:00)

Quando se escolhe um **nicho** e se mapeia o processo, entende-se cada gargalo e a IA gera resultado. E "nada que não seja possível de medir é passível de geração de resultado".

## O que é o JEV

> Esta seção **não vem do vídeo**. O Kelvin usa o JEV e manda ver outro vídeo para entender. Veio de pesquisa na internet em 2026-10-06. ⚠️ **Fonte principal: a própria empresa que o criou** (TypeSafe AI) e matérias que a repetem. Tudo é autodeclarado, a não ser onde indicado.

### Em uma frase

**O JEV é uma IA que não escreve: ela decide.** Recebe um texto (ou um conjunto de dados) e uma pergunta, e devolve **uma resposta de forma fixa, com a probabilidade de estar certa**, para um programa ler direto.

### Por que isso muda o gasto

Um modelo de linguagem (como o ChatGPT, o Claude ou o DeepSeek) gera texto palavra por palavra. Isso é lento e é o que custa. O JEV **responde de uma vez só**, e a resposta é curta e de formato conhecido. Por isso:

- **Custo:** US$ 0,042 por milhão de tokens lidos. **O que ele "escreve" não é cobrado.** (Um token é um pedacinho de palavra; um milhão de tokens é mais ou menos 750 mil palavras.)
- **Velocidade:** 70 a 500 milissegundos por resposta.
- A empresa diz que é até **444 vezes mais barato** e **193 vezes mais rápido** que os grandes modelos. Isso é teste interno e contra concorrentes escolhidos por eles.

### Como funciona: três tipos de pergunta

Você escreve a pergunta em português (ou na língua que usar) e escolhe o formato da resposta:

| Tipo | Pergunta de exemplo | O que volta |
|---|---|---|
| **Sim ou não** (nos documentos aparece como `null` ou `noul`) | "O paciente quer agendar?" | Uma probabilidade de 0 a 1 (ex.: 0,92) |
| **Escolha** (`choice`) | "Esta mensagem é: dúvida de preço, dúvida de procedimento, agendar ou reclamação?" | A opção escolhida, a probabilidade de cada opção e a confiança (até 255 opções) |
| **Nota** (`score`) | "Quão irritado está o paciente: calmo, frustrado, muito irritado?" | Uma nota entre os níveis (de 2 a 10 níveis), a probabilidade de cada nível e a confiança |

Dois pontos que importam:

- **O que se lê é o "estado":** o texto da conversa, ou um registro com campos (a ficha do lead, um evento). Aceita texto e dados estruturados. **Não aceita imagem, áudio nem vídeo.**
- **Não existe texto livre na saída.** Por isso ele **não "inventa" frase nem dado**. Mas atenção: isso garante o **formato** certo, **não que o julgamento esteja certo**.

### Limites que a Altta precisa levar a sério

- **Precisão:** uma avaliação independente citada na imprensa deu **67,8% de acerto agregado** para o JEV contra **74,1% do melhor sistema** na mesma prova. 🟡 Não conferi a fonte original. O JEV é rápido e barato, **não é o mais preciso**.
- **Confiança:** a empresa manda **definir um limite de confiança e testar com dados rotulados seus** antes de usar. Fora do tipo de dado que viu, ele pode ficar **confiante e errado**.
- **Tamanho:** até **32 mil tokens** de estado e pergunta (cerca de 24 mil palavras) por chamada. 64 mil tokens no total. Cabe uma conversa inteira de WhatsApp.
- **Limites de uso:** 1.200 chamadas por minuto e 250 mil tokens por segundo (documentação).
- **É um serviço hospedado, fechado, em acesso antecipado.** Sem os pesos do modelo, então não dá para rodar em casa. Acesso por console, API (REST) e SDK; também aparece no OpenRouter (beta) e no Cloudflare. ID do modelo: `jev-1.13.0`.
- **Língua:** 🔴 a levantar. Não achei dado sobre o desempenho em português do Brasil. É teste obrigatório.
- **Dados de saúde:** o texto vai a uma empresa dos EUA. 🔴 A levantar: o contrato, onde fica o dado e se treina com ele (LGPD). Mascarar nome, CPF e telefone antes de enviar resolve boa parte.
- **Quem fez:** TypeSafe AI, saiu do modo secreto em 15 de setembro de 2026; fundador Diogo Almeida (ex-OpenAI, trabalhou no método que treina o ChatGPT a seguir instruções); levantou US$ 40 milhões. Empresa novíssima: o modelo, o preço e as regras **podem mudar**.

Fontes: [LLM Reference](https://www.llmreference.com/provider/typesafe-ai/jev) · [Apidog: o que é a TypeSafe AI](https://apidog.com/pt/blog/what-is-typesafe-ai/) · [Hora de Codar: o que é o Jev](https://horadecodar.com.br/?p=45767) · [Blockchain Council](https://www.blockchain-council.org/ai/what-is-the-jev-ai-model/) · [Alura](https://www.alura.com.br/noticias/empresa-typesafe-ai-sai-do-stealth-e-faz-barulho-com-modelo-jev) · [Times Brasil](https://timesbrasil.com.br/empresas-e-negocios/tecnologia-e-inovacao/jev-nova-i-a-foi-criada-para-decidir-e-agir-dentro-de-softwares/).

### Quando usar o JEV e quando usar um modelo de linguagem

| Use o JEV | Use o modelo de linguagem (DeepSeek, GPT, Claude) |
|---|---|
| Classificar (de que assunto é esta mensagem?) | Escrever a resposta ao paciente |
| Rotear (quem deve receber?) | Resumir uma conversa |
| Dar nota (urgência, humor, qualidade, chance de compra) | Extrair um dado que não está numa lista (uma data, um nome) |
| Barrar (esta resposta está dentro das regras?) | Raciocinar em vários passos |
| Conferir o que o outro modelo escreveu | Criar texto novo |

## Como funciona o desenho do Kelvin, em palavras simples (a regra que serve ao Attlas)

**Um funil de custo, do mais barato ao mais caro. Cada degrau só deixa passar para o seguinte o que o anterior não resolveu.**

1. **Regra fixa (grátis):** palavra-chave, horário, etiqueta, canal. Resolve o óbvio.
2. **JEV (quase grátis):** decide o assunto, o momento e a nota.
3. **Banco de respostas prontas:** se a situação já tem resposta, usa. (O "banco de intervenções" dele.)
4. **Modelo barato** (o DeepSeek V4 Flash da Altta): escreve o que faltou.
5. **Modelo pesado:** só no caso difícil, e **uma pessoa revisa** o que tem peso.
6. **O JEV confere a saída** (a resposta respeita a regra?) antes de enviar.

## O que vira Attlas

Gasto de IA: **barato** (centavos por clínica por mês), **médio** (um a dois dólares), **caro** (passa de US$ 5 se rodar solto). Meta do João: **no máximo US$ 5 por clínica por mês**.

### A análise do atendimento cabe no JEV? Sim, e é o melhor encaixe

O João acha que cabe "perfeitamente". A leitura é **a mesma do Kelvin, só que sobre a conversa de WhatsApp** (menor e mais barata que uma call de 73 minutos). O JEV faz o que a análise tem de mais repetitivo: dar nota, achar a etapa, detectar objeção, conferir o processo. O modelo de linguagem só entra para escrever o relatório para a dona.

**Exemplo de conta (🟡 hipótese, a medir):** uma conversa de 2 mil tokens analisada com 12 perguntas custa 24 mil tokens, ou **cerca de US$ 0,001**. Para 1.500 conversas por mês, **cerca de US$ 1,50 por clínica**. Se várias perguntas dividirem uma só chamada (🔴 a conferir se a API permite), cai para uns US$ 0,15 a 0,50. Por isso o desenho **analisa a conversa uma vez, ao fim dela**, e não a cada mensagem.

### Onde o JEV entra no Attlas, uma aplicação por vez

Cada item: o que faz, quem usa, por que muda o resultado, gasto.

1. **Triagem de cada mensagem que chega.** Decide: é lead novo, paciente, fornecedor, spam, reclamação, pedido de humano? Quem usa: o sistema; a secretária só vê a fila certa. Por que muda: a IA de atendimento só abre a conversa quando precisa e o caso sensível vai direto para uma pessoa. Gasto: **barato**.
2. **O que o paciente quer agora** (preço, agendar, dúvida, remarcar, cancelar, resultado). Quem usa: a IA de atendimento (escolhe a resposta pronta) e a secretária. Por que muda: o modelo caro só escreve quando não há resposta pronta. Gasto: **barato** e **corta o gasto do modelo de linguagem**.
3. **Nota do lead pelo ICP da clínica.** Perguntas de nota: urgência, intenção de compra, ajuste ao perfil, orçamento. Quem usa: a secretária e a dona (ordem da fila de contato). Por que muda: foco em quem compra. Gasto: **barato**. O ICP definido na plataforma entra como parte da pergunta.
4. **Nota do atendimento da secretária** (cordialidade, clareza, condução). Uma conversa, várias notas. Quem usa: a dona e a coordenadora. Por que muda: ensino com dado. Gasto: **barato**. ⚠️ Avisar a equipe que é avaliada (confiança e LGPD trabalhista).
5. **Aderência ao processo comercial** (passou pela etapa de diagnóstico? falou do valor antes do preço? ofereceu a avaliação?). Cada etapa é uma pergunta de sim ou não. Quem usa: a secretária (dica) e a dona (porcentagem de aderência e onde se desviou). Por que muda: é exatamente o pedido do João (*"qual a porcentagem do quanto ela segue o processo"*). Gasto: **barato**.
6. **Objeções detectadas** (preço, medo, tempo, "vou pensar", compara com concorrente, marido ou esposa). Quem usa: a dona e o Attlas (relatório das objeções do mês). Por que muda: mostra o que trava a clínica inteira. Gasto: **barato**.
7. **Detector de agendamento e de venda** (a conversa fechou? foi dita data e forma de pagamento?). Dispara o pop-up já preenchido. A data em si é extraída por regra ou por modelo barato, o JEV só diz "agendou: sim 0,97". Quem usa: a secretária. Por que muda: ela não preenche mais nada. Gasto: **barato**.
8. **Humor e urgência do paciente** (calmo, frustrado, muito irritado). Quem usa: a secretária e a dona (alerta). Por que muda: o paciente irritado é visto antes de reclamar no Google. Gasto: **barato**.
9. **Passar para uma pessoa e voltar:** quando a confiança do JEV é baixa ou o caso é sensível (queixa, intercorrência, dinheiro), a IA para e chama alguém. Quem usa: o sistema, a secretária. Por que muda: é a trava de segurança contra erro de IA. Gasto: **barato**.
10. **Conferência da resposta antes de enviar** (o JEV pergunta: "esta resposta promete resultado? dá preço que a clínica não passa? se apresenta como pessoa?"). Quem usa: o sistema. Por que muda: **é o filtro contra alucinação** que o João pediu, a custo quase zero. Gasto: **barato**. É a mesma ideia do Kelvin de o JEV "revisar" a saída.
11. **Quem reativar e com qual assunto** (na base parada). Escolha de assunto + nota de chance de resposta. Quem usa: a dona e a secretária. Por que muda: a IA cara só escreve para quem vale. Gasto: **barato**.
12. **Risco de falta (no show)** com os dados da ficha (histórico, antecedência, tipo de procedimento). Quem usa: a agenda e a secretária (reforço de lembrete). Por que muda: menos buraco na agenda. Gasto: **barato**.
13. **Satisfação (NPS) a partir da resposta do paciente** (nota 0 a 10 e motivo). Quem usa: a dona. Por que muda: o detrator vira alerta. Gasto: **barato**.
14. **Triagem do pós-procedimento** (a paciente relata dor, vermelhidão, tudo bem?). Quem usa: a profissional. Por que muda: o que é urgente chega rápido. Gasto: **barato**. ⛔ **Só apoio**: quem decide é o profissional, e o JEV nunca responde ao paciente sobre conduta clínica.
15. **Classificar documentos e e-mails** (nota fiscal, boleto, exame, termo assinado). Quem usa: o financeiro. Por que muda: cada documento vai ao lugar certo sem leitura humana. Gasto: **barato** (o texto já precisa vir lido, a leitura da imagem é outra etapa e custa mais).
16. **Qual modelo usar** (roteador de modelos): o JEV decide se a pergunta é fácil, média ou difícil. Quem usa: o sistema. Por que muda: garante que o caro é a exceção. Gasto: **barato**. É o "funil de custo" acima, automatizado.
17. **Copiloto de reunião e de ligação da clínica** (avaliação, orçamento, consulta de retorno), nos moldes do Deal Advisor: sinaliza etapa e objeção em tempo real. Quem usa: a profissional comercial e a coordenadora. Por que muda: a conversa presencial também vira dado. Gasto: **médio a caro** (a transcrição de áudio é a parte cara, não o JEV). 🟡 Fica para depois.
18. **Coach de roleplay para a secretária** (a IA faz o paciente difícil; o JEV dá a nota do treino). Quem usa: a secretária nova. Por que muda: a rampagem do vendedor é mais rápida e a avaliação é objetiva. Gasto: **médio em texto, caro em voz**. O vídeo mostrou o simulador saindo do personagem: limitar o texto e revisar.
19. **Proposta e apresentação personalizada pela dor da conversa** (o "assessment"): um resumo do que a paciente disse que quer, o plano sugerido e o orçamento, para a profissional apresentar. Quem usa: a profissional e a secretária. Por que muda: a apresentação nasce do que o paciente falou, não de um molde estático. Gasto: **médio** (um modelo de linguagem, uma vez por caso). ⚠️ A profissional revisa antes de mostrar.
20. **Memória do paciente: atualizar a ficha pela conversa** (interesse, objeção, preferência, como gosta de ser chamado). Quem usa: a secretária e a IA de atendimento. Por que muda: o CRM fica vivo sem digitação. Gasto: **barato a médio** (o JEV decide se há algo novo; o modelo barato escreve só quando há).

### Um orçamento possível de US$ 5 por clínica por mês (🟡 hipótese, para medir)

Clínica com cerca de 2.500 mensagens por mês (a média das 16 que vêm da Descompliquei, ~40 mil por mês):

| Peça | Estimativa por mês |
|---|---|
| Resposta da IA de atendimento (DeepSeek V4 Flash, ~US$ 0,0007 por resposta) | US$ 1,50 a 1,80 |
| JEV: triagem e intenção em cada mensagem (3 perguntas, 1 mil tokens de contexto) | ~US$ 0,30 |
| JEV: análise da conversa ao fim dela (12 perguntas) | US$ 0,15 a 1,50 |
| JEV: conferência da resposta antes de enviar | ~US$ 0,10 |
| Modelo barato só nos casos marcados (extrair data, atualizar ficha) | ~US$ 0,50 |
| Resumo semanal para a dona e relatório do mês | ~US$ 0,30 |
| **Total** | **cerca de US$ 3 a 4,50** |

Mantém uma folga para a clínica de **muito lead**, que passa do orçamento: a regra é **um teto por clínica**. Ao chegar a 80% do teto, o sistema reduz o que é opcional (a análise de todas as conversas vira amostra) e **avisa a dona**, nunca para o atendimento.

⚠️ Esta conta não prova nada: o preço do DeepSeek V4 Flash está nos dados da Altta (~US$ 0,0007 por resposta, na Descompliquei), mas o desempenho do JEV em português e o número de chamadas por conversa têm que ser **medidos num piloto** com conversas reais de 2 ou 3 clínicas (rótulo feito pela dona ou pela secretária) antes do desenho final.

### O desenho que o vídeo sugere ao Attlas

- **O banco de "cards" pré-prontos** do Kelvin vira, no Attlas, a **biblioteca de respostas e de dicas da clínica**: criada na educação, editável pela clínica, e **a primeira opção antes de chamar o modelo de linguagem**. Isso encaixa na regra do João de flexibilidade (cada clínica tem a sua) e no gasto baixo.
- **A regra de limitar as chamadas** (uma a cada 16 segundos, não a cada palavra) vira o gatilho de análise: só quando a conversa para, muda de etapa ou o paciente fala algo novo.
- **O JEV como guarda-costas de todo agente:** cada agente do construtor ganha, de fábrica, um passo opcional de conferência e de nota de confiança. Baixa confiança leva a uma pessoa.
- **O construtor deixa a dona fazer a pergunta ao JEV** (em linguagem comum) para criar seus próprios critérios de nota: "o lead falou de prazo?". A educação ensina a escrever boas perguntas (perguntas boas, notas boas).
- **A pergunta de sim ou não é a unidade do sistema:** cada processo comercial da clínica vira uma lista de perguntas de sim ou não. Isso torna o processo **mensurável** e é o que dá o relatório de "porcentagem do processo seguido".

### Para o Altta OS (a gestão interna da Altta)

- **Copiloto das calls comerciais da Altta** (Arthur e João com leads): o mesmo Deal Advisor do vídeo, com o JEV na triagem e a etapa da venda. Registra a objeção, atualiza o lead do Comercial do OS e mede a aderência ao script.
- **Análise das conversas dos grupos de cliente e dos suportes** (nota de humor, risco de saída) para o score do cliente: o JEV dá a nota, sem custo relevante.
- **Triagem da caixa única** (WhatsApp e e-mail do OS): classifica e prioriza o que chega.
- **Roleplay e treino** para quem entrar no comercial e no CS da Altta.
- **Piloto do JEV na Altta primeiro:** o OS é um bom laboratório barato para medir precisão em português, antes de levar ao Attlas.
- **Preço por potencial de receita:** a frase do Kelvin é uma hipótese para o preço da implementação paga do Attlas (R$ 10 a 20 mil). 🟡 Não decidido: confrontar com a regra de preço da casa e com a biblioteca.

## Limites e cuidados

- O Kelvin **não explica o JEV** neste vídeo e não mostra a precisão da triagem dele. O número de R$ 15 é o custo, não a qualidade.
- O JEV é novo (lançado em 2026-09-15). Tratar como **hipótese até medir**. Ter sempre um **plano B** (um modelo de linguagem barato que faz a mesma classificação), porque o JEV pode mudar preço, regra ou sair do ar.
- Dado de saúde: mascarar o que identifica o paciente antes de mandar a um serviço externo.
- A regra da casa continua: a IA não se passa por pessoa, e na saúde ela só apoia a decisão da profissional.

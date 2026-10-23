---
titulo: Tráfego pago, gestão de campanha e funil em 2025 e 2026 (Meta, WhatsApp, Google e os funis de educação no Brasil)
tipo: relatorio
fonte: Pesquisa na internet feita pelo Claude para a Altta (fontes no fim)
autor: Claude (pesquisa), fontes listadas no fim
data_publicacao: 2026-10-07
data_processamento: 2026-10-07
assuntos: [aquisicao-e-canais, funil-e-nutricao, metricas-e-financeiro]
peso: referencia
confiabilidade: media
resumo: Como estruturar, medir e escalar tráfego pago (Meta, anúncio para WhatsApp, Google) e escolher o funil de educação no Brasil em 2026, com o que mudou na máquina, os números com fonte e a aplicação ao Academy e ao Attlas.
---

# Tráfego pago, gestão de campanha e funil em 2025 e 2026

> **Como ler.** Cada item leva um selo: 🟢 dado verificável (com fonte e data) · 🟡 tese de praticante
> ou síntese minha · 🔴 não achei. A fonte vai entre colchetes e o número dela bate com a lista do fim.
> **Peso das fontes:** documentação oficial (Meta, Google, WhatsApp) vale mais que estudo independente,
> que vale mais que blog. **Blog de fornecedor que vende a própria ferramenta é opinião de confiabilidade
> baixa**, e vai marcado como `[fornecedor]`. Benchmark dos EUA vai marcado como `(EUA)`: serve de
> direção, nunca de meta para o Brasil.
>
> **O que este relatório não repete:** Schwartz, Suby, Brunson, Hormozi, Miller, Cialdini e Weinberg já
> estão na biblioteca. Aqui entra o que eles não cobrem: a máquina de anúncio de 2025 e 2026, o
> WhatsApp como canal de conversão no Brasil e os números de hoje.

---

## 1. Resumo em 10 linhas (o que muda a forma de fazer)

1. **Na Meta, o criativo virou a segmentação.** O sistema que escolhe quais anúncios concorrem (Andromeda) decide quem vê pelo conteúdo do anúncio. Público aberto com muitos conceitos diferentes vence a pilha de interesses [5][33].
2. **Advantage+ deixou de ser um tipo de campanha e virou um estado:** a campanha de vendas, leads ou app é "Advantage+" quando orçamento, público e posicionamento estão no automático [3][4].
3. **Otimizar por "lead" barato ensina a Meta a trazer quem preenche, não quem compra.** O caminho oficial é devolver o resultado do CRM (lead qualificado, venda) pela API de Conversões [1].
4. **Anúncio para WhatsApp só recebe evento de volta (lead qualificado, compra) quem usa a API oficial do WhatsApp (Cloud API).** Número em API não oficial, como a Uazapi do Altta OS, fica sem esse sinal [2].
5. **Otimizar o anúncio de WhatsApp por lead, e não por conversa, baixou o custo por lead em 24%** num experimento da Meta com 116 mil campanhas [7]. Em 2026 a Meta testa um questionário dentro do WhatsApp no próprio anúncio [29].
6. **A medição encolheu:** desde 2026-01-12 a API da Meta não entrega mais as janelas de 7 e 28 dias por visualização [10]. Retargeting e público aberto são os que menos geram venda que não aconteceria sozinha [13].
7. **No Google, a pesquisa é o lugar da intenção, agora com AI Max;** Performance Max e Demand Gen só funcionam bem com lead qualificado importado do CRM e verba de pelo menos 10 vezes o custo por conversão alvo [14][16][18].
8. **Funis no Brasil:** lançamento segue vivo para quem tem audiência, perpétuo e produto de entrada com esteira são a base, e ticket alto se fecha em conversa, que no Brasil é WhatsApp (77% de sucesso de contato em educação) [20][36][38].
9. **Benchmark brasileiro com método publicado é raro.** O que tem método é a RD Station; custo por conversa e CPM de infoproduto vêm de fornecedores sem método [20][21][27][28]. A Altta precisa medir a própria linha de base.
10. **O gargalo quase nunca é o tráfego:** em educação, 77% das empresas ficaram abaixo da meta de vendas em 2025 mesmo melhorando o marketing [20]. Velocidade de resposta e passagem para o comercial decidem.

---

## 2. A máquina da Meta em 2025 e 2026

### 2.1 Andromeda: o criativo faz o trabalho que o público fazia

- 🟢 **O que é.** Andromeda é o sistema de recuperação de anúncios da Meta: a primeira etapa do leilão, que separa de dezenas de milhões de anúncios candidatos os poucos milhares que vão para a etapa de ranqueamento. Foi desenhado porque a IA generativa ia multiplicar o número de criativos no sistema. Na implantação, a Meta mediu +6% de "recall" (achar o anúncio certo) e +8% de qualidade de anúncio em segmentos selecionados [5, 2024-12-02].
- 🟡 **A frase da Meta, citada por praticantes:** em abril de 2025 a Meta escreveu que o foco "saiu da segmentação de nicho para a diversificação criativa como a melhor alavanca para achar o público relevante" (citação reproduzida por Jon Loomer e outros; não li o post original).
- 🟢 **Quantos criativos vencem.** No estudo da Motion com contas de anúncio (Creative Benchmarks 2026), só **4% a 8% dos criativos viram vencedores** (3,8% nas contas menores, 8,2% nas maiores). Cerca de metade é desligada antes de 28 dias. Os vencedores levam 55% da verba no geral, mas só 23% nas contas pequenas, que espalham o dinheiro em anúncios medianos. Conta pequena (até US$ 10 mil por mês) sobe em mediana 2,8 criativos por semana; as que mais acham vencedores sobem mais [33].
- 🟡 **Tese (síntese desta pesquisa).** "Diversificar" é mudar o **conceito**: o ângulo, a dor, a persona, o formato (vídeo falado, carrossel, print de conversa, depoimento). Trocar a cor do botão ou a primeira frase do mesmo anúncio não conta como diversidade para um sistema que agrupa anúncios parecidos. Para a Altta, isso quer dizer que a skill de criativo tem que produzir **conceitos diferentes**, não variações.

### 2.2 Advantage+ virou estado, não tipo de campanha

- 🟢 **A regra técnica.** Uma campanha de vendas, leads ou app só aparece como "Advantage+ ativada" quando os três automáticos estão ligados: orçamento na campanha (orçamento de campanha Advantage), público Advantage+ e posicionamentos Advantage+. Se qualquer um estiver desligado, o estado volta a "desligado". O estado de leads é `ADVANTAGE_PLUS_LEADS` [3, atualizado 2026-06-17].
- 🟢 **O que conta como público Advantage+:** ligar o público Advantage+; ou não definir nada além de localização; ou usar segmentação detalhada, semelhante e personalizada **como sugestão** (com flexibilização ligada), nunca como trava [3].
- 🟢 **O fim do modelo antigo.** Desde a versão 24 da API (2025-10-08) não se cria mais campanha de compras Advantage+ pelo caminho antigo, e na versão 25 (primeiro trimestre de 2026) ele acabou. O campo que reservava parte da verba para clientes atuais sumiu; para separar cliente novo de cliente atual, a Meta manda criar dois conjuntos de anúncios com teto de gasto [3][4, 2025-10-08].
- 🟢 **Advantage+ para leads.** Em fevereiro de 2025 a Meta estendeu a automação completa às campanhas de leads e disse que, nos primeiros testes, o custo por **lead qualificado** caiu 10% com o Advantage+ ligado. Na mesma leva veio a "pontuação de oportunidade" (0 a 100) no Gerenciador, que sugere ajustes [9, 2025-02-06]. 🟡 A campanha de leads Advantage+ serve tanto ao lead no site quanto ao formulário instantâneo; a escolha do destino continua sendo do anunciante [43].
- 🔴 **Não confirmei** números que circulam em blogs (por exemplo, "+32% de ROAS com Advantage+ de vendas"). Ficam fora.

### 2.3 Estrutura de conta: o passo a passo

1. 🟡 **Poucas campanhas.** Uma campanha principal por objetivo de negócio (leads ou vendas), no estado Advantage+. Opcional: uma campanha de teste de conceito com verba controlada. Remarketing separado só se houver motivo medido (ver 7.1). Cada conjunto a mais divide os eventos e atrasa o aprendizado.
2. 🟡 **Orçamento na campanha (o antigo CBO) para escalar, orçamento no conjunto (ABO) para testar.** No teste, verba igual por conceito deixa comparar; na escala, a máquina distribui melhor. É a prática descrita por gestores brasileiros [27, fornecedor], e combina com a regra técnica do 2.2 (sem orçamento na campanha não há Advantage+).
3. 🟢 **Público:** localização e, se precisar, idade mínima. Interesse e semelhante entram como sugestão [3]. 🟡 Jon Loomer testou público Advantage+ contra interesse e semelhante e não achou ganho nas travas manuais (resultado reproduzido em resumo de busca; a página dele bloqueou a leitura).
4. 🟢 **A conta do orçamento mínimo é por evento, não por real.** A referência que a Meta usa para sair da fase de aprendizado é cerca de **50 eventos de otimização por conjunto em 7 dias**; abaixo disso o conjunto fica em "aprendizado limitado" [12, 2025-10-15].
   - 🟡 **Fórmula prática:** verba semanal do conjunto ≥ 50 × custo do evento que você otimiza. Com custo por lead de R$ 25, são R$ 1.250 por semana por conjunto. Com custo por venda de R$ 400, seriam R$ 20 mil por semana, o que não cabe para quem está começando. **Saída:** otimizar por um evento mais acima no funil (lead, lead qualificado) e devolver a venda pelo CRM para a máquina aprender aos poucos (ver 2.4).
5. 🟢 **A fase de aprendizado é um rótulo, não um castigo.** Loomer mostrou que adicionar anúncio nem sempre reinicia o aprendizado e que dá para ter bom resultado "aprendendo"; a recomendação dele é não mexer o tempo todo, mas também não evitar mudança importante por medo do rótulo [12].
6. 🟡 **O que reinicia o aprendizado** (descrição da Meta repetida por praticantes): mudar segmentação, evento de otimização, estratégia de lance, ou mudar muito o orçamento. A regra de bolso de **não subir mais de 20% por vez** é de praticante; não achei a Meta confirmando o número. **Junte as mudanças** numa edição só, para reiniciar uma vez.

### 2.4 Otimizar por qual evento

A escada, do mais barato e mais burro ao mais caro e mais esperto:

| Evento | O que a máquina aprende | Quando usar |
|---|---|---|
| Conversa iniciada / clique | quem clica e manda "oi" | quase nunca: só para aquecer conta nova |
| Lead (formulário ou conversa com dados) | quem preenche | começo, sem volume de CRM |
| Lead qualificado (o comercial marcou) | quem tem o perfil | assim que houver volume |
| Lead de conversão (venda devolvida do CRM) | quem compra | o destino |

- 🟢 **A integração oficial de CRM.** A Meta deixa subir para ela, pela API de Conversões, os eventos do CRM (lead que virou oportunidade, venda), e usar a meta de desempenho **"leads de conversão"**, que procura gente parecida com quem comprou [1].
- 🟢 **Os requisitos que a Meta põe** para essa otimização funcionar [1]:
  - usar formulário instantâneo da Meta (a meta "leads de conversão" **só é compatível com formulário instantâneo**);
  - gerar **pelo menos 200 leads por mês**;
  - enviar dados **pelo menos uma vez por dia**;
  - a etapa otimizada acontecer **em até 28 dias** depois do lead;
  - essa etapa ter **taxa de conversão entre 1% e 40%** dos leads;
  - guardar no CRM o **ID do lead da Meta** (15 a 17 dígitos); sem ele, mandar telefone, e-mail ou identificador de clique.
- 🟢 **O fim da API offline antiga.** A API de Conversões Offline foi desligada em maio de 2025; evento de loja, telefone ou contrato agora vai pela API de Conversões comum, com o campo `action_source` dizendo de onde veio [41].
- 🟢 **No Google, a mesma lógica.** O Google pede meta de conversão específica de lead ("lead qualificado", "lead convertido", "agendamento"), que liga proteção contra tráfego inválido, e manda **não misturar metas de etapas diferentes** do funil na mesma otimização. Tem uma ferramenta nova de mapa da jornada do lead, em que se liga cada etapa do funil a uma conversão e a um valor [17].
- 🟡 **Tese.** Para um negócio que vende por conversa, a etapa certa para otimizar é a **primeira que o comercial marca e que tem volume**: "qualificado" ou "agendou". A venda entra como sinal adicional quando somar o volume da regra acima.

### 2.5 Atribuição e medição em 2026

- 🟢 **Janelas cortadas.** Desde 2026-01-12 a API de relatórios da Meta deixou de entregar as janelas de **7 dias por visualização** e **28 dias por visualização**. Ficam: 1, 7 e 28 dias por clique, 1 dia por visualização engajada e 1 dia por visualização. Também passou a guardar só 13 meses de dados por hora e de métricas únicas, e 6 meses de frequência [10, anunciado em 2025-10-16].
- 🟡 **Consequência prática:** quem media lançamento ou conteúdo de topo pela visualização vai ver menos conversões no painel sem que nada tenha mudado. Painéis que puxam por API (inclusive o do Altta OS, se puxar) precisam ser revistos.
- 🟡 **Cuidado com "clique".** Reportagem da PPC Land diz que a Meta conta curtida, compartilhamento e salvamento como "clique" na janela de atribuição [10]. Não confirmei na documentação.
- 🟢 **Atribuição incremental.** A Meta lançou em 2025 um modo que estima só as conversões que **não aconteceriam sem o anúncio**, com grupo de controle automático. Numa conta de agência com 6 clientes e US$ 1,05 milhão (abril de 2025), a Meta disse que 87% das conversões eram incrementais. **Público aberto e retargeting tiveram a menor incrementalidade; os públicos de meio de funil, a maior** [13, 2025-07-30].
- 🟡 **Regra de casa:** a verdade é o CRM. A plataforma serve para comparar anúncios entre si; o resultado do negócio se mede no CRM, com a origem do lead gravada (UTM, ID do anúncio, ID do clique do WhatsApp).

---

## 3. Anúncio para WhatsApp (click-to-WhatsApp) no Brasil

### 3.1 Como funciona hoje

- 🟢 **O que é.** O anúncio aparece no Facebook e no Instagram (não dentro das conversas do WhatsApp) com um botão que abre a conversa com a empresa; dá para criar pelo aplicativo WhatsApp Business ou pelo Gerenciador de Anúncios [30, fornecedor]. Desde 2025 a Meta também vende anúncio na aba de Status do WhatsApp, fora das conversas [3].
- 🟢 **A origem da devolução de eventos.** A API de Conversões para mensagens foi anunciada no Conversations de São Paulo (2024-06-06), junto com a "otimização por compra" para anúncio que abre conversa. No mesmo evento a Meta citou uma fintech brasileira (Infinite Pay) que, com mensagens de marketing otimizadas pela IA da Meta, teve custo por visita 30% menor e CTR 20% maior [8].
- 🟢 **Duas otimizações reais, além de "conversa".** Objetivo **Leads** com destino WhatsApp otimiza para quem tende a deixar contato; objetivo **Vendas** com destino WhatsApp otimiza para quem tende a comprar na conversa. Num experimento com **116 mil campanhas de 43 mil empresas** (4 a 10 de novembro de 2024), otimizar por lead deu **custo por lead 24% menor** que otimizar por conversa. Otimizar por compra deu **custo por compra 10% menor** que por conversa (estudo global do segundo semestre de 2024) [7].
- 🟢 **O rastro do clique.** Quando a pessoa chega pelo anúncio, a **primeira mensagem** traz um identificador do clique (`ctwa_clid`), o ID do anúncio e o título. Só a primeira; as seguintes não trazem [31, fornecedor de API, documentação técnica].
- 🟢 **Devolver o resultado para a Meta (a API de Conversões para mensagens) exige a API oficial.** A Meta lista como pré-requisito estar integrado à **plataforma do WhatsApp Business** (Cloud API; a versão local foi encerrada em 2025-10-23) e ter as permissões de gestão de eventos. O evento leva `action_source: business_messaging`, o canal `whatsapp`, o ID da conta de WhatsApp Business e o `ctwa_clid` [2].
- 🟢 **Eventos aceitos** (lista oficial da Meta): Purchase, LeadSubmitted, **QualifiedLead**, InitiateCheckout, AddToCart, ViewContent, eventos de pedido, RatingProvided, ReviewProvided. O nome é **LeadSubmitted, não Lead** [2]. A documentação da Infobip, parceira oficial, lista o mesmo conjunto, inclusive lead qualificado [32]. 🟡 Um fornecedor que testou na versão 25 da API diz que só cinco passam (LeadSubmitted, Purchase, AddToCart, InitiateCheckout, ViewContent) [31]. **Há conflito; testar QualifiedLead antes de depender dele.**
- 🟢 **Preço da conversa.** Desde 2025-07-01 a Meta cobra **por mensagem de modelo entregue**, não mais por conversa; mensagem do cliente para a empresa é grátis; dentro da **janela de atendimento de 24 horas** (aberta a cada mensagem do cliente) a empresa responde com texto livre sem pagar. Quando a conversa nasce de anúncio para WhatsApp e a empresa responde dentro da janela, abre-se uma **janela de entrada gratuita**, em que nem mensagem de marketing é cobrada; a página oficial em português, atualizada em 2026-09-30, diz que ela fica aberta **por até 7 dias** [6]. 🟡 Fontes anteriores falam em 72 horas (ver Lacunas).
- 🟢 **Cobrança em real.** Desde julho de 2026, empresas qualificadas no Brasil passam a ser cobradas em BRL pela Meta Brasil; quem não migrar até 2027-06-30 para de entregar mensagem [6].
- 🟢 **O agente de IA da própria Meta no WhatsApp** é cobrado por token: US$ 2 por milhão, cerca de US$ 0,04 a US$ 0,05 por mensagem [6]. Serve de régua de custo para a IA do Attlas.
- 🟡 **Questionário dentro do anúncio (2026).** Reportagem de 2026-01-09 diz que a Meta pôs um fluxo de perguntas e respostas no Gerenciador para anúncio de WhatsApp com objetivo de leads: a pessoa clica, cai no WhatsApp e responde perguntas com ramificação antes da conversa aberta. Disponível para anunciantes selecionados [29]. Não confirmei para o Brasil.

### 3.2 As métricas que importam

Na ordem do funil, cada uma com a pergunta que responde:

1. **CPM** (custo por mil impressões): o leilão está caro?
2. **CTR do link**: o criativo para o dedo? 🟡 Gestor brasileiro trata abaixo de 0,8% como alerta [28, fornecedor].
3. **Taxa de conversa iniciada** = conversas ÷ cliques: a mensagem pronta e a passagem para o WhatsApp funcionam? [28]
4. **Custo por conversa iniciada**: 🟡 faixas "estimadas para 2026" por um fornecedor brasileiro, sem método publicado: **clínicas e estética R$ 8 a R$ 25; infoproduto em lançamento R$ 5 a R$ 15** [28, fornecedor, confiabilidade baixa].
5. **Taxa de resposta**: quantos responderam à primeira pergunta (é aqui que a velocidade pesa).
6. **Taxa de qualificação e custo por lead qualificado**: o número que vale de verdade.
7. **Custo por agendamento, comparecimento, custo por venda (CAC)**: medidos no CRM. 🔴 Não achei benchmark brasileiro com método para nenhum dos três.

### 3.3 WhatsApp, formulário instantâneo ou página: quando cada um

| | Anúncio para WhatsApp | Formulário instantâneo | Página de captura |
|---|---|---|---|
| Fricção | mínima (um toque) | baixa | média |
| Qualidade sem filtro | média: muito "oi, quanto custa?" | baixa a média | maior (a pessoa leu) |
| Sinal de volta para a Meta | só com Cloud API [2] | o melhor: "leads de conversão" só funciona aqui [1] | pixel + API de Conversões do site |
| Depende de resposta rápida | totalmente | muito | menos |
| Bom para | serviço, consulta, venda consultiva, Brasil | volume com CRM organizado | aula, webinar, produto de entrada com checkout |

- 🟢 **Por que o WhatsApp manda no Brasil.** Na base da RD Station, o WhatsApp é o canal com mais sucesso no primeiro contato com o lead: **77% em educação** (75% na média geral), contra 23% do telefone [20]. No CRM da RD, **89,45% das contas usam WhatsApp** para vender [21].
- 🟢 **E por que não é mágico.** A conversão de oportunidade em venda no CRM da RD em **saúde e estética foi de 16,0%** em 2025 [21]; o resto morre na conversa.
- 🟡 **Tese.** O anúncio para WhatsApp é o melhor formato para quem responde rápido e qualifica na conversa. O formulário instantâneo é o melhor formato para quem quer que a Meta otimize pela venda e não tem Cloud API. A página é obrigatória quando a conversão é um cadastro em aula ou uma compra direta. **Não é uma escolha de gosto: é uma escolha de qual sinal a máquina vai receber.**

### 3.4 Como qualificar no WhatsApp, passo a passo

1. 🟡 **Mensagem pronta que já filtra.** Em vez de "Olá, quero saber mais", botões ou texto que obrigam a uma escolha ("Sou dono de clínica" / "Atendo em clínica de outra pessoa").
2. 🟡 **Primeira resposta automática imediata, com duas ou três perguntas** (perfil, tamanho, dor principal). É o que o fluxo de perguntas da Meta faz nativamente [29], e o que um agente de IA faz no CRM.
3. 🟡 **Etiqueta no CRM na hora**: qualificado, não qualificado, sem resposta. Sem etiqueta não há evento para devolver.
4. 🟡 **Humano entra rápido no qualificado.** A velocidade de resposta é a variável que mais aparece nos estudos: a estatística mais citada (contato em até 5 minutos dá 100 vezes mais chance que em 30) vem de um estudo do MIT com a InsideSales de 2007; o artigo da Harvard Business Review de 2011 mostrou empresas demorando em média 42 horas e 7 vezes mais qualificação para quem responde em até 1 hora [40, que repete os números; 42, artigo original com acesso pago, só confirmei a existência]. 🟡 **Os números são antigos e de lead norte-americano por formulário; a direção vale, o múltiplo não.**
5. 🟡 **Acompanhamento dentro da janela gratuita** (ver 3.1), com no máximo duas ou três mensagens; a reportagem da Rework sugere testar duas contra três [29].
6. 🟢 **Devolver o evento** (LeadSubmitted ou QualifiedLead, depois Purchase) para a Meta, se houver Cloud API [2].

---

## 4. Google Ads: pesquisa, Performance Max, Demand Gen e YouTube

### 4.1 O que mudou em 2025

- 🟢 **O "Power Pack".** No Google Marketing Live (2025-05-21) o Google juntou Performance Max, **AI Max para campanhas de pesquisa** e Demand Gen como o pacote de campanhas com IA [14].
- 🟢 **Performance Max ficou menos caixa-preta:** relatório por canal (pesquisa, YouTube, Display etc.), termos de busca e controle para excluir quem já buscou a marca ou já visitou o site, para focar em cliente novo [14][15].
- 🟢 **AI Max para pesquisa** é uma camada sobre a campanha de pesquisa com três peças: correspondência de termos (ampla e sem palavra-chave), texto do anúncio gerado a partir do site e dos anúncios existentes, e expansão da página de destino para a URL mais relevante do site. Mantém controle de marca e de localização. **O próprio Google avisa que não funciona se a campanha estiver limitada por orçamento** [16].
- 🟢 **Exploração no lance inteligente:** deixa a meta de ROAS flexível para achar buscas novas; o Google relata +18% de categorias de busca com conversão e +19% de conversões em média [15].
- 🟢 **Demand Gen** roda em YouTube, Shorts, Discover, Gmail e Display, e o Google relata +26% de conversões por dólar no ano, com mais de 60 melhorias [14][15].

### 4.2 Como fazer funcionar para lead

- 🟢 **Sinal de dado:** importar conversões offline com **pelo menos três identificadores** (GCLID, dado pessoal com hash, ID da transação etc.) ou usar o Google Tag Gateway [18].
- 🟢 **Verba de Demand Gen:** com estratégia de maximizar, pelo menos **US$ 100 por dia**; com custo por aquisição alvo, **pelo menos 10 vezes o alvo por dia**. **Não avaliar antes de 50 conversões** [18].
- 🟢 **Criativo de Demand Gen:** no mínimo três imagens verticais, três quadradas e três horizontais, e um vídeo em cada formato; "adicione, não substitua"; só pause ativo ruim depois do período de rampa que o Google pede [18].
- 🟢 **Meta de conversão de lead qualificado**, sem misturar etapas [17].

### 4.3 Benchmarks (EUA, para direção)

- 🟢 **Pesquisa (Google e Microsoft), abril de 2025 a março de 2026:** CPC médio **US$ 5,42**, conversão **8,18%**, custo por lead **US$ 66,69**; advocacia é a mais cara (US$ 131,63 por lead) [19, 2026-06-16, EUA].
- 🟢 **Meta, campanhas de lead (abril de 2024 a junho de 2025):** custo por lead **US$ 27,66** (+21% no ano), conversão 7,72%, CTR 2,59%. **Dentistas foram o pior setor:** US$ 76,71 por lead, CTR 1,05%, CPC US$ 9,78 [11, 2025-09, EUA].

### 4.4 Quando o Google vale para educação vendida a profissional

- 🟡 **Tese.** O Google captura **demanda que já existe**. Para um curso de marketing e vendas para quem faz harmonização facial, a busca ativa ("como conseguir pacientes de harmonização", "curso de vendas para clínica de estética") existe, mas é pequena perto da demanda que o Instagram consegue **criar**. 🔴 Não medi o volume de busca desses termos.
- 🟡 **Ordem sugerida:** (1) pesquisa com termos exatos de intenção e da marca, para não perder quem procura; (2) YouTube/Demand Gen para aula longa e autoridade, quando houver vídeo bom; (3) Performance Max só com conversão offline importada e volume para sair do aprendizado. Para o produto **Attlas** (software de gestão de clínica) a pesquisa vale mais, porque há busca ativa por "sistema para clínica de estética".

---

## 5. Funis de infoproduto e educação no Brasil

### 5.1 O mapa dos formatos

| Formato | Motor | Para quem | Métrica que manda | Referência numérica |
|---|---|---|---|---|
| **Lançamento semente** | vender antes de gravar, para lista pequena | primeiro produto | vendas sobre a lista | 🔴 |
| **Lançamento interno** | conteúdo gratuito em sequência, carrinho aberto curto, para a própria lista | quem tem audiência | custo por lead, comparecimento, conversão da lista | 🟡 meta de custo por lead R$ 1,50 a R$ 8; página de captura convertendo 20% a 40% [39] |
| **Lançamento externo (pago)** | o interno com tráfego pago e afiliados | quem já validou no interno | ROAS do lançamento | 🔴 |
| **Lançamento relâmpago** | carrinho de 2 a 10 dias, urgência | caixa rápido para lista existente | vendas no período | 🔴 |
| **Perpétuo** | captura, nutrição automática, oferta sempre aberta | oferta já validada | custo por lead × conversão do lead | 🟡 exemplo: 4% dos leads viram venda [26] |
| **Webinar / aula ao vivo** | inscrição, comparecimento, oferta no fim | ticket médio | comparecimento e conversão dos presentes | 🟡 35% a 45% de comparecimento [25]; 47,7% ao vivo na Livestorm [35] |
| **Desafio (vários dias)** | sequência de aulas com tarefa | comunidade engajada | conclusão por dia | 🔴 |
| **Produto de entrada + esteira** | produto barato, order bump, upsell | volume | ROAS da primeira compra, aceite do upsell | 🟡 conversão de página 2% a 5% [26] |
| **Aplicação com conversa** | formulário ou conversa que filtra, call de venda | ticket alto | custo por call qualificada, fechamento | 🔴 Brasil |
| **Evento presencial** | imersão de fim de semana, mentoria em grupo | ticket alto, comunidade | vendas no evento | 🔴 |

Fontes da tabela: definições dos lançamentos [36]; demais linhas [25][26][35][37][39].

### 5.2 O que se sabe de cada um

- 🟢 **Lançamento.** A Fórmula de Lançamento (Jeff Walker, popularizada no Brasil por Érico Rocha) segue como a linguagem do mercado: semente, interno, externo e relâmpago [36, 2026-08-14]. No Hotmart Fire 2025, Érico Rocha contou que fez em novembro de 2024 o maior lançamento da história da Hotmart e disse que o recorde veio de planejar melhor, **sem investir mais** que no lançamento anterior [38, 2025-08-28].
- 🟡 **Lançamento, números de praticante.** Meta de custo por lead de R$ 1,50 a R$ 8,00 e página de captura convertendo 20% a 40% [39]. Fonte sem método; servem de faixa, não de meta.
- 🟢 **A esteira como modelo da própria Hotmart.** O presidente da Hotmart descreveu no Fire 2025 a lógica: produto de entrada, depois o curso principal com o método completo, depois mentoria com acompanhamento [38].
- 🟡 **Perpétuo e lançamento juntos.** O padrão maduro descrito por fornecedor brasileiro é um perpétuo de base (o caixa do dia a dia) e alguns lançamentos por ano sobre a mesma lista [26, fornecedor]. A simulação deles: R$ 3.000 de mídia, custo por lead de R$ 6, 500 leads, 4% de conversão, 20 vendas de R$ 497, ROAS de 3,31; e o ponto de maior alavanca é a nutrição (passar de 4% para 5% sobe a receita 25% com a mesma verba) [26].
- 🟡 **Produto de entrada.** Exemplo típico: e-book de R$ 27 com order bump de R$ 47 e upsell de R$ 197. O erro clássico é desligar o funil olhando só o lucro do produto de entrada, antes da esteira render [26]. Somar order bump de R$ 97 com 25% de aceite e upsell de R$ 997 com 10% de aceite sobre 20 vendas acrescenta R$ 2.479 por mês sem mídia nova [26].
- 🟡 **Webinar e aula ao vivo.** O comparecimento cai quando a inscrição está longe do evento; sobe com lembrete por e-mail e WhatsApp, confirmação ativa ("responda SIM") e algo que só quem está ao vivo recebe [25]. Na base da Livestorm (7 milhões de inscrições, 33.786 sessões em 2025) quase metade das inscrições acontece na última semana, segundo leituras do relatório [35]; o número de 47,7% de comparecimento ao vivo vem de quem leu o relatório, não da página que consegui abrir.
- 🟡 **Erro de webinar:** transformar a aula inteira em pitch; a plateia sai antes da oferta [26].
- 🟢 **Aplicação com conversa.** Não se mede por custo por lead, e sim por custo por call qualificada e por taxa de fechamento; o filtro é o funil [26]. 🔴 Os números de comparecimento e fechamento de call que circulam (40% a 80% de comparecimento, 10% a 30% de fechamento) são de fontes norte-americanas sem método; ficaram fora.
- 🟢 **Evento presencial.** A Hotmart registrou criadores digitais fazendo imersões de fim de semana e eventos de 200 a 4.000 pessoas, e aponta o presencial como o ambiente mais quente para vender ticket alto [37, 2023-12-11].
- 🟡 **Checkout.** Fornecedor brasileiro diz que a aprovação de cartão média do mercado fica perto de 85% e que checkout bem calibrado passa de 93%; abandono médio de carrinho de cerca de 70% (Baymard) [25, fornecedor]. Pix e recuperação de boleto e cartão recusado viram venda sem tráfego novo.

### 5.3 O que está funcionando em 2025 e 2026 (teses)

- 🟡 **O funil brasileiro virou híbrido:** anúncio, conversa no WhatsApp (com IA na primeira resposta), call ou fechamento na própria conversa. A página continua para aula e para checkout. Apoio: WhatsApp com 77% de sucesso de contato em educação [20].
- 🟢 **O problema de educação é passar o bastão.** Em 2025, o número de empresas de educação abaixo da meta de marketing caiu de 72% para 57%, mas as abaixo da meta de vendas subiram para **77%**; só 19% dizem ter integração boa entre marketing e vendas, e **59% não têm acordo de nível de serviço** entre os dois [20].
- 🟡 **Tese:** para a maioria dos negócios de educação no Brasil, dinheiro a mais em tráfego compra mais lead que o comercial não atende. A primeira alavanca é a resposta, depois o tráfego.

---

## 6. Benchmarks de métricas, com fonte

| Métrica | Número | Escopo | Fonte | Selo |
|---|---|---|---|---|
| CPM Meta, prospecção ampla | € 0,40 a € 1,20 | Brasil, 2026 | [24] fornecedor | 🟡 baixa |
| CPM infoproduto | R$ 20 a R$ 45 (produto até R$ 297); R$ 35 a R$ 70 (acima de R$ 997) | Brasil, 2026 | [27] fornecedor | 🟡 baixa |
| CTR do link, alerta | abaixo de 0,8% | Brasil | [28] fornecedor | 🟡 baixa |
| CTR campanha de lead Meta | 2,59% | EUA, 2024 a 2025 | [11] | 🟢 |
| Custo por lead Meta | US$ 27,66; dentistas US$ 76,71 | EUA, 2024 a 2025 | [11] | 🟢 |
| Custo por lead Meta | mensal oscilando de US$ 0,81 a US$ 441,58; média US$ 88,8 | Brasil, 2025 a 2026 | [23] fornecedor | 🟡 muito baixa (ruído) |
| Custo por conversa iniciada | clínicas R$ 8 a R$ 25; infoproduto R$ 5 a R$ 15 | Brasil, 2026 | [28] fornecedor | 🟡 baixa |
| Conversão de página (RD) | média 19,9%; as 10% melhores acima de 50% | Brasil | [22] | 🟢 |
| Conversão de página de captura de lançamento | 20% a 40% | Brasil | [39] | 🟡 |
| Conversão de página de venda, tráfego frio | 1% a 3% | Brasil | [25] fornecedor | 🟡 |
| Conversão no CRM, saúde e estética | 16,0% | Brasil, 2025 | [21] | 🟢 |
| Sucesso do 1º contato pelo WhatsApp, educação | 77% | Brasil, 2025 | [20] | 🟢 |
| Comparecimento em aula ao vivo gratuita | 35% a 45% | relatórios de plataforma | [25] | 🟡 |
| CPA aceitável | até 30% a 35% do preço | Brasil | [27] fornecedor | 🟡 |
| Pesquisa Google: CPC / conversão / custo por lead | US$ 5,42 / 8,18% / US$ 66,69 | EUA, 2025 a 2026 | [19] | 🟢 |
| Custo por agendamento, comparecimento de call, CAC em educação para profissional de saúde | não achei | Brasil | | 🔴 |

- 🟡 **Leitura honesta:** os únicos números brasileiros com base grande e método declarado são os da RD Station. O resto é faixa de fornecedor. **A Superads mostra o tamanho do ruído:** o custo por lead do Brasil pulou de US$ 3,14 para US$ 337,46 de um mês para o outro na amostra deles [23]. Benchmark agregado de "Brasil, todos os setores" não serve para decidir nada.

---

## 7. Remarketing, conteúdo como aquecimento e escala

### 7.1 Remarketing

- 🟢 **Retargeting é o menos incremental.** No teste da Seer com a atribuição incremental, públicos muito estreitos (retargeting) e muito abertos foram os que menos geraram conversão que não aconteceria sozinha [13].
- 🟢 **No Advantage+, público personalizado vira sugestão** [3]. A máquina já mostra anúncio para quem interagiu, sem campanha separada.
- 🟡 **Quando separar mesmo assim:** (a) para mostrar uma mensagem diferente a quem já está no meio do funil (prova, objeção, prazo real); (b) para **excluir** clientes de campanha de aquisição (o Google já tem isso nativo [14]); (c) para recuperar checkout abandonado. Verba pequena, medida contra um grupo que não vê.

### 7.2 Conteúdo como aquecimento

- 🟡 **Tese.** O conteúdo orgânico deixou de ser "topo de funil" e virou **vitrine**: o lead que chega pelo anúncio abre o perfil antes de responder. Isso conversa com a decisão da Altta de tratar o Instagram como o site.
- 🟢 **Anúncio com criador (partnership ads).** Num relatório da Agentio com US$ 130 milhões de verba, anúncio publicado em parceria com o criador bateu o conteúdo do criador rodado do perfil da marca; a vantagem foi maior na aba de pesquisa (CTR +45%, conversão +143%, custo por aquisição −63%), mas nos Stories o custo por aquisição ficou 25% pior. Zuckerberg disse no balanço do primeiro trimestre de 2026 que a receita anualizada desse formato passou de US$ 10 bilhões [34, 2026-08].
- 🟡 **Para a Altta:** o formato parceria abre caminho para anúncios com profissionais de harmonização conhecidos (não com os sócios, se a regra das capas valer também para anúncio).

### 7.3 Escala vertical e horizontal

- 🟡 **Vertical** (mais verba no que funciona): subir em passos e juntar mudanças; o limite de 20% por vez é de praticante, não da Meta (ver 2.3).
- 🟡 **Horizontal** (mais coisas novas): novos **conceitos** de criativo (a forma mais barata, ver 2.1), novo canal (Google), nova porta de entrada (aula, diagnóstico, produto de entrada).
- 🟢 **O Google diz o mesmo para Demand Gen:** adicione ativos em vez de trocar, troque pouco por vez, e teste lote grande de criativo novo numa campanha nova [18].
- 🟡 **Sinal de que a escala parou:** custo por lead **qualificado** subindo enquanto o custo por lead da plataforma fica igual. É a máquina achando gente pior para preencher a mesma verba.

---

## 8. A rotina do gestor de tráfego

### 8.1 O painel

Uma linha por semana, com estas colunas (adaptado de [25] e [28]):

- **Entrada:** investimento, impressões, CPM, cliques no link, CTR, conversas ou leads da plataforma.
- **Funil (do CRM):** leads que responderam, qualificados, agendados, compareceram, vendas, receita recebida.
- **Cálculo:** custo por lead qualificado, custo por agendamento, CAC (mídia + ferramentas + comissão ÷ vendas), ROAS de caixa (recebido ÷ mídia), tempo médio de primeira resposta.
- **Criativo:** criativos novos na semana, quantos viraram vencedores, quanto da verba foi para vencedores [33].
- **Decisão (escrita):** o que piorou, a hipótese, a ação.

### 8.2 As regras de decisão

- 🟡 **Matar criativo:** gastou cerca de 2 vezes o custo alvo do evento sem entregar o evento. É regra que circula entre gestores; **não achei estudo que a valide**. A Motion confirma só que metade dos criativos é desligada antes de 28 dias [33].
- 🟢 **Não julgar campanha do Google antes de 50 conversões** (regra do próprio Google para Demand Gen) [18]. 🟡 Usar a mesma régua na Meta: julgar por **volume de eventos**, nunca por dias.
- 🟡 **Subir verba** quando o custo por lead qualificado (do CRM, não da plataforma) estiver abaixo da meta e o comercial tiver folga para atender. **Se o comercial não dá conta, subir verba é queimar lead.**
- 🟡 **Pausar campanha inteira** só por problema de negócio (oferta, página, atendimento), nunca por um dia ruim: Loomer lembra que a oscilação de dia para dia é normal no aprendizado [12], e o Google diz o mesmo [18].
- 🟡 **Mexer uma variável por vez**, e juntar mudanças numa edição só para reiniciar o aprendizado uma vez.

### 8.3 Cadência

- **Todo dia (curto):** a verba está entregando? Algum anúncio reprovado? A conta caiu? Lead sem resposta no CRM?
- **Toda semana:** a reunião do painel acima; matar e subir criativo; comparar plataforma com CRM; criativos novos na fila.
- **A cada ciclo de venda fechado:** CAC e ROAS de caixa por campanha e por criativo, com o lead já convertido. **Este prazo é de mercado responder** (o lead leva tempo para comprar), não de produção.

### 8.4 Ferramentas

🟢 Gerenciador de Anúncios e Gerenciador de Eventos da Meta (com o teste de eventos), Google Ads, UTM em todo link, a API de Conversões (site e mensagens) e o CRM como fonte da verdade [1][2][17]. 🟡 A pontuação de oportunidade da Meta [9] e a exploração de lance do Google [15] são sugestões da plataforma: aceitar o que não muda o evento otimizado, recusar o que muda.

---

## 9. Aplicação Altta

### 9.1 Vender o Academy pelo funil do Comercial

**O fato que mais pesa:** o Altta OS recebe WhatsApp pela **Uazapi**, que não é a API oficial. Pela documentação da Meta, a devolução de eventos de conversa (lead qualificado, compra) para otimizar o anúncio **exige a Cloud API** [2]. Hoje, então, um anúncio para WhatsApp que cai no número comercial da Altta **otimiza às cegas**: a Meta só sabe que houve conversa.

**Três caminhos, do melhor ao mais simples (🟡 recomendação):**

1. **Número comercial na Cloud API** (o mesmo número pode migrar). Ganha: evento de volta, otimização por lead e por compra [7], janela de entrada gratuita para o acompanhamento [6], e o questionário nativo quando chegar ao Brasil [29]. Custa: integração nova no OS e mensagem de modelo paga fora das janelas.
2. **Manter a Uazapi e usar formulário instantâneo** com a integração de CRM ("leads de conversão") [1]. Funciona se a Altta passar de 200 leads por mês e o comercial marcar a etapa no OS todo dia. O formulário cai no OS, e o comercial chama no WhatsApp.
3. **Manter a Uazapi e mandar a venda pela API de Conversões comum** (telefone com hash, `action_source` de sistema) [41]. Serve para medir e para criar público semelhante de compradores; **não otimiza o anúncio de WhatsApp**.

**A escada de eventos do Academy** (gravar no OS desde já, qualquer que seja o caminho): conversa iniciada, respondeu, qualificado (perfil certo), call ou diagnóstico agendado, compareceu, comprou. Otimizar pelo **qualificado** enquanto não houver volume de compra (ver 2.4).

**A estrutura de conta sugerida (🟡):**
- Uma campanha de **Leads em Advantage+**, destino WhatsApp do comercial (ou formulário, no caminho 2), público Brasil, com muitos conceitos de criativo.
- Uma campanha de **cadastro em aula ao vivo** (página), quando houver aula de aquisição; o comparecimento se puxa por WhatsApp [25].
- Verba mínima calculada pela regra dos 50 eventos por semana do evento otimizado (2.3).

**O funil que combina com 27 cursos vendidos separados (🟡):** o catálogo já é uma **esteira pronta**. Um curso de entrada barato como porta (o formato produto de entrada [26]), um curso complementar como order bump, e o pacote ou o próximo curso como upsell e como oferta da conversa. É o desenho que a própria Hotmart descreve [38]. A conversa no WhatsApp entra onde o ticket pede.

**A resposta é a primeira alavanca (🟡):** o painel do Comercial no OS deve mostrar o **tempo de primeira resposta** ao lado do custo por lead qualificado. Primeira resposta automática imediata (a IA de pré-atendimento) com duas ou três perguntas, e humano no qualificado [40].

**Medição (🟢 + 🟡):** a meta do Comercial se lê no OS (lead qualificado, venda, CAC de caixa), nunca no Gerenciador. Revisar qualquer relatório que dependa das janelas de visualização cortadas em 2026-01-12 [10].

**Crivo ético:** prazo e vaga só se forem reais. Contador regressivo falso em funil perpétuo fere o crivo de Cialdini que a biblioteca usa como veto.

### 9.2 O que o Academy ensina à clínica (e o que o Attlas precisa ter)

- 🟡 **Para a clínica, o anúncio para WhatsApp é o formato principal**, com raio de localização e muitos conceitos de criativo; formulário só se ela tiver CRM e volume.
- 🟢 **Saúde é cara:** nos EUA, dentistas tiveram o pior custo por lead da Meta (US$ 76,71) [11]; no Brasil, fornecedor estima R$ 8 a R$ 25 por conversa para clínicas [28, baixa]. O curso deve ensinar a medir **custo por avaliação agendada e por paciente**, não por conversa.
- 🟢 **A conversão de saúde e estética no CRM foi de 16% em 2025** [21]: o curso de vendas tem onde atuar.
- 🟡 **Para o Attlas, uma função que vira argumento de venda:** **devolver o paciente agendado e a venda para a Meta** (API de Conversões para mensagens). Só existe com Cloud API [2]; as 16 clínicas que hoje estão no Attlas pela Uazapi não teriam. Vale levar à equipe do Attlas como item de pesquisa.
- 🟡 **O agente de IA da Meta custa cerca de US$ 0,04 a US$ 0,05 por mensagem** [6]: é a régua de preço contra a qual a IA do Attlas vai ser comparada.

---

## 10. Onde discorda dos livros da biblioteca

- **Brunson (DotCom Secrets, funis).** O funil dele é uma sequência de páginas. No Brasil de 2026, o passo do meio virou **conversa no WhatsApp**, e a página ficou para aula e checkout [20][21]. A escada de valor dele continua de pé (é a esteira), mas o degrau entre um produto e outro é um chat.
- **Hormozi ($100M Leads).** Ele ensina a baixar a fricção e a gerar volume de lead com isca. Com a máquina atual, **isca barata ensina a Meta a trazer mais gente que pega isca**: sem devolver o lead qualificado ou a venda, o volume vira lixo [1][7]. A regra de volume dele vale para **criativo**, não para lead.
- **Schwartz (consciência e sofisticação).** Continua certo sobre a copy. O que mudou é quem escolhe o público: antes o anunciante escolhia a mídia e o título para o nível de consciência; agora **a máquina escolhe quem vê pelo próprio anúncio** [5]. Criativos para cada nível de consciência são, na prática, a diversificação criativa.
- **Suby (Sell Like Crazy, a estratégia de halo com retargeting).** O halo pressupõe campanha separada de retargeting para quem consumiu conteúdo. O teste de incrementalidade mostra o retargeting como o **menos incremental** [13], e no Advantage+ o público personalizado é só sugestão [3]. O conteúdo segue valendo como vitrine; a verba separada de retargeting encolhe.
- **Weinberg (Tração, o "olho de boi").** Testar vários canais em paralelo com pouco dinheiro choca com a regra dos 50 eventos: teste pequeno na Meta ou no Google não sai do aprendizado e devolve ruído [12][18]. Melhor testar menos canais por vez, com verba suficiente para o evento, e medir no CRM porque a atribuição encolheu [10].
- **Miller (StoryBrand).** Uma mensagem clara de marca continua necessária, mas **um roteiro só não alimenta a máquina**: a promessa é uma, os ângulos têm que ser muitos [33].
- **Cialdini.** Não discorda: reforça. Escassez de lançamento é legítima quando o carrinho fecha de verdade; o "perpétuo com prazo falso" que o mercado usa fere o crivo ético.

---

## 11. Lacunas

- 🔴 **Benchmark brasileiro com método** para custo por conversa, custo por agendamento, comparecimento de call e CAC, em educação vendida a profissional de saúde. Os números da seção 6 são de fornecedor.
- 🔴 **Se a Uazapi entrega o identificador do clique do anúncio** (`ctwa_clid`) na primeira mensagem, e se existe algum caminho oficial de evento de conversa fora da Cloud API. A documentação da Meta diz que não [2]; não testei a Uazapi.
- 🔴 **A janela gratuita depois do anúncio para WhatsApp:** a página oficial em português (2026-09-30) diz até 7 dias; fontes anteriores falam em 72 horas. Conferir na versão em inglês antes de montar a cadência.
- 🔴 **Se o questionário nativo no anúncio de WhatsApp já chegou ao Brasil** [29].
- 🔴 **Se QualifiedLead é aceito** na API de eventos de mensagem: a lista oficial diz que sim [2], um fornecedor diz que não [31].
- 🔴 **Volume de busca no Google** dos termos do nicho (harmonização + marketing, vendas, pacientes).
- 🔴 **A página oficial da Meta sobre a fase de aprendizado** não abriu (só o título). A regra dos 50 eventos vem de Loomer descrevendo a Meta [12]; a regra dos 20% não achei confirmada pela Meta.
- 🔴 **Números de lançamento com método no Brasil** (conversão média da lista, comparecimento nas aulas, ROAS). A Hotmart não publica.
- 🔴 **Funil de desafio:** nenhum número confiável.
- 🔴 **Relatório da ON24 de webinar** (60% de inscritos assistindo, ao vivo ou gravado) não abriu; ficou fora.
- 🔴 **WhatsApp Business no aplicativo (sem API):** se marcar compra por etiqueta já devolve conversão ao Gerenciador. Não achei documentação.
- 🔴 **Dados do próprio Altta OS:** a linha de base real da Altta (custo por lead qualificado, tempo de resposta, conversão por etapa) é o insumo que nenhuma pesquisa substitui.

---

## 12. Fontes

1. Meta for Developers, "Conversions API for CRM Integration", https://developers.facebook.com/documentation/ads-commerce/conversions-api/conversion-leads-integration (consultado em 2026-10-07)
2. Meta for Developers, "Conversions API for Business Messaging: Onboarding Guide", https://developers.facebook.com/documentation/ads-commerce/conversions-api/business-messaging (consultado em 2026-10-07)
3. Meta for Developers, "Experiência de campanha Advantage+ para vendas, apps e leads", https://developers.facebook.com/docs/marketing-api/advantage-campaigns (atualizado em 2026-06-17)
4. Meta for Developers Blog, "Upcoming ASC and AAC MAPI deprecation, Migration Options to Advantage+", https://developers.facebook.com/blog/post/2025/10/08/upcoming-asc-and-aac-mapi-deprecation-migration-options-to-advantage-plus/ (2025-10-08)
5. Engineering at Meta, "Meta Andromeda: Supercharging Advantage+ automation with the next-gen personalized ads retrieval engine", https://engineering.fb.com/2024/12/02/production-engineering/meta-andromeda-advantage-automation-next-gen-personalized-ads-retrieval-engine/ (2024-12-02)
6. Meta for Developers, "Preços na plataforma do WhatsApp Business", https://developers.facebook.com/docs/whatsapp/pricing/ (atualizado em 2026-09-30)
7. WhatsApp Business, "Otimização de anúncios para atingir metas de negócios", https://whatsappbusiness.com/pt-br/resources/resource-library/down-funnel-optimizations-whatsapp/ (consultado em 2026-10-07; dados de 2024)
8. WhatsApp Business Blog, "New Ways for Businesses to Do More with Messaging" (Conversations, São Paulo), https://whatsappbusiness.com/blog/new-ways-for-businesses-to-do-more-with-messaging/ (2024-06-06)
9. Social Media Today, "Meta Rolls Out Updates to Advantage+ AI Ad Targeting Tools", https://www.socialmediatoday.com/news/meta-advantage-plus-ad-updates-february-2025/739472/ (2025-02-06)
10. PPC Land, "Meta restricts attribution windows and data retention in Ads Insights API", https://ppc.land/meta-restricts-attribution-windows-and-data-retention-in-ads-insights-api/ (2025-10; efeito em 2026-01-12)
11. PPC Land, "Facebook ad costs jump 21% as lead campaigns struggle while traffic ads thrive" (dados WordStream/LocaliQ), https://ppc.land/facebook-ad-costs-jump-21-as-lead-campaigns-struggle-while-traffic-ads-thrive/ (2025-09-08)
12. Jon Loomer, "The Learning Phase Is Just a Label" (Pubcast), https://pubcast.jonloomer.com/the-learning-phase-is-just-a-label/ (2025-10-15)
13. Seer Interactive, "We Tested Meta's New Incremental Attribution setting on $1M in Ad Spend", https://www.seerinteractive.com/insights/we-tested-metas-new-incremental-attribution-setting-on-1m-in-ad-spend.-heres-how-it-works (2025-07-30)
14. Google Ads Help, "Google Marketing Live 2025: Your roundup of announcements", https://support.google.com/google-ads/answer/16290177 (2025-05-21)
15. Google, "Google Ads Highlights of 2025", https://business.google.com/us/accelerate/resources/announcements/2025-google-ads-recap/ (2025-12)
16. Google Ads Help, "How AI Max for Search campaigns works", https://support.google.com/google-ads/answer/15910187 (consultado em 2026-10-07)
17. Google Ads Help, "Best practices for generating high-quality leads", https://support.google.com/google-ads/answer/13489421 (consultado em 2026-10-07)
18. Google, "The YouTube performance four: best practices to drive conversions on Demand Gen campaigns", https://business.google.com/ca-en/accelerate/resources/articles/best-practices-for-high-performing-demand-gen-campaigns/ (consultado em 2026-10-07)
19. Search Engine Journal (dados WordStream/LocaliQ), "What Are Good Google Ads Benchmarks In 2026?", https://www.searchenginejournal.com/what-are-good-google-ads-benchmarks/546995/ (2026-06-16)
20. RD Station, "Panorama de Marketing Educacional" (Panoramas 2026), https://www.rdstation.com/pesquisas/panorama-marketing-vendas/edicao-2026/segmentos/educacao/ (2026; dados de 2025)
21. RD Station, "Dados RD Station: Benchmarks e Métricas Reais de Marketing, Vendas e Atendimento", https://www.rdstation.com/blog/marketing/dados-rd-station-benchmarks/ (2026-08-04)
22. RD Station, "Saiba o que é considerada uma boa taxa de conversão para Landing Pages", https://www.rdstation.com/blog/marketing/taxa-de-conversao-landing-pages/ (2024-12-03)
23. Superads, "Facebook Ads Cost Per Lead Benchmarks in Brazil" [fornecedor], https://www.superads.ai/facebook-ads-costs/cost-per-lead/brazil (consultado em 2026-10-07)
24. adlibrary, "Meta Ads Brazil Playbook 2026" [fornecedor], https://adlibrary.com/posts/meta-ads-brazil-playbook-2026 (2026-05-16)
25. HeroSpark, "As 17 métricas do infoprodutor" [fornecedor], https://herospark.com/guias/metricas-do-infoprodutor (verificado pelo autor em 2026-07)
26. HeroSpark, "Funil de vendas: o guia completo" [fornecedor], https://herospark.com/guias/funil-de-vendas (verificado pelo autor em 2026-07)
27. Trafius, "Tráfego pago para infoprodutos: as táticas que funcionam" [fornecedor], https://trafius.com.br/blog/trafego-pago-pra-infoproduto-as-taticas-que-funcionam (consultado em 2026-10-07)
28. Trafius, "Campanha de Mensagens no WhatsApp: Fluxo, Métricas e Otimização" [fornecedor], https://trafius.com.br/blog/campanha-de-mensagens-no-whatsapp-fluxo-e-metricas (consultado em 2026-10-07)
29. Rework, "A Meta Adicionou o Objetivo de Lead aos Anúncios do WhatsApp", https://resources.rework.com/pt/news/chat-conversational/meta-click-to-whatsapp-performance-marketer (2026-01-09)
30. respond.io, "Anúncios do WhatsApp: um guia prático" [fornecedor], https://respond.io/pt/blog/whatsapp-ads (consultado em 2026-10-07)
31. Zernio Docs, "Click-to-WhatsApp Ads" [fornecedor, documentação técnica], https://docs.zernio.com/platforms/whatsapp/ctwa (consultado em 2026-10-07)
32. Infobip Docs, "Meta Ads Reporting for Infobip Business Messaging" [fornecedor, documentação técnica], https://www.infobip.com/docs/integrations/meta-ads-reporting-for-business-messaging (consultado em 2026-10-07)
33. Motion, "Creative Benchmarks 2026: Key Benchmarks & Insights", https://motionapp.com/thumbstop-pulse/cb2026-key-benchmarks-and-insights (2026)
34. Net Influencer, "Meta Partnership Ads Outperform Licensed UGC Across $130M In Ad Spend, Report Finds", https://www.netinfluencer.com/meta-partnership-ads-outperform-licensed-ugc-across-130m-usd-in-ad-spend-report-finds/ (2026-08)
35. Livestorm, "The Pipeline Truth: 2026 Webinar Benchmark Report", https://livestorm.co/resources/reports/2026-webinar-benchmark-report (dados de 2025)
36. Hotmart Blog, "Tipos de lançamento digital: quais são, como funciona e vantagens", https://hotmart.com/pt-br/blog/tipos-de-lancamento-digital (2026-08-14)
37. Hotmart Blog, "Eventos presenciais: quando criadores digitais devem explorar o mundo real", https://hotmart.com/pt-br/blog/eventos-presenciais (2023-12-11)
38. Estado de Minas, "Hotmart Fire 2025 abre com debates sobre IA, lançamentos e empreendedorismo", https://em.com.br/tecnologia/2025/08/7237115-hotmart-fire-2025-abre-com-debates-sobre-ia-lancamentos-e-empreendedorismo.html (2025-08-28)
39. Inteligência Setorial, "Tráfego para Lançamento Digital: Saia dos 97% que Falham", https://inteligenciasetorial.com.br/marketing/trafego-para-lancamento-digital/ (consultado em 2026-10-07)
40. Teamgate, "Lead Response Time Study: How Speed Impacts Revenue" [fornecedor], https://teamgate.com/blog/lead-response-time-study (2025-12-10)
41. Adsmurai, "Meta's Offline Conversions API: What it is, why it's disappearing, and how to adapt" [fornecedor], https://www.adsmurai.com/en/articles/offline-conversion-meta-api (consultado em 2026-10-07)
42. Harvard Business Review, Oldroyd, McElheran e Elkington, "The Short Life of Online Sales Leads", https://hbr.org/2011/03/the-short-life-of-online-sales-leads (2011-03; acesso pago, só a existência foi confirmada)
43. Cyberclick, "Advantage+ Leads Campaigns: Lead Web & Lead Gen", https://www.cyberclick.es/numerical-blog/advantage-leads-campaigns (2026-05-13)

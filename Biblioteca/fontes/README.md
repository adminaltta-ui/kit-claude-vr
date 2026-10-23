# Fontes: o que não é livro

Aqui vive tudo que entra na base de conhecimento e **não** é livro: artigo, vídeo do YouTube,
reels do Instagram, PDF avulso, relatório de mercado, podcast, transcrição de call.

**Uma pasta por assunto, um arquivo por fonte.** A fonte mora na pasta do assunto em que ela
seria procurada primeiro, e o campo `assuntos` do frontmatter lista todos os assuntos que ela
cobre, de modo que **o índice abaixo repete a mesma fonte em cada seção que ela serve**. A pasta
organiza; a etiqueta cruza. **Só existe pasta onde existe fonte**: as 14 não são criadas de
antemão.

**Como entra:** skill `biblioteca-fontes` (`/biblioteca-fontes`).
**Como se consulta:** skill `biblioteca-decide`, nunca lendo tudo.
**As sínteses de livro** continuam em `../` (a raiz da biblioteca), indexadas pela Tabela 2 do
`../README.md`.

---

## Por que artigo e vídeo importam, se já existem 24 livros

Livro é forte em **método** e cego em **presente**. Os 24 livros do acervo não sabem nada sobre:

- o **mercado brasileiro de harmonização** (número, ticket, concorrente, conselho, regulação);
- **IA aplicada**, que é a vantagem operacional da Altta e não existia quando foram escritos;
- **o que está pegando agora** em criativo, gancho e linguagem de rede social;
- **plataforma e ferramenta** que existem hoje.

Esses quatro buracos são o trabalho desta pasta. Fonte de internet não compete com livro em
framework: ela cobre o que livro estruturalmente não cobre.

---

## Como buscar

```bash
# tudo de um assunto, inclusive o que mora em outra pasta
grep -rl "assuntos:.*mercado-e-setor" empresa/estrategia/biblioteca/fontes/

# só o que é dado duro, não opinião
grep -rl "peso: evidencia" empresa/estrategia/biblioteca/fontes/

# resumo de tudo, uma linha por fonte
grep -rh "^resumo:" empresa/estrategia/biblioteca/fontes/
```

---

## Os 14 assuntos

A taxonomia canônica está na skill `biblioteca-fontes`. Repetida aqui para consulta rápida:

`oferta-e-preco` · `aquisicao-e-canais` · `copy-e-criativo` · `funil-e-nutricao` · `vendas` ·
`educacao-e-curriculo` · `retencao-e-comunidade` · `cs-e-onboarding` · `metricas-e-financeiro` ·
`estrategia-e-posicionamento` · `gestao-e-time` · `produto-e-plataforma` · `mercado-e-setor` ·
`ia-e-tecnologia`

**Peso da fonte:** `evidencia` (dado primário, bate livro em pergunta factual) ·
`referencia` (framework com obra por trás, empata com livro) · `opiniao` (hipótese e
vocabulário, nunca fundamento sozinho).

---

## Índice por assunto

> **44 fontes.** Cada fonte aparece em todas as seções que serve, com o caminho real da pasta em
> que ela mora.
>
> **Marketing começa pela arquitetura.** Para criativo, tráfego, funil, oferta, copy e conteúdo, o primeiro
> lugar a olhar é [`ARQUITETURA-DO-MARKETING.md`](../ARQUITETURA-DO-MARKETING.md) (2026-10-07), que organiza
> estas fontes pelo trabalho a fazer.

### oferta-e-preco
- [`artigo-weaver-paradoxo-do-apresentador.md`](produto-e-plataforma/artigo-weaver-paradoxo-do-apresentador.md) · **evidencia** · quem monta o pacote soma, quem recebe faz a média: item morno somado a item forte baixa o valor do conjunto na avaliação isolada. Colide com Hormozi, jurisprudência §2.21 (2026-09-19)
- [`video-venture-health-advisor-clinica-harmonizacao.md`](mercado-e-setor/video-venture-health-advisor-clinica-harmonizacao.md) · **opiniao** · "desconto" extinto, trocado por "investir em você" (passa no crivo só com troca real, ver §7 da síntese); preço elástico da IA da Venture Health, de R$ 2 mil a R$ 40 mil conforme a percepção de valor (2026-09-27)
- [`video-g4-fernando-miranda-formato-proprio-e-criador.md`](copy-e-criativo/video-g4-fernando-miranda-formato-proprio-e-criador.md) · **referencia** · o produto educacional vendido no empate do CAC para formar a base que compra o caro depois: o desenho do Academy como rampa para o Attlas (2026-09-28)
- [`video-kelvin-cleto-construa-uma-vez-venda-para-muitos.md`](ia-e-tecnologia/video-kelvin-cleto-construa-uma-vez-venda-para-muitos.md) · **opiniao** · empacotar uma infraestrutura de IA por nicho e instalar em dezenas de empresas: setup de R$ 20 a 40 mil mais recorrência, com o preço calculado pelo potencial de receita gerado (2026-10-06)
- [`video-kelvin-cleto-sistema-operacional-de-ia.md`](ia-e-tecnologia/video-kelvin-cleto-sistema-operacional-de-ia.md) · **opiniao** · como um sistema operacional de IA é vendido por nicho a parceiros, em marca branca (2026-10-06)
- [`pesquisa-quem-vende-para-a-clinica-de-hof.md`](mercado-e-setor/pesquisa-quem-vende-para-a-clinica-de-hof.md) · **evidencia** · os preços e as ofertas de quem vende para o profissional de HOF: ou atalho barato (R$ 96,90 a R$ 419,90) ou mentoria com preço escondido; o meio, curso de um gargalo com preço à vista, está vazio (2026-10-07)
- [`video-vturb-csaba-borzasi-copy-milionaria.md`](copy-e-criativo/video-vturb-csaba-borzasi-copy-milionaria.md) · **referencia** · o público pesa mais que a oferta, e a oferta mais que a copy (41/39/20): começar pela lista certa (2026-10-07)
- [`video-vturb-diogo-gomes-processo-de-vsl.md`](copy-e-criativo/video-vturb-diogo-gomes-processo-de-vsl.md) · **referencia** · o bloco de oferta na ordem que converte, o bônus que resolve o próximo problema e a garantia; trocar só o bloco levou a conversão de 1% para 1,6% (2026-10-07)
- [`video-vturb-diogo-kobata-escala-8-digitos.md`](copy-e-criativo/video-vturb-diogo-kobata-escala-8-digitos.md) · **referencia** · testar o preço do front e do upsell juntos; upsell a 2,5 ou 3 vezes o front, medido pela contribuição sobre o ticket (2026-10-07)
- [`video-vturb-tiago-filemon-funil-de-vsl-perpetuo.md`](copy-e-criativo/video-vturb-tiago-filemon-funil-de-vsl-perpetuo.md) · **referencia** · o produto de entrada para tráfego frio (R$ 297 a R$ 397 por VSL direto no checkout), tirado do produto principal, com algo entregue pronto (2026-10-07)
- [`video-vturb-low-ticket-e-mini-vsl.md`](funil-e-nutricao/video-vturb-low-ticket-e-mini-vsl.md) · **referencia** · a oferta de low ticket pela Equação de Valor e pela única crença; âncora e desconto só com motivo verdadeiro (2026-10-07)
- [`video-vturb-low-ticket-escalar-100k-por-dia.md`](funil-e-nutricao/video-vturb-low-ticket-escalar-100k-por-dia.md) · **referencia** · low ticket como modelo de aquisição: o nome do mecanismo vende, uma promessa só, upsell de 2 a 5 vezes o front e o lucro no backend (2026-10-07)
- [`video-vturb-lucas-ramos-perpetuo-white-ascensao.md`](funil-e-nutricao/video-vturb-lucas-ramos-perpetuo-white-ascensao.md) · **referencia** · a escada "white": entrada de R$ 150 a R$ 300 por VSL (de R$ 30 a R$ 50 o CAC mata), upsell pronto e personalizado, abatimento na subida. ⚠️ Colide com o preço do Academy: `ARQUITETURA-DO-MARKETING.md` §4.1 (2026-10-07)

### aquisicao-e-canais
- [`video-rodrigo-noll-marketing-de-indicacao.md`](aquisicao-e-canais/video-rodrigo-noll-marketing-de-indicacao.md) · **referencia** · ⭐ os 16 vídeos do Rodrigo Noll (Base Viral), vídeo por vídeo: o Método VPI, os 14 tipos de recompensa, a gamificação em escada, o Duplo A e o "não comece pela ferramenta". É a base do programa de indicação do Attlas, by Indike; o cruzamento com as mentorias do João e o mercado está em `produto/attlas/indicacao/ESTUDO.md` (2026-10-16)
- [`video-frank-costa-processo-comercial-com-ia.md`](produto-e-plataforma/video-frank-costa-processo-comercial-com-ia.md) · **opiniao** · demonstração de um CRM próprio com IA em toda etapa comercial: modo foco, sales coach ao vivo, pós-call automático e IA gestora. Vota em "camada do CRM" na pendência da IA de atendimento (2026-09-05)
- [`relatorio-doctoralia-panorama-das-clinicas.md`](mercado-e-setor/relatorio-doctoralia-panorama-das-clinicas.md) · **evidencia** · pesquisa com gestores de clínica no Brasil: a dor é captar e faturar, 86% confirmam por WhatsApp, o Instagram é o principal canal, 75% pagam mídia (2026-09-19)
- [`video-venture-health-advisor-clinica-harmonizacao.md`](mercado-e-setor/video-venture-health-advisor-clinica-harmonizacao.md) · **opiniao** · o tráfego depende de gestor, criativo e atendente; grupo VIP de WhatsApp como canal de comunidade; ICP estreito no anúncio; e o próprio formato "advisor" no YouTube como aquisição da Venture Health (2026-09-27)
- [`video-g4-fernando-miranda-formato-proprio-e-criador.md`](copy-e-criativo/video-g4-fernando-miranda-formato-proprio-e-criador.md) · **referencia** · testar criador regional no tráfego pago contra o anúncio médio antes do orgânico; viral é topo, educacional converte e o pago leva até ele; palco como mídia (2026-09-28)
- [`video-frank-costa-conteudo-com-ia-sem-social-media.md`](ia-e-tecnologia/video-frank-costa-conteudo-com-ia-sem-social-media.md) · **opiniao** · conteúdo produzido e publicado por agente como canal de aquisição sem social media (2026-10-06)
- [`video-frank-costa-negocio-de-ia-para-medicos-300-mil.md`](ia-e-tecnologia/video-frank-costa-negocio-de-ia-para-medicos-300-mil.md) · **opiniao** · a startup de IA de atendimento para clínicas médicas mais próxima da Altta: funil de webinário para elevar a consciência antes da venda (2026-10-06)
- [`pesquisa-trafego-e-funil-2026.md`](aquisicao-e-canais/pesquisa-trafego-e-funil-2026.md) · **referencia** · ⭐ a fonte principal de tráfego pago: a conta da Meta em 2026, o anúncio para WhatsApp, o Google, a rotina do gestor; o resultado da conversa só volta para a Meta pela API oficial do WhatsApp, e o OS usa a Uazapi (2026-10-07)
- [`pesquisa-criativo-de-anuncio-2026.md`](copy-e-criativo/pesquisa-criativo-de-anuncio-2026.md) · **referencia** · o criativo virou a segmentação (Andromeda): testa-se conceito, não variação, e só 4 a 9% dos criativos vencem (2026-10-07)
- [`pesquisa-marketing-da-clinica-e-regras-dos-conselhos.md`](mercado-e-setor/pesquisa-marketing-da-clinica-e-regras-dos-conselhos.md) · **evidencia** · o que traz paciente para a clínica de HOF e as regras de anúncio da Meta e do Google para estética (2026-10-07)
- [`video-vturb-luan-chendes-escala-meta-ads.md`](aquisicao-e-canais/video-vturb-luan-chendes-escala-meta-ads.md) · **referencia** · ⭐ estrutura de campanha na Meta (teste, vencedores, 1/100/1), decisão pelo contexto e não pela métrica isolada, poucas campanhas com muita verba (2026-10-07)
- [`video-vturb-amanda-khayat-anuncio-5x5-e-sete-alavancas.md`](copy-e-criativo/video-vturb-amanda-khayat-anuncio-5x5-e-sete-alavancas.md) · **referencia** · pesquisar na rede que o comprador usa de verdade e montar o arsenal orgânico numa conta dedicada (na Altta, conta real) (2026-10-07)
- [`video-vturb-angelica-furtado-criativo-lateralizacao-e-lead.md`](copy-e-criativo/video-vturb-angelica-furtado-criativo-lateralizacao-e-lead.md) · **referencia** · soltar a leva importante no melhor dia da oferta; o criativo que vai bem na Meta pode falhar no YouTube (2026-10-07)
- [`video-vturb-anthony-carreiro-criativos-previsibilidade-e-escala.md`](copy-e-criativo/video-vturb-anthony-carreiro-criativos-previsibilidade-e-escala.md) · **referencia** · a Biblioteca de Anúncios por palavra de mercado e de nicho; o sinal de vencedor é a duplicação e a variação (2026-10-07)
- [`video-vturb-campolina-velozo-rodrigues-criativos-1m-dia.md`](copy-e-criativo/video-vturb-campolina-velozo-rodrigues-criativos-1m-dia.md) · **referencia** · pesquisa diária na Biblioteca de Anúncios e no orgânico; não testar criativo em conta ruim; brief separado por plataforma (2026-10-07)
- [`video-vturb-diogo-kobata-escala-8-digitos.md`](copy-e-criativo/video-vturb-diogo-kobata-escala-8-digitos.md) · **referencia** · oferta "saturada" é fatia de público saturada; validar o criativo pelo ROAS do funil inteiro, em três etapas (2026-10-07)
- [`video-vturb-guilherme-serraglio-criativos-white.md`](copy-e-criativo/video-vturb-guilherme-serraglio-criativos-white.md) · **referencia** · o anúncio é o 80/20 do funil; de 5 a 10 criativos por produto novo; o tráfego do produto barato traz seguidores (2026-10-07)
- [`video-vturb-matheus-lourenco-setor-de-criativos.md`](copy-e-criativo/video-vturb-matheus-lourenco-setor-de-criativos.md) · **referencia** · a conta de pesquisa que simula o público; a primeira variação do vencedor é de formato; UGC barato pode derrubar o CPM da conta (2026-10-07)
- [`video-vturb-paola-barbosa-anuncio-unicornio-e-time-de-ads.md`](copy-e-criativo/video-vturb-paola-barbosa-anuncio-unicornio-e-time-de-ads.md) · **referencia** · a referência escolhida pela palavra do nicho e do mecanismo; o formato pelo que o público consome no dia (2026-10-07)
- [`video-vturb-tiago-filemon-criativos-na-pratica.md`](copy-e-criativo/video-vturb-tiago-filemon-criativos-na-pratica.md) · **referencia** · o criativo como gargalo da escala; a abertura segmentada para achar o público de menor custo (2026-10-07)
- [`video-vturb-tiago-filemon-funil-de-vsl-perpetuo.md`](copy-e-criativo/video-vturb-tiago-filemon-funil-de-vsl-perpetuo.md) · **referencia** · achar oferta pela Biblioteca de Anúncios e pelo arquivo de referências; validar a VSL com verba pequena e com o link da bio (2026-10-07)
- [`video-vturb-low-ticket-e-mini-vsl.md`](funil-e-nutricao/video-vturb-low-ticket-e-mini-vsl.md) · **referencia** · a campanha de teste 1-3-2 em ABO e o teste em portfólio (no público pequeno da Altta, leitura de sinal, não validação) (2026-10-07)
- [`video-vturb-low-ticket-escalar-100k-por-dia.md`](funil-e-nutricao/video-vturb-low-ticket-escalar-100k-por-dia.md) · **referencia** · escalar sem concorrer consigo mesmo: limite de lance, várias contas, nada de campanha duplicada; depois do Andromeda o gestor de tráfego é gestor de criativo (2026-10-07)
- [`video-vturb-lucas-ramos-perpetuo-white-ascensao.md`](funil-e-nutricao/video-vturb-lucas-ramos-perpetuo-white-ascensao.md) · **referencia** · o tráfego do perpétuo "white" em três etapas: teste em ABO com meio ticket, pré-escala em CBO, escala com mexida de 20% a 30% por dia (2026-10-07)
- [`video-vinicius-troncoso-anuncio-para-servico.md`](aquisicao-e-canais/video-vinicius-troncoso-anuncio-para-servico.md) · **referencia** · ⭐ o anúncio para quem vende **serviço** (o caso da Altta e da clínica): as três munições, a sessão estratégica como oferta do clique, ROAS 3 para escalar serviço contra 2 no infoproduto (2026-10-07)

### copy-e-criativo
- [`video-frank-costa-conteudo-com-ia-sem-social-media.md`](ia-e-tecnologia/video-frank-costa-conteudo-com-ia-sem-social-media.md) · **opiniao** · agente de conteúdo que pesquisa pauta, escreve carrossel e roteiro no padrão do dono, pede aprovação em cada etapa e publica sozinho (2026-10-06)
- [`video-venture-health-advisor-clinica-harmonizacao.md`](mercado-e-setor/video-venture-health-advisor-clinica-harmonizacao.md) · **opiniao** · 10 criativos por semana; um depoimento vira seis criativos (reação, antes e depois, transição, comentário, estudo de caso); conscientização não vende, antes e depois vende; gravar fora do consultório (2026-09-27)
- [`video-g4-fernando-miranda-formato-proprio-e-criador.md`](copy-e-criativo/video-g4-fernando-miranda-formato-proprio-e-criador.md) · **referencia** · ⭐ a fonte principal de produção de conteúdo: virar o 01 em três passos (quem ganha, entrar na conversa, formato próprio e fiel), um perfil por formato, o dono não precisa ser a cara (2026-09-28)
- [`pesquisa-criativo-de-anuncio-2026.md`](copy-e-criativo/pesquisa-criativo-de-anuncio-2026.md) · **referencia** · ⭐ a fonte principal de criativo de anúncio pago: como a Meta escolhe o anúncio, formatos, ganchos, o processo de teste, as métricas do criativo e o criativo feito com IA (2026-10-07)
- [`pesquisa-marketing-da-clinica-e-regras-dos-conselhos.md`](mercado-e-setor/pesquisa-marketing-da-clinica-e-regras-dos-conselhos.md) · **evidencia** · o que nenhum criativo de clínica pode ter: avaliação gratuita, preço no anúncio do dentista, sorteio, a marca da toxina (2026-10-07)
- [`pesquisa-quem-vende-para-a-clinica-de-hof.md`](mercado-e-setor/pesquisa-quem-vende-para-a-clinica-de-hof.md) · **evidencia** · as promessas que o mercado de HOF já gastou ("fature X mil") e os ângulos livres para a Altta (2026-10-07)
- [`video-vturb-luan-chendes-escala-meta-ads.md`](aquisicao-e-canais/video-vturb-luan-chendes-escala-meta-ads.md) · **referencia** · o corpo vende e o gancho chama; cada anúncio é uma ideia completa; o redator se mede por assertividade (2026-10-07)
- [`video-vturb-amanda-khayat-anuncio-5x5-e-sete-alavancas.md`](copy-e-criativo/video-vturb-amanda-khayat-anuncio-5x5-e-sete-alavancas.md) · **referencia** · ⭐ a anatomia do anúncio em nove peças, os cinco modos de gerar gancho e corpo (5 × 5) e as sete alavancas para bater o controle (2026-10-07)
- [`video-vturb-angelica-furtado-criativo-lateralizacao-e-lead.md`](copy-e-criativo/video-vturb-angelica-furtado-criativo-lateralizacao-e-lead.md) · **referencia** · poucos ativos com muitas versões; copy montada a partir da pesquisa; a abertura da VSL nascida do criativo que vende (2026-10-07)
- [`video-vturb-anthony-carreiro-criativos-previsibilidade-e-escala.md`](copy-e-criativo/video-vturb-anthony-carreiro-criativos-previsibilidade-e-escala.md) · **referencia** · o criativo de previsibilidade (modelado do pago) e o de escala (do orgânico); bater o controle em quatro etapas; lateralizar o campeão (2026-10-07)
- [`video-vturb-campolina-velozo-rodrigues-criativos-1m-dia.md`](copy-e-criativo/video-vturb-campolina-velozo-rodrigues-criativos-1m-dia.md) · **referencia** · ⭐ minerar o criativo no pago (a estrutura) e no orgânico (a fachada); a leva como pergunta; o anúncio que não parece anúncio (2026-10-07)
- [`video-vturb-csaba-borzasi-copy-milionaria.md`](copy-e-criativo/video-vturb-csaba-borzasi-copy-milionaria.md) · **referencia** · a pesquisa em cinco pilares, a ideia grande, os seis tipos de abertura e os mecanismos do problema e da solução (2026-10-07)
- [`video-vturb-diogo-gomes-processo-de-vsl.md`](copy-e-criativo/video-vturb-diogo-gomes-processo-de-vsl.md) · **referencia** · ⭐ o processo de VSL: a tese em cinco peças, o cardápio de provas, a abertura escrita por último, o bloco de oferta (2026-10-07)
- [`video-vturb-diogo-kobata-escala-8-digitos.md`](copy-e-criativo/video-vturb-diogo-kobata-escala-8-digitos.md) · **referencia** · persona, elemento de curiosidade e dor como peças combináveis; um corpo, quatro ganchos; congruência macro com a VSL (2026-10-07)
- [`video-vturb-guilherme-serraglio-criativos-white.md`](copy-e-criativo/video-vturb-guilherme-serraglio-criativos-white.md) · **referencia** · o criativo "white": grande ideia, formato e estrutura, nessa ordem; mecanismo do problema, da solução e prova; nunca uma chamada só (2026-10-07)
- [`video-vturb-matheus-lourenco-setor-de-criativos.md`](copy-e-criativo/video-vturb-matheus-lourenco-setor-de-criativos.md) · **referencia** · ⭐ o criativo com especialista: o formato antes do gancho, formato do orgânico e estrutura do pago, as três levas (validação, escala, manutenção) (2026-10-07)
- [`video-vturb-paola-barbosa-anuncio-unicornio-e-time-de-ads.md`](copy-e-criativo/video-vturb-paola-barbosa-anuncio-unicornio-e-time-de-ads.md) · **referencia** · modelar no meio do espectro com a tabela de duas colunas; o gancho com três elementos; 20% do pack em aposta fora do padrão (2026-10-07)
- [`video-vturb-tiago-filemon-criativos-na-pratica.md`](copy-e-criativo/video-vturb-tiago-filemon-criativos-na-pratica.md) · **referencia** · ângulo é o tema e gancho é a abertura; os dez elementos do corpo; a ordem de otimização do vencedor (2026-10-07)
- [`video-vturb-tiago-filemon-funil-de-vsl-perpetuo.md`](copy-e-criativo/video-vturb-tiago-filemon-funil-de-vsl-perpetuo.md) · **referencia** · a VSL de trás para frente (oferta, mecanismo, história, abertura), montada pela estrutura invisível da referência (2026-10-07)
- [`video-vturb-low-ticket-e-mini-vsl.md`](funil-e-nutricao/video-vturb-low-ticket-e-mini-vsl.md) · **referencia** · a mini VSL de 3 a 6 minutos a partir da única crença, com prova na dose da afirmação; os ganchos de atenção qualificada (2026-10-07)
- [`video-vturb-low-ticket-escalar-100k-por-dia.md`](funil-e-nutricao/video-vturb-low-ticket-escalar-100k-por-dia.md) · **referencia** · o nome do mecanismo vende mais que o mecanismo; trocar os primeiros 15 a 30 segundos cria criativo novo; o formato é a maior alavanca (2026-10-07)
- [`video-vturb-lucas-ramos-perpetuo-white-ascensao.md`](funil-e-nutricao/video-vturb-lucas-ramos-perpetuo-white-ascensao.md) · **referencia** · a VSL como escada de sins; a abertura como o 80/20 (cinco por quinzena no A/B do player); o criativo que parece conteúdo (2026-10-07)
- [`video-vinicius-troncoso-anuncio-para-servico.md`](aquisicao-e-canais/video-vinicius-troncoso-anuncio-para-servico.md) · **referencia** · ganância ou medo (um só), a persona como pessoa, o mar roxo; o anúncio em gancho, corpo e CTA escritos separados e combinados; o esqueleto do anúncio de serviço (2026-10-07)

### funil-e-nutricao
- [`paper-duolingo-notificacoes-recorrentes.md`](retencao-e-comunidade/paper-duolingo-notificacoes-recorrentes.md) · **evidencia** · lembrete recorrente que varia e depende do contexto funciona, repetir o mesmo dessensibiliza; medir pela ação em até 2 horas (Duolingo, KDD 2020) (2026-09-19)
- [`video-g4-fernando-miranda-formato-proprio-e-criador.md`](copy-e-criativo/video-g4-fernando-miranda-formato-proprio-e-criador.md) · **referencia** · vídeo viral aterrissa no negócio e leva ao educacional longo (9 horas de vídeo, curso), que é onde a venda acontece (2026-09-28)
- [`video-frank-costa-negocio-de-ia-para-medicos-300-mil.md`](ia-e-tecnologia/video-frank-costa-negocio-de-ia-para-medicos-300-mil.md) · **opiniao** · funil de webinário para elevar a consciência do lead antes da venda (2026-10-06)
- [`video-kelvin-cleto-infraestrutura-de-ia-91-mil-em-5-dias.md`](ia-e-tecnologia/video-kelvin-cleto-infraestrutura-de-ia-91-mil-em-5-dias.md) · **opiniao** · o funil de 5 dias do lançamento da Growth AI e o que nele é manual e o que é automático (2026-10-06)
- [`video-kelvin-cleto-o-crm-morreu-maquina-de-receita.md`](ia-e-tecnologia/video-kelvin-cleto-o-crm-morreu-maquina-de-receita.md) · **opiniao** · a máquina de receita que rastreia a jornada inteira de cada pessoa, da primeira impressão à venda, em vez de só a etapa do lead (2026-10-06)
- [`pesquisa-trafego-e-funil-2026.md`](aquisicao-e-canais/pesquisa-trafego-e-funil-2026.md) · **referencia** · os funis de curso no Brasil em 2026 (lançamento, perpétuo, aplicação com call, webinar, desafio, produto de entrada) e os números de cada um (2026-10-07)
- [`video-vturb-luan-chendes-escala-meta-ads.md`](aquisicao-e-canais/video-vturb-luan-chendes-escala-meta-ads.md) · **referencia** · lançamento para a base com aceite e carrinho aberto com lives; página lenta derruba metade do tráfego (2026-10-07)
- [`video-vturb-amanda-khayat-anuncio-5x5-e-sete-alavancas.md`](copy-e-criativo/video-vturb-amanda-khayat-anuncio-5x5-e-sete-alavancas.md) · **referencia** · o anúncio vende o clique e leva à VSL; a mini VSL de 3 a 6 minutos como funil barato de testar (2026-10-07)
- [`video-vturb-angelica-furtado-criativo-lateralizacao-e-lead.md`](copy-e-criativo/video-vturb-angelica-furtado-criativo-lateralizacao-e-lead.md) · **referencia** · a microabertura que liga o formato do criativo ao da VSL; criativo e abertura novos ressuscitam oferta parada (2026-10-07)
- [`video-vturb-campolina-velozo-rodrigues-criativos-1m-dia.md`](copy-e-criativo/video-vturb-campolina-velozo-rodrigues-criativos-1m-dia.md) · **referencia** · a página começa como continuação do criativo; público barato pede uma etapa no meio (quiz, pré-página) (2026-10-07)
- [`video-vturb-diogo-gomes-processo-de-vsl.md`](copy-e-criativo/video-vturb-diogo-gomes-processo-de-vsl.md) · **referencia** · as quatro funções da VSL (abertura, história, tese, oferta); com pouco caixa, produto barato com página ou vídeo curto (2026-10-07)
- [`video-vturb-diogo-kobata-escala-8-digitos.md`](copy-e-criativo/video-vturb-diogo-kobata-escala-8-digitos.md) · **referencia** · o funil escala sobre criativo, VSL e upsell; pré-página só com passagem acima de 60% a 70%; a posição da garantia muda a conversão (2026-10-07)
- [`video-vturb-guilherme-serraglio-criativos-white.md`](copy-e-criativo/video-vturb-guilherme-serraglio-criativos-white.md) · **referencia** · escrever o criativo só com a próxima peça pronta; o cartão final de 10 segundos com promessa, benefício e preço (2026-10-07)
- [`video-vturb-matheus-lourenco-setor-de-criativos.md`](copy-e-criativo/video-vturb-matheus-lourenco-setor-de-criativos.md) · **referencia** · fatiar o funil e checar CPM e CTR antes de reescrever a VSL; o corpo de mini tutorial vende mais upsell (2026-10-07)
- [`video-vturb-tiago-filemon-criativos-na-pratica.md`](copy-e-criativo/video-vturb-tiago-filemon-criativos-na-pratica.md) · **referencia** · o criativo vende o próximo passo, e o fim dele casa com o começo da etapa seguinte (2026-10-07)
- [`video-vturb-tiago-filemon-funil-de-vsl-perpetuo.md`](copy-e-criativo/video-vturb-tiago-filemon-funil-de-vsl-perpetuo.md) · **referencia** · ⭐ o funil mínimo de VSL perpétuo (anúncio, página, checkout, upsell) e o perpétuo empilhado com o lançamento (2026-10-07)
- [`video-vturb-low-ticket-e-mini-vsl.md`](funil-e-nutricao/video-vturb-low-ticket-e-mini-vsl.md) · **referencia** · ⭐ o funil de quiz com mini VSL: o quiz pelo SPIN, o diagnóstico, a mini VSL que faz 80% da conversão, a página e o checkout (2026-10-07)
- [`video-vturb-low-ticket-escalar-100k-por-dia.md`](funil-e-nutricao/video-vturb-low-ticket-escalar-100k-por-dia.md) · **referencia** · o quiz longo com duas mini VSLs, o upsell fora da página de obrigado, a recuperação por WhatsApp (cerca de 20% do faturamento) (2026-10-07)
- [`video-vturb-lucas-ramos-perpetuo-white-ascensao.md`](funil-e-nutricao/video-vturb-lucas-ramos-perpetuo-white-ascensao.md) · **referencia** · ⭐ os cinco caminhos de ascensão (upsell, workshop, formulário, webinário diário, lançamento) e o convite na hora da compra (2026-10-07)
- [`video-vinicius-troncoso-anuncio-para-servico.md`](aquisicao-e-canais/video-vinicius-troncoso-anuncio-para-servico.md) · **referencia** · o funil de sessão estratégica do serviço e o otimizar da boca para o fundo; o connect rate como erro estrutural (2026-10-07)

### vendas
- [`artigo-cadencia-de-follow-up-e-o-ultimo-toque.md`](comercial/artigo-cadencia-de-follow-up-e-o-ultimo-toque.md) · **opiniao** · a cadência de follow-up e o último toque, o que avisa que você vai parar, como o de maior resposta. Converge com o "e-mail mágico" do `voss`. ⚠️ Números de fornecedor de software, não fecham decisão sozinhos (2026-09-21)
- [`video-frank-costa-processo-comercial-com-ia.md`](produto-e-plataforma/video-frank-costa-processo-comercial-com-ia.md) · **opiniao** · demonstração de um CRM próprio com IA em toda etapa comercial: modo foco, sales coach ao vivo, pós-call automático e IA gestora. Vota em "camada do CRM" na pendência da IA de atendimento (2026-09-05)
- [`video-venture-health-advisor-clinica-harmonizacao.md`](mercado-e-setor/video-venture-health-advisor-clinica-harmonizacao.md) · **opiniao** · marketing gera o lead, a IA atende, a vendedora fecha; comparecimento como gargalo e como subir (vídeo com o nome, consulta paga); preparação pelo formulário nativo; documentar toda cobrança ao cliente (2026-09-27)
- [`video-frank-costa-ia-no-pos-venda-e-os-400-mil.md`](ia-e-tecnologia/video-frank-costa-ia-no-pos-venda-e-os-400-mil.md) · **opiniao** · upsell e depoimento como etapas do sistema de pós-venda, com a IA gestora cobrando o time (2026-10-06)
- [`video-frank-costa-negocio-de-ia-para-medicos-300-mil.md`](ia-e-tecnologia/video-frank-costa-negocio-de-ia-para-medicos-300-mil.md) · **opiniao** · operação de IA de atendimento com SDR supervisor, a secretária como aliada e a entrega rápida que fecha a venda (2026-10-06)
- [`video-kelvin-cleto-jev-copiloto-de-vendas.md`](ia-e-tecnologia/video-kelvin-cleto-jev-copiloto-de-vendas.md) · **opiniao** · copiloto que escuta a reunião de vendas, com modelo barato na triagem e o caro só quando precisa (R$ 15 em vez de R$ 30) (2026-10-06)
- [`video-vinicius-troncoso-anuncio-para-servico.md`](aquisicao-e-canais/video-vinicius-troncoso-anuncio-para-servico.md) · **referencia** · o lead qualificado (MQL) e o win rate: quem fatura mais não é quem mais compra; com lead dentro do perfil e venda baixa, olhar oferta, quebra de objeção e vendedor, nessa ordem (2026-10-07)

### educacao-e-curriculo
- [`video-frank-costa-processo-comercial-com-ia.md`](produto-e-plataforma/video-frank-costa-processo-comercial-com-ia.md) · **opiniao** · demonstração de um CRM próprio com IA em toda etapa comercial: modo foco, sales coach ao vivo, pós-call automático e IA gestora. Vota em "camada do CRM" na pendência da IA de atendimento (2026-09-05) ⚠️ só o roleplay diário com IA, transplantável para o Academy
- [`video-g4-fernando-miranda-formato-proprio-e-criador.md`](copy-e-criativo/video-g4-fernando-miranda-formato-proprio-e-criador.md) · **referencia** · o que o Academy ensina à clínica sobre conteúdo: formato fiel e entrar na conversa que a paciente já consome. ⚠️ "o dono não precisa gravar" não atravessa inteiro para a HOF (2026-09-28)
- [`video-vturb-csaba-borzasi-copy-milionaria.md`](copy-e-criativo/video-vturb-csaba-borzasi-copy-milionaria.md) · **referencia** · aprender ensinando de volta, curso moderno junto com os clássicos, e o desmonte diário de peças que venderam como conteúdo de autoridade (2026-10-07)

### retencao-e-comunidade
- [`video-rodrigo-noll-marketing-de-indicacao.md`](aquisicao-e-canais/video-rodrigo-noll-marketing-de-indicacao.md) · **referencia** · indicação também retém: o cliente indicado fica mais, o clube fechado de embaixadores para ticket alto, a escada que prende como jogo (2026-10-16)
- [`artigo-csacademy-modelos-de-atendimento-touch.md`](cs-e-onboarding/artigo-csacademy-modelos-de-atendimento-touch.md) · **referencia** · os 4 modelos de atendimento (high, mid, low e tech touch) e o critério de ticket para decidir qual degrau da escada recebe qual (2026-09-05)
- [`paper-duolingo-notificacoes-recorrentes.md`](retencao-e-comunidade/paper-duolingo-notificacoes-recorrentes.md) · **evidencia** · lembrete diário que varia e depende do contexto funciona, repetir o mesmo dessensibiliza; baixar o esforço do dia (1 lição em vez da meta) subiu a retenção (2026-09-19)
- [`paper-kivetz-gradiente-de-meta.md`](produto-e-plataforma/paper-kivetz-gradiente-de-meta.md) · **evidencia** · quanto mais perto da meta, mais rápido se age; começar com progresso já marcado acelera 20%; a velocidade rumo à primeira meta prevê quem fica (2026-09-19)
- [`artigo-amabile-o-poder-das-pequenas-vitorias.md`](produto-e-plataforma/artigo-amabile-o-poder-das-pequenas-vitorias.md) · **referencia** · ter avançado em algo que importa, mesmo pouco, é o que mais faz o dia de trabalho ser bom; progresso registrado motiva mais que reconhecimento (mais Harkin 2016) (2026-09-19)
- [`relatorio-pendo-adocao-de-funcionalidades.md`](produto-e-plataforma/relatorio-pendo-adocao-de-funcionalidades.md) · **evidencia** · 80% das funcionalidades raramente ou nunca usadas; as quatro dimensões da adoção (amplitude, profundidade, tempo até adotar, duração) (2026-09-19)
- [`video-frank-costa-ia-no-pos-venda-e-os-400-mil.md`](ia-e-tecnologia/video-frank-costa-ia-no-pos-venda-e-os-400-mil.md) · **opiniao** · régua de risco, metas de 30 e 90 dias e depoimento como sistema de retenção feito com IA (2026-10-06)

### cs-e-onboarding
- [`artigo-csacademy-modelos-de-atendimento-touch.md`](cs-e-onboarding/artigo-csacademy-modelos-de-atendimento-touch.md) · **referencia** · os 4 modelos de atendimento (high, mid, low e tech touch) e o critério de ticket para decidir qual degrau da escada recebe qual (2026-09-05)
- [`paper-kivetz-gradiente-de-meta.md`](produto-e-plataforma/paper-kivetz-gradiente-de-meta.md) · **evidencia** · começar a pessoa com progresso já marcado acelera a primeira meta, e a velocidade rumo a ela prevê quem fica: sinal precoce de saúde (2026-09-19)
- [`video-frank-costa-processo-comercial-com-ia.md`](produto-e-plataforma/video-frank-costa-processo-comercial-com-ia.md) · **opiniao** · demonstração de um CRM próprio com IA em toda etapa comercial: modo foco, sales coach ao vivo, pós-call automático e IA gestora. Vota em "camada do CRM" na pendência da IA de atendimento (2026-09-05) ⚠️ só a lacuna: o vídeo termina no fechamento e não cobre pós-venda
- [`video-frank-costa-ia-no-pos-venda-e-os-400-mil.md`](ia-e-tecnologia/video-frank-costa-ia-no-pos-venda-e-os-400-mil.md) · **opiniao** · o sistema de sucesso do cliente com IA: onboarding, régua de risco, metas de 30 e 90 dias, depoimento e upsell; o título engana, os R$ 400 mil são um depoimento (2026-10-06)
- [`video-frank-costa-negocio-de-ia-para-medicos-300-mil.md`](ia-e-tecnologia/video-frank-costa-negocio-de-ia-para-medicos-300-mil.md) · **opiniao** · entrega rápida como parte da retenção da startup de IA para clínicas (2026-10-06)

### metricas-e-financeiro
- [`artigo-csacademy-modelos-de-atendimento-touch.md`](cs-e-onboarding/artigo-csacademy-modelos-de-atendimento-touch.md) · **referencia** · os 4 modelos de atendimento (high, mid, low e tech touch) e o critério de ticket para decidir qual degrau da escada recebe qual (2026-09-05)
- [`video-frank-costa-processo-comercial-com-ia.md`](produto-e-plataforma/video-frank-costa-processo-comercial-com-ia.md) · **opiniao** · demonstração de um CRM próprio com IA em toda etapa comercial: modo foco, sales coach ao vivo, pós-call automático e IA gestora. Vota em "camada do CRM" na pendência da IA de atendimento (2026-09-05)
- [`video-venture-health-advisor-clinica-harmonizacao.md`](mercado-e-setor/video-venture-health-advisor-clinica-harmonizacao.md) · **opiniao** · o funil lead → agendamento → comparecimento → venda como métrica do comercial da clínica; CPF separado do CNPJ, pró-labore e caixa; "faturamento é ego" (2026-09-27)
- [`video-kelvin-cleto-o-crm-morreu-maquina-de-receita.md`](ia-e-tecnologia/video-kelvin-cleto-o-crm-morreu-maquina-de-receita.md) · **opiniao** · rastrear a jornada inteira de cada pessoa como a métrica que o CRM de etapa não dá (2026-10-06)
- [`pesquisa-trafego-e-funil-2026.md`](aquisicao-e-canais/pesquisa-trafego-e-funil-2026.md) · **referencia** · as métricas e as médias de tráfego, a atribuição depois de 2026-01-12 (sem as janelas de 7 e 28 dias por visualização) e as regras de decisão do gestor (2026-10-07)
- [`video-vturb-luan-chendes-escala-meta-ads.md`](aquisicao-e-canais/video-vturb-luan-chendes-escala-meta-ads.md) · **referencia** · decidir pelo agregado e nunca pela métrica isolada; assertividade do redator acima de 50% (2026-10-07)
- [`video-vturb-angelica-furtado-criativo-lateralizacao-e-lead.md`](copy-e-criativo/video-vturb-angelica-furtado-criativo-lateralizacao-e-lead.md) · **referencia** · a venda manda, o CPC é secundário e a taxa de gancho é terciária; retenção perto de 60% no primeiro minuto da VSL é boa (2026-10-07)
- [`video-vturb-anthony-carreiro-criativos-previsibilidade-e-escala.md`](copy-e-criativo/video-vturb-anthony-carreiro-criativos-previsibilidade-e-escala.md) · **referencia** · taxa de gancho alta em anúncio que não vende aponta gancho para empilhar; medir o redator pelo lucro dos anúncios dele (2026-10-07)
- [`video-vturb-campolina-velozo-rodrigues-criativos-1m-dia.md`](copy-e-criativo/video-vturb-campolina-velozo-rodrigues-criativos-1m-dia.md) · **referencia** · a ordem de leitura (venda, CPA, início de compra, gancho, CPC, CPM) e o diagnóstico de cada combinação de métricas (2026-10-07)
- [`video-vturb-diogo-kobata-escala-8-digitos.md`](copy-e-criativo/video-vturb-diogo-kobata-escala-8-digitos.md) · **referencia** · ⭐ ticket médio do funil, contribuição do upsell sobre o front e LTV por fonte de tráfego; validar pelo ROAS do funil inteiro (2026-10-07)
- [`video-vturb-matheus-lourenco-setor-de-criativos.md`](copy-e-criativo/video-vturb-matheus-lourenco-setor-de-criativos.md) · **referencia** · as sete métricas da repescagem com a régua da própria conta; CPM alto aponta formato, CTR baixo aponta CTA (2026-10-07)
- [`video-vturb-paola-barbosa-anuncio-unicornio-e-time-de-ads.md`](copy-e-criativo/video-vturb-paola-barbosa-anuncio-unicornio-e-time-de-ads.md) · **referencia** · o controle por pack e por redator (faturamento, ROAS, assertividade), ordenado pela nomenclatura (2026-10-07)
- [`video-vturb-low-ticket-escalar-100k-por-dia.md`](funil-e-nutricao/video-vturb-low-ticket-escalar-100k-por-dia.md) · **referencia** · o lucro final (front mais backend) como métrica; métrica secundária nunca decide teste; passagem do quiz acima de 50% (2026-10-07)
- [`video-vturb-lucas-ramos-perpetuo-white-ascensao.md`](funil-e-nutricao/video-vturb-lucas-ramos-perpetuo-white-ascensao.md) · **referencia** · retorno final igual a ticket médio dividido pelo CAC; ler VSL, tráfego e criativo em cadeia; meta de 20% a 25% de subida ao back end (2026-10-07)
- [`video-vinicius-troncoso-anuncio-para-servico.md`](aquisicao-e-canais/video-vinicius-troncoso-anuncio-para-servico.md) · **referencia** · ⭐ a árvore de métricas do anúncio com a régua de serviço separada da de infoproduto (gancho, corpo, CTR, connect rate), o custo por lead qualificado, o CAC por criativo vindo do CRM e LTV ÷ CAC de 3 (2026-10-07)

### estrategia-e-posicionamento
- [`video-venture-health-advisor-clinica-harmonizacao.md`](mercado-e-setor/video-venture-health-advisor-clinica-harmonizacao.md) · **opiniao** · a Venture Health, referência da Altta, conta por que saiu de agência (depende do cliente, não escala) para IA com sistema e mais de 100 clientes; o custo de troca do sistema como LTV (2026-09-27)
- [`video-g4-fernando-miranda-formato-proprio-e-criador.md`](copy-e-criativo/video-g4-fernando-miranda-formato-proprio-e-criador.md) · **referencia** · marca pessoal como ativo; autoridade transborda do produto original para tudo que a base confia; atenção é soma zero (2026-09-28)
- [`video-kelvin-cleto-construa-uma-vez-venda-para-muitos.md`](ia-e-tecnologia/video-kelvin-cleto-construa-uma-vez-venda-para-muitos.md) · **opiniao** · construir uma vez por nicho e vender a muitas empresas como posicionamento de uma empresa de IA (2026-10-06)
- [`video-kelvin-cleto-onde-colocar-ia-na-empresa.md`](ia-e-tecnologia/video-kelvin-cleto-onde-colocar-ia-na-empresa.md) · **opiniao** · decidir onde colocar IA pelo fluxo do dinheiro: matriz de impacto por proximidade da receita e as camadas Revenue, Efficiency e Operational AI (2026-10-06)
- [`video-kelvin-cleto-sistema-operacional-de-ia.md`](ia-e-tecnologia/video-kelvin-cleto-sistema-operacional-de-ia.md) · **opiniao** · a estrutura de um sistema operacional com IA (estratégia no centro, cérebro de dados, agentes por área) como visão de empresa (2026-10-06)
- [`video-vturb-luan-chendes-escala-meta-ads.md`](aquisicao-e-canais/video-vturb-luan-chendes-escala-meta-ads.md) · **referencia** · escolher mercado pelo tamanho do bolo e pela fatia que fica com você; o gargalo raramente é o tráfego (2026-10-07)
- [`video-vturb-csaba-borzasi-copy-milionaria.md`](copy-e-criativo/video-vturb-csaba-borzasi-copy-milionaria.md) · **referencia** · ideias grandes têm prazo de validade e voltam em ciclo; no mercado cético, a ideia grande se separa do mecanismo (2026-10-07)
- [`video-vturb-guilherme-serraglio-criativos-white.md`](copy-e-criativo/video-vturb-guilherme-serraglio-criativos-white.md) · **referencia** · construir primeiro o produto de maior resultado e usar o barato e o conteúdo como aquisição para ele (2026-10-07)
- [`video-vturb-lucas-ramos-perpetuo-white-ascensao.md`](funil-e-nutricao/video-vturb-lucas-ramos-perpetuo-white-ascensao.md) · **referencia** · lançamento é ferramenta, não modelo de negócio; o perpétuo de entrada alimenta a escada inteira (2026-10-07)

### gestao-e-time
- [`video-frank-costa-processo-comercial-com-ia.md`](produto-e-plataforma/video-frank-costa-processo-comercial-com-ia.md) · **opiniao** · demonstração de um CRM próprio com IA em toda etapa comercial: modo foco, sales coach ao vivo, pós-call automático e IA gestora. Vota em "camada do CRM" na pendência da IA de atendimento (2026-09-05)
- [`artigo-amabile-o-poder-das-pequenas-vitorias.md`](produto-e-plataforma/artigo-amabile-o-poder-das-pequenas-vitorias.md) · **referencia** · o princípio do progresso: 669 gestores acham que o elogio motiva, 12.000 diários dizem que é ter avançado (2026-09-19)
- [`video-g4-fernando-miranda-formato-proprio-e-criador.md`](copy-e-criativo/video-g4-fernando-miranda-formato-proprio-e-criador.md) · **referencia** · quem grava é quem ama gravar e performa, não obrigatoriamente o fundador: o caso V4 (Dener parou, o sócio grava) (2026-09-28)
- [`video-frank-costa-ia-no-pos-venda-e-os-400-mil.md`](ia-e-tecnologia/video-frank-costa-ia-no-pos-venda-e-os-400-mil.md) · **opiniao** · a IA gestora que cobra o time e o método de transformar uma conversa em processo (2026-10-06)
- [`video-vturb-luan-chendes-escala-meta-ads.md`](aquisicao-e-canais/video-vturb-luan-chendes-escala-meta-ads.md) · **referencia** · time por comportamento, três feedbacks antes de desligar, daily de 15 minutos, gestor de projeto no squad (2026-10-07)
- [`video-vturb-amanda-khayat-anuncio-5x5-e-sete-alavancas.md`](copy-e-criativo/video-vturb-amanda-khayat-anuncio-5x5-e-sete-alavancas.md) · **referencia** · o gargalo é gente boa de anúncio e quem saiba ensinar; feedback com caminho, não só crítica (2026-10-07)
- [`video-vturb-angelica-furtado-criativo-lateralizacao-e-lead.md`](copy-e-criativo/video-vturb-angelica-furtado-criativo-lateralizacao-e-lead.md) · **referencia** · a head revisa toda copy lendo em voz alta com quem escreveu; decisão de teste a três (criativo, oferta, tráfego) (2026-10-07)
- [`video-vturb-anthony-carreiro-criativos-previsibilidade-e-escala.md`](copy-e-criativo/video-vturb-anthony-carreiro-criativos-previsibilidade-e-escala.md) · **referencia** · o fluxo direto entre redator, editor e tráfego; o agente de IA vertical treinado no processo (2026-10-07)
- [`video-vturb-campolina-velozo-rodrigues-criativos-1m-dia.md`](copy-e-criativo/video-vturb-campolina-velozo-rodrigues-criativos-1m-dia.md) · **referencia** · a rotina da leva (pesquisa de manhã, escrita por último), o documento do editor e o caderno de cada leva (2026-10-07)
- [`video-vturb-diogo-kobata-escala-8-digitos.md`](copy-e-criativo/video-vturb-diogo-kobata-escala-8-digitos.md) · **referencia** · a reunião semanal de criativos, em que o acerto é da operação; cada função lê o seu padrão (2026-10-07)
- [`video-vturb-matheus-lourenco-setor-de-criativos.md`](copy-e-criativo/video-vturb-matheus-lourenco-setor-de-criativos.md) · **referencia** · ⭐ criativo é um setor (redator, editor, especialista), com dias fixos, call criativa de 40 minutos e repescagem semanal (2026-10-07)
- [`video-vturb-paola-barbosa-anuncio-unicornio-e-time-de-ads.md`](copy-e-criativo/video-vturb-paola-barbosa-anuncio-unicornio-e-time-de-ads.md) · **referencia** · ⭐ gerir time de anúncio: revisão ao vivo, a pergunta "validou onde?", a reunião Shark Tank, a Bíblia dos Ads e a revisão dupla da edição (2026-10-07)
- [`video-vturb-tiago-filemon-criativos-na-pratica.md`](copy-e-criativo/video-vturb-tiago-filemon-criativos-na-pratica.md) · **referencia** · duas esteiras com dono e cota (criação e otimização), mais a esteira de ofertas (2026-10-07)
- [`video-vturb-low-ticket-escalar-100k-por-dia.md`](funil-e-nutricao/video-vturb-low-ticket-escalar-100k-por-dia.md) · **referencia** · repetição com correção, oferta atrás de oferta num nicho só; o dono sabe copy e tráfego para diagnosticar (2026-10-07)
- [`video-vturb-lucas-ramos-perpetuo-white-ascensao.md`](funil-e-nutricao/video-vturb-lucas-ramos-perpetuo-white-ascensao.md) · **referencia** · copy e tráfego são o coração e não se delegam cedo; separar quem testa de quem escala; gravação semanal fixa com o especialista (2026-10-07)

### produto-e-plataforma
- [`video-frank-costa-processo-comercial-com-ia.md`](produto-e-plataforma/video-frank-costa-processo-comercial-com-ia.md) · **opiniao** · demonstração de um CRM próprio com IA em toda etapa comercial: modo foco, sales coach ao vivo, pós-call automático e IA gestora. Vota em "camada do CRM" na pendência da IA de atendimento (2026-09-05). Seção "O que vira Attlas" acrescentada em 2026-10-06
- [`artigo-csacademy-modelos-de-atendimento-touch.md`](cs-e-onboarding/artigo-csacademy-modelos-de-atendimento-touch.md) · **referencia** · os 4 modelos de atendimento (high, mid, low e tech touch) e o critério de ticket para decidir qual degrau da escada recebe qual (2026-09-05)
- [`relatorio-pendo-adocao-de-funcionalidades.md`](produto-e-plataforma/relatorio-pendo-adocao-de-funcionalidades.md) · **evidencia** · 80% das funcionalidades raramente ou nunca usadas, 6 a 15% concentram 80% do uso; concentrar no núcleo, não somar (2026-09-19)
- [`artigo-weaver-paradoxo-do-apresentador.md`](produto-e-plataforma/artigo-weaver-paradoxo-do-apresentador.md) · **evidencia** · item morno somado a item forte baixa o valor do conjunto quando a pessoa avalia sozinha; é o "acúmulo de ferramenta desvaloriza" medido (2026-09-19)
- [`artigo-nngroup-navegacao-escondida.md`](produto-e-plataforma/artigo-nngroup-navegacao-escondida.md) · **evidencia** · esconder a navegação atrás de menu derruba em 20% a chance de achar; com 4 destinos ou menos, mostre todos; barra de 3 a 5 abas; gaveta de baixo só para ação rápida (2026-09-19)
- [`artigo-nngroup-seis-tipos-de-conversa-com-ia.md`](produto-e-plataforma/artigo-nngroup-seis-tipos-de-conversa-com-ia.md) · **evidencia** · os seis tipos de conversa com IA e a tela que cada um pede; público leigo não sabe pedir, então a IA entra como sugestão pronta do nicho (2026-09-19)
- [`artigo-nngroup-controles-em-volta-do-pedido.md`](produto-e-plataforma/artigo-nngroup-controles-em-volta-do-pedido.md) · **referencia** · botões e cartões em volta da IA vencem a dificuldade de dizer o que se quer; nome literal, ícone padrão, nenhum gesto inventado; Smart Reply = 10% das respostas no celular (2026-09-19)
- [`paper-kivetz-gradiente-de-meta.md`](produto-e-plataforma/paper-kivetz-gradiente-de-meta.md) · **evidencia** · meta mostrada como fração, começando com progresso real já marcado; a celebração já aponta a próxima meta (2026-09-19)
- [`artigo-amabile-o-poder-das-pequenas-vitorias.md`](produto-e-plataforma/artigo-amabile-o-poder-das-pequenas-vitorias.md) · **referencia** · mostrar o avanço pequeno logo depois da ação, e registrar num lugar que fica; tirar contador de pendência que só cresce (2026-09-19)
- [`paper-duolingo-notificacoes-recorrentes.md`](retencao-e-comunidade/paper-duolingo-notificacoes-recorrentes.md) · **evidencia** · a ação diária precisa caber num dia ruim; o lembrete é ajuste fino, não motor (2026-09-19)
- [`relatorio-doctoralia-panorama-das-clinicas.md`](mercado-e-setor/relatorio-doctoralia-panorama-das-clinicas.md) · **evidencia** · o mapa dos concorrentes de ferramenta para estética (100 scripts, 180 posts, IA de atendimento) e por que a IA não pega na clínica: custo e não saber usar (2026-09-19)
- [`video-frank-costa-ia-no-pos-venda-e-os-400-mil.md`](ia-e-tecnologia/video-frank-costa-ia-no-pos-venda-e-os-400-mil.md) · **opiniao** · módulos de sucesso do cliente numa plataforma: onboarding, régua de risco, metas, depoimento, upsell e IA gestora (2026-10-06)
- [`video-frank-costa-negocio-de-ia-para-medicos-300-mil.md`](ia-e-tecnologia/video-frank-costa-negocio-de-ia-para-medicos-300-mil.md) · **opiniao** · o produto de uma startup de IA de atendimento para clínicas, a mais próxima do Attlas (2026-10-06)
- [`video-kelvin-cleto-infraestrutura-de-ia-91-mil-em-5-dias.md`](ia-e-tecnologia/video-kelvin-cleto-infraestrutura-de-ia-91-mil-em-5-dias.md) · **opiniao** · plataforma com CRM, educação, metodologia e agentes embutidos, construída com IA (2026-10-06)
- [`video-kelvin-cleto-jev-copiloto-de-vendas.md`](ia-e-tecnologia/video-kelvin-cleto-jev-copiloto-de-vendas.md) · **opiniao** · arquitetura de custo da IA: modelo barato decide, modelo caro só entra quando precisa (2026-10-06)
- [`video-kelvin-cleto-o-crm-morreu-maquina-de-receita.md`](ia-e-tecnologia/video-kelvin-cleto-o-crm-morreu-maquina-de-receita.md) · **opiniao** · a tese de que CRM de etapa morreu e a demonstração das telas da máquina de receita Grow AI (2026-10-06)
- [`video-kelvin-cleto-onde-colocar-ia-na-empresa.md`](ia-e-tecnologia/video-kelvin-cleto-onde-colocar-ia-na-empresa.md) · **opiniao** · as três camadas Revenue, Efficiency e Operational AI para ordenar o que o Attlas entrega primeiro (2026-10-06)
- [`video-kelvin-cleto-sistema-operacional-de-ia.md`](ia-e-tecnologia/video-kelvin-cleto-sistema-operacional-de-ia.md) · **opiniao** · a lista de blocos de um sistema operacional com IA (CRM com IA, academia, mentor, agentes, marca branca) (2026-10-06)

### mercado-e-setor
- [`video-rodrigo-noll-marketing-de-indicacao.md`](aquisicao-e-canais/video-rodrigo-noll-marketing-de-indicacao.md) · **referencia** · indicação na saúde: confiança alta pesa mais, o conselho restringe anúncio e a indicação fala só com a base; o sigilo da estética como risco (2026-10-16)
- [`artigo-cadencia-de-follow-up-e-o-ultimo-toque.md`](comercial/artigo-cadencia-de-follow-up-e-o-ultimo-toque.md) · **opiniao** · a cadência de follow-up e o último toque, o que avisa que você vai parar, como o de maior resposta. Converge com o "e-mail mágico" do `voss`. ⚠️ Números de fornecedor de software, não fecham decisão sozinhos (2026-09-21)
- [`relatorio-doctoralia-panorama-das-clinicas.md`](mercado-e-setor/relatorio-doctoralia-panorama-das-clinicas.md) · **evidencia** · a primeira fonte de mercado brasileiro da base: 639 gestores (2026) e 1.048 (2025); objetivos, faltas, canais, mídia paga, IA e as travas dela (2026-09-19)
- [`video-venture-health-advisor-clinica-harmonizacao.md`](mercado-e-setor/video-venture-health-advisor-clinica-harmonizacao.md) · **opiniao** · o CEO da Venture Health (referência da Altta) faz advisor com uma dona de clínica de HOF: raio X real do nosso ICP (R$ 40 a 50 mil, orgânico, R$ 1.100 o ML, queimada por agência) e o modelo de negócio deles (2026-09-27)
- [`pesquisa-quem-vende-para-a-clinica-de-hof.md`](mercado-e-setor/pesquisa-quem-vende-para-a-clinica-de-hof.md) · **evidencia** · ⭐ quem vende para o profissional de HOF: o público em números (45.880 biomédicos estetas contra 4.012 dentistas com o título de HOF), os concorrentes, as ofertas e a HOF em disputa na Justiça (2026-10-07)
- [`pesquisa-marketing-da-clinica-e-regras-dos-conselhos.md`](mercado-e-setor/pesquisa-marketing-da-clinica-e-regras-dos-conselhos.md) · **evidencia** · ⭐ as regras de publicidade de cada conselho (CFO, CFM, CFBM, CFF e outros) em tabela, e quem pode fazer HOF em 2026. ⚠️ Envelhece rápido: o CFO está reescrevendo o capítulo de publicidade (2026-10-07)

_Lacuna que continua aberta: o número de clínicas de HOF no país, o faturamento médio delas e o custo
por lead de paciente com método. O público em números entrou em 2026-10-07 (a pesquisa de quem vende
para a clínica de HOF); o resto ainda é número de agência ou n = 1._

### ia-e-tecnologia
- [`video-frank-costa-processo-comercial-com-ia.md`](produto-e-plataforma/video-frank-costa-processo-comercial-com-ia.md) · **opiniao** · demonstração de um CRM próprio com IA em toda etapa comercial: modo foco, sales coach ao vivo, pós-call automático e IA gestora. Vota em "camada do CRM" na pendência da IA de atendimento (2026-09-05). Seção "O que vira Attlas" acrescentada em 2026-10-06
- [`video-venture-health-advisor-clinica-harmonizacao.md`](mercado-e-setor/video-venture-health-advisor-clinica-harmonizacao.md) · **opiniao** · IA de primeiro atendimento de ponta a ponta (atende, qualifica, quebra objeção, agenda, lembra) vendida com sistema; a objeção "e se o robô der errado?"; é o concorrente mais direto da entrada do Altta AI (2026-09-27)
- [`artigo-nngroup-seis-tipos-de-conversa-com-ia.md`](produto-e-plataforma/artigo-nngroup-seis-tipos-de-conversa-com-ia.md) · **evidencia** · metade da população não escreve bem o bastante para pedir a uma IA; chat em branco afasta o leigo (2026-09-19)
- [`artigo-nngroup-controles-em-volta-do-pedido.md`](produto-e-plataforma/artigo-nngroup-controles-em-volta-do-pedido.md) · **referencia** · a IA vira botão: refinar com "mais curta", "mais acolhedora", como no Gmail e no WhatsApp (2026-09-19)
- [`relatorio-doctoralia-panorama-das-clinicas.md`](mercado-e-setor/relatorio-doctoralia-panorama-das-clinicas.md) · **evidencia** · 33% das clínicas já usam IA; 44% travam no custo e 40% em não saber usar (2026-09-19)
- [`paper-duolingo-notificacoes-recorrentes.md`](retencao-e-comunidade/paper-duolingo-notificacoes-recorrentes.md) · **evidencia** · escolher o lembrete certo para cada pessoa, com penalidade por repetição (2026-09-19)
- [`video-frank-costa-conteudo-com-ia-sem-social-media.md`](ia-e-tecnologia/video-frank-costa-conteudo-com-ia-sem-social-media.md) · **opiniao** · agente de conteúdo que pesquisa pauta, escreve no padrão do dono, pede aprovação e publica sozinho; molde para o agente de marketing da clínica e para o Altta OS (2026-10-06)
- [`video-frank-costa-ia-no-pos-venda-e-os-400-mil.md`](ia-e-tecnologia/video-frank-costa-ia-no-pos-venda-e-os-400-mil.md) · **opiniao** · o sistema de pós-venda com IA (onboarding, régua de risco, metas, depoimento, upsell, IA gestora) e o método de virar conversa em processo (2026-10-06)
- [`video-frank-costa-negocio-de-ia-para-medicos-300-mil.md`](ia-e-tecnologia/video-frank-costa-negocio-de-ia-para-medicos-300-mil.md) · **opiniao** · consultoria ao vivo a uma startup de IA de atendimento para clínicas médicas: SDR supervisor, secretária como aliada, entrega rápida, webinário (2026-10-06)
- [`video-kelvin-cleto-construa-uma-vez-venda-para-muitos.md`](ia-e-tecnologia/video-kelvin-cleto-construa-uma-vez-venda-para-muitos.md) · **opiniao** · empacotar IA por nicho, setup de R$ 20 a 40 mil mais recorrência, preço pelo potencial de receita gerado (2026-10-06)
- [`video-kelvin-cleto-infraestrutura-de-ia-91-mil-em-5-dias.md`](ia-e-tecnologia/video-kelvin-cleto-infraestrutura-de-ia-91-mil-em-5-dias.md) · **opiniao** · o blueprint da Growth AI, o funil de 5 dias e o que é manual e o que é automático (2026-10-06)
- [`video-kelvin-cleto-jev-copiloto-de-vendas.md`](ia-e-tecnologia/video-kelvin-cleto-jev-copiloto-de-vendas.md) · **opiniao** · copiloto de vendas com triagem por modelo barato, R$ 15 em vez de R$ 30 por reunião (2026-10-06)
- [`video-kelvin-cleto-o-crm-morreu-maquina-de-receita.md`](ia-e-tecnologia/video-kelvin-cleto-o-crm-morreu-maquina-de-receita.md) · **opiniao** · CRM de etapa morreu, a máquina de receita rastreia a jornada inteira (2026-10-06)
- [`video-kelvin-cleto-onde-colocar-ia-na-empresa.md`](ia-e-tecnologia/video-kelvin-cleto-onde-colocar-ia-na-empresa.md) · **opiniao** · o método para decidir ONDE colocar IA: matriz impacto x proximidade da receita e as três camadas (2026-10-06)
- [`video-kelvin-cleto-sistema-operacional-de-ia.md`](ia-e-tecnologia/video-kelvin-cleto-sistema-operacional-de-ia.md) · **opiniao** · o que é um sistema operacional de IA e como é vendido por nicho em marca branca (2026-10-06)
- [`video-vturb-amanda-khayat-anuncio-5x5-e-sete-alavancas.md`](copy-e-criativo/video-vturb-amanda-khayat-anuncio-5x5-e-sete-alavancas.md) · **referencia** · IA para pesquisar e analisar a estrutura de um anúncio que validou, não para escrevê-lo; iniciante escrevendo com IA é o pior caso (2026-10-07)
- [`video-vturb-anthony-carreiro-criativos-previsibilidade-e-escala.md`](copy-e-criativo/video-vturb-anthony-carreiro-criativos-previsibilidade-e-escala.md) · **referencia** · a IA escreve a comunicação e o humano decide a psicologia; o comando "bate o controle" e as entradas de um agente de anúncio (2026-10-07)
- [`video-vturb-guilherme-serraglio-criativos-white.md`](copy-e-criativo/video-vturb-guilherme-serraglio-criativos-white.md) · **referencia** · codificar o processo de análise de anúncio como skill; dar à IA a lista exata do que buscar (2026-10-07)
- [`video-vturb-paola-barbosa-anuncio-unicornio-e-time-de-ads.md`](copy-e-criativo/video-vturb-paola-barbosa-anuncio-unicornio-e-time-de-ads.md) · **referencia** · a IA de gestão que lê tarefas, cobra e monta relatório de pack funciona meio a meio (2026-10-07)
- [`video-vturb-low-ticket-e-mini-vsl.md`](funil-e-nutricao/video-vturb-low-ticket-e-mini-vsl.md) · **referencia** · pesquisa manual antes da IA; o perfil emocional gerado em duas IAs com um documento-modelo; IA nunca inventa prova (2026-10-07)

_Lacuna estrutural: nenhum livro do acervo é da era da IA. Esta seção precisa crescer._

---

## Formato de uma linha do índice

```
- [`artigo-slug.md`](assunto-principal/artigo-slug.md) · **evidencia** · o que essa fonte resolve, em uma linha (2026-09-05)
```

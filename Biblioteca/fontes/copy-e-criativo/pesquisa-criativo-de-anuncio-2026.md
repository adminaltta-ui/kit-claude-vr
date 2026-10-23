---
titulo: "Criativo de anúncio pago em 2026: como a Meta escolhe o anúncio, como montar, testar e produzir criativo (com IA) e o que muda para vender a profissional de HOF"
tipo: relatorio
fonte: Pesquisa na internet feita pelo Claude para a Altta (fontes no fim)
autor: Claude (pesquisa), fontes listadas no fim
data_publicacao: 2026-10-07
data_processamento: 2026-10-07
assuntos: [copy-e-criativo, aquisicao-e-canais]
peso: referencia
confiabilidade: media
resumo: Na Meta de 2025 e 2026 o criativo é a segmentação (Andromeda recupera anúncio pelo conteúdo, GEM decide), a unidade de teste é o conceito e não a variação, só 4 a 9% dos criativos viram vencedores, e a IA rende quando não finge gente; com o processo de teste, as métricas, a regra de IA, a Biblioteca de Anúncios, o B2B, o YouTube e a aplicação ao Academy.
---

# Criativo de anúncio pago em 2026

**Como ler:** cada item traz um selo. 🟢 dado verificável (documentação oficial, engenharia da
plataforma, estudo com método declarado) · 🟡 tese de praticante, interpretação, ou dado sem método
publicado · 🔴 não achei. As fontes estão numeradas no fim, `[n]`, cada uma com URL e data.
**Blog de fornecedor vendendo a própria ferramenta é opinião de confiabilidade baixa**, e está
marcado assim quando aparece. Esta pesquisa **não repete** os livros que a biblioteca já tem
(Schwartz, Suby, Brunson, Hormozi, Miller, Cialdini, Weinberg): ela cobre o que eles não cobrem,
o mercado de 2025 e 2026, e diz no fim onde discorda deles.

⚠️ O limite de buscas da sessão acabou antes de eu ler a fonte primária da Common Thread
Collective, da Pilothouse e o material próprio do Hormozi sobre anúncio. Isso está nas lacunas.

---

## 1. Resumo em 10 linhas (o que muda a forma de fazer)

1. 🟢 **O criativo virou a segmentação.** A própria Meta escreveu, em 2025-04-22, que o foco saiu da segmentação de nicho e foi para a diversificação de criativos, *"a melhor alavanca para achar o público mais relevante"* [5]. O Andromeda escolhe, entre dezenas de milhões de anúncios, os poucos milhares candidatos para cada pessoa [1][4].
2. 🟡 **Anúncio parecido conta como o mesmo anúncio.** Agências relatam que a Meta trata como um criativo só dois vídeos da mesma pessoa que mudam apenas o texto na tela, e rebaixa o anúncio que repete o visual ou o gancho de abertura de outro do mesmo anunciante [8][9]. A Meta não confirma o mecanismo, só a orientação: *diversifique, teste e deixe o sistema otimizar* [8].
3. 🟡 **A unidade de teste é o conceito, não a variação.** Conceito é persona + ângulo + estágio de consciência; variação é gancho, texto, miniatura. Só conceito novo dá sinal novo à máquina; variação refina o que já ganhou [10][32].
4. 🟢 **Acertar é raro e isso é normal.** Em 578.750 criativos e US$ 1,29 bilhão de gasto, só 4 a 9% viraram vencedores, conforme o porte da conta; metade é desligada antes de 28 dias de gasto [18][19]. Quem testa mais acha mais vencedores; a chance por criativo não muda.
5. 🟢 **Texto e UGC acham vencedor mais rápido que produção cara.** Estático só de texto, produto com texto e UGC lideram a taxa de acerto; produção alta serve para escalar um ângulo já provado [22].
6. 🟢 **Em saúde, o formato que ganha é o de confiança:** fundador, carta, reação, stitch, estudo de caso, depoimento [20]. O que ganha em moda (meme, post-it) quase não aparece em saúde.
7. 🟡 **Taxa de gancho sozinha engana.** Há vencedor com menos de 15% de taxa de gancho, porque atenção irrelevante não vende [28]; CTR alto também não prova acerto [29]. Lê-se em cadeia: gancho, retenção, clique, custo por resultado.
8. 🟢 **Público pequeno cansa rápido.** A fadiga de verdade aparece quando o público é limitado (negócio local, nicho) e há poucos criativos [15]. É exatamente o caso de quem vende para profissional de HOF no Brasil.
9. 🟢 **IA rende quando não parece IA e quando mostra gente de verdade.** Num estudo de 500 milhões de impressões, o anúncio de IA que não "parecia IA" superou os outros, e um rosto humano grande e nítido foi o maior sinal de confiança [37]; anúncio de IA percebido como IA cria efeito negativo na marca [36]. Meta e Google já rotulam criativo de IA [38].
10. 🟡 **Para a Altta:** um portfólio de conceitos por persona e por curso, poucos anúncios por conjunto (orçamento pequeno), formatos de confiança com gente real, IA nos bastidores (estático, b-roll, variação de texto), e nenhuma pessoa sintética.

---

## 2. Como a Meta escolhe o anúncio hoje

### 2.1 As três peças: Lattice, Andromeda e GEM

- 🟢 **Andromeda é a etapa de recuperação (retrieval).** É o primeiro passo da recomendação: reduz *dezenas de milhões* de anúncios candidatos a *alguns milhares* para cada impressão; depois, modelos de ranqueamento maiores decidem o que aparece [1]. A recuperação processa três ordens de grandeza mais anúncios que as etapas seguintes [1]. O sistema roda em chips NVIDIA Grace Hopper e MTIA, com modelos 10.000 vezes mais complexos que o anterior, e entregou +6% de recall e +8% de qualidade de anúncio em segmentos selecionados [1][4]. Publicado em 2024-12-02.
- 🟢 **Andromeda foi desenhado para o volume de criativo gerado por IA.** A Meta diz que o índice hierárquico existe para dar conta do *"crescimento exponencial de criativos do Advantage+ creative"*; mais de um milhão de anunciantes criaram mais de 15 milhões de anúncios em um mês com as ferramentas de IA da Meta; quem ligou o Advantage+ creative teve 22% a mais de ROAS, e a geração de imagem rendeu cerca de +7% de conversões, pela estimativa da própria Meta [1].
- 🟢 **Lattice junta dezenas de modelos pequenos num modelo grande** que prevê vários resultados ao mesmo tempo (clique, conversão, qualidade) em todas as superfícies [3]. A Meta atribui ao Lattice quase 12% a mais de qualidade de anúncio e até 6% a mais de conversões [4]. O blog técnico é de 2023-05-11; os números são de 2025-03-27.
- 🟢 **GEM é o "cérebro" de ranqueamento:** o maior modelo de fundação de recomendação da indústria, treinado na escala de um LLM, com dados de anúncio *e* de conteúdo orgânico [2]. Entre as variáveis que ele lê estão o formato do anúncio e a *representação do criativo* [2]. A Meta reporta +5% de conversões no Instagram e +3% no Feed do Facebook no 2º trimestre de 2025, e diz que o GEM vai aprender com texto, imagem, áudio e vídeo de todo o ecossistema [2]. Publicado em 2025-11-10.
- 🟢 **O aprendizado por sequência** lê a ordem das ações da pessoa antes e depois do anúncio (o exemplo da Meta: quem comprou a hospedagem de esqui passa a ver equipamento, e não outra hospedagem). Rendeu +3% de conversões em segmentos testados [4].
- 🟢 **Em 2026 o movimento continuou.** Na teleconferência do 2º trimestre de 2026 (julho), a diretora financeira da Meta disse que as mudanças nos modelos de comportamento do usuário, junto com o GEM, aumentaram os cliques em anúncios em 8,3% [8][9].
- 🟡 **A tradução de praticante:** Lattice é a base, Andromeda é a "recepção" que monta a lista curta, GEM escolhe o anúncio final. Quem explica assim é Ignacio Manchi (Ready Set), num treinamento da Motion de julho de 2026 [10]. É uma simplificação útil, não a arquitetura oficial.

### 2.2 Por que o criativo virou a segmentação

- 🟢 A Meta define diversificação de criativo como *"criar uma ampla gama de criativos com temas, mensagens e visuais diferentes para atender segmentos diferentes de público"*, e diz que, com a IA, o foco passou da segmentação de nicho para a diversificação como a melhor alavanca para achar o público [5].
- 🟢 A Meta recomendava, já em 2024-11-19: **subir anúncios novos toda semana**, *"esquecer a ideia do anúncio perfeito"*, e montar personas com necessidades e *bloqueios de compra* diferentes, alinhando proposta de valor e mensagem a cada uma [6]. Exemplo dela: público jovem responde a oferta, público mais velho a avaliação e demonstração [6].
- 🟢 Na página em português para pequenas empresas, a Meta diz que, quando o criativo é muito parecido, *"nosso sistema pode não reconhecê-lo como diferente e veiculá-lo para os mesmos conjuntos de públicos"*, o que limita o alcance e leva ao status **Criativo limitado** ou **Fadiga do criativo** na coluna Veiculação do Gerenciador [7].
- 🟡 **A consequência prática, nas palavras de Jon Loomer** (2025-10-20): como segmentação detalhada e público semelhante viraram sugestão, a pergunta "como garanto que o público certo vê meu anúncio?" se responde *com o anúncio*: imagem, vídeo, texto e oferta que falam a dor de um perfil específico. *"A diversificação de criativo substitui o que a segmentação fazia."* [11]
- 🟡 **E a nuance do próprio Loomer:** a palavra "Andromeda" virou desculpa para tudo; a maioria de quem a usa não sabe o que ela é [11]. A orientação oficial que importa é uma só: diversificar.

### 2.3 O que conta como "diferente"

- 🟢 **O que a Meta disse publicamente:** *"Não entramos em detalhes de como nossos modelos representam cada criativo. Nossa orientação é deliberadamente baseada em resultado, não em modelo: diversifique, teste e deixe o sistema otimizar."* (porta-voz Alisha Swinteck, à Marketing Brew, 2026-09-28) [8].
- 🟡 **O que agências ouviram da Meta** (mesma reportagem): o sistema não ranqueia tão bem um anúncio que tem *o mesmo visual* ou *o mesmo gancho de abertura* de outro criativo do anunciante; dois vídeos da mesma pessoa que só mudam o texto na tela ("Texto A", "Texto B") contam como o mesmo criativo (Olivia Cripps, Billion Dollar Boy); a Meta orienta misturar vídeo e estático e variar mensagem e tom *usando ganchos diferentes* (Ankit Jadav, Rain the Growth Agency) [8][9].
- 🟢 **A Meta testa métricas de "insights de criativo" na Insights API** com poucas agências desde junho de 2026, sem data para abrir a todos [8][9]. Ou seja, a própria plataforma vai começar a mostrar como lê o criativo.
- 🟡 **"Entity ID" é termo da indústria, não da Meta.** Praticantes chamam assim o agrupamento de anúncios parecidos numa "impressão digital semântica" lida por visão computacional, texto e áudio; anúncios acima de um limiar de semelhança dividiriam um único "bilhete" para a lista curta [10]. O sintoma relatado: *"todos já subimos 20 anúncios e só um recebeu verba"* [10]. Os números que circulam (limiar de 60%, "70% visualmente diferente") **não têm fonte oficial** 🔴.
- 🟡 **O que não registra como diferente**, pela experiência de uma agência de criativo (Travis Halff, Y'all, 2025-11-19): trocar só o título de um estático, trocar só o fundo mantendo a estrutura, gravar o mesmo roteiro de outro ângulo. Essas microvariações parecem disputar o mesmo grupo de impressões; uma, às vezes por dado inicial enganoso, leva quase toda a verba [32].
- 🟡 **O que registra:** diferença em ângulo central, persona, formato ou identidade visual. Em vez de três conceitos de "problema e solução", Halff passou a fazer "problema e solução" contra "transformação" contra "ponto de vista do fundador" contra "lista chamativa" [32]. Ele usa uma ferramenta de semelhança (Recharm) como aproximação e admite que ela pode errar [32].

### 2.4 Quantos anúncios por conjunto

- 🟢 **O limite técnico é 50 anúncios por conjunto** (Central de Ajuda da Meta, citada em [17]).
- 🟢 **A Meta tirou a recomendação de "6 ou menos".** A página *About Managing Ad Volume* dizia "use 6 ou menos criativos por conjunto; acima de 6 há pouco ganho". A frase sumiu; ficou o aviso de que *"quando o anunciante roda anúncios demais ao mesmo tempo, cada um entrega menos"* e que isso *"pode piorar o desempenho"* [12][13].
- 🟡 **Os praticantes discordam entre si**, e a discordância é de orçamento:
  - Loomer: orçamento modesto, fique perto de seis; orçamento grande, experimente mais [13].
  - Flighted (2026-07-02): comece com 3 a 6, nunca menos de 3, e só suba para 10 a 15 quando o orçamento der impressão para todos [17].
  - Manchi (Ready Set, 2026): 15 a 20 anúncios por conjunto para dar variedade ao algoritmo [10].
  - Caleb Kruse (2026-01): 50 a 100 anúncios por mês, 10 conceitos com 5 a 10 ganchos cada [24]. ⚠️ Kruse fala de marcas que gastam mais de US$ 200 milhões [24].
- 🟡 **A regra que resolve a discordância** (Flighted): divida o orçamento diário do conjunto pelo número de anúncios; se cada anúncio não tem dinheiro para pelo menos uma conversão esperada por dia, há anúncios demais para aquele orçamento [17]. Orçamento de teste diário = conversões desejadas × CPA esperado ÷ dias de teste [17].

### 2.5 As ferramentas da Meta que mexem no criativo

- 🟢 **Formato flexível:** até 10 imagens ou vídeos num anúncio só; a Meta combina com as variações de texto, escolhe por pessoa e posicionamento e ainda gera um carrossel com o material [11]. Loomer roda dois anúncios de formato flexível por conjunto, um só de imagens e outro só de vídeos, com 10 peças cada, em 9:16 que corta bem para 1:1 [11].
- 🟢 **Ferramenta de teste de criativo (2025):** reserva uma parte do orçamento da campanha ou do conjunto para testar até cinco anúncios novos com entrega justa; ao fim do teste, os anúncios seguem rodando normalmente [14][35]. Loomer a chamou de uma das três maiores mudanças de 2025 e passou a testar todo anúncio novo por ela [14]. A recomendação de reservar até 20% do orçamento vem de fornecedor (confiabilidade baixa) [35].
- 🟢 **Anúncio de parceria (criador + marca no cabeçalho):** num estudo da Meta, quem usou reduziu o CPA em 19% em média [6]. Manchi trata o anúncio de parceria como uma camada própria de diversidade [10].
- 🟢 **Status de veiculação:** *Fadiga do criativo* aparece quando o custo por resultado está pelo menos o dobro do histórico; *Criativo limitado*, quando está acima do histórico mas abaixo do dobro [16][7].
- 🟢 **Cannes Lions 2026 (junho):** a Meta anunciou um espaço único de estratégia, teste e otimização de criativo, uma "memória de marca" que aprende o tom com os anúncios antigos, texto gerado *dentro* da imagem, mais idiomas para texto na mídia e locução, e um hub de criadores com conteúdo pré-autorizado para virar anúncio [41].
- 🟢 **A direção declarada:** a Meta quer que a marca suba uma imagem e um orçamento e a IA faça imagem, vídeo, texto, segmentação e verba até o fim de 2026 (reportagem do Wall Street Journal, junho de 2025) [42].
- 🟢 **Para geração de lead:** a Meta reforçou em 2025-10-30 o envio do evento de lead do CRM para a API de Conversões (inclusive via Zapier, até 100 mil eventos sem custo) [51]. É isso que ensina o algoritmo a diferenciar lead bom de lead ruim.

---

## 3. Anatomia do criativo e os frameworks de praticantes

### 3.1 Duas camadas: o que você diz e como você mostra

🟡 O modelo mais útil que encontrei é o de Manchi (Ready Set, julho de 2026) [10]:

| Camada | O que é | O que define |
|---|---|---|
| **Dimensões principais** (estratégia) | Persona do criativo (perfil psicológico), segmento (dado demográfico), ângulo (dor ou desejo + gatilho emocional), estágio do funil (de "não sabe do problema" a "pronto para comprar") | A estratégia de persuasão. **Isto é o conceito.** |
| **Dimensões de teste** (execução) | Gancho visual (primeiros 3 a 7 segundos), estilo visual, formato (vídeo, GIF, estático, animação, híbrido, parceria), talento (uma pessoa, várias, fundador, criador, cliente) | Quantas execuções diferentes cabem num ângulo validado |

- 🟡 **O ciclo dele:** *Explorar* (validar persona + ângulo), *Explorar o que ganhou* (iterar a execução em volume e com diversidade), *Ampliar* (levar para persona e produto novos) [10].
- 🟡 **Diversidade × iteração:** diversificar cria território novo (persona, ângulo, mundo emocional); iterar refina o vencedor (gancho, texto, miniatura). As duas são necessárias, mas só a diversificação gera sinal novo para a IA [10].
- 🟡 **Kruse dá a taxonomia mínima de ângulos emocionais** para garantir diversidade real: problema, prova social, contrário (contra o senso comum) e história [24]. E avisa: *testar o mesmo ângulo em vídeo, estático e carrossel não é diversidade de conceito* [24].
- 🟡 **Ben Bennett (Smart Marketer, 2025):** obsessão com formato técnico (vídeo ou imagem) *"não é onde o desempenho começa"*; começa pela mensagem, pelo tom e pela experiência do público, e pelo melhor gancho que a conta já tem [33].

### 3.2 Como montar a matriz de conceitos (o passo a passo)

🟡 Síntese de [6][10][24][29][32], com a ordem que funciona na prática:

1. **Liste as personas** pelo que muda a decisão, não pelo dado demográfico: a necessidade e o *bloqueio de compra* de cada uma [6]. Dara Denney usa as avaliações de clientes para descobrir e validar persona [29].
2. **Para cada persona, escreva 3 a 4 ângulos** que pertençam a famílias emocionais diferentes (problema, prova, contrário, história, novidade, oferta) [24][21].
3. **Marque o estágio de consciência** de cada ângulo. Denney mapeia a mensagem de cada estágio, do "não sabe" ao "mais consciente", e casa o formato com o estágio [29].
4. **Escolha a execução** (formato, talento, estilo visual, gancho visual) de modo que cada conceito *pareça* diferente dos outros, e não só *diga* coisa diferente [8][32].
5. **Dê nome descritivo a cada anúncio** com as etiquetas da matriz, para ler resultado por conceito depois (ver 4.7).
6. **Suba por conceito**, um conjunto de anúncios por conceito ou persona, nunca por formato [17][24].

### 3.3 O gancho (os primeiros 3 segundos)

- 🟢 **Taxa de gancho** = reproduções de 3 segundos ÷ impressões [25][27]. É a métrica que governa o resto: se o gancho falha, nada depois tem chance [27].
- 🟢 **Quais táticas de gancho mais geraram vencedor** na base da Motion (set/2025 a jan/2026): novidade, anúncio de promoção, âncora de preço, urgência, anúncio de novidade, só a oferta, medo de ficar de fora, confissão, exclusividade, curiosidade. A taxa de acerto delas fica entre 6 e 11%, acima da média de 4 a 8% [21]. Há dois grupos: o **promocional** (diz por que agir agora) e o **de interrupção** (confissão, contrário, frase chocante, psicologia reversa, alerta, quebra de mito, afirmação ousada) [21]. ⚠️ O período inclui Black Friday, o que favorece o grupo promocional [18].
- 🟡 **Gancho é visual e verbal ao mesmo tempo.** Savannah Sanchez (2025 e 2026): texto escrito à mão em papel ou post-it em vez de legenda padrão; transição rápida no primeiro segundo; ângulo de câmera incomum; texto que "aparece" na tela do celular; comentário negativo estilo TikTok na tela, rebatido no corpo; demonstrar com objeto em vez de explicar falando [30][31]. Transição divertida vai no gancho, nunca no meio [31]. Nenhuma cena passa de cerca de 1 segundo, fora a fala para a câmera [31].
- 🟡 **Teste de abertura ampla contra abertura específica:** a que chama um benefício funcional claro ou a persona pelo nome contra a universal [30].
- 🟡 **Barry Hott: relevância do gancho vale mais que taxa de gancho.** Ele teve vencedores com taxa abaixo de 15%, porque atenção que não é do público certo não vale nada [28].
- 🟡 **Guarde uma lista mestra** de todo gancho testado e uma lista curta dos melhores de sempre (Sanchez) [30]. Foreplay mostra ganchos que ficaram no ar quase mil dias: a duração é o sinal [34].
- 🟡 **Ângulo e gancho não são a mesma coisa.** Uma referência brasileira (Matheus Lourenço, YouTube) separa ângulo (o *jeito* de apresentar, não verbal) de gancho (o benefício ou a dor dita) [55]. Confiabilidade baixa, mas a distinção ajuda a escrever briefing.

### 3.4 O corpo e a chamada

- 🟢 **Taxa de retenção (hold)** = reproduções de 15 segundos ÷ reproduções de 3 segundos [25][27]. Atenção ao denominador: há quem divida por impressões, o que dá outro número [27].
- 🟡 **O erro mais comum em vídeo é gancho alto com retenção baixa:** a abertura promete o que o corpo não entrega. *Conserte o corpo, não o gancho* [27]. Se o gancho é "economizo 10 horas por semana", o corpo tem de mostrar o *como* logo em seguida [25].
- 🟡 **Corpo que segura** tem argumento lógico, imagem do resultado, resposta à objeção e credibilidade antes da chamada [55]; para público mais velho e compra de mais consideração, anúncios mais longos e criadores da mesma idade do público (Sanchez: não escale alguém de 30 anos para falar com quem tem 60) [31].
- 🟢 **Chamada:** o Google orienta repetir a chamada na locução *e* no texto na tela [46]; o "D" do ABCD (Direct) é declarar a chamada com clareza [47].
- 🟡 **Depoimento nunca começa sem gancho** (Sanchez) [30]. Começar com "Oi, eu sou a fulana e fiz o curso" é desperdiçar os 3 segundos.
- 🟡 **Barry Hott: "faça o anúncio mais longo que você consegue sem precisar editar".** Se são 6 segundos, ótimo; se são 3 minutos, ótimo também. O bloqueio é agir, não equipamento [28].

### 3.5 Os formatos e quando usar cada um

🟢 **O dado agregado da Motion (2026)** [20][22]:

| Formato | Taxa de acerto | Observação |
|---|---|---|
| Banner com a oferta primeiro | 8,6% | 21,9% dos criativos, 29,3% do gasto |
| Demonstração | 8,1% | |
| Depoimento | 6,5% | |

🟢 **Por tipo de material**, os que mais geram vencedor: só texto, imagem de produto com texto, imagem de estilo de vida com produto, UGC. Produção alta fica no meio da tabela; animação e carrossel capturam menos gasto do que o volume que ocupam [22]. Motivos dados pela Motion: velocidade de leitura no feed, velocidade de iteração (texto se refaz em horas) e piso baixo de produção [22].

🟢 **Em Saúde e Bem-estar o ranking é outro:** stitch, vídeo de reação, unboxing, celebridade, **fundador**, **carta**, stop motion, endosso de influenciador, POV, transformação. Pelo gasto: mockup de post de rede social, carta, celebridade, **estudo de caso**, banner de oferta, bastidor, UGC com sobreposição, fundador, transformação [20]. A Motion explica: o comprador de saúde está decidindo se *confia* na promessa, então ganham formatos de credibilidade de especialista, transformação pessoal e validação de pares, e formatos que dão algo para ler ou assistir (estudo de caso, carta, especialista explicando) [20]. A lista de Saúde e a de Moda quase não se cruzam [20].

🟢 **O básico de vídeo vertical, pelo guia de Reels da Meta** (atualizado em julho de 2025): 9:16, áudio (música, efeito ou locução) e texto e chamada dentro da zona segura, para a interface não cobrir [52].

🟡 **Os formatos pedidos pela Altta, em uma linha cada** (síntese de [20][22][28][29][30][31]):

- **UGC** (pessoa comum gravando no celular): alto acerto, barato; o criador pesa mais que o roteiro [29].
- **Talking head / fundador**: top 5 em saúde [20]; funciona quando quem fala tem autoridade real no assunto.
- **VSL curta** (vídeo de venda de 30 a 90 segundos com argumento completo): serve ao público consciente do problema; segura pelo corpo, não pelo gancho.
- **Estático de texto**: o mais rápido para testar ângulo [22]; ângulo vencedor depois "sobe" para vídeo ou produção alta [22].
- **Carrossel**: captura menos gasto que o volume que ocupa [22]; o formato flexível já gera carrossel sozinho [11].
- **Anúncio "feio" nativo** (Barry Hott): não é gravar mal de propósito, é imitar o que o público consome no orgânico, que é *"muito mais feio que os seus anúncios"*; anúncio bonito se destaca *e é pulado* [28].
- **Depoimento**: 6,5% de acerto [20]; nunca sem gancho [30].
- **Corte de podcast**: aparece no top de Moda, não de Saúde [20]; vale quando o trecho tem uma frase de interrupção forte.
- **Meme**: top em Moda, *"parece fora da marca em Finanças"* [20]; arriscado em saúde.
- **Carta, mockup de post, reação/stitch**: os formatos "de leitura" e "de conversa" que sobem em saúde [20].
- **Prova de bastidor, demonstração de tela**: demonstração tem 8,1% de acerto no agregado [20].

### 3.6 A montagem modular e os ganchos do Hormozi

- 🟡 **A fórmula modular que circula como "do Hormozi":** muitos ganchos × alguns corpos × uma ou duas chamadas, com quase todo o tempo de preparo nos ganchos. Encontrei a fórmula só em resumos de terceiros e numa referência brasileira que divide o anúncio em gancho 10%, corpo 80%, chamada 10% [55]. **Não li a fonte primária do Hormozi nesta pesquisa** 🔴; o gancho, a retenção e a recompensa estão no *$100M Leads*, que a biblioteca já tem.
- 🟡 **O ajuste de 2025 e 2026:** trocar só o gancho escrito em cima do mesmo vídeo tende a contar como o mesmo criativo [8][32]. A montagem modular continua boa para **iterar o vencedor** (fase de exploração do que ganhou), mas não substitui conceito novo na fase de descoberta [10]. Para o gancho contar como diferente, ele precisa mudar *o que se vê* nos primeiros segundos, não só o texto [8].
- 🟡 **Referência brasileira (confiabilidade baixa):** a estratégia "F322" de James William, três mídias e dois textos dentro de um anúncio flexível, cada mídia com um ângulo e um nível de consciência diferente [56]. É a mesma lógica do formato flexível do Loomer [11], com nome próprio.

### 3.7 Barry Hott e Dara Denney: duas lições que contrariam o hábito

- 🟡 **Barry Hott** (via Alex Cooper, Adcrate, 2025) [28]:
  1. Ninguém liga para a sua marca; ganhe o direito de falar sendo relevante para a pessoa *na hora*.
  2. Estude o feed orgânico do público, não o concorrente; concorrente leva ao "mar de mesmice". Dica: crie uma conta de teste como se fosse o cliente e veja o que o feed entrega.
  3. Claro vence esperto; anúncio esperto agrada marqueteiro, não cliente.
  4. Relevância do gancho acima da taxa de gancho.
  5. **Anúncio de funil inteiro:** não faça anúncio separado para público frio e quente; anúncio bom serve aos dois, começando pelo frio e conduzindo à ação.
- 🟡 **Dara Denney** (Motion, dezembro de 2025) [29]:
  1. Separe métrica principal (gasto, resultado, custo por resultado, ROAS) de métrica que conta a história (frequência, CPM, CTR, profundidade de vídeo, compartilhamento, comentário).
  2. **CTR não prova que o criativo funciona**; é o erro mais comum.
  3. Pesar demais o formato é erro; o criador pesa mais que o roteiro e que o gancho.
  4. Ao copiar um vencedor com talento, pergunte quanto do resultado era da pessoa.
  5. Análise em quatro passos: métrica, conteúdo, comparação, retorno (comentário, avaliação).
  6. Acompanhe o criativo dos concorrentes todo mês e leia os comentários dos seus anúncios para tirar a próxima ideia.

---

## 4. O processo de teste

### 4.1 A estrutura

- 🟡 **Poucas campanhas.** CBO (orçamento na campanha) para escalar, ABO (orçamento no conjunto) para testar; evento de otimização igual ao objetivo de negócio (compra, se a meta é receita) [10].
- 🟡 **Conjunto por conceito, não por anúncio nem por formato.** Conceitos competem entre conjuntos; execuções competem dentro do conjunto. Assim se sabe se o vencedor ganhou pelo conceito ou pela miniatura [17][24].
- 🟡 **A estrutura não muda a capacidade do Andromeda de achar o anúncio** (Kruse, citando Matt Steiner, da Meta); estrutura serve para o fluxo de verba e para ler o relatório [24]. Fonte secundária, sem a fala original.
- 🟢 **Para teste limpo, use a ferramenta de teste de criativo**, que dá entrega justa a até cinco anúncios e devolve os anúncios à rotina no fim [14][35].
- 🟡 **Comparar anúncio A com B pelo ROAS de cada um perdeu sentido** quando a plataforma não distribui verba por igual; leia por conceito, persona e formato [32].

### 4.2 Orçamento e cadência

🟢 **Quantos criativos novos por semana, por porte de gasto mensal na Meta** (Motion, mediana e média por conta) [18]:

| Porte (gasto/mês) | Mediana/semana | Média/semana | Taxa de acerto |
|---|---|---|---|
| Micro (< US$ 10 mil) | 2,8 | 3,3 | 4,0% |
| Pequeno (US$ 10 a 50 mil) | 4,1 | 5,1 | 6,5% |
| Médio (US$ 50 a 200 mil) | 6,7 | 9,3 | 8,1% |
| Grande (US$ 200 mil a 1 mi) | 11,2 | 16,6 | 8,6% |
| Enterprise (> US$ 1 mi) | 18,9 | 29,2 | 8,8% |

- 🟢 **"Vencedor" na Motion** = criativo que gastou 10 vezes a mediana da conta e pelo menos US$ 500. A base não mede ROAS nem conversão, mede para onde o leilão manda a verba [18].
- 🟢 **A verba se concentra:** 55% do gasto total vai para os vencedores; 23% nas contas micro, 64% nas enterprise [18].
- 🟢 **Taxa de acerto alta com pouco volume engana:** 1 vencedor em 5 lançamentos é 20%, mas a probabilidade real continua perto de 5%; uma conta com 10% de acerto em 50 lançamentos produz cinco vezes mais vencedores que outra com 20% em 5 [19].
- 🟢 **Volume por setor:** Serviços Profissionais e Finanças rodam de 10 a 16 criativos por semana mesmo no topo de gasto, por causa do ciclo de consideração longo; Saúde, Moda e Beleza rodam muito mais [23].
- 🟡 **A conta de bolso:** com 4% de acerto (porte micro), espere em média 25 lançamentos para cada vencedor. Isso é média, não promessa.
- 🟡 **Fórmula do orçamento de teste** (Flighted): conversões desejadas × CPA esperado ÷ dias de teste; e cada anúncio precisa de verba para ao menos uma conversão esperada por dia [17]. Flighted também lembra que as "50 conversões em 7 dias" da fase de aprendizado valem para o conjunto, não para validar cada anúncio [17].
- 🟡 **Ferramenta brasileira útil (confiabilidade baixa):** a calculadora de teste do ViniEnsina estima verba por criativo, cliques esperados e força do teste; o conselho dela é o mesmo: com pouca verba, teste poucos criativos [25b].

### 4.3 As métricas e o diagnóstico

🟢 **Definições** [25][27]:

| Métrica | Fórmula | O que pergunta |
|---|---|---|
| Taxa de gancho (thumbstop) | reproduções de 3 s ÷ impressões | O polegar parou? |
| Taxa de retenção (hold) | reproduções de 15 s ÷ reproduções de 3 s | O corpo pagou a promessa? |
| Taxa de ThruPlay | ThruPlay ÷ impressões (ThruPlay = vídeo inteiro se menor que 15 s, ou 15 s se maior) | A pessoa terminou? |
| CTR do link | cliques no link ÷ impressões | Houve intenção? |
| CPM | custo por mil impressões | Quanto custa ser visto (leilão + qualidade percebida) |
| CPA / custo por resultado | gasto ÷ resultados | O negócio fechou a conta? |

🟡 **Referências de terceiros, não da Meta** (usar como termômetro, nunca como meta): gancho de 30% ou mais é forte; retenção perto de 25% é saudável [27]; outro guia fala em gancho de 30 a 40% e alerta abaixo de 25% [25]; a mediana de retenção em feed de prospecção fica perto de 18% e em Reels perto de 23% (AdSights, citada em [27]). As fontes discordam entre si, e Barry Hott tem vencedores com menos de 15% [28]. **Compare com o histórico da própria conta e com os outros anúncios do mesmo teste** [27].

🟡 **O diagnóstico pela forma da queda** [25][27][29]:

| O que se vê | Leitura provável | O que mexer |
|---|---|---|
| Gancho baixo | A abertura não para o polegar | Novo gancho *visual*, nova abertura |
| Gancho alto, retenção baixa | A abertura promete o que o corpo não entrega | O corpo |
| Gancho e retenção bons, CTR baixo | Falta razão para agir agora | Chamada, oferta, prova |
| CTR alto, conversão baixa | Promessa do anúncio diferente da página, ou público errado clicando | Página e coerência anúncio/página |
| Tudo bom e CPA ruim | Oferta, página, público ou atribuição | Não é o criativo |

### 4.4 Quando matar e quando escalar

🟡 Não há regra oficial. O que é consenso entre praticantes e o que proponho:

1. **Decida a regra antes de subir**, por escrito (gasto mínimo, número de resultados), para não matar anúncio no segundo dia por ansiedade [17].
2. **Gasto mínimo antes de julgar:** algo entre 2 e 3 vezes o CPA alvo por criativo é a faixa citada por praticantes; regra agregada, não li a fonte original 🟡.
3. **Antes de desligar, nomeie o diagnóstico** (tabela de 4.3). Se não dá para nomear, o dado ainda é pouco.
4. **Sinal oficial de cansaço:** o status *Fadiga do criativo* (custo por resultado pelo menos o dobro do histórico) [16].
5. **Escalar = dar mais verba ao conceito e fazer mais execuções dele**, não multiplicar o mesmo anúncio. Kruse: dobre a aposta nos conceitos que convertem cerca de duas vezes melhor antes de abrir direção nova [24].
6. 🟢 **Contexto:** metade dos criativos é desligada antes de 28 dias de gasto nas contas da Motion; desligar rápido é o normal do mercado, não falha [18].

### 4.5 Fadiga não é semelhança

- 🟡 **Fadiga** é problema de tempo, exposição e frequência; resolve com rotação. **Semelhança** é problema de estrutura: anúncios parecidos demais agrupados num só, independentemente do volume; resolve com diversidade [10].
- 🟢 **Loomer (2026-07-01): a fadiga é muito diagnosticada e pouco real.** Muitas vezes a queda é a Meta passando a entrega do remarketing (fácil) para a prospecção (cara), o que é normal [15]. A fadiga de verdade aparece com **público limitado** (negócio local, remarketing isolado) e **poucos criativos**: aí ela é *"uma certeza"* [15].
- 🟡 **Afirmações de fornecedor** de que um criativo "dura 2 a 3 semanas" depois do Andromeda circulam sem método publicado 🔴. Prazo de vida de criativo depende do mercado responder, e varia por público.

### 4.6 Iterar o vencedor

🟡 Síntese de [10][24][29][30]:

- **Mantenha o conceito, troque o talento:** Sanchez testa o mesmo conceito e o mesmo gancho com criadores diferentes, em vez de mudar uma variável por vez [30].
- **Mude o gancho visual** (não só o texto) e mantenha o corpo [10][31].
- **Leve o ângulo para outro formato e outro estágio:** o estático vencedor vira vídeo; o vídeo vira carta; a versão curta ganha uma longa para remarketing com objeções [22][31].
- **"Superiteração"** (Denney): o vencedor é ponto de partida, não peça pronta [29]. Mas o que ganha em UGC não ganha automaticamente em estático [29].
- **Amplie para persona e produto novos** quando o ângulo provou [10].

### 4.7 Nomenclatura: o que torna o teste legível

- 🟡 A Motion recomenda etiquetar no nome do anúncio o formato, o tipo de gancho, o ângulo de mensagem e o público, por exemplo `UGC_Unboxing_Confianca_MaesNovas_Produto_Sarah`, e usar IA para preencher a etiqueta a partir do vídeo [26].
- 🟡 Flighted nomeia o conjunto com persona, ângulo, oferta, tipo de conteúdo e data de lançamento [17].
- 🟡 Halff mantém uma marcação "otimizado para Andromeda ou não" por criativo [32].

---

## 5. Produção com IA em 2025 e 2026

### 5.1 O que a plataforma oferece

- 🟢 Fundo gerado, imagem gerada, animação de imagem, variação de texto, expansão de proporção e, em 2026, texto dentro da imagem e locução em mais idiomas [1][11][41].
- 🟢 A Meta diz que as variações de texto ajudam a *"iterar rápido preservando a voz da marca"*; a Tinuiti usou texto e imagem gerados para a Unilever e aumentou o volume de compras em 18% [6].
- 🟡 Loomer mostra um caso em que fundos gerados por IA superaram o original [11], e recomenda aceitar os aprimoramentos do Advantage+ creative como forma barata de diversificar [15].

### 5.2 O que a evidência diz sobre desempenho

- 🟢 **Estudo Taboola com Columbia, Harvard, TUM e Carnegie Mellon** (divulgado em 2026-01-29): 500 milhões de impressões e 3 milhões de cliques, comparando pares de anúncios do mesmo anunciante, mesma campanha, mesmo dia. CTR bruto de 0,76% para IA contra 0,65% para humano; com o controle estatístico mais rigoroso, ficam equivalentes. **O anúncio de IA que não parecia IA superou os dois outros grupos.** O fator mais importante para o anúncio parecer humano e confiável foi **um rosto humano grande e nítido** [37].
- 🟢 **NielsenIQ** (2024-12-12): mais de 2.000 participantes, cerca de 150 com eletroencefalograma. As pessoas identificaram a maioria dos anúncios de IA e os acharam mais "irritantes", "chatos" e "confusos"; mesmo os de alta qualidade ativaram menos a memória; visual de baixa qualidade aumentou o esforço de leitura. A NIQ fala em efeito auréola negativo sobre a marca [36].
- 🟡 **Leitura conjunta:** a IA não é o problema; *parecer IA* é. A NIQ mediu anúncios que as pessoas reconheciam como IA; o Taboola achou o melhor resultado justamente nos que ninguém reconheceu. Os dois apontam para o mesmo lugar: sinal humano real.
- 🔴 **Não achei estudo com método publicado** sobre avatar de IA falando (o "UGC sintético") em saúde ou educação. Os números que circulam vêm de fornecedores dessas ferramentas.

### 5.3 Rótulos e regras

- 🟢 **Meta:** o rótulo "Informações de IA" aparece no menu "Sobre este anúncio" quando o anúncio é criado ou alterado de forma relevante com as ferramentas de IA da Meta, e pode aparecer quando ferramentas de terceiros deixam metadados detectáveis (C2PA, IPTC) [38][39][40].
- 🟢 **Google (julho de 2026):** campo para o anunciante marcar ativo feito ou editado com IA, exibido em "Como este anúncio foi feito"; o que sai das ferramentas do Google é rotulado sozinho [38].
- 🟢 **FTC (Estados Unidos, regra em vigor desde outubro de 2024):** proíbe avaliação ou depoimento atribuído a pessoa que não existe (inclusive gerada por IA) ou que não teve a experiência [43]. Não vale no Brasil, mas é o padrão que as plataformas tendem a seguir.
- 🟢 **CONAR (guia de influenciadores, em vigor desde maio de 2026):** conteúdo criado, editado ou segmentado com IA continua submetido às mesmas regras éticas da publicidade comum [44].
- 🟢 **Política de saúde da Meta:** antes e depois de procedimento estético geral é permitido para maiores de 18 anos; é proibido "declarar inferioridade sobre a aparência" (frase que ataca aparência, parte do corpo ou higiene); a política de atributos pessoais proíbe afirmar ou insinuar que sabe algo da pessoa (como condição médica) e desencoraja segunda pessoa nesse tipo de frase [45]. As regras dos conselhos estão na pesquisa irmã `fontes/mercado-e-setor/pesquisa-marketing-da-clinica-e-regras-dos-conselhos.md` [59]; em resumo, a Resolução CFO 196/2019 libera imagem de diagnóstico e de resultado final com autorização do paciente [57], e a CFM 2.336/2023 libera antes e depois em caráter educativo [58].

### 5.4 O que funciona e a regra da Altta

🟡 **Proposta de uso, a partir de [22][36][37] e da regra da casa** (*nada finge que uma pessoa fez ao vivo o que a máquina fez*):

| Pode | Não pode |
|---|---|
| Estático de texto, layout, tipografia, fundo, ícone | Avatar de IA falando como se fosse profissional, aluno ou paciente |
| B-roll e ilustração sem pessoa fingindo ser alguém | Voz sintética de sócio, professor ou aluno |
| Variações de título e texto, tradução de proporção (9:16, 4:5, 1:1) | Depoimento escrito ou falado por "pessoa" que não existe |
| Legenda, corte, edição, miniatura | Foto de "resultado" ou antes e depois gerado |
| Roteiro, briefing, etiquetas, análise do que ganhou | Animar a foto de uma pessoa real para "falar" o que ela não falou |
| Personagem claramente ilustrado (desenho que ninguém confunde com gente) | Rosto realista gerado apresentado como alguém da Altta |

- 🟡 **Gente real na tela é vantagem, não custo:** o maior sinal de confiança no estudo Taboola foi o rosto humano [37], e em saúde os formatos que ganham são de credibilidade pessoal [20].
- 🟡 **Aceite o rótulo.** Peça feita com ferramenta de IA vai ganhar "Informações de IA"; o critério da Altta não é esconder, é não fingir gente.

---

## 6. A Biblioteca de Anúncios da Meta como ferramenta

- 🟡 **O que ela mostra** (uso direto da ferramenta em `facebook.com/ads/library`; a página oficial de ajuda não abriu sem navegador 🔴): os anúncios ativos de qualquer página, o criativo, o texto, a data de início, as plataformas e, quando o mesmo criativo roda em várias versões, o número de anúncios que o usam. Para anúncio comum entregue no Brasil, não há gasto nem alcance; esses dados existem para anúncio político e para entrega na União Europeia 🟡.
- 🟡 **O sinal gratuito mais forte é a duração.** Anúncio que fica no ar por meses está pagando a conta; a Foreplay ordena ganchos por tempo no ar e mostra um que rodou quase mil dias [34]. Várias versões do mesmo criativo ativas ao mesmo tempo indicam que ele está sendo escalado 🟡.
- 🟡 **Cuidado com a mesmice:** Barry Hott manda estudar o orgânico do público antes do concorrente [28]; Denney acompanha concorrente todo mês, mas como padrão, não como molde [29].

🟡 **O passo a passo de pesquisa** (síntese):

1. País Brasil, categoria "todos os anúncios".
2. Busque por palavra (ex.: "harmonização", "HOF", "mentoria", "agenda cheia", "dentista", "biomédica", "marketing para clínica") e pelas páginas dos concorrentes listados na pesquisa irmã `fontes/mercado-e-setor/pesquisa-quem-vende-para-a-clinica-de-hof.md`.
3. Separe o que está no ar há mais tempo e o que tem várias versões ativas.
4. Para cada um, anote na mesma etiqueta da matriz (persona, ângulo, estágio, formato, gancho, talento).
5. Guarde num arquivo de referências, com o link e a data em que viu.
6. Repita com o feed orgânico do público (uma conta de teste seguindo o que o profissional de HOF segue) [28].
7. Leia os comentários dos anúncios fortes: é a linguagem literal do público e a lista de objeções [29].

---

## 7. Criativo para vender a profissional (B2B de educação) × B2C

- 🟢 **A regra 95:5** (John Dawes, Ehrenberg-Bass, para o B2B Institute do LinkedIn, 2021): só cerca de 5% dos compradores estão no mercado num dado momento; os outros 95% não estão prontos [49]. Quem só fala com os 5% depende de busca, remarketing e abordagem agressiva [49].
- 🟢 **Emoção funciona em B2B.** Brand Finance com System1 (2025): anúncios que buscam conexão emocional engajam comprador B2B tanto quanto o B2C; o anúncio funcional e "de resolver problema" da Adobe tirou 1 estrela, nível em que ficam 65% dos anúncios da categoria [50].
- 🟡 **O que muda na prática para quem vende curso a profissional de saúde** (tese, a partir de [20][29][31][49][50]):
  1. **A pessoa compra para o negócio e para a identidade profissional.** O medo dela é concreto (agenda vazia, preço baixo, depender de indicação) e também de imagem (vergonha de se expor, insegurança de vender). O criativo nomeia os dois.
  2. **O mensageiro pesa mais.** Colega de profissão, quem já sentou na cadeira, fala com mais autoridade que ator ou criador genérico; é a mesma lógica do "fundador" e do "especialista explicando" que ganham em saúde [20], e da regra do Sanchez de escalar alguém parecido com o público [31].
  3. **Ciclo mais longo:** formatos que dão algo para ler ou assistir (carta, estudo de caso, especialista) servem melhor [20]; Serviços Profissionais roda menos criativos por semana justamente por isso [23].
  4. **95% fora do mercado:** o anúncio que só tem oferta conversa com os 5%; o anúncio que ensina uma coisa útil e deixa a marca na memória trabalha os 95% (tese do Dawes aplicada) [49].
  5. **Formato B2B "chato" perde:** a maioria dos anúncios B2B não emociona [50]; ser o anúncio de educação que *parece conteúdo do feed* é diferencial [28].
- 🟡 **No B2C da clínica** (o paciente), o filtro é outro: a política de saúde da Meta (sem inferioridade sobre a aparência, 18+), as regras dos conselhos [45][59], e formatos de confiança e transformação [20].

---

## 8. YouTube e Demand Gen do Google (curto)

- 🟢 **Regra de três:** em cada grupo de anúncios, pelo menos 3 imagens ou vídeos em cada proporção (vertical, quadrado, horizontal) [46]. Em Shorts, vertical, *"identificável, autêntico"* [46].
- 🟢 **ABCD do YouTube** (Atrair desde o início, Marca integrada, Conectar com emoção e história, Direcionar com chamada clara): anúncios que seguem o ABCD tiveram +30% na probabilidade de venda de curto prazo e +17% de contribuição de marca no longo prazo (estudo Google e Kantar) [47]. Repita a chamada na locução e na tela [46].
- 🟢 **Dados primeiro:** o Google chama a força dos dados (tag no site inteiro, conexão das fontes) de *"o multiplicador principal"* do Demand Gen [48].
- 🟢 **Orçamento mínimo para a IA aprender:** a partir de US$ 100 por dia em "maximizar conversões", ou 10 vezes o CPA alvo em "CPA desejado", e não avaliar antes de 50 conversões [48].
- 🟢 **Rótulo de IA** no Google desde julho de 2026 [38].
- 🟡 **Para a Altta:** o mínimo de orçamento e de conversões torna o YouTube pago um segundo canal, depois que a Meta provar conceitos. O vídeo longo que ensina (a aula aberta) é o formato natural ali, e o corte vertical dele alimenta a Meta.

---

## 9. Aplicação Altta

### 9.1 Vender o Academy

🟡 Tudo abaixo é hipótese com base nas seções anteriores. Nenhum número da conta da Altta entrou, porque não há ainda 🔴.

**1. A matriz de conceitos do Academy.** Personas pelo bloqueio de compra, não pela profissão:

| Persona (exemplo) | Dor concreta | Bloqueio de compra |
|---|---|---|
| Dentista que começou HOF e ainda vive da clínica geral | Agenda de HOF com buraco | "Curso de marketing é para quem tem verba" |
| Profissional autônomo de HOF que aluga sala | Depende de indicação, mês incerto | "Não tenho tempo para virar influencer" |
| Dono de clínica pequena com secretária | Lead chega no WhatsApp e some | "O problema é a equipe, não eu" |
| Quem já fatura e está na guerra de preço | Desconto para fechar | "Se eu subir o preço, perco paciente" |
| Quem domina a técnica e trava para vender | Vergonha de falar de preço e de aparecer | "Vender é antiético na saúde" |

Para cada persona, 3 a 4 ângulos de famílias diferentes (problema, contrário, prova, demonstração, novidade, oferta) e o estágio de consciência de cada um. Regra da casa: ⛔ nenhum criativo abre com tensão de marca; abre pela dor concreta da clínica.

**2. Cada curso é um conceito pronto.** O Academy vende 27 cursos separados; "novidade" e "anúncio de lançamento" estão entre as táticas de gancho que mais geram vencedor [21]. Um curso novo é motivo natural de anúncio, com execução própria.

**3. Formatos por ordem de prioridade para testar:**
- estático de texto (rápido para validar ângulo) [22];
- profissional real falando para a câmera, sobre a dor da persona (credibilidade de saúde) [20];
- demonstração de tela de uma ferramenta ou roteiro do curso (demonstração é top 2 do agregado) [20];
- carta (texto longo em imagem, top em saúde) [20];
- depoimento real de aluno com autorização, sempre com gancho antes [30];
- reação ou stitch a um post comum do nicho ("o erro deste post") [20].

**4. Cadência realista.** No porte micro, a mediana do mercado é perto de 3 criativos novos por semana [18]. Com 4% de acerto, 25 lançamentos por vencedor em média [18][19]. Melhor manter a cadência que fazer lote grande e parar. O CPM brasileiro é baixo perto do europeu, o que barateia o teste, mas o único número que achei vem de fornecedor [53].

**5. Estrutura enxuta.** Conjunto por persona ou conceito, 3 a 6 anúncios por conjunto enquanto o orçamento for pequeno [13][17], ferramenta de teste de criativo para todo anúncio novo [14], formato flexível para dar 10 mídias ao sistema dentro do mesmo conceito [11]. Se a compra do curso não chega a volume para o conjunto aprender, otimizar para um evento anterior (lead, início de compra) é a saída usual, com o evento do CRM voltando pela API de Conversões para separar lead bom de ruim [51] 🟡.

**6. Público pequeno cansa.** Profissional de HOF no Brasil é um público estreito; Loomer diz que, com público limitado e pouco criativo, a fadiga é certa [15]. Variar persona e conceito é a defesa; a cadência semanal também.

**7. IA na produção, pela tabela de 5.4.** Estático, b-roll, variação de texto e proporção, legenda e análise com IA; gente de verdade na tela; ⛔ nenhum avatar, nenhuma voz sintética, nenhum depoimento inventado.

**8. Linguagem.** Português do Brasil, sem travessão, sem gênero marcado no texto de cliente, sem jargão de marketing que o profissional de saúde não usa.

### 9.2 O que o Academy ensina à clínica

🟡 O mesmo conteúdo, traduzido para o anúncio da clínica para o paciente:

1. **O criativo é a segmentação também para a clínica.** Não adianta segmentar "mulheres de 30 a 50 do bairro"; o anúncio é que encontra a paciente [5][11].
2. **Clínica é público local, e público local cansa** [15]: mais conceitos, mais pessoas reais da equipe na tela, renovação constante.
3. **Formatos de confiança:** a profissional explicando, a carta, o estudo de caso dentro das regras do conselho, a reação a um mito, o bastidor [20].
4. **Política de saúde da Meta:** nada de "suas rugas", "seu nariz torto"; nada de afirmar o que a pessoa sente; 18+ [45]. E as regras de antes e depois de cada conselho [59].
5. **Formato flexível com 10 mídias** dá diversidade até com orçamento pequeno [11].
6. **Ler a cadeia de métricas** antes de culpar o anúncio (tabela de 4.3), e lembrar que lead bom só se prova se o resultado do CRM volta para a Meta [51].
7. **IA sem fingir paciente:** nenhuma foto de resultado gerada, nenhum depoimento inventado [43][44].

### 9.3 Pontos que pedem decisão do João

1. **Sócios na tela.** "Fundador" está no top 5 de Saúde [20], mas a regra do conteúdo diz que os sócios nunca aparecem nas capas. A regra vale para anúncio pago? (escolher: vale / não vale / vale só para capa).
2. **Capa de cinema feita por IA como anúncio.** O padrão de capa do conteúdo é imagem de IA; a evidência diz que anúncio que *parece* IA rende menos [36][37]. Testar como um conceito entre vários, ou não usar no pago?

---

## 10. Onde discorda dos livros da biblioteca

- 📚 **Schwartz (*Breakthrough Advertising*).** Converge no estágio de consciência e no desejo de massa: os dois viraram "dimensões principais" do criativo [10]. **Discorda** no ofício do título único: Schwartz ensina a achar *a* frase dominante; a Meta de 2026 serve desejos diferentes a pessoas diferentes ao mesmo tempo, e a taxa de acerto de 4 a 9% mostra que prever o vencedor é fraco [18]. O ofício do Schwartz passa a gerar hipóteses; quem escolhe é o leilão.
- 📚 **Hormozi (*$100M Leads*).** Converge no volume (mais lançamentos, mais vencedores [19]) e no gancho como peça separada. **Discorda** na técnica de dezenas de ganchos sobre o mesmo corpo: trocar só o texto da abertura tende a contar como o mesmo anúncio [8][32]. A técnica serve para iterar o vencedor, não para descobrir.
- 📚 **Hormozi (*$100M Offers*).** Converge: os ganchos de oferta (banner de oferta, âncora de preço, só a oferta) lideram a taxa de acerto [20][21]. ⚠️ O dado é de período de promoção, o que infla esse resultado.
- 📚 **Brunson (*DotCom Secrets*) e Suby (*Sell Like Crazy*).** Convergem em gancho, história e oferta como esqueleto. **Discordam** na mensagem separada por temperatura e no público milimetrado: o "anúncio de funil inteiro" do Barry Hott [28] e o remarketing que acontece sozinho dentro do público amplo [15] substituem boa parte das sequências por público.
- 📚 **Miller (*StoryBrand*).** Converge: claro vence esperto [28]. **Discorda** no acabamento: clareza de mensagem sim, polimento de produção não; o anúncio nativo e "feio" rende mais que o bonito [22][28].
- 📚 **Cialdini.** Converge em prova social e autoridade (depoimento tem 6,5% de acerto [20]; rosto humano é o maior sinal de confiança [37]). O veto ético dele é o mesmo da FTC e do CONAR: nada de testemunho fabricado [43][44].
- 📚 **Weinberg (*Tração*).** Converge no teste barato e rápido. **Discorda** na unidade: dentro da Meta, o que se testa é o conceito de criativo. Um "teste de canal" com dois criativos é um teste de criativo disfarçado; para julgar o canal, é preciso diversidade suficiente de conceitos.

**Onde as fontes discordam entre si** (para não tratar número de blog como regra):
- Anúncios por conjunto: 3 a 6 [17], perto de 6 [13], 15 a 20 [10], 50 a 100 por mês [24]. Depende de orçamento.
- Taxa de gancho "boa": 25%, 30%, 30 a 40% [25][27], e vencedor abaixo de 15% [28].
- Retenção: muda conforme o denominador [27].
- Fadiga: "2 a 3 semanas" em blog de fornecedor 🔴, contra "rara, salvo público limitado" no Loomer [15].
- Uma fonte brasileira afirma que o sistema antigo escolhia "~300 candidatos" e o Andromeda "dezenas de milhares" [54]; a Meta descreve o contrário em escala (de dezenas de milhões para alguns milhares) [1]. Exemplo de por que blog sem fonte não entra como dado.

---

## 11. Lacunas

- 🔴 **Nenhum número público de anúncio para educação B2B de profissional de saúde no Brasil** (CPM, CPL, taxa de gancho, custo de venda de curso). A fonte mais forte vai ser a conta de anúncios da própria Altta, etiquetada pela matriz.
- 🔴 **A Meta não publica o limiar de semelhança** entre criativos; "Entity ID", "60%" e "70% diferente" são termos e números de praticante e fornecedor.
- 🔴 **As métricas de "insights de criativo" da Insights API** (em teste desde junho de 2026) não foram descritas.
- 🔴 **Efeito do rótulo "Informações de IA" no desempenho:** nenhum estudo.
- 🔴 **Estudo com método sobre avatar de IA** em saúde ou educação: não achei; só números de fornecedor.
- 🔴 **Referências brasileiras de criativo para infoproduto com método escrito:** só achei resumos de vídeo de YouTube [55][56] e um blog que vende e-book [54]. Os nomes conhecidos do mercado brasileiro não têm material escrito que eu tenha conseguido ler nesta sessão.
- 🔴 **Fontes primárias não lidas** por falta de busca: Common Thread Collective, Pilothouse, o material do Hormozi sobre anúncio fora do livro, e a página oficial da Biblioteca de Anúncios e da política de saúde (não abriram sem navegador; usei fontes secundárias que citam o texto).
- 🔴 **Tamanho do público de profissionais de HOF alcançável na Meta no Brasil:** não medido.
- 🟡 **A base da Motion é majoritariamente comércio eletrônico e cobre o período de Black Friday.** "Educação" existe como setor na base, mas o ranking de formatos dela não foi publicado; a transferência para o Academy é hipótese.

---

## 12. Fontes

1. Meta Engineering, *Meta Andromeda: Supercharging Advantage+ automation with the next-gen personalized ads retrieval engine*, https://engineering.fb.com/2024/12/02/production-engineering/meta-andromeda-advantage-automation-next-gen-personalized-ads-retrieval-engine/ (2024-12-02)
2. Meta Engineering, *Meta's Generative Ads Model (GEM)*, https://engineering.fb.com/2025/11/10/ml-applications/metas-generative-ads-model-gem-the-central-brain-accelerating-ads-recommendation-ai-innovation/ (2025-11-10)
3. Meta AI, *New AI advancements drive Meta's ads system performance and efficiency* (Lattice), https://ai.meta.com/blog/ai-ads-performance-efficiency-meta-lattice/ (2023-05-11)
4. Meta for Business, *AI Innovations in Meta's Ad Ranking Driving Advertiser Performance*, https://www.facebook.com/business/news/ai-innovation-in-metas-ads-ranking-driving-advertiser-performance (2025-03-27)
5. Meta for Business, *The Creative Advantage: Unlocking the Power of Diversification with Meta Andromeda*, https://www.facebook.com/business/news/the-creative-advantage-unlocking-the-power-of-diversification-with-meta-andromeda (2025-04-22)
6. Meta for Business, *Three steps to optimize your performance with creative diversification*, https://www.facebook.com/business/news/three-steps-to-optimize-your-performance-with-creative-diversification (2024-11-19)
7. Meta for Business, *Anúncios bem-sucedidos contam uma história de várias maneiras* (criativo diferenciado), https://www.facebook.com/business/m/small-business/creative-differentiation (sem data; lida em 2026-10-07)
8. Marketing Brew, Jasmine Sheena, *How advertisers are adjusting to Meta's ad creative diversification best practices*, https://www.marketingbrew.com/stories/meta-ad-creative-diversification-best-practices-advertiser-approach (2026-09-28)
9. Relevant Audience, Antonio Fernandez, *Meta tells advertisers near-identical creative counts as the same ad*, https://www.relevantaudience.com/meta/meta-ad-creative-diversification-same-hook-same-ad/ (2026-09-29; agência, resume a [8])
10. Motion, Ignacio Manchi (Ready Set), *Andromeda 2.0 Explained*, https://motionapp.com/library/talk/andromeda-2-0-explained-how-meta-s-algorithm-actually-picks-your-winning-ads/ (gravado em julho de 2026)
11. Jon Loomer, *Meta Andromeda and Creative Diversification: 7 Examples Explained*, https://www.jonloomer.com/meta-andromeda-creative-diversification/ (2025-10-20)
12. Jon Loomer, *Number of Ads Per Ad Set*, https://www.jonloomer.com/qvt/number-of-ads-per-ad-set/ (sem data; anterior à [13])
13. Jon Loomer, *No More Six Ad Limit Per Ad Set*, https://www.jonloomer.com/qvt/no-more-six-ad-limit-per-ad-set/ (sem data; lida em 2026-10-07)
14. Jon Loomer, *The Biggest Meta Advertising Updates of 2025*, https://pubcast.jonloomer.com/the-biggest-meta-advertising-updates-of-2025/ (2025-12-31)
15. Jon Loomer, *Why You Are Misdiagnosing Creative Fatigue*, https://pubcast.jonloomer.com/why-you-are-misdiagnosing-creative-fatigue/ (2026-07-01)
16. Jon Loomer, *Creative Fatigue: What It Is and How to Prevent It*, https://www.jonloomer.com/creative-fatigue-meta-ads/ (sem data; lida em 2026-10-07)
17. Flighted, *How Many Ads Should You Put in A Meta Ad Set? The Definitive 2026 Guide*, https://www.flighted.co/blog/how-many-ads-should-you-put-in-a-meta-ad-set (2026-07-02; agência que vende o serviço, confiabilidade média)
18. Motion, *Creative Benchmarks 2026* (US$ 1,29 bi, 578.750 criativos, 6.015 contas, dados de 2025-09-01 a 2026-01-01), https://motionapp.com/library/research/creative-benchmarks-2026/ (2026; fornecedor de ferramenta, mas com método declarado)
19. Motion, *Why hit rate alone can mislead*, https://motionapp.com/library/research/creative-benchmarks-2026/hit-rate-context (2026)
20. Motion, *Trends are not universal* e *Visual formats by vertical*, https://motionapp.com/library/research/creative-benchmarks-2026/trends-are-not-universal e https://motionapp.com/library/research/creative-benchmarks-2026/visual-formats-by-vertical (2026)
21. Motion, *Top hook tactics on Meta in 2026*, https://motionapp.com/library/research/creative-benchmarks-2026/top-hook-tactics (2026)
22. Motion, *Top asset types on Meta in 2026*, https://motionapp.com/library/research/creative-benchmarks-2026/top-asset-types (2026)
23. Motion, *Weekly creative testing volume by industry vertical*, https://motionapp.com/library/research/creative-benchmarks-2026/testing-by-vertical (2026)
24. Motion, Caleb Kruse, *The New Meta Ads Testing Strategy: 10 Ads vs 100 Ads*, https://motionapp.com/library/talk/the-new-meta-ads-testing-strategy-10-ads-vs-100-ads/ (gravado em janeiro de 2026)
25. Motion, *Key creative performance metrics*, https://motionapp.com/blog/key-creative-performance-metrics (sem data; lida em 2026-10-07; fornecedor)
25b. ViniEnsina, *Calculadora de Teste de Criativos para Meta Ads*, https://viniensina.com.br/ferramentas/calculadora-teste-criativos-meta-ads/ (2026; vende e-book, confiabilidade baixa)
26. Motion, *How to do Creative Strategy in 2025*, https://motionapp.com/blog/how-to-do-creative-strategy-in-2025 (2025; fornecedor)
27. Jetfuel Agency, *Creative Performance Metrics for DTC Video Ads: Hold Rate, Thumbstop, and Thruplay Benchmarks (2026)*, https://jetfuel.agency/creative-performance-metrics-for-dtc-video-ads-hold-rate-thumbstop-and-thruplay-benchmarks-2026/ (2026; agência)
28. Alex Cooper (Adcrate), *7 Facebook Advertising Lessons I Learned from Barry Hott*, https://alexcooper.beehiiv.com/p/7-facebook-advertising-lessons-i-learned-from-barry-hott (2025)
29. Motion, Dara Denney, *The biggest creative analysis mistake in 2026*, https://motionapp.com/library/talk/dara-denney-reveals-the-biggest-creative-analysis-mistake-in-2026-most/ (gravado em dezembro de 2025)
30. Motion, Savannah Sanchez, *15 Proven UGC Ad Hooks That Are Working Right Now*, https://motionapp.com/library/talk/15-proven-ugc-ad-hooks-that-are-working-right-now-savannah-sanchez/ (gravado em julho de 2026)
31. Motion, Savannah Sanchez, *The 30 Ad Formats Every Top Brand is Stealing in 2025*, https://motionapp.com/library/talk/the-30-ad-formats-every-top-brand-is-stealing-in-2025/ (gravado em julho de 2025)
32. 1800DTC, Travis Halff (Y'all), *Agency Insights: What Meta's Andromeda Update Actually Changed*, https://1800dtc.com/reads/agency-insights-what-metas-andromeda-update-actually-changed-and-how-were-adapting-our-ads (2025-11-19)
33. Smart Marketer, Ben Bennett, *The Meta Algorithm Shift: How to Adapt Your Creative Strategy, Part 1*, https://smartmarketer.com/the-meta-algorithm-shift-how-to-adapt-your-creative-strategy-part-1/ (2025)
34. Foreplay, *How to Use Hooks*, https://www.foreplay.co/post/how-to-use-hooks (sem data; lida em 2026-10-07; fornecedor de ferramenta)
35. EasyInsights, *Meta's Update: A New Way to Test Creatives*, https://easyinsights.ai/blog/metas-update-a-new-way-to-test-creatives-from-a-b-to-ai-led-optimization/ (2025; fornecedor, confiabilidade baixa)
36. NielsenIQ, *NIQ Research Uncovers Hidden Consumer Attitudes Toward AI-Generated Ads*, https://nielseniq.com/global/en/news-center/2024/niq-research-uncovers-hidden-consumer-attitudes-toward-ai-generated-ads/ (2024-12-12)
37. IT Brief UK, *Study finds AI ads rival humans when visuals build trust* (estudo Taboola com Columbia, Harvard, TUM e Carnegie Mellon), https://itbrief.co.uk/story/study-finds-ai-ads-rival-humans-when-visuals-build-trust (2026-01-29)
38. TechWyse, Nicole Orlans, *Google and Meta Turn AI Ad Disclosure Into Campaign Data*, https://www.techwyse.com/news/industry-news/google-meta-ai-ad-disclosure-labels (2026-07-10)
39. ContentGrip, *Meta AI ad labels raise transparency stakes*, https://www.contentgrip.com/meta-ai-ad-labels/ (2026)
40. Let's Data Science, *Meta updates disclosure tags for AI-generated ads*, https://letsdatascience.com/news/meta-updates-disclosure-tags-for-ai-generated-ads-c77a381d (2026)
41. Shopifreaks, *Meta unveils new AI creative and creator tools at Cannes Lions 2026*, https://www.shopifreaks.com/meta-unveils-new-ai-creative-and-creator-tools-at-cannes-lions-2026-heres-a-recap-of-whats-new/ (junho de 2026)
42. Campaign Asia, *Meta aims to fully automate ad creation with AI by 2026* (a partir do Wall Street Journal), https://www.campaignasia.com/article/meta-aims-to-fully-automate-ad-creation-with-ai-by-2026/502831 (junho de 2025)
43. Hunton Andrews Kurth, *FTC Issues Final Rule Targeting Fake Consumer Reviews and Testimonials, Including Those Generated by AI*, https://hunton.com/hunton-retail-law-resource/ftc-issues-final-rule-targeting-fake-consumer-reviews-and-testimonials-including-those-generated-by-artificial-intelligence-ai-and-online-bots (agosto de 2024)
44. Propmark, *Conar atualiza guia de publicidade com influenciadores e inclui regras sobre IA*, https://propmark.com.br/digital/conar-atualiza-guia-de-publicidade-com-influenciadores-e-inclui-regras-sobre-ia/ (maio de 2026)
45. Accelerated Digital Media, *2026 Health Advertising Policies on Social Media*, https://www.accelerateddigitalmedia.com/insights/guide-to-social-media-health-ad-restrictions-2026/ (2026; agência, cita o texto da política da Meta)
46. Google Ads Help, *Creative Excellence Guide for Demand Gen Campaigns*, https://support.google.com/google-ads/answer/14733311 (sem data; lida em 2026-10-07)
47. Google Business (Think with Google), Ben Jones, *Creative best practices for YouTube ads* (ABCD), https://business.google.com/us/think/future-of-marketing/creative-best-practices-youtube-ads/ (sem data; lida em 2026-10-07)
48. Google Business, *Do the YouTube Four to drive conversions* (*The YouTube performance four*), https://business.google.com/us/accelerate/resources/articles/do-the-youtube-four-to-drive-conversions/ (sem data; lida em 2026-10-07)
49. Ehrenberg-Bass Institute, *The 95:5 Rule: Why B2B Growth Starts Long Before the Purchase*, https://marketingscience.info/news-and-insights/the-955-rule-why-b2b-growth-starts-long-before-the-purchase (sem data; regra publicada em 2021)
50. Brand Finance e System1, *Feelings vs. Function? The power of emotional advertising in B2B brand building*, https://brandfinance.com/insights/feelings-vs-function-the-power-of-emotional-advertising-in-b2b-brand-building (2025)
51. MarTech, *Meta announces lead gen product upgrades for 'Q5'*, https://martech.org/meta-announces-lead-gen-product-upgrades-for-q5-yes-you-read-that-right/ (2025-10-30)
52. Website Builder Expert, *Boost Reels Performance by Following Meta's 3 Simple Steps* (guia de Reels da Meta atualizado em julho de 2025: 9:16, áudio, zona segura), https://www.websitebuilderexpert.com/news/meta-updates-reels-ads-guide/ (2025)
53. adlibrary.com, *Meta Ads Brazil Playbook 2026*, https://adlibrary.com/posts/meta-ads-brazil-playbook-2026 (2026; fornecedor, confiabilidade baixa: diz que o Brasil é o 3º maior mercado da Meta e que o CPM de prospecção fica entre € 0,40 e € 1,20)
54. ViniEnsina, *Meta Andromeda: O que É e Como Afeta Seus Anúncios em 2026*, https://viniensina.com.br/meta-andromeda-o-que-e/ (2026; vende e-book, confiabilidade baixa)
55. Matheus Lourenço (YouTube), *Como Fazer 100 CRIATIVOS por DIA (Técnica de Ganchos & Body pra AD)*, https://www.youtube.com/watch?v=nn-w3AF7L-Y (sem data; lido por resumo, confiabilidade baixa)
56. James William (YouTube), *Como fazer os melhores anúncios no Meta Ads em 2026* (estratégia F322), https://www.youtube.com/watch?v=bqtUcxLVWLQ (2026; lido por resumo, confiabilidade baixa)
57. ABMES, *Resolução CFO nº 196/2019* (selfie e imagens de diagnóstico e resultado final), https://abmes.org.br/legislacoes/detalhe/2688/resolucao-cfo-n-196 (2019-01-29)
58. Sanar, *CFM atualiza regras de publicidade médica* (Resolução CFM 2.336/2023), https://sanarmed.com/cfm-atualiza-regras-de-publicidade-medica-o-que-muda-para-o-medico-posmed/ (2023)
59. Biblioteca da Altta, *Marketing da clínica de HOF e as regras de publicidade dos conselhos*, `empresa/estrategia/biblioteca/fontes/mercado-e-setor/pesquisa-marketing-da-clinica-e-regras-dos-conselhos.md` (2026-10-07; pesquisa irmã, detalha CFO, CFM e os demais conselhos)

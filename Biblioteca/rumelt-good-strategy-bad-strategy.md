# Good Strategy / Bad Strategy — Richard P. Rumelt

> **Síntese autoral. Não é transcrição, não é tradução, não é cópia.** Os conceitos foram
> reescritos com palavras próprias, os casos recontados em prosa própria, os números e nomes
> de frameworks preservados porque são referência, não texto protegido. O PDF original está em
> `empresa/estrategia/biblioteca/pdfs/Good-Strategy_-Bad-Strategy-by-Richard-P.-Rumelt.pdf`,
> fora do git.
>
> **Livro 23 do acervo, e o último da fila 2.** Os seis anteriores da fila — Coleman, Warrillow,
> Steinman, Spinks, Make It Stick e Dirksen — **foram processados no mesmo dia, e estão nesta
> pasta.** O bloco de retenção está fechado; o bloco de aprendizagem está fechado.
>
> **Consequência para a leitura desta síntese:** onde ela discute "o resto da biblioteca", a
> referência são os **22 livros anteriores**. Em particular, **o eixo do custo de entrega no §4 da
> jurisprudência já foi aberto antes deste livro** — por Spinks (11º caminho, custo de comunidade),
> Make It Stick (12º, custo de currículo) e Steinman (13º, custo de medir). **Rumelt é o 14º, e o
> que ele acrescenta não é mais uma observação sobre entrega: é o MECANISMO — casamento de
> qualidade em sistemas de elos em cadeia — que explica por que os três anteriores encontraram o
> mesmo fenômeno por três portas diferentes.** Ver a §2 da Aplicação Altta e a pergunta 5 da
> avaliação honesta.
>
> **Categoria do PDF: edição comercial limpa.** Profile Books (Reino Unido) / Crown Business
> (EUA), 2011, 357 páginas de PDF, texto em inglês, extração por `pypdf` sem corrupção
> sistemática de caracteres. Defeitos observados:
>
> | Defeito | O que é |
> |---|---|
> | **Um embaralhamento de linha** | No cap. 1, o texto sai como `"BusinBusiness 101 is surprisingess 101"` — um título de margem injetado no meio da frase. Ocorrência isolada |
> | **Todas as figuras ausentes** | São imagens, e a extração de texto não as pega. Perdidas: o diagrama de envolvimento do FM 100-5, a tabela David × Golias, os diagramas de Wal-Mart (loja/rede/logística), o slide da Arthur Andersen sobre banda larga, o gráfico "taco de hóquei" da International Harvester, a tabela de preferências de DEC, os diagramas de Crown Cork & Seal, o **hump chart** da Denton's, os dois gráficos de linha de produto GM/Toyota, o gráfico de dívida das famílias e o gráfico da ação da Crown |
> | **Consequência prática** | Nenhuma. Rumelt descreve cada figura em prosa com detalhe suficiente para reconstruí-la — o hump chart e as linhas de produto da GM estão reconstruídos nesta síntese a partir do texto |
>
> **Sumário confere com o corpo: 18 capítulos mais introdução, nenhum ausente.** As notas de
> fim (capítulos 1 a 18) foram lidas e são a única parte do acervo inteiro que tem aparato
> acadêmico de verdade — voltarei a isso na avaliação de evidência.

---

## Índice

- [A tese central](#a-tese-central)
- [PARTE I — Boa e má estratégia](#parte-i--boa-e-má-estratégia)
  - [1. Boa estratégia é inesperada](#1-boa-estratégia-é-inesperada)
  - [2. Descobrir poder](#2-descobrir-poder)
  - [3. Má estratégia — os quatro sinais](#3-má-estratégia--os-quatro-sinais)
  - [4. Por que existe tanta má estratégia](#4-por-que-existe-tanta-má-estratégia)
  - [5. O kernel](#5-o-kernel--o-instrumento-central-do-livro)
- [PARTE II — Fontes de poder](#parte-ii--fontes-de-poder)
  - [6. Alavancagem](#6-alavancagem)
  - [7. Objetivo próximo](#7-objetivo-próximo-proximate-objective)
  - [8. Sistemas de elos em cadeia](#8-sistemas-de-elos-em-cadeia-chain-link-systems)
  - [9. Design](#9-design)
  - [10. Foco](#10-foco)
  - [11. Crescimento](#11-crescimento)
  - [12. Vantagem](#12-vantagem)
  - [13. Dinâmica](#13-dinâmica)
  - [14. Inércia e entropia](#14-inércia-e-entropia)
  - [15. Nvidia — tudo junto](#15-nvidia--o-caso-que-junta-tudo)
- [PARTE III — Pensar como estrategista](#parte-iii--pensar-como-estrategista)
  - [16. Estratégia é hipótese](#16-estratégia-é-hipótese)
  - [17. Usar a própria cabeça](#17-usar-a-própria-cabeça)
  - [18. Manter a cabeça](#18-manter-a-cabeça)
- [APLICAÇÃO ALTTA](#aplicação-altta)
- [Tensões com o resto da biblioteca](#tensões-com-o-resto-da-biblioteca)
- [Avaliação honesta](#avaliação-honesta)

---

## A tese central

Uma frase resume o livro inteiro:

> **Estratégia não é ambição, não é liderança, não é visão, não é meta e não é planejamento.
> Estratégia é uma resposta coerente a um desafio específico, e a maior parte do que hoje se
> chama de estratégia não é estratégia nenhuma.**

Rumelt não escreveu um livro sobre como vencer. Escreveu um livro sobre **como reconhecer que
o que você chamou de estratégia é uma lista de desejos** — e o que colocar no lugar. A palavra
"estratégia" foi esticada até virar sinônimo de "decisão tomada por alguém graduado o
suficiente": marketing virou "estratégia de marketing", TI virou "estratégia de TI", baixar
preço virou "estratégia de preço baixo". Uma palavra que significa qualquer coisa perdeu a
mordida.

A definição que ele coloca no lugar é estreita de propósito:

> Estratégia é um **conjunto coerente de análises, conceitos, políticas, argumentos e ações**
> que responde a um desafio de alto risco.

Três coisas nessa definição fazem trabalho pesado, e a maioria dos livros de negócio ignora
todas as três.

**Primeira: tem que haver um desafio nomeado.** Se você não consegue dizer qual é a
dificuldade, ninguém consegue julgar se a resposta é boa. Sem desafio definido, não existe
critério — e sem critério, você não consegue nem rejeitar uma estratégia ruim nem melhorar uma
boa. Essa é a razão pela qual "queremos crescer 20% ao ano" não é estratégia: não há
dificuldade nomeada, logo não há nada para avaliar.

**Segunda: tem que haver ação dentro.** A separação entre "estratégia" e "execução" é, para
Rumelt, o sintoma da doença, não a arquitetura normal do trabalho. Executivos que reclamam de
"problema de execução" quase sempre confundiram estratégia com definição de metas: montaram um
conjunto de números e delegaram para baixo o trabalho de descobrir o que fazer — e aí o abismo
entre ambição e ação é evidente. Uma estratégia que não define **um punhado de ações imediatas
plausíveis e viáveis** está incompleta. A ação não é detalhe de implementação; **é o soco da
estratégia.**

**Terceira: coerência.** As ações têm que se apoiar umas nas outras. A maior parte das
organizações persegue múltiplos objetivos desconectados — ou pior, conflitantes. Coerência é a
fonte de vantagem mais básica e mais subestimada que existe, e é grátis no sentido de que não
exige nenhum ativo, nenhuma patente e nenhum recurso raro: exige só a disposição de dizer não.

Sobre o que Rumelt está brigando, e vale registrar porque a biblioteca inteira está do lado que
ele ataca: **ele é frontalmente contra o gênero motivacional.** O livro tem um capítulo inteiro
rastreando a genealogia do "pensamento positivo" desde Emerson até *O Segredo*, e a conclusão é
brutal — acreditar que raios saem da sua cabeça e mudam o mundo físico é psicose, não é
abordagem de gestão. Ele não diz que motivação é inútil; diz que **motivação sem estratégia é
Passchendaele**, e conta a história dos 70 mil mortos aliados em três meses para ganhar cinco
quilômetros de lama, ordenados por um general que acreditava em "mais um empurrão".

---

# PARTE I — Boa e má estratégia

## 1. Boa estratégia é inesperada

A primeira vantagem natural de uma boa estratégia é que **as outras organizações não têm uma —
e, por isso, não esperam que você tenha.**

### O caso Apple, 1997

O ponto do caso não é o gênio de Jobs; é o quanto a coisa óbvia era, ao mesmo tempo, a coisa
inesperada. Em 1997 a Apple estava a dois meses da falência. A imprensa especializada publicou
uma lista de "101 maneiras de salvar a Apple" — vender-se para a IBM ou a Motorola, investir
pesado no Newton, explorar a vantagem no mercado educacional. Wall Street torcia por um acordo
com a Sony ou com a HP.

O que Jobs fez foi **encolher a empresa até um núcleo que sobrevivesse**. Cortou quinze modelos
de desktop para um. Cortou todos os portáteis e handhelds para um laptop. Cortou impressoras e
periféricos inteiros. Cortou engenheiros de desenvolvimento. Cortou desenvolvimento de
software. Cortou cinco dos seis varejistas nacionais. Cortou quase toda a manufatura, mandando
para Taiwan. Com uma linha simples fabricada na Ásia, cortou estoque em mais de 80%. Abriu uma
loja web vendendo direto. E convenceu a Microsoft a investir US$ 150 milhões, explorando o medo
do Bill Gates sobre o que uma Apple morta significaria no processo antitruste dele.

Quando Rumelt perguntou a Jobs, em 1998, qual era a estratégia de longo prazo — porque com 4%
do mercado de PC e o padrão Wintel estabelecido não havia saída visível —, Jobs sorriu e disse
que ia **esperar a próxima grande coisa**. Não é fórmula geral de sucesso. Era a leitura certa
daquela indústria naquele momento: ele já tinha feito isso com o Apple II, com o Macintosh e com
a Pixar, tinha tentado forçar com o NeXT e se dado mal. Dois anos depois veio o iPod.

**O contraste que dá o teor do capítulo.** Dezoito meses antes, Rumelt tinha entrevistado 26
executivos de divisão e CEOs da indústria eletrônica europeia. Perguntou a cada um: quem é o
líder do seu setor, e como ele chegou lá? Todos deram a mesma resposta — abriu-se uma janela de
oportunidade, e o líder foi o primeiro a acertar dentro dela. Aí perguntou: e qual é a
estratégia *da sua* empresa? Nenhum mencionou janela de oportunidade. Falaram de alianças, de
feedback 360 graus, de mercados estrangeiros, de metas desafiadoras, de mover software para
firmware. **Cada um deles tinha acabado de enunciar a fórmula de sucesso do próprio setor, e
nenhum a estava usando.** Rumelt chama isso de polir maçaneta com cara de ocupado.

### Desert Storm, 1991

O segundo caso é militar e serve exatamente ao mesmo argumento. Antes da ofensiva terrestre, a
imprensa e o Congresso americano previam trincheiras estilo Primeira Guerra e dezenas de
milhares de baixas. Schwarzkopf tinha um plano: reduzir a capacidade iraquiana em 50% pelo ar,
depois deslocar secretamente 250 mil soldados para o oeste, subir pelo deserto vazio do sul do
Iraque e virar para leste — o **"gancho de esquerda"** — batendo no flanco da Guarda
Republicana, enquanto os fuzileiros faziam uma finta lenta ao norte para atrair os iraquianos
para fora das fortificações. A guerra terrestre durou cem horas.

Quando Schwarzkopf revelou o plano numa coletiva, comentaristas o chamaram de "brilhante" e
"secreto". **Não era nem uma coisa nem outra.** O manual de campo do exército americano, o FM
100-5 de 1986, descreve o envolvimento — finta pela frente, esforço principal pelo flanco e pela
retaguarda — como a forma mais importante de manobra ofensiva, na página 101, com diagrama. O
manual custava vinte e cinco dólares e era vendido pela gráfica do governo para quem quisesse.

Então por que foi surpresa? **Porque a surpresa não era o plano; era que alguém realmente
executasse um plano focado.** Organizações complexas espalham recursos em vez de concentrá-los,
para acomodar e pagar interesses internos e externos. Schwarzkopf teve que suprimir a ambição da
força aérea (que queria provar que ganhava a guerra bombardeando Bagdá e precisou ser forçada a
apoiar a ofensiva terrestre), a dos fuzileiros (oito mil ficaram nos navios sem desembarcar,
como diversão), a da 82ª Aerotransportada (a melhor infantaria leve do país, colocada para dar
apoio a franceses, e protestou), a do secretário de Defesa (que queria força menor e tinha plano
alternativo) e a do príncipe Khalid (que queria o rei Fahd no planejamento).

> **A frase que fecha o capítulo, e a mais citável do livro inteiro:** ter objetivos
> conflitantes, dedicar recursos a alvos desconexos e acomodar interesses incompatíveis são
> **luxos dos ricos e poderosos** — e produzem má estratégia. Estratégia é tanto sobre o que a
> organização **não** faz quanto sobre o que ela faz.

---

## 2. Descobrir poder

A segunda vantagem natural vem de **enxergar a situação de um ângulo que os outros não usaram**.
Não é executar melhor a mesma peça; é redefinir o tabuleiro.

### Davi e Golias como caso de estratégia, não de fé

Rumelt usa a história como exercício de listagem de forças e fraquezas — o exercício que todo
manual de estratégia manda fazer. Se você lista honestamente, Golias ganha em tudo: tamanho,
armadura, arma, experiência. Só **depois** que a pedra é lançada o ouvinte percebe que a
experiência do menino com a funda era força, que a rapidez era força, que a armadura que ele
descartou só o atrasaria (e não o salvaria de um golpe de perto de qualquer jeito), e que a
armadura do gigante **não cobria a testa**.

A lição não é "o pequeno vence". É que **nossas ideias prévias sobre o que é força e o que é
fraqueza são frequentemente erradas**, e a vantagem decisiva costuma ser uma assimetria que
ninguém tinha catalogado. Nem toda boa estratégia depende desse tipo de insight — mas as que
dependem produzem o chute extra que separa a excelência comum do extraordinário.

### Wal-Mart: a descoberta que Rumelt leva uma aula inteira para arrancar

Este é o melhor caso pedagógico do livro e vale contá-lo pela mecânica, não pelo desfecho.

Rumelt escreve na lousa, antes de qualquer discussão, uma frase tirada do caso e a emoldura numa
caixa:

> **SABEDORIA CONVENCIONAL:** uma loja de desconto de linha completa precisa de uma base
> populacional de pelo menos 100 mil pessoas.

Pergunta: por que a Wal-Mart deu certo? A turma leva trinta minutos para produzir a lista
esperada — Sam Walton quebrou a sabedoria convencional, colocou lojas grandes em cidades
pequenas, preço baixo todo dia, sistema computadorizado de armazenagem e transporte, não
sindicalizada, despesa administrativa baixa.

Aí ele faz a pergunta que interrompe o ping-pong agradável de recitar fatos: *se essas políticas
são a razão do sucesso, e o caso foi publicado em 1986, por que a empresa passou por cima da
Kmart pela década seguinte? A fórmula não era óbvia? Cadê a concorrência?* Silêncio. O caso não
falava de concorrência, então a turma não pensou em concorrência — e isso acontece sempre.
**Metade do que se aprende num exercício de estratégia é considerar o concorrente mesmo quando
ninguém mandou.** Sempre que uma organização vence muito, existe ao mesmo tempo uma concorrência
bloqueada ou fracassada. No caso, a falha era a Kmart, que passou os anos 70 e 80 se expandindo
internacionalmente e ignorando a logística do rival, e pediu falência em 2002.

Depois ele afunila: Wal-Mart e Kmart instalaram leitores de código de barras no caixa na mesma
época, no começo dos anos 80. **Por que a Wal-Mart lucrou mais com isso?** Aqui alguém entende:
sozinho, o leitor não ajuda quase nada — a Kmart teria que levar o dado até os centros de
distribuição e os fornecedores, e operar um sistema logístico de entrada integrado. É aí que
Rumelt nomeia o mecanismo: **as políticas da Wal-Mart são complementares umas das outras.**
Código de barras, logística integrada, entregas frequentes just-in-time, lojas grandes com
estoque baixo — cada peça é moldada para as outras. **As peças não são intercambiáveis.** Um
concorrente que copie um pedaço não ganha quase nada; teria que adotar o desenho inteiro.

E então o golpe final. Ele pede a um aluno que se imagine gerente de uma loja Wal-Mart em 1985,
insatisfeito, e cujo pai rico se oferece para comprar a loja e tocá-la sozinho. Boa ideia? O
aluno pensa e diz que não: *a loja precisa fazer parte da rede.* Rumelt volta à caixa na lousa e
circula a palavra **"loja"**.

> **Não é a loja; é a rede de 150 lojas.** Walton não quebrou a sabedoria convencional — ele
> quebrou **a definição antiga de loja**. Uma rede regional de 150 lojas atende uma população
> de milhões. A unidade básica de gestão da empresa passou a ser a rede, não a loja.

E aqui está o pedaço mais duro do capítulo, que quase todo leitor deixa passar: ao fazer da rede
a unidade operacional, Walton quebrou uma doutrina mais profunda que a regra dos 100 mil
habitantes — **a doutrina da descentralização**, a ideia de que cada panela se equilibra no
próprio fundo. A Kmart era fiel a ela: cada gerente escolhia linha de produto, fornecedor e
preço. Descentralização é tratada como coisa boa por padrão, e o custo esquecido dela é **a
coordenação perdida entre unidades**. Lojas que não escolhem os mesmos fornecedores nem negociam
os mesmos termos não podem se beneficiar de uma rede integrada de dados e transporte; lojas que
não compartilham o que funcionou não aprendem umas com as outras.

Enquanto os concorrentes também eram descentralizados, nada se perdia. No momento em que o
insight de Walton transformou a estrutura descentralizada em **desvantagem**, a Kmart ficou com
um problema grave — porque uma organização grande até adota uma técnica nova, mas **romper com
a própria doutrina é raro sem experiência de quase-morte.**

### Marshall e Roche: impor custo assimétrico

O terceiro caso é de 1976 e mostra a mesma mecânica em política de defesa. O planejamento
militar americano tinha virado refém do ciclo orçamentário: todo ano o Estado-Maior estimava a
ameaça soviética (essencialmente um inventário de armas), o Pentágono montava uma lista de
compras em resposta, o Congresso aprovava parte, e recomeçava. Isso condicionava a ação
americana às **forças** soviéticas, nunca às fraquezas e restrições delas. Havia estratégia de
guerra — um espasmo catastrófico — e nenhum plano de **competir** com a URSS no longo prazo.

O documento de Andrew Marshall e James Roche redefiniu "defesa": ter estratégia competitiva de
verdade significa **agir de modo a impor custos exorbitantes ao outro lado**. Concretamente:
investir em tecnologias que são caras de neutralizar e cujos contra-ataques não aumentam a
capacidade ofensiva soviética. Aumentar a precisão dos mísseis ou o silêncio dos submarinos
obriga a URSS a gastar recursos escassos em contramedidas sem aumentar a ameaça aos EUA.
Investir em sistemas que tornam os deles obsoletos também força gasto — assim como anunciar
seletivamente tecnologias novas dramáticas.

Sem gráficos, sem fórmulas, sem sopa de siglas: uma ideia e alguns ponteiros de como usá-la.
Rumelt chama isso de **"a terrível simplicidade da descoberta de poder oculto numa situação"**.

---

## 3. Má estratégia — os quatro sinais

Aqui está a contribuição mais utilizável do livro para trabalho de auditoria. Rumelt cunhou o
termo em 2007, num seminário fechado sobre estratégia de segurança nacional americana com
ex-secretários de Defesa e da CIA na sala, chamado para dar a perspectiva do mundo corporativo.
A plateia esperava ouvir que a estratégia empresarial era feita a sério e com competência
crescente. Ele disse o oposto.

**Má estratégia não é ausência de estratégia**, nem estratégia que fracassou. É uma maneira
identificável de pensar e escrever sobre estratégia, com lógica e vida próprias — um edifício
falso construído sobre fundações erradas. Ela é **longa em metas e curta em política e ação**.
Ela **assume que metas são tudo de que você precisa**. Ela apresenta objetivos incoerentes ou
impraticáveis. E usa palavras altissonantes para esconder essas falhas.

Os quatro sinais:

| # | Sinal | O que é |
|---|---|---|
| 1 | **Enrolação** (*fluff*) | Reafirmação superficial do óbvio com vocabulário de domingo. Palavras infladas e conceitos aparentemente esotéricos criando a ilusão de pensamento de alto nível |
| 2 | **Não encarar o desafio** | O plano não define a dificuldade. Se o desafio não está definido, a estratégia não pode ser avaliada nem melhorada |
| 3 | **Confundir meta com estratégia** | Declaração de desejo apresentada como plano de superar obstáculo |
| 4 | **Objetivos estratégicos ruins** | Objetivos que não endereçam questões críticas, ou que são impraticáveis. Duas formas: o **jantar de cachorro** e o **céu azul** |

### 1. Enrolação

O exemplo canônico vem do memorando interno de um grande banco de varejo: *"nossa estratégia
fundamental é a de intermediação centrada no cliente"*. "Intermediação" é a palavra de domingo
para "aceita depósitos e empresta a outros" — ou seja, é um banco. "Centrado no cliente"
poderia significar termos ou serviço melhores, mas o exame das políticas e produtos não revela
nenhuma distinção nesse sentido. Tire a cobertura fofa e sobra: **"a estratégia fundamental do
nosso banco é ser um banco."**

O segundo exemplo é uma definição de computação em nuvem tirada de um relatório da União
Europeia — "um ambiente elástico de execução de recursos envolvendo múltiplos stakeholders e
fornecendo um serviço medido em múltiplas granularidades para um nível especificado de qualidade
de serviço" — quando a explicação sem enrolação é que existe um monte de máquinas e redes, você
não sabe nem se importa com qual delas está processando, e o provedor resolve isso e te cobra.

O terceiro é o mais instrutivo porque é uma apresentação de consultoria em 2000, sobre a
estratégia da Enron de criar um mercado de negociação de largura de banda. Rumelt lista as
perguntas que deveriam ter sido feitas e não foram: não havia preço à vista de banda para servir
de base; não havia padrão de qualidade que definisse o entregável; não havia como transportar
banda de um lugar para outro para equilibrar oferta e demanda; a Enron queria que todo mundo
negociasse diretamente com ela mas o nó dela em Nova York ficava longe do nó que todo mundo
usava; **o custo incremental de uma unidade de banda era zero**, o que significa que enquanto a
capacidade excedesse a demanda o preço à vista tenderia a zero; e já estava ficando claro que a
fibra instalada excedia em muito a demanda. Além disso, em gás e eletricidade a Enron negociava
**o entregável**; banda é capacidade, não o conteúdo entregue — e a Enron não tinha posição em
conteúdo.

Em vez de encarar nada disso, a apresentação trouxe um diagrama sobre mercados "evoluindo" de
entrega física para "espaço de conhecimento" e "exóticos", com a insinuação de que derivativos
são "extração sofisticada de valor". As "estratégias" listadas eram: ter uma plataforma
eletrônica de negociação, ser corretor de balcão, ser provedor de informação. **Isso não são
estratégias; são nomes de profissão, como açougueiro, padeiro e fabricante de velas.** Catorze
meses depois a Enron estava falindo, com perdas enormes justamente na negociação de banda, e
levou a auditora junto.

> A marca da verdadeira expertise é tornar um assunto complexo compreensível. A marca da
> mediocridade e da má estratégia é **complexidade desnecessária** — uma rajada de enrolação
> mascarando ausência de substância.

### 2. Não encarar o problema

**International Harvester, 1979.** Quarta maior corporação americana, raízes na ceifadeira de
McCormick. Novo CEO vindo da presidência da Xerox, com mandato para virar a empresa. Uma década
de modernização: a Booz Allen redesenhou a organização, a Hay Associates instalou descrições de
cargo e incentivos modernos, o CEO trouxe uma leva de planejadores financeiros e estratégicos.
Em julho de 1979 eles produziram um calhamaço chamado "Plano Estratégico Corporativo". É má
estratégia clássica.

O plano era a soma de cinco planos divisionais — equipamento agrícola, caminhões, equipamento
industrial, turbinas a gás, componentes. A "estratégia" geral era **aumentar participação de
mercado em cada mercado, cortar custo em cada negócio, e com isso subir receita e lucro.** O
gráfico de lucro passado e projetado formava um taco de hóquei quase perfeito: recuperação
imediata do declínio, seguida de subida constante. Não faltava textura nem detalhe — havia
discussão por segmento, intenção de fortalecer a rede de distribuidores, meta de participação
subindo de 16% para 20% em equipamento agrícola contra John Deere, Ford, Massey Ferguson e J.I.
Case.

**O problema é que o plano ignorava o elefante no elevador, e você não consegue enxergar o
elefante lendo o plano porque o plano não o menciona.** O elefante era a organização do trabalho
grosseiramente ineficiente da Harvester. As regras de trabalho nas fábricas, por exemplo,
permitiam que quem tivesse tempo de casa trocasse de função à vontade, e cada troca disparava
uma cascata de outras trocas. A margem da empresa era metade da dos concorrentes havia muito
tempo. E a Harvester tinha as piores relações trabalhistas da indústria americana — foi o
epicentro dos primeiros grandes conflitos sindicais dos EUA, incluindo o motim de Haymarket em
1886.

> **Se você não identifica e analisa os obstáculos, você não tem uma estratégia. Você tem uma
> meta esticada, um orçamento, ou uma lista de coisas que você gostaria que acontecessem.**

O desfecho: o CEO melhorou o lucro reportado por um ou dois anos cortando despesa
administrativa, depois forçou uma greve de seis meses tentando conseguir um contrato sindical
melhor, não conseguiu concessão significativa nenhuma, e a empresa começou a desabar. Entre 1979
e 1985 perdeu mais de US$ 3 bilhões, fechou 35 das 42 fábricas e demitiu 85 mil dos 100 mil
funcionários.

**O contraponto — DARPA.** Rumelt coloca ao lado a declaração da agência de pesquisa avançada de
defesa americana, que **começa nomeando a dificuldade**: casar problemas militares com
oportunidades tecnológicas é extremamente difícil porque (1) alguns problemas militares não têm
solução técnica fácil ou óbvia, e (2) algumas tecnologias emergentes têm consequências militares
de longo alcance que ainda não estão claras. A DARPA concentra investimento nesse nicho que ela
mesma chama de "DARPA-hard": desafios técnicos que, se resolvidos, trarão benefício enorme mesmo
com alto risco de fracasso técnico.

E a estratégia dela **não para na direção geral** — tem políticas específicas que guiam a ação
diária, e cada uma sai de um diagnóstico realista dos obstáculos à inovação:

- **Gerentes de programa ficam só de quatro a seis anos**, para limitar construção de império e
  trazer talento novo. A expectativa explícita é que o novo gerente conteste as ideias e o
  trabalho do antecessor.
- **Investimento muito limitado em overhead e instalações físicas**, para impedir que interesses
  entrincheirados atrapalhem direções novas.
- Trabalha em projetos que as forças armadas consideram arriscados demais ou distantes demais da
  missão atual, tentando imaginar o que os comandantes vão querer no futuro em vez do que estão
  pedindo hoje.

Compare essas políticas com "reter os melhores talentos" e "manter uma cultura de inovação".

### 3. Confundir meta com estratégia

**O caso Chad Logan**, o mais útil do livro para quem vai auditar documento de empresa.

Logan é CEO de uma empresa de artes gráficas, ex-atleta universitário, sobrinho do fundador. Ele
chama Rumelt para "coaching em pensamento estratégico" para o time. Explica que a meta geral é
simples, o **plano 20/20**: crescer 20% de receita ao ano e ter margem de 20% ou mais. "Nossa
estratégia geral está definida", diz. "Vamos crescer, e crescer com lucro. Meu problema é
alinhar todo mundo."

O documento que ele desliza pela mesa se chama "Plano Estratégico 2005" e é essencialmente um
conjunto de projeções a quatro anos. Nos quatro ou cinco anos anteriores, a empresa tinha
mantido participação de mercado e margem líquida de uns 12%, típica do setor. As projeções eram
baseadas em 20% de margem e 20% de crescimento. A primeira página se chamava **"Nossas
Estratégias-Chave"**:

- Seremos a empresa de serviços de artes gráficas preferida.
- Encantaremos nossos clientes com soluções únicas e criativas para os problemas deles.
- Cresceremos receita em pelo menos 20% ao ano.
- Manteremos margem de pelo menos 20%.
- Teremos uma cultura de compromisso. Metas corporativas são compromissos que todos trabalhamos
  para manter.
- Cultivaremos um ambiente de trabalho honesto e aberto.
- Trabalharemos para apoiar a comunidade em que operamos.

"Passamos umas três semanas ouvindo todo mundo para desenvolver essas estratégias-chave", diz
Logan. "Acredito nelas. Tem uma adesão muito boa a elas."

Rumelt pergunta: **o que tem que acontecer para o 20/20 se realizar?** Está procurando um ponto
de alavanca, alguma razão para acreditar que essa empresa razoavelmente quieta pode explodir. A
resposta de Logan é sobre vontade de vencer, aprendida no futebol americano. Pressionado de
novo — quando uma empresa dá um salto desses, normalmente existe uma força específica sendo
explorada ou uma mudança no setor abrindo oportunidade; qual seria o ponto de alavanca aqui? —
Logan tira do porta-documentos uma folha com uma frase grifada de Jack Welch: *descobrimos que,
alcançando o que parece impossível, frequentemente fazemos o impossível.*

O que Rumelt propõe em resposta é o roteiro operacional de saída da má estratégia, e vale
literalmente como método:

1. Antes de trabalhar em como bater o 20/20, **descubra as oportunidades mais promissoras do
   negócio.** Podem ser internas — gargalos e restrições no jeito como as pessoas trabalham — ou
   externas.
2. Junte **um time pequeno e reserve um mês** para revisar quem são os compradores, contra quem
   se compete e que oportunidades existem.
3. Olhe **de perto o que está mudando** no negócio, onde é possível ganhar da concorrência.
4. Abra o jogo para colocar na mesa o maior número possível de informações úteis.
5. O resultado é uma estratégia que canaliza energia para **uma ou duas** das oportunidades mais
   atraentes, onde parece possível abrir uma brecha real.
6. **Não é possível dizer de antemão** quão grandes são essas oportunidades, onde estão, ou
   quão rápido a receita vai crescer. Talvez a saída seja acrescentar serviços; talvez seja
   parar de fazer coisas que não dão lucro; talvez seja disputar o trabalho gráfico que hoje é
   feito dentro das empresas clientes, em vez de disputar o que vai para concorrentes.
7. No fim, você deve ter **uma lista muito curta das coisas mais importantes a fazer.**

Logan agradeceu e uma semana depois contratou outro consultor, que levou o time a um exercício
chamado "Visionamento": de manhã esticaram a ambição de "maior" para "muito maior"; à tarde o
facilitador desafiou o grupo a "pensar duas vezes maior que isso". Logan ficou satisfeito.

**Sobre planejamento, uma distinção que Rumelt faz e que evita mal-entendido:** não há nada de
errado com planejar. Uma rede de varejo em crescimento rápido precisa de um plano de aquisição
de imóveis, construção e treinamento; uma empresa multinacional de engenharia precisa de plano
de RH, abertura de escritórios e financiamento. **Isso é plano de recursos** — garante que os
recursos cheguem quando são necessários e ajuda a detectar surpresas. Chame de "planejamento
estratégico" se quiser, mas não é estratégia, e não vai entregar o que a alta direção quer: um
caminho para desempenho substancialmente maior.

E um detalhe que quase todo mundo erra: **a necessidade de trabalho estratégico de verdade é
episódica, não anual.** Oportunidades, desafios e mudanças não chegam em pacotes anuais bonitos.

### 4. Objetivos estratégicos ruins

Primeiro, uma distinção de vocabulário que Rumelt usa o livro inteiro:

- **Meta** (*goal*) = valores e desejos gerais. Os EUA têm "metas" de liberdade, justiça, paz.
- **Objetivo** (*objective*) = alvo operacional específico. Derrotar o Talibã, reconstruir uma
  infraestrutura decadente.

**É a estratégia que transforma metas vagas em objetivos acionáveis coerentes.** Construir e
ajustar constantemente essa ponte entre metas e objetivos é o trabalho mais importante de um
líder. E há uma mudança de papel que a maioria dos executivos nunca faz conscientemente: gerente
de nível médio recebe metas do chefe; líder de topo **decide quais metas gerais serão
perseguidas e desenha os subobjetivos das partes da organização**. Levar para o topo o hábito de
"estratégia é como bater a meta que me deram" é erro estrutural.

**O bom exemplo — Chen Brothers.** Distribuidora regional de alimentos especiais em crescimento.
Metas gerais: crescer lucro, ser bom lugar para trabalhar, ser a distribuidora de referência em
orgânicos. Nenhuma dessas implica ação — elas funcionam como restrições, do jeito que as regras
do futebol excluem um monte de ações sem dizer o que o time deve fazer. A **estratégia** era
mirar varejistas especializados locais dispostos a pagar prêmio por produtos distintivos não
disponíveis nas grandes redes, com clientes divididos em três camadas e um objetivo por camada:
dominância de espaço de gôndola na primeira, paridade promocional ou melhor na segunda,
penetração crescente na terceira.

Quando o crescimento da Whole Foods começou a pressionar as lojas especializadas locais que eram
o alvo, a estratégia mudou — juntar pequenos produtores locais sob uma marca comum vendável na
Whole Foods. **As metas gerais não mudaram nada; os objetivos estratégicos foram reestruturados
por inteiro.** Em vez de metas de penetração por classe de varejista, montou-se um time "Whole
Foods" com produção, marketing, publicidade, distribuição e finanças, focado num único objetivo:
tornar o produto novo mais distintivo da empresa uma conta nacional na Whole Foods. Cumprido
isso, novos objetivos seriam definidos.

**Forma ruim nº 1 — o jantar de cachorro** (*dog's dinner*). Uma bagunça de coisas a fazer,
rotulada de "estratégias" ou "objetivos". Nasce de reuniões de planejamento em que cada parte
interessada sugere o que gostaria de ver feito, e o grupo, em vez de escolher poucos itens
importantes, varre a coleção inteira do dia para dentro do "plano estratégico". Aí, reconhecendo
que é uma bagunça, acrescenta o rótulo "longo prazo" — assim nenhum deles precisa ser feito
hoje.

Dois exemplos, e o primeiro é impagável: o plano estratégico do comitê de planejamento de uma
cidade pequena do noroeste americano tinha **47 "estratégias" e 178 itens de ação. O item de
ação número 122 era "criar um plano estratégico".** O segundo: o plano do distrito escolar de
Los Angeles para escolas prioritárias tinha 7 "estratégias", 26 "táticas" e 234 "passos de
ação".

**Forma ruim nº 2 — o objetivo céu azul.** É a simples reafirmação do estado desejado ou do
próprio desafio, pulando o fato incômodo de que ninguém faz ideia de como chegar lá. Uma boa
estratégia constrói ponte entre desafio e ação, entre desejo e objetivos imediatos que estejam
ao alcance. **Se os objetivos estratégicos são tão difíceis de alcançar quanto o desafio
original, a estratégia não agregou nada.**

O caso é o distrito escolar de Los Angeles em 2006. Um almirante reformado assume a
superintendência do maior distrito escolar do país e define o desafio como melhorar
significativamente a nota de teste padronizado nas 34 escolas mais fracas (17 de ensino médio e
17 de fundamental II), de um total de 991. **Rumelt dá crédito ao foco** — concentrar em 34 de
991 era a chance de romper com o sistema de regulação em camadas, controle sindical e
administração central inchada, e isso sozinho poderia ter sido a pedra angular da estratégia.

Mas anota duas coisas. Primeiro, **a própria definição de "desempenho" era estratégica no mau
sentido**: usar a nota do teste contornava a taxa de evasão monstruosa do distrito (33% dos
alunos negros e 28% dos hispânicos abandonavam o ensino médio), e a verdade desconfortável é que
**uma das formas de subir a nota da escola é incentivar os alunos mais fracos a abandonar**,
porque o índice só media alunos ativos.

Segundo, e mais importante:

> **Quando um líder caracteriza o desafio como "desempenho abaixo do esperado", ele monta o
> palco para a má estratégia. Desempenho fraco é um resultado. Os desafios verdadeiros são as
> razões do desempenho fraco.** Sem uma teoria de por que as coisas não funcionaram até agora,
> ou de por que o desafio é difícil, é difícil gerar estratégia boa.

Uma das sete "estratégias-chave" do plano era construir times de liderança de escola e de
distrito que compartilhassem crenças, valores e altas expectativas comuns para todos os adultos
e alunos, e que apoiassem um ciclo de melhoria contínua. Rumelt destrói isso em três golpes:
(1) não há diagnóstico nenhum das razões pelas quais a liderança é fraca e as expectativas são
baixas — um olhar sério mostraria que essas escolas falham há décadas, que um sistema que gasta
o equivalente a US$ 25 mil por aluno/ano e não garante que o aluno de oitava série leia,
escreva e some está quebrado, e que a burocracia de topo pesado teve décadas para remediar e não
remediou; (2) é objetivo céu azul absurdo pedir "liderança transformacional" quando o próprio
texto do plano explica que muitos administradores mal dão conta dos problemas do dia, quando
ninguém sabe criar líderes transformacionais nem nas melhores condições, e quando essas escolas
seguem dentro de uma burocracia gigante em que o suposto líder transformacional não pode nem
mudar a cor do papel que usa sem autorização, e é praticamente impossível remover um diretor
mesmo que ele falhe em ser transformacional; (3) a ideia de que os times devem compartilhar
crenças e valores comuns — hoje demanda frequente em círculos educacionais — deveria ter sido
curada pela experiência da Coreia do Norte.

Outra "estratégia" era construir em cada escola uma comunidade de pais, professores e parceiros
informados e empoderados, com criação de um cargo de "ligação comunitária", reuniões mensais,
duas conferências de pais por ano e programa de voluntariado. Alta participação da comunidade
pode ser um estado de coisas desejável, **mas não é estratégia; é objetivo céu azul.** Boa parte
do baixo desempenho dessas 34 escolas aparece já na pré-escola e se aprofunda com a idade, e uma
causa principal são as comunidades caóticas e empobrecidas que essas escolas atendem: muitos
alunos são imigrantes ilegais ou filhos deles, nomes e endereços são frequentemente fictícios, e
os pais podem simplesmente não querer se inscrever em programa nenhum; muitos são filhos de mães
adolescentes que não terminaram os próprios estudos, não leem livros e passam horas por dia no
transporte para empregos mal pagos. **São esses os desafios verdadeiros que uma boa estratégia
teria de reconhecer.**

> **Como má estratégia se sente na pele:** ela é vazia e superficial, tem contradições internas,
> e não define nem endereça o problema. Ela produz **uma sensação de tédio irritado** em quem
> tem que ouvi-la ou lê-la. Esse é, honestamente, o melhor detector portátil que o livro
> oferece.

---

## 4. Por que existe tanta má estratégia

Rumelt descarta primeiro a explicação preguiçosa. **Má estratégia não é erro de cálculo.** Ele
conhece intimamente os mil erros possíveis em avaliar concorrência, recursos próprios, lições do
passado e implicações da mudança — e depois de anos ensinando esses fundamentos a executivos e
MBAs, constatou que **mais treinamento nessas áreas mal arranha a propensão a produzir má
estratégia.** Má estratégia flutua acima de análise, lógica e escolha, sustentada pela esperança
quente de que dá para não lidar com esses fundamentos difíceis.

**Má estratégia é a evitação ativa do trabalho duro de fazer estratégia boa.** Três caminhos
levam a ela.

### Caminho 1 — a incapacidade ou a recusa de escolher

**O caso DEC, 1992.** A Digital Equipment Corporation tinha liderado a revolução dos
minicomputadores e estava perdendo terreno rápido para os PCs de 32 bits. Rumelt assistiu a uma
reunião de direção sobre o futuro da empresa, e resume as posições em três executivos:

- **Alec:** a DEC é e sempre foi uma empresa de computadores, integrando hardware e software em
  sistemas utilizáveis. Os outros apelidaram de estratégia **"Caixas"**.
- **Beverly:** caixas viraram commodity; o único recurso real da DEC é o relacionamento com os
  clientes. Portanto, resolver o problema do cliente — **"Soluções"**.
- **Craig:** o coração da indústria é semicondutor; a empresa deveria concentrar recursos em
  projetar e fabricar chips melhores — **"Chips"**. A DEC não tem competência distintiva em
  resolver problema de cliente: *"a gente já tem dificuldade de resolver os nossos próprios
  problemas"*.

**Por que não fazer as três?** Duas razões, e a primeira é a mais interessante:

> **Se você tem a política de resolver conflito adotando todas as opções da mesa, ninguém terá
> incentivo para desenvolver e afiar os argumentos.** Só a perspectiva da escolha extrai das
> pessoas os melhores argumentos a favor da própria proposta e contra as outras. Como no
> direito, **conflito disciplinado convoca evidência e raciocínio mais fortes.**

A segunda razão é operacional: Chips e Soluções eram transformações dramáticas da firma, cada
uma exigindo habilidades e práticas de trabalho inteiramente novas. Não se escolhe nenhuma das
duas a menos que o status quo esteja falhando — e **não é viável fazer duas transformações
profundas do núcleo de uma empresa ao mesmo tempo**, porque há pouquíssimo terreno comum entre
elas.

**O paradoxo de Condorcet.** As preferências ordenadas dos três geram ciclo: numa disputa entre
Caixas e Chips, Alec e Beverly preferem Caixas, então Caixas ganha; entre Caixas e Soluções,
Beverly e Craig preferem Soluções, então Soluções ganha; mas entre Soluções e Chips, Alec e
Craig preferem Chips. Não há ponto de parada. Kenneth Arrow ganhou o Nobel de 1972 provando que
nenhum esquema de votação mais esperto resolve isso — **é uma propriedade central da votação
democrática, e não está no currículo de educação cívica do ensino médio.**

O grupo da DEC não votou formalmente, mas sentiu o efeito: nenhuma coalizão majoritária era
estável, porque sempre um dos dois membros da maioria era tentado a desertar para formar outra
maioria mais próxima do que ele queria. O CEO tinha cometido o erro de pedir **consenso**. Sem
base em lógica ou hierarquia para rejeitar posições apaixonadamente defendidas, o grupo se
comprometeu numa frase: *"a DEC está comprometida em fornecer produtos e serviços de alta
qualidade e ser líder em processamento de dados."*

> Não era estratégia. Era um **resultado político** produzido por pessoas que, obrigadas a chegar
> a consenso, não conseguiram concordar sobre que interesses e conceitos abandonar. **Evitaram o
> trabalho duro da escolha, não deixaram nada de lado, não feriram nenhum grupo de interesse nem
> nenhum ego individual — e aleijaram o todo.**

Quatro meses depois o CEO foi substituído por alguém vindo da engenharia de semicondutores, que
deixou claro em pouco tempo que a estratégia seria Chips. Estancou as perdas por um tempo, mas
não conteve a maré de PCs cada vez mais poderosos. A DEC foi comprada pela Compaq em 1998, que
foi comprada pela HP três anos depois.

**A observação sobre o timing, que é a mais desconfortável:** trabalho estratégico sério numa
organização já bem-sucedida costuma só acontecer quando o lobo está na porta — ou até quando as
garras do lobo já arranham o assoalho — **porque boa estratégia é trabalho muito duro.** Na DEC
o lobo estava na porta em 1988, e mesmo assim o trabalho duro de combinar conhecimento e
julgamento de pessoas com formações diferentes foi driblado. Quando o lobo finalmente entrou na
casa, um ponto de vista venceu e empurrou os outros de lado. Aí já era cinco anos tarde demais.

**A escolha como coração da dificuldade.** Muita tinta foi gasta na lógica interna da estratégia
competitiva e na mecânica da vantagem. Mas a dificuldade essencial de criar estratégia não é
lógica — **é a escolha em si.**

> **Estratégia é filha da escassez.** Ter uma estratégia, em vez de aspirações vagas, é escolher
> um caminho e abandonar outros. Existe um trabalho psicológico, político e organizacional
> difícil em dizer "não" a mundos inteiros de esperanças, sonhos e aspirações.

Dois exemplos de quem fez a escolha:

- **Eisenhower, 1952.** Uma das promessas de campanha era empurrar a URSS para fora da Europa
  Oriental, e ele venceu de lavada. Depois de eleito, iniciou o **Projeto Solarium** — que
  Rumelt chama de padrão-ouro de como estratégia de segurança deveria ser feita — estudou o
  problema e as alternativas, e **abandonou a própria promessa de campanha**: não haveria
  reversão; a URSS seria dissuadida de atacar a Europa Ocidental, haveria Rádio Europa Livre e
  espiões, e os países dominados ficariam sob controle soviético.
- **Andy Grove na Intel, 1985.** A Intel era uma empresa de memória, mas em 1984 já estava claro
  que não conseguia bater o preço dos rivais japoneses em DRAM. Perdendo dinheiro, Grove
  registra: *"persistimos porque podíamos nos dar ao luxo"*. Perdendo cada vez mais, num debate
  interminável, ele perguntou ao presidente do conselho: **se a gente fosse chutado daqui e o
  conselho trouxesse um CEO novo, o que você acha que ele faria?** A resposta imediata: *ele nos
  tiraria de memória*. Grove ficou entorpecido e disse: *por que eu e você não saímos por
  aquela porta, voltamos, e fazemos nós mesmos?* **Mesmo com a convicção formada, levou mais de
  um ano** — a memória era o motor da pesquisa, da produção, das carreiras e do orgulho da
  empresa; vendedores temiam a reação dos clientes e pesquisadores resistiam ao cancelamento dos
  projetos.

> **Adesão universal geralmente sinaliza ausência de escolha.** Metas de mãe-e-torta-de-maçã com
> que todo mundo concorda são evidência direta de que a liderança não tem vontade ou poder
> político suficientes para fazer ou impor escolhas duras.

E uma nota sobre inércia institucional que vale para qualquer organização com alguns anos: **quanto
mais tempo um padrão de atividade se mantém, mais entrincheirado ele fica e mais as alocações de
recurso que o sustentam passam a ser tratadas como direito adquirido.** Eisenhower conseguiu
remodelar o Departamento de Defesa, a força aérea independente, a CIA, o Conselho de Segurança
Nacional e a OTAN porque **todos tinham acabado de ser criados e estruturas novas são
maleáveis.** Meio século depois, o poder necessário para remodelar e forçar coordenação entre
esses mesmos órgãos é muitas vezes maior.

### Caminho 2 — estratégia de gabarito (*template-style*)

A genealogia que Rumelt traça é específica e vale porque explica de onde saiu o formato
"visão / missão / valores / estratégias / iniciativas" que domina o mundo corporativo e o
terceiro setor.

Max Weber, o pai da sociologia, precisou distinguir líderes formais dos que lideram por carisma
pessoal — estes últimos descritos como dotados de poderes ou qualidades sobrenaturais,
sobre-humanas ou pelo menos excepcionais, não acessíveis à pessoa comum. Tradicionalmente,
carisma era associado a líderes religiosos e políticos, não a CEOs e diretores de escola. Isso
mudou em meados dos anos 1980, com dois livros de 1985 — de Bennis & Nanus e de Bernard Bass —
que romperam com a tradição e argumentaram que **liderança carismática (agora "transformacional")
pode ser aprendida e praticada** em escolas, empresas e museus. Seguiu-se uma enxurrada.

A inovação-chave dessa corrente foi **reduzir liderança carismática a uma fórmula**: o líder
transformacional (1) desenvolve ou tem uma visão, (2) inspira as pessoas a se sacrificar pelo bem
da organização, (3) empodera as pessoas para realizar a visão. O esquema fez enorme sucesso com
gente de formação superior que precisa gerenciar outra gente de formação superior — porque
**satisfaz ao mesmo tempo a sensação de que organizações deveriam ser forçadas a mudar e a
sensação contraditória de que é constrangedor dizer aos outros o que fazer.**

Rumelt não briga com a definição de liderança; briga com a confusão dela com estratégia:
**liderança inspira e motiva autossacrifício; estratégia é o ofício de descobrir quais
propósitos valem a pena e são realizáveis.** Peter Drucker é convocado para o contraponto:
liderança eficaz não depende de carisma — Eisenhower, George Marshall e Truman foram líderes
singularmente eficazes e nenhum tinha mais carisma que uma cavala morta.

**A Cruzada das Crianças, 1212**, é o exemplo de carisma sem ofício. Um pastor francês chamado
Estêvão teve a visão de um bando de crianças indo a Jerusalém expulsar os muçulmanos, com o mar
se abrindo à frente como para Moisés. A eloquência e a paixão impressionaram. Na Alemanha,
Nicolau organizou a própria cruzada, com a visão de converter em vez de conquistar. O bando de
Estêvão andou meses até Marselha e embarcou em sete navios: dois naufragaram matando todos, e os
outros cinco foram capturados por corsários muçulmanos e todos a bordo vendidos como escravos.
Nicolau saiu com vinte mil crianças alemãs e chegou a Roma com muito menos; a maioria foi
convencida a voltar para casa e poucos conseguiram. Os pais das crianças mortas enforcaram o pai
de Nicolau.

O contraste é Gandhi, que **juntou carisma e visão a atenção cuidadosa a obstáculos e ações** —
manifestações cuidadosamente orquestradas, marchas, publicidade e prisões, construindo base e
corroendo a autoimagem de justiça e moralidade dos governantes britânicos.

O gabarito, no formato em que circula hoje:

| Campo | O que se pede | Exemplos reais que Rumelt cita |
|---|---|---|
| **Visão** | Preencha com sua visão única do que a escola/empresa/nação será no futuro. Visões únicas populares hoje são ser "a melhor", "a líder", "a mais conhecida" | Dow: "ser a empresa química movida a ciência mais lucrativa e respeitada do mundo". Enron: "tornar-se a empresa líder de energia do mundo" |
| **Missão** | Preencha com uma declaração altissonante e politicamente correta do propósito | Dow: "inovar apaixonadamente o que é essencial ao progresso humano fornecendo soluções sustentáveis aos nossos clientes" |
| **Valores** | Preencha descrevendo os valores da empresa. Garanta que não sejam controversos | Dow: "Integridade, Respeito pelas Pessoas e Proteção do Nosso Planeta". Enron: "Respeito, Integridade, Comunicação e Excelência" |
| **Estratégias** | Preencha com aspirações e metas, mas chame de estratégias | Dow: "investir preferencialmente num portfólio de negócios de desempenho integrados a tecnologia e movidos a mercado que criem valor para nossos acionistas…" |

Outros exemplos, com o comentário dele:

- **Departamento de Defesa dos EUA:** missão de "dissuadir conflito — mas, caso a dissuasão
  falhe, lutar e vencer as guerras da nação". Difícil achar alguém que discorde, e igualmente
  difícil achar alguém **informado** por isso. Desperdício de tinta.
- **Cornell:** missão de ser "uma comunidade de aprendizagem que busca servir a sociedade
  educando os líderes de amanhã e expandindo as fronteiras do conhecimento". Em outras palavras,
  a Universidade Cornell é uma universidade. Não fornece orientação nenhuma para planejamento ou
  política.
- **Cal State Sacramento:** visão de "ser conhecida em toda a região e cada vez mais além dela
  por seus excelentes e abrangentes programas acadêmicos e cocurriculares". Como em muitas
  visões oficiais, **o padrão de excelência é a métrica da revista People: "ser conhecida"**. E
  as letras miúdas denunciam o resto: a prioridade estratégica nº 1 é melhorar recrutamento,
  retenção e formatura — porque o financiamento estadual está atrelado a matrícula. Uma das
  "estratégias" para melhorar retenção é ter "uma cultura onde retenção, formatura e sucesso do
  estudante em todas as suas formas sejam abraçados e perseguidos". Difícil ver o que é
  acionável. Por outro lado, a "estratégia" mais específica de empurrar a taxa de formatura de
  57% para 62% é claramente alcançável — **mas não há discussão nenhuma do conflito óbvio entre
  uma visão de excelência educacional e um objetivo de aumentar verba pública reduzindo evasão.**
  E o dinheiro extra iria para salário de professor e uma biblioteca nova.
- **CIA:** visão de "Uma Agência. Uma Comunidade. Uma agência inigualável em suas capacidades
  centrais, funcionando como um time, plenamente integrada à Comunidade de Inteligência". As
  prioridades públicas eram todas sobre trabalho em equipe e mais investimento em capacidades;
  em lugar nenhum se dizia que encontrar e matar Osama bin Laden era prioridade. Rumelt concede
  que não se espera ver a estratégia real da CIA num site público — **e então pergunta: se é
  esse o caso, por que publicar essa enrolação?**
- **NEC:** visão de "ser uma empresa global líder alavancando o poder da inovação para realizar
  uma sociedade da informação amigável aos humanos e à Terra", com ambição de desenvolver uma
  "sociedade de rede ubíqua sustentável que usa uma megaplataforma de TIC baseada em
  conhecimento". A NEC tinha retorno sobre patrimônio abaixo de 2% e lucro operacional de 1,5%
  da receita, e não podia bancar o P&D a que aspirava. **Ela precisava de estratégia, não de
  slogans.**

O diagnóstico de Rumelt sobre por que o gabarito pegou: consultores descobriram que
**estratégia de gabarito os libera do trabalho oneroso de analisar os desafios e as
oportunidades reais do cliente** — e, colocando tudo em termos positivos (visão, missão,
valores), não fere sentimento nenhum.

E a resposta ao "se o público gosta, qual o problema?": o problema é que **quem realmente quer
conceber e implementar uma estratégia eficaz fica cercado de retórica vazia e maus exemplos**, e
o público em geral ou é enganado ou joga todos esses pronunciamentos na mesma gaveta mental da
propaganda de madrugada.

### Caminho 3 — o Novo Pensamento

A genealogia, resumida: a Reforma Protestante estabelece que as pessoas não precisam da Igreja
entre elas e a divindade. No século XIX, a partir do transcendentalismo de Emerson, a teologia
americana desenvolve a ideia de que a comunicação individual com Deus é possível porque cada um
tem uma centelha do divino dentro de si, vivida como certos estados mentais. Mary Baker Eddy e a
Ciência Cristã levam adiante: uma mente com os pensamentos certos pode acessar o poder divino
para eliminar doença. Por volta de 1890 isso vira o **movimento do Novo Pensamento**: um
conjunto de crenças místicas no poder do pensamento de afetar o mundo material além do próprio
eu, combinando sentimento religioso com receita de sucesso mundano. **A teoria é que pensar em
sucesso leva a sucesso e pensar em fracasso leva a fracasso.**

A linhagem de livros, para quem quiser rastrear: Prentice Mulford, *Thoughts Are Things* (1889);
Wallace Wattles, *A Ciência de Ficar Rico* (1910); Ernest Holmes, *Creative Mind and Success*
(1919). Nos anos 1930 o movimento larga as igrejas e sociedades locais e vira uma corrente de
livros e palestrantes motivacionais: *Pense e Enriqueça* (Napoleon Hill, 1937), *O Poder do
Pensamento Positivo* (Peale, 1952), *Sucesso Através de uma Atitude Mental Positiva* (Stone,
1960), *As Leis Dinâmicas da Prosperidade* (Ponder, 1962), *Desperte o Gigante Interior* (Tony
Robbins, 1991), *As Sete Leis Espirituais do Sucesso* (Chopra, 1995) e, mais recentemente, *O
Segredo* (Rhonda Byrne, 2007) — cujo "segredo" é idêntico ao princípio original de Mulford, que
você recebe aquilo em que pensa. **O espantoso do Novo Pensamento é que ele é sempre apresentado
como novo**, e por mais vezes que as mesmas ideias sejam repetidas elas são recebidas com acenos
frescos de concordância.

**Onde isso entra na literatura de estratégia:** pela literatura de liderança e visão. A analogia
que faz o transplante é entre **o pensamento individual e a visão compartilhada dentro de uma
organização.** Rumelt aponta para *A Quinta Disciplina* (Senge, 1990) e a ideia de "visão
compartilhada": é impossível imaginar as conquistas da construção da AT&T, da Ford ou da Apple
sem visão compartilhada, visão que se tornou genuinamente compartilhada por pessoas em todos os
níveis dessas empresas.

A resposta é factual e vale como método de checagem:

- **A Apple não inventou o computador pessoal** — a tecnologia estava no ar e centenas de
  empreendedores tentavam fazer "computadores para todos". O sucesso dela veio em boa medida da
  habilidade de Wozniak de enganar espertamente o microprocessador Motorola no centro do Apple
  II para acionar diretamente o vídeo e o disquete usando saídas diretas da CPU, em vez de
  construir controladores caros. E do surgimento do VisiCalc, que deu a quem não era hobbyista
  uma razão para comprar um Apple II.
- **A visão de "carros para todos" da Ford não era única** nem necessariamente compartilhada
  pelos operários de linha de montagem de cinco dólares por dia. Detroit era o Vale do Silício
  de 1907, com centenas ou milhares de engenheiros e inventores tentando fazer e vender
  automóveis. O gênio específico de Ford era em materiais, engenharia industrial e promoção.
- Atribuir esses sucessos a uma visão compartilhada em todos os níveis, em vez de a **bolsões de
  competência excepcional misturados com sorte**, é distorção radical da história.

Rumelt fecha com uma frase que serve de teste prático: **não gostaria de voar num avião
projetado por gente que se concentrou apenas na imagem de um avião voando e nunca considerou os
modos de falha.** Toda análise começa considerando o que pode acontecer, **inclusive os eventos
indesejados**.

E um recado especificamente sobre imitar gurus, que é diretamente aplicável a como a Altta lê
Hormozi, Suby ou o G4: Jack Welch foi o guru citado por Chad Logan, mas o corpo de trabalho dele
é como a Bíblia — dá para achar o que você quiser. **Sim, Welch falou em "esticar"; ele também
disse "se você não tem vantagem competitiva, não compita".** Ele não pediu que a divisão de
eletrodomésticos, a de carvão ou a de semicondutores "esticassem": ele **saiu desses negócios
inteiramente**, e não pediu adesão delas à visão de serem descartadas.

> **Se você quer gerenciar como Jack Welch, preste atenção no que ele fez, não no que ele — ou
> os ghost-writers dele — dizem que ele fez.**

---

## 5. O kernel — o instrumento central do livro

Este é o capítulo que justifica o livro inteiro entrar na biblioteca.

**Boa estratégia é ação coerente sustentada por um argumento.** A mistura de pensamento e ação
tem uma estrutura mínima que Rumelt chama de **kernel** — o caroço duro no centro do conceito.
Uma boa estratégia pode ter mais que o kernel, mas se o kernel está ausente ou deformado, há
problema sério. E a virtude do kernel é o que ele deixa de fora: não exige nenhum conceito
particular de vantagem, não obriga a separar visões de missões de metas de estratégias de
objetivos de táticas, e não divide estratégia em níveis corporativo, de negócio e de produto.

### Os três elementos

| # | Elemento | O que é |
|---|---|---|
| **1** | **Diagnóstico** | Define ou explica a natureza do desafio. Um bom diagnóstico **simplifica a complexidade avassaladora da realidade** identificando certos aspectos da situação como críticos |
| **2** | **Política norteadora** (*guiding policy*) | A abordagem geral escolhida para lidar com os obstáculos identificados no diagnóstico. É placa de sinalização: **marca a direção sem definir os detalhes da viagem** |
| **3** | **Ações coerentes** | Passos coordenados entre si, desenhados para executar a política norteadora |

As analogias que Rumelt usa para fixar:

- **Médico:** o desafio chega como conjunto de sinais, sintomas e história. O médico faz um
  diagnóstico clínico, nomeando uma doença. A abordagem terapêutica escolhida é a política
  norteadora. As prescrições específicas de dieta, terapia e medicação são as ações coerentes.
- **Política externa:** situações difíceis são normalmente diagnosticadas por analogia com
  situações passadas, e a política norteadora costuma ser uma abordagem que deu certo em alguma
  delas. Se o diagnóstico é que o presidente do Irã é "outro Hitler", a guerra pode ser a
  implicação lógica; se ele é "outro Kadafi", pressão forte com negociação de bastidor pode ser
  a política escolhida. As ações coerentes são um mix de manobras econômicas, diplomáticas e
  militares.
- **Negócios:** o desafio normalmente é lidar com mudança e concorrência. Primeiro passo é
  **diagnosticar a estrutura específica do desafio em vez de simplesmente nomear metas de
  desempenho.** Segundo é escolher uma política que se apoie em, ou crie, algum tipo de
  alavancagem ou vantagem. Terceiro é desenhar a configuração de ações e alocações de recurso.
- **Organizações grandes:** frequentemente o desafio é **interno** — os problemas competitivos
  podem ser muito mais leves que os obstáculos impostos pelas próprias rotinas obsoletas,
  burocracia, bolsões de interesse entrincheirado, falta de cooperação entre unidades e má
  gestão pura e simples. Aí a política norteadora está no terreno de reorganização e renovação,
  e as ações coerentes são mudanças em pessoas, poder e procedimentos.

### O diagnóstico

O melhor resumo do que é o trabalho de diagnóstico veio de um colega de Rumelt que assistiu a
dez aulas dele para aprender a ensinar estratégia. Por volta da sétima aula, o colega disse:
*"parece que você só faz uma pergunta em cada caso, e a pergunta é 'o que está acontecendo
aqui?'"* Rumelt nunca tinha ouvido isso dito explicitamente e reconheceu na hora que era
verdade. **Boa parte do trabalho de estratégia é descobrir o que está acontecendo — não decidir
o que fazer, mas o problema mais fundamental de compreender a situação.**

O que um diagnóstico faz:

1. **No mínimo, nomeia ou classifica a situação**, ligando fatos em padrões e sugerindo que se
   preste mais atenção a certas questões e menos a outras.
2. Quando classifica a situação como um certo tipo, **abre acesso ao conhecimento sobre como
   situações análogas foram tratadas no passado.**
3. Um diagnóstico especialmente perspicaz **transforma a visão da situação**, trazendo uma
   perspectiva radicalmente diferente.
4. Um diagnóstico explícito **permite avaliar o resto da estratégia** — e permite que o resto
   seja revisitado e mudado quando as circunstâncias mudarem.

**O caso Starbucks, 2008**, serve para mostrar que diagnóstico é julgamento, não fato. A empresa
tinha tráfego por loja estagnado ou caindo e margens menores, com retorno sobre ativos caindo de
14% para 5,5%. Quão séria era a situação? Toda empresa que cresce rápido tem que, cedo ou tarde,
saturar o mercado — desaceleração é problema para Wall Street mas é estágio natural do
desenvolvimento de qualquer entidade não cancerosa. E os analistas divergiam: um banco apontava
que na Austrália sobravam 23 lojas competindo com 764 pontos de uma rede de fast-food vendendo
café; outro opinava que a Europa ainda estava subpenetrada o suficiente para sustentar
crescimento.

Ou os problemas eram mais sérios? Excesso de lojas era sinal de má gestão? O gosto do consumidor
estava mudando de novo? Com os concorrentes melhorando o café deles, a diferenciação estava
sumindo? **Quão importante para a Starbucks era o ambiente de cafeteria em comparação com o café
em si — ela é um restaurante de café ou é um oásis urbano?** A marca podia ser esticada para
outros tipos de produto e restaurante?

Um executivo diagnosticaria como "problema de gestão de expectativas". Outro como "busca de novas
plataformas de crescimento". Um terceiro como "vantagem competitiva se erodindo". **Nenhum desses
pontos de vista é, por si só, uma ação — mas cada um sugere um conjunto de coisas a fazer e
coloca de lado outras classes de ação como menos relevantes.** E, decisivo: **nenhum deles pode
ser provado correto.** Cada um é um julgamento sobre qual questão é preeminente. Diagnóstico é
julgamento sobre o significado dos fatos.

Rumelt nomeia a natureza do problema: o desafio era **mal estruturado** — ninguém sabia ao certo
como definir o problema, não havia lista óbvia de boas abordagens, e as conexões entre a maioria
das ações e os resultados eram obscuras. Numa situação mal estruturada, **uma estratégia real não
pode ser logicamente deduzida dos fatos observados**; o diagnóstico tem que ser um palpite
educado sobre o que está acontecendo, especialmente sobre o que é criticamente importante.

> O diagnóstico deve **substituir a complexidade avassaladora da realidade por uma história mais
> simples** que chame atenção para os aspectos cruciais.

**E o critério pelo qual se escolhe entre diagnósticos concorrentes é diferente do critério
científico.** O cientista social busca o diagnóstico que **melhor prevê** resultados; a boa
estratégia se baseia no diagnóstico que promete **maior alavancagem sobre** os resultados. O
exemplo: sabe-se por pesquisa que o desempenho escolar do ensino básico é mais bem explicado por
classe social e cultura do que por gasto por aluno ou tamanho de turma — **mas esse conhecimento
não leva a quase nenhuma prescrição de política útil.** Um colega de Rumelt em Los Angeles
diagnostica o desafio do desempenho escolar como um problema **de organização** (escolas
descentralizadas têm desempenho melhor). Se organização explica ou não a maior parte da variação
não é o que importa; **o que importa, e o que torna o diagnóstico útil, é que organização explica
alguma parte e, diferentemente de cultura ou classe social, organização é algo que pode ser
endereçado por política.**

**O diagnóstico como metáfora — o telegrama de Kennan, 1946.** Todo estudante de estratégia
nacional americana conhece o diagnóstico por trás da política de contenção. Tendo servido mais
de uma década como diplomata na URSS e visto de perto o terror e a política soviéticos, Kennan
analisou a natureza da ideologia e do poder soviéticos. Partiu da observação de que a URSS não
era um Estado-nação comum: seus líderes definiam a missão como oposição ao capitalismo e como
espalhar o evangelho da revolução comunista por quaisquer meios. Enfatizou que o antagonismo
entre comunismo e sociedades capitalistas era fundação central do regime de Stálin, o que
impedia qualquer acomodação sincera ou acordo internacional honesto. **Mas apontou também que os
líderes soviéticos eram realistas quanto a poder.** Daí a política norteadora de contraforça
vigilante — pressão soviética contra as instituições livres do Ocidente é algo que pode ser
**contido** pela aplicação hábil e vigilante de contraforça numa série de pontos geográficos e
políticos em constante deslocamento, acompanhando os deslocamentos e manobras da política
soviética, mas que não pode ser encantada nem conversada até deixar de existir.

O diagnóstico de Kennan — luta de longo prazo sem possibilidade de acordo negociado — foi
amplamente adotado, e **a política de contenção era atraente porque especificava um domínio
amplo de ação**: metaforicamente, a URSS estava infectada por um vírus, e os EUA teriam que
impedir o vírus de se espalhar até ele morrer sozinho. Rumelt anota, com precisão, que **a
política de Kennan às vezes é chamada de estratégia, mas lhe faltava o elemento da ação**: todos
os presidentes de Truman a Bush pai lutaram com o problema de traduzir a política norteadora em
objetivos acionáveis, e ao longo do tempo ela produziu a OTAN, a SEATO, a ponte aérea de Berlim,
a Guerra da Coreia, os mísseis na Europa e a Guerra do Vietnã.

O poder do diagnóstico fica visível quando você imagina os enquadramentos alternativos possíveis
em 1947: talvez a URSS pudesse ter sido atraída para a comunidade internacional por uma política
de engajamento, incluindo-a no Plano Marshall. Ou talvez não fosse problema americano, e sim
questão para a ONU. Ou talvez fosse tirania rival da Alemanha nazista, e os EUA devessem ter
buscado ativamente miná-la e libertar sua população.

**Mudança de diagnóstico como motor de mudança estratégica — IBM, 1993.** Em negócios, a maior
parte das mudanças estratégicas profundas nasce de uma **mudança de diagnóstico**. Quando
Gerstner assumiu, a IBM estava em declínio sério. A estratégia historicamente bem-sucedida se
organizava em torno de oferecer soluções completas e integradas de ponta a ponta a corporações e
governos. O microprocessador mudou tudo: a indústria começou a fragmentar, com empresas
separadas oferecendo chips, memória, discos, teclados, software, monitores, sistemas
operacionais. A visão dominante, dentro da empresa e entre os analistas, era que **a IBM era
integrada demais** — a estrutura nova da indústria era fragmentada, logo a IBM deveria ser
quebrada em pedaços para combinar. Quando Gerstner chegou, já se preparavam ofertas separadas de
ações para as várias partes.

Gerstner **mudou o diagnóstico.** Acreditava que, numa indústria cada vez mais fragmentada, a IBM
era a única empresa com expertise em todas as áreas. O problema dela não era ser integrada; era
estar **falhando em usar as habilidades integradas que possuía**. A IBM precisava ficar mais
integrada — só que dessa vez em torno de soluções para o cliente, não de plataformas de
hardware. **O obstáculo principal era a falta de coordenação interna e de agilidade.** A política
norteadora que saiu disso: explorar o fato de a IBM ser diferente, na verdade única, oferecendo
soluções sob medida para os problemas de processamento de informação dos clientes, alavancando a
marca e a amplitude de expertise, mas disposta a usar hardware e software de terceiros conforme
necessário. Na prática, a atividade de maior valor agregado se deslocou de engenharia de
sistemas para consultoria de TI, de hardware para software.

> Nem "integração é obsoleta" nem "conhecer todos os aspectos de TI é nossa habilidade única"
> são, por si sós, estratégias. **Mas esses diagnósticos levam o líder, e todos que o seguem, em
> direções muito diferentes.**

### A política norteadora

Ela **canaliza a ação em certas direções sem definir exatamente o que será feito** — como o
guard-rail de uma rodovia, dirige e restringe a ação sem definir plenamente o conteúdo dela.

**Boas políticas norteadoras não são metas, visões ou imagens de estados finais desejáveis.**
Elas definem um método de lidar com a situação e **excluem uma vasta gama de ações possíveis.**

O exemplo comparativo é o Wells Fargo. A "visão" corporativa era: *queremos satisfazer todas as
necessidades financeiras dos nossos clientes, ajudá-los a ter sucesso financeiro, ser o provedor
premium de serviços financeiros em cada um dos nossos mercados, e ser conhecido como uma das
grandes empresas dos Estados Unidos.* Isso comunica ambição, mas não é estratégia nem política
norteadora, porque não há informação nenhuma sobre **como** a ambição será alcançada. E o próprio
ex-CEO sabia disso, distinguindo a visão da política norteadora da empresa: **usar os efeitos de
rede da venda cruzada.** A lógica: quanto mais produtos financeiros diferentes o banco vendesse a
um cliente, mais ele saberia sobre aquele cliente e sobre a rede inteira de clientes dele — e
essa informação, por sua vez, ajudaria a criar e vender mais produtos. Ao contrário da visão,
isso enuncia um **modo de competir**.

**Por que não chamar a política norteadora de "estratégia" e parar aí**, que é o que muita gente
faz? Duas razões: **sem diagnóstico não dá para avaliar políticas norteadoras alternativas**; e
**sem trabalhar até pelo menos a primeira rodada de ação, não dá para ter certeza de que a
política é implementável.** Boa estratégia não é só o "o quê" — é também o "porquê" e o "como".

**Como uma política norteadora cria vantagem** (além de se apoiar em vantagens já existentes):

- **antecipando** as ações e reações dos outros;
- **reduzindo a complexidade e a ambiguidade** da situação;
- explorando a alavancagem inerente a **concentrar esforço num aspecto pivotal ou decisivo**;
- criando políticas e ações **coerentes**, cada uma se apoiando na outra em vez de se anularem.

O caso da IBM ilustra o segundo item de forma limpa: a política de "prover soluções ao cliente"
contava com a profundidade tecnológica da empresa, mas **a política em si criou vantagem ao
resolver a incerteza sobre o que fazer, sobre como competir e sobre como se organizar.**

**O mercadinho de esquina — o exemplo que torna o conceito pequeno e usável.** Uma dona de
mercearia de bairro enfrentava uma lista de perguntas: manter preço baixo ou oferecer orgânicos
mais caros? Estocar mais itens asiáticos para os muitos estudantes asiáticos do bairro? Abrir por
mais horas? Quão importante é ter equipe simpática que conhece os fregueses? Vale um segundo
caixa? E o estacionamento no beco? Anunciar no jornal da faculdade? Pintar o teto de verde ou de
branco? Colocar itens em promoção toda semana, e quais?

Um economista diria para tomar as ações que maximizam lucro — tecnicamente correto e inútil,
porque **maximizar lucro é um problema mal estruturado**: mesmo numa mercearia de esquina há
centenas ou milhares de ajustes possíveis, e milhões num negócio de qualquer tamanho.

O que ela fez: **diagnosticou** o desafio como competir com o supermercado local, que abria 24
horas e tinha preço menor, e precisava atrair clientes de lá. Acreditava que a maioria dos
clientes dela passava na frente da loja quase todo dia — trabalhavam ou moravam perto. Varrendo a
lista de perguntas, percebeu que havia **uma escolha entre servir os estudantes mais sensíveis a
preço ou os profissionais mais sensíveis a tempo.** Transcender milhares de escolhas individuais
e reenquadrar o problema como escolha entre poucos grupos de clientes **reduziu dramaticamente a
complexidade.**

E aqui está o teste que Rumelt embute e que vale como regra: **se os dois segmentos pudessem ser
servidos pelas mesmas políticas e ações, a dicotomia seria inútil e deveria ser descartada.** No
caso dela a diferença era significativa: os estudantes eram mais numerosos, mas os profissionais
compravam muito mais por visita. Ela adotou a política norteadora de "servir o profissional
ocupado", e depois afiou mais: **"o profissional ocupado que tem pouco tempo para cozinhar"**.

Não havia como estabelecer que essa era a única política boa, ou a melhor. Mas **sem política
norteadora não existe princípio de ação a seguir**, e as ações e alocações de recurso dela
provavelmente seriam inconsistentes e incoerentes, brigando entre si e se anulando. Adotar a
política **revelou e organizou as interações entre as ações possíveis**: o segundo caixa ajuda a
absorver o pico das 17h, e o estacionamento no beco também; o espaço hoje usado para petiscos de
estudante pode virar comida pronta de alta qualidade para levar; profissionais não fazem compra à
meia-noite, então não há necessidade de horário estendido; profissionais valorizam equipe
suficiente no fim do expediente e talvez no almoço.

### Ação coerente

**Muita gente chama a política norteadora de "a estratégia" e para aí. É erro.** Estratégia é
sobre ação, sobre fazer algo. O kernel tem que conter ação. Não precisa apontar todas as ações
que serão tomadas conforme os eventos se desdobram, mas **precisa haver clareza suficiente sobre
ação para trazer os conceitos ao chão.**

**O caso do Grupo de Negócios Europeu** é o melhor do livro sobre por que a ação é o que força a
escolha, e é quase inteiramente transponível para conversa de sócio.

A empresa é de bens de consumo, com organização internacional complexa: organizações de
marketing por país, manufatura global, quatro centros de desenvolvimento de produto (América do
Norte, Japão, Alemanha, Reino Unido). Gerentes de produto eram responsáveis por coordenar mas
não tinham autoridade direta. Produtos tendiam a ser adaptados a diferenças de país ou região,
em parte por aquisições locais, em parte por percepções de diferenças locais de gosto.

A direção acreditava que o negócio europeu era fragmentado demais e queria a maioria dos produtos
oferecidos na Europa como **pan-europeus**, explorando escala em produção e marketing. Já tinha
gasto tempo e esforço comunicando a mensagem e criado mecanismos: os chefes das organizações
nacionais foram colocados num Comitê Executivo Pan-Europa que se reunia uma vez por trimestre;
desenvolvedores da Alemanha e do Reino Unido eram rotacionados entre as duas localidades; foi
criado um grupo de Novos Produtos para consultar todos os departamentos sobre oportunidades de
conceitos e marcas pan-europeus; parte da avaliação de promoção de cada executivo passou a
depender da contribuição para a iniciativa.

**Apesar de tudo isso, quase nada aconteceu.** Os desenvolvedores alemães e britânicos cada um
alegava que suas iniciativas não eram apoiadas pelo outro. A única iniciativa conjunta
britânico-alemã não foi adotada pelo resto da organização.

O que Rumelt fez foi uma pergunta, e é ela que vale guardar:

> **"Suponha que isso fosse realmente importante, prioridade absolutamente crítica. Suponha que
> você absolutamente tivesse que ter produtos pan-europeus desenvolvidos e comercializados nos
> próximos dezoito meses ou tudo desabaria. O que você faria então?"**

A resposta veio na hora: *fecharia um dos grupos de desenvolvimento. Eles gastam mais tempo
brigando do que desenvolvendo.* Depois de pensar: *talvez fechasse os dois e começasse do zero na
Holanda — tem um escritório de teste de mercado lá que serviria de semente; a gente levaria os
melhores do Reino Unido e da Alemanha e começaria fresco. Ainda assim, isso não resolve o
problema de trazer os gerentes de país junto.*

E a razão da falta de entusiasmo dos gerentes de país? *Cada um passou anos entendendo as
condições especiais de um país, adaptando produtos e programas de marketing àquelas condições.
Eles não confiam na ideia pan-europeia. Os franceses não querem gastar esforço de marketing em
produtos que consideram "britânicos demais" ou "alemães demais". E ainda não houve um produto
pan-europeu convincente que todos pudessem apoiar. Se já fosse sucesso em três ou quatro países,
o resto entraria. Mas cada um tem o próprio portfólio atual para se preocupar.*

O diagnóstico que emerge, e a metáfora que Rumelt usa: **o trabalho deles é tocar o sistema
atual baseado em países, e você quer iniciativas pan-europeias novas. Dá para martelar um prego
com um sapato, mas vai demorar. Você não precisa de uma ferramenta diferente para essa tarefa?**
A resposta do executivo: *claro — a gente poderia ter um único grupo desenvolvendo, lançando e
comercializando produtos pan-europeus, com responsabilidade total pelo lucro.* Ao que Rumelt
acrescenta: *e ao mesmo tempo você teria que intervir no sistema por país com overrides de
orçamento para essa iniciativa, promoções para quem ajudar e problemas de carreira para quem
não ajudar.*

O executivo voltou para trás da mesa, posição de autoridade, e disse: *seria um caminho muito
doloroso. Muitos narizes ficariam fora do lugar. Seria melhor conquistar as pessoas para esse
ponto de vista do que forçá-las.* E Rumelt: *certo. Você só daria todos esses passos dolorosos
se fosse realmente importante fazer isso acontecer. Só se fosse realmente importante.*

Levou mais nove meses até ele decidir que a iniciativa era de fato importante e reorganizar as
operações europeias.

> **Não havia solução mágica para o problema de querer marketing forte por país, iniciativas
> pan-europeias e nenhum nariz fora do lugar, tudo ao mesmo tempo. Enquanto a estratégia
> permaneceu no nível de intenção e conceito, os conflitos entre valores e entre a organização e
> a iniciativa continuaram toleráveis. Foi o imperativo da ação que forçou a decisão sobre qual
> questão era de fato a mais importante.**

E a generalização: em muitas situações o impedimento principal à ação é **a esperança desolada de
que certas escolhas ou ações dolorosas possam ser evitadas** — que a lista inteira de
"prioridades" possa ser toda cumprida. É o ofício duro da estratégia decidir qual prioridade tem
precedência. Só então a ação pode acontecer. E, interessante: **não existe ferramenta melhor para
afiar ideias estratégicas do que a necessidade de agir.**

### Coerência

As ações dentro do kernel devem ser coerentes — os recursos alocados, as políticas e as manobras
devem ser consistentes e coordenados. **A coordenação da ação é a fonte mais básica de
alavancagem ou vantagem disponível em estratégia.**

Exemplos de coerência simples: numa briga, a estratégia mais simples é uma finta pela esquerda e
um soco pela direita — coordenação de movimento no tempo e no espaço. A estratégia de negócio
mais simples é usar o conhecimento colhido por vendas e marketing para afetar decisões de
expansão de capacidade ou de design de produto — coordenação entre funções e bases de
conhecimento. E, mesmo quando uma organização tem uma fonte de vantagem aparentemente simples e
básica como ser produtora de baixo custo, **um exame atento sempre revela uma penca de políticas
inter-relacionadas que se apoiam mutuamente** para manter os custos baixos — e esses custos são
menores apenas para certo tipo de produto entregue em certas condições.

**Incoerência tipo 1 — ações em conflito. O caso Ford.** Quando era CEO da Ford Europa e VP de
desenvolvimento de produto, Jacques Nasser disse a Rumelt: *"marca é a chave do lucro na
indústria automobilística"*. Ao virar CEO corporativo em 1999, agiu rápido para adquirir Volvo,
Jaguar, Land Rover e Aston Martin. **Ao mesmo tempo**, a política norteadora original da empresa
— economias de escala — continuava viva e chutando: um executivo sênior disse a Rumelt em 2000
que *não dá para ser competitivo na indústria automobilística a menos que se produza pelo menos
um milhão de unidades por ano numa plataforma.* Assim, as ações de comprar Volvo e Jaguar foram
conjugadas com ações de colocar ambas as marcas numa plataforma comum.

> **Colocar Jaguar e Volvo na mesma plataforma dilui o valor de marca das duas e irrita os
> clientes, revendedores e oficinas mais apaixonados. Quem compra Volvo não quer um "Jaguar
> seguro"; quer um carro que é unicamente seguro. Quem compra Jaguar quer algo mais distintivo
> que um "Volvo esportivo".**

**Incoerência tipo 2 — ações não conflitantes, mas descoordenadas.** Em 2003 Rumelt trabalhou com
uma empresa cuja "estratégia" inicial era (1) fechar uma fábrica em Akron e abrir uma no México,
(2) gastar mais em publicidade, (3) iniciar um programa de feedback 360 graus. Essas ações podem
todas ter sido boas ideias, **mas não se complementam.** São "estratégicas" apenas no sentido de
que cada uma provavelmente exige aprovação da alta direção. Fazer essas coisas pode ser boa
gestão operacional, mas não constitui uma estratégia. **Uma estratégia coordena ação para
endereçar um desafio específico. Ela não é definida pelo nível hierárquico de quem autoriza a
ação.**

### Coordenação é cara — o contrapeso que quase todo mundo esquece

Este é o pedaço mais sofisticado do capítulo, e é o que impede o leitor de sair coordenando tudo.

**Coordenação estratégica não é ajuste mútuo ad hoc entre agentes. É coerência imposta a um
sistema por política e por design.** Quando Rumelt diz "imposta", ele quer dizer exatamente isso:
é um **exercício de poder centralizado**, usado para superar o funcionamento natural de um
sistema. Essa coordenação é antinatural no sentido de que não ocorreria sem a mão da estratégia.

Isso soa alarme em qualquer pessoa moderna e educada, e Rumelt encara: uma das grandes lições do
século XX — o experimento controlado mais dramático da história humana — foi que **economias
centralmente controladas são grosseiramente ineficientes**, e morreu mais gente de fome nos
regimes de planejamento central de Stálin e Mao do que morreu na Segunda Guerra Mundial. Em
economias modernas, trilhões de decisões descentralizadas são tomadas por ano, e o processo faz
um trabalho razoável de alocar certos tipos de recurso escasso: quando o preço da gasolina sobe,
as pessoas começam a comprar carros mais econômicos sem nenhum planejamento central; depois de um
furacão, os salários sobem e atraem trabalhadores para a área atingida.

**Mas a decisão descentralizada não dá conta de tudo.** Ela falha quando os custos ou os
benefícios das ações **não são arcados pelos atores descentralizados** — e essa separação entre
custo e benefício pode ocorrer entre unidades organizacionais **ou entre o presente e o futuro.**
E a coordenação descentralizada é difícil quando **os benefícios só aparecem se as decisões forem
coordenadas.** (Rumelt é justo: políticas centralmente desenhadas também falham quando os
decisores são tolos, estão a soldo de grupos de interesse ou simplesmente escolhem errado.)

O exemplo pequeno: vendedores adoram agradar clientes com pedidos urgentes, e o pessoal de
manufatura prefere corridas longas de produção ininterruptas. **Você não pode ter corridas longas
e atender pedidos urgentes inesperados ao mesmo tempo.** Resolver esse conflito exige políticas
desenhadas para beneficiar o todo.

O exemplo grande: na Segunda Guerra, Roosevelt coordenou poder político, econômico e militar para
derrotar a Alemanha nazista, usando a capacidade produtiva americana para sustentar a União
Soviética e permitir que ela sobrevivesse e degradasse a máquina de guerra nazista antes do
desembarque na Normandia. Outro elemento, de grandes consequências, foi concentrar o grosso dos
recursos americanos em vencer primeiro na Europa antes de enfrentar plenamente o Japão — uma
coordenação complexa de forças no tempo. **Nenhuma dessas políticas cruciais teria emergido de
decisão descentralizada** entre os Departamentos de Estado e da Guerra, as várias juntas de
produção de guerra e os múltiplos comandos militares.

**E aqui vem o contrapeso:**

> **Coordenação é cara, porque ela luta contra os ganhos da especialização, que são a economia
> mais básica da atividade organizada.** Especializar-se em algo é, grosso modo, ser deixado em
> paz para fazer só aquilo e não ser incomodado com outras tarefas, interrupções e agendas
> alheias. Como é óbvio para qualquer um que já participou de um comitê de coordenação,
> **coordenação interrompe e desespecializa as pessoas.**
>
> Portanto, deve-se buscar políticas coordenadas **apenas quando os ganhos são muito grandes.**
> A genialidade de uma boa organização não está em garantir que tudo esteja conectado a tudo —
> **esse caminho leva a uma estase congelada e mal-adaptada.** Boa estratégia e boa organização
> estão em **especializar-se nas atividades certas e impor apenas a quantidade essencial de
> coordenação.**

---

# PARTE II — Fontes de poder

Boa estratégia funciona **arregimentando poder e aplicando-o onde terá maior efeito**. No curto
prazo isso pode significar atacar um problema ou um rival com combinações hábeis de política,
ações e recursos; no longo prazo, usar políticas e compromissos de recurso para desenvolver
capacidades que valerão em disputas futuras. Rumelt trata dez fontes: alavancagem, objetivos
próximos, sistemas de elos em cadeia, design, foco, crescimento, vantagem, dinâmica, inércia e
entropia. Ele avisa que a lista não é exaustiva e que escolheu essas por generalidade e por
frescor — são as que recebem menos atenção do que merecem.

## 6. Alavancagem

Arquimedes disse que com uma alavanca longa o bastante e um ponto de apoio firme o bastante ele
moveria o mundo. **O que ele sabia e não disse é que essa alavanca teria bilhões de quilômetros
de comprimento** — e que, com todo esse trabalho, um movimento do braço dele moveria a Terra
pelo diâmetro de um átomo. Dado o tamanho do incômodo, seria sábio aplicar a alavanca **num
ponto onde esse movimento minúsculo faça uma diferença grande.** Achar esses pontos de pivô
cruciais e concentrar força neles é o segredo da alavancagem estratégica.

A alavancagem vem de três ingredientes combinados: **antecipação, insight sobre o que é pivotal
na situação, e aplicação concentrada de esforço.**

### Antecipação

Não exige poder psíquico. Na maior parte das circunstâncias, antecipar é **considerar os
hábitos, preferências e políticas dos outros, mais as inércias e restrições à mudança.**

**Toyota.** Enquanto a febre de SUVs bombava nos EUA, a Toyota investiu mais de US$ 1 bilhão em
tecnologia híbrida — transmissão continuamente variável de controle eletrônico, mais chips e
software próprios. Duas antecipações guiavam o investimento: primeira, que a pressão por
economia de combustível tornaria híbridos uma categoria importante com o tempo; segunda, que
**uma vez apresentados à chance de licenciar a tecnologia da Toyota, os outros fabricantes
licenciariam em vez de investir no desenvolvimento de sistemas possivelmente superiores.** Ambas
se mostraram razoavelmente acuradas.

**A antecipação sobre o outro lado é a mais crítica — e a mais fácil de errar.** O planejamento
militar americano para o Iraque em 2003 falhou em antecipar a insurgência; a avaliação do próprio
exército registra que a transição para uma nova campanha não foi bem pensada, planejada nem
preparada antes de começar. **E a insurgência iraquiana foi iniciada, ao menos em parte, por
ex-oficiais que anteciparam que a cobertura de baixas americanas inclinaria a opinião pública
dos EUA para a retirada, como no Vietnã e em Mogadíscio** — Saddam tinha encomendado uma
tradução árabe de *Black Hawk Down* e distribuído aos oficiais superiores. Ou seja: os
planejadores americanos falharam em antecipar **as antecipações dos iraquianos.**

**Pierre Wack e Ted Newland, na Shell, 1970.** Rumelt considera estas as antecipações mais
notáveis já feitas num negócio moderno. Wack lhe explicou o princípio: *certos aspectos de
eventos futuros são predeterminados — se há uma tempestade no Himalaia, você pode prever com
confiança que amanhã, ou depois de amanhã, haverá enchente na planície do Ganges.* A enchente que
eles previram foi a ascensão da OPEP e a crise do petróleo. **A tempestade tinha sido discernida
no padrão de renda e população dos países produtores**: Irã, Iraque e Venezuela tinham reservas
altas, populações grandes e crescentes e metas ambiciosas de desenvolvimento, logo estariam
fortemente motivados a buscar aumento de preço — e o aumento de preço, por sua vez, faria países
como Arábia Saudita e Kuwait perceberem que **petróleo no subsolo poderia valorizar mais rápido
que os dólares que ele compraria depois de bombeado e vendido.**

A frase de Wack em 1981 é o ensinamento operacional sobre cenários, e vale para qualquer projeção
de mercado:

> *Se você faz previsão por "cenário" padrão, acaba com um gráfico de três linhas rotuladas
> "alto", "médio" e "baixo". Todo mundo olha e acredita que prestou atenção à incerteza. E aí,
> claro, todos planejam no "médio"! Mas eles estão errando o risco. **O risco não é o preço do
> petróleo estar alto ou estar baixo. O risco é ele subir, te seduzindo a um investimento
> grande, e depois virar e mergulhar para baixo, te deixando com ativos inúteis.***

Foi o que aconteceu: o preço parou de subir por volta de US$ 36 o barril, virou e afundou para
US$ 20, porque os preços altos estimularam nova perfuração, e quando as descobertas do Mar do
Norte e do Alasca entraram em operação a oferta extra derrubou o preço.

### Pontos de pivô

Um ponto de pivô **magnifica o efeito do esforço**. É um desequilíbrio natural ou criado, um
lugar onde um ajuste relativamente pequeno pode liberar forças represadas muito maiores. O
estrategista de negócio sente esses desequilíbrios **em demanda represada ainda não atendida**,
ou **numa competência robusta desenvolvida num contexto que pode ser aplicada com bom efeito em
outro.**

**7-Eleven Japão.** A companhia concluiu que os consumidores japoneses são extremamente sensíveis
a variações de gosto local e gostam tanto de novidade quanto de variedade. O presidente explicou:
no Japão o consumidor se entedia com facilidade; em refrigerantes há mais de duzentas marcas e
várias novas a cada semana; uma loja expõe cinquenta variedades com giro de 70% ao ano, e o mesmo
vale para muitas categorias de alimento. **Para criar alavancagem em cima desse padrão**, a
empresa desenvolveu um método de coletar informação de gerentes e funcionários de loja sobre
gostos locais e de formar times de merchandising de resposta rápida. E para alavancar ainda mais
essa informação, criou relacionamento com fabricantes de alimentos de segunda e terceira linha,
levando ofertas novas ao mercado rapidamente sob marca própria, a preço baixo, **usando a
capacidade ociosa desses fabricantes.**

Na China, no mesmo período, a vantagem marcante era outra: limpeza e serviço. Os consumidores
chineses estavam acostumados a ser suplicantes num ponto de varejo, e a tradição japonesa da rede
— interiores impecáveis, atendentes de luvas brancas cumprimentando com reverências e sorrisos,
mais almoços de bom sabor — produzia o dobro de vendas por metro quadrado de qualquer
concorrente. **Não era plano de lucro nem conjunto de metas financeiras; era insight
empreendedor com potencial de criar e estender vantagem.**

**O Portão de Brandemburgo, 1987**, é o exemplo de pivô em rivalidade direta — um desequilíbrio
entre a posição de um rival e as capacidades reais dele, ou **entre pretensão e realidade.**
Quando Reagan disse "derrube este muro", ele obviamente não esperava que Gorbachev fizesse isso.
**O discurso era dirigido aos europeus ocidentais**, e o propósito era destacar, e assim
explorar, o desequilíbrio entre um sistema que permite o movimento livre de pessoas e outro que
precisa conter seus cidadãos com arame farpado e concreto. Esse desequilíbrio existia havia
décadas: o mesmo desafio feito a Andropov em 1983 teria tido pouco efeito. **Virou ponto de pivô
por causa do desequilíbrio adicional entre a alegação de Gorbachev de que a URSS estava
liberalizando e os fatos no terreno.**

### Concentração

Os retornos à concentração aparecem quando **focar esforço em objetivos menos numerosos ou mais
limitados gera pagamentos maiores.** Esses ganhos vêm de combinações de restrições e efeitos de
limiar:

- Se recursos não fossem limitados, não haveria necessidade de escolher um objetivo em vez de
  outro.
- Se os rivais pudessem ver nossos movimentos facilmente e mobilizar respostas rápidas,
  ganharíamos pouco concentrando em fraquezas temporárias.
- Se a liderança sênior não tivesse cognição limitada, não ganharia nada concentrando atenção em
  poucas prioridades.

**Efeito de limiar** existe quando há um nível crítico de esforço necessário para afetar o
sistema, e níveis abaixo dele têm pouquíssimo retorno. **Quando há efeito de limiar, é prudente
limitar os objetivos àqueles que podem ser afetados pelos recursos à disposição.**

O exemplo é publicidade: uma quantidade muito pequena de anúncio não produz resultado nenhum, e é
preciso passar do corcovado para começar a ver resposta. Consequências práticas: **pode compensar
pulsar a publicidade**, concentrando-a em períodos curtos em vez de espalhar uniformemente; e
**pode fazer sentido lançar produto novo região por região**, concentrando a publicidade onde o
produto é novo. (Nota metodológica honesta que Rumelt faz em rodapé: **é difícil observar esse
efeito nos dados porque poucas empresas são tolas o bastante para anunciar abaixo do limiar** — e
ele cita um desenho de pesquisa engenhoso que consegue observá-lo, evidência de nível melhor que
a média do acervo.)

Por forças semelhantes, **estrategistas frequentemente preferem dominar um segmento pequeno a ter
o mesmo número de clientes representando uma fatia fina de um mercado grande.** Dentro de
organizações, os fatores que geram concentração são **os efeitos de limiar em produzir mudança** e
**os limites de cognição e atenção da alta gestão**: assim como um indivíduo não resolve cinco
problemas ao mesmo tempo, a maioria das organizações se concentra em poucas questões críticas de
cada vez.

Há ainda um efeito psicológico: quando as pessoas ignoram sinais abaixo de certo limiar (efeito
de saliência) ou acreditam em momentum — que sucesso leva a sucesso —, o estrategista pode
**aumentar a eficácia percebida da ação** focando em alvos que chamem atenção e mudem opinião.
Pode ter mais impacto na opinião pública **virar completamente duas escolas do que fazer 2% de
melhoria em duzentas.** E a percepção de eficácia afeta a disposição das pessoas de apoiar e
participar de ações futuras.

**O caso Getty.** Quando J. Paul Getty morreu em 1976, deixou US$ 700 milhões em trust para o
museu que tinha construído em Malibu. Em 1983 o trust já valia US$ 1,4 bilhão e era obrigado por
lei a gastar 4,5% do principal — uns US$ 65 milhões — por ano. O novo presidente explicou a
estratégia:

> *O Getty Trust era uma quantia muito grande de dinheiro e a gente tinha que gastar um valor
> considerável todo ano. Nosso mandato era arte, mas eu tinha que decidir como de fato gastar os
> fundos. **Poderíamos simplesmente ter construído uma grande coleção — teria sido a coisa
> óbvia. Comprar arte.** Mas eu não estava confortável com isso como direção. Tudo o que a gente
> realmente conseguiria seria empurrar o preço da arte para cima e mover parte dela de Nova York
> e Paris para Los Angeles.*
>
> *Levou algum tempo, mas comecei a desenvolver a ideia de que a arte poderia ser, e deveria
> ser, um assunto mais sério do que era. Arte não é só objeto bonito; é parte vital da atividade
> humana. Numa universidade as pessoas gastam esforço enorme estudando línguas e histórias. A
> gente sabe tudo sobre contratos de casamento em tribos remotas. Mas a arte foi tratada como
> espetáculo secundário. **Decidi que o Getty poderia mudar isso.** Em vez de gastar nossa
> receita comprando arte, poderíamos transformar o assunto.*

O que ele fez: construir um catálogo digital completo de toda a arte, incluindo dança, canto e
tecidos; formar professores de arte; hospedar pesquisa avançada sobre arte e sociedade; abrigar o
melhor talento de conservação do mundo e desenvolver novos métodos de restauração.

> **Com US$ 65 milhões por ano ele poderia simplesmente comprar arte ou dar dinheiro a
> universidades. Ao mirar transformar o estudo da arte, ele desenhou um objetivo que era novo e
> bem dimensionado aos recursos à disposição.** Investiu onde os recursos dele fariam diferença
> grande e mais visível. Esse é o poder da concentração — escolher um objetivo que pode ser
> **decisivamente afetado** pelos recursos que você tem.

Rumelt é honesto no fecho: não há como saber se essa estratégia criou mais bem do que
simplesmente distribuir o dinheiro. **Mas fez um estrondo maior e, com isso, atraiu mais energia
e apoio de funcionários e de organizações externas.**

---

## 7. Objetivo próximo (*proximate objective*)

> *Loucura é a busca direta da felicidade e da beleza.* — George Bernard Shaw, epígrafe do
> capítulo

Uma das ferramentas mais poderosas de um líder é a criação de um bom **objetivo próximo — um que
esteja perto o suficiente para ser viável.** Um objetivo próximo nomeia um alvo que a organização
pode razoavelmente esperar acertar, ou até sobrepujar.

### Kennedy e a Lua: o oposto do que os manuais de liderança dizem

O discurso de 1961 é citado em toda cartilha de "como ser líder carismático" como exemplo de meta
audaciosa e visionária. **Rumelt demonstra que era um objetivo próximo cuidadosamente
escolhido**, e recomenda ler o discurso original — a diferença de registro em relação ao discurso
político de hoje é chocante, porque **Kennedy falava como um tomador de decisão falando com
adultos, não como um pregador falando com crianças.**

O diagnóstico, no próprio discurso, era **opinião mundial**: as conquistas espaciais recentes
deixaram claro, como o Sputnik em 1957, o impacto dessa aventura sobre a mente das pessoas em
toda parte. A URSS estava alavancando a seu favor, com recursos tecnológicos muito mais pobres, o
interesse natural do mundo por essas realizações. Ser o primeiro a pousar pessoas na Lua seria
afirmação dramática da liderança americana — e os EUA tinham recursos muito maiores; era questão
de alocar e coordenar.

**E a viabilidade tinha sido julgada.** Kennedy não apontou apenas o objetivo: listou os passos do
caminho — exploração não tripulada, foguetes maiores, desenvolvimento paralelo de propulsão
líquida e sólida, e a construção de um veículo de pouso. Era viável porque engenheiros sabiam
projetar e construir foguetes, e boa parte da tecnologia já existia no programa de mísseis
balísticos.

**O memorando de Wernher von Braun ao vice-presidente**, escrito um mês antes do discurso, mostra
que o objetivo era intensamente estratégico. Von Braun observou que a URSS tinha grande vantagem
em foguetes de carga pesada, o que significava que venceria uma corrida por um laboratório
orbital tripulado ou por um veículo não tripulado na Lua. **Mas:** havia chance esportiva de
mandar uma tripulação de três em volta da Lua antes deles, e chance excelente de vencê-los no
primeiro pouso tripulado com capacidade de retorno — **porque isso exigia um salto de desempenho
por um fator de 10 sobre os foguetes soviéticos existentes.** Enquanto os grandes lançadores
soviéticos punham os EUA em desvantagem numa série de espetáculos de curto prazo, o pouso lunar
exigiria foguetes muito maiores do que qualquer nação possuía, **dando aos EUA vantagem por causa
da base de recursos maior.** Por isso von Braun recomendou o anúncio preemptivo do objetivo mais
ambicioso.

**O contraste — objetivos que não são próximos.** A Guerra às Drogas: por mais desejável que seja
parar o uso de drogas ilegais, não é objetivo próximo porque não é viável dentro do arcabouço
legal existente; e os esforços enormes direcionados a ele podem apenas expulsar o contrabandista
pequeno, elevar o preço na rua e tornar tudo ainda mais lucrativo para os cartéis sofisticados. A
independência energética: inviável na ausência da coragem política de aumentar o preço da
gasolina e se comprometer com energia nuclear.

### Phyllis Buwalda e a especificação da superfície lunar

O caso mais importante do capítulo para uso prático, porque é sobre **absorver ambiguidade**.

Rumelt trabalhava como engenheiro no Jet Propulsion Laboratory. Um dos projetos principais era o
Surveyor, máquina não tripulada que pousaria suavemente na Lua. **O problema mais irritante da
equipe de design era que ninguém sabia como era a superfície lunar.** Havia três ou quatro
teorias: a superfície poderia ser mole, resíduo em pó de eras de bombardeio meteórico; poderia
ser um ninho de cristais afiados como agulhas; poderia ser um amontoado de pedregulhos, como uma
morena glacial. O veículo afundaria no pó? Seria espetado? Ficaria entalado?

Com essa ambiguidade, os engenheiros tinham dificuldade enorme de projetar. **Não é que não dava
para projetar um veículo; é que não dava para defender nenhum projeto contra a história de outra
pessoa sobre os possíveis horrores da superfície lunar.**

A chefe dele, que dirigia os Estudos de Missão Futura, ficou conhecida pelo trabalho num modelo
da superfície lunar. **A superfície que ela descreveu era dura e granulada, com declives de no
máximo uns quinze graus, pedras pequenas espalhadas e pedregulhos de no máximo uns sessenta
centímetros aqui e ali.** Rumelt, olhando pela primeira vez, ficou espantado:

> — *Phyllis, isso parece muito com o deserto do sudoeste americano.*
> — *Parece mesmo, não é?*, ela disse sorrindo.
> — *Mas você realmente não sabe como é a Lua. Por que escrever uma spec dizendo que é como o
> deserto daqui?*
> — *É assim que são as partes mais lisas da Terra, então é provavelmente um bom palpite sobre o
> que a gente vai encontrar na Lua se ficar longe das montanhas.*
> — *Mas você não faz ideia! Pode ser pó, ou agulhas afiadas…*
> — *Olha, **os engenheiros não conseguem trabalhar sem uma especificação. Se acabar sendo muito
> mais difícil que isso, a gente não vai passar muito tempo na Lua de qualquer jeito.***

A spec dela **não era a verdade — a verdade é que ninguém sabia. Era um objetivo próximo
estrategicamente escolhido, um que os engenheiros sabiam atacar**, e por isso acelerou o projeto.
E era sensata e engenhosa ao mesmo tempo: dá para escrever uma tese sobre a análise de opções
implícita no insight de que **se a superfície lunar não suportasse um módulo de pouso direto, o
problema não era de design — o programa americano inteiro de levar um homem lá estaria em apuros
profundos.**

O historiador do Surveyor registrou que o modelo de engenharia de fato usado foi desenvolvido
após estudo de todas as teorias disponíveis, e que **felizmente ele foi preparado por engenheiros
que não estavam emocionalmente envolvidos na geração das teorias científicas** — e os requisitos
resultantes foram notavelmente acurados. Cinco Surveyors pousaram com sucesso em 1966 e 1967, e o
Apollo 12 pousou a duzentos metros do Surveyor 3, cujo comandante caminhou até a máquina e tirou
uma foto dela.

> **A especificação absorveu boa parte da ambiguidade da situação, repassando aos projetistas um
> problema mais simples. Não um problema fácil de resolver, nem um que já tivesse solução — mas
> um problema solúvel.**
>
> **Um dever importante de qualquer líder é absorver grande parte da complexidade e da
> ambiguidade, repassando à organização um problema mais simples — um que ela consiga resolver.
> Muitos líderes falham feio nessa responsabilidade, anunciando metas ambiciosas sem resolver um
> bom pedaço da ambiguidade sobre os obstáculos específicos a superar. Assumir responsabilidade é
> mais do que estar disposto a aceitar a culpa: é definir objetivos próximos e entregar à
> organização um problema que ela consiga de fato resolver.**

### Quanto mais dinâmica a situação, mais próximo o objetivo

Rumelt inverte uma crença comum: muitos autores sugerem que **quanto mais dinâmica a situação,
mais longe à frente o líder precisa olhar. Isso é ilógico. Quanto mais dinâmica a situação, pior
será sua capacidade de previsão.** Portanto, quanto mais incerta e dinâmica a situação, **mais
próximo tem que ser o objetivo estratégico.** A lógica essencial passa a ser a de **tomar uma
posição forte e criar opções**, não a de olhar longe.

A descrição vem do xadrez entre mestres: durante boa parte da partida, os lances não têm outro
fim imediato senão "melhorar minha posição". Não se ganha sempre escolhendo lances diretamente
voltados a dar mate ou a ganhar uma peça. Na maior parte do tempo, o objetivo de um lance é achar
posições que **(a) aumentem a mobilidade das peças — as opções abertas a elas — e diminuam a
liberdade de operação do adversário; e (b) imponham padrões relativamente estáveis no tabuleiro
que induzam força duradoura para si e fraqueza duradoura para o adversário.** Quando vantagens
posicionais suficientes foram acumuladas, elas geralmente podem ser convertidas com maior ou menor
facilidade por manobras táticas contra alvos que já não são defensáveis, ou só o são a um custo
terrível.

### A escola de negócios: o exercício do objetivo único

Em 2005 Rumelt foi ajudar uma escola de negócios menor com o plano estratégico. A ambição era
deixar de ser escola local e passar a ser classificada entre as melhores da região. **O rascunho
era típico do setor: uma lista de áreas nas quais a escola anunciaria iniciativas e se esforçaria
mais** — mais visibilidade em pesquisa, mais doação de ex-alunos, criação de um programa de
estudos globais, fortalecimento do programa de empreendedorismo e uma iniciativa de
sustentabilidade. Olhando mais de perto, **o maior segmento de alunos ia trabalhar em firmas de
contabilidade e em empresas de serviço locais de pequeno e médio porte.**

Ele explicou os conceitos de questão pivotal e objetivo próximo, e depois pediu ao grupo que
**imaginasse que só podia ter um objetivo — e que ele tinha que ser viável. Qual único objetivo
viável, se cumprido, faria a maior diferença?**

Depois de uma manhã eles tinham dois. Não tão viáveis quanto ele gostaria, mas um grande passo à
frente da ambição vaga:

- Metade do grupo chegou a um objetivo óbvio e potencialmente pivotal: **colocar os alunos em
  empregos melhores.** O argumento: alunos com empregos melhores ficam mais felizes; o corpo
  docente fica mais feliz ensinando alunos mais felizes; ex-alunos doam mais; alunos melhores são
  atraídos; e mais recursos entram para financiar pesquisa e contratação.
- A outra metade preferia um objetivo de relações públicas: mais cobertura em revistas e jornais
  de negócio elevaria o perfil e traria resultados favoráveis.

**Ambos representavam posições fortes dentro de um campo de ação e ambos estavam grávidos de
opções para estratégia e ação futuras.** Rumelt elogiou os dois e pediu que os tornassem **ainda
mais próximos — mais parecidos com tarefas e menos com metas.** No fim do dia, o grupo tinha
combinado as duas ideias:

1. O objetivo primário da escola seria **colocar os alunos em empregos melhores.** Selecionariam
   **dez empresas-alvo** que deveriam estar contratando os formandos e não estavam. Comitês de
   docentes seriam criados para **estudar as práticas de recrutamento dessas empresas e criar
   programas que atendessem às necessidades e aos padrões delas.**
2. Em vez de estudos globais e sustentabilidade, a escola se comprometeria com **um novo curso de
   gestão de mídia** — programa que atrairia gente de mídia a visitar a escola, e se os alunos
   conseguissem empregos em mídia isso naturalmente elevaria o perfil.
3. **Duas das dez empresas-alvo seriam empresas de mídia.**

### Hierarquias de objetivos e a escada de competências

Em organizações de qualquer tamanho, objetivos próximos de alto nível criam metas para unidades
menores, que criam os próprios objetivos próximos, numa cascata de resolução de problemas em
níveis cada vez mais finos. **E objetivos próximos cascateiam também no tempo:** quando a Nestlé
comprou a Rowntree, a alta direção julgou que as competências transnacionais de marketing de
alimentos conseguiriam levar as marcas centradas na Grã-Bretanha para outros países. **Os
primeiros passos foram muito bem-sucedidos, e só então as gestões combinadas desenvolveram
objetivos mais sutis e matizados.**

Rumelt registra em rodapé o defeito óbvio do processo: **as pessoas nos andares de cima podem ter
ideias irrealistas sobre o que dá para fazer no chão.** A primeira melhor cura é que parte delas
tenha tido experiência de chão; a segunda é muita comunicação subindo e descendo a torre enquanto
a estratégia é montada; a terceira é mudar o objetivo quando houver evidência muito forte de que
não dá para alcançá-lo. **Mas essa terceira raramente acontece sem troca de liderança — e não é
só ego: é bom senso, porque se você tem a política de mudar de direção sempre que bate num
obstáculo, as pessoas que preferem outra direção ficarão felizes em criar os obstáculos
necessários.**

**O que é próximo para um pode estar fora de alcance para outro.** Rumelt afia isso numa conversa
com um ex-piloto de helicóptero. Ele puxa conversa dizendo que helicóptero deveria ser mais
seguro que avião, porque se o motor falha dá para autorrotacionar até o chão, como um paraquedas.

O piloto bufa: *se o seu motor falha você tem que puxar o coletivo todo para baixo, tirar o pé do
pedal esquerdo e pisar forte no direito para pegar torque. Você tem cerca de um segundo para
fazer isso antes de estar caindo rápido demais.* Pausa. *Dá para fazer, **mas é melhor você não
precisar pensar nisso.***

*Então tudo tem que ser automático?* — *Nem tudo. Quando um motor falha, você tem muita coisa
para resolver: precisa se concentrar em onde vai pousar e em manter uma trajetória de descida
lisa até o flare. Isso exige muita concentração. Mas o ato básico de controlar o helicóptero,
esse tem que ser automático. **Você não consegue se concentrar na crise se voar não for
automático.***

E ele expande: para voar um helicóptero você tem que coordenar constantemente coletivo, cíclico,
pedais e acelerador. Não é fácil de aprender, mas você tem que dominar e tornar automático se
quiser fazer mais do que decolar e pousar. **Depois que você sabe voar, aí você pode aprender a
voar à noite — mas não antes. Depois que você voa à noite com facilidade, talvez esteja pronto
para voar em formação, e depois em combate.** Domine tudo isso e você pode começar a pensar em
pousar numa montanha com vento forte no fim da tarde, ou no convés rolante de um navio no mar.

> **Concentrar-se num objetivo — torná-lo prioridade — necessariamente pressupõe que muitas
> outras coisas importantes já estão cuidadas.**
>
> **Habilidades de coordenação são como degraus de uma escada, com os degraus mais altos ao
> alcance só quando os de baixo foram atingidos. É isso que explica por que algumas organizações
> conseguem se concentrar em questões nas quais outras não conseguem.**

A aplicação que ele mesmo faz na consultoria: numa startup pequena, os problemas giram em torno
de coordenar engenharia, marketing e distribuição. **Pedir ao CEO dessa firma que se concentre em
abrir escritórios na Europa pode ser inútil, porque a empresa ainda não dominou o básico de
"voar" o negócio.** Firme naquele degrau, ela pode ir para fora. Mas pedir a essa firma
recém-internacionalizada que mova conhecimento pelo mundo como uma veterana global é igualmente
inútil: **ela precisa primeiro dominar a complexidade de operar em várias línguas e culturas.**

---

## 8. Sistemas de elos em cadeia (*chain-link systems*)

**Este é o capítulo mais importante do livro para a Altta**, e é o eixo que os dez caminhos
anteriores sobre foco não tinham. Ele é curto — talvez o mais curto do livro — e é o mais denso.

> **Um sistema tem lógica de elos em cadeia quando seu desempenho é limitado pela subunidade mais
> fraca, o "elo". Quando existe um elo fraco, a corrente não fica mais forte porque você
> fortaleceu os outros elos.**

O caso de abertura é o ônibus espacial Challenger, cujo elo mais fraco era um anel de vedação de
borracha. Em 28 de janeiro de 1986 ele falhou; gás quente cortou a estrutura; o foguete explodiu.
**Se uma corrente não pode falhar, não adianta fortalecer apenas alguns elos.** Não haveria ganho
nenhum em tornar os motores auxiliares mais fortes se o anel era fraco. Não adiantava melhorar
guiagem, comunicações ou a qualidade do treinamento da tripulação se o anel era fraco.

**Quando qualidade importa:** a lógica da corrente opera em situações em que **a qualidade dos
componentes importa e a quantidade não é substituto adequado.** Se uma empreiteira descobre que o
caminhão de duas toneladas dela está em outra obra, ela pode facilmente substituir por dois
caminhões de uma tonelada para carregar aterro. **Por outro lado, se um chef três estrelas fica
doente, nenhum número de cozinheiros de lanchonete é substituto adequado.** Cem cantores
medíocres não equivalem a um cantor de primeira linha. **E — isso é diretamente aplicável a
educação — manter crianças horas ou semanas a mais em escolas quebradas, escolas que não
conseguem nem educar nem controlar o comportamento, não ajuda e provavelmente aumenta o
ressentimento e a desconfiança.**

**Fatores limitantes.** Conversando com corretores e empreiteiros sobre reforma de casas, Rumelt
aprendeu que ao avaliar o potencial de um imóvel deve-se identificar os fatores limitantes. Se a
casa é perto de uma rodovia barulhenta, isso é um fator limitante: **não importa quanto mármore
você ponha nos banheiros ou quão fina seja a marcenaria da cozinha, o barulho vai limitar o valor
da casa.** Da mesma forma, se um cômodo tem piso de madeira maravilhoso e arquitetura clássica,
uma pintura menos que excelente vai limitar a atratividade dele. Como investidor, você quer
achar **fatores limitantes que podem ser consertados, como a pintura — não fatores que não podem,
como o barulho da rodovia.** E se você tem habilidade ou insight especial em remover fatores
limitantes, pode ser muito bem-sucedido.

### Ficar travado — e por que a melhoria incremental piora as coisas

Este é o mecanismo, e é o que faz o capítulo valer.

Há partes de organizações, e até de economias, que são encadeadas. **Quando cada elo é gerido
separadamente, o sistema pode ficar travado num estado de baixa eficácia.** O problema surge por
**casamento de qualidade** (*quality matching*): se você é responsável por um elo da corrente,
**não há sentido em investir recursos para melhorar o seu elo se os gestores dos outros elos não
estiverem fazendo o mesmo.**

E aqui está o golpe:

> **Buscar qualidade maior em apenas uma das unidades encadeadas pode piorar as coisas.**
> Qualidade maior numa unidade exige investimento em recursos melhores e insumos mais caros,
> inclusive pessoas. Como esses esforços de melhorar apenas uma unidade **não melhoram o
> desempenho geral do sistema encadeado, o lucro total do sistema de fato cai.** Assim, o
> incentivo a melhorar cada unidade fica embotado.

**General Motors, 1980–2008.** Os vários problemas da empresa tinham fortes características de
elo em cadeia. Aumentar a qualidade de uma transmissão automotiva adianta pouco se as maçanetas
caem do painel e os revestimentos de porta continuam chacoalhando. Melhorar acabamento e trem de
força pode oferecer pouca melhoria geral enquanto os projetistas continuarem produzindo designs
pedestres. Melhorar a aparência dos automóveis pode apenas aumentar custo, a menos que a
tecnologia complexa de projeto para manufatura seja dominada. E assim por diante.

**Desenvolvimento econômico.** Muitos dos problemas espinhosos de desenvolvimento vêm de questões
encadeadas, e a lista de Rumelt é a ilustração mais límpida do conceito no livro inteiro:

- É de pouca utilidade fornecer maquinário avançado a trabalhadores sem qualificação — **mas
  também é inútil educar pessoas para empregos que não existem.**
- A burocracia estatal pode ser um fardo terrível, **mas a melhoria na eficácia dela só pode ser
  conquistada se houver um setor privado eficiente.**
- Sem corrupção seria impossível contornar a burocracia sufocante, **mas a burocracia é um
  contrapeso necessário ao nepotismo e a uma cultura de corrupção.**
- Melhorar as estradas coloca pressão sobre portos precários, e portos melhores sem boas estradas
  valem pouco. **Melhore os dois, e funcionários corruptos e sindicatos vão exigir pagamento para
  deixar os carregamentos passarem.**

E problemas de política com lógica de elos não se restringem ao mundo em desenvolvimento: centros
urbanos disfuncionais, escolas decadentes e sistemas prisionais que institucionalizam gangues
raciais, violência e agressão sexual podem cada um ser submetido a uma análise de elos. O
Departamento de Segurança Interna americano reforçou a inspeção de passaportes em aeroportos —
prática de alta visibilidade que pode ter pouco retorno total enquanto mais de seis mil
quilômetros de fronteira e outro tanto de costa permanecerem virtualmente descontrolados.
**Parar dois em cada três ataques radiológicos não será bom o suficiente.**

### Destravar: o caso Marco Tinelli, e é o único roteiro do livro

Marco Tinelli é o gerente-geral de uma empresa de máquinas na Lombardia, nos arredores de Milão.
Em 1997, num almoço, ele explicou a virada da empresa da família:

> *Quando meu tio faleceu, a responsabilidade pela empresa passou para mim. As coisas não iam
> bem. **A qualidade das máquinas tinha caído, especialmente em comparação com os melhores
> concorrentes. Os custos eram altos demais e o pessoal de vendas não era tecnicamente
> sofisticado.** Para vender uma máquina sofisticada com controles por microprocessador é preciso
> um vendedor sofisticado. Se a gente não mudasse, iria lentamente à falência. **Mas parecia que
> tudo tinha que mudar. Por onde começar?***

O diagnóstico de Rumelt, ouvindo: a empresa tinha lógica de elos em cadeia **e estava travada.**
Qualquer ganho de máquinas de melhor qualidade era diluído porque a força de vendas não conseguia
representar com precisão as qualidades e o desempenho delas. Uma força de vendas melhor, sozinha,
teria agregado pouco valor sem máquinas melhores. E melhorias em qualidade e vendas não salvariam
a firma a menos que os custos fossem reduzidos.

A resposta de Marco à pergunta "por onde você começou?":

> *Conduzi **três campanhas, uma depois da outra.** Na primeira campanha gastamos doze meses só
> em qualidade. Eu disse aos funcionários que **tudo o que fizéssemos no ano seguinte seria para
> tornar nossas máquinas as melhores do setor**, as mais confiáveis e as mais rápidas.*
>
> *Uma vez com máquinas de boa qualidade, **foquei inteiramente na função de vendas.** O pessoal
> de vendas tinha participado da campanha de qualidade, e agora os engenheiros e o pessoal de
> manufatura trabalharam com vendas para construir competências, ferramentas de venda e canais de
> comunicação de volta para a fábrica. **Os resultados de mercado demoraram a vir, mas eu sabia
> que a gente tinha que fazer esses investimentos primeiro para colher benefícios depois.***

Rumelt destaca que, se a pessoa não internalizou o conceito de casamento de qualidade e o
problema da mudança em sistemas encadeados, **a explicação do Marco parece banal** — ele
identificou três problemas e trabalhou neles em sequência. Mas com os conceitos na mão, a
declaração fica densa de significado:

1. **O primeiro problema lógico em situações encadeadas é identificar os gargalos**, e Marco fez
   isso — qualidade, competência técnica de vendas, custo.
2. **O segundo, e maior, problema é que a mudança incremental pode não ter retorno e pode até
   piorar as coisas. É por isso que sistemas ficam travados.** A solução de Marco foi **assumir
   pessoalmente a responsabilidade pelo resultado final** e direcionar a atenção dos outros aos
   três gargalos, um depois do outro. Não houve retorno imediato da primeira campanha, mas ele
   não parou, **nem operou um sistema que jogasse culpa nos gerentes de departamento.** Em vez
   disso, parabenizou-os por atingir a meta próxima da primeira campanha e passou à segunda.
3. **Há pouco ou nenhum retorno a melhorias incrementais em sistemas encadeados, mas Marco evitou
   esse problema desligando o sistema normal de medição e recompensa locais, e refocando na
   própria mudança como o objetivo.**

**O que Marco NÃO disse** — e Rumelt insiste que uma das tarefas do entrevistador é escutar o que
não foi dito:

- Ele **não** disse "a gente virou o jogo aumentando a pressão por lucro".
- Ele **não** disse "a gente desenvolveu novas medidas de qualidade e exigiu melhorias".
- Ele **não** disse "eu trouxe gerentes novos e mais qualificados".

Em vez disso, ele descreveu uma virada em que **forneceu a definição geral do que tinha que ser
feito e em que antecipou e absorveu os custos da mudança.** Em qualquer organização há uma tensão
gerida entre a necessidade de ação autônoma descentralizada e a necessidade de direção e
coordenação centralizadas. **Para produzir a virada de um sistema encadeado, Marco Tinelli
inclinou o equilíbrio, ao menos por um tempo, fortemente para a direção e a coordenação
centrais.**

**A terceira campanha, e por que ela veio por último**, é a parte mais sofisticada:

> *Finalmente, passamos nove meses trabalhando só em custo. Não havia nenhuma outra meta nessa
> terceira campanha. **Deixei o corte de custo para o fim porque eu queria que a campanha de
> redução de custo trabalhasse com, mas não definisse, o tipo de máquina que a gente constrói.**
> Para reduzir custo, revisamos cada componente e cada passo do processo de manufatura. As
> grandes melhorias vieram de **cortar dois produtos da linha** e de **trazer para dentro
> ferramentas e matrizes que a gente comprava de outras empresas.** Fazendo nossas próprias
> matrizes, aumentamos a velocidade das máquinas e assim aumentamos o valor delas para os
> clientes. **O preço da máquina não caiu, mas o custo para o usuário caiu.** Foi preciso um time
> sofisticado de engenharia de vendas para passar esse ponto aos clientes, o que foi outra razão
> para deixar esse tipo de redução de custo como o último passo.*

> **Sistemas encadeados podem ser mudados e tornados excelentes. Exige insight sobre os gargalos
> principais. E exige liderança e disposição de absorver perdas de curto prazo em busca de ganhos
> futuros** — no caso, ele pessoalmente assumiu a responsabilidade pelos custos da mudança e
> tocou em frente, guiado pelo estado final a ser alcançado em vez de pelo lucro mensal ou
> trimestral.

### O outro lado da mesma moeda: excelência que ninguém copia

**IKEA.** A empresa projeta móveis para montar, vendidos em lojas próprias e anunciados por
catálogos próprios. Lojas gigantes em subúrbios permitem seleção enorme e estacionamento amplo.
Nas lojas, **os catálogos substituem essencialmente a força de vendas.** Os designs de embalagem
plana não só reduzem custo de transporte e armazenagem; eles ajudam a manter as lojas abastecidas
e deixam o cliente **puxar o próprio estoque e levar a compra para casa, eliminando longas esperas
por entrega.** A empresa projeta boa parte dos móveis que vende, terceiriza a manufatura, e
**gerencia o próprio sistema mundial de logística.**

A estratégia é uma forma eficaz de coordenar políticas, **mas não é segredo nenhum. Por que os
outros não copiam, ou melhoram?** A explicação da excelência continuada e da ausência de
concorrência "eu também" é que **a estratégia se apoia em lógica de elos em cadeia.** A
coordenação hábil de políticas da IKEA é um design mais integrado do que o de qualquer outro no
setor de móveis: varejistas tradicionais não carregam estoque grande, fabricantes tradicionais não
têm lojas próprias, varejistas normais não especificam os próprios designs nem usam catálogo em
vez de vendedores, e assim por diante. **Porque as muitas políticas da IKEA são diferentes da
norma e porque se encaixam num design coerente, o sistema tem lógica de elos.** Isso significa que
**adotar apenas uma dessas políticas não adianta nada — acrescenta despesa ao negócio do
concorrente sem fornecer concorrência real.** Ajustes menores não bastam: para competir de fato,
um rival existente teria virtualmente que começar do zero e, na prática, **competir com o próprio
negócio existente.** Ninguém fez. Mais de cinquenta anos depois, ninguém replicou de verdade.

**As três condições para que um conjunto de políticas seja fonte de excelência competitiva
sustentada:**

1. **A empresa precisa executar cada uma das atividades centrais com eficiência e eficácia
   excepcionais.**
2. **Essas atividades centrais precisam ser suficientemente encadeadas para que um rival não
   consiga arrancar negócio adotando apenas uma delas e executando-a bem.** Um fabricante
   tradicional de móveis que acrescenta uma linha para montar não é ameaça real; um varejista
   tradicional que acrescenta um catálogo, também não.
3. **As atividades encadeadas devem formar um agrupamento incomum, tal que a expertise em uma não
   se transfira facilmente para as outras.** Um varejista tradicional que acrescentasse catálogo
   ainda teria que dominar design e logística e construir lojas muito maiores para começar a
   competir. E, olhando além das empresas tradicionais de móveis, **não há concorrentes potenciais
   que possuam essa mistura de recursos e competências.**

> **Ao construir vantagem estratégica sustentada, líderes talentosos buscam criar constelações de
> atividades que sejam encadeadas.** Isso acrescenta eficácia extra à estratégia e torna a
> imitação competitiva difícil.
>
> **O fascinante é que tanto a excelência quanto o estar travado são reflexos da mesma lógica de
> elos em cadeia.** Na excelência, uma série de atividades encadeadas é mantida toda em nível
> alto de qualidade, cada uma se beneficiando da qualidade da outra e o conjunto resistindo à
> imitação fácil. Do outro lado, quando uma série de atividades encadeadas é de baixa qualidade,
> o sistema fica travado, porque há pouco ganho em melhorar apenas uma fração das atividades.

---

## 9. Design

Rumelt abre com uma ressalva importante para quem lê metáfora militar sem filtro. A palavra
"estratégia" vem de assuntos militares, e infelizmente os humanos investiram mais esforço, por
mais tempo, pensando sobre guerra do que sobre qualquer outro assunto — **mas boa parte desse
conhecimento tem muito pouco a dizer sobre estratégia em situações não militares.** As diferenças
que ele lista:

- A forma primária de as empresas competirem é **colocar suas ofertas diante dos compradores, cada
  uma tentando oferecer um negócio mais atraente. Isso é mais parecido com um concurso de dança
  do que com uma batalha militar.**
- Empresas não bombardeiam as fábricas umas das outras nem matam os funcionários umas das outras.
- Funcionários podem pedir demissão a qualquer momento; soldados são obrigados. Não se espera que
  funcionários fiquem firmes e deem a vida para proteger a empresa.
- **O impacto do tamanho é radicalmente diferente.** Tudo o mais constante, o exército maior tem a
  vantagem; já a empresa vencedora tende a ser aquela cujas ofertas são as mais preferidas pelos
  clientes, e **o tamanho dela é mais consequência do que causa do sucesso.**

Com essas cautelas, **e sendo cuidadoso com o nível de abstração**, ele acha que dá para tirar
lições fundamentais da história militar.

### Canas, 216 a.C. — os três aspectos do design em estado puro

O exemplo clássico de design em estratégia de batalha é a vitória de Aníbal sobre o exército
romano em Canas. Roma controlava territórios e cidades-Estado na Itália; Cartago era uma
cidade-Estado fenícia no que hoje é a Tunísia, que tinha perdido uma guerra para Roma cinquenta
anos antes. Buscando restaurar o poder e a honra de Cartago, Aníbal levou um exército pela
Espanha, atravessou a Gália e cruzou os Alpes para a Itália, onde saqueou cidades de norte a sul
buscando termos favoráveis de Roma. Cansado da política de evitar batalha campal, o senado
romano escolheu os cônsules Varro e Paullus e lhes deu oito legiões, número sem precedentes.

Na manhã de 2 de agosto, oitenta e cinco mil ou mais soldados romanos enfrentavam cerca de
cinquenta e cinco mil de Aníbal. A frente de cada exército tinha cerca de um quilômetro e meio, e
os dois estavam a menos de um quilômetro de distância. **Aníbal dispôs as tropas num arco largo,
com o centro projetado para fora, na direção dos romanos.** Nesse centro projetado ele colocou
tropas da Espanha e da Gália — soldados libertados do domínio romano ou contratados durante a
marcha. **Nos flancos desse arco central ele colocou a infantaria pesada cartaginesa.**

Quando os romanos avançaram, o centro arqueado de Aníbal foi o primeiro ponto de contato. Ali, os
gauleses e espanhóis **recuaram lentamente, sem segurar a linha, exatamente como Aníbal tinha
ordenado.** Encorajado, o exército romano avançou com gritos de vitória, correndo para explorar
aquela aparente fraqueza. **Simultaneamente, a cavalaria de Aníbal, posicionada nas laterais,
iniciou o galope preplanejado em arcos amplos** ao redor dos flancos romanos, engajando e
derrotando a cavalaria romana menor.

Conforme as legiões avançavam para dentro do centro cartaginês, o arco original se inverteu e
começou a curvar para dentro sob a pressão. Enquanto o centro curvava, **as unidades de infantaria
pesada nas duas pontas mantiveram posição e não engajaram.** Então, ao sinal de Aníbal, reforços
foram para o centro curvado, as tropas pararam de recuar e seguraram, e **a aparência delas mudou
de bárbaros em pânico para tropas duras e disciplinadas.** Aí a infantaria pesada dos flancos
avançou contra as laterais do exército romano, que ficou cercado por três lados. Então a cavalaria
voltou por trás e fechou a retaguarda.

**O gênio impiedoso do design se revelou aí.** Não só o exército romano estava cercado: **conforme
o número superior deles pressionava para dentro do arco encurvado, as fileiras romanas foram
espremidas.** Ficaram tão apertados que muitos soldados não conseguiam mover-se para levantar as
armas. **Os romanos perderam coerência e mobilidade. Cercados e comprimidos, a superioridade
numérica deles foi anulada.**

Os homens no centro daquela massa comprimida esperaram a morte, imóveis. Pelo menos cinquenta mil
soldados romanos morreram naquele dia — mais soldados do que em qualquer outro único dia de
batalha, antes ou depois; mais naquele dia do que em Gettysburg ou no Somme. Morreu um décimo
desse número de tropas de Aníbal. Entre os mortos romanos estavam o cônsul Paullus, vários
ex-cônsules, quarenta e oito tribunos e oitenta senadores — **em poucas horas, um quarto da
liderança eleita da República foi massacrado.**

Rumelt oferece a tradução de escala: imagine que em 1944 o exército alemão destruísse totalmente
todas as forças aliadas na Europa, que um quarto do Congresso americano tivesse sido morto, e que
Rússia, norte e leste da Europa virassem aliados da Alemanha.

**Os três aspectos que aparecem em Canas em relevo, na forma mais pura e essencial:**

**1. Premeditação.** Canas não foi improvisação; foi desenhada e planejada com antecedência.
Aníbal executou estratégias coreografadas assim não apenas uma vez, mas muitas vezes nos anos de
guerra com Roma. Há debates furiosos sobre o melhor equilíbrio, numa estratégia, entre orientação
prévia e adaptação e improviso no momento — **mas sempre existe alguma forma de orientação prévia.
Por definição, improvisar não é estratégia.**

**2. Antecipação.** Um ingrediente fundamental de uma estratégia é um julgamento ou uma
antecipação sobre os pensamentos e/ou o comportamento dos outros. **A leitura simples de Canas é
que Aníbal cercou os romanos. Isso é incompleto, porque as legiões romanas eram a infantaria mais
móvel daquele campo. Na verdade, as legiões foram *atraídas* a se deixar cercar, atraídas para uma
armadilha, com a própria mobilidade, coragem e iniciativa voltadas contra elas. A essência de
Canas é que as barras da armadilha — a compressão das fileiras — foram forjadas, em parte, pelas
respostas vigorosas dos próprios romanos aos engodos de Aníbal.**

Na teoria dos jogos, presume-se que o oponente é tão racional quanto você. **Aníbal claramente não
fez essa presunção.** Por mais individualmente racionais que os romanos fossem, ele via o exército
romano como uma organização com história, tradições, doutrina e treinamento padronizado. E os
líderes dessa organização tinham motivações e vieses identificáveis: o cônsul Varro, por exemplo,
era conhecido por ser orgulhoso e um pouco impetuoso. Aníbal sabia dessas coisas porque Cartago
tinha lutado com Roma dez anos antes e passado a entender o sistema militar romano; ele era filho
de família militar, altamente educado, e tinha escrito vários livros em grego e púnico. **Além
disso, parte do comportamento romano em Canas era previsível porque Aníbal trabalhou para
moldá-lo, atacando o acampamento de Varro na noite anterior, irritando e envergonhando o cônsul
diante das tropas, empurrando-o a buscar batalha imediata.** E, por fim, elementos do
comportamento romano eram previsíveis porque a batalha se desenvolveu rapidamente, dando aos
romanos pouco tempo para estudar a situação e nenhum tempo para aprender lições novas e alterar
métodos.

**3. Design de ação coordenada.** A estratégia de Aníbal foi uma construção espantosamente hábil
de ações coordenadas orquestradas no tempo e no espaço. Em 216 a.C. a fórmula fundamental do
sucesso militar era razoavelmente básica: manter formação, manter disciplina, e impedir que as
tropas entrassem em pânico e corressem. **Portanto, quando um romano via o inimigo recuar, aquilo
parecia vitória. A ideia de que um comandante pudesse convencer gauleses e espanhóis belicosos a
encenar um recuo falso era quase impensável.** Além disso, o padrão normal na batalha antiga era
que a cavalaria, depois de derrotar a cavalaria adversária, perseguisse cavaleiros e soldados em
fuga; **não se esperava que ela se reagrupasse e atacasse o corpo principal da infantaria.** A
competência e a disciplina do exército cartaginês em executar uma série complexa de movimentos por
unidades fisicamente separadas, agindo em coesão preplanejada em torno de um design central, foi
a surpresa. **Nenhum exército antes do de Aníbal tinha executado movimentos múltiplos coreografados
assim no tempo e no espaço.**

### Estratégia é mais desenho do que decisão

> Diz-se com frequência que uma estratégia é uma escolha ou uma decisão. As palavras "escolha" e
> "decisão" evocam a imagem de alguém considerando uma lista de alternativas e selecionando uma.
> Existe até uma teoria formal de decisão que especifica exatamente como fazer uma escolha,
> identificando ações alternativas, valorando resultados e avaliando probabilidades. **O problema
> dessa visão, e a razão pela qual ela mal alivia o fardo do líder, é que raramente lhe entregam
> um conjunto claro de alternativas.**
>
> Aníbal certamente não recebeu um briefing de estado-maior com quatro opções arrumadas num
> slide. **Ele enfrentou um desafio e desenhou uma resposta nova.** Hoje, como então, muitas
> estratégias eficazes são mais desenhos do que decisões — **são mais construídas do que
> escolhidas.** Nesses casos, fazer estratégia é mais parecido com projetar um avião de alto
> desempenho do que com decidir qual empilhadeira comprar ou de que tamanho construir uma fábrica
> nova.
>
> **Quando alguém diz "gerentes são tomadores de decisão", não está falando de mestres
> estrategistas, porque um mestre estrategista é um projetista.**

### As partes de um todo — o BMW e o "sorriso por dólar"

Estratégia de negócio e corporativa lida com problemas de design em larga escala. **Quanto maior
o desafio, ou quanto maior o desempenho buscado, mais interações precisam ser consideradas.**

Pense no que é preciso para dar a um BMK Série 3 aquela sensação de "máquina de dirigir".
Chassi, direção, suspensão, motor e controles hidráulicos e elétricos precisam estar todos
sintonizados uns aos outros. **Você pode fazer um carro com peças de prateleira de alta
qualidade, mas ele não será uma "máquina de dirigir".** Nesse tipo de caso há um ganho agudo em
coordenar cuidadosamente as partes num todo.

O exercício mental que Rumelt propõe: forme a imagem da motorista fazendo curvas numa estrada de
montanha. Olhe o rosto dela e imagine sentir o prazer ou o desprazer dela com o automóvel. Agora
comece a variar o design. Faça o carro maior, mais silencioso, um pouco menos responsivo mas mais
potente, mais pesado. Agora mais leve, mais rápido, mais responsivo. **Para isso você tem que
mudar chassi, peso e torque do motor, suspensão, conjunto de direção e mais.** Ele vai balançar
menos e grudar na estrada; o volante vai dar mais retorno tátil. Agora ajuste o chassi: mais
rígido para amortecer torção longitudinal, e amoleça um pouco a suspensão dianteira para reduzir
choque de pista. **Variando quarenta ou cinquenta parâmetros, você acaba achando um ponto doce,
onde tudo funciona junto.** Ela vai sorrir e gostar do carro.

**Mas há mais.** O prazer de dirigir dela depende do preço pago, então começamos a incluir custo
no design. **Concentramo-nos no sorriso por dólar.** Muito mais interações têm que ser
consideradas para achar o ponto doce que dá o maior sorriso por dólar. Você não consegue
pesquisar o espaço inteiro de possibilidades; é complexo demais. Mas provavelmente consegue, com
esforço, produzir uma boa configuração. Para ficar mais sofisticado, você deve incluir também o
prazer que ela tem em comprar uma marca premium, sustentada por publicidade de imagem e
concessionárias chiques; e a experiência de compra dela, e a confiabilidade e o valor de revenda
esperados. Mais elementos a ajustar, mais interações. E aí, claro, você deve considerar outras
motoristas com outros gostos e rendas — um salto enorme de complexidade.

**Esse exercício difícil era design. Mas ao buscar o melhor sorriso por dólar, tomamos uma visão
de monopólio.** Sim, fomos além do produto para incluir manufatura e distribuição no design, mas
a estratégia foi sintonizada para agradar o cliente, não para lidar com a concorrência. **Para
lidar com a concorrência, expanda a visão de novo para incluir as outras montadoras. Agora você
procura um ponto doce competitivo.** Você tem que ajustar o design — a estratégia — para pôr mais
sorriso por dólar no rosto de uma motorista do que ela consegue obter de produtos concorrentes.
E essa motorista pode não ser a jovem que imaginamos primeiro: outra firma pode atender melhor às
demandas dela, então **uma questão crítica passa a ser a identificação do conjunto particular de
compradores — o mercado-alvo — onde temos vantagem diferencial.** Estratégia competitiva continua
sendo design, mas agora há mais parâmetros — as ofertas e estratégias dos rivais. **E muito
rapidamente você vai se concentrar no que a sua empresa faz mais efetivamente que as outras.
Normalmente vai acabar que a concorrência te obriga a focar num subconjunto muito menor de
modelos, montagens e clientes.**

> Descrevo estratégia como **design**, e não como plano ou escolha, porque quero enfatizar a
> questão do **ajuste mútuo**. Em problemas de design, onde vários elementos precisam ser
> arranjados, ajustados e coordenados, **pode haver ganhos agudamente concentrados em acertar as
> combinações, e custos agudos em errá-las.** Uma boa estratégia coordena políticas entre
> atividades para focar o soco competitivo.

### O Voyager e o trade-off entre recursos e integração

Rumelt descobriu a disciplina do design no primeiro emprego depois da faculdade, como engenheiro
de sistemas no JPL, fazendo o projeto conceitual de uma missão a Júpiter que mais tarde se
chamaria Voyager. O JPL era organizado em torno dos subsistemas de uma nave — comunicações,
energia, estruturas, controle de atitude, computação e sequenciamento. Ele estava na divisão de
sistemas, onde o trabalho era a arquitetura geral da nave e a coordenação entre as especificações
de todos os subsistemas.

**A restrição básica era peso.** Esperava-se que um foguete Titan IIIC lançasse cerca de 550 kg
numa trajetória a Júpiter; com o Saturn 1B maior, daria para planejar 1.360 kg. Ao longo de um
ano ele esboçou dois projetos, cada um uma configuração diferente baseada num orçamento de peso
diferente.

**Com 1.360 kg, o trabalho de design era relativamente fácil**: dava essencialmente para parafusar
juntos subsistemas razoavelmente bem compreendidos, e as divisões não precisariam coordenar muito
porque o desafio de projeto era relativamente baixo. **Com apenas 550 kg, as coisas eram mais
difíceis, e as interações passavam a ter papel grande.**

A maior parte do trabalho em projeto de sistemas é descobrir as interações, ou trade-offs. **No
momento em que você tentava otimizar uma parte, aquela escolha imediatamente criava problemas
para outras partes.** Cortar o peso da unidade de energia térmica radioativa significava menos
energia para o rádio, limitando-o a uns 35 watts. Para compensar o rádio de baixa potência, dava
para tentar uma antena parabólica mais focada e buscar maior precisão em apontá-la para a Terra —
**o que exigia sensores melhores, lógica de controle mais complexa e mais combustível para
controle de atitude.** Tente cortar a blindagem colocando a fonte radioativa numa haste mais
longa, e você descobre que a haste balança, tornando a guiagem mais difícil.

Cada parte do sistema tinha que ser reconsiderada e moldada às necessidades do resto. Muito
esforço ia para criar configurações engenhosas que evitassem duplicação: **se um único dispositivo
pudesse cumprir múltiplas funções — servindo de escudo contra luz solar e micrometeoritos e
também de recipiente para propelente —, ganhava-se peso.** Da mesma forma, buscavam-se maneiras
de mitigar a competição entre subsistemas por energia elétrica pelo **timing engenhoso das
operações.**

Nada do que ele tinha aprendido em engenharia o preparou para esse tipo de problema. Na faculdade
tinha aprendido a modelar sistemas matematicamente e minimizar alguma coisa, como custo ou erro
quadrático. **Mas o trabalho no JPL era diferente: ele tinha que aprender o suficiente sobre todos
os subsistemas e sobre as interações possíveis entre eles, e segurar tudo isso na cabeça ao mesmo
tempo, para conseguir imaginar uma configuração que pudesse ser eficaz.** Sem saber, estava
começando a aprender estratégia.

**O trade-off, que é a formulação central do capítulo:**

> **Uma estratégia do tipo design é uma configuração hábil de recursos e ações que produz vantagem
> numa situação desafiadora.** Dado um pacote fixo de recursos, **quanto maior o desafio
> competitivo, maior a necessidade de integração engenhosa e apertada de recursos e ações.** Dado
> um nível fixo de desafio, **recursos de qualidade mais alta reduzem a necessidade de integração
> apertada.**

Em outras palavras: **recursos e coordenação apertada são substitutos parciais um do outro.** Se a
organização tem poucos recursos, o desafio só pode ser enfrentado com integração engenhosa e
apertada. Se há mais recursos disponíveis, menos integração apertada pode bastar.

E, implícito nesses princípios, **a integração apertada tem um custo.** Um design mais
apertadamente integrado é mais difícil de criar, mais estreito em foco, mais frágil em uso e menos
flexível para responder a mudanças. **Um carro de Fórmula 1 é um design apertadamente integrado e
é mais rápido na pista que um SUV — mas o SUV, menos integrado, é útil para uma gama muito mais
ampla de propósitos.** Quando o desafio competitivo é muito alto, pode ser necessário aceitar
esses custos e projetar uma resposta apertadamente integrada. **Com menos desafio, normalmente é
melhor ter um pouco menos de especialização e integração, para poder endereçar um mercado mais
amplo.**

### O arco da empresa — por que o sucesso produz frouxidão

Empresas compram picapes, equipamento de escritório, fresadoras e equipamento de processamento
químico, e contratam serviços de armazenagem, massas de formandos de ensino médio e superior,
advogados e contadores. **Nenhum desses insumos é normalmente um recurso estratégico**, porque os
concorrentes têm acesso a ativos e serviços virtualmente idênticos nas mesmas condições.

> **Um recurso estratégico é um tipo de propriedade razoavelmente duradoura que foi construída,
> desenvolvida ao longo do tempo, projetada ou descoberta por uma empresa, e que os concorrentes
> não conseguem duplicar sem sofrer perda econômica líquida.**

**Xerox.** Um recurso estratégico de alta qualidade que produz vantagem competitiva poderosa
permite grande simplicidade estratégica. Em meados dos anos 1950 as patentes de cópia em papel
comum eram sólidas, e ficou claro que os compradores pagariam três mil dólares ou mais por uma
máquina que custava uns setecentos para fabricar. **Dada essa vantagem grande e protegida, a Xerox
fez o óbvio: fabricou e vendeu máquinas Xerox.** Construiu fábricas, produziu copiadoras, montou
redes de venda e assistência. Não sofreu concorrência significativa das velhas empresas de cópia
por processo úmido. **Produzia documentos chamados de "planos estratégicos", mas eram meramente
projeções financeiras.** O desafio dela era baixo. Não precisava de muita estratégia do tipo
design, porque a posição de recurso — a patente — a isolava da concorrência, e porque o valor do
produto para o comprador era muito maior que o custo de fazê-lo. Um gerente sênior contou a
Rumelt em 1977: *a fábrica vendia as máquinas para a divisão de vendas a um preço de transferência
que era o dobro do custo total de produção. Aí a divisão de vendas dobrava ou triplicava esse
preço de transferência para definir o preço ao cliente.*

**A analogia que estrutura o resto:** recursos estão para atividade coordenada assim como capital
está para trabalho. É preciso muito trabalho para construir uma represa, mas depois os serviços da
represa ficam disponíveis, por um tempo, sem mais trabalho. Da mesma forma, a posição de recurso
poderosa da Xerox foi o resultado acumulado de anos de atividade inventiva, focada e coordenada — e,
como uma represa, uma vez alcançada, persistiu por muitos anos.

**Então: uma posição de recurso forte pode dispensar a necessidade de estratégia sofisticada.** Se,
em vez disso, há apenas uma posição moderada — talvez uma ideia de produto nova ou um
relacionamento com cliente —, o desafio é construir uma estratégia sensata e coerente em torno
daquele recurso. **E as estratégias mais engenhosas, as que a gente estuda ao longo dos anos,
começam com pouquíssimos recursos estratégicos, obtendo seus resultados pela coordenação hábil de
ações no tempo e entre funções.**

**O perigo de uma posição de recurso potente é que o sucesso passa a chegar sem trabalho contínuo
de estratégia.** Tenha a patente original da copiadora em papel comum, ou a marca Hershey's, ou a
franquia do Windows, ou a patente do Lipitor, **e haverá muitos anos durante os quais os lucros
entrarão quase independentemente de como você arranja a lógica do seu negócio.** Sim, houve gênio
inventivo na criação desses recursos — mas os lucros deles podem ser sustentados, por um tempo,
sem gênio nenhum.

**Recursos existentes podem ser a alavanca para a criação de recursos novos, mas também podem ser
impedimento à inovação.** Empresas bem lideradas precisam, de tempos em tempos, descartar recursos
velhos, assim como aposentam maquinário obsoleto. **Mas recursos estratégicos estão encravados
profundamente no tecido humano da empresa, e a maioria acha essa manobra difícil.**

**O erro específico da Xerox, e é um erro de encadeamento:** a empresa construiu um serviço de
reparo e manutenção de resposta rápida de classe mundial para cuidar da base instalada. **O recurso
inicial — a patente — foi usado para criar um recurso estratégico novo.** Mas o valor daquele
sistema de assistência estava em manter funcionando uma base de máquinas alugadas e propensas a
falhar. E o complemento dele era um negócio lucrativo de papel "especial" da marca Xerox, que
travava menos as copiadoras. **O próximo passo deveria ter sido construir uma capacidade de
manuseio de papel de classe mundial**, o que teria aberto a porta para uma posição precoce em
copiadoras pessoais, impressoras e aparelhos de fax. **Mas isso também teria reduzido o valor
imediato do recurso "sistema de assistência".** Descansando sobre os louros, a Xerox deixou Canon,
Kodak e IBM desenvolverem tecnologia superior de manuseio de papel, enquanto ela partia na busca
fútil de entrar no negócio de computadores com uma base de recursos especializada em manter
dispositivos mecânicos propensos a falhar.

> **Uma posição de recurso muito poderosa produz lucro sem grande esforço, e é da natureza humana
> que a vida fácil gere frouxidão. Também é da natureza humana associar o lucro atual às ações
> recentes, mesmo quando deveria ser evidente que a fartura de hoje é a colheita de estações de
> plantio há muito passadas.**
>
> Quando os lucros entram, os líderes apontam com orgulho para cada ação que tomaram. **Serão
> escritos livros recomendando que os outros adotem imediatamente o código de vestimenta da
> empresa bem-sucedida, a política de férias dela, a caixa de sugestões e o método de distribuir
> vagas de estacionamento. Essas conexões são, claro, espúrias.** Se houvesse conexões simples e
> diretas entre ação atual e resultado atual, estratégia seria muito mais fácil. Também seria
> muito menos interessante, **porque é justamente a desconexão entre resultado atual e ação atual
> que torna a análise das fontes do sucesso tão difícil e, no fim, tão recompensadora.**

**O arco trágico**, e a consequência prática de onde aprender:

Sucesso leva a frouxidão e inchaço, e estes levam ao declínio. Poucas organizações evitam esse
arco. **Mas é justamente essa trajetória razoavelmente previsível que abre a porta para os
novatos estratégicos.** Para ver estratégia do tipo design eficaz, normalmente é preciso **olhar
para longe do incumbente há muito bem-sucedido e na direção da empresa que invade efetivamente o
espaço de mercado dele.** Ali você vai achar um conjunto apertadamente construído e integrado de
ações e políticas: a Canon contornando as patentes da Xerox e criando um modelo de negócio
radicalmente novo baseado em cópia de mesa confiável, em vez de copiadoras centralizadas de alto
volume e alta velocidade; a jovem Microsoft superando a IBM; a jovem Wal-Mart superando a Kmart;
a jovem Dell tirando negócio de HP, Compaq e IBM; a FedEx empurrando de lado as transportadoras
aéreas tradicionais; a Enterprise competindo com Hertz e Avis com um modelo de negócio novo; a
Nvidia surgindo do nada para roubar a dominância do mercado de chips gráficos da Intel; e o Google
redefinindo o negócio de busca.

**Mas o mesmo arco se aplica a eles.** Com o tempo, a maioria vai afrouxar a integração apertada e
começar a depender mais de recursos acumulados e menos de design engenhoso. Confiando nos lucros
dos recursos acumulados, vão perder a disciplina da integração apertada, permitindo que feudos
independentes floresçam e acrescentando tantos produtos e projetos que a integração se torna
impossível. **Diante da desaceleração natural do crescimento com o tempo, vão tentar criar
aparência de vigor juvenil com aquisições parafusadas.** E quando a base de recursos finalmente
ficar obsoleta, eles também serão presa de outra geração de novatos.

> **É o ciclo da vida. A lição importante é que devemos aprender estratégia do tipo design com as
> primeiras conquistas de um novato, não com a pose da empresa madura.** Estude como Bill Gates
> superou a gigante IBM ou como a Nucor virou líder na indústria decadente do aço, e você aprende
> design. **Estude a Microsoft de hoje e você vê uma gigante madura, colhendo os benefícios de
> vitórias passadas, mas tão presa à base instalada e a um caldo rico de iniciativas e padrões
> conflitantes quanto era a IBM em 1985.**

### Paccar — ordem imposta ao caos

O exemplo de design coordenado num setor maduro e sem graça. No mercado americano de caminhões
pesados, a Daimler lidera com 38%; a Paccar é a segunda com 25%, seguida de Volvo (20%) e
Navistar (16%). **No meio de um setor de baixo crescimento, maduro e muito competitivo, a Paccar
entrega desempenho sólido: retorno sobre patrimônio médio de 16% nos vinte anos anteriores contra
12% dos concorrentes.** Mais importante ainda: **os lucros dela foram notavelmente estáveis num
setor assolado por oscilações fortes de demanda. A Paccar não teve prejuízo desde 1939**, e a
sequência continuou apesar da recessão de 2008–9.

**O elemento motor da estratégia é qualidade**, com as marcas Kenworth e Peterbilt amplamente
reconhecidas como os caminhões de maior qualidade feitos na América do Norte. **A empresa precifica
de acordo, mantendo posição forte de mercado apesar de preços premium.**

Como se vende um caminhão a preço premium? Em teoria é simples: seus caminhões têm que rodar melhor
e durar mais, de modo que o custo do dono para operar seja menor. **Operadores de frota olham
diferenças de fração de centavo por quilômetro na decisão de compra, e a oscilação de custo é
principalmente combustível e salários.** Se você compra um Kenworth de US$ 110 mil e roda 200 mil
km no ano, provavelmente vai pagar outros US$ 115 mil por ano em combustível, manutenção, reparo e
seguro — **e isso antes de salários e benefícios.** Por causa disso, a Kenworth foi pioneira em
cabines aerodinâmicas de baixo arrasto trinta anos antes, como forma de cortar custo de
combustível.

**Não é fácil manter liderança de qualidade, por três razões grandes:**

1. **Ninguém vai acreditar que você tem os caminhões mais duráveis até que eles já tenham durado
   muito tempo na estrada.** É reputação que demora a ser ganha e pode ser perdida rápido.
2. **Projetar uma máquina de altíssima qualidade não é problema de livro-texto.** Projetistas
   aprendem com outros projetistas ao longo do tempo, e a empresa acumula essas pepitas de sabedoria
   fornecendo um lugar bom e estável para engenheiros talentosos trabalharem.
3. **É normalmente muito difícil convencer compradores a pagar um prêmio adiantado por economia
   futura, mesmo quando os números são claros. As pessoas tendem a ser mais míopes do que a teoria
   econômica sugere.**

**O design da Paccar é o jeito dela de lidar com esses três obstáculos:**

- **O primeiro elemento é um deslocamento sutil**, deixando de ver qualidade puramente em termos de
  custo operacional. **A Paccar vê qualidade pelos olhos do motorista-proprietário.**
  Motoristas-proprietários aumentam o próprio ganho se esforçando mais, dirigindo dezesseis horas
  por dia ou mais. Eles se importam com eficiência, **mas olham além do custo por quilômetro,
  porque o caminhão é a casa, o escritório, a sala de estar e a sala de TV deles na estrada.** Além
  disso, os motoristas valorizam a sensação especial de estilo americano clássico — uma aura tipo
  Harley-Davidson — que se agarra às marcas da Paccar, mesmo com os interiores hoje tendo mais
  cara de Lexus.
- **Motoristas-proprietários compram de concessionários experientes** que usam telas 3-D para
  escolher entre centenas de opções de customização. **A Paccar constrói cada caminhão sob
  encomenda**, mantendo estoques baixos e usando uma rede de fornecedores para componentes e peças
  principais. Os caminhões são projetados com o maior número praticável de peças em comum.
- **O elo que fecha o design é sociológico, e é o mais engenhoso.** Operadores de frota não ligam
  muito para aura; ligam para rotatividade e tempo ocioso dos motoristas. Gerentes de frota
  descobrem que usando dois motoristas o tempo ocioso cai pela metade ou mais — **o que significa
  que um dos motoristas está dormindo ou descansando no compartimento-cama boa parte do tempo,
  levantando as mesmas preocupações de conforto que o motorista-proprietário tem.** E mais: **quando
  caminhoneiros se encontram numa parada, os motoristas-proprietários têm o status mais alto e a
  opinião deles pesa mais.** A beleza do posicionamento da Paccar é que, embora compradores de frota
  prestem mais atenção ao custo em dinheiro por quilômetro do que os motoristas-proprietários,
  **muitos são empurrados em algumas das mesmas direções pelas preferências dos motoristas deles.**

**A estratégia da Paccar se baseia em fazer uma coisa bem e consistentemente por um longo período,
e isso criou recursos difíceis de replicar:** a imagem, a rede de concessionários experientes, os
clientes leais e o conhecimento embutido no time de projetistas e engenheiros. **Esse tipo de
recurso de construção lenta simplesmente não está disponível para empresas hipnotizadas pelo
mercado acionário, que querem resultados grandes em doze meses.**

Uma abordagem flexível de manufatura torna os custos variáveis da Paccar mais altos que os dos
concorrentes, **mas fornece estabilidade aos projetistas e engenheiros dela.** E as margens
maiores criam uma rede de concessionários mais leal e dedicada. Tudo isso funciona, em parte,
porque **ela não está num setor de alto crescimento que atrairia grandes investimentos externos.**
Para atacá-la diretamente, um rival teria que criar marcas novas e designs novos e, muito
possivelmente, assinar com concessionários novos — **e o mercado de alto padrão não é grande o
bastante para justificar esse tipo de investimento.**

**O design se expressa em ações consistentes com o posicionamento e consistentes ao longo do
tempo.** A Paccar **não faz caminhões pequenos, só grandes. Dentro do segmento de caminhões
grandes, não faz caminhões econômicos mais baratos.** O foco produto-comprador é mantido pelos
concessionários, projetistas e engenheiros. **Porque ela não é diversificada, a conversa e o
conhecimento no estúdio de design, na manufatura e na sala executiva são sobre caminhoneiros e
caminhões pesados. Ela não precisa contratar uma consultoria para descobrir qual é a competência
central dela ou quem são os compradores dela.**

**O teste do Frankenstein**, que é uma ferramenta de auditoria prática: os vários elementos da
estratégia da Paccar não são de propósito geral — foram projetados para se encaixar e formar um
todo especializado. **O design fica mais claro se você imaginar uma montadora montada com pedaços
genéricos de várias empresas de caminhão, um monstro de Frankenstein: com designs de caminhão de
preço médio mirando compradores de frota, concessionários mirando motoristas-proprietários
exigentes, e engenheiros de projeto treinados para cortar custo até o osso — ela não duraria
muito.**

E o fecho, honesto sobre os limites: não há nada de mágico na estratégia da Paccar. **É
posicionamento clássico de "segurar o terreno alto".** Essa estrutura defensiva provavelmente pode
ser mantida enquanto não houver mudanças estruturais significativas na economia do setor ou no
comportamento do comprador. A concorrência do dia a dia é sempre importante, e a Paccar precisa
introduzir novas características e modelos, melhorar qualidade, reduzir custo e manter
flexibilidade. **Mas boa estratégia olha além dessas questões para o que é fundamental. Dessa
perspectiva, as ameaças à empresa não são produtos novos ou movimentos competitivos específicos, e
sim mudanças que solapem a lógica do design dela.** Se o tratado de livre comércio encorajar mais
embarcadores a usar caminhões mexicanos em vez de motoristas-proprietários americanos, a posição da
Paccar está em risco. Da mesma forma, **a venda computadorizada sofisticada introduzida nas
concessionárias pode ser necessária, mas há a preocupação de que ela solape a importância do
conhecimento e da expertise do concessionário** — que é um elo do design.

---

## 10. Foco

Este capítulo é, na prática, **um método de identificação de estratégia** — como descobrir qual é
a estratégia real de uma empresa quando nem ela mesma sabe enunciar. É diretamente aplicável a
análise de concorrente.

O caso é a Crown Cork & Seal, fabricante de latas metálicas, com a história levada até 1989. Os
objetivos declarados de Rumelt na aula são: (1) ensinar a identificar a estratégia de uma empresa,
(2) aprofundar a habilidade de analisar informação qualitativa, (3) explorar uma mistura
particular de política e posicionamento chamada **foco**.

A estratégia tinha sido construída no início dos anos 1960 por John Connelly, cuja gestão de punho
fechado tinha virado quase folclore nos negócios americanos, e a empresa era uma das favoritas de
um lendário gestor de fundo. Em trinta e cinco anos, tinha entregado retorno médio ao acionista de
19% ao ano — desempenho especialmente impressionante dada a competição intensa do setor.

### A resposta convencional, e por que ela não basta

O caso repete a sabedoria convencional: a Crown se especializava em recipientes para produtos
difíceis de conter, como aerossóis e refrigerantes gaseificados. **É verdade, mas a descrição não é
completa nem terrivelmente útil para entender como a Crown competia.** A maioria dos analistas para
aí, aceitando de bom grado essa descrição — **as pessoas não empurram mais fundo porque a análise
de informação não estruturada é trabalho duro e demorado, que exige tanto conhecimento rico de
fatos quanto habilidades bem desenvolvidas de lógica, dedução e indução.**

Rumelt começa pelo ambiente competitivo — **como os principais concorrentes ganham a vida.** Havia
três grandes fabricantes, e o caso diz que a maioria das empresas de bebida tinha pelo menos duas
fontes de fornecimento de latas, e que fabricantes de lata frequentemente montavam fábricas para
abastecer um cliente específico. Ele desenha uma cervejaria no centro com dois fornecedores de lata
em volta e comenta:

> *Não é preciso doutorado em economia industrial para ver que essa é uma estrutura de setor
> terrível. Há concorrência muito direta entre fabricantes de lata vizinhos, cujos produtos têm que
> ser essencialmente indistinguíveis. Além disso, há a ameaça constante de que o comprador
> simplesmente compre uma linha de latas e faça o trabalho ele mesmo. **Por que diabos uma empresa
> investiria num ambiente tão difícil?***

A turma conclui que os grandes aceitaram ser **produtores cativos** por causa dos benefícios das
corridas longas de produção — há um custo grande em mudar uma linha de fazer um tipo de lata para
outro. Ao mesmo tempo, notam que os grandes tinham retorno sobre ativos muito baixo, de 4% a 5%. A
Crown batia os três grandes por margem substancial: em média, era 50% a 60% mais lucrativa.

**As respostas ruins e o que fazer com elas.** Um aluno afirma que a Crown é produtora de baixo
custo — não dá para diferenciar uma lata, então a razão de ganhar mais dinheiro deve ser custo
menor. **Ele está redondamente errado**, porque o custo unitário por lata da Crown é quase
certamente mais alto, não mais baixo. Rumelt não diz nada e escreve "produtora de baixo custo" na
lousa. Outro aluno repete a versão oficial: especialização em aplicações difíceis, ótimo serviço ao
cliente, muita assistência técnica, responsividade, ênfase em velocidade, o CEO pegando um avião
para resolver o problema de um cliente. Rumelt confirma que é o que o caso diz — há até uma seção
chamada "A Estratégia de Connelly" —, junta os papéis e diz: *"então acho que a gente terminou. A
menos que alguém tenha um problema com a explicação oficial."*

Uma aluna na primeira fila balança a cabeça: *bom, eu realmente não vejo que colocar refrigerante
numa lata seja um feito técnico tão grande. A Crown não é a única empresa capaz de fazer isso. Por
que isso seria um negócio de alta margem?* Com um empurrãozinho, ela deu o passo-chave:
**questionou a visão convencional e notou que uma lata para uma aplicação difícil não é
necessariamente difícil de fabricar.**

### O método

> *Suponha que a revista Fortune, os redatores de casos de Harvard e os analistas de ações digam
> todos que a estratégia da Crown é foco em aplicações difíceis. **Mas suponha também que a gente
> seja bem teimoso. A gente quer fazer a própria análise. Se você leva o trabalho de estratégia a
> sério, você tem que sempre fazer a sua própria análise. Uma estratégia não é necessariamente o
> que o CEO pretendia ou o que algum executivo diz que é. Às vezes eles estão escondendo a verdade,
> às vezes estão enunciando errado, e às vezes assumiram a posição de líder sem saber de verdade as
> razões do sucesso da empresa deles.***
>
> *Se a gente não vai aceitar automaticamente a opinião dos outros, como identificar de forma
> independente a estratégia de uma empresa? **Fazemos isso olhando cada política da empresa e
> notando aquelas que são diferentes da norma do setor. Depois tentamos descobrir o alvo comum
> dessas políticas distintivas — sobre o que elas estão coordenadas para realizar.***

Ele monta uma tabela de duas colunas: **política** de um lado, **alvo** do outro.

| Política (diferente da norma) | Alvo |
|---|---|
| Assistência técnica | Empresas menores |
| Resposta rápida | Pedidos urgentes |
| Fábricas menores, nenhuma cativa (cada uma com pelo menos dois clientes), linhas ociosas esperando pedido | Velocidade · menos produção por cliente |

O caminho até cada linha é o método:

- **Assistência técnica.** Pergunta: que tipo de cliente precisa de ajuda técnica para colocar o
  produto dele numa lata? A pergunta abstrata gera olhares vazios, então ele aplica o truque que
  ensinou antes — **substituir substantivos gerais por exemplos específicos**: e uma grande
  cervejaria, precisa de assistência técnica de uma fabricante de latas? As mãos sobem na hora. Um
  aluno responde que as grandes cervejarias provavelmente podem ensinar umas coisas às fabricantes
  de lata — foi uma delas que descobriu como fazer latas de alumínio de duas peças por dupla
  estampagem. **São as empresas menores que precisam de assistência técnica — empresas sem grandes
  equipes técnicas e sem experiência interna de enlatamento.**
- **Resposta rápida.** O mesmo aluno responde rápido demais: empresas pequenas podem ter demanda
  menos estável e planejar menos. **Rumelt não escreve nada na lousa.** A anotação metodológica que
  ele faz vale como regra: *quando confrontadas com uma pergunta ou problema sem resposta óbvia, é
  da natureza humana acolher a primeira resposta aparentemente razoável que aparece na cabeça, como
  se fosse uma boia num mar agitado. **A disciplina da análise é não parar aí, mas testar aquele
  primeiro insight contra a evidência.*** A explicação dele concorda com alguns dos fatos na mesa,
  mas não com todos. Depois de uma pausa desconfortável vêm outras: talvez o alvo sejam produtores
  sazonais; talvez produtos novos. Ele pergunta: um verão mais quente que o normal, um produto novo
  — isso significa o quê? Dois ou três alunos respondem juntos: **pedidos urgentes.**
- **Manufatura.** A informação está espalhada pelo caso e demora a emergir: as fábricas da Crown
  são menores que as dos rivais; **nenhuma é cativa — cada uma tem pelo menos dois clientes;** e a
  Crown mantinha linhas ociosas montadas esperando pedidos. Um analista financeiro na turma abre a
  planilha e ajuda: comparadas com as grandes, as fábricas da Crown são menores mas têm mais
  clientes, então **a produção de latas por cliente é muito menor**; e como a receita por fábrica é
  maior, **o preço por lata da Crown deve ser consideravelmente mais alto — talvez 40% a 50% mais
  alto.**

### O insight

Com a tabela montada, Rumelt aponta e pergunta: dado tudo isso, qual é o foco da Crown? *O que
amarra tudo — clientes menores, pedidos urgentes, velocidade, menos produção por cliente, preços
mais altos?* Espera vinte segundos, uma eternidade numa sala de aula. Depois dá a pista final:
**o que levou as grandes a aceitarem virar produtoras cativas?**

Uma aluna: **"A Crown faz corridas curtas. As grandes aceitam corridas longas de itens padrão para
evitar as trocas caras. A Crown faz o oposto e tem foco em corridas mais curtas."**

Rumelt circula todos os elementos da lista de alvos e rotula o círculo de **"corridas curtas"**,
assinando o rótulo com o nome dela pelo insight indutivo. A frase amarra o foco da empresa ao
problema essencial do setor — **o custo altíssimo de trocar uma linha de latas de um produto para
outro, ou mesmo de imprimir um rótulo e depois preparar para imprimir outro.** As corridas podem
ser mais curtas porque o cliente é menor, porque o produto é novo, porque é um produto de baixo
volume e alto valor, ou porque é um pedido urgente para cobrir demanda sazonal ou inesperada.

**E aí vem a parte que a maioria dos analistas de "foco" nunca faz.** Ele volta à questão de custo.
Todo mundo agora consegue ver que corridas curtas significam mais trocas. Isso, mais as políticas
de capacidade ociosa, muita assistência técnica e resposta rápida, **empurram os custos para cima,
não para baixo.** Ou seja: uma empresa focada em corridas curtas, com custos mais altos por lata,
equilibrados por preços mais altos.

> *Seria bom se foco sempre significasse mais lucro. Mas não é assim.* **Está na hora de descobrir
> como tudo isso permite à Crown ganhar margens maiores.**

O desenho final: um círculo representando a Crown com um anel de quadrados em volta, cada um um
cliente — contraste agudo com o desenho anterior da cervejaria com dois fornecedores. Pergunta:
**quem está em melhor posição, a grande fabricante vendendo para a cervejaria ou a Crown vendendo
um pedido especial para um engarrafador local de refrigerante?**

Uma analista financeira acerta na hora: **"A Crown. Focando em corridas curtas, a Crown evita o
aperto do cativeiro. Em vez de um cliente com vários fornecedores concorrentes, a Crown é um
fornecedor com vários clientes por fábrica. Ir atrás de corridas longas tornou as grandes cativas.
Corridas curtas viram a situação. A Crown não abriu mão do poder de barganha como as cativas
abriram."**

> **A Crown e as grandes estão no mesmo setor mas jogam por regras diferentes.** Ao se concentrar
> numa parte cuidadosamente selecionada do mercado, a Crown não só se especializou — **ela aumentou
> o poder de barganha dela em relação aos compradores. Assim, ela captura uma fração maior do valor
> que cria.** As grandes, em contraste, têm volumes maiores de negócio e capturam frações muito
> menores do valor que criam. **Ela não é a maior fabricante de latas, mas é a que ganha mais
> dinheiro.**

**A definição de foco, com as duas acepções que a palavra carrega:**

> Esse padrão particular — **atacar um segmento do mercado com um sistema de negócio que fornece
> mais valor àquele segmento do que os outros jogadores conseguem** — é o que se chama de **foco**.
> Aqui a palavra tem dois sentidos. **Primeiro, denota a coordenação de políticas que produz poder
> extra pelos efeitos interativos e sobrepostos delas. Segundo, denota a aplicação daquele poder ao
> alvo certo.**

**O fecho da aula**, e é a frase que amarra o capítulo ao livro:

Um aluno pergunta: *é sempre assim? Se você fizer o trabalho, consegue achar a lógica estratégica
real de qualquer negócio?*

> *Não, não de todo negócio. **Se o negócio é realmente bem-sucedido, normalmente há uma boa lógica
> estratégica por trás daquele sucesso, escondida ou não. Mas a verdade é que muitas empresas,
> especialmente as grandes e complexas, não têm estratégia de verdade. No fundo, estratégia é sobre
> foco, e a maioria das organizações complexas não foca os recursos delas. Em vez disso, perseguem
> múltiplas metas de uma vez, não concentrando recursos suficientes para conseguir uma ruptura em
> nenhuma delas.***

---

## 11. Crescimento

Este capítulo é a continuação direta do anterior — **a mesma empresa, o que aconteceu depois** — e
é o capítulo que a Altta precisa ler junto com a decisão de MRR.

### A Crown depois de Connelly

Em 1989, Connelly, com a saúde debilitada, deixou a gestão ativa da Crown e nomeou o protegido dele
como CEO. Entrevistado quatro anos depois, o novo CEO relembrou: *"quando virei presidente em 1989,
eu tinha que acender um fogo e fazer a empresa andar de novo. **O crescimento da empresa tinha
desacelerado nos anos 1980.**"*

O fogo que ele acendeu foi abastecido por gente com expertise em transações e aquisições: um
especialista em aquisições virou CFO, um banqueiro de investimento virou tesoureiro, e outro veio
tocar planejamento e análise.

A sequência de compras:

- **1990–91:** dobrou o tamanho da Crown com a aquisição dos negócios doméstico e estrangeiro da
  Continental Can.
- **1992–93:** US$ 615 milhões numa fabricante líder de recipientes plásticos para refrigerante e
  água, e US$ 180 milhões numa fabricante de recipientes plásticos, metálicos e compostos.
- Mais US$ 62 milhões numa fabricante tradicional de latas de alimento.
- **1995:** iniciou um esforço de dezoito meses para adquirir a maior fabricante de recipientes
  plásticos e metálicos da Europa — ela mesma o resultado de uma fusão difícil entre uma empresa
  britânica de duzentos anos e uma francesa, com boa parte da produção em latas metálicas
  tradicionais de alimento.

Comentando o propósito da combinação, o CEO disse: *"queremos crescer mais e conseguir melhor uso
dos nossos recursos. Como líder global nos segmentos de metal e plástico da indústria de
embalagem… teremos uma fundação mundial para crescimento internacional continuado."* **Rumelt anota
com secura: poucos executivos foram tão claros ao declarar que querem crescer para ter uma
plataforma para crescer mais.**

Em 1997, o time tinha completado vinte aquisições e a Crown tinha se tornado a maior fabricante de
recipientes do mundo. O CEO previa que o tamanho permitiria conseguir preços melhores dos
fornecedores e que a habilidade tradicional da Crown em controle de custo permitiria cortar
overhead e capacidade excedentes da empresa francesa. **"Ninguém mencionou o fato constrangedor de
que a competência tradicional da Crown tinha sido flexibilidade e corridas curtas, não controle de
custo."**

### O que deu errado, e por quê

**Em 1998 os problemas apareceram.** A incursão da Crown em plástico tinha acompanhado o crescimento
rápido daquele negócio: os recipientes de PET sopradas estavam tirando negócio significativo de
vidro e metal em refrigerantes e certas categorias de alimento. **Mas esse crescimento não era
movido por um aumento básico na demanda por recipientes. Vinha da substituição de metal e vidro por
plástico.**

> **Crescimento baseado em substituição tem um teto claro e, uma vez que a conversão para o
> substituto tenha ocorrido, o crescimento para de repente.**

Foi o que aconteceu com o negócio de PET da Crown **exatamente quando a Crown se tornou a maior
produtora do mundo.** E não só as conversões de metal para plástico estavam praticamente
completas: **as vendas unitárias de recipientes PET começaram de fato a encolher**, porque garrafas
grandes de dois litros substituíram várias embalagens individuais.

Para piorar, enquanto a direção e os analistas esperavam preços mais firmes num setor de latas
metálicas mais consolidado, **os preços começaram a cair em vez de subir**, cortando lucros
dramaticamente. Vários fatores: nenhum concorrente parecia disposto a fechar fábricas europeias,
cada um enfrentando problemas trabalhistas se fechasse e cada um querendo aumentar participação; e
a concorrência de recipientes PET mais baratos transbordava, praticamente eliminando as margens já
finíssimas das latas metálicas tradicionais. **Rumelt anota que tudo isso — a desaceleração do
crescimento, a sobrecapacidade do setor e o transbordamento da competição de preço do plástico de
volta para o metal — é análise básica de setor e poderia ter sido facilmente previsto com o
framework das Cinco Forças de Porter.**

**Entre 1998 e 2001 a ação da Crown despencou de US$ 55 para US$ 5.** Em meados de 2001 o CEO se
aposentou. A era de expansão rápida por aquisição acabou, e coube ao sucessor achar um jeito de
tornar a Crown agora gigantesca lucrativa de novo — a ênfase dele foi custo, qualidade e
tecnologia. De 2001 ao fim de 2006, vendas e lucros ficaram essencialmente estáveis, cerca de US$ 1
bilhão de dívida foi pago, e o valor da ação subiu gradualmente de US$ 5 para US$ 20 — **cerca de
US$ 5 mais alto do que era dezessete anos antes, quando o programa de expansão começou.**

**Os números que desmontam a queixa original.** O CEO reclamou que "o crescimento tinha
desacelerado". Tinha: nos dez anos anteriores à chegada dele (1980–89), **a receita cresceu apenas
3,1% ao ano.** No entanto, no mesmo período, a empresa **gerou retorno médio anual ao acionista de
18,5% — enormemente mais que os 8,6% do índice S&P 500.** Nos dezessete anos seguintes, de 1990 a
2006, a empresa cresceu rapidamente e se tornou a fabricante "líder" de recipientes do mundo — **e
o dono de ações ordinárias da Crown recebeu retorno de apenas 2,4% ao ano, muito abaixo dos 9%
entregues pelo índice.** O gráfico ausente mostra a corrida da receita acompanhada de uma queda
dramática do retorno sobre capital: **respeitáveis 15,3% quando o novo CEO assumiu, caindo quase
imediatamente para abaixo de 10%, e depois para abaixo de 5% após a aquisição europeia.**

**O diagnóstico de Rumelt sobre o que aconteceu:** o longo histórico de desempenho superior sob
Connelly repousava sobre uma estratégia cuidadosamente desenhada que, por um conjunto coordenado de
políticas, focava a empresa em produtos e compradores nos quais **o poder de barganha do cliente
era menor.** Quando o sucessor assumiu, encontrou as garrafas PET novas fazendo avanços grandes no
mercado de refrigerantes. **Os custos de troca de produto em plástico eram muito menores que em
recipientes metálicos, então a base da vantagem tradicional da Crown estava se erodindo.** O que
fazer?

> **Ele escolheu crescer a corporação por aquisição com ênfase no negócio de PET, atraído pelo
> crescimento daquele setor. O problema é que ele deixou para trás a vantagem competitiva
> tradicional da empresa sem substituí-la.**

E quando perguntado sobre perda de foco, o CFO não demonstrou preocupação nenhuma, **interpretando
foco como mera restrição de linha de produto**: *"está na moda focar, mas a gente sempre esteve
lá. A gente opera num setor de US$ 300 bilhões e atende só a porção de metal e plástico, que dá
US$ 150 a 200 bilhões."* **Ele optou por não entender o significado mais profundo de foco — uma
concentração e coordenação de ação e recursos que cria uma vantagem.**

### Crescimento em commodity é um buraco negro

O problema de mergulhar num setor de PET em crescimento é que **crescimento numa commodity — como
cimento, alumínio ou recipiente PET — é um fenômeno do setor, movido por aumento da demanda
geral.** A demanda crescente puxa o lucro para cima, o que induz as firmas a investir em capacidade
nova. **Mas a maior parte dos lucros dos concorrentes em crescimento é ilusão, porque eles são
reinvestidos em planta e equipamento à medida que o negócio cresce.** Se lucros altos sobre esses
investimentos puderem ser obtidos depois que o crescimento desacelerar, tudo bem. **Mas num setor
de commodity, assim que o crescimento da demanda desacelera, os lucros desaparecem para as firmas
sem vantagem competitiva.**

> **Como uma espécie de buraco negro econômico, o setor de commodity em crescimento absorve mais
> caixa do concorrente comum do que jamais devolve.**

**A crítica ao próprio conceito:** a proposição de que crescimento em si cria valor está tão
profundamente entrincheirada na retórica dos negócios que virou artigo de fé quase inquestionado.
A descrição que o CEO fez do problema dele ("o crescimento da empresa tinha desacelerado") e das
metas dele ("queremos crescer mais… uma fundação mundial para crescimento internacional
continuado") **são pouco mais que a repetição da palavra "crescimento" — invocações mágicas do nome
do objeto do desejo.**

**E o problema aritmético de crescer por aquisição:** quando você compra uma empresa, especialmente
uma de capital aberto, **você normalmente paga demais.** Paga um prêmio sobre o valor de mercado
ordinário dela — normalmente cerca de 25% — mais taxas. Se você tem banqueiros e credores amigáveis,
pode crescer tão rápido quanto quiser por aquisição. **Mas, a menos que você consiga comprar
empresas por menos do que elas valem, ou a menos que você esteja especialmente posicionado para
agregar mais valor ao alvo do que qualquer outro conseguiria, nenhum valor é criado por essa
expansão.**

**Por que líderes corporativos buscam crescimento assim mesmo**, e a lista é desconfortável:

- Podem (erroneamente) acreditar que custos administrativos caem com o tamanho.
- Uma razão ruim mas comum para aquisições é **mover executivos-chave para a periferia em vez de
  demiti-los.**
- Os líderes de firmas maiores tendem a ser mais bem pagos.
- Numa empresa descentralizada, **fazer aquisições é muito mais divertido do que ler relatórios de
  desempenho divisional.**
- **Assessores-chave — banqueiros de investimento, consultores, escritórios de M&A e qualquer um
  que possa reivindicar uma taxa de intermediação — podem ganhar o resgate de um rei sendo
  "prestativos" numa transação grande.**

### "Economias de massa" — Telecom Italia, 1998

O caso que ilustra o último item, e é o mais divertido do livro.

A Telecom Italia era a quinta maior operadora de telefonia fixa e a maior e mais inovadora
operadora móvel da Europa, privatizada por etapas até 1997. Os problemas estratégicos das
operadoras fixas europeias tradicionais eram consideráveis: muitas ainda ganhavam as margens
suculentas típicas de monopólios nacionais, mas o futuro trazia possibilidade de concorrência
dramaticamente maior e mudança tecnológica. Elas tinham fluxos de caixa grandes vindos de
investimentos passados, e **a questão crítica era onde investir esses fluxos.** Mais linhas fixas
parecia imprudente. Anéis de fibra óptica em torno de cidades pareciam promissores, mas três firmas
estrangeiras já tinham planos para centros regionais como Milão, e competir com elas simplesmente
canibalizaria a receita existente. A internet crescia rapidamente, mas a receita era pequena — o
crescimento se baseava em preços muito baixos, muito menores que os cobrados por voz ou tráfego de
dados tradicional.

O CEO vinha conversando sobre uma aliança com uma empresa britânica de cabos submarinos com raízes
no século XIX. As conversas escalaram de participações cruzadas para o que seria efetivamente uma
fusão. Alguns membros do conselho ficaram preocupados, e Rumelt foi encarregado de descobrir qual
era o racional da fusão segundo o banco de investimento que liderava a operação. Um membro do
conselho disse: *"Wall Street tem a visão global do setor."*

O diálogo, numa sala de reunião em Milão:

> — **Qual é o racional da operação?**
> — *Economias de escala.*
> — **Mas essas empresas operam em regiões totalmente diferentes. Onde estão as economias de escala
> em combinar uma operadora do Caribe com uma na Itália, ou no Brasil?**
> — *A Telecom Italia precisa mover tráfego da América do Sul para a Europa. A empresa britânica
> tem cabos que dão conta desse tráfego.*

Rumelt registra a surpresa: **era uma resposta reprovada numa prova de meio de semestre de MBA.**
*Você não precisa ser dono de uma fazenda de gado para conseguir fertilizante para o seu jardim de
rosas, e você não precisa de uma fusão de US$ 50 bilhões para mover tráfego de comunicação. Um
contrato basta.*

> — **Me parece que a gente poderia simplesmente escrever um contrato, agora, sentados aqui, para
> mover parte do tráfego da Telecom Italia por certos cabos da outra empresa. A gente não precisa
> de uma fusão grande para isso.**
> — *Bom, professor, a questão é maior que tráfego. O racional fundamental da fusão é, na verdade…
> **economias de massa.***
> — **Não conheço esse termo.**
> — *O que eu quero dizer com "economias de massa" é que as duas empresas, juntas, serão maiores. A
> empresa combinada terá fluxo de caixa muito maior.*

De novo a surpresa: **combinar duas empresas quaisquer soma os fluxos de caixa delas — isso é
aritmética. Não é um argumento para explicar por que uma operação específica vale o preço.**

> — **A Telecom Italia já tem fluxo de caixa substancial. Na verdade, a razão principal pela qual a
> ação dela não está mais alta é que analistas e investidores duvidam de que a empresa tenha bons
> usos para todo esse caixa. Por exemplo, a Telecom Italia acabou de dar um lance excessivo por uma
> licença importante na América do Sul. Houve mais de US$ 1 bilhão entre a oferta dela e a segunda
> maior. A outra empresa está mais ou menos na mesma posição, gerando mais caixa do que consegue
> investir com sabedoria. Eu simplesmente não vejo "economias de massa" nenhuma em combinar esses
> fluxos de caixa.**

O banqueiro fechou a pasta. Claramente sem interesse em discussão adicional, olhou para Rumelt como
se ele fosse uma criança que não entende as grandes ligas, e disse:

> **— "Com mais fluxo de caixa você pode fazer uma operação maior."**

E saiu da sala.

> **Pressionado a explicar por que a operação fazia sentido, ele só conseguiu sugerir que ela era
> porta de entrada para uma operação ainda maior.** O banco, claro, estava pronto para recolher uma
> taxa saudável, raspada dos bilhões que fluiriam nessa operação e em quaisquer operações maiores
> que se seguissem.

Dois dias depois da reunião, o conselho rejeitou a fusão proposta e, numa sessão tempestuosa,
aceitou a renúncia do CEO.

### Crescimento saudável

> **Crescimento saudável não é engenheirado.** Ele é o resultado de demanda crescente por
> capacidades especiais, ou de capacidades expandidas ou estendidas. É o resultado de uma empresa
> ter produtos e habilidades superiores. **É a recompensa por inovação bem-sucedida, esperteza,
> eficiência e criatividade.** Esse tipo de crescimento não é apenas um fenômeno do setor —
> **normalmente ele aparece como um ganho de participação de mercado que é simultâneo a uma taxa
> superior de lucro.**

---

## 12. Vantagem

> Dois enxadristas igualmente habilidosos sentam esperando o jogo começar — qual deles tem a
> vantagem? Dois exércitos idênticos se encontram numa planície sem acidentes — qual tem a
> vantagem? **A resposta é "nenhum", porque vantagem tem raiz em diferenças — nas assimetrias
> entre rivais.** Numa rivalidade real existe um número incontável de assimetrias. **É trabalho do
> líder identificar quais assimetrias são críticas — quais podem ser transformadas em vantagens
> importantes.**

### Lutar com o gorila

Em 2000 Rumelt trabalhava com uma startup que tinha desenvolvido um material microporoso novo, em
que o tamanho dos poros se ajustava com a temperatura. A esperança era que roupas com esse material
repelissem chuva, como Gore-Tex, mas também fossem mais quentes em frio intenso e mais frescas no
calor. Como startup, essa tinha sido a única atividade da empresa, e o time estava justamente
orgulhoso. Estavam animados com a possibilidade de pegar a ideia patenteada e desenvolver uma linha
de têxteis e roupa esportiva. Já tinham escolhido uma marca e negociavam com designers.

A investidora que mais os apoiava, e que mais sabia sobre o time e a tecnologia, não estava
entusiasmada quando eles vieram falar de terceira rodada ou até de IPO: *"acho que seria mais
inteligente pegar nossas amostras e fechar acordos de licenciamento. Ou até vender a empresa
inteira para uma grande fabricante têxtil."*

O time reagiu, com o CEO liderando: *"a gente mostrou o que consegue fazer. Essa é uma oportunidade
real de construir uma grande empresa."*

*"Vocês fizeram um trabalho fantástico"*, ela respondeu. *"Criaram uma tecnologia nova maravilhosa.
Ninguém pode negar as habilidades de vocês em desenvolvimento — são de classe mundial. **Mas
construir uma empresa têxtil, ou uma empresa de roupas, é um jogo completamente diferente.**"*

O ar na sala ficou tenso de frustração. Ela podia estar certa, mas eles queriam seguir em frente.
Eles não tinham se provado?

> *"Olha, é assim"*, ela disse. *"**Vocês ganharam a medalha de ouro olímpica nos 1.500 metros.
> Vocês têm boa chance de ganhar os 10.000 metros, e nisso eu talvez apoiasse vocês. Mas vocês
> querem trocar corrida por luta com gorilas. Isso não é uma boa ideia e eu não posso apoiar
> vocês nisso.**"*

A imagem convenceu o time.

> **Ninguém tem vantagem em tudo.** Times, organizações e até nações têm vantagens em certos tipos
> de rivalidade sob condições particulares. **O segredo de usar vantagem é entender essa
> particularidade. Você tem que pressionar onde tem vantagens e contornar situações em que não tem.
> Você tem que explorar as fraquezas dos rivais e evitar liderar com as suas.**

**O Afeganistão como contraexemplo de escala nacional.** Depois do 11 de setembro, os EUA
formularam o objetivo de destruir a liderança da al-Qaeda e o governo Talibã que a protegia. Em
conflito militar, os EUA têm recursos e habilidades enormes que lhes permitem entregar quantidades
estupendas de força rapidamente. **Eles tinham força clara e a usaram** para matar operativos da
al-Qaeda e tirar o Talibã do poder. Os líderes de topo falharam, no entanto, em pressionar essa
vantagem e permitiram que bin Laden escapasse de Tora Bora para o noroeste do Paquistão.

A estratégia posterior se baseava em virar a população contra o Talibã e a favor do governo
central. **Essa abordagem teve tração no Iraque, onde a população era acostumada a um governo
central forte.** Em contraste, o Afeganistão é uma sociedade medieval baseada em senhores da
guerra, onde lealdade e poder são locais. Depois de anos de apoio americano, o governo central
seguia corrupto e ineficaz fora de Cabul. **Assim, as táticas de terror do Talibã contra a
população são brutalmente eficazes, porque qualquer proteção contra ele só pode ser temporária e
geograficamente limitada.** Ainda mais sério: o Talibã não é um exército, não tem uniforme, e todo
mundo no Afeganistão é armado e provavelmente parente de alguém no Talibã.

Todos esses obstáculos podem ser superados com tempo e recursos. **Mas tanto os cidadãos comuns
quanto o Talibã sabem que os EUA vão se retirar** — por razões políticas e porque ficar é
estupendamente caro; o militar americano, cuidadosamente projetado para infligir força esmagadora
de alta intensidade, gasta US$ 1 milhão por ano para pôr cada soldado no Afeganistão. **Você não
quer ter sido uma ferramenta dos EUA quando essas forças forem reduzidas e o Talibã voltar ao
poder.**

> **No Afeganistão os EUA estão "lutando com o gorila", porque se deixaram atrair para um conflito
> em apoio a um aliado quase inexistente e onde a vantagem está com o lado que tem mais paciência e
> menos sensibilidade a baixas e a danos colaterais.**

### Vantagem competitiva em negócios, e o que "sustentável" quer dizer

A definição básica é direta: **se o seu negócio consegue produzir a um custo menor que os
concorrentes, ou entregar mais valor percebido que os concorrentes, ou uma mistura dos dois, você
tem vantagem competitiva.** A sutileza chega quando você percebe que **custos variam com produto e
aplicação e que compradores diferem em localização, conhecimento, gosto e outras características.
Assim, a maioria das vantagens se estende apenas até certo ponto.** Uma rede de mercados orgânicos
tem vantagem sobre um supermercado comum apenas para certos produtos e apenas entre compradores de
boa renda que dão alto valor a alimentos orgânicos e naturais.

**Definir "sustentabilidade" é mais espinhoso.** Para uma vantagem ser sustentada, os concorrentes
não podem duplicá-la — ou, mais precisamente, **não podem duplicar os recursos que a sustentam.**
Para isso é preciso ter o que Rumelt chama de **mecanismo isolante** (*isolating mechanism*), como
uma patente, que dá ao titular o direito legalmente exigível de monopolizar o uso de uma tecnologia
por um tempo. Formas mais complexas de mecanismo isolante incluem **reputações, relações comerciais
e sociais, efeitos de rede, economias de escala dramáticas, e conhecimento e habilidade tácitos
ganhos pela experiência.**

O exemplo: o negócio do iPhone é protegido pelas marcas Apple e iPhone, pela reputação da empresa,
pelo serviço complementar do iTunes, e pelos efeitos de rede do grupo de clientes, especialmente
com respeito a aplicativos. **Cada um desses recursos foi construído por executivos da Apple e
colocado no lugar como parte de um programa de construção de vantagem sustentada.** Esses recursos
são escassos no sentido de que concorrentes acham difícil, se não impossível, criar recursos
comparáveis a um custo razoável.

**E o alerta contra o uso vulgar do termo, que vale para toda copy de software:**

> **Afirmações em publicidade ou em argumento de venda de que um sistema de TI, um produto ou um
> programa de treinamento vai fornecer "vantagem competitiva" estão usando o termo errado, já que
> uma "vantagem" à venda para todos os interessados é uma contradição em termos.**

### O que torna uma vantagem "interessante" — a máquina de prata e o eBay

Este é o argumento conceitual mais original do capítulo e o mais útil para decisão de investimento.

**O experimento mental da máquina de prata.** Imagine uma máquina deixada para trás por um OVNI de
passagem. Ela produz US$ 10 milhões por ano em prata bruta, sem custo nenhum — não usa energia,
material nem mão de obra. Não há impostos e a taxa de juros constante é 10%. O descobridor original
vendeu a máquina a um novo dono por US$ 100 milhões. **Pergunta: esse novo dono tem vantagem
competitiva no negócio de prata?**

A máquina é obviamente produtora de baixo custo — custo zero é o mais baixo que dá. **O enigma é
que essa vantagem não deixa o novo dono mais rico.** Sim, a máquina paga US$ 10 milhões por ano,
mas isso é apenas um retorno ordinário de 10% sobre o que foi pago por ela. A vantagem competitiva
dela parece ter evaporado por causa da mudança de propriedade — **e no entanto a máquina continua
produzindo prata a custo zero.**

A resolução: **a máquina de prata tem, sim, vantagem competitiva no negócio de prata. O enigma
desaparece quando você distingue cuidadosamente entre vantagem competitiva e ganho financeiro —
muita gente presume que são a mesma coisa, e não são.**

**Mas o insight mais importante veio de uma conversa com um empresário serial**, e é sobre o que
faz um negócio ser "interessante".

Stewart Resnick e a esposa Lynda montaram empresas de sucesso em serviços de alarme, entrega de
flores, colecionáveis, agronegócio e água engarrafada. Perguntado se havia uma lição comum entre
negócios tão díspares, ele disse: *"fornecendo mais valor você evita virar commodity. O campo de
água engarrafada é lotado, mas a Lynda viu algo único neste produto — água de um aquífero profundo
em Fiji, filtrada naturalmente por várias centenas de anos. Água que caiu na Terra antes da era
industrial, antes da poluição e dos químicos. É uma proposta única que os donos originais não
tinham explorado."*

Rumelt pressiona: **mas vocês são o maior produtor de cítricos da Califórnia e o maior produtor de
amêndoas e pistaches do mundo. Esses produtos agrícolas não são, por definição, commodities?**
Resnick conta que começou a comprar terra agrícola em 1978 como proteção passiva contra inflação. A
virada veio quando ele percebeu que esses negócios eram na verdade bastante **"interessantes"**.

> *"Para mim, um negócio é **'interessante' quando eu consigo enxergar maneiras de aumentar o
> valor dele.** O fazendeiro típico de nozes não controla o próprio destino. Ele simplesmente
> aceita o que as árvores rendem e o que o mercado paga.*
>
> *Um fazendeiro pequeno não pode bancar os investimentos necessários para desenvolver o mercado,
> pesquisar rendimento ou fazer processamento eficiente. **Mas a gente tinha uma posição grande.
> Éramos grandes o suficiente para recuperar os custos de pesquisa em rendimento e qualidade. E eu
> percebi que se a gente conseguisse estimular a demanda por amêndoas e pistaches, haveria um
> benefício real. Claro, todos os produtores de nozes da Califórnia se beneficiariam do aumento de
> demanda, mas nós éramos o único produtor com tamanho para tornar o investimento valer a pena.**
> E funcionou."*

E quando Rumelt sugere que estimular a demanda por nozes traria benefício apenas temporário, porque
a vantagem se dissiparia assim que outros produtores aumentassem a produção:

> *"As coisas não acontecem com a velocidade do relâmpago na agricultura. **Leva de sete a dez anos
> para árvores recém-plantadas amadurecerem.** Isso nos deu tempo para investir em plantio,
> branding, processamento e merchandising. Depois, à medida que a demanda crescia, **construímos
> agressivamente capacidade de processamento de nozes. As economias de escala em processamento
> tornam difícil para fazendeiros menores construírem as próprias instalações. E se você não pode
> processar, pode não compensar comprar mais terra e plantar árvores novas.**"*

Rumelt reconstrói a manobra: as posições grandes originais permitiram capturar a maior parte dos
benefícios dos investimentos em pesquisa, desenvolvimento de mercado, publicidade e promoção. **A
defasagem de sete a dez anos na resposta competitiva forneceu tanto o financiamento quanto a janela
de oportunidade para construir instalações de processamento em grande escala. As economias de
escala em processamento até hoje impediram concorrentes menores de atingir custos equivalentes.**

E o comentário do próprio Resnick sobre por que isso só é possível em empresa fechada: *"é um dos
grandes benefícios de ser uma empresa privada. Quando eu comprei essas terras de grandes petroleiras,
elas estavam olhando um trimestre ou um ano à frente. Queriam tirar os ativos dos livros para
melhorar os índices financeiros delas. **A gente consegue fazer mais com esses negócios porque não
sofre as pressões malucas que se colocam sobre uma empresa de capital aberto.**"*

**Aplicando o conceito de volta à máquina de prata:** ela tem vantagem que lhe dá valor, **mas a
vantagem não é interessante, porque não há jeito de um dono engenheirar um aumento no valor dela.**
A máquina não pode ser tornada mais eficiente. Prata pura não pode ser diferenciada. Um produtor
pequeno não pode inflar a demanda global por prata. **Você não consegue aumentar o valor da máquina
de prata mais do que consegue, sozinho, aumentar o valor de um título do Tesouro. Portanto, ser dono
dessa vantagem não é mais interessante do que ser dono de um título.**

**O eBay como caso intermediário.** Deveria ser óbvio que o eBay tem vantagem competitiva
considerável no negócio global de leilão pessoa a pessoa: inventou o negócio e continua sendo de
longe a firma dominante. Mais especificamente, a vantagem está na habilidade inigualável de oferecer
a solução mais barata e mais eficaz para praticamente qualquer um que queira comprar ou vender um
item pessoal online — base ampla de usuários, software fácil, sistema de pagamento e métodos de
avaliação de vendedores. Ao longo dos anos foi muito lucrativo: no ano fechado em dezembro de 2009,
fluxo de caixa operacional de US$ 2,9 bilhões, margem de vendas após impostos de 26% e retorno
saudável sobre ativos de 13%. **E, no entanto, apesar da vantagem competitiva, o valor de mercado da
empresa esteve estagnado ou em declínio por mais de sete anos.** Operando, o eBay definitivamente
fornece um serviço cujo custo de provisão está bem abaixo do valor que os clientes lhe atribuem, e
faz isso com eficiência que impede outros de entrarem no negócio central. **Mesmo assim, não vem
criando riqueza nova para os donos.**

Como a máquina de prata, o valor do eBay foi estático, indicando que a vantagem competitiva dele foi
estática. **Mas o eBay é muito mais "interessante" que a máquina de prata**: embora não haja — por
definição — maneira nenhuma de alterar a vantagem da máquina, **existe uma miríade de maneiras de
mudar os serviços do eBay, a eficiência dele e os usos a que os recursos e habilidades dele são
postos.** A vantagem dele é **potencialmente** interessante. **Ela vai se tornar verdadeiramente
interessante quando alguém ganhar insights especiais sobre maneiras ainda inexploradas de expandir o
valor das vantagens competitivas consideráveis que ele já tem.**

### As quatro frentes de criação de valor

> Muitos especialistas em estratégia equipararam vantagem competitiva a alta lucratividade. O
> exemplo do eBay (e da máquina de prata imaginária) mostra que isso não é necessariamente assim.
> **Apesar de toda a ênfase em "vantagem competitiva" no mundo da estratégia de negócios, você não
> pode esperar ganhar dinheiro — ficar mais rico — simplesmente por ter, possuir, comprar ou vender
> uma vantagem competitiva.**
>
> **A conexão entre vantagem competitiva e riqueza é dinâmica.** A riqueza aumenta quando a vantagem
> competitiva aumenta, ou quando a demanda pelos recursos que a sustentam aumenta.

Aumentar valor exige uma estratégia de progresso em pelo menos uma de quatro frentes:

| # | Frente | O que é |
|---|---|---|
| 1 | **Aprofundar a vantagem** | Ampliar a lacuna entre valor para o comprador e custo |
| 2 | **Ampliar a extensão da vantagem** | Levá-la a campos e competições novos |
| 3 | **Criar demanda maior** | Mais compradores, ou mais quantidade por comprador, para o produto vantajoso |
| 4 | **Fortalecer os mecanismos isolantes** | Bloquear replicação e imitação fáceis |

**1. Aprofundar.** Comece definindo vantagem em termos de **excedente — a lacuna entre valor para o
comprador e custo.** Aprofundar significa alargar essa lacuna aumentando valor, reduzindo custo, ou
ambos. Rumelt não tenta resumir a variedade infinita de métodos; **é mais útil destacar as duas
razões principais pelas quais o processo emperra.**

**Primeira razão: a gestão pode acreditar erroneamente que melhoria é um processo "natural", ou que
pode ser conseguida só com pressão ou incentivos.** O exemplo é de 1909: pedreiros vinham assentando
tijolos por milhares de anos essencialmente sem melhoria em ferramentas e técnica. Estudando o
processo cuidadosamente, Frank Gilbreth conseguiu **mais que dobrar a produtividade sem aumentar a
carga de trabalho de ninguém:**

- Movendo os paletes de tijolo e argamassa para a altura do peito, evitou centenas ou milhares de
  movimentos separados de levantamento por dia por pedreiro.
- Usando um andaime móvel, pedreiros qualificados não precisavam perder tempo carregando tijolos por
  escadas.
- **Garantindo que a argamassa tivesse a consistência certa, os pedreiros podiam assentar e nivelar
  um tijolo com um simples aperto de mão, em vez das múltiplas batidas consagradas com a colher de
  pedreiro.**

> **A lição de Gilbreth, ainda fresca hoje, é que incentivos sozinhos não bastam.** É preciso
> reexaminar cada aspecto do produto e do processo, **descartando a premissa confortável de que todo
> mundo sabe o que está fazendo.** Hoje chamam isso de reengenharia ou transformação de processos de
> negócio. Seja qual for o nome, o princípio subjacente é que **as melhorias vêm de reexaminar os
> detalhes de como o trabalho é feito, não apenas de controles de custo ou de incentivos.**

As mesmas questões aparecem na melhoria de produtos, **exceto que observar compradores é mais
difícil do que examinar os próprios sistemas.** Empresas que se destacam em desenvolvimento e
melhoria de produto **estudam cuidadosamente as atitudes, decisões e sentimentos dos compradores.
Desenvolvem uma empatia especial pelos clientes e antecipam problemas antes que eles ocorram.**

**Segunda razão pela qual empresas não melhoram: quando os mecanismos isolantes em torno de métodos
importantes são fracos.** Empresas nessas situações sensatamente esperam **pegar carona nas
melhorias dos outros.** Para se beneficiar de investimentos em melhoria, **as melhorias precisam ou
ser protegidas ou estar embutidas num negócio suficientemente especial para que os métodos dele
sejam de pouca utilidade para os rivais.**

**2. Ampliar.** Estender uma vantagem existente a campos novos exige **olhar para longe de produtos,
compradores e concorrentes e olhar em vez disso para as habilidades e recursos especiais que
sustentam a vantagem.** Em outras palavras, "construa sobre suas forças".

**Mas esta é a ideia mais básica de estratégia corporativa e também a fonte de grande travessura.**
Enfeitiçadas pela ideia de que a força competitiva da empresa reside em generalidades vaporosas
como "transporte", "produtos de consumo de marca" ou "gestão", **empresas podem se diversificar em
produtos e processos sobre os quais não sabem nada.**

A base para extensões produtivas frequentemente reside em **poços complexos de conhecimento e
know-how.** A DuPont começou como especialista em explosivos; depois da Primeira Guerra, as
habilidades em química e produção química levaram a celulose, borracha sintética e tintas; o
trabalho em sintéticos levou a competências novas em química de polímeros, que levaram a Lucite e
Teflon em 1935; desenvolvimentos posteriores em polímeros levaram a náilon, Mylar, Dacron, Lycra e
mais. Padrões semelhantes de acumular e estender recursos tecnológicos aparecem em GE, IBM, 3M e
muitas farmacêuticas e eletrônicas.

**A distinção crucial**, e é a que a Altta precisa por causa da regra "todo produto é Altta + alguma
coisa":

> **Extensões baseadas em know-how proprietário se beneficiam do fato de que conhecimento não é
> "gasto" quando aplicado — ele pode até ser aprimorado. Em contraste, extensões baseadas em crenças
> do cliente, como marcas, relacionamentos e reputação, podem ser diluídas ou danificadas por
> extensão descuidada. Embora grande valor às vezes possa ser criado estendendo esses recursos, um
> fracasso na arena nova pode repercutir e danificar o núcleo.**

**O caso Disney** é o melhor exemplo de gestão cuidadosa de extensão de marca. A empresa desfruta
há muito de vantagem competitiva substancial no entretenimento por causa da capacidade e da
reputação em conteúdo familiar. **Para dimensionar a magnitude dessa vantagem: nenhuma outra
produtora consegue puxar espectadores para os filmes dela apenas pelo nome da marca.** Muitas
crianças vão (ou são levadas) ao novo filme da Disney sem muita consideração pelo conteúdo. Em
contraste, ninguém vai a um filme porque ele é de um estúdio X ou Y — essas marcas têm algum poder
em círculos financeiros e em canais de distribuição, **mas nenhum com o consumidor.**

**O valor de uma marca vem de garantir certas características do produto. Mas essas características
não são fáceis de definir. O que, exatamente, é um filme "Disney"? Até onde a marca pode ser
esticada sem perder valor?** O presidente do grupo de filmes contou a Rumelt em 2008:

> *A coisa mais valiosa que a gente tem é a marca Disney. Alguns anos atrás, o presidente dos
> estúdios fez a gente pensar seriamente em **como construir sobre aquela força sem diluí-la.**
> Algumas pessoas acham que um filme Disney tem que ser adequado para crianças muito pequenas. Mas
> esquecem que **Walt fez *Vinte Mil Léguas Submarinas*, um filme que era provavelmente assustador
> demais para crianças muito pequenas.** A gente olhou a lista inteira dos filmes de maior sucesso
> da história e descobriu que teria tido orgulho de lançar um número surpreendente deles sob o nome
> Disney — filmes como *E.T.*, *Superman* e os filmes de Indiana Jones.*
>
> *Para manter a fé e ainda expandir a marca, a gente chegou a **três diretrizes básicas: (1)
> Nenhum palavrão** — tudo bem as pessoas ficarem bravas e vermelhas de raiva, mas nada de
> xingamento. **(2) Nenhuma situação sexual desconfortável** — a gente quer romance mas vai deixar
> os filmes sujos para os outros. **(3) Nenhuma violência gratuita** — somos totalmente a favor de
> aventura de espadachim, mas não vai haver decapitação nem sangue jorrando.*

Essas três diretrizes são o que permitiu à empresa entrar no gênero de ação e aventura, cada vez
mais bem-sucedido, **sem danificar o valor da marca no setor tradicional dela.**

**3. Criar demanda maior.** Uma vantagem competitiva se torna mais valiosa quando o número de
compradores cresce e/ou quando a quantidade demandada por comprador aumenta. **Tecnicamente, são os
recursos escassos que sustentam a vantagem que aumentam de valor.** Nota importante: **demanda maior
só aumentará lucro de longo prazo se o negócio já possuir recursos escassos que criem vantagem
competitiva estável.**

> **Porque tantos teóricos de estratégia equipararam erroneamente estratégia criadora de valor a
> "ter" uma vantagem competitiva sustentável, eles largamente ignoraram o processo de engenheirar
> aumentos de demanda. Engenheirar demanda maior pelos serviços de recursos escassos é, na verdade,
> o mais básico dos estratagemas de negócio.**

**O caso POM Wonderful** é a demonstração. Em 1987 os Resnick compraram 7.300 hectares de pomares de
nozes; **entre as amendoeiras e os pistacheiros havia 48 hectares de romãzeiras.** Stewart: *"eu
primeiro quis replantar essa área com nogueiras, mas decidimos manter os arbustos. Nossos relatórios
separam resultados por cultura e, depois de alguns anos, **notei que a gente estava consistentemente
ganhando mais dinheiro por hectare com as romãs do que com as nozes.**"*

Nos anos 1990 a romã era uma cultura muito menor nos EUA e os americanos não a conheciam bem. A
fruta tinha origem antiga no Oriente Médio, e muitos a associavam a propriedades vivificantes.

**Em 1998 os Resnicks começaram a financiar pesquisa sobre as propriedades da romã.** Os
pesquisadores reportaram que o suco continha mais antioxidantes que vinho tinto; estudos posteriores
sugeriram que o suco poderia baixar pressão arterial e que a concentração de flavonoides poderia
ajudar a prevenir câncer de próstata. **Desde 1998 eles doaram mais de US$ 30 milhões para pesquisa
sobre os benefícios da fruta para a saúde.**

A estratégia era aumentar dramaticamente a demanda nacional por romãs. **Como no sucesso anterior
com nozes, isso criaria valor se eles possuíssem uma fração substancial da produção e se produção
competitiva nova não aparecesse rapidamente.** Para implementar, começaram a comprar mais área: em
1998 já tinham 2.400 hectares comprometidos com produção futura de romãs — **um aumento de seis
vezes na capacidade produtiva dos EUA.**

A empresa também estudou formas de embalar e comercializar o suco. **O padrão do setor era diluir um
suco caro e de sabor forte com quantidades muito maiores de sucos mais neutros de uva branca, maçã e
pera** — era assim que se vendia suco de cranberry. **Lynda Resnick sugeriu conceito diferente: a
oferta principal seria 100% pura, sem enchimento, entregando 100% dos benefícios de saúde.** Não
seria comercializada como refrigerante nem como dose de açúcar infantil, e sim como **uma categoria
nova — um suco antioxidante fresco e refrigerado, distribuído ao lado dos hortifrútis.** A marca
seria POM, com o "O" em forma de coração.

O presidente da POM relembrou que os plantios massivos, culminando em 2000–2001, criaram a ameaça de
**uma "maré vermelha" de suco de romã não vendido caso a estratégia de aumentar demanda não
funcionasse.** *"Era assustador. A gente tinha que ir com tudo. Lynda trabalhou incansavelmente para
moldar o conceito, a embalagem e a abordagem de marketing. Ela escreveu, deu entrevistas e
apresentou o POM a cada figura influente da rede enorme de contatos dela. **Funcionou. A demanda
disparou. Em 2004 a gente era o produtor dominante de uma nova categoria quente de produto.**"*

**4. Fortalecer mecanismos isolantes.** Um mecanismo isolante inibe concorrentes de duplicar seu
produto ou os recursos que sustentam sua vantagem. **Se você consegue criar novos ou fortalecer os
existentes, aumenta o valor do negócio**, porque haverá menos concorrência imitativa e erosão mais
lenta dos valores dos seus recursos.

A abordagem mais óbvia é trabalhar em patentes, proteções de marca e direitos autorais mais fortes.
Quando um produto novo é desenvolvido, **a proteção dele pode ser fortalecida esticando uma marca já
poderosa para cobri-lo.** Quando o mecanismo isolante se baseia no know-how coletivo de grupos,
**ele pode ser fortalecido reduzindo a rotatividade.** Quando as proteções são obscuras, legislação
ou decisões judiciais podem clarificar e fortalecer certas posições.

O exemplo histórico de ação coletiva para fortalecer direitos de propriedade é a indústria americana
do petróleo. Assim que o petróleo começou a ser bombeado na Pensilvânia em 1859, a questão de
propriedade veio à tona. No caso de um mineral como o carvão, a regra era clara: a pessoa era dona
do carvão sob a terra dela. **Mas o petróleo, decidiram os tribunais, se movia e fluía como um
animal selvagem — ninguém podia dizer de onde uma gota específica tinha vindo. Aplicando a antiga
"regra da captura" anglo-saxã, o petróleo pertencia legalmente a quem o bombeasse do solo.**

Como reservatórios de petróleo se estendem além dos limites de propriedade, a maioria dos poços é
perfurada no que equivale a um grande reservatório comum. Como a regra da captura dizia que o
petróleo pertencia a quem bombeasse, **cada perfurador bem-sucedido tinha que bombear o mais rápido
possível** — se um poço não fosse bombeado, os outros esvaziariam o reservatório de qualquer jeito.
Isso criou as florestas de torres e as taxas fantásticas de desenvolvimento dos primeiros campos
americanos, onde o superbombeamento era a regra do dia. **Logo depois da descoberta do grande campo
do Leste do Texas em 1930, havia 44 poços separados bombeando num único quarteirão da cidade de
Kilgore. Em dezoito meses o preço do petróleo tinha caído de um dólar para 13 centavos o barril, a
pressão do campo tinha colapsado e água estava infiltrando no reservatório.** Muitos membros do
setor queriam um jeito de parar a corrida armamentista, mas os tribunais derrubaram planos de
controlar produção como fixação ilegal de preço. No fim de 1931 o governador do Texas declarou lei
marcial no campo e usou a Guarda Nacional para parar a produção. **Ao longo de décadas, produtores,
governos estaduais e o governo federal lutaram para chegar às regras atuais de controle de produção
e partilha de receita entre proprietários** — tarefa complicada porque nem todos os produtores
tinham os mesmos interesses ou a mesma informação, e em particular as posições maiores tinham
informação melhor sobre as reservas finais do campo.

**A outra abordagem ampla é ser um alvo móvel.** Num cenário estático, os rivais mais cedo ou mais
tarde descobrem como duplicar boa parte do seu know-how proprietário e dos seus recursos
especializados. **Mas se você consegue melhorar continuamente, ou simplesmente alterar, seus métodos
e produtos, os rivais têm muito mais dificuldade com imitação.** O exemplo é o Windows: se ele
permanecesse estável por um período longo, há pouca dúvida de que programadores espertos mundo afora
conseguiriam, com o tempo, criar um substituto funcionalmente equivalente. **Mudando o programa
continuamente — mesmo que as mudanças não sejam melhorias —, a Microsoft torna muito caro
engenheirar uma série contínua de equivalentes funcionais.**

E uma distinção final e sutil: **fluxos contínuos de inovação em métodos e produtos são mais
difíceis de imitar quando são, eles próprios, baseados em fluxos de conhecimento proprietário.** Uma
empresa que inova usando conhecimento científico terá, em geral, mecanismos isolantes mais fracos do
que uma que **combina ciência com informação realimentada por clientes de ponta ou com informação
proprietária colhida das próprias operações internas.**

---

## 13. Dinâmica

Na estratégia militar clássica, o defensor prefere o terreno alto: é mais difícil de atacar e mais
fácil de defender. **O terreno alto é uma assimetria natural que pode formar a base de uma
vantagem.** Boa parte da teoria acadêmica de estratégia gasta energia em explicações cada vez mais
intrincadas de por que certos tipos de terreno alto econômico são valiosos. **Mas essas discussões
contornam uma questão ainda mais importante: como é que se atinge uma posição dessas em primeiro
lugar?** O problema é que, por mais valiosas que sejam essas posições, **os custos de capturá-las são
ainda maiores. E uma posição fácil de capturar cairá com a mesma facilidade diante do próximo
atacante.**

Um jeito de achar terreno alto fresco e não defendido é criá-lo você mesmo por inovação pura —
invenções técnicas dramáticas, ou inovações de modelo de negócio como o sistema de entrega da FedEx,
criam terreno alto novo que pode durar anos antes de os concorrentes aparecerem nas muralhas.

**O outro jeito, que é o foco do capítulo, é explorar uma onda de mudança.** Essas ondas são
largamente exógenas — em sua maior parte, estão além do controle de qualquer organização. Nenhuma
pessoa ou organização as cria; **são o resultado líquido de uma miríade de deslocamentos e avanços
em tecnologia, custo, concorrência, política e percepção do comprador.** Ondas importantes são como
terremotos: **criam terreno alto novo e nivelam o que era terreno alto.** Podem virar as estruturas
de posições competitivas de cabeça para baixo, apagando vantagens velhas e habilitando novas. Podem
liberar forças que fortalecem ou enfraquecem radicalmente líderes existentes. **Podem habilitar
estratégias inteiramente novas.**

> Uma onda exógena de mudança é como o vento nas velas de um barco de corrida. **Ela fornece poder
> bruto, às vezes turbulento. O trabalho do líder é fornecer o insight, a habilidade e a
> inventividade que consigam atrelar aquele poder a um propósito.** Você explora uma onda entendendo
> a evolução provável da paisagem e depois canalizando recursos e inovação para posições que **se
> tornarão** terreno alto — valiosas e defensáveis — conforme a dinâmica se desenrola.

### O antídoto contra o clichê da aceleração

Antes de qualquer coisa, Rumelt derruba o jargão. **O falatório de negócios lembra constantemente
que a taxa de mudança está aumentando e que vivemos numa era de revolução contínua. Estabilidade,
dizem, é conceito ultrapassado, relíquia de uma era passada. Nada disso é verdade. A maioria dos
setores, na maior parte do tempo, é razoavelmente estável.** Claro que há sempre mudança, mas
acreditar que as mudanças de hoje são enormes, empequenecendo as do passado, **reflete ignorância da
história.**

A comparação que ele faz, e vale como calibragem: nos cinquenta anos entre **1875 e 1925**, a
eletricidade iluminou a noite e revolucionou fábricas e casas; em 1880 a viagem de Boston a
Cambridge e volta era uma jornada de um dia inteiro a cavalo, e cinco anos depois a mesma viagem
eram vinte minutos de bonde elétrico — e com o bonde vieram o deslocamento pendular e os subúrbios;
em vez de uma máquina a vapor gigante ou uma roda d'água movendo uma fábrica inteira, os produtores
passaram a motores elétricos levando energia a cada canto; a máquina de costura pôs roupa decente ao
alcance de todos; a eletricidade alimentou o telégrafo, o telefone e depois o rádio, disparando a
primeira aceleração significativa em comunicação desde as estradas romanas; as ferrovias costuraram
o país; o automóvel entrou em uso comum e revolucionou a vida americana; o avião foi inventado e
comercializado; rodovias pavimentadas modernas foram construídas e a agricultura foi mecanizada; a
primeira máquina tabuladora automática da IBM apareceu em 1906; uma onda enorme de imigração mudou a
cara das cidades; **e os padrões modernos de publicidade, varejo e branding de consumo foram
desenvolvidos — centenas de marcas famosas datam dessa era.**

Agora o período de cinquenta anos a partir de 1942: a televisão remodelou a cultura americana, a
viagem aérea a jato abriu o mundo às pessoas comuns, a queda no custo do transporte de longa
distância gerou uma maré de comércio global, lojas do tamanho de campos de futebol pontilham a
paisagem, computadores e celulares são onipresentes, e a internet tornou possível trabalhar, buscar
entretenimento e comprar sem sair de casa; milhões podem tuitar instantaneamente sobre gostos e
desgostos evanescentes. **E ainda assim, no cômputo geral, as mudanças dos últimos cinquenta anos
tiveram impacto menor sobre a vida cotidiana e sobre a condução dos negócios do que as mudanças
momentosas de 1875 a 1925. Perspectiva histórica ajuda você a fazer julgamentos sobre importância e
significado.**

**E a regra de timing:** depois que uma onda passou, é fácil marcar os efeitos dela — **mas aí já é
tarde demais para aproveitar a onda ou escapar da escavação dela.** Portanto, busque perceber e
lidar com a onda **nos estágios iniciais de desenvolvimento dela. O desafio não é previsão; é
entender o passado e o presente.** Entre os inúmeros deslocamentos e ajustes que ocorrem todo ano,
alguns são pistas da presença de uma onda substancial e, uma vez montados num padrão, apontam para
as forças fundamentais em jogo. **A evidência está à vista, esperando você ler os significados mais
profundos.**

**E a regra de segunda ordem:** quando a mudança ocorre, a maioria foca nos efeitos principais — os
surtos de crescimento de tipos novos de produto e a queda de demanda de outros. **Você tem que cavar
abaixo dessa realidade de superfície para entender as forças subjacentes e desenvolver um ponto de
vista sobre as mudanças de segunda ordem e derivadas que foram postas em movimento.** O exemplo:
quando a TV apareceu nos anos 1950, estava claro que todos acabariam tendo uma e que o entretenimento
"grátis" seria concorrência forte para o cinema. **Um efeito mais sutil surgiu porque a indústria de
cinema não podia mais atrair público para fora de casa com "mais um faroeste".** Os estúdios
tradicionais de Hollywood eram especializados em produzir um fluxo constante de filmes de segunda
linha e não se adaptaram facilmente. No início dos anos 1960 a frequência estava encolhendo
rapidamente. **O que reviveu o cinema foi a passagem para a produção independente, com os estúdios
atuando como financiadores e distribuidores** — produtores independentes, livres do nepotismo e das
rotinas do estúdio tradicional, podiam se concentrar em montar um time escolhido a dedo para fazer
um filme bom o bastante para puxar o público do sofá da sala. **Assim, um efeito de segunda ordem da
televisão foi a ascensão da produção independente de cinema.**

### Sentir a onda antes dela quebrar — Cisco, 1996

O caso é uma conversa em Paris com o CEO de uma fabricante francesa de equipamento de telecom, e é o
melhor exemplo do livro de como se percebe uma onda.

O CEO explica: *"o negócio de telecomunicações tem sido, junto com computação de grande porte, um
setor em que **economias de escala em nível global foram determinantes.** Se uma empresa não tem
presença significativa de mercado em pelo menos duas pernas da tríade [Japão, Europa e América do
Norte], ela sobrevive como jogadora de nicho, oferecendo equipamento muito especializado."* E, com
um sorriso irônico: *"ou depende do governo forçar o monopólio telefônico local a comprar do
fornecedor local."*

Rumelt aponta a dificuldade da posição — a empresa dele não estava entre as dez maiores fabricantes
de equipamento do mundo — e o CEO responde que há grandes mudanças a caminho: telefonia celular vai
sacudir o setor, a desregulamentação europeia vai mudar as regras do jogo, e a internet vai borrar
as linhas entre comunicações, dados e entretenimento.

E aí Rumelt faz a pergunta afiada:

> *Estou tentando entender as forças que estão mudando a estrutura do setor. Por exemplo, olhe o
> sucesso incrível da Cisco Systems. **Ela está bem na interface entre telecomunicações e
> computação — uma posição que todo mundo achava que seria o grande campo de batalha entre AT&T e
> IBM. E, em vez de uma batalha de titãs, a gente tem essa novata arrancando o negócio.***
>
> *Como você disse, a barreira crítica para virar jogador grande em equipamento de telecom e
> computação tem sido escala. **E no entanto a Cisco Systems, começada por dois funcionários de
> universidade, atravessou direto a "barreira" de escala. Ela arrancou o mercado de equipamento de
> interconexão de redes debaixo do nariz de gigantes.** Como isso aconteceu?*

O CFO responde que a Cisco oferecia opções de ações fora do alcance das firmas maiores e mais
estabelecidas, e isso permitiu atrair o melhor talento técnico do mundo. **O CEO balança a cabeça e
dá uma leitura diferente:**

> *A gente teve engenheiros trabalhando em equipamento de interconexão de redes. **Os princípios
> básicos são bem compreendidos. E mesmo assim a gente não consegue replicar o desempenho dos
> roteadores multiprotocolo da Cisco.**
>
> — **Há patentes-chave?**
>
> — *Há patentes, mas não são a coisa crucial. **O coração do roteador da Cisco é firmware —
> software gravado em memória somente-leitura ou implementado em arranjos programáveis. O produto
> deles incorpora talvez cem mil linhas de código escritas com muita habilidade. Foi criado por um
> time muito pequeno — talvez de duas a cinco pessoas. Aquele pedaço de código muito engenhoso é o
> que dá a vantagem ao produto.***

Naquela noite, transcrevendo as notas, Rumelt refletiu. Um roteador, ele sabia, é na verdade só um
computador pequeno — usa microprocessadores, memória e portas de entrada e saída para gerenciar o
fluxo de dados numa rede digital. **O desempenho dele tinha pouco a ver com os microprocessadores,
memórias e chips lógicos específicos dentro dele, porque todo mundo no setor tinha acesso a chips
parecidos.** A parte do roteador tão difícil de duplicar era o software. Bom… não, **era a
habilidade incorporada no software que era difícil de duplicar.**

**Então ele viu.** Ele vinha falando da Cisco como se fosse um exemplo isolado de habilidade
derrotando escala. **Mas as forças que a Cisco tinha atrelado a favor dela eram muito mais profundas
que as habilidades de qualquer empresa, muito mais amplas que qualquer setor.**

> Nos setores de computação e equipamento de telecomunicações, **o sucesso econômico tinha
> tradicionalmente se baseado em capacidades de coordenar hordas de engenheiros em projetos de
> desenvolvimento de bilhões de dólares e de gerenciar grandes forças de trabalho na manufatura de
> equipamento eletrônico complexo.** Essa tinha sido a base do poder da IBM e da AT&T e tinha sido
> central para o sucesso intensivo em engenharia do Japão. **Mas agora, em 1996, a base do sucesso
> em muitas áreas estava se deslocando para software — para a esperteza de pedaços de código
> escritos por times pequenos. Era uma passagem de economias de tamanho para o know-how e a
> habilidade de indivíduos isolados. Era como se a competição militar de repente se deslocasse de
> grandes exércitos para combate individual.**
>
> Um arrepio subiu e desceu pela espinha dele. **Havia a sensação perturbadora de forças
> subterrâneas escondidas em ação, torcendo a paisagem.**

Três anos antes ele tinha morado e trabalhado em Tóquio por vários meses, quando a convicção de que
o Japão seria a superpotência econômica do século XXI estava viva e passando bem. **Mas agora o
lócus da inovação tinha se deslocado para a cultura empreendedora de times pequenos do Vale do
Silício.** A visão mental dele viu aquela onda se espalhando para afetar máquinas-ferramenta,
padeiras, fornos, torradeiras e até automóveis. **As forças em ação não estavam apenas alterando as
fortunas de empresas; estavam deslocando a própria riqueza das nações.**

### Discernir os fundamentos

> O trabalho de discernir se há mudanças importantes a caminho envolve **entrar nos detalhes
> ásperos. Para fazer boas apostas sobre como uma onda vai se desenrolar, você precisa adquirir
> expertise suficiente para questionar os especialistas.** Conforme as mudanças começam a ocorrer, o
> ar estará cheio de comentários sobre o que está acontecendo, mas você precisa ser capaz de cavar
> abaixo dessa superfície e descobrir as forças fundamentais em ação. **Líderes que ficam "acima dos
> detalhes" podem se sair bem em tempos estáveis, mas surfar uma onda de mudança exige um senso
> íntimo das origens e da dinâmica dela.**

Em 1996, das tendências visíveis no setor, a ascensão da computação pessoal e das redes de dados
estavam no radar de todo mundo, e a desregulamentação das telecomunicações e a migração para
tecnologia digital eram esperadas havia muito. **As duas mudanças mais misteriosas eram a ascensão
do software como fonte de vantagem competitiva e a desconstrução da indústria tradicional de
computadores. Em retrospecto parece óbvio: as duas tinham causa comum — o microprocessador.**

**Por que o software virou fonte tão afiada de vantagem.** A resposta é que **milhões de
microprocessadores, em tudo, de PCs a termostatos, de máquinas de pão a mísseis de cruzeiro,
significavam que a programação deles determinava o desempenho desses dispositivos.**

A história de como isso aconteceu tem um detalhe delicioso sobre decisões que não parecem decisões:
em 1971 o mercado de chips tinha dois segmentos — chips padronizados como portas lógicas e memória,
produzidos em alto volume mas commodities; e chips proprietários especializados, com margens muito
mais altas mas produzidos sob encomenda em baixo volume, **com os direitos pertencendo ao cliente
que os encomendou.**

> **De forma significativa, e frequentemente triste, muitas decisões cruciais não parecem decisões
> na hora. Em vez disso, gerentes simplesmente aplicam procedimentos operacionais padrão à
> situação.**

Dentro da Intel, o primeiro microprocessador foi classificado como projeto proprietário
especializado, então os direitos pertenciam ao cliente, uma fabricante de calculadoras. **Por sorte,
o cliente entrou em pressão de lucro e pediu redução de preço; a Intel baixou o preço em troca do
direito de vender o chip a outros.** E, espantosamente, o padrão se repetiu com o microprocessador
seguinte, criado como chip proprietário para uma fabricante de terminais: ficando sem dinheiro, ela
trocou os direitos de projeto pelos chips de que precisava — **e nesse caso a cliente tinha até
projetado o conjunto de instruções do chip, cujos ecos ainda se veem nos processadores x86 mais
avançados da Intel.**

**Levou anos para a gestão da Intel, e para o resto do setor, apreciar plenamente as implicações de
um chip de propósito geral que podia ser especializado com software.** Em vez de cada cliente pagar
para desenvolver um chip proprietário especializado, muitos podiam usar o mesmo microprocessador de
propósito geral, criando comportamento proprietário **com software.** Assim, o microprocessador podia
ser produzido em alto volume, e a Intel podia ser uma empresa de tecnologia baseada em produto em
vez de uma oficina para projetos de terceiros. Andy Grove, sobre isso: *"acho que deu à Intel o
futuro dela, e nos primeiros quinze anos a gente não percebeu. Virou a área de negócio definidora da
Intel. Mas por talvez os primeiros dez anos, a gente olhava para aquilo como um espetáculo
secundário."*

**A pergunta afiada de um gerente da Qualcomm**, num debate sobre custos crescentes de projetar
chips especializados: **não é caro criar software também? Engenheiros de software são mais baratos
que engenheiros de hardware?** Ninguém tinha resposta instantânea. Rumelt afiou a pergunta com um
exemplo da experiência dele: a Rolls-Royce queria criar uma unidade sofisticada de monitoramento e
controle de combustível para aumentar a eficiência dos motores a jato. **Poderia fazer isso com
hardware proprietário incorporando a lógica necessária, ou usar um microprocessador de propósito
geral, expressando as ideias proprietárias escrevendo software.** De qualquer forma, teria que fazer
muito trabalho de engenharia para apenas alguns milhares de instalações. **Por que preferir
software?**

A resposta que o grupo desenvolveu, e que desde então sobreviveu ao escrutínio de vários outros
grupos técnicos:

> **Bons engenheiros de hardware e de software são ambos caros. A grande diferença está no custo de
> prototipar, atualizar e, especialmente, no custo de corrigir um erro.** Projeto sempre envolve
> certa quantidade de tentativa e erro, **e tentativas e erros de hardware são muito mais caros.**
> Se um projeto de hardware não funciona direito, pode significar meses de reprojeto caro. **Se o
> software não funciona, um engenheiro corrige o problema digitando instruções novas num arquivo,
> recompilando e tentando de novo em poucos minutos ou poucos dias. E software pode ser corrigido e
> atualizado rapidamente mesmo depois de o produto ter sido embarcado.**
>
> Assim, **a vantagem do software vem da rapidez do ciclo de desenvolvimento** — o processo de ir do
> conceito ao protótipo e o processo de achar e corrigir erros. **Se engenheiros nunca errassem, os
> custos de alcançar um projeto complexo em hardware e em software poderiam ser comparáveis. Mas
> como eles erram, software virou o meio muito preferido** (a menos que a velocidade de ponta do
> hardware puro fosse exigida).

**Por que a computação se desconstruiu.** Andy Grove tinha descrito como "pontos de inflexão"
transformaram o setor de uma estrutura "vertical" para uma "horizontal": na estrutura antiga, cada
fabricante fazia os próprios processadores, memória, discos rígidos, teclados e monitores, e
escrevia o próprio software de sistema e de aplicação; o comprador se casava com um fabricante e
comprava tudo dele. Na estrutura nova, cada uma dessas atividades virou um setor por si — a Intel
faz processadores, outros fazem memória, outros discos, a Microsoft faz software de sistema, e
computadores são montados misturando peças de fabricantes concorrentes. **Grove foi certeiro ao
entender que não só a base da computação tinha mudado, a base da competição também.** Mas ele mesmo
admitia não conseguir apontar exatamente onde o ponto de inflexão ocorreu: foi no começo dos anos
1980, quando PCs começaram a emergir? Foi na segunda metade da década, quando redes baseadas em
tecnologia de PC começaram a crescer em número? *"É difícil dizer."*

Rumelt queria saber **por quê**, e a resposta veio de um gerente técnico que tinha sido engenheiro
de sistemas na IBM e perdido o emprego porque computadores modernos não precisavam de muita
engenharia de sistemas. *"Por que não?"*, ele perguntou sem pensar. **"Porque agora os componentes
individuais são todos inteligentes."**

> **A origem do ponto de inflexão de Andy Grove era o próprio produto da Intel — o microprocessador.
> A modularização da indústria de computadores aconteceu porque cada componente principal passou a
> poder conter o próprio microprocessador — cada peça virou "inteligente".**

Em muitos computadores tradicionais e nos primeiros PCs, a CPU fazia quase tudo sozinha. Ela
varria o teclado procurando uma tecla pressionada; ao sentir uma, analisava a linha e a coluna para
determinar a letra ou o número. Para ler uma fita, a CPU controlava constantemente a velocidade dos
carretéis e a tensão da fita, parando e partindo o acionamento enquanto interpretava os dados que
chegavam e os armazenava na memória. Para imprimir numa impressora de margarida, a CPU controlava a
rotação da roda e o tempo de cada martelada. **Em alguns casos os projetistas criavam mini-CPUs
customizadas para gerenciar esses periféricos, mas a integração entre esses dispositivos permanecia
complexa e não padronizada, e consumia enorme esforço de engenharia de sistemas.**

Depois da chegada de microprocessadores baratos, tudo mudou. **O teclado moderno tem um
microprocessador pequeno embutido. Ele sabe quando uma tecla foi apertada e manda uma mensagem
padronizada simples ao computador dizendo, em efeito, "a letra X foi pressionada".** O disco rígido
também é inteligente, de modo que a CPU não precisa saber como ele funciona: simplesmente manda "me
dê o setor 2032", e o subsistema devolve os dados daquele setor, de uma vez. Além disso,
microprocessadores separados controlam telas de vídeo, memória, processadores gráficos, portas USB,
modems, portas Ethernet, controles de jogo, fontes de energia de backup, impressoras, scanners e
mouses.

> **Componentes inteligentes operando dentro de um sistema operacional padrão de fato significaram
> que o trabalho de integração de sistemas ficou quase trivialmente simples. As habilidades de
> integração de sistemas que IBM e DEC tinham construído por décadas não eram mais necessárias.** Foi
> por isso que aquele engenheiro perdeu o emprego.
>
> Com a cola da engenharia de sistemas proprietária já não tão importante, o setor se desconstruiu.
> **Módulos não precisavam mais ser projetados sob medida para funcionar com todas as outras peças.
> Para conseguir um sistema funcionando, os clientes não precisavam mais comprar tudo de um único
> fornecedor.**

E uma observação afiada sobre o modismo acadêmico de "redes": muitos pesquisadores olham a indústria
de computadores hoje e veem uma rede de relacionamentos, cada um um canal pelo qual uma firma
coordena com outra — **ideia que encanta especialmente sociólogos reducionistas modernos que contam
conexões entre pessoas, pulando as perguntas antiquadas e difíceis de quantificar sobre conteúdo e
significado.** Mas insistir nessa rede de relações fracas **confunde o pano de fundo com o primeiro
plano ausente. O que é de fato surpreendente na indústria moderna de computadores não é a rede de
relacionamentos, e sim a ausência da firma massivamente integrada fazendo toda a engenharia de
sistemas — toda a coordenação — internamente. A teia atual de "relacionamentos" é o resto fantasmal
do nervo, do músculo e do osso da IBM antiga.**

### Como a Cisco surfou quatro ondas simultâneas

A origem: no início dos anos 1980, o diretor das instalações de computação de Stanford queria um
jeito de conectar redes separadas de computadores Apple, Alto e DEC, além de várias impressoras.
Cada tipo de rede usava fios, plugues, temporização e — o mais importante — **protocolos
proprietários diferentes** de codificação de informação. A solução, chamada de "caixa azul", foi
projetada por dois funcionários da universidade. Outros dois funcionários começaram a refinar a
caixa azul, movendo os projetos melhorados para a empresa recém-formada deles, a Cisco Systems.
Depois de uma separação amarga com Stanford em 1987, a Cisco recebeu direitos legais plenos sobre o
software em troca de um pagamento de US$ 167 mil e da promessa de descontos. **Achava-se que a
Cisco venderia algumas caixas, agora chamadas de roteadores, para outras universidades de pesquisa,
mas não havia expectativa nenhuma de que ganhasse muito dinheiro — e certamente nenhuma expectativa
de que ela se tornaria, por um breve momento em 2000, a corporação mais valiosa do mundo.**

As quatro ondas:

1. **O microprocessador e a implicação-chave dele — a centralidade do software.** A Cisco
   terceirizou a manufatura do hardware, concentrando-se em software, vendas e serviço. Como
   resumiu o diretor de Stanford: **"a Cisco espertamente vendia software que se plugava na tomada,
   tinha um ventilador e esquentava."**
2. **A ascensão das redes corporativas.** Assim como em Stanford, corporações descobriam a
   necessidade de conectar mainframes, computadores pessoais e impressoras que usavam protocolos de
   rede diferentes. **A habilidade do roteador da Cisco de lidar com múltiplos protocolos estava em
   demanda crescente.**
3. **A rede IP.** Em 1990 a maioria dos protocolos de rede tinha dono e patrocinador corporativo:
   IBM tinha o SNA, DEC tinha o DECnet, Microsoft tinha o NetBIOS, Apple tinha o AppleTalk, Xerox
   tinha desenvolvido a Ethernet. **Em contraste, o IP foi criado no fim dos anos 1970 para lidar
   com tráfego na ARPANET, precursora da internet. O IP era pura lógica — não tinha fios nem
   conectores, nem especificações de temporização nem hardware. E era grátis e não era produto
   proprietário de empresa nenhuma.** Conforme corporações começaram a ligar computadores díspares
   em redes, os departamentos de TI passaram a ver o valor de um protocolo neutro de fornecedor.
   Progressivamente, corporações fizeram do IP o protocolo de espinha dorsal, e a Cisco fez do IP o
   protocolo central dos roteadores dela. **De forma crítica, nenhum dos incumbentes do setor pulou
   para ocupar esse espaço com força. Cada um tinha o próprio protocolo proprietário e era relutante
   em abandoná-lo totalmente. E cada um era ainda mais relutante em produzir equipamento que
   ajudasse o equipamento de um concorrente a entrar na rede.**
4. **A explosão do uso público da internet em 1993.** Dentro das corporações, os usuários de repente
   queriam acesso à internet — não acesso discado por modem, mas conexão direta sempre ligada à
   espinha dorsal IP. Enquanto universidades e corporações corriam para viabilizar isso, **o IP
   venceu a batalha dos padrões internos de rede, e os roteadores da Cisco capturaram dois terços do
   mercado corporativo.** Ao mesmo tempo, o tráfego na espinha dorsal da internet disparava e a
   Cisco estava lá, fornecendo os roteadores de alta velocidade. **Onde havia barreiras
   competitivas, a Cisco manobrou em volta:** entre 1992 e 1994 trabalhou com a IBM para acrescentar
   suporte ao protocolo proprietário SNA nos roteadores dela, e com a AT&T e outras para garantir
   que o equipamento dela suportasse os protocolos do setor de telecomunicações.

> Diante de uma história corporativa de sucesso, muita gente pergunta: quanto do sucesso foi
> habilidade e quanto foi sorte? **A saga da Cisco ilustra vividamente que a mistura de forças é
> mais rica do que só habilidade e sorte. Sem as ondas poderosas varrendo computação e
> telecomunicações, a Cisco teria continuado uma jogadora de nicho pequena.** Os gestores e
> tecnólogos dela foram muito hábeis em identificar e explorar essas ondas, **e tiveram sorte o
> bastante de não cometer nenhum erro fatal.** O concorrente-chave IBM estava puxando os socos
> depois de treze anos de litígio antitruste. A internet apareceu na hora certa para acelerar a
> subida. **E vários incumbentes foram contidos pela própria inércia, pelas estratégias deles de
> apoiar um protocolo único ou proprietário, e pela própria rapidez da mudança.**

### Os cinco guias

Rumelt é honesto sobre o estado do conhecimento: **não existe teoria simples ou framework para
analisar ondas de mudança.** Ele cita o professor de física dele, prêmio Nobel: *"este curso é
rotulado de 'avançado' porque a gente não entende muito bem. Se houvesse uma teoria clara e
consistente sobre o que está acontecendo aqui, a gente chamaria de física 'elementar'."* **Trabalhar
com mudança setorial ou econômica é ainda mais avançado que física de partículas.**

Felizmente, **um líder não precisa acertar totalmente — a estratégia da organização só precisa estar
mais certa que a dos rivais. Se você consegue enxergar 10% mais claramente que os outros através do
nevoeiro da mudança, você pode ganhar uma vantagem.** Os cinco guias:

**Guia 1 — Custos fixos crescentes.** A forma mais simples de transição é disparada por aumentos
substanciais em custos fixos, especialmente custos de desenvolvimento de produto. Isso pode forçar o
setor a consolidar, porque só os maiores concorrentes conseguem cobrir esses custos fixos. **O
exemplo: no setor de filme fotográfico, a passagem do preto-e-branco para o colorido nos anos 1960
fortaleceu os líderes.** Uma análise perspicaz observa que no setor maduro de filme preto-e-branco
havia pouco incentivo para investir pesado em P&D, porque a qualidade do filme já excedia as
necessidades da maioria dos compradores. **Mas havia retornos grandes a melhorias na qualidade e na
facilidade de processamento do filme colorido.** Conforme os custos de P&D de filme colorido
escalaram, muitas firmas foram expulsas do mercado, e a onda deixou para trás um setor consolidado
de firmas menos numerosas e maiores. Dinâmica semelhante: a ascensão da IBM à dominância na
computação no fim dos anos 1960, movida pelos custos crescentes de desenvolver computadores e
sistemas operacionais; e a transição de motores a pistão para motores a jato mais sofisticados, que
cortou o campo de jogadores para três.

**Guia 2 — Desregulamentação.** Muitas transições importantes são disparadas por mudanças grandes na
política governamental. Observações gerais que Rumelt faz sobre esse tipo de transição, e que valem
como padrão:

- **Preços regulados são quase sempre arranjados para subsidiar alguns compradores à custa de
  outros.** Preços aéreos regulados ajudavam viajantes rurais à custa de viajantes transcontinentais.
  Preços de telefonia subsidiavam clientes rurais e suburbanos à custa de urbanos e empresariais.
- **Quando a competição de preço se instala, esses subsídios diminuem razoavelmente rápido, mas os
  jogadores recém-desregulados perseguem o que costumava ser o segmento mais lucrativo por muito
  tempo depois que o diferencial desapareceu.** Isso acontece por causa da inércia nas rotinas
  corporativas e nos mapas mentais do terreno, e por causa de dados de custo ruins.
- **Empresas altamente reguladas não conhecem os próprios custos.** Elas terão desenvolvido sistemas
  complexos para justificar custos e preços — sistemas que escondem os custos reais **até delas
  mesmas.** Leva anos para uma empresa antes regulada, ou um ex-monopolista, extrair excesso de
  pessoal e outros custos do sistema e parar os contadores de fazer alocações arbitrárias de
  overhead. **Enquanto isso, esses vieses mentais e contábeis significam que essas empresas podem
  encerrar linhas de produto que são de fato lucrativas e continuar investindo em produtos e
  atividades que não oferecem retorno real.**

**Guia 3 — Vieses previsíveis de previsão.** Ao ver o que está acontecendo, ajuda entender que você
estará cercado de vieses previsíveis:

- **As pessoas raramente preveem que uma tendência de negócio ou econômica vai atingir um pico e
  depois declinar.** Se as vendas de um produto crescem rápido, a previsão será de crescimento
  continuado, com a taxa declinando gradualmente para níveis "normais". Isso pode valer para um
  produto de compra frequente, **mas pode estar muito errado para um bem durável.** Para produtos
  duráveis — TVs de tela plana, aparelhos de fax, cortadores de grama — há uma expansão rápida
  inicial de vendas, mas depois de um tempo todo mundo interessado já adquiriu um, **e as vendas
  podem sofrer queda brusca.** Depois disso, as vendas acompanham crescimento populacional e demanda
  de reposição. **Prever a existência desses picos não é difícil, embora o timing não possa ser
  cravado até a taxa de crescimento começar a desacelerar. A lógica é contraintuitiva para muita
  gente: quanto mais rápida a adoção de um produto durável, mais cedo o mercado ficará saturado.**
  Muitos gestores acham essas previsões desconfortáveis, e até perturbadoras. Como um cliente disse
  a Rumelt: *"professor, se você não consegue tirar essa corcova da previsão, eu acho um consultor
  que consiga."*
- **Diante de uma onda de mudança, a previsão padrão será de uma "batalha de titãs"** — a predição
  de que os líderes de mercado vão brigar pela supremacia, minando as firmas médias e pequenas. Às
  vezes está certa, mas tende a ser aplicada a quase todas as situações. **O exemplo é a
  "convergência" de computação e telecomunicações**, prevista por anos. Uma das previsões mais
  influentes foi a de "C&C" (computadores e comunicações) do presidente da NEC em 1977, que
  imaginava sistemas telefônicos com apoio de computação — telefones que traduziriam frases faladas
  de uma língua para outra — e previa que a convergência acompanharia os avanços na integração de
  circuitos. Com essa visão firmemente na cabeça, ele empurrou a NEC na direção de mais e mais poder
  computacional, buscando construir supercomputadores cada vez mais rápidos e compactos. O governo
  americano desregulamentou a AT&T em parte para prepará-la para a batalha antecipada com a IBM.
  **O problema é que a convergência não aconteceu do jeito que "deveria" acontecer. Como dois
  lutadores de sumô, AT&T e IBM avançaram para o centro do ringue, preparando-se para agarrar. E aí
  foi como se o chão sob eles desmoronasse, jogando os dois num poço embaixo. As próprias fundações
  sobre as quais eles estavam foram comidas pelas ondas de mudança — o microprocessador, o software,
  a desconstrução da computação e a internet. Ter um destino comum não era o tipo de convergência
  que tinha sido imaginado.**
- **Em tempo de transição, o conselho padrão oferecido por consultores e analistas será adotar as
  estratégias dos concorrentes que hoje são os maiores, os mais lucrativos, ou os que mostram a
  maior valorização de ação.** Mais simplesmente: preveem que os vencedores futuros serão, ou
  parecerão, os aparentes vencedores atuais. Três exemplos: consultores aconselharam companhias
  aéreas a copiar a estratégia de hub-and-spoke de uma líder, **mas os lucros dela vinham de preços
  subsidiados nas rotas curtas para cidades rurais — subsídios que estavam desaparecendo com a
  desregulamentação;** enquanto a ação da WorldCom voava alto, consultores instavam clientes a
  entrar no jogo de anéis de fibra em torno de cidades (vinte e um em torno de Denver!), conselho
  que teve de ser retirado quando as companhias telefônicas sonolentas acordaram e começaram a
  cortar preços, e a WorldCom quebrou; em 1999 o conselho para startups web era criar um "portal",
  **mas embora essas empresas fossem as estrelas do momento, as estratégias iniciais delas de
  capturar e canalizar tráfego logo foram tornadas obsoletas pela escala pura da internet em
  expansão.**

**Guia 4 — Resposta do incumbente.** Aponta para a importância de entender a estrutura das respostas
dos incumbentes a uma onda. **Em geral, espera-se que firmas incumbentes resistam a uma transição
que ameace solapar as habilidades complexas e as posições valiosas que elas acumularam ao longo do
tempo.** (Os padrões de inércia são o capítulo seguinte.)

**Guia 5 — Estados atratores.** O conceito mais útil do capítulo. **Um estado atrator setorial
descreve como o setor "deveria" funcionar à luz das forças tecnológicas e da estrutura da demanda.**
Ao dizer "deveria", Rumelt enfatiza **uma evolução na direção da eficiência — atender às
necessidades e demandas dos compradores da forma mais eficiente possível.** Ter um ponto de vista
claro sobre o estado atrator de um setor ajuda a surfar a onda com mais graça.

O exemplo: durante 1995–2000, a visão estratégica da Cisco de **"IP em toda parte"** era, na
verdade, a descrição de um estado atrator. Nesse futuro possível, todos os dados se moveriam como
pacotes IP, seja em Ethernets domésticas, redes sem fio, redes ATM de companhias telefônicas ou
cabos submarinos; e toda informação seria codificada em pacotes IP, fosse voz, texto, imagem,
arquivo ou videoconferência. **Outras firmas imaginavam um futuro em que as operadoras forneceriam
redes "inteligentes" e "serviços de valor agregado" — termos que na prática significavam que as
operadoras forneceriam protocolos, hardware e software especiais para suportar serviços como
videoconferência. Em contraste, no estado atrator "IP em toda parte", a "inteligência" da rede seria
fornecida pelos dispositivos plugados nos pontos finais — a rede em si seria um duto padronizado de
dados.**

> **Um estado atrator fornece um senso de direção para a evolução futura de um setor. Não há garantia
> de que esse estado se realizará, mas ele representa uma atração parecida com a da gravidade.**
>
> **A distinção crítica entre um estado atrator e muitas "visões" corporativas é que o estado atrator
> se baseia na eficiência geral, e não no desejo de uma única empresa de capturar a maior parte da
> torta.** A visão "IP em toda parte" era um estado atrator porque era mais eficiente e eliminava as
> margens e as ineficiências ligadas a uma miscelânea de padrões proprietários.

**Dois complementos da análise de estado atrator: acelerantes e impedimentos.**

Um tipo de acelerante é o que Rumelt chama de **efeito de demonstração — o impacto de evidência na
cara sobre percepções e comportamento do comprador.** Exemplo: a ideia de que músicas e vídeos eram
simplesmente dados era, para a maioria das pessoas, um detalhe intelectual fino **até o Napster.
Então, de repente, milhões ficaram rapidamente conscientes de que uma música de três minutos era um
arquivo de 2,5 megabytes que podia ser copiado, movido e até enviado por e-mail à vontade.**

Como exemplo de impedimento, o setor de energia elétrica: dada a capacidade limitada da atmosfera
para compostos de carbono queimados, o estado atrator óbvio seria energia nuclear, e o caminho mais
simples seria substituir caldeiras a carvão e óleo por caldeiras nucleares modernas. **O impedimento
principal ao movimento nessa direção nos EUA é o processo de licenciamento convoluto e altamente
incerto — em cada estágio, autoridades locais, estaduais e federais estão envolvidas, além dos
tribunais. Enquanto a França leva cinco anos para licenciar e construir uma usina inteira, uma
concessionária americana provavelmente levaria dez anos ou mais só para fazer a troca da caldeira.**

**A análise de estado atrator aplicada aos jornais**, que é a mais próxima de um negócio de
conteúdo. A complexidade especial de jornais, TV, sites e muitas outras mídias vem da **estrutura
indireta de receita — eles recebem boa parte da renda de publicidade.**

O desafio é especialmente agudo para um jornal de referência com circulação de cerca de um milhão de
exemplares em dia útil. As taxas de assinatura e de banca renderam US$ 668 milhões em 2008, mais que
suficiente para cobrir redação e despesas administrativas. **O problema é o custo de imprimir e
distribuir fisicamente o jornal: esses custos são cerca de duas a três vezes a receita de assinatura
e vinham sendo cobertos por anunciantes. E em 2009 a receita publicitária entrou em declínio
acentuado.**

Duas forças em ação. **Primeira, a leitura está desacelerando** porque os leitores de hoje têm
acesso gratuito a notícias 24 horas, acesso online gratuito a manchetes básicas, e acesso online
gratuito a milhares de blogs e artigos especializados de comentário e análise. **Assim como a loja
de departamentos de centro urbano de meados do século foi espremida entre o shopping suburbano e os
descontões, os leitores agora podem pular o jornal de propósito geral em favor de conteúdo ao mesmo
tempo mais barato e mais fascinante. Segunda, a publicidade em jornal vem declinando desde meados
dos anos 1980. Os anunciantes de hoje estão cada vez mais interessados em mídias mais direcionadas,
que vão além de demografia e identificam os interesses específicos de um consumidor. Esse é o poder
do Google — a capacidade de usar o conteúdo das buscas para identificar os interesses dos usuários.**

**O modelo analítico que ele propõe:** mídias noticiosas podem ser diferenciadas em três dimensões —
**território** (mundial, nacional, regional, local), **frequência** (de hora em hora, diária etc.) e
**profundidade** (manchete, matéria de fundo, análise aprofundada de especialista).

> **O estado atrator para notícia contém especialistas ao longo de cada uma dessas dimensões, em vez
> de generalistas tentando ser tudo para todo mundo.** Com acesso eletrônico à informação,
> simplesmente não há boa razão para continuar empacotando notícia local, nacional e mundial juntas
> e ainda acrescentar tempo, esportes, quadrinhos, palavras cruzadas, opinião e conselho pessoal à
> mistura.
>
> **Nesse movimento em direção ao estado atrator, jornais diários generalistas de grande circulação
> vão desaparecer.** Notícia local e mídias noticiosas mais especializadas vão continuar existindo e
> até florescer. **O desafio estratégico de um grande jornal não é "ir para o digital" nem "mais
> publicidade" — é desagregar as atividades dele.**

E o desenho que ele esboça para esse estado desagregado: provavelmente continuaria havendo mercado
para notícia local, tempo e esportes cobertos por um jornal diário, embora ele tivesse que operar
com menos overhead e menos pretensão. **É provável que o veículo apropriado para análise aprofundada
e jornalismo investigativo seja uma revista semanal**, entregue em leitor digital e disponível
gratuitamente online depois de um mês. Em contraste, **notícia nacional e mundial de topo será
entregue mais apropriadamente online, especialmente em plataformas móveis.** Um complemento
interessante seria um canal de notícias a cabo. Para reduzir custos, **parcerias com jornais de
capitais e com jornalistas independentes pelo mundo ajudariam — estratégia que usaria a marca do
jornal como ferramenta de barganha.** Oportunidades online semelhantes existirão para cobertura de
negócios, política, artes e ciência.

**E a mudança editorial que isso implica:** ao migrar para um modelo online, um jornal tradicional
grande precisará **colocar muito mais ênfase em agregar conteúdo de uma variedade de fontes e
autores do que em depender de jornalistas do quadro. Mídias online bem-sucedidas apresentam ao
usuário um ninho cuidadosamente selecionado de links para artigos, matérias, blogs e comentários.**
Até hoje não há fonte online bem-sucedida de receita que não seja publicidade, **e quanto mais a
publicidade puder ser direcionada com base em demografia e interesses revelados do usuário, mais um
site pode cobrar pelo espaço.**

---

## 14. Inércia e entropia

> Mesmo com os motores em ré total, um superpetroleiro pode levar um quilômetro e meio para parar.
> Essa propriedade da massa — resistência à mudança de movimento — é **inércia**. Nos negócios,
> inércia é a **incapacidade ou a falta de vontade de uma organização de se adaptar a circunstâncias
> em mudança.** Mesmo com programas de mudança rodando a todo vapor, pode levar muitos anos para
> alterar o funcionamento básico de uma empresa grande.

E se a inércia organizacional fosse a história toda, uma corporação bem adaptada permaneceria
saudável e eficiente enquanto o mundo externo permanecesse inalterado. **Mas outra força também
opera: a entropia.** Na ciência, entropia mede o grau de desordem de um sistema físico, e a segunda
lei da termodinâmica diz que a entropia sempre aumenta num sistema físico isolado. **Da mesma forma,
organizações mal geridas tendem a se tornar menos organizadas e menos focadas. A entropia torna
necessário que líderes trabalhem constantemente na manutenção do propósito, da forma e dos métodos
da organização, mesmo que não haja mudança nenhuma de estratégia ou de concorrência.**

**Duas implicações estratégicas grandes:**

1. **Estratégias bem-sucedidas frequentemente devem muito à inércia e à ineficiência dos rivais.** A
   Netflix passou por cima da Blockbuster, hoje falida, porque esta não conseguiu, ou não quis,
   abandonar o foco em lojas de varejo. Apesar de uma grande vantagem inicial em sistemas
   operacionais para celular, a lentidão da Microsoft em melhorar aquele software forneceu uma
   abertura enorme para concorrentes, pela qual Apple e Google passaram rapidamente. **Entender a
   inércia dos rivais pode ser tão vital quanto entender as próprias forças.**
2. **O maior desafio de uma organização pode não ser ameaça ou oportunidade externa, mas os efeitos
   da entropia e da inércia.** Nessa situação, **renovação organizacional vira prioridade.
   Transformar uma organização complexa é um desafio intensamente estratégico: os líderes precisam
   diagnosticar as causas e os efeitos da entropia e da inércia, criar uma política norteadora
   sensata para efetuar a mudança, e desenhar um conjunto de ações coerentes projetadas para alterar
   rotinas, cultura e a estrutura de poder e influência.**

### As três formas de inércia

**1. A inércia da rotina.** O batimento cardíaco de qualquer negócio de porte é o pulso rítmico dos
procedimentos-padrão de comprar, processar e comercializar bens. Mesmo a corrida ofegante atrás de
um cliente novo importante, o dimensionamento de uma instalação nova e a formulação de planos são
movimentos familiares num jogo já jogado antes. **Uma organização com algum tamanho e alguma idade
repousa sobre camada após camada de conhecimento e experiência compactados, encapsulados em rotinas
— o "jeito como as coisas são feitas".** Essas rotinas não só limitam a ação ao familiar; elas
**filtram e moldam as percepções dos gestores sobre as questões.** Os métodos e rotinas padrão de
uma organização agem para preservar formas antigas de categorizar e processar informação.

A inércia de rotina fica visível quando há choques externos súbitos: uma triplicação do preço do
petróleo, a invenção do microprocessador, a desregulamentação das telecomunicações. **O choque muda
a base da competição no setor, criando uma lacuna significativa entre as rotinas antigas e as
necessidades do regime novo.**

**O caso Continental Airlines, 1980.** A desregulamentação aérea americana de 1978 foi um choque
desses. As rotinas de tocar uma companhia aérea e os conceitos de concorrência tinham se fixado ao
longo de décadas de regulação forte. A desregulamentação de repente soltou muitas restrições à ação,
**mas muitos dos movimentos dos primeiros anos foram guiados por regras de bolso antigas em vez de
pelas realidades da situação nova.**

A economia do setor: a unidade padrão de produção é o **assento-milha disponível** — pegue um
assento, leve-o a dez mil metros e mova-o um quilômetro. **Os custos operacionais por assento-milha
caem com a distância da viagem, porque muitos custos são fixos** (serviço da aeronave, desgaste,
limpeza, comida e até parte dos custos de tripulação não dependem muito da distância). Uma viagem
curta de 590 km podia custar US$ 0,22 por assento-milha, enquanto uma de 3.200 km custava só US$
0,09. **O Congresso queria promover viagem aérea a cidades pequenas, então na era da regulação a
agência reguladora fixava tarifas abaixo do custo nas rotas curtas e forçava cada companhia a
voá-las. As perdas nas rotas curtas eram cobertas pelos lucros das rotas longas, onde a agência
fixava preços acima do custo.** E, claro, a agência forçava cada companhia a voar uma mistura de
rotas.

**A análise de Rumelt e do time era que, com a desregulamentação, as tarifas passariam a
acompanhar de perto os custos. Preços e margens nas rotas curtas subiriam, e cairiam nas rotas
longas.** A implicação: com a desregulamentação, o lucro só viria de dois jeitos — **estrutura
operacional de baixo custo, ou esperteza em pegar rotas curtas sem volume suficiente para sustentar
concorrência vigorosa.**

Naquele momento, o sentimento dominante no setor era que estratégias de baixo custo atrairiam muitos
consumidores, **mas que o viajante a negócios continuaria relativamente insensível a preço.** O
raciocínio de Rumelt era diferente: claro que viajantes a negócios queriam viagem frequente,
conveniente e confortável, **mas a maioria deles não pagava pela própria viagem — os empregadores
pagavam. E empregadores podiam estar mais interessados em custo de viagem do que em conforto.** Ele
previu que **mesmo com as taxas de ocupação subindo, preços e margens cairiam.**

Esse ponto de vista contradizia diretamente a sabedoria dominante no setor recém-desregulado. Rotas
longas sempre tinham sido lucrativas. Poucos meses antes, o CEO batalhador da United tinha dado uma
palestra a analistas de Wall Street dizendo que a estratégia dele era eliminar rotas curtas de
alimentação e **"concentrar nas rotas longas, onde está o dinheiro"**, comprometendo a empresa a
gastar US$ 3 bilhões numa frota nova de longo curso centrada em Chicago. Outra companhia também
tinha reagido à era nova acrescentando rotas longas novas.

**As ideias de Rumelt não foram bem recebidas pelo comitê executivo da Continental.** A resposta,
anunciada de cima: *"você entendeu tudo errado. A gente já rodou um modelo de planejamento e sabe
que as tarifas costa a costa têm que subir, não cair. A questão é qual equipamento novo a gente
deve comprar."*

**A descoberta**, e é o coração do capítulo. Levou uma semana para ele rastrear o modelo. O "modelo
de planejamento" da Continental era um programa de computador chamado Planejador de Frota, fornecido
pela Boeing para ajudar companhias aéreas a tomar decisões de aquisição de equipamento. Dada uma
estrutura de rotas e um perfil de equipamento, ele calculava custos operacionais e cuspia
demonstrações financeiras previstas.

Sentado ao lado do especialista do escritório financeiro, Rumelt entendeu como funcionava. Para
rodar o programa era preciso dizer a ele quais rotas seriam voadas, projetar uma participação de
mercado em cada uma e especificar o equipamento. **O programa combinava isso com dados de custo
operacional e calculava o custo por assento-milha em cada rota. Estimando que 55% dos assentos
estariam ocupados, ele então acrescentava um retorno de 12% sobre o capital e projetava uma
tarifa.** Essa era a tarifa que "tinha que subir, não cair".

> — **Essa é a tarifa prevista? Mas isso é só custo mais uma margem!**
> — *A gente usa essa ferramenta há muito tempo*, respondeu o especialista friamente. *Tem sido
> bem confiável.*
> — **O que acontece com esses números — para onde eles vão daqui?**
> — *Vão para a agência reguladora, junto com um monte de outras coisas, como parte do planejamento
> de tarifas.*

> **O sistema da Continental para projetar tarifas aéreas para a era nova de concorrência era o
> mesmo que ela tinha usado durante toda a era de regulação para sugerir e justificar tarifas nas
> negociações com o regulador. Essa projeção não tinha nada a ver com concorrência, oferta, demanda,
> capacidade ou forças de mercado. Ela pegava custos e acrescentava uma margem. Ela "previa" o que a
> agência faria ao fixar tarifas.** O Planejador da Boeing era uma boa ferramenta, mas não era um
> previsor de tarifas a menos que você tivesse um regulador garantindo que você teria 12% de retorno
> voando aviões pela metade.

**Apesar da desregulamentação, dos discursos animados do CEO sobre o novo espírito competitivo da
empresa e da postura agressiva assumida pela alta gestão, as rotinas de planejamento, precificação e
marketing da empresa estavam inalteradas em relação à era da regulação. O novo espírito competitivo
era pura agressividade, sem liga de ofício.**

**E havia uma segunda regra de bolso morta ainda controlando as decisões**, que levou mais um mês
para descobrir. Ao fixar tarifas que davam às companhias um retorno "justo" de 12% sobre o capital,
onde capital era patrimônio mais dívida, **o regulador tinha, na prática, garantido que os juros da
dívida de uma companhia aérea sempre seriam pagos.** Bastava não se desviar muito da norma geral. Os
bancos tinham uma regra semelhante sobre dívida de companhia aérea ser bom risco de crédito. **Isso
teve influência enorme sobre a atitude em relação a equipamento novo.** Quando as companhias
passaram de hélice para jato, e de novo de fuselagem estreita para larga, bilhões de dólares foram
gastos em aeronaves novas, acrescentando pedaços tremendos de capacidade nova. **Num setor normal,
uma onda de equipamento novo posto em serviço por todos os concorrentes teria forçado um colapso de
preços e prejuízos grandes. E, num setor normal, os concorrentes não conseguem todos acrescentar
capacidade ao mesmo tempo, a menos que haja um surto notável de demanda. Mas no negócio aéreo o
regulador dava uma mão, escorando preços — e até aumentando-os — nesses períodos de sobrecapacidade.
Reequipar não tinha sido um problema estratégico. Uma regra simples bastava: reequipe quando todo
mundo reequipar.**

**A desregulamentação tornou obsoletas as regras antigas.** "Vá atrás das rotas longas", "as tarifas
cobrirão os custos totais" e "reequipe quando todo mundo reequipar" não iam funcionar no futuro.
**De 1979 a 1983 as grandes continuaram a executar as regras antigas. Em 1981, United, American e
Eastern juntas perderam US$ 240 milhões, enquanto todas as transportadoras de rotas mais curtas
tiveram lucro.** Nas duas décadas seguintes, só a Southwest seria consistentemente lucrativa. **Em
1984 e 1985 as tarifas em rotas longas caíram 27%. Em rotas curtas de baixo volume, as tarifas
subiram 40%, mais que cobrindo os custos. A análise do time estava essencialmente certa. Não era
ciência de foguete, mas era contrário às regras de bolso de longa data.**

O desfecho é sombrio: estar certo nem sempre ajuda o decisor. No caso da Continental, uma greve
desagradável desviou a atenção da gestão da dinâmica de mercado. O plano de comprar aeronaves novas
foi abortado quando as tarifas não subiram e as perdas se acumularam. Sentindo o apuro da firma, um
empreendedor iniciou uma tomada hostil. **A alta gestão não conseguia acreditar que a pequena Texas
Air pudesse comprar uma companhia aérea grande — só no fim dos anos 1980 as gestões corporativas
americanas se acostumariam com essa ideia. Frustrado, irritado e sofrendo uma depressão profunda e
secreta, o CEO da Continental se matou com um tiro na mesa dele em agosto de 1981.**

**A boa notícia sobre esse tipo de inércia:** inércia por rotinas obsoletas ou inapropriadas **pode
ser consertada. As barreiras são as percepções da alta gestão. Se os líderes seniores se convencerem
de que rotinas novas são essenciais, a mudança pode ser rápida.** Os instrumentos padrão são
contratar gestores de firmas que usam métodos melhores, adquirir uma firma com métodos superiores,
usar consultores, ou simplesmente redesenhar as rotinas. **Em qualquer desses casos, provavelmente
será necessário substituir pessoas que investiram muitos anos desenvolvendo e usando os métodos
obsoletos, além de reorganizar as unidades de negócio em torno de padrões novos de fluxo de
informação.**

**2. A inércia da cultura.** É muito mais difícil. O caso é a AT&T em 1984.

Como inventora do Unix, que hoje está sob o Linux de código aberto e sob o macOS, a AT&T deveria ter
sido jogadora importante, especialmente em comunicação entre computadores. Contratado como
consultor, Rumelt trabalhou em produtos e estratégias novas. Os planos incluíam desenvolver e marcar
pacotes-chave de software com a marca AT&T; disponibilizá-los e a módulos adicionais para venda
eletrônica, por linha telefônica, com "computadores comunicantes"; e desenvolver uma versão mais
simples do Unix para a plataforma PC, que começasse a suportar interface gráfica.

**Conforme construía relações internas, alguns gestores de alto nível lhe contaram o que viam como
segredo constrangedor: a AT&T não era competente em desenvolvimento de produto.** Sim, a empresa era
a orgulhosa dona dos Bell Labs, inventora do transistor, da linguagem C e do Unix, lugar maravilhoso
que sondava profundamente os fundamentos da natureza. **Mas não havia competência dentro da AT&T em
fazer produtos de consumo que funcionassem.**

As histórias:

- **Telefonia celular.** A partir de 1947 os Bell Labs desenvolveram as ideias básicas subjacentes à
  telefonia móvel. **No entanto, o primeiro teste de mercado, em 1977, teve que ser feito usando
  equipamento da Motorola.**
- **Videotex.** Em 1983 a AT&T tinha uma joint venture com uma cadeia de jornais para testar um
  sistema que forneceria notícias, tempo, horários de voo, resultados esportivos e informação
  comunitária como texto numa TV doméstica. **Mas os Bell Labs não conseguiram entregar software
  capaz de lidar nem com as demandas leves do mercado de teste. O software que rodou o sistema
  acabou desenvolvido por uma empresa pequena subcontratada pela cadeia de jornais.**
- **A lição pessoal de Rumelt.** Ele queria demonstrar à alta gestão o potencial de vender software
  por computador. A metáfora era um elevador: primeiro andar jogos, segundo utilitários, terceiro
  cálculos. Conversaram com os Bell Labs sobre um programa simples de PC para demonstrar essa
  interface. **Eles orçaram três milhões de dólares e dois anos.** Ele sugeriu uma abordagem mais
  simples e foi informado por um representante dos Bell Labs para **"não interferir nas nossas
  prerrogativas de projeto".** Frustrado, ele mesmo escreveu o código direto da demonstração **em
  três semanas.**

> **O problema na AT&T não era a competência dos indivíduos: era a cultura — as normas de trabalho e
> as mentalidades.** Os Bell Labs faziam pesquisa fundamental, não desenvolvimento de produto. A
> reação a um pedido de código de demonstração foi como se engenheiros da Boeing tivessem sido
> convidados a projetar aviõezinhos de brinquedo. **Assim como numa universidade grande, os avanços
> de um número minúsculo de indivíduos muito talentosos tinham sido usados para justificar uma vida
> contemplativa para milhares de outros.**
>
> Ao longo das muitas décadas em que a AT&T foi monopólio regulado, essa cultura cresceu e
> floresceu. Agora, com desregulamentação, concorrência e oportunidades disparadas em computação de
> massa e comunicação de dados, **esse jeito de fazer as coisas era um impedimento enorme à ação. E,
> para piorar, a inércia massiva do sistema não estava sendo contrariada: sem entendimento real de
> tecnologia, a maioria dos gestores seniores não compreendia nem apreciava o problema. E os poucos
> que compreendiam não tinham quase nenhuma chance de mudar o caráter dos Bell Laboratories, joia da
> coroa do P&D americano, centro que produziu laureados com o Nobel.**

> **O trabalho de estratégia que fiz na AT&T em 1984–85 foi desperdício. A lição duramente
> conquistada foi que uma boa estratégia de produto-mercado é inútil se competências importantes,
> presumidas presentes, estão ausentes e o desenvolvimento delas está bloqueado por uma cultura
> estabelecida há muito tempo. Os objetivos aparentemente espertos que ajudei a criar eram
> inviáveis.**

**Sobre o que "cultura" quer dizer**, e Rumelt usa um exemplo brutal e vívido para calibrar: usamos
a palavra para marcar os elementos de comportamento social e de significado que são estáveis e
resistem fortemente à mudança. **Pol Pot matou um quinto da população cambojana, executou quase
todos os intelectuais, queimou quase todos os livros e proibiu religião, bancos, moeda e propriedade
privada — e ainda assim não alterou muito a cultura cambojana.** As culturas de organizações são
mantidas mais levemente que as de nacionalidade, religião ou etnia. **Ainda assim, é perigoso achar
que cultura organizacional pode ser mudada rápida ou facilmente.**

**O roteiro de quebra de inércia cultural**, que é o mais operacional do livro:

1. **Simplificação.** O primeiro passo. Ajuda a eliminar as rotinas complexas, os processos e as
   barganhas ocultas entre unidades que mascaram desperdício e ineficiência. **Retire camadas
   excedentes de administração e pare operações não essenciais — venda, feche, cinda ou terceirize
   os serviços. Comitês de coordenação e uma miríade de iniciativas complexas precisam ser
   dissolvidos.** A estrutura mais simples começará a iluminar unidades obsoletas, ineficiência e
   comportamento ruim simples que estavam escondidos por camadas complexas de administração e de
   interesse próprio.
2. **Fragmentação.** Depois da primeira rodada de simplificação, pode ser necessário fragmentar as
   unidades operacionais. **Esse é o caso quando as unidades não precisam trabalhar em coordenação
   estreita — quando são basicamente separáveis.** Essa fragmentação **quebra coalizões políticas,
   corta o conforto dos subsídios cruzados, e expõe um número maior de unidades menores ao escrutínio
   da liderança sobre as operações e o desempenho delas.**
3. **Triagem.** Depois da rodada de fragmentação, e de mais simplificação, é necessário fazer uma
   triagem. **Algumas unidades serão fechadas, algumas serão reparadas, e algumas formarão os núcleos
   de uma estrutura nova. A triagem tem que se basear tanto em desempenho quanto em cultura — você
   não pode se dar ao luxo de ter uma unidade de alto desempenho com cultura terrível infectando as
   outras.**
4. **Renovação unidade a unidade.** O terço "para reparar" precisa passar por manobras individuais de
   transformação e renovação. **Mudar a cultura de uma unidade significa mudar as normas de trabalho
   e os valores relacionados ao trabalho dos membros dela. Essas normas são estabelecidas, mantidas e
   impostas diariamente por pequenos grupos sociais que tomam a deixa do membro de status mais alto
   do grupo — o alfa. Em geral, para mudar as normas do grupo, o membro alfa precisa ser substituído
   por alguém que expresse normas e valores diferentes.** Tudo isso é acelerado se uma meta desafiadora
   for estabelecida. **O propósito do desafio não é o desempenho em si, mas construir hábitos e
   rotinas de trabalho novos dentro da unidade.**
5. **Recoordenação.** Uma vez que o grosso das unidades operacionais esteja funcionando bem, **pode
   ser hora de instalar uma camada nova de mecanismos de coordenação, revertendo parte da
   fragmentação que foi usada para quebrar a inércia.**

**3. A inércia por procuração.** A forma mais sutil, e a mais perigosa de interpretar errado.

**Falta de resposta nem sempre indica rotinas grudentas ou cultura congelada. Um negócio pode
escolher não responder a uma mudança ou a um ataque porque responder solaparia fluxos de lucro ainda
valiosos. Esses fluxos persistem por causa da inércia dos clientes — uma forma de inércia por
procuração.**

**Exemplo 1 — bancos, 1980.** A taxa básica de juros chegou a 20%. Com a liberdade então nova de
criar contas de mercado monetário para clientes, como os bancos responderam? Bancos menores e mais
novos buscando crescimento no varejo ficaram felizes em oferecer o novo tipo de depósito de juros
altos. **Mas muitos bancos antigos com clientes de longa data não ofereceram. Se os clientes deles
fossem perfeitamente ágeis, buscando rapidamente e migrando para as contas de maior juros, eles
teriam que oferecer contas de juros mais altos ou desaparecer. Mas os clientes deles não eram ágeis
assim.**

Rumelt era consultor de um banco de poupança da Filadélfia e perguntou sobre a estrutura de taxas
dos depósitos. Um vice-presidente tentou achar o folheto descrevendo as contas de mercado monetário
de juros mais altos e desistiu. Disse: *"nosso depositante médio é uma pessoa aposentada e não tão
sofisticada. **Aqueles fundos de depositante são o último grande poço de dinheiro a 5% que sobrou no
planeta!**"* O que ele queria dizer: podia emprestar o dinheiro dos depositantes e ganhar 12% ou
mais, pagando só 5% a eles. Claro que alguns depositantes iriam embora, mas a maioria não iria, **e
os lucros sobre a inércia deles eram enormes.**

> **A implicação importante para os concorrentes era que, naquele momento, um rival podia roubar
> clientes daquele banco sem disparar resposta competitiva.**

**Exemplo 2 — telecomunicações, 1998.** As operadoras regionais americanas variavam no número de
clientes empresariais que atendiam. Com a chegada da internet, quais foram as primeiras a oferecer
serviços DSL? **A oferta principal de dados das telefônicas para empresas eram linhas T1, cobradas a
uns quatro mil dólares por mês e oferecendo 1,5 Mbps. Em 1998, as velocidades de DSL eram cerca de
um terço da T1, mas os preços eram um trigésimo. Ou seja, um cliente podia replicar uma linha T1 com
três DSLs por um décimo do custo.**

**Em vez de canibalizar o negócio muito lucrativo de T1, as telefônicas que serviam Nova York,
Chicago e São Francisco simplesmente não jogaram — não ofereceram DSL.** Elas perdiam cerca de 10%
do negócio corporativo de dados por ano para as operadoras da nova onda, **mas os lucros altíssimos
do negócio de T1 mais que compensavam o declínio.**

> **De novo, a aparente inércia das telefônicas era na verdade inércia por procuração, induzida
> porque os clientes delas eram muito lentos em trocar de fornecedor, mesmo diante de diferenças
> dramáticas de preço.**

**E a armadilha que isso arma para o atacante**, que é a parte mais importante:

> **Essa inércia por procuração enganou centenas de empresas e investidores. A taxa fantástica de
> expansão das operadoras de "rede nova" foi tomada como evidência de superioridade competitiva,
> desencadeando um frenesi de investimento e de valorização de ações. Quando as telefônicas
> finalmente começaram a responder em 2000, a bolha estourou. Uma vez que a concorrência real
> começou, foi uma derrota. Nenhuma das operadoras alternativas sobreviveu.**
>
> **Inércia por procuração desaparece quando a organização decide que se adaptar às circunstâncias
> mudadas é mais importante do que segurar fluxos de lucro velhos. Isso pode acontecer de repente.
> Atacantes que tiraram negócio de uma firma aparentemente sonolenta podem se ver subitamente sem
> lucro nenhum. E esse efeito pode ser magnificado, porque os clientes que migraram do incumbente
> inerte são, por autosseleção, os mais sensíveis a uma oferta melhor.**
>
> Por outro lado, **se o atacante conseguiu construir laços de custo e lealdade com os clientes
> recém-adquiridos, o retorno do incumbente a uma postura competitiva pode falhar em recuperar os
> compradores perdidos.**

### Entropia

Não é difícil ver a entropia em ação. Com a passagem do tempo, grandes obras de arte borram e se
desfazem, a intenção original desaparecendo a menos que restauradores hábeis façam o trabalho.
Dirija por uma rua suburbana e é fácil identificar a casa sem cuidado — ervas daninhas no jardim,
tinta descascando da porta. **Da mesma forma, dá para sentir uma empresa que não foi cuidadosamente
gerida. A linha de produtos fica menos focada; preços são fixados baixos para agradar o departamento
de vendas, e prazos de entrega são longos demais, agradando só a fábrica. Lucros são levados para
casa como bônus de executivos cuja única realização foi superar o executivo da mesa ao lado na
competição interna pelo butim da sorte e da história.**

> **A entropia é uma benção enorme para consultores de gestão e estratégia. Apesar de todos os
> conceitos de alto nível que consultores anunciam, o pão de cada dia do negócio de todo consultor é
> desfazer entropia — limpar os detritos e as ervas daninhas que crescem em todo jardim
> organizacional.**

**O caso Denton's, 1997, e o hump chart.** Uma rede familiar de vinte e oito lojas de jardinagem e
paisagismo em quatro estados, que datava dos anos 1930. Cada loja tinha uma parte fechada que vendia
suprimentos e ferramentas e um grande espaço aberto que vendia plantas, árvores, solos e materiais
de paisagismo. A empresa era dona de vinte dos locais e arrendava os outros oito. Os donos queriam
deixar a empresa em forma para passar aos filhos e entregaram cinco anos de resultados financeiros
por loja.

**A principal fonte de confusão era o tratamento do capital.** A medida de retorno sobre capital
por loja misturava alhos com bugalhos: um terreno comprado em 1950 tinha custado US$ 5 mil por acre
e um comprado em 1989 tinha custado US$ 95 mil por acre. **Os números de retorno sobre investimento
faziam o local mais antigo parecer um vencedor enorme comparado ao mais novo. Essa forma de medir
desempenho confundia varejo com ganho de investimento imobiliário.**

Para colocar cada local em base comparável, Rumelt criou uma medida nova de lucro operacional que
chamou de **ganho operacional** (GTO), ajustada para essas diferenças e para várias alocações. **A
melhor loja da rede tinha GTO de US$ 1,05 milhão e a pior tinha GTO de MENOS US$ 0,97 milhão — ou
seja, fechar aquela loja renderia US$ 970 mil a mais por ano do que continuar operando-a. A rede
inteira mostrava GTO de US$ 0,32 milhão, quadro muito diferente dos US$ 8 milhões de lucro líquido
que a contabilidade mostrava.**

**Como se constrói um hump chart** (o gráfico está ausente do PDF, mas está inteiramente descrito):
ordene as unidades da maior para a menor por ganho operacional. As barras mostram, para cada
posição, **o ganho cumulativo de operar todas as unidades daquela posição ou melhores.** A primeira
barra é a melhor loja: US$ 1,05 milhão. A segunda é loja 1 mais loja 2: US$ 1,68 milhão. A terceira
soma mais US$ 0,5 milhão, chegando a US$ 2,18 milhões. **As lojas 4 a 14 acrescentam mais US$ 2,5
milhões, levando o cumulativo a US$ 4,68 milhões. Mas, a partir da loja 15, os GTOs negativos
começam a puxar o cumulativo para baixo. Os GTOs negativos das lojas 15 a 28 somam MENOS US$ 4,4
milhões, cancelando quase totalmente as contribuições das lojas positivas. O GTO da loja número um
era maior que o da rede inteira de vinte e oito.**

> **Sempre que você conseguir atribuir lucro ou ganho a produtos individuais, pontos de venda,
> áreas, segmentos ou qualquer outra porção do total, você pode construir um hump chart.** Rumelt
> construiu o primeiro numa análise de mix de produtos, e desde então viu e ajudou a construir hump
> charts para planejar fechamento de bases militares, para produtos de eletrônicos, para clientes de
> telefônicas e para uma variedade de outras situações.
>
> **Se não há subsídios cruzados, as barras sobem suavemente até um máximo. Mas se algumas
> operações, produtos ou locais são subsidiados por outros, haverá uma verdadeira "corcova" no
> gráfico — as barras sobem até um máximo e depois começam a afundar conforme as operações
> deficitárias puxam para baixo os lucros do todo.**
>
> **Se as operações são separáveis, então uma corcova distinta, sustentada ao longo do tempo, indica
> falta de gestão. É um jeito de ver a entropia em ação.**

Na Denton's, os subsídios cruzados eram obscurecidos pelo sistema de medição e institucionalizados
ao longo do tempo. **Além das distorções causadas pelas medidas ruins de custo de espaço e terra, a
empresa media o desempenho mensal e anual de cada local pelo "lucro de operações do negócio", número
que omitia pagamentos de incentivo e bônus a funcionários.** A lógica era que, como os pagamentos de
incentivo eram definidos anualmente pela gestão corporativa, não deveriam ser cobrados diretamente
de cada local. **Mas, ao longo de muitos anos, os pagamentos de incentivo e bônus tinham virado
quase direitos adquiridos e eram pagos com base no lucro corporativo total, criando um subsídio dos
locais mais lucrativos para os menos lucrativos.**

Os donos ficaram chocados. *"Você não pode estar sugerindo que a gente largue metade dos locais"*,
disse a dona. **"Não"**, respondeu Rumelt. **"Mas pode fazer muito sentido fechar os locais de pior
desempenho. Se vocês fizerem isso, e consertarem os outros oito locais fracos, vocês vão dobrar os
lucros totais."**

**O que foi feito, e é notavelmente pouco glamoroso:** melhorar o desempenho dos locais mais fracos
levou dois anos, com métodos de gestão baseada em dados e transferência de melhores práticas. A
chave foi descobrir por que alguns locais tinham desempenho melhor que outros. **Vendas por metro
quadrado eram um driver importante, e eram fortemente afetadas pela localização, pela proximidade de
uma grande rede concorrente, pelo layout do viveiro e pela apresentação paisagística.** Os locais de
melhor desempenho tinham ido além do layout antigo em grade e **pareciam mais jardins.** As plantas
não eram apenas etiquetadas, **mas descritas em detalhe junto com sugestões de plantio e ideias de
combinação com outras plantas.** As plantas eram apresentadas em coleções atraentes, promovendo
compra por impulso. **Materiais de paisagismo não eram simplesmente empilhados, mas mostrados em
apresentações montadas, de novo ajudando os clientes a visualizar como usar aqueles materiais nas
próprias casas.** E as atividades de venda na loja, no jardim e na área de paisagismo eram separadas,
**porque as bases de conhecimento dos vendedores diferiam muito entre essas atividades.**

**Ao fim de dois anos, o ganho operacional da Denton's tinha subido de US$ 100 mil para mais de US$ 5
milhões, e o lucro contábil tinha dobrado. Cerca de metade do aumento veio de largar cinco lojas
fracas e a outra metade de um programa de melhores práticas.**

> **Nada dessa melhoria veio de um insight empreendedor profundo ou de inovação. Foi tudo apenas
> gestão — apenas desfazer a bagunça e o desperdício acumulados de anos de entropia em ação.**
>
> **Planejar e plantar um jardim é sempre mais interessante e estimulante do que capinar. Mas sem
> capina e manutenção constantes, o padrão que define um jardim — a imposição de uma ordem especial
> sobre a natureza — desaparece.**

**O caso General Motors** é o mesmo mecanismo em escala histórica, e vale porque é sobre **um design
de linha de produtos apagando-se ao longo de sessenta anos.**

Em 1921 a Ford tinha 62% do mercado automotivo americano, construído em torno do Modelo T, com preço
baixo alcançado por engenharia industrial de classe mundial. A GM era menor e tinha sido montada por
aquisições. Em abril de 1921 o presidente pediu a Alfred Sloan, então VP de operações, um estudo de
"política de produto". Naquele momento a empresa produzia dez linhas de veículos que juntas detinham
cerca de 12% do mercado. **As divisões Chevrolet, Oakland, Oldsmobile, Sheridan, Scripps-Booth e
Buick todas ofereciam automóveis na faixa de US$ 1.800 a 2.200. Nenhuma produzia um carro que
competisse com o Modelo T de US$ 495. Além disso, Chevrolet, Oakland e Oldsmobile estavam no
vermelho.**

Dois meses depois Sloan apresentou a política de produto. Ele insistiu que **"a linha de carros da
General Motors deveria ser integral, e que cada carro da linha deveria ser propriamente concebido na
relação dele com a linha como um todo"**. Mais especificamente, ele queria **"competição por
qualidade contra carros abaixo de uma dada etiqueta de preço, e competição por preço contra carros
acima daquela etiqueta"**. O plano dele não só cortou os preços dos carros da linha; **deu a cada
marca uma faixa única de preços dentro da qual operar. Essa política nova reduziu dramaticamente a
quantidade de competição intracorporativa e a poluição de produtos. Sob o conceito de Sloan, não
havia nebulosidade nem confusão sobre a diferença entre um Chevrolet, um Buick e um Cadillac.**

O comitê executivo adotou o plano, vendeu uma divisão e dissolveu outra. Sloan virou presidente em
1923. Uma divisão virou Pontiac cinco anos depois. **Em 1931 a GM tinha se tornado a maior montadora
e uma das corporações líderes do mundo.** Ao longo dos anos 1940 e 50, o conceito de Sloan virou
parte da cultura americana: **andando por um bairro suburbano, você conseguia dizer quem morava em
cada casa pelo carro estacionado na frente — pessoas comuns dirigiam Chevrolet, o encarregado um
Pontiac, o gerente um Buick e o presidente um Cadillac.**

> A política de produto de Sloan é um exemplo de design, de **ordem imposta ao caos.** Fazer uma
> política dessas funcionar exige mais do que um plano num pedaço de papel. **A cada trimestre, a
> cada ano, a cada década, a liderança corporativa tem que trabalhar para manter a coerência do
> design. Sem atenção constante, o design se deteriora. Sem manutenção ativa, as linhas que demarcam
> os produtos ficam borradas, e a coerência se perde.**

**E o mecanismo específico da deterioração, que é o mais transponível para uma escada de produtos:**

> Se a empresa é totalmente descentralizada, esse borramento de fronteiras é fatalmente certo, e o
> design original, baseado em marcas definidas por faixas de preço, fica soterrado sob uma bagunça
> de produtos novos. **Por exemplo, os executivos que tocavam a divisão Chevrolet sabiam que podiam
> aumentar as vendas e o lucro da divisão deles oferecendo alguns modelos de preço mais alto. Esse
> movimento poderia tirar algum negócio da Chrysler; também tiraria negócio da Pontiac e da
> Oldsmobile. Inversamente, os executivos que tocavam a Pontiac viam que podiam aumentar a receita
> da divisão deles se oferecessem alguns modelos de preço mais baixo, e empurravam nessa direção.**
>
> **Como um pai que tem que resistir a adolescentes de catorze anos pedindo cerveja na festa, o
> trabalho da gestão corporativa é resistir a essas imprecações e preservar o design. Se o design
> ficar obsoleto, o trabalho da gestão é criar uma forma nova de coordenar esforços, de modo que a
> energia competitiva seja direcionada para fora, e não para dentro.**

**Nos anos 1980 o design de Sloan tinha se apagado.** A GM não só tinha borrado marcas e divisões:
ela praticava engenharia de emblema, oferecendo essencialmente o mesmo veículo sob vários nomes de
modelo e de marca. Administrações mais recentes trabalharam para reduzir a sobreposição; **em 2001 a
divisão Oldsmobile foi fechada, reconhecimento cru de que os modelos dela tinham perdido qualquer
distinção em estilo ou em preço — e processos de concessionários deslocados tornaram isso muito
caro.**

**O quadro de 2008** (gráfico ausente, descrito no texto): restringindo a sedãs e cupês e omitindo
SUVs, vans, híbridos e caminhonetes, **os modelos estavam agrupados na faixa de mercado de massa de
US$ 20 a 30 mil. No ponto de preço de US$ 25.500, a General Motors oferecia NOVE veículos — dois
Chevrolet, um Saturn, quatro Pontiac e dois Buick. A Toyota oferecia dois carros naquele preço.**

**A consequência econômica**, e é a lição que serve a qualquer empresa com várias linhas:

> A perda de coerência na linha de produtos da GM **aumentou dramaticamente a quantidade de
> competição interna entre as marcas dela. Líderes de negócio tendem a ver competição como um vento
> limpo, soprando para longe desperdício e abuso. Mas o mundo não é assim tão simples. Se você
> investe em publicidade ou em desenvolvimento de produto para tirar negócio de um concorrente, isso
> pode aumentar a torta corporativa. Mas se você investe para tirar negócio de uma marca ou divisão
> irmã, isso pode tornar a torta corporativa inteira menor. Não só os investimentos em publicidade e
> desenvolvimento são parcialmente desperdiçados, como você provavelmente empurrou para baixo os
> preços das duas marcas.**

Em junho de 2009 a GM declarou falência e foi socorrida pelo governo, que virou acionista
majoritário. Sob proteção da falência, a empresa largou as marcas Saturn, Pontiac e Hummer.

**A comparação final entre os dois casos, e é ela que dá o critério de dificuldade:**

> **Reverter os efeitos da entropia na Denton's deu trabalho, mas o problema não era agravado por
> inércia substancial. Uma vez que as questões ficaram evidentes, tanto os líderes quanto a maioria
> dos gerentes estavam dispostos a remediar a situação. Em contraste, os problemas que afetavam a
> General Motors em 2008 foram criados por décadas de entropia COMBINADAS com inércia devida a
> rotinas obsoletas embutidas, cultura congelada e sistemas de elos em cadeia.**

---

## 15. Nvidia — o caso que junta tudo

Rumelt fecha a Parte II com um caso único que ilustra quase todos os blocos de construção: **kernel
completo (diagnóstico, política norteadora, ação coerente), antecipação inteligente, política que
reduz complexidade, poder do design, foco, uso de vantagem, surfar uma onda de mudança, e o papel
importante da inércia e da desordem dos rivais.**

### O contexto: 3-D, gamers e o padrão que veio de baixo

Muitos dos componentes fundamentais da tecnologia moderna de gráficos 3-D foram desenvolvidos numa
universidade americana no fim dos anos 1960, num programa que — diferentemente de outros
departamentos de ciência da computação que ensinavam alta teoria — **era focado no desafio prático
de renderizar imagens 3-D e construir simuladores de voo.** O programa produziu um número
espantoso de estrelas de computação gráfica, incluindo os fundadores da Adobe, da Atari, da Pixar e
da Silicon Graphics.

A SGI, fundada em 1982, mirou desde o início fazer as estações gráficas de alta resolução mais
rápidas do planeta. **A influência dela sobre o setor foi imensa: não só forneceu o hardware gráfico
de maior desempenho, como desenvolveu uma linguagem gráfica especial que virou padrão para boa parte
do setor. Juntos, o hardware e a linguagem enquadraram o problema dos gráficos 3-D de um jeito que
virou a lógica dominante — o chamado pipeline gráfico, abordagem que se apoiava em quebrar as
imagens da cena em triângulos, processar cada triângulo separadamente e juntá-los de novo para
formar a imagem final.** Em 1992 a SGI finalmente realizou o pipeline inteiro em hardware — um
sistema de bancos de processadores ligados a um "barramento de triângulos". A máquina tinha mais de
um metro de altura e custava mais de US$ 100 mil.

**Mas o mercado não veio de onde se esperava.** No início dos anos 1990 estava evidente que os chips
acabariam ficando rápidos o suficiente para fazer gráficos 3-D bons num PC. Mas as pessoas usariam
essa capacidade? E para quê? **Especialistas opinavam que talvez as pessoas fizessem viagens
virtuais a cidades distantes, ou que corretores de imóveis usassem 3-D para dar aos compradores
passeios virtuais pelas casas. Mas o mercado acabou sendo movido por outra aplicação: a ascensão
súbita de jogos de ação 3-D violentos para PC puxou os chips 3-D para o mercado.**

Rumelt conta a experiência de ver, no verão de 1994, o filho adolescente de um amigo jogando um jogo
em que a tela mostrava uma imagem parada de uma cena; ele clicava numa ponte e o CD-ROM rangia por
alguns segundos antes de a imagem mudar para a vista da ponte; havia música, mas nada se movia e
cada cena nova levava vários segundos para renderizar. Duas semanas depois, o mesmo garoto jogava
outro jogo: **um monstro descia a uma sala numa plataforma, atirando bolas vermelhas que cruzavam o
ambiente; o garoto usava mouse e teclado para desviar; não havia atraso nenhum. A cada movimento de
pulso a imagem se deslocava enquanto ele se movia por aquele espaço tridimensional.** O pai dele, um
cientista da computação de uma escola de engenharia de prestígio, comentou: *"é realmente notável. Eu
não teria adivinhado que dava para renderizar gráficos 3-D tão rápido num computador pessoal. Existem
programas que fazem renderização 3-D em PCs, mas eles levam minutos ou até horas para criar uma cena,
não milissegundos."*

Esses jogos redefiniram jogos de ação, introduziram tecnologias novas para exibir cenas 3-D em PCs e
**moveram o centro de gravidade da inovação em jogos do setor de consoles para a plataforma PC.**
Além disso, a produtora foi uma das primeiras a explorar habilmente a internet então nova:
**distribuiu o jogo com nove fases sem custo, online. Uma vez viciado, o jogador podia comprar a
versão registrada e jogar fases adicionais.** Com distribuição gratuita pela internet crescente, o
jogo virou sensação da noite para o dia.

**Em 1996 a produtora acrescentou jogo competitivo online.** O PC de um jogador podia ser conectado
via internet a outros jogadores para compartilhar uma partida, cada um podendo se mover e ver os
movimentos dos personagens dos outros em tempo real — e atacá-los. Depois disso, a maioria dos jogos
de ação para PC incluiu jogo online como recurso.

> **O jogo competitivo pela internet tornou a qualidade dos gráficos 3-D uma questão de altíssimo
> risco para os jogadores.** Se você fosse um executivo lendo relatórios de pesquisa sobre a
> indústria gráfica, ou estudando estatísticas de venda de chips, você não apreciaria essa
> necessidade crescente. **Por outro lado, se você jogasse online, descobriria rapidamente que ter
> um sistema gráfico ruim significava que a sua visão da situação era pouco clara e desatualizada —
> "atrasada", no jargão dos jogadores — e você morria vez após vez.**
>
> **Não há nada como apostas de vida ou morte para gerar demanda por uma vantagem, e essa luta
> online entre adolescentes criou uma demanda agudamente focada por chips gráficos 3-D de alto
> desempenho.**

Rumelt generaliza numa nota de margem que vale como princípio de adoção: **quando um produto dá ao
comprador uma vantagem na competição com outros, haverá uma adoção especialmente rápida do produto.**
O exemplo paralelo é a primeira planilha eletrônica, que apareceu em 1979 e deu uma vantagem a
estudantes de MBA, analistas financeiros e outros profissionais que a usavam. **Ela foi rapidamente
adotada e ajudou a empurrar os computadores pessoais do nicho de hobby para o mainstream.**

**A primeira empresa a captar essa demanda** foi uma startup de 1994 formada por três engenheiros
ex-SGI. A placa gráfica dela foi amarrada a uma linguagem gráfica proprietária própria — uma versão
enxuta da linguagem da SGI, simplificada para rodar nos chips dedicados dela sem ajuda do processador
central. **A ideia de estabelecer um padrão de fato veio direto das páginas de um livro influente de
1991 sobre marketing de produtos de tecnologia** — livro que popularizou os conceitos acadêmicos de
"externalidades de rede" e "aprisionamento de padrão" e era a bíblia de quem queria ser, ou
identificar, a próxima Microsoft. **Se autores de jogos suficientes começassem a usar a linguagem
dela, ela viraria o padrão de fato em jogos 3-D e a empresa se tornaria a "definidora do padrão
arquitetural".**

### O kernel da Nvidia

A Nvidia foi formada em 1993 por três engenheiros. Naquele momento o setor estava vivo com conversa
sobre a revolução multimídia que vinha aí. Mas as placas de áudio existentes funcionavam com alguns
softwares e não com outros; não havia jeito padrão de comprimir ou exibir vídeo; drives de CD-ROM
não eram totalmente padronizados; **e não havia padrão nenhum para gráficos 3-D.** O Windows 95 e o
uso amplo de navegadores estavam a vários anos de distância.

O VP de vendas relembrou: *"o sonho original era ser o equivalente da placa de som para
multimídia."* **O primeiro produto da empresa, lançado em 1995, pretendia estabelecer um padrão novo
de multimídia. Mas as capacidades de áudio consideráveis dele não eram melhores que as da
concorrência veloz, e a abordagem esquisita de gráficos 3-D dele não pegou. Foi um fracasso
comercial.**

**Diante do fracasso do primeiro produto e da ascensão súbita da rival, o CEO reformulou a
estratégia da empresa.** Entradas-chave vieram de um conselho consultivo técnico temporário
composto tanto de gente de dentro quanto de especialistas de fora.

**A nova estratégia era uma mudança brusca de direção:**

- **Diagnóstico:** o mercado real não era multimídia genérica; era **gráficos 3-D de alto desempenho
  para PC de mesa**, puxados por uma demanda de gamers que era virtualmente ilimitada e sentida
  diretamente pelo usuário. E o desafio competitivo específico era que a rival estava tentando fixar
  um padrão proprietário próprio.
- **Política norteadora**, em três partes:
  1. **Abandonar a abordagem proprietária de gráficos e abraçar o método de triângulos** consagrado
     pela SGI. (A única coisa que não mudou foi o compromisso de ser uma empresa de chips *fabless*,
     focada em projeto e terceirizando fabricação.)
  2. **Traçar um roteiro tecnológico próprio, empurrando o desempenho de gráficos 3-D numa taxa
     muito mais rápida do que a Lei de Moore previa.** Dois fatores tornavam isso possível: primeiro,
     eles anteciparam um salto grande de desempenho ao colocar mais e mais do pipeline gráfico num
     único chip; segundo, **a maioria dos fabricantes não continuava enfiando o máximo de
     transistores possível num chip — eles aproveitavam os aumentos de densidade para fazer mais
     chips por lâmina, barateando o chip. A Nvidia, em contraste, planejava usar aquela densidade
     extra para acrescentar mais processadores paralelos, aumentando o desempenho.**
  3. **Apostar no padrão gráfico de um terceiro em vez de no da rival.** A gestão julgou que
     trabalhar com a linguagem da rival seria autodestrutivo, e apostou que a nova e não testada
     DirectX da Microsoft se tornaria um padrão gráfico funcional de alto desempenho. **Fizeram essa
     avaliação depois de se reunirem com o time do DirectX e concluírem que eram entusiastas de
     gráficos que queriam empurrar a fronteira o mais rápido possível.**
  4. E a peça central: o CEO acreditava que a Nvidia poderia **construir uma vantagem quebrando o
     ciclo de dezoito meses do setor.** Raciocinou que, como parecia possível avançar o poder
     gráfico três vezes mais rápido que o poder de CPU, **a Nvidia poderia entregar um upgrade
     substancial de poder gráfico a cada seis meses em vez de a cada dezoito.**

Do lado da demanda, a gestão julgou que **o mercado compraria virtualmente todo o poder de
processamento gráfico que pudesse ser fornecido.** O cientista-chefe colocou assim: *"há demanda
virtualmente ilimitada por poder computacional em gráficos 3-D. Dada a arquitetura do PC, só dá para
fazer até certo ponto com uma CPU mais potente. **Mas é fácil consumir um teraflop de poder de
computação gráfica.** A GPU vai ser o centro da tecnologia e do valor agregado na computação de
consumo."*

**E aqui está o parágrafo que amarra o livro inteiro:**

> **Este é o ponto em que um mau estrategista teria embrulhado o conceito de um ciclo de
> desenvolvimento mais rápido em slogans sobre velocidade, poder e crescimento, e depois buscado
> lucrar abrindo o capital da empresa. Em vez disso, o time da Nvidia desenhou um conjunto de
> políticas e ações coesas para transformar a política norteadora em realidade.**

### As ações coerentes

**1. Três times de desenvolvimento separados.** O primeiro passo para executar a política norteadora
foi estabelecer três times, cada um trabalhando num ciclo de dezoito meses do início ao mercado.
**Com cronogramas sobrepostos, os três times entregariam um produto novo a cada seis meses.**

**2. Redução drástica de atrasos e incerteza no processo de desenvolvimento.** Um atraso de dois
meses num ciclo de seis meses é muito mais sério que o mesmo atraso num ciclo de dezoito. Uma fonte
séria de atraso possível era erro de projeto: depois de projetar um chip, a empresa passava o
projeto a um fabricante; cerca de um mês depois os engenheiros recebiam as primeiras amostras dos
chips reais. **Se bugs fossem encontrados nessas amostras, o projeto teria que ser mudado, máscaras
novas teriam que ser criadas e uma nova rodada de fabricação iniciada.**

Para atacar essa fonte, **a Nvidia investiu pesado em técnicas de simulação e emulação e organizou o
processo inteiro de projeto de chip em torno desses métodos.** Essas ferramentas eram a especialidade
de um dos fundadores, que empurrou o uso delas para a verificação formal da lógica do chip. E, mesmo
com a lógica correta, problemas podiam surgir no funcionamento físico — atrasos no fluxo de elétrons
e degradação de sinal. **Para se proteger contra esse tipo de problema, a empresa também investiu na
tarefa mais difícil de simular as características elétricas do chip.**

**3. A arquitetura unificada de drivers (UDA), e é a decisão de design mais engenhosa do caso.**
Outra área de atraso e preocupação era a criação de drivers de software. **Tradicionalmente, os
drivers eram escritos pelas fabricantes de placas, que só podiam começar o desenvolvimento depois de
receber chips funcionais da fabricante de chips.** Além do problema do atraso, os métodos novos de
3-D exigiam drivers muito mais sofisticados. **E as fabricantes de placas tinham incentivos
conflitantes sobre comunicar problemas de driver de volta à fabricante de chips: se a Nvidia
vendesse chips a duas fabricantes de placa, cada uma tenderia a guardar o aprendizado e as correções
para si, para não beneficiar a outra.** Por fim, a prática vigente gerava drivers diferentes para
chips idênticos em placas diferentes, complicando enormemente as tarefas de manter os drivers
atualizados e de ajudar usuários a atualizar drivers antigos.

**Para endereçar isso, a Nvidia assumiu o controle da criação e da gestão dos drivers dos chips
dela, desenvolvendo uma arquitetura unificada. Todos os chips da Nvidia usariam o mesmo software de
driver, facilmente baixável pela internet. O driver se adaptaria a cada chip consultando o chip sobre
as ações que ele suportava e depois adaptando os comandos àquele chip.** Isso simplificaria muito a
vida do usuário, que não precisaria se preocupar em casar drivers com chips. **E significava que a
construção e a distribuição de drivers passariam a ser proprietárias da Nvidia e saíram das mãos das
fabricantes de placas.**

**4. Emulação para antecipar o desenvolvimento de driver.** Para acelerar ainda mais, a empresa fez
investimento significativo em instalações de emulação — "maquetes" complexas de hardware dos chips
novos **que permitiam começar o desenvolvimento de drivers de quatro a seis meses antes de os
primeiros chips reais aparecerem.**

**O benefício composto do ciclo rápido**, que Rumelt calcula explicitamente:

> **Comparada a um concorrente trabalhando num ciclo de dezoito meses, o ciclo de seis meses da
> Nvidia significaria que o chip dela seria o melhor da categoria cerca de 83% do tempo.** Além
> disso, há o burburinho constante em torno de lançamentos de produto novo, **um substituto para
> publicidade cara.** E, como bônus adicional, **os engenheiros da empresa mais rápida acumulam mais
> experiência e, talvez, aprendem mais sobre os truques de transformar a tecnologia em produto.**

### A execução, e a passagem por cima do canal

Implementando a estratégia nova, a Nvidia investiu o caixa restante em equipamento de emulação e na
engenharia de um chip novo. Lançado em agosto de 1997, ele recebeu notas altas de resenhistas por
velocidade e resolução, mas muitos julgaram que a placa da rival tinha imagens mais suaves. **Foi
sucesso moderado, mantendo a empresa viva e fornecendo fundos para mais desenvolvimento.**

Com o chip seguinte, lançado em 1998, a Nvidia começou a acertar o passo. **Aparecendo em coordenação
com o novo DirectX 6 da Microsoft, foi o primeiro chip a usar a arquitetura unificada de drivers.**
Ele e a atualização de primavera dele igualaram ou superaram a concorrência na maioria das medidas.
**Sete meses depois, a Nvidia lançou o GeForce 256, movendo o setor para território novo: quase 23
milhões de transistores, o dobro da complexidade do processador Pentium II da Intel, com capacidade
de cálculo de ponto flutuante de 50 gigaflops — o equivalente a um supercomputador Cray T3D.** O
cientista-chefe: *"na Nvidia, nosso caminho técnico foi **subir engatinhando pelo pipeline gráfico.
Em cada estágio a gente colocava mais operações em silício especializado, onde o desempenho melhorava
por um fator de dez comparado à CPU.** Com o GeForce a gente tinha todos os passos do pipeline da
Silicon Graphics num chip de US$ 100, rodando mais rápido que a máquina que tinha custado US$ 100 mil
em 1992."*

**Conforme ganhava liderança em desempenho, a Nvidia passou a focar ainda mais nos problemas de
atraso, de driver e de custo extra criados pelas fabricantes de placas.** Primeiro tentou negociar
um arranjo novo com a maior delas **e foi rejeitada, porque a fabricante não queria ver as margens
dela caírem.**

**Então um time sênior foi até a Dell e fez uma apresentação.** Descreveram os obstáculos criados
pelas práticas vigentes do setor, mostraram os benefícios econômicos da arquitetura unificada de
drivers, e apontaram os preços mais baixos que fabricantes contratados de placa podiam entregar. **A
Dell reagiu positivamente e concordou em oferecer placas com chips Nvidia fabricadas por um
contratado em Hong Kong.** Nos meses e anos seguintes, a Nvidia se apoiou cada vez mais em
fabricantes contratados para a produção e a distribuição de placas. **Os contratados eram livres para
marcar a placa como quisessem, e a maioria escolheu enfatizar o nome Nvidia.**

**Os comentários analíticos que Rumelt faz nesse ponto valem mais que o caso:**

> **Uma mudança de tecnologia frequentemente põe em movimento uma mudança na estrutura do setor.**
> Neste caso, a relação entre fabricante de chip e fabricante de placa se alterou. **Curiosamente,
> poucos previram a importância dessa mudança. Uma abordagem padrão para esse problema em setores
> estabelecidos seria fazer certas fabricantes de placa trabalharem diretamente com os emuladores da
> Nvidia no início do ciclo de desenvolvimento. Isso, no entanto, aumentaria o poder de barganha da
> fabricante de placa e o vazamento de conhecimento proprietário para os rivais.**
>
> Quanto à maior fabricante de placas, a gestão da Nvidia acreditava que **a passagem de gráficos 2-D
> para 3-D tinha eliminado a maior parte do valor agregado tradicional dela.** Ainda assim, **empresas
> não deslizam silenciosamente para a escuridão. Ela deveria ter fechado o acordo com a Nvidia, mas
> optou por tentar manter as margens altas dela (cerca de 25%).**
>
> **A análise setorial padrão classificaria compradores poderosos como a Dell como algo negativo para
> a Nvidia. Mas, sem grandes fabricantes de PC como Dell e HP, a fabricante de placas poderia ter
> mantido a posição dela nos canais de varejo. Foi o poder desses compradores concentrados que
> permitiu à Nvidia contornar a marca estabelecida da fabricante de placas.** Note que, em geral,
> **se você tem um produto "eu também", você prefere compradores de varejo fragmentados. Por outro
> lado, se você tem um produto melhor, um comprador poderoso como a Dell pode ajudá-lo a ver a luz
> do dia.**

**Os números do desempenho ao longo do tempo:** durante 1997–2001, a Nvidia obteve ganhos
extraordinários integrando o pipeline gráfico num único chip, alcançando **ganho médio anual de
desempenho de 157%.** De 2002 a 2007, alcançou ganho médio anual de **62% ao ano, cerca do máximo
possível dado o movimento geral da tecnologia de semicondutores** — as CPUs da Intel aumentaram o
poder de processamento a mais ou menos a mesma taxa no período. **A diferença é que os efeitos dos
aumentos de desempenho da Intel foram substancialmente embotados por gargalos de hardware e software
que ela não controlava. Do outro lado, como os líderes da Nvidia previram, o desempenho dos chips
gráficos é sentido direta e imediatamente pelos usuários. Os entusiastas continuaram esperando
ansiosamente por cada melhoria nova.**

### A concorrência que não conseguiu acompanhar

> **Para a estratégia da Nvidia funcionar, outras firmas teriam que ficar pelo caminho, incapazes de
> acompanhar. E, em larga medida, foi exatamente isso que aconteceu. Sempre que uma empresa tem
> sucesso enorme, existe uma história complementar de resposta competitiva impedida. Às vezes o
> impedimento é a patente do inovador ou proteção semelhante, mas mais frequentemente é uma
> incapacidade ou falta de vontade de replicar as políticas do inovador. A Nvidia apostou que
> conseguiria subir rapidamente pelo pipeline gráfico, mas apostou também que rivais-chave não
> conseguiriam replicar o ciclo de lançamento rápido dela.**

**A rival direta.** Seguiu conselho espúrio de Wall Street e os instintos de marketing de um CEO
novo, partindo atrás do mercado de massa. **Em vez de capitalizar a liderança dela com os
entusiastas, alocou engenheiros para longe da ponta da tecnologia para trabalhar em placas de menor
sofisticação, aumentou a publicidade imitando uma campanha famosa de marca de componente, e comprou
uma fabricante de placas.** Espalhando os recursos finos demais, tentou compensar **esticando as
metas do próximo chip de alto desempenho para além das competências do processo de desenvolvimento
dela.** Nos últimos meses de 2000, fechou as portas, vendendo patentes, marcas e estoque para a
Nvidia, onde muitos dos engenheiros talentosos dela foram parar.

> **Uma leitura superficial da história faz parecer que a rival se destruiu com mudanças demais de
> direção. A realidade mais profunda é que o ciclo de lançamento rápido cuidadosamente construído da
> Nvidia induziu as respostas menos coordenadas dela. Assim como Aníbal fez com Roma em Canas, a
> Nvidia atraiu a rival a se esticar demais.**

**A Intel** foi incapaz de competir em gráficos 3-D de alto desempenho. Uma das grandes empresas do
mundo, uma potência tecnológica, e ainda assim **não infinitamente flexível.** Segundo um analista do
setor: *"a Intel desenvolveu o chip gráfico dela com os mesmos processos e a mesma abordagem que usava
para desenvolver as CPUs dela. **Isso não funcionou no setor extremamente competitivo de gráficos
3-D. O ciclo de desenvolvimento da Intel era de 18 a 24 meses, não de 6 a 12. Ela não se adaptou a
esse ciclo rápido. E não ia redesenhar todo o processo de desenvolvimento e fabricação dela só por
causa de um negócio lateral.**"* A Intel dominou, sim, o negócio de gráficos 2-D padrão, incorporando
as ofertas dela nos chipsets de placa-mãe; anunciou um segundo plano de entrar em 3-D de alto
desempenho em 2007 e cancelou o projeto em dezembro de 2009.

**A SGI**, fonte de tantas das ideias e de tanto do pessoal que acenderam os gráficos 3-D, **nunca
entrou em gráficos 3-D baseados em PC.** O fundador saiu em 1994; o CEO novo mirou vender estações e
servidores grandes para as corporações americanas, instruindo os subordinados a **"pensar fora da
caixa e descobrir como crescer 50%"**. Eles tentaram engenheirar crescimento pela aquisição de um
monte de firmas de estações de trabalho. **O desafio real era que estações baseadas em Windows-Intel
estavam ganhando poder e superando as baseadas nos processadores e sistemas operacionais
proprietários deles. A estratégia de aglomeração não fez nada para enfrentar esse desafio.** Tendo já
tido valor de mercado de mais de US$ 7 bilhões, a SGI pediu falência em 2006.

> **"Crescer 50%" é má estratégia clássica. É o tipo de bobagem que passa por estratégia em empresas
> demais. Primeiro, ele estava fixando uma meta, não projetando um jeito de lidar com o desafio da
> empresa dele. Segundo, crescimento é o resultado de uma estratégia bem-sucedida, e tentativas de
> engenheirar crescimento são exercícios de pensamento mágico.** Neste caso, o crescimento que a SGI
> engenheirou foi conseguido enrolando um número de outras firmas cujas estratégias de estação de
> trabalho **também tinham ficado sem gás.**

**A única concorrente séria** foi uma canadense que, a princípio, parecia ter ficado para trás pelo
ciclo de seis meses. Então, em 2000, ela comprou uma empresa formada por mais um quadro de
ex-engenheiros da SGI. **O sangue novo fez diferença imediata: ela passou para um ciclo de lançamento
de seis meses e começou a introduzir chips que igualavam os da Nvidia em desempenho.** Em 2006, a
arquirrival da Intel em CPUs orquestrou uma fusão com ela.

> **Deixar passar aquela aquisição foi um erro estratégico da Nvidia.** A rede de capital humano
> neste setor era esparsa e bem compreendida. **Se houvesse muitos bolsões de talento como aquele,
> adquiri-lo não faria sentido. Mas, mesmo que a Nvidia não precisasse da expertise extra, adquiri-la
> teria negado essas competências escassas a um concorrente.**

### E depois?

Rumelt fecha sem triunfalismo, o que é raro no acervo. **O campo escolhido da Nvidia é um dos mais
rápidos e competitivos do planeta, e a estratégia bem-sucedida de 1998–2008 não garante sucesso
duradouro.** Em particular, **por volta de 2009 as ondas de mudança que a Nvidia tinha explorado na
ascensão dela estavam minguando.** O pipeline gráfico da SGI tinha sido plenamente realizado. **A
maioria dos gamers já não esperava sem respirar pelo próximo chip gráfico. E o DirectX tinha ficado
tão complexo que poucas empresas de jogo conseguiam dominar todos os recursos dele.**

Estrategicamente, a empresa estava engajada num **movimento de pinça de duas pontas:** uma
iniciativa abria o acesso ao poder de computação dos chips gráficos (cada processador gráfico contém
centenas de processadores de ponto flutuante separados), entregando supercomputação de mesa; **em
novembro de 2010, pesquisadores chineses anunciaram o supercomputador mais rápido do mundo,
alimentado por esses chips.** O segundo braço era um sistema completo num chip, tática que Rumelt
chama de **"disrupção por baixo"**, que buscava perturbar a hegemonia Intel-AMD-Windows construindo
sobre uma plataforma muito mais simples e eficiente, mirando fabricantes de smartphones, netbooks e
consoles.

> **Esse movimento de pinça oferece dois caminhos de sucesso e cria problema para os concorrentes.
> Mas há muitas dificuldades nos dois caminhos, e nenhum dos dois é nem de longe garantido.**

---

# PARTE III — Pensar como estrategista

Ao criar estratégia, é frequentemente importante assumir o ponto de vista dos outros, ver como a
situação parece para um rival ou para um cliente. **Esse conselho é dado e seguido com frequência.
Mas ele pula o que é possivelmente a mudança de ponto de vista mais útil: pensar sobre o próprio
pensamento.**

Nossas intenções não controlam plenamente nossos pensamentos. Ficamos agudamente conscientes disso
quando somos incapazes de suprimir ruminações indesejadas sobre risco, doença e morte. **Boa parte
do pensamento humano não é intencional — simplesmente acontece. Uma consequência é que líderes
frequentemente geram ideias e estratégias sem prestar atenção ao processo interno de criação e
teste delas.**

## 16. Estratégia é hipótese

> **Boa estratégia se constrói sobre conhecimento funcional a respeito do que funciona, do que não
> funciona e por quê. Conhecimento funcional geralmente disponível é essencial, mas, porque está
> disponível a todos, raramente pode ser decisivo. O conhecimento funcional mais precioso é
> proprietário, disponível apenas à sua organização.**
>
> Uma organização cria poços de conhecimento funcional proprietário **explorando ativamente a arena
> escolhida, num processo chamado empirismo científico. Boa estratégia repousa sobre uma base
> duramente conquistada desse conhecimento, e qualquer estratégia nova apresenta a oportunidade de
> gerá-lo. Uma estratégia nova é, na linguagem da ciência, uma hipótese, e a implementação dela é um
> experimento. Conforme os resultados aparecem, bons líderes aprendem mais sobre o que funciona e o
> que não funciona, e ajustam as estratégias de acordo.**

### O ataque do engenheiro

O caso que gera o conceito é uma sessão com dezessete gerentes de uma empresa aeroespacial, todos
engenheiros que subiram a posições de gestão por competência em executar, organizar e dirigir
trabalho técnico. Depois de olharem exemplos de estratégia competitiva e de um estudo curto do
negócio de satélites de comunicação, a sessão de criar estratégias para as unidades trava numa
frustração crescente. Um gerente experiente fala pelos outros:

> *Essa coisa de estratégia é bobagem. Me dá um tempo! **Não existe teoria clara. Olha, o que a
> gente precisa é de um jeito de saber o que vai acontecer se a gente fizer A, versus o que vai
> acontecer se a gente fizer B. Aí a gente consegue calcular qual é a melhor estratégia.** A gente é
> realmente muito bom em planejar aqui. Você não constrói um sistema aeroespacial grande sem
> planejamento meticuloso. **Mas essa coisa de estratégia parece vazia.**

**O ataque acerta em cheio**, e Rumelt reconhece por quê: ele mesmo já tinha sido engenheiro, e sabe
que um engenheiro não projeta uma ponte que **talvez** aguente a carga. **Um engenheiro começa com
complexidade e fabrica certeza.** Ele sabia como era ser cuidadoso, equilibrar literalmente milhares
de considerações para fazer um sistema funcionar. **E sabia como era enlouquecedor sair daquele
mundo para o mundo dos negócios, em que um executivo pode escolher uma ação por intuição e, mesmo um
ano depois, ninguém sabe se foi boa escolha.**

A resposta que ele constrói na hora, e que é a tese do capítulo:

> **De onde vem o conhecimento científico?** Um bom cientista empurra até a borda do conhecimento e
> depois estende a mão além dela, formando uma conjectura — uma hipótese — sobre como as coisas
> funcionam naquele território desconhecido. **Se o cientista evita a borda, trabalhando com o que já
> é bem conhecido e estabelecido, a vida será confortável, mas não haverá nem fama nem honra.**
>
> **Da mesma forma, uma boa estratégia de negócio lida com a borda entre o conhecido e o
> desconhecido. De novo, é a competição com os outros que nos empurra para as bordas do
> conhecimento. Só ali se encontram as oportunidades de ficar à frente dos rivais. Não há como
> evitar. Aquela sensação incômoda de ambiguidade que você sente é real. É o cheiro da
> oportunidade.**
>
> Na ciência, você primeiro testa uma conjectura nova contra as leis e a experiência conhecidas. A
> hipótese nova é contradita por princípios básicos ou por resultados de experimentos passados? Se
> ela sobrevive a esse teste, o cientista tem que criar um teste no mundo real — um experimento —
> para ver como ela se sustenta.
>
> **Da mesma forma, testamos um insight estratégico novo contra princípios bem estabelecidos e
> contra o conhecimento acumulado sobre o negócio. Se ele passa por esses obstáculos, ficamos com a
> tarefa de experimentá-lo e ver o que acontece.**
>
> **Dado que estamos trabalhando na borda, pedir uma estratégia com garantia de funcionar é como
> pedir a um cientista uma hipótese com garantia de ser verdadeira — é um pedido burro.** O problema
> de criar uma boa estratégia tem a mesma estrutura lógica do problema de criar uma boa hipótese
> científica. **As diferenças-chave são que a maior parte do conhecimento científico é amplamente
> compartilhada, enquanto vocês estão trabalhando com sabedoria acumulada sobre o negócio de vocês e
> sobre o setor de vocês que não é igual à de mais ninguém.**
>
> **Uma boa estratégia é, no fim, uma hipótese sobre o que vai funcionar. Não uma teoria selvagem,
> mas um julgamento educado. E não há ninguém mais educado sobre os negócios de vocês do que o grupo
> nesta sala.**

Isso quebra o impasse, e o gerente que atacou começa a articular os próprios julgamentos: *"eu acho
que no meu negócio a gente consegue…"*.

**A diagnose do que estava acontecendo, e é útil para qualquer sessão de estratégia:** quando
engenheiros usam um sistema dedutivo limpo para resolver um problema, eles chamam isso de "girar a
manivela" — pode ser trabalho duro, **mas a natureza e a qualidade da saída dependem da máquina (o
sistema de dedução escolhido), não da habilidade de quem gira a manivela. O grupo esperava que
estratégia fosse um exercício de girar manivela. Esperava que Rumelt lhes desse uma "máquina lógica"
que pudessem usar para deduzir planos de negócio.**

### Por que dedução não basta

**Se insights ou ideias novos não são necessários, dedução é suficiente.** Pode haver momentos em
que os resultados estão bem, quando nenhuma oportunidade nova parece ter surgido e nenhum risco novo
apareceu. **Então a resposta lógica à pergunta estratégica é simplesmente "continue assim, faça mais
do mesmo". Mas num mundo de mudança e fluxo, "mais do mesmo" raramente é a resposta certa. Num mundo
em mudança, uma boa estratégia precisa ter um componente empreendedor** — precisa incorporar
algumas ideias ou insights sobre combinações novas de recursos para lidar com riscos e oportunidades
novos.

> **O problema de tratar estratégia como exercício de girar manivela é que sistemas de dedução e
> computação não produzem ideias novas interessantes, por mais que se gire a manivela. Mesmo em
> matemática pura, o sistema dedutivo definitivo, enunciar e provar um teorema novo interessante é
> um ato profundamente criativo.**
>
> Tratar estratégia como problema de dedução **presume que tudo o que vale a pena saber já é sabido
> — que apenas computação é necessária.** Como computação, dedução aplica um conjunto fixo de regras
> lógicas a um conjunto fixo de fatos conhecidos.
>
> **A presunção de que todo conhecimento importante já é conhecido, ou está disponível por consulta
> a autoridades, mata a inovação. É essa presunção que sufoca a mudança em sociedades tradicionais e
> bloqueia melhoria em organizações e sociedades que passam a acreditar que o jeito delas é o melhor
> jeito. Para gerar uma estratégia, é preciso deixar de lado o conforto e a segurança da dedução pura
> e lançar-se nas águas mais turvas da indução, da analogia, do julgamento e do insight.**

**A digressão histórica sobre o Iluminismo** existe para dar peso a essa distinção, e o resumo é: a
razão dormiu no Ocidente por mais de mil anos porque a investigação era bloqueada pela premissa
onipresente de que todo conhecimento importante já tinha sido revelado. **O gatilho intelectual foi
o julgamento de heresia de Galileu**, cuja história correu a Europa e cujo nome virou grito de guerra
de quem buscava quebrar as algemas do pensamento impostas por igreja e Estado. **Se o pensamento é
libertado das amarras da autoridade humana, como as pessoas sabem em que acreditar? A resposta do
Iluminismo foi o empirismo científico** — acreditamos nos nossos sentidos e nos dados que nossos
instrumentos reportam aos nossos sentidos. Um cientista testa uma crença por experimento ou pela
análise de dados do mundo real. **Essa é a peça central do pensamento científico: a ideia de
refutação. A menos que uma ideia possa possivelmente ser provada falsa por fato observável, ela não é
científica.** (Outros tipos de conhecimento, como autoconhecimento e insight espiritual, não são
descartados, mas não são científicos.)

> **O coração do método científico é que o valor de uma hipótese é determinado por dados empíricos
> tirados do mundo físico, e não pela popularidade, casta ou riqueza do autor.**
>
> **Uma estratégia é, como uma hipótese científica, uma predição educada de como o mundo funciona. O
> valor último de uma estratégia é determinado pelo sucesso dela, não pela aceitabilidade dela junto
> a um conselho de filósofos ou a uma banca de editores. Bom trabalho de estratégia é necessariamente
> empírico e pragmático.** Especialmente em negócios: quaisquer que sejam as noções grandiosas que
> uma pessoa tenha sobre os produtos ou serviços de que o mundo precisa, ou sobre comportamento
> humano, ou sobre como organizações devem ser geridas, **o que não "funciona" de fato não sobrevive
> por muito tempo.**
>
> Na ciência busca-se explicação para classes amplas de eventos e fenômenos; nos negócios busca-se
> entender e prever uma situação mais particular. **Mas a falta de universalidade não torna os
> negócios não científicos. Ciência é um método, não um resultado, e o método básico de bons
> empresários é atenção intensa a dados e ao que funciona.**

### Anomalias

> **Uma anomalia é um fato que não se encaixa na sabedoria recebida. Para certo tipo de mente, uma
> anomalia é uma mancha irritante na pele perfeita da explicação. Mas para outros, uma anomalia
> marca uma oportunidade de aprender algo, talvez algo muito valioso. Na ciência, anomalias são a
> fronteira, onde está a ação.**

O exemplo científico é a curva de rotação das galáxias. A teoria da gravidade prevê que estrelas mais
distantes do núcleo galáctico não só levam mais tempo para orbitar como também viajam mais devagar
pelo espaço nas órbitas mais longas — mais precisamente, a velocidade de uma estrela deveria ser
proporcional ao inverso da raiz quadrada da distância dela do centro. **Mas medições de muitas
galáxias começaram a aparecer no início dos anos 1980 mostrando que quase todas as estrelas na
espiral orbitam mais ou menos na mesma velocidade, independentemente da distância do núcleo. As
curvas de rotação galáctica eram planas. Isso é uma anomalia enorme: algo muito básico sobre nossa
visão de mundo parece estar errado.** Duas hipóteses estão em investigação: a favorita é que a
matéria estelar luminosa que fotografamos é só cerca de 10% do universo físico e o resto é matéria
escura; a outra, menos popular, é que as teorias recebidas de gravidade estão erradas. **Assim, os
fatos simples da estrutura galáctica levam a direções espantosas: ou a maior parte do universo é
matéria escura invisível, ou a teoria da gravitação está incorreta.**

**E a lição metodológica:** uma anomalia dessas **aparece por comparação.** Simplesmente olhar a
galáxia não sugere enigma nenhum além do mistério geral da criação. Como Sherlock Holmes disse a
Watson: *"você vê, mas você não observa."* **As anomalias não estão na natureza, mas na mente do
observador atento, reveladas por uma comparação entre os fatos e expectativas refinadas.**

### A anomalia do espresso — Starbucks

Em 1983, Howard Schultz era gerente de marketing e operações de varejo de uma cadeia minúscula de
lojas de Seattle que vendia grãos de café torrado escuro. Numa visita à Itália, ele descobriu a
experiência do espresso italiano — a primeira visita a um bar de espresso em Milão, o barista se
movendo com graça, moendo grãos, puxando doses e vaporizando leite quase ao mesmo tempo, conversando
alegremente com os clientes. Era grande teatro. **Ele viu a camaradagem entre os clientes, que se
conheciam bem, e o barista, que performava com estilo. Naquele momento havia 200 mil bares de café
na Itália, e 1.500 só na cidade de Milão, cidade do tamanho da Filadélfia.**

**Com olho de varejista, Schultz também notou a rotatividade rápida de clientes e os preços
relativamente altos pagos pelo café.**

**Para ele, a experiência em Milão foi uma anomalia.** Em Seattle, o mercado de grãos arábica de
torra escura era um nicho, povoado por um grupo pequeno mas crescente de compradores especialmente
exigentes. **Mas a vasta maioria das pessoas em Seattle e na América — mesmo as de boa renda — bebia
café barato e sem graça. Em Milão, café caro de alta qualidade não era produto de nicho: era o
produto de mercado de massa.**

**E havia uma anomalia adicional:** nos EUA, comida rápida significava comida barata e ambiente de
plástico. **Em Milão ele viu "café rápido" que era caro e servido numa atmosfera social animada,
muito diferente da lanchonete americana de rua principal.** Americanos, especialmente os do noroeste,
eram pelo menos tão ricos quanto italianos. **Por que eles deveriam beber café "ruim" e não desfrutar
do prazer de um latte espresso num ambiente social?**

**Schultz formou uma hipótese estratégica: a experiência do espresso italiano poderia ser recriada na
América e o público a abraçaria.** Voltou a Seattle e explicou a ideia aos dois donos da empresa em
que trabalhava. Eles ouviram e lhe deram um espaço pequeno para tentar preparar bebidas de espresso,
**mas não compartilhavam a crença dele no projeto.** Achavam que as forças e o propósito da empresa
estavam em comprar, torrar e vender no varejo cafés arábica finos, não em tocar um bar de espresso.
Além disso, achavam que restaurantes de café espresso não eram novidade nenhuma, sendo um negócio de
nicho frequentado por boêmios, beatniks, hippies e noturnos da geração X, dependendo da época.

**A divergência histórica**, que Rumelt conta porque é o que explica por que a anomalia existia. Café
não era ideia nova: os árabes começaram a preparar café seiscentos anos antes, e a primeira
cafeteria europeia abriu em Oxford em 1652. **Na Inglaterra, as cafeterias desenvolveram cultura
única, muito diferente das tavernas: um centavo comprava uma mesa pelo dia, com entrada permitida a
qualquer um com roupa boa. Em vez de folia embriagada ou autorreflexão morosa, as cafeterias
estimulavam conversa e debate enérgicos. Livros e jornais estavam disponíveis, e muita gente usava as
cafeterias como endereço postal** — Newton frequentava uma, Adam Smith terminou *A Riqueza das Nações*
noutra que era ponto de encontro de pensadores escoceses em Londres. **A cafeteria de Edward Lloyd
virou a Lloyds of London, e a cafeteria Jonathan's virou a Bolsa de Londres, onde os mensageiros
ainda são chamados de "garçons". A causa do Iluminismo pode ter sido a revolução copernicana e a
Reforma Protestante, mas o café foi o combustível diário dele.**

Na Inglaterra, o chá acabou substituindo o café como bebida diurna preferida, e as cafeterias de
Londres foram desaparecendo, virando clubes privados, restaurantes e empresas. **Nos EUA a história
tomou curso diferente: a Festa do Chá de Boston, a Revolução e a Guerra de 1812 interromperam o
comércio de chá, revivendo o interesse por café. Os americanos acharam no café um substituto barato
do chá que podia ser bebido em quantidade. Em 1820 a transição estava completa e os EUA viraram o
maior mercado de café do mundo.**

No início do século XX, uma alternativa à árvore arábica original foi achada no Congo — a planta
robusta. **Ela crescia mais rápido, era mais resistente a doença, mais fácil de colher e continha
mais cafeína. Também tinha gosto mais áspero e menos suave. Mas misturar robusta com arábica tirava
boa parte da aspereza, especialmente com açúcar e creme. O grão novo e barato foi a chave para
turbinar o hábito americano crescente de café. Café instantâneo foi o passo final no caminho que
levou as práticas americanas de beber café a uma grande distância das origens europeias delas.**

Enquanto os americanos desenvolviam robusta e café instantâneo, o italiano Luigi Bezzera inventou a
máquina de espresso em 1901. **O dispositivo fazia uma xícara de café passando vapor quente por uma
carga de grãos moídos e torrados; a reação produzia uma bebida rica, quase xaroposa. A teoria era que
o tempo curto de preparo impedia a extração dos óleos amargos e reduzia a cafeína. A bebida não podia
ser facilmente preparada em casa porque precisava de vapor de alta pressão, equipamento caro e muita
mão de obra. Os bares de espresso italianos viraram lugares populares de revigoramento rápido e de
interação social urbana.**

### Testar a hipótese, e a natureza da informação privilegiada

**Um problema profundo que Schultz enfrentava era que a visão dele exigia mudança radical em gostos e
hábitos do consumidor. O que ele observou em Milão não era só um modelo de negócio diferente, mas o
resultado de várias centenas de anos de história social divergente.** Nos EUA, café tinha emergido
como substituto sem graça do chá, bebido em refeições e em pausas ao longo do dia; no sul da Europa,
café era substituto do álcool, tomado em doses pequenas e fortes em "bares" animados. **Sabendo ou
não, Schultz queria fazer mais do que abrir uma cafeteria: queria mudar gostos e hábitos americanos.**

**O segundo problema era que não parecia haver nada de novo em café, espresso, bares de café ou lojas
de espresso.** Milhões de outros americanos tinham viajado à Itália e experimentado bares de espresso
italianos. **O conhecimento sobre esses negócios não era nada privilegiado.**

> **Para esperar ganhar dinheiro com um negócio novo, o empreendedor deve saber algo que os outros
> não sabem, ou ter controle de um recurso escasso e valioso.** A delicadeza da situação é que **a
> informação proprietária de Schultz era apenas um lampejo na mente dele, um clima, um sentimento.
> Outros, expostos exatamente à mesma informação e às mesmas experiências, não tinham aquele insight
> ou aquele sentimento.**
>
> **A privacidade do insight dele era ao mesmo tempo bênção e maldição. Se ele fosse facilmente
> compartilhável com os outros, o próprio Schultz seria irrelevante. Mas porque não podia ser
> plenamente compartilhado, era difícil convencer os outros a apoiar o projeto.**
>
> **Por sorte para ele, a hipótese podia ser testada sem investimento vasto.** Abrir um único bar de
> espresso custaria algumas centenas de milhares de dólares, mas não as centenas de milhões ou os
> bilhões que alguns empreendimentos exigem.

**O primeiro experimento e o que ele ensinou.** Depois de um tempo, Schultz saiu da empresa para
começar a loja própria. **Ela era cópia direta de um bar de espresso italiano.** Ele *"não queria nada
que diluísse a integridade do espresso e da experiência italiana de café"*: um espaço de sessenta e
cinco metros quadrados com decoração italiana e **nenhuma cadeira — era um bar de pé, exatamente como
os de Milão.** Doses de espresso eram servidas em xícaras pequenas de porcelana. **Música de ópera
tocava ao fundo, os garçons usavam camisas formais e gravata borboleta, e o cardápio era salpicado de
italiano.**

> **Se Schultz tivesse ficado com esse conceito inicial, a loja teria continuado um único bar de
> espresso pequeno. Mas, como um bom cientista que estuda cuidadosamente os resultados dos
> experimentos, Schultz e o time dele ficaram atentos à resposta do cliente. A loja, uma vez aberta,
> virou um experimento vivo.**

E aqui vem a formulação mais valiosa do capítulo:

> **Um dos recursos mais valiosos que um negócio pode ter é informação privilegiada valiosa — isto
> é, saber algo que os outros não sabem. Não há nada de arcano nem ilícito nessa informação: ela é
> gerada todo dia em todo negócio em operação. Todo empresário atento pode saber mais sobre os
> próprios clientes, os próprios produtos e a própria tecnologia de produção do que qualquer outra
> pessoa no mundo. Assim, no momento em que Schultz iniciou as operações, ele começou a acumular
> informação privilegiada.**

**As alterações sucessivas, e é a lista que mostra o que "iterar" significa de verdade:** conforme o
conhecimento se acumulava, ele alterou políticas.

- Tirou o italiano do cardápio.
- Depois eliminou a música de ópera.
- Sabia que os baristas eram centrais, mas acabou com os coletes e as gravatas borboleta.
- **Afastou-se do modelo milanês e colocou cadeiras para o público que queria sentar.**
- Com mais tempo, descobriu que os americanos queriam café para viagem, e introduziu copos de papel.
- Os americanos queriam leite desnatado nos lattes, **e, depois de muita busca de alma, ele permitiu
  leite desnatado.**

No jargão técnico do negócio internacional, **ele gradualmente "localizou" o bar de espresso italiano
para os gostos americanos.**

Em 1987 a empresa dele comprou as operações de varejo da antiga empregadora e adotou o nome
Starbucks, combinando o negócio antigo de vender grãos arábica de torra escura com o novo de operar
bares de espresso. **Em 1990 a empresa era lucrativa. Em 1992 abriu o capital com 125 lojas e dois
mil funcionários. Em 2001 tinha se tornado um ícone americano, com 4.700 pontos no mundo e US$ 2,6
bilhões de receita**, o grosso vindo da venda de bebidas de café — que a empresa chamava de bebidas
artesanais. **Poucos anos antes, "café" custava setenta e cinco centavos e vinha num copo de isopor.**

> Schultz imaginou um bar de espresso italiano em Seattle. **Testou essa hipótese e a achou
> insuficiente. Mas o teste produziu informação adicional, então ele modificou a hipótese e testou de
> novo. Depois de centenas de iterações, a hipótese original há muito desapareceu, substituída por
> uma miríade de hipóteses novas, cada uma cobrindo algum aspecto do negócio crescente e em
> evolução. Esse processo de aprendizado — hipótese, dado, anomalia, hipótese nova, dado, e assim por
> diante — se chama indução científica e é elemento crítico de todo negócio bem-sucedido.**

### Por que os incumbentes não capturaram a oportunidade

Rumelt insiste na disciplina de sempre olhar a concorrência: **um elemento do sucesso foi que muita
gente estava disposta a pagar preços premium pelas bebidas artesanais servidas em ambientes de oásis
urbano. Mas o que manteve a concorrência afastada por tantos anos?**

Ele foi a Paris em 2001 falar com um professor de estratégia do INSEAD que, antes da academia, tinha
sido CEO de uma grande empresa italiana de café, importante fornecedora europeia de torras de
espresso para restaurantes e bares. **Pergunta: café espresso era a especialidade sua e de várias
grandes empresas europeias. Por que a Starbucks pegou essa oportunidade em vez de uma das grandes
torrefadoras? Certamente vocês viram o que estava acontecendo no fim dos anos 1980?**

A resposta é uma das melhores páginas do livro sobre por que incumbentes não veem o que está na
frente deles:

> *A gente sabia da Starbucks, mas você tem que entender a questão de escala. **A gente abastecia mais
> de cinquenta mil cafés e restaurantes diferentes por semana. Isso é um volume enorme, e a Starbucks
> era bem pequena.** E as grandes torrefadoras americanas estavam todas focadas no mercado de massa.*
>
> *Também era difícil, de uma perspectiva europeia, entender exatamente **o que** a Starbucks era. Na
> Europa, torrefadoras de café são distintas de restaurantes. Embora a Starbucks fosse conhecida como
> empresa de café, **ela era na verdade uma varejista. Uma rede de fast-food é varejista, mas nunca é
> confundida com uma empresa de "carne bovina"! E, no entanto, a Starbucks era chamada de "empresa de
> café", e os americanos pareciam achar que o café dela era especial.***
>
> *Os europeus veem a Starbucks como "café americano". Os americanos acham que a Starbucks é um bar de
> espresso italiano. **Mas num bar de espresso italiano todo mundo bebe de pé no balcão; quase todo
> mundo toma uma xícara pequena de espresso puro numa xicrinha de porcelana. Café com leite é só para
> o café da manhã, ou para crianças. Não existe viagem; não existem mesas. O café não é marca do
> restaurante, é fornecido por uma das grandes empresas de café. E os bares de espresso italianos são
> pequenos negócios de família, não partes de uma rede gigante.***
>
> *Em contraste, na Starbucks as pessoas bebem café em mesas ou levam para viagem. Bebem de copos de
> papel e há um cardápio muito longo e complexo de bebidas de que os europeus nunca ouviram falar nem
> quiseram. **O café é todo da marca própria da Starbucks e a loja é da empresa. E quase todas as
> bebidas são à base de leite. Na verdade, vista da Europa, a Starbucks é mais uma empresa de leite do
> que uma empresa de café, e a maioria das bebidas dela é simplesmente leite com sabor de café.***
>
> *E aí a Starbucks casou não só café e restaurantes, **mas também a inclinação americana por redes e
> por financiamento público. Ela se expandiu muito mais rápido que as empresas europeias. Quando a
> gente começou a entender a Starbucks, ela já estava bem estabelecida.***

**A conclusão que Rumelt tira, e que é a única defesa de integração vertical que o livro faz:**

> Os comentários dele implicam que **os incumbentes tiveram dificuldade de entender a Starbucks porque
> ela era verticalmente integrada — porque torrava, marcava e servia o próprio café nos próprios
> restaurantes da empresa. A Starbucks não integrou verticalmente para confundir a concorrência de
> propósito. Ela integrou para conseguir ajustar mutuamente múltiplos elementos do negócio dela e
> para capturar a informação gerada por cada elemento das operações dela.**
>
> **Integração nem sempre é boa ideia.** Quando uma empresa pode comprar produtos e serviços
> perfeitamente bons de fornecedores externos, normalmente é desperdício passar pela despesa e pelo
> trabalho de dominar um conjunto novo de operações. **No entanto, quando o núcleo de uma estratégia
> exige o ajuste mútuo de múltiplos elementos, e especialmente quando há aprendizado importante a ser
> capturado sobre as interações entre os elementos do negócio, pode ser vital possuir e controlar
> esses elementos.**

---

## 17. Usar a própria cabeça

Este capítulo é sobre **o obstáculo comum a todas as situações estratégicas: a própria miopia.**

### A lista de Carnegie

Rumelt abre com uma anedota pessoal de 1967, quando tinha vinte e cinco anos e foi escrever um caso
de estratégia a partir de entrevistas de campo, sem que ninguém o tivesse treinado a entrevistar
executivos. Sentado diante do gerente-geral de uma divisão de estruturas avançadas, sem ideia de
como proceder, ele teve que dizer alguma coisa: *"vamos começar com o que você está tentando
realizar aqui. Qual é o propósito desta divisão?"*

O gerente explicou que a divisão tinha o encargo de integrar as atividades de seis firmas
recém-adquiridas, cada uma especialista em fabricar coisas com um material de alta tecnologia
(titânio, colúmbio, tungstênio, compósitos de fibra e epóxi, cerâmicas especiais), trazendo mais base
científica a essas empresas essencialmente artesanais e agindo como empreiteira geral em relação às
grandes empresas aeroespaciais. **Rumelt ficou surpreso de esses negócios de alta tecnologia serem
pequenas oficinas empreendedoras.** O gerente explicou que elas cresceram na região em apoio à
indústria aeroespacial, que universidades e escolas técnicas não ensinam as questões reais de
fabricação, e que **as grandes firmas estabelecidas tinham habilidades de projeto mas pouco
conhecimento sobre efetivamente conformar objetos com materiais exóticos. Basicamente, cada um desses
negócios era tocado por alguém com um jeito especial com um material específico** — fazer fundições
de alta precisão em tungstênio, ou blindagem corporal de cerâmica, ou revestir um tanque de
combustível com colúmbio.

Rumelt perguntou sobre as experiências de combinar essas habilidades ou de vendê-las conjuntamente.
Perguntou sobre a concorrência. Perguntou sobre as forças e fraquezas competitivas da divisão. Pediu
que ele descrevesse as questões de gestão mais difíceis que enfrentava. **No total, fez seis ou sete
perguntas e encheu quinze páginas de bloco. A entrevista durou umas três horas.**

Quando acabou, o gerente se levantou, apertou a mão dele e disse: **"eu não sabia o que esperar. Mas
essa foi a conversa mais útil que eu tive o ano inteiro."**

Rumelt ficou semanas girando aquele comentário desconcertante na cabeça como uma pedra de formato
estranho. **Não tinha havido conversa nenhuma. Tudo o que ele tinha feito era fazer as perguntas
óbvias sobre estratégia e anotar as respostas. Como aquilo podia ter sido a conversa mais valiosa do
ano?** A explicação que ele deu na hora foi que talvez o gerente estivesse feliz de ter alguém com
quem falar que não fosse chefe, subordinado ou cliente — alguém com pauta simples e disposto a
escutar.

**Levou quinze anos até ele entender de verdade**, e o entendimento veio de uma história que um
anfitrião contou num almoço em Pittsburgh:

> Era 1890, e havia um coquetel em Pittsburgh. Todos os figurões estavam lá, incluindo Andrew
> Carnegie, o homem que já foi o americano mais rico e o criador da U.S. Steel. Ele estava num canto,
> fumando um charuto, e foi apresentado a Frederick Taylor, que estava ficando famoso como
> especialista em organizar o trabalho.
>
> *"Rapaz"*, disse Carnegie, apertando os olhos com dúvida para o consultor, *"se você conseguir me
> dizer algo sobre gestão que valha a pena ouvir, eu te mando um cheque de dez mil dólares."*
>
> Dez mil dólares eram muito dinheiro em 1890. A conversa parou enquanto as pessoas por perto se
> viravam para ouvir o que Taylor diria.
>
> *"Sr. Carnegie"*, disse Taylor, **"eu aconselharia o senhor a fazer uma lista das dez coisas mais
> importantes que o senhor pode fazer. E aí, começar a fazer a número um."**
>
> E, diz a história, uma semana depois Taylor recebeu um cheque de dez mil dólares.

**A reação imediata de Rumelt foi perplexidade.** Aquilo era piada? Por que Carnegie pagaria dez mil
dólares por esse conselho? **Fazer uma lista é gestão de pré-escola. Pegue qualquer livro de
autoajuda, de organização pessoal ou de porcas e parafusos de tocar um escritório, e ele vai oferecer
esse conselho.** Como isso poderia ser de utilidade real a um empresário experiente? Era simples
demais.

**Naquela noite ele viu a verdade mais profunda:**

> **O benefício de Carnegie não veio da lista em si. Veio de efetivamente construir a lista.**
>
> A ideia de que as pessoas têm objetivos e automaticamente correm atrás deles como um míssil
> teleguiado está simplesmente errada. **A mente humana é finita, os recursos cognitivos dela são
> limitados. A atenção, como o facho de uma lanterna, ilumina um assunto só para escurecer outro.
> Quando prestamos atenção a um conjunto de questões, perdemos de vista outro.** As pessoas podem
> esquecer de ligar para alguém. Você pode esquecer de comprar leite no caminho de casa porque
> prestou atenção em dirigir em vez de em fazer compras. **E, mais importante, as pessoas podem
> esquecer os propósitos maiores delas, distraídas pelo puxão dos eventos imediatos.** Um
> profissional ocupado, absorvido na construção de carreira, pode prestar pouquíssima atenção ao
> casamento e aos filhos, recuperando o senso de prioridades só depois de o dano estar feito. **Um
> CEO travado numa disputa com outro proponente por uma empresa pode perder de vista as razões mais
> amplas da aquisição.**
>
> Dada a tarefa que Taylor propôs, algumas pessoas teriam listado as contas que precisavam pagar ou
> as pessoas que precisavam ver. **Só dá para adivinhar qual era a lista de Carnegie, mas o pagamento
> de dez mil dólares sugere que não era só uma lista de recados.**
>
> **Levada a sério, a injunção de Taylor não era simplesmente fazer uma lista de questões
> importantes. Não era simplesmente fazer uma lista de coisas a fazer. E não era fazer uma lista do
> que poderia ser importante. A tarefa que Taylor propôs era pensar na INTERSEÇÃO entre o que era
> importante e o que era acionável. Carnegie pagou porque o exercício de fazer a lista o forçou a
> refletir sobre os propósitos mais fundamentais dele e, por sua vez, a inventar maneiras de
> avançá-los.**

**E aí o comentário de quinze anos antes fez sentido.** Quando Rumelt perguntou sobre o propósito da
divisão, sobre as forças e fraquezas competitivas dela e sobre as questões de gestão que ele
enfrentava, **o gerente teve que refletir e trazer essas questões para o primeiro plano. A entrevista
o lembrou da situação mais ampla dele e das coisas que ele tinha que fazer para avançar. Ele foi
essencialmente lembrado da "lista" dele e das várias prioridades dela.**

> **Fazer uma lista é ferramenta básica para superar nossas próprias limitações cognitivas. A lista
> em si contraria o esquecimento. O ato de fazer a lista nos força a refletir sobre a urgência e a
> importância relativas das questões. E fazer uma lista de "coisas a fazer, agora" em vez de "coisas
> com que me preocupar" nos força a resolver preocupações em ações.**

### A miopia é o obstáculo comum

> Hoje somos oferecidos uma variedade desconcertante de ferramentas e conceitos para ajudar na
> análise e na construção de estratégias. Cada uma dessas ferramentas enxerga o desafio de forma
> ligeiramente diferente. Para algumas é reconhecer vantagem; para outras é entender a estrutura do
> setor. Para algumas é identificar tendências importantes; para outras é erguer barreiras à
> imitação. **E, no entanto, existe um desafio mais fundamental comum a todos os contextos. É o
> desafio de contornar as próprias limitações cognitivas e os próprios vieses — a própria miopia. A
> nossa própria miopia é o obstáculo comum a todas as situações estratégicas.**
>
> **Ser estratégico é ser menos míope — menos curto de vista — que os outros.** Você tem que perceber
> e levar em conta o que os outros não percebem, sejam eles colegas ou rivais. **Ser menos míope não
> é o mesmo que fingir que você consegue ver o futuro. Você tem que trabalhar com os fatos no chão,
> não com os contornos vagos do futuro distante.** Seja insight sobre estruturas e tendências
> setoriais, seja antecipar ações e reações de concorrentes, seja insight sobre as próprias
> competências e recursos, seja esticar o próprio pensamento para cobrir mais bases e resistir aos
> próprios vieses, **ser "estratégico" significa em larga medida ser menos míope que o próprio eu não
> deliberativo.**

### O experimento TiVo: como as pessoas realmente decidem

O caso mais útil do capítulo, e é uma demonstração ao vivo do fechamento rápido.

Dezessete gerentes, segundo dia de um programa de três dias. O tema é um caso complicado, com
questões de tecnologia, concorrência, propriedade intelectual, eficiência de manufatura, padrões,
barganha com operadoras de cabo e satélite, privacidade e o papel da televisão no marketing. **A
tarefa tinha sido escrever um parágrafo recomendando uma estratégia.**

Olhando as recomendações de um parágrafo, Rumelt foi atingido de novo pela variedade de julgamento
dentro de um grupo tão homogêneo. Decidiu trabalhar com eles julgamento e pensamento. E fez uma
pergunta que não estava na tarefa:

> **"Antes de a gente entrar na situação do TiVo, eu quero recuar um passo e fazer uma pergunta que
> não estava na tarefa de hoje. Eu quero perguntar a vocês COMO vocês chegaram às recomendações de
> vocês. Como vocês chegaram à resposta que deram a essa tarefa?"**

Não era a pergunta que eles esperavam, e houve um silêncio longo. O executivo mais sênior falou:
tinha *"lido o caso e feito algumas anotações na margem"*.

> — **Enquanto você lia o caso, no que você pensou?**
> — *Bom, é realmente difícil lembrar. Acho que eu estava pensando principalmente que este é um
> produto ótimo, uma inovação de verdade, e no entanto a empresa está perdendo dinheiro por causa do
> custo de fabricar as caixas.*
> — **Ótimo. Você começou a focar em manufatura.**
> — *Sim, eu acho que eles precisam parar de subsidiar a fabricação dessas unidades. Eu acho—*
> — **Ótimo. Vamos não entrar nos detalhes da sua recomendação ainda. Eu quero ficar em COMO você
> chegou àquele insight.**
> — *É realmente só experiência, ou pelo menos a minha experiência. Eu vi essas perdas grandes. E elas
> parecem ser por causa de manufatura… Bom, não. Para ser honesto, a primeira coisa em que eu pensei
> foi que a maioria dos clientes está pagando por um disco rígido gigante de que não precisa. Se você
> só quer deslocar dois programas no tempo, você não precisa guardar uma temporada inteira. Então eu
> pensei: por que não usar discos menores e fazer só os usuários mais intensivos pagarem por upgrade
> de hardware?*
> — **Então a sua ideia inicial foi… uma intuição… sobre uma AÇÃO. Desagregar a capacidade de disco,
> talvez discriminar preço?**
> — *É. É isso.*
> — **Fantástico. Muito interessante. Você foi por alguma outra avenida?**
> — *Não… Ei, você só pediu um parágrafo!*

Rumelt registra que ficou satisfeito com a contribuição — honesta e interessante. **Claro que pedir
uma única recomendação não significava que ele estivesse obrigado a considerar apenas uma abordagem,
mas Rumelt não quis apontar isso ainda.**

Outra participante: *"eu só pensei sobre a situação e cheguei a uma recomendação. Ela meio que emergiu
enquanto eu pensava no problema. Percebi que se outras firmas dominarem o segmento de TV a cabo
enquanto o TiVo segura o segmento de satélite, ele vai perder a batalha de escala."*

> — **De onde veio essa ideia?**
> — *Bom, eu realmente não lembro.*
> — **É assim que as boas ideias vêm até nós. Existem muitas ferramentas de fazer salsicha sendo
> vendidas para trabalho de estratégia, mas boas ideias não saem de ferramentas mecânicas.
> Ferramentas conceituais podem ajudar a gente a se orientar, mas, no fim, boas ideias basicamente
> simplesmente aparecem na nossa cabeça. Isso se chama "insight".**
> — **Alguma outra abordagem do problema apareceu na sua cabeça, ou só aquela?**
> — *Bom, eu não lembro de nenhuma… Foi só aquela.*
> — **Ótimo — é importante ser honesto com a gente mesmo sobre isso.**

**Ao dar a volta na sala, apenas uma pessoa relatou ter dado mais que a consideração mais breve a
mais de um curso de ação.** A maioria tinha primeiro identificado uma área-problema — manufatura,
operadoras de cabo, rivalidade de software — e depois criado uma recomendação mirando aquela área.
**Ninguém que usou essa abordagem de dois passos tinha voltado atrás e considerado repensar a
identificação inicial da área-problema. Nem nenhum deles tinha investigado mais de uma resposta para
aquele problema.**

O diagnóstico que ele oferece à sala:

> **A maioria das pessoas, na maior parte do tempo, resolve problemas agarrando a primeira solução
> que aparece na cabeça — o primeiro insight. Num grande número de situações isso é razoável. É o
> jeito eficiente de atravessar a vida. A gente simplesmente não tem o tempo, a energia ou o espaço
> mental para fazer uma análise completa de cada questão que enfrenta.**

**A objeção do Blink**, e a resposta dela, valem porque a biblioteca inteira flerta com essa
tentação. Um participante levanta a mão: *"segundo o livro Blink, um primeiro julgamento pode ser o
melhor. Gladwell diz que as pessoas fazem julgamentos complexos sem saber como fazem. Tentar analisar
tudo pode levar a decisões piores."*

Rumelt reconhece que é um bom argumento e que o livro é ótima leitura. **Todos sabemos que é verdade,
especialmente quanto a decisões sobre outras pessoas e ambientes sociais, e quanto a casamento de
padrões — ver que uma coisa tem características que lembram outra. São computações relâmpago.**

**Mas:**

> **Nossos instintos frequentemente produzem julgamentos espantosamente bons. Mas nossos instintos
> também nos dizem, incorretamente, que nossos instintos estão sempre certos. Você deveria reconhecer
> QUAIS situações exigem reflexão mais profunda. Concorrentes ou a natureza estão nos levando a uma
> armadilha? A gente consegue armar uma armadilha para adversários menos cautelosos?**

Julgamentos instantâneos podem funcionar para situações de pessoas e certos tipos de casamento de
padrão. **Infelizmente, há também uma boa quantidade de pesquisa revelando que a maioria das pessoas
é ruim em fazer muitos tipos de julgamento, seja num piscar de olhos ou num mês.** De preocupação
especial: **julgamentos sobre probabilidades de eventos, sobre a própria competência relativa à dos
outros, e sobre relações de causa e efeito.**

- Ao estimar a probabilidade de um evento, **mesmo profissionais experientes exibem vieses
  previsíveis. Por exemplo, as pessoas tendem a dar mais peso a exemplos vívidos do que a evidência
  estatística ampla.**
- **Os alunos de MBA de Rumelt preveem, cada um, que vão tirar nota que os coloca na metade superior
  da turma — mesmo depois de essa informação lhes ser devolvida.**
- Ao raciocinar sobre dados naturais, **as pessoas tendem a ver padrões onde há apenas aleatoriedade,
  tendem a ver causas em vez de associações, e tendem a ignorar informação que conflita com uma
  teoria já mantida.**

E as perguntas retóricas que fecham o debate: **você iria querer que o presidente decidisse ir à
guerra num piscar de olhos? Você acha apropriado um CEO decidir sobre uma fusão sem pensar
cuidadosamente nos custos e benefícios?**

> **Em trabalho de estratégia, esse fechamento rápido pode nos meter em encrenca. Quase por
> definição, estratégia é sobre questões muito difíceis e muito importantes. Porque são situações
> importantes, elas podem merecer mais do que um fechamento rápido em torno do nosso primeiro
> palpite.**

**E o diagnóstico psicológico de por que fechamos rápido, que é a passagem mais honesta do livro:**

> **Encarar uma situação complexa assim deixa a maioria das pessoas desconfortável.** Quanto mais a
> sério você a leva, mais você a verá como um desafio real e difícil que exige uma resposta coerente.
> **E essa percepção vai, por sua vez, deixá-lo ainda mais desconfortável.** É tão mal estruturado. Há
> variáveis demais, fatores demais, incógnitas demais, nenhuma lista clara de ações potenciais e
> nenhum jeito de fazer ligações claras entre ações e resultados. **Você nem tem certeza de qual é o
> problema. Como um nadador jogado em águas muito agitadas, é difícil se orientar. Sob pressão de
> desenvolver uma saída para a dificuldade, aquela primeira ideia é um alívio bem-vindo. Graças a
> Deus, aqui está algo em que me segurar! É muito melhor ficar orientado.**
>
> **O problema é que pode haver ideias melhores lá fora, logo além da borda da nossa visão. Mas a
> gente aceita o fechamento precoce porque largar um julgamento é doloroso e desconcertante. Para
> buscar um insight novo, seria preciso pôr de lado o conforto de estar orientado e de novo se lançar
> em águas agitadas em busca de uma fonte nova de estabilidade. Há o medo de voltar de mãos vazias.
> Além disso, é antinatural, até doloroso, questionar as próprias ideias.**
>
> **Assim, quando de fato chegamos a uma ideia, tendemos a gastar a maior parte do esforço
> justificando-a em vez de questionando-a. Isso parece ser a natureza humana, mesmo em executivos
> experientes. Colocando simplesmente: nossas mentes driblam o trabalho doloroso de questionar e
> largar os primeiros julgamentos, e não temos consciência do drible.**
>
> **Mas você não precisa ser refém desse drible inconsciente. Você pode escolher como vai abordar um
> problema; você pode guiar o próprio pensamento sobre ele.** Essa habilidade pessoal é mais
> importante que qualquer conceito, ferramenta, matriz ou framework de estratégia. **É a habilidade de
> pensar sobre o próprio pensamento, de fazer julgamentos sobre os próprios julgamentos.**

### As técnicas

Rumelt enquadra: criar estratégia em qualquer arena exige muito conhecimento sobre as
especificidades, e não há substituto para experiência de chão. Essa experiência se acumula na forma
de **associações entre situações e "o que funciona" ou "o que pode acontecer" naquelas situações.**
Assim como médicos prescreviam aspirina para dor de cabeça e febre sem saber como ela funcionava, e
assim como os romanos antigos negociavam seguro de vida sem nenhuma teoria de probabilidade,
**normalmente se trabalha com padrões e analogias.**

**Mas conhecimento é necessário e não suficiente. Há muita gente com conhecimento ou experiência
profundos que é ruim em estratégia.** Para guiar o próprio pensamento, é preciso cultivar três
habilidades ou hábitos essenciais:

1. **Ter uma variedade de ferramentas para combater a própria miopia e guiar a própria atenção.**
2. **Desenvolver a capacidade de questionar o próprio julgamento.** *Se o seu raciocínio não
   sobrevive a um ataque vigoroso, não se pode esperar que a sua estratégia sobreviva diante da
   concorrência real.*
3. **Cultivar o hábito de fazer e registrar julgamentos, para poder melhorar.**

**Ferramenta 1 — O kernel.** É uma lista que nos lembra que uma boa estratégia tem, no mínimo, três
componentes: diagnóstico da situação, escolha de uma política norteadora geral, e design de ação
coerente. **O conceito do kernel define a lógica de uma estratégia — o mínimo osso.** Para uma
estratégia ter alguma mordida, ela precisa traçar uma direção baseada num diagnóstico da situação.
**Sem diagnóstico, você não consegue julgar a própria escolha de política norteadora, muito menos a
de outra pessoa.**

**E o uso mais fino dessa ferramenta:** quando alguém tem um insight inicial sobre o que fazer numa
situação desafiadora, **ele nunca vem na forma de uma estratégia completa. O relâmpago do insight
atinge um dos três elementos do kernel.** Pode ser insight sobre ação, como o do participante que
queria discos menores nas máquinas do TiVo. Pode ser insight sobre uma diretriz geral, como o da
participante que queria mudar o foco para o segmento de TV a cabo. **Ou o insight pode chegar na
forma de um diagnóstico**, como o do participante que viu o TiVo como amigo do consumidor mas
espinho no lado da indústria.

> **Não há nada de errado com um insight localizado. Não temos controle real sobre o processo de
> insight e devemos ficar contentes quando ele funciona. O que o kernel faz é nos lembrar que uma
> estratégia é mais do que um insight localizado. Ela é um argumento internamente consistente que vai
> dos fatos no chão ao diagnóstico, daí a uma diretriz geral, daí à ação. O kernel nos lembra de
> expandir o escopo do nosso pensamento para incluir os três elementos.**

Rumelt registra a preferência pessoal dele, e vale como confissão metodológica: **há quem prefira
começar pela ação. Os insights dele normalmente não começam com ação — ele usa uma estrutura de
problema primeiro, e é melhor em começar com um enquadramento ou diagnóstico da situação e trabalhar
dali até a política norteadora e a ação.** No início da maioria dos trabalhos de consultoria, o
cliente quer uma avaliação de um curso de ação específico ou quer conselho sobre o que fazer. **Ele
quase sempre recua e tenta criar um diagnóstico melhor da situação antes de entrar em
recomendações.**

**Ferramenta 2 — Problema-solução.** Muitas tentativas de estratégia carecem de bom diagnóstico.
Portanto, é útil ter ferramentas mentais para **trabalhar de trás para frente, de uma política
norteadora de volta ao reino do diagnóstico e do fato.** Não há nada de profundo nesse processo além
de perceber que ele pode e deve ser feito.

> As pessoas normalmente pensam em estratégia em termos de ação — uma estratégia é o que uma
> organização faz. **Mas estratégia também incorpora uma abordagem para superar alguma dificuldade.
> Identificar as dificuldades e os obstáculos vai lhe dar um quadro muito mais claro do padrão de
> estratégias existentes e possíveis. E, ainda mais importante, você vai ganhar acesso a como
> mudanças em alguns fatores podem alterar radicalmente a mistura de estratégias eficazes. Para
> conseguir essa mudança de perspectiva, desloque a sua atenção do QUE está sendo feito para o PORQUÊ
> está sendo feito, das direções escolhidas para os problemas que essas escolhas endereçam.**

Aplicado ao TiVo: **uma visão de engenharia simples seria que ele tenta permitir ao consumidor
deslocar no tempo a visualização de TV e, talvez, pular comerciais.** Outras formas de endereçar
esse problema — soluções que competem com o TiVo — são videocassetes, serviços de vídeo sob demanda,
e aluguel e venda de DVD, especialmente de temporadas inteiras sem comerciais.

**Uma perspectiva ligeiramente diferente é ganha definindo o problema como o controle da caixa
decodificadora pelo agregador de conteúdo.** As operadoras de cabo e satélite empacotam decodificadores
com os serviços de televisão delas. Essas caixas fornecem, no mínimo, acesso aos canais regulares e
premium e a qualquer serviço de vídeo sob demanda ou interativo oferecido; podem incluir também, em
geral por preço mais alto, recursos de gravação digital de vários níveis de sofisticação. **Para uma
caixa TiVo ser solução econômica para o consumidor médio, ela precisa acessar canais regulares e
premium e baixar informação de programação pelo link de cabo ou satélite — e só pode fazer isso sob
acordo contratual com a operadora. A capacidade dessas empresas de empacotar aluguel de caixa com
contrato de serviço, e as posições de monopólio das operadoras de cabo, permitem que elas extraiam a
maior parte dos lucros possíveis do TiVo.**

**E aqui está a virada que a mudança de enquadramento produz:** monopólios que usam empacotamento
para restringir a concorrência são história velha em antitruste. **Enquanto operadoras de cabo
monopolistas puderem empacotar, será sempre extremamente difícil para empresas de fora acrescentar
valor à experiência de televisão. Essa perspectiva sugere que o TiVo gaste menos em marketing e mais
num ataque jurídico à estrutura do setor. Num ataque desses, ele teria muitos aliados importantes, e
maiores.**

**Ferramenta 3 — Criar-destruir.** Superar o fechamento rápido é simples em princípio: você busca
insights e estratégias adicionais. **Mas, na maior parte do tempo, quando são solicitadas a gerar
mais alternativas, as pessoas simplesmente acrescentam uma ou duas alternativas rasas ao insight
inicial delas. Consciente ou inconscientemente, elas parecem resistir a desenvolver várias
estratégias robustas. Em vez disso, a maioria pega o insight inicial e o ajusta ligeiramente,
acrescentando uma alternativa de palha, ou incluindo opções como "sair fora" ou "estudar mais", que
são genéricas a qualquer situação em vez de responsivas às circunstâncias especiais em questão.**

> **Uma alternativa nova deve fluir de uma reconsideração dos fatos da situação, e deve também
> endereçar as fraquezas de quaisquer alternativas já desenvolvidas. A criação de alternativas novas
> de qualidade mais alta exige que você tente com afinco "destruir" as alternativas existentes,
> expondo as linhas de falha e as contradições internas delas. Eu chamo essa disciplina de
> criar-destruir.**
>
> **Tentar destruir as próprias ideias não é fácil nem agradável. Exige dureza mental despedaçar os
> próprios insights.**

**Ferramenta 4 — O painel de especialistas.** É como Rumelt resolve o problema do criar-destruir:
ele recorre a ajuda externa **invocando um painel virtual de especialistas que carrega na cabeça.**
Esse painel é uma coleção de pessoas cujos julgamentos ele valoriza, e ele usa um diálogo mental
interno com elas **tanto para criticar as próprias ideias quanto para estimular ideias novas. Ele
tenta fazer isso antes de colocar as ideias diante dos outros.**

> **O truque do painel de especialistas funciona porque somos hábeis em reconhecer e compreender
> personalidades humanas bem integradas. Pensar em como um especialista particular e bem lembrado
> responderia a um problema pode ser fonte mais rica de crítica e conselho do que teorias ou
> frameworks abstratos.**

O painel dele contém executivos respeitados que conheceu e com quem trabalhou, pessoas que o
educaram e treinaram, colegas de muitos anos, **e certas pessoas cujos pontos de vista emergem
claramente da obra escrita delas ou de biografias.** Quando ele enfrenta um problema, ou gerou um
primeiro palpite, ele se vira para esse painel e pergunta: **"o que há de errado com essa abordagem
da situação? O que você faria neste caso?"**

Os exemplos que ele dá tornam o método concreto:

- **O professor que presidiu a banca de doutorado dele em 1971** senta no painel. Na imaginação dele,
  ele consegue ver o sujeito reclinado na cadeira **pedindo que ele explique por que alguém deveria
  escutá-lo, e dizendo qual é a implicação de ação — "e é bom que exista uma".**
- **Um historiador de negócios que morreu em 2007** mas vive no painel. **Nada impressionado com
  estratégias de lucro rápido e foco estreito, ele fala em termos de tendências históricas amplas e
  do poder de escala e escopo para construir empresas duradouras.**
- **Para conselho sobre estratégia de tecnologia**, ele se vira para um colega mestre em estratégia,
  economia, direito e negócios. Ele nunca falou com esse colega sobre o TiVo, mas na imaginação dele
  os olhos do sujeito se enrugam e ele diz: *"eles não têm exclusividade sobre tecnologia de
  gravação digital, então vai haver outras empresas oferecendo software e hardware parecidos. As
  operadoras de cabo e satélite estão em posições muito mais fortes, controlando ativos complementares
  chave. **Eles provavelmente deveriam estar licenciando o software em vez de tentar construir
  equipamento.** Eles estão tentando ganhar dinheiro com publicidade, mas se houvesse dinheiro real
  ali, os jogadores de cabo e satélite tirariam isso deles."*
- **E Steve Jobs**, que entrou no painel dele numa reunião específica em 1997, quando a Apple era o
  "caso vivo" do curso de estratégia do MBA. Jobs disse: *"eu conheço Stanford, mas não estou tão
  familiarizado com a escola de vocês."* O chefe do departamento ofereceu a linha oficial: *"a gente
  gosta de pensar que somos a escola empreendedora."* Jobs: *"interessante. Quais empreendedores do
  Vale do Silício saíram do programa de vocês, que eu reconheceria?"* O chefe fez uma careta e
  respondeu com honestidade: *"não tem nenhum."* **"Bom, então vocês fracassaram", disse Jobs, com
  finalidade. Naquele dia, ele virou parte do painel mental de Rumelt.**

O que Jobs pensaria do TiVo? **O que você tira de uma pessoa não é um framework conceitual ou uma
teoria, mas um ponto de vista integrado a uma personalidade.** Rumelt imagina que Jobs não gostaria
do negócio — **a empresa não controla variáveis suficientes para entregar uma experiência
verdadeiramente "legal".** Mesmo que você pusesse o melhor time de design do mundo para fazer um TiVo
melhor, boa parte da funcionalidade dependeria de como a máquina interage com a operadora de cabo ou
satélite. **Se você pudesse integrar verticalmente com uma operadora, aí talvez você conseguisse
entregar algo realmente interessante. Não só filmes, mas música sob demanda. Não só uma caixa de TV,
mas um sistema integrado de entrega por internet sem fio.** Assim como fez com o iPod e o iPhone,
Jobs iria querer integrar a máquina, a experiência do usuário e a entrega do produto em algo bastante
sem costura.

**A conclusão que emerge de escutar os dois conselheiros imaginários:**

> **Boas estratégias são normalmente "soluções de canto". Isto é, elas enfatizam FOCO em vez de
> compromisso. Elas se concentram num aspecto da situação, não tentando ser tudo para todo mundo.**

E a justificativa cognitiva do método:

> Aprender com os outros pode ser mais do que simplesmente escutá-los, observá-los ou ler o que eles
> escrevem. **Quando você constrói o seu próprio painel de especialistas, você vai um passo além,
> tentando moldar a sua compreensão dos ensinamentos deles numa personalidade virtual. Quando
> funciona, funciona porque nós, humanos, temos software embutido para entender outros humanos,
> software que é mais especialista em reconhecer e recordar personalidades do que em quase qualquer
> outra coisa.**

### Praticar julgamento: o pré-compromisso escrito

A última seção é curta e é a prática mais acionável do livro inteiro.

Um marinheiro tem que julgar o vento e um esquiador tem que julgar a textura da neve. **Em negócios e
em política, e em muitos aspectos da estratégia militar, a maioria dos julgamentos importantes é
sobre pessoas, especialmente antecipar as ações e reações delas. Julgamento começa em conhecer a si
mesmo, as próprias capacidades e vieses. Depois se estende a conhecer outros indivíduos. Muito mais
complexo é o julgamento sobre grupos pequenos e sobre como eles reagirão a informação ou a
desafios** — o domínio de muitos gerentes, advogados de tribunal e líderes de pelotão. **Finalmente,
há o julgamento sobre grupos grandes de pessoas e sobre mercados** — o domínio de especialistas de
marketing e publicidade, de gestão corporativa e de liderança política.

> **Bom julgamento é difícil de definir e mais difícil ainda de adquirir. Certamente alguma parte
> dele parece ser inata, conectada a ter caráter equilibrado e compreensão das outras pessoas. Ainda
> assim, estou convencido de que julgamento pode ser melhorado com prática. E para que essa prática
> seja eficaz, você deve primeiro COMPROMETER OS SEUS JULGAMENTOS POR ESCRITO.**

O exemplo que ele usa para mostrar por que o pré-compromisso é necessário: imagine uma aluna de MBA
que estudou e preparou um caso para a aula. Lendo e pensando sobre o caso, muitas questões diferentes
passaram pela cabeça dela. Ela terá tentado pensar em várias formas de lidar com a situação, e
haverá algumas que ela prefere a outras. **Então, numa discussão de uma hora, é provável que cada
questão que ela identificou tenha sido mencionada e que cada ação que ela considerou também tenha
sido colocada. Conforme essas questões e ações são examinadas e avaliadas, ela pensa: "eu pensei
nisso." Quando a turma finalmente estreita as interpretações defensáveis da situação e a gama de ação
útil, ela provavelmente vai pensar: "sim, eu tinha considerado tudo isso."**

> **O que essa aluna perdeu foi a oportunidade de se pré-comprometer com uma posição e assim avaliar
> depois o próprio julgamento. Comprometer-se com um julgamento é escolher uma interpretação de quais
> questões são críticas e quais não são, e depois escolher uma ação implicada. Ao se comprometer com
> um julgamento — especialmente com um DIAGNÓSTICO — você aumenta a probabilidade de discordar de
> algumas das avaliações dos outros, e assim aumenta a chance de aprender algo.**
>
> **O mesmo princípio se aplica a qualquer reunião de que você participe. Que questões você espera
> que apareçam na reunião? Quem vai tomar qual posição? Comprometa-se privadamente de antemão com
> alguns julgamentos sobre essas questões, e você terá oportunidades diárias de aprender, melhorar e
> recalibrar o seu julgamento.**

---

## 18. Manter a cabeça

> *Se você consegue manter a cabeça quando todos ao seu redor estão perdendo a deles…* — Kipling, na
> epígrafe

> **Boa estratégia cresce de uma avaliação independente e cuidadosa da situação, atrelando insight
> individual a propósito cuidadosamente construído. Má estratégia segue a multidão, substituindo
> insights por slogans populares.**
>
> **Ser independente sem ser excêntrico e duvidar sem ser um rabugento estão entre as coisas mais
> difíceis que uma pessoa pode fazer.** Rumelt não finge ter a fórmula para esse equilíbrio sutil, e
> conta duas histórias em vez disso.

### Global Crossing: quando o mercado é a autoridade

O caso é sobre **avaliar os fundamentos quando todo mundo diz que você está errado**, e é a mais
próxima que a biblioteca chega de uma demonstração de análise de estrutura de setor.

O pano de fundo histórico: o primeiro cabo transatlântico bem-sucedido foi assentado em 1866,
recebido com desfiles e celebrações dos dois lados do Atlântico — antes dele, mensagens entre o velho
e o novo mundo levavam duas a três semanas de travessia. Noventa anos depois, em 1956, foi assentado
o primeiro cabo telefônico transatlântico: US$ 250 milhões, trinta circuitos de voz. **Nos quarenta
anos seguintes, mais de uma dúzia de cabos novos e cada vez mais sofisticados foram assentados,
sempre por um consórcio de companhias telefônicas nacionais. Ao fim de cada projeto, a capacidade era
dividida entre os membros. Nem os cabos nem as companhias competiam entre si. Todos os preços eram
fixados por reguladores ou por acordos internacionais, e não havia alternativa às operadoras
nacionais para o tráfego internacional.**

Em 1997, dois ex-gerentes da AT&T buscavam financiamento para um projeto de cabo privado, trazendo a
expertise pessoal deles e um contrato turnkey com a AT&T para construir e manter o cabo. **Um grupo
de capital de Los Angeles montou a operação: US$ 75 milhões em equity e US$ 660 milhões em dívida.
Uma corporação nova, a Global Crossing, foi formada.**

**A economia do negócio**, e é o que torna o caso analisável:

- O cabo era um laço de 14.300 km de fibras ópticas ligando os EUA ao Reino Unido e à Alemanha. **Ele
  mais que dobrou a capacidade total sob o Atlântico.**
- A unidade de capacidade do setor era o STM-1, equivalente a 2.016 circuitos de voz. O cabo tinha
  capacidade inicial de 256 STM-1, com expectativa de dobrar para 512 com o avanço da tecnologia.
- **O custo de um cabo submarino depende mais do comprimento e da profundidade do oceano do que da
  capacidade de dados.** O custo total foi de US$ 750 milhões, cerca de US$ 1,5 milhão por STM-1.
- A Global Crossing ofereceu os 256 STM-1 a um preço promocional de **US$ 8 milhões cada** —
  consideravelmente menos que os US$ 18 a 20 milhões cobrados pelo projeto de consórcio mais recente.
- **Ao fim de 1998, 35% da capacidade tinha sido vendida por um total agregado de US$ 950 milhões,
  mais do que pagando o custo de construção de US$ 750 milhões.**
- Depois de seis meses de operação, a empresa abriu o capital, e o preço resultante avaliou a firma em
  **US$ 19 bilhões. Seis meses depois valia US$ 38 bilhões — mais que a Ford Motor Company.**

**O entusiasmo vinha do tráfego crescente na internet**, e um guru de tecnologia escreveu no
relatório anual de 1998: *"com o crescimento de usuários internacionais de internet superando
rapidamente o crescimento americano, o tráfego submarino vai crescer várias vezes mais rápido que o
terrestre. **Acredite em mim.** Nos próximos cinco anos, as porções submarinas da internet vão se
provar um ponto de estrangulamento agonizante. Assim, a Global Crossing tem uma posição
verdadeiramente cósmica como fornecedora do elemento faltante que completa o sistema global."*

**Mas os números do segundo cabo denunciavam tudo.** O AC-2 era projetado para custar de novo US$ 750
milhões, **entregando desta vez 2.048 STM-1 de capacidade — custo unitário de apenas um quarto do
primeiro.** Essa redução impressionante vinha dos avanços em multiplexação óptica — mais cores de luz
por fibra e mais capacidade base por fibra. **Essas tecnologias não eram proprietárias da Global
Crossing: estavam disponíveis a qualquer construtor de cabo.** De fato, um consórcio novo de
operadoras nacionais planejava um cabo com 4.096 STM-1, e um projeto privado planejava adicionar
outros 4.096 ao longo de quatro anos. **Engenheiros esperavam que, simplesmente trocando a eletrônica
nas duas pontas do primeiro cabo, a capacidade dele poderia quase dobrar de novo para 1.000 STM-1. E
previam que, em 2001, um cabo novo de quatro fibras teria capacidade de 20.480 STM-1.**

**A conversa com o especialista em Cambridge** que Rumelt buscou para entender por que jogadores
novos eram avaliados tão alto:

> *"A coisa-chave para entender é a **enorme vantagem do cano gordo**"* — querendo dizer canais de
> fibra de altíssima capacidade. Ele foi ao quadro branco e desenhou dois círculos, um pequeno e um
> grande, escrevendo o mesmo custo embaixo dos dois. *"O custo de assentar fibra é principalmente o
> custo do direito de passagem e da escavação. Ou de assentá-la sob o oceano. **Avanços recentes nos
> permitem instalar capacidade enorme sem custo maior do que construir um cano estreito. As economias
> de escala do cano gordo são decisivas. O cano gordo vence.**"*

**A refutação, e é uma aula de microeconomia aplicada.** Voltando de táxi para Londres, Rumelt pensou
sobre canos gordos, economias de escala e ligações telefônicas. **Qual era o "custo" de mover uma
ligação, ou um megabyte de dados, sob o Atlântico?**

> **O conceito de custo é traiçoeiro. As pessoas falam como se produtos tivessem custos, mas isso é
> uma abreviação que leva facilmente à confusão. ESCOLHAS, não produtos, têm custos.** O custo de
> escolher fazer mais uma unidade de um produto é às vezes chamado de custo marginal, ou variável. O
> custo (por unidade) de escolher produzir a uma taxa fixa por um ano se chama custo médio. O custo
> por unidade de escolher construir uma planta e produzir a uma taxa fixa se chama custo médio de
> longo prazo. O custo de atender a um pedido urgente ou especial não tem nome particular, mas
> claramente existe. **Não existe realmente uma única coisa que seja o "custo" correto de um produto.
> Tudo depende da decisão — do que está sendo comparado com o quê.**

Aplicando:

- **O custo de "decidir" carregar mais uma ligação telefônica era apenas o da energia elétrica
  necessária — essencialmente zero.**
- **O custo de decidir carregar mais uma ligação todo dia por um ano ainda era muito próximo de
  zero.**
- **O custo de decidir ligar o cabo e carregar milhares de ligações todo dia por um ano começava a
  incluir manutenção e overhead, mas não o custo de capital do equipamento.**

> **Ele começou a perceber que o "custo" de mover dados por todos aqueles cabos era essencialmente
> zero, fossem eles gordos ou estreitos. E, com o advento da concorrência num setor antes
> monopolizado, não havia nada impedindo os preços de caírem até o custo.**

**A análise das Cinco Forças que ele fez a turma de MBA executar em 1999**, e é a lista mais eficiente
do livro:

| Item | Veredito |
|---|---|
| Um STM-1 num cabo transatlântico é **tão próximo de uma commodity perfeita quanto a mente humana já conseguiu criar** | Ruim |
| A capacidade de uma operadora é **essencialmente indistinguível** da de outra | Ruim |
| A Global Crossing **introduziu concorrência** no negócio, e três outras empresas privadas anunciaram planos de entrar | Ruim |
| A tecnologia **não é proprietária** | Ruim |
| A tecnologia torna cada vez mais barato adicionar pedaços enormes de capacidade nova: **sobrecapacidade é quase certeza** | Ruim |
| **Os custos de capital de cabos transatlânticos são, muito literalmente, "afundados" (*sunk*). Se os preços não cobrirem o custo de capital, os cabos velhos vão continuar operando assim mesmo** | **Muito ruim** |

> **Custa imaginar uma estrutura de setor pior.**

Um aluno objetou: *"mas a internet está dobrando de tamanho todo ano."* **"Verdade"**, respondeu
Rumelt, **"mas a capacidade está crescendo ainda mais rápido, e o custo da capacidade está caindo mais
rápido ainda. Olha, dada a sua análise, o fim de jogo é claro. Vai haver sobrecapacidade, os preços
vão cair até o custo, que é próximo de zero, e ninguém vai ter lucro."**

Outro aluno, desdenhosamente, jogou o que passava por trunfo em 1999: **"não é isso que o mercado
acionário está dizendo. Eu não ligo para o que essa análise setorial diz, o mercado está dizendo que
essa é uma das maiores oportunidades de lucro de todos os tempos."**

**A lógica do mercado como autoridade.** Sempre se entendeu que preços de ações refletem expectativas
sobre lucros futuros. **Mas a doutrina de que preços de ações são estimadores confiáveis e acurados
de lucros futuros surgiu nos anos 1970 e estava em plena floração em 1999.**

O exemplo de como essa lógica moldou a análise: em 1998 um relatório de um grande banco estimou que a
capacidade total dos sistemas de fibra terrestres americanos era **setenta vezes** a capacidade em
operação naquele ano, que por sua vez já era bastante maior que a demanda corrente. Num setor normal,
os detentores de capacidade excedente competem entre si tentando ganhar alguma receita, e isso derruba
os preços. O analista escreveu: *"para começar a preencher a capacidade potencial, as necessidades de
banda por usuário, o número de usuários e o uso por mês têm que aumentar. Se toda linha telefônica do
país fosse atualizada para T1, a capacidade da rede teria que aumentar apenas 24 vezes (a níveis de
uso constantes). Portanto, para chegar a aumentos de 70 vezes, são necessárias velocidades ainda mais
altas e uso ainda maior."*

> **Nesse ponto, um bom analista deveria concluir que parece haver capacidade demais. Mas o mercado
> acionário estava dizendo o contrário. Então o parágrafo seguinte do relatório oferece uma ruptura
> quase psicótica no raciocínio, expressando uma fé sublime na voz do mercado:** *"acreditamos que o
> comércio eletrônico vai crescer exponencialmente, ajudando a impulsionar a demanda por mais banda
> para serviços de internet e dados. Especialistas do setor de PC veem o dia em que cada pessoa terá
> agentes eletrônicos constantemente na rede puxando dados para o PC customizados ao usuário
> individual. Além disso, há potencial para conectar virtualmente todo aparelho com um chip à
> internet…"*

Numa conferência no fim de 1999, Rumelt discutiu a questão num almoço com um grupo de consultores de
estratégia. **Eles varreram para o lado o problema imediato de competição de preço.** Um consultor de
uma grande firma opinou: *"os jogadores novos têm anos para ganhar participação contra as operadoras
nacionais tradicionais de preço alto."* Na conversa fácil, todos se referiam ao desempenho enorme das
ações das telecoms de nova onda. **As avaliações gigantescas delas eram tomadas como prova forte, até
brilhante, de estratégias de negócio sólidas.**

> **Naquela época, muitas apresentações de consultoria eram simplesmente comparações entre o
> desempenho das ações de empresas seguindo uma abordagem versus outra. Por que se dar ao trabalho de
> avaliar a lógica de uma estratégia de negócio se o mercado onisciente faz um trabalho melhor?** Se
> a ação da WorldCom se valorizou mais rápido que as da Sprint e da MCI, então **enrolar anéis de
> fibra deve ser melhor do que ser uma operadora de rede de linha ampla. Como a voz de uma
> divindade, "o mercado" tinha falado.**

**O desfecho.** Na primavera de 2001 Rumelt começou a escrever um caso sobre a Global Crossing,
fascinado pela situação do fundador: **ele tinha tido lucro enorme com o primeiro cabo, mas aquele
empreendimento tinha a estrutura de uma operação imobiliária única. Ele tinha construído o "prédio"
por US$ 750 milhões e vendido os "apartamentos" por mais de US$ 2 bilhões e, espantosamente, acabado
com uma empresa avaliada em US$ 30 bilhões. Por que os clientes sofisticados de telecom estavam tão
dispostos a pagar demais? Por que pagar US$ 8 milhões por um STM-1 quando o custo de criar um STM-1
novo era menos de US$ 1,5 milhão? Os investidores realmente achavam que ele conseguiria fazer isso de
novo e de novo? O que você faz quando a sua ação parece ultrajantemente sobrevalorizada?**

**A entrevista final agendada com o fundador foi cancelada porque a empresa declarou falência naquele
dia, em dezembro de 2001.**

E a correção do julgamento popular, que é o ponto do capítulo:

> Hoje, anos depois da derretida das telecomunicações, jornais e revistas de negócio reduziram aquela
> era a uma lista de CEOs canalhas, com o fundador da Global Crossing no meio da lista. **Mas essa
> análise é tão tola quanto foram as expectativas extravagantes de 1999. O que aconteceu com a Global
> Crossing foi um microcosmo do que aconteceu com o conjunto inteiro de operadoras de telecom da nova
> era: trilhões de dólares de receita esperada nunca se materializaram.**

**Os números da sobrecapacidade:** os planos combinados para o Atlântico em 2001 somavam 16.384
STM-1. **Isso seria capacidade suficiente para permitir que trinta e cinco milhões de pessoas, metade
na Europa e metade na América, transmitissem cobertura contínua em vídeo em tempo real das vidas
delas umas para as outras, vinte e quatro horas por dia, sete dias por semana.**

**E o mercado secundário selou o destino:** conforme a capacidade disparava na rota transatlântica,
um mercado secundário logo se desenvolveu. **Presos a montanhas de capacidade não usada, os clientes
originais, em sua maioria operadoras nacionais, tentaram ganhar algum dinheiro oferecendo a capacidade
ociosa deles para revenda ou em arrendamentos curtos. Competição feroz de preço rapidamente virou a
norma. No fim de 1999, o preço de um STM-1 colapsou de US$ 6,5 milhões para US$ 2 milhões. No início
de 2002, dava para comprar um STM-1 transatlântico por US$ 325 mil — apenas 4% do preço original de
venda da Global Crossing.**

**E o que aconteceu com a receita fantástica esperada da internet? Duas coisas deram errado:**

1. **Ao contrário da previsão do guru, o tráfego de internet sobre cabos submarinos cresceu muito
   mais devagar que o tráfego terrestre. A maior parte do tráfego de internet era local, não
   internacional.** Além disso, a necessidade de tempos de resposta rápidos pressionou muitos sites de
   uso alto a duplicar os servidores deles cidade por cidade, **obviando a necessidade de banda
   intercontinental gigantesca.**
2. **Apesar da taxa de crescimento, o tráfego de internet não gerava receita alta.** O setor de
   telecom estava acostumado a cobrar preços altos por "dados corporativos" e falhou em pensar o
   óbvio: **o crescimento rápido do tráfego de internet era em larga medida resultado do preço próximo
   de zero dele.** Ele explodia por causa de navegação individual, pornografia e pirataria de música
   (hoje vídeo). **A ideia absurda de que grandes corporações seriam o motor do crescimento, ou de que
   consumidores pagariam taxas altas às empresas que moviam tráfego de internet, teve morte suja.
   Custos e preços caíram ainda mais rápido do que o tráfego cresceu.**

> **O colapso dos preços poderia ter sido previsto por qualquer um fazendo uma análise simples das
> Cinco Forças. Por que essa análise foi ignorada? Porque o mercado acionário prometia algo melhor.
> Consultores, investidores, analistas e estrategistas foram seduzidos pelos valores de mercado das
> novas operadoras. "Sim, os produtos delas parecem commodities perfeitas", disse um deles, "mas algo
> novo está acontecendo. O mercado está dando a elas um voto de confiança." Assim, o julgamento
> fugiu.**

### Gödel e os sistemas fechados

A analogia que Rumelt usa para nomear o mecanismo é matemática, e é a ideia mais afiada do capítulo.

Por séculos, matemáticos acreditaram que dentro de qualquer sistema axiomático — geometria,
aritmética, álgebra — toda afirmação era verdadeira ou falsa. **Em 1931, Kurt Gödel provou que essa
intuição estava errada: sistemas lógicos suficientemente complexos são "incompletos". Isto é, eles
contêm afirmações e proposições que não podem ser julgadas verdadeiras ou falsas dentro da lógica do
sistema. Para julgar a verdade delas, é preciso olhar PARA FORA do sistema, para conhecimento
externo.**

> Eu acredito que essa ideia se aplica, metaforicamente, a sistemas humanos. **Especificamente,
> quando executivos e especialistas investem e gerenciam baseados apenas em sinais recentes do
> mercado acionário, o fluxo de informação das decisões corporativas de investimento para os
> operadores, daí para os preços das ações e depois de volta para as decisões corporativas vira um
> círculo fechado. O "axioma" da acurácia do mercado ancora o centro do círculo.**
>
> No negócio de fibra óptica, esse fechamento foi selado porque **os analistas mediam "crescimento"
> olhando aumentos na capacidade instalada.** Dentro daquele sistema fechado, uma pergunta como
> **"cabos transatlânticos são um negócio de commodity com sobrecapacidade?" virou o que Gödel
> chamaria de proposição indecidível. Para responder a essa pergunta seria preciso olhar para fora do
> sistema fechado e fazer uma estimativa independente da situação.**

E os outros três exemplos de círculo fechado que ele dá, que valem como diagnóstico transferível:

- **Círculos fechados semelhantes ocorrem quando líderes políticos criam política pública baseada em
  pesquisas de opinião.** "É sábio ter agências governamentais grandes comprometidas a fazer um número
  rapidamente crescente de empréstimos hipotecários altamente alavancados?" **A pergunta é indecidível
  dentro da lógica da opinião popular e das campanhas eleitorais. Só olhando cuidadosamente para o
  passado e para as experiências de outras nações a pergunta pode ser respondida.**
- **Outro círculo fechado ocorre quando escolas desenham currículos baseados em avaliações de alunos,
  e alunos se candidatam a escolas baseados em avaliações passadas.** Em escolas de negócio modernas,
  por exemplo, **a pergunta "estudantes de pós-graduação deveriam ser obrigados a ler um livro?" virou
  indecidível. Para quebrar a lógica circular é preciso olhar para conhecimento e princípios que estão
  mais profundamente enraizados que a opinião popular corrente.**

### Os cinco erros da crise de 2008

A segunda história é a crise financeira, e Rumelt a usa para nomear os vieses. A mecânica que ele
resume primeiro: **numa bolha de crédito, os padrões de empréstimo ficam cada vez menos rigorosos.
Crédito fácil, por sua vez, ajuda a empurrar para cima os preços de uma classe de ativos, geralmente
imóveis ou ações. Esses valores recém-elevados formam então o colateral para mais empréstimo.**

**Pode haver bolha de ativo sem crédito fácil** — no fim dos anos 1990, os preços crescentes das
pontocom atraíram mais e mais compradores para as ações delas, empurrando os preços para cima ainda
mais rápido. **Mas, com pouca alavancagem, a quebra de 2000 teve impacto apenas menor sobre a economia
maior. É o crédito fácil demais, aparecendo como devedores superalavancados, que transmite choques de
empresa para empresa, de pessoa para pessoa, de setor para setor e de nação para nação, transformando
o que de outra forma seriam perdas individuais numa calamidade coletiva.**

Os números da alavancagem: quando o Bear Stearns colapsou em 2008, a alavancagem reportada era de 32
para 1 — **US$ 1 de patrimônio para cada US$ 32 de dívida.** (A alavancagem típica dele era mais como
50 para 1, **mas a empresa seguia a política de reduzir a alavancagem no fim de cada mês para efeito
de relatório.**) Alguns dos fundos de hedge dele estavam alavancados 85 para 1. O Lehman Brothers
estava tão alavancado quanto, e Citigroup, Merrill Lynch e o resto de Wall Street não estavam muito
atrás. **Os primeiros donos de casa a abandonar as hipotecas deles no fim de 2006 tinham tomado
primeiras hipotecas de 90% mais segundos empréstimos "de carona" para cobrir a entrada de 10% — e
ainda tinham tomado empréstimos com garantia do imóvel para pagar móveis novos e outros bens de
consumo.**

**A metáfora do Coiote**, que é a melhor descrição de bolha que o livro produz: nos desenhos, há o
momento em que o Coiote corre por engano para fora do topo de um penhasco mas continua suspenso no ar,
com as patas girando. **Só quando ele olha para baixo e vê que não há nada sob os pés é que ele começa
a cair.** Em bolhas de crédito, esse momento chega quando os preços dos ativos começam a declinar.
**Basta uma deflação suave da bolha para disparar o colapso.** Conforme os preços derivam para baixo,
investidores que recentemente compraram ativos inflados usando alavancagem alta de repente percebem
que não há chão sob os pés deles. Os mais ágeis correm para vender antes de o patrimônio ser
aniquilado, e essas vendas derrubam os preços mais rápido, o que entra em pânico ainda mais donos
superalavancados. **Esse processo se chama desalavancagem. Conforme grande número de pessoas tenta
desalavancar ao mesmo tempo, a pressão vendedora faz os preços caírem ainda mais bruscamente.
Banqueiros, subitamente recuperando a sanidade, também começam a desalavancar, o que reduz a
quantidade de crédito na economia. A economia desacelerando causa ainda mais inadimplências e vendas
forçadas de ativos. Esse retorno da dívida para venda de ativos, para queda de preços, de volta para
mais inadimplências e ainda mais vendas, se chama deflação de dívida.**

**O dado que enquadra tudo (gráfico ausente):** em 1984, a família americana média devia 60% da renda
anual líquida dela em dívida (hipotecas, financiamento de automóvel e crédito ao consumidor). **Em
2007 isso tinha crescido para 130% da renda líquida.** E, embora a cobertura padrão da mídia nos anos
1980 e 1990 focasse em dívida do governo, **é notável que, relativamente à economia como um todo, não
foi o governo que saiu numa farra de empréstimos: foi a dívida das famílias e das instituições
financeiras que explodiu. A dívida das famílias começou a subida em 1984; em 1988 já excedia toda a
dívida governamental.**

**Os cinco erros de julgamento e comportamento humano** — e Rumelt insiste que o mesmo conjunto
explica a Enchente de Johnstown, o incêndio do Hindenburg, o rescaldo do Katrina em Nova Orleans e o
vazamento de petróleo no Golfo:

| # | Erro | O que é |
|---|---|---|
| 1 | **Excesso de engenharia** | Projetistas construíram sistemas cujos modos de falha e cujas consequências de falha excediam a capacidade deles de compreender ou analisar. **Os instrumentos financeiros novos criados na década anterior a 2008 tinham modos de falha que ninguém entendia ou previa** |
| 2 | **A falácia da navegação tranquila** | Presumir que a ausência de tremores e tempestades recentes significa que não há risco. **Institucionalizada pela doutrina do setor financeiro de medir risco analisando vibrações passadas de preço.** Um sistema com uma falha crítica de projeto — o Hindenburg, os diques de Nova Orleans, ou construir uma montanha de títulos sobre a premissa de que preços de imóveis nunca caem — **não necessariamente exibe a falha até colapsar. O colapso é virtualmente certo, mas não é sinalizado por uma história de tremores.** Importante: **o colapso não se deve a eventos totalmente imprevisíveis ou quase impossíveis — coisas que a comunidade financeira tende a chamar de "cisnes negros" ou "riscos de cauda". Dadas as falhas de projeto do sistema, um colapso era inevitável** |
| 3 | **Incentivos que buscam risco** | **Sempre que você lucra muito se as coisas vão bem e outras pessoas assumem a perda quando vão mal, você vira um buscador de risco.** O núcleo dos maus incentivos foi a disposição do governo federal de socorrer entidades grandes com dívidas impagáveis — Nova York em 1975, Continental Illinois em 1984, e especialmente o Long-Term Capital Management em 1998. **Esses socorros encorajam tomada de risco excessiva futura.** Além disso, o setor de serviços financeiros flutua num mar de arranjos de remuneração de alta gestão e de estruturas de taxa de intermediários que são **todos de lado positivo e nenhum de lado negativo. E, como esses agentes não são atores passivos, os incentivos funcionam para aumentar de fato a quantidade de risco na economia** |
| 4 | **Manada social** | Quando não sabemos sobre algo, pode ser sensato olhar o comportamento dos outros, presumindo que pelo menos alguns deles sabem coisas que a gente não sabe. **Mas se todo mundo está fazendo o mesmo, esse processo de calibração mútua pode resultar em todos os membros de um grupo empreendendo ações desinformadas ou acreditando que "o outro cara" está prestando atenção aos fundamentos** |
| 5 | **A visão de dentro** | Rótulo dado por Kahneman e Lovallo à **tendência de ignorar dados pertinentes relacionados — de acreditar que "este caso é diferente"** |

**A visão de dentro merece detalhamento**, porque é o viés mais transponível: as pessoas tendem a ver
a si mesmas, o grupo delas, o projeto delas, a empresa delas ou a nação delas como especiais e
diferentes. **Muita gente sabe da estatística de visão de fora de que falar ao celular dirigindo
aumenta o risco de acidente por um fator de cinco — mais ou menos o mesmo que dirigir bêbado. Mas a
visão de dentro da situação é "eu sou um bom motorista; essas estatísticas não se aplicam a mim". Da
mesma forma, sabemos que a maioria dos restaurantes novos fracassa, e ainda assim cada empreendedor
acha que o restaurante novo dele é diferente.**

**Na crise de 2008, premissas de visão de dentro eram amplamente sustentadas e expressas, subindo
acima de mera asserção e virando doutrinas — princípios que, embora indemonstráveis, servem de base
para argumento, política e ação:**

- **A crença de que as histórias econômicas de outras nações e de outras épocas tinham pouca
  relevância para a América moderna.**
- **A crença de que a expertise do Federal Reserve em gerenciar taxas de juros tinha eliminado o
  risco de grandes oscilações econômicas — que os tempos tinham mudado.**
- **A crença no poder dos mercados financeiros americanos "profundos e líquidos" de resistir e
  absorver choques.**
- **A crença na eficácia das ferramentas novas de Wall Street para gerenciar, precificar e parcelar
  risco.**

> **Todas essas doutrinas bloquearam a percepção simples de que o que tinha acontecido com outros, e
> o que tinha acontecido ali mesmo várias vezes antes, estava acontecendo de novo. Os preços de
> imóveis estavam disparando e crédito fácil demais estava sendo estendido em todas as frentes.**

**A visão de fora era pouco complexa:** a evidência internacional é clara — **problemas econômicos
agudos depois de booms de crédito, especialmente booms ligados a booms imobiliários, são frequentes e
muito danosos. Nos cinquenta anos anteriores houve vinte e oito ciclos severos de alta e baixa de
preço de imóveis e vinte e oito crises de crédito em vinte e um países avançados da OCDE.** Dois
pesquisadores de Wharton observaram: *"ciclos imobiliários podem ocorrer sem crises bancárias. E
crises bancárias podem ocorrer sem ciclos imobiliários. **Mas os dois fenômenos são correlacionados
num número notável de instâncias, cobrindo uma ampla variedade de arranjos institucionais, tanto em
nações avançadas quanto em economias emergentes.**"*

**E a explicação estrutural americana**, que é a parte que Rumelt considera decisiva: olhando a
história dos EUA, **a mistura perigosa de crédito fácil e boom imobiliário apareceu repetidamente por
causa das raízes políticas e culturais mais profundas do país. Por quase dois séculos, o governo
federal perseguiu uma agenda ampla de colonizar terras abertas, promover a posse de pequenas fazendas
e, agora, empurrar a propriedade individual de moradias. É um programa que une populistas àqueles que
veem uma nação de proprietários como baluarte contra as tiranias da oligarquia e do coletivismo. Ele
une democratas e republicanos, ricos e pobres, Wall Street e a rua principal.**

E o problema estrutural que decorre disso: **as pessoas trabalhadoras comuns e os imigrantes que são
os objetos desse programa raramente têm riqueza para comprar propriedade à vista, frequentemente
faltando até os fundos para uma entrada. Portanto, houve constantes "inovações" políticas e
financeiras em métodos de estender crédito a colonos, fazendeiros e futuros proprietários. Quando os
tempos ficam ruins, esses empréstimos entram em inadimplência e, por um tempo, a economia inteira é
danificada.**

**O catálogo histórico**, que Rumelt monta para provar o ponto:

- **1819, a primeira depressão americana:** resultado direto do governo vendendo grandes lotes de
  terra pública a crédito fácil. Atraídos por preços altos das safras, especialmente algodão, colonos
  tomaram pesado de bancos estaduais altamente alavancados. **O aumento massivo de produção,
  combinado com a recuperação gradual da agricultura europeia depois das guerras napoleônicas,
  disparou um colapso de preços em 1819. Em 1818 o algodão estava a 31 centavos a libra; em 1819
  estava pela metade; em 1831 tinha caído a 8 centavos. Os preços da terra seguiram e vieram as
  inadimplências massivas. Na Filadélfia, os preços de imóveis caíram 75%. Milhares definharam em
  prisões de devedores.**
- **1837:** enraizado na venda pelo governo federal de doze milhões de hectares de terra pública — um
  pedaço do que hoje é o Meio-Oeste. O financiamento veio das novas legiões de bancos estaduais e
  locais, em sua maioria na forma de notas bancárias privadas. Estados começaram a antecipar receita
  tributária futura daquela terra nova e tomaram emprestado contra essa receita esperada para
  financiar projetos de desenvolvimento, especialmente canais. **Quando a confiança em todas aquelas
  notas vacilou, o colapso derrubou quase metade dos bancos da nação, devastou os valores da terra e
  iniciou uma depressão de seis anos.**
- **1873:** depois da Guerra Civil, os EUA começaram a construir ferrovias em escala transcontinental.
  O governo federal deu vastos lotes de terra a empresas que construiriam ferrovias ligando as duas
  costas — **uma delas recebeu concessões de terra de área igual à da Nova Inglaterra, espalhadas por
  uma rota de Chicago ao Pacífico.** Essas empresas emitiram títulos vendidos com desconto por redes
  de corretores e vendedores por toda a América do Norte e Europa. **O conceito de negócio era
  incrivelmente ousado: elas venderiam grandes parcelas dos impérios de terra delas a colonos
  americanos e imigrantes pobres. Isso povoaria o Oeste, e a demanda dos novos colonos por transporte
  ferroviário comercial acabaria fazendo esses investimentos massivos valerem a pena.** Em 1870, mais
  de US$ 1 bilhão em títulos ferroviários americanos tinham sido vendidos na Europa, e agentes
  vasculhavam o norte europeu buscando imigrantes acostumados a invernos rigorosos. Conforme as
  pessoas se assentavam, mais crédito era estendido para financiar compras de terra, sementes, gado e
  a construção das casas e cidades delas. **Quando essa bolha estourou em setembro de 1873, a Bolsa de
  Nova York fechou por dez dias e uma reação em cadeia de falências bancárias e colapsos corporativos
  se seguiu. Cerca de dezoito mil negócios faliram, incluindo um quarto das ferrovias americanas. O
  desemprego chegou a 14% e o movimento sindical americano começou de verdade.**
- **1893:** disparado pela quebra de títulos ferroviários e por falências de fazendas. **Fazendas
  recém-alavancadas quebraram em grande número quando os preços das safras colapsaram — e o mergulho
  de preços não foi flutuação, mas o resultado inevitável da produtividade agrícola crescente e da
  quantidade disparada de terra ocidental entrando em cultivo. O desemprego subiu acima de 12% e a
  economia nacional não se recuperou por sete anos.**
- **Melbourne, 1880–1891:** o governo tomou emprestado para investir em ferrovias, porto, sistemas de
  água e transporte urbano. **Embora não houvesse escassez de terra, e embora Melbourne fosse em 1886
  uma das cidades geograficamente maiores do mundo, um boom especulativo empurrou os preços a níveis
  muito além dos de Londres ou Nova York.** Rumelt cita um livro sobre o episódio: *"a mania de terra
  dos anos 1880 tomou duas formas principais. A primeira se baseava numa profusão de sociedades de
  construção, cujos dirigentes otimistas acreditavam que toda família da colônia podia
  simultaneamente construir a própria casa, manter os pagamentos em tempos bons e ruins, e sustentar
  um exército de investidores a quem se pagavam taxas altas de juros pelo uso do dinheiro deles. **A
  segunda forma de mania era a crença profundamente arraigada de que era impossível perder dinheiro
  investindo em terra, crença que persiste até hoje.**"* **O estouro em 1891 foi devastador: a terra
  em Melbourne ficou quase totalmente ilíquida, não havendo compradores à vista a preço nenhum. Os
  preços das ações colapsaram — a ação da companhia de bondes da cidade caiu 90%. Bancos e negócios
  faliram em grande número, e a economia caiu em depressão.**
- **O século XX americano, migrando de terra para casa própria:** as crises de crédito do século XIX
  cresceram de iniciativas voltadas a colonizar terras ocidentais e a estender as ferrovias. **Durante
  a maior parte do século XX, o foco mudou para a casa própria.** Uma miríade de políticas
  governamentais, isenções fiscais, regulações e organizações de supervisão promoveram, por gerações,
  uma taxa sempre crescente de propriedade. **O ideal jeffersoniano original era uma nação de
  cidadãos-fazendeiros, cada um dono dos meios do próprio sustento. Hoje essa visão se metamorfoseou
  numa nação de proprietários de casa, cada um trabalhando 100 dias por ano para pagar os impostos
  deles e outros 125 dias por ano para pagar as hipotecas deles.**

E a sequência de programas, com nome e sobrenome: a salva de abertura foi o programa "Seja Dono da
Sua Casa" de Herbert Hoover em 1922; a batalha foi travada a sério quando Franklin Roosevelt criou a
Administração Federal de Habitação e a Fannie Mae; acelerou quando Truman empurrou o GI Bill. **A
ênfase moderna em propriedade entre minorias foi iniciada por Bill Clinton: em 1995 ele prometeu
empurrar a taxa de 65% para 67,5% das famílias até 2000, um aumento de vários milhões. A Estratégia
Nacional de Casa Própria dele mirava "cortar custos de transação… reduzir exigências de entrada… [e]
aumentar a disponibilidade de produtos de financiamento alternativo nos mercados imobiliários pelo
país". Sob a liderança do secretário de Habitação, o governo reduziu os padrões exigidos para que uma
hipoteca se qualificasse a seguro federal: em vez de cinco anos de renda estável, três passaram a
bastar; em vez de entrevistas cara a cara com os tomadores, papelada passou a bastar; em vez de
agências físicas, os credores agora só precisavam de um telefone. Quando George W. Bush assumiu, ele
pisou ainda mais fundo no acelerador, revelando um plano de aumentar o número de proprietários negros
e hispânicos em 5,5 milhões.**

**As citações que Rumelt reúne para mostrar as doutrinas em ação** — e ele as escolhe porque são de
autoridades máximas, não de charlatães:

- **O secretário do Tesouro, no fim de 2007, mesmo com a crise hipotecária já se desenrolando**,
  continuava exaltando os mercados de capital americanos "profundos e líquidos" e pregando as
  vantagens do sistema americano à China: *"a economia americana também enfrenta desafios do mercado
  imobiliário e dos mercados de capital, à medida que o risco está sendo reavaliado e reprecificado.
  **Enquanto atravessamos esse período, mercados de capital americanos profundos e líquidos estão
  desempenhando papel vital na manutenção da estabilidade, assim como fizeram ao fornecer o
  financiamento que permitiu que 69% das famílias americanas fossem donas das casas delas.**"*
- **O presidente do Federal Reserve, falando em 2004:** *"uma das características mais marcantes da
  paisagem econômica dos últimos vinte anos ou mais tem sido um declínio substancial na volatilidade
  macroeconômica… A variabilidade do crescimento trimestral do produto real (medida pelo desvio
  padrão dela) declinou pela metade desde meados dos anos 1980, enquanto a variabilidade da inflação
  trimestral declinou cerca de dois terços. **Vários autores sobre o tema apelidaram esse declínio
  notável de "a Grande Moderação".**"* **Enquanto ele falava em 2004, a taxa-alvo de curto prazo do
  Fed era baixíssimos 2,25%, o crédito hipotecário disparava e os preços das casas aceleravam para o
  azul.**

**E aqui está a explicação técnica de por que os alarmes não tocavam, que é o melhor exemplo de
métrica cega do livro inteiro:**

> **Por que os alarmes não estavam tocando? Porque o governo não inclui os preços das casas no índice
> de inflação — o índice inclui apenas a taxa de aluguel das casas. E, como os proprietários esperam
> ganhos de capital futuros maiores, as taxas de aluguel não inflacionam.** Além disso, uma enxurrada
> de roupas, eletrônicos, móveis e outros bens importados de baixo preço, especialmente da China,
> mantinha os preços ao consumidor americanos baixos. E o número rapidamente crescente de imigrantes
> pobres do México e da América Central ajudava a limitar os salários dos trabalhadores fora do setor
> público. **Assim, para os que estavam no Fed, era um mundo novo maravilhoso em que eles podiam
> constantemente "turbinar" a economia com juros baixos sem produzir nenhum solavanco para cima em
> preços de bens de consumo ou em salários.**

- **O presidente do Fed anterior, em 2005:** *"avanços conceituais na precificação de opções e outros
  produtos financeiros complexos… reduziram significativamente os custos de, e expandiram as
  oportunidades para, proteger riscos que não eram prontamente desviados em décadas anteriores…
  **Depois do estouro da bolha do mercado acionário em 2000, diferentemente de períodos anteriores
  que se seguiram a grandes choques financeiros, nenhuma grande instituição financeira deu calote, e
  a economia se sustentou muito melhor do que muitos tinham antecipado.**"*
- **O presidente do Fed de Nova York, em 2006:** *"estamos agora em meio a outra onda de inovação em
  finanças. As mudanças em curso são mais dramáticas no crescimento rápido de instrumentos de
  transferência e gestão de risco, no papel crescente desempenhado por instituições financeiras não
  bancárias nos mercados de capital ao redor do mundo, e na integração muito maior dos sistemas
  financeiros nacionais. **Esses desenvolvimentos fornecem benefícios substanciais ao sistema
  financeiro. Instituições financeiras são capazes de medir e gerenciar risco de forma muito mais
  eficaz. Riscos são espalhados mais amplamente, por um grupo mais diverso de intermediários
  financeiros, dentro e entre países.**"*

> **O Antigo Testamento instrui: "a soberba precede a destruição, e a altivez do espírito precede a
> queda." Em retrospecto, dá para ouvir a hubris nessas declarações. Os benefícios das ferramentas
> novas e inovadoras do sistema financeiro americano foram reivindicados sem evidência suficiente. Só
> porque havia muitos swaps espertos e títulos novos, e só porque eles ainda não tinham quebrado e
> pegado fogo, não significava que não podiam ou não iriam.** É preciso teste de estresse de longo
> prazo no mundo real numa ampla variedade de condições — por mercados imobiliários em alta e em
> baixa, ciclos econômicos em alta e em baixa, juros baixos e altos, inflação baixa e alta, e várias
> combinações de tudo isso — **para justificar o tipo de confiança que aquelas luminárias financeiras
> exsudavam.**

**O fecho do livro:**

> **A manada social nos pressiona a pensar que está tudo bem (ou que não está) porque todo mundo está
> dizendo isso. A visão de dentro nos pressiona a ignorar as lições de outras épocas e outros lugares,
> acreditando que a nossa empresa, a nossa nação, o nosso empreendimento novo ou a nossa era é
> diferente.**
>
> **É importante empurrar de volta contra esses vieses. Você pode fazer isso prestando atenção a
> dados do mundo real que refutem o canto de câmara de eco da multidão — e aprendendo as lições
> ensinadas pela história e por outras pessoas em outros lugares.**

---

# APLICAÇÃO ALTTA

> **Aviso de status, e ele governa tudo o que vem abaixo.** Nada aqui é decisão. O registro de
> decisões da empresa é `empresa/altta.html` §08, e ele manda nesta síntese. **A escada de quatro
> BUs, os nomes dos degraus, o modelo de MRR, a marca e o símbolo são decisões travadas** — onde
> Rumelt bater de frente com elas, o que este documento faz é **registrar a tensão, nunca recomendar
> a mudança.** Onde o §08 marca algo como **em aberto**, esta seção oferece **insumo**, com o
> raciocínio à mostra para que o João possa discordar do raciocínio, não só da conclusão.

---

## 1. O kernel aplicado à Altta de verdade

Esta é a seção que o livro existe para tornar possível. Vou aplicar o instrumento inteiro —
diagnóstico, política norteadora, ações coerentes — com o dado real que existe hoje, e vou dizer
onde estou chutando.

### 1.1 O diagnóstico

Rumelt insiste em três coisas sobre diagnóstico: **ele nomeia o desafio, ele é julgamento e não fato,
e o critério de escolha entre diagnósticos concorrentes não é qual prevê melhor, é qual dá mais
alavancagem.** Então o método correto é colocar os candidatos na mesa antes de escolher.

**Os quatro diagnósticos candidatos que o material da Altta suporta:**

| # | Diagnóstico candidato | O que ele implicaria | Alavancagem |
|---|---|---|---|
| **A** | **"O desafio é aquisição."** A Altta precisa de demanda previsível para os degraus, e o funil ainda não está construído | Investir em canal, criativo, funil, tráfego | Baixa — não há evidência no material de que a base tenha entrado por falta de demanda; ela entrou |
| **B** | **"O desafio é posicionamento e marca."** A empresa está migrando de Descompliquei para ALTTA e precisa que o mercado entenda o que ela é | Investir em identidade, copy, estreia, canais | **Já resolvido.** Marca, símbolo, tipografia, nomes dos quatro degraus e do Academy estão fechados. Continuar aqui é polir maçaneta |
| **C** | **"O desafio é preço e oferta."** O mercado é bipolar (R$ 197/mês de um lado, R$ 30–60 mil de outro, nada no meio) e a escada é conceito enquanto o ticket não ocupa o vão | Fechar a decisão 2 do §08 | Média-alta. É decisão travante de verdade, mas é **uma decisão**, não um programa de trabalho |
| **D** | **"O desafio é entrega."** A Altta tem quatro nomes de degrau e **nada implementável dentro deles**; todo concorrente relevante tem método desenhável; e foi exatamente método que faltou na base | Nomear e construir método, marco de ativação, formato de entrega, primeira contratação em CS | **A mais alta.** É o que o próprio §08 já registrou como "o buraco que o mapa expôs" (decisão 16) |

**Meu voto, com o raciocínio à mostra: o diagnóstico D.** E não é opinião solta — é o que os fatos
do próprio material da Altta já dizem, lidos com o instrumento do Rumelt:

1. **O §08, decisão 16, diz literalmente que "a Altta tem quatro nomes de degrau e nada implementável
   dentro deles — que foi exatamente o que faltou na base".** Isso é, na linguagem de Rumelt,
   **encarar o problema**. Está escrito. O que não está feito é agir sobre ele.
2. **O §08, decisão 13, diz que "gravado churna quase o dobro de turma ao vivo".** Isso é dado real
   da Altta — nível 1 da hierarquia, acima de qualquer livro. **É evidência de que o problema está na
   entrega, não na venda nem na promessa.**
3. **O §08, decisão 12, diz que o marco de ativação do degrau 1 é "o melhor previsor de churn que
   existe" e não está definido.** Você não pode gerenciar o que não mede, e a coisa que você mais
   precisa medir é a que ainda não tem definição.
4. **O §08, decisão 14, recomenda que a primeira contratação seja entrega e CS, não comercial.** Uma
   organização que já concluiu que a primeira pessoa a contratar é de entrega **já diagnosticou onde
   está o gargalo — e não escreveu isso como diagnóstico.**
5. **O §08, decisão 15, registra a ressalva de que o degrau 1 precisa entregar o mínimo comercial
   dentro, senão gera lead para clínica que não converte e o cliente conclui "não funcionou" — o mesmo
   veredito que ele já deu sobre a agência anterior.** Isso é literalmente um sistema de elos em
   cadeia sendo descrito sem o nome: **melhorar demanda sem melhorar conversão não produz efeito
   nenhum, e pode produzir efeito negativo.**

**Redação do diagnóstico, na forma que Rumelt exige — uma história mais simples que chama atenção
para o crucial:**

> **A Altta sabe vender o que ainda não sabe entregar de forma repetível. A base entrou; o problema
> não é atrair, é o que acontece depois do sim. E porque o negócio é uma escada de quatro degraus,
> cada degrau exige currículo, promessa de resultado e operação de acompanhamento próprios — quatro
> sistemas de entrega, nenhum deles nomeado nem implementável hoje. Enquanto isso for verdade,
> investimento em marca, canal, copy ou preço produz pouco ou nenhum efeito líquido, porque o
> resultado do cliente é limitado pelo elo mais fraco, e o elo mais fraco é a entrega.**

**Por que essa formulação em vez de "o desempenho está abaixo do esperado":** porque Rumelt é
explícito de que **caracterizar o desafio como "desempenho fraco" monta o palco para a má estratégia
— desempenho fraco é um resultado; os desafios verdadeiros são as razões dele.** "A Altta precisa
crescer o MRR" seria exatamente esse erro. "A entrega não é repetível e é o elo limitante" é uma
razão, e é acionável.

**O que este diagnóstico deliberadamente coloca de lado**, porque um diagnóstico que não exclui nada
não é diagnóstico: ele diz que **aquisição, marca e até preço não são o desafio preeminente agora.**
Preço continua sendo uma decisão travante (é a decisão 2 do §08 e é do João), mas travante ≠
preeminente: **você pode fechar o preço numa tarde; você não constrói método de entrega numa tarde.**

### 1.2 A política norteadora

Rumelt exige que a política **canalize a ação e exclua uma gama vasta de ações possíveis**, e que ela
não seja meta nem visão. Também exige que ela crie vantagem por pelo menos um dos quatro
mecanismos: antecipação, redução de complexidade, alavancagem sobre um ponto pivotal, ou coerência.

**A política norteadora que sai do diagnóstico D, e ela é essencialmente Marco Tinelli:**

> **Uma campanha por vez, na ordem em que os elos travam, com a Altta em aquisição ativa em um único
> degrau enquanto os outros três existem no papel e são vendidos para a base já conquistada.**

Ela cria vantagem por **redução de complexidade** (transforma dezessete decisões abertas em uma
sequência), por **alavancagem** (concentra no elo limitante) e por **coerência** (todas as ações
passam a se apoiar).

**E ela exclui, explicitamente:**

- Exclui construir currículo dos quatro degraus em paralelo.
- Exclui abrir canal de aquisição para os degraus 3 e 4 antes de o degrau 1 ter método.
- Exclui contratar comercial antes de contratar entrega.
- Exclui o Altta AI, o CRM avulso e o Academy como frentes de aquisição independentes enquanto o
  degrau de entrada não tiver método. **Isso é a parte desconfortável, e é o que faz dela uma
  política e não uma lista de desejos.**

**A compatibilidade com o §08, que é o que a torna utilizável:** ela **não** contraria a decisão
travada de que a escada tem quatro BUs. Rumelt daria exatamente a saída que a jurisprudência já
registrou no §4 — **quatro BUs existirem no papel e uma estar em aquisição ativa são coisas
compatíveis.** O que ele acrescenta, e que é novo, é a razão pela qual isso importa: **não é
"capacidade de atenção" (Harnish, Mochary), nem "concentração de retorno" (Weinberg). É que num
sistema de elos em cadeia, melhorar um elo sozinho não produz efeito, e quatro entregas frágeis são
quatro elos fracos numa corrente só.**

### 1.3 O objetivo próximo

Rumelt: **quanto mais incerta a situação, mais próximo o objetivo tem que ser.** E o exercício da
escola de negócios: *se você só pudesse ter um objetivo, e ele tivesse que ser viável, qual único
objetivo, cumprido, faria a maior diferença?*

**Minha resposta, e é a proposta operacional desta síntese:**

> **Nomear o método do Altta Autonomy e torná-lo entregável — com o marco de ativação definido e
> medido nos clientes que já existem.**

**Por que esse, e não outro:**

- **É próximo.** Não exige mercado novo, contratação, tecnologia nem decisão de preço. Exige olhar o
  que já foi entregue à base, extrair o que funcionou, nomear e escrever. **É o equivalente da spec
  lunar da Phyllis Buwalda: não é a verdade final sobre a Lua; é a especificação que permite aos
  engenheiros trabalharem.** A tentação será esperar até ter o método "certo". **O ensinamento é o
  oposto: escreva a versão defensável agora, porque sem especificação ninguém consegue projetar
  nada, e se for muito mais difícil que isso, o negócio tem problema maior que design.**
- **Ele fecha duas decisões abertas do §08 de uma vez** — a 16 (método nomeado e artefato de cada
  degrau) e a 12 (marco de ativação do degrau 1) —, e **não fecha nenhuma decisão travada.**
- **Ele está grávido de opções**, no sentido de Goldhamer: com método nomeado, a decisão 13 (formato
  de entrega) fica decidível, a decisão 14 (primeira contratação) fica dimensionável, a decisão 17
  (marca pessoal × institucional) fica menos arriscada porque o método é da empresa e não da pessoa,
  e a decisão 2 (preço) ganha um argumento de valor concreto em vez de âncora de mercado.
- **Ele é o único objetivo que, se cumprido, torna os outros mais fáceis. Nenhum outro tem essa
  propriedade.** Preço fechado não facilita a entrega. Marca no ar não facilita a entrega. Método
  facilita tudo.

**E o critério de sucesso, que Rumelt exigiria que fosse escrito antes:** o método é entregável
quando **uma pessoa que não é o João consegue conduzir um cliente do dia 1 ao marco de ativação
seguindo o artefato, sem o João na sala.** Enquanto isso não for verdade, o método não existe — existe
o João.

### 1.4 As ações coerentes

Rumelt: sem ação, não é estratégia; e as ações têm que se apoiar umas nas outras, não apenas não se
contradizer. **Estas são as ações que derivam do diagnóstico e da política, na ordem de Marco
Tinelli — uma campanha por vez, com a próxima só começando quando a anterior fechar:**

**Campanha 1 — o método (o elo da entrega).**
1. Extrair da base o que de fato produziu resultado: **quais clínicas atingiram resultado, em quanto
   tempo, e por qual sequência de ações.** O dado existe no Supabase e nos planos mensais de CS.
2. **Nomear a sequência** e escrever o artefato (o equivalente do "Sales Model Canvas" dos
   concorrentes) — sob a regra de nomenclatura já travada: `Altta + alguma coisa`.
3. **Definir o marco de ativação**: o primeiro resultado real do aluno, com número e prazo, não com
   adjetivo. (Decisão 12 do §08.)
4. **Medir o marco retroativamente na base inteira.** Quem atingiu, quanto tempo levou, quem não
   atingiu e o que aconteceu com quem não atingiu. **Isso é o dado que transforma a decisão 13
   — gravado × ao vivo — de opinião em medição.**

**Campanha 2 — a entrega (o elo da operação).**
5. Escolher o **formato** com o dado da campanha 1 na mão (decisão 13).
6. **Contratar entrega e CS** (decisão 14), dimensionada ao método já escrito — não a um método
   hipotético.
7. Montar o acompanhamento até o marco dentro do **Altta Academy**, que é onde a entrega dos degraus
   acontece.

**Campanha 3 — o comercial e o preço (o elo da captura de valor).**
8. Fechar preço e ancoragem (decisão 2) **com o valor do método demonstrado**, não com a âncora do
   mercado bipolar. Rumelt em Crown: **custo mais alto por unidade equilibrado por preço mais alto é
   uma estratégia perfeitamente boa quando a coordenação de políticas aumenta o poder de barganha.**
9. Decidir se quem compra o CRM avulso entra na escada (decisão 5) — decisão de funil que só faz
   sentido quando existe método para o qual encaminhar.

**A razão de o corte de custo/preço vir por último é literalmente a de Marco Tinelli**, e vale
repetir porque é contraintuitivo: ele deixou custo para o fim **porque queria que a campanha de custo
trabalhasse com, mas não definisse, o tipo de máquina que a empresa constrói.** Fechar preço antes de
ter método significa deixar o preço definir o produto. **E, como no caso dele, foi preciso um time
técnico sofisticado para comunicar ao cliente que o preço da máquina não caiu mas o custo para o
usuário caiu — que é exatamente o argumento que a Altta vai precisar fazer para ocupar o vão entre
R$ 197 e R$ 30 mil.**

---

## 2. Sistemas de elos em cadeia — o achado central para a Altta

Este é o conceito que o prompt desta fila apostou que estaria no livro. **Está, e é um capítulo
inteiro.** E ele entrega exatamente o eixo que faltava.

### 2.1 A cadeia da Altta

Rumelt: **um sistema tem lógica de elos em cadeia quando o desempenho é limitado pela subunidade mais
fraca, e quando fortalecer os outros elos não fortalece a corrente.** A cadeia que produz o resultado
prometido ao cliente da Altta:

| # | Elo | Estado hoje |
|---|---|---|
| 1 | **Aquisição** — a clínica chega | Funciona; a base entrou |
| 2 | **Venda** — a promessa feita na venda | Forte; é onde a biblioteca inteira está |
| 3 | **Onboarding e primeira entrega** | **Sem marco definido** (decisão 12, aberta) |
| 4 | **Método** — o que a clínica de fato executa | **Não existe artefato** (decisão 16, aberta) |
| 5 | **Formato** — como o método é entregue | **Aberto, com dado de churn conhecido** (decisão 13) |
| 6 | **Acompanhamento** — o CS que segura até o resultado | Existe como prática, não como sistema |
| 7 | **Upgrade** — a subida no dia 91 | Travado como decisão, sem operação atrás |

**A leitura que só o Rumelt permite fazer:** os elos 1 e 2 são os mais fortes da cadeia, e são
justamente os que a biblioteca inteira reforça — **vinte e dois livros, e quinze deles moram nos elos 1
e 2.** Isso significa que **o acervo está aparelhado para fortalecer exatamente os elos que já são
fortes.**

E aqui está a consequência que dói:

> **Num sistema de elos em cadeia, investir no elo forte não só não melhora o resultado como reduz o
> lucro do sistema, porque qualidade maior exige recurso melhor e insumo mais caro.** Melhorar o
> criativo, refinar o script, afiar a copy — cada uma dessas ações consome caixa e atenção, produz
> mais leads e mais fechamentos, **e joga mais clientes dentro de uma entrega que ainda não está
> pronta. O resultado líquido pode ser negativo: mais clientes insatisfeitos, mais churn, mais
> "não funcionou" — que é o veredito que a base já deu sobre a agência anterior.**

Isso não é especulação minha: **é o mecanismo exato que o §08 descreve na decisão 15**, ao registrar
que o degrau 1 precisa entregar o mínimo comercial dentro **senão gera lead para clínica que não
converte e o cliente conclui "não funcionou".** Rumelt dá o nome do fenômeno e a razão pela qual ele
se repete: **casamento de qualidade.**

### 2.2 Por que a escada de quatro degraus é a definição do problema

**Quatro BUs são quatro cadeias, e cada cadeia tem sete elos.** Isso não é hipérbole retórica; é
aritmética de entrega:

- Quatro currículos.
- Quatro promessas de resultado, cada uma tendo que ser verdadeira.
- Quatro marcos de ativação, cada um precisando ser definido e medido.
- Quatro operações de acompanhamento.
- Quatro manuais de objeção (que a jurisprudência já registrou no caminho 7 do §4).

**E o ponto que Rumelt acrescenta, que os treze caminhos anteriores não tinham** — inclusive os três
que já usavam o eixo da entrega (Spinks, Make It Stick, Steinman): não é que fazer quatro seja
"difícil", "disperso" ou "caro". **É que em sistema de elos, a melhoria incremental em um dos quatro
pode não ter retorno nenhum e pode piorar as coisas — e é por isso que sistemas assim ficam
TRAVADOS, que é um estado diferente de estar lento ou sobrecarregado.** Uma empresa pode passar dois anos melhorando um pouco cada um dos quatro degraus e não
ver resultado nenhum, **e a leitura errada disso é "a gente precisa se esforçar mais", que é
Passchendaele.**

### 2.3 A saída, que Rumelt dá inteira e a Altta pode copiar

**A virada da empresa lombarda é o roteiro, e é copiável quase linha a linha.** O que Marco Tinelli
fez, traduzido:

| O que ele fez | O equivalente na Altta |
|---|---|
| **Identificou os três gargalos** (qualidade, competência técnica de vendas, custo) | Identificar os elos: **método, formato, acompanhamento** |
| **Uma campanha por vez, doze meses em qualidade** | Uma campanha por vez, começando pelo método |
| **Assumiu pessoalmente a responsabilidade pelo resultado final** | O João absorve o custo da campanha, não o distribui |
| **Desligou o sistema normal de medição e recompensa locais** durante a virada | **Não cobrar resultado comercial da campanha de método.** Se você medir a campanha 1 por vendas, ela morre no mês 2 |
| **Parabenizou os gerentes por atingir a meta próxima da campanha, e passou à seguinte** | Marco de conclusão por campanha, não métrica de saída |
| **Deixou custo por último, para que ele trabalhasse com, mas não definisse, o produto** | Deixar preço por último, para que ele não defina o método |

**E o que ele NÃO fez, que Rumelt manda escutar:** não aumentou a pressão por lucro, não criou
métricas novas exigindo melhoria, e não trocou os gerentes. **Ele deu a definição geral do que tinha
que ser feito e absorveu os custos da mudança.**

### 2.4 O outro lado: a Altta pode ser IKEA

**A parte otimista do capítulo, e ela é específica.** Rumelt mostra que **excelência e estar travado
são a mesma lógica vista dos dois lados.** As três condições para que um conjunto de políticas
encadeadas vire vantagem que ninguém copia, aplicadas:

| Condição de Rumelt | O que ela exigiria da Altta |
|---|---|
| **1. Executar cada atividade central com eficiência e eficácia excepcionais** | Método, plataforma, CRM e acompanhamento, cada um bom por si. **Hoje: plataforma e CRM existem e são próprios; método não** |
| **2. As atividades precisam ser encadeadas o suficiente para que um rival não consiga arrancar negócio adotando apenas uma** | **Este é o ativo real e ninguém no mapa competitivo tem.** Um concorrente que copie o currículo não tem o CRM; um que faça um CRM não tem a base nem o método; um que tenha método é uma pessoa, não uma instituição |
| **3. As atividades encadeadas devem formar um agrupamento incomum, tal que expertise numa não se transfira facilmente às outras** | **Educação + software próprio + IA de atendimento + acompanhamento de resultado no negócio do cliente é exatamente um agrupamento incomum.** Um infoprodutor não faz software; uma software house não faz currículo; uma agência não faz nenhum dos dois |

> **A leitura estratégica que isso permite, e ela é nova para o acervo:** a defensabilidade da Altta
> não está na marca, não está no método e não está na plataforma **isoladamente. Está no encadeamento
> — e o encadeamento só vira ativo quando cada elo é bom. Enquanto o elo do método estiver fraco, a
> Altta tem os custos de um sistema encadeado sem nenhum dos benefícios dele.**

---

## 3. A auditoria de má estratégia nos próprios documentos da Altta

O prompt pediu isso explicitamente, avisando que seria desconfortável e que é exatamente o ponto.
**Registro como tensão, não como recomendação de reescrever nada.** E, para ser justo, começo pelo
que passa no teste.

### 3.1 O que passa, e passa com folga

- **O `altta.html` encara o problema em vários pontos.** A decisão 16 nomeia o buraco do método em
  vez de escondê-lo. A decisão 13 registra que gravado churna quase o dobro. A decisão 17 nomeia a
  marca pessoal como "diferenciação real e maior fraqueza de curto prazo". **Rumelt reprovaria o
  International Harvester por não mencionar o elefante; a Altta menciona os elefantes dela por nome.
  Isso é raro e é o oposto de má estratégia.**
- **Os selos "Fechado / Hipótese / Em aberto" são um dispositivo anti-enrolação genuíno.** Eles
  impedem que hipótese seja lida como decisão, que é uma das formas de o edifício falso se construir.
- **O ICP negativo é a coisa mais rumeltiana do documento inteiro.** Escrever quem a Altta **não**
  atende — convênio/tabela, quem quer que a Altta opere, quem não é dona, sem poder de compra, degrau
  errado — **é dizer não, que é a definição operacional de estratégia.**
- **A regra "todo produto é Altta + alguma coisa" e "uma marca pública só"** são políticas
  norteadoras de verdade no sentido técnico: canalizam ação e excluem uma gama vasta de ações
  possíveis, sem definir o conteúdo.
- **"Faturamento declara, dor decide"** é uma política norteadora em cinco palavras. Ela resolve
  ambiguidade e passa ao time um problema mais simples — é a spec lunar da qualificação.

### 3.2 As quatro tensões que o instrumento expõe

**Tensão 1 — o documento tem escada, tem economia e tem marca, mas não tem diagnóstico escrito.**

Rumelt é inflexível nisso: **sem diagnóstico não dá para avaliar a política norteadora, muito menos
comparar alternativas.** O `altta.html` responde brilhantemente **o que a empresa é, para quem, com
que nome, por qual economia e com qual identidade.** O que não aparece em lugar nenhum é uma
afirmação da forma **"o desafio central da Altta é X, e é por isso que as coisas não funcionaram até
agora"**. As dificuldades estão distribuídas por dezessete linhas do quadro de decisões, cada uma
nomeada — **mas uma lista de dificuldades não é um diagnóstico. Diagnóstico é o julgamento sobre qual
delas é preeminente.**

**Consequência prática:** sem esse julgamento escrito, **cada decisão aberta compete com as outras por
atenção com peso aparentemente igual**, e a ordem em que elas serão resolvidas vira função de qual
apareceu por último numa conversa. O quadro tenta corrigir isso ordenando "por quanto travam", que é
uma proxy honesta — **mas "quanto trava" e "qual é o desafio preeminente" não são a mesma pergunta.**
A decisão 7 (direção de fotografia) trava peça de marca; a decisão 16 (método) trava o negócio.

**Tensão 2 — dezessete decisões abertas em três blocos flerta com o jantar de cachorro.**

Preciso ser justo aqui, porque a comparação é injusta se feita sem cuidado: **o quadro §08 é um
registro de decisões, não um plano estratégico**, e Rumelt ataca planos que apresentam listas
**como se fossem estratégia**. O §08 não faz isso — ele é explicitamente um registro.

**A tensão real é outra, e é mais fina:** o padrão que Rumelt descreve é o de reuniões em que cada
parte interessada sugere o que gostaria de ver feito e o grupo varre a coleção inteira para dentro do
documento, **acrescentando depois o rótulo "longo prazo" para que nada precise ser feito hoje.** O §08
não tem esse rótulo, **mas tem o efeito equivalente: dezessete itens abertos, todos aguardando o
martelo da mesma pessoa, sem nenhum deles marcado como "este é o que estamos fazendo agora".** O item
122 do plano da cidade era "criar um plano estratégico"; o análogo aqui seria uma decisão aberta cujo
desbloqueio é pré-requisito de quase todas as outras e que não está marcada como tal. **A decisão 16
é essa, e ela está listada em terceiro lugar do terceiro bloco.**

**Tensão 3 — "TCV → MRR" é modelo econômico, e a escada de quatro degraus é adição de linha de
produto. Rumelt tem uma coisa dura a dizer sobre os dois.**

Sobre MRR: **"crescimento é resultado de estratégia, não estratégia".** O §08 registra "modelo
econômico: TCV → MRR, duas fontes separadas" como decisão travada, e ela é legítima — **é uma decisão
sobre a forma da receita, e isso é escolha real.** A tensão é que **MRR descreve o resultado desejado,
não o desafio superado.** Se a pergunta "por que a receita não é recorrente hoje?" tem como resposta
"porque a entrega não sustenta permanência", **então MRR não é estratégia: é o placar de uma
estratégia de entrega que ainda não existe.** Registro como tensão porque a decisão está travada e é
boa; o alerta é sobre **tratar MRR como se ele fosse o plano.**

Sobre a escada: **o capítulo 11 é o aviso mais desconfortável do livro para a arquitetura da Altta.**
A Crown Cork & Seal tinha, sob Connelly, uma vantagem construída por coordenação de políticas em
torno de corridas curtas — **e crescia 3,1% ao ano, entregando 18,5% de retorno ao acionista.** O
sucessor achou que o problema era crescimento lento, cresceu por adição de linhas até virar a maior
do mundo, **e o retorno caiu para 2,4% ao ano.** O diagnóstico de Rumelt: **ele deixou para trás a
vantagem competitiva tradicional sem substituí-la, atraído pelo crescimento de um setor.**

**Onde isso morde a Altta, honestamente:** a escada de quatro degraus **é** crescimento por adição de
linhas de produto. E há um paralelo específico e desconfortável com a Crown: **o CFO da Crown
interpretou "foco" como restrição de linha de produto** — *"a gente opera num setor de US$ 300 bilhões
e atende só a porção de metal e plástico"* — e Rumelt registra que **ele optou por não entender o
significado mais profundo de foco, que é concentração e coordenação de ação e recursos criando uma
vantagem.** Definir a Altta como "focada em clínicas de estética" é a mesma classe de afirmação: é
recorte de mercado, não é foco no sentido técnico.

**Mas há uma diferença estrutural real que salva a arquitetura, e ela precisa ser dita:** a escada da
Altta **é sequencial e vende para a mesma base**, ao passo que a expansão da Crown foi por aquisição
de negócios com clientes e economia diferentes. **Escada vendida à base conquistada é o padrão que o
próprio Weinberg e o próprio Miller já ofereceram como saída no §4, e Rumelt não a contradiz — ele
apenas exige que ela seja sequência e não portfólio.** O que ele acrescenta de novo é o critério para
saber se você atravessou a linha: **a escada é sequência enquanto cada degrau novo se apoia na
vantagem construída no anterior; ela vira portfólio no dia em que um degrau exige competência que a
empresa não tem e que não vem do degrau de baixo.**

**O teste prático que isso gera, e que a Altta pode aplicar a qualquer momento:** para cada degrau,
pergunte **"a competência que este degrau exige vem do degrau anterior, ou é um jogo novo?"** O
degrau 3 (Rise), com implementação pontual de protocolo próprio, e o degrau 4 (Legacy), com advisory
e comunidade, **são os dois que merecem esse teste com mais rigor** — e não por acaso são os dois que
o §08 marca como hipótese, sem cliente real por trás.

**Tensão 4 — a resposta à pergunta do §4 que a jurisprudência deixou em aberto.**

A jurisprudência pergunta: **"a escada é sequência ou portfólio?"** Rumelt não responde por nós, mas
dá o instrumento para responder, e o instrumento é o dos elos em cadeia:

> **Se os quatro degraus compartilham a mesma cadeia de entrega — mesma plataforma, mesmo marco de
> ativação, mesmo modelo de acompanhamento, mesmo método com profundidade crescente — então são
> sequência, e o encadeamento é o ativo.**
>
> **Se cada degrau tem cadeia própria — currículo próprio, marco próprio, operação própria, método
> próprio — então são portfólio, e o encadeamento é o custo.**
>
> **Hoje, sem método nomeado em nenhum degrau, essa pergunta não tem resposta observável. Ela vira
> respondível no dia em que o método do degrau 1 existir, porque aí dá para perguntar quanto do
> método do degrau 2 é o mesmo método com mais profundidade.**

**Isso é insumo, não decisão.** A escada de 4 BUs está travada, e o que Rumelt produz é um **teste**,
não um veredito.

---

## 4. Vantagem: o que na Altta é "interessante"

O capítulo 12 dá uma pergunta que a biblioteca nunca teve: **não "temos vantagem competitiva?", e sim
"a nossa vantagem é interessante — existe algo que a gente possa fazer, sozinho, para aumentar o
valor dela?"**

**Aplicando as quatro frentes de criação de valor aos ativos reais da Altta:**

| Ativo | É vantagem? | É "interessante"? | Por qual das quatro frentes |
|---|---|---|---|
| **A base de clientes com histórico medido** | Sim, e é o mais subestimado | **Muito.** É a única fonte de informação privilegiada que a Altta tem | **Aprofundar.** Estudar por que alguns clientes deram resultado e outros não é literalmente o método do Gilbreth e o da Denton's |
| **O CRM próprio** | Sim — nenhum concorrente do mapa tem software próprio | Sim | **Fortalecer isolante.** Ele é o mecanismo isolante mais forte que a empresa tem, e o alvo móvel de Rumelt se aplica: um CRM que evolui é caro de replicar |
| **A IA de atendimento** | Sim, e o §08 registra que **foi motivo de entrada de boa parte dos clientes** | Sim | **Criar demanda.** É o único ativo da Altta com puxão de demanda comprovado |
| **A marca ALTTA e A Fenda** | Ainda não — marca nova não é vantagem, é aposta | Potencialmente | **Ampliar**, com o cuidado do caso Disney: extensão baseada em crença do cliente pode ser diluída |
| **A escada nomeada** | **Não, ainda.** Quatro nomes não são vantagem | — | Vira vantagem quando ganhar método (a frente 1) |

**A observação mais dura e mais útil desta seção**, tirada direto de Rumelt: **a máquina de prata tem
vantagem real e não é interessante porque não há nada que o dono possa fazer para aumentar o valor
dela.** Muitas coisas que uma empresa jovem trata como ativo estratégico têm essa característica.
**Marca registrada no INPI, por exemplo, é máquina de prata: protege, tem valor, e não há nada que
você faça sozinho para aumentar o valor dela.** Isso não é argumento contra depositar — é argumento
contra tratar o depósito como movimento estratégico.

**E o inverso vale, e é onde está o insight:** a base de clientes **parece** um ativo passivo e é o
mais interessante de todos, porque **é a única coisa que a Altta possui e que ninguém mais pode
possuir — informação privilegiada sobre o que funciona numa clínica de harmonização brasileira.**
Rumelt: *"todo empresário atento pode saber mais sobre os próprios clientes, os próprios produtos e a
própria tecnologia de produção do que qualquer outra pessoa no mundo."*

> **A ponte com o objetivo próximo da §1.3 é direta: nomear o método é converter informação
> privilegiada — que hoje está na cabeça do João e em linhas de banco de dados — em ativo
> transferível. É o mesmo movimento que Schultz fez ao transformar cada iteração da loja dele em
> política escrita.**

---

## 5. Foco: o método de Crown aplicado ao mapa competitivo

O capítulo 10 dá algo que a biblioteca não tinha: **um procedimento para descobrir a estratégia real
de um concorrente sem acreditar no que ele diz.** O §08 registra que os cinco concorrentes relevantes
são pessoas e que todos têm método desenhável. **Isso é a descrição oficial deles. Rumelt manda não
aceitar.**

**O procedimento, traduzido para o mapa competitivo da Altta:**

1. **Comece pelo ambiente, não pelo concorrente.** Como os jogadores relevantes ganham a vida? A
   observação do mercado bipolar (R$ 197/mês × R$ 30–60 mil) **é exatamente a análise de estrutura de
   setor que Rumelt faz com as fabricantes de lata.** A pergunta que falta: **o que empurrou os
   jogadores para os dois extremos e esvaziou o meio?** Se a resposta for análoga à das corridas
   longas — um custo de troca que pune quem fica no meio —, **então ocupar o vão não é oportunidade,
   é a armadilha.** Se a resposta for que ninguém tentou, é oportunidade.
2. **Liste as políticas de cada concorrente que são diferentes da norma do setor**, não as que ele
   anuncia. Não "ele tem método"; e sim: quantas turmas por ano, ao vivo ou gravado, com ou sem
   acompanhamento, ticket único ou recorrente, com ou sem software, marca pessoal ou institucional.
3. **Descubra o alvo comum dessas políticas divergentes** — sobre o que elas estão coordenadas para
   realizar. **Esse é o foco real dele, e provavelmente não é o que está no site dele.**
4. **Depois some os custos.** Rumelt mostra que o foco da Crown **aumentava** o custo por lata. **Um
   concorrente cujas políticas divergentes todas empurram custo para cima está cobrando prêmio por
   alguma coisa — descubra o quê, porque é ali que está a vantagem dele.**

**E o insight estrutural da Crown, transposto:** a Crown escapou do aperto porque **cada fábrica dela
tinha vários clientes, enquanto as grandes tinham um cliente com vários fornecedores.** O análogo na
Altta: **onde a clínica tem vários fornecedores concorrentes disputando a mesma função (a agência de
tráfego, o consultor, o infoproduto), o poder de barganha é dela.** A pergunta de posicionamento que
isso gera é: **qual configuração faz a Altta ser o fornecedor único de várias funções, em vez de um
entre vários de uma função?** A resposta provável é o encadeamento da §2.4 — educação + software +
acompanhamento —, **e essa é a mesma resposta por dois caminhos independentes, o que aumenta a
confiança nela.**

---

## 6. Entropia: o hump chart é acionável hoje

A técnica mais imediatamente utilizável do livro inteiro, e a Altta tem o dado para rodá-la esta
semana.

**O que fazer, no formato exato da Denton's:**

1. Atribuir a cada cliente da base **um ganho operacional real** — receita dele menos o custo real de
   servi-lo, **incluindo o tempo do João e do CS a preço de mercado.** É esse ajuste que a Denton's
   não fazia e que escondia tudo.
2. Ordenar do maior para o menor e **acumular**.
3. **Se as barras subirem e depois afundarem, existe corcova — e corcova sustentada no tempo é
   entropia, não azar.**

**A previsão que faço, e ela é falseável, que é o ponto:** dado que a base entrou com clínicas
faturando de R$ 6 a 28 mil/mês e que o serviço de CS é intensivo em tempo do João, **é provável que
exista corcova e que os clientes do fim da fila tenham GTO negativo — isto é, que a Altta ganhe
dinheiro deixando de atendê-los.** Se essa previsão estiver errada, ótimo, e o gráfico prova. **Se
estiver certa, ela informa duas decisões abertas do §08 de uma vez: a decisão 1 (plano de migração da
base — quem migra e quem não migra) e a decisão 3 (faixas de faturamento de entrada, cujos cortes dos
degraus 3 e 4 não têm cliente real por trás).**

**E o alerta que acompanha, direto da Denton's:** a dona reagiu com *"você não pode estar sugerindo
que a gente largue metade dos locais"*, e a resposta foi **não — feche os piores e conserte os
fracos.** Metade do ganho da Denton's veio de largar cinco de vinte e oito; **a outra metade veio de
transferência de melhores práticas entre os locais**, que é exatamente a campanha 1 da §1.4 com outro
nome.

---

## 7. Inércia e o risco específico de uma empresa em reestruturação

A Altta tem uma vantagem rara e um risco específico, e Rumelt nomeia os dois.

**A vantagem: estruturas novas são maleáveis.** Rumelt mostra que Eisenhower conseguiu remodelar o
Departamento de Defesa, a CIA, o Conselho de Segurança Nacional e a OTAN **porque todos tinham
acabado de ser criados**, e que meio século depois o poder necessário para a mesma coisa é muitas
vezes maior. **A Altta está exatamente na janela em que Eisenhower estava.** As rotinas de entrega
ainda não sedimentaram; a cultura ainda não tem alfas com anos investidos em métodos obsoletos; o
ritmo de gestão (decisão 11) está sendo desenhado do zero. **Nada disso vai ser verdade daqui a três
anos.**

**O risco 1 — inércia de rotina herdada da Descompliquei.** O caso da Continental Airlines é o
padrão: **a empresa desregulamentada continuou usando, para prever preços na era da concorrência, o
mesmo modelo que usava para justificar preços ao regulador.** O análogo aqui não é hipotético: **a
migração de TCV para MRR muda a economia inteira, e qualquer planilha, régua de proposta, cálculo de
comissão, definição de "cliente ativo" ou rotina de CS herdada do modelo de serviço com TCV vai dar
resposta errada com aparência de confiança.** A pergunta de auditoria é a que Rumelt fez ao
especialista: **"esse número é uma previsão, ou é custo mais margem?"** — e a versão Altta é: **"essa
métrica mede permanência, ou mede o que a gente media quando vendia contrato fechado?"**

**O risco 2 — inércia por procuração, e ele é o mais sutil e o mais relevante.** Rumelt mostra que os
bancos e as telefônicas não responderam aos atacantes **não por burrice, mas porque os fluxos de
lucro antigos, sustentados pela inércia dos clientes, valiam mais que a resposta.** E que **o atacante
que interpreta essa não resposta como superioridade competitiva se estrepa quando o incumbente
finalmente reage — nenhuma das operadoras alternativas sobreviveu.**

**Onde isso vale para a Altta:** o mapa competitivo mostra cinco concorrentes que são pessoas e que
não têm software, e é tentador ler isso como superioridade estrutural. **A leitura de Rumelt exige a
pergunta anterior: eles não têm software porque não conseguem, ou porque o modelo de marca pessoal
com ticket alto e turma ao vivo rende mais do que renderia construir um?** Se for a segunda, **a não
resposta deles não é fraqueza, é escolha econômica racional — e ela pode virar resposta no dia em que
a economia deles mudar.** Registro isso como a pergunta de antecipação mais importante que o mapa
competitivo deixou em aberto.

**Sobre a decisão 17 (marca pessoal × institucional), Rumelt oferece uma leitura nova que nenhum dos
22 livros dá:** o §08 registra que marca pessoal converte mais rápido e não escala, e que instituição
é o inverso. **Rumelt acrescentaria que isso não é um trade-off entre duas opções, é um trade-off
entre recursos e integração** — o princípio do capítulo 9. **Marca pessoal é um recurso de alta
qualidade que dispensa design apertado** (o João na sala resolve, como a patente resolvia para a
Xerox). **Instituição é o caso de poucos recursos, em que o desafio só pode ser vencido por
integração engenhosa e apertada.** A consequência prática: **enquanto a marca pessoal for o recurso
principal, a pressão para construir método será baixa — exatamente como a patente da Xerox tirou a
pressão por estratégia. E o arco da Xerox é o alerta: o recurso potente produz lucro sem trabalho, o
lucro fácil gera frouxidão, e a frouxidão é o que abre a porta para o próximo entrante.**

---

## 8. O que Rumelt acrescenta ao currículo do Academy

A jurisprudência §8 registra três camadas de currículo — Ação→Proficiência→Domínio (Gitomer),
De→Para (Miller) e Gradualização (Schwartz) — e observa que todas as três vieram de livros de venda
porque não havia pedagogia no acervo. **Rumelt não é livro de pedagogia e não deve ser tratado como
um.** Mas ele contribui **duas camadas de arquitetura de currículo**, não de didática, e elas encaixam
no quadro existente em vez de criar um paralelo:

**Camada 4 — a escada de competências (o piloto de helicóptero).** *Habilidades de coordenação são
degraus de escada, com os degraus mais altos ao alcance só quando os de baixo foram atingidos.*
Aplicado ao Academy: **o que precisa virar automático antes de a aluna conseguir se concentrar no
próximo nível?** Uma clínica que ainda não tem agenda previsível não consegue se concentrar em
ticket; uma que não tem processo comercial não consegue se concentrar em protocolo próprio. **Isso é
uma justificativa de sequência da escada muito mais forte que "dores consecutivas", porque dá o
critério de quando a aluna está pronta para subir: quando o degrau de baixo virou automático, não
quando passaram 90 dias.**

**Camada 5 — o objetivo próximo por módulo.** *Um dever do líder é absorver a complexidade e repassar
um problema mais simples e solúvel.* Aplicado: **cada módulo do Academy deve entregar à aluna um
problema que ela consiga resolver, não uma aspiração.** "Construa autoridade" é céu azul; "publique
três provas de resultado nesta semana, neste formato" é objetivo próximo. **A regra de triagem é a de
Rumelt: se o objetivo do módulo é tão difícil quanto o desafio original da aluna, o módulo não
agregou nada.**

**E uma contribuição para a decisão 13 (formato de entrega), que é de produto e não de currículo:** o
dado de que gravado churna quase o dobro de ao vivo é dado real da Altta e vence qualquer livro.
**Rumelt não fala de formato, mas o mecanismo dos elos em cadeia explica por que o número faz
sentido: gravado corta o elo do acompanhamento, e cortar um elo de uma corrente não é economia, é
limitação do resultado inteiro.**

---

## 9. O que Rumelt NÃO ajuda a decidir na Altta

Sendo justo com o livro e útil para quem consultar depois:

- **Preço.** Zero. O livro não tem uma linha sobre formação de preço. Continua sendo Hormozi,
  Schwartz e Suby, e a lacuna de precificação de recorrência continua aberta.
- **A pendência da IA de atendimento (decisão 4).** Rumelt **não vota.** Ele oferece apenas o teste de
  extensão do capítulo 12 — *a competência que este produto exige vem do núcleo ou é um jogo novo?* —
  e o teste de mecanismo isolante. **Não é voto novo no §7.1 e seria desonesto contá-lo como tal.**
- **Qualquer coisa que fale com paciente.** Rumelt não tem uma linha de ética aplicada, nem de
  regulação, nem de comunicação. O crivo de Cialdini continua sozinho.
- **Copy, funil, script, canal, objeção, negociação.** Nada. Ele explicitamente não é livro de
  execução comercial.
- **Retenção, churn e LTV como sistema.** Aqui é preciso ser preciso: **Rumelt dá o mecanismo pelo
  qual a entrega frágil produz churn (elos em cadeia) e dá a técnica de encontrar clientes que
  destroem valor (hump chart). Ele não dá nada sobre onboarding, ciclo de vida, comunidade, expansão
  de receita na base ou economia de assinatura.** As cinco lacunas nomeadas continuam abertas — ele
  toca uma pelo mecanismo e nenhuma pela operação.

---

# Tensões com o resto da biblioteca

Rumelt é o primeiro livro do acervo que **discorda do gênero inteiro**, e não de um autor
específico. Por isso as tensões aqui são de natureza diferente das colisões já arbitradas.

## Colisão 1 — Rumelt × o gênero motivacional inteiro (Gitomer, Klaff, Suby, Hormozi/Leads)

**Status: colisão real, e é a mais ampla que o acervo já produziu.**

Rumelt dedica um capítulo a rastrear a genealogia do pensamento positivo de Emerson a *O Segredo* e
conclui que **acreditar que raios saem da sua cabeça e mudam o mundo físico é psicose e não pode ser
recomendado como abordagem de gestão ou de estratégia.** E a versão dele para gestão é Passchendaele:
**setenta mil mortos aliados em três meses por cinco quilômetros de lama, sob a doutrina de "mais um
empurrão".** As tropas mortas não sofriam de falta de motivação; sofriam de falta de liderança
estratégica competente.

**Onde isso bate no acervo, nominalmente:**

- **Gitomer** é o alvo mais direto. O alicerce declarado do livro dele é "50% do fracasso é atitude",
  sem fonte, e a jurisprudência §5 já o desacreditou. **Rumelt fornece o argumento estrutural que
  faltava: não é só que o número é inventado — é que a doutrina inteira desloca o pensamento crítico
  e a boa estratégia.**
- **A Regra dos 100 e o Open to Goal de Hormozi/Leads** são a versão mais defensável do mesmo
  espírito, e sobrevivem por uma razão que Rumelt aceitaria: **eles não são substitutos de análise,
  são disciplinas de execução dentro de um plano já escolhido.** O aviso que Rumelt acrescenta é o
  contorno: **volume de ação é resposta certa quando o gargalo é volume de ação; é Passchendaele
  quando o gargalo é outro.**
- **O prizing e o teatro de status de Klaff** não colidem com Rumelt no plano ético (isso já foi
  julgado no §6), mas colidem no plano epistêmico: **Klaff propõe que a vantagem seja produzida no
  momento da interação; Rumelt propõe que ela seja construída no design, antes.**

**Veredito para a Altta, e ele não reabre nada:** as técnicas continuam válidas nos domínios em que
já foram julgadas. **O que muda é a hierarquia: motivação e volume passam a ser tratados como o que
se faz DEPOIS de o diagnóstico existir, nunca como substituto dele.** Isso é compatível com tudo o
que já está no §2 e no §3 da jurisprudência e não derruba nenhum precedente.

## Colisão 2 — Rumelt × Miller sobre visão, missão e valores

**Status: colisão parcial, com fronteira clara.**

Miller constrói a marca em torno de um Roteiro de Marca e de transformação de identidade, e a
biblioteca já usa o SB7 como canônico para copy escrita. **Rumelt demole o formato "visão / missão /
valores / estratégias" como charisma-in-a-can, e chama declarações de missão de universidade de
bloviação constrangedora para um adulto inteligente estar associado.**

**A reconciliação, e ela é limpa porque os dois falam de peças diferentes:** o que Miller produz é
**mensagem para o mercado**, e o teste dela é conversão. O que Rumelt ataca é **documento interno
apresentado como estratégia**, e o teste dele é orientar ação. **São artefatos diferentes com testes
diferentes, e o erro é usar um no lugar do outro.**

**Consequência operacional para a Altta, e ela toca a decisão 9 do §08 (visão, valores e a posição
sobre o Arthur):** o rascunho de visão e valores é legítimo como **documento de identidade e de
alinhamento entre sócios**, e Rumelt não tem nada contra isso. **O que ele proíbe é que ele seja
tratado como a estratégia, ou que ocupe, no topo de um documento estratégico, o lugar do
diagnóstico.** O `altta.html` está do lado certo dessa linha hoje — a visão está no §02 e o quadro de
decisões no §08 — **e a tensão é apenas o alerta de manter assim.**

## Colisão 3 — Rumelt × Weinberg sobre teste de canal

**Status: não é colisão; é complemento com uma advertência.**

Weinberg manda testar barato os dezenove canais e depois concentrar num. Rumelt não discorda de
testar, **mas o capítulo 16 dá o enquadramento correto e mais forte: um teste de canal é um
experimento científico, e a hipótese testada tem que ser escrita ANTES.** O Bullseye, do jeito como
Weinberg o descreve, é próximo de força bruta — testar tudo e ver o que gruda.

**A advertência específica que Rumelt acrescenta e que Weinberg não tem:** o **pré-compromisso
escrito**. Sem escrever antes qual resultado você espera de cada canal e por quê, **você vai olhar o
resultado e pensar "eu já tinha considerado isso" — e não vai aprender nada, exatamente como a aluna
de MBA do capítulo 17.** Isso não muda o método do Bullseye; **acrescenta uma linha obrigatória à
execução dele: registre a previsão antes de rodar o teste.**

## Colisão 4 — Rumelt × Harnish e Mochary sobre foco

**Status: convergência, por caminho estruturalmente diferente — e é isso que o torna valioso.**

Harnish chega ao foco por **limite de capacidade organizacional** (o Número Crítico é um). Mochary
chega por **definição** (o Top Goal é singular). Ambos são normativos: focar porque a organização não
aguenta mais de uma coisa.

**Rumelt chega por três caminhos que nenhum dos dois usa, e todos são estruturais e não normativos:**

1. **Escolha e escassez.** Estratégia é filha da escassez; adesão universal sinaliza ausência de
   escolha; se você resolve conflito adotando todas as opções, ninguém desenvolve argumento.
2. **Efeito de limiar.** Abaixo de um certo nível de esforço concentrado, **o retorno é zero, não é
   proporcionalmente menor.** É argumento matemático, não de disciplina.
3. **Elos em cadeia.** Melhorar um elo isolado não produz efeito e pode reduzir o lucro do sistema.

**Consequência:** onde Harnish e Mochary dizem "foque porque você não dá conta", Rumelt diz **"foque
porque esforço espalhado abaixo do limiar produz retorno zero, e porque num sistema encadeado a
melhoria parcial não se converte em resultado."** É uma razão melhor, e é a primeira que sobrevive ao
contra-argumento "mas a gente dá conta".

## Colisão 5 — Rumelt × Brunson sobre a Value Ladder

**Status: tensão nova, não julgada antes, e merece registro.**

Brunson trata a escada de valor como **motor de aquisição**: ganha quem pode gastar mais para
adquirir um cliente, e a escada existe para permitir gastar mais. **Rumelt trata adição de linha de
produto como o risco central do capítulo 11**, e o caso Crown é literalmente uma empresa que cresceu
por adição de linha e destruiu o retorno.

**A reconciliação possível, e ela é a mais útil desta seção:** Brunson está certo sobre **a economia
da aquisição** — uma escada permite CAC maior no topo do funil, e isso é aritmética. **Rumelt está
certo sobre a economia da entrega** — cada degrau novo é uma cadeia nova, e cadeias custam. **Os dois
medem coisas diferentes, e a biblioteca vinha contando só o lado do Brunson.**

**Regra operacional que sai daí:** ao avaliar acrescentar ou ativar um degrau, **contar o custo dos
dois lados — o ganho de CAC (Brunson) e o custo de cadeia (Rumelt). Um degrau que melhora o CAC e
adiciona uma cadeia inteira nova pode ser negativo no líquido, e nenhum dos dois autores sozinho
mostra isso.**

## Convergência reforçada — "o outro precisa concluir sozinho"

A jurisprudência §3 registra sete caminhos independentes para a regra de que **conclusão entregue
pronta não gruda** (Cialdini, Mochary, Keenan, Ross, Voss, Gitomer, Schwartz).

**Rumelt é o oitavo, e chega por um eixo que nenhum dos sete usa: pedagogia socrática aplicada a
estratégia.** As aulas de Wal-Mart e de Crown Cork & Seal são inteiramente construídas sobre não
entregar a resposta — ele escreve a sabedoria convencional na lousa, deixa a turma recitar fatos por
trinta minutos, faz a pergunta que quebra o ritmo, **espera vinte segundos em silêncio (que ele mesmo
chama de "uma eternidade numa sala de aula")**, e dá pistas até alguém chegar lá, assinando o insight
com o nome do aluno na lousa.

**E o mecanismo dele é diferente do dos outros sete:** os sete anteriores argumentam que a conclusão
própria **gruda mais** (compromisso, coerência, memória). **Rumelt argumenta que a conclusão própria
é a única que produz capacidade de repetir o raciocínio numa situação nova** — porque o valor não
está na conclusão, está no método de chegar a ela. **Para o currículo do Academy, isso é uma razão
qualitativamente diferente e mais forte.**

---

# Avaliação honesta

## O que é forte

1. **O kernel é o melhor instrumento único da biblioteca inteira.** Três elementos, nomeáveis,
   auditáveis, aplicáveis a qualquer decisão e a qualquer documento. Não exige dado, não exige
   contexto americano, não exige escala. **É a única coisa em vinte e três livros que serve tanto para
   criar quanto para avaliar.**
2. **Os quatro sinais de má estratégia são ferramenta de auditoria de verdade**, e a mais rara: o
   acervo inteiro ensina a fazer, e este é o único que ensina a **rejeitar**. E o detector portátil —
   **má estratégia produz tédio irritado em quem lê** — é bom o bastante para uso diário.
3. **Elos em cadeia é o achado que muda uma seção inteira da jurisprudência**, e o único conceito do
   acervo que explica **por que empresas ficam travadas em vez de apenas lentas.**
4. **Objetivo próximo e a spec lunar** dão o antídoto contra a paralisia por ambiguidade, que é
   patologia real e que nenhum outro livro do acervo endereça.
5. **O capítulo 11 é a melhor crítica ao crescimento que existe em qualquer prateleira**, e é a única
   voz do acervo inteiro que diz que crescer pode destruir valor.
6. **A honestidade intelectual é notavelmente maior que a do resto do acervo.** Rumelt admite que não
   existe teoria de ondas de mudança, cita o próprio professor de física dizendo que "avançado"
   significa "a gente não entende bem", conta o caso em que o trabalho dele na AT&T foi **desperdício
   completo**, conta que perdeu o cliente para um consultor de "Visionamento", e fecha o caso Nvidia
   dizendo que os dois caminhos futuros dela são incertos. **Nenhum outro autor do acervo relata o
   próprio fracasso do próprio método. Nem um.**
7. **É o único livro do acervo que é analítico e não depoimental**, e o único com aparato de fim de
   livro que cita documento primário (o memorando de von Braun no arquivo da NASA, o telegrama de
   Kennan, o manual FM 100-5, o memorando desclassificado de Marshall e Roche, a especificação JPL
   61-263, artigos revisados por pares sobre efeito de limiar em publicidade e sobre a teoria do
   O-ring).

## O que é fraco

1. **Nenhum framework operacional.** O kernel não vem com procedimento. "Faça um diagnóstico" não diz
   como. Comparado com os 5 passos do Cold Calling 2.0 ou os 7 passos da isca, **Rumelt entrega
   critérios e nenhuma receita.** É deliberado — ele acha que receita é o problema —, mas significa
   que **você não consegue delegar o uso deste livro.**
2. **A amostra é sistematicamente de organizações grandes**, e o viés é forte: Apple, IBM, Intel,
   Ford, GM, AT&T, Xerox, Wal-Mart, Nvidia, Cisco, Crown, Paccar, Telecom Italia, a Marinha, a NASA,
   o Pentágono. **Os únicos exemplos pequenos do livro inteiro são a mercearia da Stephanie, a
   Denton's e a empresa lombarda do Marco Tinelli — e não é coincidência que sejam os três mais úteis
   para a Altta.**
3. **Ele fala muito pouco sobre pessoas.** Não há nada sobre contratar, remunerar, motivar
   legitimamente, formar time ou conduzir reunião. O capítulo 14 dá um roteiro de mudança cultural em
   cinco passos e é só isso. **Harnish e Mochary continuam necessários e Rumelt não os substitui.**
4. **A crítica ao Novo Pensamento é longa demais e um pouco desdenhosa.** Ele está certo, mas gasta
   páginas provando um ponto que se prova em um parágrafo, e o tom escorrega para o desprezo — que é
   ironicamente o vício que ele critica nos outros.
5. **Datado em 2011 nos exemplos de tecnologia**, embora não nos conceitos. O eBay como vantagem
   estática, o TiVo como caso vivo e a análise do futuro dos jornais **funcionam como demonstração de
   raciocínio, não como leitura de mercado atual.**
6. **O livro não tem índice de aplicabilidade.** Ele nunca diz onde os conceitos param de funcionar.
   A afirmação de que o kernel se aplica a qualquer contexto complexo **nunca é testada contra um
   caso em que ele falha.** É o mesmo defeito estrutural do SB7 de Miller: framework único aplicado a
   tudo e, portanto, não testável.

## O que o livro NÃO responde

- **De onde vem o insight.** Ele diz repetidamente que boas ideias "simplesmente aparecem na nossa
  cabeça". **É honesto e é insatisfatório.** As técnicas do capítulo 17 ajudam a criticar e expandir
  ideias, não a produzi-las.
- **Como decidir entre dois diagnósticos igualmente defensáveis.** Ele diz que o critério é
  alavancagem sobre o resultado, **mas alavancagem só é observável depois.**
- **Como saber que você está errado a tempo.** A nota de rodapé sobre mudar objetivo é a coisa mais
  próxima disso, e é fatalista: **raramente acontece sem troca de liderança.**
- **Quanto tempo uma campanha deve durar.** Marco Tinelli levou 12 + N + 9 meses. Não há princípio,
  só o exemplo.
- **Nada sobre preço, copy, canal, venda, retenção, produto, ética ou regulação.**

## Qualidade da evidência — e por que este livro é diferente do acervo

**Este é o item que mais muda em relação aos vinte e dois anteriores, e merece precisão.**

**O que é melhor:**

- **Rumelt é professor titular de estratégia com carreira de pesquisa, e o livro tem aparato de notas
  de fim citando fonte primária verificável** — memorando de von Braun no arquivo histórico da NASA,
  o "longo telegrama" de Kennan publicado em *Foreign Affairs* (1947), o manual de campo FM 100-5, o
  documento Marshall-Roche de 1976 já desclassificado, a especificação JPL 61-263, o NSC 162/2 do
  Projeto Solarium, relatórios de bancos e planos estratégicos corporativos identificados com data e
  autor.
- **Onde ele apoia uma afirmação empírica, ele cita literatura revisada por pares:** o efeito de
  limiar em publicidade vem de artigo em periódico de marketing quantitativo com desenho de pesquisa
  que ele descreve como astucioso; **a lógica de casamento de qualidade dos elos em cadeia vem da
  "teoria do O-ring do desenvolvimento econômico", publicada num dos periódicos de economia mais
  exigentes que existem;** o paradoxo de Condorcet e o teorema de Arrow são matemática estabelecida;
  a visão de dentro vem de Kahneman e Lovallo com fonte.
- **Ele publica dados negativos.** O retorno de 2,4% da Crown depois de virar a maior do mundo. As
  perdas de US$ 240 milhões das três grandes aéreas em 1981. A queda de 27% nas tarifas de rota
  longa. O GTO negativo de quatorze das vinte e oito lojas da Denton's. **Nenhum outro livro do
  acervo publica o número que contraria a própria narrativa.**
- **Ele desacredita alicerces alheios com o mesmo rigor com que a jurisprudência §5 desacredita os
  dele:** demonstra factualmente que atribuir o sucesso da Apple e da Ford a "visão compartilhada" é
  distorção histórica, apontando o truque de Wozniak com o microprocessador e o VisiCalc de um lado,
  e a densidade de engenheiros em Detroit em 1907 do outro.

**O que continua fraco, e seria desonesto não dizer:**

- **A maior parte dos casos ainda é n=1, colhida da própria consultoria dele, sem contrafactual.**
  Marco Tinelli, a Denton's, a mercearia da Stephanie, o executivo pan-europeu, o Chad Logan, a
  escola de negócios — **todos são "eu estava lá e foi assim".** O que os salva parcialmente é que
  ele frequentemente relata o caso em que **não deu certo** ou em que **ele foi ignorado.**
- **Não há teste do próprio conceito.** Não existe um único número no livro mostrando que empresas
  com kernel bem formado superam empresas sem. **É exatamente a mesma crítica que a jurisprudência
  faz ao Bullseye de Weinberg — "não há um único número sobre o Bullseye funcionar" —, e ela vale
  aqui na mesma medida.**
- **Seleção por sobrevivência persiste nos exemplos positivos.** Nvidia, IKEA, Paccar, Cisco e
  Wal-Mart são vencedores conhecidos analisados depois do fato. **A diferença em relação ao resto do
  acervo é que ele analisa também os perdedores com o mesmo instrumento — DEC, Crown, Continental,
  SGI, 3dfx, Global Crossing, AT&T, GM, International Harvester —, o que é metodologicamente muito
  superior a entrevistar quarenta pessoas que deram certo, mas ainda não é amostra.**

**Veredito de tier:** continua **Tier 1**, **mas é o Tier 1 de melhor qualidade probatória do acervo,
e o único que cita fontes Tier 2 dentro de si.** Não vira Tier 2 porque o livro em si não é estudo
com método declarado — é um argumento sustentado por casos selecionados. **A afirmação honesta é: a
evidência de Rumelt é de grau melhor que a de quase todo o acervo — a exceção declarada é Warrillow, o primeiro Tier 2 (§5.1) — e ainda assim continua sendo
evidência de livro de negócios.**

## Transplante — e ele é invertido em relação a toda a fila

O prompt antecipou isso e estava certo. **É o único livro do acervo em que o conceito transplanta
melhor que a escala.**

**O que transplanta perfeitamente, sem adaptação:**

- **O kernel.** Diagnóstico, política norteadora e ação coerente não têm escala mínima. **Funciona
  igual para uma mercearia de esquina e para o Departamento de Defesa, e Rumelt demonstra os dois no
  mesmo capítulo, de propósito.**
- **Os quatro sinais de má estratégia.** A empresa de artes gráficas do Chad Logan é do porte da
  Altta.
- **Elos em cadeia.** A empresa lombarda é familiar e de médio porte.
- **Objetivo próximo e o exercício do objetivo único.** A escola de negócios do exercício é pequena e
  local.
- **O hump chart.** A Denton's tem vinte e oito lojas.
- **Criar-destruir e o painel de especialistas.** São ferramentas individuais, sem custo.
- **A distinção entre meta e objetivo, e a regra de que desempenho fraco é resultado, não desafio.**

**O que NÃO transplanta, e é preciso dizer com clareza:**

- **A escala dos exemplos.** Wal-Mart com 150 lojas por centro de distribuição, o Getty com US$ 65
  milhões/ano para gastar, a Nvidia com três times paralelos, o gancho de esquerda com 250 mil
  soldados. **Nenhuma dessas manobras é executável por uma empresa de dois sócios, e a tentação de se
  inspirar nelas é a mesma que Rumelt condena em quem quer gerenciar como Jack Welch.**
- **A premissa de que existe uma organização para coordenar.** Boa parte do livro é sobre impor
  coordenação a um sistema que resiste. **A Altta hoje não tem sistema que resista; ela tem duas
  pessoas.** O capítulo 14 e a discussão sobre custo de coordenação **descrevem o problema que a
  Altta vai ter em três anos, não o que ela tem hoje.**
- **A análise de setor pressupõe dados que a Altta não tem.** As Cinco Forças aplicadas aos cabos
  transatlânticos funcionam porque existem números públicos de capacidade e preço. **No mercado de
  educação para estética brasileira esses números não existem publicamente — o estudo de mercado da
  Altta é a melhor aproximação e é construção própria.**
- **O contexto de mercado de capitais.** Os capítulos 11 e 18 pressupõem empresa aberta, banqueiros
  de investimento e pressão trimestral. **A Altta é fechada, e Rumelt mesmo diz, pela boca do
  Resnick, que isso é vantagem — capacidade de olhar cinco a dez anos à frente sem as pressões
  malucas de uma empresa aberta.**

**E o que precisa de adaptação específica para clínica pequena brasileira:** nada de ético, nada de
regulatório, nada de canal — **porque o livro não toca nenhum desses assuntos.** É um livro sobre como
pensar, e o transplante dele é intelectual, não operacional.

## As seis perguntas obrigatórias desta fila

**1. Qual das cinco lacunas nomeadas este livro fecha?**

As cinco são: onboarding/primeira entrega · churn medido · LTV e economia de recorrência · comunidade
e pertencimento · expansão de receita na base.

> **Fecha: zero de cinco.**
> **Toca parcialmente: duas de cinco** — **churn medido**, ao dar o mecanismo (elos em cadeia) que
> explica por que entrega frágil produz churn, e ao dar o hump chart, que é a única técnica do acervo
> para identificar clientes que destroem valor; e **onboarding**, pelo conceito de objetivo próximo,
> que é a base conceitual do marco de ativação — embora ele nunca use essa palavra nem esse contexto.
> **Nem toca: três de cinco** — LTV e economia de recorrência, comunidade e pertencimento, expansão
> de receita na base.
>
> **Isso era esperado e está correto:** Rumelt não é livro de retenção, nunca se propôs a ser, e o
> prompt desta fila não o trouxe para isso. **O bloco de retenção da fila 2 continua inteiro por
> processar.**

**2. O livro reconhece que o churn é fabricado durante a venda?**

**Não reconhece, e não poderia — ele não fala de venda.** Mas fornece, sem saber, **a estrutura que
torna o dado de Keenan (53% da lealdade se origina na experiência de venda) mais forte do que Keenan
consegue defender sozinho:**

> Numa cadeia de elos, **a venda é um elo e a entrega é outro.** O dado de Keenan diz que o elo da
> venda contribui para a lealdade. **A lógica de Rumelt acrescenta que essa contribuição é limitada
> pelo elo mais fraco a jusante: uma experiência de venda excelente diante de uma entrega frágil não
> produz lealdade — produz uma expectativa maior contra a qual a entrega será medida, o que é pior
> que uma venda mediana.**
>
> **Essa é a formulação mais precisa que a biblioteca já produziu sobre a relação entre as duas
> metades dela, e ela nasce do encontro entre Keenan e Rumelt, não de nenhum dos dois sozinho.**

**3. O livro distingue SAÍDA de CONCLUSÃO?**

**Não, e nem chega perto — não há um único parágrafo sobre ciclo de vida de cliente no livro.**

Mas ele dá, por outro caminho, **o argumento conceitual mais forte que a Altta tem para fazer essa
distinção por fora:** a escada de competências do piloto de helicóptero. **Um degrau concluído não é
um cliente que saiu; é um cliente cujo degrau virou automático e que, por isso, agora consegue se
concentrar no degrau seguinte.** Rumelt: *concentrar-se num objetivo pressupõe que muitas outras
coisas importantes já estão cuidadas.*

> **Consequência prática: o critério de upgrade não deveria ser tempo decorrido nem satisfação, e sim
> automaticidade — o degrau anterior virou rotina que não consome atenção. Isso é operacionalizável e
> é diferente de tudo o que já está no §8 da jurisprudência.**

**4. Há voto novo na pendência da IA de atendimento?**

**Não. Rumelt não vota, e forçar seria desonesto.** O placar permanece **7 pela camada × 1 dissidente
(Gitomer)**, com a nota de que o §08 registrou em 2026-09-01 uma recomendação revista para **produto
orbitante próprio (Altta AI)** com base em dado real da base — que é nível 1 da hierarquia e vence os
sete livros.

O que Rumelt acrescenta é **um teste, não um voto**, e ele é útil justamente por ser neutro entre as
duas posições:

> **O teste de extensão do capítulo 12:** extensões baseadas em know-how proprietário se beneficiam
> porque conhecimento não é gasto quando aplicado; **extensões baseadas em crença do cliente — marca,
> relacionamento, reputação — podem ser diluídas por extensão descuidada, e um fracasso na arena nova
> repercute e danifica o núcleo.**
>
> **Aplicado: se a Altta AI for vendida como produto autônomo sob a marca ALTTA, ela é extensão de
> marca, e o critério das três regras da Disney se aplica — quais são as três regras que definem o
> que pode e o que não pode levar o nome Altta? Se ela for entregue como camada dentro do degrau 2,
> ela é extensão de know-how e não corre esse risco.**
>
> **Isso não decide a pendência. Mas transforma "produto ou camada?" numa pergunta com critério, que
> é mais do que o §7.1 tinha.**

**5. Há argumento novo sobre foco, pelo eixo do custo de entrega?**

**Sim — mas é preciso ser preciso sobre o que nele é novo, porque o eixo já não estava vazio quando
Rumelt chegou.**

**O que já existia:** o §4 da jurisprudência registra **três caminhos anteriores pelo eixo da
entrega**, todos abertos no mesmo dia por livros da fila 2 — **Spinks** (11º: seis objetivos de
comunidade viram seis times, seis métricas, seis ferramentas e seis grupos de membros), **Make It
Stick** (12º: o custo por dentro do currículo) e **Steinman** (13º: o custo de *medir* — quatro
definições de cliente certo, quatro escores de saúde incomparáveis entre si). **Seria desonesto
apresentar Rumelt como o primeiro a usar esse eixo. Ele é o 14º caminho.**

**O que é genuinamente novo, e é de outra natureza:** os três anteriores **observaram** o custo de
entrega multiplicado, cada um no domínio dele. **Rumelt dá o mecanismo que explica por que os três
encontraram a mesma coisa por três portas diferentes** — e um mecanismo que prevê, não só descreve:

1. **Casamento de qualidade em sistemas de elos em cadeia.** Não é que quatro entregas custem quatro
   vezes mais. **É que melhorar uma delas isoladamente não produz efeito no resultado do cliente e
   REDUZ o lucro do sistema, porque consome recurso melhor sem mover o elo limitante. É por isso que
   sistemas assim ficam TRAVADOS em vez de apenas lentos — e travamento é um fenômeno que nenhum dos
   treze caminhos anteriores nomeia.**
2. **Efeito de limiar.** Esforço abaixo do limiar tem retorno **zero**, não retorno proporcionalmente
   menor. Isso transforma "dispersão é ruim" de exortação em aritmética.
3. **O teste sequência × portfólio**, que é a primeira coisa no §4 inteiro que **responde à pergunta
   que a seção deixou em aberto** em vez de acrescentar mais um voto a ela: a escada é sequência
   enquanto cada degrau se apoia na vantagem construída no anterior; vira portfólio no dia em que um
   degrau exige competência que não vem do degrau de baixo.
4. **E a saída, que também é dele:** o mesmo capítulo mostra que **excelência e travamento são a
   mesma lógica vista dos dois lados** — o caso IKEA. Quatro elos encadeados e todos bons é a
   vantagem mais difícil de copiar que existe. **Nenhum dos treze caminhos anteriores oferece o lado
   positivo do próprio argumento.**

> **Registro correto: 14º caminho, e o primeiro com autoridade estrutural — o único vindo de um livro
> de estratégia, o único que fornece mecanismo em vez de observação, o único que explica travamento,
> e o único que produz um teste falseável em vez de uma recomendação.**

**6. Passa no crivo ético?**

**Passa com a folga mais larga do acervo inteiro, e por uma razão estrutural: ele não ensina técnica
de influência.** Não há uma única fórmula neste livro para fazer outra pessoa concordar com você. Não
há escassez, não há urgência, não há prova social, não há ancoragem, não há enquadramento de status.
**Não há nada para o crivo de Cialdini filtrar.**

Mais que isso, **ele é ativamente do lado certo em três pontos:**

- **Ele exige que a autoavaliação seja honesta**, e a passagem sobre a evasão escolar de Los Angeles
  é uma denúncia de métrica manipulada: **uma das formas de subir a nota da escola é incentivar os
  alunos mais fracos a abandonar.** Isso é o oposto de fabricar sinal.
- **Ele denuncia números sem fonte pelo nome**, inclusive quando vêm de figuras de máxima autoridade
  — os presidentes do Fed, o secretário do Tesouro, os relatórios de bancos.
- **Ele condena explicitamente tratar preço de ação como evidência**, que é a versão financeira de
  prova social decorativa.

**O único ponto que exige nota, e não é falha de ética:** o capítulo 2 celebra a estratégia de **impor
custos exorbitantes ao oponente** como descoberta de poder. **É doutrina de competição geopolítica
entre um Estado e uma potência totalitária, e é legítima ali.** Transposta sem cuidado para
concorrência comercial num mercado pequeno onde todo mundo se conhece, **ela vira estratégia de
desgaste do concorrente, e isso não é o mesmo que servir melhor o cliente.** Não é problema do livro;
é problema de quem transplantar mal.

**Posição no ranking do §6: o mais limpo da prateleira, à frente de Gitomer.** Gitomer é hoje o mais
leve e tem a ética declarada mais forte, **mas ele ensina técnica de influência e por isso está
sujeito ao crivo. Rumelt não está sujeito ao crivo porque não oferece nada que o crivo julgue.** E
Cialdini continua sendo o juiz, fora do ranking.

---

## Como uma futura skill consumiria este livro

**A skill `biblioteca-decide` deveria consultar este arquivo em quatro situações, e em nenhuma
outra:**

1. **Quando a decisão for de escopo — o que fazer e, principalmente, o que NÃO fazer.** É a linha do
   roteador que este livro passa a ocupar sozinho.
2. **Quando for avaliar um documento, um plano ou uma proposta.** Os quatro sinais de má estratégia
   são um checklist de auditoria, e "isso produz tédio irritado?" é um teste de trinta segundos.
3. **Quando alguém propuser crescer, expandir, adicionar linha ou "abrir uma frente nova".** O
   capítulo 11 é a única voz do acervo que faz a pergunta contrária.
4. **Quando a decisão envolver melhorar uma parte de um sistema.** O teste de elos: **se eu melhorar
   só isto, o resultado do cliente melhora? Se a resposta for não, a melhoria é despesa.**

**E deveria NÃO consultar este arquivo para:** preço, oferta, copy, canal, criativo, script, objeção,
negociação, isca, funil, sequência de e-mail, prova social, indicação, remuneração de time,
onboarding, churn operacional, LTV, comunidade ou qualquer coisa que fale com paciente. **Consultar
Rumelt para essas coisas é usar um livro de estratégia como se fosse manual, que é exatamente o erro
que ele passa 320 páginas denunciando.**

---

*Fonte: Richard P. Rumelt, `Good Strategy / Bad Strategy: The Difference and Why It Matters`, Profile
Books / Crown Business, 2011. Edição comercial em inglês; síntese em português do Brasil.*

*Este documento é uma **síntese autoral** — conceitos reescritos, casos recontados em prosa própria,
números e nomes de frameworks preservados por serem referência. **Não é transcrição, não é tradução e
não substitui a leitura do original.** As seções "Aplicação Altta", "Tensões com o resto da
biblioteca" e "Avaliação honesta" são análise própria, não são do autor, e **não são decisão da
empresa** — o registro de decisões é `empresa/altta.html` §08.*

*Processado em 2026-09-02 pela skill `biblioteca-fontes`. Livro 23 do acervo — o último da fila 2.*

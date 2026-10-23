# Customer Success — Nick Mehta, Dan Steinman e Lincoln Murphy

> **Síntese autoral, não transcrição.** Conceitos reescritos com palavras próprias, exemplos
> recontados em prosa, números citados diretamente. Nenhum parágrafo do original foi copiado.
> PDF em `empresa/estrategia/biblioteca/pdfs/` (arquivo grafado "Customer Succes", com um `s` só).
>
> **Edição:** Autêntica Business, tradução de Afonso Celso da Cunha Serra. Original *Customer
> Success: How Innovative Companies Are Reducing Churn and Growing Recurring Revenue*
> (Wiley, 2016). **Categoria de PDF: edição comercial limpa, tradução humana.** Extração sem
> corrupção sistemática de caractere. **Defeitos de extração registrados:** as 17 figuras e as 2
> tabelas do livro são imagens e não extraem — o que se perde é o organograma de primeiro nível
> (Fig. 2.1–2.3), o gráfico de metas base instalada × novos clientes (Fig. 2.4 e 15.3), a pirâmide
> de valor do cliente (Fig. 3.1), as curvas do vale da desilusão (Fig. 7.1–7.2), o diagrama de
> RRMC (Fig. 12.1), os dois painéis de controle (Fig. 12.2–12.3) e os organogramas de pós-venda
> (Fig. 15.1–15.2, 15.4). **As análises em prosa de todas elas estão íntegras** e foram
> reconstruídas aqui. A Tabela 1.1 (música) e a 1.2 (Siebel × Salesforce) também são imagens; o
> raciocínio que as acompanha sobrevive no texto. **Sumário confere com o corpo: nenhum capítulo
> ausente** — 17 capítulos em três partes, mais prefácio da Gainsight e prefácio de Maria
> Martinez (Salesforce).
>
> **Aviso de estrutura que muda como este livro se lê:** os capítulos 5 a 14 (as Dez Leis) **não
> são escritos por Mehta, Steinman e Murphy.** Cada lei tem um autor convidado diferente —
> executivos de Clarizen, Code42, Talend, Gainsight, Mixpanel, Cornerstone, Brainshark, Intacct e
> Box — e Steinman assina apenas os "Comentários adicionais" ao fim de cada capítulo. É uma
> coletânea encomendada pela Bessemer Venture Partners, não um argumento único. **A qualidade
> oscila violentamente entre as dez leis**, e isso está registrado na avaliação honesta.

---

## Sumário

1. [A tese central: por que o churn deixou de ser um detalhe](#1)
2. [O tsunami das assinaturas e a inversão do LTV](#2)
3. [Lealdade atitudinal × lealdade comportamental](#3)
4. [Os três customer success: unidade, disciplina, filosofia](#4)
5. [O que customer success NÃO é — as quatro fronteiras](#5)
6. [A hierarquia de valor do cliente: high-touch, low-touch, tech-touch](#6)
7. [O impacto interfuncional: como CS reescreve vendas, produto e serviços](#7)
8. [As Dez Leis do Customer Success](#8)
   - [1ª Lei — Venda ao cliente certo](#lei1)
   - [2ª Lei — A tendência natural é a deriva](#lei2)
   - [3ª Lei — Os clientes esperam sucesso extraordinário](#lei3)
   - [4ª Lei — Monitore e gerencie implacavelmente a saúde do cliente](#lei4)
   - [5ª Lei — Não dá mais para construir lealdade com relacionamento pessoal](#lei5)
   - [6ª Lei — O produto é o seu único diferencial escalável](#lei6)
   - [7ª Lei — Melhore obsessivamente o time-to-value](#lei7)
   - [8ª Lei — Compreenda em profundidade as métricas do cliente](#lei8)
   - [9ª Lei — Impulsione o customer success com métricas rigorosas](#lei9)
   - [10ª Lei — É um compromisso de cima para baixo, de toda a empresa](#lei10)
9. [A ascensão do Chief Customer Officer](#9)
10. [Tecnologia de customer success](#10)
11. [O futuro e a economia do cliente](#11)
12. [O cenário Wingtip/Financiality — o primeiro ano, dia a dia](#12)
13. [Starbucks: customer success fora do software](#13)
14. [**O que transplanta e o que não transplanta para a Altta**](#14)
15. [Aplicação Altta: as decisões que este livro muda](#15)
16. [Avaliação honesta](#16)

---

<a name="1"></a>
## 1. A tese central: por que o churn deixou de ser um detalhe

O argumento que sustenta o livro inteiro cabe em uma frase aritmética: **quando o cliente paga
mensalmente em vez de pagar tudo na frente, a maior parte do dinheiro que ele vale ainda não foi
recebida no dia em que ele assina.** Tudo o mais decorre disso.

No modelo de licença perpétua, a transação inicial capturava algo entre 50% e 90% de tudo o que
aquele cliente pagaria na vida inteira. Um cliente que assinava por três milhões de dólares talvez
rendesse mais quinhentos mil ao longo dos anos seguintes. Nessa configuração, **o valor do cliente
despencava no instante em que o dinheiro entrava na conta.** O fornecedor podia se importar com o
sucesso do cliente por decência, mas não por necessidade: a sobrevivência da empresa dependia
exclusivamente da capacidade de continuar vendendo para gente nova.

Na assinatura, a razão se inverte. O compromisso financeiro inicial de um cliente costuma valer
**menos de 10% do valor vitalício** — e num negócio de cobrança mensal, pode ficar **abaixo de 1%**.
O livro trabalha com um exemplo numérico que vale reter porque é a base de tudo: um contrato anual
de US$ 25.000, um cliente que fica de sete a dez anos, com crescimento anual de 5% a 7% por reajuste,
licenças adicionais e compra de outros produtos. Sete a nove renovações depois, **o cliente terá
pago mais de dez vezes o valor do primeiro contrato** — e isso sem contar serviços, treinamento e
o efeito de indicação.

A consequência é brutal e direta: se o cliente sai antes, o fornecedor **não recuperou nem o custo
de o ter adquirido.** O livro afirma que, na maioria dos casos, são necessários **24 meses ou mais de
receita de assinatura para pagar o custo de aquisição e de recepção** — ou seja, o contrato precisa
ser renovado ao menos duas vezes antes de o cliente começar a dar lucro. E agrava: **a maior parte
da evasão acontece justamente nos dois primeiros anos**, por causa da complexidade da recepção e da
configuração. O cliente vai embora exatamente na janela em que ainda é prejuízo.

### O momento fundador: Half Moon Bay, 2005

O livro data o nascimento do movimento com precisão de reunião. Na primavera de 2005, a Salesforce
levou sua equipe executiva para um encontro fora da empresa em Half Moon Bay, Califórnia. A empresa
vivia um período de euforia: IPO em junho de 2004, alta de 88% nos pedidos no segundo semestre
daquele ano, quase 20.000 clientes contra menos de 6.000 dois anos antes, valor de mercado de
US$ 500 milhões no fim de 2004 — número que quadruplicaria em 2005. Todos os gráficos apontavam
para cima.

Então **David Dempsey** subiu ao palco e apresentou o dado que lhe rendeu o apelido de *Doutor
Destino*. Dempsey era irlandês, ex-Oracle por onze anos, e havia procurado Benioff em 2000 com a
proposta de levar a Salesforce para a Europa. Como responsável pelas renovações, ele enxergava algo
que ninguém mais enxergava: **a taxa de evasão da Salesforce era de 8% — ao mês.**

Oito por cento ao mês significa que, num ano, **praticamente toda a base de clientes se renova por
substituição.** A empresa estava em espiral mortal por baixo de um crescimento espetacular. A
matemática é a do balde furado: não existe boca de funil larga o suficiente para compensar um bico
que vaza mais rápido.

O ponto conceitual que Dempsey trouxe é o que o livro chama de **erro de transposição da
manutenção**. A indústria de software vinha de décadas em que renovação era formalidade: o cliente
tinha comprado o hardware e o software, tinha o data center montado, e o contrato de manutenção era
essencialmente um seguro contra parada. O fornecedor controlava 90% ou mais do mercado de
manutenção do próprio produto, porque ninguém mais podia consertar ou atualizar software
proprietário. **Renovar era carimbo, não negociação.** A Salesforce herdou esse pressuposto e ele
estava errado: no SaaS o cliente **tem escolha** — o concorrente oferece migração fácil e mais
barata, ele pode construir a própria solução, ou pode simplesmente ficar sem. E fazia as três coisas.

### As três engrenagens

O livro extrai daí o modelo mais simples e mais útil que apresenta. O valor de um negócio de receita
recorrente cresce por **três engrenagens acopladas**, e só funciona quando as três giram juntas:

1. **Aquisição de novos clientes**
2. **Aumento da taxa de retenção**
3. **Crescimento das vendas para a base atual**

Empresas tradicionais tratam a primeira como a única que importa e as outras duas como consequência
natural. A tese do livro é que **as duas últimas não acontecem sozinhas** — elas exigem intervenção
deliberada, orçamento, pessoas, tecnologia e um dono. É desse vácuo que nasce a função.

> **Ancoragem Altta.** A Altta é exatamente o negócio que este capítulo descreve, com dois
> agravantes que o livro não conhece. Primeiro, o ticket é muito menor, o que aperta a janela de
> payback: se o CAC leva 24 meses para se pagar num contrato de US$ 25.000/ano, ele leva
> proporcionalmente mais tempo num produto de educação com mensalidade de clínica pequena
> brasileira — a menos que o CAC seja proporcionalmente menor, e isso é uma conta que só o dado
> real da Altta responde. Segundo, a Altta tem **quatro** engrenagens a girar, não três, porque a
> escada de degraus adiciona um movimento que o livro trata como "upsell" mas que na Altta é
> mudança de produto, de promessa e de currículo. Ver §14 e §15.

---

<a name="2"></a>
## 2. O tsunami das assinaturas e a inversão do LTV

O livro chama o fenômeno de **tsunami de assinaturas** e usa a metáfora com rigor: customer success
não é a onda primária, é **uma onda secundária**. A onda primária é a migração dos modelos de
negócio para receita recorrente. CS é o que a arrebentação dessa onda produz na praia.

### A origem técnica: SaaS antes de existir a palavra

O livro reconstrói duas cenas de 1995 em Palo Alto. Na primeira, **John McCaskey**, diretor de
marketing da Silicon Graphics e engenheiro por vocação, compra uma pilha de livros de HTML, CGI e
Perl na livraria de Stanford para reescrever uma ferramenta interna de business intelligence
chamada MYOB (*mine your own business*), construída sobre Business Objects. A versão nova, o MYOB
Lite, virou febre interna e foi adotada por mais de 500 pessoas de marketing e executivos.

Na segunda cena, do outro lado da cidade, **Paul Graham**, com Robert Morris e Trevor Blackwell,
lança a Viaweb — um aplicativo que permitia a qualquer pessoa construir e hospedar a própria loja
online sem conhecimento técnico. No fim de 1996 havia 70 lojas no ar; um ano depois, mais de 500.
Em julho de 1998 o Yahoo! comprou a empresa por US$ 50 milhões e ela virou Yahoo Stores. Graham
seguiu adiante e fundou a Y Combinator, de onde saíram Dropbox e Airbnb.

O que os dois produtos tinham em comum, e que na época era revolucionário: **a interface do usuário
era o navegador**. Nada instalado do lado do cliente. Graham chamava a Viaweb de *application
service provider*. Era SaaS antes de existir a sigla.

### As duas mudanças que se fundiram

O livro insiste numa distinção que a maioria das pessoas colapsa e que vale manter separada:

| | O que é | O que muda |
|---|---|---|
| **SaaS** | Um **modelo de entrega** — o aplicativo roda no navegador em vez de ser instalado | Elimina hardware, data center e equipe de operação do lado do cliente |
| **Assinatura** | Um **método de pagamento** — aluguel com data de vencimento | Elimina o pagamento único e cria o evento de renovação |

As duas aconteceram quase ao mesmo tempo e ficaram indissociáveis no vocabulário, mas são coisas
diferentes, e **a que importa para customer success é a segunda.** Um negócio pode ser por
assinatura sem ser software; e o modelo de *pagamento em bases correntes* (pay-as-you-go, tipo
Google AdWords ou Amazon Web Services) tem exatamente as mesmas consequências sem ter renovação
formal nenhuma.

### O que realmente mudou: o poder

O efeito de segunda ordem — e, para o livro, o mais importante — é que **o poder na transação B2B
migrou do fornecedor para o cliente.** O cliente não compra mais hardware, não monta data center,
não contrata gente cara para operar. Ele aluga o pacote inteiro. E pode parar de pagar quando
quiser.

O livro faz o paralelo com a compra de carro. Antes, praticamente tudo o que se sabia sobre o
veículo vinha do vendedor: atributos, pacotes, preço final, tudo negociado dentro da concessionária.
Hoje o comprador chega sabendo a lista de materiais completa, os preços de vários revendedores, a
curva de desvalorização de dois anos, a comissão do revendedor — e às vezes mais sobre o carro do
que o próprio vendedor. **A internet transferiu o controle do processo.**

E faz o paralelo com música, que é onde a inversão de LTV fica mais visível. O autor conta que aos
16 anos se apaixonou por *Bohemian Rhapsody* no rádio e, para ouvi-la, teve que comprar o álbum
*A Night at the Opera* por US$ 16,99 — mais um sistema de som de mil dólares, daqueles com caixas de
noventa centímetros que serviam de banco. Dezessete dólares por uma música, mais mil dólares de
infraestrutura. Depois veio o iTunes e a música virou US$ 0,99. Depois vieram Pandora e Spotify e a
música virou aluguel: ouvir mil vezes custa centavos. **O data center estava para o software assim
como o sistema de som estava para a música.**

### A consequência financeira: RRA, RRM, LTV

O livro para para dar o vocabulário mínimo, e vale registrá-lo porque a biblioteca da Altta não
tinha nenhum livro que o desse:

- **RRA (receita recorrente anual)**, também chamada **VCA (valor contratual anual)**: o valor
  anualizado que a base instalada paga de forma repetitiva. Vinte clientes pagando US$ 1.000/mês
  dão RRA de US$ 240.000. Seis clientes com contratos de dois anos de US$ 2 milhões cada dão RRA de
  US$ 6 milhões (6 × 2 ÷ 2).
- **RRM**: o mesmo número em base mensal.
- **LTV**: o total que o cliente gasta (ou se espera que gaste) com o fornecedor durante toda a
  relação.
- **Evasão / churn**: **o valor monetário da parcela da RRA que se perdeu.** O termo também é usado
  para designar o cliente que saiu, mas a definição financeira é a que importa.

E dá o ponto que a maioria das empresas não vê: **a base instalada pode crescer sem uma única venda
nova.** Preços sobem, descontos encolhem, o cliente compra mais licenças ou mais produtos. Uma
empresa de US$ 6 milhões de RRA vira uma de US$ 8 milhões sem vender para ninguém novo. A faca,
porém, tem dois gumes: a base instalada também encolhe sozinha, por cancelamento, por desconto na
renovação, por devolução de licenças.

> **Ancoragem Altta.** Esta seção é a que fecha, sozinha, o pedaço de vocabulário que faltava.
> Até aqui a biblioteca tinha **apenas o denominador** da economia de aquisição — o CAC, via
> Hormozi (LTGP:CAC ≥ 3:1), Suby (CPL/CPA/EPC) e Weinberg (CPA = CPC ÷ conversão). **Nenhum dos
> dezenove livros anteriores tinha dado o numerador de forma operável.** Steinman dá: LTV,
> RRA/RRM, retenção bruta, retenção líquida, evasão parcial. Não ensina *formação de preço* de
> recorrência — essa lacuna continua aberta e nenhum livro do acervo a cobre — mas ensina **como se
> mede o que se cobra**, que é a metade que faltava.

---

<a name="3"></a>
## 3. Lealdade atitudinal × lealdade comportamental

Este é o conceito mais reaproveitável do livro para fora do contexto SaaS, e o único que a Altta
pode usar literalmente, sem adaptação.

O livro parte de um consenso já estabelecido nas ciências sociais: existem **dois tipos de
lealdade.**

| | **Comportamental** (ou intelectual) | **Atitudinal** (ou emocional) |
|---|---|---|
| **Origem** | O cliente é leal porque **precisa** | O cliente é leal porque **ama** |
| **Mecanismo** | Falta de opção, conveniência, custo de troca | Vínculo, identidade, experiência |
| **Custo de produzir** | Baixo — às vezes é acidental | **Alto, e o livro insiste nisso** |
| **Fragilidade** | Some no instante em que aparece opção melhor | Sobrevive a erros isolados |

O exemplo caseiro: a dona de casa que compra na mercearia do Hank porque é o único lugar num raio
de cinquenta quilômetros que vende pão e leite demonstra lealdade comportamental pura. Talvez ela
também tenha lealdade atitudinal — o Hank pode ser o marido dela —, mas a compra se explica pela
ausência de alternativa.

O exemplo pessoal, e mais interessante porque mostra a fragilidade: o autor abastece no mesmo posto
90% das vezes, por conveniência e por preço razoável. O posto fecha as máquinas de cartão por dez
minutos às sete da manhã, exatamente quando ele passa a caminho do trabalho. Isso o irrita, e eles
não sabem — exceto um caixa a quem ele reclamou uma vez. **A conveniência ainda prevalece, mas eles
estão inteiramente vulneráveis** ao primeiro concorrente que abrir por perto e resolver não fechar
o cartão, ou fechá-lo às três da madrugada.

E o exemplo emocional: a filha do autor, ao se formar no ensino médio, precisava de um laptop.
Nenhuma comparação técnica com as opções Dell — funcionalmente equivalentes e muito mais baratas —
a moveu um centímetro. Ela não citou um único atributo. Queria um Mac, e conseguiu. O autor admite
não saber por quê: talvez porque todos os colegas tivessem, talvez porque amasse o iPod, talvez por
razão nenhuma. E observa que, no caso dela, o nome mais preciso era **lealdade emocional** — porque
a discussão incluiu lágrimas.

### Por que isso importa: customer success existe para produzir lealdade atitudinal

A tese: **customer success é o meio pelo qual se cultiva lealdade atitudinal.** Não é atendimento,
não é simpatia, não é discurso de "o cliente é o rei". É o investimento deliberado em fazer o
cliente ter sucesso, porque cliente que tem sucesso ama, e cliente que ama fica e compra mais.

O livro é explícito sobre o preço: **lealdade atitudinal é cara.** É caro desenvolver produtos que
as pessoas amem em vez de produtos que elas simplesmente comprem. É caro entregar uma experiência
que encante em vez de uma que apenas não irrite. Quem não quer pagar esse preço fica com lealdade
comportamental, que funciona até o dia em que não funciona mais.

### O caso Apple, e o Genius Bar como customer success disfarçado

O livro usa a Apple como o exemplo canônico, com uma observação que é o coração do capítulo. Nos
anos sombrios em que os produtos da Apple não eram muito bons e a empresa cambaleava, **foi o
fanatismo da base leal que a sustentou** — inclusive de gente que nem era cliente. Quando os
produtos voltaram a justificar em parte o fanatismo, a base estava intacta e a subida ao topo foi
imediata.

O detalhe que o livro extrai e que quase ninguém nota: quando a Apple decidiu abrir lojas de varejo,
os céticos eram muitos e barulhentos — a história já teria provado que loja de varejo de computador
não funciona. Jobs apostou que funcionaria **para uma marca de tecnologia de consumo com núcleo de
seguidores fanáticos**, e acertou. Mas foi além de expor e vender: criou, no fundo das lojas, um
lugar com gente cujo trabalho era **ajudar o cliente a extrair o máximo do produto que já comprou.**
Rebatizou de *Genius Bar*, porque era o gênio de marketing que era. **Isso é a definição literal de
Gerente de Customer Success.**

Manter de dez a vinte "gênios" na folha de cada loja não era barato. E o livro faz a concessão
honesta: **muitos dos gênios não são gênios coisa nenhuma**, e quase todo mundo já teve experiência
frustrante com um deles. **O simples fato de existirem** — de haver alguém acessível, humano, com
quem se constrói o mais tênue relacionamento — já alimenta a lealdade atitudinal. "Essa é a arte do
customer success."

### A frase que organiza o resto do livro

O livro credita a **Tien Tzuo** — décimo primeiro funcionário da Salesforce, presente na sala de
Half Moon Bay, depois fundador da Zuora e criador do termo "economia de assinaturas" — a formulação
que se repete em todos os capítulos seguintes:

> Nos negócios tradicionais, o relacionamento com o cliente **termina** com a compra. Num negócio
> por assinatura, o relacionamento com o cliente **começa** com a compra.

> **Ancoragem Altta.** Esta distinção transplanta inteira, e resolve uma ambiguidade que a
> biblioteca carregava. Gitomer já distinguia **cliente satisfeito × cliente leal** e já dizia que
> a métrica correta é recompra + indicação. Steinman dá o **mecanismo** por trás da distinção e,
> mais importante, dá o **preço**: lealdade atitudinal custa dinheiro e precisa entrar no modelo de
> margem, não no discurso. Para a Altta, isso tem consequência direta na precificação do degrau de
> entrada — se o Autonomy for barato demais para financiar o acompanhamento que produz lealdade
> atitudinal, ele produz lealdade comportamental (o aluno fica porque já pagou) e essa evapora na
> primeira alternativa. Ver §15.

---

<a name="4"></a>
## 4. Os três customer success: unidade, disciplina, filosofia

O livro é insistente em separar três coisas que a palavra "customer success" nomeia ao mesmo tempo,
e a confusão entre elas é a origem de metade dos erros de implantação que ele descreve.

**1. Unidade organizacional.** Um time, com um chefe, com metas, com orçamento e com número. A
definição operacional: *a área que foca na experiência do cliente com o objetivo de maximizar
retenção e LTV.* As pessoas que fazem esse trabalho são chamadas de **GCS (Gerente de Customer
Success)** no livro inteiro, como termo genérico que absorve gerente de contas, gerente de
relacionamento, advogado do cliente e especialista do cliente.

**2. Disciplina.** Um ofício com corpo de conhecimento próprio, fóruns, boas práticas, eventos e
carreira — como vendas, gestão de produto ou atendimento. O livro escreve em 2016 declarando que
essa disciplina estava na infância.

**3. Filosofia.** Uma orientação que atravessa a empresa inteira e não pode viver dentro de uma
caixa do organograma. É a parte que o livro repete mais e prova menos.

### Por que uma unidade organizacional nova, e não um cargo renomeado

O livro faz um argumento estrutural que é o melhor pedaço analítico da Parte I. Mudança
organizacional real, no primeiro nível de uma empresa, é **raríssima**. O esqueleto é o mesmo há
séculos:

- alguém concebe o produto;
- alguém constrói o produto;
- alguém cria demanda para o produto;
- alguém vende o produto;
- alguém instala e conserta o produto;
- alguém conta o dinheiro.

Nos últimos setenta anos, o livro reconhece **uma única** adição genuína a esse esqueleto: **TI.**
E TI só apareceu porque uma força externa — a dependência universal em relação à tecnologia — o
exigiu. Recursos humanos, argumenta, não conta: a função sempre existiu, só não tinha caixa própria.

A tese é que customer success é a **segunda** adição genuína, e pela mesma razão: uma força externa
(o modelo de negócio virou recorrente) tornou a função inevitável. E propõe **três vetores** que
precisam estar presentes simultaneamente para que uma unidade nova se justifique:

| Vetor | O que significa | Teste |
|---|---|---|
| **Dependência da empresa** | O resultado da empresa passa a depender do LTV, não do evento de venda | Se o cliente sair no mês 6, a empresa perde dinheiro? |
| **Novas competências** | O trabalho exige um conjunto de habilidades que ninguém na empresa tem | Alguém aqui sabe medir saúde de cliente, evasão e retenção líquida? |
| **Atividades e métricas próprias** | Existe um conjunto de coisas a fazer e um conjunto de números pelos quais ser cobrado | Há alguém cujo emprego depende da taxa de retenção? |

O livro lista o que seriam essas métricas — **renovações brutas, retenção líquida, adoção, saúde do
cliente, evasão, upsell, downsell, NPS** — e as atividades que as movem: **verificações de saúde,
avaliações trimestrais do negócio (ATNs), suporte proativo, educação e treinamento, escores de
saúde, avaliação de risco e processos de redução de risco.** A observação: várias dessas coisas já
eram feitas isoladamente e em situação de crise; o que era novo era reuni-las sob um único
responsável com critério claro.

### As cinco características de customer success

O livro define a função por contraste, listando cinco atributos e explicando cada um contra o que
ele *não* é:

**1. Indutor de receita.** Não é centro de custo. Gera receita por duas vias — **renovações** (que
são transação de venda, explícita quando há assinatura de contrato, implícita quando há renovação
automática sem opção de saída) e **upsells** (comprar mais). O livro faz a analogia com a operadora
de telefonia: a cada mês em que você não troca de operadora, houve uma venda. A equipe que garante
que você não troque é customer success, use a empresa esse nome ou não.

A nuance importante: **na maioria das empresas a equipe de CS não executa a transação de venda** —
há times de renovação e de upsell específicos para negociar e assinar. Mas é CS que **possibilita**
a transação. Consequência prática de contratação: a equipe de CS precisa de gente com **vivência e
perspicácia comercial**, mesmo que sem experiência direta de vendas.

**2. Proativo.** A diferença mais dura em relação a suporte. Suporte reage a telefone, chat, e-mail,
tuíte. CS usa dados para decidir a quem procurar. **Advertência de recrutamento que o livro dá:**
não contrate para CS pessoas com perfil reativo — a transição é possível, mas é difícil.

**3. Orientado para o sucesso, não para a eficiência.** Métrica de eficiência mede redução de custo:
cortar um dia do tempo de montagem de um carro é valiosíssimo, mas não vende um carro a mais.
Métrica de sucesso move a primeira linha. **E as pessoas boas em uma coisa não são necessariamente
boas na outra.**

**4. Focado em análise de dados.** Não é novidade que organizações sejam movidas a dados; a novidade
é que CS é movido a **dados prospectivos**. E o uso mais importante da análise não é prever
resultado, é **alocar o tempo da equipe**: tempo gasto com cliente feliz gera bons resultados —
escores mais altos, mais referências — mas provavelmente vale menos do que tempo gasto com cliente
em dificuldade.

**5. Preditivo.** O livro separa isso de "análise de dados" de propósito, porque diz respeito às
pessoas e não só ao sistema. Responsividade é ótima e os clientes valorizam. Mas predição é outra
coisa: **saber a quem procurar antes de ser procurado.**

> **Ancoragem Altta.** Os três vetores são um teste operável para a Altta agora. Dependência: sim,
> o modelo é MRR. Competências: **não** — ninguém na estrutura atual mede saúde de aluno, coorte ou
> retenção líquida, e essa é uma lacuna real, não teórica. Métricas e atividades: **não existem
> ainda.** O que o livro diz, e que vale como alerta, é que criar o retângulo no organograma sem os
> três vetores não produz nada. Para a Altta a leitura correta hoje **não é "contratar um time de
> CS"** — é instalar as métricas e as atividades antes, dentro do Academy, e deixar a unidade
> organizacional emergir quando o volume justificar. Ver §15.

---

<a name="5"></a>
## 5. O que customer success NÃO é — as quatro fronteiras

O livro dedica espaço considerável a delimitar a função contra quatro vizinhas, e essa é a parte
mais útil para quem está montando a coisa do zero, porque evita construir a errada.

### 5.1 — Não é experiência do cliente (CX)

**CX** é a avaliação e gestão da experiência total ao longo do ciclo de vida: todos os pontos de
contato, de vendas a onboarding, faturamento, suporte e renovação. É medida majoritariamente por
**pesquisa**. É uma disciplina inteira, com fornecedores, conferências e boas práticas próprias.

**A sobreposição com CS é pequena e específica:** pesquisas de satisfação são um componente da
medição de saúde do cliente. Só isso. CX pergunta como foi; CS pergunta o que fazer agora.

### 5.2 — Não é CRM

O livro observa que "CRM" nasceu descrevendo um **mercado** (Salesforce, Microsoft Dynamics, Oracle
CRM/Siebel) e não uma função ou disciplina. O ticker da Salesforce na bolsa é literalmente CRM. Como
o termo pegou, ele passou a ser entendido como abrangendo customer success, ou como se CS fosse
subproduto do CRM.

**A posição do livro:** a gestão de customer success até *poderia* se chamar CRM, se o nome já não
estivesse tomado por outra coisa. No contexto atual, **não são a mesma coisa, de modo algum.** Esta
passagem tem peso específico para uma pendência aberta da Altta e volta no §15.

### 5.3 — Não é advocacia do cliente

**Advocacia** descreve o papel que clientes felizes desempenham promovendo a agenda do fornecedor:
referências, estudos de caso, resenhas, grupos de usuários. Existem soluções de mercado construídas
só para isso (o livro cita a Influitive).

A relação entre as duas: se CS é gestão da saúde do cliente, **advocacia é o efeito produzido pelos
clientes que atingem escores altos de saúde.** Um alimenta o outro em círculo virtuoso, mas são
atividades distintas com donos distintos.

### 5.4 — Não é suporte ao cliente — e esta é a fronteira que mais custa errar

O livro trata esta como a confusão mais perigosa e explica por que ela acontece: as palavras se
parecem, a sigla é a mesma (CS), há sobreposição real de competências (as duas exigem domínio do
produto, paciência, capacidade de resolver problema), e existe a lógica ingênua — *"já temos um
time que conhece o produto e ajuda o cliente; por que precisaríamos de um segundo time com as
mesmas habilidades fazendo basicamente a mesma coisa?"*

A resposta é que **os dois times são antagônicos nos aspectos que importam:**

| | **Suporte ao cliente** | **Customer success** |
|---|---|---|
| **Natureza** | Quebra/conserta | Prevenção e crescimento |
| **Gatilho** | O cliente procura | Os dados apontam |
| **Postura** | Reativa | Proativa e preditiva |
| **Avaliação** | **Eficiência** — casos fechados por dia por atendente | **Retenção** |
| **Contabilidade** | Centro de custo, e provavelmente sempre será | Indutor de receita |

E o alerta operacional mais concreto do capítulo: como as duas se parecem, **CS costuma nascer
dentro de suporte, e isso costuma dar errado.** O que acontece na prática é que customer success
vira **uma oferta de suporte premium** — SLA ampliado, horário estendido, atendimento multilocal,
ponto de contato designado, acesso direto ao nível 2. São todas melhorias boas, o cliente paga mais
por elas e faz bem em pagar. **Mas não são customer success**, porque continuam sendo reativas e
continuam sendo medidas por eficiência.

A recomendação: **separação organizacional é melhor que integração**, pelo menos no início, para
que a disciplina e os processos de CS se formem sem a contaminação do reflexo reativo. Depois as
duas equipes vão colaborar intensamente — mas a separação inicial é o que garante que exista algo
para colaborar.

> **Ancoragem Altta.** Esta fronteira é a que a Altta vai errar por default se ninguém a nomear.
> Numa operação de educação, "suporte" é a caixa de mensagens do aluno com dúvida sobre a aula, o
> boleto ou o acesso — reativo, medido por tempo de resposta. "Customer success" seria olhar a
> coorte que parou de assistir na semana 3 e intervir antes de alguém reclamar. **São duas
> operações, dois times mentais e duas métricas**, e o risco real é a Altta construir a primeira,
> chamá-la de sucesso do aluno e achar que resolveu. Ver §15.

---

<a name="6"></a>
## 6. A hierarquia de valor do cliente: high-touch, low-touch, tech-touch

Este é o framework mais transplantável do livro depois da lealdade atitudinal, e é o que estrutura
todos os capítulos das Dez Leis — cada lei termina com três seções, uma por camada.

A pergunta que o origina: três empresas de receita recorrente não podem operar customer success da
mesma maneira. O livro dá os três exemplos com preço médio de venda estimado:

| Empresa | Escala | PMV |
|---|---|---|
| **Workday** | Centenas de clientes | US$ 1 milhão/ano |
| **Clarizen** | Milhares de clientes | US$ 15.000/ano |
| **Netflix** | Milhões de clientes | US$ 10/mês |

A Workday pode dar atendimento personalizado com especialistas dedicados. A Clarizen pode fazer
isso com alguns clientes, mas precisa escalar para a cauda longa. **A Netflix não pode fazer nada
que não seja 100% automatizado** — não existe reunião de GCS da Netflix com assinante.

E o ponto que faz o modelo valer para todo mundo: **a maioria das empresas tem as três camadas
dentro da própria base.** A pirâmide não separa empresas, separa clientes.

### 6.1 — High-touch (atendimento personalizado)

É o modelo mais intensivo em pessoas, e a despesa se justifica pelo preço do produto. **Não é
exclusivo de SaaS**, e o livro insiste nisso com dois exemplos fora do software:

- **DIRECTV × Marriott**: um contrato para fornecer televisão a todos os quartos de todos os hotéis
  Marriott do mundo. Há certamente alguém na DIRECTV cuja função é gerenciar esse relacionamento,
  com autoridade para mobilizar a empresa inteira em favor dele. **Isso é customer success, chame-se
  como se chamar.** E o mesmo vale para uma rede como a Buffalo Wild Wings, que quer todos os
  eventos esportivos possíveis nas 35 telonas de cada unidade.
- **Bright Horizons**: empresa tradicional que oferece creche corporativa como benefício a grandes
  empregadores. Os contratos são críticos, existe um time que os gerencia, e o crescimento vem de
  vender serviços adjacentes — creche de emergência, serviços educacionais, cuidado de idosos.

O livro separa as interações high-touch em duas categorias:

**Programadas:**
- processo de onboarding específico;
- transferências coordenadas entre grupos do fornecedor;
- reuniões de status mensais;
- avaliações executivas do negócio (AENs) semestrais ou trimestrais;
- visitas presenciais (muito frequentes ou anuais);
- verificações de saúde regulares;
- renovações próximas.

**Não programadas** — disparadas por dado, com objetivo de mitigar risco percebido:
- problemas frequentes;
- excesso de chamados ao suporte;
- redução no uso do produto;
- faturas em atraso além de X dias.

E a observação que abre a ponte para as outras camadas: **as interações não programadas existem em
todos os modelos**, mudando só o canal. Se um assinante assíduo da Netflix passa sessenta dias sem
assistir nada, alarmes disparam — não geram telefonema, mas geram campanha de e-mail ou lembrete
automático.

O objetivo de retenção no high-touch é **100%.** Qualquer coisa abaixo disso é tratada como fracasso,
porque esses são os clientes cuja perda é catastrófica — financeiramente e reputacionalmente. E são
também os de maior potencial de expansão: quais são as chances de o Marriott construir ou adquirir
mais hotéis? Altíssimas, e cada quarto novo vira receita.

Comentário honesto do livro: **high-touch é o modelo mais fácil de montar.** Gestão de contas
personalizada existe há décadas, e não é difícil achar gente com o perfil relacional e a perspicácia
de negócio necessários. A tecnologia importa aqui, mas para comunicação, colaboração e gestão — não
para decidir a quem e quando contatar.

### 6.2 — Low-touch (atendimento padronizado) e o customer success *just-in-time*

Low-touch é a mistura, e o livro admite que **o nível intermediário é sempre pastoso**, com
fronteiras indefinidas em cima e embaixo. Ainda assim insiste que as linhas precisam ser traçadas —
entre o high-touch menos valioso e o low-touch mais valioso, e na fronteira de baixo.

O modelo mental que ele propõe é roubado da manufatura: **just-in-time**, o Toyota Production System
dos anos 1960. Antes do JIT, a produção em massa exigia depósitos enormes de estoque de peças —
componente caríssimo do processo. O JIT reduziu o estoque acelerando as entregas para o momento
exato da necessidade: num sistema perfeito, a peça chega à estação do operário no instante em que
ele estende a mão, saindo do transporte direto para a linha, sem passar pelo estoque.

**Customer success JIT: entregar exatamente o que o cliente precisa, exatamente na hora certa. Nem
um minuto antes, nem um minuto depois.** E o livro faz o trocadilho que carrega o conceito: JIT
também significa ***just enough***, apenas o suficiente.

A analogia se completa assim: no high-touch você mantém "estoque" — fartura de orientação, educação
e apertos de mão, que produzem o bem sem preço que é a boa vontade. Você anda o quilômetro extra e
às vezes faz mais do que precisa, porque o cliente vale isso. **No low-touch você não pode manter
esse estoque.** Anda o mínimo indispensável — mas esse mínimo ainda inclui uma margem razoável de
contato humano. **É no tech-touch que o contato pessoal desaparece por completo.**

A adaptação prática da lista high-touch para low-touch:

| Interação high-touch | Versão low-touch |
|---|---|
| Onboarding específico | Onboarding **padronizado** |
| Transferências coordenadas entre todos os grupos | Transferência **só de vendas para onboarding** |
| Reuniões de status mensais | Mantidas, mas espaçadas |
| AENs trimestrais | **Anuais** |
| Visitas presenciais | **Eliminadas** |
| Verificações de saúde regulares | **Automáticas** |
| Renovação trabalhada | **Autorrenovação** |

E os gatilhos não programados sobem de limiar: se dez chamados de suporte em trinta dias disparam
intervenção no high-touch, no low-touch talvez o número vire vinte. As primeiras três cobranças de
fatura vencida viram só e-mail; os dois primeiros contatos humanos vêm do financeiro, não do GCS.

**O modelo de cálculo de efetivo.** Este é o pedaço mais operacional do capítulo e o mais útil para
quem precisa dimensionar time. O raciocínio: para cada tarefa programada, estime o tempo de preparo
e execução; estime a frequência das não programadas; desconte o tempo gasto em reuniões internas e
atividades não ligadas a cliente; o que sobra, dividido pelo tempo por cliente, dá **quantos
clientes um GCS consegue gerenciar.** Esse é o modelo de headcount.

Dois comentários que o livro anexa e que valem mais que o modelo:

1. **A primeira versão do cálculo vai mostrar que você precisa de muito mais gente do que o CFO e o
   CEO vão aprovar.** O valor do exercício não é o número — é ter um modelo manipulável em torno do
   qual se possa discutir com inteligência **que tarefas eliminar ou automatizar** para reduzir a
   necessidade de pessoal.
2. **A melhor razão de GCS não é por número de clientes, é por valor de contrato (RRA)** — um
   cliente de US$ 2 milhões não conta como um cliente de US$ 20.000. Mas com a ressalva imediata:
   **gerenciar cem clientes de US$ 20.000 é muito mais difícil do que gerenciar um de US$ 2
   milhões.**

O exemplo fora do software para low-touch é a **Nipro Diagnostics**, fabricante de um medidor
domiciliar de glicose. O aparelho se compra uma vez; as fitas de teste se repõem para sempre. O
medidor envia resultados por bluetooth ao celular, compartilháveis com o médico. **É o modelo
barbeador-e-lâmina aplicado à saúde**, e a reposição regular das fitas o torna, na prática, um
negócio por assinatura, como o Dollar Shave Club. O customer success ali é híbrido: o low-touch é
feito pelo **profissional de saúde, que é parceiro de canal** e ensina o paciente a usar bem o
produto; o tech-touch é feito pelo próprio dispositivo, que devolve o resultado imediatamente. E há
intervenção prevista se o cliente demorar demais para repor as fitas.

### 6.3 — Tech-touch (atendimento automatizado)

O livro chama de o mais complexo e mais interessante dos três, e formula a pergunta certa: **como
entregar customer success a alguém com quem você nunca falou?**

A origem do problema: o SaaS derruba as barreiras de entrada para o cliente e o custo de venda para
o fornecedor, e com isso **amplia o mercado** — às vezes brutalmente. O resultado quase inevitável é
uma **cauda longa de clientes de baixo valor**: individualmente pouco relevantes, coletivamente
decisivos para o resultado. Para essa cauda, tech-touch é necessidade. **Para a maioria das empresas
B2C, é a única opção.**

A definição operacional: **todo contato é movido a tecnologia; ou, dito de outro jeito, todo contato
é um-para-muitos.** Contato um-para-um é caro demais e não escala para esses volumes.

Os canais um-para-muitos disponíveis:
- e-mail;
- webinars;
- podcasts;
- **comunidades** (portais onde os clientes conversam entre si);
- grupos de usuários;
- conferências de clientes.

E o critério de inclusão: **qualquer veículo que permita interagir com mais de um cliente ao mesmo
tempo, ou que desloque a interação para outra fonte** — e é essa segunda cláusula que faz a
comunidade entrar na lista, porque a comunidade transfere o atendimento para os próprios clientes.

**Por que e-mail é o principal.** O livro se aprofunda no e-mail e o argumento é bom. Marketing
segmentado por e-mail é disciplina madura, validada por doze anos de mercado: três fornecedores de
automação de marketing chegaram a IPO (Eloqua, Marketo, HubSpot), mais dois focados em B2C
(Responsys, ExactTarget), e cada um deles em algum momento passou de US$ 1 bilhão de avaliação. Isso
é prova de que havia algo ali.

**A virada conceitual:** todo esse aparato foi construído para a boca do funil — aquisição. Agora os
mesmos conceitos estão sendo aplicados aos **clientes atuais**, ajudando-os na jornada e conduzindo
ao uso bem-sucedido do produto. O livro reconhece que, no âmago, continua sendo geração de demanda —
**só que demanda pelo produto que a pessoa já usa.** O objetivo não é vender mais (embora às vezes
seja): é **reforçar a compra já feita** ou ajudar a usar melhor, para que a pessoa fique.

E o argumento econômico: quando a infraestrutura já existe, **mandar e-mail é essencialmente
gratuito e infinitamente escalável.**

**Você sabe muito mais sobre cliente do que sobre prospect.** O livro monta uma lista parcial do que
qualquer empresa já sabe sobre quem é cliente e que pode alimentar segmentação:

- data do contrato original;
- tempo como cliente;
- setor de atividade;
- localização;
- contatos;
- valor do contrato;
- taxa de crescimento do contrato;
- número de chamados ao suporte;
- gravidade de cada chamado;
- dias em aberto de cada caso;
- número de faturas emitidas, pagas e em atraso;
- prazo médio de pagamento;
- escore de saúde e tendência;
- e, se houver assinatura: data de renovação e **todo clique já dado dentro do produto.**

**O exemplo de e-mail que o livro constrói** merece ser recontado porque é o padrão de referência.
A situação: você lançou há dois meses um recurso de relatórios que muitos clientes esperavam há mais
de seis. Com a tecnologia certa, você identifica os usuários avançados e administradores de cada
cliente **que ainda não experimentaram o recurso** e manda uma mensagem que faz, ao mesmo tempo,
sete coisas: agradece pelo tempo de casa citando o mês e o ano da assinatura; **cita a nota que
aquela pessoa deu na última pesquisa NPS especificamente sobre relatórios**; informa que houve
melhoria substancial exatamente naquilo; observa que ela ainda não usou; descreve o ganho concreto;
cita a avaliação de outros clientes e nomeia um deles; e aponta dois vídeos de treinamento sob
demanda, com um incentivo (inscrição num sorteio de ingressos para a conferência) condicionado a
completar o segundo vídeo e dar feedback.

O ponto: **o mesmo e-mail, com conteúdo personalizado, vai para 20 ou 1.000 clientes ao mesmo tempo
e ao mesmo custo — zero.** E mesmo num modelo low-touch com espaço para contato individual, ele
poupa quinze telefonemas de meia hora.

O livro fecha observando que empresas B2C maduras e B2B de alto volume **já fazem alguma versão
disso** e chamam de outra coisa — marketing de cliente, ou simplesmente parte da experiência do
produto. **Mecanismo de recomendação, ele afirma, não é nada além de outra forma de customer
success.** E registra a tendência que via em 2016: nas empresas SaaS maduras, **marketing de cliente
está migrando para dentro de customer success**, quando já não está sob o mesmo guarda-chuva.

E a nota final, que importa para a Altta: **mesmo uma operação rigorosamente high-touch tem tarefas
de GCS automatizáveis**, e o tech-touch é o que permite a **qualquer** empresa começar a entregar
customer success quase imediatamente — mesmo sem ter GCS, mesmo sem chamar aquilo de customer
success. E o canal não precisa ser e-mail: o exemplo da United Airlines mandando SMS de atraso de
voo, mudança de portão e bagagem que não embarcou é tech-touch puro, e pode ser mais eficaz que
e-mail quando bem usado.

> **Ancoragem Altta — e esta é a mais importante do livro inteiro.**
> **A Altta é tech-touch por definição, com uma faixa low-touch no topo.** Ticket de clínica
> pequena, muitos alunos, sem CSM por conta, sem QBR, sem visita presencial. Toda a metade
> high-touch do livro é **referência para entender o modelo, não instrução para executar.**
>
> Duas consequências que se seguem imediatamente e que valem como diretriz operacional:
>
> 1. **A régua de retenção tem que ser diferente por camada.** O livro diz explicitamente que a
>    taxa de retenção **cai** conforme se desce a pirâmide, e que isso precisa ser compreendido e
>    aceito — não para relaxar, mas para não sacrificar melhorias escaláveis em processo e produto
>    salvando um ou dois alunos individuais. Para a Altta: **a meta de retenção do Autonomy não é a
>    meta de retenção do Legacy**, e tratar as duas como a mesma coisa produz decisão errada nas
>    duas pontas.
> 2. **Quanto mais baixo na pirâmide, mais o produto é a alavanca** — porque o produto é a única
>    coisa que escala. Isso amarra direto na 6ª Lei e tem consequência de roadmap para o Academy.
>
> Ver §14 e §15.

---

<a name="7"></a>
## 7. O impacto interfuncional: como CS reescreve vendas, produto e serviços

Antes de entrar nas Leis, o livro percorre o que muda em cada área quando a empresa passa a levar
retenção a sério. Esta seção é a mais concreta da Parte I.

### 7.1 — A história de Joe, Sherrie e Bill

O livro monta uma cena que vale mais que a explicação. **Joe** é VP de vendas da Acme, com 45
representantes, 15 consultores de solução e mais 5 pessoas de apoio; sua meta anual é US$ 73 milhões
em pedidos; reporta ao CEO. **Sherrie** é VP de customer success, com 29 GCSs, 7 representantes de
renovação e upsell e 3 pessoas de operações; sua meta é **US$ 145 milhões** — 132 de renovação mais
10% de upsell, para retenção líquida de 110%; também reporta ao CEO.

**A meta de Sherrie é o dobro da de Joe.** E o livro afirma que isso acontece rápido em negócio de
receita recorrente: **quatro a cinco anos numa empresa saudável, e menos se a primeira linha começar
a achatar.**

A aritmética que ele demonstra: empresa fundada há três anos, com pedidos de US$ 1 milhão, US$ 4
milhões e US$ 10 milhões nesses três anos, retenção líquida de 100% até aqui — logo, RRA de US$ 15
milhões. Meta de crescimento de vendas de 50% para o ano que vem, o que é agressivo mas normal.
Assumindo retenção líquida de 110% daqui pra frente: **o dono da retenção tem meta de US$ 16,5
milhões contra os US$ 15 milhões do VP de vendas** — já no ano seguinte. Repetindo as mesmas taxas
por mais um ano: **US$ 34,7 milhões contra US$ 22,5 milhões.** A distância cresce e não volta.

**A cena.** Numa segunda de manhã, Joe entra na sala de Bill, o VP de engenharia — coisa que faz
várias vezes por semana. Pede uma integração que os concorrentes têm e ele não, mais um ajuste na
demo para ela "bombar", e fecha com a frase clássica: se não conseguirmos isso, vai ser muito difícil
bater os números, e isso será o nosso fim.

Mais tarde no mesmo dia, Sherrie entra na sala de Bill. Diz que o desempenho geral está derrubando a
operação, que clientes importantes estão pressionando na renovação, que há um relatório feio na demo
pelo qual os clientes estão gritando — e pede que um recurso novo seja **separado do pacote padrão
para ser vendido como upgrade.**

**Os dois pedidos competem.** Os dois são bons para o negócio. E é exatamente isso que o CEO precisa
querer: que Bill seja igualmente motivado e influenciado pelas duas conversas. **A conversa de
Sherrie precisa pesar tanto quanto a de Joe.**

O livro é franco sobre o que isso significa: **é uma mudança de poder.** Vendas é rei e sempre foi,
com toda a razão — quando o crescimento da primeira linha é a única coisa que importa, quem o produz
manda. Quando o foco se desloca, parte do poder migra para quem responde pela retenção. E continua
migrando no mesmo ritmo em que a base instalada fica mais valiosa que os pedidos novos.

### 7.2 — Os dois mecanismos de alinhamento

O livro propõe dois mecanismos concretos, e ambos são baratos:

**1. Incentivos com dois fatores.** A maioria das empresas tem plano de bônus para executivos, e
muitas o estendem a todos. O bônus está atrelado a resultado da empresa, e alguém — quase sempre o
CEO, com aval do conselho — decide qual é a medida certa. **Um plano simples e extremamente eficaz
tem apenas dois fatores: crescimento da primeira linha e retenção de clientes.** Se todo mundo, e
sobretudo os executivos, pensa nas duas coisas, a mensagem é inequívoca — e planos de incentivo
existem para mudar comportamento.

**2. Uma pessoa dona da métrica.** O livro invoca o ditado: *quando muita gente é dona, ninguém
manda nada.* Ninguém dirigiria uma empresa sem alguém responsável por vendas. Se retenção é pilar
equivalente, precisa de dono com **a mesma autoridade do VP de vendas** — poder de balançar as
árvores, de pressionar outras áreas, de competir por recursos, de tomar decisão estratégica. E, a
frase que fecha: **alguém precisa ter consciência de que o emprego depende daquele número.**

E uma provocação que ele deixa: dá para argumentar que **a principal atribuição do líder de CS é
garantir que todas as outras áreas estejam pensando da mesma forma sobre retenção.**

### 7.3 — O que muda em vendas e marketing

O livro funde marketing e vendas para essa análise, reduzindo marketing a geração de demanda. Seis
mudanças, imediatas ou graduais:

1. **Foco em clientes que podem ter sucesso no longo prazo** — não em quem pode assinar.
2. **Menos ênfase em maximizar o primeiro negócio**, sobretudo quando isso custa LTV.
3. **Consciência geral da importância das renovações.**
4. **Melhoria das expectativas criadas no prospect.**
5. **Muito mais atenção à transferência de conhecimento e à preparação pós-venda**, para garantir
   onboarding adequado.
6. **Incentivos atrelados a renovação e LTV.**

O livro é honesto sobre a causa: **não é que os vendedores não queiram que o cliente tenha sucesso.**
A maioria quer. É que **os incentivos e o horizonte de curto prazo atravessam o enredo.**

E chega ao ponto mais radical da Parte I: **é possível dar ao responsável pela retenção poder de
veto sobre negócios no pipeline.** Ele admite que parece perigoso, e que é. Mas defende que pode ser
a coisa certa, **desde que o poder seja manejado com cuidado e movido por dado real, não por caso
isolado e instinto.** E acrescenta o corolário: se essa autoridade não for dada ao VP de CS ou ao
CCO, **ela recai sobre o CEO**, que é quem tem que equilibrar o resultado deste trimestre contra o
risco de vender para o cliente errado.

### 7.4 — O que muda em produto

A lista de mentalidade que o livro propõe para o time de produto numa empresa orientada a retenção:

- **inserir medidas de ROI dentro do produto;**
- tornar o produto fácil de implantar;
- **projetar para adoção, não para ter recursos;**
- **aderência é mais importante que quantidade de recursos;**
- **desempenho é mais importante que qualidade da demonstração;**
- **criar módulos como upgrade para upsell**, em vez de embutir tudo no pacote básico;
- facilitar a autossuficiência do cliente.

O comentário que ele anexa: várias dessas coisas já são instinto de um bom time de produto. **O que
muda numa empresa centrada em CS é que elas deixam de ser desejáveis e viram requisito.**

### 7.5 — O que muda em serviços

Aqui a mudança é de urgência, não de lista, e o livro a comprime numa frase que vale a seção inteira:

> **Num negócio de receita recorrente, não existe pós-venda. Toda e qualquer atividade é esforço de
> pré-venda.**

O argumento: compare a urgência de implantar para um cliente com contrato trimestral e para um que
comprou licença perpétua. No segundo caso, atrasar dois ou três dias, ou até uma semana, provavelmente
não muda nada. No primeiro, com um cliente que em noventa dias — sessenta dias úteis — vai decidir
se continua, **dois ou três dias fazem diferença enorme.**

E isso tem que impregnar até o atendente de suporte: **resolver o chamado é atividade de pré-venda**,
porque há um negócio pendente em jogo — a renovação de um lado, a evasão do outro.

**A pergunta do bom GCS.** O livro dá o que talvez seja o hábito mais útil do capítulo. O bom Gerente
de Customer Success repete sempre duas perguntas:

> *Por que este cliente precisa da minha ajuda agora?*
> *O que poderíamos ter feito diferente antes, para que eu não precisasse intervir agora?*

Essa mentalidade produz pressão sobre o resto da operação, e o livro lista os achados típicos:
suporte não resolveu direito; caso crítico pendurado há tempo demais; o cliente foi treinado a
construir relatórios mas não sabe **quais** relatórios precisa; a configuração feita pelo onboarding
não serve para a situação real dele. E também sobre áreas fora de serviços: vendas criou expectativa
errada; o produto não funciona como prometido.

O papel do CS, então, **não é só ajudar aquele cliente — é achar a causa raiz e forçar a mudança
para que o próximo cliente não caia no mesmo buraco.** E a formulação final: **a melhor experiência
do cliente não é conseguir ajuda quando precisa; é precisar de ajuda cada vez menos.**

> **Ancoragem Altta.** As duas perguntas do GCS são adotáveis hoje, sem estrutura nenhuma, e são o
> item de menor custo e maior retorno de todo o livro. Aplicadas ao Academy: *por que este aluno
> travou na semana 3?* e *o que no desenho do módulo fez ele travar?* — a segunda pergunta é a que
> transforma atendimento em currículo. Isso conecta direto com a camada de **Gradualização**
> (Schwartz) já registrada no §8 da jurisprudência: aluno que trava é aluno para quem a
> gradualização quebrou.
>
> A frase "toda atividade é pré-venda" também tem leitura direta na escada: **cada aula do Autonomy
> é pré-venda do Sales.** Não como pitch — como prova. Ver §15.

---

<a name="8"></a>
## 8. As Dez Leis do Customer Success

### Origem e status do material

Em 2010 a **Bessemer Venture Partners** publicou *The Ten Laws of Cloud Computing* (também conhecido
como *Ten Laws of SaaS*), um manual que virou referência para quem queria construir ou entender uma
empresa SaaS. Em 2015 a Bessemer encomendou a sequência: **The Ten Laws of Customer Success**, com
dez autores diferentes, cada um escrevendo uma lei. É esse material que forma a Parte II do livro,
com comentários de Steinman ao final de cada capítulo.

O livro é explícito sobre o escopo: **não é um manual de implantação.** É um conjunto de princípios
que uma empresa de receita recorrente precisa compreender e aplicar em nível alto. E cada capítulo
declara a relevância da lei para cinco tipos de negócio: **B2B SaaS, por assinatura, pagamento em
bases correntes, B2C e tradicional.**

Os dez autores vêm de: SaaS B2B e B2C, software tradicional on-premise, finanças, **educação e
treinamento**, colaboração, gestão de projetos, capacitação de vendas, gestão de customer success e
gestão de remuneração.

> **Nota crítica que atravessa a Parte II.** Como são dez autores independentes, **a qualidade
> oscila muito.** As leis 1, 4, 7 e 8 são densas e operacionais. As leis 3 e 10 são em boa medida
> exortação. A lei 5 é conceitualmente a mais importante para a Altta e a mais mal escrita do
> conjunto. Isso está detalhado na avaliação honesta (§16).

---

<a name="lei1"></a>
### 1ª Lei — Venda ao cliente certo
*Autor: Ted Purcell, VP Sênior de Vendas e de Customer Success, Clarizen*

**A tese.** Vender para o cliente errado não é um problema de vendas — é o **maior gerador isolado
de churn**, e ele acontece antes de o relacionamento começar.

O argumento de Purcell gira em torno do **PMF (product market fit)** como critério de qualificação,
não como conceito de produto. Fechar negócio novo é empolgante para todo mundo, principalmente
quando envolve marca conhecida. Se o negócio está alinhado ao PMF, a máquina de receita ganha
energia e **o passe de bola de pré-venda para pós-venda pode ser padronizado e aprimorado**, o que
por sua vez sustenta expansão e reduz evasão. Se não está, o cliente errado **emperra a
organização** e a desvia dos esforços que produzem eficiência e escala.

Ele admite a fronteira tênue: **clientes fora do perfil às vezes viram parceiros críticos de desenho
de produto**, ajudando a estender casos de uso e o próprio PMF. A recomendação não é rejeitar todo
mundo que não encaixa — é **estar alinhado sobre quem é e quem não é o cliente certo**, o que é
diferente.

**A frase que organiza a lei:** *a receita não fala, grita — e o PMF berra.*

**Como definir o cliente certo.** Purcell propõe que a definição some três fontes:
- características de caso de uso, linha de negócio, setor ou porte compatíveis com o produto;
- análise da base atual e do que está funcionando hoje;
- análise do tamanho dos mercados acessíveis onde ainda não se atua, para decidir onde mirar e
  **quem relegar ou abandonar por completo.**

E a exigência: **o CEO precisa estar alinhado e comprometido com o PMF e com o perfil de cliente
certo.** Sem isso, o resto é conversa.

**A operacionalização.** Depois de definido o perfil, o motor de go-to-market se alinha a ele:
marketing mira os tipos certos, e vendas **desqualifica rápido** quem não encaixa — indo além da
qualificação básica de verba, cronograma e patrocínio executivo.

**O custo real de vender errado**, que é o pedaço mais forte da lei:

> **A evasão em si é só a ponta do iceberg.** Primeiro vem o CAC e o custo de recepcionar. Mas o
> ônus maior é o **custo de oportunidade** de aplicar recursos nos clientes errados e, quando eles
> entram em dificuldade, **dobrar a aposta neles** — recursos que poderiam ter ido para clientes com
> maior chance de LTV alto.

**Mecanismos de mitigação que Purcell propõe:**
- **loop de feedback entre pré-vendas, vendas e análise de impacto** durante o desenvolvimento dos
  serviços e da descrição do trabalho, para identificar risco e, se for o caso, **mudar o rumo do
  cliente ou encerrar o processo de venda**;
- **processos distintos para segmentos menos que ideais** — por exemplo, exigir que certos perfis
  comprem um pacote de serviços específico; ou investir em processo high-touch personalizado em
  situações de alto risco, com envolvimento maior do GCS na fase de adoção; ou, ao contrário,
  minimizar o investimento com abordagens low-touch e um-para-muitos (webinars, autoajuda),
  concentrando recurso escasso em quem tem LTV alto;
- **um sistema escalável para identificar razões de evasão**, com análise regular dos dados
  segmentados. E aqui a lista de categorias é útil: descobrir que porcentagem da evasão vem de **má
  adoção**, de **questões de market fit**, de **falha do produto frente à necessidade** e de
  **fatores pouco controláveis** — fusão, aquisição, reestruturação, falência;
- **alinhar incentivos em toda a empresa**: o líder de CS já é motivado a reduzir churn, mas **e o
  líder de vendas? e o líder de produto?** Se LTV e evasão são KPIs centrais, por que não estão nos
  incentivos de todos os líderes funcionais?
- **estrutura organizacional**: vendas e CS reportam a um mesmo diretor de receita, com visão
  holística de negócio novo e negócio repetido? Se são independentes, **o líder de CS tem poder de
  veto sobre negócio com encaixe ruim?**

**Os comentários de Steinman — o dado mais citável do livro.**

Steinman relata que **Dave Kellogg, CEO da Host Analytics**, lhe disse:

> **"Noventa e nove por cento da evasão ocorre na época da venda."**

Ou seja, no negócio dele, quase toda evasão acontece porque venderam para o cliente errado. Steinman
pondera que a afirmação se aplica em graus diferentes a negócios diferentes — mas não a relativiza
muito.

E então descreve **a espiral completa do cliente errado**, que é a melhor narrativa do livro:

1. O cliente errado é **mais difícil de recepcionar**, causa problema para a equipe e empata tempo
   e recursos.
2. Gera **mais demanda para produto.**
3. A sobrecarga se transfere para CS e suporte quando o onboarding termina.
4. A equipe de CS se desdobra para **configurar e executar um caso de uso fora do quadrado, sob
   medida** — e depois treinar o cliente naquilo.
5. **Noventa dias antes da renovação, os alarmes tocam.** Monta-se uma força-tarefa de resgate,
   geralmente com um ou dois executivos dentro.
6. **A renovação se consegue cerca de 50% das vezes** — e em geral **só com redução de preço,
   devolução de dinheiro ou meses grátis.**
7. Isso é "chutar a lata rua abaixo": as mesmas dificuldades reaparecem no próximo ciclo.
8. Nos 50% que saem, a perda de receita dói, mas **o custo de oportunidade de todas as horas
   derramadas sem colher nada dói muito mais.**
9. **E o pior vem por último: o boca a boca do cliente fracassado.** Ainda que boa parte da culpa
   seja dele, essa não é a versão que vai circular quando ele conversar com amigos e colegas.

**Impacto por camada:**
- **High-touch**: um aumento de 10% ou 20% no custo de recepcionar, treinar e servir incide sobre
  uma base muito maior. E o valor de marca desses clientes é alto, o que torna a propaganda negativa
  deles mais dolorosa.
- **Low-touch**: a dor unitária é menor, mas **são muito mais numerosos**, e justamente por serem
  low-touch **as chances de gerenciar a crise ou evitar a perda são estreitas.** No agregado eles
  conhecem mais gente, então o boca a boca negativo pode ser **mais destrutivo** que o dos
  high-touch, mesmo com valor de marca individual menor.
- **Tech-touch**: pegue o problema high-touch, multiplique por dez para low-touch por causa do
  volume, e multiplique por dez de novo. **A chance de salvar um cliente individual despenca.** E a
  pergunta retórica que fecha: dá para salvar um cliente que simplesmente não encaixa no produto
  mandando e-mail e inscrevendo em webinar?

**As cinco recomendações finais de Steinman para mitigar o risco:**

1. **Use dados, não casos.** Não vale "acho que já vendi para um cliente assim e não deu certo".
   O padrão que ele exige é este: *"Fechamos com 31 clientes do mesmo setor, faixa de desconto, caso
   de uso e nível de preço deste. Quatorze cancelaram na primeira renovação e mais quatro na segunda.
   Oito ainda não chegaram lá. Os cinco restantes renovaram, mas com redução média de 14% no valor
   do contrato. O NPS médio dos 13 remanescentes é 5,2 e o escore de saúde médio é 38,7."*
2. **Dê poder de veto ao VP de CS sobre o pipeline.** Ousado, um pouco perigoso, mas defensável:
   é como dar ao suporte poder de veto sobre lançamento — **quem vai conviver com a consequência
   tem legitimidade para opinar.**
3. **Ponha CS sob o VP de vendas.** O livro diz que **em geral não recomenda isso** (contradiz o
   Capítulo 2). Mas se venda contínua para cliente errado é um problema grande, fazer o mesmo
   executivo que decide sofrer a consequência da decisão muda o foco dele. **Foi por isso que
   pediram a um líder de vendas que também responde por CS para escrever esta lei.**
4. **Garanta que o VP de vendas e todos os executivos tenham incentivo de retenção.** Estender isso
   até o representante individual em geral não funciona — **ele não pensa mais de um ano à frente.**
   Mas o líder de vendas, que já é remunerado por desempenho geral, responde bem.
5. **Leia com atenção a 10ª Lei.** O CEO precisa difundir mentalidade de retenção de longo prazo, e
   vai acabar sendo quem diz "não" a certos negócios.

> **Ancoragem Altta — e este é o achado mais importante do livro para a biblioteca.**
> O dado de Kellogg (99%) é a versão radical do dado de Keenan (**53% da lealdade se origina na
> experiência de venda**). Os dois são independentes, vêm de mundos diferentes — Keenan de venda
> consultiva, Purcell/Kellogg de SaaS — e apontam para o mesmo lugar: **o churn é fabricado durante
> a venda.**
>
> Isso responde afirmativamente, e com força, à pergunta 2 da fila. **Este livro não só reconhece
> que o churn nasce na venda: dedica a primeira das dez leis exclusivamente a isso.** Vira
> convergência nova na jurisprudência (§3), com quatro caminhos.
>
> Para a Altta, a tradução é direta e desconfortável: **qualificar o aluno na entrada do Autonomy
> não é conservadorismo comercial, é gestão de churn.** E o mecanismo do "poder de veto" tem uma
> versão viável mesmo sem estrutura: um critério escrito de quem **não** entra, aplicado antes do
> pagamento, e revisado contra o dado de permanência a cada coorte.

---

<a name="lei2"></a>
### 2ª Lei — A tendência natural de clientes e fornecedores é se afastarem
*Autora: Karen Pisha, VP Sênior de Customer Success, Code42*

**A metáfora que dá nome à lei.** Cliente e fornecedor começam como **dois barcos lado a lado no
meio de um lago.** Se ninguém estiver a bordo, eles se afastam à deriva, e depois de um tempo é
muito provável que estejam longe um do outro. A correção é simples: **ponha alguém num dos barcos,
com um par de remos. Melhor ainda, ponha alguém em cada barco.**

**O inimigo tem nome: a mudança.** Se nada mudasse, cliente e fornecedor poderiam ficar próximos
sem esforço. Mas a mudança é a constante — pessoas mudam nas duas empresas, modelos de negócio
mudam, produtos mudam, lideranças e direções mudam. **Só interação proativa e premeditada supera a
deriva.** É por isso que as unidades de customer success existem: elas sobem no barco e começam a
remar.

**A definição formal de evasão** que a lei fixa: *a porcentagem de assinantes de um serviço que
descontinuam a assinatura em determinado período.*

**E o conceito que faltava na biblioteca: evasão parcial.** É a perda de parte do valor financeiro
do contrato **sem que o cliente vá embora**. Pode ser cancelamento de um produto dentro do pacote,
devolução de licenças ociosas, ou desconto maior negociado na renovação por causa de dificuldade com
o produto ou de percepção de valor inferior ao esperado. **Evasão parcial não aparece na contagem de
clientes e come a receita em silêncio.**

**A tese central da lei:** a evasão **não ocorre ao acaso.** Tanto pesquisa quanto experiência
apontam padrão. E o problema é que **a maioria das empresas só descobre a razão quando já é tarde.**

**As dez causas de evasão, com indício e providência.** Este é o núcleo da lei e o material mais
diretamente adaptável do livro inteiro:

| # | Causa | Indício | Providência |
|---|---|---|---|
| 1 | **Não realização do ROI ou do valor de negócio** — o caso de negócio inicial não foi feito com dado exato, ou as circunstâncias mudaram | Queda de uso ou inatividade após a assinatura | Analisar os objetivos do cliente e conduzi-lo pelas fases de adoção para que extraia valor o mais cedo possível; buscar continuamente novos usos do produto. **Se o contexto for tech-touch puro:** achar formas criativas de reforçar a proposta de valor e de relembrar as razões que motivaram a compra |
| 2 | **Paralisação ou demora da implantação** — o cliente começa animado e perde impulso ou foco | O cliente não consegue pôr o produto em operação | Definir pacotes e serviços com melhor time-to-value; **fases mais curtas que levem o cliente a usar subconjuntos do escopo total** |
| 3 | **Perda do sponsor ou do usuário avançado** — toda a base de conhecimento sobre por que se comprou e como se opera está concentrada em uma ou duas pessoas | O cliente fica esquivo; não se consegue mais acessar o dono do projeto | Treinar novos usuários para que **mais de uma pessoa** saiba usar; cultivar relacionamentos de nível mais alto para ter apoio quando o campeão sair ou mudar de função |
| 4 | **Baixa adoção do produto** — o cliente tende a achar outra opção ou voltar ao método antigo | Simplesmente não está usando, ou usa menos | Programas para avaliar a necessidade real e conduzir a uma jornada de uso que deixe clara a funcionalidade; **garantir que mais usuários se conectem e usem um conjunto mais amplo de funções**, o que torna o produto mais aderente; **construir biblioteca de histórias de ROI e depoimentos de clientes** para quando o interesse começar a cair |
| 5 | **Aquisição por empresa que usa outra solução** | Os contatos avisam que a empresa está sendo comprada ou que novos líderes estão forçando outra solução | Às vezes dá para expor o valor aos líderes da nova empresa e manter ou ampliar a pegada. **Na maioria dos casos a sorte está lançada** e a evasão é descontrolada |
| 6 | **Falta de atributos** — concorrentes com interface mais intuitiva, mobilidade, interatividade, preço mais agressivo | O cliente pede atributos novos, melhorias ou preço mais agressivo | Garantir que o GCS domine o roadmap e saiba onde a empresa está investindo; **buscar feedback do cliente sobre o rumo do produto e perguntar a opinião dos clientes dele**; levar o feedback para produto. Engajar o cliente e fazê-lo se sentir parte do processo é poderoso |
| 7 | **Novo líder promovendo mudança de rumo** — às vezes com viés pró-produto que usava antes | Pedem que você participe de um RFP ou de um processo de reavaliação de soluções | Com apoio do sponsor, agir proativamente sobre o novo líder; oferecer visão geral da organização, do produto e da proposta de valor. **Tomar a dianteira a todo custo**, porque a realidade do produto instalado, com falhas e imperfeições, raramente se sai bem contra a apresentação asséptica em PowerPoint do concorrente |
| 8 | **Má qualidade ou problema de desempenho** | Aumento no volume de chamados e de casos problemáticos | **Rastrear sinais antecedentes**: um alerta quando o cliente ultrapassa um limite de chamados — digamos três numa semana — dispara plano de ação (ligação ou campanha de e-mail). Ser solidário e empático, subir na hierarquia, deixar claro que a insatisfação está recebendo o mais alto nível de atenção, ficar à frente das pendências e atualizar o progresso sem ser cobrado. **Os clientes entendem que software não é perfeito e valorizam o suporte na busca da solução** — mas se o problema persistir, a perda vem |
| 9 | **O seu produto não é a solução certa** | A compreensão que o cliente tem dos recursos principais não é exata, ou ele pede atributos que não são a sua praia | Educar vendas sobre casos de uso e parâmetros que criam a experiência ideal; **participar do processo de vendas** para identificar quem não encaixa e **oferecer alternativas** ao cliente; ensinar serviços profissionais a captar sinais de alerta e identificar risco de projeto cedo |
| 10 | **O fator humano** — a pessoa do fornecedor não combina com o cliente | Feedback pouco animador sobre um membro da equipe, direto ou indireto | **Não ignorar feedback negativo.** Procurar o cliente proativamente e pedir opinião sobre a pessoa. Descobrir rápido se dá para ajustar ou se precisa trocar. **Retardar a troca produz efeito negativo duradouro** |

**Uma advertência importante no meio da lei:** *não confunda cliente exigente com cliente
fracassado.* Às vezes **o cliente mais bem-sucedido parece infeliz** — e isso tende a acontecer
justamente quando ele está esticando as fronteiras do produto ou da própria organização. As
características que definem um cliente exigente muitas vezes indicam que ele está extraindo o máximo
de valor e simplesmente pedindo mais.

**Formas de manter contato** que a lei recomenda:
- atendimento proativo avançado do GCS ou de um executivo;
- conteúdo de e-mail oportuno e relevante;
- webinars de alta qualidade que mostrem como ampliar o uso;
- atualizações e interações numa comunidade robusta;
- reuniões regulares de grupos de usuários;
- conselho consultivo de clientes;
- conferências de usuários.

**Os comentários de Steinman: a erosão da percepção de valor.**

Steinman acrescenta o mecanismo psicológico que a lei não explicita, e é o melhor pedaço do
capítulo. É muito difícil sustentar o **nível percebido** de valor mesmo com os melhores clientes.
O exemplo: para a maioria das pessoas, **o valor do Facebook era mais alto nos primeiros meses de
uso.** O valor real do produto quase certamente aumentou — ele foi aprimorado e ganhou recursos. Mas
**a percepção de valor decai** à medida que a novidade perde impacto, o valor passa a ser dado como
certo, e o concorrente reduz a diferenciação que o cliente enxergava.

> **A batalha para reter e aumentar o valor percebido dos clientes atuais é interminável. A única
> escolha é encará-la.**

**Impacto por camada:**
- **High-touch**: mais fácil e mais difícil ao mesmo tempo. Mais fácil pela proximidade e pelo
  engajamento — esses clientes ajudam a definir roadmap e são exigentes sobre tudo; e o
  relacionamento muda menos depois da venda, podendo até **intensificar-se**, porque o LTV
  potencial é muito maior que a transação inicial. Mais difícil porque **os cacifes são mais altos**
  e porque manter relacionamento executivo no nível certo é penoso: o poder e a autoridade do
  campeão podem mudar da noite para o dia com reorganização ou nova liderança; empresas maiores são
  mais complexas e mais políticas.
- **Low-touch**: esses clientes estão **mais sujeitos ao impacto de mudanças drásticas** que os
  grandes, e como você fala pouco com eles, é mais difícil perceber a magnitude. **E aqui vem a
  virada conceitual mais valiosa da lei:** justamente porque você não pode reagir em excesso à
  necessidade de um ou dois deles, **o foco necessário para retê-los se concentra nos fatores
  escaláveis — processo e produto.** E o produto é, de longe, a parte mais escalável do negócio.
  Derramar energia no produto e nos processos de apoio **faz crescer com muito mais eficiência do
  que atender às necessidades especiais dos maiores clientes.** Steinman chama isso de "atitude
  cultural muito positiva".
- **Tech-touch**: como você nunca conversa individualmente, a chance de descobrir que o modelo de
  negócio ou a organização do cliente mudou é baixíssima. **Três coisas ajudam:**
  1. **Pesquisas.** A melhor forma de obter feedback consistente. Perguntar se a liderança ou o
     modelo de negócio mudou provavelmente é inútil; **perguntar sobre o valor de componentes
     específicos do produto é extremamente valioso** — e transmitir isso ao time de produto permite
     adaptação rápida.
  2. **Comunidade.** Fornece insight consistente sobre o que os clientes pensam e dizem, e é
     inestimável para levantar questões e obter respostas rápidas em grandes grupos. **Retribua à
     comunidade tanto quanto recebe dela.**
  3. **Compreender a evasão.** Em B2C, por pesquisa. Em B2B, mesmo com clientes muito pequenos,
     **pode valer o dinheiro e o tempo de acompanhar e estudar um grupo seleto de clientes que
     cancelaram**, para entender o que se rompeu e como poderia ter sido evitado. **E a observação
     mais fina do capítulo:** em geral é **mais importante compreender as razões da retenção** do
     que as da evasão, porque *a evasão quase sempre é evento isolado, com razão específica* — e a
     permanência é o padrão.

E o fecho: **os high-touch podem ser a alavanca do resultado financeiro, mas os low-touch e
tech-touch são alavancas igualmente valiosas de escala e eficiência.**

> **Ancoragem Altta.** As dez causas transplantam quase inteiras se traduzidas de contrato para
> matrícula. A tradução operacional para o Academy:
>
> | Causa do livro | Versão Altta |
> |---|---|
> | Não realização do ROI | O aluno não viu resultado na clínica no prazo prometido |
> | Implantação parada | A clínica não implantou o que foi ensinado |
> | Perda do sponsor | **A dona da clínica delegou para a secretária e sumiu** — ou o contrário |
> | Baixa adoção | Parou de assistir; só um usuário ativo numa clínica com equipe |
> | Aquisição | Fechou, vendeu, virou sociedade |
> | Falta de atributos | Concorrente com currículo mais novo ou preço mais agressivo |
> | Novo líder | Sócio novo, gestor novo |
> | Má qualidade | Plataforma caindo, aula ruim, promessa não cumprida |
> | Produto errado | **Vendemos Autonomy para quem precisava de Sales** |
> | Fator humano | O acompanhamento não engrenou com aquela pessoa |
>
> A observação de Steinman sobre **percepção de valor que decai enquanto o valor real sobe** é
> especialmente perigosa em educação: o aluno aprende, o conhecimento vira dele, e **exatamente por
> isso o valor percebido do fornecedor cai.** Isso não é churn por falha — é churn por sucesso, e é
> o buraco que a seção "saída × conclusão" (§14) discute.
>
> E a virada do low-touch — **o foco vai para processo e produto, não para o cliente individual** —
> é a diretriz mais importante desta lei para a Altta, porque é exatamente o instinto contrário ao
> que uma operação de serviço desenvolve.

---

<a name="lei3"></a>
### 3ª Lei — Os clientes esperam que você os torne extremamente bem-sucedidos
*Autor: Nello Franco, VP Sênior de Customer Success, Talend*

**A tese.** O cliente não compra atributos e funções. Compra **a solução e o relacionamento** porque
quer atingir um objetivo de negócio. Logo, o valor que ele atribui à relação não é definido só pelo
produto — é definido por **tudo o mais que a empresa faz para torná-lo melhor no que ele faz**:
capacitação, marketing de conteúdo, recursos online e, em contas maiores, acesso direto a
especialistas.

**A postura que a lei prega: desafiar o cliente.** Franco alinha customer success ao *challenger
sale* — assim como vendas adotou abordagens desafiadoras, CS precisa oferecer insight novo e
questionamento. Ele invoca Ben Horowitz, num discurso de formatura em Columbia em 2015:

> *"Não há valor algum em dizer às pessoas o que elas já sabem."*

E dá o argumento moral: **num contexto em que a retenção é fundamental, desafiar não é oportunidade,
é obrigação.** Permitir que o cliente siga pelo caminho errado produz resultado desastroso — para
ele e para você.

**As três perguntas que estruturam a lei.** Para entregar sucesso extraordinário, é preciso saber
três coisas sobre o cliente, sempre:

1. **Como ele mede sucesso?** Qual é a **unidade de medida** — economia de tempo, aumento de receita,
   redução de custo, impacto financeiro decorrente de melhoria de qualidade — e **quantas unidades**
   ele precisa adicionar, poupar, remover ou reduzir para declarar vitória? Franco acrescenta uma
   pergunta que quase ninguém faz: **de que maneira a equipe do cliente é avaliada, independentemente
   da sua solução?**
2. **Ele está alcançando esse valor?** Ou, se é trabalho em andamento, está em rota realista para
   alcançar no prazo esperado?
3. **Qual tem sido a experiência dele no percurso?** Franco admite que esta é a menos mensurável das
   três, e insiste que é de extrema importância: **mesmo que o cliente atinja o objetivo, se a
   experiência foi dolorosa e exigiu mais esforço do que ele considera necessário, você aumentou
   significativamente o custo dele — tangível e intangível — e com isso aumentou a probabilidade de
   evasão.**

**O vale da desilusão e o "Valor da Fase 1".** A lei toma emprestado o **vale da desilusão** do
Gartner: se você não começar a entregar valor enquanto os executivos ainda estão entusiasmados, o
impulso se perde e a percepção despenca. Com **"pontos de prova" preliminares**, a curva da
percepção fica muito mais estável, e pode até subir.

A prescrição operacional: **predisponha o cliente para uma vitória rápida.** Defina um marco inicial
e cumpra o prazo da primeira entrega de valor. Pode ser tão simples quanto uma prova de conceito com
funcionalidade básica — **desde que forneça evidência rápida, tanto ao sponsor imediato quanto a
outros executivos, de que a decisão de adotar foi acertada.**

E os dois motivos pelos quais essa vitória precoce vale mais do que parece:
- **qualquer plano de expansão depende dos seus resultados como fornecedor** — sem prova, não há
  ampliação;
- vitórias precursoras são o que **o sponsor usa para superar obstáculos e arregimentar apoio** se
  vierem desafios técnicos, empresariais, ambientais ou políticos nas fases seguintes.

**"Ponto de partida" não é vitória.** Franco é duro sobre isso: instalar o software, criar a conta,
tornar o app fácil de usar, oferecer treinamento básico de funcionalidade — **tudo isso apenas te
inclui no jogo.** Não é o que faz vencer.

**O que faz vencer é entregar expertise em escala.** Se a empresa inova — e que empresa bem-sucedida
não inova? — ela precisa **divulgar explicitamente os benefícios da inovação e mostrar, com espírito
crítico, como o cliente deve usar aqueles recursos para ser mais eficaz.** E fazer isso de forma
escalável: não basta ter consultores caros faturando por hora; é preciso **muito conteúdo** — base
de conhecimento, melhores práticas, manuais de serviço — e meios eficientes de entregá-lo.

O exemplo que ele usa é preciso: se você vende solução de marketing digital, precisa oferecer as
ferramentas, a tecnologia, o treinamento e o conteúdo que tornem o cliente **um profissional de
marketing digital melhor** — não apenas uma forma melhor de trabalhar com e-mail.

E a peça que quase ninguém entrega: **benchmark.** Fornecer continuamente exemplos de como outros
clientes estão usando a solução para serem mais eficazes e, se houver dado agregado, **como as
principais métricas daquele cliente se comparam a empresas similares ou a médias setoriais.** A
frase que fecha o raciocínio:

> **Sem padrão de comparação e sem meta a atingir, o desempenho atual do cliente tem valor limitado.**

**"O ROI não é um conceito, é uma equação."** Franco observa que ROI recebe foco intenso durante o
ciclo de vendas e depois **vaza pelas frestas** após a implantação. A prescrição: quantifique os
resultados esperados. Reduzir churn em quanto? Identificar quantas oportunidades de upsell, de que
tamanho, com que valor total? Que aumento de produtividade se espera, e **como se mede produtividade?**
Dá para amarrar o uso de um atributo específico à escalabilidade da equipe? E então: **depois de
entender as expectativas, transforme-as em metas objetivas.**

**A ATN como instrumento, e a ATN defensiva como armadilha.** Franco defende o uso de avaliações
periódicas do negócio (trimestrais ou não) como forma de monitorar progresso contra objetivos
definidos em conjunto — e observa que **se o cliente entende que você tem interesse no negócio dele
e compartilha um objetivo comum, ele se dispõe a se engajar regularmente.**

Mas dá o diagnóstico do fracasso: já viu muitas ATNs com baixa participação **porque não havia
critério de sucesso bem definido e compreendido.** Atualização de roadmap e revisão de casos de
suporte em aberto sustentam uma ATN só até certo ponto. E a formulação que vale guardar:

> **Uma ATN que trate apenas desses tópicos é extremamente defensiva. Não há como você e o cliente
> vencerem se todos os temas da conversa são atributos que ainda não existem e atributos que não
> estão funcionando bem.**

A prática que ele recomenda: **ao fim de cada ATN, estabelecer os objetivos da próxima.**

**"O sucesso não é um destino, é uma jornada."** Mesmo que o cliente tenha definido critérios
iniciais, parte do valor que você agrega como parceiro é **ajudá-lo a definir sobre o que pensar em
seguida.** Você conhece o valor que o produto pode trazer e sabe como outros clientes o usam bem.
O exemplo que ele dá é autorreferente e bom: se o cliente usou seu produto de automação de CS para
subir a retenção de 85% para 88%, **agora você tem a oportunidade de mostrar que as melhores empresas
chegam a 90% ou mais — e como a parceria pode levá-lo lá.** Para clientes low-touch, isso se faz por
marketing de conteúdo e boas práticas online; para high-touch, é oportunidade de alinhamento
executivo e de influenciar a estratégia um do outro.

**A seção mais honesta da lei: "na teoria não há diferença entre teoria e realidade — mas na
realidade há."** Franco reconhece que tudo isso pressupõe alinhamento perfeito, e que na prática
haverá clientes que **não se sentam à mesa, não fornecem os dados-chave, são desafiantes e
antagônicos**, e têm expectativas diferentes das suas — às vezes por causa de um esforço de vendas
otimista demais. Haverá problema de produto. O suporte nem sempre será impecável. E a resposta dele:
*bem-vindo ao customer success.* Esses desafios não vão embora sozinhos — **mas os clientes são bem
capazes de ir.**

A recomendação: **ter as conversas difíceis o mais cedo possível.** E a observação sobre a natureza
delas: **conversa franca com cliente é fonte valiosa de informação, às vezes de revelação.** Por mais
que se tente imaginar como o cliente se sente, **você nunca saberá até ele dizer.**

E o argumento de que a crise é oportunidade: *o aço mais forte é o forjado nas chamas.* Quem já
atravessou uma situação difícil junto com um cliente — assumindo responsabilidade, identificando
marcos de curto prazo, cumprindo-os, reconquistando confiança — sabe que o relacionamento sai mais
forte. Franco cita um cliente que lhe disse, num jantar, que **o desafio imposto foi difícil de
processar e de aceitar, que no início eles se sentiram ofendidos porque na essência estavam sendo
informados de que estavam errados, e que isso gerou tensão** — mas que, ao perceberem que ele estava
no mesmo barco, aceitaram as ponderações, e a relação se fortaleceu.

**Sinais sutis.** Nem todo feedback vem como desafio explícito. Franco alerta que na maioria dos
casos é preciso prestar atenção a indícios sutis de risco — e que **muitas vezes eles estão mais no
que não foi dito do que no que foi.** Uma mudança de cronograma ou de prioridade pode ser o sinal.

**O fecho da lei:** o cliente não está comprando tecnologia. Está comprando **solução para um
problema, ou um percurso para melhores alternativas.** Quando você entende como ele mede sucesso,
confirma que ele está chegando lá e garante que a experiência foi positiva, você conquistou o
parceiro mais valioso: **um advogado.** E num mundo em que redes sociais aceleram opinião negativa e
positiva como fogo na mata, **advocacia não tem preço.**

**Os comentários de Steinman: o mundo de prerrogativas.**

Steinman acrescenta que vivemos num mundo em que a internet mudou tudo, mas **especialmente as
expectativas.** O exemplo: antigamente você ficava pensando em quantos Oscars Anthony Hopkins tinha
recebido e nunca descobria; hoje você tem a resposta em dois minutos — **e ainda reclama do
desempenho do IMDb ou da falta de wi-fi no restaurante.**

Uma dessas expectativas é a de que **o ônus de tornar o cliente bem-sucedido é seu, não dele.** Num
negócio por assinatura, diz Steinman, essa é a pura realidade, gostemos ou não: se não gostarmos, um
concorrente gostará. **Combatê-la só consome energia.**

Ele concede um fio de realismo: todo mundo aceita que um aplicativo de consolidar finanças e fechar
contas seja mais complicado que Yelp ou Words With Friends. **Mas o fosso está estreitando** — os
melhores softwares de negócio imitam a interface dos aplicativos de consumo, e todo mundo se
beneficia. **A barra mais alta é sempre mais difícil de saltar.**

**Impacto por camada:**
- **High-touch**: o ônus recai em grande parte sobre pessoas. **Uma pessoa** é responsável por
  compreender a definição de sucesso do ponto de vista do cliente; **uma pessoa** precisa definir
  ROI e reportá-lo; **uma pessoa** é responsável pelo treinamento necessário. Steinman observa que
  tudo isso vai sendo automatizado com o tempo, mas que hoje ainda está na descrição de cargo de
  alguém. E a frase mais crua do capítulo: **o sucesso de um cliente em geral compete muito mais a
  ele do que a nós — mas somos nós que carregamos o encargo de fazer acontecer, porque se não
  fizermos, o resultado é ruim independentemente de culpa.**
- **Low-touch**: **é aqui que esta lei é mais difícil**, e o motivo é elegante. Steinman monta as
  duas mensagens lado a lado:
  - *Low-touch*: "Nosso processo inclui todos os recursos tecnológicos — base de conhecimento,
    biblioteca de melhores práticas, vídeos de treinamento sob demanda. **Além disso, seu gerente/
    equipe de sucesso do cliente podem ser muito úteis, em bases limitadas.**"
  - *Tech-touch*: "Nosso processo inclui todos os recursos tecnológicos — base de conhecimento,
    biblioteca de melhores práticas, vídeos de treinamento sob demanda."

  E pergunta: **qual das duas é mais sujeita a mal-entendido? Qual é mais propensa a ser explorada?
  Qual gera mais expectativa falsa?** A resposta é a primeira, sempre. O cliente ouve "há pessoas
  disponíveis" e não ouve "em bases limitadas". Steinman conclui que **recurso limitado é realidade
  muito mais difícil de sustentar do que ausência de recurso.**
- **Tech-touch**: expectativas fáceis de formar, mas **a barra é alta.** Recomendações: buscar
  feedback real por pesquisa; usar mecanismos **dentro do aplicativo** (ele cita ferramentas de
  terceiros tipo WalkMe, que guiam o usuário em tempo real); **perguntar ao usuário se algo o
  confunde quando ele fica parado tempo demais numa página ou etapa**; e montar um sistema de alarme
  antecipado — se um cliente novo não atingiu certa medida de valor definida por você, disparar um
  e-mail para estimular o progresso. E o pré-requisito que ele nomeia: **isso exige mapear a jornada
  ideal do cliente e as partes de uso necessário do produto**, para saber quando e como intervir.

> **Ancoragem Altta.** Três coisas desta lei entram diretamente.
>
> **1. As três perguntas viram a ficha de entrada do aluno.** Como esta clínica mede sucesso? Qual
> é o número, e de quanto ele precisa mudar para ela declarar vitória? Isso conecta frontalmente com
> o **Current State de Keenan** (fatos, problemas, impacto, causa raiz, estado emocional) — a
> diferença é que Keenan usa isso para **vender** e Franco usa para **entregar e medir depois**.
> **É literalmente o mesmo levantamento, feito uma vez e usado duas.** Fazer duas vezes é
> desperdício; não carregar o de Keenan para dentro da entrega é a origem do buraco.
>
> **2. O "Valor da Fase 1" é a primeira vitória do Autonomy**, e ela precisa ter nome, prazo e
> critério. Isto encaixa no quadro do §8 da jurisprudência ao lado do **clímax nomeado por degrau**
> de Miller — são o mesmo mecanismo por lados diferentes: Miller diz que o guia precisa voltar para
> dizer ao herói que ele mudou; Franco diz que o valor precisa ser provado enquanto o entusiasmo
> ainda existe. **Os dois exigem que a Altta nomeie e marque um ponto de prova precoce.**
>
> **3. O benchmark é uma vantagem que a Altta tem e não usa.** Um ecossistema de educação com
> centenas de clínicas **sabe o que é normal** — ticket, taxa de retorno, ocupação de agenda. Dizer
> à clínica onde ela está em relação às similares é a coisa mais barata e mais valiosa que a
> plataforma pode entregar, e é **exatamente o que Franco diz que quase ninguém entrega.** Vira item
> de roadmap do Academy (ver §15). **Com a trava ética:** benchmark publicado tem que ser medido, não
> estimado — sinal verdadeiro amplificado entra, sinal fabricado não (crivo de Cialdini).
>
> E o alerta do low-touch é um alerta de **copy**, não de operação: **prometer "suporte limitado"
> gera mais frustração do que não prometer suporte nenhum.** Isso tem consequência direta na página
> de vendas do degrau de entrada.

---

<a name="lei4"></a>
### 4ª Lei — Monitore e gerencie implacavelmente a saúde do cliente
*Autor: Dan Steinman, Chief Customer Officer, Gainsight*

Esta é a lei central do livro, escrita pelo próprio Steinman, e é o capítulo mais operacional do
conjunto. É também a que a Altta pode implementar mais cedo.

**A analogia que sustenta tudo:** *a saúde do cliente está para customer success assim como o
pipeline está para vendas.* E o que o pipeline entrega ao VP de vendas são três coisas:

1. **prever comportamentos futuros;**
2. **prever o momento desses comportamentos;**
3. **possibilitar gestão melhor da equipe.**

Ou, em duas palavras: **previsão e gestão.** A saúde do cliente faz o mesmo para CS — é previsor
diário de renovação, upsell, evasão e risco, **e permite gerenciar a equipe sem esperar doze meses
para ver a taxa de retenção de cada GCS.**

**A metáfora médica, que não é coincidência.** Steinman diz que a palavra "saúde" foi escolhida a
sério. Se você vai ao médico e faz todos os exames, sai com um escore: temperatura e batimentos
normais; sangue sem grandes problemas, mas colesterol um pouco alto; cinco quilos de sobrepeso;
exercício apenas três vezes por mês. Dá para fazer outros exames, mas esses são os comuns para um
homem daquela idade. **Numa escala de 0 a 100, dá 84.**

E a observação prévia necessária: **antes de medir, é preciso ter uma definição de "saudável" como
termo de comparação.** Você provavelmente já tem clientes saudáveis e já sabe por quê — usam o
produto quase todo dia, inclusive os recursos avançados; ligam para o suporte com frequência
suficiente para você saber que estão usando ativamente, mas não em excesso; pagam em dia; e deram
nota alta na última pesquisa.

**Os dez componentes possíveis do escore de saúde.** Esta é a lista que a Altta vai adaptar, e ela
merece ser lida com atenção porque **vários itens são contraintuitivos:**

| # | Componente | O que observar — e a nuance |
|---|---|---|
| 1 | **Adoção do produto** | **Se você conseguir esse dado, use.** É o mais importante. Com que frequência usam? Usam os atributos mais aderentes? Quantas pessoas usam? **Os executivos também são usuários?** É usado em reunião de conselho, executiva, departamental? *"Nada lhe revelará mais sobre a saúde do cliente do que se eles usam e como usam o seu produto."* Se você não tem esse dado, **todo o resto da lista fica mais importante** |
| 2 | **Suporte ao cliente** | Frequência dos pedidos de ajuda; tempo médio de caso aberto; quantos P1 contra P2/P3. **A nuance:** bons clientes saudáveis **procuram o suporte com alguma regularidade** — silêncio total não é sinal de saúde |
| 3 | **Escores em pesquisas** | Trate a relação como relação humana: comunicação verbal e não verbal importam, mas **o que o cliente diz diretamente quando perguntado é fundamental** |
| 4 | **Engajamento no marketing** | O que acontece quando você manda um e-mail? Volta? Ele descadastra? Abre, clica, baixa anexo? **A reação em si é reveladora, qualquer que seja** |
| 5 | **Envolvimento na comunidade** | Se existe comunidade, clientes de qualquer nível de saúde passam algum tempo nela — **como eles atuam é que interessa**: fazem perguntas ou respondem? Votam em propostas dos outros? |
| 6 | **Participação no marketing** | Dão referência? Participam de estudo de caso? Falam em conferência? **Clientes saudáveis são ativos** |
| 7 | **Crescimento do contrato** | Investimento é indicador claro de lealdade. **Se depois de cinco anos o contrato é do mesmo tamanho (ou menor), o cliente provavelmente não é tão saudável** quanto outro que dobrou |
| 8 | **Autossuficiência** | Clientes que **não precisam da sua ajuda** para usar bem o produto costumam ser mais saudáveis que os que precisam de empurrão |
| 9 | **Histórico de pagamentos** | *"Clientes saudáveis, felizes e leais pagam as contas em dia. Ponto."* |
| 10 | **Relacionamento executivo** | Quão bom é o relacionamento pessoal **e até que altura ele sobe na hierarquia do cliente** |

**A instrução mínima que ele deixa**, e que vale como método: monte a sua lista, mesmo que descubra
que alguns itens são difíceis de obter ou que o cálculo é complexo demais. **Você pode até concluir
que o único item que importa é uso do produto — tudo bem**, porque é preciso começar com algo
factível e compreensível. Mas *elabore, mantenha e use a lista*, porque muitos outros aspectos da
saúde vêm à tona quando isso vira prática central.

**"Gerencie" — a parte que quase todo mundo pula.**

O teste que Steinman propõe é severo e vale para qualquer operação:

> Se a avaliação exata da saúde do cliente é indicador de lealdade e previsor de comportamento
> futuro, então **qualquer atividade da equipe de CS que não se destine a melhorar escores de saúde
> é provavelmente uma atividade a abandonar.**

Analogia: qualquer atividade da equipe de vendas que não esteja enchendo o pipeline ou movendo
oportunidades dentro dele não é bom uso de tempo.

**E o argumento decisivo pela decomposição do escore.** Este é o melhor parágrafo do livro sobre
desenho de métrica. Suponha que você só tenha um **escore total**. Como um GCS o aumentaria para um
cliente específico? *Deixando o cliente mais feliz?* — Steinman comenta: **"basta ferver o oceano,
por favor."**

Agora suponha que o escore seja **decomposto em componentes**. Um deles é adoção, medido como
percentual de licenças ativas sobre licenças compradas. O GCS olha e vê: **13 licenças ativas de
100 compradas.** De repente há ações específicas e executáveis. Se 60 usuários passarem a usar em
vez de 13, o escore total sobe muito.

> **Componente não é detalhe do escore. Componente é a alavanca. Escore agregado sem decomposição
> é diagnóstico sem tratamento.**

**"Monitore" — e por que precisa de sistema.**

Para gerenciar, é preciso monitorar. E aqui a tecnologia é essencial, não conveniente: sem algum
sistema, você se perde em planilhas e relatórios tentando extrair conclusão operacionalizável.
Steinman concede que planilha é um começo razoável — *"às vezes vale a pena sentir a dor de fazer
manualmente, para ceder à motivação de automatizar"* — mas dá o contra-alerta que é a melhor frase
do capítulo:

> **Não faz sentido automatizar algo que não passou por um mínimo de racionalização prévia. Você
> acabará cometendo os mesmos erros, com mais rapidez. É como pavimentar o caminho das vacas.**

**"Implacavelmente" — por que o advérbio está no título.**

Steinman defende o advérbio contra a acusação de ser enfeite. Se vale a pena fazer, deve ser bem
feito; e, mais forte: **se não for feito implacavelmente, talvez não valha a pena fazer.** O
raciocínio que ele oferece é o do gás no vácuo — **o trabalho diário se expande até preencher todo o
espaço disponível.** Sem nada mais a fazer, e-mail consumiria o dia inteiro, e ninguém seria
produtivo. Se fomentar lealdade é condição de viabilidade do modelo, **que outra escolha existe
senão ser implacável?**

**Os comentários de Steinman: a onda senoidal.**

Este é o acréscimo mais útil do capítulo. **A saúde do cliente não é constante e não muda de forma
linear.** É mais parecida com uma **onda senoidal** do que com qualquer progressão geométrica. Ele
usa uma comparação que os leitores brasileiros reconhecem: a saúde do cliente muda tão rápido quanto
**o tempo no Rio de Janeiro numa tarde de verão** — sol e abafado num minuto, céu carregado e
tempestade no seguinte.

O cenário que ilustra: o cliente está feliz, usando intensamente, exatamente como você projetou.
Aí você lança uma versão que altera um atributo importante e dificulta a atualização. **Ontem ele
daria a melhor referência; hoje, nem tanto. Na semana que vem provavelmente volta a bons termos —
talvez melhores** — por causa da sua resposta imediata e da ajuda que prestou.

E o motivo pelo qual entender a onda importa: **ela permite aproveitar os picos e intervir nos
vales.** Não é só um modelo descritivo — é um modelo de ação em dois tempos.

**Impacto por camada:**
- **High-touch**: aproveitar o pico e corrigir o vale exige tratamento individual — telefonema
  direto para pedir referência no bom momento, reunião marcada no mau. **Mas mesmo no high-touch dá
  para explorar processos tech-touch:** Steinman argumenta que não é má experiência, nem para o
  cliente mais premium, receber **um e-mail automático que pareça vir diretamente dele**, pedindo
  uma avaliação com link. E dá o exemplo de automação condicional que é o padrão de referência da
  lei: **disparar o pedido de avaliação apenas para clientes que ainda não avaliaram, cujo escore de
  saúde acabou de ultrapassar 85, e que não têm caso de suporte em aberto.** Depois ele liga
  pessoalmente para agradecer, ou manda um e-mail padronizado.
- **Low-touch**: é onde o JIT se aplica melhor. Por definição não há reunião regular nem ATN, o que
  obriga a **pouquíssimos pontos de contato programados, disparados no momento exato.** O exemplo
  negativo: pesquisa regular, escore abaixo da média de um cliente. Ou você intervém pessoalmente
  para entender e acompanhar por telefone, **ou limita esse tipo de intervenção apenas a quem tem
  escore de saúde abaixo de 70.** Com o tempo se desenvolve sensibilidade sobre quando intervir e o
  que esperar — a princípio de forma casuística, depois com ciência de dados, quando o volume
  permitir.
- **Tech-touch**: **como o contato tecnológico é praticamente gratuito, é fácil exagerar.** E-mail é
  ferramenta maravilhosa e altamente sujeita a abuso, e é o veículo principal dessa camada.
  Steinman oferece um mitigador com uma condição tripla: se **todo** e-mail automático parecer vir
  da equipe de customer success ou do assistente de sucesso do cliente, **e** incluir informação
  altamente personalizada, oportuna e relevante, **ele nunca será percebido como spam nem como
  excessivo.** E a trava: **é vital acompanhar taxas de abertura, cliques e prontidão dos produtos**
  para verificar até que ponto essa suposição é verdadeira e detectar tendências indo na direção
  errada.

> **Ancoragem Altta — a lei mais implementável do livro.**
>
> **O escore de saúde do aluno é uma feature de plataforma, não um relatório.** A adaptação direta
> dos dez componentes para o Academy, marcando o que já é obtenível hoje:
>
> | Componente do livro | Versão Academy | Obtenível hoje? |
> |---|---|---|
> | Adoção do produto | **Frequência de acesso, aulas concluídas, profundidade no módulo, quantos usuários por clínica** | Sim — é dado da plataforma |
> | Executivos usam? | **A dona da clínica assiste, ou só a secretária?** | Sim, e é o item mais preditivo da lista |
> | Suporte | Volume e gravidade de dúvidas abertas | Sim |
> | Pesquisas | NPS e satisfação por módulo | Sim, se instrumentado |
> | Engajamento em e-mail | Abre, clica, descadastra | Sim |
> | Comunidade | **Pergunta, responde, ou só lê?** | Só quando a comunidade existir |
> | Participação em marketing | Dá depoimento, aparece em caso | Sim — **com trava regulatória** (§7.3 da jurisprudência) |
> | Crescimento do contrato | **Subiu de degrau? Comprou o CRM?** | Sim |
> | Autossuficiência | Implanta sem pedir ajuda | Parcial |
> | Pagamento em dia | Inadimplência e atraso | Sim |
> | Relacionamento executivo | Não transplanta — não há CSM por conta | Não |
>
> **Dez dos onze itens são obteníveis com o dado que a plataforma já produz ou pode produzir sem
> obra grande.** Isso é o que torna esta lei a de melhor relação custo-benefício do livro para a
> Altta.
>
> **Duas ressalvas críticas na adaptação, e as duas são armadilhas reais:**
>
> 1. **"Autossuficiência = saudável" é verdade em SaaS e falso em educação por degraus.** O aluno
>    que não precisa mais de você não é necessariamente saudável — ele pode ser um aluno que
>    **concluiu**. Ver §14.
> 2. **"Suporte com alguma regularidade = saudável" transplanta bem**, e é contraintuitivo o
>    bastante para valer registro: a Altta vai instintivamente tratar aluno silencioso como aluno
>    sem problema. **É o contrário.**
>
> E o alerta de sequência é o mais importante de todos: **não automatizar antes de racionalizar.**
> O caminho das vacas pavimentado é exatamente o risco de construir um painel de saúde antes de
> saber o que é um aluno saudável na Altta — e isso só se sabe olhando as coortes que já existem.

---

<a name="lei5"></a>
### 5ª Lei — Não é mais possível construir lealdade com relacionamentos pessoais
*Autor: Bernie Kassar, VP Sênior de Customer Success e Serviços, Mixpanel*

Conceitualmente, esta é a lei mais importante do livro para a Altta — e é escrita de forma difusa,
o que obriga a extrair o argumento por baixo da prosa.

**A tese.** A maior parte da base de clientes **precisa ser servida por vias tecnológicas**,
reduzindo a dependência de métodos humanos e intensivos em capital para construir relacionamento.
Essa maioria é composta de clientes de menor gasto anual — que **importam para o crescimento total
da empresa.** Isso não elimina o relacionamento pessoal; obriga a **programas diferentes por
segmento**, sem quebrar o vínculo que produz lealdade.

**O que mudou historicamente.** Kassar reconstrói: nos tempos do software empresarial, **todo
relacionamento com cliente era pessoal e personalizado.** Não havia campanha de e-mail, comunidade
ou webinar. Cultivava-se relacionamento pessoal, e era **o relacionamento — construído pelo
vendedor ou pelo gerente de conta — que mantinha o cliente leal.** Ele faz a ressalva justa: nenhum
fornecedor sobrevive muito tempo se o produto não cumprir o prometido. Mas era o lado pessoal que
gerava referência e recompra.

O SaaS quebrou essa equação ao **expandir o mercado** para clientes que não podiam pagar um milhão
por ano mas podiam pagar quarenta e cinco mil. E depois os preços caíram tanto que, em produtos B2B
de alto volume e em todos os B2C, **o custo de aquisição virou baixíssimo, muitas vezes gratuito
como ponto de partida** — cinco gigas de Dropbox, por exemplo.

E a conclusão que dá nome à lei: **a oportunidade de construir lealdade por relacionamento pessoal
não existe mais**, exceto para empresas de preço muito alto ou para a camada superior de clientes
das demais.

**A afirmação que carrega a lei inteira**, e que vale citar porque é o argumento que a Altta vai
usar:

> **Os clientes serão leais por causa do valor que extraem do produto, não do relacionamento que
> possam ter com alguém na organização.**

E a formulação final: **você precisa aprender a vencer construindo valor, não relacionamentos.**

**Os seis princípios operacionais.** Kassar organiza a execução em seis passos:

**1. Segmente os clientes pela métrica mais eficaz para o negócio.** A maioria dos negócios de
receita recorrente segmenta B2B por RRA ou critério equivalente. O objetivo não é rotular: é
**observar como cada fatia se comporta.** O exemplo que ele dá é bom porque não é o esperado: você
pode descobrir que **os clientes maiores renovam com mais frequência depois de atingir certo marco,
enquanto os menores cancelam a taxas mais altas — mas que os menores, se você os tornar
bem-sucedidos mais cedo, têm propensão maior a comprar mais soluções ou licenças.**

**2. Defina um modelo de cobertura a partir da segmentação.** Não existe tamanho único, e o modelo
evolui com a maturidade da empresa. Numa startup inicial, a equipe de CS usa muitos chapéus —
recepção, treinamento, suporte, renovação. Com o amadurecimento, surgem unidades específicas.

O método que ele propõe para dimensionar: **descobrir onde está o princípio de Pareto na sua base,
analisando de onde vêm 80% da receita.** A partir daí se decide quantas contas ficam com GCS e
programa high-touch, e quantas vão para low-touch.

E os números de referência, que valem porque são as únicas razões de conta publicadas no livro:

| Camada | Contas por GCS |
|---|---|
| **High-touch** | **5 a 15** |
| **Low-touch** | **20 a 50, ou muito mais** |

Com a ressalva explícita de que isso varia muito, e que a diretriz de high-touch pressupõe soluções
complexas, multidepartamentais, com **RRA de US$ 500.000 ou mais.**

**3. Crie categorias de interação conforme o modelo de cobertura.** O foco se desloca do
relacionamento individual para o coletivo. As diretrizes:

| Camada | Interações |
|---|---|
| **High-touch** | Várias reuniões pessoais por trimestre; ATNs; **desenvolvimento de esboço de plano de sucesso**; reuniões individuais com a equipe executiva |
| **Low-touch** | Uma reunião pessoal por trimestre ou conforme necessidade; **ao menos uma reunião de alto valor por mês, online ou por vídeo**; reunião individual com a equipe executiva |
| **Tech-touch** | Reuniões coletivas em formato de **webinar sobre adoção do produto**; newsletters mensais ou trimestrais; **campanhas de e-mail disparadas por dado**; treinamento e orientação sob demanda; **portal comunitário** |

E a flexibilização importante: **é perfeitamente possível ter um modelo high-touch que não comporte
reunião presencial nem interação executiva individual.** Se você vende para PMEs, pode fazer
**interação de um executivo com muitos clientes** — por exemplo, mesas-redondas executivas por
região. O que importa é ter **interações diferenciadas por categoria que a base considere relevantes**
e o nível certo de atenção em cada uma.

**4. Estabeleça o ritmo.** A meta que ele propõe: **interagir com todo cliente pelo menos uma vez
por mês** via **estratégia de macrocomunicações** — newsletters sobre empresa e produto, grupos de
usuários regionais, conferências anuais. O conteúdo pode variar por segmento, **mas o meio de
entrega é o mesmo para todos.** Definida a macrocomunicação do ano, o líder e os GCSs constroem em
cima dela as camadas de interação por nível de contato. **Ter o calendário anual de
macrocomunicações pronto torna muito mais fácil programar o resto.**

**5. Ajude os clientes a se conectarem — construa comunidade.** Kassar dá o argumento que a
biblioteca da Altta ainda não tinha por escrito: **isso vai acontecer com ou sem a sua
participação**, então a melhor opção é facilitar. Pode ser portal, ou reuniões high-touch tipo
grupos de usuários, eventos informais e conferências patrocinadas pela empresa ou por um ecossistema
de parceiros.

E o argumento econômico: **os clientes são o melhor veículo de marketing e a melhor fonte de leads.**
Você pode alardear as virtudes da empresa até ficar sem voz; **quando são eles que falam, viram
agentes de sucesso da empresa e convertem mais gente, mais rápido, falando do próprio sucesso.**
Esses agentes ajudam outros clientes a ficarem mais fortes enquanto divulgam a proposta de valor.
Kassar chega a dizer que **esse papel dos clientes é tão ou mais valioso que o dos GCSs.**

E admite o beco sem saída: **você precisa de uma empresa que invista em CS e/ou de GCSs capazes de
criar essa categoria de agentes.** A comunidade não se autogera do nada.

**6. Gere um loop de feedback.** Por pesquisa, caixa de sugestão eletrônica, grupos de foco,
reuniões individuais ou conselhos consultivos. O ponto: **os clientes precisam de meios para
manifestar opinião** sobre estratégia de produto, qualidade, suporte, capacitação e visão da
empresa. E a formulação que fecha: são os clientes que abastecem o crescimento e geram a receita —
*parece justo convidá-los para sentar à mesa, e as empresas SaaS mais bem-sucedidas com frequência
lhes oferecem a cabeceira.*

**Os três princípios de comunicação** que a lei destila no fim: **comunique-se com frequência,
estabeleça expectativas claras, e seja tão transparente quanto possível.**

**Os comentários de Steinman por camada:**
- **High-touch**: **esta lei praticamente não se aplica.** Por definição há relacionamento contínuo,
  e a situação não é muito diferente da era do software empresarial — foi por isso que gerentes de
  conta dos anos 1990 migraram com facilidade para GCS high-touch nos anos 2000. **Mas**: quase tudo
  que se aprende em tech-touch pode ser aplicado aqui, e não há nada de errado em automatizar
  algumas interações **para que os momentos de individualidade sejam dedicados às conversas mais
  estratégicas.**
- **Low-touch**: **é onde a lei começa a valer.** O modelo JIT existe justamente para promover
  sucesso com o mínimo de interação pessoal. O cliente pode até ter um GCS e saber o nome dele, mas
  **o relacionamento como indutor de lealdade será tênue na melhor das hipóteses**, dada a
  quantidade de contas e a necessidade de automatizar os pontos de contato.
- **Tech-touch**: **é o caso típico que justifica a lei existir.** Quando o cliente não paga o
  suficiente para justificar qualquer contato individual, **a lealdade tem que ser construída por
  outros meios** — e-mails, webinars, comunidades, grupos de usuários, eventos.

> **Ancoragem Altta — e esta é a lei que produz uma colisão nova na biblioteca.**
>
> **A Altta é o negócio que esta lei descreve.** Não haverá GCS por aluno. Não haverá reunião
> trimestral com dono de clínica pagando mensalidade de degrau de entrada. **A lealdade tem que vir
> do valor entregue pelo produto e pela comunidade, não do vínculo com uma pessoa.**
>
> **A colisão: Gitomer × Steinman/Kassar.** *A Bíblia de Vendas* afirma que **amizade é estratégia
> comercial** e que mais de 50% das vendas acontecem por relacionamento — *"se você faz uma venda
> ganha comissão, se faz um amigo ganha uma fortuna"* —, e trata o relacionamento pessoal como a
> base da lealdade. A 5ª Lei diz, no título, **exatamente o contrário.**
>
> **Veredito proposto, por camada, no mesmo padrão do precedente 2.2 (Miller × Klaff):**
> **Vence Steinman no degrau de entrada e em toda a base de volume; Gitomer sobrevive nos degraus
> 3 e 4**, onde há poucos clientes, ticket alto e implementação pontual — que é literalmente o
> high-touch do livro, e a única camada em que a 5ª Lei admite não se aplicar. **Aplicar Gitomer no
> Autonomy é o erro estrutural que a Altta pode cometer aqui**, porque produz uma promessa de
> proximidade que não escala e que gera exatamente a expectativa falsa que Steinman descreve no
> comentário low-touch da 3ª Lei.
>
> Motivo do veredito: Gitomer escreve para o vendedor individual com carteira pequena, tem **zero
> evidência em 294 páginas** (§5 da jurisprudência) e é declaradamente anti-estrutura; Kassar
> escreve para operação de volume e o argumento dele é aritmético, não doutrinário. E há um
> desempate independente: **Ross já colide com Gitomer no mesmo eixo** (arquitetura de funções
> contra "cotas atrapalham o relacionamento"), o que faz de Steinman o segundo caminho contra a
> mesma posição.
>
> **E a comunidade ganha fundamento.** O Academy tem visão declarada de longo prazo de virar
> comunidade, não só LMS. Esta lei é a primeira fonte da biblioteca a explicar **por que isso é
> economicamente necessário e não apenas desejável**: num negócio tech-touch, **a comunidade é o
> substituto escalável do relacionamento pessoal.** Isso muda a linha "Comunidade e pertencimento"
> da Tabela 1, que até aqui tinha como única fonte meio capítulo de Weinberg.

---

<a name="lei6"></a>
### 6ª Lei — O produto é o seu único diferencial escalável
*Autora: Kirsten Maas Helvey, VP Sênior de Client Success, Cornerstone*

**A tese.** A chave para retenção, satisfação e escala das áreas de apoio é **um produto bem
projetado combinado com a melhor experiência possível.** A tecnologia de consumo mudou como
trabalhamos e, com isso, **o que os clientes esperam.**

**O diagnóstico que abre o capítulo.** Helvey descreve a rotina real de um GCS: doze horas por dia
captando todas as questões sob o sol, de clientes e de colegas internos, **inclusive as que não têm
nada a ver com a função.** Mesmo quando conversa com cliente feliz, o objetivo é reforçar valor,
levar a experimentar um recurso novo, encorajar mais gente a usar, medir ROI. As três prioridades do
GCS:

- impulsionar adoção e valor;
- **combater as causas básicas da insatisfação**, resolvendo problemas ao longo do ciclo de vida e
  acionando as funções de apoio;
- empenhar-se para que o produto seja o melhor da classe.

**E o diagnóstico central, dito sem rodeio:**

> **Normalmente, a causa básica da insatisfação do cliente é o produto. Em termos simples: quanto
> mais difícil for o seu produto, mais difícil será o sucesso do cliente.**

**A estrutura de engajamento do cliente.** A recomendação organizacional: constituir uma **equipe de
experiência do cliente** que desenvolva programas dentro de uma estrutura de engajamento, com três
objetivos — **impulsionar o espírito de comunidade entre os clientes, estimular envolvimento em
todos os níveis e funções da base, e gerar loops de feedback claros capazes de aprimorar o produto.**
Cada programa com objetivos e métricas próprios. E um benefício lateral: **a estrutura mostra ao
cliente que existe uma maneira organizada de gerir o sucesso dele.**

As métricas-chave que ela nomeia: **satisfação do cliente, NPS e escore de nível de esforço do
cliente** (*customer effort score*) — este último é a única aparição do conceito no livro e vale
registro, porque mede quanto trabalho o cliente teve, não quanto ele gostou.

**As prescrições de design de produto:**

- **Torne o produto intuitivo.** O teste: *se as conversas com clientes são sempre sobre
  funcionalidade e sobre como usar os atributos, você está perdendo a chance de fazer atividades que
  agregam valor.* E a consequência: se o usuário perde muito tempo descobrindo como usar, **o
  produto fica menos aderente e as pessoas não vão querer usá-lo.**
- **Siga os padrões dos aplicativos do cotidiano.** Busca, resultados, navegação — as pessoas dão
  como certo que encontram qualquer coisa sem esforço. Ofereça funcionalidade rica em informação
  para que encontrem o que procuram **quando, onde e da maneira habitual.**
- **Ferramentas de autodiagnóstico.** As pessoas querem enfrentar o problema e achar a solução
  sozinhas quando ele aparece. Construa o meio de elas se ajudarem e oriente sobre o que fazer.
- **Multi-dispositivo.** Ninguém está mais preso a uma mesa; o produto precisa dar acesso rápido a
  informação e execução fácil de atividade em celular, tablet ou até relógio.

**Os dois fóruns estruturados: CCPs e CdPs.**

**Conselho Consultivo de Produtos (CCP)** — plataforma interativa estruturada onde clientes se
engajam com a gestão de produto, dão feedback e influenciam o roadmap. **Deve ser liderado pela
equipe de gestão de produtos.** O foco:

- ajudar a definir visão e estratégia de produto, compreendendo os problemas de negócio reais que os
  clientes enfrentam agora **e poderão enfrentar no futuro**;
- discutir como os clientes veem a forma como o produto ataca esses problemas;
- considerar tendências de mercado e tecnologia **do ponto de vista do cliente**;
- ajudar na priorização funcional em nível estratégico.

As **atribuições do membro** que ela lista: participar ativamente focando em vetores estratégicos;
**atuar em nome dos pares e da base mais ampla** (não só do próprio interesse); manter conhecimento
alto dos roadmaps atual e futuro; engajar-se no desenvolvimento e na apresentação de projetos; e
**participar de programas de referência**, falando positivamente com clientes atuais ou potenciais
quando solicitado.

E os **critérios de seleção**, que são surpreendentemente formais e por isso úteis: líder sênior ou
participação em nível executivo; **preenchimento de formulário de inscrição**; compromisso de
participação ativa por um ano; compromisso com **cinco reuniões anuais** — três trimestrais de
avaliação e priorização, mais duas de priorização de pedidos de atributos; **proibição de delegar**
a avaliação trimestral de roadmap e as priorizações; e participação em programas de referência.

**Comunidades de Prática (CdPs)** — operam de forma parecida, mas servem como fórum para discutir
**processos, práticas e desafios de negócio** referentes a produtos específicos. São **colaborativas
entre pares**, reunindo clientes de setores variados, e tendem a ser **grupos maiores** que os CCPs.

**A prática de fechamento do loop**, que é o item mais negligenciado: **enviar comunicação
trimestral compartilhando os pedidos de mudança formulados pelos clientes e as melhorias feitas na
organização e nos processos em resposta ao feedback.** É isso que dá credibilidade à voz do cliente
— sem devolutiva, o conselho vira teatro.

**Feedback interno também.** Helvey estende a mesma estrutura aos funcionários, sobretudo os de
linha de frente que são usuários reais do produto: **use a mesma estrutura usada com clientes**, com
canais claros para propor e discutir aprimoramentos. Inputs de vendas, implantação e suporte dão
visão holística do que funciona e do que não funciona.

E uma ideia específica e barata: **coletar feedback dos funcionários novos sobre produtos e
processos**, como componente formal do onboarding interno — porque é a única janela em que alguém
olha o produto com olhos não viciados.

**Os comentários de Steinman: o experimento mental do produto perfeito.**

Steinman propõe o exercício que dá nome à lei. **Se você fizesse um produto perfeito — perfeito
mesmo, sob todos os aspectos —, quantas pessoas na sua empresa se tornariam desnecessárias?** Numa
empresa típica, dá para eliminar:

- suprimento;
- implantação;
- treinamento;
- suporte ao cliente;
- **customer success;**
- operações;
- a maior parte de professional services;
- renovações.

Ou seja: **você nem teria o conceito de pós-venda.** A única coisa que aconteceria depois da venda
seriam milhões de clientes usando, amando e contando aos outros.

O mundo B2C vive isso o tempo todo. **Ninguém é incumbido de ajudar você a instalar o Facebook nem
de segurar sua mão na primeira busca do Google** — porque os produtos são elegantes, simples,
intuitivos, cativantes e oferecem valor enorme. Ele registra a ressalva de que Google e Facebook se
beneficiaram de a maioria dos usuários ter conhecido o produto no computador antes do celular, e que
**para empresas cujo primeiro ou único canal é o dispositivo móvel, o desafio é significativamente
maior.**

**A regra econômica que sustenta a lei:** *"Faça uma vez, entregue muitas vezes"* é a receita do
lucro. O produto é a única parte genuinamente escalável — você o constrói uma vez para ser usado
milhões de vezes.

E a tese de identidade: empresas maduras criam identidade além da cultura — Apple é produto elegante,
Zappos é experiência e suporte, Walmart é valor e conveniência. Mas o sucesso de todas se resume a
**criar o melhor produto do seu mercado.** Steinman levanta o problema do ovo e da galinha — a Zappos
domina por causa do suporte, ou o suporte é parte do produto dela? — e diz que, para o argumento,
**não importa.** A conclusão: *o fornecedor dominante em praticamente qualquer mercado é o que
desenvolve o melhor produto*, e **quanto mais um fornecedor convencer o mercado de que o melhor
produto não é só o que se toca e usa, mas também todos os serviços e o suporte que o cercam, mais
poderoso ele será.**

E o veredito final: **qualquer tentativa de aderir ao movimento de customer success sem tornar o
produto a prioridade máxima será infrutífera no longo prazo.**

**Impacto por camada:**
- **High-touch**: a chave é **comunicação entre CS e produto.** Os GCSs estão na linha de frente e
  sabem mais que qualquer um sobre como o produto está sendo ou pode ser usado — Steinman propõe
  pensar neles como **gerentes de produto de campo.** Mas esse conhecimento só se realiza se for
  transferido, e **isso exige processo, não boa vontade**: se você gerencia 40 GCSs e lhes diz que
  produto é prioridade máxima enquanto eles passam doze horas por dia apagando incêndio, é melhor
  criar um processo que facilite o compartilhamento. Começar com uma reunião mensal entre CS e
  produto para compartilhar histórias de cliente é pouco escalável, **mas é um bom ponto de
  partida — e parte do propósito desse grupo pode ser desenvolver um processo escalável.** A
  instrução mais fina: **capte problemas de negócio, não pedidos de atributo.** E, mais importante
  ainda, **os problemas que o cliente gostaria que o produto resolvesse no futuro** — é isso que
  produz salto, e não mudança incremental.
- **Low-touch**: é preciso criar processos escaláveis para o cliente comunicar necessidade e
  frustração **diretamente à gestão de produto.** Comunidades ou fóruns com votação e curtir/não
  curtir funcionam bem, se houver participação suficiente e clareza sobre o que está sendo avaliado.
  CCPs e Conselhos Consultivos de Clientes escolhidos a dedo são extremamente valiosos **se forem
  representativos**, e o alerta é direto: **não convide só clientes grandes para o conselho se 70%
  do negócio vem de PMEs.** Pode fazer sentido ter dois conselhos distintos quando os mercados e os
  usos são muito diferentes. E a regra que fecha: **quanto mais low-touch o modelo, mais importante
  é acertar no produto** — porque você não vai ter exército de gente cobrindo deficiência de produto.
- **Tech-touch**: tudo movido a tecnologia, mas isso **não impede** conversar com clientes e obter
  feedback direto por grupos de usuários e grupos de foco. Os veículos principais serão coletivos —
  comunidades, fóruns, pesquisas. **Mas, pelo volume, o feedback mais proveitoso virá do próprio
  produto:** os componentes mais usados são reveladores; os lugares onde se passa mais tempo são
  importantes, positiva ou negativamente. Dá para embutir mecanismos de feedback limitado que
  coletam dado durante o uso. E a vantagem estrutural: **volume torna experimentação fácil e
  valiosa** — não é difícil acrescentar um atributo experimental por um dia e observar reação, coisa
  que Amazon, eBay e Match.com fazem diariamente.

> **Ancoragem Altta.** Esta lei tem duas consequências, uma óbvia e uma que é o achado do capítulo.
>
> **A óbvia:** o Academy não é acessório da entrega, é **a** entrega. "O produto é o único
> diferencial escalável" numa empresa de educação significa que **currículo e plataforma são o
> produto**, e que investir neles é investir em retenção — não em conveniência. E como a Altta é
> low-touch/tech-touch, a regra de Steinman se aplica no grau máximo: **quanto mais baixo o modelo
> de contato, mais o produto tem que carregar sozinho.**
>
> **O achado:** os **CCPs e CdPs são a estrutura formal de comunidade que faltava.** A Altta tem
> visão de comunidade no Academy e nenhuma fonte sobre como operá-la além de meio capítulo de
> Weinberg (padrão de qualidade antes da escala, o erro do Meta admitido por Atwood). Helvey dá o
> desenho institucional: **conselho pequeno com critério de seleção, compromisso anual declarado,
> cinco reuniões, proibição de delegar, devolutiva trimestral obrigatória** — e ao lado dele um
> fórum aberto entre pares. **É adaptável ao Academy quase literalmente**, com um ganho lateral que
> Weinberg não oferece: o conselho é, ao mesmo tempo, fonte de roadmap, fonte de depoimento e
> mecanismo de retenção dos próprios membros (compromisso e coerência, no sentido de Cialdini — o
> membro que se compromete publicamente por um ano fica).
>
> **A trava:** membro de conselho consultivo que também é usado como referência comercial atravessa
> a fronteira B2B → paciente? **Não, enquanto o depoimento for sobre o negócio da clínica.** Vira
> problema no instante em que vira depoimento sobre procedimento. Já está registrado no §7.3 da
> jurisprudência e não é reaberto aqui.

---

<a name="lei7"></a>
### 7ª Lei — Melhore obsessivamente o time-to-value
*Autora: Diane Gordon, Chief Customer Officer, Brainshark*

**A tese.** Consumidores e empresas compram porque acham que estão adquirindo valor. **A diferença
está na velocidade em que a expectativa se confirma.** Num restaurante caro, você sabe em minutos se
foi ótimo ou não, e decide ali se volta. Em venda B2B, é difícil apreciar o valor logo depois da
experiência — **mas o comprador ainda espera obter valor em prazo razoável.** Em SaaS ou assinatura,
esse prazo é **a duração da assinatura.** Se o cliente ainda não percebeu valor real quando chega a
renovação, é pouco provável que ele renove.

**O exemplo extremo que ela usa** para fixar o conceito: se o cliente leva **11 meses** para
aproveitar o produto integralmente e o contrato é de **12 meses**, as chances de renovação são
melhores ou piores do que se ele tivesse obtido valor em **60 dias**? A resposta é óbvia, e o ponto
também: **há correlação direta entre prazo de recebimento de valor e probabilidade de renovação.**
E se o negócio for pay-as-you-go, com cobrança mensal, **a situação é ainda mais grave.**

Ela nota o cenário mais perigoso: se você implanta software empresarial por assinatura, **só o
processo de recepção pode levar meses**, deixando poucos meses para instalar, usar e finalmente
demonstrar valor — com a renovação anual já batendo à porta.

**Os três segredos.** Gordon organiza a lei em três movimentos:

1. **Trabalhe com o cliente para estabelecer medidas de sucesso concretas.**
2. **Implante iterativamente para extrair valor cedo**, atingindo primeiro a medida mais simples e
   depois focando nas seguintes.
3. **Adapte-se em tempo real**, agindo no momento exato em que perceber que o valor esperado está em
   risco.

**1. Estabeleça métricas concretas — e faça isso enquanto ainda tem a atenção do sponsor.**

O argumento de timing é o melhor da lei: **trabalhe com o patrocinador do negócio para definir as
métricas cedo**, porque ele provavelmente estará **menos envolvido nas táticas da instalação**.
Tentar obter a atenção dele mais tarde, depois que ele partiu para outras iniciativas, é muito mais
difícil. **A janela em que o sponsor está focado é durante o processo de vendas — use-a.**

Ela reconhece o cenário comum: com sorte, o cliente dá uma resposta concreta do tipo *"queremos
reduzir à metade o tempo de onboarding de um representante novo"*. Muito mais frequentemente,
**mesmo tendo citado indutores importantes, o cliente ainda não tem medida específica em mente — e,
se tem, não sabe qual é a linha de base atual.** Nesse caso, em vez de pedir que ele defina do zero
(o que demora, sobretudo em organização complexa), **ofereça uma lista de medidas que outros
clientes costumam usar.**

A lista que ela publica, do contexto de capacitação de vendas da Brainshark:

- redução do tempo para alcançar a meta;
- aumento do número de representantes que atingem a meta;
- aumento da conversão de leads de marketing;
- aumento do tamanho dos negócios ou da receita;
- aumento do percentual de representantes que usam ativamente o CRM;
- **aumento do tempo que os representantes passam vendendo em vez de procurando conteúdo;**
- redução do tempo de onboarding dos representantes;
- redução do tempo para fechar o primeiro negócio;
- redução do tempo que os gerentes gastam com coaching;
- **aumento da competência dos representantes com o material;**
- **aumento do número de representantes que completam integralmente o roteiro de onboarding;**
- aumento do número de visualizações.

E a exigência que acompanha: **peça ao cliente para escolher algumas dessas medidas, confirmando que
ele tem valores de partida para as que escolher.** Sem linha de base, a métrica é decorativa.

**A passagem de bastão.** O processo que ela descreve funciona assim: **a equipe de pré-vendas
documenta as métricas de sucesso e as entrega à equipe de recepção** no começo da implantação. Então,
na reunião de partida, **o engenheiro de pré-vendas valida as métricas com o cliente** — *"no ciclo
de vendas você disse que reduzir o tempo de onboarding era um indutor importante. Isso ainda é
verdade? Se for, quanto tempo dura hoje?"*

E a trava mais dura da lei inteira:

> **Exclusivamente depois da definição clara dessas métricas de sucesso é que damos a partida no
> onboarding.** Do contrário, o programa pode se arrastar por meses — ou, pior, ser totalmente
> instalado — sem o cliente ter como conferir se está extraindo algum valor.

E o efeito composto: se você faz ATNs ou avaliações regulares, dá para revisitar esses critérios com
frequência, **para determinar se ainda são as métricas certas e para validar o sucesso contra elas.**
Ela observa que muitos clientes hesitam em usar ROI puro depois, mesmo tendo sido rigorosos durante
a venda — e alerta: **o ROI voltará a te morder quando menos esperar, se você não ajudar o cliente a
medi-lo.**

**2. Implante iterativamente — não tente ferver o oceano.**

A prescrição: comece pelos critérios mais fáceis. Se o cliente comprou uma solução de produtividade
de vendas com três medidas — reduzir tempo de onboarding, engajar prospects melhor, aumentar o
percentual de representantes que batem meta —, tudo é factível, **mas ele percebe valor mais rápido
se começar pela medida mais importante.** Fase I: prazos de treinamento e recepção. Fase II:
engajamento de prospects.

Outras formas de antecipar valor que ela lista: **limitar-se de início a grupos específicos,
divisões ou regiões geográficas**; ou focar em uma ou duas iniciativas específicas, ou em linhas de
produto, **em vez de envolver toda a população de usuários de uma vez.**

**E confirme sempre.** Não presuma que, porque o sponsor definiu métricas durante a venda e a equipe
de projeto validou, elas continuam relevantes. Duas práticas concretas:

- **liste as métricas no alto de todo relatório de status** e chame atenção para elas em toda
  verificação — *"só para confirmar: essas ainda são as métricas que importam nesta fase, certo?"*;
- **procure diretamente o sponsor em vários momentos** do onboarding para revalidá-las.

**3. Adapte-se em tempo real — e a transição que quase todo mundo erra.**

Perto do fim do onboarding, **traga o GCS para as reuniões de status do projeto** e instrua-o sobre
os critérios de sucesso escolhidos. E a hierarquia de prioridade que ela estabelece, sem
ambiguidade:

> **A mais alta prioridade do GCS nas semanas e meses seguintes ao onboarding é ser obsessivo para
> garantir que o cliente alcance o valor prometido. Todas as outras atividades tradicionais de
> customer success — apresentar recursos novos, fazer ATNs — tornam-se secundárias.**

E o diagnóstico do porquê, que é a melhor observação da lei: **ao concluir o onboarding, a equipe do
cliente perde o foco**, porque cada um volta às atividades do dia a dia. Quando isso acontece,
**assume-se que o cliente não continuará tão interessado em obter valor quanto você em entregá-lo.**
O GCS é responsável por reportar progresso ao cliente **e** à equipe ampla de gestão de contas, e por
mobilizar recursos rápido se o cronograma de geração de valor estiver em dificuldade.

**O argumento do upsell.** Gordon reenquadra: chamamos de upsell, mas **do ponto de vista do cliente
ele está apenas ampliando o valor do investimento.** E a trava: **nenhum cliente compra mais licenças
ou mais módulos se ainda não está extraindo valor de negócio do que já tem.** Logo, acelerar o
time-to-value é pré-condição de expansão, não consequência dela.

**A conta que ela propõe** para dimensionar o ganho, e que é o cálculo mais reaproveitável da lei:
para avaliar a magnitude de reduzir o time-to-value em 30 dias, **multiplique 30 pelo número de
clientes da empresa.** O resultado é **o número de dias de venda adicionais** que você passa a ter,
só por ter antecipado o valor para a próxima leva de clientes. Se 30 parecer otimista, **use 5 como
multiplicador** — e pergunte o que uma boa equipe de vendas faria com esse tanto de dias a mais.

**Os comentários de Steinman: por que "obsessivamente".**

Steinman defende o advérbio com a comparação de vendas. **Grandes vendedores são obcecados por
fechar**, e é parte do que os torna grandes. Voltando para casa numa sexta à tarde, curtindo o fim de
semana que começa, o telefone toca com um prospect — **eles atendem.** Porque sabem que todo dia num
ciclo de vendas é fundamental, e que **só existe um dia bom para fechar qualquer negócio: hoje.**
Qualquer vendedor com estrada conta a história do grande negócio que estava quase fechado numa
quarta e desandou na quinta por especulação sobre queda de lucro, demissão em massa ou mudança
organizacional.

E o contraste: antes do SaaS, **a mentalidade de pós-venda não tinha esse senso de urgência.** Num
ciclo de implantação de seis meses, quanto um dia realmente importa? **O problema dessa lógica é que,
se um dia não importa, dois também não — e aí começa a espiral da morte.** A natureza da assinatura,
com a renovação sempre à espreita, muda drasticamente a urgência.

**A escala do time-to-value varia brutalmente.** Em software empresarial, mede-se em meses. Em
e-commerce ou B2C, **em horas ou minutos.** Steinman conta que ao baixar o app do GoToMeeting
esperava que o processo inteiro levasse menos de cinco minutos. E pergunta: **de onde viria a
urgência de reduzir de cinco para quatro, e depois para três?** De dois lugares: **do usuário final
e do WebEx.** Se você não é obcecado por time-to-value, provavelmente seus concorrentes são, e isso
os diferencia. **A afirmação vale ainda mais em mercados em comoditização** — quando os produtos se
parecem, tudo o mais importa muito mais: preço, time-to-value, suporte e experiência total.

**Impacto por camada:**
- **High-touch**: high-touch em geral significa alto valor, o que costuma significar alta
  complexidade — então boa parte da conversa é sobre cortar dias ou semanas da implantação. **Mas
  Steinman insiste na distinção que dá título à lei: não é *time-to-implementation*, é
  *time-to-value*.** Projeto concluído quase nunca é igual a valor recebido: é um passo enorme, mas
  há sempre mais trabalho. **É aqui que o GCS começa a se pagar** — com a solução funcionando, ele
  engaja o cliente em usá-la para resolver o problema que motivou a compra.

  E o desafio de medição, que é real: **é fácil medir duração de projeto** (há data de início e data
  de fim; se a média é 97 dias, dá para mirar 89 no próximo trimestre e 83 no seguinte). **"Valor"
  não é concreto assim** — provavelmente é preciso adotar uma aproximação. Duas formas: identificar
  os componentes mais valiosos do produto e medir quanto cada cliente os usa; ou perguntar
  diretamente — *"todos os gerentes de departamento já usaram o produto para lançar os números do
  orçamento do ano que vem?"* Se a resposta é sim e foi para isso que compraram, **o ponto de criação
  de valor foi atingido.** Alternativa: usar o próprio escore de saúde como proxy de valor.
- **Low-touch**: e aqui vem a observação mais valiosa da lei para a Altta. **Em muitas empresas o
  low-touch exerce mais pressão sobre o time-to-value do que o high-touch**, e por quatro razões
  acumuladas: é uma camada de clientes, não o foco da empresa inteira; eles compram e instalam **os
  mesmos produtos** dos high-touch; fazem negócios menores; **não têm equipes tão qualificadas para
  concluir o projeto**; e pagam menos pela parcela de serviços. E ainda por cima, **as expectativas
  deles muitas vezes são mais altas** — *"somos uma empresa pequena comparada a alguns dos seus
  clientes; por que isso está demorando tanto?"*

  **A solução: ser muito mais rigoroso e prescritivo com essa camada.** Definir cada passo da
  implantação, o que você faz e o que espera do cliente. **O projeto termina na conclusão do Passo
  8.** E a mesma minúcia no CS: reunião de transição, sessão de treinamento de 60 minutos, follow-up
  de 30 minutos duas semanas depois, e daí verificações trimestrais de saúde — com muitos contatos
  automatizados de conteúdo valioso no meio, no momento certo (o JIT de novo).

  Steinman admite os riscos com honestidade: essa não é a forma de lidar com high-touch, há risco
  real, **mas por definição você não pode dedicar o mesmo tempo aos dois tipos, então não há
  escolha.** E a consequência que precisa ser explicitada em toda a empresa: **as chances de perder
  esses clientes são mais altas, e não é viável esperar o mesmo resultado de retenção com menos
  tempo e atenção.** Por tudo isso, **a automação vira imperativa — nem que seja só para prever a
  evasão com mais exatidão.**
- **Tech-touch**: time-to-value importa igualmente, e **a complexidade do produto é o fator
  limitante.** É praticamente impossível entregar valor rápido só por tecnologia se o produto exigir
  mais do que (1) download, (2) configuração e (3) uso. E mesmo sendo simples, **é preciso usar todo
  truque tecnológico disponível.** O exemplo: login com credenciais de Facebook ou Google reduz o
  tempo até o primeiro uso pulando parte da configuração e da identificação — **e empresas B2B têm o
  que aprender aí, nem que seja para começar a pensar em reduzir minutos.**

  E o exemplo completo, do Dropbox, que vale como referência de desenho: tanta gente baixou e
  começou a usar que a empresa montou um time só para conduzir o usuário no processo. **Tudo movido
  a tecnologia:** o site existe com o propósito exclusivo de acompanhar o download e a instalação;
  ícones e mensagens dizem o que está acontecendo no caminho; e depois da instalação **um PDF de dez
  páginas aparece dentro da pasta**, com instruções de como aproveitar os recursos. Uma experiência
  de cinco minutos que faz orientação na tela, guia a instalação, e — o mais importante — **empurra
  o usuário a fazer o upload do primeiro arquivo.**

  **E a observação que fecha e que é a definição operacional de time-to-value:** o relógio do
  Dropbox **continua correndo até a primeira experiência de upload.** Ele **não** para quando o
  download e a instalação terminam.

> **Ancoragem Altta — a lei que mais muda a operação do Academy.**
>
> **1. "O relógio não para na instalação" é a regra de desenho do onboarding do aluno.** O relógio
> da Altta não para quando o aluno **acessa a plataforma.** Não para quando ele **assiste à primeira
> aula.** Para quando ele **faz a primeira coisa na clínica e vê resultado.** Esse é o equivalente
> do primeiro upload, e a Altta precisa nomear qual é — por degrau. **É o dado de projeto mais
> importante do Academy e ele ainda não existe.**
>
> **2. A trava de sequência transplanta inteira, e é dura:** *só se começa o onboarding depois de
> definidas as métricas de sucesso.* Traduzido: **nenhum aluno entra no Autonomy sem que esteja
> registrado o número que a clínica dele quer mudar e o valor de partida desse número.** Isso é o
> Current State de Keenan, capturado na venda e **carregado para dentro da entrega** — e resolve, de
> uma vez, a passagem de bastão que hoje não existe.
>
> **3. A "lista oferecida" resolve o problema real.** Assim como os clientes da Brainshark, **o dono
> de clínica não vai ter métrica pronta** — e provavelmente não sabe a linha de base. A Altta
> precisa de **uma lista curta de medidas candidatas por degrau** (ocupação de agenda, ticket médio,
> taxa de retorno, taxa de conversão de avaliação, número de procedimentos/mês), da qual a clínica
> escolhe duas ou três e declara o ponto de partida. **Isso é um artefato de produto, escrevível
> hoje.**
>
> **4. A implantação iterativa é currículo.** "Não tente ferver o oceano" é literalmente a
> **Gradualização de Schwartz** aplicada à entrega em vez de à copy, e é o mesmo mecanismo da
> Fase 1 de Franco. **Três autores independentes convergindo para o mesmo desenho: o degrau precisa
> de uma primeira vitória pequena, nomeada e datada.**
>
> **5. A conta dos dias vale para a Altta invertida.** Reduzir em 30 dias o tempo até a primeira
> vitória, multiplicado pelo número de alunos, é **mês de mensalidade que deixa de vazar** — não dia
> de venda. É a forma de justificar investimento no onboarding do Academy contra investimento em
> aquisição, e é a conta que o §15 recomenda montar.
>
> **6. E o alerta do low-touch é o alerta central para a Altta:** *o low-touch pressiona mais o
> time-to-value que o high-touch* — porque a clínica pequena tem **menos capacidade de execução** e
> **expectativa igual ou maior**. A resposta de Steinman é **ser mais prescritivo, não menos**:
> passos numerados, o que a Altta faz e o que a clínica faz, e um ponto declarado de conclusão. **Um
> currículo aberto e autodirigido é exatamente a estrutura errada para essa camada.**

---

<a name="lei8"></a>
### 8ª Lei — Compreenda em profundidade as métricas do cliente
*Autora: Kathleen Lord, VP de Vendas e Customer Success, Intacct*

Esta é a lei mais técnica do livro e a que dá o vocabulário financeiro que faltava na biblioteca.

**A aritmética que abre a lei, e que é o argumento mais citável do capítulo.** Nada desacelera o
crescimento mais rápido do que a evaporação da receita da base instalada. E o efeito é
desproporcional:

> Se a projeção de receita anual é de **US$ 25 milhões** e o objetivo é manter crescimento de 50% ou
> mais, **um aumento de 1% na evasão significa que a equipe de vendas terá de aumentar em 20% as
> vendas novas** só para manter a mesma taxa de crescimento.

**Um ponto percentual de churn custa um quinto a mais de esforço comercial.** É a formulação mais
eficiente do livro sobre por que retenção é problema de todo mundo.

**O diagnóstico de sequência.** Lord descreve o padrão: no começo, a questão é como acelerar a
aquisição, e é para lá que vão tempo e dinheiro. Assim que a empresa vence esse desafio, **alguém —
o CEO ou alguém de finanças — percebe que o número de clientes e a receita recorrente contratada
estão caindo.** E o VP de vendas fica sem entender como, já que está fazendo um ótimo trabalho de
conquista. *"Infelizmente, muitas empresas não investem o suficiente para reter os clientes cuja
aquisição consumiu tantos recursos."*

**Os dois lados da medição, que ela separa de propósito:** medir **evasão** é entender *por que e com
que frequência os clientes vão embora*; medir **retenção** é entender *por que e com que frequência
eles ficam.* E a regra: **quanto mais cedo os dois forem analisados em profundidade, mais fácil
resolver.**

**A definição de RRMC.** *Receita recorrente mensal contratada* = o valor conjunto de todas as
receitas recorrentes por assinatura em base mensal, **mais** os contratos assinados que geram
compromisso e estão em fase de produção, **menos** a evasão. E a definição precisa de evasão nesse
contexto: **a parcela da receita recorrente mensal que deixou de ser compromisso do cliente, por ele
já ter rescindido ou já ter manifestado a intenção de rescindir no futuro.**

#### Os cinco passos

**1º Passo — Defina o que você está medindo e os componentes da RRMC.**

Primeiro: medir **por cliente, por contrato, ou pelos dois?** A resposta depende do porte do cliente
(PME × grande), de haver mais de um contrato por cliente, e de como contratos de um mesmo cliente
são geridos — o exemplo dela é ter cinco divisões diferentes da GE como cinco clientes.

Depois: **determinar como a empresa vai operacionalizar a captura e o cálculo**, em bases
prospectivas. As mudanças operacionais precisam permitir captar evasão e retenção **em valor e em
quantidade.**

Depois: **os tipos de RRMC.** As variações típicas são **RRMC de novos contratos, RRMC de
complementos, RRMC de renovações e evasão.** Cada uma se integra à RRMC inicial para calcular a RRMC
final, e **a diferença é a mudança líquida da RRMC** — que é o valor do crescimento da empresa entre
períodos, e **a visão prospectiva mais clara da saúde do negócio.**

**A melhor prática: decompor a RRMC de renovações em subtipos** — cancelamentos, downgrades,
upgrades e *primeiros arquivos*. (O livro explica: muitas empresas de nuvem oferecem serviço de
arquivo por um percentual da assinatura anterior, para dar acesso contínuo somente-leitura aos dados
depois que o cliente para de usar.)

**E o exemplo que demonstra por que a decomposição importa.** Um cliente tinha contrato de
US$ 50.000 e renovou por US$ 55.000. Comemorar? Sim, mas nem tanto. Os detalhes:

| Componente | Valor |
|---|---|
| Renovação dos produtos A e C | **US$ 45.000** |
| **Evasão do produto B** | **−US$ 8.000** |
| Upsell de licenças adicionais do produto A | **+US$ 14.000** |
| Aumento porque o desconto caiu de 25% para 22% | **+US$ 4.000** |

Para certas pessoas cada linha é importantíssima — **o gerente do produto B, sem dúvida; e o diretor
financeiro, quase certamente.** O número agregado (+US$ 5.000) esconde que um produto inteiro morreu
naquela conta.

E as exigências de instrumentação que decorrem: capturar **tipo de pedido** (novo, adendo,
renovação), **valores de upgrade/downgrade na renovação** (com add-ons de produto rastreados
separadamente), **motivos de downgrade no nível de SKU** e **motivos de cancelamento**. A melhor
prática no CRM é ter **lista fechada de motivos** para padronizar relatório, **mais um campo livre
de comentário** para capturar a percepção pessoal. E, o mais fino: **o processo de pedido deve
capturar a diferença entre downgrade de quantidade e downgrade de preço, porque são problemas de
evasão muito distintos.**

E o campo que ela recomenda preencher automaticamente: **tipo de evasão** — evitável ou inevitável.
A evasão inevitável tem nome no mercado: ***death and marriage*** (morte e casamento), ou seja,
falência e aquisição. Isso importa muito na hora de reportar motivos e **priorizar o que atacar
primeiro.**

**2º Passo — Defina o período e a frequência da medição.**

Semanal, mensal, trimestral ou anual, conforme o modelo. O critério é **a duração do compromisso dos
clientes**, e precisa se alinhar com a forma como a empresa apresenta RRMC e evasão, para permitir
comparação com o plano.

A prática comum: **medir em base mais granular — mensal — e reportar como taxa anualizada** para as
partes interessadas, o que dá visão mais clara do efeito anual.

E o tratamento de renovações fora do prazo, que é o detalhe técnico que quase todo mundo erra:
- **renovações antecipadas** são ótimas para a empresa, **mas devem ser registradas no período em
  que eram devidas** — registrar antes dispersa significativamente os critérios de evasão e
  retenção;
- **renovações atrasadas**: a melhor prática é **deslocar a RRMC esperada e a quantidade de clientes
  esperada para o período seguinte, mantendo as mesmas datas de início e fim da assinatura.** Isso
  permite medir com exatidão **e** relatar as renovações atrasadas — que é um critério importante
  por si só. O ideal declarado: **toda renovação efetuada com 30 a 60 dias de antecedência.**

**3º Passo — Determine a RRMC esperada e as categorias de evasão.**

A melhor prática para estimar a **RRMC esperada**: somar a RRMC do período anterior ao **valor
anualizado de quaisquer complementos** ocorridos no período. Essa soma é a base do cálculo de evasão
e retenção. Consequência: **a previsão de evasão feita no início do ano fiscal muda ao longo do ano**,
conforme os clientes adicionam assinaturas.

CS e finanças precisam concordar sobre **quando se fecha a RRMC esperada** — a melhor prática é no
início do período fiscal em que a renovação é devida.

Os três exemplos numéricos que ela dá:

*Planejamento no início do ano fiscal:*
- Renovações do ano anterior = US$ 25 milhões
- Evasão presumida de 10% (morte e casamento) = (US$ 2,5 milhões)
- **RRMC esperada e planejada = US$ 22,5 milhões**

*Abordagem moderada — atualizar por trimestre:*
- RRMC esperada original = US$ 22,5 milhões
- Valor anualizado dos add-ons do 1º trimestre = US$ 1,76 milhão
- **RRMC esperada atualizada = US$ 24,26 milhões**

*Abordagem conservadora — atualizar no fechamento de cada período mensal:*
- RRMC esperada original para setembro = US$ 1,5 milhão
- Mais valor anualizado dos adendos para as renovações de setembro = US$ 225.000
- **RRMC esperada atualizada = US$ 1,725 milhão**

E o alerta que justifica todo o exercício: **sem isso, os adendos de meio de período distorcem
significativamente a leitura da saúde da empresa e mascaram problemas de evasão.**

Última instrução do passo: **se houver vários segmentos de clientes, calcule a RRMC esperada de cada
segmento separadamente**, porque cada um terá taxa de evasão projetada diferente.

**4º Passo — Determine como identificar risco e suspeita de evasão.**

Duas maneiras, e a lei as compara honestamente:

| | **Interações humanas** | **Sinais e dados** |
|---|---|---|
| **Como funciona** | A equipe de CS convive com o cliente e avalia qualitativamente a probabilidade de evasão | Definem-se os atributos dos clientes mais saudáveis e depois os dos clientes em risco |
| **Vantagem** | Rico, contextual | **Objetivo, consistente, barato** |
| **Problema** | **À medida que a equipe cresce, fica cada vez mais difícil manter avaliação qualitativa objetiva e consistente entre todos os GCSs** | Exige instrumentação |
| **Viabilidade em PME** | **Fiscalmente impossível** — não dá para montar equipe com relacionamento profundo e baixa razão de contas | **Muito mais eficaz e econômico** |

Os atributos que ela lista para o modelo quantitativo: **padrões de uso, número de chamados de
suporte, NPS, tempo de casa, crescimento do contrato, e afastamento de contatos ou patrocinadores
principais.**

E a conclusão: dá para manter isso no CRM ou no Excel, **mas a empresa é muito mais eficiente e
proativa com um aplicativo específico de customer success** — que, além de automatizar avaliação e
pontuação de saúde, fornece **repositório centralizado acessível em tempo real por todo o pessoal
que interage com cliente**, e permite entregar atendimento tech-touch a segmentos específicos.

**5º Passo — Alinhe-se com a liderança executiva sobre definições e relatórios padronizados.**

A empresa deve medir **RRMC e volumes** de evasão e retenção, comparativamente, nas dimensões
relevantes: **setor de atividade, porte, antiguidade do cliente, geografia, canal de vendas, linha de
produto, ou GCS** — sempre nas duas perspectivas, valor e quantidade de clientes. Para conseguir
esses relatórios, **é preciso capturar essas dimensões no nível de detalhe em que se quer medir.**

E os usos que ela nomeia para o relatório:
- **desenvolvimento e engenharia** precisam compreender a urgência das melhorias que mais contribuem
  para o sucesso do cliente;
- **se um segmento é consistentemente problemático, vendas precisa ser avisada para parar de fechar
  com aquele perfil** (é a 1ª Lei, retroalimentada por dado);
- pode revelar que alguns clientes **não estão recebendo o treinamento necessário.**

**Duas recomendações finais que valem registro:**

1. **Contrate terceiro neutro para entrevistar quem cancelou.** A melhor prática é não usar recurso
   interno para as entrevistas pós-evasão — **terceiros produzem insight melhor**, do mesmo modo que
   se usa terceiro para pesquisa win/loss em negócio novo.
2. **Contrate gente específica para operações de customer success.** Ela é direta: **não é realista
   esperar que quem interage com cliente tenha a amplitude ou a competência para gerenciar programas
   transfuncionais** e manter os sistemas que automatizam processo e produzem visibilidade.

**Os comentários de Steinman: os cinco níveis de compreensão.**

Steinman acrescenta a distinção entre saber e saber de verdade. **Uma coisa é saber que a base
instalada cresceu 8% no ano passado (retenção líquida de 108%). Outra, totalmente diferente, é saber
os detalhes:**

- Que percentual de clientes aumentou o tamanho do contrato?
- **Que setores apresentaram as maiores taxas de evasão?**
- Quais são as taxas de retenção e de crescimento **por produto**?
- Em que percentual reduzimos os descontos na primeira renovação?
- **Qual é a diferença média entre o tamanho atual e o tamanho original do contrato, entre todos os
  clientes com mais de três anos de casa?**

**Impacto por camada:**
- **High-touch**: a única vantagem é que **você fala com eles.** Ter um campo obrigatório no CRM que
  força o GCS a escolher uma causa de evasão é necessidade incontornável — **mas você aprende muito
  mais conversando pessoalmente.** E a moral: *na vida aprendemos mais com os fracassos do que com
  os sucessos.*
- **Low-touch**: cumprir esta lei é **pura mecânica financeira.** Se a empresa opera inteiramente em
  pagamento por uso, dá para acompanhar todas as transações com granularidade máxima. **O que não é
  mecânica financeira é o *porquê*** — por que o cliente X cancelou, por que o cliente Y cresceu
  243% em dois anos. Sempre haverá resposta casuística, e é preciso decidir se vale pedir a alguém
  que converse com alguns desses clientes, ou fazer pesquisa formal.
- **Tech-touch**: dá para escolher alguns e conversar, mas o mais provável é usar tecnologia digital
  para aprender além da transação. **Escolher criteriosamente um subconjunto e oferecer incentivo
  para participar da pesquisa pode ser tática valiosa.**

> **Ancoragem Altta — a lei que fecha a metade que faltava da economia.**
>
> **1. A aritmética de 1% é o argumento para o §08.** Traduzida: **cada ponto de churn que a Altta
> não controla no Autonomy é um quinto a mais de esforço de aquisição.** Isso é o argumento
> financeiro que faltava para justificar investir no Academy contra investir em tráfego — e é a
> ponte com a linha de "Métrica e unit economics" da Tabela 1, que até aqui só tinha CAC.
>
> **2. A evasão parcial é o conceito que a Altta vai deixar passar.** No Academy, evasão parcial é o
> aluno que **desce de plano, cancela um módulo, negocia desconto na renovação ou tira usuários da
> clínica** — continua cliente, e a receita cai. Se a Altta medir só cancelamento de matrícula,
> **não vê isso acontecer.**
>
> **3. Downgrade de quantidade × downgrade de preço são problemas diferentes**, e a distinção
> transplanta inteira: clínica que tira dois de três usuários tem problema de adoção; clínica que
> renegocia o preço tem problema de valor percebido. **Mesmo número, causas opostas, tratamentos
> opostos.**
>
> **4. "Morte e casamento" tem versão local:** clínica que fecha, sócio que se desfaz, profissional
> que muda de cidade ou de especialidade. **Separar evasão evitável de inevitável desde a primeira
> coorte** evita que a Altta persiga um número que não é dela.
>
> **5. O passo 4 é veredito direto sobre a Altta:** *em mercado PME, avaliação qualitativa por
> equipe de CS é fiscalmente inviável; sinal e dado são muito mais eficazes e econômicos.* **Isso
> não é preferência — é a única opção disponível**, e é a justificativa técnica do escore de saúde
> automatizado da 4ª Lei.
>
> **6. Uma prática barata e adotável já:** entrevista de saída **por terceiro neutro** com quem
> cancelou. Numa operação pequena, isso pode ser uma pessoa que não é o vendedor nem quem
> acompanhou o aluno. **O custo é quase zero e o insight é o único dado real que a Altta tem sobre a
> própria evasão.**

---

<a name="lei9"></a>
### 9ª Lei — Impulsione o customer success com métricas rigorosas
*Autor: Jon Herstein, VP Sênior de Customer Success, Box*

**A tese.** Customer success é função nova, e como qualquer iniciativa de negócio **só a maturação
garante viabilidade duradoura.** Os marcos dessa maturação são **repetibilidade, definição de
processo, medição e otimização.**

**O framework emprestado: o CMM.** No fim dos anos 1980 o Software Engineering Institute da Carnegie
Mellon começou a desenvolver uma estrutura de maturidade de processos para organizações de software.
Publicado anos depois, o **Capability Maturity Model for Software (CMM)** virou referência — e,
mais que isso, virou padrão amplo para avaliar maturidade de qualquer organização e guia de como
avançar do nível inicial ao otimizado.

Por que continua relevante trinta anos depois num contexto totalmente diferente? Porque **a premissa
básica é que, conforme evoluem em capacidade, as organizações ficam cada vez melhores e mais
previsíveis na execução da própria missão** — seja produzir bom software, seja garantir excelência
consistente na experiência do cliente.

Os cinco níveis, aplicados a CS:

| Nível | Nome | O que caracteriza |
|---|---|---|
| **1** | **Inicial** | **O trabalho é feito por ações heroicas de pessoas empenhadas**, sem preocupação com processo ou repetibilidade. O objetivo do GCS é *"faça o que for necessário para tornar seus clientes bem-sucedidos e garanta a renovação"*. **O papel é mal definido**, e os detalhes ficam por conta de cada um |
| **2** | **Replicável** | O processo está disciplinado o bastante para **reiterar sucessos anteriores** |
| **3** | **Definido** | O processo está **documentado, padronizado e integrado** como padrão da organização |
| **4** | **Gerenciado** | **Medição** |
| **5** | **Otimizado** | **Melhoria consistente** |

E o diagnóstico do Nível 1, que Herstein oferece com franqueza: *parece familiar?* Se você gerencia
um punhado de GCSs, essa é provavelmente a sua realidade. **Assumindo que a equipe seja boa, isso se
sustenta por algum tempo — mas o ganho de curto prazo (cliente feliz) provavelmente redunda em
infelicidade de longo prazo: pessoas sobrecarregadas, entregas inconsistentes, resultados
desuniformes.**

**As três categorias de métrica.** Definidos e documentados os processos replicáveis, o foco vai
para medição e otimização. Herstein organiza tudo em três baldes:

**1. Comportamento do cliente e do usuário.**

A vantagem estrutural do SaaS sobre o modelo on-premise: **é possível instrumentar e medir todos os
aspectos de como os clientes usam o produto.** Antes, o fornecedor não tinha meio prático de saber
se ou como a base usava. Em aplicativos bem instrumentados dá para detectar **todo login, clique,
upload, download e erro gerado**, além da frequência de cada atividade. E, dependendo do produto,
até **o valor daquela atividade para o negócio do cliente** — um provedor de plataforma de comércio
eletrônico sabe o valor das transações que processou.

**O truque, e ele nomeia como truque:** correlacionar métricas de uso com **obtenção de valor de
negócio** e determinar como essas variáveis afetam retenção e expansão.

Exemplos de métrica de usuário: NPS; logins e logouts; uso de atributos e plataformas (web, móvel,
API). Em B2B, dá para agregar comportamento de usuário mais comportamento de cliente (pagamentos)
numa visão de saúde, incluindo fatores de risco correlacionados com evasão: **pagamento/não
pagamento, engajamento com o administrador do cliente, e referenciabilidade.**

**A advertência mais importante da lei**, e Herstein a marca como "importante nota de advertência":

> **O comportamento dos usuários serve apenas como aproximação do valor de negócio que o cliente
> está extraindo.** Parafraseando Nick Mehta, CEO da Gainsight: ***ninguém compra o seu software
> apenas para entrar nele.***

O cliente assinou para realizar um ou mais objetivos de negócio — achar mais leads, gerar mais
receita, aumentar eficiência de fabricação, melhorar colaboração com fornecedores. **A chave é
entender quais são esses objetivos e como o produto se relaciona com eles.** E ele admite o limite:
em alguns casos **o instrumento embutido no produto não consegue provar que o objetivo foi
atingido.** Se o cliente usa a solução para compartilhar arquivo e eliminar servidores FTP, **você
tem que perguntar se ele realmente eliminou** — o produto não dá essa visibilidade. Daí a
prescrição: **passe tempo com o cliente no início da relação para entender os objetivos de negócio e
para acordar como vocês, em conjunto, medirão os resultados.**

**2. Atividade do GCS.**

Depois de definir os processos, é natural querer saber se estão sendo seguidos — e depois, **como as
atividades do GCS afetam o sentimento e a retenção do cliente.** As perguntas que ele quer que sejam
respondidas com dado, e não com fé:

> **As suas ATNs são tão eficazes quanto você supõe para promover adoção? Visita presencial é melhor
> que e-mail e telefonema quando se trata de satisfação do cliente?**

Exemplos de métrica: frequência dos tipos de interação (ATNs, e-mails, telefonemas); **volume de
suporte atendido por GCSs em vez de pela equipe de suporte**; presteza na identificação de riscos;
eficácia das medidas de mitigação.

**3. Resultados para o negócio.**

O benefício da maturação é previsibilidade. E ele dá dois experimentos concretos, que são a melhor
ideia metodológica do capítulo:

- **Quer saber de quantos clientes um GCS dá conta (razão ideal de contas)?** Meça os resultados de
  negócio obtidos por **coortes de GCSs com cargas diferentes.**
- **Quer saber se ATNs formais funcionam melhor que verificações informais mais frequentes?** Meça
  engajamento e satisfação de **coortes de GCSs com métodos de trabalho diferentes.**

Exemplos de métrica de resultado: retenção bruta; retenção líquida; expansão; taxa de retenção de
clientes; satisfação; NPS.

E a exigência de governança: **você precisa trabalhar com produto, marketing, vendas e finanças para
definir o que é "sucesso" e quais métricas indicam progresso.** Em muitos casos a responsabilidade é
compartilhada — **CS e produto respondem juntos pela adoção.** *Quanto mais claro for quem responde
por cada métrica, mais fácil refinar processos e comportamentos.*

A frase de fechamento: **você consegue o que mede.**

**Os comentários de Steinman: a diferença entre conversa fiada e gestão.**

Steinman é ácido sobre o estado da prática. Na infância do customer success, **as medições são como
"alimento para criança"**. Temos centenas ou milhares de conversas com GCSs com perguntas do tipo:

- Como estão os seus clientes de um modo geral?
- Existe algum cliente com risco de cancelar?
- Você está trabalhando com o cliente X há 60 dias. Estamos progredindo?
- O cliente Y cancelou. O que poderíamos ter feito diferente?
- Como posso ajudar?

**São perguntas razoáveis — e nenhuma delas é mensurável.**

E monta o contraste, que é o melhor exemplo do capítulo. Com uma solução de gestão de CS, as mesmas
conversas viram:

- *"O escore de saúde médio dos seus clientes é seis pontos inferior ao do resto da equipe. E o
  componente que está te puxando para baixo é o relacionamento executivo. Vamos fazer um plano,
  começando pelo cliente de escore mais baixo."*
- *"Você tem três clientes em risco de não renovar nos próximos 90 dias. Vamos revisar o plano de
  ação de cada um."*
- *"Suas taxas de upsell são 10% superiores às do segundo melhor GCS. Isso é espantoso. Prepara três
  slides para a próxima reunião de equipe, para ajudar todo mundo a chegar no seu nível."*

E a distinção conceitual que ele acrescenta: **retenção, evasão e upsell são as métricas certas no
longo prazo, mas são métricas consequentes — retrospectivas, não antecedentes.** Como no caso do
vendedor, você não quer esperar doze meses.

**Impacto por camada:**
- **High-touch**: gerenciar CS high-touch é muito parecido com gerenciar vendedores. Para o
  vendedor, uma única métrica importa no fim — mas nenhum bom VP espera doze meses, ou mesmo um
  trimestre, para saber se o representante é bom. Ele observa indicadores antecedentes: **volume,
  crescimento e movimento de pipeline; número de chamadas; número de reuniões; propostas criadas e
  enviadas; volume médio previsto dos negócios.** Mais os subjetivos — capacidade de fazer o
  discurso padrão, de superar objeção.

  **A tese de Steinman: a métrica-chave do GCS é retenção líquida**, porque incorpora retenção e
  upsell, e porque as duas coisas que o cliente bem-sucedido faz são continuar e comprar mais. Mas
  os indicadores antecedentes que ele lista — e que **podem ser acompanhados manualmente**, se não
  houver sistema:

  - escores de saúde de toda a lista de clientes;
  - **tendências dos escores** (não só o nível);
  - nível de engajamento direto do GCS;
  - **número de ações desencadeadas** (escore baixo em pesquisa, não uso do produto);
  - **número de ações desencadeadas concluídas;**
  - número de oportunidades de upsell identificadas;
  - **número de atividades de relacionamento positivas** (referências, estudos de caso).

- **Low-touch**: tudo do high-touch se aplica, **e sob certos aspectos com mais força** — porque você
  **não pode depender do relacionamento** para ganhar o dia nem para entender o cliente. A
  ilustração que ele dá é clara: *se eu sou GCS com cinco clientes, digo com exatidão o escore de
  saúde de cada um, porque converso com eles o tempo todo. Se eu tenho 200 clientes e opero em nível
  muito mais automatizado, dependo muito mais de métrica aplicada e relatada automaticamente.*
  Métricas adicionais para essa camada:
  - **escores de pesquisa** acompanhados à parte, sobretudo se ainda não houver escore de saúde;
  - **interesse pelos e-mails** — o que os clientes fazem com o que você manda;
  - **número de chamados abertos** — com a ressalva honesta de que isso **pode não ser boa medida do
    desempenho do GCS**, por estar fora do controle dele, mas **acende a luz vermelha sobre clientes
    em dificuldade**;
  - **faturas** — clientes satisfeitos tendem a manter as contas em dia.

  E a regra prática: **como no fim das contas você mede a equipe pelo quanto os clientes vão bem,
  tudo o que ajuda a entender a situação do cliente é indicador, em graus variáveis, do sucesso de
  quem responde por ele.** Não é viável acompanhar tudo — **acompanhe o que for possível, para ter
  pelo menos a temperatura.**

- **Tech-touch**: **a boa notícia é o volume, porque ele torna a experimentação fácil.** Num modelo
  em que praticamente toda interação é tecnológica e o e-mail é o veículo principal, **testes A/B
  são triviais.** O exemplo: uma intervenção programada para o primeiro aniversário de todos os
  clientes. Prepare dois e-mails **com conteúdo idêntico e linhas de assunto diferentes** — uma
  "Parabéns" e outra "Feliz Aniversário" — e observe o comportamento futuro para ver se fez
  diferença.

  E o insight organizacional que ele extrai: **a equipe tech-touch de CS funciona muito mais como
  equipe de marketing**, porque as interações são digitais (site, e-mail, webinar). Logo, **pode ser
  medida da mesma maneira**: pela eficácia dos contatos — interesse pelos e-mails, presença em
  webinars, engajamento na comunidade, participação em grupos de usuários.

  E a equivalência que fecha a lei: **assim como o fator crítico de sucesso de marketing é geração
  de leads (pipeline), o fator crítico de sucesso de CS é o escore de saúde.** *Não é coincidência:*
  pipeline prevê comportamento futuro (probabilidade de fechamento, momento, tamanho) e é o input
  principal da previsão do VP de vendas; **um escore de saúde exato prevê retenção, upsell e risco.**
  A formulação final:

  > **Tudo o que a equipe de customer success faz deve se destinar a criar lealdade — e a lealdade
  > se mede pela retenção líquida no longo prazo e pelo escore de saúde no curto prazo.**

> **Ancoragem Altta.** Três coisas entram.
>
> **1. O CMM é um diagnóstico honesto do estágio atual.** A Altta está no **Nível 1** — ações
> heroicas de pessoas empenhadas, papel mal definido, "faça o que for preciso". Isso não é crítica:
> é onde toda operação começa, e Herstein diz que se sustenta por um tempo. **O que o modelo dá é a
> sequência**: não se pula do 1 para o 4. Antes de medir, é preciso ter processo **repetível** e
> depois **documentado.** Isso é uma advertência direta contra construir o painel de saúde antes de
> ter um onboarding padronizado — e converge exatamente com o "caminho das vacas pavimentado" da
> 4ª Lei.
>
> **2. "Ninguém compra o seu software apenas para entrar nele" é a frase mais importante da lei
> para a Altta**, e é uma correção do instinto natural de um LMS. **Aluno que assiste não é aluno
> que teve resultado.** Métrica de conclusão de aula é *proxy*, não valor. E o corolário de Herstein
> transplanta inteiro: **quando o instrumento não consegue provar o resultado, você tem que
> perguntar.** Para a Altta isso significa que o escore de saúde do aluno **precisa de um componente
> declarado, não só observado** — a clínica dizendo se o número dela mudou. Isso amarra com a lista
> de métricas candidatas da 7ª Lei.
>
> **3. O experimento por coorte é o método, e é barato.** Herstein resolve por dado o que todo mundo
> resolve por opinião: **quantos alunos por acompanhante? Encontro ao vivo funciona melhor que
> e-mail?** A resposta não é doutrinária — é rodar duas coortes com métodos diferentes e comparar
> retenção. **A Altta tem volume suficiente para isso hoje**, e não faz.
>
> E a equivalência final é a que muda a rotina de gestão: **escore de saúde está para o Academy
> assim como pipeline está para o comercial.** É o número que se olha toda semana.

---

<a name="lei10"></a>
### 10ª Lei — É um compromisso de cima para baixo, de toda a empresa
*Autor: Nick Mehta, Chief Executive Officer, Gainsight*

**A tese.** Durante a maior parte da história dos negócios, duas coisas importavam: **desenvolver o
produto e vender o produto.** A proposta é que **chegou a hora de um terceiro processo central:
promover o sucesso do cliente.**

Mehta abre reconhecendo o ceticismo: **customer success parece truísmo.** Depois de anos ouvindo CEO
dizer que o cliente é rei e vendo-os fazerem exatamente o oposto, **é fácil ser cínico.** E organiza
o capítulo em quatro perguntas.

**1. O que é realmente customer success.** Assim como vendas é ao mesmo tempo uma equipe e uma
atividade transfuncional, CS é assunto que engaja a empresa inteira. **Literalmente implica mudar a
orientação da empresa: do produto ou da venda para o sucesso do cliente.** E a aposta declarada: *se
você se empenha em contribuir para o sucesso do cliente, o sucesso da empresa — em vendas e lucros —
vem como consequência.*

O reenquadramento que ele propõe, área por área, e que é a melhor parte do capítulo porque é
concreta:

| Área | Pergunta reformulada | **Em vez de** |
|---|---|---|
| **Produto** | Que atributos realmente ajudarão nossos clientes a atingir os objetivos deles usando nossas soluções? | **Demoware** — software feito para demonstração |
| **Vendas** | Que clientes tendem a ser bom encaixe para nossas soluções? | Aqueles que logo nos deixarão |
| **Marketing** | Que mensagens realmente se alinham com o sucesso e o valor que entregamos? | Jargões e chavões |
| **Finanças** | Que métricas realmente refletem sucesso e valor para os nossos clientes? | Apenas vendas novas |

**2. Por que é inevitável.** Mehta apresenta uma cadeia causal econômica — não uma opinião:

- globalização e tecnologia **reduziram as barreiras de entrada**;
- barreiras mais baixas permitem que **novos entrantes provoquem disrupção** em quase toda categoria
  tradicional;
- novos entrantes criam **modelos de negócio com menos atrito**;
- menos atrito facilita **experimentar e comprar** — preço de curto prazo (mensal ou anual), consumo
  granular (por minuto, por ciclo, por uso, por clique), mobilização fácil (nuvem, móvel);
- **e o mesmo atrito reduzido facilita abandonar e debandar;**
- no fim das contas, **o cliente tem o poder e tem a escolha**;
- cliente com escolha **fica com quem entrega resultado**;
- e passará a **esperar** esse foco, a exemplo do que já recebe dos aplicativos de consumo (ele cita
  o Uber).

E a pergunta que fecha: **não é se vai acontecer. É se a sua empresa vai reagir rápido o suficiente
para sobreviver quando acontecer.**

**3. Como impulsiona valor.** Três vetores:

- **Crescimento.** Com menos vento de proa (menos evasão) e mais vento de popa (upsell), a empresa
  simplesmente cresce mais rápido. **E clientes bem-sucedidos viram advogados**, atraindo mais gente.
  *No longo prazo, o efeito balde furado não pode ser compensado só com negócio novo.*
- **Avaliação.** Mehta cita o relatório **Valuation of Subscription Business** da **Altimeter
  Capital**, de outubro de 2014: os múltiplos das empresas abertas por assinatura **se correlacionam
  diretamente com sucesso e retenção do cliente**, e o relatório afirma que *a dollar renewal rate
  (taxa de renovação em valor monetário) é a métrica mais importante para avaliar negócios por
  assinatura.* **Em resumo: as bolsas reconhecem o customer success.** — Este é o **único** dado com
  fonte externa nomeada em todo o livro. Ver §16.
- **Diferenciação.** Como nem todas as empresas focam nisso, **a gestão de CS pode virar diferencial
  significativo.** *Os clientes sabem que produtos e serviços se tornam commodities com o tempo. Os
  processos e as equipes que impulsionam o sucesso do cliente é que importam no longo prazo.*

**4. Onde começar.** A lista de ações concretas, que é o material mais operacional do capítulo:

- **Defina sucesso.** Um dos maiores passos para criar cultura centrada no cliente é **definir e
  difundir o que significa sucesso para os seus clientes.** Muitas empresas vendem produtos
  horizontais, usáveis em vários casos de uso — o CEO pode deflagrar um processo transfuncional para
  **sacramentar os casos de uso comuns e definir o que é sucesso em cada um.** O teste simples: *se
  você perguntasse aos clientes "o que significa para você sucesso extraordinário com a contribuição
  da nossa empresa?", qual seria a resposta deles?* **Sem definir isso, é difícil mobilizar a
  empresa em torno de algo indefinido.**
- **Alinhe-se em torno desse objetivo.** Revise a organização e garanta que cada área saiba o que
  fazer. Isso pode significar: revisar o feedback de CS **todo mês** com produto; **definir e refinar
  os critérios de qualificação de vendas**; revisar as mensagens regularmente com marketing e CS.
- **Ouça a equipe de CS.** O CEO está sobrecarregado de sinais — de clientes, parceiros,
  investidores, funcionários. Garanta que **parte desses sinais venha de CS**, porque ali estão os
  olhos e ouvidos da base. Estabeleça avaliação regular; **inclua um representante de CS em todas as
  reuniões executivas, reuniões de conselho e decisões estratégicas colegiadas**; e **leve as
  opiniões dele tão a sério quanto as do líder de vendas.**
- **Priorize.** Mehta chama esta de "onde a porca torce o rabo", e faz três perguntas-teste: *o
  atributo que encanta os clientes é sempre relegado em favor do que melhora as apresentações? O
  projeto de autosserviço está sendo preterido pelo lançamento do parceiro de canal? O treinamento
  de GCSs está sendo protelado pelo de vendas?* **Se você quer impulsionar CS, inverta essas
  prioridades.**
- **Dê poder à equipe.** Quatro itens concretos: **título do executivo de CS no mesmo nível do líder
  de vendas**; **manter o GCS no circuito quando o cliente acessa a gerência**; **promover o GCS à
  condição de herói do cliente** — o ideal é que seja ele a pessoa que comunica ao cliente que a
  mudança contratual foi aprovada; e deixar claro para o resto da organização que **CS representa a
  visão e as demandas dos clientes.**
- **Meça.** *CS jamais será levado a sério se não se definirem e acordarem as métricas.* Estabeleça
  metas de resultado final — **evasão bruta, retenção líquida** — e crie **métricas de alarme
  avançado**: escore de saúde, escore de adoção, NPS.
- **Relate.** Torne as métricas muito visíveis. **Apresente nas reuniões. Exiba em quadros e
  monitores. Nas reuniões de conselho, dedique tanto tempo a CS quanto a vendas.** Inclua na pauta
  itens específicos sobre casos incríveis de customer success.
- **Crie incentivos.** Planos de incentivo existem para promover comportamento. **Considere incluir
  metas de CS — retenção líquida, NPS, escores de saúde — no plano de bônus da empresa.**
- **Desafie a empresa.** Com a mesma intensidade com que se empurra por vendas e metas trimestrais,
  motive por adoção, evasão, retenção, upsell e satisfação.
- **Comemore.** *Customer success não é fácil, nem sempre está sob seu controle, e os clientes podem
  ser desafiadores.* A maioria das empresas tem ótimas tradições de comemorar venda — gongo,
  champanhe, viagem, aposta divertida. **Faça o mesmo com CS. Torne-se o gongo da equipe.**

**Os comentários de Steinman: as cinco perguntas para o CEO.**

Steinman diz que esta lei não é apenas mais uma numa lista de dez — **é a lápide onde os
mandamentos estão inscritos**, o fundamento de todas as outras. E faz a distinção que vale reter:
**CS precisa do *comprometimento* das outras áreas, não da *ajuda* delas.** "Ajuda" implica situação
não rotineira, acionada em cenários específicos. Não é isso. **O verdadeiro comprometimento começa
antes da primeira investida de marketing, antes da primeira linha de código do produto novo, e antes
da primeira visita de vendas.**

Ele observa uma dinâmica de mercado que sustenta a lei: **os investidores estão cada vez mais
interessados nos resultados correlatos** — alta retenção, mais upsell, melhor satisfação — **e estão
pressionando por investimento mais cedo em customer success.** A boa notícia vem com custo: exige
ser inteligente sobre onde investir, em tecnologia e em pessoas.

E dá **o melhor exemplo de incentivo do livro**: uma empresa SaaS muito bem-sucedida, hoje de capital
aberto, em que o bônus trimestral de executivos era pago **com base em dois critérios — carteira de
pedidos e taxa de renovação** — e **era necessário transpor limites mínimos nos dois** para começar
a escalada dos incentivos. *A mensagem não poderia ser mais clara.*

**As cinco perguntas.** Steinman propõe um teste binário — reconhecendo que decisões reais acontecem
em tons de cinza, mas que **forçar um sim ou não ilumina a verdade.** Pergunte, como CEO, ou sobre o
seu CEO:

1. **O CEO recusaria um negócio no pipeline porque as chances de contribuir para o sucesso daquele
   cliente são muito remotas?**
2. **O CEO retardaria o lançamento de um produto importante para tratar de dificuldades dos clientes
   atuais?**
3. **O chefe de customer success faz parte do círculo de confiança dele?**
4. **O roteiro de produto inclui itens que não aumentam vendas, mas atendem às necessidades dos
   clientes atuais?**
5. **O CEO se envolve pessoalmente em situações críticas de clientes com a mesma frequência com que
   cuida de questões de vendas?**

E o veredito: **se a resposta a cada uma não foi um sim rápido, é preciso reconsiderar se a empresa
está realmente focada em customer success.**

**A história de fechamento: Dreamforce, 2003.**

Steinman relata um episódio contado por **Jim Steele**, treze anos na Salesforce como diretor de
clientes e presidente de vendas mundiais. Na noite anterior à **primeira conferência Dreamforce**,
em 2003, a equipe executiva se reuniu com Marc Benioff para revisar a agenda e repassar as
apresentações. Como em qualquer conferência de fornecedor de software, **a agenda estava cheia de
apresentações de produto**, destacando atributos e valor da plataforma.

No meio da revisão, **Benioff tomou uma decisão que definiu o tom da empresa pelos anos seguintes:
dispensou todas as apresentações de produto e abriu o microfone para os clientes.** Em vez de
enaltecer as virtudes da empresa, deu a palavra aos clientes com toda a franqueza enquanto a
Salesforce ouvia. **E mais: a cada cliente que pegava o microfone, ele pedia feedback expresso sobre
o que havia de errado com os produtos, os processos e as pessoas da Salesforce.**

*Nenhum cliente se limitou a cantar os méritos da empresa.*

Steinman comenta que não estava presente, mas que não é difícil imaginar que **a decisão não foi
fácil, não foi aceita sem resistência e envolveu risco** — com todos os recursos já investidos nas
apresentações. O impacto sobre os clientes foi profundo, **e talvez ainda mais profundo sobre a
própria Salesforce.** E a moral: *pôr o cliente em primeiro lugar soa bem, mas nem sempre é fácil.
Por isso precisa virar cultura e DNA — para que cada situação não vire mais uma decisão.*

**Impacto por camada** — e aqui Steinman é honesto: **esta lei não varia com o modelo de contato.**
O que varia são os *trade-offs*:

- **High-touch**: contratar mais um GCS para os clientes importantes **× ** contratar mais um
  vendedor.
- **Low-touch**: aumentar pedidos diminuindo a lista de clientes por GCS **×** aumentar as metas de
  vendas.
- **Tech-touch**: construir um portal do cliente **×** melhorar a automação de marketing.

E a ressalva final, que é intelectualmente honesta: **ele não está dizendo que a resposta certa é
sempre investir em CS.** O ponto é que **sempre haverá decisão difícil de investimento**, qualquer
que seja o modelo, **e o compromisso duradouro se revela no curso das centenas de decisões que a
empresa toma todo mês** — não numa declaração.

> **Ancoragem Altta.** As cinco perguntas são adotáveis literalmente, trocando "CEO" por "sócios" e
> "produto" por "currículo". **A primeira é a mais dura e a mais relevante hoje: a Altta recusaria
> uma matrícula por saber que aquela clínica não vai conseguir resultado?** É a 1ª Lei chegando pela
> porta da governança, e é decisão de sócio, não de operação.
>
> O plano de bônus de dois fatores com **piso nos dois** é o mecanismo mais barato e mais eficaz do
> livro inteiro, e é aplicável desde o primeiro contratado comercial da Altta: **comissão que só
> começa a contar depois de atravessar um piso de permanência.** Isso resolve, por incentivo, o
> problema que a 1ª Lei resolve por veto — e é mais viável numa operação pequena, porque não exige
> ninguém com poder de vetar negócio.
>
> A história do Dreamforce tem tradução direta: **num evento da Altta, dedicar o palco a clínicas
> falando do que não funcionou.** Isso é, ao mesmo tempo, pesquisa (Halo Strategy de Suby), prova
> social operacional (Cialdini, sinal verdadeiro amplificado) e retenção. **É a peça de evento com
> melhor relação custo-benefício que a biblioteca inteira sugere.**

---

<a name="9"></a>
## 9. A ascensão do Chief Customer Officer

A Parte III abre com o argumento organizacional. A tese: assim como o CIO se tornou padrão pouco
depois de TI ganhar destaque, o **CCO (Chief Customer Officer)** está emergindo — e o livro entende
que veio para ficar.

A definição que ele adota, da Wikipédia em inglês: *o executivo responsável, em empresas centradas
no cliente, pelo relacionamento total com os clientes da organização.*

### 9.1 — O CCO "antes da nuvem", e por que não pegava

A função já existia, mas era rara e adotada em boa parte **para fazer declaração pública** sobre a
importância dos clientes. O problema era mensuração: **o CCO pré-assinaturas raramente tinha
atribuição operacional direta** e portanto não tinha métrica de receita ou lucro pela qual
responder. Os esforços eram positivos; eram **difíceis de quantificar.**

O exemplo que o livro constrói é excelente e vale porque expõe o mecanismo. O foco do CCO antigo era
**experiência do cliente (CX)**. Um ponto de contato universal é o **faturamento** — e faturas
variam de inofensivas a assustadoras (olhe a conta do seu celular, e pense em quanto tempo a
operadora gasta explicando faturas). Um CCO poderia atacar isso: **tornar as faturas exatas, simples
e oportunas.** Em empresa grande, é empreendimento enorme e caro.

E aí vem a série de perguntas que mata a função:

- Melhora a experiência do cliente? **Totalmente.**
- Gera mais receita? **Talvez, mas difícil de quantificar.**
- Aumenta a lucratividade? **Provavelmente não — e de novo, difícil medir.**
- Os clientes atuais gastariam mais? **Pode ser, mas como confirmar?**

O livro é generoso com quem exerceu a função: conhece muita gente que fez isso com satisfação,
sabendo que mudava a experiência e a forma como a empresa era vista. **Era frustrante trabalhar
tanto e não conseguir ligar o resultado àquilo pelo qual o CEO era julgado pelo conselho.** E é
compreensivo com os CEOs: se o conselho cobra receita, lucratividade, qualidade e participação de
mercado, e o CCO não consegue amarrar nada disso, **não colocar essa posição cara na equipe
executiva é escolha razoável.**

E registra que, em empresas tradicionais, a função de CCO **é tratada basicamente como trabalho de
marketing**, às vezes como mera renomeação do CMO — não por acaso, CX também costuma viver dentro de
marketing.

**A sobreposição real entre CX e CS**, que o livro nomeia: **duas peças do mesmo quebra-cabeça, que
se imbricam por dois pontos — pesquisas como fonte de insight, e feedback do cliente.** No exemplo do
faturamento, o projeto começaria com uma pesquisa de satisfação sobre o processo de cobrança, talvez
sondando exatidão, simplicidade e oportunidade; os resultados viram linha de base; faz-se uma
segunda pesquisa pós-projeto com as mesmas perguntas; comparam-se os resultados. **CS também faz
pesquisa, para entender saúde do cliente (4ª Lei).** Como os objetivos são os mesmos — melhorar saúde
e experiência para aumentar lealdade — **era provável que se reunissem organizacionalmente.**

### 9.2 — Onde CS nasce, e para onde converge

O livro registra que já viu unidades de CS nascerem em praticamente todas as áreas:

- **em vendas** — muito comum, porque o VP de vendas costuma ser o responsável pela renovação nas
  primeiras fases;
- **em serviços** — também muito comum, porque a função inicial se parece com uma combinação de
  consultoria e suporte, exigindo competências semelhantes;
- **em marketing** — relativamente comum, mas bem menos;
- **em produto** — com lógica clara: o produto deve atender às necessidades do cliente, e **ninguém
  sabe mais sobre elas que os GCSs.**

E a observação organizacional honesta: **sobretudo em empresas menores, as organizações se
desenvolvem em torno de indivíduos, não de convenções.** Com o tempo forma-se consenso. E o consenso
que o livro identifica é **a convergência para serviços.**

Ele faz questão de dizer **"para serviços", não "em serviços"** — e explica: CS é considerado, com
razão, função de pós-venda, porque a maior parte do esforço acontece depois que o prospect vira
cliente. **Mas ele reitera a nuance central: na economia de assinaturas não existe pós-venda.**
Depois da primeira venda, todo esforço se concentra em garantir a próxima — renovação, não-saída ou
upsell. O termo "pós-venda" persiste, e todo mundo sabe que significa "depois da primeira venda".

### 9.3 — Cinco subunidades, cinco métricas diferentes — o argumento pelo "chefe"

Este é o melhor pedaço analítico da Parte III, e é o que justifica o título executivo. O argumento:
**um VP sênior de vendas que supervisiona quatro grupos — empresa, midmarket, PME e canal — tem um
trabalho difícil, mas o foco e a métrica principal dos quatro são idênticos: vender o produto.** O
CCO tem cinco grupos que fazem coisas diferentes, de formas diferentes, e são avaliados por métricas
diferentes:

| Subunidade | Métrica principal | O que é |
|---|---|---|
| **Professional services** | **Utilização** | Expertise profunda de produto ou domínio, aplicada mediante pagamento. Pode ser o consultor que domina o aplicativo de faturamento da Oracle ou **o encanador que conserta a pia** — nenhum dos dois está vendendo o software ou a pia; **estão vendendo a própria expertise.** A métrica: das horas disponíveis para faturar, quantas foram faturadas? O encanador que trabalha 40 horas e fatura 30 é mais lucrativo que o que fatura 20. **A tarefa é minimizar horas não faturáveis** |
| **Treinamento** | **Número de produtos entregues** | O que mudou ao longo dos anos foi o mecanismo de entrega: sala de aula ainda existe, mas virtual virou padrão e **sob demanda é hoje atributo indispensável.** **Gerencia-se treinamento como equipe de produto**: identificam-se necessidades, projeta-se o produto, produz-se, vende-se, entrega-se. A viabilidade depende de dois fatores — **qualidade** (os alunos aprenderam o que deveriam, de forma positiva?) e **quantidade vendida.** Nem todo departamento de treinamento existe para gerar receita, mas **à medida que a empresa amadurece, treinamento costuma virar fonte de receita.** Métrica alternativa, na perspectiva do cliente: **número de clientes/usuários treinados** |
| **Suporte ao cliente** | **Eficiência** | O órgão quebra/conserta. Canal era o telefone (daí "call center"); hoje é e-mail, chat, telefone e até Twitter. **Visto em geral como mal necessário, que existe só porque não é possível entregar produto perfeito.** É **centro de custo e provavelmente sempre será**, e é **em grande parte reativo — nem bom nem mau, apenas fato.** Métricas: pedidos fechados por dia por representante, total de chamadas atendidas. Como o suporte padrão em geral não é pago à parte, **minimizar o custo por cliente é prioridade alta do CFO** |
| **Implantação / onboarding** | **Time-to-value** | Não se extrai valor nenhum antes de a implantação estar concluída, e bem feita. Costuma nascer junto com professional services, porque as competências são quase intercambiáveis, **mas a maioria das empresas separa as duas com o tempo, por dois motivos:** (1) **avaliar e melhorar a pontualidade da conclusão é crucial**; (2) **o empacotamento de serviços de recepção é muito mais provável** que o de professional services, que costuma ser cobrado por hora. Como a recepção quase sempre faz parte da primeira venda, ela costuma ser **padronizada, com preço fixo**, para ser fácil de vender e não atrasar o ciclo. As métricas: **time-to-project-completion e time-to-value** |
| **Customer success** | **Retenção** | *"De certa maneira, é o grupo que mantém unidos os outros grupos."* O cliente tem questão que vai além do que o suporte oferece — **acaba em CS.** Precisa de consultoria especializada para justificar a renovação, mas não para justificar a contratação de consultoria — **acaba em CS.** Recebeu treinamento e passou pela recepção, mas precisa de um empurrão ou de um ajuste — **acaba em CS.** E ao mesmo tempo, **como é CS que segura a peteca da retenção, é ele quem cobra dos outros grupos que sejam melhores e mais rápidos.** Círculo virtuoso do qual o cliente se beneficia. Métrica: retenção, retenção líquida, taxa de renovação — **ou, agregando tudo numa palavra: lealdade** |

E o veredito: **essa amplitude de atribuições exige gestão refinada, e as competências são pelo
menos equivalentes às de um Chief Revenue Officer** que administra marketing e vendas. *As duas
funções deveriam ser pares, com autoridade equivalente.*

### 9.4 — O vórtice: três áreas sendo puxadas para dentro

O livro observa que **customer success está "comendo a empresa"** do mesmo jeito que o software
comeu o mundo. Conforme a base instalada fica mais valiosa, quem responde por ela fica mais valioso.
E ele é explícito: **não é sede de poder, é reconhecimento de uma mudança de poder que está
acontecendo.** Três áreas estão sendo atraídas, e para elas há só dois destinos — **influência ou
absorção.**

**1. Vendas (a parte da base instalada).** Como não existe pós-venda, e como o CEO quer alguém
responsável pela retenção líquida, há argumento lógico para pôr uma função de vendas dentro de CS,
por quatro razões:

- para que **os GCSs mantenham o status de assessor de confiança**, sem ter que negociar venda;
- para que o CEO tenha **uma garganta a apertar** quando se trata de manter e aumentar o valor da
  base;
- porque **o GCS tem o pulso do cliente em vias de renovação** e pode preparar o vendedor com
  história e antecedentes;
- porque **os GCSs são a melhor fonte de leads de upsell.**

E o argumento de legitimidade: **quem responde pelo número da retenção líquida tem direito de
reivindicar os recursos necessários para produzi-lo**, incluindo os vendedores que fecham esses
negócios. Mesmo que a função não migre, **a influência dos GCSs sobre o processo será significativa**
— e um bom vendedor vai buscar essa relação, enxergando o GCS como o vendedor de negócio novo
enxerga o consultor de vendas: **indispensável para fechar.**

**2. Marketing (a parte do cliente).** O livro é explícito que **não** está propondo que o CMO
reporte ao VP de CS — *"nem na mais distante galáxia"*. Mas há uma parte de marketing cujo nome
também inclui "cliente", e faz sentido perguntar se ela deveria se integrar. Ele mapeia as
responsabilidades típicas de marketing de cliente e como CS as influencia:

- **E-mail e nutrição**: conteúdo, momento e até **tom** devem ser fortemente influenciados por CS;
- **Gestão de referências**: **todas as informações necessárias para casar um prospect com a
  referência certa vivem em CS** — setor, tamanho, casos de uso, escore de saúde, frequência de
  referências, última referência concluída;
- **Comunidades**: conteúdo e interação direta em geral são atribuição de CS;
- **Webinars**: conteúdo e presença pessoal virão de CS, tanto sobre produto quanto sobre o domínio;
- **Grupos de usuários**: quem convidar, envolvimento pessoal, estímulo à participação;
- **Conferência de clientes**: agenda, conteúdo, palestrantes.

E o argumento de simetria: **nenhum CRO aceitaria a função se ela não incluísse o marketing de
geração de demanda.** Se você responde por meta de negócio novo, reivindica o pipeline inteiro, não
metade. **A mesma filosofia vale para o CCO.**

**3. Consultoria de vendas.** O livro admite que esta é a estrada menos percorrida e que **"nem
faria parte desta lista seis semanas atrás"**. CEOs mais agressivos estão empurrando essa função,
que sempre foi de vendas, para dentro de CS. A razão remete direto à 1ª Lei: é **atribuir
responsabilidade sobre parte vital da organização de vendas a quem convive com as consequências das
decisões de venda.**

A analogia que ele usa: **é como tirar a garantia da qualidade do VP de engenharia e pô-la sob
suporte ao cliente.** Assumindo liderança competente e canais de comunicação preservados, **pode ser
manobra brilhante** — a função que endossa o lançamento fica com quem sofre a dor se o lançamento
der errado. *"Não há nada de errado nisso. Em absoluto."*

E qualquer que seja a lógica organizacional, **a mensagem implícita do CEO é contundente:**
*"priorizaremos a retenção duradoura e o customer success acima de meramente garantir as metas de
vendas trimestrais."*

O fecho da seção: assim como SaaS e assinaturas transferiram o poder do fornecedor para o cliente,
**as mesmas areias movediças estão deslocando o poder organizacional de aquisição para sucesso do
cliente — e provavelmente ele não volta.**

> **Ancoragem Altta.** **A estrutura de cinco subunidades com cinco métricas é adotável agora, sem
> contratar ninguém**, porque a Altta já executa as cinco funções — só não as separa nem as mede
> diferente:
>
> | Subunidade do livro | Na Altta | Métrica |
> |---|---|---|
> | Professional services | **A implementação pontual do degrau 3 (Rise)** | Utilização |
> | Treinamento | **O Academy — currículo e produção de aula** | Produtos entregues / alunos formados |
> | Suporte | Atendimento a dúvida de aluno | Eficiência |
> | Implantação/onboarding | **A entrada do aluno em cada degrau** | **Time-to-value** |
> | Customer success | Acompanhamento e retenção | **Retenção** |
>
> **O achado aqui é que "Treinamento" e "Customer Success" são unidades diferentes com métricas
> diferentes** — e numa empresa de educação a tentação é fundi-las. **Produzir aula boa e fazer o
> aluno ter resultado não são a mesma atividade e não se medem do mesmo jeito.** Confundi-las é
> como o livro descreve CS nascendo dentro de suporte: produz-se uma versão premium da coisa errada.
>
> E o mapeamento de "onde CS nasce" é diagnóstico: na Altta ele nasceria dentro de **serviços**
> (a herança do PCA) ou de **produto** (o Academy). O livro diz que converge para serviços — mas
> **para a Altta, tech-touch, o argumento da 6ª Lei aponta para produto**, porque é o produto que
> escala. Isso é uma divergência legítima entre o contexto do livro e o da Altta, e está registrada
> no §14.

---

<a name="10"></a>
## 10. Tecnologia de customer success

O capítulo 16 é, ao mesmo tempo, o mais concreto sobre desenho de sistema e o mais comprometido do
livro — a Gainsight vende exatamente o software descrito aqui. Isso está julgado no §16; o conteúdo
sobrevive à ressalva.

**A premissa:** CS, seja high-touch ou tech-touch, **tem tudo a ver com dados.** Trata-se de
converter dados em informação e informação em execução. *"Mas tudo começa com dados, muitos dados."*

**A profusão de informação que já existe.** O livro lista o que quase toda empresa já sabe sobre
cada cliente, todos os dias:

- demografia — setor, geografia, porte;
- há quanto tempo é cliente;
- o que comprou e quando;
- o que pagou por cada produto;
- **todas as faturas emitidas** — quanto, o quê, condições;
- **todos os pagamentos recebidos** — quando, quanto;
- **todos os chamados de suporte** — quando, motivo, gravidade, tempo de resposta, tempo de solução;
- **todos os e-mails enviados e resultados** — aberto, clicado, excluído, descadastrado;
- **todo evento ou webinar a que compareceu ou se inscreveu;**
- mala direta enviada;
- **visitas ao site e fontes de tráfego;**
- visitas ao portal de suporte e providências;
- **todo treinamento realizado** — sala de aula ou sob demanda;
- toda pesquisa enviada, recebida e respondida;
- como os produtos estão sendo usados.

Se for negócio por assinatura, acrescente: valor do contrato original, valor atual, taxa de
crescimento do contrato, número de renovações concluídas ou de saídas não exercidas. E se for SaaS:
**todas as ações já praticadas dentro do produto** — páginas vistas, cliques, relatórios, execuções.

E o encaixe lógico: **quanto mais você sabe sobre o cliente, com mais eficácia pode gerenciá-lo.**
O escore de saúde é, no fim, *"apenas uma análise predefinida de um conjunto discreto de dados,
reunidos num único escore."*

**As cinco propostas de valor da tecnologia:**

### 10.1 — Otimize o tempo do GCS

A primeira coisa que toda equipe busca é **um sistema de alarme avançado.** Em geral é a evasão que
cria a necessidade.

Na falta de informação de atividade, **a priorização das interações costuma ser feita por dois
pontos de dado óbvios: (1) data de renovação e (2) RRA ou valor total do contrato.** O segundo, como
aproximação de valor do cliente, é o que orienta empresas sem evento de renovação. E o livro observa
que **a maioria dos CEOs teria ao menos uma resposta genérica para "quais são os seus clientes mais
valiosos?"** — e essa vira a priorização de fato, na falta de coisa melhor.

**O problema é óbvio:** valor do cliente sozinho, ou mesmo combinado com data de renovação, **não é
sofisticado o bastante** para diferenciar quem precisa de atenção urgente de quem está indo bem.
Daí a busca se ramifica em duas direções:

- **Dados de uso do produto.** *"Todos concordam que, se você só pudesse explorar uma fonte de
  dados, esta seria a escolhida."* É o melhor indicador de saúde e o melhor previsor de compra
  futura. **Mas pode ser difícil conseguir, e ainda mais árduo identificar tendências.**
- **Outras interações.** Chamados, faturas pagas ou não, pesquisas respondidas ou não, engajamento
  com mensagens de marketing. **Estão sempre em sistemas separados e distintos** — e o gerente de
  conta perfeito teria que entrar em cada um deles e decifrar os dados para priorizar.

O ideal é ter tudo, mas o livro reconhece que **é jornada passo a passo e é preciso escolher uma
batalha de cada vez.**

**O contraste entre o velho e o novo mundo**, que é a melhor demonstração do capítulo:

*Velho mundo:*
> Temos três clientes chegando à renovação nos próximos 90 dias. Já deveríamos estar conversando com
> os três, sobretudo com a Acme, que é o maior. Vamos fazer o possível para que nenhum cancele.

*Novo mundo:*
> Temos **17 clientes cujo uso dos principais atributos caiu mais de 20% em seis meses e que não
> responderam ou avaliaram mal a última pesquisa.** Vamos procurar cada um, começando pelos quatro
> que renovam neste trimestre ou que têm menos de um ano de casa. Também vamos priorizar a Acme,
> porque têm um aumento de 50% de contrato programado para daqui a nove meses.
>
> As prioridades desta semana são os **sete clientes com casos P1 ou P2 abertos há mais de 10 dias e
> com fatura em atraso há mais de 30.**
>
> Temos **cinco clientes cujo executivo patrocinador mudou de cargo ou cujo usuário campeão cancelou
> depois do último e-mail de marketing.** Conversar com urgência máxima.
>
> Temos **mais de 30.000 clientes que nem experimentaram o novo atributo de colaboração.** Vamos
> convidá-los para o vídeo sob demanda e para os webinars da semana que vem.

### 10.2 — Aumente o uso de informação em todo contato

Mesma solução, problema diferente. Sem o conjunto certo de informação, **a maioria das interações
vira "telefonema de checagem"**:

> *Oi, John, é o Dan, seu gerente de contas. Esta é a terceira quinta-feira do mês, só estou ligando
> para ver como vão as coisas e saber se posso ajudar em alguma coisa.*

E o livro é impiedoso: **hoje os clientes têm toda razão de se ouriçar com uma ligação dessas.**
Deveríamos saber como as coisas estão indo, inclusive se e como estão usando o produto. **E mesmo
sem dado de uso, já temos o suficiente para tornar a ligação muito mais valiosa:**

> *Oi, John, é o Dan. Queria agradecer por você ter participado do nosso webinar na semana passada e
> verificar se precisa de mais informação sobre o assunto. Também vi que você abriu três chamados
> nas últimas duas semanas, sobre relatórios. Estou à disposição se quiser que eu revise com você
> alguns dos relatórios em que está trabalhando.*

E o diagnóstico do porquê isso não acontece: **não é falta de vontade.** A maioria dos GCSs está tão
ocupada que não tem tempo de entrar em três ou quatro sistemas antes de cada ligação — **precisam
priorizar o tempo, e em geral o contato em si acaba sendo mais importante que a qualidade dele.**

**E o valor extrapola CS.** A solução — a chamada **visão de 360º do cliente** — serve a todo mundo
que fala com cliente:

- **Suporte**: já acessa chamados abertos, fechados nos últimos 30 dias, prioridade, tempo médio de
  fechamento. **Mas não se beneficiaria de saber o escore de saúde atual e projetado, as ações em
  aberto (não casos), o resultado da última pesquisa, as tendências de uso e as faturas vencidas?**
  *"Os contatos com os clientes são raros e preciosos. Todos na empresa precisam otimizá-los."*
- **Gerentes de produto**: falam menos com clientes, **mas gostariam de saber como aquele cliente
  usa o produto e como isso se compara ao uso geral da base.**
- **Professional services**: consultores em engajamento contínuo se beneficiam de conhecimento mais
  apurado de cada cliente.
- **Vendas**: seja gerenciando a conta ou explorando uma renovação/upsell, precisa entender a saúde
  — e mais que isso, **amplitude de visão**. *"Nada pior do que fracassar num telefonema de vendas
  pela existência de um chamado de alta prioridade em aberto que você ignorava."*
- **Marketing**: cuida de programas de referência, estudos de caso e grupos de clientes, **e precisa
  saber saúde e nível de atividade** para fazer isso bem. É uma das razões pelas quais o marketing de
  cliente está migrando para perto de CS.
- **Executivos**: *"ninguém gosta menos de ficar alheio ao que está acontecendo que o seu CEO — e
  nenhum funcionário gosta de ser o motivo disso."* E o livro dá um teste prático: **observe o
  esforço que hoje é necessário para organizar uma conversa do CEO com qualquer cliente. Só isso já
  justificaria a solução.**

E a crítica ao CRM, que é o ponto mais afiado do capítulo: **os sistemas de CRM faziam essa mesma
promessa de visão 360º e estavam longe de cumpri-la** — a menos que se fizesse esforço enorme para
abarrotar o CRM de informação, por falta de outro lugar onde guardá-la.

### 10.3 — Impulsione a escalabilidade

Só há duas maneiras de gerenciar base crescente: **mais gente ou mais tecnologia.** E a resposta
certa é a terceira — combinação das duas.

O argumento econômico: **CS é, ao menos em parte, esforço movido a pessoas, e provavelmente sempre
será.** Pessoas são a parte mais cara de qualquer operação. Para melhorar lucratividade, **não se
pode expandir headcount em linha com o crescimento da base** — ao menos não em áreas que não cobram
separadamente pelo esforço, que é o caso do suporte padrão e do CS, ambos geralmente **empacotados
no contrato.**

E o número que ele publica: **soluções de customer success devem possibilitar aumento de no mínimo
25% a 30% de produtividade**, medido por contas ou por valor gerenciado por pessoa. Um GCS
high-touch com boa ferramenta deve conseguir aumentar a carteira **25% a 30%, talvez 35%**, mantendo
a qualidade. **Um GCS tech-touch gerenciando mil clientes pode literalmente dobrar esse número, ou
muito mais** — porque, quando tudo é tecnologia, **a quantidade de clientes quase não importa.** A
Verizon não se preocupa em não conseguir expandir a campanha de e-mail quando cresce um milhão de
clientes num mês: **simplesmente dispara mais um milhão de e-mails.**

Os cinco mecanismos que produzem o ganho:

- **Priorização** — não contatar quem não precisa ser contatado, *"o que é enorme vantagem"*;
- **Eficácia** — insight movido a informação torna cada contato melhor;
- **Colaboração** — facilitar o compartilhamento;
- **Acessibilidade** — informação-chave deixa de ficar oculta num e-mail e passa a estar disponível
  para todos;
- **Proatividade** — *"a intensidade do esforço necessário para ser proativo é exponencialmente menor
  do que apagar incêndios."*

### 10.4 — Melhore colaboração, comunicação e visibilidade

O livro faz aqui a autocrítica mais interessante do capítulo: **nos primeiros dias da tecnologia de
CS, o foco era quase exclusivamente análise de dados.** Fornecedores incluíam "análise" no próprio
nome, achando que era o fim do jogo. **O mercado comprou a ideia — e o modismo se revelou meio
subterfúgio.** Análise era e continua sendo importante, e análise preditiva é busca legítima. **Mas
nunca deveria ter sido o ponto focal**, e a razão é boa: *se o problema central de CS fosse análise
de dados, teria sido resolvido há muito tempo* — não faltam soluções analíticas excelentes (Business
Objects, Birst, GoodData, Tableau).

**O problema central, exatamente como no CRM, é colaboração e comunicação** — resolvido pelo
desenvolvimento de **fluxo de trabalho.**

**A analogia com o CRM, desenvolvida.** O sistema da Salesforce é uma ferramenta de análise? *"Não.
Ou, com mais exatidão, NÃO!"* Há componente analítico? Sim. Alguém compra puramente por causa dele?
Claro que não. A proposta de valor original era **SFA — automação da força de vendas**: uma forma de
a equipe gerenciar e acompanhar todos os aspectos do que ela faz, que é fechar negócio. No sistema
da Salesforce isso são quatro objetos: **leads, contatos, contas e oportunidades** — tudo o que é
necessário para entender e gerenciar o funil. **Vendas sempre foi gerenciar oportunidades para
fechar negócios, muito antes de existir CRM. O CRM apenas põe estrutura e disciplina em volta do
processo.**

E isso gera **quatro resultados** extremamente valiosos:

| | No CRM (vendas) | Em CS (clientes atuais) |
|---|---|---|
| **Previsibilidade** | Prever o funil | Um sistema com todos os dados e com o fluxo de trabalho monitorado **torna previsíveis os resultados futuros** |
| **Presumibilidade** | Presumir fechamento | **Presumir renovação, upsell e evasão** — só um sistema que usa a informação certa e aplica resultados históricos consegue refinar e codificar pressupostos exatos |
| **Replicabilidade** | Repetir o que funcionou | **Só monitorando o fluxo de trabalho das pessoas** dá para determinar o que funcionou e o que não funcionou, e repetir/descartar |
| **Visibilidade** | Ver o pipeline de cada um | Os mesmos insights, para a base |

E a honestidade sobre o custo: **os resultados não são indolores.** Pergunte a um vendedor de empresa
que usa CRM religiosamente — ele passa mais tempo do que gostaria alimentando o sistema. *"Todos
esses preparativos são parte inevitável do processo, para o bem maior da empresa. Além disso, se
eles não o fizerem, o VP pode ameaçar não pagar as comissões."*

**Comunicação × colaboração**, que o livro separa:
- **Comunicação** é troca de informação e comentário no contexto. O exemplo é o Chatter da
  Salesforce: comunicação **dentro do produto**, capturada no contexto e não enterrada em e-mail
  pessoal. É o que evita o CEO perguntar *"quais são as últimas notícias sobre a Acme?"* — a visão
  360º resolve parte, **mas é o comentário específico de quem falou com o cliente recentemente que
  põe o ponto final.**
- **Colaboração** é mais que comentário: **compartilhamento, distribuição e cooperação em tarefas
  específicas.** E aqui há uma diferença estrutural entre vendas e CS que o livro nomeia bem:
  **vendas é mais autocontida.** O CEO e executivos podem se envolver em negócios específicos, mas
  tarefas raramente são delegadas para fora de vendas. **CS, por natureza, envolve gente de fora da
  equipe o tempo todo** — o gerente de produto para explicar uma complexidade, o representante de
  suporte para resolver uma dificuldade, e frequentemente a engenharia. **Os GCSs sempre precisam de
  ajuda para impulsionar o sucesso dos clientes.**

### 10.5 — Aprimore a gestão da equipe

O objetivo principal é ajudar a gerenciar clientes — **mas se a solução incluir fluxo de trabalho,
ela serve igualmente para gerenciar a equipe.**

O paralelo, de novo, é o CRM. Ele foi projetado para gerenciar o processo de vendas, **mas logo
descobriu-se um valor paralelo**: virou **a principal ferramenta gerencial do VP de vendas.** Tudo o
que indica se um representante está no caminho certo, além do fechamento, está lá: telefonemas
dados, reuniões concluídas, crescimento do pipeline, propostas geradas, movimentação do pipeline,
negócios emperrados, negócios fechados, dias para fechar, preço médio de venda.

*"Essas informações valem ouro se você estiver dirigindo uma equipe de vendas."* E valem mais ainda
quando comparadas entre membros: **permitem estabelecer padrões de comparação, promover competição e
focar o coaching** — e permitem ao VP **explorar a expertise específica de cada um para melhorar
todos os outros.**

A lista equivalente para CS — *"as atividades em si são as únicas variáveis"*:

- telefonemas dados;
- reuniões concluídas;
- **ações desencadeadas;**
- **ações encerradas, por categoria;**
- ATNs concluídas;
- **outros marcos alcançados;**
- resultados de renovação e upsell;
- **escore de saúde do cliente;**
- escore de satisfação;
- e-mails enviados, abertos, clicados;
- **planos de conta criados e atualizados.**

E o argumento de headcount, que fecha o capítulo: **CS é unidade geradora de receita, tanto quanto
vendas** — logo, **a justificativa para mais gente vem de receita ou de pedidos.** *"'Todos na
equipe estão realmente ocupados' não funciona mais com o CEO."* É preciso definir com clareza a
contribuição de cada GCS adicional ao resultado.

E o benefício político declarado: como CS ainda é jovem, **uma luta constante tem sido conseguir
assento à mesa executiva.** Os assentos existentes estão lá por valor demonstrado ao longo de
décadas. **A tecnologia que permite ao líder de CS quantificar o próprio valor e apresentar
resultado objetivo é parte importante dessa conquista** — praticamente toda outra unidade importante
já tem aplicativo específico que a ajuda a gerenciar o negócio, quantificar resultado e justificar
necessidade. *"Customer success é simplesmente a entrada mais recente no jogo."*

> **Ancoragem Altta — e aqui há uma leitura contraintuitiva que precisa ser registrada com
> cuidado.**
>
> **A lista de dados que "toda empresa já tem" é quase inteiramente disponível na Altta hoje**, e
> está espalhada entre o CRM, a plataforma do Academy e o financeiro. **O que não existe é o lugar
> onde ela se junta.** A "visão 360º do aluno" é uma feature de plataforma real, com escopo
> definido, e sai direto desta seção.
>
> **A tensão com a pendência da IA de atendimento (§08 / §7.1 da jurisprudência) é genuína e precisa
> ser dita com honestidade.** Este capítulo faz **duas afirmações que puxam em direções opostas**:
>
> 1. **A favor da camada:** todo contato com o cliente precisa ser movido a dado, e **a diferença
>    entre o "telefonema de checagem" e o contato informado é exatamente a diferença entre um
>    atendimento que retém e um que irrita.** Uma IA de atendimento sem acesso ao histórico, ao uso,
>    aos chamados e à saúde é o telefonema de checagem automatizado — **pior, porque escala.** Isso
>    é argumento estrutural forte a favor da camada, e converge com o requisito de Schwartz
>    (classificar o estado de consciência antes de responder exige dado do CRM).
> 2. **Contra, ou pelo menos com ressalva:** o livro é **explícito** em dizer que **CS não é CRM**
>    (§5.2), que o CRM prometeu a visão 360º e não entregou, e que a solução de gestão de CS é um
>    sistema **distinto** com fluxo de trabalho próprio. Ou seja: **este é o primeiro livro do acervo
>    a argumentar que a camada de pós-venda merece sistema próprio, e não um campo dentro do CRM.**
>
> **A síntese honesta das duas:** o livro **não** vota que a IA de atendimento seja produto vendável
> sozinho — nada nele sugere isso. Vota que ela precisa ser **alimentada por um repositório único de
> dados do cliente**, e que **esse repositório pode não ser o CRM.** Isso é voto pela camada com uma
> qualificação nova: **camada de quê.** Registrado no §7.1 da jurisprudência como refinamento, não
> como dissidência.
>
> E os **25% a 30% de ganho de produtividade** são o único número de retorno de investimento em
> ferramenta que o acervo inteiro oferece. **É autorrelato de fornecedor** (§16) e deve ser tratado
> como hipótese, não como parâmetro.

---

<a name="11"></a>
## 11. O futuro e a economia do cliente

O capítulo 17 é o mais fraco do livro em rigor e o mais interessante em uma coisa só: **uma das
vinte previsões contradiz a tese central da obra**, e o autor a publica assim mesmo. Isso é honesto
e vale registro.

**As vinte previsões**, condensadas: CS cresce em importância além de SaaS; o CCO se consolida como
função e título; a disciplina fica mais definida e refinada; **a unidade organizacional foca mais em
operações e depende menos de relacionamento**; as empresas quantificam o valor de CS; **a demanda por
experiência em CS continua superando a oferta**; universidades começam a ensinar CS; a tecnologia
acelera e as soluções viram necessidade em vez de conveniência; **CEOs oriundos de CS viram lugar
comum**; operações de CS ficam tão lógicas quanto operações de vendas; "GCS" vira descrição de cargo
valorizada; encontros de nicho ficam menos interessantes porque haverá gente demais na área; grandes
atores e startups entram no mercado de tecnologia; alguns fornecedores assumem posição dominante e
abrem capital; VPs de CS no pódio de IPO viram comuns; eventos com investidores focam cada vez mais
em retenção e exigem presença de CS; o termo aparece na capa de *Information Week*, *Forbes* ou
*Fortune*; grandes consultorias desenvolvem práticas de CS; e muitos livros serão escritos.

**E a previsão nº 18, que é a interessante:**

> **As taxas de evasão não vão declinar — porque o atrito na troca de fornecedores vai diminuir na
> mesma velocidade em que as práticas de customer success melhorarem.**

Isto é notável: **o livro prevê que o esforço agregado do movimento que ele defende será
neutralizado pela redução simultânea do custo de troca.** Ou seja, customer success não é um
investimento que reduz churn no agregado — **é um investimento para não perder posição relativa.**
O livro não desenvolve a implicação, mas ela é séria e está julgada no §16.

**"A economia do cliente".** Steinman propõe estender o termo de Tien Tzuo. Se "economia de
assinaturas" descreve a mudança de modelo de negócio, **"economia do cliente"** descreve o efeito
mais amplo: o cliente ganhando poder de forma contínua, pela disponibilidade da informação. E ele
reforça a metáfora do tsunami com um detalhe físico: **tsunamis ficam mais intensos à medida que se
aproximam do litoral** — é por isso que são destrutivos. *O tsunami de assinaturas ainda está em
formação, e ainda é longo o percurso até o ponto de máxima intensidade.*

Os exemplos de disrupção que ele usa: **Uber e Lyft contra táxi; Airbnb contra hotelaria.** E a
observação política: *cidades e sindicatos podem combater o Uber quanto quiserem; no fim não vencem.
Os clientes em massa sempre vencem.*

A escolha binária que ele coloca: **você pode ser a Waldenbooks e combater a Amazon e a internet — e
perder — ou ser a Barnes & Noble, adaptar-se, competir no próprio jogo e sobreviver.**

---

<a name="12"></a>
## 12. O cenário Wingtip/Financiality — o primeiro ano, dia a dia

Antes de fechar, o livro constrói um cenário completo e datado do que seria "customer success ideal
executado hoje". É o material mais operacional da obra inteira e o mais diretamente adaptável ao
Academy, então vale reconstruir com cuidado.

**O fornecedor fictício: Wingtip Software.** Empresa SaaS que vende **solução de treinamento online**
— note a coincidência com o negócio da Altta — para PMEs e midmarket. Cinco anos de mercado,
terminando 2015 com **RRA de US$ 40 milhões e 1.600 clientes.** PMV de US$ 25.000 e subindo: era
US$ 21.000 no começo do ano e passaria de US$ 35.000 no quarto trimestre. **Parou de vender contratos
anuais abaixo de US$ 10.000**, mas ainda carrega uns 200 remanescentes. No topo, já tem 15 clientes
com RRA acima de US$ 150.000.

**Por insistência dos acionistas, investiu cedo em CS.** O VP de customer success foi o **funcionário
número 23** (de 320 hoje) e responde por todas as funções de pós-venda — recepção, treinamento,
suporte, professional services e CS propriamente dito. **Equipe total de 110 pessoas, 21 delas em CS
no sentido estrito**, distribuídas assim:

- **13 GCSs de midmarket** — dois deles cuidando dos **25 maiores clientes**, e onze com **50
  clientes cada**;
- **4 GCSs de PME**, gerenciando **600 clientes em modelo de *pool*** (sem dono fixo por conta);
- **1 GCS responsável por criar os programas coletivos** usados por todos os outros, **e que gerencia
  os clientes restantes em tech-touch puro**;
- **2 diretores** — um de midmarket, um de PME/tech-touch;
- **1 pessoa de operações de customer success**, em breve duas.

> Vale reter a estrutura: **1.600 clientes, 21 pessoas.** A camada de baixo — 600 clientes — é
> atendida por quatro pessoas em pool, e o resto por **uma** pessoa construindo programas coletivos.

**O cliente fictício: Financiality, Inc.** Empresa de tecnologia e serviços que faz análise de dados
e consultoria para bancos e corretoras. Comprou a Wingtip porque precisava de ferramenta para criar e
rastrear treinamento de produto sob demanda. Assinou no segundo trimestre de 2014: **US$ 29.000 de
contrato anual mais US$ 15.000 de pagamento único pelo pacote de recepção de midmarket.**

**Segmento: low-touch.** Ou seja, a experiência planejada é combinação de contato individual e
automático. E o livro faz questão de dizer: **a realidade nem sempre é o planejado.**

### A cronologia

| Data | O que aconteceu | Natureza |
|---|---|---|
| **30/jun/2014** | Financiality assina o contrato | — |
| **1/jul** | Os detalhes necessários **migram automaticamente do CRM para o sistema de customer success**; gerente de projeto e GCS são **atribuídos automaticamente por algoritmo** que considera carga de trabalho **e** rodízio | Automático |
| **1/jul** | Joe Smith, diretor sênior de educação que assinou, recebe **e-mail personalizado do CEO da Wingtip**, disparado automaticamente pelo CRM, dando boas-vindas, **apresentando a gerente de projeto de recepção (Shannon Jones) e delineando os próximos passos** | Automático |
| **1/jul** | Shannon contata Joe por e-mail para marcar a reunião de partida | Humano |
| **2/jul** | Joe recebe pela Amazon **um presente de agradecimento disparado automaticamente pelo fechamento do contrato** — com base na escolha do vendedor no CRM, um chaveiro de alta qualidade com o logotipo e o nome dele | Automático |
| **2/jul** | Shannon **estuda o CRM** para ver se tem alguma pergunta a fazer a vendas antes de prosseguir. Tudo parece no ponto certo; **ela opta por não abrir uma reunião de transferência** | Humano |
| **2/jul** | Shannon recebe resposta automática: **Joe está de licença até 14/julho** | — |
| **2/jul** | Shannon **sinaliza imediatamente o projeto como em risco**, porque o prazo contratual de conclusão é de oito semanas a partir da assinatura e um atraso de duas semanas torna isso improvável | **Humano, e é o momento-chave** |
| **15/jul** | Joe responde e agendam a partida para o dia 16 | — |
| **16/jul** | Reunião de partida com Shannon, Joe e dois membros-chave da equipe dele. Ajustes no plano, **mas os marcos principais são mantidos, incluindo 5/setembro para entrar no ar** | Humano |
| **16/jul** | Shannon atualiza o sistema com as datas dos marcos **e mantém o projeto em risco**, porque a data de entrada no ar ultrapassa o prazo contratual | Humano |
| **14/ago** | **Terceiro de cinco marcos concluído no prazo.** Um e-mail automático dispara para Joe e a equipe, **apresentando a GCS (Mary Harrison)** e informando que ela participará das próximas reuniões, já que a entrada no ar se aproxima | **Automático, e é a transição** |
| **15/ago** | Mary **começa a monitorar o uso do produto** e define regras que a notificam por e-mail. Algumas de **risco** (queda de 25% no uso), outras de **oportunidade** (mais de 80% das licenças ativas). **Também dispara a criação do Escore de Saúde da conta**, que passa a rastrear a saúde total considerando a data da compra e os casos de uso planejados | **Automático + configuração humana** |
| **5/set** | Todos os itens do plano concluídos; reunião de entrada no ar. **Shannon e Mary lideram juntas e fazem a transferência.** A Financiality assina a conclusão e **Mary passa oficialmente a responder pela conta** | Humano |
| **8/set** | Joe recebe **pesquisa de avaliação da recepção, disparada automaticamente pela conclusão do marco.** Responde com **nota 5 de 5** | Automático |
| **8/set** | Como a nota foi 4 ou mais, **o rótulo "em risco" é removido automaticamente**, e o escore de saúde total sobe para **78** — quase no extremo superior do segundo quartil | **Automático** |
| **30/set** | Noventa dias após a assinatura, **Joe e todos os usuários recebem a primeira pesquisa NPS**, disparada automaticamente | Automático |
| **7/out** | Mary é notificada de que **um usuário respondeu com escore depreciativo de 4.** Ela procura a usuária diretamente e a ajuda a superar as dificuldades | **Automático → humano** |
| **11/set a 3/nov** | Três notificações separadas: **novos usuários entraram no sistema mas visualizaram menos de três páginas nos sete dias seguintes.** Cada um recebe automaticamente um e-mail com dicas e link para o vídeo *Primeiros passos com o Wingtip*. **A resposta dos três é rastreada** — cada um abre e clica —, e o uso aumenta consideravelmente nas semanas seguintes | **Automático, e é o padrão de referência** |
| **23/set em diante** | Todos os usuários que **ultrapassam 50 logins e 500 visualizações de página** recebem automaticamente um **cartão eletrônico de US$ 10 da Starbucks** | Automático |
| **17/nov** | Mary é notificada de que **a Financiality abriu cinco chamados em sete dias.** Sinal de perigo: ela procura Joe e marca uma avaliação com o diretor de suporte para garantir o fechamento de todos | **Automático → humano** |
| **8/dez** | Mary apresenta **avaliação executiva do negócio (EBR) em vídeo**, revisando o progresso dos primeiros 90 dias e planejando marcos para os próximos 90. **Este primeiro EBR é ao vivo**, mas ela explica que **os futuros serão slides gerados automaticamente no mesmo formato**, enviados pelo sistema junto com uma pesquisa sobre os objetivos do trimestre seguinte | **Humano → automático** |

**As atividades adicionais do primeiro ano** que o livro lista sem detalhar:
- pesquisas automáticas após o fechamento de **cada** caso de suporte;
- **EBRs automáticas em PowerPoint a cada 90 dias;**
- **nova pesquisa NPS 90 dias antes da renovação;**
- notificação automática da renovação próxima, **junto com a cotação;**
- e-mails automáticos disparados por detecção de novos riscos e oportunidades;
- intervenções individuais ocasionais de Mary **ou de outro GCS do pool** — passados os primeiros 90
  dias, a conta perde dono fixo, e **a necessidade do encontro individual é determinada pela natureza
  do risco ou da oportunidade**;
- intervenção anual do **patrocinador executivo** da Wingtip;
- **outro presente disparado automaticamente quando a renovação ocorre.**

**A conclusão que o livro tira, e que é a parte mais valiosa.** Ele pede que se releia a cronologia
com atenção, porque **o processo não foi perfeito:**

- **o onboarding começou e terminou atrasado** (por licença do cliente, não por falha do fornecedor);
- **surgiram situações de risco** — escore baixo em pesquisa e excesso de chamados abertos.

**Mas cada uma foi manejada com rapidez e eficiência, "que é tudo o que o cliente realmente
espera".** E houve **momentos de encantamento** deliberados. A avaliação: na ausência de
circunstância anormal, **a Financiality provavelmente renova por pelo menos mais um ano — supondo
que o produto de fato entregue valor real.**

E o comentário sobre por que ele detalhou tanto: **os primeiros 90 dias da vida de um cliente são
muito importantes**, e o maior risco de evasão ocorre **na primeira renovação ou no começo do ciclo
de vida**, se não houver evento de renovação. *"Gerenciar realmente bem a experiência do cliente
desde o primeiro dia é de extrema importância."*

E ele antecipa a reação: **para muitos leitores isso parece sonho** — e é por isso que está no
capítulo do futuro. *"Tudo isso é muito factível hoje; portanto, nesse sentido, não é futuro. Ouso
afirmar, no entanto, que para muitas empresas esse cenário parece muito futurista."*

> **Ancoragem Altta — o cenário é um blueprint direto do onboarding do Academy.**
>
> **A estrutura de automação é replicável quase item por item**, e a Altta tem a vantagem de estar
> construindo do zero. A tradução:
>
> | Wingtip | Academy |
> |---|---|
> | Migração automática CRM → sistema de CS na assinatura | **Matrícula cria o registro de acompanhamento automaticamente** |
> | E-mail do CEO apresentando o gerente de recepção | **Boas-vindas dos sócios apresentando quem acompanha** |
> | Presente físico disparado pelo fechamento | Adaptável, e barato |
> | **Projeto sinalizado "em risco" no dia 2, por atraso de agenda** | **O sinal mais valioso da cronologia inteira** |
> | Marco 3 dispara apresentação do GCS | **Conclusão de um módulo dispara a entrada do acompanhamento** |
> | Regras de notificação: queda de 25% no uso / 80% de licenças ativas | **Queda de frequência / clínica com equipe toda ativa** |
> | Pesquisa disparada pela conclusão do marco | Pesquisa ao fim de cada fase |
> | Nota ≥ 4 remove o rótulo de risco automaticamente | Automatizável |
> | **Novo usuário que vê menos de 3 páginas em 7 dias → e-mail com vídeo de primeiros passos** | **O gatilho mais importante e mais barato de todos** |
> | 5 chamados em 7 dias → intervenção humana | Limiar de dúvidas |
> | EBR ao vivo no primeiro trimestre, automática depois | **Revisão de resultado da clínica: ao vivo na primeira, gerada depois** |
>
> **Três lições estruturais que a cronologia ensina e que não estão em nenhuma das Dez Leis:**
>
> 1. **O risco foi sinalizado no dia 2, e permaneceu sinalizado até ser resolvido no dia 70.** Não
>    foi sinalizado quando o prazo estourou. **O sistema registra risco no momento em que a
>    probabilidade muda, não no momento em que o problema aparece.**
> 2. **A transição é feita por duas pessoas juntas, na mesma reunião.** Não é um e-mail dizendo "a
>    partir de agora fale com a Mary". **É a passagem de bastão de Ross aplicada ao pós-venda.**
> 3. **A conta perde dono fixo depois dos 90 dias** e vai para pool. Isso é a estrutura tech-touch
>    admitindo que o acompanhamento intenso é **temporário e concentrado na janela de maior risco** —
>    e é exatamente a forma de a Altta ter acompanhamento sem ter CSM por aluno.
>
> **E a ressalva ética, que é real:** o **cartão da Starbucks por atingir 50 logins e 500
> visualizações** recompensa **uso, não resultado.** Numa plataforma de educação isso é
> especialmente perigoso, porque produz o aluno que assiste para ganhar o prêmio — exatamente o que
> Herstein condena na 9ª Lei (*"ninguém compra o seu software apenas para entrar nele"*). **A versão
> Altta desse gatilho precisa premiar implementação e resultado declarado, não consumo de aula.**
> Ver §16.

---

<a name="13"></a>
## 13. Starbucks: customer success fora do software

O livro fecha com um caso pessoal, escolhido explicitamente porque *"é mais fácil de compreender do
que o software de vendas de algum fornecedor B2B que você nunca vai usar"*.

Steinman declara: **não gosta do sabor de café, mas ama a Starbucks.** Reconhece de antemão que muita
gente não gosta, que especialistas em café preferem Peet's, Philz, Caribou, Tim Hortons ou até
Dunkin' Donuts, e que ele não está discutindo qualidade de café. **Nem cafeína o afeta.**

**As seis características** que ele lista como motivo do amor:

1. **Onipresença** — sempre há uma perto, em qualquer cidade, para uma reunião fora do escritório.
2. **Wi-fi gratuito em todas as lojas** — é escritório fora do escritório, ou casa, quando precisar.
3. **Sempre há lugar para sentar**, geralmente confortável, com opção de sentar do lado de fora.
4. **Nunca há pressão para comprar, nem para comprar mais**, não importa quanto tempo você fique.
5. **A equipe é quase sempre amigável**, dando até a impressão de fugir do script para agradar —
   **em pelo menos três lojas que ele frequenta, sabem o pedido usual, o nome, ou os dois.**
6. **Os mesmos produtos pelos mesmos preços** em todas as lojas (exceto aeroportos).

**O argumento da familiaridade:** familiaridade é coisa boa, sobretudo em viagem. *"É divertido
experimentar coisas novas, mas a familiaridade nos lembra de casa e transmite confiança e conforto."*
É por isso que o McDonald's é popular até em lugares onde parece loucura comer em fast-food.

**A dupla camada de lealdade.** Ele analisa: essas coisas **primeiro criam lealdade comportamental**,
por conveniência. **Depois geram lealdade atitudinal** — e ele usa a palavra *amor* várias vezes de
propósito, porque é a palavra-chave da definição.

**O teste da commodity**, que é o melhor argumento do capítulo. Ele antecipa a objeção — *"não é
justo, seus exemplos são commodities"* — e a devolve: *"E o café? Existe algum item alimentício, com
a possível exceção da Coca-Cola, que seja mais commodity do que café?"* Por quantos lugares você
passa todo dia onde poderia tomar café por muito menos? **E ainda assim há fila na Starbucks.** Que
outra marca cria fila? **A Apple** — o exemplo principal de lealdade atitudinal do livro inteiro.

E a pergunta que expõe o investimento: **se a Starbucks contasse só com a necessidade de café, gastaria
tanto dinheiro com lojas e lugares para sentar? Com milhares e milhares de guarda-sóis verdes para as
mesas externas?** Claro que não — *"se tudo o que a Starbucks oferecesse fosse café, toda loja seria
um drive-thru."* No momento em que ele escreve, **a capitalização de mercado da Starbucks é pouco
inferior a US$ 81 bilhões — 25% acima da Costco.**

**A distinção final, que é a que importa:**

> **Não estamos falando de serviços ao cliente. Serviço ao cliente seria garantir a qualidade da
> bebida, que você recebeu o que pediu, e que ficou pronto em tempo razoável. Criar espaço para os
> clientes relaxarem, oferecer wi-fi gratuito e conhecê-los pelo nome é passar de serviço ao cliente
> para customer success.**

**O programa de fidelidade e a digitalização.** O primeiro cartão Starbucks foi oferecido ao público
em **novembro de 2001**, e nos oito meses seguintes **mais de 4 milhões de cartões foram ativados** —
número que hoje é ativado num único dia de fim de dezembro. O cartão virou onipresente e **talvez
seja o item de presente mais popular da história**, servindo ao mesmo tempo como criador de lealdade
e como **anzol para clientes novos**.

Depois veio a digitalização: **muito antes de PayPal Wallet, Apple Pay ou Android Pay**, a Starbucks
pôs o programa no smartphone e **investiu em scanners em todas as lojas.** No momento da escrita,
**20% de todas as compras eram pagas por dispositivo móvel.**

E as **estrelas Starbucks** — recompensa por compra, uma bebida grátis a cada doze compras e no
aniversário. Steinman escreve que alguns podem considerar isso **"insidioso ou traiçoeiro"**, e
observa que funciona igual a milhas aéreas: **fica cada vez mais difícil reservar em outra
companhia.** As promoções rolam toda semana: compre um item e ganhe três estrelas; compre dois para
amigos e ganhe seis.

E as funções que ele destaca como especialmente eficazes:
- **recarga automática do cartão quando o saldo cai abaixo de um valor** — *"o que reduz a percepção
  da despesa, algo que todas as empresas do mundo gostariam de fazer com seus clientes"*;
- **pedido antecipado pelo aplicativo**, para chegar e já estar pronto;
- e ele observa que isso é **enriquecer a experiência até parecer um modelo por assinatura** —
  prevendo que em breve poderia comprar uma assinatura mensal com acesso ilimitado ao hábito. E
  acrescenta: **sob certos aspectos é até melhor que assinatura — todos os benefícios, mas nada
  ilimitado; tudo continua sendo pago.**

**A magia real dos programas de fidelidade: informação.** *"Nós, como consumidores, achamos que
estamos ganhando — e estamos. Mas os maiores benefícios vão para o fornecedor. E não estou falando
de benefícios financeiros: estou falando de informações."*

Os exemplos que ele conjectura: **a Starbucks provavelmente conseguiria dizer a temperatura do lado
de fora de suas lojas nos EUA pela proporção entre bebidas quentes e geladas.** E estimar a
intensidade de uma tempestade perto de uma loja pela queda do movimento no dia.

**E aqui vem a única passagem eticamente problemática do livro**, e ele mesmo a marca: *"em situação
extrema, esse tipo de informação é perigoso e até ilegal."* Ele conjectura — declarando que é
conjectura — **se a United sabe que ele pagaria US$ 69 por um assento na janela e, por isso, informa
que só restam assentos do meio na econômica, mesmo não sendo verdade.** *"Não estou afirmando,
apenas conjecturando."*

E segue: a Starbucks certamente prevê seu comportamento ao mandar promoção que exige a compra da
bebida favorita — **isso é fácil.** Mas provavelmente também estima **até que ponto ele está disposto
a sair da zona de conforto para ganhar uma estrela**: compraria algo que nunca experimentou? Algo que
só comprou três vezes? *"Com esse volume, a Starbucks pode fazer experiência todo dia. Se ela quiser
saber, ela saberá."*

**A conclusão sobre lealdade atitudinal**, que fecha o livro. A lealdade que a Starbucks despertou
nele o convenceu a:
- **compartilhar informação que de outro modo não compartilharia;**
- **permitir que lhe enviassem todas as promoções** — *"via spam, se você preferir"*;
- e **basicamente retirar dinheiro da conta corrente sempre que compra uma bebida.**

E a metáfora final:

> **Lealdade atitudinal é dinheiro no banco, que você pode sacar quando necessário, sabendo que o
> saldo não ficará negativo — a não ser que você se exceda nos saques.** Ela não se desfaz diante da
> primeira experiência negativa. Lembre-se de que lealdade envolve amor, e **quase sempre só uma
> sucessão de erros degrada o amor em gostar, não se importar, ou odiar.**

> **Ancoragem Altta.** O caso Starbucks é o único do livro que fala com uma operação de ticket baixo
> e volume alto, e por isso é o mais próximo do contexto da Altta apesar de ser B2C.
>
> **A distinção final é a que vale para o Academy:** garantir que a aula funcione, que o acesso não
> caia e que a dúvida seja respondida rápido é **serviço**. Criar o lugar onde a clínica se
> reconhece, ser reconhecida pelo nome, e não ser pressionada a comprar o próximo degrau o tempo
> todo é **customer success.** É a diferença entre um LMS e uma comunidade — e é o argumento
> econômico para a visão de longo prazo do Academy, ao lado da 5ª Lei.
>
> **E há duas travas.**
>
> **A primeira, de gamificação:** o programa de estrelas premia **frequência de compra**, e o
> equivalente numa plataforma de educação premiaria **frequência de acesso** — que é exatamente o
> erro do cartão Starbucks do cenário Wingtip. **A Altta pode usar o mecanismo, mas ancorado em
> implementação, não em consumo.**
>
> **A segunda, de crivo ético:** a conjectura da United — esconder disponibilidade de assento para
> extrair valor — é **fabricação de sinal**, e falha no crivo de Cialdini. Steinman a marca como
> especulação e não a endossa, mas a proximidade com a celebração das estrelas é desconfortável.
> **Registrado no §16 e no ranking ético.**

---

<a name="14"></a>
## 14. O que transplanta e o que não transplanta para a Altta

Esta seção existe porque **este é o pior transplante da fila de leitura**, e a síntese seria
inutilizável sem a separação explícita. O livro foi escrito para **SaaS enterprise: contrato anual,
RRA de seis dígitos, CSM dedicado por conta, QBR trimestral, conselho de administração, CCO no
primeiro escalão.** A Altta é **educação B2B com recorrência para dono de clínica pequena
brasileira.** Metade do livro pressupõe estrutura que a Altta não terá tão cedo — e possivelmente
nunca.

O tratamento aqui é o mesmo já dado ao contexto de startup de *Tração*, ao B2B americano de Ross e à
mala direta de 1966 de Schwartz. **Só que mais duro**, porque a proporção de material intransplantável
é maior.

### 14.1 — O que transplanta inteiro

| O que | Por quê | Onde está |
|---|---|---|
| **Lealdade atitudinal × comportamental** | Conceito puro, independente de escala, e resolve a ambiguidade que Gitomer deixou entre satisfeito e leal | §3 |
| **A inversão do LTV** | A aritmética é a mesma em qualquer ticket: numa recorrência, a maior parte do dinheiro ainda não foi recebida na assinatura | §1, §2 |
| **RRA / RRM / evasão / evasão parcial / retenção líquida** | Vocabulário financeiro, agnóstico a tamanho. **É o numerador que faltava na biblioteca** | §2, 8ª Lei |
| **A aritmética de 1% de churn = +20% de vendas novas** | Relação matemática, não contextual | 8ª Lei |
| **O churn nasce na venda** | Dado independente que confirma Keenan por outro caminho | 1ª Lei |
| **CS ≠ suporte** | A distinção entre reativo/eficiência e proativo/retenção vale em qualquer escala e é o erro mais provável da Altta | §5.4 |
| **As dez causas de evasão com indício e providência** | Traduzíveis quase linha a linha para o Academy | 2ª Lei |
| **A pergunta do bom GCS** (*por que precisou de mim agora? o que teria evitado isso?*) | Hábito, não estrutura. Custo zero | §7.5 |
| **A onda senoidal da saúde** | Descreve comportamento humano, não modelo de contrato | 4ª Lei |
| **Componentes do escore de saúde** (dez dos onze itens) | Obteníveis com o dado que a plataforma já produz | 4ª Lei |
| **Decompor o escore em componentes** | Princípio de desenho de métrica: agregado é diagnóstico, componente é alavanca | 4ª Lei |
| **"Não pavimente o caminho das vacas"** | Sequência: racionalizar antes de automatizar | 4ª Lei |
| **Time-to-value, e o relógio que não para na instalação** | O conceito mais operacional do livro | 7ª Lei |
| **Definir métrica de sucesso antes de começar a entrega** | Trava de sequência, e é a ponte com Keenan | 7ª Lei |
| **Implantação iterativa / primeira vitória nomeada** | É Gradualização de Schwartz aplicada à entrega | 7ª Lei |
| **"Ninguém compra seu software apenas para entrar nele"** | Corrige o instinto de medir consumo em vez de resultado | 9ª Lei |
| **O experimento por coorte** | Método barato para resolver por dado o que se resolve por opinião | 9ª Lei |
| **O plano de bônus de dois fatores com piso nos dois** | Mecanismo de incentivo, aplicável desde o primeiro contratado | 10ª Lei |
| **As cinco perguntas para o CEO** | Teste de governança, adaptável a sócios | 10ª Lei |
| **A distinção "serviço ao cliente × customer success"** | Starbucks — ticket baixo, volume alto, mais próximo da Altta que qualquer caso B2B do livro | §08 |
| **A estrutura de cinco subunidades com cinco métricas** | A Altta já executa as cinco; só não as separa | §9.3 |

### 14.2 — O que transplanta com adaptação declarada

| O que | A adaptação obrigatória |
|---|---|
| **A pirâmide high/low/tech-touch** | **A Altta é tech-touch com faixa low-touch no topo.** Toda a metade high-touch é referência conceitual, não instrução. Os números de razão de conta (5 a 15 / 20 a 50) pressupõem RRA de US$ 500 mil e **não servem de parâmetro** |
| **O modelo JIT (*just enough*)** | Transplanta o princípio; a lista de contatos programados precisa ser reescrita do zero para um aluno, não para uma conta corporativa |
| **O modelo de cálculo de efetivo** | O método é bom; **a razão por valor de contrato, não por número de clientes, não se aplica** numa base homogênea de ticket parecido. Para a Altta a razão volta a ser por **número de alunos e por degrau** |
| **CCPs e CdPs** | O desenho institucional é ótimo; **a formalidade (formulário de inscrição, cinco reuniões, proibição de delegar) precisa ser calibrada** para dono de clínica que não tem agenda corporativa |
| **A visão 360º do cliente** | O conceito é o mesmo; **na Altta o repositório precisa unir CRM, Academy e financeiro**, e nenhum dos três é o dono natural |
| **A cronologia Wingtip/Financiality** | O esqueleto de automação é replicável; **o cartão da Starbucks por logins precisa ser trocado por gatilho ancorado em implementação** |
| **Benchmark contra a média setorial** | Transplanta e é uma vantagem competitiva real — **mas com trava: sinal medido, nunca estimado** (crivo de Cialdini) |
| **Entrevista de saída por terceiro neutro** | Adaptável a uma pessoa que não seja o vendedor nem quem acompanhou. **É o único dado real de evasão que a Altta teria** |

### 14.3 — O que NÃO transplanta

Esta é a lista que impede a síntese de virar catálogo de coisas impossíveis.

| O que | Por quê não |
|---|---|
| **CSM / GCS dedicado por conta** | Pressupõe RRA de centenas de milhares de dólares. **Na Altta não existe e não vai existir no degrau de entrada.** A 5ª Lei diz isso explicitamente, e é a lei que a Altta deve seguir |
| **QBR / ATN / AEN trimestral** | Reunião trimestral de revisão de negócio com dono de clínica pagando mensalidade **não se paga.** O que sobrevive é a **EBR automática em slides** do cenário Wingtip, e mesmo essa só a partir de certo degrau |
| **Visita presencial** | O próprio livro já a elimina no low-touch |
| **Renovação como evento contratual anual** | A Altta é mensal. **Não há "90 dias antes da renovação"** — há risco contínuo, o que na verdade é pior: o livro admite que pagamento em bases correntes é *"ainda mais grave"* |
| **Estrutura de time: VP de CS, diretores, operações de CS, poder de veto sobre pipeline** | Pressupõe empresa de 320 pessoas. **A Altta tem sócios.** O que transplanta é o **incentivo** (bônus de dois fatores), não o **organograma** |
| **CCO no primeiro escalão** | Todo o §9 é planejamento de carreira executiva em empresa média. Sobrevive **só** a tabela das cinco subunidades com métricas distintas |
| **Absorção de vendas, marketing de cliente e consultoria de vendas por CS** | Política organizacional de empresa com áreas separadas. **Na Altta as áreas ainda são as mesmas pessoas** |
| **Professional services faturado por hora com métrica de utilização** | Só faz sentido no degrau 3 (Rise), e mesmo lá como implementação pontual empacotada, não como consultoria por hora |
| **Conselho de Administração, IPO, múltiplos de mercado, investidores pressionando por retenção** | Contexto de capital de risco. Irrelevante |
| **"Modelo de pool" com 600 clientes e 4 pessoas** | O número é do cenário fictício de uma empresa com RRA de US$ 40 milhões. **Não é parâmetro para a Altta** — é ilustração |
| **Dados de uso granulares tipo "todo clique já dado no produto"** | Transplanta parcialmente: o Academy produz esse dado, **mas em educação clique não é proxy de valor** — e o próprio livro alerta para isso na 9ª Lei |
| **Boa parte do capítulo 16 (tecnologia)** | É argumento de compra de software de CS. **O conceito de visão 360º sobrevive; a recomendação de comprar ferramenta não é acionável hoje** |
| **Os 25% a 30% de ganho de produtividade por ferramenta** | Autorrelato de fornecedor sobre o próprio produto. **Hipótese, não parâmetro** |
| **As vinte previsões do capítulo 17** | Prognóstico de mercado americano de 2016. Só a previsão nº 18 tem valor analítico, e por contradizer o livro |

### 14.4 — A adaptação que a Altta faz sozinha: SAÍDA × CONCLUSÃO

Esta é a pergunta 3 da fila, e a resposta é **não, o livro não distingue** — e a lacuna é mais funda
do que parece.

**Como o livro pensa.** Todo o modelo assume **assinatura perpétua com evento de renovação**. Cliente
saudável é cliente que renova para sempre e compra mais. **A palavra "conclusão" só aparece
descrevendo conclusão de projeto de implantação** — nunca conclusão da relação. O único momento em
que o livro chega perto é a discussão de **evasão inevitável ("morte e casamento")** — e ali as
causas são falência e aquisição, **nunca sucesso.**

**E há uma armadilha específica**, que é o achado desta seção. **A 4ª Lei lista "autossuficiência"
como componente positivo do escore de saúde:** *clientes que não precisam da sua ajuda para usar bem
o produto costumam ser mais saudáveis que os que precisam de empurrão.* Em SaaS isso é verdade — o
cliente autossuficiente continua pagando. **Em educação por degraus, autossuficiência é
ambígua:** o aluno que não precisa mais de você pode ser o aluno que **dominou o degrau** e está
pronto para o próximo, **ou** o aluno que já extraiu tudo o que queria e vai embora. **O mesmo sinal
comportamental, dois desfechos opostos.**

E há um segundo mecanismo, que Steinman descreve sem perceber a implicação. Nos comentários da 2ª
Lei ele observa que **a percepção de valor decai mesmo quando o valor real sobe**, e usa o Facebook
como exemplo. **Em educação isso é estrutural, não acidental:** o aluno aprende, o conhecimento vira
dele, e **precisamente por ter funcionado** o valor percebido do fornecedor cai. **Isso é churn
produzido pelo sucesso da entrega**, e nenhum livro de retenção escrito para SaaS enxerga esse
fenômeno, porque em SaaS o cliente nunca "termina" de usar o software.

**A adaptação obrigatória da Altta, em três partes:**

1. **Aluno que conclui um degrau não é churn — é candidato a upgrade.** Isso já está registrado no §9
   da jurisprudência e este livro **não o resolve.** A Altta precisa de uma categoria de saída
   própria — algo como **"conclusão"** — separada de cancelamento, downgrade e inadimplência. Sem
   ela, a métrica de retenção do Autonomy vai punir o produto por funcionar.
2. **"Autossuficiência" precisa ser desambiguada por outro sinal.** Autossuficiente **com** resultado
   declarado = candidato a upgrade. Autossuficiente **sem** resultado = risco. **É a diferença entre
   os dois que importa, e ela só aparece se a Altta perguntar** — que é exatamente o que Herstein
   manda fazer quando o instrumento não prova o valor (9ª Lei).
3. **A escada é a resposta estrutural ao problema.** O que em SaaS seria churn por sucesso, na Altta
   é **transição de degrau** — desde que o degrau seguinte exista, esteja pronto e seja oferecido no
   momento certo. **Isso transforma a arquitetura de produto da Altta numa vantagem que o modelo do
   livro não tem**, e é o argumento mais forte a favor da escada que a biblioteca produziu até aqui.
   Mas depende de uma condição: **o momento do upgrade tem que ser detectado, não esperado.** É uma
   feature do escore de saúde, não uma campanha de vendas.

---

<a name="15"></a>
## 15. Aplicação Altta: as decisões que este livro muda

### 15.1 — As oito ações que saem daqui, ordenadas por custo

Ordenadas do mais barato ao mais caro, e todas derivadas de partes do livro que transplantam:

**1. Adotar as duas perguntas do GCS.** *Por que este aluno precisou de ajuda agora? O que teria
evitado?* Custo zero, e converte atendimento em insumo de currículo. (§7.5)

**2. Instalar a categoria de saída na base.** Separar, desde a próxima coorte, **cancelamento ×
downgrade × inadimplência × conclusão × evasão inevitável** (clínica fechou, sócio saiu, mudou de
cidade). **Sem isso a Altta não tem número de churn — tem número de rotatividade.** (8ª Lei + §14.4)

**3. Separar downgrade de quantidade de downgrade de preço.** Mesmo número, causas opostas. (8ª Lei)

**4. Entrevista de saída por pessoa neutra.** Quem não vendeu e não acompanhou. É o único dado real
de evasão que existirá. (8ª Lei)

**5. Escrever a lista de métricas candidatas por degrau**, da qual a clínica escolhe duas ou três e
**declara a linha de base na entrada.** Ocupação de agenda, ticket médio, taxa de retorno, conversão
de avaliação, procedimentos/mês. **Isso é um artefato de produto, escrevível esta semana**, e é a
peça que carrega o Current State de Keenan da venda para a entrega. (7ª Lei)

**6. Nomear a primeira vitória de cada degrau** — o que é o "primeiro upload" do Autonomy —, com
prazo e critério. **É o dado de projeto mais importante que falta no Academy.** (3ª e 7ª Leis)

**7. Instalar o escore de saúde do aluno**, decomposto em componentes, com os dez itens obteníveis
listados na 4ª Lei. **Depois de racionalizar o onboarding, não antes.** (4ª Lei + 9ª Lei/CMM)

**8. Montar o benchmark setorial** — onde esta clínica está em relação às similares. Caro, depende de
volume e de dado limpo, **e é a coisa mais valiosa que a plataforma pode entregar.** Com a trava:
medido, nunca estimado. (3ª Lei)

### 15.2 — A conta que precisa ser montada

A 8ª Lei dá o argumento e a 7ª dá o cálculo. Juntos, produzem a conta que a Altta não tem:

- **1% de churn a mais custa ~20% a mais de esforço comercial** para manter a mesma taxa de
  crescimento;
- **reduzir o time-to-value em N dias, multiplicado pelo número de alunos, é o total de dias de
  mensalidade que deixam de vazar.**

**Essas duas linhas são a justificativa financeira para investir no Academy contra investir em
tráfego** — e é a primeira vez que a biblioteca oferece essa comparação, porque até aqui só havia o
lado do CAC. **Não substitui dado real da Altta (nível 1 da hierarquia); estrutura a pergunta que o
dado real deve responder.**

### 15.3 — O que este livro diz sobre o §08

**Sobre a escada de 4 BUs.** A decisão está travada e não se reabre. **O que este livro acrescenta é
um eixo de tensão que nenhum dos dez caminhos anteriores usou — o custo de entrega** —, e ele é
qualitativamente diferente porque **não fala de foco comercial, fala de operação de pós-venda.**

O argumento, montado a partir de quatro peças do livro:

- **1ª Lei:** vender para o cliente errado é o maior gerador de churn, e o custo maior não é a receita
  perdida — **é o custo de oportunidade dos recursos desviados.** Quatro BUs multiplicam por quatro
  a superfície onde é possível vender para o cliente errado, porque multiplicam por quatro as
  promessas em circulação.
- **6ª Lei:** o produto é o único diferencial escalável. **Quatro BUs são quatro produtos**, e a
  parte escalável da empresa é dividida por quatro.
- **7ª Lei:** cada degrau precisa da própria definição de valor, da própria primeira vitória e do
  próprio onboarding prescritivo — **e o low-touch pressiona mais o time-to-value que o high-touch.**
- **4ª e 8ª Leis:** cada BU precisa do próprio escore de saúde, dos próprios componentes, da própria
  RRMC esperada e da própria taxa de evasão projetada — o livro é explícito: **"se houver vários
  segmentos, calcule a RRMC esperada de cada um separadamente, porque cada um terá taxa de evasão
  diferente."**

**Somando: quatro BUs são quatro currículos, quatro definições de valor, quatro onboardings, quatro
escores de saúde e quatro projeções de evasão — e é na entrega, não na venda, que a dispersão vira
churn.** Nenhum dos dez caminhos do §4 da jurisprudência usa esse eixo. **Este usa, e não é forçado:
sai diretamente do texto, não de interpretação.**

**Como isso se registra:** como **tensão**, no §4, como **décimo primeiro caminho por eixo novo.**
Nunca como recomendação de mudança — a escada é decisão travada (nível 2 da hierarquia). E a saída
que o próprio livro sugere é compatível com a decisão: **a 1ª Lei recomenda "expandir a definição de
cliente ideal" com processo diferenciado por segmento, não abandonar segmentos** — o que, traduzido,
é a mesma saída que Weinberg e Miller já ofereciam: **uma meta de tração no degrau de entrada, com os
degraus superiores vendendo para a base já conquistada.**

**Sobre a IA de atendimento (§7.1).** O livro produz **voto pela camada**, mas **por um eixo que
nenhum dos sete convergentes usou** — e com uma qualificação nova:

- **O eixo novo:** a 5ª Lei estabelece que **em base de baixo ticket a lealdade não pode ser
  construída por relacionamento pessoal e tem que vir de valor entregue de forma escalável.** E o
  capítulo 16 demonstra que **a diferença entre o contato que retém e o contato que irrita é acesso a
  dado** — o "telefonema de checagem" contra o contato informado. **Somando: atendimento automatizado
  bem alimentado por dado é, na camada de volume, o principal mecanismo de permanência disponível.**
  Isso é exatamente o eixo que o §7.1 registrava como ausente e potencialmente decisivo.
- **A qualificação nova:** o livro é o **primeiro do acervo a argumentar que a camada de pós-venda
  merece repositório e fluxo de trabalho próprios, e não um campo dentro do CRM** (§5.2 e §10.4).
  Ele não diz que a IA é produto separado — **diz que o dado que a alimenta pode não morar no CRM.**

**Registro proposto:** oitavo convergente pela camada, **com a ressalva de "camada de quê"** anotada.
Não altera o placar de forma substantiva; refina o requisito.

**Sobre o vilão único (§7.2).** O livro não fecha, mas **reforça o candidato mais defensável.** As dez
causas de evasão da 2ª Lei, lidas em conjunto, descrevem quase todas a mesma coisa: **falta de
sistema.** Implantação que para, sponsor que some sem substituto, adoção que não acontece, valor que
nunca foi medido. **A improvisação continua sendo o candidato mais defensável, e agora com um
segundo caminho independente.** Não fechado.

### 15.4 — As camadas de currículo (§8 da jurisprudência)

O quadro tinha três camadas, todas extraídas de livros de venda e copy por falta de fonte melhor:
**Ação → Proficiência → Domínio** (Gitomer), **De → Para** (Miller), **Gradualização** (Schwartz).

Este livro **encaixa uma quarta, e ela é de natureza diferente das três:** as outras descrevem
**como se ensina**; esta descreve **como se acompanha.**

> **4. Time-to-value e a primeira vitória nomeada** (Steinman/Gordon/Franco) — a camada de
> **acompanhamento e prova precoce**. Cada degrau precisa de: (a) métrica de sucesso declarada pelo
> aluno com linha de base, capturada **antes** de começar; (b) uma primeira vitória pequena,
> nomeada e datada; (c) implantação iterativa, do critério mais fácil para o mais difícil; e (d) um
> ponto declarado de conclusão da fase.

Isso **não cria um quadro paralelo** — encaixa no existente, como a jurisprudência já previa que um
livro de entrega faria. E se encontra com o **clímax nomeado por degrau** de Miller: são o mesmo
mecanismo por lados diferentes, e agora há dois caminhos independentes exigindo a mesma coisa.

### 15.5 — Uma decisão de produto sugerida, não acionada

**Detectar o momento do upgrade em vez de esperar por ele.** Decorre de §14.4: se conclusão não é
churn, então o sinal de "aluno pronto para o degrau seguinte" é um componente do escore de saúde —
autossuficiência **mais** resultado declarado. **Isso transforma o upsell de campanha em gatilho**, e
é a aplicação mais direta da 4ª Lei à arquitetura da escada.

Fica no §8 da jurisprudência até o §08 acolher ou descartar.

---

<a name="16"></a>
## 16. Avaliação honesta

### 16.1 — O que é forte

**1. É a bíblia operacional de churn, e não há substituto no acervo.** Definição, cálculo, coorte,
health score, segmentação por camada, sinal antecedente, playbook de causa e providência, métricas
de resultado e de atividade. **Vinte livros depois, é o primeiro que trata retenção como sistema
medido em vez de como atitude.**

**2. Dá o vocabulário financeiro que faltava.** RRA, RRM, RRMC, LTV, evasão parcial, retenção bruta
e líquida, RRMC esperada. **A biblioteca tinha o denominador da economia de aquisição em três livros
e o numerador em nenhum.**

**3. A 4ª Lei é o melhor capítulo isolado.** O argumento pela decomposição do escore — *"se tudo o
que você tem é um escore total, basta ferver o oceano"* — é o melhor parágrafo sobre desenho de
métrica de toda a biblioteca, e a advertência contra "pavimentar o caminho das vacas" é a melhor
regra de sequência.

**4. O cenário Wingtip/Financiality é o material mais operacional de qualquer livro do acervo sobre
pós-venda.** Cronologia datada, com cada evento marcado como automático ou humano, **incluindo os
erros do processo e a explicação de por que ele funcionou mesmo assim.**

**5. A separação high/low/tech-touch é rigorosa e aplicada consistentemente.** Cada uma das dez leis
termina com as três camadas, e **os autores repetidamente dizem quando uma lei não se aplica a uma
camada** — o que é raro em livro de negócio e é sinal de honestidade.

**6. A 1ª Lei é o melhor argumento sobre qualificação de toda a biblioteca**, e vem do lado que
ninguém esperava: não do vendedor, mas de quem sofre a consequência da venda.

**7. É eticamente limpo.** Nenhuma técnica de manipulação, nenhuma escassez fabricada, nenhum teatro
de status. Ver 16.4.

### 16.2 — O que é fraco

**1. A oscilação de qualidade entre as dez leis é severa.** As leis 1, 4, 7 e 8 são densas e
operacionais. **As leis 3 e 10 são em boa medida exortação** — "desafie o cliente", "comprometa-se de
cima para baixo" — com pouco mecanismo verificável. **A 5ª Lei é conceitualmente a mais importante do
livro e a pior escrita:** o argumento central (lealdade vem de valor, não de relacionamento) está
enterrado sob prosa de consultoria, e os seis princípios são um checklist genérico.

**2. Repetição estrutural.** A história da Salesforce, a inversão do LTV, "clientes bem-sucedidos
fazem duas coisas", "não existe pós-venda" e a analogia com pipeline aparecem **cinco ou seis vezes
cada uma.** Um livro de 286 páginas com material de 120.

**3. Evidência quase toda anedótica, autorrelatada e executiva.** É o padrão do acervo, e este livro
não é exceção. **Os números verificáveis do livro inteiro são três:** os 8% de churn mensal da
Salesforce em 2005, os 4 milhões de cartões Starbucks ativados em oito meses, e a capitalização de
mercado da Starbucks. **Todo o resto são exemplos hipotéticos, cenários fictícios ou frases de CEOs
em jantares.** Os "99% da evasão ocorre na época da venda" — o dado mais citável do livro — é **uma
frase que um CEO disse ao autor, sobre a própria empresa, sem amostra, método ou verificação.**

**4. Nenhum caso de fracasso do próprio método.** Como Weinberg, Klaff, Miller e Suby: só empresas
que deram certo. O cenário Wingtip é ficção construída para funcionar.

**5. O livro está datado onde é tático.** Ferramentas citadas (WalkMe, Chatter, Yammer, Marketo,
Eloqua, Responsys, ExactTarget), empresas usadas como exemplo, e a própria previsão de que o livro
estaria "totalmente superado em dois anos" — feita pelo autor, e que se cumpriu. **A estrutura
sobrevive; o catálogo não.**

**6. A previsão nº 18 contradiz a tese do livro e o autor não a enfrenta.** Se *"as taxas de evasão
não vão declinar, porque o atrito de troca diminuirá na mesma velocidade em que as práticas de CS
melhorarem"*, então **customer success não é um investimento que reduz churn no agregado — é uma
corrida armamentista para não perder posição relativa.** Isso é uma admissão séria, publicada numa
lista de vinte itens sem uma linha de análise. **Para a Altta importa:** significa que o retorno de
investir em retenção deve ser avaliado **contra o que os concorrentes fazem**, não contra um patamar
absoluto.

**7. Contradição interna sobre estrutura organizacional.** O Capítulo 2 recomenda **separação
organizacional entre CS e suporte, e diz que CS não deve nascer dentro de vendas.** A 1ª Lei
recomenda, como remédio, **exatamente pôr CS sob o VP de vendas** — e reconhece que contradiz a
recomendação anterior sem resolver a tensão.

**8. É uma coletânea que se apresenta como livro.** Dez autores, dez estilos, sobreposição
considerável entre as leis 4, 8 e 9 (as três tratam de medição, de ângulos parcialmente iguais), e
Steinman fazendo a costura por comentários no rodapé. **Os comentários dele são consistentemente
melhores que os capítulos que comentam** — a onda senoidal, a espiral do cliente errado, o contraste
entre conversa fiada e gestão, o experimento do produto perfeito. **O melhor livro que este material
poderia ter dado seria Steinman escrevendo sozinho.**

### 16.3 — O que o livro NÃO responde

- **Formação de preço de recorrência.** Zero. Continua sendo a lacuna que nenhum dos vinte livros
  cobre.
- **Como adquirir cliente.** Declaradamente fora de escopo.
- **Como ensinar.** Este é o ponto crítico para a Altta: o livro trata "treinamento" como uma
  subunidade com métrica de produtos entregues, **e não tem uma linha sobre pedagogia.** Dirksen e
  *Make It Stick* continuam necessários.
- **Saída × conclusão.** Não distingue, e nem percebe o problema. Ver §14.4.
- **O que fazer quando o produto é bom e o cliente sai mesmo assim** — porque terminou, porque
  aprendeu, porque não precisa mais.
- **Onboarding como disciplina.** A 7ª Lei trata de **time-to-value**, que é adjacente, mas o livro
  não tem método de onboarding. Coleman continua necessário.
- **Comunidade como disciplina.** Aparece como canal tech-touch e como CCP/CdP, **mas não há teoria
  de comunidade.** Spinks continua necessário.
- **Economia de recorrência do lado do modelo** — quanto cobrar, que margem, que estrutura de plano.
  Warrillow continua necessário.
- **Regulação, conselho de classe, qualquer coisa que fale com paciente.** Nada.

### 16.4 — As seis perguntas da fila

**1. Qual das cinco lacunas este livro fecha?**

| Lacuna | Status |
|---|---|
| **Churn medido como sistema** | **FECHADA.** É o alvo do livro e ele entrega: definição, cálculo, coorte, health score, causas com indício e providência, métricas antecedentes e consequentes, segmentação por camada |
| **LTV e economia de recorrência** | **PARCIALMENTE FECHADA.** Dá o vocabulário (LTV, RRA, RRMC, retenção líquida) e a aritmética de impacto. **Não dá formação de preço nem estrutura de plano** |
| **Onboarding e primeira entrega** | **PARCIALMENTE ABERTA.** A 7ª Lei entrega time-to-value, implantação iterativa e a trava de definir métrica antes de começar — **mas não é um método de onboarding** |
| **Expansão de receita na base** | **PARCIALMENTE FECHADA.** Retenção líquida, upsell como consequência do valor entregue, receita de segunda ordem. **Mas trata upsell como "comprar mais do mesmo", não como mudança de produto** — que é o caso da escada |
| **Comunidade e pertencimento** | **QUASE INTOCADA.** Comunidade aparece como canal tech-touch e como estrutura de conselho (CCP/CdP), e a 5ª Lei dá o **argumento econômico** de por que ela é necessária num negócio tech-touch. **Isso é fundamento, não método** |

**Balanço: fecha uma das cinco, fecha parcialmente três, quase não toca uma.**

**2. O livro reconhece que o churn é fabricado durante a venda?**

**Sim, e com mais força que qualquer livro do acervo.** A **primeira** das dez leis é exclusivamente
sobre isso, e o dado de Kellogg (99%) é a versão radical do dado de Keenan (53%). A espiral do
cliente errado descrita por Steinman é o mecanismo completo, do CAC ao boca a boca negativo. **Isso é
convergência nova para a jurisprudência.**

**3. O livro distingue SAÍDA de CONCLUSÃO?**

**Não.** Pensa em renovação de contrato perpétua. **E pior: lista "autossuficiência" como sinal
positivo de saúde**, o que em educação por degraus é ambíguo. **É adaptação que a Altta faz sozinha,
e está detalhada no §14.4.**

**4. Há voto novo na pendência da IA de atendimento?**

**Sim, e pelo eixo que estava declarado como ausente.** A 5ª Lei estabelece que em base de baixo
ticket a lealdade não pode vir de relacionamento pessoal, e o capítulo 16 estabelece que a diferença
entre contato que retém e contato que irrita é acesso a dado. **Somados: automação bem alimentada é
o principal mecanismo de permanência disponível nessa camada.** Oitavo convergente pela camada, com
a qualificação nova de que **o repositório que a alimenta pode não ser o CRM** — o livro é o primeiro
do acervo a argumentar que a camada de pós-venda merece sistema próprio.

**5. Há argumento novo sobre foco, pelo eixo do custo de entrega?**

**Sim, e não é forçado.** É o décimo primeiro caminho, e o primeiro pelo eixo da entrega: quatro BUs
são quatro currículos, quatro definições de valor, quatro onboardings, quatro escores de saúde e
quatro projeções de evasão. **A 8ª Lei é explícita** ao mandar calcular RRMC esperada e taxa de
evasão **por segmento, separadamente.** Registrado como tensão no §4, nunca como recomendação de
mudança.

**6. Passa no crivo ético?**

**Passa, e entra entre os mais limpos da prateleira — abaixo apenas de Cialdini (que é o juiz),
Gitomer e Miller.** Não há técnica de manipulação, escassez fabricada, teatro de status nem
fabricação de mecanismo. A postura declarada é de entregar valor real e medir se ele chegou.

**Os quatro pontos frágeis, em ordem de gravidade:**

1. **A conjectura sobre a United** (§08) — imaginar que a companhia esconde disponibilidade de
   assento para extrair US$ 69. É **fabricação de sinal**, e falha no crivo. Steinman a marca como
   especulação e não a endossa, **mas a publica ao lado da celebração das estrelas Starbucks**, o
   que borra a fronteira.
2. **O e-mail automático "que pareça ter sido enviado diretamente por mim"** (4ª Lei, high-touch).
   **Simular origem pessoal em mensagem automatizada é sinal fabricado**, e é o mesmo problema da
   **camuflagem** de Schwartz — adaptar tom é legítimo, simular fonte não é. **Reprova.**
3. **A recompensa por uso** — cartão da Starbucks por 50 logins e 500 páginas vistas (§12). Não é
   antiético em si, **mas premia consumo em vez de resultado**, e numa plataforma de educação isso
   produz o comportamento errado. Contradiz a própria 9ª Lei do livro.
4. **O presente físico disparado automaticamente pelo fechamento do contrato** (§12). Reciprocidade
   no sentido de Cialdini, aplicada **depois** da decisão de compra — logo, não é manipulação da
   decisão. **Passa, com nota.**

**A pergunta do funil declarado.** O acervo já tem quatro casos: Brunson (funil declarado para o
ClickFunnels), Suby (o livro é o HVCO da agência dele), Miller (ferramenta atrás de cadastro, sete
produtos no capítulo final) e Gitomer (dezenas de "cadastre-se no gitomer.com").

**Este livro é um funil declarado, e é o mais bem declarado dos cinco.** A Gainsight vende software
de gestão de customer success. O livro é dela: o prefácio se chama literalmente **"Prefácio da
Gainsight"**; os autores são o CEO e o Chief Customer Officer da empresa; **os painéis das Figuras
12.2 e 12.3 são telas do produto da Gainsight e da Intacct**, nomeadas como tais; e **o capítulo 16
inteiro é um argumento para comprar uma "solução de gestão de customer success"**, com o número de
retorno (25% a 30% de ganho de produtividade) fornecido pelo próprio fornecedor sobre o próprio
produto. Vários autores das dez leis são executivos de empresas que são clientes ou parceiras.

**Veredito, no padrão já usado com Brunson:** *nada grave — o livro é um funil declarado.* A
declaração é feita na primeira página, não escondida. **Mas duas consequências práticas:**

- **O capítulo 16 deve ser lido como material comercial**, e os 25%–30% tratados como **hipótese de
  fornecedor**, não parâmetro;
- **a insistência em que "isso não se faz sem sistema"** aparece em quatro das dez leis, e é
  precisamente o que a Gainsight vende. **A parte conceitual sobrevive à ressalva; a urgência de
  comprar ferramenta, não.**

**Posição no ranking ético (§6 da jurisprudência):** entre **Miller** e **Gitomer** — passa com
folga, com três ressalvas nomeadas (simulação de origem pessoal em e-mail automático, recompensa por
uso em vez de resultado, e a conjectura da United). **Mais limpo que Brunson, Weinberg, Schwartz,
Suby, Voss e Klaff.**

### 16.5 — Comparação de evidência com o resto do acervo

**Melhor que:** Gitomer (zero evidência em 294 páginas), Klaff (n=1 sem fonte), Voss (neurociência da
mesma família do cérebro trino).

**Pior que:** Cialdini (experimento controlado), Weinberg (40+ entrevistas, mesmo com viés de
sobrevivência), Schwartz (mediu de verdade, ainda que os números não estejam no livro).

**Equivalente a:** Ross, Miller, Suby, Brunson — depoimento executivo autorrelatado, sem método.

**Um ponto a favor, e é relevante:** **não há alicerce desacreditado.** O livro não ancora técnica
boa em ciência ruim. Não há 7-38-55, não há cérebro trino, não há "50% do fracasso é atitude", não
há pose de poder. **Os conceitos são operacionais e mensuráveis — não provados, mas testáveis.** Numa
biblioteca em que sete alicerces já foram desacreditados (§5 da jurisprudência), **isso é uma
qualidade que merece registro: é o primeiro livro do acervo que não adiciona nada ao §5.**

### 16.6 — Veredito de uso

**Use este livro para:** desenhar a medição de retenção do Academy; construir o escore de saúde do
aluno; decidir a estrutura de acompanhamento por camada; instalar as categorias de evasão; definir
time-to-value e a primeira vitória por degrau; e montar o argumento financeiro de investir em
entrega contra investir em aquisição.

**Não use para:** decidir preço; desenhar currículo; estruturar time; ou como referência de
organograma. **E não leia a Parte III como instrução** — leia como diagnóstico de um mercado
americano de 2016.

**A frase que resume o livro para a Altta**, e é do próprio Steinman:

> **Não temos escolha senão prestar atenção ao cliente, e por uma única razão: é questão de vida ou
> morte.**

---

## Fonte e aviso

**Livro:** *Customer Success: How Innovative Companies Are Reducing Churn and Growing Recurring
Revenue* — Nick Mehta, Dan Steinman e Lincoln Murphy (Wiley, 2016). Edição brasileira: Autêntica
Business, tradução de Afonso Celso da Cunha Serra. PDF em
`empresa/estrategia/biblioteca/pdfs/` (arquivo grafado "Customer Succes").

**Autoria dos capítulos:** Partes I e III e os "Comentários adicionais" da Parte II são de Dan
Steinman. Os capítulos 5 a 14 (as Dez Leis) têm autores convidados: Ted Purcell (Clarizen), Karen
Pisha (Code42), Nello Franco (Talend), Dan Steinman (Gainsight), Bernie Kassar (Mixpanel), Kirsten
Maas Helvey (Cornerstone), Diane Gordon (Brainshark), Kathleen Lord (Intacct), Jon Herstein (Box) e
Nick Mehta (Gainsight). Material originalmente encomendado pela Bessemer Venture Partners.

**Este documento é síntese autoral, não transcrição.** Conceitos reescritos com palavras próprias,
exemplos e casos recontados em prosa, números e frameworks batizados preservados. Nenhum parágrafo
do original foi reproduzido. Citações pontuais entre aspas são curtas e identificadas.

**Consumido pela skill `biblioteca-decide`.** Arbitragem em
[`_jurisprudencia.md`](_jurisprudencia.md). Hierarquia: **dado real da Altta > `altta.html` §08 >
jurisprudência > convergência entre livros > livro isolado**, com o crivo ético de Cialdini como
veto transversal.

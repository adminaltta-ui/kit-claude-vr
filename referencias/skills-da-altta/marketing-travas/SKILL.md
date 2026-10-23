---
name: marketing-travas
description: Revisar qualquer peça de marketing da Altta antes de sair (anúncio, roteiro, imagem, texto do anúncio, página, VSL, mensagem de WhatsApp, post) pelo crivo ético, pelas regras da Meta e do Google, pelas regras dos conselhos (quando a peça mostra anúncio de clínica), pela regra de IA e pelas regras da Altta. Devolve um parecer por elemento, com a regra e a troca sugerida, e a data da regra de conselho usada. Use quando o pedido for "passa pelas travas", "revisa esse anúncio", "isso pode ir para o ar?", "a Meta reprova isso?", "isso fere o conselho?", e sempre que outra skill de marketing (criativo-leva, criativo-estatico e as próximas) terminar uma peça.
metadata:
  area: Estratégia
  frequencia: semanal
  resumo: "Revisa toda peça de marketing pelo crivo ético, pela Meta, pelo conselho e pelas regras da Altta, e diz o que trocar."
  quando: "Antes de qualquer anúncio, roteiro, página ou mensagem ir para o ar."
  exemplo: "Passa esse anúncio do curso de precificação pelas travas."
---

# As travas do marketing da Altta

Nenhuma peça de marketing sai sem passar por aqui. A skill não escreve a peça: ela lê, julga cada elemento e
sugere a troca. Quem decide trocar é quem escreveu, e o que for decisão do João vai para ele.

**A fonte é a seção 1 da arquitetura** (as decisões que já valem):
`empresa/estrategia/biblioteca/ARQUITETURA-DO-MARKETING.md`, do título `## 1.` ao `## 2.`. Leia inteira antes do primeiro
parecer da sessão. A lista abaixo é o roteiro de conferência. Se ela e a arquitetura discordarem, vale a
arquitetura, e a lista daqui se corrige.

Quando a peça mostra **anúncio de clínica** (exemplo de aula, de curso, de post educativo), leia também a
`P-regras` §2.1 e §6.2: `empresa/estrategia/biblioteca/fontes/mercado-e-setor/pesquisa-marketing-da-clinica-e-regras-dos-conselhos.md`
(a tabela por conselho é a 2.1; o que nenhum criativo de clínica pode ter é a 6.2).

## Quem chama

- **O João ou o Arthur**, direto, colando a peça ou o caminho do arquivo.
- **Outra skill de marketing**, no fim da peça. Nesse caso a revisão roda num **agente separado** (Agent,
  `general-purpose`), para quem revisa não ser quem escreveu. O prompt do agente é curto:
  `Use a skill marketing-travas na peça em <caminho>. Devolva só o parecer no formato da skill.`

## O passo a passo

1. **Saber o que é a peça e quem fala nela.** Anúncio da própria Altta (fala com o profissional) ou exemplo de
   anúncio de clínica (fala com o paciente). Imagem, vídeo, texto ou os três.
2. **Se for anúncio de clínica, achar o conselho de quem assina** (dentista, médico, biomédico, farmacêutico,
   enfermeiro, fisioterapeuta). Sem ele, vale a regra mais restritiva: educativo, sem preço, sem gratuidade, sem
   antes e depois, sem paciente identificado (`P-regras` §6.3).
3. **Quebrar a peça em elementos:** gancho falado ou escrito, gancho visual, corpo, chamada, oferta, texto e
   título do anúncio, imagem, quem aparece, legenda, página de destino citada.
4. **Passar cada elemento pelas seis listas abaixo**, na ordem. Um elemento pode quebrar mais de uma regra.
5. **Escrever o parecer** no formato do fim desta skill. Toda reprovação traz a troca, escrita pronta para usar.

## As seis listas

### A. O crivo ético (arquitetura 1.2, o veto de Cialdini)

Toda técnica que funciona por fabricar um sinal falso está fora, por mais que venda.

- Escassez, prazo, vaga, cronômetro, "só para os cinco primeiros": só se o limite existir de verdade.
- Valor âncora e bônus só com valor real. A âncora honesta do Academy é a soma dos cursos avulsos.
- Desconto só com motivo verdadeiro.
- Depoimento só real e autorizado por escrito. Nada escrito pelo redator, nada de ator no papel de aluno.
- Ninguém finge ser quem não é: nada de ator como profissional de HOF, de especialista fictício, de celebridade
  sem autorização.
- Nenhum número, estudo ou estatística sem fonte e data. O ônus da prova é de quem anuncia (CDC, art. 38).
- Nenhum mecanismo inventado: o nome curioso só nomeia o que o produto tem de verdade.
- Nenhum disfarce que engana: notícia fabricada, "podcast" que não existe, aula gravada dita ao vivo, mensagem
  com cara de comunicado oficial. Cara de conteúdo é honesta quando o conteúdo é de verdade.
- Garantia só a que o João aprovou. O arrependimento de 7 dias do CDC é o piso.
- Quiz e diagnóstico só se dizem personalizados se o resultado mudar com as respostas.
- Sem falso desinteresse ("não ganho nada com isso").
- Sem medo fabricado e sem ataque a quem lê. Medo só informativo e real, com fonte.
- O vilão é uma condição, nunca uma empresa ou pessoa. Teste: a peça funcionaria igual se a agência fosse
  competente?

### B. A Meta e o Google, no anúncio da Altta (arquitetura 1.3.1)

- Nada que afirme ou insinue um atributo de quem vê: saúde, idade, situação financeira. "Se você sofre com
  agenda vazia", "você que fatura pouco", "você que está quebrado" reprovam. Fala-se do serviço e da situação.
  A profissão pode ser nomeada ("se você é biomédico esteta"), mas veja a colisão 4.15 da arquitetura
  (nomear a profissão e a faixa de faturamento) antes de aprovar profissão somada a faturamento.
- Nada de "inferioridade sobre a aparência", nem como exemplo de copy de clínica dentro do anúncio.
- Nada de nome comercial de toxina ou de medicamento de prescrição (Lei 9.294/1996).
- Nenhuma técnica de burlar a revisão (cloaking, conta comprada, limpar metadados, subir o mesmo vídeo como
  novo).
- Peça feita com IA aceita o rótulo de IA da plataforma. O critério não é esconder, é não fingir gente.
- Mensagem de WhatsApp: nada de disparo em massa nem cara de alerta (o número é Uazapi, não é a API oficial).
  Ninguém entra em grupo ou lista sem ter pedido (LGPD).
- Política de Saúde e bem-estar da Meta: versão de 2026-07-22. Atributos pessoais: versão de 2024-06-26.

### C. O conselho, só quando a peça mostra anúncio de clínica (arquitetura 1.3.2 e `P-regras` §6.2)

Nunca: promessa ou garantia de resultado · superlativo ("o melhor", "referência número 1") · "grátis" ou
"gratuita" ligado a consulta, avaliação ou procedimento · sorteio de procedimento · vídeo do procedimento
sendo feito para leigo · nome de toxina, marca de produto ou equipamento · imagem editada de paciente ·
paciente identificável sem termo com a finalidade escrita · frase que ataca a aparência ou afirma condição de
quem vê · antes e depois no Google · estética para menor de 18 na Meta · título de especialista não registrado ·
peça sem nome e número do conselho.

Depois, a linha do conselho na tabela 2.1 da `P-regras`. O que mais confunde: o médico pode preço e antes e
depois educativo com o conjunto completo; o dentista não pode preço nem forma de pagamento, e a aposta segura é
não escrever "antes e depois"; o biomédico pode antes e depois com as duas legendas e não pode promoção; o
enfermeiro tem a regra de imagem mais dura.

⚠️ **Datar sempre.** A regra de conselho usada é a da pesquisa de 2026-10-07. O CFO está reescrevendo o
capítulo de publicidade e há três disputas de competência abertas (dentista, biomédico, farmacêutico). Se hoje
for depois de 2027-01-07, avise no parecer que a regra pode ter mudado e sugira revisar a `P-regras`.

### D. A regra de IA (arquitetura 1.4)

A IA não pode: inventar a fala do público · inventar prova · ser avatar falando como profissional, aluno ou
paciente · voz sintética de sócio, professor ou aluno · depoimento de quem não existe · foto de resultado ou
antes e depois gerado · animar foto de pessoa real · rosto realista gerado apresentado como alguém da Altta.
Na imagem: pessoa gerada só se ficar claro que não é alguém real da Altta nem cliente.

### E. O que a Altta não usa do infoproduto de massa (arquitetura 1.5)

Promessa de renda ou faturamento na manchete ("fature X mil") · dinheiro e ostentação como isca · apelo de
saúde de massa (mecanismo pseudocientífico, causa inventada) · humor que ofende · erro de português de
propósito · polêmica contra pessoa real · "react" em tom de ataque · back redirect · mensalidade com primeiro
mês a R$ 1 · copiar anúncio, vídeo ou corte de terceiro (modelar a estrutura é estudo, copiar é obra alheia).

### F. As regras da Altta (arquitetura 1.1 e 1.6)

- Sem travessão, em texto nenhum. Português do Brasil com acento.
- Linguagem sem gênero no texto que fala com o cliente (nada de "sozinha", "cansada", "a doutora").
- Nenhuma peça abre com tensão de marca. A frase da "proporção" está morta: abre pela dor concreta da clínica.
- A frase da empresa é uma só: "a Altta é o ecossistema de crescimento da clínica de harmonização". Nunca
  "ecossistema de educação".
- Nenhum prazo prometido ("em 30 dias", "na próxima semana").
- ALTTA ou Altta, nunca minúsculo. Todo produto é `Altta + alguma coisa`.
- A Íris nunca se passa por humana.
- Nenhum case de aluno com nome, nem número de faturamento atribuído a alguém, fora da página de vendas com
  autorização.
- Os sócios: nunca no formato "guru" (terno, escritório, texto lido); falam de comercial e marketing, nunca de
  aplicar procedimento; credencial curta e verificável. Nas **capas do orgânico** eles não aparecem.
- A capa de cinema por IA no pago é um formato entre vários, nunca com pessoa sintética que pareça alguém real.

## O parecer (o formato da saída)

Curto. Uma linha por elemento que tem problema; o que passa limpo vai junto numa linha só.

```text
PARECER: <nome da peça> · <data de hoje>
Veredito: APROVADA | APROVADA COM AJUSTE | REPROVADA
Conselho: <qual, ou "não se aplica", ou "não informado: usei a regra mais restritiva"> · regra de 2026-10-07

NÃO PASSA
1. <elemento, citado entre aspas> · <a regra, com a seção> · Troca: "<o texto novo, pronto>"
2. ...

PARA O JOÃO DECIDIR
- <o que não é trava, é escolha dele: garantia, âncora, preço, sócio na peça>

PASSA
<os elementos que passaram, numa linha>
```

- **REPROVADA** quando a peça quebra o crivo ético (A), uma regra da Meta que derruba a conta (B) ou uma regra
  de conselho com 🟢 (C). Não se sobe com ajuste por cima: refaz o elemento.
- **APROVADA COM AJUSTE** quando só há trocas de texto, de regra da Altta (F) ou de leitura de risco (🟡).
- Na dúvida entre as duas, reprove. A conta da Meta acumula reprovação e pode travar.
- Não inventar regra que não está nas fontes. Se o caso não está coberto, diga "sem regra escrita" e mande para
  o João em PARA O JOÃO DECIDIR.

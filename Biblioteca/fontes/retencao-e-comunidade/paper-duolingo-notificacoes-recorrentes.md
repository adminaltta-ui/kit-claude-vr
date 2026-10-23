---
titulo: "A Sleeping, Recovering Bandit Algorithm for Optimizing Recurring Notifications"
tipo: artigo
fonte: https://research.duolingo.com/papers/yancey.kdd20.pdf
autor: Kevin P. Yancey e Burr Settles (Duolingo), KDD 2020
data_publicacao: 2020-08
data_processamento: 2026-09-19
assuntos: [retencao-e-comunidade, produto-e-plataforma, funil-e-nutricao, ia-e-tecnologia]
peso: evidencia
confiabilidade: alta
resumo: Lembrete diário funciona quando varia e depende do contexto da pessoa; repetir a mesma mensagem dessensibiliza. Mais os dados de ofensiva do Duolingo (esforço baixo por dia sobe retenção).
---

# O lembrete diário: variar vale mais que insistir

**O que é:** paper apresentado na KDD 2020 (a conferência da ACM de mineração de dados), com teste
A/B em produção sobre milhões de lembretes diários, e dados de replicação públicos. É `evidencia`.
Acrescentei no fim os números de ofensiva que o próprio Duolingo publicou no blog, marcados como
fonte do fornecedor. Lido pela pesquisa da sessão A das ferramentas do Autonomy (2026-09-19).

## O problema

O Duolingo (então com mais de 300 milhões de usuários) manda um lembrete diário de prática. O
texto sai de um conjunto de modelos escritos à mão, com espaço para dado da pessoa:

- *"Você está pegando fogo. Continue sua ofensiva de 109 dias"*, que só vale para quem tem 3 ou
  mais dias seguidos;
- *"Pronta para a viagem? Pratique 5 minutos agora"*, que só vale para quem declarou que estuda
  para viajar.

A pergunta: qual modelo mandar para cada pessoa, a cada dia?

## Os dois achados que mandam no desenho

**1. Novidade tem efeito.** Modelo que a pessoa não viu recentemente tem mais impacto. Um
algoritmo comum acaba mandando o mesmo texto todo dia, e isso, nas palavras dos autores, fica
repetitivo, **dessensibiliza** e não melhora o engajamento no longo prazo. Mandar sempre o mesmo
modelo **reduz o resultado em 0,5%**.

**2. Contexto tem efeito, e média simples engana.** Cada modelo vale só para parte da base.
Comparar a média de quem recebeu cada um mistura público diferente. No exemplo do paper, um
modelo parecia o melhor e o ganho real dele era 0,37%, contra 1,48% de outro.

## A solução, em linguagem simples

Cada modelo ganha uma nota: o resultado quando ele foi usado, comparado com quando ele podia ter
sido usado e outro foi escolhido. A nota sofre uma **penalidade por uso recente**, que cai pela
metade a cada 15 dias. A escolha final é sorteada, com mais chance para as notas altas.

**Sucesso = a pessoa praticar em até 2 horas depois do lembrete.** Não é abrir a notificação: é
fazer a ação.

## Os números

- Teste fora do ar com 34 dias de dados (88 milhões de linhas de treino, 114 milhões de teste).
- Teste A/B em produção: **+0,5% de usuários ativos por dia e +2% de retenção de usuários novos**,
  sobre uma linha de base já forte.

## Os números de ofensiva (blog do Duolingo, fonte do fornecedor)

⚠️ Estes vêm do blog da empresa sobre o próprio produto. São testes A/B dela, mas não revisados
por pares. Tratar como dado de fornecedor.

- **Baixar o esforço do dia foi a maior alavanca.** Em 2020, a ofensiva passou a exigir 1 lição em
  vez de bater a meta diária: **+3,3% de retenção no dia 14**, +1% de ativos por dia, **+40% de
  usuários com ofensiva de 7 dias ou mais um ano depois.**
- **Meta alta mata o hábito.** Antes da mudança, quase 40% de quem usou dois dias seguidos sem
  manter a ofensiva tinha escolhido a meta "intensa".
- **Folga protege.** A proteção de fim de semana levou +4% a voltar uma semana depois e 5% menos a
  perder a ofensiva. (Convergente com Sharif e Shu, UCLA e Wharton: meta com uma reserva de
  emergência aumenta a persistência depois de uma falha.)
- Quem chega a 7 dias seguidos tem 3,6 vezes mais chance de concluir o curso. ⚠️ **Correlação:**
  quem chega a 7 dias já era mais engajado.

Fontes: https://blog.duolingo.com/improving-the-streak/ ·
https://blog.duolingo.com/how-streaks-keep-duolingo-learners-committed-to-their-language-goals/

## As lições de produto

1. **Lembrete recorrente precisa variar**, e o conteúdo precisa vir do contexto da pessoa.
2. **Medir o lembrete pela ação em até 2 horas**, não pela abertura.
3. **O ganho de notificação é pequeno por pessoa e grande na base.** É ajuste fino, não motor.
   Quem traz a pessoa de volta é o produto resolver algo que ela precisa hoje.
4. **O esforço diário mínimo decide mais que qualquer lembrete.** A ação diária precisa ser curta
   o bastante para caber num dia ruim.

## Aplicação Altta

- **O lembrete da aluna vai pelo WhatsApp, pela Íris**, não por notificação do navegador. Motivo:
  app web no iPhone só recebe notificação a partir do iOS 16.4 e só se estiver na tela de início
  (WebKit, 2023), e o WhatsApp está na tela inicial de 64,8% dos celulares brasileiros (Mobile
  Time, 2026). A Íris já cobra relatório e tarefa (decisão de 2026-09-17), então é a mesma via.
- **A mensagem da Íris traz o conteúdo pronto** ("a ideia de hoje é esta, com a legenda") e varia
  de modelo. ⛔ Nunca o mesmo "não esqueça de postar hoje" todo dia.
- **A ação diária do app de Conteúdo e do de Conversas cabe em menos de um minuto:** uma sugestão,
  copiar, voltar para o Instagram ou o WhatsApp. Meta semanal com folga (por exemplo, 3 de 5
  dias), nunca meta diária rígida.
- **O que não transplanta:** o Duolingo tem centenas de milhões de usuários e mede 0,5%. Com
  dezenas de alunas, a Altta não vai medir efeito de modelo de lembrete. Transplanta a regra
  (variar, contexto, esforço baixo), não o algoritmo.

---
titulo: "The 6 Types of Conversations with Generative AI"
tipo: artigo
fonte: https://www.nngroup.com/articles/AI-conversation-types/
autor: Raluca Budiu, Feifei Liu, Emma Cionca e Amy Zhang (Nielsen Norman Group)
data_publicacao: 2023-11-10
data_processamento: 2026-09-19
assuntos: [produto-e-plataforma, ia-e-tecnologia]
peso: evidencia
confiabilidade: alta
resumo: Estudo de diário com 425 conversas reais com IA; seis tipos de conversa, cada um pede uma interface diferente; o pedido certeiro é o que mais cansa quem pede, e é o que um perfil guardado pode poupar.
---

# Os seis tipos de conversa com IA, e o que cada um pede da tela

**O que é:** estudo de diário do Nielsen Norman Group. `evidencia`, com a ressalva de amostra
pequena. Lido pela pesquisa da sessão A das ferramentas do Autonomy (2026-09-19). Somei no fim dois
achados do NN/g sobre letramento em IA que decidem o desenho para público leigo.

## O estudo

**18 participantes, 2 semanas** (maio e junho de 2023), usando ChatGPT 4.0, Bard e Bing Chat. **425
conversas** registradas, cada uma com nota de utilidade e de confiança. 14 entrevistados depois.

- Em média, **3,6 pedidos por conversa** (mediana 3).
- **O tamanho da conversa não tem relação com a utilidade nem com a confiança.** Não existe
  tamanho ideal de conversa: existe o tipo certo de tela para cada tipo de conversa.

## Os seis tipos

| Tipo | O que a pessoa faz | O que a tela deve fazer |
|---|---|---|
| **Busca** | Um pedido curto, sem refinar, como no Google. Costuma falhar: falta contexto | Pedir o contexto que falta |
| **Funil** | Começa vago e vai estreitando. Reconhece a resposta certa quando vê, mas não sabe descrever tudo o que quer | Fazer perguntas que estreitam, e mostrar exemplo de pedido bom |
| **Exploração** | Começa amplo para entender o assunto e ter ideias | Oferecer sugestões de continuação |
| **Lapidação** | Pergunta vários lados do mesmo tema | Sugestões amplas, sobre vários lados |
| **Pedido certeiro** | Já sabe o que quer e escreve um pedido completo desde o início. **Custa muito esforço de quem pede**: precisa dar toda a informação | Pedir detalhes do caso e do formato da resposta |
| **Ampliação** | Começa estreito e vai afrouxando quando não serve | Sugerir afrouxar critérios |

**A regra geral do artigo:** descobrir cedo que tipo de conversa é, e ajustar o comportamento.

## O que o NN/g diz sobre o público leigo (artigos complementares)

- **Nielsen estima que metade da população dos países ricos não escreve bem o bastante** para
  tirar bom resultado de um chat de IA. Quem tem pouca prática escreve como busca no Google e
  **aceita a primeira resposta sem conferir.**
  https://www.nngroup.com/articles/ai-paradigm/ · https://www.nngroup.com/articles/ai-literacy/
- **Tela em branco com só um campo de texto afasta.** Sugestão pronta perto do campo ajuda, mas
  **sugestão genérica raramente funciona** (NN/g, 2025): ela precisa ser do caso da pessoa.
  ⚠️ Voto dissidente: um estudo de 2024 com iniciantes achou exemplos amplos melhores. A
  conciliação, numa ferramenta de nicho: a sugestão é específica do nicho.
  https://www.nngroup.com/articles/designing-use-case-prompt-suggestions/
- **Resultado precisa poder ser guardado e compartilhado** (diretriz 9 das diretrizes de chatbot
  do NN/g, 2026), e **editado em um trecho sem refazer tudo** (*accordion editing* e *apple
  picking*).
  https://www.nngroup.com/articles/ai-chatbots-design-guidelines/ ·
  https://www.nngroup.com/articles/accordion-editing-apple-picking/

## Limites

Ferramentas de 2023, 18 pessoas nos EUA, sem a frequência de cada tipo.

## Aplicação Altta

- **A aluna é o público leigo do artigo.** Uma tela de chat em branco, "pergunte o que quiser", é o
  pior desenho para ela. A IA entra em forma de **sugestão pronta do nicho dela** e de botões, não
  de campo aberto.
- **O app Conversas é pedido certeiro**, e o que cansa ali é dar o contexto. **O Meu perfil
  guardado é o que paga esse contexto por ela**: público, oferta, tom e procedimento entram sozinhos
  em todo pedido. Ela só cola a mensagem da paciente.
- **O app Conteúdo é exploração e lapidação:** depois de cada resultado, sugestões de continuação
  ("mais curta", "vira stories", "outro gancho").
- **Converge com a F00 (o motor de geração):** regenerar com motivo, nunca regenerar cego, e
  "entrada insuficiente, a tela diz o que falta". O NN/g dá o nome disso: é a tela de funil pedindo
  o contexto que a busca não trouxe.

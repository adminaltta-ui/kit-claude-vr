---
titulo: "Prompt Controls in GenAI Chatbots: 4 Main Uses and Best Practices"
tipo: artigo
fonte: https://www.nngroup.com/articles/prompt-controls-genai/
autor: Feifei Liu (Nielsen Norman Group)
data_publicacao: 2024-08-02
data_processamento: 2026-09-19
assuntos: [produto-e-plataforma, ia-e-tecnologia]
peso: referencia
confiabilidade: alta
resumo: Botões, cartões e pílulas em volta do campo de IA vencem a dificuldade de dizer o que se quer; nome literal, ícone padrão, um grupo por função e nenhum gesto inventado. Mais o Smart Reply do Gmail (10% das respostas no celular).
---

# Os controles em volta do pedido: como a IA vira botão para quem não sabe pedir

**O que é:** artigo do NN/g com base em pesquisa qualitativa de chatbots dos EUA e da China.
`referencia`: método com pesquisa por trás, sem número de desempenho além de um. Acrescentei o
paper do Smart Reply do Google, que é `evidencia` e mostra o mesmo princípio medido. Lido pela
pesquisa da sessão A das ferramentas do Autonomy (2026-09-19).

## A ideia

*Prompt controls* (controles de pedido) são os componentes em volta do campo de texto de uma IA:
botões, dicas, chaves, cartões, menus. Eles tornam a interface **híbrida** (parte conversa, parte
botão) e atacam a **barreira de articulação**: a dificuldade de descrever em palavras o que se
quer.

## Os quatro usos

1. **Mostrar o que a IA sabe fazer**, sem a pessoa ter de perguntar. No estudo, um participante
   levou várias trocas para descobrir que precisava colar um relatório de 100 páginas, e desistiu.
2. **Ensinar e inspirar:** cartões de tarefa prontos para usar ou editar.
3. **Delimitar o escopo:** escolher a fonte ou o formato da saída antes de pedir.
4. **Facilitar a continuação.** **Metade das conversas tinha uma ação de continuação.** Exemplos:
   editar, refazer, avaliar, e o "modificar resposta" com "mais curta", "mais longa", "mais
   informal".

## As quatro boas práticas, e o que deu errado no teste

- **Ícone padrão e rótulo escrito.** A pessoa tem pouco conhecimento do domínio e ainda não tem
  modelo mental da ferramenta. Uma varinha mágica confundiu todos os participantes (um achou que
  ia mostrar emojis). A vassoura de "nova conversa" virou um balão com "+" e o rótulo "Novo assunto".
- **Nome literal.** Um recurso chamado "Pense com cuidado" gerou a pergunta "pensar com cuidado
  sobre o quê?". O certo é o nome do que acontece: "Texto para vídeo".
- **Agrupar por função.** Com 10 a 15 funções misturadas num botão só, **nenhum participante achou
  a de vídeo.**
- **Seguir a convenção.** Padrão inventado, mesmo com boa intenção, confunde. Um app sequestrou o
  toque longo para copiar o pedido inteiro, e quem queria um trecho se perdeu. Um erro mostrado no
  topo da tela, longe do botão de enviar, ninguém viu.

## O mesmo princípio, medido: o Smart Reply do Google

Kannan e colegas (KDD 2016): o Smart Reply mostra **três respostas curtas** prontas embaixo do
e-mail, enviadas com um toque. No Inbox, ele respondia por **10% de todas as respostas enviadas
pelo celular.** É o dado mais forte de que sugestão pronta, em botão, perto de onde a pessoa já
está, é usada de verdade.
https://research.google/pubs/smart-reply-automated-response-suggestion-for-email/

Convergentes, sem número, mas com o mesmo desenho: o *Help me write* do Gmail (refinar com
"Formalizar", "Elaborar", "Encurtar"), o *Writing Help* do WhatsApp (quatro tons, fica com a sua ou
com a sugerida, agosto de 2025), o Magic Write do Canva ("Mais assim", "Isto, mas…") e a legenda
com IA do mLabs (tom e tamanho).

## Aplicação Altta

- **A regra do João de 2026-09-19** ("poucos botões, IA de verdade, já vi essa tela") é, na
  prática, esta lista: botões de tom e tamanho em volta do resultado em vez de campo aberto, nome
  literal ("Responder paciente", nunca nome de marca), um grupo de botões por função, nenhum gesto
  inventado.
- **Os refinamentos usam as palavras que ela já viu** no Gmail e no WhatsApp: "mais curta", "mais
  acolhedora", "mais direta". ⛔ Nada de "Varinha", "Mágica" ou nome de recurso criativo.
- **A F00 pede três versões e um campo para a quarta.** O Smart Reply dá três respostas curtas, o
  que confirma as três. ⚠️ O campo da quarta, escrito do zero, é regra de curso (converter
  reconhecimento em evocação, Dirksen) e não de ferramenta: no app de uso diário a aluna edita em
  cima da escolhida, e o que ela editou é que vira a "quarta" guardada.

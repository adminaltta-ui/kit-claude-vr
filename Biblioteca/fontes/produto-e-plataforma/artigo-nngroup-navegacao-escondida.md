---
titulo: "Hamburger Menus and Hidden Navigation Hurt UX Metrics"
tipo: artigo
fonte: https://www.nngroup.com/articles/hamburger-menus/
autor: Kara Pernice e Raluca Budiu (Nielsen Norman Group)
data_publicacao: 2016-06-26
data_processamento: 2026-09-19
assuntos: [produto-e-plataforma]
peso: evidencia
confiabilidade: alta
resumo: Esconder a navegação atrás de um menu derruba em mais de 20% a chance de achar o conteúdo; com 4 destinos ou menos, mostre todos. Mais as regras de barra de abas (Apple, Material) e de gaveta que sobe de baixo (NN/g).
---

# Navegação escondida custa caro, e o que o mercado padronizou no lugar

**O que é:** relato de teste quantitativo de usabilidade do Nielsen Norman Group, a referência
mais citada de pesquisa de UX. `evidencia`. Acrescentei no fim as regras oficiais de Apple e
Google sobre barra de abas e o artigo do NN/g sobre a gaveta que sobe de baixo, porque os três
decidem juntos onde as coisas moram num app. Lido pela pesquisa da sessão A das ferramentas do
Autonomy (2026-09-19).

## O estudo

**179 participantes, 6 sites reais, 2 tarefas simples por site**, no celular e no computador. Três
condições:

- **escondida:** os links principais ficam sob um ícone ou botão e exigem um toque para aparecer;
- **visível:** os links se veem de relance, sem ação nenhuma;
- **combinada:** parte visível, parte escondida.

## Os números

| | Escondida | Combinada | Visível |
|---|---|---|---|
| Uso da navegação, computador | 27% | 50% | 48% |
| Uso da navegação, celular | 57% | 86% | n/d |
| Dificuldade percebida (1 a 7, menor é melhor) | **2,6** | 2,3 | **2,1** |

- **Encontrar conteúdo cai mais de 20%** com a navegação escondida.
- **Tempo de tarefa:** pelo menos 39% mais lento no computador, **15% mais lento no celular**.

## Por que a escondida falha (as cinco razões do artigo)

1. O ícone pequeno se nota menos.
2. O ícone não diz o que tem dentro.
3. Para saber o que tem dentro, é preciso abrir.
4. Cada site esconde de um jeito, então não há padrão para reconhecer.
5. Baixa familiaridade.

## A regra

> **No celular, com 4 destinos principais ou menos, mostre todos.** Com mais de 4, esconder alguns
> é a única saída razoável. E ponha link direto para o que importa dentro da própria página.

## O que o mercado padronizou (fontes oficiais, convergentes)

- **Material Design (Google):** a barra de baixo tem **de 3 a 5 destinos**, nunca mais.
  https://m2.material.io/components/bottom-navigation
- **Apple (HIG):** rótulo de **uma palavra** por aba, evitar a aba "Mais", e a barra serve para
  **navegar, não para fazer ação**.
  https://developer.apple.com/design/human-interface-guidelines/tab-bars
- **Material Design:** **um único botão principal por tela**, para a ação mais comum (o "+" do
  Mobills, o "Escrever" do Gmail).
- **NN/g sobre a gaveta que sobe de baixo** (*bottom sheet*): serve **só para interação rápida**,
  sempre com um X visível e aceitando o voltar do aparelho. ⛔ **Formulário complexo ou de várias
  etapas dentro dela, gaveta em cima de gaveta, e gaveta sem botão de fechar são erros.**
  https://www.nngroup.com/articles/bottom-sheet/
- **Baymard sobre formulário no celular:** rótulo dentro do campo, que some quando a pessoa
  digita, faz a pessoa apagar o que escreveu para rever o rótulo. Evitar a partir de 3 campos.
  https://baymard.com/blog/mobile-forms-avoid-inline-labels

## Limites

Estudo de 2016, em sites e não em apps, com tarefas simples. As regras de Apple e Google são
diretriz de plataforma, não experimento, mas é exatamente por isso que valem aqui: são o que a
pessoa já viu em todo app que usa.

## Aplicação Altta

- **Os 4 apps das ferramentas são o caso "4 ou menos, mostre todos".** Eles aparecem inteiros e
  à vista no Início, numa fileira, e não atrás de "Ferramentas" dentro da Biblioteca, que é
  navegação escondida dentro de navegação.
- ⚠️ **A barra do Academy tem 6 abas** (decisão de 2026-09-19). O padrão de mercado é de 3 a 5.
  Registrado como achado, não como proposta: não é escopo da reestruturação das ferramentas.
- **A reprovação do João de 2026-09-19** ("formulário que sobe de baixo é estranho ao que se vê no
  mercado") **bate com a diretriz do NN/g.** A gaveta fica para confirmação rápida; formulário vira
  tela própria, uma pergunta por tela, como o Turbinar do Instagram.

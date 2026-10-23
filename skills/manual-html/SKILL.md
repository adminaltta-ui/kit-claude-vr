---
name: manual-html
description: Gera um manual HTML único, bonito e navegável a partir de um conjunto de arquivos markdown existentes, para ler e revisar documentação, não para escrever conteúdo novo. Use quando o usuário pedir para "organizar esses markdowns", "quero ler isso melhor", "gera um HTML desses arquivos", "monta um manual", "transforma essa documentação em HTML", "cria uma página para eu visualizar esses documentos", "junta esses MDs num arquivo só", "quero visualizar isso bonito", "faz um HTML de leitura", ou qualquer pedido de reunir vários .md num documento único navegável (índice lateral, busca, impressão). Não serve para apresentação/deck de slides (use apresentacao-premium) nem para dashboard de dados ao vivo.
---

# manual-html, gerar manual HTML a partir de markdowns

## A regra mais importante

**É sempre gerador, nunca HTML escrito à mão.** O `assets/gerar-manual.js` lê os
`.md` de origem e produz o HTML, nunca o contrário. Motivo: os markdowns mudam, e
um manual editado direto no HTML apodrece na primeira edição de conteúdo (o HTML
vira a fonte errada da verdade). Se o usuário pedir para alterar algo do conteúdo,
a resposta é sempre: **altere o `.md` de origem e rode o gerador de novo**, nunca
edite o HTML gerado diretamente.

## Quando NÃO usar

- Apresentação, deck de slides, pitch: use a skill `apresentacao-premium`.
- Dashboard de dados ao vivo (métricas que mudam, conectado a banco): isto aqui
  gera um arquivo estático a partir de markdown; não serve para isso.

## Passo 1, Descobrir o que entra e como agrupar

Antes de gerar qualquer coisa, identifique:

- **Quais arquivos `.md` entram no manual.** Se o usuário apontou uma pasta, liste
  os `.md` dela (e subpastas relevantes) e confirme com ele antes de prosseguir se
  não estiver óbvio quais entram e quais ficam de fora.
- **Como agrupar em seções.** Seções viram a navegação lateral. Se o usuário não
  disser como agrupar, proponha um agrupamento razoável (por pasta, por tema, por
  ordem de leitura) e pergunte antes de gerar, a menos que o agrupamento seja óbvio
  pela estrutura de pastas já existente.
- **Se há termos que merecem destaque visual** (ex.: "PENDENTE", "TODO", "ATENÇÃO",
  qualquer palavra que o usuário queira rastrear). É opcional, zero termos é um
  caso válido e comum.
- **Tema:** claro (padrão, laranja+grafite) ou escuro. Pergunte só se não for óbvio.

## Passo 2, Copiar o gerador para o projeto do usuário

Copie `assets/gerar-manual.js` desta skill para a raiz do projeto do usuário (ou
para onde ele preferir, contanto que os caminhos relativos do bloco CONFIG façam
sentido a partir de onde o script vai ser executado). Nunca gere o manual rodando
o script de dentro da pasta da skill, ele precisa viver junto do projeto que vai
documentar, porque é isso que o usuário vai rodar de novo no futuro.

## Passo 3, Preencher o bloco CONFIG

O arquivo tem um bloco `CONFIG` bem delimitado no topo, comentado em português.
Preencha:

- `titulo` (e `subtitulo`, opcional), aparece no topo da página e na aba do navegador.
- `marcaCurta` (opcional), rótulo curto no topo da barra lateral; se omitido, o
  script deriva um a partir do título.
- `saida`, caminho do HTML gerado, relativo ao diretório de onde o script vai
  rodar.
- `secoes`, lista de `{ nome, arquivos }`. `arquivos` é a lista de caminhos `.md`
  daquela seção, na ordem de leitura. O `docId` de cada documento é o nome do
  arquivo sem extensão, se dois arquivos configurados tiverem o mesmo nome de
  arquivo (ex.: dois `README.md` em pastas diferentes), o script avisa no console
  sobre a colisão; nesse caso prefira reorganizar a lista para não colidir, ou
  aceite que o segundo pode sobrescrever âncoras do primeiro.
- `destaques`, lista de termos a marcar (pode ser `[]`).
- `tema`, `'claro'` ou `'escuro'`. Para trocar a paleta de cores (rebrandear),
  edite os valores dentro de `PALETAS` no próprio arquivo, a estrutura do CSS não
  precisa mudar.

## Passo 4, Rodar e conferir o resumo

```
node gerar-manual.js
```

O script imprime um resumo no console: documentos processados, títulos, tabelas,
blocos de código, blocos indexados para busca, ocorrências de destaque e tamanho
do arquivo gerado, e avisa claramente (sem quebrar) qualquer arquivo configurado
que não foi encontrado, tanto no console quanto num aviso visível no próprio HTML
gerado.

**Confira esse resumo contra os arquivos de origem** antes de considerar a geração
boa, a contagem de documentos processados deve bater com o número de arquivos
configurados (menos os que faltaram, se algum faltou), e a conversão nunca resume
ou corta conteúdo: é fidelidade total ao markdown de origem.

## Passo 5, Informar o caminho ao usuário

Diga onde o HTML foi gerado (`CONFIG.saida`) e que ele abre direto no navegador por
`file://`, sem servidor, sem internet, zero dependência externa, zero fonte ou
ícone remoto.

## Como regenerar depois de uma mudança

Nunca edite o HTML gerado. Edite o(s) `.md` de origem (ou o bloco `CONFIG` para
adicionar/remover/reordenar seções e arquivos) e rode `node gerar-manual.js` de
novo, ele sobrescreve a saída inteira.

## Como acrescentar um documento novo

Adicione o caminho do arquivo à lista `arquivos` da seção certa em
`CONFIG.secoes` (ou crie uma seção nova com `{ nome: '...', arquivos: [...] }`) e
rode o gerador de novo.

## O que o gerador garante (não mexer nisso)

- Zero dependências externas, só `fs` e `path` do Node, zero `npm install`, zero
  CDN, fonte ou imagem remota.
- Fidelidade total: converte 100% do texto markdown, nunca resume nem corta.
- Escapa corretamente `<`, `>`, `&` vindos do markdown, não quebra a página nem
  permite injeção de HTML.
- Saída em arquivo único autocontido, abre por `file://`.
- Zero emoji na interface gerada; ícones, se precisar, são SVG inline.
- Arquivo configurado que não existe: avisa e segue com os demais, nunca gera
  página silenciosamente incompleta.
- O parser markdown->HTML embutido já foi depurado (bloco de código aninhado
  dentro de item de lista, e resolução de links internos para o título certo em
  vez do topo do documento). Não reescreva o parser, se achar um bug novo nele,
  conserte pontualmente, mantendo a estrutura.

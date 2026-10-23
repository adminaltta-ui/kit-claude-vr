---
name: html-premium-kit
description: O kit pronto para fazer página HTML premium e interativa de primeira. Traz o estilo base aprovado, os ajudantes de comportamento (abas com indicador, número que sobe, cascata, aparecer ao rolar, sem a tela pular), um modelo para copiar e um testador que reprova página que rola sozinha, mostra barra do navegador ou passa da lateral. Use SEMPRE que for criar uma página HTML solta, material de estudo, manual, simulador, painel ou explicação interativa, ou ao refinar o design de uma que já existe.
---

# HTML premium kit

Veio da página do processo da clínica (2026-10-13), uma das páginas aprovadas na Altta. Em vez de o Claude reinventar o visual, ele **parte do que já deu certo**. Leia antes `design-de-primeira` (as regras e o processo); esta skill é a mão na massa.

## O que tem na pasta (`.claude/skills/html-premium-kit/`)
| Arquivo | Para quê |
|---|---|
| `modelo.html` | Página mínima com topo, abas, cartões em cascata, controle segmentado e um simulador. **Copie e comece daqui.** |
| `estilo-base.css` | Tokens da marca, tipografia, topo escuro, abas com indicador, cartões, botões, campos redesenhados, cartões de número, tabela, movimento. |
| `helpers.js` | `$`, `$$`, `set`, `R$`, `tween`, `stats`, `stagger`, `reveal`, `seg`, `kit.abas`. |
| `testar-pagina.cjs` | O testador. Roda no navegador de verdade e reprova o que mais se corrigia à mão. |
| `juntar.cjs` | Cola o CSS e o JS locais dentro do HTML e deixa **um arquivo só**. Obrigatório antes de entregar. |

## Como usar
1. Crie a pasta da página e copie `modelo.html` (renomeie para `index.html`), `estilo-base.css` e `helpers.js`.
2. Troque o conteúdo do modelo. As peças e classes que existem, prontas:
   - **Topo:** `.hero` com `.tag0`, `h1 em`, `.sub`.
   - **Abas:** `.tabs`, `#tabs`, `kit.abas(TABS, INIT)`. Painéis `section.panel#p-ID > .wrap`. O `INIT[id]` roda uma vez ao abrir.
   - **Cartões e grade:** `.card`, `.grid`, `.two`; cascata com `stagger('#lista > .card')`.
   - **Caixas:** `.warn` (aviso), `.pain` (dor, vinho), `.sys` (o que o sistema faz, verde).
   - **Controles:** `.btn` e `.btn.alt`, `.seg` com `seg('#id', fn)`, `.chip`, `.tag t-ok|t-pl|t-fa|t-cf`, `label.chk`, campos e `input[type=range]` já redesenhados.
   - **Números:** `.stats` + `stats(caixa, [{l,v,c}])`, com a contagem animada.
   - **Tabela:** `.pl`. **Vazio:** `.emp`. **Troca de conteúdo:** classe `swap` no bloco novo.
   - **Trilha que rola na horizontal:** classe `.rolagem-limpa` (sem barra, com máscara nas pontas).
3. Peça de comportamento mais complexa (trilha com progresso, gráfico com pontos, mapa, odontograma): monte a partir do `modelo.html` e dos ajudantes do `helpers.js`, sem reinventar o visual.
4. Estilos só da página vão num `estilo.css` à parte, carregado **depois** do `estilo-base.css`.
5. **Junte num arquivo único:** `node ~/.claude/skills/html-premium-kit/juntar.cjs <caminho>/index.html` (sobrescreve o index com o CSS e o JS dentro). Depois pode apagar o `estilo.css` e o `helpers.js` soltos da pasta da página, para não haver duas verdades.
6. Rode o testador: `node ~/.claude/skills/html-premium-kit/testar-pagina.cjs <caminho>/index.html`. Só entregue com `SEM PROBLEMAS`. Ele reprova página que ainda depende de arquivo solto.

## O que o testador confere
- erro na página e no console;
- **clicar em cada botão, peça e aba mexe a rolagem?** (o erro que mais irritou);
- rolagem lateral em 320, 390, 768 e 1280;
- **barra de rolagem do navegador à vista** em área que rola;
- checkbox, radio e range com a cara do navegador.
Ele não tira foto e não julga beleza: isso é o seu olho, abrindo a página.

## Armadilhas que já custaram caro
- **HTML com CSS em arquivo separado abre sem estilo** quando só o HTML é enviado (sócio, GitHub, Vercel, WhatsApp). Já aconteceu de a página chegar como texto cru. Por isso a entrega é sempre arquivo único (`juntar.cjs`).
- O clique do robô rola até o botão; o testador já compensa (ele deixa o botão à vista antes de clicar). Se for testar à mão, faça igual.
- `innerHTML` num bloco que a pessoa está usando faz a tela pular. Troque só o item (`el.outerHTML`) ou a classe.
- `justify-content:center` em lista que rola corta o começo: use `safe center`.
- Fonte do Google não carrega offline: o `font-family` já tem reserva (Georgia e system-ui).
- Texto: português com acento, sem travessão, sem gênero em texto de cliente, e referência numérica sempre com o nome ao lado.
- Dado que não se achou leva o selo 🔴, hipótese leva 🟡, fonte leva 📚.

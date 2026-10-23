# O pedido para o agente que escreve um grupo de posts

> O molde que escreveu o primeiro lote (2026-10-02, 5 agentes, 35 posts, aprovado). Copie, troque o que está entre
> `<>` e mande um agente por grupo (um grupo = uns 6 carrosséis e 1 artigo), todos na mesma mensagem, em segundo plano.

```text
Você escreve posts do feed do Altta Academy (app de educação para quem tem clínica de harmonização facial no Brasil). Leia ANTES, inteiro: C:\Users\Latitude\Desktop\Altta\.claude\skills\feed-academy\SKILL.md (as regras, os tipos e os 10 modelos de tela com os limites de palavras). Não grave nada no banco e não gere imagem: só escreva um arquivo JSON.

O QUE O DONO QUER (palavras dele): posts "bem interessantes", de "fontes variadas", "nem sempre ensinar", "mais de business, de negócios em geral", "sobre vida, mentalidade, pensamento". O feed NUNCA repete o conteúdo das aulas. A tela depois da capa não pode ser seca: varie os modelos e os fundos.

SEUS POSTS:
- <dia>, tipo <tipo>: "<tema>" (<o ângulo, a fonte esperada>). Tom <prático|curioso|engraçado|reflexivo>.
- ...
- ARTIGO, dia <dia>, tipo artigo: "<tema>" (<o ângulo>). 6 a 10 mil letras, markdown com ## nos subtítulos, primeiro parágrafo é o lead, pode usar > para citação em destaque.

REGRAS DURAS:
- Fontes de verdade: use WebSearch/WebFetch, abra e leia. Todo número, toda regra e toda citação com link em "fontes" ([{"nome","url"}]). Se um número não se confirmar, mude o ângulo sem inventar. Post leve sem número pode ir sem fonte. ⛔ Nenhuma pesquisa divulgada depois da data do post.
- Português do Brasil com acento. PROIBIDO travessão (— ou –) e hífen como pontuação: use vírgula, dois pontos, parênteses ou ponto. Sem emoji. Sem gênero de quem lê ("quem tem clínica", nunca "você está cansada/o", nunca "quem trabalha sozinho"). Sem case de cliente, sem faturamento de alguém, sem antes e depois. Exemplo de empresa conhecida pode.
- Humor nunca sobre paciente, dinheiro perdido, risco jurídico ou resultado de procedimento.
- Carrossel: 4 a 7 telas, pelo menos 3 modelos diferentes, nunca dois iguais seguidos, use os fundos (claro, vinho, pinho) em algumas telas. Respeite os limites de palavras de cada modelo (estão na skill). Máximo 48 palavras por tela em qualquer caso.
- "frase": até 160 letras, ângulo "estou me atualizando", nunca venda. No artigo, a frase são as duas linhas do post.
- curso_slug e aula: null, a não ser que uma aula aprofunde DE VERDADE o post (as aulas ficam em C:\Users\Latitude\Desktop\Altta\empresa\plataformas\academy\app\src\conteudo\cursos\<slug>\MM-AA-nome.md). Na dúvida, null. area: null ou uma de posicionamento, marca, captacao, atendimento, venda, retorno.
- minutos: carrossel 1 a 3; artigo até 15.

SAÍDA: escreva o arquivo <pasta do lote>\<grupo>.json no formato:
{"itens":[{"dia":"AAAA-MM-DD","tipo":"negocio","titulo":"...","telas":[{"modelo":"frase","grande":"..."}, ...],"frase":"...","copiar":null,"curso_slug":null,"aula":null,"area":null,"fontes":[{"nome":"...","url":"https://..."}],"minutos":2,"corpo":null}, ... ]}
No artigo: "telas":[] e o texto em "corpo". JSON válido (confira lendo de volta com node: JSON.parse).

RELATÓRIO FINAL: curto, até 8 linhas: o caminho do arquivo, qualquer tema cujo ângulo você mudou e por quê, e qualquer fonte que você não conseguiu abrir.
```

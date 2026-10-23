# Pesquisa de ICP — VR Concept (PT)

Objetivo: descobrir **quem é o cliente, em que estágio ele trava e com que palavras ele descreve o problema** — para definir ICP e argumento de venda. Não é pesquisa de satisfação.

## 1. A decisão central: as duas pesquisas têm funções diferentes

Não é a mesma pesquisa em dois canais. É **censo** e **profundidade**.

| | Censo (cadastro na área de membros) | Profundidade (envio ativo) |
|---|---|---|
| Quem responde | 100% de quem entra — obrigatório | amostra voluntária |
| Tamanho | **6 perguntas, todas fechadas, ~40s** | 12 perguntas, 3 abertas, ~4 min |
| Serve para | segmentar a base inteira, para sempre | entender o porquê, capturar a linguagem |
| Risco se errar | **atrito antes do produto que a pessoa já pagou** | baixo |
| Onde grava | atributo permanente da `core.pessoa` | resposta datada, ligada à mesma pessoa |

⚠️ **O erro que estraga o retorno:** pôr as perguntas abertas e longas no cadastro obrigatório. A pessoa acabou de pagar e quer o conteúdo — cada pergunta a mais derruba conclusão de cadastro e enche o banco de resposta lixo digitada com pressa. O cadastro é curto e fechado. A profundidade vai no envio ativo, com gente que **escolheu** responder.

**Como concatenar:** as 6 perguntas do censo são as **mesmas 6** que abrem a pesquisa ativa, com as mesmas chaves e as mesmas opções. Uma tabela só (`core.pesquisa_resposta`, chave + valor + origem `cadastro`/`ativa`). Quem já respondeu no cadastro pula direto para o bloco de profundidade. Sem isso você fica com dois conjuntos que não cruzam.

## 2. Canal: WhatsApp convida, formulário próprio coleta

Nem só WhatsApp, nem só form.

- **Pesquisa dentro da conversa de WhatsApp não funciona** para 12 perguntas: vira fio solto, resposta fora de ordem, ninguém tabula. WhatsApp serve como **convite**, porque é onde a taxa de abertura existe de verdade (e-mail da base está com ~1,7% de abertura humana real).
- **Formulário: o de vocês, não Google Forms.** Já existe plataforma, banco e link curto com UTM. Form próprio (a) chega pré-preenchido com a pessoa identificada via link — ninguém redigita nome e e-mail, (b) grava direto na `core.pessoa`, (c) o abandono no meio ainda é aproveitado, porque as respostas salvam pergunta a pergunta.
- **Uma pergunta por tela**, barra de progresso, botão grande. Não uma folha com 12 campos.

**Convite que funciona:** mensagem curta, do Vinícius, com a **pergunta de travamento já no corpo do WhatsApp**. Quem responde entra na conversa e recebe o link com a resposta já contada. Micro-compromisso antes do clique dobra a conclusão em relação a mandar o link seco.

⚠️ **A primeira pergunta tem que ser a mais interessante para quem responde, não a mais útil para nós.** "Há quantos anos você é formado?" é dado sobre a pessoa e não devolve nada a ela — parece cadastro, e cadastro ninguém responde. "Em qual etapa você mais trava?" é sobre o problema dela: ler as opções já organiza a cabeça de quem lê. Por isso o travamento passa a ser a pergunta 1 do censo **e** a do convite; tempo de formado desce para a 2.

**Modelo de mensagem** (rascunho do Jhonatan, mantido quase intacto):

> Oi, [nome]. Aqui é o Vinícius, da VR Concept.
> Estamos estruturando os próximos treinamentos e quero entender melhor onde nossos alunos estão travando na prática.
>
> Hoje, em qual etapa você mais trava?
>
> 1. Conseguir ou fechar o paciente
> 2. Diagnosticar e planejar
> 3. Executar com segurança
> 4. Finalizar com estética natural
> 5. Sei fazer partes, mas não sei por onde começar
>
> Pode responder só o número.

O "pode responder só o número" no fim não é detalhe: reduz o custo da resposta a um toque, e é o que separa 20% de 5% de retorno.

**Incentivo:** acesso a um material (ex.: uma aula do Método VR, o Mapa de Cores para quem não tem) — **nunca desconto**. Desconto contamina a amostra: atrai quem quer preço, não quem quer formação, e o plano de 60 dias já veta desconto constante.

**Regras da casa que valem aqui:** dois fluxos separados (um de e-mail, um de WhatsApp — nunca misturados na mesma inscrição) · link passa por `fn_link_encurtar_automatico` com UTM · espaçamento aleatório 30s–5min por envio · janela 9h–21h no fuso de quem recebe.

**Expectativa realista:** ~929 compradores PT de guias + 112 OrganicFlow + 120 presenciais. Com convite por WhatsApp bem feito, 15–25% conclui. Isso dá **150–250 respostas** — suficiente para segmentar. Com e-mail seco seria 2–4%.

## 3. As perguntas

### Bloco A — Censo (6, fechadas, no cadastro e abrindo a pesquisa ativa)

1. **Hoje, em qual etapa você mais trava?** (uma só) — Conseguir ou fechar o paciente · Diagnosticar e planejar · Executar com segurança · Finalizar com estética natural · Sei fazer partes, mas não sei por onde começar
   → a pergunta mais importante do conjunto, e a que abre o convite. As opções seguem **a ordem da jornada do paciente**, então cada resposta cai direto num dono e num produto: (1) comercial e jornada — Gabriela · (2) diagnóstico e planejamento — Gabriela · (3) execução e Método VR — Vinícius · (4) acabamento e OrganicFlow — Vinícius · (5) é a frase-síntese do nosso aluno-alvo ("já fiz vários cursos, mas não sei por onde começar") e aponta para a Formação Método VR completa.
   ⚠️ A opção 5 não é uma etapa da jornada, é a ausência de mapa. Ela precisa existir separada: se ficar de fora, essa pessoa escolhe qualquer uma das outras quatro e some no meio da estatística — justamente o perfil que a formação central existe para atender.

2. **Há quanto tempo você é formado?** — Menos de 3 anos · 3 a 5 · 6 a 10 · 11 a 20 · Mais de 20
   → valida ou derruba o ICP declarado de 3–10 anos.

3. **Como você atua hoje?** — Clínica própria · Sócio · Associado em clínica de terceiros · Serviço público · Ainda não atuo clinicamente

4. **Quantos casos de estética/reabilitação você faz por mês?** — Nenhum · 1 a 2 · 3 a 5 · 6 a 10 · Mais de 10
   → mede poder de compra melhor que perguntar faturamento, e ninguém se ofende. Faturamento em pesquisa de dentista tem taxa alta de abandono e resposta mentirosa.

5. **O que você mais quer dominar nos próximos 12 meses?** (uma só) — Lentes em resina · Reabilitação completa · Prótese sobre implante · Diagnóstico e planejamento · Fotografia e planejamento digital
   → o cruzamento desta com a 1 é o que revela demanda reprimida: quem trava em "diagnosticar" mas quer dominar "lentes em resina" está comprando a etapa errada da própria jornada.

6. **Onde você atende?** — Capital · Interior · Exterior (+ estado/país)
   → precificação e viabilidade de presencial.

### Bloco B — Profundidade (só na pesquisa ativa)

7. **Com suas palavras: o que estava acontecendo no seu consultório quando você decidiu comprar [produto]?** (aberta)
   → a pergunta que mais rende. Sai daqui a copy de página e de anúncio, escrita pelo próprio cliente. Perguntar o **momento**, não a motivação abstrata — "por que você comprou?" devolve racionalização, "o que estava acontecendo" devolve cena real.

8. **Você chegou a aplicar o que aprendeu em um paciente?** — Sim, em vários · Sim, em um · Ainda não, mas pretendo · Não, e acho que não vou
   → separa comprador de aluno. Quem não aplicou não recompra nada.

9. **Se "ainda não" ou "não": o que impediu?** (aberta)
   → a barreira de implementação. Costuma ser a razão real do teto de faturamento, e quase nunca é o que a empresa imagina.

10. **Quantos cursos de odontologia estética você fez nos últimos 3 anos, e qual foi o mais caro que você pagou?** (faixas: até R$500 · R$500–2.000 · R$2.000–5.000 · R$5.000–15.000 · Mais de R$15.000)
    → disposição a pagar **comprovada por comportamento passado**. Vale dez vezes mais que perguntar "quanto você pagaria" — resposta hipotética de preço é a informação mais mentirosa de qualquer pesquisa. Não pergunte isso.

11. **Como você se sentiria se não pudesse mais acessar o material da VR Concept?** — Muito decepcionado · Um pouco decepcionado · Indiferente
    → teste clássico de encaixe produto-mercado. Acima de 40% em "muito decepcionado" indica base pronta para produto de continuidade. Abaixo disso, comunidade e assinatura ainda não se sustentam. Cruze com a pergunta 2: o ICP real é a faixa de tempo de formado que mais responde "muito decepcionado".

12. **O que você esperava encontrar e não encontrou?** (aberta)
    → roadmap de produto vindo de quem já pagou.

**Não perguntar:** nota de 0 a 10 do produto (não muda decisão nenhuma) · "o que você acha do preço?" · "você recomendaria?" · qualquer coisa sobre satisfação. Esta pesquisa é para definir ICP, e cada pergunta decorativa custa respostas nas que importam.

## 4. Ordem de execução

1. Tabela `core.pesquisa_resposta` + as 6 chaves do censo como atributo de pessoa
2. Formulário próprio, uma pergunta por tela, link identificado com UTM
3. Bloco A no cadastro da área de membros (obrigatório, curto)
4. Piloto: 100 pessoas do OrganicFlow PT — mede conclusão e ajusta o convite
5. Envio à base PT completa, nos dois fluxos separados
6. Leitura: cruzar pergunta 1 (travamento) × pergunta 2 (tempo de formado) × pergunta 10 (gasto histórico). O ICP é a interseção, não a maioria de cada uma isolada.

## 5. As duas decisões que dependem de vocês

- **Assinatura do convite:** Vinícius, Gabriela, ou os dois? A resposta muda a taxa de conclusão e enviesa quem responde — convite do Vinícius traz mais gente do eixo técnico.
- **Incentivo:** qual material entra como contrapartida? Precisa ser algo que já existe e não canibaliza venda.

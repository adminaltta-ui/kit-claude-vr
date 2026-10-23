---
name: criativo-estatico
description: Fazer os anúncios de imagem do pago da Altta (Meta) em JPEG, nas três proporções (9:16, 4:5 e 1:1), com o texto principal, o título e a chamada de cada um. Cinco tipos: o estático de texto (o primeiro teste de todo ângulo), a carta, a oferta com o preço na tela, o print real e a capa de cinema por IA (cena de objeto, sem rosto). Use quando o pedido for "faz os estáticos da leva", "anúncio de imagem", "estático do curso X", "capa de cinema para o anúncio", "banner de oferta", quando a criativo-leva passar os conceitos de estático, ou "/criativo-estatico".
metadata:
  area: Estratégia
  frequencia: semanal
  resumo: "Faz os anúncios de imagem do pago em JPEG nas três proporções, com o texto e o título de cada um."
  quando: "Quando uma leva de criativos tem conceitos de estático, ou um ângulo novo precisa de teste barato."
  exemplo: "Faz os estáticos da leva do curso de vendas na consulta de avaliação."
---

# Os anúncios de imagem da Altta

**Leia antes, da arquitetura** (`empresa/estrategia/biblioteca/ARQUITETURA-DO-MARKETING.md`): a 1.1 (os sócios e
a capa de cinema no pago), a 1.4 (a regra de IA), a 3.4.1 (o que a Meta conta como anúncio diferente) e a 3.4.6
(os formatos). Se o estático vem de uma leva, leia o `leva.md` dela: o conceito, o gancho e a ficha já estão lá.

**Por que o estático importa:** é o jeito mais rápido e barato de testar um ângulo. O estático que vence vira
ângulo do vídeo (`troncoso 00:25:11`; 🟢 `P-criativo` §3.5).

## Os cinco tipos (no molde `.claude/skills/criativo-estatico/molde.html`)

| Tipo | Quando | O cuidado |
|---|---|---|
| `.texto` | o primeiro teste de todo ângulo: a frase do gancho, grande, e uma linha de apoio | uma palavra em ouro, no máximo; `.claro` dá o fundo pergaminho |
| `.carta` | consideração longa; em saúde é dos que mais ganham | só com texto aprovado por quem assina (o João ou o Arthur), com o papel dele |
| `.oferta` | público que já conhece; o preço como gancho (o ângulo 6, "preço na tela") | o preço do banco do Academy (`curso.preco_reais`, a consulta está na `criativo-leva`), nunca o do pedido; nada de "de R$ X por R$ Y" sem preço cheio real |
| `.print` | o "como" de verdade: a tela do curso, a planilha preenchida, a conversa | o print é **real**; nome, telefone e foto de terceiros cobertos; conversa de cliente só com autorização escrita |
| `.cinema` | a capa de cinema por IA, um conceito entre vários (decisão do João, 1.1) | **cena de objeto, sem rosto** (o celular com "vou pensar", a cadeira vazia, a agenda); nunca pessoa sintética que pareça alguém real; aceita o rótulo de IA da Meta |

Duas peças só contam como anúncios diferentes para a Meta se mudarem **o que se vê** (o tipo, a imagem, a
pessoa), não só o título ou o fundo (3.4.1). Variações de frase do mesmo conceito vão juntas no mesmo anúncio,
no formato flexível (até 10 mídias), e não como anúncios separados.

## O passo a passo

1. **A pasta:** a da leva, numa subpasta `estaticos/`: `empresa/arquivos/anuncios/<AAAA-MM-DD>-<leva>/estaticos/`.
   Estático avulso ganha a sua pasta com a data e o assunto.
2. **Copiar o molde** para `estaticos/index.html` e deixar só as `<section>` que vai usar. Cada criativo sai nas
   três proporções: copie a `<section>` três vezes e troque a classe (`r916`, `r45`, `r11`) e o `data-nome`
   (`<nome do criativo>_916`, `_45`, `_11`). O nome do criativo segue a nomenclatura da leva:
   `ALT_<curso>_<persona>_<angulo>_<formato>_<gancho>_<quem>_<V01>`.
3. **A imagem do `.cinema`**, pelo PowerShell (a chave `KIE_API_KEY` mora no Windows), duas imagens por criativo:
   `node .claude/skills/conteudo-carrossel/imagem.mjs <pasta>/estaticos <nome> "<cena em inglês>" 9:16` e de
   novo com `4:5` (a mesma imagem 4:5 serve ao 1:1). 4 créditos cada. Na cena, diga sempre:
   - onde os objetos ficam: *"the objects sit in the UPPER HALF; the lower half darkens gradually, no hard line"*
     (sem o "gradually", a IA desenha uma linha dura que denuncia a máquina);
   - *"full-bleed, no border, no frame, not a printed photo"* (sem isso, às vezes vem a moldura branca);
   - *"no people, no faces"*, e *"no hands"* se a mão não for parte da ideia;
   - ⚠️ o *"no readable text"* não impede letra falsa: evite papel, tela ou placa em foco; se precisar, peça fora
     de foco.
   Abra a imagem: se o objeto cair onde vai o texto, ou vier letra falsa, peça de novo.
4. **O print do `.print`**: a tela do curso no Academy (`academy.sejaaltta.com.br`, conta de teste), a planilha ou
   a conversa real, salvo em `estaticos/fotos/`. Cubra nome, telefone e foto antes de usar.
5. **Escrever.** A frase do gancho vem da leva, com a palavra do público (o dossiê). Na imagem: frase curta,
   quebra de linha à mão com `<br>` onde o sentido pede, nunca uma palavra sozinha na linha. O que o clique
   entrega vai na linha de apoio, sem prometer prazo nem número de faturamento. Os blocos marcados como opcionais
   no molde (o rodapé, a conta, a linha de apoio do cinema) saem inteiros quando não forem usados.
6. **Exportar:** `node .claude/skills/conteudo-carrossel/exportar.mjs <pasta>/estaticos`. Sai um JPEG por
   `<section>`, com o `data-nome`. Resolva todo AVISO (texto cortado quer dizer frase longa demais: corte a frase,
   não a letra). Abra um JPEG de cada tipo e confira se o texto não caiu em cima de parte clara da imagem. No
   `.cinema`, abra também o 1:1: ele corta a imagem 4:5 no centro, e o objeto pode sair do quadro ou ficar embaixo
   do selo; se ficar, ponha `style="background-position:center top"` (ou `bottom`) na `.foto` daquela `<section>`.
   O fundo vazio embaixo do 9:16 é de propósito: o Reels cobre essa faixa com a legenda e os botões.
7. **O texto do anúncio**, no `estaticos/anuncio.txt`, um bloco por criativo:

   ```text
   ALT_..._V01
   Texto principal: <pode ser longo; os primeiros 125 caracteres, que aparecem antes do "ver mais", funcionam sozinhos>
   Título: <até cerca de 40 caracteres>
   Descrição: <opcional, curta>
   Botão: Saiba mais | Comprar agora | Enviar mensagem
   Destino: <o checkout, o Raio-X ou o WhatsApp do Comercial>
   ```

   Trocar só o texto e o título já moveu resultado (`kobata 01:29:43`): escreva duas versões de texto principal
   por criativo, e marque qual é a 1.
8. **As travas, num agente separado:** rode a skill `marketing-travas` num Agent (`general-purpose`) com o
   caminho da pasta: `Use a skill marketing-travas nos estáticos em <pasta>/estaticos (leia os JPEG e o
   anuncio.txt). Devolva só o parecer no formato da skill.` Corrija, exporte de novo e cole o parecer no fim do
   `anuncio.txt`.
9. **Entregar ao João:** a pasta, quantos JPEG, o que cada criativo testa em uma linha e o parecer. ⛔ Sem trazer
   as imagens para a conversa: ele abre a pasta.

## As regras

- As da marca: Fraunces e Inter, a paleta da Direção C (floresta, pinho, pergaminho, ouro só de acento), a Fenda
  só como está no molde (⛔ não redesenhe o símbolo).
- Sem travessão, sem emoji, sem gênero marcado, sem a frase da "proporção", sem prazo prometido.
- Gente na imagem só se for real e autorizada (os sócios, um aluno com autorização escrita). Os sócios podem
  aparecer no pago, em no máximo um terço dos conceitos (1.1); nas capas do orgânico, não.
- O texto da imagem e o texto do anúncio dizem a mesma promessa da página de destino (3.4.3, passo 13).

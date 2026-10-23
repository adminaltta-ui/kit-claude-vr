---
name: conteudo-post
description: Fazer as peças de uma lâmina só do Instagram da Altta (@sejaaltta) em JPEG, no padrão de capa de revista com imagem de IA: o post de frase (F1, a imagem de conceito e a frase embaixo), a capa do reel (a capa de impacto: uma pessoa anônima no centro, a palavra gigante e a pílula em ouro; os sócios não aparecem) e a capa do destaque. Use quando o pedido for post de frase, post estático, "faz a frase do sábado", capa do reel, capa do vídeo, capa dos destaques, ou quando um roteiro novo (conteudo-roteiro) precisar de capa.
metadata:
  area: Estratégia
  frequencia: semanal
  resumo: "Faz o post de frase, a capa do reel e a capa do destaque do @sejaaltta em JPEG, com imagem de IA no padrão da marca."
  quando: "Quando a semana pede o post de frase ou um reel novo precisa de capa."
  exemplo: "Faz a capa do reel do João desta terça."
---

# O post e as capas do @sejaaltta

🔁 **O padrão mudou em 2026-10-04.** O João reprovou o post de frase no pergaminho e as capas só de texto, e
pediu imagem de IA no padrão de três referências: **G4**, **V4** e **Vinci Society** (as folhas estão em
`empresa/arquivos/conteudo/referencias/`). O que se tirou delas:
- **G4:** a foto de cena ocupa tudo, o título grande embaixo, um destaque em ouro, o selo da marca discreto.
- **V4:** o post estático é um cartaz de conceito, um objeto que conta a ideia sozinho (a cadeira na porta, o
  peão de coroa).
- **Vinci:** capa de cinema, título em serifa com o itálico no meio, a seta "→".

Um molde só: `.claude/skills/conteudo-post/molde.html`. Copie para a pasta da peça, deixe só a `<section>` que
vai usar e troque a imagem e o texto. A estratégia é `empresa/estrategia/conteudo/estrategia.md` (o F1 está na
seção 6; a vitrine, as capas e os destaques, na seção 4).

## Os três formatos

**F1, o post de frase** (`.frase-foto`, 1080x1350). Para quem já segue: ⛔ não é motor de alcance.
- **A imagem é um conceito,** como os cartazes da V4: um ou dois objetos que contam a frase, numa natureza-morta
  de cinema. Na frase "Ou você responde em 5 minutos, ou a clínica do lado responde", é a ampulheta no fim, ao
  lado do celular com uma mensagem nova.
- **Os objetos ficam na metade de cima;** a metade de baixo fica livre para a frase. Diga isso na cena ("both
  objects sit in the UPPER HALF... the whole LOWER HALF is empty").
- **A frase em duas metades,** centralizada embaixo: "Ou você [X]," em Fraunces reta e "ou [Y]." em itálico ouro.
  Sempre sobre o negócio da clínica, ⛔ nunca motivação genérica.
- Legenda de uma a três palavras ("Concorda?") e sem chamada.

**A capa do reel** (`.reel-foto`, 1080x1920), no mesmo esquema da capa de impacto do carrossel (a skill
`conteudo-carrossel` tem a receita da cena): a pessoa anônima no centro, a linha curta, **a palavra gigante** em
Fraunces caixa alta e **a pílula em ouro**. Ex.: "Desde 1º de outubro" / **O WHATSAPP** / "cobra cada resposta?".
A grade do perfil corta em 3:4, então o texto termina antes de 1680 de altura; o selo fica no topo, acima da
cabeça (cai fora da grade e aparece no reel).
- **Um doutor ou uma doutora na cena do assunto,** gente anônima de jaleco, na clínica, com o objeto da tese na mão
  ou na mesa (o celular com a cara preocupada, a bobina de conta, a grade no celular). ⛔ **O João e o Arthur não
  aparecem nas capas** (João, 2026-10-04: *"nós não devemos estar nas capas"*), mesmo sendo eles que gravam.
- O nome da série ("A conta", "O que mudou") fica na legenda, não na capa: a capa é só o gancho.
- ⛔ A capa nunca diz "Eu sou" nem abre pelo nome da Altta.

**A capa do destaque** (`.destaque`, 1080x1920, floresta). O Instagram corta em círculo e escreve o nome embaixo,
então a capa tem só um sinal em ouro no centro: `#aspas` para Cases, `#montes` para A Altta. ⚠️ Ainda no padrão
antigo: refazer com o kit da vitrine, na mesma linguagem das capas novas.

## O passo a passo

1. **A pasta:** `empresa/arquivos/conteudo/<AAAA-MM-DD>-<assunto>/` (a mesma do roteiro, quando é capa de reel).
2. **A imagem,** pelo PowerShell (`nano-banana-2-lite`, 4 créditos cada; o F1 em `4:5`, o reel em `9:16`):
   `node .claude/skills/conteudo-carrossel/imagem.mjs <pasta> <nome> "<cena em inglês>" 4:5`
   Abra a imagem: se os objetos ou o rosto caírem onde vai o texto, peça de novo dizendo onde eles ficam.
3. **Copiar o molde** para `index.html` da pasta, deixar só a `<section>` do formato e trocar `fotos/[imagem].jpg`.
4. **Escrever** com quebra de linha à mão (`<br>`) onde o sentido pede. ⛔ Palavra sozinha numa linha.
5. **Exportar** com o script do carrossel: `node .claude/skills/conteudo-carrossel/exportar.mjs <pasta>`.
   Resolva todo AVISO. O script não vê texto sobre parte clara da imagem: **abra o JPEG** e confira se o título
   não caiu em cima de algo branco; se caiu, escureça o véu (`.veu`) mais para cima ou diminua o título.
6. **A `legenda.txt`** com a legenda e a ficha (no F1); na capa do reel, a legenda já está no `roteiro.md`.
7. **No OS:** o F1 vira peça em `mkt_peca` com `formato = 'post'` e `etapa = 'aprovacao'` (o SQL está na
   skill `conteudo-mes`). A capa do reel vai junto da peça do vídeo.

## As regras

As mesmas do carrossel (`conteudo-carrossel`): sem travessão, sem emoji, sem a frase da "proporção", sem
gênero, ouro só de acento e nunca no símbolo, a Fenda só como está nos moldes (⛔ não redesenhe o símbolo).
Gente gerada por IA é sempre anônima, ⛔ nunca apresentada como cliente, paciente ou profissional real, ⛔ nunca os
sócios, ⛔ nunca pessoa pública (essa só em foto real com direito de uso).

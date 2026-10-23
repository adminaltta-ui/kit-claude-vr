---
name: capa-academy
description: Gerar, refazer ou conferir as capas de cinema dos cursos do Altta Academy (imagem de IA no Kie, com a moldura, o título e o fio de ouro em código). Use sempre que o pedido for capa de curso, capa nova, trocar ou refazer uma capa, gerar as capas dos 27 cursos, ou quando um curso novo entrar no catálogo e precisar de capa.
metadata:
  area: Academy
  frequencia: quando-precisar
  resumo: "Gera, refaz ou confere as capas de cinema dos cursos, com a imagem do Kie e a moldura em código."
  quando: "Quando um curso novo entra no catálogo ou uma capa precisa ser trocada."
  exemplo: "Refaz a capa do curso de vendas no direct."
---

# As capas de cinema do Altta Academy

Aprovado pelo João em 2026-09-30 (*"Ficou absuuurda!"*), a partir de um teste com o curso Atendimento
pelo WhatsApp. **A V1 é o molde da série**: uma mão elegante, um objeto que conta o curso, a mesa de
mármore escuro da clínica, a luz dourada vindo de cima à esquerda, o terço de baixo escuro e vazio.
A foto do teste está em `empresa/arquivos/imagens-kie/capas-teste/foto-1280.png`.

## O que é fixo e o que muda

**Fixo, e não se mexe sem o João:** o prompt-base (`BASE`, dentro de `capas.mjs`), o modelo
`nano-banana-2-lite`, o formato 3:4 e a moldura em código (`app/src/features/cursos/capa.tsx`).
Mudar a base muda a luz da série inteira, e as capas prontas deixam de combinar.

**Muda por curso, só a cena**, em `cenas.json` (uma linha por `slug` do `catalogo.json`). A cena
segue sempre a mesma gramática, porque padronização vale mais que variedade (o João reprovou capas
despadronizadas em 2026-09-29):

> `Close-up of an elegant hand` + **um gesto com um objeto que conta o curso** + `on a dark marble desk of an aesthetic clinic.`

- **Um objeto só**, que se leia numa miniatura de 62px. Metáfora simples vale (balança para preço,
  ampulheta para recorrência, lacre para follow-up).
- ⛔ **Nenhum rosto**, nem em reflexo, espelho ou foto na parede. Mãos e mangas, sim.
- ⛔ **Nada que peça texto**: tela de celular e de computador sempre `blurred, unreadable`; cartão,
  envelope e caderno sempre `blank`; frasco `unlabeled`.
- ⛔ Nada de paciente, agulha, seringa, resultado de procedimento, nem nome de cliente.
- ⛔ Sem vermelho e sem azul. As cores vêm da base: floresta, pinho, pergaminho, ouro só como luz.

## O que fica em código, nunca na imagem

O título (`nomeCurto` do nome), a área, "Altta Academy" e o fio de ouro. ⛔ A IA não escreve letra
(sai torta). 🔁 **A palavra apagada no meio da capa sai quando a capa tem imagem** (João,
2026-09-30: *"já vai ter o descritivo embaixo"*); ela continua só nas capas sem imagem.

## Os comandos (da raiz da empresa)

```bash
node .claude/skills/capa-academy/capas.mjs gerar --ver       # o que falta, o custo e o saldo, sem gastar
node .claude/skills/capa-academy/capas.mjs gerar             # gera tudo o que falta (para se o saldo não cobrir)
node .claude/skills/capa-academy/capas.mjs gerar reels stories   # refaz só essas (sobrescreve)
node .claude/skills/capa-academy/capas.mjs serie             # fotografa as 27 lado a lado em 320 e 1280
node .claude/skills/capa-academy/capas.mjs webp              # grava o webp de 600px em app/src/assets/capas/
```

- Os originais ficam em `empresa/arquivos/imagens-kie/capas/<slug>.jpg`, e ⛔ não entram no repo do app.
  No app entra só o webp (uns 12 KB cada).
- A chave é a variável `KIE_API_KEY` do Windows. 4 créditos por capa.
- O fotógrafo usa o `playwright-core` do app. Se faltar: `npm i --no-save playwright-core@1.58` dentro do app.

## A conferência, antes de mostrar ao João

Rode `serie` e **olhe as duas fotos**, capa por capa:

1. **Sem letra na imagem.** Se o Kie escreveu alguma coisa (placa, rótulo, tela legível), refaça.
2. **Sem rosto**, e sem vermelho ou azul.
3. **A mesma luz**: fundo verde escuro, luz dourada de cima, terço de baixo escuro. Capa clara ou
   com fundo de outra cor quebra a série: refaça.
4. **O objeto se lê na miniatura** da linha do celular.
5. **O título não briga com a imagem** (o sujeito no terço de baixo apaga o título).

Refazer é trocar a **cena** no `cenas.json` e rodar `gerar <slug>`. ⛔ Rodar o mesmo prompt de novo
dá outra imagem, mas repete o defeito quando o defeito vem da cena. ⛔ Duas reprovações do João na
mesma capa: pare e peça a ele uma referência de objeto, não tente a terceira.

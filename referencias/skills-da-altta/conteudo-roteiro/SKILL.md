---
name: conteudo-roteiro
description: Escrever o roteiro de um vídeo do Instagram da Altta (@sejaaltta) para o João ou o Arthur gravarem, no formato certo da estratégia de conteúdo ("A conta", "O que mudou", tela dividida, esquete, lista ou conta, e a edição do depoimento de cliente), com três ganchos, a fala e o texto da tela passo a passo, a duração, quem grava, a chamada e a legenda. Use quando o pedido for roteiro, roteiro de reel, "o que eu gravo essa semana", vídeo do João, vídeo do Arthur, "A conta", "O que mudou", esquete, roteiro de depoimento, ou quando o plano do mês (conteudo-mes) pedir os roteiros da semana.
metadata:
  area: Estratégia
  frequencia: semanal
  resumo: "Escreve o roteiro do vídeo do @sejaaltta por formato, com três ganchos, a fala, o texto da tela e a legenda."
  quando: "Antes da gravação da semana, para os vídeos do João e do Arthur."
  exemplo: "Escreve o roteiro do A conta desta semana."
---

# O roteiro do vídeo do @sejaaltta

Os vídeos são gravados pelo João e pelo Arthur, para o perfil da Altta. O Claude entrega o roteiro pronto,
*"de forma estratégica no mês"*, sempre buscando lead. **A estratégia manda:**
`empresa/estrategia/conteudo/estrategia.md`, seção 6 (os formatos V1 a V5 e o P1), 7 (os ganchos) e 8 (a
chamada e as palavras). Leia só o formato pedido.

⚠️ Por enquanto é **só o perfil da Altta** (João, 2026-10-04: *"vamos focar só na Altta"*).

## Quem grava o quê

| Formato | Quem | Duração | Chamada |
|---|---|---|---|
| V1, "A conta": a notícia ou o erro explicado em reais | João (comercial) | 60 a 120 s | palavra |
| V2, "O que mudou": a mudança da plataforma e o que fazer | Arthur (demanda) | 45 a 90 s | palavra |
| V3, tela dividida: em cima a prova, embaixo o rosto | quem for do assunto | 30 a 90 s | palavra |
| V4, esquete da rotina da clínica | Arthur | 7 a 15 s | nenhuma |
| V5, lista ou conta | Arthur | 30 a 90 s | palavra |
| P1, depoimento de cliente: o roteiro da edição e as perguntas da gravação | a cliente | 30 a 60 s | nenhuma ou "quer ver como funciona?" |

## De onde vem a pauta

- **A notícia:** o jornal da semana do Academy (`feed_item` com `tipo = 'noticia'`, no banco do Academy pelo
  MCP `supabase-academy`), que a skill `noticias-hof` escreve, e a busca na internet para WhatsApp,
  Instagram, Meta e conselho. A notícia quente passa na frente de qualquer dia.
- **O tema da semana e a palavra:** o plano do mês (`mkt_peca` no OS) ou a seção 9 da estratégia.
- **Todo número tem fonte.** O que não está confirmado leva 🟡 no bloco "Antes de gravar".

## O arquivo

`empresa/arquivos/conteudo/<AAAA-MM-DD>-<assunto>/roteiro.md`, nesta ordem (o molde é
`empresa/arquivos/conteudo/2026-10-06-whatsapp-cobra-resposta/roteiro.md`):

1. **A ficha:** formato, quem grava, duração, data, linha, chamada (a palavra e o material), capa.
2. **Como gravar,** em uma linha: vertical, altura dos olhos, lapela, legenda palavra a palavra.
3. **Os ganchos:** três opções. Os dois melhores vão no reel de teste (o Instagram mostra só para quem não
   segue); o que ganhar vai para os seguidores.
4. **O roteiro:** os passos numerados do formato, cada um com a **Fala** (na voz de quem grava, frase curta,
   do jeito que se fala) e a **Tela** (o texto escrito e o que aparece).
5. **A legenda,** num bloco `text` para copiar.
6. **Antes de gravar, conferir:** o que é 🟡 e o que é 🟢.
7. **As fontes,** com link.

Depois, **a capa do reel** pela skill `conteudo-post`, na mesma pasta. E a peça no OS: `mkt_peca` com
`formato = 'reel'`, `etapa = 'roteiro'`, o roteiro inteiro no campo `roteiro` e o `responsavel_id` de quem
grava (o SQL está na skill `conteudo-mes`).

## As regras de todo vídeo

- **A tese, falada e escrita, nos 3 primeiros segundos.** ⛔ Nunca "Eu sou...", nunca "O que é ser Altta?".
- **Alguma coisa muda na tela a cada 2 ou 3 segundos:** um número, um print, um corte.
- **Legenda palavra a palavra,** porque muita gente assiste sem som.
- **A conta em reais** no tamanho de uma clínica de harmonização, dita como conta ("faz a conta comigo").
- **A chamada fala "a gente te manda",** porque quem manda é a automação. ⛔ Nada que finja uma pessoa.
- **O humor fica na rotina da gestão,** ⛔ nunca no paciente nem no resultado.
- ⛔ Sem travessão, sem a frase da "proporção", sem "diagnóstico" como prêmio, sem "link na bio" como
  chamada, sem conteúdo de paciente (antes e depois, "quantos ml"), sem urgência inventada.
- **Sem gênero:** "quem tem clínica", "a pessoa".

## O depoimento (P1)

O roteiro da edição abre pela frase do resultado ou da dor, nos 3 primeiros segundos, falada e escrita; depois
como era, o que mudou com a Altta, o resultado com número (só autorizado) e o nome, a cidade e o tempo de
clínica escritos na tela. Junto, as perguntas da gravação, para a cliente dizer as frases que a edição precisa:
qual era a maior dificuldade antes; o que mudou depois da Altta; que resultado já dá para ver, com número; como
foi a decisão de entrar.

---
name: pesquisa-com-youtube
description: Toda pesquisa usa também o YouTube como fonte, junto com a internet. Busca os vídeos do tema (os mais relevantes e os mais recentes, em português e em inglês), lê a fala de cada um pela legenda e cruza com o que veio da web. Use SEMPRE que for pesquisar qualquer assunto (mercado, concorrente, ferramenta, técnica, tendência, ideia, decisão), quando a Gabriela disser "pesquisa", "faz uma pesquisa", "busca no YouTube", "me traz vídeos sobre", "o que estão falando sobre", ou "/pesquisa-com-youtube". Não use para achar algo dentro do código ou dos arquivos do projeto.
---

# Pesquisa com YouTube

O YouTube mostra o que a internet escrita ainda não tem: quem está fazendo, como faz e o que está funcionando agora. Por isso entra em **toda** pesquisa, lado a lado com a web.

## Passo 1: buscar nos dois ao mesmo tempo

Na mesma resposta, em paralelo: a `WebSearch` para a web e o comando abaixo para o YouTube. Busque em português **e** em inglês (em tecnologia, o inglês sai antes).

```bash
# relevância (o padrão); para os MAIS RECENTES, some &sp=CAI%253D no fim do link
PYTHONIOENCODING=utf-8 yt-dlp "https://www.youtube.com/results?search_query=palavras+do+tema" \
  --flat-playlist --playlist-end 10 \
  --print "%(view_count)s | %(duration_string)s | %(channel)s | %(title)s | https://youtu.be/%(id)s"
```

A busca não traz a data. Para a data dos escolhidos, um comando só com todos os links:

```bash
PYTHONIOENCODING=utf-8 yt-dlp --skip-download --no-warnings \
  --print "%(upload_date)s | %(title)s | https://youtu.be/%(id)s" LINK1 LINK2 LINK3 | sort -r
```

Link de vídeo cujo id começa com `-`: ponha `--` antes dele.

## Passo 2: escolher de 3 a 8 vídeos

- Assunto que muda rápido (IA, ferramenta, rede social): pese a data, e descarte o que ficou velho.
- Pese as visualizações e o canal: quem mostra fazendo vale mais que quem só comenta.
- Descarte shorts, vídeo repetido entre canais e título que promete sem mostrar.

## Passo 3: ler a fala de cada vídeo

```bash
bash ~/.claude/skills/pesquisa-com-youtube/ler.sh https://youtu.be/ID > "$TMP/video-ID.txt"
wc -w "$TMP/video-ID.txt"
```

- Pega a legenda que o canal subiu ou a automática no idioma original. Dez minutos de vídeo dão umas 2 mil palavras.
- **Vídeo longo** (mais de 5 mil palavras): leia só os trechos do tema, `grep -oi '.\{300\}palavra.\{300\}' "$TMP/video-ID.txt"`.
- **"SEM LEGENDA"**: use a skill `watch:watch`, que transcreve o áudio.
- **O que aparece na tela importa** (planilha, painel, tela de app): aí sim a `watch:watch`, que tira os quadros.
- ⛔ Nunca peça a legenda traduzida automática: o YouTube bloqueia (erro 429).

## Passo 4: cruzar e entregar

- Uma resposta só, juntando web e vídeos. Cada informação diz de onde veio: o site, ou o título do vídeo com o link.
- O que bate entre várias fontes vem primeiro. O que só um vídeo diz vem marcado como opinião de uma pessoa.
- Dado (número, preço, regra, lei) se confirma na web. Vídeo é bom para o como fazer, fraco como prova.
- A data de cada fonte vai junto quando o assunto muda rápido.
- Achou referência que vale guardar? Ofereça em uma linha guardar na Biblioteca (skill `guardar-na-biblioteca`). ⛔ Não guarde sem ela pedir.

## Quando ela pede só os vídeos

Lista numerada, sempre com **título, link e data**, sem texto em volta:

```
1. **Título do vídeo**: https://youtu.be/ID (16/10)
```

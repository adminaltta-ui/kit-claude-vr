#!/usr/bin/env bash
# Lê a fala de um vídeo do YouTube (a legenda, sem os tempos), num texto só.
# Uso: bash ler.sh <link do vídeo>
# Sem legenda, avisa e sai com erro: aí a skill watch transcreve o áudio.
D=$(mktemp -d)
yt() { PYTHONIOENCODING=utf-8 yt-dlp -q -i --no-warnings --skip-download --sub-format vtt -o "$D/v" "$@" >/dev/null 2>&1; }
# 1º a legenda que o canal subiu; 2º a automática no idioma original.
# ⛔ Nunca a automática traduzida: o YouTube bloqueia (erro 429) e derruba o resto.
yt --write-subs --sub-langs "pt.*,en.*" "$1"
# Vídeo com dublagem automática tem um "-orig" por idioma: pt e en primeiro, senão pega árabe ou bengali.
ls "$D"/*.vtt >/dev/null 2>&1 || yt --write-auto-subs --sub-langs "pt-orig,en-orig" "$1"
ls "$D"/*.vtt >/dev/null 2>&1 || yt --write-auto-subs --sub-langs ".*-orig" "$1"
f=$(ls "$D"/*.vtt 2>/dev/null | head -1)
if [ -z "$f" ]; then echo "SEM LEGENDA: $1 (use a skill watch)"; rm -rf "$D"; exit 1; fi
sed -e '/-->/d' -e '/^WEBVTT/d' -e '/^Kind:/d' -e '/^Language:/d' -e 's/<[^>]*>//g' "$f" \
  | awk 'NF && !seen[$0]++' | tr '\n' ' '
echo
rm -rf "$D"

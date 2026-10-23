#!/bin/bash
# Exporta cada lâmina do index.html de uma pasta em JPEG 1080x1350 (o Instagram publica JPEG).
# Usa o Chrome do Mac, sem instalar nada. Sai 01.jpg, 02.jpg... na mesma pasta.
#
#   bash ~/.claude/skills/carrossel-vr-concept/exportar.sh "<pasta-do-carrossel>"
set -e
PASTA="$(cd "$1" && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
URL="file://$(echo "$PASTA" | sed 's/ /%20/g')/index.html"
TOTAL=$(grep -o '<section class="s' "$PASTA/index.html" | wc -l | tr -d ' ')

for i in $(seq 1 "$TOTAL"); do
  N=$(printf "%02d" "$i")
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
    --window-size=1080,1350 --virtual-time-budget=4000 \
    --screenshot="$PASTA/$N.png" "$URL#$i" >/dev/null 2>&1
  sips -s format jpeg -s formatOptions 92 "$PASTA/$N.png" --out "$PASTA/$N.jpg" >/dev/null
  rm "$PASTA/$N.png"
done
echo "$TOTAL lâminas exportadas em $PASTA"

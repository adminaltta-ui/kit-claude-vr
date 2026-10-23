# Design System — Apresentação Premium Descompliquei

Tokens exatos. Já estão no `<style>` do `assets/template.html` — este doc é a referência de
consulta. Base de tudo: canvas **1280×720**.

## Fontes (Google Fonts)

```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=DM+Sans:wght@400;500&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
```

| Papel | Fonte | Uso |
|-------|-------|-----|
| Display (`--ff-d`) | **Plus Jakarta Sans** | Títulos, números grandes. Peso **700** por padrão (800 só na marca/logo). |
| Body (`--ff-b`) | **DM Sans** | Texto corrido, descrições. |
| Mono (`--ff-m`) | **JetBrains Mono** | Eyebrows, rótulos, URLs, numeração. Letterspacing largo. |

**Nunca** peso 800 em preto puro para título de conteúdo — foi o que deu "cara de app". Título =
700 + cor `--ink` (quente escuro).

## Cores

```css
--orange:#E85D24;      /* acento primário */
--orange-2:#F5843D;    /* laranja claro (números-herói em fundo escuro, ondas) */
--orange-deep:#C6431A;
--grad-o:linear-gradient(150deg,#F0743A 0%,#E85D24 48%,#BE3E17 100%);   /* PAINEL FORTE laranja */
--grad-soft:linear-gradient(155deg,#FCF4EC 0%,#F6E4D5 100%);            /* PAINEL FRACO creme */
--grad-d:linear-gradient(155deg,#2C2820 0%,#1B1812 100%);               /* PAINEL FORTE escuro */
--tint:#FBEEE6; --tint-line:#EFD8C9;   /* chip de ícone, bordas quentes */
--ink:#211E17; --ink-2:#514B41;        /* texto (quente, não preto) */
--paper:#FCFBF9; --warm:#F8F4EE;       /* fundos claros */
--card:#F5F1EC; --card-line:rgba(33,30,23,.08);  /* card plano sutil */
--muted:#7C766C; --muted-2:#ACA69B;
--line:rgba(33,30,23,.10); --line-d:rgba(255,255,255,.13);
```

### Regra do laranja (inviolável)
O laranja é **acento** (palavra do título via `.accent`, ícone, fio, número em destaque) **ou**
**zona estrutural grande** (um painel inteiro com `.grad-o`). Nunca um cardzinho saturado
isolado. Hierarquia: combine **forte** (`--grad-o`/`--grad-d`) com **fraca** (`--grad-soft`).

## Escala tipográfica (base 1280×720)

| Elemento | Tamanho | Peso |
|----------|---------|------|
| Capa `h1` | 78px | 700 |
| Título de slide `h2` | 33–36px | 700 |
| Divisória/citação `h2` | 44px | 700 |
| Número-herói (+R$700K) | 72px | 700 |
| Stat row número | 58px | 700 |
| Card stack / módulo `h4/h3` | 20–22px | 700 |
| Body / intro | 13.5–15px | 400–500 |
| Eyebrow / rótulo mono | 10–11px | 500, tracking .24em, UPPERCASE |

Regra prática: título **grande com respiro**, não gigante enchendo a tela. Se ocupar mais de ~⅓
da altura, diminua.

## Espaçamento e moldura

- **Frame interno** dos slides não-split: `padding:66–70px 74–78px`. Conteúdo nunca cola na borda.
- **Painéis split** sangram até a borda (sem margem externa) — é o que dá densidade/"cara de deck".
- Gaps entre elementos: generosos (20–26px). Fios finos (`--line` / `--line-d`) separam itens.

## Fundos

- **Escuro forte:** `--grad-d` + ondas SVG (waves) laranja em baixa opacidade.
- **Laranja forte:** `--grad-o`, texto branco.
- **Creme fraco:** `--grad-soft`, texto `--ink`.
- **Claro neutro:** `--paper` (limpo) ou `--warm` (levemente mais quente, para zonas de conteúdo).
- Sempre um leve `radial-gradient` laranja no canto dá profundidade sem poluir.

## Ondas decorativas (assinatura)
SVG com 2–4 `<path>` de bezier, stroke `rgba(245,132,61, .1–.5)`, `stroke-width:1.2–1.3`,
opacidade decrescente. Posicionadas no canto de painéis escuros/laranja. Dão o "toque desenhado".

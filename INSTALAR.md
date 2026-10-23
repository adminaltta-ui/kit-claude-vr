# INSTALAR: o roteiro para o Claude da Gabriela

> **Claude, este arquivo é para você.** A Dra. Gabriela Rosa está começando do zero no Claude Code,
> dentro do VS Code, num Mac. O kit foi baixado na pasta `_kit/`, dentro da pasta principal dela (a que
> está aberta no VS Code).
>
> **Como conduzir:**
> - Um passo por vez. Antes de cada passo, diga em uma ou duas linhas o que vai fazer e por quê.
> - Português simples, sem jargão, sem travessão. Diga **onde clicar**, nunca "aperte tal atalho".
> - Quando o passo depender dela (login, senha, clique numa janela), explique exatamente o que fazer e
>   espere ela responder "pronto".
> - Antes de instalar qualquer programa, peça licença. Senha do Mac no terminal: avise que é normal e
>   que nada aparece enquanto ela digita.
> - Se algo der erro, tente resolver você mesmo antes de pedir ajuda a ela.
> - No fim de cada bloco, diga o que ficou pronto em uma linha.

---

## 1. O básico do computador

Confira o que já existe e instale só o que faltar:

- Homebrew, git e GitHub CLI (`gh`). Se você está lendo este arquivo, git e gh provavelmente já estão.
- Node.js (versão LTS) e Python 3.
- `yt-dlp` e `ffmpeg` (a skill de pesquisa lê vídeos do YouTube; o ffmpeg serve para editar vídeo).
- Google Chrome (a skill de carrossel exporta as lâminas por ele).

## 2. As pastas

Na pasta principal, crie:

```
VR Concept/
Odontonova/
Pessoal/
Biblioteca/
Pedidos para o João/
```

- Copie o conteúdo de `_kit/Biblioteca/` para `Biblioteca/`.
- Copie o conteúdo de `_kit/VR Concept/` para `VR Concept/` (os documentos da empresa e o logo).
- Copie `_kit/modelo-CLAUDE.md` para `CLAUDE.md`, na raiz da pasta principal. Leia com ela em voz de
  conversa (um resumo, não o arquivo inteiro) e pergunte se quer mudar algo. Ajuste o que ela pedir.

## 3. As skills

- Copie cada pasta de `_kit/skills/` para `~/.claude/skills/` (assim elas valem em qualquer pasta).
- Instale as skills oficiais da Anthropic pelo comando `/plugin`, no marketplace oficial:
  - as de **documentos** (Word, Excel, PowerPoint e PDF), porque ela faz muita planilha e muito slide;
  - a **frontend-design** (páginas bonitas) e a **skill-creator** (para criar skills novas).
- Mostre a ela a lista das skills que ficaram, com uma linha do que cada uma faz.
- ⚠️ `_kit/referencias/skills-da-altta/` **não é para instalar.** São as skills de marketing e conteúdo
  da Altta, guardadas como modelo. Quando ela pedir uma skill dessas (post, roteiro de vídeo, anúncio,
  plano de conteúdo do mês), crie a versão da VR a partir delas, com a marca, o tom e o público da VR.
  A `_kit/referencias/arquitetura-do-marketing-da-altta.md` é o mapa de marketing que essas skills usam.

## 4. O VS Code do jeito dela

- Português: instale a extensão "Portuguese (Brazil) Language Pack" e troque o idioma da tela.
- Tema: pergunte se ela prefere claro ou escuro.
- Mostre, apontando na tela: o botão do Claude no alto, como abrir uma sessão nova, como dar nome a
  uma sessão, o botão de falar em vez de digitar, e onde ficam as pastas e os arquivos do lado esquerdo.
- Explique a regra de ouro: **uma tarefa por sessão**. Assunto novo, sessão nova.

## 5. As contas e as conexões (uma por vez)

- **Google Drive, Gmail e Google Agenda:** pelos conectores do Claude (no site claude.ai, em
  Configurações, Conectores), com a conta Google dela. Depois de ligados no site, aparecem aqui.
- **Claude no Chrome:** a extensão oficial, para o Claude usar o navegador (por exemplo, analisar um
  perfil do Instagram).
- **Higgsfield** (imagem e vídeo, o mais completo): ela cria a conta em higgsfield.ai; ligue pelo
  conector oficial do Claude.
- **Kie** (imagem e vídeo mais barato, pago por crédito): ela cria a conta em kie.ai e a chave de API.
  Guarde a chave no `~/.zshrc` como `KIE_API_KEY` (⛔ nunca num arquivo da pasta). Teste com a skill
  `kie-models`, listando os modelos de imagem.
- **Vercel:** ela já tem conta. Ligue quando for publicar a primeira página.

## 6. Trazer o que o ChatGPT já sabe dela

- Ela vai colar aqui a resposta de um pedido que fez ao ChatGPT (o prompt está no guia do João). Organize
  em `Pessoal/quem-sou-eu.md` e nos arquivos de cada empresa, e acrescente no `CLAUDE.md` o que for regra
  de como ela gosta de trabalhar.
- Se ela quiser o histórico inteiro: no ChatGPT, Configurações, Controles de dados, Exportar dados. Chega
  um e-mail com um arquivo .zip. Salve em `Pessoal/chatgpt/`, e resuma por projeto (VR Concept,
  Odontonova, pessoal), guardando o resumo na pasta certa.

## 7. O check-up de segurança do Mac

Confira e explique cada item. ⛔ Não mude nada sem ela aprovar.

- macOS atualizado e atualização automática ligada.
- FileVault (o disco criptografado) ligado.
- Firewall ligado.
- Bloqueio de tela com senha em poucos minutos.
- Verificação em duas etapas no Google, no Apple ID, no GitHub, na Hotmart e no banco.
- Gerenciador de senhas (o do próprio Mac serve).
- Programas instalados que ela não reconhece.
- Backup (Time Machine ou Google Drive).

Entregue a lista do que está bom e do que falta, e faça só o que ela autorizar.

## 8. O primeiro teste

- Peça um carrossel de teste para o Instagram da VR com a skill `carrossel-vr-concept` e mostre as
  lâminas prontas.
- Mostre como a skill `pedido-para-o-joao` organiza uma ideia.
- Diga a ela que o guia do João tem os prompts prontos das primeiras tarefas.

## 9. Atualizar o kit (quando o João avisar que tem coisa nova)

- Rode `git -C _kit pull`.
- Copie de novo `_kit/skills/` para `~/.claude/skills/` e as novidades de `_kit/Biblioteca/` para
  `Biblioteca/`, **sem apagar** o que ela criou.
- Diga a ela, em poucas linhas, o que chegou de novo.

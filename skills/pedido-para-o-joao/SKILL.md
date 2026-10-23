---
name: pedido-para-o-joao
description: Organiza uma ideia, um pedido de mudança ou um problema da Gabriela para o João (o CTO da VR Concept) num arquivo pronto, com o que é, onde fica, como está, como deveria ficar e o rascunho da tela quando for mudança visual. Vale para o OS da VR, o Attlas Odonto, a VR Academy, as páginas de venda e os agentes de IA (quando a IA respondeu errado e precisa de outra instrução). Use quando a Gabriela disser "tive uma ideia", "manda isso para o João", "anota para o João", "isso aqui está errado", "a IA errou", "quero mudar essa página", ou mandar um print de uma tela com um pedido.
---

# Pedido para o João

O WhatsApp mistura assunto e o pedido se perde. Esta skill transforma o pedido da Gabriela num arquivo
organizado, que o João lê e executa sem precisar perguntar de novo.

## O passo a passo

1. **Entender o pedido.** Se faltar algo essencial, perguntar uma vez só, tudo junto:
   - em qual sistema e em qual página (o caminho do menu, como "Comercial > Conversas");
   - como está hoje e como deveria ficar;
   - se é urgente (está atrapalhando o dia a dia) ou é melhoria.
2. **Se veio print**, guardar a imagem junto do pedido.
3. **Escrever o arquivo** em `Pedidos para o João/<AAAA-MM-DD>-<assunto>.md`:

   ```
   # <o pedido em uma frase>

   - Data: AAAA-MM-DD
   - Onde: <sistema> > <página> > <parte da tela>
   - Tipo: ideia | mudança | problema | agente de IA
   - Urgência: urgente | melhoria

   ## Como está hoje
   ## Como deveria ficar
   ## Por que isso importa (para o aluno, o paciente ou a equipe)
   ## Prints
   ```

4. **Se for mudança visual**, fazer também um rascunho da tela nova em HTML, ao lado do arquivo
   (`<assunto>-rascunho.html`), com a skill `html-premium-kit`, nas cores da VR (grafite `#252525`,
   dourado `#E7B84E` só como acento). É só desenho, para o João ver a ideia.
5. **Se for agente de IA** (a IA do WhatsApp, a da Academy, a do Attlas):
   - colar o trecho da conversa em que a IA errou;
   - dizer o que ela deveria ter respondido;
   - escrever a instrução nova, pronta para trocar no prompt do agente (o texto exato).
6. **Avisar a Gabriela** em uma linha: o arquivo está pronto para mandar ao João.

## Como chega ao João

- **Hoje:** a Gabriela manda o arquivo (e o rascunho, se tiver) para o João.
- **Em breve:** quando o João ligar o OS da VR ao Claude da Gabriela, esta skill passa a gravar o
  pedido direto no OS, e o João aprova a mudança de lá. Ele avisa quando estiver ligado; até lá, siga o
  jeito de hoje.

## As regras

- Um pedido por arquivo. Três ideias viram três arquivos.
- ⛔ Sem dado de paciente no pedido (nome, telefone, foto, prontuário). Se o print tiver, cubra antes.
- Português simples, com acento, sem travessão.

---
name: guardar-na-biblioteca
description: Transforma uma fonte nova (livro em PDF, artigo da internet, vídeo do YouTube ou do Instagram, podcast, relatório, aula, transcrição de reunião) num resumo longo e organizado dentro da pasta Biblioteca, para o Claude usar como base depois. Use quando a Gabriela disser "guarda isso na biblioteca", "estuda esse livro", "resume esse artigo", "salva esse vídeo", "quero que você aprenda isso", ou mandar um link ou um PDF para guardar como referência. Não use para consultar a biblioteca numa decisão (isso é a consultar-biblioteca).
---

# Guardar uma fonte nova na Biblioteca

Quanto mais contexto bom o Claude tem, melhor ele trabalha. Esta skill pega um material que a Gabriela
achou bom e transforma num resumo que o Claude consegue consultar depois, sem precisar ler tudo de novo.

## Onde cada coisa vai

| O que é | Onde salvar |
|---|---|
| Livro | `Biblioteca/<autor>-<titulo-curto>.md` |
| Artigo, vídeo, podcast, relatório, aula | `Biblioteca/fontes/<assunto>/<tipo>-<autor>-<tema>.md` |
| O arquivo original (PDF, legenda do vídeo) | `Biblioteca/originais/` (⛔ não vai para o GitHub) |

Os assuntos de `fontes/` são as pastas que já existem lá (aquisição e canais, copy e criativo, funil e
nutrição, mercado e setor, IA e tecnologia, produto e plataforma, comercial, CS e onboarding). Crie
`odontologia/` para o que for técnica ou mercado odontológico.

## O passo a passo

1. **Pegar o conteúdo inteiro:**
   - PDF: ler o arquivo.
   - Artigo: abrir o link e ler o texto todo.
   - Vídeo do YouTube: ler a fala pela legenda, com o script da skill `pesquisa-com-youtube`
     (`bash ~/.claude/skills/pesquisa-com-youtube/ler.sh <link>`).
2. **Escrever o resumo** com este topo:

   ```
   ---
   titulo: <nome da fonte>
   autor: <quem fez>
   tipo: livro | artigo | video | podcast | relatorio | aula
   link: <se tiver>
   data: <AAAA-MM-DD da fonte>
   assuntos: [<um ou mais assuntos>]
   peso: evidencia | referencia | opiniao
   ---
   ```

   E depois, nesta ordem:
   - **A ideia central**, em três linhas.
   - **O que a fonte ensina**, seção por seção, com as frases mais fortes entre aspas e o minuto do
     vídeo ou a página do livro.
   - **Os números e os exemplos** que a fonte traz.
   - **Como isso vale para a VR Concept** (o dentista aluno) e para a Odontonova (o paciente).
   - **Onde a fonte é fraca**: o que é opinião de uma pessoa só, o que é de outro país ou outra época.
3. **O peso:** `evidencia` quando tem dado ou pesquisa; `referencia` quando é alguém que mostra fazendo;
   `opiniao` quando é só a visão de alguém.
4. **Avisar a Gabriela** em duas linhas: onde salvou e as três ideias mais úteis.

## As regras

- O resumo é escrito com as nossas palavras. ⛔ Não copiar o livro inteiro para dentro do arquivo.
- ⛔ Livro em PDF e arquivo original não sobem para o GitHub (direito autoral e tamanho).
- Português simples, com acento, sem travessão.

---
name: resumo-financeiro-mensal
description: Gera o resumo financeiro do mês a partir das contas a pagar e a receber. Use quando pedirem "fecha o mês", "resumo financeiro", "quanto entrou e quanto saiu" ou "como está o caixa".
---

# Resumo Financeiro Mensal

## Objetivo

Mostrar, em uma página, quanto a empresa recebeu, quanto pagou e quanto sobrou no mês.

## Quando usar

- No fim de cada mês, para fechar o caixa.
- Quando a diretoria pedir uma visão rápida das finanças.

## Onde buscar as informações

- Entradas: pasta `02-Financeiro/Contas-a-Receber`
- Saídas: pasta `02-Financeiro/Contas-a-Pagar`

## Passo a passo

1. Somar tudo o que foi recebido no mês.
2. Somar tudo o que foi pago no mês.
3. Calcular o saldo (recebido menos pago).
4. Listar as 3 maiores despesas.
5. Apontar contas vencidas ou que vencem nos próximos 7 dias.

## Formato da resposta

```
RESUMO FINANCEIRO — [mês/ano]

Recebido:  R$ 0,00
Pago:      R$ 0,00
Saldo:     R$ 0,00

Maiores despesas:
1. ...
2. ...
3. ...

Atenção: [contas vencidas ou a vencer]
```

## Regras

- Valores sempre em reais, com duas casas decimais.
- Se faltar alguma informação, avisar em vez de inventar o número.
- Linguagem simples, sem termos contábeis.
- Salvar o resumo final na pasta `02-Financeiro/Relatorios`.

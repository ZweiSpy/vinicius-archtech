# SDD.md — Specification-Driven Development

## Ciclo

```
Spec (docs/specs) → Implement (código) → Verify (aceite PO + smoke)
```

1. **Spec** — Cursor (ou PO) descreve comportamento, dados, critérios de aceite em `docs/specs/*.md`.
2. **Implement** — Antigravity implementa apenas o que a spec permite; escopo proibido em `AGENTS.md`.
3. **Verify** — Smoke HTTP, diff review, checklist em `PLAN.md`.

## Onde fica a verdade

| Artefato | Caminho |
|----------|---------|
| Papéis e restrições | `AGENTS.md` |
| Roadmap / aceite | `PLAN.md` |
| Este método | `SDD.md` |
| Specs de feature | `docs/specs/` |

## Regras

- Nenhuma feature “legal/compliance” sem spec em `docs/specs/`.
- Mudanças em auth/deep link exigem aceite explícito do PO e atualização de spec.
- Domínio canônico: `https://zweicoorp.com.br`.
- Preferir alteração mínima: não refatorar landing para entregar páginas satélite.

## Specs atuais

- `docs/specs/legal-pages.md` — Política e Termos + footer
- `docs/specs/data-processing.md` — Inventário de dados pessoais / sensíveis de produto

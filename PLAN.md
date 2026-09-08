# PLAN.md — Roadmap ativo

## Entrega atual: Páginas legais (SDD)

**Branch:** `develop`  
**Status:** implementado localmente — aguardando commit/deploy + aceite do PO

### Objetivos

1. `/politica-de-privacidade` e `/termos-de-uso` acessíveis (site + app Zwei Finance + Zwei Coorporações LTDA)
2. Links no footer no padrão de mercado
3. Docs de verdade SDD no repositório
4. Sem alterar landing principal nem rotas `/auth/*`

### Critérios de aceite (PO)

- [x] `/politica-de-privacidade` e `/termos-de-uso` retornam 200 (smoke local; **produção após deploy**)
- [x] Textos cobrem empresa + site + app; deixam claro o que **não** é armazenado (cartão, conta bancária, senhas)
- [x] Footer com Política e Termos, legível em mobile
- [x] Home e `/auth/confirmed` + `/auth/reset-password` intactos (diff vazio)
- [x] `AGENTS.md`, `PLAN.md`, `SDD.md` e specs em `docs/specs/` presentes
- [ ] Placeholders `[CNPJ]` / `[ENDEREÇO]` preenchidos pelo PO quando disponíveis
- [ ] Aceite jurídico / revisão do PO
- [ ] Deploy em `zweicoorp.com.br` (commit + merge / preview → main)

### Não fazer nesta entrega

- Alterar Hero, Portfolio, Integrações, Processo, FAQ, Terminal
- Alterar deep links ou páginas auth
- Assessoramento jurídico formal (texto é template LGPD-oriented)

### Próximos (backlog)

- Preencher CNPJ e endereço real
- Seção Serviços + CTAs (conversão)
- LinkedIn real em `constants.ts`

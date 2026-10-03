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
- [x] Textos legais adequados para modelo Pessoa Física / Desenvolvedor Independente (sem expor endereço residencial nem CNPJ, comarca do RJ e canal zwei@zweicoorp.com.br)
- [x] Cláusula de sucessão e transição futura para Pessoa Jurídica (PJ) integrada
- [x] LinkedIn temporariamente desativado no site a pedido do PO (preparado para novo perfil)
- [x] Seção Serviços + CTAs de alta conversão e Botão Flutuante de WhatsApp implementados
- [ ] Deploy em `zweicoorp.com.br` (commit + merge / preview → main)

### Não fazer nesta entrega

- Alterar deep links ou páginas auth (/auth/*)
- Assessoramento jurídico formal (texto é template LGPD-oriented)

### Próximos (backlog)

- Inserir link do novo LinkedIn quando criado pelo PO
- Formalização de CNPJ e migração contratual futura (quando houver abertura da PJ)

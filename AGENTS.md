# AGENTS.md — Zwei Coorp's / vinicius-archtech

## Papéis

| Papel | Responsável | Escopo |
|-------|-------------|--------|
| **PO** | Product Owner | Aceite, CNPJ/endereço, revisão jurídica, priorização |
| **Cursor** | Spec / auditoria | Docs de verdade (`AGENTS.md`, `PLAN.md`, `SDD.md`, `docs/specs/*`), auditoria de escopo |
| **Antigravity** | DEV SENIOR / DevOps / Full-stack | Implementação Next.js, i18n, deploy, testes de smoke |

## Produtos e marcas

- **Zwei Coorporações LTDA** — controladora / razão social
- **Zwei Coorp's** — marca comercial do site e serviços
- **Zwei Finance** — aplicativo Android de gestão financeira

## Domínio canônico

`https://zweicoorp.com.br` (não usar `*.vercel.app` como URL principal em docs, e-mails ou Supabase redirects).

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS, Framer Motion, Lucide React
- i18n via React Context + `src/lib/dictionaries.ts`
- Branch workflow: `feature/*` → `develop` → `main`

## Escopo proibido (não alterar sem aceite do PO)

- `src/app/page.tsx` (landing / comportamento da home)
- `src/app/auth/**` e deep links (`ZweiFinanceDeepLink.tsx`)
- OAuth / login / change_password / qualquer fluxo de auth do app

## Escopo permitido (entregas legais)

- Páginas `/politica-de-privacidade` e `/termos-de-uso`
- Footer (links legais)
- Docs SDD, sitemap e `llms.txt` (seção Legal)
- i18n / conteúdo legal

## Specs

Ver `docs/specs/` e o método em `SDD.md`.

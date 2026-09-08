# Spec: Páginas legais

**Status:** approved for implement  
**Domínio:** `https://zweicoorp.com.br`

## Rotas

| Path | Título (PT) | Título (EN) |
|------|-------------|-------------|
| `/politica-de-privacidade` | Política de Privacidade | Privacy Policy |
| `/termos-de-uso` | Termos de Uso | Terms of Use |

## Escopo de conteúdo

Cada página cobre:

1. **Zwei Coorporações LTDA** (controladora) — placeholders `[CNPJ]`, `[ENDEREÇO]`
2. **Site** zweicoorp.com.br (portfólio / serviços)
3. **App Zwei Finance** (gestão financeira pessoal / custo de vida)

Seções explícitas **Site** vs **App** quando o tratamento de dados divergir.

## UI

- Layout legal compartilhado: fundo `slate-950` / dark, tipografia legível, container `max-w-3xl`
- Header mínimo: marca Zwei Coorp's + link “Voltar ao site” (`/`)
- Sem Header/Footer da landing completa
- Bilíngue via `LanguageProvider` + conteúdo em `src/lib/legal/`
- `robots`: indexáveis (páginas públicas de compliance)
- Metadata própria (title/description)

## Footer (landing)

Em `FooterSection`, abaixo do copyright:

```
Política de Privacidade  ·  Termos de Uso
```

- Links internos (mesma aba)
- `text-xs` / `text-sm`, hover ciano
- Labels i18n: `footer.privacyLabel`, `footer.termsLabel`

## Sitemap / llms

- Incluir as duas URLs em `src/app/sitemap.ts`
- Não incluir `/auth/*`
- Incluir seção **Legal** em `public/llms.txt`

## Fora de escopo

- Qualquer alteração em `src/app/page.tsx`, `src/app/auth/**`, `ZweiFinanceDeepLink.tsx`

## Aceite

Ver checklist em `PLAN.md`.

# Portfolio Zwei — Currículo Digital Profissional

SPA de portfólio profissional focada em **BPO Financeiro**, **Automação de Processos** e **Desenvolvimento Web**.

## Stack

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS** — utilitários puros, dark mode nativo
- **Framer Motion** — animações de scroll e micro-interações
- **Lucide React** — ícones minimalistas

## Como rodar

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build de produção
npm run build
npm start
```

Acesse [http://localhost:3000](http://localhost:3000).

## Personalização

Edite o arquivo `src/lib/constants.ts` para configurar:

| Constante | Descrição |
|-----------|-----------|
| `WHATSAPP_URL` | Link do WhatsApp (`https://wa.me/5511999999999`) |
| `SOCIAL_LINKS.github` | Perfil no GitHub |
| `SOCIAL_LINKS.linkedin` | Perfil no LinkedIn |
| `SOCIAL_LINKS.workana` | Perfil na Workana |
| `SOCIAL_LINKS.freelas` | Perfil no 99freelas |

## Estrutura

```
src/
├── app/
│   ├── globals.css      # Estilos globais + scrollbar customizada
│   ├── layout.tsx       # Layout raiz com fonte Inter
│   └── page.tsx         # Página principal (SPA)
├── components/
│   ├── ui/              # Componentes reutilizáveis
│   ├── Header.tsx       # Navegação fixa
│   ├── HeroSection.tsx  # Hero com grid tecnológico
│   ├── AboutSection.tsx # Sobre mim (2 colunas)
│   ├── PortfolioSection.tsx  # Cards de projetos
│   ├── ToolsSection.tsx      # Hard skills
│   ├── FooterSection.tsx     # Contato e redes sociais
│   └── FloatingWhatsApp.tsx  # Botão flutuante
└── lib/
    └── constants.ts     # URLs e links configuráveis
```

## Deploy

Compatível com [Vercel](https://vercel.com), Netlify ou qualquer host que suporte Next.js.

```bash
npx vercel
```

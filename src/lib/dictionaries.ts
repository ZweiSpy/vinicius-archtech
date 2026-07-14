export type Locale = "pt" | "en";

export type TerminalLineKind =
  | "command"
  | "sistema"
  | "sucesso"
  | "atencao"
  | "robo";

export interface TerminalLine {
  kind: TerminalLineKind;
  text: string;
  pauseBefore?: number;
}

export interface Dictionary {
  nav: {
    about: string;
    portfolio: string;
    tools: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    badge: string;
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    subtitle: string;
    explore: string;
    exploreAria: string;
  };
  about: {
    title: string;
    titleAccent: string;
    photoAlt: string;
    p1Before: string;
    p1Hr: string;
    p1Mid: string;
    p1Tax: string;
    p1Mid2: string;
    p1Heavy: string;
    p1End: string;
    p2Before: string;
    p2Python: string;
    p2End: string;
    p3Before: string;
    p3Grow: string;
    p3End: string;
    runtimeLabel: string;
    runtimeTitle: string;
    runtimeHighlight: string;
    runtimeBody: string;
  };
  portfolio: {
    title: string;
    titleAccent: string;
    subtitle: string;
    featured: string;
    impact: string;
    expandHint: string;
    expandAria: string;
    collapseAria: string;
    projects: {
      id: string;
      title: string;
      description: string;
      impact: string;
      tags: string[];
      featured?: boolean;
    }[];
  };
  tools: {
    title: string;
    titleAccent: string;
    subtitle: string;
    blocks: {
      title: string;
      skills: string[];
    }[];
  };
  footer: {
    headline: string;
    subBefore: string;
    subAccent: string;
    subAfter: string;
    copyright: string;
  };
  common: {
    whatsappCta: string;
    whatsappAria: string;
    languageToggleAria: string;
  };
  terminal: {
    ariaLabel: string;
    windowTitle: string;
    script: TerminalLine[];
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  pt: {
    nav: {
      about: "Sobre",
      portfolio: "Portfólio",
      tools: "Ferramentas",
      contact: "Contato",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
    },
    hero: {
      badge: "BPO Financeiro · Automação · Desenvolvimento Web",
      titleBefore: "Soluções Inteligentes em",
      titleHighlight: "BPO Financeiro, Automação de Processos",
      titleAfter: "e Engenharia de Dados.",
      subtitle:
        "Aliando inteligência de negócios, gestão estratégica e desenvolvimento em Python para eliminar gargalos operacionais e escalar a eficiência da sua empresa.",
      explore: "Explorar",
      exploreAria: "Rolar para a seção Sobre",
    },
    about: {
      title: "Sobre",
      titleAccent: "Mim",
      photoAlt: "Foto de perfil profissional",
      p1Before:
        "Minha trajetória profissional é híbrida e estratégica: formado em",
      p1Hr: "Gestão de Recursos Humanos",
      p1Mid: ", construí uma base sólida em rotinas financeiras e fiscais — do",
      p1Tax: "Simples Nacional",
      p1Mid2:
        "à gestão de ERPs, conciliação bancária e faturamento em setores de alta complexidade, como o de",
      p1Heavy: "maquinário pesado",
      p1End: ".",
      p2Before:
        "Essa vivência nas dores reais das empresas — planilhas manuais, retrabalho, erros de digitação e processos que consomem horas do time — foi o catalisador para minha especialização em",
      p2Python: "programação Python",
      p2End: ".",
      p3Before:
        "Hoje, combino visão de negócios com engenharia de software para automatizar tudo o que for repetitivo e passível de erro humano. O resultado? Processos mais rápidos, dados confiáveis e equipes liberadas para o que realmente importa:",
      p3Grow: "crescer",
      p3End: ".",
      runtimeLabel: "Runtime ao vivo",
      runtimeTitle: "Python em ação —",
      runtimeHighlight: "automação que se vê",
      runtimeBody:
        "Mais do que código no currículo: uma demonstração visual de como montei um stack mental em Python — carregar skills, detectar gargalos e executar automações que cortam tempo operacional.",
    },
    portfolio: {
      title: "Portfólio de",
      titleAccent: "Projetos",
      subtitle:
        "Problemas reais, soluções sob medida. Cada projeto nasce da interseção entre operação e tecnologia.",
      featured: "Destaque",
      impact: "Impacto",
      expandHint: "Clique na seta para ver o impacto →",
      expandAria: "Expandir detalhes",
      collapseAria: "Recolher detalhes",
      projects: [
        {
          id: "arquiteto",
          title: "Projeto Arquiteto — Ecossistema de Automação ERP",
          description:
            "Desenvolvimento de uma suíte completa de automação utilizando Python e Selenium integrada ao ERP Conta Azul. Inclui robôs para processamento automático de dados e bots integrados ao Telegram para emissão e envio instantâneo de ordens de serviço.",
          impact:
            "Redução drástica de tempo operacional e eliminação de falhas manuais.",
          tags: ["Python", "Selenium", "Telegram Bot", "Conta Azul"],
          featured: true,
        },
        {
          id: "zbot",
          title: "ZBot — Deep-Scan de Documentos Fiscais",
          description:
            "Motor de busca avançado desenvolvido para realizar varreduras profundas (deep-scan), auditoria e localização rápida de arquivos financeiros e fiscais complexos. Código limpo e versionado publicamente no GitHub.",
          impact: "Organização de Big Data e auditoria ágil.",
          tags: ["Python", "GitHub", "Auditoria", "Deep-Scan"],
        },
        {
          id: "elite-rodas",
          title: "Desenvolvimento Web — Elite Rodas",
          description:
            "Criação de landing page e site institucional focado em conversão e posicionamento digital para empresa física. Arquitetura otimizada ponta a ponta (front-end) para garantir velocidade e atração de clientes.",
          impact: "Presença digital e aceleração comercial.",
          tags: ["Next.js", "Landing Page", "SEO", "Conversão"],
        },
        {
          id: "bpo",
          title: "Gestão e Estruturação Financeira Freelancer",
          description:
            "Prestação de serviços especializados de estruturação de contas, conciliação diária e relatórios de performance para empresas parceiras através de plataformas como Workana e 99freelas.",
          impact: "Tomada de decisão baseada em dados reais.",
          tags: ["BPO", "Conciliação", "Workana", "99freelas"],
        },
      ],
    },
    tools: {
      title: "Caixa de",
      titleAccent: "Ferramentas",
      subtitle:
        "Hard skills que sustentam cada entrega — da linha de código ao balancete fechado.",
      blocks: [
        {
          title: "Tecnologia & Automação",
          skills: [
            "Python",
            "Selenium",
            "Automação Web",
            "Git / GitHub",
            "Scripts de Integração",
          ],
        },
        {
          title: "Finanças & Negócios",
          skills: [
            "BPO Financeiro",
            "Simples Nacional",
            "Gestão de RH",
            "ERP Conta Azul",
            "Classificações Contábeis",
          ],
        },
        {
          title: "Idiomas e Diferenciais",
          skills: ["Inglês", "Inteligência Artificial aplicada"],
        },
      ],
    },
    footer: {
      headline: "Precisa otimizar a rotina do seu negócio?",
      subBefore: "Vamos construir a",
      subAccent: "solução ideal",
      subAfter: ".",
      copyright:
        "Zwei — BPO Financeiro, Automação & Desenvolvimento Web. Todos os direitos reservados.",
    },
    common: {
      whatsappCta: "Fale Comigo no WhatsApp",
      whatsappAria: "Fale comigo no WhatsApp",
      languageToggleAria: "Alternar idioma",
    },
    terminal: {
      ariaLabel:
        "Terminal Python animado demonstrando habilidades em automação",
      windowTitle: "vinicius@archtech — python3",
      script: [
        {
          kind: "command",
          text: "import vinicius_archtech as arch",
          pauseBefore: 400,
        },
        {
          kind: "command",
          text: "arch.initialize_system()",
          pauseBefore: 350,
        },
        {
          kind: "sistema",
          text: "[SISTEMA] Iniciando varredura de processos... OK",
          pauseBefore: 500,
        },
        {
          kind: "command",
          text: 'arch.load_skills(["Python", "BPO Financeiro", "Automação", "ERP"])',
          pauseBefore: 400,
        },
        {
          kind: "sucesso",
          text: "[SUCESSO] Habilidades carregadas com sucesso.",
          pauseBefore: 450,
        },
        {
          kind: "command",
          text: 'arch.execute_automation(target="Gargalos Operacionais")',
          pauseBefore: 400,
        },
        {
          kind: "atencao",
          text: "[ATENÇÃO] Rotinas manuais detectadas.",
          pauseBefore: 500,
        },
        {
          kind: "robo",
          text: "[ROBÔ] Refatorando tarefas...",
          pauseBefore: 600,
        },
        {
          kind: "sucesso",
          text: "[SUCESSO] Tempo de operação reduzido em 85%.",
          pauseBefore: 550,
        },
      ],
    },
  },
  en: {
    nav: {
      about: "About",
      portfolio: "Portfolio",
      tools: "Toolkit",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      badge: "Financial BPO · Automation · Web Development",
      titleBefore: "Intelligent Solutions in",
      titleHighlight: "Financial BPO, Process Automation",
      titleAfter: "and Data Engineering.",
      subtitle:
        "Combining business intelligence, strategic management, and Python development to eliminate operational bottlenecks and scale your company's efficiency.",
      explore: "Explore",
      exploreAria: "Scroll to the About section",
    },
    about: {
      title: "About",
      titleAccent: "Me",
      photoAlt: "Professional profile photo",
      p1Before:
        "My professional path is hybrid and strategic: with a background in",
      p1Hr: "Human Resource Management",
      p1Mid:
        ", I built a solid foundation in financial and tax operations — from",
      p1Tax: "Brazilian Tax Frameworks (Simples Nacional)",
      p1Mid2:
        "to ERP management, bank reconciliation, and billing in high-complexity industries such as",
      p1Heavy: "heavy machinery",
      p1End: ".",
      p2Before:
        "That firsthand exposure to real business pain points — manual spreadsheets, rework, typing errors, and processes that consume team hours — drove my specialization in",
      p2Python: "Python programming",
      p2End: ".",
      p3Before:
        "Today, I combine business insight with software engineering to automate everything that is repetitive and prone to human error. The result? Faster processes, reliable data, and teams free to focus on what truly matters:",
      p3Grow: "growth",
      p3End: ".",
      runtimeLabel: "Live runtime",
      runtimeTitle: "Python in action —",
      runtimeHighlight: "automation you can see",
      runtimeBody:
        "More than code on a résumé: a visual demo of how I built a mental stack in Python — load skills, detect bottlenecks, and run automations that slash operational time.",
    },
    portfolio: {
      title: "Project",
      titleAccent: "Portfolio",
      subtitle:
        "Real problems, tailored solutions. Every project sits at the intersection of operations and technology.",
      featured: "Featured",
      impact: "Impact",
      expandHint: "Click the arrow to see the impact →",
      expandAria: "Expand details",
      collapseAria: "Collapse details",
      projects: [
        {
          id: "arquiteto",
          title: "Architect Project — ERP Automation Ecosystem",
          description:
            "Development of a full automation suite using Python and Selenium integrated with the Conta Azul ERP. Includes robots for automated data processing and Telegram bots for instant issuance and delivery of service orders.",
          impact:
            "Drastic reduction in operational time and elimination of manual failures.",
          tags: ["Python", "Selenium", "Telegram Bot", "Conta Azul"],
          featured: true,
        },
        {
          id: "zbot",
          title: "ZBot — Fiscal Document Deep-Scan",
          description:
            "Advanced search engine built to perform deep scans, audits, and fast location of complex financial and tax files. Clean, publicly versioned code on GitHub.",
          impact: "Big Data organization and agile auditing.",
          tags: ["Python", "GitHub", "Audit", "Deep-Scan"],
        },
        {
          id: "elite-rodas",
          title: "Web Development — Elite Rodas",
          description:
            "Creation of a conversion-focused landing page and institutional website for a brick-and-mortar business. End-to-end front-end architecture optimized for speed and customer acquisition.",
          impact: "Digital presence and commercial acceleration.",
          tags: ["Next.js", "Landing Page", "SEO", "Conversion"],
        },
        {
          id: "bpo",
          title: "Freelance Financial Structuring & Management",
          description:
            "Specialized services in account structuring, daily reconciliation, and performance reporting for partner companies through platforms such as Workana and 99freelas.",
          impact: "Decision-making grounded in real data.",
          tags: ["BPO", "Reconciliation", "Workana", "99freelas"],
        },
      ],
    },
    tools: {
      title: "Toolkit",
      titleAccent: "Skills",
      subtitle:
        "Hard skills behind every delivery — from the codebase to the closed trial balance.",
      blocks: [
        {
          title: "Technology & Automation",
          skills: [
            "Python",
            "Selenium",
            "Web Automation",
            "Git / GitHub",
            "Integration Scripts",
          ],
        },
        {
          title: "Finance & Business",
          skills: [
            "Financial BPO",
            "SMB Tax Management",
            "HR Management",
            "Conta Azul ERP",
            "Accounting Classifications",
          ],
        },
        {
          title: "Languages & Differentiators",
          skills: ["English", "Applied Artificial Intelligence"],
        },
      ],
    },
    footer: {
      headline: "Need to optimize your business operations?",
      subBefore: "Let's build the",
      subAccent: "ideal solution",
      subAfter: ".",
      copyright:
        "Zwei — Financial BPO, Automation & Web Development. All rights reserved.",
    },
    common: {
      whatsappCta: "Message Me on WhatsApp",
      whatsappAria: "Message me on WhatsApp",
      languageToggleAria: "Switch language",
    },
    terminal: {
      ariaLabel:
        "Animated Python terminal demonstrating automation skills",
      windowTitle: "vinicius@archtech — python3",
      script: [
        {
          kind: "command",
          text: "import vinicius_archtech as arch",
          pauseBefore: 400,
        },
        {
          kind: "command",
          text: "arch.initialize_system()",
          pauseBefore: 350,
        },
        {
          kind: "sistema",
          text: "[SYSTEM] Initiating process scan... OK",
          pauseBefore: 500,
        },
        {
          kind: "command",
          text: 'arch.load_skills(["Python", "Financial BPO", "Automation", "ERP"])',
          pauseBefore: 400,
        },
        {
          kind: "sucesso",
          text: "[SUCCESS] Skills loaded successfully.",
          pauseBefore: 450,
        },
        {
          kind: "command",
          text: 'arch.execute_automation(target="Operational Bottlenecks")',
          pauseBefore: 400,
        },
        {
          kind: "atencao",
          text: "[WARNING] Manual routines detected.",
          pauseBefore: 500,
        },
        {
          kind: "robo",
          text: "[ROBOT] Refactoring tasks...",
          pauseBefore: 600,
        },
        {
          kind: "sucesso",
          text: "[SUCCESS] Operation time reduced by 85%.",
          pauseBefore: 550,
        },
      ],
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

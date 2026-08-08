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
    process: string;
    tools: string;
    faq: string;
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
    viewSite: string;
    whatsappDemo: string;
    projects: {
      id: string;
      title: string;
      description: string;
      impact: string;
      tags: string[];
      featured?: boolean;
      href?: string;
      cta?: "site" | "whatsapp";
    }[];
  };
  integrations: {
    title: string;
    titleAccent: string;
    subtitle: string;
    items: {
      name: string;
      description: string;
    }[];
  };
  process: {
    title: string;
    titleAccent: string;
    subtitle: string;
    steps: {
      title: string;
      description: string;
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
  faq: {
    title: string;
    titleAccent: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
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
    brandName: string;
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
      process: "Processo",
      tools: "Ferramentas",
      faq: "FAQ",
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
      viewSite: "Ver site",
      whatsappDemo: "Falar no WhatsApp",
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
          href: "https://eliterodas.com.br",
          cta: "site",
        },
        {
          id: "zwei-finance",
          title: "Zwei Finance — App de Gestão Financeira",
          description:
            "Aplicativo Android (APK) de gestão e finanças focado em eficiência operacional e autonomia do cliente. Controle de fluxo de caixa, organização financeira e visão clara do negócio — em breve na Play Store; demonstração disponível via WhatsApp.",
          impact:
            "Autonomia financeira na palma da mão e processos mais ágeis para o cliente.",
          tags: ["Android", "Finanças", "Produto", "Python/API"],
          cta: "whatsapp",
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
    integrations: {
      title: "Integrações com",
      titleAccent: "ERPs",
      subtitle:
        "Conectamos sua operação aos principais ERPs via API oficial — e, quando a API não cobre o fluxo, usamos automação assistida com segurança e rastreabilidade.",
      items: [
        {
          name: "Conta Azul",
          description: "Integração via API para dados financeiros e operacionais.",
        },
        {
          name: "Olist (Tiny)",
          description: "Sincronização de pedidos, estoque e fiscal via API.",
        },
        {
          name: "VHSYS",
          description: "Automação de rotinas comerciais e financeiras.",
        },
        {
          name: "Outros via API",
          description: "Qualquer ERP com API documentada — avaliamos e conectamos.",
        },
      ],
    },
    process: {
      title: "Como",
      titleAccent: "Trabalhamos",
      subtitle:
        "Um fluxo claro do diagnóstico à entrega contínua — sem surpresas e com foco em resultado operacional.",
      steps: [
        {
          title: "Diagnóstico",
          description:
            "Mapeamos gargalos, rotinas manuais e sistemas atuais (ERP, planilhas, canais) para definir o que automatizar primeiro.",
        },
        {
          title: "Automação",
          description:
            "Desenvolvemos integrações via API e robôs sob medida, com testes, documentação e entrega alinhada ao seu processo.",
        },
        {
          title: "Acompanhamento",
          description:
            "Monitoramos estabilidade, ajustamos fluxos e evoluímos a solução conforme o negócio escala.",
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
    faq: {
      title: "Perguntas",
      titleAccent: "Frequentes",
      subtitle:
        "Respostas diretas para quem quer automatizar, integrar ERP ou contratar BPO com tecnologia.",
      items: [
        {
          question: "Quais ERPs vocês integram?",
          answer:
            "Trabalhamos com Conta Azul, Olist (Tiny), VHSYS e outros sistemas com API documentada. Avaliamos o cenário e definimos a melhor forma de conexão.",
        },
        {
          question: "Quanto tempo leva uma automação típica?",
          answer:
            "Depende do escopo: automações pontuais podem sair em poucos dias; ecossistemas com vários fluxos e integrações costumam levar de 2 a 6 semanas, com entregas parciais.",
        },
        {
          question: "Vocês fazem BPO e desenvolvimento juntos?",
          answer:
            "Sim. Unimos operação financeira (BPO) com engenharia em Python e automação — o mesmo time entende a dor e implementa a solução.",
        },
        {
          question: "Como funciona a contratação?",
          answer:
            "Começamos por uma conversa no WhatsApp para entender o problema, alinhamos escopo e proposta, e seguimos com diagnóstico e execução sob demanda ou por projeto.",
        },
        {
          question: "Preciso ter API do ERP?",
          answer:
            "O ideal é API oficial. Quando ela não cobre um fluxo crítico, usamos automação assistida com segurança e rastreabilidade — sempre priorizando estabilidade.",
        },
      ],
    },
    footer: {
      headline: "Precisa otimizar a rotina do seu negócio?",
      subBefore: "Vamos construir a",
      subAccent: "solução ideal",
      subAfter: ".",
      copyright:
        "Zwei Coorp's — BPO Financeiro, Automação & Desenvolvimento Web. Todos os direitos reservados.",
    },
    common: {
      brandName: "Zwei Coorp's",
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
      process: "Process",
      tools: "Toolkit",
      faq: "FAQ",
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
      viewSite: "View site",
      whatsappDemo: "Chat on WhatsApp",
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
          href: "https://eliterodas.com.br",
          cta: "site",
        },
        {
          id: "zwei-finance",
          title: "Zwei Finance — Financial Management App",
          description:
            "Android app (APK) for financial management focused on operational efficiency and client autonomy. Cash-flow control, financial organization, and a clear view of the business — coming soon to the Play Store; demo available via WhatsApp.",
          impact:
            "Financial autonomy in the palm of your hand and faster processes for the client.",
          tags: ["Android", "Finance", "Product", "Python/API"],
          cta: "whatsapp",
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
    integrations: {
      title: "ERP",
      titleAccent: "Integrations",
      subtitle:
        "We connect your operations to leading ERPs via official APIs — and when the API doesn't cover a flow, we use assisted automation with safety and traceability.",
      items: [
        {
          name: "Conta Azul",
          description: "API integration for financial and operational data.",
        },
        {
          name: "Olist (Tiny)",
          description: "Order, inventory, and fiscal sync via API.",
        },
        {
          name: "VHSYS",
          description: "Automation of commercial and financial routines.",
        },
        {
          name: "Others via API",
          description: "Any ERP with a documented API — we assess and connect.",
        },
      ],
    },
    process: {
      title: "How We",
      titleAccent: "Work",
      subtitle:
        "A clear path from diagnosis to continuous delivery — no surprises, focused on operational results.",
      steps: [
        {
          title: "Diagnosis",
          description:
            "We map bottlenecks, manual routines, and current systems (ERP, spreadsheets, channels) to define what to automate first.",
        },
        {
          title: "Automation",
          description:
            "We build API integrations and tailored bots, with testing, documentation, and delivery aligned to your process.",
        },
        {
          title: "Follow-up",
          description:
            "We monitor stability, refine workflows, and evolve the solution as the business scales.",
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
    faq: {
      title: "Frequently Asked",
      titleAccent: "Questions",
      subtitle:
        "Straight answers for anyone looking to automate, integrate ERPs, or hire tech-enabled BPO.",
      items: [
        {
          question: "Which ERPs do you integrate with?",
          answer:
            "We work with Conta Azul, Olist (Tiny), VHSYS, and other systems with a documented API. We assess the scenario and define the best connection approach.",
        },
        {
          question: "How long does a typical automation take?",
          answer:
            "It depends on scope: focused automations can ship in a few days; multi-flow ecosystems with several integrations usually take 2 to 6 weeks, with incremental deliveries.",
        },
        {
          question: "Do you offer BPO and development together?",
          answer:
            "Yes. We combine financial operations (BPO) with Python engineering and automation — the same team understands the pain and builds the solution.",
        },
        {
          question: "How does engagement work?",
          answer:
            "We start with a WhatsApp conversation to understand the problem, align scope and proposal, then move into diagnosis and execution — on-demand or project-based.",
        },
        {
          question: "Do I need an ERP API?",
          answer:
            "An official API is ideal. When it doesn't cover a critical flow, we use assisted automation with safety and traceability — always prioritizing stability.",
        },
      ],
    },
    footer: {
      headline: "Need to optimize your business operations?",
      subBefore: "Let's build the",
      subAccent: "ideal solution",
      subAfter: ".",
      copyright:
        "Zwei Coorp's — Financial BPO, Automation & Web Development. All rights reserved.",
    },
    common: {
      brandName: "Zwei Coorp's",
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

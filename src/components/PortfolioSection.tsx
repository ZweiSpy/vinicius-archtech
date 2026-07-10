"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Search,
  Globe,
  TrendingUp,
  ChevronDown,
  Star,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";

interface Project {
  id: string;
  title: string;
  description: string;
  impact: string;
  icon: ReactNode;
  featured?: boolean;
  tags: string[];
}

const projects: Project[] = [
  {
    id: "arquiteto",
    title: "Projeto Arquiteto — Ecossistema de Automação ERP",
    description:
      "Desenvolvimento de uma suíte completa de automação utilizando Python e Selenium integrada ao ERP Conta Azul. Inclui robôs para processamento automático de dados e bots integrados ao Telegram para emissão e envio instantâneo de ordens de serviço.",
    impact: "Redução drástica de tempo operacional e eliminação de falhas manuais.",
    icon: <Bot className="h-6 w-6" />,
    featured: true,
    tags: ["Python", "Selenium", "Telegram Bot", "Conta Azul"],
  },
  {
    id: "zbot",
    title: "ZBot — Deep-Scan de Documentos Fiscais",
    description:
      "Motor de busca avançado desenvolvido para realizar varreduras profundas (deep-scan), auditoria e localização rápida de arquivos financeiros e fiscais complexos. Código limpo e versionado publicamente no GitHub.",
    impact: "Organização de Big Data e auditoria ágil.",
    icon: <Search className="h-6 w-6" />,
    tags: ["Python", "GitHub", "Auditoria", "Deep-Scan"],
  },
  {
    id: "elite-rodas",
    title: "Desenvolvimento Web — Elite Rodas",
    description:
      "Criação de landing page e site institucional focado em conversão e posicionamento digital para empresa física. Arquitetura otimizada ponta a ponta (front-end) para garantir velocidade e atração de clientes.",
    impact: "Presença digital e aceleração comercial.",
    icon: <Globe className="h-6 w-6" />,
    tags: ["Next.js", "Landing Page", "SEO", "Conversão"],
  },
  {
    id: "bpo",
    title: "Gestão e Estruturação Financeira Freelancer",
    description:
      "Prestação de serviços especializados de estruturação de contas, conciliação diária e relatórios de performance para empresas parceiras através de plataformas como Workana e 99freelas.",
    impact: "Tomada de decisão baseada em dados reais.",
    icon: <TrendingUp className="h-6 w-6" />,
    tags: ["BPO", "Conciliação", "Workana", "99freelas"],
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <GlassCard featured={project.featured}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
            {project.icon}
          </div>
          {project.featured && (
            <span className="flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-400">
              <Star className="h-3 w-3 fill-amber-400" />
              Destaque
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="rounded-lg p-1 text-zinc-500 transition-colors hover:text-cyan-400"
          aria-label={expanded ? "Recolher detalhes" : "Expandir detalhes"}
          aria-expanded={expanded}
        >
          <ChevronDown
            className={`h-5 w-5 transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-white">{project.title}</h3>

      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Impacto
              </p>
              <p className="mt-1 text-sm text-zinc-300">{project.impact}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!expanded && (
        <p className="mt-3 text-xs text-cyan-400/70">
          Clique na seta para ver o impacto →
        </p>
      )}
    </GlassCard>
  );
}

export function PortfolioSection() {
  return (
    <SectionWrapper id="portfolio" className="px-6 py-24" delay={0.1}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Portfólio de <span className="text-cyan-400">Projetos</span>
          </h2>
          <p className="mx-auto max-w-xl text-zinc-400">
            Problemas reais, soluções sob medida. Cada projeto nasce da
            interseção entre operação e tecnologia.
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

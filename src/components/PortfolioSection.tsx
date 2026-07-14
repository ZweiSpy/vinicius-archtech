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
import { useLanguage } from "@/context/LanguageContext";

const PROJECT_ICONS: Record<string, ReactNode> = {
  arquiteto: <Bot className="h-6 w-6" />,
  zbot: <Search className="h-6 w-6" />,
  "elite-rodas": <Globe className="h-6 w-6" />,
  bpo: <TrendingUp className="h-6 w-6" />,
};

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  impact: string;
  tags: string[];
  featured?: boolean;
  labels: {
    featured: string;
    impact: string;
    expandHint: string;
    expandAria: string;
    collapseAria: string;
  };
}

function ProjectCard({
  id,
  title,
  description,
  impact,
  tags,
  featured,
  labels,
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <GlassCard featured={featured}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
            {PROJECT_ICONS[id]}
          </div>
          {featured && (
            <span className="flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-400">
              <Star className="h-3 w-3 fill-amber-400" />
              {labels.featured}
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="rounded-lg p-1 text-zinc-500 transition-colors hover:text-cyan-400"
          aria-label={expanded ? labels.collapseAria : labels.expandAria}
          aria-expanded={expanded}
        >
          <ChevronDown
            className={`h-5 w-5 transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>

      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
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
                {labels.impact}
              </p>
              <p className="mt-1 text-sm text-zinc-300">{impact}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!expanded && (
        <p className="mt-3 text-xs text-cyan-400/70">{labels.expandHint}</p>
      )}
    </GlassCard>
  );
}

export function PortfolioSection() {
  const { dict } = useLanguage();
  const { portfolio } = dict;

  const labels = {
    featured: portfolio.featured,
    impact: portfolio.impact,
    expandHint: portfolio.expandHint,
    expandAria: portfolio.expandAria,
    collapseAria: portfolio.collapseAria,
  };

  return (
    <SectionWrapper id="portfolio" className="px-6 py-24" delay={0.1}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            {portfolio.title}{" "}
            <span className="text-cyan-400">{portfolio.titleAccent}</span>
          </h2>
          <p className="mx-auto max-w-xl text-zinc-400">{portfolio.subtitle}</p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {portfolio.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                id={project.id}
                title={project.title}
                description={project.description}
                impact={project.impact}
                tags={project.tags}
                featured={project.featured}
                labels={labels}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

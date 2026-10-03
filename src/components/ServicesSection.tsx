"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Cpu,
  Smartphone,
  BarChart3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { useLanguage } from "@/context/LanguageContext";
import { getWhatsAppUrl } from "@/lib/constants";

const SERVICE_ICONS: Record<string, ReactNode> = {
  web: <Globe className="h-6 w-6 text-cyan-400" />,
  rpa: <Cpu className="h-6 w-6 text-cyan-400" />,
  apps: <Smartphone className="h-6 w-6 text-cyan-400" />,
  bpo: <BarChart3 className="h-6 w-6 text-cyan-400" />,
};

export function ServicesSection() {
  const { dict } = useLanguage();
  const { services } = dict;

  return (
    <SectionWrapper id="servicos" className="px-6 py-24" delay={0.1}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            {services.badge}
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            {services.title}{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {services.titleAccent}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400">
            {services.subtitle}
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.items.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full flex flex-col"
            >
              <GlassCard className="flex h-full flex-col justify-between p-6 sm:p-8">
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 shadow-inner shadow-cyan-500/10">
                      {SERVICE_ICONS[srv.id]}
                    </div>
                    {srv.badge && (
                      <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-0.5 text-xs font-semibold text-cyan-400">
                        {srv.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white">{srv.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {srv.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {srv.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 border-t border-white/10 pt-5">
                  <a
                    href={getWhatsAppUrl(srv.ctaMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-500/10 py-3 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/20 hover:text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                  >
                    {services.ctaButton}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

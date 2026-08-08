"use client";

import { motion } from "framer-motion";
import {
  Link2,
  Package,
  Building2,
  Puzzle,
  type LucideIcon,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";

const ITEM_ICONS: LucideIcon[] = [Building2, Package, Link2, Puzzle];

export function IntegrationsSection() {
  const { dict } = useLanguage();
  const { integrations } = dict;

  return (
    <SectionWrapper id="integracoes" className="px-6 py-24" delay={0.1}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            {integrations.title}{" "}
            <span className="text-cyan-400">{integrations.titleAccent}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-400">
            {integrations.subtitle}
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {integrations.items.map((item, index) => {
            const Icon = ITEM_ICONS[index] ?? Puzzle;

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="mb-3 inline-flex rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-2.5 text-cyan-400 transition-colors group-hover:border-cyan-400/50 group-hover:text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-white">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

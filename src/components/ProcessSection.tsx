"use client";

import { motion } from "framer-motion";
import {
  Search,
  Bot,
  LineChart,
  type LucideIcon,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";

const STEP_ICONS: LucideIcon[] = [Search, Bot, LineChart];

export function ProcessSection() {
  const { dict } = useLanguage();
  const { process } = dict;

  return (
    <SectionWrapper id="processo" className="px-6 py-24" delay={0.1}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            {process.title}{" "}
            <span className="text-cyan-400">{process.titleAccent}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-400">{process.subtitle}</p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {process.steps.map((step, index) => {
            const Icon = STEP_ICONS[index] ?? Search;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl border border-cyan-500/20 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 font-mono text-sm font-semibold text-cyan-400">
                    {index + 1}
                  </span>
                  <div className="inline-flex rounded-lg border border-cyan-500/30 bg-cyan-500/10 p-2 text-cyan-400">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

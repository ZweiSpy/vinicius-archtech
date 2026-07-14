"use client";

import {
  Code,
  DollarSign,
  Languages,
  type LucideIcon,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";

const BLOCK_META: { icon: LucideIcon; accent: string }[] = [
  { icon: Code, accent: "from-cyan-500 to-blue-500" },
  { icon: DollarSign, accent: "from-blue-500 to-indigo-500" },
  { icon: Languages, accent: "from-indigo-500 to-purple-500" },
];

export function ToolsSection() {
  const { dict } = useLanguage();
  const { tools } = dict;

  return (
    <SectionWrapper id="ferramentas" className="px-6 py-24" delay={0.1}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            {tools.title}{" "}
            <span className="text-cyan-400">{tools.titleAccent}</span>
          </h2>
          <p className="mx-auto max-w-xl text-zinc-400">{tools.subtitle}</p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {tools.blocks.map((block, index) => {
            const meta = BLOCK_META[index];
            const Icon = meta.icon;

            return (
              <div
                key={block.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div
                  className={`mb-4 inline-flex rounded-xl bg-gradient-to-r ${meta.accent} p-3`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="mb-4 text-lg font-semibold text-white">
                  {block.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {block.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300 transition-colors group-hover:border-cyan-500/20 group-hover:text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

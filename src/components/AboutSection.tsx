"use client";

import { User, Briefcase, Code2 } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function AboutSection() {
  return (
    <SectionWrapper id="sobre" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Sobre <span className="text-cyan-400">Mim</span>
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500" />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Avatar */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-indigo-500/30 blur-2xl" />
              <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-cyan-500/30 bg-gradient-to-br from-zinc-900 to-zinc-800 shadow-2xl shadow-cyan-500/10 sm:h-72 sm:w-72">
                <div className="flex h-[calc(100%-8px)] w-[calc(100%-8px)] items-center justify-center rounded-full bg-zinc-950">
                  <User className="h-24 w-24 text-cyan-400/60" strokeWidth={1} />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 rounded-xl border border-cyan-500/30 bg-zinc-900 p-3 shadow-lg">
                <Code2 className="h-6 w-6 text-cyan-400" />
              </div>
              <div className="absolute -left-2 -top-2 rounded-xl border border-indigo-500/30 bg-zinc-900 p-3 shadow-lg">
                <Briefcase className="h-6 w-6 text-indigo-400" />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-5 text-zinc-400 leading-relaxed">
            <p>
              Minha trajetória profissional é híbrida e estratégica: formado em{" "}
              <strong className="text-zinc-200">Gestão de Recursos Humanos</strong>,
              construí uma base sólida em rotinas financeiras e fiscais — do{" "}
              <strong className="text-zinc-200">Simples Nacional</strong> à gestão
              de ERPs, conciliação bancária e faturamento em setores de alta
              complexidade, como o de{" "}
              <strong className="text-zinc-200">maquinário pesado</strong>.
            </p>
            <p>
              Essa vivência nas dores reais das empresas — planilhas manuais,
              retrabalho, erros de digitação e processos que consomem horas do
              time — foi o catalisador para minha especialização em{" "}
              <strong className="text-cyan-400">programação Python</strong>.
            </p>
            <p>
              Hoje, combino visão de negócios com engenharia de software para
              automatizar tudo o que for repetitivo e passível de erro humano.
              O resultado? Processos mais rápidos, dados confiáveis e equipes
              liberadas para o que realmente importa:{" "}
              <strong className="text-zinc-200">crescer</strong>.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

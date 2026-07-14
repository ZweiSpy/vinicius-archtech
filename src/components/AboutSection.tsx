"use client";

import Image from "next/image";
import { Briefcase, Code2 } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PythonTerminal } from "@/components/PythonTerminal";

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

        {/* Profile + narrative */}
        <div className="mb-14 grid items-center gap-12 lg:mb-16 lg:grid-cols-2">
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-indigo-500/30 blur-2xl" />
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-cyan-400/40 bg-zinc-900 shadow-2xl shadow-cyan-500/25 sm:h-72 sm:w-72">
                <Image
                  src="/perfil.jpeg"
                  alt="Foto de perfil profissional"
                  fill
                  sizes="(max-width: 640px) 256px, 288px"
                  className="object-cover object-[center_12%]"
                  priority
                />
              </div>
              <div className="absolute -bottom-2 -right-2 rounded-xl border border-cyan-500/30 bg-zinc-900 p-3 shadow-lg">
                <Code2 className="h-6 w-6 text-cyan-400" />
              </div>
              <div className="absolute -left-2 -top-2 rounded-xl border border-indigo-500/30 bg-zinc-900 p-3 shadow-lg">
                <Briefcase className="h-6 w-6 text-indigo-400" />
              </div>
            </div>
          </div>

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

        {/* Narrative summary + Interactive Terminal */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 space-y-4 lg:order-1">
            <p className="text-sm font-medium uppercase tracking-widest text-cyan-400/80">
              Runtime ao vivo
            </p>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Python em ação —{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                automação que se vê
              </span>
            </h3>
            <p className="max-w-md leading-relaxed text-zinc-400">
              Mais do que código no currículo: uma demonstração visual de como
              montei um stack mental em Python — carregar skills, detectar
              gargalos e executar automações que cortam tempo operacional.
            </p>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <PythonTerminal />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

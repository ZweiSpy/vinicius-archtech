"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern"
        style={{ backgroundSize: "60px 60px" }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="mb-6 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-400">
            BPO Financeiro · Automação · Desenvolvimento Web
          </span>

          <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Soluções Inteligentes em{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              BPO Financeiro, Automação de Processos
            </span>{" "}
            e Engenharia de Dados.
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Aliando inteligência de negócios, gestão estratégica e
            desenvolvimento em Python para eliminar gargalos operacionais e
            escalar a eficiência da sua empresa.
          </p>

          <WhatsAppButton />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a
            href="#sobre"
            className="flex flex-col items-center gap-2 text-zinc-500 transition-colors hover:text-cyan-400"
            aria-label="Rolar para a seção Sobre"
          >
            <span className="text-xs uppercase tracking-widest">Explorar</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

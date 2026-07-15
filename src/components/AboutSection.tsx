"use client";

import Image from "next/image";
import { Briefcase, Code2 } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PythonTerminal } from "@/components/PythonTerminal";
import { useLanguage } from "@/context/LanguageContext";

export function AboutSection() {
  const { dict } = useLanguage();
  const { about } = dict;

  return (
    <SectionWrapper id="sobre" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            {about.title}{" "}
            <span className="text-cyan-400">{about.titleAccent}</span>
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500" />
        </div>

        <div className="mb-14 grid items-center gap-12 lg:mb-16 lg:grid-cols-2">
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-indigo-500/30 blur-2xl" />
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-cyan-400/40 bg-zinc-900 shadow-2xl shadow-cyan-500/25 sm:h-72 sm:w-72">
                <Image
                  src="/perfil.png"
                  alt={about.photoAlt}
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

          <div className="space-y-5 leading-relaxed text-zinc-400">
            <p>
              {about.p1Before}{" "}
              <strong className="text-zinc-200">{about.p1Hr}</strong>
              {about.p1Mid}{" "}
              <strong className="text-zinc-200">{about.p1Tax}</strong>{" "}
              {about.p1Mid2}{" "}
              <strong className="text-zinc-200">{about.p1Heavy}</strong>
              {about.p1End}
            </p>
            <p>
              {about.p2Before}{" "}
              <strong className="text-cyan-400">{about.p2Python}</strong>
              {about.p2End}
            </p>
            <p>
              {about.p3Before}{" "}
              <strong className="text-zinc-200">{about.p3Grow}</strong>
              {about.p3End}
            </p>
          </div>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 space-y-4 lg:order-1">
            <p className="text-sm font-medium uppercase tracking-widest text-cyan-400/80">
              {about.runtimeLabel}
            </p>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              {about.runtimeTitle}{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {about.runtimeHighlight}
              </span>
            </h3>
            <p className="max-w-md leading-relaxed text-zinc-400">
              {about.runtimeBody}
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

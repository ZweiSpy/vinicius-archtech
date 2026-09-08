"use client";

import Link from "next/link";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { legalContent, type LegalDocument } from "@/lib/legal/content";

interface LegalPageViewProps {
  documentKey: "privacy" | "terms";
}

export function LegalPageView({ documentKey }: LegalPageViewProps) {
  const { locale, dict } = useLanguage();
  const doc: LegalDocument = legalContent[locale][documentKey];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <header className="border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-4">
          <Link
            href="/"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-lg font-bold text-transparent"
          >
            {dict.common.brandName}
          </Link>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <Link
              href="/"
              className="text-sm text-zinc-400 transition-colors hover:text-cyan-400"
            >
              {doc.backToSite}
            </Link>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">{doc.title}</h1>
        <p className="mt-2 text-sm text-cyan-400/80">{doc.lastUpdated}</p>
        <p className="mt-6 leading-relaxed text-zinc-400">{doc.intro}</p>

        <div className="mt-10 space-y-8">
          {doc.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold text-white">{section.heading}</h2>
              <div className="mt-3 space-y-3">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="leading-relaxed text-zinc-400">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-12 border-t border-white/10 pt-8 text-sm text-zinc-500">
          © {new Date().getFullYear()} {dict.common.brandName} / Zwei Coorporações LTDA
        </p>
      </article>
    </div>
  );
}

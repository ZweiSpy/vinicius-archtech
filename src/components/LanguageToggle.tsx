"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, toggleLocale, dict } = useLanguage();
  const activeLabel = locale === "pt" ? "PT" : "EN";

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={dict.common.languageToggleAria}
      className={`
        group inline-flex items-center gap-2 rounded-full
        border border-white/10 bg-white/5 px-3 py-1.5
        font-mono text-xs font-semibold uppercase tracking-wider text-zinc-300
        transition-all duration-300
        hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-300
        hover:shadow-lg hover:shadow-cyan-500/20
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50
        ${className}
      `}
    >
      <Globe className="h-3.5 w-3.5 text-cyan-400/80 transition-colors group-hover:text-cyan-300" />
      <span>{activeLabel}</span>
    </button>
  );
}

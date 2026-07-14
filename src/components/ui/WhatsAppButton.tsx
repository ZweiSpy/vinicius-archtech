"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

interface WhatsAppButtonProps {
  variant?: "primary" | "outline" | "floating";
  className?: string;
  label?: string;
}

export function WhatsAppButton({
  variant = "primary",
  className = "",
  label,
}: WhatsAppButtonProps) {
  const { dict } = useLanguage();
  const ctaLabel = label ?? dict.common.whatsappCta;

  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300";

  const variants = {
    primary: `
      rounded-full bg-gradient-to-r from-cyan-500 to-blue-600
      px-8 py-4 text-white shadow-lg shadow-cyan-500/25
      hover:shadow-cyan-500/40 hover:brightness-110
      animate-pulse-glow
    `,
    outline: `
      rounded-full border border-cyan-500/40 bg-cyan-500/10
      px-8 py-4 text-cyan-400
      hover:bg-cyan-500/20 hover:border-cyan-400/60
    `,
    floating: `
      fixed bottom-6 right-6 z-50 rounded-full
      bg-gradient-to-r from-cyan-500 to-blue-600
      p-4 text-white shadow-xl shadow-cyan-500/30
      hover:scale-110 hover:shadow-cyan-500/50
      animate-pulse-glow md:bottom-8 md:right-8
    `,
  };

  if (variant === "floating") {
    return (
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={dict.common.whatsappAria}
        className={`${baseStyles} ${variants.floating} ${className}`}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    );
  }

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      {ctaLabel}
    </a>
  );
}

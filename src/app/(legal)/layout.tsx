"use client";

import type { ReactNode } from "react";
import { LanguageProvider } from "@/context/LanguageContext";

export default function LegalPagesLayout({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}

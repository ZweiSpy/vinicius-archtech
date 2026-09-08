import type { Metadata } from "next";
import { LegalPageView } from "@/components/LegalPageView";

export const metadata: Metadata = {
  title: "Política de Privacidade | Zwei Coorp's",
  description:
    "Política de Privacidade da Zwei Coorporações LTDA, marca Zwei Coorp's e aplicativo Zwei Finance. Tratamento de dados conforme LGPD.",
};

export default function PrivacyPolicyPage() {
  return <LegalPageView documentKey="privacy" />;
}

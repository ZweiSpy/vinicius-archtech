import type { Metadata } from "next";
import { LegalPageView } from "@/components/LegalPageView";

export const metadata: Metadata = {
  title: "Termos de Uso | Zwei Coorp's",
  description:
    "Termos de Uso do site Zwei Coorp's e do aplicativo Zwei Finance, oferecidos pela Zwei Coorporações LTDA.",
};

export default function TermsOfUsePage() {
  return <LegalPageView documentKey="terms" />;
}

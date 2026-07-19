import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zwei Coorp's | Inovação e Engenharia de Dados",
  description:
    "Soluções inteligentes em BPO Financeiro, Inteligência Artificial e Automação de Processos. Transformando complexidade em eficiência operacional.",
  keywords: [
    "Zwei Coorp's",
    "BPO Financeiro",
    "Inteligência Artificial",
    "Automação de Processos",
    "Engenharia de Dados",
    "Python",
  ],
  authors: [{ name: "Zwei Coorp's" }],
  openGraph: {
    title: "Zwei Coorp's | Inovação e Engenharia de Dados",
    description:
      "Soluções inteligentes em BPO Financeiro, Inteligência Artificial e Automação de Processos. Transformando complexidade em eficiência operacional.",
    type: "website",
    locale: "pt_BR",
    siteName: "Zwei Coorp's",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zwei Coorp's | Inovação e Engenharia de Dados",
    description:
      "Soluções inteligentes em BPO Financeiro, Inteligência Artificial e Automação de Processos. Transformando complexidade em eficiência operacional.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}

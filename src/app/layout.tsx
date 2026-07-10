import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zwei | BPO Financeiro, Automação de Processos & Desenvolvimento Web",
  description:
    "Soluções inteligentes em BPO Financeiro, Automação de Processos e Engenharia de Dados. Python, Selenium e desenvolvimento web para escalar a eficiência da sua empresa.",
  keywords: [
    "BPO Financeiro",
    "Automação de Processos",
    "Python",
    "Desenvolvimento Web",
    "Conta Azul",
    "Selenium",
  ],
  authors: [{ name: "Zwei" }],
  openGraph: {
    title: "Zwei | BPO Financeiro, Automação & Desenvolvimento Web",
    description:
      "Aliando inteligência de negócios e desenvolvimento em Python para eliminar gargalos operacionais.",
    type: "website",
    locale: "pt_BR",
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

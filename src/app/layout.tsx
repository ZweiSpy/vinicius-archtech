import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://vinicius-archtech.vercel.app";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "Zwei Coorp's",
  url: SITE_URL,
  description:
    "Soluções inteligentes em BPO Financeiro, Inteligência Artificial e Automação de Processos. Transformando complexidade em eficiência operacional.",
  areaServed: {
    "@type": "Country",
    name: "Brazil",
  },
  sameAs: [
    "https://github.com/ZweiSpy",
    "https://www.instagram.com/vinicius.archtech/",
    "https://www.workana.com/freelancer/f60aa1ec5d243799cce32b2d05406711",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: ["Portuguese", "English"],
    url: "https://wa.me/5521976044130",
  },
  knowsAbout: [
    "Financial BPO",
    "Process Automation",
    "Python",
    "ERP Integration",
    "Conta Azul",
    "Olist Tiny",
    "VHSYS",
    "Web Development",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Zwei Coorp's",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zwei Coorp's | Inovação e Engenharia de Dados",
    description:
      "Soluções inteligentes em BPO Financeiro, Inteligência Artificial e Automação de Processos. Transformando complexidade em eficiência operacional.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}

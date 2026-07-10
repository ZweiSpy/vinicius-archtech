import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ToolsSection } from "@/components/ToolsSection";
import { FooterSection } from "@/components/FooterSection";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ToolsSection />
        <FooterSection />
      </main>
      <FloatingWhatsApp />
    </>
  );
}

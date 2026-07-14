"use client";

import { Github, Linkedin, ExternalLink } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SOCIAL_LINKS } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

const socialItems = [
  { label: "GitHub", href: SOCIAL_LINKS.github, icon: Github },
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, icon: Linkedin },
  { label: "Workana", href: SOCIAL_LINKS.workana, icon: ExternalLink },
  { label: "99freelas", href: SOCIAL_LINKS.freelas, icon: ExternalLink },
];

export function FooterSection() {
  const { dict } = useLanguage();
  const { footer } = dict;

  return (
    <SectionWrapper id="contato" className="px-6 py-24" delay={0.1}>
      <footer className="mx-auto max-w-4xl text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-10 backdrop-blur-md sm:p-14">
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
            {footer.headline}
          </h2>
          <p className="mb-8 text-lg text-zinc-400">
            {footer.subBefore}{" "}
            <span className="text-cyan-400">{footer.subAccent}</span>
            {footer.subAfter}
          </p>

          <WhatsAppButton className="mb-10" />

          <div className="mb-8 flex items-center justify-center gap-6">
            {socialItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <item.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} {footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </SectionWrapper>
  );
}

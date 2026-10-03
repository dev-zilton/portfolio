import { MessageCircle, Mail } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { GitHubIcon } from "../components/ui/GitHubIcon";
import { ContactForm } from "../components/ContactForm";
import { staticPortfolio } from "../data/portfolio";
import type { Translation } from "../i18n/translations";

function LinkedInIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function ContactSection({ t }: { t: Translation }) {
  const linkBase = "flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise-400";
  const linkPrimary = `${linkBase} bg-turquoise-500 text-white hover:bg-turquoise-400 active:scale-95`;
  const linkSecondary = `${linkBase} border border-glass/10 bg-glass/5 text-copy hover:bg-glass/10 active:scale-95`;
  return (
    <section id="contact" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <AnimatedSection>
          <SectionHeading title={t.contact.title} highlight={t.contact.highlight} subtitle={t.contact.subtitle} />
        </AnimatedSection>
        <AnimatedSection delay={150}>
          <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
            <a href={staticPortfolio.contacts.whatsapp} target="_blank" rel="noopener noreferrer" className={linkPrimary}>
              <MessageCircle size={18} aria-hidden="true" />{t.contact.whatsapp}
            </a>
            <a href={staticPortfolio.contacts.email} target="_blank" rel="noopener noreferrer" className={linkPrimary}>
              <Mail size={18} aria-hidden="true" />{t.contact.email}
            </a>
            <a href={staticPortfolio.contacts.github} target="_blank" rel="noopener noreferrer" className={linkSecondary}>
              <GitHubIcon />{t.contact.github}
            </a>
            <a href={staticPortfolio.contacts.linkedin} target="_blank" rel="noopener noreferrer" className={linkSecondary}>
              <LinkedInIcon />{t.contact.linkedin}
            </a>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={250}>
          <div className="mt-12 border-t border-glass/10 pt-12">
            <ContactForm t={t.contact.form} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

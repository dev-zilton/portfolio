import { useEffect, useState } from "react";
import { ContactActionButton } from "./components/ContactActionButton";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
// InfoCard removed — simplified layout uses direct components
import { Navbar } from "./components/Navbar";
import { ProjectCard } from "./components/ProjectCard";
import { SkillBar } from "./components/SkillBar";
import { GlassCard } from "./components/ui/GlassCard";
import { SectionHeading } from "./components/ui/SectionHeading";
import { staticPortfolio } from "./data/portfolio";
import { useLanguage, useProjectsWithLinks } from "./i18n/LanguageContext";

const SECTION_IDS = ["home", "about", "skills", "projects", "contact"] as const;

function PortfolioContent() {
  const { t } = useLanguage();
  const projects = useProjectsWithLinks();
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const section of SECTION_IDS) {
        const element = document.getElementById(section);
        if (!element) continue;

        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-surface font-sans">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      <main className="pt-[57px]">
        <Hero onContact={() => scrollToSection("contact")} />

        {/* Offer/cards section removed — simplified single About & Education section below */}

        <section id="about" className="px-4 py-20 md:px-6">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title={t.aboutSection.title}
              highlight={t.aboutSection.highlight}
              className="mb-10"
            />

            <div className="grid gap-8 md:grid-cols-2">
              {/* Left: Intro and interests */}
              <div>
                <p className="mb-6 text-lg font-normal leading-relaxed text-copy">
                  {t.about.intro}
                </p>
                <p className="mb-3 font-semibold text-copy-muted">
                  {t.about.interestsTitle}
                </p>
                <ul className="space-y-2">
                  {t.about.interests.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-copy-muted"
                    >
                      <span className="mt-1 text-turquoise-400">•</span>
                      <span className="font-normal">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-lg font-normal leading-relaxed text-copy">
                  {t.about.closing}
                </p>
              </div>

              {/* Right: Education list + Certificates */}
              <div className="space-y-4">
                <div>
                  <h4 className="mb-4 text-sm font-semibold text-white">
                    {t.aboutSection.educationLabel}
                  </h4>
                  <div className="space-y-3">
                    {t.education.items.map((edu) => (
                      <GlassCard key={edu.degree} interactive={false}>
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-semibold text-white">
                            {edu.degree}
                          </span>
                          <span className="text-xs text-turquoise-300">
                            {edu.school} • {edu.year}
                          </span>
                          {edu.description ? (
                            <span className="text-sm text-copy-muted">
                              {edu.description}
                            </span>
                          ) : null}
                        </div>
                      </GlassCard>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 text-sm font-semibold text-white">
                    {t.aboutSection.certificatesLabel}
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-copy-muted">
                    {t.certificates.items.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="px-4 py-20 md:px-6">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              title={t.skills.title}
              highlight={t.skills.highlight}
            />
            <div className="grid gap-6 md:grid-cols-2">
              <GlassCard interactive={false}>
                <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-white">
                  <span className="h-2 w-2 rounded-full bg-turquoise-400" />
                  {t.skills.technical}
                </h3>
                {staticPortfolio.skills.slice(0, 4).map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </GlassCard>
              <GlassCard interactive={false}>
                <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-white">
                  <span className="h-2 w-2 rounded-full bg-accent-purple" />
                  {t.skills.tools}
                </h3>
                {staticPortfolio.skills.slice(4).map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </GlassCard>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-white/[0.02] px-4 py-20 md:px-6">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title={t.projects.title}
              highlight={t.projects.highlight}
              subtitle={t.projects.subtitle}
            />
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  icon={project.icon}
                  link={project.link}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Removed separate Education & Certificates sections — merged into About */}

        <section id="contact" className="px-4 py-20 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <SectionHeading
              title={t.contact.title}
              highlight={t.contact.highlight}
              subtitle={t.contact.subtitle}
            />
            <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
              <ContactActionButton
                href={staticPortfolio.contacts.whatsapp}
                icon="💬"
                label={t.contact.whatsapp}
                variant="primary"
              />
              <ContactActionButton
                href={staticPortfolio.contacts.email}
                icon="📧"
                label={t.contact.email}
                variant="primary"
              />
              <ContactActionButton
                href={staticPortfolio.contacts.github}
                icon="🐙"
                label={t.contact.github}
              />
              <ContactActionButton
                href={staticPortfolio.contacts.linkedin}
                icon="💼"
                label={t.contact.linkedin}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default PortfolioContent;

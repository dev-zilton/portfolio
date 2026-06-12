import { useEffect, useState } from "react";
import { MessageCircle, Mail, ChevronRight } from "lucide-react";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProjectCard } from "./components/ProjectCard";
import { SkillBar } from "./components/SkillBar";
import { GlassCard } from "./components/ui/GlassCard";
import { SectionHeading } from "./components/ui/SectionHeading";
import { staticPortfolio } from "./data/portfolio";
import { useLanguage, useProjectsWithLinks } from "./i18n/LanguageContext";
import { useTheme } from "./hooks/useTheme";

type SectionId = "home" | "about" | "skills" | "projects" | "contact";

const SECTION_IDS: SectionId[] = [
  "home",
  "about",
  "skills",
  "projects",
  "contact",
];

function GitHubIcon() {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function PortfolioContent() {
  const { t } = useLanguage();
  const projects = useProjectsWithLinks();
  const { isDark, toggle } = useTheme();
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  const halfIndex = Math.ceil(staticPortfolio.skills.length / 2);
  const skillsLeft = staticPortfolio.skills.slice(0, halfIndex);
  const skillsRight = staticPortfolio.skills.slice(halfIndex);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId as SectionId);
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

  const linkBase =
    "flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise-400";
  const linkPrimary = `${linkBase} bg-turquoise-500 text-white hover:bg-turquoise-400 active:scale-95`;
  const linkSecondary = `${linkBase} border border-white/10 bg-white/5 text-copy dark:text-copy light:text-copy-light hover:bg-white/10 active:scale-95`;

  return (
    <div className="min-h-screen bg-surface dark:bg-surface light:bg-surface-light font-sans transition-colors duration-300">
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isDark={isDark}
        onToggleTheme={toggle}
      />

      <main className="pt-[57px]">
        <Hero onContact={() => scrollToSection("contact")} />

        <section id="about" className="px-4 py-20 md:px-6">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              title={t.aboutSection.title}
              highlight={t.aboutSection.highlight}
              className="mb-10"
            />
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="mb-6 text-lg font-normal leading-relaxed text-copy dark:text-copy light:text-copy-light">
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
                      <ChevronRight
                        size={14}
                        className="mt-1 shrink-0 text-turquoise-400"
                        aria-hidden="true"
                      />
                      <span className="font-normal">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-lg font-normal leading-relaxed text-copy dark:text-copy light:text-copy-light">
                  {t.about.closing}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="mb-4 text-sm font-semibold text-white dark:text-white light:text-gray-900">
                    {t.aboutSection.educationLabel}
                  </h4>
                  <div className="space-y-3">
                    {t.education.items.map((edu) => (
                      <GlassCard key={edu.degree} interactive={false}>
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-semibold text-white dark:text-white light:text-gray-900">
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
                  <h4 className="mb-3 text-sm font-semibold text-white dark:text-white light:text-gray-900">
                    {t.aboutSection.certificatesLabel}
                  </h4>
                  <ul className="space-y-2 text-sm text-copy-muted">
                    {t.certificates.items.map((c) => (
                      <li key={c} className="flex items-start gap-2">
                        <ChevronRight
                          size={14}
                          className="mt-0.5 shrink-0 text-turquoise-400"
                          aria-hidden="true"
                        />
                        {c}
                      </li>
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
                <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-white dark:text-white light:text-gray-900">
                  <span className="h-2 w-2 rounded-full bg-turquoise-400" />
                  {t.skills.technical}
                </h3>
                {skillsLeft.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </GlassCard>
              <GlassCard interactive={false}>
                <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-white dark:text-white light:text-gray-900">
                  <span className="h-2 w-2 rounded-full bg-accent-purple" />
                  {t.skills.tools}
                </h3>
                {skillsRight.map((skill) => (
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

        <section id="contact" className="px-4 py-20 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <SectionHeading
              title={t.contact.title}
              highlight={t.contact.highlight}
              subtitle={t.contact.subtitle}
            />
            <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
              <a
                href={staticPortfolio.contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.contact.whatsapp}
                className={linkPrimary}
              >
                <MessageCircle size={18} aria-hidden="true" />
                {t.contact.whatsapp}
              </a>
              <a
                href={staticPortfolio.contacts.email}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.contact.email}
                className={linkPrimary}
              >
                <Mail size={18} aria-hidden="true" />
                {t.contact.email}
              </a>
              <a
                href={staticPortfolio.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.contact.github}
                className={linkSecondary}
              >
                <GitHubIcon />
                {t.contact.github}
              </a>
              <a
                href={staticPortfolio.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.contact.linkedin}
                className={linkSecondary}
              >
                <LinkedInIcon />
                {t.contact.linkedin}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default PortfolioContent;

import { lazy, Suspense, useEffect, useState } from "react";
import { useLanguage, useProjectsWithLinks } from "./i18n/LanguageContext";
import { useTheme } from "./hooks/useTheme";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { CustomCursor } from "./components/CustomCursor";

const AboutSection = lazy(() => import("./sections/AboutSection"));
const SkillsSection = lazy(() => import("./sections/SkillsSection"));
const ProjectsSection = lazy(() => import("./sections/ProjectsSection"));
const ContactSection = lazy(() => import("./sections/ContactSection"));

type SectionId = "home" | "about" | "skills" | "projects" | "contact";
const SECTION_IDS: SectionId[] = ["home", "about", "skills", "projects", "contact"];

function SectionFallback() {
  return <div className="py-20" />;
}

function PortfolioContent() {
  const { t } = useLanguage();
  const projects = useProjectsWithLinks();
  const { isDark, toggle } = useTheme();
  const [activeSection, setActiveSection] = useState<SectionId>("home");

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
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-surface dark:bg-surface font-sans transition-colors duration-300" style={{ cursor: "none" }}>
      <ScrollProgressBar />
      <CustomCursor />
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isDark={isDark}
        onToggleTheme={toggle}
      />
      <main className="pt-[57px]">
        <Hero onContact={() => scrollToSection("contact")} />
        <Suspense fallback={<SectionFallback />}>
          <AboutSection t={t} />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <SkillsSection t={t} />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ProjectsSection t={t} projects={projects} />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ContactSection t={t} />
        </Suspense>
      </main>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default PortfolioContent;

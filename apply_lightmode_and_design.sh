#!/bin/bash
set -e

if [ ! -f "package.json" ] || [ ! -d "src" ]; then
  echo "❌ Corre este script a partir da raiz do projeto portfolio (onde está o package.json)."
  exit 1
fi

echo "A aplicar modo claro real + categoria Design nas Competências..."

echo "  -> tailwind.config.js"
mkdir -p "$(dirname 'tailwind.config.js')"
cat > tailwind.config.js << 'FILE_0_EOF'
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        surface: {
          DEFAULT: "rgb(var(--color-surface) / <alpha-value>)",
        },
        "surface-elevated": {
          DEFAULT: "rgb(var(--color-surface-elevated) / <alpha-value>)",
        },
        copy: {
          DEFAULT: "rgb(var(--color-copy) / <alpha-value>)",
        },
        "copy-muted": {
          DEFAULT: "rgb(var(--color-copy-muted) / <alpha-value>)",
        },
        glass: {
          DEFAULT: "rgb(var(--color-glass) / <alpha-value>)",
        },
        turquoise: {
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
        },
        "accent-purple": "#8b5cf6",
      },
      boxShadow: {
        "glow-turquoise": "0 0 28px rgba(45, 212, 191, 0.45)",
        "glow-turquoise-soft": "0 0 18px rgba(45, 212, 191, 0.25)",
      },
    },
  },
  plugins: [],
};
FILE_0_EOF

echo "  -> src/index.css"
mkdir -p "$(dirname 'src/index.css')"
cat > src/index.css << 'FILE_1_EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-surface: 11 17 23;
  --color-surface-elevated: 15 23 42;
  --color-copy: 243 244 246;
  --color-copy-muted: 156 163 175;
  --color-glass: 255 255 255;
}

.light {
  --color-surface: 248 250 252;
  --color-surface-elevated: 255 255 255;
  --color-copy: 17 24 39;
  --color-copy-muted: 71 85 105;
  --color-glass: 15 23 42;
}

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-surface text-copy antialiased transition-colors duration-300;
  }
}

@layer components {
  .text-gradient-primary {
    @apply bg-gradient-to-r from-turquoise-400 to-accent-purple bg-clip-text text-transparent;
  }

  .glass-card {
    @apply rounded-2xl border border-glass/10 bg-glass/[0.04] p-8 backdrop-blur-xl;
  }

  .btn-primary {
    @apply inline-flex items-center justify-center gap-2 rounded-xl bg-turquoise-400 px-6 py-3 font-bold text-slate-950 transition-all duration-300 hover:scale-105 hover:bg-turquoise-300 hover:shadow-glow-turquoise disabled:pointer-events-none disabled:opacity-70;
  }

  .btn-secondary {
    @apply inline-flex items-center justify-center gap-2 rounded-xl border-2 border-turquoise-400/80 bg-transparent px-6 py-3 font-bold text-turquoise-300 transition-all duration-300 hover:scale-105 hover:bg-turquoise-400/10 hover:shadow-glow-turquoise-soft;
  }

  .nav-link {
    @apply relative text-sm font-medium text-copy-muted transition-colors duration-300 hover:text-copy;
  }

  .nav-link::after {
    content: "";
    @apply absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-turquoise-400 to-accent-purple transition-all duration-300;
  }

  .nav-link:hover::after,
  .nav-link-active::after {
    @apply w-full;
  }

  .nav-link-active {
    @apply text-turquoise-300;
  }

  .section-heading {
    @apply text-center text-3xl font-bold tracking-tight text-copy md:text-5xl;
  }

  .section-subheading {
    @apply text-center text-lg font-normal text-copy-muted md:text-xl;
  }
}
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-6px);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  15% {
    transform: rotate(14deg);
  }
  30% {
    transform: rotate(-8deg);
  }
  45% {
    transform: rotate(14deg);
  }
  60% {
    transform: rotate(-4deg);
  }
  75% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.animate-wave {
  display: inline-block;
  animation: wave 1.8s infinite;
}
FILE_1_EOF

echo "  -> src/data/portfolio.ts"
mkdir -p "$(dirname 'src/data/portfolio.ts')"
cat > src/data/portfolio.ts << 'FILE_2_EOF'
export const staticPortfolio = {
  name: "Zilton Tuaire Abdul",
  firstName: "Zilton",

  skillCategories: [
    {
      id: "frontend",
      items: [
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Tailwind CSS", icon: "tailwind" },
      ],
    },
    {
      id: "backend",
      items: [
        { name: "Python", icon: "python" },
        { name: "Java (Swing)", icon: "java" },
        { name: "Spring Boot", icon: "springboot" },
        { name: "FastAPI", icon: "fastapi" },
        { name: "Node.js", icon: "nodejs" },
        { name: "Express", icon: "express" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "MySQL / MariaDB", icon: "mysql" },
        { name: "SQLite / Turso", icon: "sqlite" },
        { name: "JWT", icon: "jwt" },
      ],
    },
    {
      id: "devops",
      items: [
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "Docker", icon: "docker" },
      ],
    },
    {
      id: "cloud",
      items: [
        { name: "Vercel", icon: "vercel" },
        { name: "AWS", icon: "aws" },
        { name: "Supabase", icon: "supabase" },
        { name: "M-Pesa / e-Mola", icon: "mpesa" },
        { name: "Arduino / IoT", icon: "arduino" },
      ],
    },
    {
      id: "design",
      items: [
        { name: "Figma", icon: "figma" },
        { name: "Canva", icon: "canva" },
        { name: "Photoshop", icon: "photoshop" },
      ],
    },
  ],

  projects: [
    {
      id: "irrigation",
      icon: "leaf",
      link: "https://marketing-digital-landingg.vercel.app/",
      image: "/irrigation.png",
    },
    { id: "rentcar", icon: "car", link: "https://rentacar-mz.vercel.app/", image: "/rentacar-mz.png" },
    { id: "matoladigital", icon: "landmark", link: "https://matola-digital.vercel.app/", image: "/matola-digital.png" },
    {
      id: "picasso",
      icon: "cart",
      link: "https://github.com/dev-zilton/SistemaVendasUnico.java",
    },
    { id: "dripgod", icon: "shirt", link: "https://fashion-website-improvements.vercel.app/", image: "/dripgod.png" },
    {
      id: "landingpage",
      icon: "layout",
      link: "https://website-ten-iota-18.vercel.app/",
      image: "/sweetlar.png",
    },
    {
      id: "startuplanding",
      icon: "rocket",
      link: "https://startup-website-build.vercel.app/",
      image: "/startuplanding.png",
    },
  ],

  contacts: {
    whatsapp: "https://wa.me/258843792635",
    email: "mailto:ziltontuaireabdul@gmail.com",
    github: "https://github.com/dev-zilton",
    linkedin: "https://www.linkedin.com/in/zilton-tuair-abdul",
  },

  navIds: ["about", "skills", "projects", "contact"] as const,

  footerIds: ["about", "skills", "projects", "contact"] as const,
};

export type SkillCategory = (typeof staticPortfolio.skillCategories)[number];
export type Skill = SkillCategory["items"][number];
FILE_2_EOF

echo "  -> src/components/TechIcon.tsx"
mkdir -p "$(dirname 'src/components/TechIcon.tsx')"
cat > src/components/TechIcon.tsx << 'FILE_3_EOF'
import { Coffee, Cloud, Smartphone, Image as ImageIcon } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiSpringboot,
  SiFastapi,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiJsonwebtokens,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiSupabase,
  SiArduino,
  SiFigma,
  SiCanva,
} from "react-icons/si";
import type { Skill } from "../data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  react: <SiReact color="#61DAFB" />,
  nextjs: <SiNextdotjs />,
  typescript: <SiTypescript color="#3178C6" />,
  tailwind: <SiTailwindcss color="#38BDF8" />,
  python: <SiPython color="#3776AB" />,
  java: <Coffee color="#ED8B00" />,
  springboot: <SiSpringboot color="#6DB33F" />,
  fastapi: <SiFastapi color="#009688" />,
  express: <SiExpress />,
  postgresql: <SiPostgresql color="#4169E1" />,
  mysql: <SiMysql color="#4479A1" />,
  sqlite: <SiSqlite color="#003B57" />,
  jwt: <SiJsonwebtokens color="#D63AFF" />,
  nodejs: <SiNodedotjs color="#5FA04E" />,
  git: <SiGit color="#F05032" />,
  github: <SiGithub />,
  docker: <SiDocker color="#2496ED" />,
  vercel: <SiVercel />,
  aws: <Cloud color="#FF9900" />,
  supabase: <SiSupabase color="#3ECF8E" />,
  mpesa: <Smartphone color="#E4002B" />,
  arduino: <SiArduino color="#00979D" />,
  figma: <SiFigma color="#F24E1E" />,
  canva: <SiCanva color="#00C4CC" />,
  photoshop: <ImageIcon color="#31A8FF" />,
};

type TechIconProps = {
  skill: Skill;
};

export function TechIcon({ skill }: TechIconProps) {
  const icon = iconMap[skill.icon] ?? <SiGit />;

  return (
    <div
      className="group flex flex-col items-center gap-2"
      title={skill.name}
    >
      <div
        className="flex h-14 w-14 items-center justify-center rounded-xl border border-glass/10 bg-glass/5 text-2xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-turquoise-400/30 group-hover:bg-glass/10"
        aria-label={skill.name}
        role="img"
      >
        {icon}
      </div>
      <span className="text-center text-xs font-medium text-copy-muted">
        {skill.name}
      </span>
    </div>
  );
}
FILE_3_EOF

echo "  -> src/sections/SkillsSection.tsx"
mkdir -p "$(dirname 'src/sections/SkillsSection.tsx')"
cat > src/sections/SkillsSection.tsx << 'FILE_4_EOF'
import { GlassCard } from "../components/ui/GlassCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import { TechIcon } from "../components/TechIcon";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { staticPortfolio } from "../data/portfolio";
import type { Translation } from "../i18n/translations";

const categoryDotColor: Record<string, string> = {
  frontend: "bg-turquoise-400",
  backend: "bg-accent-purple",
  devops: "bg-turquoise-400",
  cloud: "bg-accent-purple",
  design: "bg-turquoise-400",
};

export default function SkillsSection({ t }: { t: Translation }) {
  return (
    <section id="skills" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-4xl">
        <AnimatedSection>
          <SectionHeading title={t.skills.title} highlight={t.skills.highlight} />
        </AnimatedSection>
        <div className="grid gap-6 md:grid-cols-2">
          {staticPortfolio.skillCategories.map((category, index) => (
            <AnimatedSection key={category.id} delay={100 * (index + 1)}>
              <GlassCard interactive={false}>
                <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-copy">
                  <span
                    className={`h-2 w-2 rounded-full ${categoryDotColor[category.id] ?? "bg-turquoise-400"}`}
                  />
                  {t.skills.categories[category.id as keyof typeof t.skills.categories]}
                </h3>
                <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
                  {category.items.map((skill) => (
                    <TechIcon key={skill.name} skill={skill} />
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
FILE_4_EOF

echo "  -> src/components/Footer.tsx"
mkdir -p "$(dirname 'src/components/Footer.tsx')"
cat > src/components/Footer.tsx << 'FILE_5_EOF'
import { useMemo } from "react";
import { staticPortfolio } from "../data/portfolio";
import { useLanguage } from "../i18n/LanguageContext";

type FooterProps = {
  scrollToSection: (id: string) => void;
};

export function Footer({ scrollToSection }: FooterProps) {
  const { t } = useLanguage();

  const footerLabels = useMemo(
    () => ({
      about: t.footer.about,
      skills: t.footer.skills,
      projects: t.footer.projects,
      contact: t.footer.contact,
    }),
    [t],
  );

  return (
    <footer
      role="contentinfo"
      className="border-t border-glass/10 bg-surface-elevated px-4 py-10"
    >
      <div className="mx-auto max-w-7xl space-y-6 text-center">
        {/* NAVIGATION */}
        <nav
          className="flex flex-wrap items-center justify-center gap-6"
          aria-label="Footer navigation"
        >
          {staticPortfolio.footerIds.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              aria-label={`Ir para secção ${footerLabels[id]}`}
              className="text-sm text-copy-muted transition-colors hover:text-copy"
            >
              {footerLabels[id]}
            </button>
          ))}
        </nav>

        {/* CV CTA */}
        <div className="flex justify-center">
          <a
            href="/curriculo.pdf"
            download="Curriculo_Zilton_Dev.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-glass/15 bg-glass/5 px-5 py-2 text-sm text-copy-muted transition-all hover:bg-glass/10 hover:text-copy focus:outline-none focus:ring-2 focus:ring-glass/20"
            aria-label="Baixar currículo em PDF"
          >
            📄 Baixar Currículo
          </a>
        </div>

        {/* DIVIDER */}
        <div className="h-px w-full bg-glass/10" />

        {/* COPYRIGHT */}
        <p className="text-copy-muted">
          © 2024 {staticPortfolio.name}. {t.footer.rights}
        </p>

        <p className="text-sm text-copy-muted/70">{t.footer.built}</p>
      </div>
    </footer>
  );
}
FILE_5_EOF

echo "  -> src/components/Navbar.tsx"
mkdir -p "$(dirname 'src/components/Navbar.tsx')"
cat > src/components/Navbar.tsx << 'FILE_6_EOF'
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { staticPortfolio } from "../data/portfolio";
import { useLanguage } from "../i18n/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { PrimaryButton } from "./ui/PrimaryButton";

type NavbarProps = {
  activeSection: string;
  scrollToSection: (id: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
};

export function Navbar({
  activeSection,
  scrollToSection,
  isDark,
  onToggleTheme,
}: NavbarProps) {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLabels: Record<string, string> = {
    about: t.nav.about,
    skills: t.nav.skills,
    projects: t.nav.projects,
    contact: t.nav.contact,
  };

  const handleNav = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-glass/10 bg-surface/90 backdrop-blur-xl transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* LOGO */}
        <button
          type="button"
          onClick={() => handleNav("home")}
          className="text-lg font-bold tracking-wide text-copy transition-opacity hover:opacity-80"
          aria-label="Go to home"
        >
          PORTFOLIO<span className="text-turquoise-400">.</span>
        </button>

        {/* DESKTOP NAV */}
        <nav
          className="hidden items-center gap-4 rounded-full border border-glass/10 bg-glass/5 px-4 py-2 lg:flex"
          aria-label="Main navigation"
        >
          {staticPortfolio.navIds.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => handleNav(id)}
              className={`nav-link ${activeSection === id ? "nav-link-active" : ""}`}
            >
              {navLabels[id]}
            </button>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-2 md:gap-3">
          <LanguageSwitcher className="hidden sm:flex" />

          {/* BOTÃO DARK / LIGHT */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={
              isDark ? "Mudar para modo claro" : "Mudar para modo escuro"
            }
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-glass/15 bg-glass/5 text-copy transition-all duration-200 hover:bg-glass/10 hover:border-turquoise-400/50"
          >
            {isDark ? (
              <Sun
                size={16}
                className="text-turquoise-300"
                aria-hidden="true"
              />
            ) : (
              <Moon
                size={16}
                className="text-turquoise-300"
                aria-hidden="true"
              />
            )}
          </button>

          <PrimaryButton
            className="hidden !py-2 text-sm md:inline-flex"
            onClick={() => handleNav("contact")}
          >
            {t.nav.contact}
          </PrimaryButton>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-glass/15 bg-glass/5 lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            <span
              className={`h-0.5 w-5 bg-copy transition-all duration-300 ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-copy transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`h-0.5 w-5 bg-copy transition-all duration-300 ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-[57px] bg-surface/95 backdrop-blur-xl"
        >
          <nav
            className="flex flex-col gap-2 px-6 py-8"
            aria-label="Mobile navigation"
          >
            <LanguageSwitcher className="mb-4 w-fit sm:hidden" />

            {staticPortfolio.navIds.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => handleNav(id)}
                className={`nav-link w-fit py-3 text-left text-lg ${activeSection === id ? "nav-link-active" : ""}`}
              >
                {navLabels[id]}
              </button>
            ))}

            <PrimaryButton
              className="mt-4 w-full"
              onClick={() => handleNav("contact")}
            >
              {t.nav.contactMe}
            </PrimaryButton>
          </nav>
        </div>
      )}
    </header>
  );
}
FILE_6_EOF

echo "  -> src/components/ContactActionButton.tsx"
mkdir -p "$(dirname 'src/components/ContactActionButton.tsx')"
cat > src/components/ContactActionButton.tsx << 'FILE_7_EOF'
import { type ReactNode } from "react";

interface ContactActionButtonProps {
  href: string;
  icon: ReactNode;
  label: string;
  variant?: "default" | "primary";
}

export function ContactActionButton({
  href,
  icon,
  label,
  variant = "default",
}: ContactActionButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex items-center gap-3 rounded-xl border p-4 transition-all duration-300
        ${
          variant === "primary"
            ? "border-turquoise-400/30 bg-turquoise-400/10 hover:bg-turquoise-400/20"
            : "border-glass/10 bg-glass/5 hover:bg-glass/10"
        }
      `}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-glass/10 text-copy">
        {icon}
      </span>

      <span className="font-medium text-copy">{label}</span>
    </a>
  );
}
FILE_7_EOF

echo "  -> src/components/InfoCard.tsx"
mkdir -p "$(dirname 'src/components/InfoCard.tsx')"
cat > src/components/InfoCard.tsx << 'FILE_8_EOF'
import { GlassCard } from "./ui/GlassCard";

type InfoCardProps = {
  icon: string;
  title: string;
  content: string | string[];
};

export function InfoCard({ icon, title, content }: InfoCardProps) {
  return (
    <GlassCard className="group transition-all duration-300 hover:-translate-y-1">
      <div className="space-y-3">
        {/* ICON */}
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-turquoise-400 to-accent-purple text-2xl transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>

        {/* TITLE */}
        <h3 className="text-lg font-bold text-copy">{title}</h3>

        {/* CONTENT */}
        {Array.isArray(content) ? (
          <ul className="space-y-2">
            {content.map((item, idx) => (
              <li
                key={idx}
                className="text-sm font-normal leading-relaxed text-copy-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm font-normal leading-relaxed text-copy-muted">
            {content}
          </p>
        )}
      </div>
    </GlassCard>
  );
}
FILE_8_EOF

echo "  -> src/components/LanguageSwitcher.tsx"
mkdir -p "$(dirname 'src/components/LanguageSwitcher.tsx')"
cat > src/components/LanguageSwitcher.tsx << 'FILE_9_EOF'
import { locales } from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageContext";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={`flex items-center gap-0.5 rounded-full border border-glass/15 bg-glass/5 p-0.5 ${className}`}
      role="radiogroup"
      aria-label="Language switcher"
    >
      {locales.map(({ code, label }) => {
        const isActive = locale === code;

        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            role="radio"
            aria-checked={isActive}
            aria-label={label}
            className={`rounded-full px-2.5 py-1 text-xs font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-turquoise-400/40 ${
              isActive
                ? "bg-turquoise-400 text-slate-950 shadow-glow-turquoise-soft"
                : "text-copy-muted hover:text-copy hover:scale-[1.05]"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
FILE_9_EOF

echo "  -> src/components/ui/GlassCard.tsx"
mkdir -p "$(dirname 'src/components/ui/GlassCard.tsx')"
cat > src/components/ui/GlassCard.tsx << 'FILE_10_EOF'
import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
};

export function GlassCard({
  children,
  className = "",
  interactive = true,
}: GlassCardProps) {
  if (!interactive) {
    return <div className={`glass-card ${className}`}>{children}</div>;
  }

  return (
    <div
      className={`group relative rounded-2xl bg-gradient-to-br from-glass/10 to-glass/5 p-px transition-all duration-300 hover:from-turquoise-400/60 hover:to-accent-purple/60 hover:shadow-glow-turquoise-soft ${className}`}
    >
      <div className="glass-card h-full !border-0 !bg-glass/[0.05] group-hover:bg-glass/[0.07]">
        {children}
      </div>
    </div>
  );
}
FILE_10_EOF

echo "  -> src/sections/AboutSection.tsx"
mkdir -p "$(dirname 'src/sections/AboutSection.tsx')"
cat > src/sections/AboutSection.tsx << 'FILE_11_EOF'
import { ChevronRight } from "lucide-react";
import { GlassCard } from "../components/ui/GlassCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import type { Translation } from "../i18n/translations";

export default function AboutSection({ t }: { t: Translation }) {
  return (
    <section id="about" className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <SectionHeading title={t.aboutSection.title} highlight={t.aboutSection.highlight} className="mb-10" />
        </AnimatedSection>
        <div className="grid gap-8 md:grid-cols-2">
          <AnimatedSection delay={100}>
            <p className="mb-6 text-lg font-normal leading-relaxed text-copy">{t.about.intro}</p>
            <p className="mb-3 font-semibold text-copy-muted">{t.about.interestsTitle}</p>
            <ul className="space-y-2">
              {t.about.interests.map((item) => (
                <li key={item} className="flex items-start gap-2 text-copy-muted">
                  <ChevronRight size={14} className="mt-1 shrink-0 text-turquoise-400" aria-hidden="true" />
                  <span className="font-normal">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-lg font-normal leading-relaxed text-copy">{t.about.closing}</p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="space-y-4">
              <div>
                <h4 className="mb-4 text-sm font-semibold text-copy">{t.aboutSection.educationLabel}</h4>
                <div className="space-y-3">
                  {t.education.items.map((edu) => (
                    <GlassCard key={edu.degree} interactive={false}>
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-semibold text-copy">{edu.degree}</span>
                        <span className="text-xs text-turquoise-300">{edu.school} • {edu.year}</span>
                        {edu.description ? <span className="text-sm text-copy-muted">{edu.description}</span> : null}
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="mb-3 text-sm font-semibold text-copy">{t.aboutSection.certificatesLabel}</h4>
                <ul className="space-y-2 text-sm text-copy-muted">
                  {t.certificates.items.map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <ChevronRight size={14} className="mt-0.5 shrink-0 text-turquoise-400" aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
FILE_11_EOF

echo "  -> src/sections/ContactSection.tsx"
mkdir -p "$(dirname 'src/sections/ContactSection.tsx')"
cat > src/sections/ContactSection.tsx << 'FILE_12_EOF'
import { MessageCircle, Mail } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { staticPortfolio } from "../data/portfolio";
import type { Translation } from "../i18n/translations";

function GitHubIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

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
      </div>
    </section>
  );
}
FILE_12_EOF

echo "  -> src/components/ProjectCard.tsx"
mkdir -p "$(dirname 'src/components/ProjectCard.tsx')"
cat > src/components/ProjectCard.tsx << 'FILE_13_EOF'
import { Leaf, Car, ShoppingCart, Code2, LayoutDashboard, Rocket, Shirt } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { GlassCard } from "./ui/GlassCard";

const iconMap: Record<string, React.ReactNode> = {
  leaf: <Leaf className="h-7 w-7" />,
  car: <Car className="h-7 w-7" />,
  cart: <ShoppingCart className="h-7 w-7" />,
  code: <Code2 className="h-7 w-7" />,
  layout: <LayoutDashboard className="h-7 w-7" />,
  rocket: <Rocket className="h-7 w-7" />,
  shirt: <Shirt className="h-7 w-7" />,
};

type ProjectCardProps = {
  icon: string;
  imageUrl?: string;
  link: string;
  title: string;
  description: string;
  tags: string[];
};

export function ProjectCard({
  icon,
  imageUrl,
  link,
  title,
  description,
  tags,
}: ProjectCardProps) {
  const { t } = useLanguage();
  const resolvedIcon = iconMap[icon] ?? <Code2 className="h-7 w-7" />;

  return (
    <GlassCard className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-2xl hover:shadow-turquoise-400/10">
      <div className="space-y-3">
        {imageUrl && (
          <div className="-mx-5 -mt-5 mb-3 overflow-hidden rounded-t-2xl border-b border-white/10 bg-[#1e1e1e]">
            <div className="flex items-center gap-1.5 px-3 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            </div>
            <img
              src={imageUrl}
              alt={title}
              className="h-40 w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        )}

        <div className="flex items-start justify-between gap-3">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-turquoise-400 to-accent-purple text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            {resolvedIcon}
          </div>
          <span className="rounded-full border border-glass/10 bg-glass/5 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-turquoise-300">
            {t.projects.label}
          </span>
        </div>

        <h3 className="text-lg font-bold text-copy transition-colors group-hover:text-turquoise-300">
          {title}
        </h3>

        <p className="line-clamp-3 text-sm font-normal text-copy-muted">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg bg-glass/10 px-2 py-1 text-xs font-medium text-copy-muted transition-colors duration-300 group-hover:bg-turquoise-400/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link mt-2 inline-flex w-full items-center justify-between rounded-xl bg-glass/10 px-4 py-2.5 text-sm font-medium text-copy transition-all duration-300 hover:bg-turquoise-400/15 hover:text-turquoise-300 focus:outline-none focus:ring-2 focus:ring-turquoise-400/30"
          aria-label={`Abrir projeto: ${title}`}
        >
          {t.projects.moreProjects}
          <span className="transition-transform duration-300 group-hover/link:translate-x-1">
            {"\u2192"}
          </span>
        </a>
      </div>
    </GlassCard>
  );
}
FILE_13_EOF

echo "  -> src/components/Hero.tsx"
mkdir -p "$(dirname 'src/components/Hero.tsx')"
cat > src/components/Hero.tsx << 'FILE_14_EOF'
import profileImage from "../assets/profile.webp";
import { ParticleBackground } from "./ParticleBackground";
import { staticPortfolio } from "../data/portfolio";
import { useLanguage } from "../i18n/LanguageContext";
import { PrimaryButton } from "./ui/PrimaryButton";

type HeroProps = {
  onContact: () => void;
};

export function Hero({ onContact }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 py-24 md:px-6"
    >
      {/* BACKGROUND LAYERS */}
      <ParticleBackground />
      
      <div className="absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-turquoise-400/10 blur-[80px] pointer-events-none" />
      <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-accent-purple/10 blur-[60px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-7xl" style={{ zIndex: 2 }}>
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* TEXT */}
          <div className="order-2 space-y-4 md:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-turquoise-400/25 bg-turquoise-400/10 px-3 py-1.5 text-xs font-semibold text-turquoise-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-turquoise-400" />
              {t.hero.available}
            </div>

            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              <span className="text-gradient-primary">
                {t.hero.hi} {staticPortfolio.firstName}
              </span>{" "}
              <span className="inline-block animate-wave origin-[70%_70%]">
                👋🏾
              </span>
            </h1>

            <p className="text-lg font-semibold text-copy md:text-xl">
              {t.hero.subtitle}
            </p>

            <p className="text-base leading-relaxed text-copy-muted">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap gap-3 pt-2 md:gap-4">
              <PrimaryButton onClick={onContact}>{t.hero.hireMe}</PrimaryButton>

              <a
                href="/curriculo.pdf"
                download="Curriculo_Zilton_Dev.pdf"
                className="btn-secondary"
              >
                📄 {t.hero.downloadResume}
              </a>

              <a
                href={staticPortfolio.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary opacity-80 transition-opacity hover:opacity-100"
              >
                GitHub
              </a>
            </div>

            {/* METRICS */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-glass/10 pt-8">
              {t.hero.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="text-center transition-transform hover:scale-[1.03] md:text-left"
                >
                  <p className="text-2xl font-bold text-gradient-primary md:text-3xl">
                    {metric.value}
                  </p>
                  <p className="text-xs text-copy-muted md:text-sm">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE */}
          <div className="order-1 flex justify-center md:order-2">
            <div className="relative h-[17rem] w-64 md:h-[22rem] md:w-80">
              {/* GLOW */}
              <div className="absolute inset-0 scale-105 rotate-12 rounded-[40%_60%_70%_30%_/_40%_60%_30%_70%] bg-gradient-to-br from-turquoise-400/25 to-accent-purple/25 blur-2xl pointer-events-none" />

              {/* IMAGE */}
              <div className="relative h-full w-full overflow-hidden rounded-[40%_60%_70%_30%_/_40%_60%_30%_70%] border-2 border-turquoise-400/35 shadow-glow-turquoise-soft">
                <img
                  src={profileImage}
                  alt={staticPortfolio.name}
                  className="h-full w-full scale-[1.08] object-cover object-[50%_38%] animate-float" loading="eager" fetchPriority="high" decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
FILE_14_EOF

echo "  -> src/sections/ProjectsSection.tsx"
mkdir -p "$(dirname 'src/sections/ProjectsSection.tsx')"
cat > src/sections/ProjectsSection.tsx << 'FILE_15_EOF'
import { ProjectCard } from "../components/ProjectCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import type { Translation } from "../i18n/translations";

type Project = {
  id: string;
  icon: string;
  link: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
};

export default function ProjectsSection({ t, projects }: { t: Translation; projects: Project[] }) {
  return (
    <section id="projects" className="bg-glass/[0.02] px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <SectionHeading title={t.projects.title} highlight={t.projects.highlight} subtitle={t.projects.subtitle} />
        </AnimatedSection>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 100}>
              <ProjectCard icon={project.icon} imageUrl={project.image} link={project.link} title={project.title} description={project.description} tags={project.tags} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
FILE_15_EOF

echo "  -> src/i18n/translations.ts (categoria Design)"
python3 << 'PYEOF'
path = "src/i18n/translations.ts"
with open(path) as f:
    content = f.read()

pairs = [
    ('''    categories: {
      frontend: string;
      backend: string;
      devops: string;
      cloud: string;
    };
  };''', '''    categories: {
      frontend: string;
      backend: string;
      devops: string;
      cloud: string;
      design: string;
    };
  };'''),
    ('''      categories: {
        frontend: "Frontend",
        backend: "Backend",
        devops: "DevOps & Tools",
        cloud: "Cloud & IoT",
      },
    },''', '''      categories: {
        frontend: "Frontend",
        backend: "Backend",
        devops: "DevOps & Tools",
        cloud: "Cloud & IoT",
        design: "Design",
      },
    },'''),
    ('''      categories: {
        frontend: "Frontend",
        backend: "Backend",
        devops: "DevOps & Ferramentas",
        cloud: "Cloud & IoT",
      },
    },''', '''      categories: {
        frontend: "Frontend",
        backend: "Backend",
        devops: "DevOps & Ferramentas",
        cloud: "Cloud & IoT",
        design: "Design",
      },
    },'''),
    ('''      categories: {
        frontend: "Frontend",
        backend: "Backend",
        devops: "DevOps & Outils",
        cloud: "Cloud & IoT",
      },
    },''', '''      categories: {
        frontend: "Frontend",
        backend: "Backend",
        devops: "DevOps & Outils",
        cloud: "Cloud & IoT",
        design: "Design",
      },
    },'''),
]

changed = 0
for old, new in pairs:
    if old in content:
        content = content.replace(old, new)
        changed += 1
    elif new not in content:
        raise SystemExit(f"   -> ERRO: bloco não encontrado (nem antigo nem novo):\n{old[:80]}...")

if changed == 0:
    print("   -> já estava tudo atualizado, a saltar.")
else:
    print(f"   -> {changed} bloco(s) atualizado(s).")

with open(path, "w") as f:
    f.write(content)
PYEOF

echo ""
echo "A verificar compilação TypeScript..."
npx tsc -b

echo ""
echo "✅ Tudo aplicado e a compilar sem erros."
echo "Próximo passo: git add -A && git commit -m 'Adiciona modo claro real e categoria Design' && git push"

#!/bin/bash
set -e

if [ ! -f "package.json" ] || [ ! -d "src" ]; then
  echo "❌ Corre este script a partir da raiz do projeto portfolio (onde está o package.json)."
  exit 1
fi

echo "1) Remover SkillBar.tsx antigo..."
rm -f src/components/SkillBar.tsx

echo "2) Criar TechIcon.tsx..."
cat > src/components/TechIcon.tsx << 'TECHICON_EOF'
import { Coffee, Cloud } from "lucide-react";
import {
  SiReact,
  SiTailwindcss,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiArduino,
} from "react-icons/si";
import type { Skill } from "../data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  react: <SiReact color="#61DAFB" />,
  tailwind: <SiTailwindcss color="#38BDF8" />,
  python: <SiPython color="#3776AB" />,
  java: <Coffee color="#ED8B00" />,
  fastapi: <SiFastapi color="#009688" />,
  postgresql: <SiPostgresql color="#4169E1" />,
  nodejs: <SiNodedotjs color="#5FA04E" />,
  git: <SiGit color="#F05032" />,
  github: <SiGithub color="#ffffff" />,
  docker: <SiDocker color="#2496ED" />,
  vercel: <SiVercel color="#ffffff" />,
  aws: <Cloud color="#FF9900" />,
  arduino: <SiArduino color="#00979D" />,
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
        className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-turquoise-400/30 group-hover:bg-white/10"
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
TECHICON_EOF

echo "3) Substituir SkillsSection.tsx..."
cat > src/sections/SkillsSection.tsx << 'SKILLSSECTION_EOF'
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
                <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-white">
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
SKILLSSECTION_EOF

echo "4) Atualizar src/data/portfolio.ts (idempotente)..."
python3 << 'PYEOF'
path = "src/data/portfolio.ts"
with open(path) as f:
    content = f.read()

old = '''  skills: [
    { name: "Python", level: 90, icon: "python" },
    { name: "Java (Swing)", level: 85, icon: "java" },
    { name: "React", level: 70, icon: "react" },
    { name: "Tailwind CSS", level: 75, icon: "tailwind" },
    { name: "FastAPI", level: 65, icon: "fastapi" },
    { name: "PostgreSQL", level: 70, icon: "postgresql" },
    { name: "Arduino / IoT", level: 80, icon: "arduino" },
    { name: "Git & GitHub", level: 85, icon: "git" },
  ],'''

new = '''  skillCategories: [
    {
      id: "frontend",
      items: [
        { name: "React", icon: "react" },
        { name: "Tailwind CSS", icon: "tailwind" },
      ],
    },
    {
      id: "backend",
      items: [
        { name: "Python", icon: "python" },
        { name: "Java (Swing)", icon: "java" },
        { name: "FastAPI", icon: "fastapi" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "Node.js", icon: "nodejs" },
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
        { name: "Arduino / IoT", icon: "arduino" },
      ],
    },
  ],'''

if old in content:
    content = content.replace(old, new)
    print("   -> bloco 'skills' substituído.")
elif "skillCategories" in content:
    print("   -> já estava atualizado, a saltar.")
else:
    raise SystemExit("   -> ERRO: não encontrei nem o bloco antigo nem o novo em portfolio.ts. Verifica o ficheiro manualmente.")

old_type = 'export type Skill = (typeof staticPortfolio.skills)[number];'
new_type = 'export type SkillCategory = (typeof staticPortfolio.skillCategories)[number];\nexport type Skill = SkillCategory["items"][number];'

if old_type in content:
    content = content.replace(old_type, new_type)
elif 'export type SkillCategory' not in content:
    raise SystemExit("   -> ERRO: não encontrei a linha do tipo Skill original nem a nova em portfolio.ts.")

with open(path, "w") as f:
    f.write(content)
PYEOF

echo "5) Atualizar src/i18n/translations.ts (idempotente)..."
python3 << 'PYEOF'
path = "src/i18n/translations.ts"
with open(path) as f:
    content = f.read()

pairs = [
    ('''  skills: {
    title: string;
    highlight: string;
    technical: string;
    tools: string;
  };''', '''  skills: {
    title: string;
    highlight: string;
    technical: string;
    tools: string;
    categories: {
      frontend: string;
      backend: string;
      devops: string;
      cloud: string;
    };
  };'''),
    ('''    skills: {
      title: "My",
      highlight: "Skills",
      technical: "Technical Skills",
      tools: "Tools & Technologies",
    },''', '''    skills: {
      title: "My",
      highlight: "Skills",
      technical: "Technical Skills",
      tools: "Tools & Technologies",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        devops: "DevOps & Tools",
        cloud: "Cloud & IoT",
      },
    },'''),
    ('''    skills: {
      title: "As minhas",
      highlight: "Competências",
      technical: "Competências Técnicas",
      tools: "Ferramentas e Tecnologias",
    },''', '''    skills: {
      title: "As minhas",
      highlight: "Competências",
      technical: "Competências Técnicas",
      tools: "Ferramentas e Tecnologias",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        devops: "DevOps & Ferramentas",
        cloud: "Cloud & IoT",
      },
    },'''),
    ('''    skills: {
      title: "Mes",
      highlight: "Compétences",
      technical: "Compétences techniques",
      tools: "Outils et technologies",
    },''', '''    skills: {
      title: "Mes",
      highlight: "Compétences",
      technical: "Compétences techniques",
      tools: "Outils et technologies",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        devops: "DevOps & Outils",
        cloud: "Cloud & IoT",
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
echo "6) A verificar compilação TypeScript..."
npx tsc -b

echo ""
echo "✅ Tudo aplicado e a compilar sem erros."
echo "Próximo passo: git add -A && git commit -m 'Reorganiza secção de Competências em categorias' && git push"

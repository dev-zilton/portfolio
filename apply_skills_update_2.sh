#!/bin/bash
set -e

if [ ! -f "package.json" ] || [ ! -d "src" ]; then
  echo "❌ Corre este script a partir da raiz do projeto portfolio (onde está o package.json)."
  exit 1
fi

echo "1) Atualizar TechIcon.tsx com os novos ícones..."
cat > src/components/TechIcon.tsx << 'TECHICON_EOF'
import { Coffee, Cloud, Smartphone } from "lucide-react";
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
} from "react-icons/si";
import type { Skill } from "../data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  react: <SiReact color="#61DAFB" />,
  nextjs: <SiNextdotjs color="#ffffff" />,
  typescript: <SiTypescript color="#3178C6" />,
  tailwind: <SiTailwindcss color="#38BDF8" />,
  python: <SiPython color="#3776AB" />,
  java: <Coffee color="#ED8B00" />,
  springboot: <SiSpringboot color="#6DB33F" />,
  fastapi: <SiFastapi color="#009688" />,
  express: <SiExpress color="#ffffff" />,
  postgresql: <SiPostgresql color="#4169E1" />,
  mysql: <SiMysql color="#4479A1" />,
  sqlite: <SiSqlite color="#003B57" />,
  jwt: <SiJsonwebtokens color="#D63AFF" />,
  nodejs: <SiNodedotjs color="#5FA04E" />,
  git: <SiGit color="#F05032" />,
  github: <SiGithub color="#ffffff" />,
  docker: <SiDocker color="#2496ED" />,
  vercel: <SiVercel color="#ffffff" />,
  aws: <Cloud color="#FF9900" />,
  supabase: <SiSupabase color="#3ECF8E" />,
  mpesa: <Smartphone color="#E4002B" />,
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

echo "2) Atualizar src/data/portfolio.ts com as novas tecnologias (idempotente)..."
python3 << 'PYEOF'
path = "src/data/portfolio.ts"
with open(path) as f:
    content = f.read()

old = '''  skillCategories: [
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

new = '''  skillCategories: [
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
  ],'''

if old in content:
    content = content.replace(old, new)
    print("   -> lista de competências expandida.")
elif "Next.js" in content and "Spring Boot" in content:
    print("   -> já estava atualizado, a saltar.")
else:
    raise SystemExit("   -> ERRO: não encontrei o bloco esperado em portfolio.ts. Verifica o ficheiro manualmente (pode já ter sido editado à mão).")

with open(path, "w") as f:
    f.write(content)
PYEOF

echo ""
echo "3) A verificar compilação TypeScript..."
npx tsc -b

echo ""
echo "✅ Tudo aplicado e a compilar sem erros."
echo "Próximo passo: git add -A && git commit -m 'Adiciona mais tecnologias à secção de Competências' && git push"

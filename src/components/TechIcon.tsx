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

import type { Skill } from "../data/portfolio";
import { useEffect, useState } from "react";

import {
  Code2,
  Coffee,
  Atom,
  Paintbrush,
  Server,
  Database,
  Cpu,
} from "lucide-react";

import { SiGithub } from "react-icons/si";

type SkillBarProps = {
  skill: Skill;
};

const iconMap: Record<string, React.ReactNode> = {
  Python: <Code2 />,
  "Java (Swing)": <Coffee />,
  React: <Atom />,
  "Tailwind CSS": <Paintbrush />,
  FastAPI: <Server />,
  PostgreSQL: <Database />,
  "Arduino / IoT": <Cpu />,
  "Git & GitHub": <SiGithub />,
};

export function SkillBar({ skill }: SkillBarProps) {
  const [width, setWidth] = useState(0);

  const icon = iconMap[skill.name] ?? <Code2 />;

  const safeLevel =
    typeof skill.level === "number"
      ? Math.min(100, Math.max(0, skill.level))
      : 0;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWidth(safeLevel);
    }, 120);

    return () => clearTimeout(timeout);
  }, [safeLevel]);

  return (
    <div className="mb-4 last:mb-0">
      {/* HEADER */}
      <div className="mb-2 flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-bold text-copy">
          <span className="text-turquoise-400 text-lg flex items-center">
            {icon}
          </span>

          {skill.name}
        </span>

        <span className="text-xs font-medium text-turquoise-300 tabular-nums">
          {safeLevel}%
        </span>
      </div>

      {/* BAR */}
      <div
        className="h-2 overflow-hidden rounded-full bg-white/10"
        role="progressbar"
        aria-valuenow={safeLevel}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={skill.name}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-turquoise-400 to-accent-purple transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

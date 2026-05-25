import type { Skill } from "../data/portfolio";

type SkillBarProps = {
  skill: Skill;
};

export function SkillBar({ skill }: SkillBarProps) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="mb-2 flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-bold text-copy">
          <span aria-hidden>{skill.icon}</span>
          {skill.name}
        </span>
        <span className="text-xs font-normal text-turquoise-300">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-turquoise-400 to-accent-purple transition-all duration-1000"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}

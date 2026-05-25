import { useLanguage } from "../i18n/LanguageContext";
import { GlassCard } from "./ui/GlassCard";

type ProjectCardProps = {
  icon: string;
  link: string;
  title: string;
  description: string;
  tags: string[];
};

export function ProjectCard({
  icon,
  link,
  title,
  description,
  tags,
}: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <GlassCard>
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-turquoise-400 to-accent-purple text-2xl shadow-lg transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110">
            {icon}
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-turquoise-300">
            {t.projects.label}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white transition-colors group-hover:text-turquoise-300">
          {title}
        </h3>
        <p className="line-clamp-2 text-sm font-normal text-copy-muted">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg bg-white/10 px-2 py-1 text-xs font-medium text-copy-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link mt-2 inline-flex w-full items-center justify-between rounded-xl bg-white/10 px-4 py-2.5 text-sm font-medium text-copy transition-all hover:bg-turquoise-400/15 hover:text-turquoise-300"
        >
          {t.projects.moreProjects}
          <span className="transition-transform group-hover/link:translate-x-1">
            →
          </span>
        </a>
      </div>
    </GlassCard>
  );
}

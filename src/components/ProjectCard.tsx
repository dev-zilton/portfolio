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
          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-turquoise-300">
            {t.projects.label}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white transition-colors group-hover:text-turquoise-300">
          {title}
        </h3>

        <p className="line-clamp-3 text-sm font-normal text-copy-muted">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg bg-white/10 px-2 py-1 text-xs font-medium text-copy-muted transition-colors duration-300 group-hover:bg-turquoise-400/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link mt-2 inline-flex w-full items-center justify-between rounded-xl bg-white/10 px-4 py-2.5 text-sm font-medium text-copy transition-all duration-300 hover:bg-turquoise-400/15 hover:text-turquoise-300 focus:outline-none focus:ring-2 focus:ring-turquoise-400/30"
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

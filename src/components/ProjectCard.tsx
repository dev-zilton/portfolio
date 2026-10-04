import { useEffect, useRef, useState } from "react";
import { Leaf, Car, ShoppingCart, Code2, LayoutDashboard, Rocket, Shirt, Landmark, Trophy, ExternalLink, Star } from "lucide-react";
import { useLanguage } from "../i18n/useLanguage";
import { GlassCard } from "./ui/GlassCard";
import { GitHubIcon } from "./ui/GitHubIcon";
import type { Project } from "../data/portfolio";
import type { Translation } from "../i18n/translations";

const iconMap: Record<string, React.ReactNode> = {
  leaf: <Leaf className="h-7 w-7" />,
  car: <Car className="h-7 w-7" />,
  cart: <ShoppingCart className="h-7 w-7" />,
  code: <Code2 className="h-7 w-7" />,
  layout: <LayoutDashboard className="h-7 w-7" />,
  rocket: <Rocket className="h-7 w-7" />,
  shirt: <Shirt className="h-7 w-7" />,
  landmark: <Landmark className="h-7 w-7" />,
  trophy: <Trophy className="h-7 w-7" />,
};

export type ProjectView = Project & Translation["projects"]["items"][number];

// Largura de "ecrã de computador" a que o site é renderizado antes de ser reduzido.
const PREVIEW_VIEWPORT = 1280;

// Só carrega sites ao vivo em ecrãs grandes com rato; no telemóvel fica o screenshot.
const LIVE_PREVIEW_QUERY = "(min-width: 768px) and (hover: hover) and (pointer: fine)";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const media = window.matchMedia(query);
    const onChange = () => setMatches(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

function ProjectPreview({ project }: { project: ProjectView }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const canLoadLive = useMediaQuery(LIVE_PREVIEW_QUERY) && Boolean(project.livePreview && project.site);
  const [scale, setScale] = useState(0);
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || !canLoadLive) return;
    const resize = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / PREVIEW_VIEWPORT);
    });
    // O iframe só é criado quando o card está perto do ecrã — e fica depois disso.
    const visibility = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          visibility.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    resize.observe(frame);
    visibility.observe(frame);
    return () => {
      resize.disconnect();
      visibility.disconnect();
    };
  }, [canLoadLive]);

  const showLive = canLoadLive && inView && scale > 0;

  return (
    <div ref={frameRef} className="relative aspect-[16/10] w-full overflow-hidden bg-[#0f172a]">
      {project.image && (
        <img
          src={project.image}
          alt={showLive ? "" : project.title}
          aria-hidden={showLive ? "true" : undefined}
          width={640}
          height={400}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover object-top transition-all duration-500 group-hover:scale-105 ${loaded ? "opacity-0" : "opacity-100"}`}
        />
      )}
      {showLive && (
        <iframe
          src={project.site}
          title={project.title}
          loading="lazy"
          tabIndex={-1}
          aria-hidden="true"
          sandbox="allow-scripts allow-same-origin"
          onLoad={() => setLoaded(true)}
          className={`pointer-events-none absolute left-0 top-0 origin-top-left border-0 transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{
            width: PREVIEW_VIEWPORT,
            height: PREVIEW_VIEWPORT * (10 / 16),
            transform: `scale(${scale})`,
          }}
        />
      )}
    </div>
  );
}

function BrowserFrame({ project, className = "" }: { project: ProjectView; className?: string }) {
  return (
    <div className={`overflow-hidden bg-[#1e1e1e] ${className}`}>
      <div className="flex items-center gap-1.5 px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
      </div>
      <ProjectPreview project={project} />
    </div>
  );
}

function ProjectLinks({ project }: { project: ProjectView }) {
  const { t } = useLanguage();
  // Páginas de redes sociais não são "sites": o botão diz "Ver página".
  const siteLabel = project.category === "social" ? t.projects.viewPage : t.projects.viewSite;
  const base =
    "group/link inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-turquoise-400/30";
  return (
    <div className="mt-2 flex gap-3">
      {project.site && (
        <a
          href={project.site}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} bg-turquoise-400/15 text-turquoise-300 hover:bg-turquoise-400/25`}
          aria-label={`${siteLabel}: ${project.title}`}
        >
          <ExternalLink size={16} aria-hidden="true" />
          {siteLabel}
        </a>
      )}
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} bg-glass/10 text-copy hover:bg-glass/15 hover:text-turquoise-300`}
          aria-label={`${t.projects.viewCode}: ${project.title}`}
        >
          <GitHubIcon size={16} />
          {t.projects.viewCode}
        </a>
      )}
    </div>
  );
}

function ProjectIcon({ icon }: { icon: string }) {
  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-turquoise-400 to-accent-purple text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
      {iconMap[icon] ?? <Code2 className="h-7 w-7" />}
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
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
  );
}

export function ProjectCard({ project }: { project: ProjectView }) {
  const { t } = useLanguage();

  return (
    <GlassCard className="group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-turquoise-400/10">
      <div className="space-y-3">
        {project.image && (
          <BrowserFrame project={project} className="-mx-5 -mt-5 mb-3 rounded-t-2xl border-b border-white/10" />
        )}

        <div className="flex items-start justify-between gap-3">
          <ProjectIcon icon={project.icon} />
          <span className="rounded-full border border-glass/10 bg-glass/5 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-turquoise-300">
            {t.projects.filters[project.category]}
          </span>
        </div>

        <h3 className="text-lg font-bold text-copy transition-colors group-hover:text-turquoise-300">
          {project.title}
        </h3>

        <p className="line-clamp-3 text-sm font-normal text-copy-muted">{project.description}</p>

        <Tags tags={project.tags} />
        <ProjectLinks project={project} />
      </div>
    </GlassCard>
  );
}

export function FeaturedProjectCard({ project }: { project: ProjectView }) {
  const { t } = useLanguage();
  const labels = t.projects.caseStudyLabels;
  const caseStudy = project.caseStudy;

  return (
    <GlassCard className="group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-turquoise-400/10">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        {project.image && (
          <BrowserFrame project={project} className="rounded-xl border border-white/10 shadow-xl" />
        )}

        <div className="space-y-4">
          <div className="flex items-start justify-between gap-3">
            <ProjectIcon icon={project.icon} />
            <span className="inline-flex items-center gap-1.5 rounded-full border border-turquoise-400/30 bg-turquoise-400/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-turquoise-300">
              <Star size={12} aria-hidden="true" />
              {t.projects.featured}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-copy transition-colors group-hover:text-turquoise-300">
            {project.title}
          </h3>

          {caseStudy ? (
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="font-semibold text-copy">{labels.problem}</dt>
                <dd className="mt-1 text-copy-muted">{caseStudy.problem}</dd>
              </div>
              <div>
                <dt className="font-semibold text-copy">{labels.solution}</dt>
                <dd className="mt-1 text-copy-muted">{caseStudy.solution}</dd>
              </div>
              <div>
                <dt className="font-semibold text-copy">{labels.delivered}</dt>
                <dd className="mt-1">
                  <ul className="space-y-1 text-copy-muted">
                    {caseStudy.delivered.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-turquoise-400" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          ) : (
            <p className="text-sm text-copy-muted">{project.description}</p>
          )}

          <Tags tags={project.tags} />
          <ProjectLinks project={project} />
        </div>
      </div>
    </GlassCard>
  );
}

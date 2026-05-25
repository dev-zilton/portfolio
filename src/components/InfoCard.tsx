import { GlassCard } from "./ui/GlassCard";

type InfoCardProps = {
  icon: string;
  title: string;
  content: string | readonly string[];
};

export function InfoCard({ icon, title, content }: InfoCardProps) {
  return (
    <GlassCard>
      <div className="space-y-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-turquoise-400 to-accent-purple text-2xl transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        {Array.isArray(content) ? (
          <ul className="space-y-2">
            {content.map((item, idx) => (
              <li key={idx} className="text-sm font-normal leading-relaxed text-copy-muted">
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

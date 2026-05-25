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
      className={`group relative rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-px transition-all duration-300 hover:from-turquoise-400/60 hover:to-accent-purple/60 hover:shadow-glow-turquoise-soft ${className}`}
    >
      <div className="glass-card h-full !border-0 !bg-white/[0.05] group-hover:bg-white/[0.07]">
        {children}
      </div>
    </div>
  );
}

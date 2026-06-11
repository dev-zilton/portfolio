import { type ReactNode } from "react";

interface ContactActionButtonProps {
  href: string;
  icon: ReactNode;
  label: string;
  variant?: "default" | "primary";
}

export function ContactActionButton({
  href,
  icon,
  label,
  variant = "default",
}: ContactActionButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex items-center gap-3 rounded-xl border p-4 transition-all duration-300
        ${
          variant === "primary"
            ? "border-turquoise-400/30 bg-turquoise-400/10 hover:bg-turquoise-400/20"
            : "border-white/10 bg-white/5 hover:bg-white/10"
        }
      `}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
        {icon}
      </span>

      <span className="font-medium text-white">{label}</span>
    </a>
  );
}

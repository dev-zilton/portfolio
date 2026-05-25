import { useState, type ReactNode } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import type { ActionState } from "../types/ui";

type ContactActionButtonProps = {
  href: string;
  label: string;
  icon: string;
  variant?: "primary" | "default";
};

const RESET_MS = 2200;

export function ContactActionButton({
  href,
  label,
  icon,
  variant = "default",
}: ContactActionButtonProps) {
  const { t } = useLanguage();
  const [state, setState] = useState<ActionState>("idle");

  const runAction = async () => {
    if (state !== "idle") return;

    setState("loading");
    try {
      await new Promise((resolve) => setTimeout(resolve, 700));

      if (href === "#") {
        throw new Error("Link unavailable");
      }

      window.open(href, "_blank", "noopener,noreferrer");
      setState("success");
    } catch {
      setState("error");
    } finally {
      window.setTimeout(() => setState("idle"), RESET_MS);
    }
  };

  const isPrimary = variant === "primary";
  const baseClass = isPrimary ? "btn-primary w-full" : "btn-secondary w-full";

  const stateClasses: Record<ActionState, string> = {
    idle: baseClass,
    loading: `${baseClass} opacity-90`,
    success:
      "inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/50 bg-emerald-500/15 px-6 py-3 font-bold text-emerald-300",
    error:
      "inline-flex w-full items-center justify-center gap-2 rounded-xl border border-red-500/50 bg-red-500/15 px-6 py-3 font-bold text-red-300",
  };

  const content: Record<ActionState, ReactNode> = {
    idle: (
      <>
        <span className="text-xl" aria-hidden>
          {icon}
        </span>
        <span>{label}</span>
      </>
    ),
    loading: (
      <>
        <span
          className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden
        />
        <span>{t.contact.connecting}</span>
      </>
    ),
    success: (
      <>
        <span className="text-xl" aria-hidden>
          ✓
        </span>
        <span>{t.contact.success}</span>
      </>
    ),
    error: (
      <>
        <span className="text-xl" aria-hidden>
          ✕
        </span>
        <span>{t.contact.error}</span>
      </>
    ),
  };

  return (
    <button
      type="button"
      onClick={runAction}
      disabled={state === "loading"}
      aria-live="polite"
      aria-busy={state === "loading"}
      className={`${stateClasses[state]} transition-all duration-300`}
    >
      {content[state]}
    </button>
  );
}

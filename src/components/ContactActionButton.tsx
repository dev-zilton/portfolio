import { useState, type ReactNode, useCallback } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import type { ActionState } from "../types/ui";

type ActionType = "link" | "download";

type ContactActionButtonProps = {
  href: string;
  label: string;
  icon: string;
  variant?: "primary" | "default";
  actionType?: ActionType;
  downloadName?: string;
};

const RESET_MS = 3000;

export function ContactActionButton({
  href,
  label,
  icon,
  variant = "default",
  actionType = "link",
  downloadName,
}: ContactActionButtonProps) {
  const { t } = useLanguage();
  const [state, setState] = useState<ActionState>("idle");

  const isPrimary = variant === "primary";

  const baseClass = isPrimary ? "btn-primary w-full" : "btn-secondary w-full";

  const feedbackBase =
    "inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 font-bold transition-all duration-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-turquoise-400/30";

  const stateClasses: Record<ActionState, string> = {
    idle: baseClass,
    loading: `${baseClass} opacity-80 cursor-wait`,
    success: `${feedbackBase} border border-emerald-500/50 bg-emerald-500/15 text-emerald-300`,
    error: `${feedbackBase} border border-red-500/50 bg-red-500/15 text-red-300`,
  };

  const runAction = useCallback(async () => {
    if (state !== "idle") return;

    setState("loading");

    try {
      await new Promise((r) => setTimeout(r, 500));

      if (!href || href === "#") {
        throw new Error("Invalid link");
      }

      // 📄 DOWNLOAD
      if (actionType === "download") {
        const link = document.createElement("a");
        link.href = href;
        link.download = downloadName ?? "";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        // 🔗 EXTERNAL LINK
        window.open(href, "_blank", "noopener,noreferrer");
      }

      setState("success");
    } catch {
      setState("error");
    } finally {
      window.setTimeout(() => setState("idle"), RESET_MS);
    }
  }, [href, actionType, downloadName, state]);

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
        <span aria-hidden className="text-xl">
          ✓
        </span>
        <span>{t.contact.success}</span>
      </>
    ),

    error: (
      <>
        <span aria-hidden className="text-xl">
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
      aria-busy={state === "loading"}
      aria-label={label}
      className={stateClasses[state]}
    >
      {content[state]}
    </button>
  );
}

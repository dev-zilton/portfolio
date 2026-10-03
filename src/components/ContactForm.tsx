import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import type { Translation } from "../i18n/translations";

type Status = "idle" | "sending" | "sent" | "failed";

// O endpoint é a função serverless em api/contact.ts (só existe no deploy do Vercel).
const CONTACT_ENDPOINT = "/api/contact";

export function ContactForm({ t }: { t: Translation["contact"]["form"] }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
  }

  const field =
    "w-full rounded-xl border border-glass/10 bg-glass/5 px-4 py-3 text-sm text-copy placeholder:text-copy-muted/60 transition-colors focus:border-turquoise-400/60 focus:outline-none focus:ring-2 focus:ring-turquoise-400/20";

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-4 text-left">
      <h3 className="text-center text-lg font-bold text-copy">{t.title}</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-copy-muted">{t.name}</span>
          <input name="name" required maxLength={100} autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-copy-muted">{t.email}</span>
          <input name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-copy-muted">{t.message}</span>
        <textarea name="message" required maxLength={5000} rows={5} className={`${field} resize-y`} />
      </label>
      {/* Armadilha para bots: escondida das pessoas e dos leitores de ecrã. */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <button
        type="submit"
        disabled={status === "sending"}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-turquoise-500 px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-turquoise-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise-400 active:scale-95 disabled:opacity-70"
      >
        <Send size={16} aria-hidden="true" />
        {status === "sending" ? t.sending : t.send}
      </button>
      <p role="status" aria-live="polite" className={`min-h-5 text-center text-sm ${status === "failed" ? "text-red-400" : "text-turquoise-300"}`}>
        {status === "sent" ? t.sent : status === "failed" ? t.failed : ""}
      </p>
    </form>
  );
}

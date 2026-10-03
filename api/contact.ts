// Função serverless do Vercel: recebe o formulário de contacto e envia-o por email via Resend.
// Variáveis de ambiente (Vercel → Settings → Environment Variables):
//   RESEND_API_KEY    chave da API do Resend (obrigatória)
//   CONTACT_TO_EMAIL  email que recebe as mensagens (obrigatório)
//   CONTACT_FROM      remetente; sem domínio verificado no Resend usa "Portfolio <onboarding@resend.dev>"

const LIMITS = { name: 100, email: 200, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) return json(500, { error: "not_configured" });

  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json(400, { error: "invalid_body" });
  }

  // Campo escondido: só bots o preenchem. Responde "ok" para não lhes dar pistas.
  if (typeof data.website === "string" && data.website.trim()) return json(200, { ok: true });

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const message = String(data.message ?? "").trim();
  if (
    !name || !message || !EMAIL_RE.test(email) ||
    name.length > LIMITS.name || email.length > LIMITS.email || message.length > LIMITS.message
  ) {
    return json(400, { error: "invalid_fields" });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || "Portfolio <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `Nova mensagem do portfólio — ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Nome:</strong> ${escapeHtml(name)}<br><strong>Email:</strong> ${escapeHtml(email)}</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    }),
  });

  if (!response.ok) {
    console.error("Resend error", response.status, await response.text());
    return json(502, { error: "send_failed" });
  }
  return json(200, { ok: true });
}

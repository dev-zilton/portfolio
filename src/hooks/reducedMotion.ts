// true quando o utilizador pediu ao sistema operativo para reduzir animações.
export const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

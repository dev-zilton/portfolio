import type { ButtonHTMLAttributes, ReactNode } from "react";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function PrimaryButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: PrimaryButtonProps) {
  const base =
    variant === "primary" ? "btn-primary" : "btn-secondary";

  return (
    <button type="button" className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
}

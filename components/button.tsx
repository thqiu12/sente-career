import type { ReactNode } from "react";

type Variant = "primary" | "accent" | "ghost-dark" | "ghost-light";

const styles: Record<Variant, string> = {
  // ink fill, paper text
  primary:
    "bg-ink text-paper hover:bg-ink-soft border border-transparent",
  // 先手绿 fill, ink text (ink-on-green passes AA)
  accent:
    "bg-green text-ink hover:brightness-[1.06] border border-transparent",
  // outline on dark sections
  "ghost-dark":
    "bg-transparent text-paper border border-white/25 hover:border-green hover:text-green-bright",
  // outline on light sections
  "ghost-light":
    "bg-transparent text-ink border border-ink/20 hover:border-ink hover:bg-ink hover:text-paper",
};

export function Button({
  children,
  href = "#contact",
  variant = "primary",
  className,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-[15px] font-bold tracking-[0.01em] transition-[transform,background-color,filter,border-color] duration-200 active:translate-y-px ${styles[variant]} ${className ?? ""}`}
    >
      {children}
    </a>
  );
}

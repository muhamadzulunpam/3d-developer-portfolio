import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const BASE =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-elegant active:translate-y-0 active:scale-[0.985] disabled:cursor-not-allowed disabled:opacity-50";

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-aurora text-night-950 shadow-glow-azure hover:-translate-y-0.5 hover:shadow-glow-violet",
  outline:
    "border border-white/15 bg-white/[0.03] text-ink backdrop-blur-sm hover:-translate-y-0.5 hover:border-azure-400/60 hover:text-white hover:shadow-glow-azure",
  ghost: "text-mute hover:text-white",
};

/** Kilatan cahaya tipis saat hover. Transform-only, jadi tidak memicu re-layout. */
function Sheen() {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
      <span className="absolute inset-y-0 -left-1/4 w-1/4 -skew-x-12 bg-white/25 opacity-0 transition-[transform,opacity] duration-700 ease-elegant group-hover:translate-x-[440%] group-hover:opacity-100 motion-reduce:hidden" />
    </span>
  );
}

const SIZES: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-sm sm:text-base",
};

export function buttonClass(variant: ButtonVariant = "primary", size: ButtonSize = "md", className?: string) {
  return cn(BASE, VARIANTS[variant], SIZES[size], className);
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  external?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
};

/** Link yang tampil sebagai tombol. Kalau `disabled`, dirender sebagai span agar tidak bisa diklik. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  iconLeft,
  iconRight,
  external = false,
  disabled = false,
  ariaLabel,
  onClick,
}: ButtonLinkProps) {
  const classes = buttonClass(variant, size, className);

  if (disabled) {
    return (
      <span className={cn(classes, "cursor-not-allowed opacity-45")} aria-disabled="true" title="Tautan belum diisi">
        {iconLeft}
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      aria-label={ariaLabel}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
    >
      {variant === "primary" && <Sheen />}
      {iconLeft}
      {children}
      {iconRight}
    </a>
  );
}

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  /** Menyalakan efek angkat + glow saat hover. */
  interactive?: boolean;
};

export function GlassCard({ children, className, interactive = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass relative overflow-hidden rounded-2xl shadow-glass",
        interactive &&
          "transition-[transform,box-shadow,border-color] duration-500 ease-elegant hover:-translate-y-1.5 hover:border-azure-400/40 hover:shadow-card",
        className,
      )}
    >
      {interactive && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-azure-500/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        />
      )}
      {children}
    </div>
  );
}

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ChipTone = "tech" | "tag" | "muted" | "placeholder";

const TONES: Record<ChipTone, string> = {
  tech: "border-azure-400/30 bg-azure-500/10 text-azure-400",
  tag: "border-violet-400/30 bg-violet-500/10 text-violet-400",
  muted: "border-white/10 bg-white/[0.04] text-mute",
  placeholder: "border-dashed border-white/20 bg-transparent text-mute/80",
};

export function Chip({
  children,
  tone = "tech",
  className,
}: {
  children: ReactNode;
  tone?: ChipTone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] leading-none tracking-wide",
        TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

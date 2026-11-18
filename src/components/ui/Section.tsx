import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  index?: string;
  title?: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  index,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {(eyebrow || index) && (
        <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-cyanish">
          {align === "left" && <span aria-hidden="true" className="h-px w-8 bg-cyanish/50" />}
          {index && <span className="text-mute/70">{index}</span>}
          {eyebrow && <span>{eyebrow}</span>}
        </p>
      )}

      {title && (
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
          {title}
        </h2>
      )}

      {description && <p className="mt-4 text-sm leading-relaxed text-mute sm:text-[15px]">{description}</p>}
    </Reveal>
  );
}

type SectionProps = {
  id: string;
  eyebrow?: string;
  index?: string;
  title?: ReactNode;
  description?: string;
  children: ReactNode;
  className?: string;
  /** Menghilangkan heading (dipakai Hero yang punya judul sendiri). */
  bare?: boolean;
  align?: "left" | "center";
};

export function Section({
  id,
  eyebrow,
  index,
  title,
  description,
  children,
  className,
  bare = false,
  align = "left",
}: SectionProps) {
  return (
    <section id={id} className={cn("relative scroll-mt-24 sm:scroll-mt-28", "py-20 sm:py-24 lg:py-28", className)}>
      <div className="section-shell">
        {!bare && (
          <SectionHeading eyebrow={eyebrow} index={index} title={title} description={description} align={align} />
        )}
        <div className={cn(!bare && "mt-11 sm:mt-14")}>{children}</div>
      </div>
    </section>
  );
}

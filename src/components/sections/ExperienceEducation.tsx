import type { ComponentType } from "react";
import { Chip } from "@/components/ui/Chip";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { BriefcaseIcon, GraduationIcon, LayersIcon } from "@/components/ui/icons";
import { timeline, type TimelineKind } from "@/data/timeline";

const KIND_META: Record<TimelineKind, { label: string; Icon: ComponentType<{ className?: string }> }> = {
  education: { label: "Pendidikan", Icon: GraduationIcon },
  project: { label: "Project", Icon: LayersIcon },
  job: { label: "Pengalaman", Icon: BriefcaseIcon },
};

export function ExperienceEducation() {
  return (
    <Section
      id="journey"
      index="05"
      eyebrow="Experience & Education"
      title={
        <>
          Jejak belajar dan <span className="text-gradient">proyek yang dikerjakan</span>
        </>
      }
      description="Berisi latar belakang pendidikan dan project yang saya kerjakan. Tahun serta institusi masih placeholder."
    >
      <div className="relative">
        <span
          aria-hidden="true"
          className="absolute bottom-4 left-[19px] top-4 w-px bg-gradient-to-b from-azure-400/60 via-violet-400/40 to-transparent sm:left-[23px]"
        />

        <ol className="space-y-6">
          {timeline.map((entry, index) => {
            const { Icon, label } = KIND_META[entry.kind];
            const periodIsPlaceholder = /belum diisi/i.test(entry.period);

            return (
              <li key={entry.id}>
                <Reveal delay={index * 0.06}>
                  <div className="relative pl-14 sm:pl-20">
                    <span className="glass absolute left-0 top-2 grid h-10 w-10 place-items-center rounded-xl text-azure-400 sm:h-12 sm:w-12">
                      <Icon className="h-5 w-5" />
                    </span>

                    <GlassCard interactive className="group p-5 sm:p-6">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <Chip tone="tag">{label}</Chip>
                        <span
                          className={
                            periodIsPlaceholder
                              ? "font-mono text-[11px] tracking-[0.12em] text-mute/60"
                              : "font-mono text-[11px] tracking-[0.12em] text-cyanish"
                          }
                        >
                          {entry.period}
                        </span>
                      </div>

                      <h3 className="mt-3.5 text-lg font-semibold tracking-tight text-white sm:text-xl">
                        {entry.title}
                      </h3>
                      <p className="mt-1 text-xs tracking-[0.06em] text-mute/80">{entry.place}</p>

                      <p className="mt-3.5 text-sm leading-relaxed text-mute">{entry.description}</p>

                      {entry.focus.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {entry.focus.map((item) => (
                            <Chip key={item} tone="muted">
                              {item}
                            </Chip>
                          ))}
                        </div>
                      )}
                    </GlassCard>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}

import { Chip } from "@/components/ui/Chip";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { CodeIcon, DatabaseIcon, GraduationIcon, LayersIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

const WORK_AREA = [
  {
    Icon: LayersIcon,
    title: "Frontend",
    detail: "React.js, Vue.js, JavaScript, TypeScript",
  },
  {
    Icon: CodeIcon,
    title: "Backend",
    detail: "PHP, Laravel, CodeIgniter",
  },
  {
    Icon: DatabaseIcon,
    title: "Basis Data",
    detail: "MySQL — skema, relasi, query",
  },
] as const;

export function About() {
  return (
    <Section
      id="about"
      index="02"
      eyebrow="Tentang Saya"
      title={
        <>
          Membangun web dari <span className="text-gradient">antar muka sampai basis data</span>
        </>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="space-y-6">
          {profile.about.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={index * 0.08}>
              <p className="text-sm leading-[1.85] text-mute sm:text-[15px]">{paragraph}</p>
            </Reveal>
          ))}

          <Reveal delay={0.16}>
            <GlassCard interactive className="group p-5 sm:p-6">
              <p className="flex items-center gap-2.5 text-sm font-medium text-white">
                <GraduationIcon className="h-5 w-5 text-azure-400" />
                {profile.facts[0].value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-mute">
                Universitas dan tahun lulus belum saya cantumkan pada halaman ini.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Chip tone="tag">Frontend</Chip>
                <Chip tone="tag">Backend</Chip>
                <Chip tone="muted">Sistem Informasi</Chip>
              </div>
            </GlassCard>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {profile.facts.map((fact, index) => (
              <Reveal key={fact.label} delay={0.05 * index}>
                <div className="glass h-full rounded-xl px-4 py-3.5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-mute/70">{fact.label}</p>
                  <p className="mt-1.5 text-sm text-white">{fact.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <GlassCard className="p-6 sm:p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyanish">Bidang Kerja</p>

            <ul className="mt-5 space-y-4">
              {WORK_AREA.map(({ Icon, title, detail }) => (
                <li key={title} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-azure-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-white">{title}</span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-mute">{detail}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-7 grid grid-cols-2 gap-4 border-t border-white/[0.07] pt-6">
              <div>
                <p className="text-3xl font-semibold text-white">{projects.length}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-mute/70">Project portofolio</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white">2</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-mute/70">Sisi yang dikerjakan</p>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}

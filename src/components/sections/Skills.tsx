import type { PointerEvent as ReactPointerEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Chip } from "@/components/ui/Chip";
import { Section } from "@/components/ui/Section";
import { CodeIcon, DatabaseIcon, LayersIcon, SparkIcon } from "@/components/ui/icons";
import { useMotionReduced } from "@/hooks/useMotionReduced";
import { groupOrder, skillGroups, skills, type Skill } from "@/data/skills";

const GROUP_ICON = {
  backend: CodeIcon,
  frontend: LayersIcon,
  database: DatabaseIcon,
} as const;

function SkillCard({ skill, showLevel }: { skill: Skill; showLevel: boolean }) {
  const reduceMotion = useMotionReduced();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], ["8deg", "-8deg"]), { stiffness: 170, damping: 18 });
  const rotateY = useSpring(useTransform(px, [0, 1], ["-11deg", "11deg"]), { stiffness: 170, damping: 18 });

  function handleMove(event: ReactPointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    event.currentTarget.style.setProperty("--mx", `${x}px`);
    event.currentTarget.style.setProperty("--my", `${y}px`);

    if (reduceMotion) return;
    px.set(x / rect.width);
    py.set(y / rect.height);
  }

  function handleLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <div className="[perspective:900px]">
      <motion.div
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        style={reduceMotion ? undefined : { rotateX, rotateY }}
        whileHover={reduceMotion ? undefined : { y: -6 }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
        className="glass ring-aurora group relative rounded-2xl p-5 shadow-glass [transform-style:preserve-3d]"
      >
        {/* Sheen yang mengikuti pointer: satu lapis, biaya GPU kecil. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(240px circle at var(--mx, 50%) var(--my, 50%), rgba(91,140,255,0.16), transparent 70%)",
          }}
        />

        <div
          className="relative flex items-start justify-between gap-3"
          style={{ transform: "translateZ(26px)" }}
        >
          <p className="text-base font-semibold tracking-tight text-white">{skill.name}</p>
          <SparkIcon className="h-4 w-4 shrink-0 text-violet-400/70 transition-transform duration-500 group-hover:rotate-90" />
        </div>

        <p className="relative mt-2.5 text-xs leading-relaxed text-mute" style={{ transform: "translateZ(14px)" }}>
          {skill.use}
        </p>

        {showLevel && skill.level !== null && (
          <div className="relative mt-4 h-1.5 overflow-hidden rounded-full bg-white/[0.06]" style={{ transform: "translateZ(10px)" }}>
            <div className="h-full rounded-full bg-aurora" style={{ width: `${skill.level}%` }} />
          </div>
        )}
      </motion.div>
    </div>
  );
}

export function Skills() {
  const showLevel = skills.some((skill) => skill.level !== null);

  return (
    <Section
      id="skills"
      index="03"
      eyebrow="Keahlian"
      title={
        <>
          Teknologi yang saya <span className="text-gradient">pakai sehari-hari</span>
        </>
      }
      description="Dikelompokkan berdasarkan sisi pengerjaan: backend, frontend, dan basis data."
    >
      <div className="space-y-12">
        {groupOrder.map((group) => {
          const Icon = GROUP_ICON[group];
          const items = skills.filter((skill) => skill.group === group);

          return (
            <div key={group}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-cyanish">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{skillGroups[group].label}</p>
                  <p className="text-xs text-mute/80">{skillGroups[group].hint}</p>
                </div>
                <Chip tone="muted" className="ml-auto">
                  {items.length} teknologi
                </Chip>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} showLevel={showLevel} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

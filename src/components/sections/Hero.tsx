import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ArrowDownIcon, ArrowRightIcon, SparkIcon } from "@/components/ui/icons";
import { HeroVisual } from "@/components/sections/hero/HeroVisual";
import { profile } from "@/data/profile";

const EASE = [0.16, 1, 0.3, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease: EASE },
  };
}

function MetaChip({ children, icon }: { children: ReactNode; icon?: ReactNode }) {
  return (
    <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
      {icon}
      {children}
    </span>
  );
}

export function Hero() {
  return (
    <Section id="home" bare className="flex min-h-[100svh] items-center pb-16 pt-28 sm:pt-32">
      <div className="grid items-center gap-14 lg:grid-cols-[1.03fr_0.97fr] lg:gap-10">
        <div>
          <motion.div
            className="flex flex-wrap items-center gap-2.5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <MetaChip icon={<SparkIcon className="h-3.5 w-3.5 text-cyanish" />}>{profile.role}</MetaChip>
            <MetaChip>S1 Teknik Informatika</MetaChip>
          </motion.div>

          <motion.h1
            {...fadeUp(0.08)}
            className="mt-7 text-[2.1rem] font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            lang="en"
            className="mt-4 max-w-xl bg-aurora bg-clip-text text-xl font-medium leading-snug text-transparent sm:text-2xl lg:text-[1.9rem]"
          >
            {profile.headline}
          </motion.p>

          <motion.p
            {...fadeUp(0.24)}
            className="mt-6 max-w-xl text-sm leading-relaxed text-mute sm:text-[15px]"
          >
            {profile.intro}
          </motion.p>

          <motion.div {...fadeUp(0.32)} className="mt-9 flex flex-wrap items-center gap-3.5">
            <ButtonLink
              href="#projects"
              variant="primary"
              size="lg"
              iconRight={
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              }
            >
              <span lang="en">View Projects</span>
            </ButtonLink>

            <ButtonLink
              href="#contact"
              variant="outline"
              size="lg"
              iconRight={<ArrowDownIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />}
            >
              <span lang="en">Contact Me</span>
            </ButtonLink>
          </motion.div>

          <motion.p
            {...fadeUp(0.4)}
            className="mt-9 font-mono text-[10px] uppercase leading-relaxed tracking-[0.22em] text-mute/70 sm:text-[11px]"
          >
            React.js · TypeScript · Tailwind CSS · Framer Motion · Three.js
          </motion.p>
        </div>

        <motion.div {...fadeUp(0.28)}>
          <HeroVisual />
        </motion.div>
      </div>
    </Section>
  );
}

import type { PointerEvent as ReactPointerEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { CodeIcon, LayersIcon, SparkIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";

/**
 * Panel kaca 3-layer yang miring mengikuti pointer (CSS 3D + spring).
 * Pada Tahap 3 ini menjadi fallback bila WebGL tidak tersedia atau pengguna
 * memilih reduced motion, sedangkan visual utama diganti Canvas R3F.
 *
 * Posisi tiap panel dibuat absolute agar tidak menimpa monogram di tengah,
 * termasuk pada viewport sempit.
 */
const PANES = [
  {
    id: "component",
    title: "React Component",
    meta: "props · state · render",
    Icon: SparkIcon,
    position: "left-0 top-[7%] w-[70%] sm:w-[64%]",
    depth: "translateZ(40px)",
    accent: "from-azure-500/25",
  },
  {
    id: "layer",
    title: "UI Layer",
    meta: "Tailwind · glassmorphism",
    Icon: LayersIcon,
    position: "right-0 top-[63%] w-[64%] sm:w-[58%]",
    depth: "translateZ(14px)",
    accent: "from-violet-500/25",
  },
  {
    id: "server",
    title: "API & Database",
    meta: "PHP · MySQL",
    Icon: CodeIcon,
    position: "left-[5%] bottom-[2%] w-[72%] sm:w-[64%]",
    depth: "translateZ(-16px)",
    accent: "from-cyanish/20",
  },
] as const;

export function HeroTiltFallback() {
  const reduceMotion = useReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const smoothX = useSpring(px, { stiffness: 90, damping: 18 });
  const smoothY = useSpring(py, { stiffness: 90, damping: 18 });

  const rotateY = useTransform(smoothX, [0, 1], ["-10deg", "10deg"]);
  const rotateX = useTransform(smoothY, [0, 1], ["8deg", "-8deg"]);

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width);
    py.set((event.clientY - rect.top) / rect.height);
  }

  function resetPointer() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      style={reduceMotion ? undefined : { rotateX, rotateY }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="relative mx-auto aspect-square w-full max-w-[340px] [transform-style:preserve-3d] [perspective:1100px] sm:max-w-[420px] lg:max-w-[520px]"
    >
      <div aria-hidden="true" className="absolute inset-[18%] rounded-full bg-azure-600/25 blur-[70px]" />
      <div
        aria-hidden="true"
        className="absolute inset-[2%] rounded-full border border-white/[0.07] motion-safe:animate-spin-slow"
      />
      <div
        aria-hidden="true"
        className="absolute inset-[11%] rounded-full border border-dashed border-violet-400/20 motion-safe:animate-spin-slow [animation-direction:reverse] [animation-duration:44s]"
      />

      {PANES.map((pane, index) => {
        const Icon = pane.Icon;
        return (
          <motion.div
            key={pane.id}
            style={{ transform: pane.depth }}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className={`glass ring-aurora absolute flex items-center gap-2.5 rounded-2xl px-3 py-2.5 shadow-card sm:gap-3 sm:px-4 sm:py-3 ${pane.position}`}
          >
            <span
              className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${pane.accent} to-transparent text-white sm:h-10 sm:w-10`}
            >
              <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-xs font-medium text-white sm:text-sm">{pane.title}</span>
              <span className="mt-0.5 block truncate font-mono text-[9px] uppercase tracking-[0.16em] text-mute sm:text-[10px]">
                {pane.meta}
              </span>
            </span>
          </motion.div>
        );
      })}

      {/* Inti visual: pembungkus mengatur posisi & kedalaman, inner mengatur animasi float. */}
      <div
        className="absolute left-1/2 top-1/2 [transform-style:preserve-3d]"
        style={{ transform: "translate(-50%, -50%) translateZ(46px)" }}
        aria-hidden="true"
      >
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-aurora font-mono text-base font-semibold text-night-950 shadow-glow-violet motion-safe:animate-float sm:h-20 sm:w-20 sm:text-lg">
          {profile.initials}
        </div>
      </div>
    </motion.div>
  );
}

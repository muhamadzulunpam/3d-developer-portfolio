import { lazy, Suspense, useMemo, useRef } from "react";
import { useInView } from "framer-motion";
import { HeroTiltFallback } from "@/components/sections/hero/HeroTiltFallback";
import { useMotionReduced } from "@/hooks/useMotionReduced";
import { isWebGLAvailable } from "@/lib/webgl";

// Chunk terpisah: three.js hanya diunduh saat hero memang memakai jalur 3D.
const HeroScene = lazy(() => import("@/components/three/HeroScene"));

function SceneSkeleton() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <span className="h-40 w-40 animate-pulse-soft rounded-full border border-white/10 bg-white/[0.03]" />
      <span className="absolute h-24 w-24 animate-pulse-soft rounded-2xl bg-violet-500/25 blur-xl" />
    </div>
  );
}

export function HeroVisual() {
  const reduceMotion = useMotionReduced();
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { margin: "120px 0px" });
  const webglReady = useMemo(() => isWebGLAvailable(), []);

  // `?fx=static` memaksa jalur non-WebGL, berguna untuk menguji fallback
  // tanpa harus mengubah preferensi reduced motion di OS.
  const forceStatic = useMemo(() => new URLSearchParams(window.location.search).get("fx") === "static", []);

  // Reduced motion tetap dapat visual, hanya tanpa kanvas WebGL yang bergerak terus.
  const use3D = webglReady && !reduceMotion && !forceStatic;

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-square w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[520px]"
    >
      <div aria-hidden="true" className="absolute inset-[16%] rounded-full bg-azure-600/25 blur-[80px]" />

      {/* Visualnya dekoratif: penjelas sudah ada di caption, jadi tidak perlu
          masuk accessibility tree (kanvas WebGL tanpa label hanya jadi noise). */}
      <div aria-hidden="true" className="absolute inset-0">
        {use3D ? (
          <Suspense fallback={<SceneSkeleton />}>
            <HeroScene paused={!inView} />
          </Suspense>
        ) : (
          <HeroTiltFallback />
        )}
      </div>

      <p className="pointer-events-none absolute bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.22em] text-mute/70">
        {use3D ? "React Three Fiber · WebGL" : "Visual statis · hemat GPU"}
      </p>
    </div>
  );
}

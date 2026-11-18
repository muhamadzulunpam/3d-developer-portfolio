import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Preferensi "reduce motion" pengguna, ditambah override `?rm=1` supaya
 * tampilan hemat animasi bisa diuji tanpa mengubah pengaturan OS.
 */
export function useMotionReduced() {
  const sistem = useReducedMotion();

  const dipaksa = useMemo(
    () => new URLSearchParams(window.location.search).get("rm") === "1",
    [],
  );

  return Boolean(sistem) || dipaksa;
}

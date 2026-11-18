let cached: boolean | null = null;

/**
 * Deteksi dukungan WebGL sekali saja.
 * Kalau browser/mesin VDI tidak punya GPU atau WebGL-nya dinonaktifkan,
 * komponen hero jatuh ke versi CSS (HeroTiltFallback) tanpa error.
 */
export function isWebGLAvailable(): boolean {
  if (typeof window === "undefined") return false;
  if (cached !== null) return cached;

  try {
    const probe = document.createElement("canvas");
    const context = probe.getContext("webgl2") ?? probe.getContext("webgl");

    cached = Boolean(context);

    // Jangan biarkan context probe menahan slot GPU browser.
    context?.getExtension("WEBGL_lose_context")?.loseContext();
  } catch {
    cached = false;
  }

  return cached;
}

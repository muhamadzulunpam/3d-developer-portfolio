/**
 * Lapisan latar satu halaman: grid samar + glow aurora.
 * `fixed` + `pointer-events-none` supaya tidak ikut ter-scroll dan tidak
 * menghalangi interaksi; tanpa animasi JS sehingga biayanya cuma compositor CSS.
 */
export function BackgroundFX() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-night-950" />

      {/* Grid teknis dengan mask agar hanya terlihat di area atas. */}
      <div className="absolute inset-0 bg-grid-faint bg-grid opacity-40 [mask-image:radial-gradient(75%_55%_at_50%_0%,#000_55%,transparent_100%)]" />

      <div className="absolute -left-32 -top-24 h-[420px] w-[420px] rounded-full bg-azure-600/20 blur-[130px] motion-safe:animate-pulse-soft" />
      <div className="absolute -right-24 top-[38%] h-[380px] w-[380px] rounded-full bg-violet-600/20 blur-[130px] motion-safe:animate-pulse-soft [animation-delay:1.6s]" />
      <div className="absolute -bottom-28 left-1/3 h-[420px] w-[420px] rounded-full bg-azure-500/10 blur-[150px]" />

      {/* Bias cahaya tipis di tepi layar, memberi kedalaman ala panel 3D. */}
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-azure-400/25 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-violet-400/25 to-transparent" />
    </div>
  );
}

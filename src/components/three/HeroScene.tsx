import { Canvas } from "@react-three/fiber";
import { HeroObjects } from "@/components/three/HeroObjects";

type HeroSceneProps = {
  /** true saat hero tidak terlihat: render loop dihentikan supaya GPU idle. */
  paused?: boolean;
};

/**
 * Dimuat terpisah lewat React.lazy, jadi three.js tidak masuk bundle awal.
 * Tidak ada OrbitControls di sini: rotasi cukup mengikuti pointer, supaya
 * scroll halaman tidak pernah direbut oleh kanvas (penting di mobile).
 */
export default function HeroScene({ paused = false }: HeroSceneProps) {
  return (
    <Canvas
      frameloop={paused ? "never" : "always"}
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5.4], fov: 45 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0 }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 8]} intensity={3.1} color="#8ab0ff" />
      <directionalLight position={[-5, -2, -3]} intensity={1.4} color="#a97bff" />
      {/* Isi dari arah kamera supaya facet inti tidak jatuh jadi siluet. */}
      <directionalLight position={[0, 1, 6]} intensity={1.2} color="#dfe8ff" />
      <HeroObjects />
    </Canvas>
  );
}

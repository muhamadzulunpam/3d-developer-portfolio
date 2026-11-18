import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group, Mesh, Points } from "three";

const DUST_COUNT = 320;

/** Posisi titik acak pada kulit bola pipih, dibuat sekali saat mount. */
function useDustPositions() {
  return useMemo(() => {
    const array = new Float32Array(DUST_COUNT * 3);

    for (let i = 0; i < DUST_COUNT; i += 1) {
      const radius = 2.4 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      array[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      array[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.72;
      array[i * 3 + 2] = radius * Math.cos(phi) * 0.55;
    }

    return array;
  }, []);
}

export function HeroObjects() {
  const group = useRef<Group>(null);
  const core = useRef<Mesh>(null);
  const shell = useRef<Mesh>(null);
  const ring = useRef<Mesh>(null);
  const orbit = useRef<Group>(null);
  const dust = useRef<Points>(null);
  const positions = useDustPositions();

  useFrame((state, delta) => {
    const elapsed = state.clock.elapsedTime;
    // Lerp berbasis delta supaya kecepatannya sama di 60Hz maupun 120Hz.
    const ease = Math.min(1, delta * 2.6);

    if (group.current) {
      const targetX = state.pointer.y * 0.2;
      const targetY = state.pointer.x * 0.34;
      group.current.rotation.x += (targetX - group.current.rotation.x) * ease;
      group.current.rotation.y += (targetY - group.current.rotation.y) * ease;
      group.current.position.y = Math.sin(elapsed * 0.65) * 0.12;
    }

    if (core.current) {
      core.current.rotation.y += delta * 0.26;
      core.current.rotation.x += delta * 0.07;
    }

    if (shell.current) {
      shell.current.rotation.y -= delta * 0.15;
      shell.current.rotation.z += delta * 0.05;
    }

    if (ring.current) ring.current.rotation.z += delta * 0.1;
    if (orbit.current) orbit.current.rotation.z += delta * 0.55;
    if (dust.current) dust.current.rotation.y += delta * 0.03;
  });

  return (
    <group ref={group}>
      {/* Inti: icosahedron low-poly berfacet, murah digambar dan tetap terlihat premium. */}
      <mesh ref={core}>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshStandardMaterial
          color="#243f9e"
          flatShading
          metalness={0.68}
          roughness={0.22}
          emissive="#2f52c9"
          emissiveIntensity={0.75}
        />
      </mesh>

      {/* Cangkang kawat di luarnya, memberi kedalaman tanpa menambah fragment berat. */}
      <mesh ref={shell}>
        <icosahedronGeometry args={[1.42, 1]} />
        <meshBasicMaterial color="#5b8cff" wireframe transparent opacity={0.13} />
      </mesh>

      {/* Cincin orbit tipis. */}
      <mesh ref={ring} rotation={[Math.PI / 2.35, 0.42, 0]}>
        <torusGeometry args={[2.06, 0.012, 8, 150]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.5} />
      </mesh>

      <mesh rotation={[Math.PI / 1.7, -0.5, 0]}>
        <torusGeometry args={[2.42, 0.006, 6, 120]} />
        <meshBasicMaterial color="#38e0ff" transparent opacity={0.28} />
      </mesh>

      {/* Satelit kecil bercahaya yang mengintari inti, menambah rasa "hidup". */}
      <group ref={orbit} rotation={[Math.PI / 2.35, 0.42, 0]}>
        <mesh position={[2.06, 0, 0]}>
          <sphereGeometry args={[0.055, 16, 16]} />
          <meshBasicMaterial color="#38e0ff" />
        </mesh>
      </group>

      {/* Debu partikel: satu Points object, tanpa tekstur. */}
      <points ref={dust}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.024}
          color="#a78bfa"
          transparent
          opacity={0.72}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  );
}

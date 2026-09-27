import { useMemo, useRef } from "react";
import { Canvas, useFrame, type ThreeElements } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const MAGENTA = "#D40061";
const ROSE = "#FF2E7A";
const WINE = "#4A001C";

function Ring({
  radius,
  tube,
  color,
  speed,
  rotation,
  emissive = 1.2,
}: {
  radius: number;
  tube: number;
  color: string;
  speed: number;
  rotation: [number, number, number];
  emissive?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.z += delta * speed;
    ref.current.rotation.x += delta * speed * 0.35;
  });
  return (
    <mesh ref={ref} rotation={rotation}>
      <torusGeometry args={[radius, tube, 24, 180]} />
      <meshStandardMaterial
        color={color}
        emissive={new THREE.Color(color)}
        emissiveIntensity={emissive}
        metalness={0.9}
        roughness={0.25}
      />
    </mesh>
  );
}

function WireRing({ radius, speed }: { radius: number; speed: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * speed;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
  });
  return (
    <group ref={ref}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.008, 8, 160]} />
        <meshBasicMaterial color={ROSE} transparent opacity={0.5} />
      </mesh>
      <mesh position={[radius, 0, 0]}>
        <sphereGeometry args={[0.055, 20, 20]} />
        <meshBasicMaterial color={ROSE} />
      </mesh>
    </group>
  );
}

function Shards() {
  const shards = useMemo(
    () =>
      [
        { p: [1.7, 0.9, -0.4], s: 0.16 },
        { p: [-1.85, -0.7, 0.3], s: 0.12 },
        { p: [1.3, -1.3, 0.6], s: 0.1 },
        { p: [-1.4, 1.2, -0.6], s: 0.13 },
      ] as { p: [number, number, number]; s: number }[],
    [],
  );
  return (
    <>
      {shards.map((sh, i) => (
        <Float key={i} speed={1.2 + i * 0.3} rotationIntensity={1.4} floatIntensity={1.6}>
          <mesh position={sh.p}>
            <icosahedronGeometry args={[sh.s, 0]} />
            <meshStandardMaterial
              color={ROSE}
              emissive={new THREE.Color(MAGENTA)}
              emissiveIntensity={0.6}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

function Core(props: ThreeElements["group"]) {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const { x, y } = state.pointer;
    group.current.rotation.y += (x * 0.35 - group.current.rotation.y) * 0.04;
    group.current.rotation.x += (-y * 0.25 - group.current.rotation.x) * 0.04;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.06;
  });
  return (
    <group ref={group} {...props}>
      {/* core sphere */}
      <mesh>
        <sphereGeometry args={[0.95, 64, 64]} />
        <MeshDistortMaterial
          color={WINE}
          emissive={new THREE.Color(MAGENTA)}
          emissiveIntensity={0.35}
          metalness={0.95}
          roughness={0.18}
          distort={0.22}
          speed={1.1}
        />
      </mesh>
      {/* crossed rings */}
      <Ring radius={1.35} tube={0.022} color={MAGENTA} speed={0.35} rotation={[0, 0, 0]} />
      <Ring radius={1.55} tube={0.016} color={ROSE} speed={-0.25} rotation={[Math.PI / 2.2, 0.4, 0]} />
      <Ring radius={1.75} tube={0.012} color={MAGENTA} speed={0.18} rotation={[0.6, Math.PI / 2.4, 0.3]} emissive={0.9} />
      <WireRing radius={2.05} speed={0.22} />
      <Shards />
    </group>
  );
}

export function VentrixCore() {
  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 6], fov: 42 }}
    >
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 3, 5]} intensity={70} color={ROSE} />
      <pointLight position={[-5, -2, 3]} intensity={45} color={MAGENTA} />
      <pointLight position={[0, 0, -4]} intensity={30} color="#ffffff" />
      <Core />
    </Canvas>
  );
}
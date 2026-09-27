import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const MAGENTA = "#D40061";
const ROSE = "#FF2E7A";

function Torus({
  position,
  radius,
  speed,
  color,
}: {
  position: [number, number, number];
  radius: number;
  speed: number;
  color: string;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * speed;
    ref.current.rotation.y += delta * speed * 0.7;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.25;
  });
  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[radius, 0.03, 8, 120]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.35} />
    </mesh>
  );
}

function Poly({ position, size }: { position: [number, number, number]; size: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.25;
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.4;
  });
  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[size, 1]} />
      <meshBasicMaterial color={ROSE} wireframe transparent opacity={0.22} />
    </mesh>
  );
}

export function AmbientShapes({ side = "right" }: { side?: "left" | "right" }) {
  const dir = side === "right" ? 1 : -1;
  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 1.25]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      camera={{ position: [0, 0, 7], fov: 45 }}
    >
      <Torus position={[dir * 1.4, 0.8, 0]} radius={1.6} speed={0.12} color={MAGENTA} />
      <Poly position={[dir * -0.6, -1.4, -1]} size={0.9} />
    </Canvas>
  );
}
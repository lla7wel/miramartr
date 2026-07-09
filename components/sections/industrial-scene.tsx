"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, Line, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

function SupplyNetwork() {
  const group = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(clock.elapsedTime * 0.32) * 0.18;
      group.current.position.y = Math.sin(clock.elapsedTime * 0.55) * 0.05;
    }
  });

  return (
    <group ref={group} scale={1.35} position={[0, 0.28, 0]}>
      <mesh position={[-2.2, -0.5, 0]}>
        <boxGeometry args={[1.25, 0.9, 1.1]} />
        <meshStandardMaterial color="#2f3a45" metalness={0.55} roughness={0.42} />
      </mesh>
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[1.45, 1.35, 1.25]} />
        <meshStandardMaterial color="#3e4a55" metalness={0.65} roughness={0.35} />
      </mesh>
      <mesh position={[2.1, -0.45, 0]}>
        <boxGeometry args={[1.15, 1.0, 1.1]} />
        <meshStandardMaterial color="#27333d" metalness={0.58} roughness={0.45} />
      </mesh>

      <Line
        points={[
          [-2.2, 0.18, 0.66],
          [-0.74, 0.32, 0.66],
          [0.74, 0.32, 0.66],
          [2.1, 0.12, 0.66],
        ]}
        color="#b8202a"
        lineWidth={4}
      />
      <Line
        points={[
          [-2.2, -0.92, -0.64],
          [-0.74, -0.84, -0.64],
          [0.74, -0.84, -0.64],
          [2.1, -0.94, -0.64],
        ]}
        color="#f2b84b"
        lineWidth={2}
      />

      {[-2.2, 0, 2.1].map((x, index) => (
        <Float key={x} speed={1.4 + index * 0.2} rotationIntensity={0.12} floatIntensity={0.16}>
          <mesh position={[x, 0.55, 0.86]}>
            <cylinderGeometry args={[0.11, 0.11, 0.62, 24]} />
            <meshStandardMaterial
              color={index === 1 ? "#b8202a" : "#8b98a5"}
              metalness={0.7}
              roughness={0.28}
            />
          </mesh>
        </Float>
      ))}

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.18, 0]}>
        <planeGeometry args={[6.4, 2.8, 8, 4]} />
        <meshStandardMaterial color="#151b22" metalness={0.2} roughness={0.75} />
      </mesh>
    </group>
  );
}

export function IndustrialScene() {
  return (
    <Canvas dpr={[1, 1.6]} className="h-full w-full">
      <PerspectiveCamera makeDefault position={[0, 1.55, 4.4]} fov={40} />
      <ambientLight intensity={1.1} />
      <directionalLight position={[3, 4, 5]} intensity={2.2} color="#f8efe0" />
      <pointLight position={[-3, 2, 1]} intensity={2.4} color="#b8202a" />
      <SupplyNetwork />
      <Html position={[0, 1.55, 0]} center>
        <div className="rounded-md border border-brand-red/35 bg-graphite-950/80 px-3 py-2 text-center text-[11px] font-black uppercase tracking-[0.2em] text-cream shadow-xl backdrop-blur">
          BOQ to delivery
        </div>
      </Html>
    </Canvas>
  );
}

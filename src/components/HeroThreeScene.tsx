"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { Suspense } from "react";

function GoldenGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.25;
      meshRef.current.rotation.y = t * 0.35;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = -t * 0.3;
      ringRef.current.rotation.z = t * 0.2;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y = -t * 0.4;
    }
  });

  return (
    <group>
      {/* Outer Golden Floating Torus Knot */}
      <mesh ref={meshRef} castShadow>
        <torusKnotGeometry args={[1.1, 0.32, 160, 32, 2, 3]} />
        <meshStandardMaterial
          color="#E5C158"
          metalness={0.9}
          roughness={0.15}
          emissive="#7A5210"
          emissiveIntensity={0.25}
        />
      </mesh>

      {/* Elegant Golden Orbital Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1.85, 0.025, 16, 100]} />
        <meshStandardMaterial
          color="#F3E5AB"
          metalness={0.95}
          roughness={0.1}
          emissive="#D4AF37"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Inner Glowing Crystal Core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial
          color="#FFF2B2"
          wireframe
          metalness={0.8}
          roughness={0.2}
          emissive="#FFDF00"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 8, 5]} intensity={2.2} color="#FFF8DC" />
      <pointLight position={[-4, -3, -4]} intensity={1.5} color="#D4AF37" />
      <pointLight position={[3, -4, 3]} intensity={1.2} color="#F59E0B" />
      <pointLight position={[0, 5, -2]} intensity={0.9} color="#FFD700" />
    </>
  );
}

export default function HeroThreeScene() {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 4.3], fov: 48 }}
        style={{ background: "transparent" }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <SceneLights />
          <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
            <GoldenGeometry />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}

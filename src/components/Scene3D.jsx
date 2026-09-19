import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function Shape({ position, color, scale = 1, speed = 1, floatIntensity = 1.2, geometry }) {
  return (
    <Float speed={speed} rotationIntensity={1.1} floatIntensity={floatIntensity}>
      <mesh position={position} scale={scale}>
        {geometry}
        <meshStandardMaterial
          color={color}
          roughness={0.25}
          metalness={0.15}
          emissive={color}
          emissiveIntensity={0.08}
        />
      </mesh>
    </Float>
  );
}

function Rig({ children }) {
  const group = useRef();
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.06;
    // subtle parallax toward pointer
    const targetX = (state.pointer.y * 0.15);
    const targetZ = (state.pointer.x * 0.15);
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.02;
    group.current.rotation.z += (targetZ - group.current.rotation.z) * 0.02;
  });
  return <group ref={group}>{children}</group>;
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 4, 4]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-4, -2, -3]} intensity={0.5} color="#ef1a2c" />
      <pointLight position={[0, 0, 5]} intensity={0.6} color="#ef1a2c" />
      <Rig>
        {/* Red accent icosahedron — top-left corner */}
        <Shape
          position={[-2.1, 1.9, -1]}
          color="#ef1a2c"
          scale={0.34}
          speed={1.4}
          geometry={<icosahedronGeometry args={[1, 0]} />}
        />
        {/* Charcoal box — top-right corner */}
        <Shape
          position={[2.2, 2, -1]}
          color="#3a3a3f"
          scale={0.26}
          speed={1.1}
          geometry={<boxGeometry args={[1, 1, 1]} />}
        />
        {/* Deep red torus — bottom-right corner */}
        <Shape
          position={[2.3, -1.9, -1.1]}
          color="#a80d1d"
          scale={0.3}
          speed={1.6}
          geometry={<torusGeometry args={[0.7, 0.28, 16, 32]} />}
        />
        {/* Off-white octahedron — bottom-left corner */}
        <Shape
          position={[-2.3, -2, -1]}
          color="#e8e6e3"
          scale={0.3}
          speed={0.9}
          geometry={<octahedronGeometry args={[1, 0]} />}
        />
        {/* Small accent sphere — top edge */}
        <Shape
          position={[0.1, 2.6, -1.6]}
          color="#ef1a2c"
          scale={0.18}
          speed={1.8}
          floatIntensity={2}
          geometry={<sphereGeometry args={[1, 24, 24]} />}
        />
        {/* Torus knot for flair — right edge, far background */}
        <Shape
          position={[2.4, 0.2, -2]}
          color="#7a0a15"
          scale={0.18}
          speed={1.2}
          geometry={<torusKnotGeometry args={[0.7, 0.22, 64, 12]} />}
        />
      </Rig>
    </>
  );
}

export default function Scene3D({ className = "" }) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas
        dpr={[1, 1.75]}
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0, 7], fov: 42 }}
        style={{ width: "100%", height: "100%", pointerEvents: "none" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

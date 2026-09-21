import { Suspense, useMemo } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";

/**
 * GlobalBubbles — one shared three.js canvas, fixed to the viewport, that
 * replaces every per-section <FloatingShape> and the hero-only <Scene3D>.
 *
 * Why this fixes "cutting from left":
 * Before, each section drew its own bubbles positioned with left/right %
 * inside a box that had `overflow-hidden`. Once a bubble's float animation
 * drifted it past that box's edge, it got sliced clean off — worst on the
 * left edge where bubbles sat closest to the boundary.
 * Here there is exactly one canvas, sized to the full viewport (fixed,
 * inset-0), so there is no small overflow-hidden box to clip against.
 * Every bubble position is also clamped to a 8%–92% safe zone before being
 * converted to 3D coordinates, so drift/rotation can never push a shape to
 * the viewport edge in the first place.
 *
 * Why this is lighter than before:
 * - Only ONE WebGL context for the entire site (previously: 1 for the hero
 *   Scene3D + N absolutely-positioned CSS elements per section).
 * - Capped dpr, low-poly geometries, low light count, `powerPreference:
 *   "low-power"`, and the whole chunk is lazy-loaded (see App.jsx) so it
 *   never blocks first paint.
 */

const LAYOUT = [
  { xp: 8, yp: 14, scale: 0.34, color: "#ef1a2c", shape: "icosahedron", speed: 1.2 },
  { xp: 90, yp: 10, scale: 0.24, color: "#3a3a3f", shape: "box", speed: 1 },
  { xp: 14, yp: 46, scale: 0.2, color: "#e8e6e3", shape: "octahedron", speed: 0.9 },
  { xp: 88, yp: 42, scale: 0.28, color: "#a80d1d", shape: "torus", speed: 1.4 },
  { xp: 50, yp: 8, scale: 0.16, color: "#ef1a2c", shape: "sphere", speed: 1.7 },
  { xp: 10, yp: 78, scale: 0.26, color: "#ef1a2c", shape: "torus", speed: 1.1 },
  { xp: 92, yp: 74, scale: 0.18, color: "#7a0a15", shape: "torusKnot", speed: 1.3 },
  { xp: 38, yp: 90, scale: 0.22, color: "#e8e6e3", shape: "diamond", speed: 0.95 },
  { xp: 64, yp: 92, scale: 0.16, color: "#a80d1d", shape: "sphere", speed: 1.5 },
  { xp: 28, yp: 62, scale: 0.14, color: "#3a3a3f", shape: "octahedron", speed: 1.6 },
];

function Geometry({ type }) {
  switch (type) {
    case "box":
      return <boxGeometry args={[1, 1, 1]} />;
    case "diamond":
      return <octahedronGeometry args={[1, 0]} />;
    case "octahedron":
      return <octahedronGeometry args={[1, 0]} />;
    case "torus":
      return <torusGeometry args={[0.7, 0.26, 10, 20]} />;
    case "torusKnot":
      return <torusKnotGeometry args={[0.55, 0.18, 40, 8]} />;
    case "sphere":
      return <sphereGeometry args={[1, 14, 14]} />;
    case "icosahedron":
    default:
      return <icosahedronGeometry args={[1, 0]} />;
  }
}

function Bubble({ xp, yp, scale, color, shape, speed }) {
  const { viewport } = useThree();
  // Clamp to a safe zone (8%-92%) so nothing can ever sit at, or drift past,
  // the viewport edge.
  const safeXp = Math.min(92, Math.max(8, xp));
  const safeYp = Math.min(92, Math.max(8, yp));
  const x = (safeXp / 100 - 0.5) * viewport.width;
  const y = (0.5 - safeYp / 100) * viewport.height;

  return (
    <Float speed={speed} rotationIntensity={0.7} floatIntensity={1.3}>
      <mesh position={[x, y, 0]} scale={scale}>
        <Geometry type={shape} />
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.1}
          emissive={color}
          emissiveIntensity={0.15}
          transparent
          opacity={0.5}
        />
      </mesh>
    </Float>
  );
}

function Field() {
  const shapes = useMemo(() => LAYOUT, []);
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 5]} intensity={0.9} color="#ffffff" />
      <directionalLight position={[-3, -2, -3]} intensity={0.35} color="#ef1a2c" />
      {shapes.map((b, i) => (
        <Bubble key={i} {...b} />
      ))}
    </>
  );
}

export default function GlobalBubbles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 mix-blend-screen"
    >
      <Canvas
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
        camera={{ position: [0, 0, 10], fov: 40 }}
        style={{ width: "100%", height: "100%" }}
      >
        <Suspense fallback={null}>
          <Field />
        </Suspense>
      </Canvas>
    </div>
  );
}

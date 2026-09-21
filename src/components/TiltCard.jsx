import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

/**
 * Wraps a card and applies a real 3D tilt that follows the pointer, plus a
 * soft glare highlight. The tilt is genuine 3D: every frame we build a
 * THREE.Matrix4 from a quaternion (derived from the pointer-driven Euler
 * rotation) and a scale vector, then hand that matrix straight to the
 * element's CSS `transform: matrix3d(...)`. That's three.js doing the
 * actual 3D math for every card on the site (hero photo, about photo,
 * every tech-stack card, every project card) instead of the previous
 * framer-motion linear interpolation.
 *
 * Falls back to a flat hover lift on touch devices (no pointer move events
 * fired there, which is fine — target stays at rest).
 */
export default function TiltCard({
  children,
  className = "",
  maxTilt = 10,
  scale = 1.03,
  glare = true,
}) {
  const ref = useRef(null);
  const rafRef = useRef(null);
  const current = useRef({ rx: 0, ry: 0, s: 1 });
  const target = useRef({ rx: 0, ry: 0, s: 1 });
  const [glareStyle, setGlareStyle] = useState({ x: "50%", y: "50%", opacity: 0 });

  useEffect(() => {
    const euler = new THREE.Euler();
    const quat = new THREE.Quaternion();
    const matrix = new THREE.Matrix4();
    const scaleVec = new THREE.Vector3(1, 1, 1);
    const posVec = new THREE.Vector3(0, 0, 0);

    function tick() {
      const c = current.current;
      const t = target.current;

      // Critically-damped-ish lerp toward the pointer-driven target.
      c.rx += (t.rx - c.rx) * 0.14;
      c.ry += (t.ry - c.ry) * 0.14;
      c.s += (t.s - c.s) * 0.14;

      euler.set(
        THREE.MathUtils.degToRad(c.rx),
        THREE.MathUtils.degToRad(c.ry),
        0,
        "XYZ"
      );
      quat.setFromEuler(euler);
      scaleVec.set(c.s, c.s, c.s);
      matrix.compose(posVec, quat, scaleVec);

      if (ref.current) {
        const m = matrix.elements;
        ref.current.style.transform = `perspective(900px) matrix3d(${m
          .map((n) => n.toFixed(6))
          .join(",")})`;
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    target.current.rx = THREE.MathUtils.lerp(maxTilt, -maxTilt, py);
    target.current.ry = THREE.MathUtils.lerp(-maxTilt, maxTilt, px);
    target.current.s = scale;

    setGlareStyle({ x: `${px * 100}%`, y: `${py * 100}%`, opacity: 1 });
  }

  function handleMouseLeave() {
    target.current.rx = 0;
    target.current.ry = 0;
    target.current.s = 1;
    setGlareStyle((p) => ({ ...p, opacity: 0 }));
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative will-change-transform [transform-style:preserve-3d] ${className}`}
    >
      {children}
      {glare && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: glareStyle.opacity,
            background: `radial-gradient(circle at ${glareStyle.x} ${glareStyle.y}, rgba(255,255,255,0.35), transparent 55%)`,
          }}
        />
      )}
    </div>
  );
}

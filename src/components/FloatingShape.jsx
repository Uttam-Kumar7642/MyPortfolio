/**
 * Lightweight decorative floating shapes — pure CSS, no WebGL.
 * Used site-wide (unlike Scene3D, which is the richer hero-only 3D scene)
 * so every section can share the same floating-bubble motif cheaply.
 *
 * Each shape is absolutely positioned by the caller via `style` (top/left/etc.)
 * and stays fully self-contained (its own bounding box), so as long as the
 * parent section has `overflow-hidden`, it can never bleed past the section
 * edge or get sliced mid-shape.
 */
const shapeClasses = {
  diamond: "rotate-45 rounded-[6px]",
  hexagon: "[clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)]",
  circle: "rounded-full",
};

export default function FloatingShape({
  variant = "diamond",
  size = 28,
  color = "#ef1a2c",
  opacity = 0.55,
  duration = 7,
  delay = 0,
  drift = 14,
  outline = false,
  className = "",
  style = {},
}) {
  const shapeStyle = outline
    ? { border: `2px solid ${color}`, background: "transparent" }
    : { background: color };

  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute block ${className}`}
      style={{
        width: size,
        height: size,
        opacity,
        animation: `float-bob ${duration}s ease-in-out ${delay}s infinite`,
        "--drift": `${drift}px`,
        ...style,
      }}
    >
      <span
        className={`block h-full w-full ${shapeClasses[variant] ?? shapeClasses.diamond}`}
        style={shapeStyle}
      />
    </span>
  );
}

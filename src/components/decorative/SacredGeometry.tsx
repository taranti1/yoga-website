interface SacredGeometryProps {
  className?: string;
  variant?: "flower-of-life" | "mandala";
  size?: number;
}

export default function SacredGeometry({
  className = "",
  variant = "flower-of-life",
  size = 200,
}: SacredGeometryProps) {
  if (variant === "mandala") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        {[0, 30, 60, 90, 120, 150].map((angle) => (
          <ellipse
            key={angle}
            cx="100"
            cy="100"
            rx="60"
            ry="30"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.15"
            transform={`rotate(${angle} 100 100)`}
          />
        ))}
        <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" opacity="0.12" />
        <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" opacity="0.05" />
      </svg>
    );
  }

  // Flower of Life
  const r = 20;
  const cx = 100;
  const cy = 100;
  const circles = [
    { x: cx, y: cy },
    ...Array.from({ length: 6 }, (_, i) => ({
      x: cx + r * Math.cos((i * Math.PI) / 3),
      y: cy + r * Math.sin((i * Math.PI) / 3),
    })),
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {circles.map((c, i) => (
        <circle
          key={i}
          cx={c.x}
          cy={c.y}
          r={r}
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.12"
        />
      ))}
      <circle cx={cx} cy={cy} r={r * 3} stroke="currentColor" strokeWidth="0.5" opacity="0.06" />
    </svg>
  );
}

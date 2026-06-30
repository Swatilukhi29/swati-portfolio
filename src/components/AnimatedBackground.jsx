import { useMemo } from "react";

// ONE global animated background used across the whole site.
// Layers (all pure CSS/SVG, GPU-friendly, theme-aware, behind all content):
//   1. Aurora gradient mesh   - large drifting blurred color blobs
//   2. Neural network         - faint animated SVG nodes + links
//   3. Floating data particles - small rising dots
//   4. Holographic grid        - subtle drifting grid
// Respects prefers-reduced-motion via the global CSS media query.
export default function AnimatedBackground() {
  // Stable particle set (positions/durations computed once)
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: 40 + Math.random() * 60,
        size: 2 + Math.random() * 3,
        duration: 12 + Math.random() * 14,
        delay: Math.random() * 12,
      })),
    []
  );

  // Faint neural network nodes (percentage coords) + a few links
  const nodes = useMemo(
    () => [
      [12, 22], [20, 60], [33, 35], [44, 72], [55, 28],
      [66, 55], [76, 38], [85, 68], [92, 20], [50, 50],
    ],
    []
  );
  const links = [
    [0, 2], [1, 3], [2, 4], [2, 9], [3, 5], [4, 6],
    [5, 7], [6, 8], [4, 9], [9, 5], [6, 9],
  ];

  return (
    <div className="page-bg" aria-hidden="true">
      {/* drifting holographic grid */}
      <div className="page-bg__grid" />

      {/* aurora gradient mesh */}
      <div
        className="page-bg__aurora"
        style={{
          width: 560, height: 560, top: "-10%", left: "-6%",
          background: "radial-gradient(circle, rgba(59,110,246,0.5), transparent 60%)",
        }}
      />
      <div
        className="page-bg__aurora"
        style={{
          width: 520, height: 520, top: "28%", right: "-8%",
          background: "radial-gradient(circle, rgba(124,92,255,0.45), transparent 60%)",
          animationDelay: "4s",
        }}
      />
      <div
        className="page-bg__aurora"
        style={{
          width: 480, height: 480, bottom: "-12%", left: "30%",
          background: "radial-gradient(circle, rgba(15,181,186,0.35), transparent 60%)",
          animationDelay: "8s",
        }}
      />

      {/* faint neural network */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.35] dark:opacity-30"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <g stroke="rgba(59,110,246,0.25)" strokeWidth="0.15">
          {links.map(([a, b], i) => (
            <line
              key={i}
              x1={nodes[a][0]} y1={nodes[a][1]}
              x2={nodes[b][0]} y2={nodes[b][1]}
            >
              <animate
                attributeName="opacity"
                values="0.2;0.6;0.2"
                dur={`${6 + (i % 5)}s`}
                repeatCount="indefinite"
              />
            </line>
          ))}
        </g>
        {nodes.map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx} cy={cy}
            r={i === 9 ? 0.9 : 0.55}
            fill={i % 3 === 0 ? "#3b6ef6" : i % 3 === 1 ? "#7c5cff" : "#0fb5ba"}
          >
            <animate
              attributeName="r"
              values={`${i === 9 ? 0.9 : 0.5};${i === 9 ? 1.3 : 0.85};${i === 9 ? 0.9 : 0.5}`}
              dur={`${5 + (i % 4)}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>

      {/* floating data particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="page-bg__particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

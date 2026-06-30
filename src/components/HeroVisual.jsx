import { useEffect, useRef, useState } from "react";

// ============================================================================
//  HeroVisual - 3D isometric "Holographic Data Intelligence" scene.
//  Pure CSS + SVG (no images, no Three.js). A central glowing AI core projects
//  a wireframe brain upward from a layered platform, surrounded by floating
//  glass dashboard panels and 3D data objects.
//  Keeps mouse-parallax + slow float. Theme-aware (light/dark).
// ============================================================================

function Panel({ className = "", style, children }) {
  return (
    <div
      className={`absolute rounded-2xl border border-white/40 bg-white/70 p-3 shadow-[0_10px_30px_-12px_rgba(30,50,120,0.35)] backdrop-blur-md dark:border-white/10 dark:bg-white/[0.06] ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

export default function HeroVisual() {
  const ref = useRef(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      setT({
        x: (e.clientX - r.left) / r.width - 0.5,
        y: (e.clientY - r.top) / r.height - 0.5,
      });
    };
    const onLeave = () => setT({ x: 0, y: 0 });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const layer = (depth) => ({
    transform: `translate3d(${t.x * depth}px, ${t.y * depth}px, 0)`,
    transition: "transform 0.25s ease-out",
  });

  return (
    <div
      ref={ref}
      className="relative mx-auto h-[480px] w-full max-w-2xl [perspective:1600px] xl:h-[560px]"
    >
      {/* ambient holographic glows */}
      <div className="blob -left-10 top-10 h-56 w-56 bg-brand/25 animate-pulseglow" />
      <div className="blob right-0 bottom-6 h-56 w-56 bg-brand2/25 animate-pulseglow" />
      <div className="blob left-1/2 top-1/3 h-44 w-44 -translate-x-1/2 bg-teal/20 animate-pulseglow" />

      {/* Whole scene tilted into isometric space */}
      <div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d", transform: "rotateX(6deg) rotateY(-10deg)" }}
      >
        {/* ---- Central core: platform + brain projection ---- */}
        <div className="absolute left-[46%] top-[40%] -translate-x-1/2 -translate-y-1/2" style={layer(8)}>
          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/40 blur-3xl animate-pulseglow" />

          {/* layered isometric platform rings */}
          <div className="relative" style={{ transform: "rotateX(62deg)" }}>
            <div className="h-44 w-44 rounded-full border border-brand/30 bg-gradient-to-br from-brand/20 to-brand2/20 shadow-glow" />
            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand2/40 bg-gradient-to-br from-brand2/25 to-teal/20" />
            <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal/50 bg-gradient-to-br from-teal/30 to-brand/30" />
            <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 shadow-glow animate-pulseglow dark:bg-white/70" />
          </div>

          {/* beam + wireframe brain rising above the platform */}
          <div className="absolute left-1/2 bottom-[58%] -translate-x-1/2" style={{ transformStyle: "preserve-3d" }}>
            <div className="absolute left-1/2 bottom-0 h-28 w-24 -translate-x-1/2 rounded-t-full bg-gradient-to-t from-brand/40 via-brand/15 to-transparent blur-md" />
            <svg width="150" height="120" viewBox="0 0 150 120" className="relative -translate-y-2 animate-floatslow">
              <defs>
                <radialGradient id="brainGlow" cx="50%" cy="45%" r="55%">
                  <stop offset="0%" stopColor="#7c5cff" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#7c5cff" stopOpacity="0" />
                </radialGradient>
              </defs>
              <ellipse cx="75" cy="55" rx="60" ry="48" fill="url(#brainGlow)" />
              {[
                [55,30],[75,24],[95,32],[45,48],[65,44],[85,46],
                [105,50],[50,66],[72,64],[92,66],[60,82],[82,84],
                [75,50],[40,58],[110,64],
              ].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="2"
                  fill={i % 3 === 0 ? "#3b6ef6" : i % 3 === 1 ? "#7c5cff" : "#0fb5ba"}>
                  <animate attributeName="opacity" values="0.4;1;0.4" dur={`${2 + (i % 4)}s`} repeatCount="indefinite" />
                </circle>
              ))}
              <g stroke="#7c5cff" strokeWidth="0.7" opacity="0.5" fill="none">
                <path d="M55 30 L75 24 L95 32 M45 48 L65 44 L85 46 L105 50 M50 66 L72 64 L92 66 M60 82 L82 84" />
                <path d="M55 30 L45 48 M75 24 L72 64 M95 32 L105 50 M65 44 L60 82 M85 46 L82 84 M75 50 L40 58 M75 50 L110 64" />
              </g>
            </svg>
          </div>
        </div>

        {/* ---- 3D data objects ---- */}
        {/* database stack */}
        <div className="absolute right-[26%] top-[58%]" style={layer(22)}>
          <svg width="70" height="80" viewBox="0 0 70 80">
            {[44, 28, 12].map((y, i) => (
              <g key={i}>
                <ellipse cx="35" cy={y + 12} rx="24" ry="9" fill="#3b6ef6" opacity={0.85 - i * 0.05} />
                <rect x="11" y={y} width="48" height="12" fill="#5b86ff" opacity={0.8 - i * 0.05} />
                <ellipse cx="35" cy={y} rx="24" ry="9" fill="#7aa0ff" />
              </g>
            ))}
          </svg>
        </div>

        {/* AI chip */}
        <div className="absolute left-1/2 top-[70%] -translate-x-1/2" style={layer(26)}>
          <div className="relative grid h-16 w-16 place-items-center rounded-xl bg-gradient-to-br from-brand2 to-brand shadow-glow"
            style={{ transform: "rotateX(55deg) rotateZ(45deg)" }}>
            <span className="font-display text-lg font-bold text-white" style={{ transform: "rotateZ(-45deg)" }}>AI</span>
          </div>
        </div>

        {/* small 3D bar chart block */}
        <div className="absolute left-[24%] top-[64%]" style={layer(20)}>
          <svg width="80" height="64" viewBox="0 0 80 64">
            <polygon points="10,50 40,64 70,50 40,36" fill="#c9d6f5" opacity="0.7" />
            {[[24,30],[36,18],[48,26]].map(([x, h], i) => (
              <g key={i}>
                <rect x={x} y={48 - h} width="9" height={h} fill={i === 0 ? "#3b6ef6" : i === 1 ? "#7c5cff" : "#0fb5ba"} />
                <polygon points={`${x},${48 - h} ${x + 9},${48 - h} ${x + 13},${44 - h} ${x + 4},${44 - h}`}
                  fill={i === 0 ? "#5b86ff" : i === 1 ? "#9b7cff" : "#3fd0d4"} />
              </g>
            ))}
          </svg>
        </div>

        {/* ================= Floating glass panels ================= */}

        {/* Model Accuracy */}
        <Panel className="left-0 top-2 w-44" style={layer(40)}>
          <div className="text-[11px] font-medium text-muted dark:text-muted-d">Model Accuracy</div>
          <div className="mt-1 flex items-center justify-between">
            <div>
              <div className="font-display text-2xl font-bold text-ink dark:text-ink-d">98%</div>
              <div className="text-[10px] font-medium text-teal">+3.2% vs last month</div>
            </div>
            <svg width="44" height="44" viewBox="0 0 44 44">
              <circle cx="22" cy="22" r="16" fill="none" stroke="#e6eaf2" strokeWidth="6" className="dark:stroke-white/10" />
              <circle cx="22" cy="22" r="16" fill="none" stroke="#3b6ef6" strokeWidth="6"
                strokeDasharray="92 100" strokeLinecap="round" transform="rotate(-90 22 22)" />
            </svg>
          </div>
        </Panel>

        {/* Analytics Overview */}
        <Panel className="left-1/2 top-0 w-52 -translate-x-1/3" style={layer(32)}>
          <div className="text-[11px] font-medium text-muted dark:text-muted-d">Analytics Overview</div>
          <svg viewBox="0 0 180 70" className="mt-1 w-full">
            <defs>
              <linearGradient id="aFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7c5cff" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#7c5cff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M6 56 L36 40 L60 48 L86 26 L112 40 L140 18 L174 30 L174 64 L6 64 Z" fill="url(#aFill)" />
            <path d="M6 56 L36 40 L60 48 L86 26 L112 40 L140 18 L174 30" fill="none"
              stroke="#7c5cff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {[[36,40],[86,26],[140,18]].map(([x,y],i)=>(<circle key={i} cx={x} cy={y} r="3" fill="#7c5cff" />))}
          </svg>
        </Panel>

        {/* Top Skills */}
        <Panel className="right-0 top-6 w-44" style={layer(44)}>
          <div className="mb-2 text-[11px] font-semibold text-ink dark:text-ink-d">Top Skills</div>
          {[["Python", 95], ["SQL", 90], ["Machine Learning", 88], ["Data Viz", 85]].map(([n, v]) => (
            <div key={n} className="mb-1.5">
              <div className="flex justify-between text-[10px] text-ink2 dark:text-ink2-d"><span>{n}</span><span>{v}%</span></div>
              <div className="mt-0.5 h-1.5 w-full rounded-full bg-line dark:bg-white/10">
                <div className="h-full rounded-full bg-gradient-to-r from-brand to-brand2" style={{ width: `${v}%` }} />
              </div>
            </div>
          ))}
        </Panel>

        {/* Data Pipeline */}
        <Panel className="left-0 top-1/3 w-48" style={layer(48)}>
          <div className="mb-2 text-[11px] font-semibold text-ink dark:text-ink-d">Data Pipeline</div>
          <div className="flex items-center justify-between">
            {["Ingest", "Process", "Analyze"].map((s, i) => (
              <div key={s} className="flex items-center gap-1">
                <div className="grid h-7 w-7 place-items-center rounded-lg bg-brand/10 text-brand"><span className="h-2.5 w-2.5 rounded-sm bg-current" /></div>
                {i < 2 && <span className="text-brand2">&rarr;</span>}
              </div>
            ))}
          </div>
          <div className="mt-1 flex justify-between text-[9px] text-muted dark:text-muted-d"><span>Real-time</span><span>ETL</span><span>Cloud</span></div>
        </Panel>

        {/* Predictions */}
        <Panel className="right-0 top-[40%] w-40" style={layer(52)}>
          <div className="text-[11px] font-medium text-muted dark:text-muted-d">Predictions</div>
          <div className="font-display text-xl font-bold text-ink dark:text-ink-d">12.4K</div>
          <div className="text-[10px] font-medium text-teal">+18.6% vs last month</div>
          <svg viewBox="0 0 120 24" className="mt-1 w-full">
            <path d="M2 18 Q15 6 30 14 T60 12 T90 8 T118 12" fill="none" stroke="#0fb5ba" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </Panel>

        {/* Projects */}
        <Panel className="left-2 bottom-6 w-44" style={layer(38)}>
          <div className="mb-2 text-[11px] font-semibold text-ink dark:text-ink-d">Projects</div>
          <div className="flex items-center gap-3">
            <svg width="46" height="46" viewBox="0 0 46 46">
              <circle cx="23" cy="23" r="16" fill="none" stroke="#e6eaf2" strokeWidth="6" className="dark:stroke-white/10" />
              <circle cx="23" cy="23" r="16" fill="none" stroke="#3b6ef6" strokeWidth="6" strokeDasharray="70 100" strokeLinecap="round" transform="rotate(-90 23 23)" />
              <text x="23" y="27" textAnchor="middle" className="fill-ink dark:fill-ink-d" fontSize="12" fontWeight="700">12</text>
            </svg>
            <div className="space-y-0.5 text-[10px] text-ink2 dark:text-ink2-d">
              <div className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-brand" />Completed 8</div>
              <div className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-teal" />In Progress 3</div>
              <div className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-brand2" />Planning 1</div>
            </div>
          </div>
        </Panel>

        {/* Technologies */}
        <Panel className="-right-2 bottom-[26%] w-44" style={layer(46)}>
          <div className="mb-2 text-[11px] font-semibold text-ink dark:text-ink-d">Technologies</div>
          <div className="flex items-center gap-2">
            {["Py", "SQL", "BI"].map((x, i) => (
              <span key={x} className="grid h-8 w-8 place-items-center rounded-lg text-[10px] font-bold text-white"
                style={{ background: i === 0 ? "#3b6ef6" : i === 1 ? "#7c5cff" : "#0fb5ba" }}>{x}</span>
            ))}
            <span className="text-xs font-semibold text-muted dark:text-muted-d">+6</span>
          </div>
        </Panel>

        {/* Data Sources */}
        <Panel className="right-4 bottom-2 w-44" style={layer(36)}>
          <div className="mb-1 text-[11px] font-semibold text-ink dark:text-ink-d">Data Sources</div>
          <div className="flex items-center gap-3">
            <svg width="34" height="34" viewBox="0 0 34 34">
              {[20, 11, 2].map((y, i) => (
                <g key={i}>
                  <ellipse cx="17" cy={y + 5} rx="12" ry="4" fill="#3b6ef6" opacity={0.8 - i * 0.06} />
                  <rect x="5" y={y} width="24" height="5" fill="#5b86ff" opacity={0.75 - i * 0.06} />
                  <ellipse cx="17" cy={y} rx="12" ry="4" fill="#7aa0ff" />
                </g>
              ))}
            </svg>
            <div>
              <div className="font-display text-xl font-bold text-ink dark:text-ink-d">8</div>
              <div className="text-[9px] text-muted dark:text-muted-d">Connected</div>
            </div>
          </div>
          <div className="mt-1 flex items-center gap-1 text-[9px] font-medium text-teal">
            <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" /> All systems operational
          </div>
        </Panel>
      </div>
    </div>
  );
}

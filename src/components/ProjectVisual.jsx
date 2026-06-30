// ============================================================================
//  ProjectVisual — pure-CSS/SVG isometric "3D" scenes per project topic.
//  No image files. Pick a scene with the `type` prop (from project.visual).
//  Each scene is built on a soft gradient stage with light depth + shadow.
// ============================================================================

// Shared stage wrapper: soft gradient, rounded, subtle 3D floor
function Stage({ from, to, children }) {
  return (
    <div
      className="relative grid h-40 w-full place-items-center overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10 dark:brightness-[0.82] dark:saturate-[0.9]"
      style={{
        background: `linear-gradient(150deg, ${from} 0%, ${to} 100%)`,
      }}
    >
      {/* soft top highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-white/30 blur-2xl" />
      {/* floor ellipse for grounding */}
      <div className="pointer-events-none absolute bottom-3 h-6 w-3/5 rounded-[50%] bg-black/10 blur-md" />
      <div className="relative z-10 transition-transform duration-500 group-hover:scale-[1.06]">
        {children}
      </div>
    </div>
  );
}

// --- Individual scenes (SVG, isometric-ish) --------------------------------

function CarScene() {
  return (
    <Stage from="#e8efff" to="#d6e2ff">
      <svg width="150" height="96" viewBox="0 0 150 96" fill="none">
        {/* shield behind */}
        <path d="M122 18l14 5v14c0 12-8 18-14 21-6-3-14-9-14-21V23l14-5z" fill="#3b6ef6" opacity="0.18"/>
        <path d="M122 26l7 2.5v7c0 6-4 9-7 10.5-3-1.5-7-4.5-7-10.5v-7l7-2.5z" fill="#3b6ef6" opacity="0.4"/>
        {/* car body */}
        <rect x="20" y="48" width="86" height="22" rx="9" fill="#1f2a44"/>
        <path d="M34 48c4-12 10-16 20-16h18c10 0 15 5 20 16H34z" fill="#33405f"/>
        <rect x="44" y="36" width="16" height="11" rx="3" fill="#bcd0ff"/>
        <rect x="64" y="36" width="16" height="11" rx="3" fill="#bcd0ff"/>
        <circle cx="40" cy="70" r="9" fill="#0b1220"/><circle cx="40" cy="70" r="4" fill="#6b7794"/>
        <circle cx="90" cy="70" r="9" fill="#0b1220"/><circle cx="90" cy="70" r="4" fill="#6b7794"/>
        {/* AI signal dots */}
        <circle cx="16" cy="30" r="3" fill="#7c5cff"/>
        <circle cx="10" cy="42" r="2" fill="#0fb5ba"/>
        {/* mini bars (analytics) */}
        <rect x="112" y="62" width="5" height="10" rx="1.5" fill="#3b6ef6"/>
        <rect x="120" y="56" width="5" height="16" rx="1.5" fill="#7c5cff"/>
        <rect x="128" y="60" width="5" height="12" rx="1.5" fill="#0fb5ba"/>
      </svg>
    </Stage>
  );
}

function PropertyScene() {
  return (
    <Stage from="#e7f7f1" to="#cdeede">
      <svg width="150" height="96" viewBox="0 0 150 96" fill="none">
        {/* map pin */}
        <path d="M118 20c8 0 14 6 14 13 0 9-14 21-14 21s-14-12-14-21c0-7 6-13 14-13z" fill="#0fb5ba"/>
        <circle cx="118" cy="33" r="5" fill="#ffffff"/>
        {/* house */}
        <path d="M40 44l28-20 28 20v30H40V44z" fill="#33405f"/>
        <path d="M40 44l28-20 28 20-28 6-28-6z" fill="#475572"/>
        <rect x="58" y="52" width="12" height="22" fill="#bcd0ff"/>
        <rect x="78" y="52" width="10" height="9" rx="1" fill="#bcd0ff"/>
        {/* revenue chart */}
        <rect x="20" y="58" width="5" height="16" rx="1.5" fill="#3b6ef6"/>
        <rect x="28" y="50" width="5" height="24" rx="1.5" fill="#7c5cff"/>
        <path d="M20 56l8-5 8 3" stroke="#0b1220" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>
    </Stage>
  );
}

function LandscapeScene() {
  return (
    <Stage from="#eef7e6" to="#d6edc4">
      <svg width="150" height="96" viewBox="0 0 150 96" fill="none">
        {/* ground */}
        <path d="M14 66c30-10 92-10 122 0v8H14v-8z" fill="#7bb15a"/>
        {/* trees */}
        <circle cx="40" cy="50" r="13" fill="#3f8f4f"/>
        <rect x="37" y="58" width="6" height="12" fill="#7a5a3a"/>
        <circle cx="58" cy="56" r="9" fill="#52a05f"/>
        <rect x="55" y="62" width="5" height="9" fill="#7a5a3a"/>
        {/* KPI dashboard card */}
        <rect x="84" y="34" width="50" height="34" rx="5" fill="#ffffff"/>
        <rect x="90" y="40" width="20" height="4" rx="2" fill="#6b7794"/>
        <rect x="90" y="50" width="6" height="12" rx="1.5" fill="#3b6ef6"/>
        <rect x="99" y="46" width="6" height="16" rx="1.5" fill="#7c5cff"/>
        <rect x="108" y="52" width="6" height="10" rx="1.5" fill="#0fb5ba"/>
        <path d="M120 56l8-6" stroke="#f5a524" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="128" cy="50" r="2.5" fill="#f5a524"/>
      </svg>
    </Stage>
  );
}

function SegmentsScene() {
  return (
    <Stage from="#efe9ff" to="#ddd1ff">
      <svg width="150" height="96" viewBox="0 0 150 96" fill="none">
        {/* clusters */}
        <g>
          <circle cx="44" cy="40" r="6" fill="#3b6ef6"/>
          <circle cx="56" cy="34" r="5" fill="#3b6ef6"/>
          <circle cx="52" cy="48" r="4" fill="#3b6ef6"/>
        </g>
        <g>
          <circle cx="92" cy="36" r="6" fill="#7c5cff"/>
          <circle cx="104" cy="44" r="5" fill="#7c5cff"/>
          <circle cx="96" cy="50" r="4" fill="#7c5cff"/>
        </g>
        <g>
          <circle cx="66" cy="64" r="6" fill="#0fb5ba"/>
          <circle cx="78" cy="60" r="5" fill="#0fb5ba"/>
          <circle cx="72" cy="72" r="4" fill="#0fb5ba"/>
        </g>
        {/* donut */}
        <circle cx="120" cy="66" r="13" fill="none" stroke="#e6eaf2" strokeWidth="6"/>
        <circle cx="120" cy="66" r="13" fill="none" stroke="#3b6ef6" strokeWidth="6"
          strokeDasharray="40 82" strokeLinecap="round" transform="rotate(-90 120 66)"/>
      </svg>
    </Stage>
  );
}

function TimeseriesScene() {
  return (
    <Stage from="#e8efff" to="#d3e0ff">
      <svg width="150" height="96" viewBox="0 0 150 96" fill="none">
        {/* candlesticks */}
        {[
          [28, 40, 22], [40, 34, 30], [52, 46, 18], [64, 30, 26],
        ].map(([x, y, h], i) => (
          <g key={i}>
            <line x1={x + 3} y1={y - 6} x2={x + 3} y2={y + h + 6} stroke="#6b7794" strokeWidth="1.5"/>
            <rect x={x} y={y} width="7" height={h} rx="1.5" fill={i % 2 ? "#0fb5ba" : "#3b6ef6"}/>
          </g>
        ))}
        {/* forecast line */}
        <path d="M24 60 L40 50 L56 56 L72 38 L92 44 L112 28 L132 34"
          fill="none" stroke="#7c5cff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* forecast dashed continuation */}
        <path d="M112 28 L132 34" stroke="#f5a524" strokeWidth="2.5" strokeDasharray="3 3" strokeLinecap="round"/>
        <circle cx="132" cy="34" r="3.5" fill="#f5a524"/>
      </svg>
    </Stage>
  );
}

function SentimentScene() {
  return (
    <Stage from="#fdeef0" to="#fbdce1">
      <svg width="150" height="96" viewBox="0 0 150 96" fill="none">
        {/* chat bubbles */}
        <rect x="22" y="30" width="52" height="26" rx="9" fill="#ffffff"/>
        <path d="M30 56l-2 8 12-8h-10z" fill="#ffffff"/>
        <rect x="30" y="38" width="30" height="4" rx="2" fill="#6b7794"/>
        <rect x="30" y="46" width="20" height="4" rx="2" fill="#cbd3e2"/>
        <rect x="78" y="46" width="50" height="24" rx="9" fill="#3b6ef6"/>
        <path d="M120 70l2 7-12-7h10z" fill="#3b6ef6"/>
        <rect x="86" y="54" width="28" height="4" rx="2" fill="#ffffff" opacity="0.9"/>
        {/* emotion indicators */}
        <circle cx="40" cy="76" r="7" fill="#0fb5ba"/>
        <path d="M37 76a3 3 0 0 0 6 0" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <circle cx="58" cy="78" r="6" fill="#f5a524"/>
      </svg>
    </Stage>
  );
}

function ParkingScene() {
  return (
    <Stage from="#eaf0f7" to="#d4def0">
      <svg width="150" height="96" viewBox="0 0 150 96" fill="none">
        {/* lot */}
        <rect x="20" y="34" width="74" height="46" rx="4" fill="#33405f"/>
        {[30, 46, 62, 78].map((x) => (
          <line key={x} x1={x} y1="38" x2={x} y2="76" stroke="#bcd0ff" strokeWidth="2" strokeDasharray="3 3"/>
        ))}
        {/* parked cars */}
        <rect x="32" y="44" width="10" height="16" rx="2" fill="#3b6ef6"/>
        <rect x="64" y="44" width="10" height="16" rx="2" fill="#0fb5ba"/>
        <rect x="48" y="58" width="10" height="16" rx="2" fill="#7c5cff"/>
        {/* ticket / billing card */}
        <rect x="104" y="42" width="30" height="38" rx="4" fill="#ffffff"/>
        <rect x="110" y="48" width="18" height="4" rx="2" fill="#6b7794"/>
        <rect x="110" y="56" width="18" height="3" rx="1.5" fill="#cbd3e2"/>
        <rect x="110" y="63" width="12" height="3" rx="1.5" fill="#cbd3e2"/>
        <rect x="110" y="71" width="18" height="5" rx="2.5" fill="#f5a524"/>
      </svg>
    </Stage>
  );
}

const SCENES = {
  car: CarScene,
  property: PropertyScene,
  landscape: LandscapeScene,
  segments: SegmentsScene,
  timeseries: TimeseriesScene,
  sentiment: SentimentScene,
  parking: ParkingScene,
};

// Fallback: a neutral data scene
function DefaultScene() {
  return (
    <Stage from="#e8efff" to="#d6e2ff">
      <svg width="140" height="90" viewBox="0 0 140 90" fill="none">
        <rect x="30" y="46" width="8" height="28" rx="2" fill="#3b6ef6"/>
        <rect x="46" y="34" width="8" height="40" rx="2" fill="#7c5cff"/>
        <rect x="62" y="52" width="8" height="22" rx="2" fill="#0fb5ba"/>
        <rect x="78" y="40" width="8" height="34" rx="2" fill="#3b6ef6"/>
      </svg>
    </Stage>
  );
}

export default function ProjectVisual({ type }) {
  const Scene = SCENES[type] || DefaultScene;
  return <Scene />;
}

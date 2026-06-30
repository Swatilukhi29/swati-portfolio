import { useEffect, useRef, useState } from "react";

// ============================================================================
//  HeroHolographicIllustration
//  Uses the provided dashboard/laptop SVG artwork EXACTLY as authored (every
//  element keeps its original coordinates). Theme-aware (light/dark). The whole
//  scene animates as a single unit: a subtle 3D tilt + gentle drift that follow
//  the mouse, plus a soft idle float. No per-element transforms, so nothing can
//  ever shift, stack, or scatter out of place. Respects prefers-reduced-motion.
// ============================================================================

function useIsDark() {
  const [dark, setDark] = useState(
    typeof document !== "undefined" && document.documentElement.classList.contains("dark")
  );
  useEffect(() => {
    const el = document.documentElement;
    const obs = new MutationObserver(() => setDark(el.classList.contains("dark")));
    obs.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);
  return dark;
}

export default function HeroHolographicIllustration() {
  const ref = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const [t, setT] = useState({ x: 0, y: 0 });
  const dark = useIsDark();

  // Smoothed mouse parallax. t.x / t.y range roughly -0.5 .. 0.5
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    let raf;
    const cur = { x: 0, y: 0 };
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      target.current = {
        x: (e.clientX - r.left) / r.width - 0.5,
        y: (e.clientY - r.top) / r.height - 0.5,
      };
    };
    const onLeave = () => (target.current = { x: 0, y: 0 });
    const tick = () => {
      cur.x += (target.current.x - cur.x) * 0.08;
      cur.y += (target.current.y - cur.y) * 0.08;
      setT({ x: cur.x, y: cur.y });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const c = dark
    ? {
        laptopFrame: "#11162b",
        screenBg: "#0f1424",
        laptopBase: "#3b3f7a",
        laptopBaseEdge: "#2a2e5a",
        cardBg: "#151b30",
        cardStroke: "rgba(255,255,255,0.08)",
        textDark: "#c7d0f5",
        textMuted: "#7d8aa5",
        textLight: "rgba(255,255,255,0.12)",
        lineDash: "#7c5cff",
        screenLine: "rgba(255,255,255,0.06)",
        innerPanel: "rgba(255,255,255,0.04)",
        keyboardLight: "rgba(255,255,255,0.06)",
        cloudStroke: "#39406b",
        accent: "#7d8aa5",
      }
    : {
        laptopFrame: "#1E1B4B",
        screenBg: "#FFFFFF",
        laptopBase: "#99AEE3",
        laptopBaseEdge: "#F1F1F1",
        cardBg: "#FFFFFF",
        cardStroke: "#FFFFFF",
        textDark: "#312E81",
        textMuted: "#94A3B8",
        textLight: "#E2E8F0",
        lineDash: "#94A3B8",
        screenLine: "#F1F5F9",
        innerPanel: "#F1F5F9",
        keyboardLight: "#F1F1F1",
        cloudStroke: "#E4EBF9",
        accent: "#94A3B8",
      };

  return (
    <div
      ref={ref}
      className="relative mx-auto w-full max-w-2xl xl:max-w-3xl lg:scale-[1.12] xl:scale-[1.18]"
      style={{ perspective: 1400, animation: "heroFloat 7s ease-in-out infinite" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 660"
        width="100%"
        height="100%"
        style={{
          // Whole-scene animation only: a subtle 3D tilt + a few px of drift
          // that follow the mouse. The artwork itself is untouched.
          transform: `rotateX(${t.y * -5}deg) rotateY(${t.x * 8}deg) translate(${t.x * 10}px, ${t.y * 10}px)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.3s ease-out",
        }}
      >
        <defs>
          <filter id="softShadow" x="-20%" y="-20%" width="150%" height="150%">
            <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor={dark ? "rgba(0,0,0,0.55)" : "rgba(165,180,252,0.25)"} floodOpacity="0.8" />
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor={dark ? "rgba(0,0,0,0.4)" : "rgba(165,180,252,0.25)"} floodOpacity="0.4" />
          </filter>
          <filter id="laptopShadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="25" stdDeviation="20" floodColor={dark ? "rgba(0,0,0,0.6)" : "rgba(79,70,229,0.15)"} />
          </filter>
          <filter id="cloudGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor={dark ? "rgba(124,92,255,0.3)" : "rgba(165,180,252,0.2)"} />
          </filter>
          <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="60%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="chartAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={dark ? "#2a3358" : "#FFFFFF"} />
            <stop offset="100%" stopColor={dark ? "#1a2042" : "#E0E7FF"} />
          </linearGradient>
        </defs>

        {/* Sparkles and decorative background accents */}
        <g fill={c.accent} opacity="0.6">
          <path d="M115 90h6v2h-6v6h-2v-6h-6v-2h6v-6h2v6z" fill="#2563EB" />
          <path d="M620 70h6v2h-6v6h-2v-6h-6v-2h6v-6h2v6z" fill="#06B6D4" />
          <path d="M865 288h6v2h-6v6h-2v-6h-6v-2h6v-6h2v6z" fill="#7C3AED" />
          <path d="M690 572h6v2h-6v6h-2v-6h-6v-2h6v-6h2v6z" fill="#2563EB" />
          <path d="M96 400h6v2h-6v6h-2v-6h-6v-2h6v-6h2v6z" fill="#2563EB" />
          <path d="M420 215h5v1h-5v5h-1v-5h-5v-1h5v-5h1v5z" fill="#7C3AED" />
          <circle cx="126" cy="224" r="6" fill="none" stroke="#7C3AED" strokeWidth="2" />
          <circle cx="288" cy="360" r="4" fill="none" stroke="#2563EB" strokeWidth="2" />
          <circle cx="240" cy="554" r="5" fill="none" stroke="#7C3AED" strokeWidth="2" />
          <circle cx="614" cy="214" r="5" fill="none" stroke="#7C3AED" strokeWidth="2" />
          <circle cx="754" cy="64" r="6" fill="none" stroke="#7C3AED" strokeWidth="2" />
          <circle cx="712" cy="415" r="3" fill="#2563EB" />
        </g>

        {/* Connecting dashed lines (gentle flow animation) */}
        <g stroke={c.lineDash} strokeDasharray="4 5" strokeWidth="1.75" fill="none" opacity="0.7"
          style={{ animation: "dashflow 6s linear infinite" }}>
          <path d="M 280 234 Q 280 285 320 285" />
          <path d="M 514 260 L 514 190" />
          <path d="M 742 276 Q 742 322 686 322" />
          <path d="M 730 472 L 686 472" />
          <path d="M 292 438 L 326 438" />
        </g>

        {/* Center Laptop Component */}
        <g filter="url(#laptopShadow)">
          <rect x="336" y="276" width="336" height="224" rx="16" fill={c.laptopFrame} />
          <rect x="346" y="286" width="316" height="204" rx="6" fill={c.screenBg} />
          <circle cx="504" cy="281" r="2" fill="#475569" />
          <g>
            <circle cx="372" cy="318" r="10" fill="none" stroke="#7C3AED" strokeWidth="3" />
            <rect x="362" y="344" width="20" height="4" rx="2" fill="#7C3AED" opacity="0.8" />
            <rect x="362" y="358" width="20" height="4" rx="2" fill={c.textLight} />
            <rect x="362" y="372" width="20" height="4" rx="2" fill={c.textLight} />
            <rect x="362" y="386" width="20" height="4" rx="2" fill={c.textLight} />
            <line x1="396" y1="286" x2="396" y2="490" stroke={c.screenLine} strokeWidth="1.5" />
            <rect x="420" y="312" width="44" height="6" rx="3" fill={c.textMuted} opacity="0.5" />
            <rect x="420" y="326" width="70" height="4" rx="2" fill={c.textLight} />
            <g transform="translate(420, 320)">
              <path d="M 0 90 Q 30 50 60 75 T 120 50 T 180 15 T 220 5 L 220 110 L 0 110 Z" fill="url(#chartAreaGradient)" />
              <path d="M 0 90 Q 30 50 60 75 T 120 50 T 180 15 T 220 5" fill="none" stroke="url(#primaryGradient)" strokeWidth="3" strokeLinecap="round"
                style={{ strokeDasharray: 360, animation: "dashflow 8s linear infinite" }} />
              <circle cx="220" cy="5" r="4.5" fill="#06B6D4" stroke="#FFFFFF" strokeWidth="1.5" />
            </g>
            <circle cx="446" cy="460" r="14" fill="none" stroke={c.textLight} strokeWidth="4.5" />
            <circle cx="446" cy="460" r="14" fill="none" stroke="url(#primaryGradient)" strokeWidth="4.5" strokeDasharray="64 100" strokeDashoffset="15" strokeLinecap="round" />
            <rect x="472" y="454" width="24" height="4" rx="2" fill={c.textMuted} opacity="0.6" />
            <rect x="472" y="464" width="16" height="3" rx="1.5" fill={c.textLight} />
            <rect x="556" y="460" width="6" height="12" rx="2" fill="#2563EB" />
            <rect x="566" y="452" width="6" height="20" rx="2" fill="#2563EB" />
            <rect x="576" y="442" width="6" height="30" rx="2" fill="#7C3AED" />
            <rect x="596" y="448" width="5" height="24" rx="2" fill="#3A64FA" />
            <rect x="605" y="458" width="5" height="14" rx="1.5" fill="#7C3AED" />
            <rect x="586" y="455" width="6" height="17" rx="2" fill={c.textLight} />
          </g>
          <path d="M 304 498 L 704 498 C 716 498 722 504 710 512 L 672 517 C 665 518 341 518 334 517 L 296 512 C 284 504 292 498 304 498 Z" fill={c.laptopBase} />
          <path d="M 308 508 L 698 508 C 704 508 704 511 698 513 L 670 517 C 665 518 341 518 336 517 L 308 513 C 302 511 302 508 308 508 Z" fill={c.laptopBaseEdge} opacity="0.8" />
          <path d="M 466 499 L 542 499 C 545 499 545 502 542 503 L 534 503 C 532 503 476 503 474 503 L 466 503 C 463 502 463 499 466 499 Z" fill="rgba(20, 25, 40, 0.14)" />
        </g>

        {/* Cloud Node */}
        <g filter="url(#cloudGlow)" transform="translate(445, 110)">
          <path d="M 28 66 A 15 15 0 0 1 20 38 A 24 24 0 0 1 55 18 A 32 32 0 0 1 110 28 A 20 20 0 0 1 125 55 A 16 16 0 0 1 115 68 L 35 68 A 12 12 0 0 1 28 66 Z"
            fill="url(#cloudGradient)" stroke={c.cloudStroke} strokeWidth="2.5" strokeLinejoin="round" />
        </g>

        {/* Floating Cards */}
        <g filter="url(#softShadow)" transform="translate(206, 138)">
          <rect width="164" height="96" rx="20" fill={c.cardBg} stroke={c.cardStroke} strokeWidth="2" />
          <circle cx="56" cy="48" r="24" fill="none" stroke={c.innerPanel} strokeWidth="7.5" />
          <circle cx="56" cy="48" r="24" fill="none" stroke="url(#primaryGradient)" strokeWidth="7.5" strokeDasharray="105 150" strokeDashoffset="20" strokeLinecap="round" />
          <rect x="102" y="34" width="38" height="6" rx="3" fill={c.textDark} />
          <rect x="102" y="47" width="26" height="5" rx="2.5" fill={c.textMuted} />
          <rect x="102" y="58" width="16" height="4" rx="2" fill={c.textLight} />
        </g>

        <g filter="url(#softShadow)" transform="translate(672, 154)">
          <rect width="142" height="136" rx="20" fill={c.cardBg} stroke={c.cardStroke} strokeWidth="2" />
          <rect x="28" y="74" width="13" height="28" rx="4.5" fill="url(#primaryGradient)" />
          <rect x="49" y="56" width="13" height="46" rx="4.5" fill="url(#primaryGradient)" />
          <rect x="70" y="38" width="13" height="64" rx="4.5" fill="url(#primaryGradient)" />
          <rect x="91" y="20" width="13" height="82" rx="4.5" fill="url(#primaryGradient)" />
          <rect x="28" y="112" width="48" height="5" rx="2.5" fill={c.textLight} />
        </g>

        <g filter="url(#softShadow)" transform="translate(150, 410)">
          <rect width="132" height="104" rx="20" fill={c.cardBg} stroke={c.cardStroke} strokeWidth="2" />
          <path d="M 22 70 Q 42 36 62 60 T 106 30" fill="none" stroke="url(#primaryGradient)" strokeWidth="4" strokeLinecap="round" />
          <circle cx="106" cy="30" r="5" fill="#06B6D4" stroke="#FFFFFF" strokeWidth="1.5" />
          <rect x="22" y="84" width="32" height="4" rx="2" fill={c.textLight} />
          <rect x="60" y="84" width="20" height="4" rx="2" fill={c.textLight} />
        </g>

        <g filter="url(#softShadow)" transform="translate(748, 442)">
          <rect width="144" height="94" rx="20" fill={c.cardBg} stroke={c.cardStroke} strokeWidth="2" />
          <circle cx="48" cy="47" r="22" fill="none" stroke={c.innerPanel} strokeWidth="6" />
          <circle cx="48" cy="47" r="22" fill="none" stroke="url(#primaryGradient)" strokeWidth="6" strokeDasharray="100 140" strokeDashoffset="-15" strokeLinecap="round" />
          <rect x="88" y="36" width="36" height="6" rx="3" fill={c.textDark} />
          <rect x="88" y="49" width="22" height="5" rx="2.5" fill={c.textMuted} />
        </g>

        {/* Mini Nodes (Database / AI) */}
        <g filter="url(#softShadow)" transform="translate(180, 305)">
          <rect width="48" height="48" rx="14" fill={c.cardBg} stroke={c.cardStroke} strokeWidth="1.5" />
          <g fill="url(#primaryGradient)">
            <path d="M 16 19 C 16 16.5 32 16.5 32 19 C 32 21.5 16 21.5 16 19 Z" />
            <path d="M 16 22 L 16 25 C 16 27.5 32 27.5 32 25 L 32 22 C 32 24 16 24 16 22 Z" />
            <path d="M 16 28 L 16 31 C 16 33.5 32 33.5 32 31 L 32 28 C 32 30 16 30 16 28 Z" />
          </g>
        </g>

        <g filter="url(#softShadow)" transform="translate(752, 330)">
          <rect width="48" height="48" rx="14" fill={c.cardBg} stroke={c.cardStroke} strokeWidth="1.5" />
          <text x="24" y="31" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
            fontSize="15" fontWeight="bold" letterSpacing="0.5" textAnchor="middle" fill="url(#primaryGradient)">AI</text>
        </g>
      </svg>
    </div>
  );
}

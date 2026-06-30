/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light theme tokens
        canvas: "#f5f7fb",
        surface: "#ffffff",
        ink: "#0b1220",
        ink2: "#3a4660",
        muted: "#6b7794",
        line: "#e6eaf2",
        // Dark theme tokens (deep navy / charcoal, never pure black)
        "canvas-d": "#0a0e1a",
        "surface-d": "#121829",
        "ink-d": "#eaf0fb",
        "ink2-d": "#aab6cf",
        "muted-d": "#7d8aa5",
        "line-d": "#222c45",
        // Accents (shared)
        brand: "#3b6ef6",
        brand2: "#7c5cff",
        teal: "#0fb5ba",
        amber: "#f5a524",
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,18,32,0.04), 0 8px 24px rgba(11,18,32,0.06)",
        lift: "0 2px 4px rgba(11,18,32,0.05), 0 18px 40px rgba(11,18,32,0.10)",
        glow: "0 10px 30px -10px rgba(59,110,246,0.35)",
      },
      borderRadius: { xl2: "1.25rem" },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        floatslow: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(2deg)" },
        },
        drift: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
        pulseglow: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.6" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        floatslow: "floatslow 9s ease-in-out infinite",
        drift: "drift 40s linear infinite alternate",
        pulseglow: "pulseglow 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

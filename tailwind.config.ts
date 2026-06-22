import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Deep ink — used for dark bands, footer, primary text
        ink: {
          DEFAULT: "#0B0E16",
          900: "#0B0E16",
          800: "#11151F",
          700: "#191E2B",
          600: "#252B3B",
        },
        // Cool near-white base (intentionally not the cream cliché)
        paper: "#FAFAFB",
        // Single confident accent: electric indigo-violet
        accent: {
          DEFAULT: "#4D5DFB",
          50: "#EEF0FF",
          100: "#E0E3FF",
          400: "#6E7BFC",
          500: "#4D5DFB",
          600: "#3D49E6",
          700: "#2F39C4",
        },
        line: "#E7E8EE",
        "line-dark": "#222838",
        muted: "#5A6173",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      maxWidth: {
        container: "1200px",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,14,22,0.04), 0 12px 32px -12px rgba(11,14,22,0.12)",
        lift: "0 1px 2px rgba(11,14,22,0.06), 0 24px 56px -20px rgba(11,14,22,0.22)",
        glow: "0 0 0 1px rgba(77,93,251,0.18), 0 18px 50px -18px rgba(77,93,251,0.45)",
      },
      keyframes: {
        "marquee": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "shimmer": {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        shimmer: "shimmer 1.6s infinite",
      },
    },
  },
  plugins: [],
};

export default config;

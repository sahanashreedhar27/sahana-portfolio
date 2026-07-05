import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0d0d0d",
        card: "#161616",
        "card-2": "#1c1c1c",
        lime: "#e8ff00",
        text: "#f5f5f5",
        muted: "#888888",
        subtle: "#bbbbbb",
      },
      fontFamily: {
        sans: ["Space Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      borderColor: {
        DEFAULT: "rgba(255,255,255,0.09)",
        lime: "rgba(232,255,0,0.4)",
      },
      boxShadow: {
        "lime-glow": "0 0 30px rgba(232,255,0,0.35)",
      },
      keyframes: {
        pulse: { "50%": { opacity: "0.35" } },
      },
      animation: {
        "pulse-dot": "pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;

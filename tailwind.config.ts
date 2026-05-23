import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Olive/black backgrounds — inspired by CBC's deep moody base
        bg: {
          DEFAULT: "#15181C",        // near-black with a hint of warm olive
          elev: "#1C2024",
          elev2: "#252A30",
          deep: "#0E1013",
        },
        line: {
          DEFAULT: "#2A2F36",
          soft: "#1F242A",
        },
        text: {
          DEFAULT: "#EFEFE8",        // warm off-white (CBC's body text feel)
          mute: "#9A9A92",
          dim: "#5E5E55",
        },
        // Mint accent — CBC's signature seafoam green
        accent: {
          DEFAULT: "#A4E4B8",        // mint
          soft: "#7DB48E",
          deep: "#5C8E6E",
        },
        // Secondary accent — kept as a fallback for special moments
        gold: {
          DEFAULT: "#D4A84B",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "-apple-system", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "-apple-system", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "marquee-x": "marquee-x 30s linear infinite",
        "marquee-slow": "marquee-x 60s linear infinite",
        "fade-up": "fade-up 0.7s ease-out forwards",
      },
      keyframes: {
        "marquee-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

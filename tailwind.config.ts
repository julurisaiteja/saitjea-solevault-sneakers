import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        vault: {
          bg: "#0a0a0a",
          fg: "#f5f5f5",
          muted: "#9a9a9a",
          pink: "#ff4ecd",
          surface: "#121018",
          border: "#ffffff",
          hero: "#0a0a0a",
          cyan: "#40f3ff",
        },
      },
      fontFamily: {
        display: ["Archivo Black", "Impact", "sans-serif"],
        body: ["IBM Plex Sans", "system-ui", "sans-serif"],
      },
      keyframes: {
        stamp: { "0%": { transform: "scale(1.4) rotate(-12deg)", opacity: "0" }, "100%": { transform: "scale(1) rotate(-6deg)", opacity: "1" } },
        tick: { "0%": { opacity: "0.4" }, "50%": { opacity: "1" }, "100%": { opacity: "0.4" } },
        rise: { "0%": { opacity: "0", transform: "translateY(12px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
      },
      animation: {
        stamp: "stamp 0.45s cubic-bezier(0.2, 1.4, 0.4, 1) both",
        tick: "tick 1s ease-in-out infinite",
        rise: "rise 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;

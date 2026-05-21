/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "ui-sans-serif", "system-ui"],
        display: [
          '"Plus Jakarta Sans"',
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
        ],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        ink: "#07111f",
        navy: "#0b1220",
        panel: "#111c2f",
        surface: "rgba(15, 23, 42, 0.72)",
        surface2: "rgba(30, 41, 59, 0.78)",
        border: "rgba(203, 213, 225, 0.18)",
        base: "#f8fbff",
        soft: "#dbe7f6",
        muted: "#aebfd4",
        cyan: "#44dff7",
        blue: "#7ab7ff",
        violet: "#b69bff",
        mint: "#7fffd4",
        amber: "#ffd166",
      },
      boxShadow: {
        card: "0 28px 90px rgba(2, 6, 23, 0.36)",
        glow: "0 0 45px rgba(68, 223, 247, 0.18)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        float: "float 6s ease-in-out infinite",
        pulseSoft: "pulseSoft 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
  safelist: [
    "text-cyan",
    "text-blue",
    "text-violet",
    "bg-cyan/10",
    "border-cyan/30",
    "hover:border-cyan/50",
    "hover:bg-cyan/10",
    "text-amber",
    "text-emerald-200",
    "bg-emerald-400/12",
    "border-emerald-400/30",
  ],
};

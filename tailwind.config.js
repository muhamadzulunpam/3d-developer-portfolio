/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Latar gelap: hitam pekat sampai navy tua
        night: {
          950: "#030411",
          900: "#05081c",
          800: "#0a1030",
          700: "#111a44",
          600: "#1a2560",
        },
        // Aksen biru & ungu
        azure: {
          400: "#5b8cff",
          500: "#3b6fff",
          600: "#2450d4",
        },
        violet: {
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#6d3fd6",
        },
        cyanish: "#38e0ff",
        ink: "#c7d0f5",
        mute: "#8b96c4",
      },
      fontFamily: {
        // Stack sistem: aman tanpa CDN/font eksternal (penting di jaringan terbatas)
        sans: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: ["ui-monospace", "SFMono-Regular", "Cascadia Mono", "Consolas", "monospace"],
      },
      boxShadow: {
        glass: "0 8px 32px rgba(3, 4, 17, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
        "glow-azure": "0 0 24px rgba(59, 111, 255, 0.35)",
        "glow-violet": "0 0 28px rgba(139, 92, 246, 0.32)",
        card: "0 18px 45px rgba(5, 8, 28, 0.65)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(120,150,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(120,150,255,0.06) 1px, transparent 1px)",
        "aurora": "linear-gradient(120deg, #3b6fff 0%, #8b5cf6 45%, #38e0ff 100%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
        "spin-slow": "spin-slow 26s linear infinite",
      },
      transitionTimingFunction: {
        elegant: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      screens: {
        "3xl": "1680px",
      },
    },
  },
  plugins: [],
};

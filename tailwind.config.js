/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        coal: "#0c0a09",
        charcoal: "#161311",
        ember: "#f97316",
        flame: "#dc2626",
        gold: "#f5c15d",
      },
      boxShadow: {
        glow: "0 0 36px rgba(249, 115, 22, 0.22)",
        soft: "0 18px 70px rgba(0, 0, 0, 0.36)",
      },
      animation: {
        "fade-up": "fadeUp 700ms ease both",
        "soft-pulse": "softPulse 2.4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        softPulse: {
          "0%, 100%": { opacity: "0.74" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

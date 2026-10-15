/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        coal: "#14110f",
        charcoal: "#211c18",
        cream: "#f6f0e7",
        ember: "#c35c2c",
        flame: "#dc2626",
        gold: "#d8b780",
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

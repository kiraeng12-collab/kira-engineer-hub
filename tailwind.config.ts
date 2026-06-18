import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#0A0F1F",
        steel: "#111827",
        gold: "#F5C542",
        electric: "#3B82F6"
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        display: ["Poppins", "Inter", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;

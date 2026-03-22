import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#050505",
        charcoal: "#0f0f0f",
        graphite: "#1a1a1a",
        concrete: "#2d2d2d",
        steel: "#4a4a4a",
        fog: "#888888",
        mist: "#b0b0b0",
        bone: "#e8e6e1",
        amber: "#ff9500",
        oxide: "#c75b39",
        patina: "#5c7a6c",
        brass: "#b5a642",
      },
    },
  },
  plugins: [],
};

export default config;
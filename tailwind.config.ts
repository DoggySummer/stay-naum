import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        border: {
          gray01: "#727272",
          gray02: "#D9D9D9",
          gray03: "#CECECE",
        },
        background: {
          black: "#363636",
          gray01: "#D9D9D9",
          gray02: "#F1F1F1",
        },
        font: {
          black: "#363636",
          gray: "#808080",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

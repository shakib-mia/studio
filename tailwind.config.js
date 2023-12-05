/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      "clash-display": ["Clash Display", "sans-serif"],
    },
    fontSize: {
      xl: "84px",
      "heading-1": "72px",
      "heading-2": "64px",
      "heading-3": "28px",
      "heading-4": "24px",
      "heading-5": "20px",
      base: "18px",
      sm: "16px",
      xs: "14px",
    },
    colors: {
      primary: {
        DEFAULT: "#0B0A1F",
        light: "#1C1B2E",
      },
      secondary: {
        DEFAULT: "#4F3DFE",
        dark: "#2E25A9",
      },
      white: {
        DEFAULT: "#FFFFFF",
        20: "#FFFFFF33",
        30: "#FFFFFF4D",
      },
      grey: "#DDDDDD",
      black: {
        DEFAULT: "#000000",
        20: "#00000033",
      },

      transparent: "#00000000",
    },
    extend: {},
  },
  plugins: [],
};

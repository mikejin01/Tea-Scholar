import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#c1322f",
        "background-light": "#ffffff",
        "background-dark": "#121212",
        "surface-light": "#f8f9fa",
        "surface-dark": "#1e1e1e",
      },
      fontFamily: {
        // Clean neutral sans for body/UI (Gong Cha style); CJK falls back to Noto Serif
        sans: ['"Public Sans"', '"Noto Serif TC"', '"Noto Serif SC"', "system-ui", "sans-serif"],
        // High-contrast Didone serif for display headings (Gong Cha style)
        display: ['"Vidaloka"', '"Noto Serif TC"', '"Noto Serif SC"', "Georgia", "serif"],
        // Classical Song/Ming serif for Chinese brand text (TC covers 狀, 靜)
        serif: ['"Noto Serif TC"', '"Noto Serif SC"', "Georgia", "serif"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
      },
    },
  },
  plugins: [forms, typography],
};

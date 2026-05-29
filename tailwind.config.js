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
        // Elegant calligraphic serif for headings (imperial / scholarly feel)
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        // Classical Song/Ming-style serif for body + Chinese characters
        // (TC covers traditional glyphs like 狀; SC covers the rest + Latin)
        serif: ['"Noto Serif SC"', '"Noto Serif TC"', "Georgia", "serif"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
      },
    },
  },
  plugins: [forms, typography],
};

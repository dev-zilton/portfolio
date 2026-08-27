/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        surface: {
          DEFAULT: "rgb(var(--color-surface) / <alpha-value>)",
        },
        "surface-elevated": {
          DEFAULT: "rgb(var(--color-surface-elevated) / <alpha-value>)",
        },
        copy: {
          DEFAULT: "rgb(var(--color-copy) / <alpha-value>)",
        },
        "copy-muted": {
          DEFAULT: "rgb(var(--color-copy-muted) / <alpha-value>)",
        },
        glass: {
          DEFAULT: "rgb(var(--color-glass) / <alpha-value>)",
        },
        turquoise: {
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
        },
        "accent-purple": "#8b5cf6",
      },
      boxShadow: {
        "glow-turquoise": "0 0 28px rgba(45, 212, 191, 0.45)",
        "glow-turquoise-soft": "0 0 18px rgba(45, 212, 191, 0.25)",
      },
    },
  },
  plugins: [],
};

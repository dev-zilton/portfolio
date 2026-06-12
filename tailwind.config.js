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
          DEFAULT: "#0B1117",
          light: "#F8FAFC",
        },
        "surface-elevated": {
          DEFAULT: "#0F172A",
          light: "#FFFFFF",
        },
        copy: {
          DEFAULT: "#F3F4F6",
          light: "#111827",
        },
        "copy-muted": {
          DEFAULT: "#9CA3AF",
          light: "#6B7280",
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

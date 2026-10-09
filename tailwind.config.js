/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#f4f7f2",
          100: "#e6ede0",
          200: "#cddcc3",
          300: "#aac49a",
          400: "#84a86f",
          500: "#658c50",
          600: "#4f703e",
          700: "#405934",
          800: "#35472c",
          900: "#2d3c26",
          950: "#151f11",
        },
        cream: {
          50: "#fdfbf6",
          100: "#faf5e9",
          200: "#f4e9d0",
          300: "#ecd8a8",
        },
        terracotta: {
          500: "#c77b4f",
          600: "#b0623a",
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Manrope'", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(53, 71, 44, 0.25)",
      },
    },
  },
  plugins: [],
};

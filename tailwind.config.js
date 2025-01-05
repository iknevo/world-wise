/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#ffb545",
          green: "#00c46a",
        },
        dark: {
          1: "#242a2e",
          2: "#2d3429",
          3: "#42484d",
        },
        light: {
          1: "#aaa",
          2: "#ececec",
          3: "#d6dee0",
        },
      },
    },
    colors: {},
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    lineHeight: {
      relaxed: "1.6",
    },
  },
  plugins: [],
};

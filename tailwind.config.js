/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontSize: {
      lg: "1.2rem",
      xl: "1.5rem",
      "2xl": "1.6rem",
      xxl: "1.7rem",
    },
    extend: {
      spacing: { "70per": "70%", "80per": "80%" },
      padding: {
        0.8: "0.8rem",
        1.2: "1.2rem",
      },
      colors: {
        brand: {
          orange: "#ffb545",
          green: "#00c46a",
        },
        dark: {
          1: "#242a2e",
          2: "#2d3439",
          3: "#42484d",
        },
        light: {
          1: "#aaa",
          2: "#ececec",
          3: "#d6dee0",
        },
      },
    },
    colors: {
      inherit: "inherit",
    },
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
      inherit: "inherit",
    },
    lineHeight: {
      relaxed: "1.6",
    },
    borderWidth: {
      5: "5px",
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans serif"],
      },
      colors: {
        headerColor: "#252B42",
        primary: "#23A6F0",
        success: "#2DC071",
        secondTextColor: "#737373",
        bgGray: "#FAFAFA",
        muted: "#BDBDBD",
        secondary: "#23856D",
        alert: "#E77C40",
      },
      backgroundImage: {
        "header-bg": "url('./src/assets/header-bg.png')",
        "cat-men": "url('./src/assets/cat-men.png')",
        "cat-women": "url('./src/assets/cat-women.png')",
        "cat-kids": "url('./src/assets/cat-kids.png')",
        "cat-accessories": "url('./src/assets/cat-accessories.png')",
      },
    },
  },
  plugins: [],
};

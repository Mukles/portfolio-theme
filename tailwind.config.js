const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "13px",
        lg: "0",
      },
    },
    extend: {
      colors: {
        base: "#A3A5A7",
        heading: "#1D2043",
        primary: "#DF5646",
        light: "#FAFAFA",
      },
      fontFamily: {
        sans: ["Poppins", "Open Sans", ...defaultTheme.fontFamily.sans],
        title: [
          "Playfair Display",
          "Open Sans",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      screens: {
        xm: "376px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
      transitionProperty: {
        "transform-opacity": "transform, opacity",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};

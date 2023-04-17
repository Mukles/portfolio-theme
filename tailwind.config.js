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
        DEFAULT: "1rem",
        lg: "0",
      },
    },
    extend: {
      screens: {
        sm: { min: "576px" },
        md: { min: "768px" },
        lg: { min: "992px" },
        xl: { min: "1200px" },
      },
    },
  },
  plugins: [],
};

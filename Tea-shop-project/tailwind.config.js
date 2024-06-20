/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  screens: {
    xs: { max: "539px" },
    sm: { min: "540px", max: "639px" },
    md: { min: "640px", max: "767px" },
    lg: { min: "768px", max: "1023px" },
    xl: { min: "1024px", max: "1535px" },
    "2xl": { min: "1536px" },
  },
  theme: {
    extend: {
      colors: {
        black: "#020617",
        white: "#fff",
        lightGray: "#f1f5f9",
        gray: "#6b7280",
        orange: "#f59e0b",
        orderBackgroundLightGray: "#F4F4F4",
        orderBorderColor: "#A0A0A0",
      },
    },
  },
  plugins: [],
};

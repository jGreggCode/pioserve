/** @type {import('tailwindcss').Config} */
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#4F46E5", // Used as 'text-brand' or 'bg-brand'
          light: "#6366F1",
          dark: "#3730A3",
        },
        primary: "#0073ff", // 'text-primary' or 'bg-primary'
        dark: "#1f1f1f",
        accent: "#73b2ff",
      },
    },
  },
  plugins: [scrollbarHide],
};

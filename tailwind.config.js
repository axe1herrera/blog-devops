import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        sans: ['Alan Sans', 'sans-serif'], 
        serif: ['Lora', 'serif'],
      },
    },
  },
  plugins: [
    typography,
  ],
}
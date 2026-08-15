/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode:"class",
  theme: {
    extend: { 
      spacing:{
      "sidebar_width" : "350px",
      "navbar_height": "60px"
    }},
  },
  plugins: [],
}
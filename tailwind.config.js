/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        MerriWeather: ['Merriweather', 'serif'],
        Dots: ['Edu AU VIC WA NT Dots', 'cursive'],
        FatFace: ['Abril Fatface', 'serif'],
      },
      colors:{
        primary: '#f19509',
        primaryDark: "#e86f00",
        lightOrange: "#f1dabf",
        darkGray: "#1a1f25",
        lightGray: "#272c35",
        bgColor: 'bg-gradient-to-r from-cyan-500 to-blue-500',
        danger: '#e74c3c',
        success: '#27ae60',
      },
      container:{
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          
      }
    },
  },
  plugins: [
    require('daisyui'),
  ]
}}


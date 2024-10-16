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
    },
  },
  plugins: [
    require('daisyui'),
  ]
}


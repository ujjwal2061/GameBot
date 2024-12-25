/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        jetbrains: ['JetBrains Mono', 'monospace'],
        special:[' "Special Elite", system-ui'],
        atma:['Atma','serif'],
        bungee:['Bungee Spice'],
        carter:['Carter One'],
        silkscreen:['Silkscreen'],
        exo:['Exo']
      },
      boxShadow:{
        '3d-shadow': "3px 3px 10px rgba(0, 0, 0, 0.6), -3px -3px 10px rgba(0, 0, 0, 0.6), 6px 6px 20px rgba(0, 0, 0, 0.4)"
      }
      
    },
  },
  plugins: [],
}


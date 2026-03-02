/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cies: {
          mustard: '#E9C46A',
          desert: '#2A9D8F',
          charcoal: '#484747',
          deepBlue: '#264653',
          pearl: '#EDECEC',
          cyan: '#6EC6D8'
        }
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'], // Titles
        drama: ['"DM Serif Display"', 'serif'],     // Drama
        mono: ['"Space Mono"', 'monospace'],        // Data
      }
    },
  },
  plugins: [],
}

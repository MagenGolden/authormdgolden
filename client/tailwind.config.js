
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        'tablet': '880px',
        'center': '1200px',
      },
      colors: {
        'blue': '#00ffff',
        'green': '#7fff00',
        'orange': '#ffa500',
      },
      fontFamily: {
        geo: ['Geo'],
        atomic: ['Atomic Age'],
        orb: ['Orbitron'],
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    mode: 'jit',
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear 3s',
      }
    },
  },
  plugins: [
  ],
}
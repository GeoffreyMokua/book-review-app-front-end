/** @type {import('tailwindcss').Config} */
module.exports = {
  extend: {}, content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: ['@tailwindcss/aspect-ratio']
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow-color': '#fdf36e',
        'nav-gray-color': '#4E4C45',
        'terminal-color':'#2D0922',
      },
    },
  },
  plugins: [],
}
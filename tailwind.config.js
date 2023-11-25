/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ['Poppins', 'sans-serif'],
        "monts": ['Montserrat', 'sans-serif'],
        "notosans": ['Noto Sans Mandaic', 'sans-serif'],
      }
    },
  },
  plugins: {
    tailwindcss: { config: './src/components/form/tailwind.config.js' },
    autoprefixer: {},
  },
}


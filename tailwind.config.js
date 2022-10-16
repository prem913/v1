/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'textWhite':'#f9fafb',
        'textDark':'#6b7280',
        'textBlue':'#619bff',
          'textViolet':'#00008b'
      }
    },
  },
  plugins: [],
}

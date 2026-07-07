/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#faf8f5',
        ink: '#13120f',
        muted: '#726d63',
        brand: '#1f6f4a',
        deep: '#001d21',
        gold: '#f0c85a',
        pink: '#e8a1c4',
        sky: '#9db8e8',
        hairline: '#DBDBDB',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        heading: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

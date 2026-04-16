/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#f8f3ef',
          100: '#eeded1',
          200: '#e2c6ab',
          300: '#d4a57f',
          400: '#c58962',
          500: '#b26e47',
          600: '#935539',
          700: '#75422f',
          800: '#5a3326',
          900: '#3d2119',
        },
        cream: {
          50: '#fffdf8',
          100: '#fdf7ec',
          200: '#f6ebda',
        },
      },
      boxShadow: {
        glow: '0 10px 30px rgba(117, 66, 47, 0.15)',
      },
      backgroundImage: {
        texture:
          "radial-gradient(circle at top right, rgba(178,110,71,0.2), transparent 45%), radial-gradient(circle at 20% 20%, rgba(238,222,209,0.35), transparent 35%)",
      },
    },
  },
  plugins: [],
}

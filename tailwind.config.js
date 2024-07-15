import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Add this line to include all JS, JSX, TS, and TSX files in the src directory
    './public/index.html',   
  ],
  theme: {
    extend: {
      fontFamily: {
          sans: ['Figtree', ...defaultTheme.fontFamily.sans],
          roboto: ['Roboto', 'sans-serif'],
          tajawal: ['Tajawal', 'sans-serif']
      },
  },
  },
  plugins: [forms],
}


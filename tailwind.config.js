/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        tomato: {
          light: '#FFA07A',
          DEFAULT: '#FF6347',
          dark: '#E55339',
        },
        emerald: {
          light: '#66E6A9',
          DEFAULT: '#2ECC71',
          dark: '#239E5E',
        },
        yellow: {
          pastel: '#FFF9C4',
          DEFAULT: '#F4D03F',
          golden: '#D4AC0D',
        },
        gray: {
          light: '#95A5A6',
          DEFAULT: '#2C3E50',
          dark: '#1C2833',
        },
        neutral: {
          white: '#FFFFFF',
          lightGray: '#ECF0F1',
          black: '#34495E',
        },
      },

      fontFamily: {
        lobster: ['Lobster', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#004B87',
          dark: '#002A4D'
        },
        silver: {
          DEFAULT: '#C9E6FF',
          light: '#E8F4FF'
        },
        dark: {
          bg: '#0a0a0a',
          surface: '#1f1f1f',
          text: '#ffffff'
        }
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      spacing: {
        '2': '8px',
        '4': '16px',
        '8': '32px',
        '16': '64px',
      },
      borderRadius: {
        DEFAULT: '8px',
        'btn': '4px',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
      },
    },
  },
  plugins: [],
};
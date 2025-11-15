/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#004B87',
          dark: '#002A4D',
          darker: '#001a33'
        },
        silver: {
          DEFAULT: '#C9E6FF',
          light: '#E8F4FF',
          lighter: '#F0F8FF'
        },
        golden: {
          light: '#FFF4E6',
          DEFAULT: '#F5A623',
          dark: '#E8931A',
          darker: '#D68910',
          luxury: '#FFD700',
          'luxury-dark': '#D4AF37'
        },
        dark: {
          bg: '#0a0a0a',
          surface: '#1f1f1f',
          'card-bg': '#151515',
          text: '#ffffff',
          'luxury-bg': '#050505',
          'luxury-surface': '#1a1a1a'
        },
        luxury: {
          gold: '#D4AF37',
          'gold-light': '#F4E4BC',
          'gold-dark': '#B8941F',
          platinum: '#E5E4E2',
          'platinum-dark': '#B8B6B4',
          diamond: '#B9F2FF',
          'diamond-dark': '#7DD3FC'
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
        DEFAULT: '12px',
        'btn': '8px',
        'luxury': '16px',
        'luxury-lg': '24px'
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px'
      },
      boxShadow: {
        'luxury': '0 20px 60px -15px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'luxury-lg': '0 25px 80px -20px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'luxury-gold': '0 20px 60px -15px rgba(212, 175, 55, 0.2), 0 0 0 1px rgba(212, 175, 55, 0.1)',
        'luxury-gold-lg': '0 25px 80px -20px rgba(212, 175, 55, 0.3), 0 0 0 1px rgba(212, 175, 55, 0.15)',
        'inner-luxury': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.05)'
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        'luxury-gradient-dark': 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(255, 255, 255, 0.03) 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.4), transparent)'
      }
    },
  },
  plugins: [],
};
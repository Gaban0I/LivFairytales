import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fdf2f7',
          100: '#fbe7f1',
          200: '#f6cfe3',
          300: '#efaccf',
          400: '#e27bb2',
          500: '#d5599d',
          600: '#c1468d',
        },
        lavender: {
          50: '#f6f4fb',
          100: '#ebe7f8',
          200: '#d4cdf0',
          300: '#b6abe4',
          400: '#967fd5',
          500: '#7b5ac8',
        },
        skysoft: {
          50: '#f3f9fd',
          100: '#e6f2fb',
          200: '#cbe5f6',
          300: '#9ed0f0',
          400: '#6fb9e6',
          500: '#4fa1dc',
        },
        gold: {
          50: '#fff7e0',
          100: '#fdecc2',
          200: '#f6d889',
          300: '#e9c054',
          400: '#d3a632',
          500: '#b68a1c',
        },
        night: {
          700: '#2f2a3a',
          800: '#241f2d',
          900: '#1b1723',
        },
      },
      fontFamily: {
        title: ['var(--font-title)', 'Georgia', 'serif'],
        accent: ['var(--font-accent)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.75rem',
        '3xl': '2.25rem',
      },
      boxShadow: {
        magic: '0 20px 50px -30px rgba(60, 40, 90, 0.35)',
        glow: '0 0 25px rgba(211, 166, 50, 0.25)',
      },
      backgroundImage: {
        'soft-gradient': 'linear-gradient(135deg, rgba(253,242,247,0.9) 0%, rgba(235,231,248,0.9) 50%, rgba(230,242,251,0.9) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;

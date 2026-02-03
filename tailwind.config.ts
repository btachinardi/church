import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cathedral: {
          dark: '#0a0a0f',
          deep: '#12121a',
          mid: '#1a1a2e',
        },
        gold: {
          dim: '#8b7320',
          DEFAULT: '#d4a844',
          bright: '#f0d060',
          glow: '#ffd700',
        },
        holy: {
          purple: '#6b21a8',
          violet: '#4c1d95',
        },
        blood: {
          DEFAULT: '#8b1a1a',
          bright: '#dc2626',
        },
        parchment: '#f4e8c1',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(212, 168, 68, 0.3)',
        'glow-lg': '0 0 40px rgba(212, 168, 68, 0.4)',
        'glow-intense': '0 0 60px rgba(212, 168, 68, 0.6)',
      },
      animation: {
        'flicker': 'flicker 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

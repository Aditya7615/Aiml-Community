/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        primary: {
          dark: '#0f0f1c',
          DEFAULT: '#1a1a2e',
          light: '#282844',
        },
        neon: {
          cyan: '#0ff',
          magenta: '#ff00f7',
          blue: '#3300ff',
        },
        dark: {
          900: '#0f0f1c',
          800: '#16162b',
          700: '#1e1e37',
          600: '#2a2a4a',
        }
      },
      boxShadow: {
        'neon-cyan': '0 0 5px #0ff, 0 0 20px rgba(0, 255, 255, 0.3)',
        'neon-magenta': '0 0 5px #ff00f7, 0 0 20px rgba(255, 0, 247, 0.3)',
        'neon-blue': '0 0 5px #3300ff, 0 0 20px rgba(51, 0, 255, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'cyber-grid': '50px 50px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.2)' },
          '100%': { boxShadow: '0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.4)' },
        }
      }
    },
  },
  plugins: [],
};
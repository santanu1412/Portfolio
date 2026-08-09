/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#090C15',
          deep: '#060911',
          mid: '#0D111D',
          light: '#131829',
        },
        ether: {
          DEFAULT: '#00F0FF',
          dim: '#00A5B0',
          glow: 'rgba(0, 240, 255, 0.15)',
          ghost: 'rgba(0, 240, 255, 0.06)',
        },
        spirit: {
          DEFAULT: '#FF2A85',
          dim: '#B01D5C',
          glow: 'rgba(255, 42, 133, 0.15)',
        },
        quantum: {
          DEFAULT: '#FFD700',
          dim: '#B89B00',
          glow: 'rgba(255, 215, 0, 0.15)',
        },
        glass: {
          DEFAULT: 'rgba(18, 24, 38, 0.7)',
          light: 'rgba(18, 24, 38, 0.5)',
          dark: 'rgba(10, 14, 22, 0.85)',
          border: 'rgba(0, 240, 255, 0.12)',
          'border-bright': 'rgba(0, 240, 255, 0.3)',
        },
        hud: {
          text: '#E0E8F8',
          'text-dim': '#7889A8',
          'text-ghost': '#445570',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
        display: ['"Orbitron"', '"Rajdhani"', 'sans-serif'],
        body: ['"Inter"', '"Segoe UI"', 'sans-serif'],
      },
      animation: {
        'glitch': 'glitch 3s infinite',
        'glitch-fast': 'glitch 0.5s infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'scan-line': 'scan-line 4s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'reticle-spin': 'reticle-spin 8s linear infinite',
        'reticle-spin-reverse': 'reticle-spin 12s linear infinite reverse',
        'border-flow': 'border-flow 3s linear infinite',
        'typing-cursor': 'typing-cursor 1s step-end infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'energy-fill': 'energy-fill 1.5s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'diagonal-shine': 'diagonal-shine 0.6s ease',
      },
      keyframes: {
        'glitch': {
          '0%, 90%, 100%': { transform: 'translate(0)', opacity: '1' },
          '92%': { transform: 'translate(-2px, 1px)', opacity: '0.8' },
          '94%': { transform: 'translate(2px, -1px)', opacity: '0.9' },
          '96%': { transform: 'translate(-1px, -1px)', opacity: '0.85' },
          '98%': { transform: 'translate(1px, 1px)', opacity: '0.95' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0,240,255,0.3), 0 0 20px rgba(0,240,255,0.1)' },
          '50%': { boxShadow: '0 0 15px rgba(0,240,255,0.6), 0 0 40px rgba(0,240,255,0.2)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'reticle-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'border-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        'typing-cursor': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'energy-fill': {
          '0%': { width: '0%' },
          '100%': { width: 'var(--fill-width)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'diagonal-shine': {
          '0%': { left: '-100%' },
          '100%': { left: '200%' },
        },
      },
      backgroundImage: {
        'ether-gradient': 'linear-gradient(135deg, #00F0FF 0%, #00A5B0 100%)',
        'spirit-gradient': 'linear-gradient(135deg, #FF2A85 0%, #B01D5C 100%)',
        'quantum-gradient': 'linear-gradient(135deg, #FFD700 0%, #FF8C00 100%)',
        'void-gradient': 'linear-gradient(180deg, #090C15 0%, #0D111D 50%, #131829 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(0,240,255,0.05) 0%, rgba(255,42,133,0.03) 100%)',
      },
      boxShadow: {
        'ether': '0 0 20px rgba(0, 240, 255, 0.3), 0 0 60px rgba(0, 240, 255, 0.1)',
        'ether-sm': '0 0 10px rgba(0, 240, 255, 0.2)',
        'spirit': '0 0 20px rgba(255, 42, 133, 0.3), 0 0 60px rgba(255, 42, 133, 0.1)',
        'quantum': '0 0 20px rgba(255, 215, 0, 0.3), 0 0 60px rgba(255, 215, 0, 0.1)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
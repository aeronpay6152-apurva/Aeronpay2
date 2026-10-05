/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin': 'spin 3s linear infinite',
        'spinReverse': 'spinReverse 24s linear infinite',
        'glowPulse': 'glowPulse 2s ease-in-out infinite',
        'colorfulGlow': 'colorfulGlow 4s ease-in-out infinite',
        'floatGlow': 'floatGlow 3s ease-in-out infinite',
        'radiusGlow': 'radiusGlow 2.5s ease-in-out infinite',
      },
      keyframes: {
        spinReverse: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(-360deg)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px currentColor, 0 0 40px currentColor, inset 0 0 20px rgba(255, 255, 255, 0.1)' },
          '50%': { boxShadow: '0 0 30px currentColor, 0 0 60px currentColor, inset 0 0 30px rgba(255, 255, 255, 0.2)' },
        },
        colorfulGlow: {
          '0%': { filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.8))' },
          '25%': { filter: 'drop-shadow(0 0 15px rgba(245, 158, 11, 0.8))' },
          '50%': { filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.8))' },
          '75%': { filter: 'drop-shadow(0 0 15px rgba(236, 72, 153, 0.8))' },
          '100%': { filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.8))' },
        },
        floatGlow: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)', filter: 'drop-shadow(0 0 15px currentColor)' },
          '50%': { transform: 'translateY(-10px) scale(1.02)', filter: 'drop-shadow(0 0 25px currentColor)' },
        },
        radiusGlow: {
          '0%, 100%': { boxShadow: '0 0 20px currentColor, 0 0 40px currentColor', filter: 'brightness(1)' },
          '50%': { boxShadow: '0 0 30px currentColor, 0 0 60px currentColor, inset 0 0 20px rgba(255, 255, 255, 0.15)', filter: 'brightness(1.1)' },
        },
      },
    },
  },
}

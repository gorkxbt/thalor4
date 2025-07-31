/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'thalor-blue': {
          50: '#e6f3ff',
          100: '#d4e6f7',
          200: '#b8d4f0',
          300: '#a8c4e8',
        }
      },
      animation: {
        'gradient-shift': 'gradientShift 8s ease infinite',
        'float1': 'float1 6s ease-in-out infinite',
        'float2': 'float2 8s ease-in-out infinite',
        'float3': 'float3 7s ease-in-out infinite',
        'float4': 'float4 9s ease-in-out infinite',
        'float5': 'float5 11s ease-in-out infinite',
        'float6': 'float6 13s ease-in-out infinite',
        'float7': 'float7 10s ease-in-out infinite',
      },
      keyframes: {
        gradientShift: {
          '0%': { backgroundPosition: '0% 0%' },
          '25%': { backgroundPosition: '100% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
          '75%': { backgroundPosition: '0% 100%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
        float1: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg) scale(1)' },
          '50%': { transform: 'translateY(-50px) rotate(180deg) scale(1.2)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0px) scale(1) translateX(0px)' },
          '50%': { transform: 'translateY(-60px) scale(1.3) translateX(30px)' },
        },
        float3: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-40px) translateX(-30px) rotate(90deg)' },
        },
        float4: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-35px) scale(1.4)' },
        },
        float5: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg) translateX(0px)' },
          '50%': { transform: 'translateY(-45px) rotate(120deg) translateX(25px)' },
        },
        float6: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-30px) scale(1.5)' },
        },
        float7: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-55px) translateX(-20px)' },
        },
      },
    },
  },
  plugins: [],
} 
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scrollReverse: { 
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        scroll: 'scroll 15s linear infinite',
        scrollReverse: 'scrollReverse 15s linear infinite',
      },
      backgroundImage: {
        'edumoon-gradient': 'linear-gradient(90deg, #4CAF50 0%, #2C3E50 100%)',
        'edumoon-gradient2': 'linear-gradient(90deg, #FF7E5F, #FEB47B, #FF6A00)',
        'edumoon-gradient3': 'linear-gradient(135deg, #4CAF50 50%, #2C3E50 50%)',
      }
    },
  },
  plugins: [],
}

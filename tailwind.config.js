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
    },
  },
  plugins: [],
<<<<<<< HEAD
};
=======
};
>>>>>>> 341ea845dc52b14e343a85e4b4718acdb2a8cbbf

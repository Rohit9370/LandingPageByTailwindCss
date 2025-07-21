/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        scrollLTR: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        scrollRTL: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        'scroll-ltr': 'scrollLTR 20s linear infinite',
        'scroll-rtl': 'scrollRTL 20s linear infinite',
      },
    },
  },
  plugins: [],
};

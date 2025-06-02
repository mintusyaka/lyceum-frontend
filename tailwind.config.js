/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
  animation: {
    gradient: "gradient 3s ease infinite",
  },
  keyframes: {
    gradient: {
      "0%, 100%": { backgroundPosition: "0% 50%" },
      "50%": { backgroundPosition: "100% 50%" },
    },
  },
  backgroundSize: {
    gradient: '200% 200%',
  },
},

    },
  },
  plugins: [],
}

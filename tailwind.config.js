export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // if using app router
  ],
  theme: {
    extend: {
      fontFamily: {
        blood: ['var(--font-blood)'],
    },
    },
  },
  plugins: [],
}

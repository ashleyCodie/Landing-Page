module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          600: '#0D9488',
          700: '#0C827A',
        },
        slate: {
          800: '#1E293B',
          700: '#334155',
          500: '#64748B',
          400: '#94A3B8',
        },
        gray: {
          100: '#F8FAFC',
        },
      },
      fontFamily: {
        inter: ['Inter', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

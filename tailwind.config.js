module.exports = {
  content: ["sources/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        kalam: ['Kalam', 'cursive']
      },
      'colors': {
        'brand-purple': '#230A1E',
        'brand-pink': '#FC278F'
      },
      screens: {
        'xs': '350px',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        'xxl': '1400px',
      }
    },
  },
  plugins: [],
}

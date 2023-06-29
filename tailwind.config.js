module.exports = {
  content: [
    './templates/**/*.html',
    // Allow the custom form style from youtify.utils
    './youtify/utils.py',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
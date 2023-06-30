module.exports = {
  content: [
    './templates/**/*.html',
    // Allow the custom form style from youtify.utils
    './youtify/utils.py',
    './static/player.css',
    './static/playlist.css'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
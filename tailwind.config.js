/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'media768': '768px',
        'media900':'900px',
        'media560':'560px'
        },
    },
  },
  plugins: [],
};



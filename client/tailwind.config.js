/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['arial', 'system-ui'],
      'serif': ['Times New Roman','ui-serif', 'Georgia']
    }
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend:
    {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'primary-background-color': 'var(--primary-background-color)',
        'secondary-background-color': 'var(--secondary-background-color)',
        'primary-color': 'var(--primary-color)',
        'nav-text-color': 'var(--nav-text-color)',
        'text-color': 'var(--text-color)',
        'primary-border-color': 'var(--primary-border-color)',
        'secondary-border-color': 'var(--secondary-border-color)',
      }
    },
  },
  plugins: [],
}


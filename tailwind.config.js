/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {

      'font-blue': 'var(--font-blue)',
      'font-primary-black': 'var(--font-primary-black)',
      'font-secondary-black': 'var(--font-secondary-black)',
      'font-white': '#fff',

      'gray': '#F2F3F7',
    }
  },
  plugins: [],
}

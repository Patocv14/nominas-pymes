/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      'primary': '#003263',
      'secondary': '#A96C71',
      'gray': '#747474',
      'brown': '#26180A',
      'white-bg': '#F9F9F9',
      'gray-bg': '#9E9E9E',
      'black': '#28282D'
    },
    fontFamily: {
      'primary': ['Khand', 'sans-serif'],
      'secondary': ['Montserrat', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero': "url('/images/hero.webp')",
        'bg-image': "url('/images/bg.webp')"
      }
    },
  },
  plugins: [],
};
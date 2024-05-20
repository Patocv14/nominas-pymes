/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      'primary': '#FA7900',
      'secondary': '#B44000',
      'gray': '#747474',
      'brown': '#26180A',
      'white-bg': '#F9F9F9',
      'gray-bg': '#9E9E9E',      
    },
    fontFamily: {
      'primary': ['Khand', 'sans-serif'],
      'secondary': ['Montserrat', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero': "url('/images/hero.jpg')",
      }
    },
  },
  plugins: [],
};
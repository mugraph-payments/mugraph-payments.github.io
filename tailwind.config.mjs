/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      'background': 'hsl(240, 10%, 3.9%)',
      'header': '#fafafa',
      'paragraph': '#a1a1aa',
    },
    extend: {},
  },
  plugins: [],
};

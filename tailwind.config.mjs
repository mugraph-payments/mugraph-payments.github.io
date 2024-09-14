/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(240, 10%, 3.9%)",
        header: "hsl(226deg, 64%, 98%)",
        paragraph: "hsl(226deg, 64%, 88%)",
        sub: "hsl(228deg, 24%, 72%)",
        inverted: "hsl(228deg, 24%, 10%)",
      },
    },
  },
  plugins: [],
};

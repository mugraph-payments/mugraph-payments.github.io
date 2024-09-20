import eslintPluginAstro from "eslint-plugin-astro";
export default [
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // Override/add rules settings here
    },
  },
];

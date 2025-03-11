import tailwindcss from 'eleventy-plugin-tailwindcss-4'

export default (eleventyConfig) => {
  eleventyConfig.addPlugin(tailwindcss, {
    input: './src/css/tailwind.css',
    output:'./dist/styles.css'
  });
};

export const config = {
  htmlTemplateEngine: "njk",
  dir: {
    input: "src",
    output: "dist"
  },
};
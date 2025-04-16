import tailwindcss from 'eleventy-plugin-tailwindcss-4'

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default (eleventyConfig) => {
  eleventyConfig.addPlugin(tailwindcss, {
    input: 'css/tailwind.css' 
  } );

};

export const config = {
  htmlTemplateEngine: "njk",
  dir: {
    input: "src",
    output: "dist"
  },
};
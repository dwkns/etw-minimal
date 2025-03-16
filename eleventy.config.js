import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";
import tailwindcss from '@tailwindcss/vite'

export default (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({"src/css/tailwind.css":"styles.css"});

	eleventyConfig.addPlugin(EleventyVitePlugin, { 
    viteOptions: { plugins: [tailwindcss()] } 
  });

};

export const config = {
  htmlTemplateEngine: "njk",
  dir: {
    input: "src",
    output: "dist"
  },
};
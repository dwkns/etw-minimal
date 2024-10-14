

export default (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({
    "src/styles/main.css": "./main.css",
  });

  return {
    dir: {
      input: "src",
      output: "dist"
    },
  };
};
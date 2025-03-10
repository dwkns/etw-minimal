import { execSync } from 'child_process'

export default (eleventyConfig) => {
  eleventyConfig.addWatchTarget('src/styles/tailwind.css');
  eleventyConfig.on("eleventy.after", () => {
    execSync(
      `npx @tailwindcss/cli -i ${'src/styles/tailwind.css'} -o ${'dist/styles.css'}`
    );
  });
  eleventyConfig.setServerOptions({
    watch: ['dist/styles.css']
  })
};

export const config = {
  dir: {
    input: "src",
    output: "dist",
  },
};
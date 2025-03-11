# Minimal repo with 11ty and Tailwind 4
Useful for tracking down bugs

`yarn && yarn dev` to install and run.

## Overview
Tailwind builds are triggered in `eleventy.after` which compiles a source CSS file `src/styles/tailwind.css` into the output folder `dist/styles.css`.

Breaking it down...

```js
import { execSync } from 'child_process'

export default (eleventyConfig) => {
  // watch the source file incase you made additions to it
  eleventyConfig.addWatchTarget('src/styles/tailwind.css');
  
  // Hook into `eleventy.after` to run the tailwindcss CLI command
  // This compiles your tailwind source file into final css in the output folder
  eleventyConfig.on("eleventy.after", () => {
    execSync(
      `npx @tailwindcss/cli -i ${'src/styles/tailwind.css'} -o ${'dist/styles.css'}`
    );
  });

  // Tell the dev server to watch the output for changes and reload when it sees them.
  // This is required because Eleventy reloads the dev server before `npx @tailwindcss/cli` finishes. 
  // Otherwise you have to manually refresh the browser. 
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
```

## Issues
The dev server reloads twice. Havn't found a good way round this yet.

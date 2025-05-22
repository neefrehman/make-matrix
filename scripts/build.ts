import { type Options, defineConfig } from "tsdown";

const baseConfig: Options = {
  entry: ["src/index.ts"],
  format: ["cjs", "es"],
  platform: "neutral",
};

export default defineConfig([
  {
    ...baseConfig,
    sourcemap: true,
  },
  {
    ...baseConfig,
    minify: true,
    outExtensions: ({ format }) => ({
      js: format === "es" ? ".min.js" : `.min.${format}`,
    }),
  },
]);

import { defineConfig, Options } from "tsup";

const baseConfig: Options = {
  entry: ["src/index.ts"],
  splitting: true,
  treeshake: true,
  format: ["cjs", "esm"],
};

export default defineConfig([
  {
    ...baseConfig,
    dts: true,
    clean: true,
  },
  {
    ...baseConfig,
    minify: "terser",
    outExtension: ({ format }) => ({
      js: format === "esm" ? `.min.js` : `.min.${format}`,
    }),
  },
]);

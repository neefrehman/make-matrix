import { defineConfig } from "tsdown";

export const buildConfig = defineConfig({
  entry: ["src/index.ts"],
  format: ["es"],
  platform: "neutral",
  sourcemap: true,
});

export default buildConfig;

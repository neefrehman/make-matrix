/**
 * Script that will get the current version number and minzipped size of the package,
 * And use them to update the badges in this repo's README. I'm doing this in response
 * to issues with the runtime-determined badges that I used to use: they weren't that
 * accurate and would often not load. Upfronting this badge generation to time of
 * versioning is more reliable.
 *
 * @remarks
 * This work was initially planned to be shell-only, but due to some issues getting `sed`
 * to work, performing the write in javascript was a more reliable option.
 */

import { exec } from "node:child_process";
import * as fs from "node:fs";
import { promisify } from "node:util";

import { build } from "tsdown";

import packageJson from "../package.json" with { type: "json" };
import { buildConfig } from "./build.ts";

const execAsync = promisify(exec);
const getStdOut = async (sh: string) => (await execAsync(sh)).stdout.trim();

const main = async () => {
  const currentReadme = fs.readFileSync("./README.md", "utf-8");

  await build({
    ...buildConfig,
    filter: undefined, // required to avoid type error
    minify: true,
    sourcemap: false,
    dts: false,
    outDir: "tmp",
    outExtensions: () => ({ js: ".min.js" }),
  });

  const newMinzippedSize = await getStdOut(
    "gzip tmp/index.min.js -kf && wc -c < tmp/index.min.js.gz"
  );

  const newReadme = currentReadme
    .replace(/v(\d+\.)?(\d+\.)?(\*|\d+)/, `v${packageJson.version}`)
    .replace(/\d+_B/, `${newMinzippedSize}_B`);

  fs.writeFileSync("./README.md", newReadme);
};

main();

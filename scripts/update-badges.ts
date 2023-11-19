/**
 * Script that will get the current version number and minzipped size of the package,
 * And use them to update the badges in this repo's README. I'm doing this in response
 * to issues with the runtime-determined badges that I used to use: they weren't that
 * accurate and would often not load. Upfronting this badge generation to time of
 * versioning is more reliable.
 *
 * @remarks
 * This work was initially planned to be shell-only, but due to some getting `sed` to
 * work, performing the write in javascript was a more reliable option.
 */

import * as fs from "node:fs";
import { exec } from "node:child_process";
import { promisify } from "node:util";

const execAsync = promisify(exec);
const getStdOut = async (sh: string) => (await execAsync(sh)).stdout.trim();

/*
 * With sed command that I couldn't quite get the regex working for:
 * grep -m 1 \"version\" package.json | awk -F: '{ print $2 }' | sed 's/[",]//g' | (read VERSION && sed -i '' "/v(\d+\.)?(\d+\.)?(\*|\d+)/v$VERSION/" README.md)
 */
const getVersionCommand = `grep -m 1 \"version\" package.json | awk -F: '{ print $2 }' | sed 's/[",]//g'`;

/*
 * With sed command that I couldn't quite get the regex working for:
 * gzip dist/index.min.js -kf && wc -c < dist/index.min.js.gz | (read MINZIPPED_SIZE && sed -i '' "s/\d+_B/$MINZIPPED_SIZE\_B/" README.md)
 */
const getMinZippedSizeCommand = `gzip dist/index.min.js -kf && wc -c < dist/index.min.js.gz`;

const main = async () => {
  const currentReadme = fs.readFileSync("./README.md", "utf-8");

  const newVersion = await getStdOut(getVersionCommand);
  const newMinzippedSize = await getStdOut(getMinZippedSizeCommand);

  const newReadme = currentReadme
    .replace(/v(\d+\.)?(\d+\.)?(\*|\d+)/, `v${newVersion}`)
    .replace(/\d+_B/, `${newMinzippedSize}_B`);

  fs.writeFileSync("./README.md", newReadme);
};

main();

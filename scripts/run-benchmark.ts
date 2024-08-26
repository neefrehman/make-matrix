import * as fs from "fs";
import { context, getOctokit } from "@actions/github";
import benny from "benny";
import { makeMatrix } from "../src/index.js";
import packageJson from "../package.json" with { type: "json" };

const { name: packageName, version } = packageJson;

const isDiff = process.argv[2] === "diff";
const isInCI = process.argv[3] === "ci";
const file = `${packageName}-${isInCI ? "ci" : "local"}`;

const directionEmojiMapping = { [-1]: "🚨", 0: "🔄", 1: "✅" };
const getDirection = (diff: number) => (diff > 0 ? 1 : diff < 0 ? -1 : 0);
const getEmoji = (diff: number) => directionEmojiMapping[getDirection(diff)];

type Diff = {
  name: string;
  delta: number;
  old?: number | undefined;
  new?: number;
};

benny
  .suite(
    "make-matrix",
    benny.add("base", () => {
      makeMatrix([2, 4, 2, 4, 2]);
    }),
    benny.add("with callback", () => {
      makeMatrix([2, 4, 2, 4, 2], vector => `my position is ${vector.join()}`);
    }),
    benny.cycle(),
    benny.complete(),
    isDiff ? { name: "skip" } : benny.save({ file, version })
  )
  .then(async ({ results }) => {
    if (!isDiff || !fs.existsSync(`./benchmark/results/${file}.json`)) {
      return;
    }

    const oldBenchmarkText = fs.readFileSync(`./benchmark/results/${file}.json`);
    const oldBenchmark = JSON.parse(oldBenchmarkText.toString());
    const oldResults: typeof results = oldBenchmark.results;

    const diffs: Diff[] = results.map(result => {
      const oldRes = oldResults.find(oldResult => oldResult.name === result.name);
      const delta = oldRes ? ((result.ops - oldRes.ops) / oldRes.ops) * 100 : 0;
      return { name: result.name, delta, old: oldRes?.ops, new: result.ops };
    });

    const changed = diffs.filter(item => item.delta !== 0);
    const average = changed.reduce((a, b) => a + b.delta, 0) / changed.length;
    diffs.push({ name: "Average", delta: average });

    const prettyDiffs = diffs.map(diff => ({
      ...diff,
      new: diff.new ? `${diff.new.toLocaleString()} ops/s` : "",
      old: diff.old ? `${diff.old.toLocaleString()} ops/s` : "",
      delta: `${getEmoji(diff.delta)} ${diff.delta.toFixed(2)}% ${
        diff.delta > 0 ? "faster" : diff.delta < 0 ? "slower" : "same"
      }`,
    }));

    /* eslint-disable no-console */
    console.log("\n");
    console.log(`Benchmark against currently published version (${version}):\n`);
    console.table(
      prettyDiffs.reduce<{ [name: string]: Record<string, string> }>(
        (acc, { name, ...diff }) => {
          acc[name] = diff;
          return acc;
        },
        {}
      ),
      ["new", "old", "delta"]
    );
    /* eslint-enable no-console */

    if (!isInCI || !process.env.GITHUB_TOKEN) {
      return;
    }

    const body = ["### Benchmark against currently published version:"];
    body.push("| Key  | Current PR | Published version | Difference |");
    body.push("| :--- | :--------: | :---------------: | :--------: |");
    prettyDiffs.forEach(diff => {
      body.push(`| ${diff.name} | ${diff.new}| ${diff.old} | ${diff.delta} |`);
    });

    await getOctokit(process.env.GITHUB_TOKEN).rest.issues.createComment({
      issue_number: context.issue.number,
      owner: context.repo.owner,
      repo: context.repo.repo,
      body: body.join("\n"),
    });
  });

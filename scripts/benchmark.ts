/* eslint-disable no-console */
import * as fs from "fs";
import { context, getOctokit } from "@actions/github";
import benny from "benny";
import makeMatrix from "../src/index";
import { name as packageName, version } from "../package.json";

const isDiff = process.argv[2] === "diff";
const isInPullRequestAction = process.argv[3] === "ci";

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
        benny.add("nDimensions", () => {
            makeMatrix(6);
        }),
        benny.add("specificDimensions", () => {
            makeMatrix([2, 4, 2, 4, 2]);
        }),
        benny.add("specific & callback", () => {
            makeMatrix([2, 4, 2, 4, 2], vector => `my position is ${vector.join()}`);
        }),
        benny.cycle(),
        benny.complete(),
        isDiff ? { name: "skip" } : benny.save({ file: packageName, version })
    )
    .then(async ({ results }) => {
        if (!isDiff) {
            return;
        }

        const oldBenchmarkText = fs.readFileSync(`./benchmark/results/${packageName}.json`);
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

        console.log("\n");
        console.log(`Benchmark against currently published version (${version}):\n`);
        console.table(
            prettyDiffs.reduce((acc, { name, ...diff }) => {
                acc[name] = diff;
                return acc;
            }, {} as { [name: string]: Record<string, any> }),
            ["new", "old", "delta"]
        );

        if (!isInPullRequestAction) {
            return;
        }

        let body = `### Benchmark against currently published version:\n`;
        body += "| Key  | Current PR | Published version | Difference |\n";
        body += "| :--- | :--------: | :---------------: | :--------: |\n";
        prettyDiffs.forEach(diff => {
            body += `| ${diff.name} | ${diff.new}| ${diff.old} | ${diff.delta} |\n`;
        });

        const octokit = getOctokit(process.env.GITHUB_TOKEN ?? "");
        await octokit.rest.issues.createComment({
            issue_number: context.issue.number,
            owner: context.repo.owner,
            repo: context.repo.repo,
            body,
        });
    });

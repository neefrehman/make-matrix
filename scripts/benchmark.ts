/* eslint-disable no-console */
import * as fs from "fs";
import benny from "benny";
import makeMatrix from "../src/index";
import { name as packageName, version } from "../package.json";

const isDiff = process.argv[2] === "diff";

benny
    .suite(
        "make-matrix",
        benny.add("nDimensions", () => {
            makeMatrix(6);
        }),
        benny.add("specificDimensions", () => {
            makeMatrix([2, 4, 2, 4, 2]);
        }),
        benny.add("specificDimensions — callback", () => {
            makeMatrix([2, 4, 2, 4, 2], vector => `my position is ${vector.join()}`);
        }),
        benny.cycle(),
        benny.complete(),
        isDiff ? { name: "skip" } : benny.save({ file: packageName, version })
    )
    .then(({ results }) => {
        if (!isDiff) {
            return;
        }

        const oldBenchmarkText = fs.readFileSync(`./benchmark/results/${packageName}.json`);
        const oldBenchmark = JSON.parse(oldBenchmarkText.toString());
        const oldResults: typeof results = oldBenchmark.results;

        const diffs = results.map(result => {
            const oldResult = oldResults.find(oldResult => oldResult.name === result.name);
            return {
                name: result.name,
                diff: oldResult ? ((result.ops - oldResult.ops) / oldResult.ops) * 100 : 0,
            };
        });

        console.log(
            diffs
                .map(
                    ({ name, diff }) =>
                        `${name}: ${diff.toFixed(2)}% ${
                            diff > 0 ? "faster" : diff < 0 ? "slower" : "same"
                        }`
                )
                .join("\n")
        );

        const changed = diffs.filter(item => item.diff !== null);
        const average = changed.reduce((a, b) => a + b.diff, 0) / changed.length;

        console.log(
            `Average: ${average.toFixed(2)}% ${
                average > 0 ? "faster" : average < 0 ? "slower" : "same"
            }`
        );
    });

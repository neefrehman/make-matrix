import { describe, expect, test } from "vitest";

import { makeMatrix } from "../index";

const testCases = [[6], [1, 1], [3, 2, 3], [1, 4, 5, 2], [2, 4, 2, 4, 2]];

/** So cases can be used as both test titles and test values during a `test.each` run */
const iterativeTestCases = testCases.map(c => [c, c]);

describe("makeMatrix", () => {
  describe("no initial values", () => {
    test.each(iterativeTestCases)("%p", dimensions => {
      expect(makeMatrix(dimensions)).toMatchSnapshot();
    });
  });

  describe("string initial values", () => {
    test.each(iterativeTestCases)("%p", dimensions => {
      expect(makeMatrix(dimensions, "string")).toMatchSnapshot();
    });
  });

  describe("number initial values", () => {
    test.each(iterativeTestCases)("%p", dimensions => {
      expect(makeMatrix(dimensions, 0)).toMatchSnapshot();
    });
  });

  describe("callback initial values — math", () => {
    test.each(iterativeTestCases)("%p", dimensions => {
      expect(makeMatrix(dimensions, () => 10 - 2)).toMatchSnapshot();
    });
  });

  describe("self aware callback initial values", () => {
    test.each(iterativeTestCases)("%p", dimensions => {
      expect(makeMatrix(dimensions, vector => vector)).toMatchSnapshot();
    });
  });
});

import { assertType, describe, expect, test } from "vitest";

import { makeMatrix } from "../index";
import type { Matrix, Vector } from "../types";

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

describe("types", () => {
  test("Vector", () => {
    assertType<Vector<[1, 1, 1, 1]>>([0, 0, 0, 0]);

    // @ts-expect-error
    assertType<Vector<[1, 1, 1, 1]>>([0, 0, 0, 0, 0]);
    // @ts-expect-error
    assertType<Vector<[1, 1, 1, 1]>>([0, 0, 0]);
  });

  test("Matrix", () => {
    assertType<Matrix<[1], "test">>(["test"]);
    assertType<Matrix<[1, 1], "test">>([["test"], ["test"]]);
    assertType<Matrix<[1, 1], number>>([[2], [1]]);

    // @ts-expect-error
    assertType<Matrix<[1, 1], "test">>(["test", "test"]);
  });

  test("makeMatrix", () => {
    assertType<string[][][][]>(makeMatrix([1, 1, 1, 1], "hello"));
    assertType<number[][]>(makeMatrix([4, 5], ([a]) => a));
    assertType<string[]>(makeMatrix([4], v => v[0]?.toString()));
    assertType<unknown[]>(makeMatrix([] as number[]));

    assertType<(0 | 1)[]>(
      makeMatrix([1], () => (Math.random() > 0.5 ? (0 as const) : (1 as const)))
    );

    assertType<{ x: number; y: number; z: number }[][][]>(
      makeMatrix([4, 5, 6], ([x, y, z]) => ({ x, y, z }))
    );
  });
});

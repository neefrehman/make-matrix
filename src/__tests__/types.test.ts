import { assertType, test, describe } from "vitest";
import { makeMatrix } from "../index";

describe("assert types", () => {
  test("resolves to the correct type", () => {
    assertType<string[][][][]>(makeMatrix([1, 1, 1, 1], "hello"));
    assertType<number[][]>(makeMatrix([4, 5], ([a]) => a));
    assertType<string[]>(makeMatrix([4], v => v[0].toString()));
    assertType<unknown[]>(makeMatrix([] as number[]));

    assertType<(0 | 1)[]>(
      makeMatrix([1], () => (Math.random() > 0.5 ? (0 as const) : (1 as const)))
    );

    assertType<{ x: number; y: number; z: number }[][][]>(
      makeMatrix([4, 5, 6], ([x, y, z]) => ({ x, y, z }))
    );
  });
});

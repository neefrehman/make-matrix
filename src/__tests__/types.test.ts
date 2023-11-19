import { makeMatrix } from "../index";

const expectType = <Type>(_: Type) => void _;

describe("assert types", () => {
  it("resolves to the correct type", () => {
    expectType<string[][][][]>(makeMatrix([1, 1, 1, 1], "hello"));
    expectType<number[][]>(makeMatrix([4, 5], ([a]) => a));
    expectType<string[]>(makeMatrix([4], v => v[0].toString()));
    expectType<unknown[]>(makeMatrix([] as number[]));

    expectType<(0 | 1)[]>(
      makeMatrix([1], () => (Math.random() > 0.5 ? (0 as const) : (1 as const)))
    );

    expectType<{ x: number; y: number; z: number }[][][]>(
      makeMatrix([4, 5, 6], ([x, y, z]) => ({ x, y, z }))
    );
  });
});

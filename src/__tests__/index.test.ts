import makeMatrix from "../index";

describe("Assert types", () => {
  const expectType = <Type>(_: Type): void => void 0; // eslint-disable-line @typescript-eslint/no-unused-vars

  it("resolves to the correct type", () => {
    expectType<string[][][][]>(makeMatrix(4, "hello"));
    expectType<number[][]>(makeMatrix([4, 5], ([a]) => a));
    expectType<string[]>(makeMatrix([4], v => v[0].toString()));

    expectType<{ x: number; y: number; z: number }[][][]>(
      makeMatrix([4, 5, 6], ([x, y, z]) => ({ x, y, z }))
    );

    expectType<(0 | 1)[]>(
      makeMatrix([4], () => (Math.random() > 0.5 ? (0 as const) : (1 as const)))
    );

    expectType<any[]>(makeMatrix([] as number[]));
  });
});

const nDimensions = [1, 2, 3, 4, 5];
const specificDimensions = [[6], [1, 1], [3, 2, 3], [1, 4, 5, 2], [2, 4, 2, 4, 2]];

const describeCases = [
  { argType: "N", testCases: nDimensions.map(n => [n, n]) },
  { argType: "specific", testCases: specificDimensions.map(n => [n, n]) },
];

describe.each(describeCases)("arrays of $argType dimensions", ({ testCases }) => {
  describe("No initial values", () => {
    test.each(testCases)("%p", dimensions => {
      expect(makeMatrix(dimensions)).toMatchSnapshot();
    });
  });

  describe("string initial values", () => {
    test.each(testCases)("%p", dimensions => {
      expect(makeMatrix(dimensions, "string")).toMatchSnapshot();
    });
  });

  describe("number initial values", () => {
    test.each(testCases)("%p", dimensions => {
      expect(makeMatrix(dimensions, 0)).toMatchSnapshot();
    });
  });

  describe("callback initial values — math", () => {
    test.each(testCases)("%p", dimensions => {
      expect(makeMatrix(dimensions, () => 10 - 2)).toMatchSnapshot();
    });
  });

  describe("self aware callback initial values", () => {
    test.each(testCases)("%p", dimensions => {
      expect(makeMatrix(dimensions, vector => vector)).toMatchSnapshot();
    });
  });
});

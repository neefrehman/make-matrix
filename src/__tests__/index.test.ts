import makeMatrix from "../index";

/* eslint-disable @typescript-eslint/no-unused-vars */
const checkTypeCompilation = (vector: number[]) => {
  const matrix1: string[][][][] = makeMatrix(4, "hello");
  const matrix2: number[][] = makeMatrix([4, 5], ([a]) => a);
  const matrix3: string[] = makeMatrix([4], v => v[0].toString());
  const matrix4: any[] = makeMatrix(vector);
};
/* eslint-enable @typescript-eslint/no-unused-vars */

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

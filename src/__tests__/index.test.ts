import makeMatrix from "../index";

const nDimensionCases = [1, 2, 3, 4, 5];
const specificDimensionCases = [[6], [1, 1], [3, 2, 3], [1, 4, 5, 2], [2, 4, 2, 4, 2]];

// So cases can be used as test titles and test values
const prepareIterativeTestCases = (cases: any[]) => cases.map(c => [c, c]);

const describeCases = [
  { argType: "N", testCases: prepareIterativeTestCases(nDimensionCases) },
  { argType: "specific", testCases: prepareIterativeTestCases(specificDimensionCases) },
];

describe.each(describeCases)("arrays of $argType dimensions", ({ testCases }) => {
  describe("no initial values", () => {
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

module.exports = {
  transform: {
    "^.+\\.(t|j)s?$": "ts-jest",
  },
  cacheDirectory: ".jest-cache",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};

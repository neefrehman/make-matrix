import makeMatrix from "../index";

describe("validation", () => {
    test("should error when a float is used as a dimension", () => {
        expect(() => makeMatrix([1, 0.2, 3])).toThrow(TypeError);
    });
});

const nDimensions = [1, 2, 3, 4, 5];
const specificDimensions = [[6], [1, 1], [3, 2, 3], [1, 4, 5, 2], [2, 4, 2, 4, 2]];

const describeCases = [
    { argType: "N", testCases: nDimensions.map(n => [n, n]) },
    { argType: "specific", testCases: specificDimensions.map(n => [n, n]) },
];

describe.each(describeCases)("arrays of $argType dimensions —", ({ testCases }) => {
    describe("No initial values:", () => {
        test.each(testCases)("%p", dimensions => {
            // @ts-ignore — `Type instantiation is excessively deep...`
            expect(makeMatrix(dimensions)).toMatchSnapshot();
        });
    });

    describe("string initial values:", () => {
        test.each(testCases)("%p", dimensions => {
            // @ts-ignore — `Type instantiation is excessively deep...`
            expect(makeMatrix(dimensions, "string")).toMatchSnapshot();
        });
    });

    describe("number initial values:", () => {
        test.each(testCases)("%p", dimensions => {
            // @ts-ignore — `Type instantiation is excessively deep...`
            expect(makeMatrix(dimensions, 0)).toMatchSnapshot();
        });
    });

    describe("callback initial values — math:", () => {
        test.each(testCases)("%p", dimensions => {
            // @ts-ignore — `Type instantiation is excessively deep...`
            expect(makeMatrix(dimensions, () => 10 - 2)).toMatchSnapshot();
        });
    });

    describe("self aware callback initial values — vector:", () => {
        test.each(testCases)("%p", dimensions => {
            // @ts-ignore — `Type instantiation is excessively deep...`
            expect(makeMatrix(dimensions, vector => vector)).toMatchSnapshot();
        });
    });

    describe("self aware callback initial values — joined:", () => {
        test.each(testCases)("%p", dimensions => {
            expect(
                makeMatrix(dimensions, vector => `my position is ${vector.join()}`)
            ).toMatchSnapshot();
        });
    });

    describe("self aware callback initial values — object conversion:", () => {
        test.each(testCases)("%p", dimensions => {
            expect(
                // @ts-ignore — `Type instantiation is excessively deep...`
                makeMatrix(dimensions, ([x, y, z, a, b, c]) => ({ x, y, z, a, b, c }))
            ).toMatchSnapshot();
        });
    });
});

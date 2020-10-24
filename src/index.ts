/**
 * A multidimensional array returned by `makeMatrix` for over four dimensions.
 */
export type Matrix<T> = T[][][][][] | Matrix<T>[];

/**
 * Provides type safety for values as well as functions that return values
 * for `createMatrix`'s `initialValues` parameter.
 */
type ValueOrFunction<T> = T extends boolean
    ? boolean | (() => boolean) // To solve boolean expanding: https://github.com/microsoft/TypeScript/issues/30029
    : T extends any // from: https://github.com/microsoft/TypeScript/issues/37663
    ? T | (() => T)
    : never;

/**
 * Returns a matrix (multi-dimensional array) with your desired dimensions and
 * values.
 *
 * If a number is passed as the `dimensions` parameter, the smallest array with
 * that number of dimensions is returned. If an array of numbers is passed, the returned
 * matrix will be of those exact dimensions.
 *
 * @param dimensions `D`: The desired dimensions of the matrix. A number or array of numbers.
 * @param initialValues The value that each point in the matrix initialises to. Can also take a
 *  callback function which returns a value to fill the matrix dynamically. Defaults to `null`.
 *
 * @example
 * const twoDArray = makeMatrix(2); // A 2D array
 *
 * const threeXThreeXTwoArray = makeMatrix([3, 3, 2]); // An array of size 3x3x2
 *
 * const twoDNumberArray = makeMatrix([3, 5], 0); // A 3x5 array initialised to 0
 *
 * const threeDStringArray = makeMatrix([2, 6, 5], "hi"); // A 2x6x5 array initialised to "hi"
 *
 * const twoDRandomNumberArray = makeMatrix([1, 4], () => Math.random()); // A 1x4 array initialised with random numbers
 */
function makeMatrix<T>(
    dimensions: 1 | [number],
    initialValues?: ValueOrFunction<T> | null
): T[];

function makeMatrix<T>(
    dimensions: 2 | [number, number],
    initialValues?: ValueOrFunction<T> | null
): T[][];

function makeMatrix<T>(
    dimensions: 3 | [number, number, number],
    initialValues?: ValueOrFunction<T> | null
): T[][][];

function makeMatrix<T>(
    dimensions: 4 | [number, number, number, number],
    initialValues?: ValueOrFunction<T> | null
): T[][][][];

function makeMatrix<T>(
    dimensions: number | number[],
    initialValues?: ValueOrFunction<T> | null
): Matrix<T>;

function makeMatrix<T>(
    dimensions: number | number[],
    initialValues: ValueOrFunction<T> | null = null
): Matrix<T> {
    let currentDimensionLength: number;
    let remainingDimensions: number | number[];
    let needsRecursion: boolean;

    if (typeof dimensions === "number") {
        currentDimensionLength = dimensions;
        remainingDimensions = dimensions - 1;
        needsRecursion = remainingDimensions > 0;
    } else {
        currentDimensionLength = dimensions[0];
        remainingDimensions = dimensions.slice(1);
        needsRecursion = remainingDimensions.length > 0;
    }

    if (!Number.isInteger(currentDimensionLength)) {
        throw new TypeError(`Dimensions must be integers`);
    }

    // Spread operator used as as constructed array's can't be mapped:
    // https://itnext.io/heres-why-mapping-a-constructed-array-doesn-t-work-in-javascript-f1195138615a
    const currentMatrix = [...Array(currentDimensionLength)];

    const finalMatrix = needsRecursion
        ? currentMatrix.map(() =>
              makeMatrix(remainingDimensions, initialValues)
          )
        : currentMatrix.map(() => {
              return typeof initialValues === "function"
                  ? initialValues()
                  : initialValues;
          });

    return finalMatrix;
}

export default makeMatrix;

/**
 * A multidimensional array returned by `makeMatrix` for over four dimensions.
 */
export type Matrix<T> = T[][][][][] | Matrix<T>[];

/**
 * Returns a matrix (multi-dimensional array) with your desired dimensions and values.
 *
 * If a number is passed to the `dimensions` parameter, the smallest array with
 * that number of dimensions is returned. If an array is passed, the returned
 * matrix will be of those exact dimensions. For example, passing in `[3, 2, 5]`
 * will result in a three-dimensional array that is 3x2x5 in size.
 *
 * @param dimensions - The desired dimensions of the matrix. A number or array of numbers.
 * @param initialValues - The value that each point in the matrix initialises to. Can be anything. Defaults to `null`.
 * @returns A matrix of `N` dimensions, with each point initialised to the `initialValues` parameter.
 */
function makeMatrix<T>(dimensions: 1 | [number], initialValues?: T): T[];

function makeMatrix<T>(
    dimensions: 2 | [number, number],
    initialValues?: T
): T[][];

function makeMatrix<T>(
    dimensions: 3 | [number, number, number],
    initialValues?: T
): T[][][];

function makeMatrix<T>(
    dimensions: 4 | [number, number, number, number],
    initialValues?: T
): T[][][][];

function makeMatrix<T>(
    dimensions: number | number[],
    initialValues?: T
): Matrix<T>;

function makeMatrix<T>(
    dimensions: number | number[],
    initialValues: T | null = null
): Matrix<T> {
    let currentDimensionWidth: number;
    let remainingDimensions: number | number[];
    let needsRecursion: boolean;

    if (typeof dimensions === "number") {
        currentDimensionWidth = dimensions;
        remainingDimensions = dimensions - 1;
        needsRecursion = remainingDimensions > 0;
    } else {
        currentDimensionWidth = dimensions[0];
        remainingDimensions = dimensions.slice(1);
        needsRecursion = remainingDimensions.length > 0;
    }

    const currentMatrix = Array(currentDimensionWidth).fill(initialValues);

    const finalMatrix = needsRecursion
        ? currentMatrix.map(() =>
              makeMatrix(remainingDimensions, initialValues)
          )
        : currentMatrix;

    return finalMatrix;
}

export default makeMatrix;

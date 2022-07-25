import type { Matrix, ValueOrFunction, Vector } from "./types";

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
 * const threeXThreeXTwoArray = makeMatrix([3, 3, 2]); // An array of size 3x3x2
 * const twoDNumberArray = makeMatrix([3, 5], 0); // A 3x5 array initialised to 0
 * const twoDRandomNumberArray = makeMatrix([1, 4], () => Math.random()); // A 1x4 array initialised with random numbers
 * const twoDVectorArray = makeMatrix([3, 3], vector => vector.join()); // A 3x3 array initialised with each point's co-ordinate as a string
 */
const makeMatrix = <D extends number, T>(
    dimensions: D | Vector<D>,
    initialValues: ValueOrFunction<D, T> = null
): Matrix<D, T> => {
    const dimensionCount = typeof dimensions === "number" ? dimensions : dimensions.length;
    const initialPosition = Array(dimensionCount).fill(0) as Vector<D>;

    return _makeMatrix(dimensions, initialValues, initialPosition);
};

/**
 * Recursively creates a matrix, and keeps track of the current vector.
 */
function _makeMatrix<D extends number, T>(
    dimensions: D | Vector<D>,
    initialValues: ValueOrFunction<D, T> = null,
    currentPosition: Vector<D>
): Matrix<D, T> {
    let currentDimensionLength: number;
    let remainingDimensions: number | Vector;
    let remainingDimensionCount: number;

    if (typeof dimensions === "number") {
        currentDimensionLength = dimensions;
        remainingDimensions = dimensions - 1;
        remainingDimensionCount = remainingDimensions;
    } else {
        currentDimensionLength = dimensions[0] ?? 0;
        remainingDimensions = dimensions.slice(1);
        remainingDimensionCount = remainingDimensions.length;
    }

    if (!Number.isInteger(currentDimensionLength)) {
        throw new TypeError(`Dimension lengths must be integers`);
    }

    const currentDimension = currentPosition.length - 1 - remainingDimensionCount;
    const needsRecursion = remainingDimensionCount > 0;

    const matrix = [...Array(currentDimensionLength)].map((_, i) => {
        currentPosition[currentDimension] = i;
        return needsRecursion
            ? _makeMatrix(
                  remainingDimensions as typeof dimensions,
                  initialValues,
                  currentPosition
              )
            : initialValues instanceof Function
            ? initialValues(currentPosition.slice() as Vector<D>)
            : initialValues;
    });

    return matrix as Matrix<D, T>;
}

export default makeMatrix;

export { makeMatrix, type Matrix };

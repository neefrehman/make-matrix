import type { Matrix, Vector } from "./types.js";

/**
 * Creates a matrix (multi-dimensional array) with your desired dimensions and values.
 *
 * If a number is passed as the `dimensions` parameter, a matrix with that number of dimensions
 * is returned. If an array of numbers is passed, the returned matrix have those exact dimensions.
 *
 * @param dimensions    The desired dimensions of the matrix. A number or array of numbers.
 * @param initialValues The initial value for each point in the matrix. Can also take a callback function—with an argument that resolves to the current point's vector—to fill the matrix dynamically. Defaults to `null`.
 *
 * @example
 * const threeXThreeXTwoArray = makeMatrix([3, 3, 2]); // A 3x3x2 array
 * const twoDNumberArray = makeMatrix([3, 5], 0); // A 3x5 array containing 0
 * const twoDRandomNumberArray = makeMatrix([1, 4], () => Math.random()); // A 1x4 array containing random numbers
 * const twoDVectorArray = makeMatrix([3, 3], vector => vector.join()); // A 3x3 array containing each point's co-ordinate as a string
 */
const makeMatrix = <D extends number, T>(
  dimensions: Vector<D>,
  initialValues: T | ((currentPosition: Vector<D>) => T) | null = null
): Matrix<D, T> => {
  const initialPosition = Array(dimensions.length).fill(0) as Vector<D>;
  return _makeMatrix(dimensions, initialValues, initialPosition);
};

/**
 * Recursively creates a matrix (depth first), and keeps track of the current position's vector.
 */
function _makeMatrix<D extends number, T>(
  dimensions: Vector<D>,
  initialValues: T | ((currentPosition: Vector<D>) => T) | null,
  currentPosition: Vector<D>
): Matrix<D, T> {
  const [currentDimensionLength, ...remainingDimensions] = dimensions;
  const currentDimension = currentPosition.length - remainingDimensions.length - 1;

  return [...Array(currentDimensionLength)].map((_, i) => {
    currentPosition[currentDimension] = i;
    return remainingDimensions.length > 0
      ? _makeMatrix(remainingDimensions as Vector<D>, initialValues, currentPosition)
      : initialValues instanceof Function
      ? initialValues(currentPosition.slice() as Vector<D>)
      : initialValues;
  }) as Matrix<D, T>;
}

export { makeMatrix, type Matrix };

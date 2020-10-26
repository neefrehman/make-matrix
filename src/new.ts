// import { ValueOrFunction, Vector } from "./types";

// /**
//  * Returns a matrix (multi-dimensional array) with your desired dimensions and
//  * values.
//  *
//  * If a number is passed as the `dimensions` parameter, the smallest array with
//  * that number of dimensions is returned. If an array of numbers is passed, the returned
//  * matrix will be of those exact dimensions.
//  *
//  * @param dimensions `D`: The desired dimensions of the matrix. A number or array of numbers.
//  * @param initialValues The value that each point in the matrix initialises to. Can also take a
//  *  callback function which returns a value to fill the matrix dynamically. Defaults to `null`.
//  *
//  * @example
//  * const twoDArray = makeMatrix(2); // A 2D array
//  *
//  * const threeXThreeXTwoArray = makeMatrix([3, 3, 2]); // An array of size 3x3x2
//  *
//  * const twoDNumberArray = makeMatrix([3, 5], 0); // A 3x5 array initialised to 0
//  *
//  * const threeDStringArray = makeMatrix([2, 6, 5], "hi"); // A 2x6x5 array initialised to "hi"
//  *
//  * const twoDRandomNumberArray = makeMatrix([1, 4], () => Math.random()); // A 1x4 array initialised with random numbers
//  */
// const makeMatrix = <D extends number, T>(
//     dimensions: number | Vector<D>,
//     initialValues: ValueOrFunction<D, T> = null
// ): Matrix<D, T> => {
//     const dimensionCount =
//         typeof dimensions === "number" ? dimensions : dimensions.length;
//     const intialPosition = Array(dimensionCount).fill(0) as Vector<D>;

//     return _makeMatrix(dimensions, initialValues, intialPosition) as Matrix<D, T>;
// };

// function _makeMatrix<D extends number, T>(
//     dimensions: number | Vector<D>,
//     initialValues: ValueOrFunction<D, T> = null,
//     currentPosition: Vector<D>
// ): Matrix<D, T> {
//     let currentDimensionLength: number;
//     let remainingDimensions: number | Vector;
//     let remainingDimensionCount: number;
//     let needsRecursion: boolean;

//     if (typeof dimensions === "number") {
//         currentDimensionLength = dimensions;
//         remainingDimensions = dimensions - 1;
//         remainingDimensionCount = remainingDimensions;
//         needsRecursion = remainingDimensions > 0;
//     } else {
//         currentDimensionLength = dimensions[0];
//         remainingDimensions = dimensions.slice(1);
//         remainingDimensionCount = remainingDimensions.length;
//         needsRecursion = remainingDimensions.length > 0;
//     }

//     if (!Number.isInteger(currentDimensionLength)) {
//         throw new TypeError(`Dimensions must be integers`);
//     }

//     const currentDimension = currentPosition.length - 1 - remainingDimensionCount;

//     const finalMatrix = [...Array(currentDimensionLength)].map((_, i) => {
//         currentPosition[currentDimension] = i;
//         return needsRecursion
//             ? _makeMatrix(remainingDimensions, initialValues, currentPosition)
//             : typeof initialValues === "function" // @ts-expect-error: "expression is not callable" https://github.com/microsoft/TypeScript/issues/37663
//             ? initialValues(currentPosition.slice())
//             : initialValues;
//     });

//     return finalMatrix as Matrix<D, T>;
// }

// export default makeMatrix;

// type Matrix<D extends number, T> = D extends 1
//     ? T[]
//     : D extends 2
//     ? T[][]
//     : D extends 3
//     ? T[][][]
//     : D extends 4
//     ? T[][][][]
//     : D extends 5
//     ? T[][][][][]
//     : any[][][][][][]; // TODO: full type safety?

// // const m1: number[][] = makeMatrix([1, 1]); // FIXME: https://github.com/microsoft/TypeScript/issues/40081

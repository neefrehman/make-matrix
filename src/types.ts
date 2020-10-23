/**
 * A vector point of to up to any dimension.
 * Adding the generic `D` will set the number of dimensions
 *
 * @example
 * const vector2D: Vector<2> = [1, 3]
 * const vector4D: Vector<4> = [1, 1, 3, 9]
 * const vectorAnyD: Vector = [1, 3, 9, 0,..., 4]
 */
export interface Vector<D extends number = any> extends Array<number> {
    0?: number;
    length: D;
} // Follow: https://github.com/microsoft/TypeScript/issues/26223

/**
 * Provides type safety for values as well as functions that return values
 * for `createMatrix`'s `initialValues` parameter.
 */
export type ValueOrFunction<T> = T extends boolean
    ? boolean | (() => boolean) // To solve boolean expanding: https://github.com/microsoft/TypeScript/issues/30029
    : T extends any // from: https://github.com/microsoft/TypeScript/issues/37663
    ? T | (() => T)
    : never;

/**
 * A multidimensional array returned by `createMatrix`. Provides type-safety up
 * to 5 dimensions. Above 5 dimensions, it's reccomended you annotate your
 * variables for more safety.
 */
export type Matrix<D extends number, T> = D extends 1
    ? T[]
    : D extends 2
    ? T[][]
    : D extends 3
    ? T[][][]
    : D extends 4
    ? T[][][][]
    : D extends 5
    ? T[][][][][]
    : any[][][][][][]; // TODO: Full type safety?

/**
 *
 * A multidimensional array returned by `makeMatrix` for over four dimensions.
 */
export type MatrixOld<T> = T[][][][][] | MatrixOld<T>[];

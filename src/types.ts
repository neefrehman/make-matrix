/**
 * A multidimensional array returned by `makeMatrix` for over four dimensions.
 */
export type Matrix<T> = T[][][][][] | Matrix<T>[];

/**
 * An array of numbers with defined length, corresponding to points in a matrix
 */
export interface Vector<D extends number = any> extends Array<number> {
    // @ts-expect-error: fix for required array property
    0?: number;
    length: D; // Follow: https://github.com/microsoft/TypeScript/issues/26223
}

/**
 * Provides type safety for values as well as functions that return values
 * for `createMatrix`'s `initialValues` parameter.
 */
export type ValueOrFunction<D extends number, T> =
    | T
    | ((vector: Vector<D>) => T)
    | null;

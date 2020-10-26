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

// Removed as it would cause the vector parameter to have a type of any instead of Vector
// export type ValueOrFunction<D extends number, T> =
//     | (T extends boolean
//           ? boolean | SelfAwareCallback<D, boolean> // To solve boolean expansion: https://github.com/microsoft/TypeScript/issues/30029
//           : T extends any // To solve non-callable expression bug: https://github.com/microsoft/TypeScript/issues/37663
//           ? T | SelfAwareCallback<D, T>
//           : never)
//     | null;

/**
 * A typed multidimensional array returned by `makeMatrix`
 * @remarks literals will be widened to their primitive types
 */
export type Matrix<
    D extends number = 1,
    T = unknown,
    RecursionCount extends unknown[] = []
> = D extends RecursionCount["length"]
    ? WidenLiterals<T>
    : Matrix<D, T[], PlusOne<RecursionCount>>;

/**
 * An array of numbers with defined length, corresponding to points in a matrix
 */
export interface Vector<D extends number = number> extends Array<number> {
    // @ts-ignore: fix for required array property
    0?: number;
    length: D; // Follow: https://github.com/microsoft/TypeScript/issues/26223
}

/**
 * Provides type safety for values as well as functions that return values
 * for `createMatrix`'s `initialValues` parameter.
 */
export type ValueOrFunction<D extends number, T = unknown> =
    | T
    | ((vector: Vector<D>) => T)
    | null;

/**
 * Expands literal types to their primitive
 */
type WidenLiterals<T> = T extends boolean
    ? boolean
    : T extends string
    ? string
    : T extends number
    ? number
    : T;

/**
 * Adds one to the length of an array
 */
type PlusOne<Array extends unknown[] = []> = [unknown, ...Array];

/**
 * A typed multidimensional array returned by `makeMatrix`
 * @remarks literals will be widened to their primitive types
 */
export type Matrix<
    D extends number = 1,
    T = unknown,
    RecursionCount extends unknown[] = []
> = number extends D
    ? MatrixOfUnknownDimensions
    : D extends RecursionCount["length"]
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
 * for `makeMatrix`'s `initialValues` parameter.
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

/**
 * When a Matrix is created without knowing it's exact size or number of dimensions, such
 * as when creating one dynamically, it's impossible recursively construct a type for it.
 * Instead, we short circuit the type to resolve to `any[]`, to avoid the typescript compiler
 * throwing an `type instantiation is excessively deep...` error. This ensures an array of
 * at least one dimension is returned, but unfortunately can't provide more safety than that.
 *
 * @example
 * const dynamicDimensions = [5, 5, 5] as number[]
 * const m = makeMatrix(dynamicDimensions); // will return `any[]`, to avoid a compiler error and a return type of `any`
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MatrixOfUnknownDimensions = any[];

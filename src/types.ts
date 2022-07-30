/**
 * A typed multidimensional array returned by `makeMatrix`
 * @remarks literals will be widened to their primitive types
 */
export type Matrix<D extends number = 1, T = unknown> = number extends D
    ? MatrixOfUnknownDimensions
    : _Matrix<D, WidenLiterals<T>, []>;

/**
 * Recursively constructs a `Matrix` type
 */
type _Matrix<
    D extends number = 1,
    T = unknown,
    RecursionCountArray extends unknown[] = []
> = number extends D
    ? MatrixOfUnknownDimensions
    : D extends RecursionCountArray["length"]
    ? T
    : _Matrix<D, T[], [...RecursionCountArray, unknown]>;

/**
 * When a Matrix is created without knowing it's exact size or number of dimensions, such
 * as when creating one dynamically, it's impossible recursively construct a type for it.
 * Instead, we short circuit the type to resolve to `any[]`, to avoid the typescript compiler
 * throwing a `type instantiation is excessively deep...` error. This ensures an array of
 * at least one dimension is returned, but unfortunately can't provide more safety than that.
 *
 * @example
 * const dynamicDimensions = [5, 5, 5] as number[];
 * const m = makeMatrix(dynamicDimensions); // will return `any[]`, to avoid a compiler error
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MatrixOfUnknownDimensions = any[];

/**
 * An array of numbers with defined length, corresponding to points in a matrix
 * Other implementations can be found at: https://github.com/microsoft/TypeScript/issues/26223
 */
export type Vector<D extends number> = [number, ...Array<number>] & { length: D };

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

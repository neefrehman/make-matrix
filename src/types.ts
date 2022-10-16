/**
 * A typed multidimensional array returned by `makeMatrix`.
 */
export type Matrix<D extends number, T = unknown> = Brand<_Matrix<D, T, []>>;

/**
 * Recursively constructs a `Matrix` type and keeps track of the number of recursions.
 *
 * @remarks
 * When a `_Matrix` is created without knowing it's exact size or number of dimensions, such
 * as when creating one dynamically, it's impossible recursively construct a type for it.
 * Instead, we short circuit the type to resolve to `any[]`, to avoid the typescript compiler
 * throwing a `type instantiation is excessively deep...` error. This ensures an array of at
 * least one dimension is returned, but unfortunately can't provide more safety than that.
 */
type _Matrix<
  D extends number,
  T = unknown,
  RecursionCountArray extends number[] = []
> = number extends D
  ? any[]
  : D extends RecursionCountArray["length"]
  ? T
  : _Matrix<D, T[], [...RecursionCountArray, D]>;

/**
 * An array of numbers with defined length, corresponding to points in a `Matrix`.
 *
 * @see {@link https://github.com/microsoft/TypeScript/issues/26223} for discussion and other
 * implementations, though this seems to be the only one that works properly for `makeMatrix`'s use case.
 *
 * @remarks
 * When a `Vector` is created without knowing the exact number of dimensions, such as when
 * creating one dynamically, we short circuit the type to resolve to `number[]` so that
 * `makeMatrix` can accept a dynamically created `dimensions` parameter.
 */
export type Vector<D extends number> = Brand<
  number extends D ? number[] : [number, ...number[]] & { readonly length: D }
>;

/**
 * Stops intellisense from expanding types and exposing their more complicated internals to users.
 *
 * @see {@link https://github.com/microsoft/TypeScript/issues/31940} for discussion
 */
// eslint-disable-next-line @typescript-eslint/ban-types
type Brand<D> = D & {};
